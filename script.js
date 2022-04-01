const aclX = document.getElementById("acl-x");
const aclY = document.getElementById("acl-y");
const aclZ = document.getElementById("acl-z");

const rotA = document.getElementById("alpha");
const rotB = document.getElementById("beta");
const rotG = document.getElementById("gamma");

const btn = document.getElementById('btn');
const timer = document.getElementById('timer');

let elapsedTime = 0;

function displayValues(e) {
  const aclXVal = Math.floor(e.acceleration.x * 100) / 100;
  const aclYVal = Math.floor(e.acceleration.y * 100) / 100;
  const aclZVal = Math.floor(e.acceleration.z * 100) / 100;
  const rotAVal = Math.floor(e.rotationRate.alpha * 100) / 100;
  const rotBVal = Math.floor(e.rotationRate.beta * 100) / 100;
  const rotGVal = Math.floor(e.rotationRate.gamma * 100) / 100;
  aclX.textContent = `aclX: ${aclXVal}`;
  aclY.textContent = `aclY: ${aclYVal}`;
  aclZ.textContent = `aclY: ${aclZVal}`;

  rotA.textContent = `alpha: ${rotAVal}`;
  rotB.textContent = `beta: ${rotBVal}`;
  rotG.textContent = `gamma: ${rotGVal}`;
}

btn.addEventListener('click', async () => {
  if (typeof DeviceMotionEvent.requestPermission !== 'function') return;
  const startDate = Date.now();
  const permission = await DeviceMotionEvent.requestPermission();
  if (permission !== 'granted') return;
  setInterval(() => {
    const nowDate = Date.now();
    elapsedTime = Math.round(nowDate - startDate);
    timer.textContent = `timer: ${elapsedTime}`;
  }, 500);
  window.addEventListener('devicemotion', e => {
    if (elapsedTime % 2000 < 20) {
      displayValues(e);
    }
  });
});

