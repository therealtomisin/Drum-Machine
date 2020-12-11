import React, {useRef} from 'react'

function DrumBody(props) {

    const soundRef = useRef(null)

<<<<<<< HEAD
    const play = () => {
=======
    const play = (name) => {
        console.log(soundRef.current)
>>>>>>> 6fc4966099cfa0ff6f14430c156246b8b56a8834
        soundRef.current.play()
        props.callback(name)
    }

    return (
<<<<<<< HEAD
            <button 
            key = {props.name} 
            className = 'drum-pad' 
            onClick = {play}>
                <audio ref = {soundRef} id = {props.name} src = {props.sound}/>
                {props.name}
            </button>
=======
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
>>>>>>> 6fc4966099cfa0ff6f14430c156246b8b56a8834
    )
}

export default DrumBody
