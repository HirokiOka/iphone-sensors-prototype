import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

interface Config {
  apiKey: string | undefined;
  authDomain: string | undefined;
  projectId: string | undefined;
  storageBucket: string | undefined;
  messagingSenderId: string | undefined;
  appId: string | undefined
};

const firebaseConfig: Config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function postDataChunck(collectionName: string, dataObj: object): Promise<void> {
  try {
    const docRef = await addDoc(collection(db, collectionName), dataObj);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getAllDbData(collectionName: string): Promise<object> {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const result: any = {};
  querySnapshot.forEach((doc: any) => {
    const allData = doc.data();
    Object.keys(allData).forEach((timestamp: string, _) => {
      result[timestamp] = JSON.parse(allData[timestamp]);
    });
  });
  return result;
}

export { postDataChunck, getAllDbData };
