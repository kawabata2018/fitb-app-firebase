<template>
    <div id="app-title">
        <span>{{title}}</span>
    </div>
</template>

<script>
export default {
    props: {
        lang:String,
        curnum:Number,
        ttlnum:Number
    },
    data(){
        return {
        }
    },
    computed: {
        title: function(){
            if (this.lang=="en") {
                if (this.curnum==-2){
                    return "Consent to Collection of Personal Information and Composition Data"
                } else if (this.curnum==-1){
                    return "Questionnaire"
                } else if (this.curnum==this.ttlnum){
                    return "Thank you!"
                } else {
                    return "Q"+(this.curnum+1)
                }
            } else {
                if (this.curnum==-2){
                    return "穴埋め作文およびプロファイルデータ収集に関する同意"
                } else if (this.curnum==-1){
                    return "アンケート"
                } else if (this.curnum==this.ttlnum){
                    return "Thank you!"
                } else {
                    return "問題"+(this.curnum+1)
                }
            }
        }
    }
}
</script>

<style scoped>
span {
    font-size:20px;
    color:#ffffff;
}

#app-title {
    padding:20px;
    background-color:#086019;
}

</style>