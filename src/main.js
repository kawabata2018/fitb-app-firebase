import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import firebase from 'firebase'

export const bus = new Vue();
Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appID: "app-id",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')