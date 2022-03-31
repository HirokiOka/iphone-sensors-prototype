let aclX = document.getElementById("acl-x");
let aclY = document.getElementById("acl-y");
let aclZ = document.getElementById("acl-z");

const btn = document.getElementById('btn');
btn.addEventListener('click', e => {
  onClick();
});

function displayAcc(e) {
    document.getElementById('msg').textContent = 'event'; 
    aclX.textContent = 'aclX:' + e.acceleration.x;
    aclY.textContent = 'aclY:' + e.acceleration.y;
    aclZ.textContent = 'aclZ:' + e.acceleration.z;
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
