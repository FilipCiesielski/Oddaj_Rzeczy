import app from 'firebase/app';
import 'firebase/auth';
import FirebaseContext from "./Contex";


var firebaseConfig = {
    apiKey: "AIzaSyCaYaZKzy6TXO9LJXt6oqvHMtWIz6s4HUY",
    authDomain: "oddaj-rzeczy-4380c.firebaseapp.com",
    databaseURL: "https://oddaj-rzeczy-4380c.firebaseio.com",
    projectId: "oddaj-rzeczy-4380c",
    storageBucket: "",
    messagingSenderId: "932531589476",
    appId: "1:932531589476:web:84440183d03de7a4f3aa71"
};

class Firebase {

    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
}

export default Firebase;
export {FirebaseContext};



