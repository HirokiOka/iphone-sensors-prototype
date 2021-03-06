import { postDataChunck } from "./firebaseConfig";
import { checkIsStorageAvailable, getCurrentTimestampAsString } from "./utils";

const intervalMillisec: number = 1000;
const postDataSize: number = 10;
const collectionName: string = "test";

interface SensorValues {
  "aclX": number | null;
  "aclY": number | null;
  "aclZ": number | null;
  "rotA": number | null;
  "rotB": number | null;
  "rotG": number | null
};

let sensorValues: SensorValues = {
  "aclX": 0.00,
  "aclY": 0.00,
  "aclZ": 0.00,
  "rotA": 0.00,
  "rotB": 0.00,
  "rotG": 0.00
};

if (checkIsStorageAvailable()) {
  localStorage.clear();
  setInterval(async () => {
    const currentTimestamp: string = getCurrentTimestampAsString();
    localStorage.setItem(currentTimestamp, JSON.stringify(sensorValues));
    if (localStorage.length >= postDataSize) {
      let postData: object = {};
      Object.entries({ ...localStorage }).forEach(([key, value]) => postData[key] = JSON.parse(value));
      postDataChunck(collectionName, postData);
      localStorage.clear();
    }
  }, intervalMillisec);
} else {
  window.alert('Local storage is not available in this browser');
}

async function getRequestPermission(): Promise<string> {
  if (typeof DeviceMotionEvent.requestPermission !== 'function') return 'denied';
  return await DeviceMotionEvent.requestPermission();
}

const aclX: HTMLElement | null = document.getElementById("acl-x");
const btn: HTMLElement | null = document.getElementById('btn');
if (btn != null) {
  btn.addEventListener('click', async () => {
    const permission: string = await getRequestPermission();
    if (permission !== 'granted') return;
    window.addEventListener('devicemotion', async (e: DeviceMotionEvent) => {
      if ((e.acceleration == null) || e.rotationRate == null) return;
      sensorValues = {
        "aclX": e.acceleration.x,
        "aclY": e.acceleration.y,
        "aclZ": e.acceleration.z,
        "rotA": e.rotationRate.alpha,
        "rotB": e.rotationRate.beta,
        "rotG": e.rotationRate.gamma
      };
      if (aclX == null) return;
      aclX.textContent = sensorValues["aclX"].toString();
    });
  });
}
