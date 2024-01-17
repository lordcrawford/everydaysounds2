import React, { useState, setState, useEffect } from 'react';

class Player extends React.Component {

    render(){

        // use constructors with a playing state and pause

        function playSounds(e){
            // loop through all columns over and over w highlightColumn and playSoundsInColumn functions
            // playSoundsInColumn(2)
        }

        // function highlightColumn(col){
        //     const steps = document.getElementsByClassName('step'+col)
        //     for(var step of steps){
        //         step.classList.toggle('step_played')
        //     }
        // }

        function unhighlightColumn(col){

        }

        function playSoundsInColumn(col){
            // include play and pause, based this on tempo

            const steps = document.getElementsByClassName('step'+col)
            for(var step of steps){
                step.classList.toggle('step_played')
                if(step.dataset.clicked === 'true'){
                    const sound = document.getElementById('sound' + step.dataset.soundRow + '_file')
                    sound.play();
                    setTimeout(() => {
                        sound.pause();
                        sound.currentTime = 0;
                      }, 150);
                }
            }
        }



        function stop(e){

        }

        //separately be able to control volume of audio

        //use playbackrate to control tempo

        return (
            <div className='space-x-[2vw] mt-[5%]'>
                <button id="play" className='border-white border-2' onClick={playSounds}> Play </button>
                <button id="stop" className='border-white border-2'stop_on = "false"> Stop </button>
            </div>
        )
    }
}

export default Player