<script>
export default {

    name: 'MainItem',
    data() {
        return {
        };
    },

    props: {
        movie: Object,
    }
};

</script>

<template>
    <div class="card">
        <div class="title">{{ movie.title }}</div>
        <div class="original-title">{{ movie.original_title }}</div>
        <div class="lang">{{ movie.original_language }}</div>
        <div class="vote">{{ movie.vote_average }}</div>
    </div>
</template>

<style lang="scss" scoped></style>