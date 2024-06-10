import React, { useState, setState} from 'react';

const Player = () => {

    // use constructors with a playing state and pause

    var playing = false;
    var col_to_play = 1;
    var tempo = 200;

    function playSounds(e){
        playing = !playing;
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

    function playSoundsInColumn(col){

        const steps = document.getElementsByClassName('step'+col)
        for(var step of steps){
            const sound_input = document.getElementById('sound' + step.dataset.soundRow + '_input');

            // checks that step is clicked and sound file is loaded before playing the sound
            if((step.dataset.clicked === 'true') && (sound_input.value !== '')){
                console.log('should play' + col)
                const sound = document.getElementById('sound' + step.dataset.soundRow + '_file')
                sound.play();
                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                    }, tempo);
            }
        }
    }


    function stop(e){
        playing = false;

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
        playing = false;
        // clears clicks
        for(let col = 1; col < 17; col++){
            const steps_to_clear = document.getElementsByClassName('step'+(col))
            for(var step of steps_to_clear){
                step.dataset.clicked = false;
                step.classList.remove('step_clicked')
                step.classList.remove('step_played')
                step.children[0].classList.remove('hidden-circle')
            }
        }
        col_to_play = 1;
    }

    //separately be able to control volume of audio

    //use playbackrate to control tempo

    return (
        <div className='space-x-[2vw] mt-[3%] text-center text-white'>
            <button id="play" className='bg-black border-[#00FBFB] border-x-4 rounded-[1.5vw] p-[1vw]' onClick={playSounds}> play </button>
            <button id="stop" className='bg-black border-[#00FBFB] border-x-4 rounded-[1.5vw] p-[1vw]' onClick={stop}> stop </button>
            <button id="clear" className='bg-black border-[#00FBFB] border-x-4 rounded-[1.5vw] p-[1vw]' onClick={clear}> clear </button>
        </div>
    )
}

export default Player