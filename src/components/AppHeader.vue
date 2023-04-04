<script>
import { store } from '../store.js';

export default {

    name: 'AppHeader',
    data() {
        return {
            store,

        };
    },

    emits: ['research'],

};
</script>

<template>
    <div id="search">

        <input v-model="store.searchWord" type="text" placeholder="Cerca una serie o un film"
            @keyup.enter="$emit('research')">
        <button @click="$emit('research')">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>
#search {
    text-align: center;
    padding-top: 30px;
    //test
}
</style>