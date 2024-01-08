import React, { useState } from 'react';

class Step extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            color: 'white',
            clicked: false
        }
    }
    
    render(){
        const handleClick = () => {
            this.setState({
                color: (this.state.color === 'white' || this.state.color === 'yellow') ? '#A240DE': 'white',
                clicked: this.state.clicked === false ? true : false
            });
        }

        const MouseOver = () => {
            this.setState({
                color: this.state.clicked === true ? '#A240DE' : 'yellow'
            });
        }
        const MouseOut = () => {
            this.setState({
                color: this.state.clicked === true ? '#A240DE' : 'white'
            });
        }

        return (
            <div className = 'h-[2.6vw] w-[2.6vw] rounded-[3px] inline-block'
            onClick={handleClick} onMouseOver={MouseOver} onMouseOut={MouseOut}
            style={{backgroundColor: this.state.color}}/>
        )
    }
}

export default Step