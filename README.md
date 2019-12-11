# fitb-app-firebase

## Project setup
- install node packages
```
npm install
npm install firebase --save
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
