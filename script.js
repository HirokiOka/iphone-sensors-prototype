const aclX = document.getElementById("acl-x");
const aclY = document.getElementById("acl-y");
const aclZ = document.getElementById("acl-z");

const rotA = document.getElementById("alpha");
const rotB = document.getElementById("beta");
const rotG = document.getElementById("gamma");

const btn = document.getElementById('btn');

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

/*
btn.addEventListener('click', async () => {
  console.log('it works');
  if (typeof DeviceMotionEvent.requestPermission !== 'function') return;
  let permission = await DeviceMotionEvent.requestPermission();
  if (permission !== 'granted') return;
  window.addEventListener('devicemotion', e => {
    displayValues(e);
  });
});
*/

console.log('it works');
if (typeof DeviceMotionEvent.requestPermission === 'function') {
  const permission = await DeviceMotionEvent.requestPermission();
  if (permission === 'granted') {
    window.addEventListener('devicemotion', e => {
      displayValues(e);
    });
  }
}
