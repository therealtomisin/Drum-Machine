import React, {useRef, useState} from 'react'
import './App.css';
import Drumbody from './Components/DrumBody'

function App() {
  const sounds = [
    {
      id: 'A',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      name:'aaa'
    },
    {
      id: 'C',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      name:'ccc'
    },
    {
      id: 'D',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      name:'ddd'
    },
    {
      id: 'E',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      name:'eee'
    },
    {
      id: 'Q',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      name:'qqq'
    },
    {
      id: 'S',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      name:'sss',
    },
    {
      id: 'W',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      name:'www'
    },
    {
      id: 'X',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      name:'xxx'
    },
    {
      id: 'Z',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      name:'zzz'
    }
  ]

  const [display, setdisplay] = useState('')

  const callback = (name)=>{
    setdisplay(name)
  }

  return (
    <div id = "drum-machine" className="App">
      <div id='display'>{display}</div>
    <div className = 'drum-body'>
      <Drumbody sounds = {sounds} sound = {sounds.aud}  callback={callback}/>
    </div>
    </div>
  );
}

export default App;
