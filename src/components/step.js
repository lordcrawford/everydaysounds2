import React, { useState} from 'react';

import './step.css';


const Step = ({stepNum, soundRowNum, color}) => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    const className_text = 'step relative pt-[5%] w-[3vw] rounded-[1vw] step' + stepNum
                            + ((!clicked) ? ' step_hovered' : '')
                            + ((clicked) ? ' step_clicked' : '');

    

    return(
        <div className ={className_text} style={{backgroundColor: color}} onClick={handleClick} 
            data-clicked={clicked} data-sound-row={soundRowNum}>
            <div className=''></div>
        </div>
    )
}

export default Step