import React from 'react';

import Step from "./step.js"
import './sound_row.css';


class SoundRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            audioCtx: null,
            audioFileLoaded: false,
        };
    }

    componentDidMount() {
        // Only set loadSampleSound if setLoadSampleSound prop is provided
        if (this.props.setLoadSampleSound) {
            this.props.setLoadSampleSound(this.loadSampleSound);
        }
    }

    initializeAudioContext = () => {
        if (!this.state.audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const audioCtx = new AudioContext();
            this.setState({ audioCtx });
            return audioCtx;  // Return the newly created audio context
        }
        return this.state.audioCtx; // Return the existing audio context
    };
    
    loadSampleSound = async () => {
        const audioCtx = this.initializeAudioContext(); // Get or create the audio context
    
        if (!audioCtx) {
            console.error("Audio context not initialized");
            return;
        }
    
        try {
            const response = await fetch('/sample1.mp3');
            if (!response.ok) {
                throw new Error('Failed to fetch sample audio file');
            }
    
            const arrayBuffer = await response.arrayBuffer();
    
            // Decode the audio data
            audioCtx.decodeAudioData(
                arrayBuffer,
                (buffer) => {
                    this.setState({ audioBuffer: buffer, audioFileLoaded: true });
                    document.getElementById(`sound${this.props.soundrow_num}_file`).audioBuffer = buffer;
    
                    // Update the label to indicate the sample sound is loaded
                    if (this.props.soundrow_num === 1) {
                        document.querySelector(`label[for="sound${this.props.soundrow_num}_input"]`).innerHTML = "sample ⭐";
                    }
                },
                (error) => {
                    console.error("Error decoding audio data:", error);
                }
            );
        } catch (error) {
            console.error("Error loading sample audio file:", error);
        }
    };

    loadAudioFile = async (e) => {
        this.initializeAudioContext();
    
        if (e.target.files[0]) {
            const file = e.target.files[0];
            const arrayBuffer = await file.arrayBuffer();
    
            this.state.audioCtx.decodeAudioData(arrayBuffer, (buffer) => {
                this.setState({ audioBuffer: buffer });
                document.getElementById(`sound${this.props.soundrow_num}_file`).audioBuffer = buffer; // Store buffer globally
            }, (error) => {
                console.error("Error decoding audio file", error);
            });
    
            e.target.labels[0].innerHTML = file.name.slice(0, 9) + '...';
        } else {
            e.target.labels[0].innerHTML = " .upload. 🔽";
        }
    };

    render(){

        const sound_row_id = "sound" + this.props.soundrow_num;
        const sound_row_steps_id = "sound" + this.props.soundrow_num + "_steps";
        const audio_id = "sound" + this.props.soundrow_num + "_file";
        const audio_file_src_id = "sound" + this.props.soundrow_num + "_src";
        const input_tag_id = "sound" + this.props.soundrow_num + "_input";
        
        return (
            <div id={sound_row_id} className="sound_row h-[4.5vw] 
            md:place-content-center md:p-0 py-[40px] pr-[50px] flex place-items-center text-center ">
                <div id='labeling' className='flex select-none'>
                    <span className = 'sound_title'>{this.props.soundrow_num}</span>
                    <input type="file" className="file_input hidden cursor-pointer" accept=".mp3, .wav, .m4a"
                        id={input_tag_id} onChange={this.loadAudioFile}/>
                    <label htmlFor={input_tag_id} className='input_box cursor-pointer text-white bg-black 
                    border-x-4 rounded-[0.3vw] p-[0.4vw] mx-[1.5vw] text-[1vw] w-[7vw]
                    align-middle h-[2.2vw] hover:animate-pulse place-self-center whitespace-nowrap 
                    overflow-hidden' style={{borderColor:this.props.color}}>
                         upload 🔽
                    </label>
                </div>

                <div id={sound_row_steps_id} className="sound_steps space-x-[5vw] md:space-x-[1vw] flex">
                    {Array.from({ length: 16 }, (_, i) => (
                        <Step key={i} stepNum={i + 1} soundRowNum={this.props.soundrow_num} color={this.props.color}/>
                    ))}
                </div>
                <audio className="hidden" id = {audio_id} controls preload="none">
                    <source src="" id={audio_file_src_id} />
                </audio>
            </div>
        )
    }
}

export default SoundRow