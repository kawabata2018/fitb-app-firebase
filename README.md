# fitb-app-firebase

## Project setup
- install node packages
```
npm install
```

- replace with your Firebase configuration in `src/main.js`
```
var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appID: "app-id",
};
```

- For more details on Firebase, see https://firebase.google.com/docs/hosting/quickstart?hl=ja

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Loads the page on localhost
```
http://localhost:8090/?query=demo
```

### Components structure
![components](/public/fitb-app.png)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
