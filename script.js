const aclX = document.getElementById("acl-x");
const aclY = document.getElementById("acl-y");
const aclZ = document.getElementById("acl-z");

const btn = document.getElementById('btn');
btn.addEventListener('click', e => {
  if (typeof DeviceMotionEvent.requestPermission !== 'function') return;
    DeviceMotionEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          window.addEventListener('devicemotion', e => {
            setInterval(() => {
              displayAcc(e);
            }, 1000);
          });
        }
      }).catch(console.error);
});

function displayAcc(e) {
  const aclXVal = Math.floor(e.acceleration.x * 100) / 100;
  const aclYVal = Math.floor(e.acceleration.y * 100) / 100;
  const aclZVal = Math.floor(e.acceleration.z * 100) / 100;
  aclX.textContent = `aclX: ${aclXVal}`;
  aclY.textContent = `aclY: ${aclYVal}`;
  aclZ.textContent = `aclY: ${aclZVal}`;
}

