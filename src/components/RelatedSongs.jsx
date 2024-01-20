import SongBar from './SongBar.jsx';


const RelatedSongs = ({ relatedSongsData, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }) => (

  <div className='flex flex-col'>

    <h1 className='font-bold text-3xl text-white'> Related Songs</h1>

    <div className='empty-6 w-full flex flex-col'>
      {relatedSongsData.map((song, i) => (
        <SongBar
          i={i}
          song={song}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          key={`${song.key} || ${artistId}`}
          handlePlayClick={handlePlayClick}
          handlePauseClick={handlePauseClick}
        />
      ))}
    </div>

  </div>
);

export default RelatedSongs;
