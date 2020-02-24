<template>
    <div id="app-nav">
        <div v-if="curnum==ttlnum-1">
            <p v-if="lang=='ja'">実験はこれで終了です。<a>データの提供に関する事項</a>に同意して、データを送信します。</p>
            <p v-if="lang=='en'">This is the last question. I agree to the <a>data providing policy</a> and submit the data.</p>
        </div>
        <div id="navi-buttons">
            <!-- <button @click="back()" v-if="curnum>=0">戻る</button> -->
            <button @click="next()" v-if="curnum<ttlnum-1">NEXT</button>
            <button @click="next()" class="submit-button" v-if="curnum==ttlnum-1">SUBMIT</button>
        </div>
        <div id="navi-progress">
            <span>{{curnum+1}}/{{ttlnum+1}}</span>
            <span>ページ</span>
        </div>
    </div>
</template>

<script>
import {bus} from "../main";
export default {
    props: {
        ttlnum:Number,
    },
    data(){
        return {
        }
    },
    computed: {
        lang: function(){
            return this.$store.state.lang
        },
        curnum: function(){
            return this.$store.state.currentNum
        },
        formstat: function(){
            return this.$store.state.formStatus
        }
    },
    created() {
    },
    methods: {
        next: function(){
            if (this.formstat) {
                if (this.curnum==-1){
                    if (this.lang=='ja'){
                        // see Enquete.vue
                        bus.$emit('confirmLang');
                    } else {
                        // see EnqueteEn.vue
                        bus.$emit('confirmLangEn')
                    }
                } else {
                    // see ImageQA.vue, Enquete(En).vue 
                    bus.$emit('pageNext', this.curnum);
                    this.$store.commit('pageNext');
                    this.$store.commit('changestat', false);
                }
            } else {
                alert("まだ回答していない質問があります");
            }
        }
    }
}
</script>

<style scoped>
#app-nav {
    margin:0 20px;
    overflow:hidden;
}
a {
    text-decoration:underline;
}
a:hover {
    cursor:pointer;
}
span {
    display:inline-block;
    font-size:20px;
}
button {
    margin:0 10px;
    height:40px;
    width:120px;
    font-size:20px;
    background-color:#eee;
    border-radius:2px;
    border:2px solid #000000;
}
button:hover {
    background-color:#aaa;
}
.submit-button {
    background-color:#2155ff;
;
    color:#ffffff;
    border-radius:2px;
    border:2px solid #000000;
}
.submit-button:hover {
    background-color:#2131d4;
}
#navi-buttons {
    float:left;
    width:300px;
    max-width:60%;
}
#navi-progress {
    float:right;
    width:300px;
    max-width:40%;
}
</style>