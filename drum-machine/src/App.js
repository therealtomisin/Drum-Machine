<<<<<<< HEAD
import React, {useState} from 'react'
=======
import React, {useRef, useState} from 'react'
>>>>>>> 6fc4966099cfa0ff6f14430c156246b8b56a8834
import './App.css';
import Drumbody from './Components/DrumBody'
import ShowBeat from './Components/ShowBeat';

function App() {
const [beatName, setBeatname] = useState('')

  const sounds = [
    {
      id: 'A',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
<<<<<<< HEAD
      name: 'Heater 1'
=======
      name:'aaa'
>>>>>>> 6fc4966099cfa0ff6f14430c156246b8b56a8834
    },
    {
      id: 'C',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
<<<<<<< HEAD
      name: 'Heater 2'
=======
      name:'ccc'
>>>>>>> 6fc4966099cfa0ff6f14430c156246b8b56a8834
    },
    {
      id: 'D',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
<<<<<<< HEAD
      name: 'Heater 3'
=======
      name:'ddd'
>>>>>>> 6fc4966099cfa0ff6f14430c156246b8b56a8834
    },
    {
      id: 'E',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
<<<<<<< HEAD
      name: 'Heater 4'
=======
      name:'eee'
>>>>>>> 6fc4966099cfa0ff6f14430c156246b8b56a8834
    },
    {
      id: 'Q',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
<<<<<<< HEAD
      name: 'Heater 6'
=======
      name:'qqq'
>>>>>>> 6fc4966099cfa0ff6f14430c156246b8b56a8834
    },
    {
      id: 'S',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
<<<<<<< HEAD
      name: 'Dsc Oh'
=======
      name:'sss',
>>>>>>> 6fc4966099cfa0ff6f14430c156246b8b56a8834
    },
    {
      id: 'W',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
<<<<<<< HEAD
      name: 'Kick n Hat'
=======
      name:'www'
>>>>>>> 6fc4966099cfa0ff6f14430c156246b8b56a8834
    },
    {
      id: 'X',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
<<<<<<< HEAD
      name: 'RP4 KICK'
=======
      name:'xxx'
>>>>>>> 6fc4966099cfa0ff6f14430c156246b8b56a8834
    },
    {
      id: 'Z',
      aud: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
<<<<<<< HEAD
      name: 'Cev H2'
    }
  ]
  const CreateBeatname = (e) => {
    setBeatname(e.target.name)
  }
=======
      name:'zzz'
    }
  ]

  const [display, setdisplay] = useState('')

  const callback = (name)=>{
    setdisplay(name)
  }

>>>>>>> 6fc4966099cfa0ff6f14430c156246b8b56a8834
  return (
    <div id = "drum-machine" className="App">
      <div id='display'>{display}</div>
    <div className = 'drum-body'>
<<<<<<< HEAD
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
=======
      <Drumbody sounds = {sounds} sound = {sounds.aud}  callback={callback}/>
>>>>>>> 6fc4966099cfa0ff6f14430c156246b8b56a8834
    </div>
    </div>
  );
}

export default App;
