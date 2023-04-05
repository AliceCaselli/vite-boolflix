<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";

import { store } from "./store.js";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    AppHeader,
    AppMain,
  },

  created() {
    axios.get(this.store.APICall).then((res) => {
      console.log(res.data.results);
      this.store.movies = res.data.results;
    });
  },

  methods: {

    search() {
      //unisco le ricerche
      this.searchMovie();
      this.searchSeries();
    },

    searchMovie() {
      this.store.APISearch = '/search/movie';

      // console.log(this.store.APICall + this.store.APISearch + this.store.APIKey + this.store.APIQuery + this.store.searchWord)
      this.store.parameters = this.store.APIQuery + encodeURIComponent(this.store.searchWord);

      axios.get(this.store.APICall + this.store.APISearch + this.store.APIKey + this.store.parameters).then((res) => {
        // console.log(res.data.results);
        this.store.movies = res.data.results;

      });

    },

    searchSeries() {
      this.store.APISearch = '/search/tv';

      this.store.parameters = this.store.APIQuery + encodeURIComponent(this.store.searchWord);

      axios.get(this.store.APICall + this.store.APISearch + this.store.APIKey + this.store.parameters).then((res) => {

        console.log(res.data.results);

        this.store.series = res.data.results;

      });


    }
  },




};
</script>

<template>
  <AppHeader @research="search()"></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>