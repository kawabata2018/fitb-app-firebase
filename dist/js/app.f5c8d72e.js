(function(e){function t(t){for(var r,i,u=t[0],s=t[1],p=t[2],c=0,l=[];c<u.length;c++)i=u[c],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&l.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);m&&m(t);while(l.length)l.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var m=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b72":function(e,t,n){"use strict";var r=n("6913"),a=n.n(r);a.a},"1f3b":function(e,t,n){},"216a":function(e,t,n){"use strict";var r=n("53ad"),a=n.n(r);a.a},"37b4":function(e,t,n){"use strict";var r=n("cd80"),a=n.n(r);a.a},4525:function(e,t,n){},"53ad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header"),n("app-title",{attrs:{curnum:e.currentNum,ttlnum:e.totalNum,lang:e.lang}}),n("button",{on:{click:function(t){return e.switchLang()}}},[e._v(e._s(e.langBtn))]),n("router-view",{attrs:{mset:e.mondaiSet,ansdict:e.answerDict,curnum:e.currentNum,ttlnum:e.totalNum,query:e.query,lang:e.lang}}),n("app-nav",{attrs:{mset:e.mondaiSet,curnum:e.currentNum,ttlnum:e.totalNum,lang:e.lang}})],1)},o=[],i=(n("4160"),n("d3b7"),n("ac1f"),n("3ca3"),n("1276"),n("159b"),n("ddb0"),n("2b3d"),n("bc3a")),u=n.n(i),s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app-header"}},[n("div",{staticClass:"bottom"},[n("span",[e._v("画像キャプション")]),n("span",[e._v("穴埋め問題")])])])}],m={data:function(){return{}}},c=m,l=(n("c580"),n("2877")),d=Object(l["a"])(c,s,p,!1,null,"074ea3e0",null),v=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app-title"}},[n("span",[e._v(e._s(e.title))])])},f=[],q=(n("a9e3"),{props:{lang:String,curnum:Number,ttlnum:Number},data:function(){return{}},computed:{title:function(){return"en"==this.lang?-2==this.curnum?"Consent to Collection of Personal Information and Composition Data":-1==this.curnum?"Questionnaire":this.curnum==this.ttlnum?"Thank you!":"Q"+(this.curnum+1):-2==this.curnum?"穴埋め作文およびプロファイルデータ収集に関する同意":-1==this.curnum?"アンケート":this.curnum==this.ttlnum?"Thank you!":"問題"+(this.curnum+1)}}}),_=q,F=(n("216a"),Object(l["a"])(_,h,f,!1,null,"78231afa",null)),g=F.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app-nav"}},[e.curnum==e.ttlnum-1?n("div",["ja"==e.lang?n("p",[e._v("実験はこれで終了です。"),n("a",[e._v("データの提供に関する事項")]),e._v("に同意して、データを送信します。")]):e._e(),"en"==e.lang?n("p",[e._v("This is the last question. I agree to "),n("a",[e._v("the data providing policy")]),e._v(" and submit the data.")]):e._e()]):e._e(),n("div",{attrs:{id:"navi-buttons"}},[e.curnum<e.ttlnum-1?n("button",{on:{click:function(t){return e.next()}}},[e._v("NEXT")]):e._e(),e.curnum==e.ttlnum-1?n("button",{staticClass:"submit-button",on:{click:function(t){return e.next()}}},[e._v("SUBMIT")]):e._e()]),n("div",{attrs:{id:"navi-progress"}},[n("span",[e._v(e._s(e.curnum+1)+"/"+e._s(e.ttlnum+1))]),n("span",[e._v("ページ")])])])},w=[],N={props:{lang:String,mset:Array,curnum:Number,ttlnum:Number},data:function(){return{formstat:!1}},created:function(){var e=this;ke.$on("changestat",(function(t){e.formstat=t}))},methods:{next:function(){this.formstat?(ke.$emit("pageNext",this.curnum),this.formstat=!1):alert("まだ回答していない質問があります")}}},y=N,x=(n("d628"),Object(l["a"])(y,b,w,!1,null,"0b81ae06",null)),$=x.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"router-view"}},[-1==e.curnum?n("FirstPage",{attrs:{lang:e.lang}}):e._e(),e.curnum>=0&&e.curnum<e.ttlnum?n("ImageQA",{attrs:{mset:e.mset,ansdict:e.ansdict,curnum:e.curnum,lang:e.lang}}):e._e(),e.curnum==e.ttlnum?n("Thanks",{attrs:{curnum:e.curnum,ansdict:e.ansdict,query:e.query}}):e._e()],1)},C=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"first-page"}},["ja"==e.lang?n("Enquete"):e._e(),"en"==e.lang?n("EnqueteEn"):e._e(),n("ExampleImageQA",{attrs:{lang:e.lang}})],1)},S=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"enquete"}},[n("div",[n("p",{staticClass:"enquete-title"},[e._v("1. 母語")]),e.inputForm.enquete1?e._e():n("p",{staticClass:"no-answer-message"},[e._v("*この質問は必須です")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete1,expression:"inputForm.enquete1"}],attrs:{type:"radio",id:"one",value:"日本語"},domProps:{checked:e._q(e.inputForm.enquete1,"日本語")},on:{change:function(t){return e.$set(e.inputForm,"enquete1","日本語")}}}),n("label",{attrs:{for:"one"}},[e._v("日本語")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete1,expression:"inputForm.enquete1"}],attrs:{type:"radio",id:"two",value:"その他"},domProps:{checked:e._q(e.inputForm.enquete1,"その他")},on:{change:function(t){return e.$set(e.inputForm,"enquete1","その他")}}}),n("label",{attrs:{for:"two"}},[e._v("その他")]),n("br"),"その他"==e.inputForm.enquete1?n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete1_other,expression:"inputForm.enquete1_other"}],staticClass:"input-form",class:{"no-answer-input":!e.inputForm.enquete1_other},attrs:{placeholder:"回答を入力"},domProps:{value:e.inputForm.enquete1_other},on:{input:function(t){t.target.composing||e.$set(e.inputForm,"enquete1_other",t.target.value)}}}):e._e()]),n("div",[n("p",{staticClass:"enquete-title"},[e._v("2. 日本語の学習歴")]),e.inputForm.enquete2?e._e():n("p",{staticClass:"no-answer-message"},[e._v("*この質問は必須です")]),n("p",{staticClass:"small-title"},[e._v("例：4ヶ月、2年（母語話者の場合は年齢）")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete2,expression:"inputForm.enquete2"}],staticClass:"input-form",class:{"no-answer-input":!e.inputForm.enquete2},attrs:{placeholder:"回答を入力"},domProps:{value:e.inputForm.enquete2},on:{input:function(t){t.target.composing||e.$set(e.inputForm,"enquete2",t.target.value)}}})]),n("div",[n("p",{staticClass:"enquete-title"},[e._v("3. 日本語能力検定")]),e.inputForm.enquete3?e._e():n("p",{staticClass:"no-answer-message"},[e._v("*この質問は必須です")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete3,expression:"inputForm.enquete3"}],attrs:{type:"radio",id:"one",value:"未受験"},domProps:{checked:e._q(e.inputForm.enquete3,"未受験")},on:{change:function(t){return e.$set(e.inputForm,"enquete3","未受験")}}}),n("label",{attrs:{for:"one"}},[e._v("未受験")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete3,expression:"inputForm.enquete3"}],attrs:{type:"radio",id:"two",value:"N1"},domProps:{checked:e._q(e.inputForm.enquete3,"N1")},on:{change:function(t){return e.$set(e.inputForm,"enquete3","N1")}}}),n("label",{attrs:{for:"two"}},[e._v("N1")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete3,expression:"inputForm.enquete3"}],attrs:{type:"radio",id:"three",value:"N2"},domProps:{checked:e._q(e.inputForm.enquete3,"N2")},on:{change:function(t){return e.$set(e.inputForm,"enquete3","N2")}}}),n("label",{attrs:{for:"three"}},[e._v("N2")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete3,expression:"inputForm.enquete3"}],attrs:{type:"radio",id:"four",value:"N3"},domProps:{checked:e._q(e.inputForm.enquete3,"N3")},on:{change:function(t){return e.$set(e.inputForm,"enquete3","N3")}}}),n("label",{attrs:{for:"four"}},[e._v("N3")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete3,expression:"inputForm.enquete3"}],attrs:{type:"radio",id:"five",value:"N4"},domProps:{checked:e._q(e.inputForm.enquete3,"N4")},on:{change:function(t){return e.$set(e.inputForm,"enquete3","N4")}}}),n("label",{attrs:{for:"five"}},[e._v("N4")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete3,expression:"inputForm.enquete3"}],attrs:{type:"radio",id:"six",value:"N5"},domProps:{checked:e._q(e.inputForm.enquete3,"N5")},on:{change:function(t){return e.$set(e.inputForm,"enquete3","N5")}}}),n("label",{attrs:{for:"six"}},[e._v("N5")])]),n("div",[n("p",{staticClass:"enquete-title"},[e._v("4. 性別")]),e.inputForm.enquete4?e._e():n("p",{staticClass:"no-answer-message"},[e._v("*この質問は必須です")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete4,expression:"inputForm.enquete4"}],attrs:{type:"radio",id:"one",value:"男性"},domProps:{checked:e._q(e.inputForm.enquete4,"男性")},on:{change:function(t){return e.$set(e.inputForm,"enquete4","男性")}}}),n("label",{attrs:{for:"one"}},[e._v("男性")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete4,expression:"inputForm.enquete4"}],attrs:{type:"radio",id:"two",value:"女性"},domProps:{checked:e._q(e.inputForm.enquete4,"女性")},on:{change:function(t){return e.$set(e.inputForm,"enquete4","女性")}}}),n("label",{attrs:{for:"two"}},[e._v("女性")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete4,expression:"inputForm.enquete4"}],attrs:{type:"radio",id:"three",value:"その他"},domProps:{checked:e._q(e.inputForm.enquete4,"その他")},on:{change:function(t){return e.$set(e.inputForm,"enquete4","その他")}}}),n("label",{attrs:{for:"three"}},[e._v("その他")])]),n("div",[n("p",{staticClass:"enquete-title"},[e._v("5. 色覚異常と指摘されたことがある")]),e.inputForm.enquete5?e._e():n("p",{staticClass:"no-answer-message"},[e._v("*この質問は必須です")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete5,expression:"inputForm.enquete5"}],attrs:{type:"radio",id:"one",value:"いいえ"},domProps:{checked:e._q(e.inputForm.enquete5,"いいえ")},on:{change:function(t){return e.$set(e.inputForm,"enquete5","いいえ")}}}),n("label",{attrs:{for:"one"}},[e._v("いいえ")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete5,expression:"inputForm.enquete5"}],attrs:{type:"radio",id:"two",value:"はい"},domProps:{checked:e._q(e.inputForm.enquete5,"はい")},on:{change:function(t){return e.$set(e.inputForm,"enquete5","はい")}}}),n("label",{attrs:{for:"two"}},[e._v("はい")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete5,expression:"inputForm.enquete5"}],attrs:{type:"radio",id:"three",value:"分からない"},domProps:{checked:e._q(e.inputForm.enquete5,"分からない")},on:{change:function(t){return e.$set(e.inputForm,"enquete5","分からない")}}}),n("label",{attrs:{for:"three"}},[e._v("分からない")])]),n("div",[n("p",{staticClass:"enquete-title"},[e._v("6. このテストを受けるのは")]),e.inputForm.enquete6?e._e():n("p",{staticClass:"no-answer-message"},[e._v("*この質問は必須です")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete6,expression:"inputForm.enquete6"}],attrs:{type:"radio",id:"one",value:"1回目"},domProps:{checked:e._q(e.inputForm.enquete6,"1回目")},on:{change:function(t){return e.$set(e.inputForm,"enquete6","1回目")}}}),n("label",{attrs:{for:"one"}},[e._v("1回目")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete6,expression:"inputForm.enquete6"}],attrs:{type:"radio",id:"two",value:"2回目"},domProps:{checked:e._q(e.inputForm.enquete6,"2回目")},on:{change:function(t){return e.$set(e.inputForm,"enquete6","2回目")}}}),n("label",{attrs:{for:"two"}},[e._v("2回目")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete6,expression:"inputForm.enquete6"}],attrs:{type:"radio",id:"three",value:"3回目"},domProps:{checked:e._q(e.inputForm.enquete6,"3回目")},on:{change:function(t){return e.$set(e.inputForm,"enquete6","3回目")}}}),n("label",{attrs:{for:"three"}},[e._v("3回目")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete6,expression:"inputForm.enquete6"}],attrs:{type:"radio",id:"four",value:"それ以上"},domProps:{checked:e._q(e.inputForm.enquete6,"それ以上")},on:{change:function(t){return e.$set(e.inputForm,"enquete6","それ以上")}}}),n("label",{attrs:{for:"four"}},[e._v("それ以上")])])])},j=[],E=(n("5319"),{components:{},props:{},data:function(){return{inputForm:{enquete1:"",enquete1_other:"",enquete2:"",enquete3:"",enquete4:"",enquete5:"",enquete6:""},inputFormStatus:!1}},created:function(){var e=this;ke.$on("pageNext",(function(t){-1==t&&ke.$emit("pushAnswer",[t+1,e.inputForm])}))},watch:{"inputForm.enquete2":function(e){this.inputForm.enquete2=e.replace(/[Ａ-Ｚａ-ｚ０-９]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)-65248)}))},inputForm:{handler:function(){""!=this.inputForm.enquete1&&""!=this.inputForm.enquete2&&""!=this.inputForm.enquete3&&""!=this.inputForm.enquete4&&""!=this.inputForm.enquete5&&""!=this.inputForm.enquete6?this.inputFormStatus=!0:this.inputFormStatus=!1},deep:!0},inputFormStatus:function(){ke.$emit("changestat",this.inputFormStatus)}}}),T=E,A=(n("e03c"),Object(l["a"])(T,O,j,!1,null,"04f656e1",null)),D=A.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"enquete-en"}},[n("div",[n("p",{staticClass:"enquete-title"},[e._v("1. Mother tongue")]),e.inputForm.enquete1?e._e():n("p",{staticClass:"no-answer-message"},[e._v("*This is a required question")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete1,expression:"inputForm.enquete1"}],attrs:{type:"radio",id:"one",value:"Japanese"},domProps:{checked:e._q(e.inputForm.enquete1,"Japanese")},on:{change:function(t){return e.$set(e.inputForm,"enquete1","Japanese")}}}),n("label",{attrs:{for:"one"}},[e._v("Japanese")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete1,expression:"inputForm.enquete1"}],attrs:{type:"radio",id:"two",value:"Other"},domProps:{checked:e._q(e.inputForm.enquete1,"Other")},on:{change:function(t){return e.$set(e.inputForm,"enquete1","Other")}}}),n("label",{attrs:{for:"two"}},[e._v("Other")]),n("br"),"Other"==e.inputForm.enquete1?n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete1_other,expression:"inputForm.enquete1_other"}],staticClass:"input-form",class:{"no-answer-input":!e.inputForm.enquete1_other},attrs:{placeholder:"Your answer"},domProps:{value:e.inputForm.enquete1_other},on:{input:function(t){t.target.composing||e.$set(e.inputForm,"enquete1_other",t.target.value)}}}):e._e()]),n("div",[n("p",{staticClass:"enquete-title"},[e._v("2. How long have you studied Japanese?")]),e.inputForm.enquete2?e._e():n("p",{staticClass:"no-answer-message"},[e._v("*This is a required question")]),n("p",{staticClass:"small-title"},[e._v("Ex: 4 months, 2 years (Enter your age if you are a native speaker of Japanese)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete2,expression:"inputForm.enquete2"}],staticClass:"input-form",class:{"no-answer-input":!e.inputForm.enquete2},attrs:{placeholder:"Your answer"},domProps:{value:e.inputForm.enquete2},on:{input:function(t){t.target.composing||e.$set(e.inputForm,"enquete2",t.target.value)}}})]),n("div",[n("p",{staticClass:"enquete-title"},[e._v("3. JLPT(Japanese Language Proficiency Test) Level")]),e.inputForm.enquete3?e._e():n("p",{staticClass:"no-answer-message"},[e._v("*This is a required question")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete3,expression:"inputForm.enquete3"}],attrs:{type:"radio",id:"one",value:"Not taken"},domProps:{checked:e._q(e.inputForm.enquete3,"Not taken")},on:{change:function(t){return e.$set(e.inputForm,"enquete3","Not taken")}}}),n("label",{attrs:{for:"one"}},[e._v("Not taken")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete3,expression:"inputForm.enquete3"}],attrs:{type:"radio",id:"two",value:"N1"},domProps:{checked:e._q(e.inputForm.enquete3,"N1")},on:{change:function(t){return e.$set(e.inputForm,"enquete3","N1")}}}),n("label",{attrs:{for:"two"}},[e._v("N1")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete3,expression:"inputForm.enquete3"}],attrs:{type:"radio",id:"three",value:"N2"},domProps:{checked:e._q(e.inputForm.enquete3,"N2")},on:{change:function(t){return e.$set(e.inputForm,"enquete3","N2")}}}),n("label",{attrs:{for:"three"}},[e._v("N2")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete3,expression:"inputForm.enquete3"}],attrs:{type:"radio",id:"four",value:"N3"},domProps:{checked:e._q(e.inputForm.enquete3,"N3")},on:{change:function(t){return e.$set(e.inputForm,"enquete3","N3")}}}),n("label",{attrs:{for:"four"}},[e._v("N3")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete3,expression:"inputForm.enquete3"}],attrs:{type:"radio",id:"five",value:"N4"},domProps:{checked:e._q(e.inputForm.enquete3,"N4")},on:{change:function(t){return e.$set(e.inputForm,"enquete3","N4")}}}),n("label",{attrs:{for:"five"}},[e._v("N4")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete3,expression:"inputForm.enquete3"}],attrs:{type:"radio",id:"six",value:"N5"},domProps:{checked:e._q(e.inputForm.enquete3,"N5")},on:{change:function(t){return e.$set(e.inputForm,"enquete3","N5")}}}),n("label",{attrs:{for:"six"}},[e._v("N5")])]),n("div",[n("p",{staticClass:"enquete-title"},[e._v("4. Sex")]),e.inputForm.enquete4?e._e():n("p",{staticClass:"no-answer-message"},[e._v("*This is a required question")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete4,expression:"inputForm.enquete4"}],attrs:{type:"radio",id:"one",value:"Male"},domProps:{checked:e._q(e.inputForm.enquete4,"Male")},on:{change:function(t){return e.$set(e.inputForm,"enquete4","Male")}}}),n("label",{attrs:{for:"one"}},[e._v("Male")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete4,expression:"inputForm.enquete4"}],attrs:{type:"radio",id:"two",value:"Female"},domProps:{checked:e._q(e.inputForm.enquete4,"Female")},on:{change:function(t){return e.$set(e.inputForm,"enquete4","Female")}}}),n("label",{attrs:{for:"two"}},[e._v("Female")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete4,expression:"inputForm.enquete4"}],attrs:{type:"radio",id:"three",value:"Other"},domProps:{checked:e._q(e.inputForm.enquete4,"Other")},on:{change:function(t){return e.$set(e.inputForm,"enquete4","Other")}}}),n("label",{attrs:{for:"three"}},[e._v("Other")])]),n("div",[n("p",{staticClass:"enquete-title"},[e._v("5. Have you ever been pointed out to have color vision deficiency?")]),e.inputForm.enquete5?e._e():n("p",{staticClass:"no-answer-message"},[e._v("*This is a required question")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete5,expression:"inputForm.enquete5"}],attrs:{type:"radio",id:"one",value:"No"},domProps:{checked:e._q(e.inputForm.enquete5,"No")},on:{change:function(t){return e.$set(e.inputForm,"enquete5","No")}}}),n("label",{attrs:{for:"one"}},[e._v("No")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete5,expression:"inputForm.enquete5"}],attrs:{type:"radio",id:"two",value:"Yes"},domProps:{checked:e._q(e.inputForm.enquete5,"Yes")},on:{change:function(t){return e.$set(e.inputForm,"enquete5","Yes")}}}),n("label",{attrs:{for:"two"}},[e._v("Yes")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete5,expression:"inputForm.enquete5"}],attrs:{type:"radio",id:"three",value:"Not sure"},domProps:{checked:e._q(e.inputForm.enquete5,"Not sure")},on:{change:function(t){return e.$set(e.inputForm,"enquete5","Not sure")}}}),n("label",{attrs:{for:"three"}},[e._v("Not sure")])]),n("div",[n("p",{staticClass:"enquete-title"},[e._v("6. How many times have you taken this test?")]),e.inputForm.enquete6?e._e():n("p",{staticClass:"no-answer-message"},[e._v("*This is a required question")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete6,expression:"inputForm.enquete6"}],attrs:{type:"radio",id:"one",value:"1回目"},domProps:{checked:e._q(e.inputForm.enquete6,"1回目")},on:{change:function(t){return e.$set(e.inputForm,"enquete6","1回目")}}}),n("label",{attrs:{for:"one"}},[e._v("This is the first time")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete6,expression:"inputForm.enquete6"}],attrs:{type:"radio",id:"two",value:"2回目"},domProps:{checked:e._q(e.inputForm.enquete6,"2回目")},on:{change:function(t){return e.$set(e.inputForm,"enquete6","2回目")}}}),n("label",{attrs:{for:"two"}},[e._v("The 2nd time")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete6,expression:"inputForm.enquete6"}],attrs:{type:"radio",id:"three",value:"3回目"},domProps:{checked:e._q(e.inputForm.enquete6,"3回目")},on:{change:function(t){return e.$set(e.inputForm,"enquete6","3回目")}}}),n("label",{attrs:{for:"three"}},[e._v("The 3rd time")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.enquete6,expression:"inputForm.enquete6"}],attrs:{type:"radio",id:"four",value:"それ以上"},domProps:{checked:e._q(e.inputForm.enquete6,"それ以上")},on:{change:function(t){return e.$set(e.inputForm,"enquete6","それ以上")}}}),n("label",{attrs:{for:"four"}},[e._v("More than 3 times")])])])},M=[],I={components:{},props:{},data:function(){return{inputForm:{enquete1:"",enquete1_other:"",enquete2:"",enquete3:"",enquete4:"",enquete5:"",enquete6:""},inputFormStatus:!1}},created:function(){var e=this;ke.$on("pageNext",(function(t){-1==t&&ke.$emit("pushAnswer",[t+1,e.inputForm])}))},watch:{"inputForm.enquete2":function(e){this.inputForm.enquete2=e.replace(/[Ａ-Ｚａ-ｚ０-９]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)-65248)}))},inputForm:{handler:function(){""!=this.inputForm.enquete1&&""!=this.inputForm.enquete2&&""!=this.inputForm.enquete3&&""!=this.inputForm.enquete4&&""!=this.inputForm.enquete5&&""!=this.inputForm.enquete6?this.inputFormStatus=!0:this.inputFormStatus=!1},deep:!0},inputFormStatus:function(){ke.$emit("changestat",this.inputFormStatus)}}},U=I,B=(n("a646"),Object(l["a"])(U,J,M,!1,null,"1376c716",null)),L=B.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"example-image-qa"}},[n("p",{staticClass:"notes-title"},[e._v("例題")]),n("p",[e._v(e._s(e.note))]),n("p",{staticClass:"bold"},[e._v(e._s(e.instruction))]),n("p",{staticClass:"caption-text"},[e._v(e._s(e.fitbCaption))]),n("div",{attrs:{id:"image-block"}},[n("img",{attrs:{src:e.imageSrc}})]),e._m(0),n("p",{staticClass:"notes-example"},[e._v("答えの例")]),n("p",{staticStyle:{"font-size":"1.2rem","text-align":"center"}},[e._v("くわえ")]),n("Notes",{attrs:{lang:e.lang}})],1)},Y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("p",[e._v("答え")]),n("input",{staticClass:"no-answer-input",attrs:{placeholder:"回答を入力"}})]),n("div",[n("p",[e._v("第2候補 (2nd best)")]),n("input",{attrs:{placeholder:"回答を入力"}})]),n("div",[n("p",[e._v("第3候補 (3rd best)")]),n("input",{attrs:{placeholder:"回答を入力"}})])])}],H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app-notes"}},["ja"==e.lang?n("div",[n("p",{staticClass:"notes-title"},[e._v("注意")]),e._m(0)]):e._e(),"en"==e.lang?n("div",[n("p",{staticClass:"notes-title"},[e._v("Notes")]),e._m(1)]):e._e()])},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("空欄に当てはまる言葉だけを書いてください")]),n("li",{staticClass:"caution"},[e._v("一度次のページへ行くと前には戻れません。ミスがないか確認してから次に進んでください")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("Input the answer which just corresponds to the blank")]),n("li",{staticClass:"caution"},[e._v("This system doesn't allow users to go back to previous pages. Please check the answer again before going to the next page")])])}],z={props:{lang:String},data:function(){return{}}},G=z,K=(n("b0f0"),Object(l["a"])(G,H,R,!1,null,"5df5a04d",null)),X=K.exports,V={components:{Notes:X},props:{lang:String},data:function(){return{fitbCaption:"犬がフリスビーを＿＿て走っています。",imageSrc:"./assets/images/dog_frisbee.jpg"}},computed:{instruction:function(){return"en"==this.lang?"Fiil in the blank to complete the sentence which best describes the image":"画像に対する適切な説明文となるように空欄を埋めてください"},note:function(){return"en"==this.lang?"NOTE: DO NOT USE any outside sources: dictionaries, translation services, friends, etc.":"注意: 辞書や翻訳サービスを利用したりや知人に頼ったりしないでください"}}},W=V,Z=(n("dd7f"),Object(l["a"])(W,Q,Y,!1,null,"45d33d80",null)),ee=Z.exports,te={components:{Enquete:D,EnqueteEn:L,ExampleImageQA:ee},props:{lang:String},data:function(){return{}}},ne=te,re=(n("a317"),Object(l["a"])(ne,P,S,!1,null,"4fa5dce9",null)),ae=re.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"image-qa"}},[n("p",[e._v(e._s(e.note))]),n("p",{staticClass:"bold"},[e._v(e._s(e.instruction))]),n("p",{staticClass:"caption-text"},[e._v(e._s(e.fitbCaption_bef)+"＿＿"+e._s(e.fitbCaption_aft))]),n("div",{attrs:{id:"image-block"}},[n("img",{attrs:{src:e.imageSrc}})]),e._m(0),n("div",[e.mondaiNum>40?n("div",["ja"==e.lang?n("p",{staticClass:"bold"},[e._v("が, で, に, の, を, のどれかで答えてください")]):e._e(),"en"==e.lang?n("p",{staticClass:"bold"},[e._v("Select one from が, で, に, の or を")]):e._e()]):e._e(),n("div",[n("p",[e._v("答え "),e.inputForm.answer?e._e():n("span",{staticClass:"no-answer-message"},[e._v("*この質問は必須です (Required)")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.answer,expression:"inputForm.answer"}],class:{"no-answer-input":!e.inputForm.answer},attrs:{placeholder:"回答を入力"},domProps:{value:e.inputForm.answer},on:{input:function(t){t.target.composing||e.$set(e.inputForm,"answer",t.target.value)}}})]),n("div",[n("p",[e._v("第2候補 (2nd best)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.answer_1,expression:"inputForm.answer_1"}],attrs:{placeholder:"回答を入力"},domProps:{value:e.inputForm.answer_1},on:{input:function(t){t.target.composing||e.$set(e.inputForm,"answer_1",t.target.value)}}})]),n("div",[n("p",[e._v("第3候補 (3rd best)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputForm.answer_2,expression:"inputForm.answer_2"}],attrs:{placeholder:"回答を入力"},domProps:{value:e.inputForm.answer_2},on:{input:function(t){t.target.composing||e.$set(e.inputForm,"answer_2",t.target.value)}}})])]),n("Notes",{attrs:{lang:e.lang}})],1)},ie=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticStyle:{"text-align":"right",margin:"0"}},[n("a",{attrs:{href:"http://mscoco.org",target:"_blank"}},[e._v("COCO dataset")]),e._v("の画像を使用")])}],ue={components:{Notes:X},props:{lang:String,mset:Array,curnum:Number,ansdict:Object},data:function(){return{inputForm:{answer:"",answer_1:"",answer_2:""},inputFormStatus:!1}},created:function(){var e=this;ke.$on("pageNext",(function(t){t>=0&&(ke.$emit("pushAnswer",[t+1,e.inputForm]),e.inputForm={answer:"",answer_1:"",answer_2:""})}))},computed:{mondaiNum:function(){return this.mset[this.curnum][0]},instruction:function(){return"en"==this.lang?this.mset[this.curnum][1].split("=")[1]:this.mset[this.curnum][1].split("=")[0]},fitbCaption_bef:function(){return this.mset[this.curnum][2]},fitbCaption_aft:function(){return this.mset[this.curnum][3]},imageSrc:function(){return"./assets/images/"+this.mset[this.curnum][4]},note:function(){return"en"==this.lang?"NOTE: DO NOT USE any outside sources: dictionaries, translation services, friends, etc.":"注意: 辞書や翻訳サービスを利用したりや知人に頼ったりしないでください"}},watch:{inputForm:{handler:function(){""!=this.inputForm.answer?this.inputFormStatus=!0:this.inputFormStatus=!1},deep:!0},inputFormStatus:function(){ke.$emit("changestat",this.inputFormStatus)}}},se=ue,pe=(n("37b4"),Object(l["a"])(se,oe,ie,!1,null,"229ccb50",null)),me=pe.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"thanks"}},[n("h2",[e._v(e._s(e.message))])])},le=[],de=(n("fb6a"),n("0d03"),n("8aa5")),ve=n.n(de),he={props:{query:String,ansdict:Object},data:function(){return{message:"結果をサーバーにアップロード中です"}},created:function(){var e=this.ansdict[0]["回答"]["enquete1"],t=this.ansdict[0]["回答"]["enquete1_other"],n=this.ansdict[0]["回答"]["enquete6"],r=this.getNowtime(),a=e+t+"-$"+n+"_"+r+".json";this.uploadJSON(this.ansdict,a)},methods:{getNowtime:function(){var e=new Date,t=e.getMonth()+1,n=e.getDate(),r=e.getHours(),a=e.getMinutes(),o=("0"+t).slice(-2),i=("0"+n).slice(-2),u=("0"+r).slice(-2),s=("0"+a).slice(-2);return o+i+u+s},uploadJSON:function(e,t){var n=this,r=JSON.stringify(e,null,"\t"),a=ve.a.storage().ref("results_"+this.query),o=a.child(t),i=o.putString(r),u=new Promise((function(e){i.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),e.state){case ve.a.storage.TaskState.PAUSED:console.log("Upload is paused");break;case ve.a.storage.TaskState.RUNNING:console.log("Upload is running");break}}),(function(t){console.log(t.code),alert("結果がアップロードされませんでした\n[Error] "+t.code),e("結果のアップロードに失敗しました")}),(function(){console.log("Uploaded json file!"),e("ご協力ありがとうございました！")}))}));u.then((function(e){n.message=e}))}}},fe=he,qe=(n("6120"),Object(l["a"])(fe,ce,le,!1,null,"2efa6761",null)),_e=qe.exports,Fe={components:{FirstPage:ae,ImageQA:me,Thanks:_e},props:{lang:String,query:String,mset:Array,curnum:Number,ttlnum:Number,ansdict:Object},data:function(){return{}}},ge=Fe,be=(n("7acd"),Object(l["a"])(ge,k,C,!1,null,"08433607",null)),we=be.exports,Ne={components:{"app-header":v,"app-title":g,"router-view":we,"app-nav":$},prop:{},data:function(){return{lang:"ja",langBtn:"English",currentNum:-1,mondaiSet:null,totalNum:null,answerDict:{}}},created:function(){var e=this,t=new URL(location.href),n=t.searchParams.get("query");this.query=n,console.log("query:",this.query);var r="./assets/"+n+".csv";"demo"!=n&&(location.href="error.html"),u.a.get(r).then((function(t){e.mondaiSet=e.csv2array(t.data),e.totalNum=e.mondaiSet.length,e.answerDict[0]={"問題":"アンケート","回答":null};for(var n=0;n<e.totalNum;n++)e.answerDict[n+1]={"問題":e.mondaiSet[n],"回答":null};console.log(e.answerDict)})),ke.$on("pageNext",(function(t){e.currentNum=t+1,window.scrollTo({top:0,behavior:"smooth"})})),ke.$on("pushAnswer",(function(t){e.answerDict[t[0]]["回答"]=t[1],console.log(e.answerDict)}))},methods:{switchLang:function(){"ja"==this.lang?(this.lang="en",this.langBtn="日本語"):(this.lang="ja",this.langBtn="English")},csv2array:function(e){var t=new Array,n=e.split("\n");return n.forEach((function(e){0!=e.length&&t.push(e.split(","))})),t}}},ye=Ne,xe=(n("1b72"),Object(l["a"])(ye,a,o,!1,null,"73f64be4",null)),$e=xe.exports;n.d(t,"bus",(function(){return ke}));var ke=new r["a"];r["a"].config.productionTip=!1;var Ce={apiKey:"api-key",authDomain:"project-id.firebaseapp.com",databaseURL:"https://project-id.firebaseio.com",projectId:"project-id",storageBucket:"project-id.appspot.com",messagingSenderId:"sender-id",appID:"app-id"};ve.a.initializeApp(Ce),new r["a"]({render:function(e){return e($e)}}).$mount("#app")},6120:function(e,t,n){"use strict";var r=n("bab3"),a=n.n(r);a.a},6913:function(e,t,n){},"7acd":function(e,t,n){"use strict";var r=n("1f3b"),a=n.n(r);a.a},8602:function(e,t,n){},"9b44":function(e,t,n){},a13c:function(e,t,n){},a317:function(e,t,n){"use strict";var r=n("9b44"),a=n.n(r);a.a},a646:function(e,t,n){"use strict";var r=n("8602"),a=n.n(r);a.a},adbc:function(e,t,n){},b0f0:function(e,t,n){"use strict";var r=n("a13c"),a=n.n(r);a.a},bab3:function(e,t,n){},c580:function(e,t,n){"use strict";var r=n("adbc"),a=n.n(r);a.a},cd80:function(e,t,n){},d1a7:function(e,t,n){},d628:function(e,t,n){"use strict";var r=n("eebd"),a=n.n(r);a.a},dd7f:function(e,t,n){"use strict";var r=n("4525"),a=n.n(r);a.a},e03c:function(e,t,n){"use strict";var r=n("d1a7"),a=n.n(r);a.a},eebd:function(e,t,n){}});
//# sourceMappingURL=app.f5c8d72e.js.map