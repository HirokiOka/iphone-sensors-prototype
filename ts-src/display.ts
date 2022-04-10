type sensorValues = {
  aclX: number;
  aclY: number;
  aclZ: number;
  rotA: number;
  rotB: number;
  rotG: number
};

type Ele = {
  name: string; value: number
};

const aclX: HTMLElement = document.getElementById("acl-x");
const aclY: HTMLElement = document.getElementById("acl-y");
const aclZ: HTMLElement = document.getElementById("acl-z");
const rotA: HTMLElement = document.getElementById("alpha");
const rotB: HTMLElement = document.getElementById("beta");
const rotG: HTMLElement = document.getElementById("gamma");

const valuesObj = {
  "aclX": 
};

function displayValue(ele: HTMLElement, value: number) {
  ele.textContent = `value: ${value}`;
}


export function displaySensorValues(values: sensorValues) {
  Object.keys(values).forEach((k, _) => {
    
  });
  aclX.textContent = `aclX: ${values.aclX}`;
  aclY.textContent = `aclY: ${values.aclY}`;
  aclZ.textContent = `aclY: ${values.aclZ}`;
  rotA.textContent = `alpha: ${values.rotA}`;
  rotB.textContent = `beta: ${values.rotB}`;
  rotG.textContent = `gamma: ${values.rotG}`;
}

export function displayMessage(message: string) {
  msg.textContent = `msg: ${message}`;
}
