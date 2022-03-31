let aclX = document.getElementById("acl-x");
let aclY = document.getElementById("acl-y");
let aclZ = document.getElementById("acl-z");

const btn = document.getElementById('btn');
btn.addEventListener('click', e => {
  onClick();
});

function displayAcc(e) {
  const aclXVal = Math.floor(e.acceleration.x * 100) / 100;
  const aclYVal = Math.floor(e.acceleration.y * 100) / 100;
  const aclZVal = Math.floor(e.acceleration.z * 100) / 100;
  aclX.textContent = `aclX: ${aclXVal}`;
  aclY.textContent = `aclY: ${aclYVal}`;
  aclZ.textContent = `aclY: ${aclZVal}`;
}

function onClick() {
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    DeviceMotionEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          window.addEventListener('devicemotion', e => {
              displayAcc(e);
          });
        }
      })
      .catch(console.error);
  } else {
      console.log('requestPermission is not a function');
  }
}
