<template>
    <div id="router-view">
        <FirstPage v-if="curnum==-1" v-bind:lang="lang"></FirstPage>
        <ImageQA v-if="curnum>=0&&curnum<ttlnum" v-bind:mset="mset" v-bind:ansdict="ansdict" v-bind:curnum="curnum" v-bind:lang="lang"></ImageQA>
        <Thanks v-if="curnum==ttlnum" v-bind:curnum="curnum" v-bind:ansdict="ansdict" v-bind:query="query"></Thanks>
    </div>
</template>

<script>
import FirstPage from "./FirstPage.vue";
import ImageQA from "./ImageQA.vue";
import Thanks from "./Thanks.vue";

export default {
    components: {
        FirstPage,
        ImageQA,
        Thanks
    },
    props: {
        lang:String,
        query:String,
        mset:Array,
        curnum:Number,
        ttlnum:Number,
        ansdict:Object
    },
    data(){
        return {
        }
    }
}
</script>

<style scoped>
#router-view {
    position:relative;
    padding:0 20px;
}
</style>