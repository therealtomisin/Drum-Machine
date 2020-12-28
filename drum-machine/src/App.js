import React, {useState, useEffect} from 'react'
import './App.css';
import Drumbody from './Components/DrumBody'

function App() {

  const sounds = [
    {
      id: 'Q',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      name:'Heater - 1',
      keycode: 81
    },
    {
      id: 'W',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      name:'Heater - 2',
      keycode: 87
    },
    {
      id: 'E',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      name:'Heater - 3',
      keycode: 69
    },
    {
      id: 'A',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      name:'Heater - 4',
      keycode: 65
    },
    {
      id: 'S',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      name:'Heater - 6',
      keycode: 83
    },
    {
      id: 'D',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      name: 'Dsc Oh',
      keycode: 68
    },
    {
      id: 'Z',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      name: 'Kick n Hat',
      keycode: 90
    },
    {
      id: 'X',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      name:'RP4 KICK 1',
      keycode: 88
    },
    {
      id: 'C',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      name:'Cev H2',
      keycode: 67
    }
  ]

  

  const [display, setdisplay] = useState('')

  const callback = (name)=>{
    setdisplay(name)
  }
  const clearDisplay = () => {
    setTimeout(()=>{
      setdisplay('')
    }, 1000)
  }

  return (
    <div id = "drum-machine" className="App">
      <div className = 'drum-body'>
        <div className = 'display'>
          {sounds.map((sound, index)=>{
            return (
              <Drumbody key={index} clearDisplay = {clearDisplay} beatname = {sound.name} name = {sound.id} sounds = {sounds} sound = {sound.aud} callback={callback}/>
            )
          })}
        </div>
        <div id = 'callbackdiv'>
          <div id='callback'>
            {display}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
