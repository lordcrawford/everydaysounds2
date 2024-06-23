// raysAnimation.js

export const startRaysAnimation = () => {
    const canvas = document.getElementById('backgroundCanvas');
    const ctx = canvas.getContext('2d');
    const rays = [];
    const orbs = [];
    const numRays = 70;
    const rayLength = Math.max(canvas.width, canvas.height);

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Function to create a new ray with initial properties
    const createRay = () => {
        const side = Math.floor(Math.random() * 4); // Random side (0=top, 1=right, 2=bottom, 3=left)
        let startX, startY, angle;

        switch (side) {
            case 0: // Top
                startX = Math.random() * canvas.width;
                startY = -rayLength;
                angle = Math.random() * Math.PI + Math.PI / 2; // Angle pointing downwards
                break;
            case 1: // Right
                startX = canvas.width + rayLength;
                startY = Math.random() * canvas.height;
                angle = Math.random() * Math.PI + Math.PI; // Angle pointing leftwards
                break;
            case 2: // Bottom
                startX = Math.random() * canvas.width;
                startY = canvas.height + rayLength;
                angle = Math.random() * Math.PI - Math.PI / 2; // Angle pointing upwards
                break;
            case 3: // Left
                startX = -rayLength;
                startY = Math.random() * canvas.height;
                angle = Math.random() * Math.PI * 2; // Random angle
                break;
            default:
                break;
        }

        const speed = Math.random() * 2 + 1; // Random speed for variation

        return { startX, startY, angle, speed };
    };

    // Function to calculate intersection point between two rays
    const getIntersection = (ray1, ray2) => {
        const x1 = ray1.startX;
        const y1 = ray1.startY;
        const x2 = ray1.startX + Math.cos(ray1.angle) * rayLength;
        const y2 = ray1.startY + Math.sin(ray1.angle) * rayLength;
        const x3 = ray2.startX;
        const y3 = ray2.startY;
        const x4 = ray2.startX + Math.cos(ray2.angle) * rayLength;
        const y4 = ray2.startY + Math.sin(ray2.angle) * rayLength;

        // Calculate intersection point using line equations
        const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (denominator === 0) return null; // Parallel lines

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator;

        if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
            const intersectionX = x1 + t * (x2 - x1);
            const intersectionY = y1 + t * (y2 - y1);
            return { x: intersectionX, y: intersectionY };
        }

        return null;
    };

    // Initialize rays
    for (let i = 0; i < numRays; i++) {
        rays.push(createRay());
    }

    const drawRays = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        rays.forEach(ray => {
            const endX = ray.startX + Math.cos(ray.angle) * rayLength;
            const endY = ray.startY + Math.sin(ray.angle) * rayLength;
            ctx.beginPath();
            ctx.moveTo(ray.startX, ray.startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
        });

        // Draw orbs at intersection points
        orbs.forEach(orb => {
            ctx.beginPath();
            ctx.arc(orb.x, orb.y, 5, 0, Math.PI * 2);
            ctx.fillStyle = '#04C9C9';
            ctx.fill();
        });
    };

    const animateRays = () => {
        const newOrbs = []; // Temp array to store new orbs for this frame

        // Check for intersections between rays
        for (let i = 0; i < rays.length; i++) {
            for (let j = i + 1; j < rays.length; j++) {
                const intersection = getIntersection(rays[i], rays[j]);
                if (intersection) {
                    newOrbs.push(intersection); // Add intersection point to newOrbs array
                }
            }
        }

        orbs.length = 0; // Clear orbs array
        orbs.push(...newOrbs); // Update orbs array with newOrbs

        rays.forEach(ray => {
            // Update ray position based on its angle and speed
            ray.startX += Math.cos(ray.angle) * ray.speed;
            ray.startY += Math.sin(ray.angle) * ray.speed;

            // Remove ray if it goes out of bounds
            if (ray.startX < -rayLength || ray.startX > canvas.width + rayLength ||
                ray.startY < -rayLength || ray.startY > canvas.height + rayLength) {
                rays[rays.indexOf(ray)] = createRay(); // Replace with a new ray entering from the opposite side
            }
        });

        drawRays();
        requestAnimationFrame(animateRays);
    };

    animateRays();

    return () => {
        window.removeEventListener('resize', resizeCanvas);
    };
};
