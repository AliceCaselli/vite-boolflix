<script>

export default {

    name: 'MainItem',
    data() {
        return {
            flag: '',
            upHere: false,
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
        },


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
            this.flag = this.item.original_language;
        }
    },

};

</script>

<template>
    <div class="card" :style="{ backgroundImage: 'url(' + images + ')' }" @mouseover="upHere = true"
        @mouseleave="upHere = false">
        <div v-show="upHere" id="text">
            <div id="details">

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

                <div class="overview">{{ item.overview }}</div>

            </div>
        </div>

    </div>
    <div id="details-card">
        <!-- <div>{{ movie[index].title }}</div> -->
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
    overflow-y: scroll;




    #text {

        #details {


            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px;
            gap: 10px;
            font-size: .8em;
            width: 100%;
            background-color: rgba(0, 0, 0, 1);




            .original-title {
                color: gray;
            }

            .fa-star {
                color: orange;
            }
        }
    }



}

#details-card {
    height: 700px;
    width: 1300px;
    background-color: black;
    // position: absolute;
    position: fixed;
    top: 50px;
    left: 50%;
    transform: translate(-50%);
    display: none;
}

::-webkit-scrollbar {
    width: 2px;
}

::-webkit-scrollbar-track {
    background: #888;
}

::-webkit-scrollbar-thumb {
    background: #888;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>