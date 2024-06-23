import React, { useEffect, useState } from 'react';

import SoundRow from "./sound_row.js"
import Player from "./player.js"
import { startOrbsAnimation } from './animations/orbsanimation.js'; 
import { startRaysAnimation } from './animations/raysanimation.js'; 


import './home.css';

const Home = () => {

    const pageRefresh = () => window.location.reload(true)

    // instructions popout

    const [popoutOpen, setPopoutOpen] = useState(false);

    const openPopout = () => {
        if(popoutOpen){
            closePopout()
            return;
        }
        setPopoutOpen(true);
        setAboutPopoutOpen(false);
        document.getElementById('instructions_button').style.color = "#04C9C9"
        document.getElementById('about_button').style.color = "black"
    };
    
    const closePopout = () => {
        setPopoutOpen(false);
        document.getElementById('instructions_button').style.color = "black"
    };

    // about popout

    const [aboutPopoutOpen, setAboutPopoutOpen] = useState(false);

    const openAboutPopout = () => {
        if(aboutPopoutOpen){
            closeAboutPopout()
            return;
        }
        setAboutPopoutOpen(true);
        setPopoutOpen(false);
        document.getElementById('instructions_button').style.color = "black"
        document.getElementById('about_button').style.color = "#04C9C9"
    };
    
    const closeAboutPopout = () => {
        setAboutPopoutOpen(false);
        document.getElementById('about_button').style.color = "black"
    };

    useEffect(() => {
        const animations = [startRaysAnimation, startOrbsAnimation];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        randomAnimation(); 
        
    }, []);
    
    return (
        <div id="home" className='h-screen text-black font-museomoderno no-flex md:flex relative'>
            <canvas id="backgroundCanvas" className="absolute top-0 left-0"></canvas>
            <div id="maincontent" className='flex-grow z-10'>
                <div id="top" className='justify-between flex mt-[1vw]'>
                    <h1 className=' font-limelight w-[40%] ml-[3%] text-[8vw] md:text-[4vw] select-none' onClick={pageRefresh}>.everydaysounds.</h1>
                    <nav id="top-nav-right" className='flex flex-col text-[3.5vw] md:text-[1.5vw] text-right mr-[1vw] md:mr-[3vw] mt-[0.5vw] space-y-[1vw]'>
                        <button id="instructions_button" onClick={openPopout}>...instructions...</button>
                        <button id="about_button" onClick={openAboutPopout}>...about...</button>
                    </nav>
                </div>
                <div className='mt-[10%] md:mt-0'>
                    <Player/>
                    <div id="sequencer" className='text-center mt-[10%] md:mt-[4%] space-y-[0.6vw] 
                    overflow-auto '>
                        <SoundRow soundrow_num={1} color={"#00FBFB"}/> 
                        <SoundRow soundrow_num={2} color={"#03EEEE"} />
                        <SoundRow soundrow_num={3} color={"#03DCDC"}/>
                        <SoundRow soundrow_num={4} color={"#04C9C9"}/>
                        <SoundRow soundrow_num={5} color={"#02B9B9"}/>
                        <SoundRow soundrow_num={6} color={"#01A8A8"}/>
                        <SoundRow soundrow_num={7} color={"#029999"}/>
                        <SoundRow soundrow_num={8} color={"#028888"}/>
                    </div>
                </div>
            </div>
            
            <div id="popout1" className={`popout1 ${popoutOpen ? 'open' : 'closed'}`}>
                <button className='absolute top-[1%] left-[3%] text-3xl text-[#04C9C9]' onClick={closePopout}>
                    X
                </button>
                <span className='absolute left-[8%] p-[5%] leading-normal font-extralight pt-[12%]'>
                    
                    What you see here is a 
                    <span className='font-semibold text-[#04C9C9]'> 16-step beat sequencer. </span>
                    Sequencers allow you to program a combination of notes, rhythms, and effects. Each 
                    row in this sequencer correlates to a different audio sound that you will import 
                    and each column of the 'drum rack' represents a 'step'.
                    <br/><br/>

					Each step will play a combination of sounds depending
					on which sounds are uploaded in the rows (tracks). Once one step has played for 200 milliseconds (starter tempo)
                    it will continue to the next step as a continuous 16-step pattern. <br/><br/> 

                    <hr style={{color: "#04C9C9", backgroundColor: "#04C9C9", height: "2px", border: "none"}}></hr> <br/>

                    <span className='space-y-[1%] w-[90%] text-center'>
                    <span className='font-semibold text-[#FF69B4]'>1</span> - <span className='font-semibold text-[#04C9C9]'>Choose an audio file. </span>Only the first 100-300
                     milliseconds of the imported sound will be played. Please make sure your sound is short or starts 
                     with audio.<br/>
                    <span className='font-semibold text-[#FF69B4]'>2</span> - <span className='font-semibold text-[#04C9C9]'>Click on steps in the row </span>you'd like the sound to play at <br/>
                    <span className='font-semibold text-[#FF69B4]'>3</span> - <span className='font-semibold text-[#04C9C9]'>Click 'play'</span> to hear
				    </span> <br></br>

				</span>
            </div>

            <div id="popout2" className={`popout2 ${aboutPopoutOpen ? 'open' : 'closed'}`}>
                <button className='absolute top-[1%] left-[3%] text-3xl text-[#04C9C9]' onClick={closeAboutPopout}>
                    X
                </button>
                <span className='absolute left-[8%] p-[3%] leading-normal font-extralight pt-[10%]'>
                    <div className="text-center">
                            <span className='text-[1.6vw] text-[#04C9C9] font-semibold'>What is Everyday Sounds?</span>
                    </div><br></br>

                    This web-based beatmaker was developed by myself <a href="https://www.lord.live" 
                    className='text-[#FF69B4] font-medium'>(Lord Crawford)</a> initially as a solo class project in 2022. <br/><br/>
                    
                    Everyday you go outside, you naturally create your own soundscape or 'world of sounds'; whether that's from birds chirping on your walk or
                    Pop Smoke playing from the cars outside. I thought it'd be cool if we could capture those sounds and make new music
                    out of it ~ Everyday Sounds. <br/><br/>


                    I revitalized this project in early 2024 to make it aesthetically pleasing, built on React and incorporate
                    new functionality that empowers people to make music. <br/><br/><br/>

                    Visit more projects at <a href="https://www.lord.live" className='text-[#FF69B4] font-medium'>lord.live/projects</a>

				</span>
            </div>
            
            {/* ONLY MOBILE  */}
            <div id="mobile_about_text" className='md:hidden pt-[5%]'>

                <br/><hr style={{color: "#04C9C9", backgroundColor: "#04C9C9", height: "2px", border: "none", margin: "0 2% 0 2%"}}></hr><br/>

                <div className='px-[8%] leading-normal font-light pt-[5%]'>
                    <span className='text-[#04C9C9] font-semibold text-[6vw]'>Instructions</span><br/><br/>

                    What you see here is a <span className='font-semibold text-[#04C9C9]'> 16-step beat sequencer. </span>
                    Sequencers allow you to program a combination of notes, rhythms, and effects. Each 
                    row in this sequencer correlates to a different audio sound that you will import 
                    and each column of the 'drum rack' represents a 'step'.
                    <br/><br/>

                    Each step will play a combination of sounds depending
                    on which sounds are uploaded in the rows (tracks). Once one step has played for 200 milliseconds (starter tempo)
                    it will continue to the next step as a continuous 16-step pattern.
                </div>

                <div className='space-y-[1%] px-[10%] pt-[9%] text-center '>
                    <span className='font-semibold text-[#FF69B4]'>1</span> - <span className='font-semibold text-[#04C9C9]'>Choose an audio file. </span>Only the first 100-300
                        milliseconds of the imported sound will be played. Please make sure your sound is short or starts 
                        with audio.<br/>
                    <span className='font-semibold text-[#FF69B4]'>2</span> - <span className='font-semibold text-[#04C9C9]'>Click on steps in the row </span>you'd like the sound to play at <br/>
                    <span className='font-semibold text-[#FF69B4]'>3</span> - <span className='font-semibold text-[#04C9C9]'>Click 'play'</span> to hear
                </div><br/><br/>

                <hr style={{color: "#04C9C9", backgroundColor: "#04C9C9", height: "2px", border: "none", margin: "0 2% 0 2%"}}></hr>
                
                <div className='px-[8%] leading-normal font-light pt-[10%] pb-[20%]'>

                    <span className='text-[#04C9C9] font-semibold text-[6vw]'>About</span><br/><br/>

                    This web-based beatmaker was developed by myself <a href="https://www.lord.live" className='text-[#FF69B4] font-medium'>
                    (Lord Crawford)</a> initially as a solo class project in 2022. <br/><br/>
                    
                    Everyday you go outside, you naturally create your own soundscape or 'world of sounds'; whether that's from birds chirping on your walk or
                    Pop Smoke playing from the cars outside. I thought it'd be cool if we could capture those sounds and make new music
                    out of it ~ Everyday Sounds. <br/><br/>


                    I revitalized this project in early 2024 to make it aesthetically pleasing, built on React and incorporate
                    new functionality that empowers people to make music. <br/><br/><br/>

                    Visit more projects at <a href="https://www.lord.live" className='text-[#FF69B4] font-medium'>lord.live/projects</a>

				</div>
            </div>
        </div>
    )
}

export default Home