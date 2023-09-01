import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Load environment variables from .env file
const cryptoApiKey = process.env.REACT_APP_RAPIDAPI_KEY;
const cryptoApiHost = process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST;

const cryptoApiHeaders = {
    'X-RapidAPI-Key': cryptoApiKey,
    'X-RapidAPI-Host': cryptoApiHost
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (uuid) => createRequest(`/coin/${uuid}`),
    })
  })
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;


// 'X-RapidAPI-Key': '3f6e155f0amsh16c2b2f69ed2054p155891jsn8a25ec5d158b',
// 'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
