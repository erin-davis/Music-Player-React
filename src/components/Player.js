import React, {useEffect, useState} from "react";
import axios from "axios";

const Player = () => {

  const [music, setMusic] = useState({
    artist: "",
    song_title: "",
    release_year:""
  })

  useEffect(()=>{
    axios.get('https://api.spotify.com/')
      .then(res =>{
        console.log("this is the response ", res);
      })
      .catch(err =>{
        console.log("this is the error: ", err);
      })
  })

  return(
    <div>
      <h2>From inside Player.js</h2>
    </div>
  )
}
export default Player;
