import React, { useState } from 'react';

import Step from "./step.js"

class SoundRow extends React.Component {

    render(){

        const sound_row_id = "sound" + this.props.soundrow_num;
        const sound_row_steps_id = "sound" + this.props.soundrow_num + "_steps";
        const audio_id = "sound" + this.props.soundrow_num + "_file";
        const audio_file_src_id = "sound" + this.props.soundrow_num + "_src";
        const input_tag_id = "sound" + this.props.soundrow_num + "_input";

        function loadAudioFile(e){
            if (e.target.files[0]) {
                document.getElementById(audio_file_src_id).setAttribute('src', URL.createObjectURL(e.target.files[0]));
                document.getElementById(audio_id).load();
                e.target.labels[0].innerHTML = e.target.files[0].name.slice(0,9) + '...';
            }
            else{
                e.target.labels[0].innerHTML = " Upload 🎶 ➡ ";
                return;
            }

        }

        // eventually, make it so that user can select portion of uploaded file to have as audio. 
        // default is beginning 100-300ms of uploaded file
        // allow user to preview the sound. this should all be in a popup. autoplay this? 

        // in the future make a function for the number of steps (option between 8, 16, 32, and 64)

        //in the FUTURE, allow people to record a sound from computer mic or phone mic

        return (
            <div id={sound_row_id} className = "sound_row inline-block h-[3.5vw]">
                <span className = 'sound_title'>{this.props.soundrow_num}</span>
                <input type="file" className="file_input hidden cursor-pointer" accept=".mp3, .wav, .m4a"
                    id={input_tag_id} onChange={loadAudioFile}/>
                <label htmlFor={input_tag_id} className='cursor-pointer text-black bg-white rounded-[0.3vw] 
                    p-[0.4vw] mx-[1.5vw] text-[1vw] inline-block w-[7.5vw] align-middle h-[2.2vw]'> Upload 🎶 ➡ </label>
                <div id={sound_row_steps_id} className = "sound_steps space-x-[0.8vw] inline-block h-full align-items-center justify-content-center place-self-center">
                    <Step stepNum={1} soundRowNum={this.props.soundrow_num}/>
                    <Step stepNum={2} soundRowNum={this.props.soundrow_num}/>
                    <Step stepNum={3} soundRowNum={this.props.soundrow_num}/>
                    <Step stepNum={4} soundRowNum={this.props.soundrow_num}/>
                    <Step stepNum={5} soundRowNum={this.props.soundrow_num}/>
                    <Step stepNum={6} soundRowNum={this.props.soundrow_num}/>
                    <Step stepNum={7} soundRowNum={this.props.soundrow_num}/>
                    <Step stepNum={8} soundRowNum={this.props.soundrow_num}/>
                    <Step stepNum={9} soundRowNum={this.props.soundrow_num}/>
                    <Step stepNum={10} soundRowNum={this.props.soundrow_num}/>
                    <Step stepNum={11} soundRowNum={this.props.soundrow_num}/>
                    <Step stepNum={12} soundRowNum={this.props.soundrow_num}/>
                    <Step stepNum={13} soundRowNum={this.props.soundrow_num}/>
                    <Step stepNum={14} soundRowNum={this.props.soundrow_num}/>
                    <Step stepNum={15} soundRowNum={this.props.soundrow_num}/>
                    <Step stepNum={16} soundRowNum={this.props.soundrow_num}/>
                </div>
                <audio className="hidden" id = {audio_id} controls>
                    <source src="" id={audio_file_src_id} />
                </audio>
            </div>
        )
    }
}

export default SoundRow