var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { postDataChunck } from "./firebaseConfig.js";
import { checkIsStorageAvailable, fixSensorValues, setDummyValues, updateValues, getCurrentTimestampAsString } from "./utils.js";
//import { displaySensorValues } from "./display.js";
const intervalMillisec = 1000;
const postDataSize = 10;
const collectionName = "test";
let sensorValues;
sensorValues = {
    "aclX": 0.00,
    "aclY": 0.00,
    "aclZ": 0.00,
    "rotA": 0.00,
    "rotB": 0.00,
    "rotG": 0.00
};
if (checkIsStorageAvailable()) {
    localStorage.clear();
    setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
        setDummyValues(sensorValues);
        const currentTimestamp = getCurrentTimestampAsString();
        localStorage.setItem(currentTimestamp, JSON.stringify(sensorValues));
        //displaySensorValues(sensorValues);
        if (localStorage.length === postDataSize) {
            let postData = {};
            Object.entries(Object.assign({}, localStorage)).forEach(([key, value]) => postData[key] = JSON.parse(value));
            postDataChunck(collectionName, postData);
            localStorage.clear();
        }
    }), intervalMillisec);
}
else {
    window.alert('Local storage is not available in this browser');
}
const btn = document.getElementById('btn');
if (btn != null) {
    btn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        if (typeof DeviceMotionEvent.requestPermission !== 'function')
            return;
        const permission = yield DeviceMotionEvent.requestPermission();
        if (permission !== 'granted')
            return;
        window.addEventListener('devicemotion', (e) => __awaiter(void 0, void 0, void 0, function* () {
            if ((e.acceleration == null) || e.rotationRate == null)
                return;
            sensorValues = {
                "aclX": e.acceleration.x,
                "aclY": e.acceleration.y,
                "aclZ": e.acceleration.z,
                "rotA": e.rotationRate.alpha,
                "rotB": e.rotationRate.beta,
                "rotG": e.rotationRate.gamma
            };
            const currentSensorValues = fixSensorValues(sensorValues);
            updateValues(sensorValues, currentSensorValues);
        }));
    }));
}
