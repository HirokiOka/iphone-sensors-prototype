const aclX = document.getElementById("acl-x");
const aclY = document.getElementById("acl-y");
const aclZ = document.getElementById("acl-z");
const rotA = document.getElementById("alpha");
const rotB = document.getElementById("beta");
const rotG = document.getElementById("gamma");
const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

btn.addEventListener('click', async () => {
  if (typeof DeviceMotionEvent.requestPermission !== 'function') return;
  const permission = await DeviceMotionEvent.requestPermission();
  if (permission !== 'granted') return;
  setInterval(() => {
    aclX.textContent = DeviceMotionEventAcceleration.x;
  }, 1000);
});

