import {reactive} from 'vue';
export const store = reactive ({
    trendingMovies: [],
    trendingTV: [],
    searchMovie: [],
    searchTv: [],

    inputText: false,
    showLoader: true,
});

export const api = {
    baseUrl: 'https://api.themoviedb.org/3',
    api_key: 'c9010d9998307ed28e3fd7d0c8d75997',
    language: 'it-IT',
}