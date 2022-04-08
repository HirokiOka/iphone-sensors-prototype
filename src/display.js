const aclX = document.getElementById("acl-x");
const aclY = document.getElementById("acl-y");
const aclZ = document.getElementById("acl-z");
const rotA = document.getElementById("alpha");
const rotB = document.getElementById("beta");
const rotG = document.getElementById("gamma");
const msg = document.getElementById('msg');

export function displaySensorValues(values) {
  aclX.textContent = `aclX: ${values.aclXVal}`;
  aclY.textContent = `aclY: ${values.aclYVal}`;
  aclZ.textContent = `aclY: ${values.aclZVal}`;
  rotA.textContent = `alpha: ${values.rotAVal}`;
  rotB.textContent = `beta: ${values.rotBVal}`;
  rotG.textContent = `gamma: ${values.rotGVal}`;
}

export function displayMessage(message) {
  msg.textContent = `msg: ${message}`;
}
