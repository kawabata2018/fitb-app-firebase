<template>
    <div id="router-view">
        <FirstPage v-if="curnum==-1"></FirstPage>
        <ImageQA v-if="curnum>=0&&curnum<ttlnum" v-bind:mset="mset" v-bind:ansdict="ansdict"></ImageQA>
        <Thanks v-if="curnum==ttlnum" v-bind:ansdict="ansdict"></Thanks>
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
        mset:Array,
        ttlnum:Number,
        ansdict:Object
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