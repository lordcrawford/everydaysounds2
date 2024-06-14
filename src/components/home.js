import React, { useEffect, useState } from 'react';

import SoundRow from "./sound_row.js"
import Player from "./player.js"
import { startOrbsAnimation } from './orbsanimation.js'; 
import { startRaysAnimation } from './raysanimation.js'; 


import './home.css';

const Home = () => {

    const pageRefresh = () => window.location.reload(true)

    // eventually, allow users to add more sound rows / tracks if they want

    // eventually, allow people to export the sounds (this sounds hard af to do but seems like a core feature)
    // allow them to record a segment or default shorter sound


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
        <div id="home" className='h-screen text-black font-museomoderno flex relative'>
            <canvas id="backgroundCanvas" className="absolute top-0 left-0"></canvas>
            <div id="maincontent" className='flex-grow z-10'>
                <div id="top" className='justify-between flex mt-[1vw]'>
                    <h1 className=' font-limelight w-[40%] ml-[3%] text-[4vw] ' onClick={pageRefresh}>.everydaysounds.</h1>
                    <nav id="top-nav-right" className='flex flex-col text-[1.5vw] text-right mr-[3vw] mt-[0.5vw] space-y-[1vw]'>
                        <button id="instructions_button" onClick={openPopout}>...instructions...</button>
                        <button id="about_button" onClick={openAboutPopout}>...about...</button>
                    </nav>
                </div>
                <div>
                    <Player/>
                    <div id="sequencer" className='text-center mt-[4%] space-y-[0.6vw] '>
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
                <button className='absolute top-[2%] left-[3%] text-4xl text-[#04C9C9]' onClick={closePopout}>
                    &lt;
                </button>
                <span className='absolute left-[8%] p-[5%] leading-normal font-extralight'>
                    <div className="text-center">
                        <span className='text-[1.7vw] text-[#04C9C9] font-semibold'>Summary</span>
                    </div><br></br>
                    
                    What you see here is a 
                    <span className='font-semibold text-[#04C9C9]'> 16-step beat sequencer. </span>
                    Sequencers allow you to program a combination of notes, rhythms, and effects. Each 
                    row in this sequencer correlates to a different audio sound that you will import. 
                    <br/><br/>

					Each column of the 'drum rack' represents a 'step'. Each step will play a combination of sounds depending
					on which sounds are uploaded in the rows (tracks). Once one step has played for 150 milliseconds (starter tempo, 
					which you can change) it will continue to the next step, until all 16 are played. Then it will loop as a 
					regular 16-step pattern. <br/><br/>

					<div className="text-center">
                        <span className='text-[1.7vw] text-[#04C9C9] font-semibold'>Guide</span>
                    </div><br></br>

                    <ol className='list-[upper-roman] ml-[3%] space-y-[1%] w-[90%] text-center'>
                        <li value="1">Choose an audio file</li>
                        <li>Only the first 100-300 milliseconds of the imported sound will be played.
                        <span className='font-semibold text-[#04C9C9]'> Please make sure your sound is short or starts with audio.</span></li>
                        <li>Click on which steps in the row you'd like the sound to play at</li>
                        <li>Hear the beat by pressing 'play'</li>
				    </ol> <br></br>

				</span>
            </div>

            <div id="popout2" className={`popout2 ${aboutPopoutOpen ? 'open' : 'closed'}`}>
                <button className='absolute top-[2%] left-[3%] text-4xl text-[#04C9C9]' onClick={closeAboutPopout}>
                    &lt;
                </button>
                <span className='absolute left-[8%] p-[5%] leading-normal font-extralight'>
                    <div className="text-center">
                            <span className='text-[1.7vw] text-[#04C9C9] font-semibold'>What's Everyday Sounds?</span>
                    </div><br></br>

                    This web-based beatmaker was first developed in 2022 as a part of a class project (History & Practice
                    of Electronic Music). I (Lord) picked this project back up in early 2024 to make it aesthetically pleasing,
                    built on React and incorporate new functionality that empowers people to make music. <br/><br/>

                    <div className="text-center">
                            <span className='text-[1.7vw] text-[#04C9C9] font-semibold'>What's the Vision?</span>
                    </div><br></br>

                    My goal was to enable others to use their daily surroundings to create new soundscapes, thus 
                    the name 'everyday sounds' came to life. 

				</span>
            </div>
        </div>
    )
}

export default Home