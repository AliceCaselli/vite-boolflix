<script>
import MainItem from './MainItem.vue';
import { store } from '../store.js';

export default {

    name: 'AppMain',
    data() {
        return {
            store,
        };
    },



    components: {
        MainItem,
    },

};

</script>

<template>
    <div class="container">
        <MainItem v-for="movie in store.movies" :item="movie" :type="'movie'"></MainItem>
    </div>

    <div class="container">
        <mainItem v-for="seriesItem in store.series" :item="seriesItem" :type="'series'"></mainItem>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px 10px;
    margin-bottom: 100px;
    overflow-x: scroll;
    height: 450px;
}
</style>