import React, { useEffect, useRef, useState } from 'react';

import SoundRow from "./sound_row.js"
import Player from "./player.js"
import { startOrbsAnimation } from './animations/orbsanimation.js'; 

import './home.css';

const Home = () => {

    const pageRefresh = () => window.location.reload(true)

    const instructionsRef = useRef(null);
    const aboutRef = useRef(null);

    const scrollToInstructions = () => {
        instructionsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const soundRowRef = useRef(null);

    const handleLoadSample = () => {
        if (soundRowRef.current) {
            soundRowRef.current.loadSampleSound(); // Trigger loadSampleSound for row 1
        }
    };

    useEffect(() => {
        startOrbsAnimation();
    }, []);
    
    return (
        <div id="home" className='h-screen text-black font-museomoderno no-flex md:flex relative'>
            <canvas id="backgroundCanvas" className="absolute top-0 left-0"></canvas>
            <div id="maincontent" className='w-full'>
                <div id="top" className='justify-between flex flex-row mt-[1vw]'>
                    <h1 className=' font-limelight w-[45%] ml-[3%] text-[8vw] md:text-[4vw] 
                    select-none mt-[1vw]' onClick={pageRefresh}>.EVERYDAY SOUNDS.</h1>
                    <span className='md:hidden bg-fuchsia-400 p-[2%] self-center w-[40%] text-center rounded-[15px]'>
                        [iOS / phone] turn on ringer or use headphones</span>
                    <nav id="top-nav-right" className='flex flex-col text-[3.5vw] 
                    md:text-[1.5vw] mr-[1vw] md:mr-[3vw] mt-[1vw] space-y-[1vw]'>
                        <button id="instructions_button" className="hidden md:inline" onClick={scrollToInstructions}>...instructions...</button>
                        <button id="about_button" className="hidden md:inline" onClick={scrollToAbout}>...about...</button>
                    </nav>
                </div>
                <div className='mt-[8%] md:mt-0 flex flex-col items-center'>
                    {/* Pass down the sample loader function to Player */}
                    <Player loadSampleSound={handleLoadSample}/>
                    <div id="sequencer" className='text-center mt-[10%] py-[1%] md:mt-[2%]
                    overflow-auto md:bg-[#E879F9]	 rounded-[20px] w-[76vw]' >
                        <SoundRow soundrow_num={1} color={"#00FBFB"} ref={soundRowRef} /> 
                        <SoundRow soundrow_num={2} color={"#03EEEE"} />
                        <SoundRow soundrow_num={3} color={"#03DCDC"}/>
                        <SoundRow soundrow_num={4} color={"#04C9C9"}/>
                        <SoundRow soundrow_num={5} color={"#02B9B9"}/>
                        <SoundRow soundrow_num={6} color={"#01A8A8"}/>
                        <SoundRow soundrow_num={7} color={"#029999"}/>
                        <SoundRow soundrow_num={8} color={"#028888"}/>
                    </div>
                </div>

                <div id="about_text" className=' pt-[5%]' ref={instructionsRef}>

                    <div className='px-[8%] leading-normal font-light pt-[5%] md:pt-[10%] md:text-[1.4vw]'>
                        <span className='text-[#04C9C9] font-semibold text-[6vw] md:text-[4vw]'>Instructions</span><br/><br/>

                        What you see here is a <span className='font-semibold text-[#04C9C9]'> 16-step beat sequencer. </span>
                        Sequencers allow you to program a combination of notes, rhythms, and effects. Each 
                        row in this sequencer matches to a different audio sound that you upload, while
                        each column of the 'drum rack' represents an individual 'step'.
                        <br/><br/>

                        Each step will play a combination of sounds depending
                        on which sounds are uploaded in the rows (tracks). Once one step has played for 200 milliseconds (starter tempo),
                        it will continue to the next step, creating a continuous 16-step loop.
                    </div>

                    <div className='space-y-[1%] px-[10%] pt-[9%] md:pt-[5%] md:text-[1.4vw] text-center md:pb-[7%]'>
                        <span className='font-semibold text-[#FF69B4] md:hidden'>  
                            ~ For mobile and iOS devices, you must turn on ringer or use headphones ~
                        <br/><br/></span>
                        <span className='font-semibold text-[#FF69B4]'>1</span> - <span className='font-semibold text-[#04C9C9]'>Choose an audio file. </span>Only the first 200
                            milliseconds of the imported sound will be played, please make sure your sound is short and starts 
                            with audio. Feel free to use the sample audio for row 1 to test.<br/>
                        <span className='font-semibold text-[#FF69B4]'>2</span> - <span className='font-semibold text-[#04C9C9]'>Click on steps in the row </span>you'd like the sound to play at <br/>
                        <span className='font-semibold text-[#FF69B4]'>3</span> - <span className='font-semibold text-[#04C9C9]'>Click 'play'</span> to listen
                    </div><br/><br/>

                    <hr style={{color: "#04C9C9", backgroundColor: "#04C9C9", height: "2px", border: "none", margin: "0 2% 0 2%"}}></hr>
                    
                    <div className='px-[8%] leading-normal font-light pt-[5vw] md:pt-[10vw] pb-[20%] md:pb-[15%] md:text-[1.4vw]' ref={aboutRef}>

                        <span className='text-[#04C9C9] font-semibold text-[6vw] md:text-[4vw]'>About</span><br/><br/>

                        This web-based beatmaker was developed by myself <a href="https://www.lord.live" className='text-[#FF69B4] underline font-medium'>
                        Lord Crawford</a> initially as a solo class project in 2022. <br/><br/>
                        
                        Every day you go outside, you naturally create your own soundscape or 'world of sounds'; whether that's from birds chirping on your walk to
                        Pop Smoke playing from nearby cars. I thought it'd be cool if people could capture those everyday sounds and make new music
                        out of it ~ Everyday Sounds. <br/><br/>


                        I revitalized this project in early 2024 to make it user friendly, built on React, and introduced
                        new features that empower people to compose their own rhythms and beats. <br/><br/><br/>

                        Explore other creative projects at <a href="https://www.lord.live/projects" className='text-[#FF69B4] underline font-medium'>lord.live/projects</a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home