import React, {useRef} from 'react'

function DrumBody(props) {

    const soundRef = useRef(null)

    const play = () => {
        console.log(soundRef.current)
        soundRef.current.play()
    }

    return (
        <div className = 'display' id = 'display'>
            {props.sounds.map((sound, index)=>{
                return (
                        <button key = {index} className = 'drum-pad' onClick = {play}>
                            <audio ref = {soundRef} src = {sound.aud}/>
                            {sound.id}
                        </button>
                )
            })}
        </div>
    )
}

export default DrumBody
