import React, { useState } from "react";
import "./styles.css";

const musicLib = {
  LinkinPark: [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/cd/The-catalyst-single-cover-500x500.png",
      songName: "The Catalyst",
      albumName: "A Thousand Suns",
      releaseYear: "2010"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/fa/Linkin_Park%2C_The_Hunting_Party%2C_album_art_final.jpg",
      songName: "A Line in the Sand",
      albumName: "The Hunting Party",
      releaseYear: "2014"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/c9/Linkin_Park_-_Living_Things.jpg",
      songName: "Castle of Glass ",
      albumName: "Living Things",
      releaseYear: "2012"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/0c/Linkin_Park_Meteora_Album_Cover.jpg",
      songName: "Numb",
      albumName: "Meteora",
      releaseYear: "2003"
    }
  ],
  SystemOfADown: [
    {
      image:
        "https://www.sickchirpse.com/wp-content/uploads/2016/11/tumblr_nl85npBjJS1tp925uo1_1280.jpg",
      songName: "Chop Suey ",
      albumName: "Toxicity",
      releaseYear: "2001"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/64/SystemofaDownToxicityalbumcover.jpg",
      songName: "Toxicity",
      albumName: "Toxicity",
      releaseYear: "2001"
    },
    {
      image: "https://i.ytimg.com/vi/zUzd9KyIDrM/maxresdefault.jpg",
      songName: "B.Y.O.B.",
      albumName: "Mezmerize",
      releaseYear: "2005"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/0/02/Mezmerize-LP.jpg",
      songName: "Lonely Day",
      albumName: "Mezmerize",
      releaseYear: "2005"
    }
  ],
  Queen: [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_At_The_Opera.png",
      songName: "Bohemian Rhapsody",
      albumName: "A Night At The Opera",
      releaseYear: "1975"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/ea/Queen_News_Of_The_World.png",
      songName: "We will Rock You",
      albumName: "News of the World",
      releaseYear: "1977"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/e3/Queen_The_Miracle.png",
      songName: "I Want It All",
      albumName: "The Miracle",
      releaseYear: "1989"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/16/Queen_The_Game.png",
      songName: "Anothe One Bites The Dust",
      albumName: "The Game",
      releaseYear: "1980"
    }
  ],
  Deftones: [
    {
      image: "https://img.youtube.com/vi/IjainiB8mk4/hqdefault.jpg",
      songName: "Passenger",
      albumName: "White Pony",
      releaseYear: "2000"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/Deftones_-_Diamond_Eyes.jpg",
      songName: "Diamond Eyes",
      albumName: "Diamond Eyes",
      releaseYear: "2010"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/8c/Gore_-_Deftones.png",
      songName: "Phantom bride",
      albumName: "Gore",
      releaseYear: "2016"
    },
    {
      image: "https://i.ytimg.com/vi/9tmPBuSpmfA/maxresdefault.jpg",
      songName: "Digital Bath",
      albumName: "White Pony",
      releaseYear: "2000"
    }
  ]
};
const musicData = Object.keys(musicLib);

export default function App() {
  const [showSong, setShowSong] = useState("LinkinPark");
  function clickHandler(artist) {
    setShowSong(artist);
  }
  return (
    <div className="App">
      <div className="header">
        <h1> My Music</h1>
        <h2>recommendation</h2>
        <h2> Pick up your artist</h2>
      </div>
      <div className="artist-btn">
        {musicData.map((artist) => (
          <button onClick={() => clickHandler(artist)}>{artist}</button>
        ))}
      </div>

      <ul className="unorderedList">
        {musicLib[showSong].map((mySong) => (
          <div className="artist">
            <li className="list">
              <img className="image" src={mySong.image} alt={mySong.songName} />
              <div className="songinfo">
                <h3> {mySong.songName} </h3>
                <p>
                  {" "}
                  {mySong.albumName} <br></br>
                  {mySong.releaseYear}{" "}
                </p>
              </div>
            </li>
          </div>
        ))}
      </ul>
      <div className="line"></div>
      <footer className="footer-class">
        <div className="footer-div">
          Made By <span className="saarim">Saarim</span>
          <br></br>
          <a href="https://github.com/sharpMW">
            <i class="fa fa-github"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
