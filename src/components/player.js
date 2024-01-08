import React, { useState } from 'react';

class Player extends React.Component {

    render(){

        // use constructors with a playing state and pause

        function playSounds(e){
            // loop through all columns over and over w highlightColumn and playSoundsInColumn functions
        }

        function highlightColumn(col){

        }

        function playSoundsInColumn(col){
            // include play and pause, based this on tempo
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