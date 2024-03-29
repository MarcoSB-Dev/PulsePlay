import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, isPlaying, activeSong, i, data }) => {

  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
    console.log("cliicking play")
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
    console.log("cliicking pause")
  }

  return (
    <div className={`${song.images?.coverart
      ? "song-card-container flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur animate-slideup rounded-lg cursor-pointer"
      : 'hidden'
      }`}>

      <div className="img-container relative w-full h-56 group">

        <div className={`
          absolute 
          inset-0 
          justify-center 
          items-center
          bg-black 
          bg-opacity-50 
          group-hover:flex 
          ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>

          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>

        <img src={song.images?.coverart} alt="song_img" />
      </div>

      <div className="mt-4 flex flex-col">

        <p className="title font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>

        <p className="subtitle text-sm text-gray-300 mt-1 truncate">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.subtitle}
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SongCard;
