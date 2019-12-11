<template>
    <div id="app-header">
        <div class="bottom">
            <span>画像キャプション</span>
            <span>穴埋め問題</span>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
            }
        }
    }
</script>

<style scoped>
#app-header {
    position:relative;
    height:100px;
}
.bottom {
    position:absolute;
    text-align:center;
    width:100%;
    bottom:5px;
}
span {
    display:inline-block;
    margin-bottom:0;
}
span {
    font-size:30px;
}
</style>