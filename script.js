const aclX = document.getElementById("acl-x");
const aclY = document.getElementById("acl-y");
const aclZ = document.getElementById("acl-z");

let acl = new Accelerometer({frequency: 60});
acl.addEventListener('reading', () => {
  aclX.textContent = 'aclX:' + acl.x;
  aclY.textContent = 'aclY:' + acl.y;
  aclZ.textContent = 'aclZ:' + acl.z;
});

acl.start();
