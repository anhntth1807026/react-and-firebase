import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCsqo0XkzCUYuZfBO9lZVH57lpZQ_GvIKw",
    authDomain: "confident-key-255202.firebaseapp.com",
    databaseURL: "https://confident-key-255202.firebaseio.com",
    projectId: "confident-key-255202",
    storageBucket: "confident-key-255202.appspot.com",
    messagingSenderId: "1052324852327",
    appId: "1:1052324852327:web:6d8623bd8269d046e81ac2",
    measurementId: "G-P94D57SZKZ"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}
export default Firebase;