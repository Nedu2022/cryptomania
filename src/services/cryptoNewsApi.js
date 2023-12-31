import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { cryptoApi } from './cryptoApi';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '3f6e155f0amsh16c2b2f69ed2054p155891jsn8a25ec5d158b',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}


const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders});


export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    })
  })
});


export const { useGetCryptoNewsQuery } = cryptoNewsApi;
