<script>
import { store } from '../store.js';
export default {

    name: 'AppSearch',

    data() {
        return {
            store,
        };
    },
};

</script>

<template>
    <div id="search">

        <input v-model="store.searchWord" type="text" placeholder="Cerca una serie o un film">
        <button>Cerca</button>
    </div>
</template>

<style lang="scss" scoped>
#search {
    text-align: center;
    padding-top: 30px;
    //test
}
</style>