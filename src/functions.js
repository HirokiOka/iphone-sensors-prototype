export function checkIsStorageAvailable (type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
			e.code === 22 ||
			e.code === 1014 ||
			e.name === 'QuotaExceededError' ||
			e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
			(storage && storage.length !== 0);
	}
}

export function getSensorValues(e) {
  const aclXVal = Math.floor(e.acceleration.x * 100) / 100;
  const aclYVal = Math.floor(e.acceleration.y * 100) / 100;
  const aclZVal = Math.floor(e.acceleration.z * 100) / 100;
  const rotAVal = Math.floor(e.rotationRate.alpha * 100) / 100;
  const rotBVal = Math.floor(e.rotationRate.beta * 100) / 100;
  const rotGVal = Math.floor(e.rotationRate.gamma * 100) / 100;
  const values = {
    aclXVal, aclYVal, aclZVal, rotAVal, rotBVal, rotGVal
  };
  return values;
}

export function setDummyValues(values) {
  const getRandVal = max => Math.floor((Math.random() * max * 100) / 100);
  Object.keys(values).forEach((k, _) => values[k] = getRandVal(100) );
}

export function updateValues(oldValues, newValues) {
  Object.keys(newValues).forEach((k, _) => oldValues[k] = newValues[k] );
}

export function getCurrentTimestampAsString() {
  const currentTimeString = new Date().toLocaleString();
  const currentMilliseconds = new Date().getMilliseconds();
  const currentTimestamp = currentTimeString + '.' + currentMilliseconds;
  return currentTimestamp;
}
