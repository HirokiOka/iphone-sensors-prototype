const aclX = document.getElementById("acl-x");
const aclY = document.getElementById("acl-y");
const aclZ = document.getElementById("acl-z");

const rotA = document.getElementById("alpha");
const rotB = document.getElementById("beta");
const rotG = document.getElementById("gamma");

/*
const btn = document.getElementById('btn');
btn.addEventListener('click', e => {
  if (typeof DeviceMotionEvent.requestPermission !== 'function') return;
    DeviceMotionEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          window.addEventListener('devicemotion', e => {
            displayValues(e);
          });
        }
      }).catch(console.error);
});
*/
window.onload = () => {
  if (typeof DeviceMotionEvent.requestPermission !== 'function') return;
  DeviceMotionEvent.requestPermission()
    .then(permissionState => {
      if (permissionState === 'granted') {
        window.addEventListener('devicemotion', e => {
          displayValues(e);
        });
      }
    }).catch(console.error);
}

function displayValues(e) {
  const aclXVal = Math.floor(e.accelerationIncludingGravity.x * 100) / 100;
  const aclYVal = Math.floor(e.accelerationIncludingGravity.y * 100) / 100;
  const aclZVal = Math.floor(e.accelerationIncludingGravity.z * 100) / 100;
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

