const aclX = document.getElementById("acl-x");
const aclY = document.getElementById("acl-y");
const aclZ = document.getElementById("acl-z");

const rotA = document.getElementById("alpha");
const rotB = document.getElementById("beta");
const rotG = document.getElementById("gamma");

const btn = document.getElementById('btn');
const msg = document.getElementById('msg');
const sensorValues = {
  'aclXVal': 0, 'aclYVal' : 0, 'aclZVal' : 0, 'rotAVal' : 0, 'rotBVal' : 0, 'rotGVal' : 0
};

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

function updateValues (values) {
  msg.textContent = values;
  Object.keys(values).forEach((_, k) => {
    sensorValues[k] = values[k];
  });
}

setInterval(() => {
  displaySensorValues(sensorValues);
}, 1000);

btn.addEventListener('click', async () => {
  if (typeof DeviceMotionEvent.requestPermission !== 'function') return;
  const permission = await DeviceMotionEvent.requestPermission();
  if (permission !== 'granted') return;
  window.addEventListener('devicemotion', async (e) => {
    const currentSensorValues = getSensorValues(e);
    updateValues(currentSensorValues);
  });
});
