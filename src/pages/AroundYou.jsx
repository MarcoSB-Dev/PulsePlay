import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';


const AroundYou = () => {
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetSongsByCountryQuery(country);

    useEffect(() => {
        axios(`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_GEO_API_KEY}`)
            .then((res) => setCountry(res?.data?.location.country))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [country]);

    if (isFetching && loading) { return <Loader title="Loading Sounds around your country!" /> }

    if (error && country) { return <Error title="Oops! Could not get songs based on your location" message={error} /> }

    console.log('UserCountry => ', country)

    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white'>Songs Around You</h2>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((song, i) => (
                    <SongCard
                        i={i}
                        key={song.key}
                        song={song}
                        activeSong={activeSong}
                        isPlaying={isPlaying}
                    />
                ))}
            </div>

        </div>

    )

}
export default AroundYou;
