<template>
    <div id="example-image-qa">
        <p class="notes-title">例題</p>
        <p>{{ note }}</p>
        <p class="bold">{{ instruction }}</p>
        <p class="caption-text">{{ fitbCaption }}</p>
        <div id="image-block"><img v-bind:src="imageSrc"></div>
        <div>
            <div>
                <p>答え</p>
                <input class="no-answer-input" placeholder="回答を入力">
            </div>
            <div>
                <p>第2候補 (2nd best)</p>
                <input placeholder="回答を入力">
            </div>
            <div>
                <p>第3候補 (3rd best)</p>
                <input placeholder="回答を入力">
            </div>
        </div>
        <p class="notes-example">答えの例</p>
        <p style="font-size:1.2rem; text-align:center">くわえ</p>
        <Notes v-bind:lang="lang"></Notes>
    </div>
</template>

<script>
import Notes from "./Notes.vue";

export default {
    components: {
        Notes
    },
    props: {
        lang:String
    },
    data(){
        return {
            fitbCaption: "犬がフリスビーを＿＿て走っています。",
            imageSrc: "./assets/images/dog_frisbee.jpg",
        }
    },
    computed: {
        instruction: function(){
            if (this.lang=="en") {
                return "Fiil in the blank to complete the sentence which best describes the image"
            } else {
                return "画像に対する適切な説明文となるように空欄を埋めてください"
            }
        },
        note: function(){
            if (this.lang=="en"){
                return "NOTE: DO NOT USE any outside sources: dictionaries, translation services, friends, etc."
            } else {
                return "注意: 辞書や翻訳サービス等を利用したり、知人に頼ったりしないでください"
            }
        }
    }
}
</script>

<style scoped>
p {
    font-size:1rem;
}

span {
    color:#d83027;
}

img {
    position:absolute;
    width:auto;
    height:auto;
    max-width:90%;
    max-height:90%;
    left:0;
    right:0;
    margin:auto;
    border:1px solid #aaa;
}

input {
    font-size:1rem;
    height:20px;
    width:300px;
    max-width:60%;
    padding:5px;
    border-radius:5px;
    border:1px solid #ccc;
}

.bold {
    font-size:1.2rem;
    font-weight:bold;
}

#example-image-qa {
    position:relative;
}

#image-block {
    position:relative;
    display:block;
    margin:10px auto;
    padding:10px;
    max-width:90%;
    height:40vh;
}

.caption-text {
    text-align:center;
    margin:0;
    font-size:1.8rem;
}

.notes-title {
    height:50px;
    margin:20px 0;
    font-size:30px;
    background-color:#086019;
    color:#fff;
    text-align:center;
}

.notes-example {
    font-size:1.5rem;
    background-color:#086019;
    color:#fff;
    text-align:center;
}

.no-answer-input {
    background-color:#fce8e6;
}

.no-answer-message {
    color:#d83027;
}
</style>