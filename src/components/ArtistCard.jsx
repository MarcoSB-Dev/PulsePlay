import { useNavigate } from "react-router-dom";


const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

console.log(track)
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}>
      <img src={track?.images?.coverart}
        alt="artist"
        className="w-full h-[200px] object-cover rounded-lg cursor-pointer"
      />

      <p className="mt-4 font-semibold text-lg text-white truncate">
        {track?.subtitle}
      </p>
    </div>

  )
};

export default ArtistCard;
