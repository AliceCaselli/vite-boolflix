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


  created() {
    axios.get(this.store.APItest).then((res) => {
      console.log(res.data.results);
      this.store.movies = res.data.results;
    });
  },


  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>