<template>
    <div id="image-qa">
        <p>{{ note }}</p>
        <p class="bold">{{ instruction }}</p>
        <p class="caption-text">{{ fitbCaption_bef }}＿＿{{ fitbCaption_aft }}</p>
        <div id="image-block"><img v-bind:src="imageSrc"></div>
        <p style="text-align:right; margin:0"><a href="http://mscoco.org" target="_blank">COCO dataset</a>の画像を使用</p>
        <div>
            <div v-if="mondaiNum>40">
                <p class="bold" v-if="lang=='ja'">が, で, に, の, を, のどれかで答えてください</p>
                <p class="bold" v-if="lang=='en'">Select one from が, で, に, の or を</p>
            </div>
            <div>
                <p>答え <span class="no-answer-message" v-if="!inputForm.answer">*この質問は必須です (Required)</span></p>
                <input v-bind:class="{'no-answer-input':!inputForm.answer}" v-model="inputForm.answer" placeholder="回答を入力">
            </div>
            <div>
                <p>第2候補 (2nd best)</p>
                <input v-model="inputForm.answer_1" placeholder="回答を入力">
            </div>
            <div>
                <p>第3候補 (3rd best)</p>
                <input v-model="inputForm.answer_2" placeholder="回答を入力">
            </div>
        </div>
        <Notes v-bind:lang="lang"></Notes>
    </div>
</template>

<script>
import {bus} from "../main";
import Notes from "./Notes.vue";

export default {
    components: {
        Notes,
    },
    props: {
        lang:String,
        mset:Array,
        curnum:Number,
        ansdict:Object
    },
    data(){
        return {
            inputForm: {
                "answer": "",
                "answer_1":"",
                "answer_2":""
            },
            inputFormStatus:false
        }
    },
    created(){
        bus.$on('pageNext', (curnum) => {
            if (curnum>=0) {
                bus.$emit('pushAnswer', [curnum+1, this.inputForm]);
                this.inputForm = {
                    "answer": "",
                    "answer_1":"",
                    "answer_2":""
                }
            }
        })
    },
    computed: {
        mondaiNum: function(){
            return this.mset[this.curnum][0]
        },
        instruction: function(){
            if (this.lang=="en"){
                return this.mset[this.curnum][1].split('=')[1]
            } else {
                return this.mset[this.curnum][1].split('=')[0]
            }
        },
        fitbCaption_bef: function(){
            return this.mset[this.curnum][2]
        },
        fitbCaption_aft: function(){
            return this.mset[this.curnum][3]
        },
        imageSrc: function(){
            return "./assets/images/" + this.mset[this.curnum][4]
        },
        note: function(){
            if (this.lang=="en"){
                return "NOTE: DO NOT USE any outside sources: dictionaries, translation services, friends, etc."
            } else {
                return "注意: 辞書や翻訳サービスを利用したりや知人に頼ったりしないでください"
            }
        }
    },
    watch: {
        inputForm: {
            handler: function(){
                if (this.inputForm.answer != "") {
                    this.inputFormStatus = true
                } else {
                    this.inputFormStatus = false
                }
            },
            deep: true
        },
        inputFormStatus: function(){
            bus.$emit('changestat', this.inputFormStatus);
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

#image-qa {
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

.bold {
    font-size:1.2rem;
    font-weight:bold;
}
.caution {
    font-weight:bold;
    color:#d83027;
}
.no-answer-input {
    background-color:#fce8e6;
}
.no-answer-message {
    color:#d83027;
}
</style>