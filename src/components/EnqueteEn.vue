<template>
    <div id="enquete-en">
        <div>
            <p class="enquete-title">1. Mother tongue</p>
            <p class="no-answer-message" v-if="!inputForm.enquete1 || (inputForm.enquete1=='Other'&&!inputForm.enquete1_other)">*This is a required question</p>
            <input type="radio" id="one" value="Japanese" v-model="inputForm.enquete1">
            <label for="one">Japanese</label>
            <br>
            <input type="radio" id="two" value="Other" v-model="inputForm.enquete1">
            <label for="two">Other</label>
            <br>
            <input class="input-form" v-if="inputForm.enquete1=='Other'" v-model="inputForm.enquete1_other"
                    v-bind:class="{'no-answer-input':!inputForm.enquete1_other}" placeholder="Your answer">
        </div>
        <div>
            <p class="enquete-title">2. How long have you studied Japanese?</p>
            <p class="no-answer-message" v-if="!inputForm.enquete2">*This is a required question</p>
            <p class="small-title">Ex: 4 months, 2 years (Enter your age if you are a native speaker of Japanese)</p>
            <input class="input-form" v-model="inputForm.enquete2"
                    v-bind:class="{'no-answer-input':!inputForm.enquete2}" placeholder="Your answer">
        </div>
        <div>
            <p class="enquete-title">3. JLPT(Japanese Language Proficiency Test) Level</p>
            <p class="no-answer-message" v-if="!inputForm.enquete3">*This is a required question</p>
            <input type="radio" id="one" value="Not taken" v-model="inputForm.enquete3">
            <label for="one">Not taken</label>
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
            <p class="enquete-title">4. Sex</p>
            <p class="no-answer-message" v-if="!inputForm.enquete4">*This is a required question</p>
            <input type="radio" id="one" value="Male" v-model="inputForm.enquete4">
            <label for="one">Male</label>
            <br>
            <input type="radio" id="two" value="Female" v-model="inputForm.enquete4">
            <label for="two">Female</label>
            <br>
            <input type="radio" id="three" value="Other" v-model="inputForm.enquete4">
            <label for="three">Other</label>
        </div>
        <div>
            <p class="enquete-title">5. Have you ever been pointed out to have color vision deficiency?</p>
            <p class="no-answer-message" v-if="!inputForm.enquete5">*This is a required question</p>
            <input type="radio" id="one" value="No" v-model="inputForm.enquete5">
            <label for="one">No</label>
            <br>
            <input type="radio" id="two" value="Yes" v-model="inputForm.enquete5">
            <label for="two">Yes</label>
            <br>
            <input type="radio" id="three" value="Not sure" v-model="inputForm.enquete5">
            <label for="three">Not sure</label>
        </div>
        <div>
            <p class="enquete-title">6. How many times have you taken this test?</p>
            <p class="no-answer-message" v-if="!inputForm.enquete6">*This is a required question</p>
            <input type="radio" id="one" value="1回目" v-model="inputForm.enquete6">
            <label for="one">This is the first time</label>
            <br>
            <input type="radio" id="two" value="2回目" v-model="inputForm.enquete6">
            <label for="two">The 2nd time</label>
            <br>
            <input type="radio" id="three" value="3回目" v-model="inputForm.enquete6">
            <label for="three">The 3rd time</label>
            <br>
            <input type="radio" id="four" value="それ以上" v-model="inputForm.enquete6">
            <label for="four">More than 3 times</label>
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
        bus.$on('pageNext', (curnum) => {
            if (curnum==-1) {
                bus.$emit('pushAnswer', [curnum+1, this.inputForm])
            }
        })
    },
    watch: {
        'inputForm.enquete2': function(v) {
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
                    if (this.inputForm.enquete1 == "Other" &&
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
            bus.$emit('changestat', this.inputFormStatus);
        }
    }
}
</script>

<style scoped>
#enquete-en {
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