import { useRef, useState, useEffect } from "react";
import song from "../assets/song.mp3";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // AUTO PLAY saat pertama klik di mana saja
  useEffect(() => {
    const startMusic = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setPlaying(true);
          })
          .catch((err) => {
            console.log("Autoplay masih diblokir:", err);
          });
      }
      window.removeEventListener("click", startMusic);
    };

    window.addEventListener("click", startMusic);
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch((err) => console.log("Tidak bisa play:", err));
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <audio ref={audioRef} src={song} loop preload="auto" />
      <button
        onClick={toggle}
        className="px-4 py-2 rounded-full shadow bg-rose-600 text-white"
        aria-label="toggle music"
      >
        {playing ? "Pause" : "Play Music"}
      </button>
    </div>
  );
};

export default MusicPlayer;
