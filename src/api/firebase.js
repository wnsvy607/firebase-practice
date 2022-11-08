/* 파이어 베이스 api */
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from '@firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDMo8HLoTyNatSDZb-fl4XJAKWkiDkNJRE",
    authDomain: "project-11178.firebaseapp.com",
    projectId: "project-11178",
    storageBucket: "project-11178.appspot.com",
    messagingSenderId: "748623101795",
    appId: "1:748623101795:web:4784e702cf3edff3fedd56",
    measurementId: "G-8QQV24ZQC0",
};
initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
const auth = getAuth();

function GoogleLogin() {
    signInWithPopup(auth, provider)
        .then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })
}

export {
    GoogleLogin,
}
