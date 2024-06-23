// orbsAnimation.js

export const startOrbsAnimation = () => {
    const canvas = document.getElementById('backgroundCanvas');
    const ctx = canvas.getContext('2d');

    const stars = [];
    const numStars = 100;

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 10,
            vx: Math.random() * 0.5 - 0.25,
            vy: Math.random() * 0.5 - 0.25
        });
    }

    const drawStars = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black'; 
        ctx.beginPath();
        stars.forEach(star => {
            ctx.moveTo(star.x, star.y);
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        });
        ctx.fill();
    };

    const updateStars = () => {
        stars.forEach(star => {
            star.x += star.vx;
            star.y += star.vy;

            if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
            if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;
        });
    };

    const animate = () => {
        drawStars();
        updateStars();
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
        window.removeEventListener('resize', resizeCanvas);
    };
};