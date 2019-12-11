<template>
    <div id="app-notes">
        <div v-if="lang=='ja'">
            <p class="notes-title">注意</p>
            <ul>
                <li>空欄に当てはまる言葉だけを書いてください</li>
                <li class="caution">一度次のページへ行くと前には戻れません。ミスがないか確認してから次に進んでください</li>
            </ul>
        </div>
        <div v-if="lang=='en'">
            <p class="notes-title">Notes</p>
            <ul>
                <li>Input the answer which just corresponds to the blank</li>
                <li class="caution">This system doesn't allow users to go back to previous pages. Please check the answer again before going to the next page</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        lang:String
    },
    data(){
        return {    
        }
    }
}
</script>

<style scoped>
#app-notes {
    margin:0;
    background-color:#fce8e6;
}
.notes-title {
    font-size:1.5rem;
    background-color:#086019;
    color:#ffffff;
    text-align:center;
}
.caution {
    font-size:1.2rem;
    font-weight:bold;
    color:#d83027;
}
</style>