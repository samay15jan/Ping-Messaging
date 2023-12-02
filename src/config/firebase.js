import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDTVFkRG1WypXzcHX7jdT-6LzULBj9Z67c",
    authDomain: "ping-58b68.firebaseapp.com",
    databaseURL: "https://ping-58b68-default-rtdb.firebaseio.com",
    projectId: "ping-58b68",
    storageBucket: "ping-58b68.appspot.com",
    messagingSenderId: "646240473689",
    appId: "1:646240473689:web:0059b22227c4d13a4e5748",
    measurementId: "G-85P8VWSP0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
