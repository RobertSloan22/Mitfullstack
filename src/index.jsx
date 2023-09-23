import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './app/store'
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuratio
const firebaseConfig = {
  apiKey: "AIzaSyAL1HQRe0OIrmFXlY6n4veT0JfHpOdRpmE",
  authDomain: "mit-2023-firebase01.firebaseapp.com",
  databaseURL: "https://mit-2023-firebase01-default-rtdb.firebaseio.com",
  projectId: "mit-2023-firebase01",
  storageBucket: "mit-2023-firebase01.appspot.com",
  messagingSenderId: "1052539983696",
  appId: "1:1052539983696:web:7fcf9ad4eafd85636f7e55"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
