import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const config={
    apiKey: "AIzaSyDE-VRTWO7_tqDpsrfgpbNouBR_cDNStNA",
    authDomain: "restfree-fb70d.firebaseapp.com",
    databaseURL: "https://restfree-fb70d.firebaseio.com",
    projectId: "restfree-fb70d",
    storageBucket: "restfree-fb70d.appspot.com",
    messagingSenderId: "474057732963",
    appId: "1:474057732963:web:fe2ca3211749107f"
}

class Firebase{
    constructor(){
        this.firebaseApp=firebase.initializeApp(config);
        this.db = this.firebaseApp.firestore();
    }
}
export default Firebase;