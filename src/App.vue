<template>
  <div id="app">
    <app-header></app-header>
    <app-title v-bind:ttlnum="totalNum"></app-title>
    <button @click="switchLang()">{{langBtn}}</button>
    <router-view v-bind:mset="mondaiSet" v-bind:ansdict="answerDict" v-bind:ttlnum="totalNum"></router-view>
    <app-nav v-bind:mset="mondaiSet" v-bind:ttlnum="totalNum"></app-nav>
  </div>
</template>

<script>
import axios from "axios";
import {bus} from "./main";
import Header from "./components/Header.vue";
import Title from "./components/Title.vue";
import Navigator from "./components/Navigator.vue";
import RouterView from "./components/RouterView.vue";
    
export default {
  components: {
    'app-header': Header,
    'app-title': Title,
    'router-view': RouterView,
    'app-nav': Navigator,
  },
  prop: {
  },
  data(){
    return {
      mondaiSet:null,
      totalNum:null,
      answerDict:{}
    }
  },
  computed: {
    lang: function(){
      return this.$store.state.lang
    },
    langBtn: function(){
      if (this.lang=='ja') {
        return "English"
      } else {
        return "日本語"
      }
    },
  },
  created(){
    const url = new URL(location.href);
    const query = url.searchParams.get("query");
    // demo
    const dataset = ["demo"]
    if (!dataset.includes(query)) {
      location.href = "error.html"
    } else {
      this.$store.commit('setQuery', query);
    }
    const csvPath = "./assets/"+query+".csv";
    axios.get(csvPath).then(res => {
      this.mondaiSet = this.csv2array(res.data);
      this.totalNum = this.mondaiSet.length;
      this.answerDict[0] = {"問題":"アンケート", "回答":null}
      for (let i=0;i<this.totalNum;i++) {
        this.answerDict[i+1] = {"問題":this.mondaiSet[i], "回答":null}
      }
      // console.log(this.answerDict)
    }),
    bus.$on('pushAnswer', (data) => {
      this.answerDict[data[0]]["回答"] = data[1];
      // console.log(this.answerDict);
    })
  },
  methods: {
    switchLang: function(){
      this.$store.commit('switchLang');
    },
    csv2array: function(str) {
      let array = new Array();
      let line = str.split("\n");
      line.forEach(l => {
        if (l.length != 0){
          array.push(l.split(","))
        }
      });
      return array
    },
  }
}
</script>

<style scoped>
#app {
  padding-bottom:20px;
}
button {
    display:block;
    margin:10px 20px 0 auto;
    height:30px;
    width:80px;
    font-size:15px;
    background-color:#2155ff;
    color:#fff;
    border-radius:5px;
    border:2px solid #000000;
}
button:hover {
    background-color:#2131d4;
}
</style>