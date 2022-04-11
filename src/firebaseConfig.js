var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
;
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
function postDataChunck(collectionName, dataObj) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const docRef = yield addDoc(collection(db, collectionName), dataObj);
        }
        catch (e) {
            console.error("Error adding document: ", e);
        }
    });
}
function getAllDbData(collectionName) {
    return __awaiter(this, void 0, void 0, function* () {
        const querySnapshot = yield getDocs(collection(db, collectionName));
        const result = {};
        querySnapshot.forEach((doc) => {
            const allData = doc.data();
            Object.keys(allData).forEach((timestamp, _) => {
                result[timestamp] = JSON.parse(allData[timestamp]);
            });
        });
        return result;
    });
}
export { postDataChunck, getAllDbData };
