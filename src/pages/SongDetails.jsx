import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";


const SongDetails = () => {
    const dispatch = useDispatch();
    const { songid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });
    const { data: relatedSongsData, isFetching: isFetchingRelatedSongs } = useGetSongRelatedQuery({ songid });

    console.log("relatedSongs", relatedSongsData)
    if (isFetchingSongDetails || isFetchingRelatedSongs) return <Loader title="Searching for the song details!" />;


    const handlePauseClick = () => {
        dispatch(playPause(false));
        console.log("cliicking play")
    }

    const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
        console.log("cliicking pause")
    }

    return (
        <div className="flex flex-col">
            <DetailsHeader
                artistId=""
                songData={songData}
            />

            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold"> Lyrics</h2>
                <div className="mt-5">
                    {songData?.sections[1].type === 'LYRICS' ? songData?.sections[1].text.map((Line, i) => (
                        <p className="text-gray-400 text-base"> {Line}</p>))
                        : <p className="text-gray-400 text-base">No Lyrics available!</p>}
                </div>
            </div>
            <RelatedSongs
                relatedSongsData={relatedSongsData}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}

            />
        </div>
    )
}

export default SongDetails;
