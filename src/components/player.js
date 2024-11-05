import React, { useRef } from 'react';

const Player = ({ loadSampleSound }) => {

    // use constructors with a playing state and pause

    var playing = false;
    var col_to_play = 1;
    var tempo = 200;
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const playButtonRef = useRef(null); // Ref for play button

    function playSounds(e){
        audioCtx.resume();
        playing = !playing;

        // Change button text based on playing status
        if (playButtonRef.current) {
            playButtonRef.current.innerHTML = playing ? 'pause ⏸️' : 'play ▶️';
        }

        if (playing){
            playColumns()
        }
    }

    function playColumns(){
        // clear last column played
        if(col_to_play > 1){
            toggleHighlight(col_to_play-1)
        }

        // set back to beginning once reaching end
        if(col_to_play === 17){
            col_to_play = 1
        }

        toggleHighlight(col_to_play)
        playSoundsInColumn(col_to_play)

        col_to_play++

        setTimeout(function(){
            if(!playing){return}
            playColumns()}, tempo);
    }

    function toggleHighlight(col_to_highlight){
        // clears highlights on columns playing/played
        for(let col = 1; col < 17; col++){
            const steps_to_clear = document.getElementsByClassName('step'+(col))
            for(var step of steps_to_clear){
                step.classList.remove('step_played')
                step.children[0].classList.remove('hidden-circle')
            }
        }

        const steps = document.getElementsByClassName('step'+col_to_highlight)
        for(var step of steps){
            step.classList.toggle('step_played')
            step.children[0].classList.toggle('hidden-circle')
        }
    }

    function playSoundsInColumn(col) {
        const steps = Array.from(document.getElementsByClassName('step' + col));
    
        steps.forEach((step) => {
            const soundRow = step.dataset.soundRow;
            const audioBuffer = document.getElementById(`sound${soundRow}_file`).audioBuffer;
    
            if (step.dataset.clicked === 'true' && audioBuffer) {
                console.log(audioBuffer) 
                const source = audioCtx.createBufferSource();
                source.buffer = audioBuffer;
                source.connect(audioCtx.destination);
                source.start(audioCtx.currentTime, 0, tempo / 1000);
            }
        });
    }


    function stop(e){
        playing = false;
        playButtonRef.current.innerHTML = 'play ▶️';
        // clears highlights on columns playing/played
        for(let col = 1; col < 17; col++){
            const steps_to_clear = document.getElementsByClassName('step'+(col))
            for(var step of steps_to_clear){
                step.classList.remove('step_played')
                step.children[0].classList.remove('hidden-circle')
            }
        }

        col_to_play = 1;
    }

    function clear(e) {
        window.location.reload(true)
    }

    return (
        <div className='flex flex-col md:flex-row md:items-center md:space-x-4 mt-[3%] text-center text-white select-none'>
            {/* Group the first three buttons */}
            <div className='flex space-x-4 justify-center'>
                <button id="play" ref={playButtonRef} className='bg-black hover:border-[#FF69B4] border-[#00FBFB] border-x-4 w-[25vw] lg:w-[9vw] md:w-[12vw] md:rounded-[1.5vw] p-[1vw]' onClick={playSounds}> play ▶️</button>
                <button id="stop" className='bg-black hover:border-[#FF69B4] border-[#00FBFB] border-x-4 rounded-[1.5vw] p-[1vw]' onClick={stop}> stop ⏹️</button>
                <button id="clear" className='bg-black hover:border-[#FF69B4] border-[#00FBFB] border-x-4 rounded-[1.5vw] p-[1vw]' onClick={clear}> clear 🔄</button>
            </div>

            {/* Sample sound button only on a new line on mobile */}
            <button id="sample" className='bg-black hover:border-fuchsia-700 border-fuchsia-400 border-x-4 rounded-[1.5vw] p-[1vw] mt-4 md:mt-0' onClick={loadSampleSound}>
                use row 1 sample sound ⭐
            </button>
        </div>
    )
}

export default Player