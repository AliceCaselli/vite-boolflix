<script>
import { onMounted } from 'vue';

export default {

    name: 'MainItem',
    data() {
        return {
            flag: '',
        };
    },

    props: {
        movie: Object,
    },

    mounted() {

        if (this.movie.original_language == 'en') {
            this.flag = 'gb';
        } else if (this.movie.original_language == 'ja') {
            this.flag = 'jp';
        } else if (this.movie.original_language == 'ko') {
            this.flag = 'kr';
        } else if (this.movie.original_language == 'zh') {
            this.flag = 'cn';
        } else {
            this.flag = this.movie.original_language
        }
    },
};

</script>

<template>
    <div class="card">
        <div class="title">{{ movie.title }}</div>
        <div class="original-title">{{ movie.original_title }}</div>
        <div class="lang">{{ movie.original_language }}
            <span :class="'fi fi-' + flag"></span>
        </div>
        <div class="vote">{{ movie.vote_average }}</div>
        <div class="image">
            <img src="" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped></style>