import React, { useState } from 'react';

import SoundRow from "./sound_row.js"
import Player from "./player.js"
import Instructions from './instructions.js';

import './home.css';

const Home = () => {

    const pageRefresh = () => window.location.reload(true)

    // eventually, allow users to add more sound rows / tracks if they want

    // eventually, allow people to export the sounds (this sounds hard af to do but seems like a core feature)
    // allow them to record a segment or default shorter sound

    return (
        <div id="home" className='h-screen text-white font-museomoderno'>
            <div id="top" className='justify-between flex mt-[1.5%]'>
                <h1 className='font-limelight w-[40%] pl-[2%] text-[4vw]' onClick={pageRefresh}>Everyday Sounds</h1>
                {/* <img className="pl-[2%] w-[32%]" src={require('../images/logo.png')} alt="logo" onClick={pageRefresh}/> */}
                <nav id="top-nav-right" className='flex justify-end items-center space-x-[20%] text-[1.5vw] mr-[3%]'>
                    <button id="instructions_button">instructions</button>
                    <a href = "#about">about</a>
                </nav>
            </div>
            <Player/>
            <div id="sequencer" className='text-center mt-[5%]'>
                <SoundRow soundrow_num={1}/>
                <SoundRow soundrow_num={2}/>
                <SoundRow soundrow_num={3}/>
                <SoundRow soundrow_num={4}/>
                <SoundRow soundrow_num={5}/>
                <SoundRow soundrow_num={6}/>
                <SoundRow soundrow_num={7}/>
                <SoundRow soundrow_num={8}/>
            </div>
            <Instructions/>
        </div>
    )
}

export default Home