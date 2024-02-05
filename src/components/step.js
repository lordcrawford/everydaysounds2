import React, { useState} from 'react';

import './step.css';


const Step = ({stepNum, soundRowNum}) => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    const className_text = 'step h-[2.6vw] w-[2.6vw] rounded-[1.2vw] inline-block align-items-center step' + stepNum
                            + ((!clicked) ? ' step_hovered' : '')
                            + ((clicked) ? ' step_clicked' : '');

    return(
        <div className ={className_text} onClick={handleClick} 
            data-clicked={clicked} data-sound-row={soundRowNum}/>
    )
}

export default Step