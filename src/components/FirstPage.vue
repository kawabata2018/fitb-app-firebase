<template>
    <div id="first-page">
        <Enquete v-if="lang=='ja'"></Enquete>
        <EnqueteEn v-if="lang=='en'"></EnqueteEn>
        <ExampleImageQA></ExampleImageQA>
    </div>
</template>

<script>
import Enquete from "./Enquete.vue";
import EnqueteEn from "./EnqueteEn.vue";
import ExampleImageQA from "./ExampleImageQA.vue";
export default {
    components: {
        Enquete,
        EnqueteEn,
        ExampleImageQA
    },
    props: {
    },
    data(){
        return {}
    },
    computed: {
        lang: function(){
            return this.$store.state.lang
        }
    }
}
</script>

<style scoped>
#first-page {
    margin:0;
}
</style>