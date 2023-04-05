import { reactive } from "vue";

export const store = reactive({

    movies: [],

    series: [],

    searchWord: '',

    APITrendMovie: 'https://api.themoviedb.org/3/trending/movie/week?api_key=bd9455793911789f2178857713cc98a7',
    APITrendTv: 'https://api.themoviedb.org/3/trending/tv/week?api_key=bd9455793911789f2178857713cc98a7',

    APICall: 'https://api.themoviedb.org/3',

    APISearch: '',

    APIQuery: '&query=',

    APIKey: '?api_key=bd9455793911789f2178857713cc98a7',
    parameters: '',

});