import React, {useState} from 'react'
import './App.css';
import Drumbody from './Components/DrumBody'
import ShowBeat from './Components/ShowBeat';

function App() {
const [beatName, setBeatname] = useState('')

  const sounds = [
    {
      id: 'A',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      name: 'Heater 1'
    },
    {
      id: 'C',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      name: 'Heater 2'
    },
    {
      id: 'D',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      name: 'Heater 3'
    },
    {
      id: 'E',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      name: 'Heater 4'
    },
    {
      id: 'Q',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      name: 'Heater 6'
    },
    {
      id: 'S',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      name: 'Dsc Oh'
    },
    {
      id: 'W',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      name: 'Kick n Hat'
    },
    {
      id: 'X',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      name: 'RP4 KICK'
    },
    {
      id: 'Z',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      name: 'Cev H2'
    }
  ]
  const CreateBeatname = (e) => {
    setBeatname(e.target.name)
  }
  return (
    <div id = "drum-machine" className="App">
    <div className = 'drum-body'>
      <div className = 'display' id = 'display'>
        {sounds.map((sound)=>{
          return(
            <Drumbody dispName = {sound.name} name = {sound.id} sound = {sound.aud} />
          )
        })}
      </div>
      <div className = 'otherTingz'>
        <div className = 'beatname'>
          {beatName}
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
