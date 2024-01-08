import React, { useState } from 'react';

import SoundRow from "./sound_row.js"
import Player from "./player.js"

const Home = () => {

    const pageRefresh = () => window.location.reload(true)

    // eventually, allow users to add more sound rows / tracks if they want
    
    return (
        <div id="home" className='bg-black h-screen text-[#A240DE] font-anonymouspro'>
            <div id="top" className='justify-between flex'>
                <img className="pl-[2%] w-[32%]" src={require('../images/logo.png')} alt="logo" onClick={pageRefresh}/>
                <nav id="top-nav-right" className='flex justify-end items-center space-x-[25%] text-2xl mr-[4%]'>
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
        </div>
    )
}

export default Home