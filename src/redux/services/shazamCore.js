import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const options = {
    method: 'GET',
    headers: { 'X-RapidAPI-Key': '8fdae2cc9bmsh3a6c564f738898cp170e6fjsn645a101bfa39' }
};

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({

            //Shazam Core by WaveTech - FREE
            // baseUrl:'https://shazam-core7.p.rapidapi.com',

            //Shazam Core by Tipsters Co - $5/mo
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key','8fdae2cc9bmsh3a6c564f738898cp170e6fjsn645a101bfa39')
                return headers;
            },
        }),
        endpoints: (builder)=> ({
            getTopCharts: builder.query({ query: () => '/charts/world'}),
        }),
    });

    export const {useGetTopChartsQuery} = shazamCoreApi;