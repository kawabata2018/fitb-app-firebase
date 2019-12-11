<template>
    <div id="thanks">
        <h2>{{message}}</h2>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
    props: {
        query:String,
        ansdict:Object
    },
    data(){
        return {
            message: "結果をサーバーにアップロード中です"
        }
    },
    created(){
        let lang = this.ansdict[0]["回答"]["enquete1"];
        let lang_oth = this.ansdict[0]["回答"]["enquete1_other"];
        let kaisuu = this.ansdict[0]["回答"]["enquete6"];
        let nowtime = this.getNowtime();
        let filename = lang+lang_oth+"-$"+kaisuu+"_"+nowtime+".json";
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
                    res("結果のアップロードに失敗しました");
                }, function() {
                    console.log('Uploaded json file!');
                    res("ご協力ありがとうございました！");
                })
            })
            promise.then((res) => {
                this.message = res;
            })
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
</style>