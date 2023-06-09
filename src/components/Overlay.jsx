import { useEffect, useRef, useState } from 'react'
import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/play";
import backgroundMusic from '../assets/HipHopLofi.mp3';
import { Link } from 'react-router-dom';

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(new Audio(backgroundMusic));

  const playMusic = () => {
    const audio = audioRef.current;
    audio.play();
    setIsMusicPlaying(true);
  };

  const pauseMusic = () => {
    const audio = audioRef.current;
    audio.pause();
    setIsMusicPlaying(false);
  };

  const GoToVrShow = () => {
    window.location.href = '/vrshow';
  };


  useEffect(() => {
    if (end) {
      setPlay(false);
    }
  }, [end, setPlay]);

  return (
    <div
      className={`overlay ${play  ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${end || play ? "intro--disappear" : ''}`}>
          <h1 className="logo">
            SPUSEUM
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>
       
          {isMusicPlaying ? (
            <div class="loading-wave">
              <button className="PauseMusic" onClick={pauseMusic}>Pause</button>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
            </div>
        ) : (
          <button className="music" onClick={playMusic}>Start Music</button>
        )}
          <p className="intro__scroll">Scroll to begin the journey</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Explore
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">Wish you had a great flight with us...</p>
      </div>
      <div className={`outro ${end ? "outro--appear" : ""}`}>
      <div class="card">
    <div class="align">
        <span class="red"></span>
        <span class="yellow"></span>
        <span class="green"></span>
    </div>
    <p className='Vrp'>Explore Our Museum From Your Home Using VR</p>
    <nav>
      <Link class='bn' to="/vrshow">Go To VrShow</Link>
    </nav>
</div>
              
      </div>

    </div>
  );
};
