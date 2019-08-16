import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import {getCollectionById,getUidsCollectionById} from './queries';

const config={
    apiKey: "AIzaSyDE-VRTWO7_tqDpsrfgpbNouBR_cDNStNA",
    authDomain: "restfree-fb70d.firebaseapp.com",
    databaseURL: "https://restfree-fb70d.firebaseio.com",
    projectId: "restfree-fb70d",
    storageBucket: "restfree-fb70d.appspot.com",
    messagingSenderId: "474057732963",
    appId: "1:474057732963:web:fe2ca3211749107f"
}


firebase.initializeApp(config);

export const createRestaurantDocument =async (userAuth, additionalData) => {
  const reF=firestore.collection('restaurants').doc();
  await reF.set({'0':''});
  const reF2=await reF.collection('branches').doc();
  await reF2.set({'1':''});
}

export const getAllUser= async()=>{
  return await getCollectionById(firestore,"admins");
}

export const getAllRest= async()=>{
  return await getUidsCollectionById(firestore,"restaurants");
}

export const deleteRest= async(element)=>{
  /**/
}
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`admins/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
    //await createRestaurantDocument();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date().toISOString();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        }
        );
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    
    return userRef;
  };
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
