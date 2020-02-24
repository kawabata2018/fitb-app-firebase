<template>
    <div id="enquete">
        <div>
            <p class="enquete-title">1. 母語</p>
            <p class="no-answer-message" v-if="!inputForm.enquete1 || (inputForm.enquete1=='その他'&&!inputForm.enquete1_other)">*この質問は必須です</p>
            <input type="radio" id="one" value="日本語" v-model="inputForm.enquete1">
            <label for="one">日本語</label>
            <br>
            <input type="radio" id="two" value="その他" v-model="inputForm.enquete1">
            <label for="two">その他</label>
            <br>
            <input class="input-form" v-if="inputForm.enquete1=='その他'" v-model="inputForm.enquete1_other"
                    v-bind:class="{'no-answer-input':!inputForm.enquete1_other}" placeholder="回答を入力">
        </div>
        <div>
            <p class="enquete-title">2. 日本語の学習歴</p>
            <p class="no-answer-message" v-if="!inputForm.enquete2">*この質問は必須です</p>
            <p class="small-title">例：4ヶ月、2年（母語話者の場合は年齢）</p>
            <input class="input-form" v-model="inputForm.enquete2"
                    v-bind:class="{'no-answer-input':!inputForm.enquete2}" placeholder="回答を入力">
        </div>
        <div>
            <p class="enquete-title">3. 日本語能力検定</p>
            <p class="no-answer-message" v-if="!inputForm.enquete3">*この質問は必須です</p>
            <input type="radio" id="one" value="未受験" v-model="inputForm.enquete3">
            <label for="one">未受験</label>
            <br>
            <input type="radio" id="two" value="N1" v-model="inputForm.enquete3">
            <label for="two">N1</label>
            <br>
            <input type="radio" id="three" value="N2" v-model="inputForm.enquete3">
            <label for="three">N2</label>
            <br>
            <input type="radio" id="four" value="N3" v-model="inputForm.enquete3">
            <label for="four">N3</label>
            <br>
            <input type="radio" id="five" value="N4" v-model="inputForm.enquete3">
            <label for="five">N4</label>
            <br>
            <input type="radio" id="six" value="N5" v-model="inputForm.enquete3">
            <label for="six">N5</label>
        </div>
        <div>
            <p class="enquete-title">4. 性別</p>
            <p class="no-answer-message" v-if="!inputForm.enquete4">*この質問は必須です</p>
            <input type="radio" id="one" value="男性" v-model="inputForm.enquete4">
            <label for="one">男性</label>
            <br>
            <input type="radio" id="two" value="女性" v-model="inputForm.enquete4">
            <label for="two">女性</label>
            <br>
            <input type="radio" id="three" value="その他" v-model="inputForm.enquete4">
            <label for="three">その他</label>
        </div>
        <div>
            <p class="enquete-title">5. 色覚異常と指摘されたことがある</p>
            <p class="no-answer-message" v-if="!inputForm.enquete5">*この質問は必須です</p>
            <input type="radio" id="one" value="いいえ" v-model="inputForm.enquete5">
            <label for="one">いいえ</label>
            <br>
            <input type="radio" id="two" value="はい" v-model="inputForm.enquete5">
            <label for="two">はい</label>
            <br>
            <input type="radio" id="three" value="分からない" v-model="inputForm.enquete5">
            <label for="three">分からない</label>
        </div>
        <div>
            <p class="enquete-title">6. このテストを受けるのは</p>
            <p class="no-answer-message" v-if="!inputForm.enquete6">*この質問は必須です</p>
            <input type="radio" id="one" value="1回目" v-model="inputForm.enquete6">
            <label for="one">1回目</label>
            <br>
            <input type="radio" id="two" value="2回目" v-model="inputForm.enquete6">
            <label for="two">2回目</label>
            <br>
            <input type="radio" id="three" value="3回目" v-model="inputForm.enquete6">
            <label for="three">3回目</label>
            <br>
            <input type="radio" id="four" value="それ以上" v-model="inputForm.enquete6">
            <label for="four">それ以上</label>
        </div>
    </div>
</template>

<script>
import {bus} from "../main";
export default {
    components: {
    },
    props: {
    },
    data(){
        return {
            inputForm: {
                "enquete1": "",
                "enquete1_other":"",
                "enquete2":"",
                "enquete3":"",
                "enquete4":"",
                "enquete5":"",
                "enquete6":""
            },
            inputFormStatus:false
        }
    },
    created(){
        bus.$on('confirmLang', () => {
            let result = window.confirm('母語は「'+this.bogo+'」で間違いないですか？');
            if (result) {
                bus.$emit('pushAnswer', [0, this.inputForm])
                this.$store.dispatch('confirmRes');
            }
        })
    },
    computed: {
        bogo: function(){
            if (this.inputForm.enquete1=="日本語") {
                return "日本語";
            } else {
                return this.inputForm.enquete1_other;
            }
        }
    },
    watch: {
        'inputForm.enquete2': function(v) {
            // 全角数字を半角数字に
            this.inputForm.enquete2 = v.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) { return String.fromCharCode(s.charCodeAt(0) - 65248) })
        },
        inputForm: {
            handler: function(){
                if (this.inputForm.enquete1 != "" &&
                this.inputForm.enquete2 != "" &&
                this.inputForm.enquete3 != "" &&
                this.inputForm.enquete4 != "" &&
                this.inputForm.enquete5 != "" &&
                this.inputForm.enquete6 != "") {
                    if (this.inputForm.enquete1 == "その他" &&
                    this.inputForm.enquete1_other == "") {
                        this.inputFormStatus = false
                    } else {
                        this.inputFormStatus = true
                    }
                } else {
                    this.inputFormStatus = false
                }
            },
            deep: true
        },
        inputFormStatus: function(){
            this.$store.commit('changestat', this.inputFormStatus)
        }
    }
}
</script>

<style scoped>
#enquete {
    margin:0;
}
span {
    color:#d83027;
}
label {
    font-size:1.2rem;
}
input[type="radio"]{
    margin:8px;
}
.input-form {
    font-size:1rem;
    height:20px;
    width:300px;
    max-width:60%;
    padding:5px;
    border-radius:5px;
    border:1px solid #ccc;
}
.small-title {
    font-size:0.8rem;
}
.enquete-title {
    font-size:1.5rem;
}
.no-answer-input {
    background-color:#fce8e6;
}
.no-answer-message {
    color:#d83027;
}
</style>