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
                document.getElementById(audio_id).muted = true;
                document.getElementById(audio_id).play();
                setTimeout(() => {
                    document.getElementById(audio_id).pause();
                    document.getElementById(audio_id).currentTime = 0;
                    document.getElementById(audio_id).muted = false;
                    }, 200);
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
            <div id={sound_row_id} className="sound_row h-[3.5vw] 
            w-full place-content-center flex flex-row place-items-center">
                <div id='labeling' className='w-min flex flex-row w-min'>
                    <span className = 'sound_title'>{this.props.soundrow_num}</span>
                    <input type="file" className="file_input hidden cursor-pointer" accept=".mp3, .wav, .m4a"
                        id={input_tag_id} onChange={loadAudioFile}/>
                    <label htmlFor={input_tag_id} className='border-white cursor-pointer text-white bg-black 
                    border-x-4 rounded-[0.3vw] p-[0.4vw] mx-[1.5vw] text-[1vw] w-[7vw]
                    align-middle h-[2.2vw] place-self-center whitespace-nowrap overflow-hidden' style={{borderColor:this.props.color}}> .upload. 🎶 </label>
                </div>

                <div id={sound_row_steps_id} className="sound_steps space-x-[1.2vw] h-[100%] w-[60%] flex flex-row place-items-center">
                    {Array.from({ length: 16 }, (_, i) => (
                        <Step key={i} stepNum={i + 1} soundRowNum={this.props.soundrow_num} color={this.props.color}/>
                    ))}
                </div>
                <audio className="hidden" id = {audio_id} controls>
                    <source src="" id={audio_file_src_id} />
                </audio>
            </div>
        )
    }
}

export default SoundRow