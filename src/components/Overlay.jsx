import { useRef, useState } from 'react'
import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/play";
import backgroundMusic from '../assets/HipHopLofi.mp3';

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


  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            SPUSEUM
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>
          {isMusicPlaying ? (
          <button className="music" onClick={pauseMusic}>Stop Music</button>
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
    </div>
  );
};
