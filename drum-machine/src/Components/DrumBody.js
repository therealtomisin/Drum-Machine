import React, {useRef, useEffect} from 'react'

function DrumBody({name,beatname,sound,sounds, callback}) {

    const soundRef = useRef(null)

    const play = (name) => {
    
        soundRef.current.play()
        callback(name)
    } 
    const key =(e)=>{
        sounds.map(key=>{
            if(e.keyCode === key.keycode){
              play(key.name)
            }
        })
    }

    useEffect(()=>{
        window.addEventListener('keydown',key)
      }, [])

    

    return (
        <button key = {name} className = 'drum-pad' onClick = {()=>play(beatname)}>
            <audio ref = {soundRef} src = {sound}/>
            {name}
        </button>
    )
}

export default DrumBody
