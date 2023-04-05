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

    methods: {
        openDetails(newDetail) {

        }
    },

    components: {
        MainItem,
    },

};

</script>

<template>
    <div id="screen">

        <div class="container">
            <MainItem v-for="(movie, index) in store.movies" :item="movie" :type="'movie'" @click="openDetails(index)">
            </MainItem>
        </div>

        <div class="container">
            <mainItem v-for="seriesItem in store.series" :item="seriesItem" :type="'series'">
            </mainItem>
        </div>

    </div>
</template>

<style lang="scss" scoped>
#screen {

    .container {
        display: flex;
        flex-flow: row nowrap;
        gap: 10px 10px;
        margin-bottom: 100px;
        overflow-x: scroll;
        height: 450px;
        padding: 10px;
    }


}

::-webkit-scrollbar {
    height: 4px;
}

::-webkit-scrollbar-track {
    background: #888;
}

::-webkit-scrollbar-thumb {
    background: #888;
}

::-webkit-scrollbar-thumb:hover {
    background: red;
}
</style>