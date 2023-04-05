<script>

export default {

    name: 'MainItem',
    data() {
        return {
            flag: '',
        };
    },

    props: {
        item: Object,
        type: String,
    },

    computed: {

        images() {
            return 'https://image.tmdb.org/t/p/' + 'w342' + this.item.poster_path;
        },

        stars() {
            return Math.ceil(this.item.vote_average / 10 * 5);
        }
    },

    mounted() {

        if (this.item.original_language == 'en') {
            this.flag = 'gb';
        } else if (this.item.original_language == 'ja') {
            this.flag = 'jp';
        } else if (this.item.original_language == 'ko') {
            this.flag = 'kr';
        } else if (this.item.original_language == 'zh') {
            this.flag = 'cn';
        } else {
            this.flag = this.item.original_language
        }
    },
};

</script>

<template>
    <div class="card" :style="{ backgroundImage: 'url(' + images + ')' }">
        <div class="text">

            <div v-if="type == 'movie'" class="title">
                <strong>Title:</strong> {{ item.title }}
            </div>
            <div v-else>
                <strong></strong>Title: {{ item.name }}
            </div>

            <div v-if="type == 'movie'" class="original-title">{{ item.original_title }}</div>
            <div v-else>{{ item.original_title }}</div>

            <div class="lang">
                {{ item.original_language }}

                <span :class="'fi fi-' + flag"></span>
            </div>

            <div class="vote"><i v-for="number in stars" class="fa-solid fa-star"></i><i v-for="number in 5 - stars"
                    class="fa-regular fa-star"></i>
            </div>


        </div>

    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 300px;

    flex-shrink: 0;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px solid white;
    border-radius: 5px;

    .text {

        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 20px;
        gap: 10px;
        background-color: black;
        height: 100%;

        display: none;

        &:hover {
            display: flex;
            cursor: pointer;
        }

        .original-title {
            color: gray;
        }
    }

}
</style>