import React, {useState} from "react";
import {fakeMusic} from "../data/MusicData.js"

const Player = (props) => {

  const [music, setMusic] = useState({
    artist: "",
    song_title: ""
  })

  //m t d stands for mobile, tablet, desktop

  //also, all of this will most likely be in a .map function later...
  // there will have to be a way to highlight only the first item and make the rest small and under the hr break...

  return(
    <div>
      <h2>From inside Player.js going mobile first</h2>
      {fakeMusic.map((item, index) =>{
        return(
          <div className={`music-player-ui m t d ${index > 0 ? "non-active" : "active"}`}>
            <div className="album-art m t d">
              <img src={item.album_cover} alt={`${item.artist} album cover`} className="album_cover m t d"/>
            </div>
            <div className="info m t d">
              <p className="artist m t d">{item.artist}</p>
              <p classname="title m t d">{item.song_title}</p>
            </div>
            <div className="controls m t d">
              <button className="shuffle m t d"></button>
              <button className="back m t d"></button>
              <button className="play m t d"></button>
              <button className="forward m t d"></button>
              <button className="unshuffle m t d"></button>
            </div>
            <hr className={`break ${index > 0 ? "non-active" : "active"}`}/>
          </div>
        )
      })}
      </div>
  )
}
export default Player;
