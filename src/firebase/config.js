import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB98f8xbLWfKzaqnKFuxbXw2VWTKL39nDg",
  authDomain: "mini-blog-react-7ad36.firebaseapp.com",
  projectId: "mini-blog-react-7ad36",
  storageBucket: "mini-blog-react-7ad36.appspot.com",
  messagingSenderId: "246326162811",
  appId: "1:246326162811:web:249c1fc77c95e925ee79de"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };