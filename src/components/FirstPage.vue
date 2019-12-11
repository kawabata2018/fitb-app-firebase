<template>
    <div id="first-page">
        <Enquete v-if="lang=='ja'"></Enquete>
        <EnqueteEn v-if="lang=='en'"></EnqueteEn>
        <ExampleImageQA v-bind:lang="lang"></ExampleImageQA>
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
        lang:String
    },
    data(){
        return {}
    },
    
}
</script>

<style scoped>
#first-page {
    margin:0;
}
</style>