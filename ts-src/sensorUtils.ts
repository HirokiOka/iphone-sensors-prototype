import { collection, addDoc } from "firebase/firestore";

interface SensorValues {
  "aclX": number | null;
  "aclY": number | null;
  "aclZ": number | null;
  "rotA": number | null;
  "rotB": number | null;
  "rotG": number | null
};

function isLocalStoregaAvailable (): Boolean {
  try {
    const storage: Storage = localStorage;
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
			e.code === 22 ||
			e.code === 1014 ||
			e.name === 'QuotaExceededError' ||
			e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
			(Storage && Storage.length !== 0);
	}
}

function getSensorValues(e: DeviceMotionEvent): SensorValues | undefined {
  if ((e.acceleration == null) || (e.rotationRate == null)) return;
  return {
    "aclX": e.acceleration.x,
    "aclY": e.acceleration.y,
    "aclZ": e.acceleration.z,
    "rotA": e.rotationRate.alpha,
    "rotB": e.rotationRate.beta,
    "rotG": e.rotationRate.gamma
  }
}

function getCurrentTimestampAsString(): string {
  const currentTimeString: string = new Date().toLocaleString();
  const currentMilliseconds: string = new Date().getMilliseconds().toString();
  const currentTimestamp: string = currentTimeString + '.' + currentMilliseconds;
  return currentTimestamp;
}

async function postStorageData(dataObj: SensorValues, db: any, collectionName: string) {
  try {
    const docRef = await addDoc(collection(db, collectionName), dataObj);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

function main(): void {
  if (isLocalStoregaAvailable()) {
    localStorage.clear();
    setInterval(async () => {
      const currentTimestamp: string = getCurrentTimestampAsString();
      const currentSensorValues: SensorValues = getSensorValues(e); 
      localStorage.setItem(currentTimestamp, JSON.stringify(currentSensorValues));
      if (localStorage.length === postDataSize) {
        postStorageData(postData, db, 'data');
        localStorage.clear();
      }
    }, intervalMillisec);
  } else {
    window.alert('Local storage is not available in this browser');
  }
}

