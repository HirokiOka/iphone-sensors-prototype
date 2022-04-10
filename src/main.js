import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig.js";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { checkIsStorageAvailable, fixSensorValues, setDummyValues, updateValues, getCurrentTimestampAsString } from "./utils.js";
import { displaySensorValues } from "./display.js";

const intervalMillisec = 1000;
const postDataSize = 10;
const sensorValues = {
  "aclX": 0.00,
  "aclY": 0.00,
  "aclZ": 0.00,
  "rotA": 0.00,
  "rotB": 0.00,
  "rotG": 0.00
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionName = "test";

async function postDataChunck(database, collectionName, dataObj) {
  try {
    const docRef = await addDoc(collection(database, collectionName), dataObj);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getAllDbData(database, collectionName) {
  const querySnapshot = await getDocs(collection(database, collectionName));
  const result = {};
  querySnapshot.forEach((doc) => {
    const allData = doc.data();
    Object.keys(allData).forEach((timestamp, _) => {
      result[ts] = JSON.parse(allData[timestamp]);
    });
  });
  return result;
}

if (checkIsStorageAvailable('localStorage')) {
  localStorage.clear();
  setInterval(async () => {
    setDummyValues(sensorValues);
    const currentTimestamp = getCurrentTimestampAsString();
    localStorage.setItem(currentTimestamp, JSON.stringify(sensorValues));
    displaySensorValues(sensorValues);
    if (localStorage.length === postDataSize) {
      let postData = {};
      Object.entries({ ...localStorage }).forEach(([key, value]) => postData[key] = JSON.parse(value));
      //postDataChunck(db, collectionName, postData);
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
    const valuesObj = {
      aclX: e.acceleration.x,
      aclY: e.acceleration.y,
      aclZ: e.acceleration.z,
      rotA: e.rotationRate.alpha,
      rotB: e.rotationRate.beta,
      rotG: e.rotationRate.gamma
    };
    const currentSensorValues = fixSensorValues(valuesObj);
    updateValues(sensorValues, currentSensorValues);
  });
});
