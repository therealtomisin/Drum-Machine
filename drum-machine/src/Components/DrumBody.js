import React, {useRef} from 'react'

function DrumBody(props) {

    const soundRef = useRef(null)

    const play = () => {
        soundRef.current.play()
    }

    return (
            <button 
            key = {props.name} 
            className = 'drum-pad' 
            onClick = {play}>
                <audio ref = {soundRef} id = {props.name} src = {props.sound}/>
                {props.name}
            </button>
    )
}

export default DrumBody
