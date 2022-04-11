/*
let valueElements: {
  aclX: HTMLElement | null; aclXVal: number;
  aclY: HTMLElement | null; aclYVal: number;
  aclZ: HTMLElement | null; aclZVal: number;
  rotA: HTMLElement | null; rotAVal: number;
  rotB: HTMLElement | null; rotBVal: number;
  rotG: HTMLElement | null; rotGVal: number
};
*/
let valueElements = {
    aclX: document.getElementById("acl-x"), aclXVal: 0.00,
    aclY: document.getElementById("acl-y"), aclYVal: 0.00,
    aclZ: document.getElementById("acl-z"), aclZVal: 0.00,
    rotA: document.getElementById("alpha"), rotAVal: 0.00,
    rotB: document.getElementById("beta"), rotBVal: 0.00,
    rotG: document.getElementById("gamma"), rotGVal: 0.00
};
let dataObj = {};
{
    "name";
    "aclX", "value";
    0.00, "ele";
    aclX;
}
;
function displayValue(ele, value) {
    ele.textContent = `value: ${value}`;
}
export function displaySensorValues(values) {
    aclX.textContent = `aclX: ${values.aclX}`;
    aclY.textContent = `aclY: ${values.aclY}`;
    aclZ.textContent = `aclY: ${values.aclZ}`;
    rotA.textContent = `alpha: ${values.rotA}`;
    rotB.textContent = `beta: ${values.rotB}`;
    rotG.textContent = `gamma: ${values.rotG}`;
}
export function displayMessage(message) {
    msg.textContent = `msg: ${message}`;
}
