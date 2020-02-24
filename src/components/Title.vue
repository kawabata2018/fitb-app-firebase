<template>
    <div id="app-title">
        <span>{{title}}</span>
    </div>
</template>

<script>
export default {
    props: {
        ttlnum:Number
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
        title: function(){
            if (this.lang=="en") {
                if (this.curnum==-1){
                    return "Questionnaire"
                } else if (this.curnum==this.ttlnum){
                    return "Thank you!"
                } else {
                    return "Q"+(this.curnum+1)
                }
            } else {
                if (this.curnum==-1){
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