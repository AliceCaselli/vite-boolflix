import { reactive } from "vue";

export const store = reactive({

    movies: [],

    series: [],

    searchWord: '',


    APICall: 'https://api.themoviedb.org/3',

    APISearch: '',

    APIQuery: '&query=',

    APIKey: '?api_key=bd9455793911789f2178857713cc98a7',
    parameters: '',

});