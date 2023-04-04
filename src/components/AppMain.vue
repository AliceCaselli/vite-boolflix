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
        <MainItem v-for="movie in store.movies" :movie="movie"></MainItem>
    </div>
</template>

<style lang="scss" scoped></style>