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


firebase.initializeApp(config);

export const createRestaurantDocument =async (userAuth, additionalData) => {
  const reF=firestore.collection('restaurants').doc();//.collection('branches').doc();//.doc('subdoc1').collection('admins').doc('sub_subdoc1');
  await reF.set({'0':''});
  const reF2=await reF.collection('branches').doc();
  await reF2.set({'1':''});

  //await reF2.collection('admins').doc().set({name:'fernando'});
  //await reF2.collection('admins').doc().set({name:'degar'});
  
  //const snap = await reF.get();
  /*if(!snap.exists){
    await reF.set({
      email:'fernando@hotmail.com'
    });
  }*/
  console.log('-----------------');
  
  console.log('-----------------');
  //const newId=firestore.createId();
  //console.log(newId);
  //const restId = firestore.collection('restaurants').doc().getId();
  //const branchesRef = firestore.collection('restaurants').doc(restId).collection('branches');
  //branchesRef.collection('admins');
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`admins/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
    await createRestaurantDocument();

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
