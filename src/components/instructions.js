import React from 'react';


const Instructions = () => {

    function close() {
        document.getElementById("instructions_overlay").classList.add('hidden');
    }
    function outerClose(e){
        if(e.target.id === 'instructions_overlay'){
            document.getElementById("instructions_overlay").classList.add('hidden');
        }
    }

    return(
        <div id="instructions_overlay" className='flex justify-center text-black 
            text-[1vw] hidden fixed w-[100%] h-screen top-0 right-0 left-0 bottom-0 bg-black bg-white/50'
            onClick={outerClose}>
            <div id="instructions_popup"className='animate-[fade-in_1s_ease-in-out] w-[50%] h-max bg-white rounded-[0.5vw] p-[2%] top-[13%] relative'>
                <h1 className='text-[4.5vw] font-limelight'>Manifesto</h1><br/>
                <button className='absolute top-[2%] right-[2%]' onClick={close}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2vw" height="2vw" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                    </svg>
                </button>
                <span>What you see here is a 16-step sequencer. Sequencers allow you to program a combination of notes, 
					rhythms, articulations and effects. Each row in this sequencer correlates to a different audio sound 
					that you will import. <br/><br/>

					Each column of the 'drum rack' represents a 'step'. Each step will play a combination of sounds depending
					on which sounds are selected in the step. Once one step has played for 150 milliseconds (starter tempo, 
					which you can change) it will continue to the next step, until all 16 are played. Then it will loop as a 
					regular 16-step pattern. <br/><br/><br/>

					<u className='text-[1.3vw]'>Guide:</u><br/><br/>

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