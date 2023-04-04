import { reactive } from "vue";

export const store = reactive({

    movies: [],

    searchWord: '',

    APItest: 'https://api.themoviedb.org/3/search/movie?api_key=bd9455793911789f2178857713cc98a7&query=robot',

    // APICall: 'https://api.themoviedb.org/3',

    // APIQuery: '',

    // APIKey: 'bd9455793911789f2178857713cc98a7',


});