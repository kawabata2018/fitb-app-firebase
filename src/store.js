import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        lang:"ja",
        currentNum:-1,
        query:null,
        formStatus:true,
    },

    getters:{
    },

    mutations: {
        switchLang: state => {
            if (state.lang=="ja") {
                state.lang="en";
            } else {
                state.lang="ja";
            }
        },
        setQuery: (state, payload) => {
            state.query = payload;
            console.log(state.query);
        },
        pageNext: state => {
            state.currentNum += 1;
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },
        changestat: (state, payload) => {
            state.formStatus = payload;
        }
    },

    actions: {
        confirmRes: context => {
            context.commit('pageNext');
            context.commit('changestat', false);
        }
    }
})