import React from "react";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Header from './components/header/header.component.tsx'
import Home from './components/home/home.component.tsx'
import Services from './components/services/services.component.tsx'
import Enterprise from './components/enterprise/enterprise.component.tsx'
import Contact from './components/contact/contact.component.tsx'
import Footer from './components/footer/footer.component.tsx'
import "./App.css";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3HMz1rdZwJaLt3SwaKxOx9eK43iIFCZg",
    authDomain: "giron-web.firebaseapp.com",
    projectId: "giron-web",
    storageBucket: "giron-web.appspot.com",
    messagingSenderId: "298733999284",
    appId: "1:298733999284:web:e566c0abe7c7e8f08bf3e1",
    measurementId: "G-GZ1CRED59P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div id="app" className="App">
      <div className="App-container">
        <Header/>
        <Home/>
        <Enterprise/>
        <Services/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;