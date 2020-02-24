<template>
    <div id="app-notes">
        <div v-if="lang=='ja'">
            <p class="notes-title">注意</p>
            <ul>
                <li>日本語で答えてください</li>
                <li>空欄に当てはまる言葉だけを書いてください</li>
                <li>画像が表示されない場合でも、ページをリロードせずに、しばらくお待ちください。ページをリロードすると回答データが消去されてしまいます</li>
                <li class="caution">一度次のページへ行くと前には戻れません。ミスがないか確認してから次に進んでください</li>
            </ul>
        </div>
        <div v-if="lang=='en'">
            <p class="notes-title">Notes</p>
            <ul>
                <li>Please answer in Japanese</li>
                <li>Input the answer which just corresponds to the blank</li>
                <li class="caution">This system doesn't allow users to go back to a previous page. Please check your answer again before moving on to the next page.</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
    },
    data(){
        return {    
        }
    },
    computed: {
        lang: function(){
            return this.$store.state.lang
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