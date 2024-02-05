import React, { useState} from 'react';


const Instructions = () => {

    return(
        <div className='items-center flex justify-center text-black absolute top-[13%] text-[1.1vw] hidden'>
            <div className='w-[50%] bg-white rounded-[0.5vw] p-[2%]'>
                <h1 className='text-[5vw] font-limelight'>Manifesto</h1><br/>
                <span>What you see here is a 16-step sequencer. Sequencers allow you to program a combination of notes, 
					rhythms, articulations and effects. Each row in this sequencer correlates to a different audio sound 
					that you will import. <br/><br/>

					Each column of the 'drum rack' represents a 'step'. Each step will play a combination of sounds depending
					on which sounds are selected in the step. Once one step has played for 150 milliseconds (starter tempo, 
					which you can change) it will continue to the next step, until all 16 are played. Then it will loop as a 
					regular 16-step pattern. <br/><br/><br/>

					<u className='text-[1.5vw]'>Guide:</u><br/><br/>

                    <ol className='list-[upper-roman] ml-[3%] space-y-[1%] w-[90%]'>
                        <li value="1">Choose an audio file that you'd like to use</li>
                        <li>ONLY the first 100-300 milliseconds of the imported sound will be played.
                        Please make sure your sound is <b>short or starts with audio.</b></li>
                        <li>Focus on the row of that newly added audio file. </li>
                        <li>Click on which steps you'd like the sound to play at</li>
                        <li>Hear the beat by pressing 'play'</li>
                        <li>Continue adding </li>
				    </ol> <br></br>

				</span>
            </div>
        </div>
    )
}

export default Instructions