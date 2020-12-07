import React, {useRef} from 'react'
import './App.css';
import Drumbody from './Components/DrumBody'

function App() {
  const sounds = [
    {
      id: 'A',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      id: 'C',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      id: 'D',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      id: 'E',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      id: 'Q',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      id: 'S',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      id: 'W',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      id: 'X',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      id: 'Z',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ]

  return (
    <div id = "drum-machine" className="App">
    <div className = 'drum-body'>
      <Drumbody sounds = {sounds} sound = {sounds.aud} />
    </div>
    </div>
  );
}

export default App;
