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
    <div id="header-container">
        <h1>BOOLFIX</h1>
        <div id="search">

            <input v-model="store.searchWord" type="text" placeholder="Cerca una serie o un film"
                @keyup.enter="$emit('research')">
            <button @click="$emit('research')">Cerca</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#header-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 50px 0;
    background-image: linear-gradient(to bottom right, red, #242424);

    h1 {
        text-shadow: 5px 5px 5px black;
    }

    #search {

        input,
        button {
            padding: 5px;
        }

    }
}
</style>