import React, { useState } from 'react';

import Step from "./step.js"

class SoundRow extends React.Component {

    render(){

        const sound_row_id = "sound" + this.props.soundrow_num;
        const audio_id = "sound" + this.props.soundrow_num + "_file";
        const audio_file_src_id = "sound" + this.props.soundrow_num + "_src";

        function loadAudioFile(e){
            if (e.target.files[0]) {
                document.getElementById(audio_file_src_id).setAttribute('src', URL.createObjectURL(e.target.files[0]));
                document.getElementById(audio_id).load();
            }
        }

        // eventually, make it so that user can select portion of uploaded file to have as audio. 
        // default is beginning 100-300ms of uploaded file
        // allow user to preview the sound. this should all be in a popup. autoplay this? 

        // in the future make a function for the number of steps (option between 8, 16, 32, and 64)

        return (
            <div id={sound_row_id} className = "sound_row inline-block">
                <span className = 'sound_title'>{this.props.soundrow_num}</span>
                <input type="file" className="file_input w-[17%] text-[0.8vw]" accept=".mp3, .wav, .m4a"
                    onChange={loadAudioFile}/>
                <div className = "sound_steps space-x-[0.8vw] inline-block">
                    <Step/>
                    <Step/>
                    <Step/>
                    <Step/>
                    <Step/>
                    <Step/>
                    <Step/>
                    <Step/>
                    <Step/>
                    <Step/>
                    <Step/>
                    <Step/>
                    <Step/>
                    <Step/>
                    <Step/>
                    <Step/>
                </div>
                <audio className="hidden" id = {audio_id} controls>
                    <source src="" id={audio_file_src_id} />
                </audio>
            </div>
        )
    }
}

export default SoundRow