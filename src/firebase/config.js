import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdhz2iopI0Zi2yDm_tMU17zBZXI-s3WNM",
  authDomain: "mini-blog-13170.firebaseapp.com",
  projectId: "mini-blog-13170",
  storageBucket: "mini-blog-13170.appspot.com",
  messagingSenderId: "776628496310",
  appId: "1:776628496310:web:b2b4140ff732e28f2c0317"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };