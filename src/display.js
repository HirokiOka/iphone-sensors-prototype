const aclX = document.getElementById("acl-x");
const aclY = document.getElementById("acl-y");
const aclZ = document.getElementById("acl-z");
const rotA = document.getElementById("alpha");
const rotB = document.getElementById("beta");
const rotG = document.getElementById("gamma");
const msg = document.getElementById("msg");

const valueElements = {
  "aclX": aclX,
  "aclY": aclY,
  "aclZ": aclZ,
  "rotA": rotA,
  "rotB": rotB,
  "rotG": rotG
};

export function displaySensorValues(values) {
  Object.keys(values).forEach((k, _) => {
    valueElements[k].textContent = values[k];
  });
}

export function displayMessage(message) {
  msg.textContent = message;
}
