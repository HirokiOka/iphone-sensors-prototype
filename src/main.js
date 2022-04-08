import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig.js";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { checkIsStorageAvailable, getSensorValues, setDummyValues, updateValues, getCurrentTimestampAsString } from "./functions.js";
import { displaySensorValues, displayMessage } from "./display.js";

const intervalMillisec = 1000;
const sensorValues = {
  "aclXVal": 0,
  "aclYVal": 0,
  "aclZVal": 0,
  "rotAVal": 0,
  "rotBVal": 0,
  "rotGVal": 0
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionName = "test";

async function postDataChunck(database, collectionName, dataObj) {
  try {
    const docRef = await addDoc(collection(database, collectionName), dataObj);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getAllDbData(database, collectionName) {
  const querySnapshot = await getDocs(collection(database, collectionName));
  const result = {};
  querySnapshot.forEach((doc) => {
    const allData = doc.data();
    Object.keys(allData).forEach((ts, _) => {
      const values = JSON.parse(allData[ts]);
      result[ts] = values;
    });
  });
  return result;
}

if (checkIsStorageAvailable('localStorage')) {
  localStorage.clear();
  setInterval(async () => {
    //setDummyValues(sensorValues);
    const currentTimestamp = getCurrentTimestampAsString();
    localStorage.setItem(currentTimestamp, JSON.stringify(sensorValues));
    displaySensorValues(sensorValues);
    if (localStorage.length === 10) {
      const postData = { ...localStorage };
      postDataChunck(db, collectionName, postData);
      localStorage.clear();
    }
  }, intervalMillisec);
} else {
  window.alert('Local storage is not available in this browser');
}

document.getElementById('btn').addEventListener('click', async () => {
  if (typeof DeviceMotionEvent.requestPermission !== 'function') return;
  const permission = await DeviceMotionEvent.requestPermission();
  if (permission !== 'granted') return;
  window.addEventListener('devicemotion', async (e) => {
    const currentSensorValues = getSensorValues(e);
    updateValues(sensorValues, currentSensorValues);
  });
});
