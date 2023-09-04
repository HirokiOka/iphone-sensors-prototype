//import { postDataChunck } from "./firebaseConfig";
import { checkIsStorageAvailable, getCurrentTimestampAsString } from "./utils";

const intervalMillisec: number = 1000;
const postDataSize: number = 10;
const collectionName: string = "test";

interface SensorValues {
  "aclX": number;
  "aclY": number;
  "aclZ": number;
  "rotA": number;
  "rotB": number;
  "rotG": number;
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
    //localStorage.setItem(currentTimestamp, JSON.stringify(sensorValues));
    if (localStorage.length >= postDataSize) {
      let postData: object = {};
      /*
      Object.entries({ ...localStorage }).forEach(([key, value]) => postData[key] = JSON.parse(value));
      //postDataChunck(collectionName, postData);
      localStorage.clear();
      */
    }
  }, intervalMillisec);
} else {
  window.alert('Local storage is not available in this browser');
}

async function getRequestPermission(): Promise<string> {
  if (typeof DeviceMotionEvent.requestPermission !== 'function') return 'denied';
  return await DeviceMotionEvent.requestPermission();
}

const aclX = document.getElementById("acl-x") as HTMLElement;
const aclY = document.getElementById("acl-y") as HTMLElement;
const aclZ = document.getElementById("acl-z") as HTMLElement;

const rotA = document.getElementById("alpha") as HTMLElement;
const rotB = document.getElementById("beta") as HTMLElement;
const rotG = document.getElementById("gamma") as HTMLElement;
const sensorDomTextContent = {
  
};
const btn: HTMLElement | null = document.getElementById('btn');
if (btn != null) {
  btn.addEventListener('click', async () => {
    const permission: string = await getRequestPermission();
    if (permission !== 'granted') return;
    window.addEventListener('devicemotion', async (e: DeviceMotionEvent) => {
      if ((e.acceleration == null) || e.rotationRate == null) return;
      sensorValues = {
        "aclX": e.acceleration.x ?? 0.00,
        "aclY": e.acceleration.y ?? 0.00,
        "aclZ": e.acceleration.z ?? 0.00,
        "rotA": e.rotationRate.alpha ?? 0.00,
        "rotB": e.rotationRate.beta ?? 0.00,
        "rotG": e.rotationRate.gamma ?? 0.00
      };
      aclX.textContent = sensorValues["aclX"].toFixed(2).toString() ?? 'empty';
      aclY.textContent = sensorValues["aclY"].toFixed(2).toString() ?? 'empty';
      aclZ.textContent = sensorValues["aclZ"].toFixed(2).toString() ?? 'empty';
      rotA.textContent = sensorValues["rotA"].toFixed(2).toString() ?? 'empty';
      rotB.textContent = sensorValues["rotB"].toFixed(2).toString() ?? 'empty';
      rotG.textContent = sensorValues["rotG"].toFixed(2).toString() ?? 'empty';
    });
  });
}
