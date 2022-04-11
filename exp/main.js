const aclX = document.getElementById("acl-x");
const aclY = document.getElementById("acl-y");
const aclZ = document.getElementById("acl-z");
const rotA = document.getElementById("alpha");
const rotB = document.getElementById("beta");
const rotG = document.getElementById("gamma");
const msg = document.getElementById("msg");

/*
window.addEventListener('load', e => {

});
*/

setInterval(() => {
  aclX.textContent = DeviceMotionEventAcceleration.x;
}, 1000);
