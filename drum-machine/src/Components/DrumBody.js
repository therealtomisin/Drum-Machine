import React, {useRef} from 'react'

function DrumBody(props) {

    const soundRef = useRef(null)

    const play = (name) => {
        console.log(soundRef.current)
        soundRef.current.play()
        props.callback(name)
    }

    return (
        <div className = 'display' id = 'display'>
            {props.sounds.map((sound, index)=>{
                return (
                        <button key = {index} className = 'drum-pad' onClick = {()=>play(sound.name)}>
                            <audio ref = {soundRef} src = {sound.aud}/>
                            {sound.id}
                        </button>
                )
            })}
        </div>
    )
}

export default DrumBody
