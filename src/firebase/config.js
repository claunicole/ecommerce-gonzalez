
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXd-2K44jPmyxyufz0O5xP3ImezjfoXWI",
  authDomain: "ecommerce-coder-tradegames.firebaseapp.com",
  projectId: "ecommerce-coder-tradegames",
  storageBucket: "ecommerce-coder-tradegames.appspot.com",
  messagingSenderId: "26970223456",
  appId: "1:26970223456:web:b1afea7304354e1c44a405"
};


const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
}