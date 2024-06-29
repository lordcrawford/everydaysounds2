import React from 'react';

import Step from "./step.js"
import './sound_row.css';


class SoundRow extends React.Component {

    render(){

        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext();

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
                e.target.labels[0].innerHTML = " .upload. 💁🏾‍♂️ ";
                return;
            }
        }
        
        return (
            <div id={sound_row_id} className="sound_row h-[4.5vw] 
            md:place-content-center md:p-0 py-[40px] pr-[50px] flex place-items-center text-center ">
                <div id='labeling' className='flex select-none'>
                    <span className = 'sound_title'>{this.props.soundrow_num}</span>
                    <input type="file" className="file_input hidden cursor-pointer" accept=".mp3, .wav, .m4a"
                        id={input_tag_id} onChange={loadAudioFile}/>
                    <label htmlFor={input_tag_id} className='input_box cursor-pointer text-white bg-black 
                    border-x-4 rounded-[0.3vw] p-[0.4vw] mx-[1.5vw] text-[1vw] w-[7vw]
                    align-middle h-[2.2vw] hover:animate-pulse place-self-center whitespace-nowrap 
                    overflow-hidden' style={{borderColor:this.props.color}}> .upload. 🙇🏾‍♂️ </label>
                </div>

                <div id={sound_row_steps_id} className="sound_steps space-x-[5vw] md:space-x-[1vw] flex">
                    {Array.from({ length: 16 }, (_, i) => (
                        <Step key={i} stepNum={i + 1} soundRowNum={this.props.soundrow_num} color={this.props.color}/>
                    ))}
                </div>
                <audio className="hidden" id = {audio_id} controls autoplay>
                    <source src="" id={audio_file_src_id} />
                </audio>
            </div>
        )
    }
}

export default SoundRow