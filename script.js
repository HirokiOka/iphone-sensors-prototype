const aclX = document.getElementById("acl-x");
const aclY = document.getElementById("acl-y");
const aclZ = document.getElementById("acl-z");

const rotA = document.getElementById("alpha");
const rotB = document.getElementById("beta");
const rotG = document.getElementById("gamma");

const btn = document.getElementById('btn');
const msg = document.getElementById('msg');
let sensorValues = {
  'aclXVal': 0, 'aclYVal' : 0, 'aclZVal' : 0, 'rotAVal' : 0, 'rotBVal' : 0, 'rotGVal' : 0
};

function checkIsStorageAvailable (type) {
  let storage;
  try {
    storage = window[type];
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
			(storage && storage.length !== 0);
	}
}

function getSensorValues(e) {
  const aclXVal = Math.floor(e.acceleration.x * 100) / 100;
  const aclYVal = Math.floor(e.acceleration.y * 100) / 100;
  const aclZVal = Math.floor(e.acceleration.z * 100) / 100;
  const rotAVal = Math.floor(e.rotationRate.alpha * 100) / 100;
  const rotBVal = Math.floor(e.rotationRate.beta * 100) / 100;
  const rotGVal = Math.floor(e.rotationRate.gamma * 100) / 100;
  const values = {
    aclXVal, aclYVal, aclZVal, rotAVal, rotBVal, rotGVal
  };
  return values;
}

function displaySensorValues(values) {
  aclX.textContent = `aclX: ${values.aclXVal}`;
  aclY.textContent = `aclY: ${values.aclYVal}`;
  aclZ.textContent = `aclY: ${values.aclZVal}`;
  rotA.textContent = `alpha: ${values.rotAVal}`;
  rotB.textContent = `beta: ${values.rotBVal}`;
  rotG.textContent = `gamma: ${values.rotGVal}`;
}

function updateValues(oldValues, newValues) {
  Object.keys(newValues).forEach((k, _) => {
    oldValues[k] = newValues[k];
  });
}

if (checkIsStorageAvailable('localStorage')) {
  setInterval(() => {
    displaySensorValues(sensorValues);
  }, 1000);
} else {
  window.alert('Local storage is not available in this browser');
}


btn.addEventListener('click', async () => {
  if (typeof DeviceMotionEvent.requestPermission !== 'function') return;
  const permission = await DeviceMotionEvent.requestPermission();
  if (permission !== 'granted') return;
  window.addEventListener('devicemotion', async (e) => {
    const currentSensorValues = getSensorValues(e);
    updateValues(sensorValues, currentSensorValues);
  });
});
