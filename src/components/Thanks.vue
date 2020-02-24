<template>
    <div id="thanks">
        <div id="image-block" v-if="uploadTask=='S'"><img v-bind:src="imageSrc"></div>
        <h2>{{message}}</h2>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    props: {
        ansdict:Object
    },
    data(){
        return {
            uploadTask: null,
            imageSrc: "./assets/check.png",
        }
    },
    created(){
        let lang = this.ansdict[0]["回答"]["enquete1"];
        let lang_oth = this.ansdict[0]["回答"]["enquete1_other"];
        let exp = this.ansdict[0]["回答"]["enquete2"];
        let kaisuu = this.ansdict[0]["回答"]["enquete6"];
        let nowtime = this.getNowtime();
        let filename = "$"+kaisuu+"-"+lang+lang_oth+"-"+exp+"_"+nowtime+".json";
        this.uploadJSON(this.ansdict, filename)
    },
    methods: {
        getNowtime: function(){
            let today = new Date();
            let month = today.getMonth()+1;
            let day = today.getDate();
            let hour = today.getHours();
            let minute = today.getMinutes();
            let MM = ("0"+month).slice(-2);
            let DD = ("0"+day).slice(-2);
            let hh = ("0"+hour).slice(-2);
            let mm = ("0"+minute).slice(-2);
            return MM+DD+hh+mm;
        },
        uploadJSON: function(jsonData, filename){
            // Convert to string
            let jsonString = JSON.stringify(jsonData, null, "\t");
            // Create a root reference
            let storageRef = firebase.storage().ref('results_'+this.query);
            // Create a reference to csv file
            let jsonFileRef = storageRef.child(filename);
            // Upload
            let upload = jsonFileRef.putString(jsonString);
            let promise = new Promise((res) => {
                upload.on('state_changed', function(snapshot){
                    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED:
                            console.log('Upload is paused');
                            break;
                        case firebase.storage.TaskState.RUNNING:
                            console.log('Upload is running');
                            break;
                    }
                }, function(error) {
                    console.log(error.code);
                    alert('結果がアップロードされませんでした\n[Error] '+error.code);
                    res("F")
                }, function() {
                    console.log('Successfully uploaded');
                    res("S")
                })
            })
            promise.then((res) => {
                this.uploadTask = res;
                console.log(this.uploadTask);
            })
        }
    },
    computed: {
        lang: function(){
            return this.$store.state.lang
        },
        query: function(){
            return this.$store.state.query
        },
        message: function(){
            if (this.uploadTask=='F') {
                if (this.lang=='en') {
                    return "Failed to upload the data"
                } else {
                    return "結果のアップロードに失敗しました"
                }
            } else if (this.uploadTask=='S') {
                if (this.lang=='en') {
                    return "Thank you for your cooperation!"
                } else {
                    return "ご協力ありがとうございました！"
                }
            } else {
                if (this.lang=='en') {
                    return "Uploading. Please wait ..."
                } else {
                    return "結果をサーバーにアップロード中です"
                }
            }
        }
    }
}
</script>

<style scoped>
#thanks {
    margin:0;
}
.caution {
    font-size:1.2rem;
    font-weight:bold;
    color:red;
}
#image-block {
    position:relative;
    display:block;
    margin:10px auto;
    padding:10px;
    max-width:90%;
    height:20vh;
}
img {
    position:absolute;
    width:auto;
    height:auto;
    max-width:90%;
    max-height:90%;
}
</style>