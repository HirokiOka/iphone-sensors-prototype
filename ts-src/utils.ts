export function checkIsStorageAvailable (): Boolean {
  try {
    let storage: Storage = localStorage;
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
			(Storage && Storage.length !== 0);
	}
}

export function fixSensorValues(valuesObj: any): object {
  return Object.keys(valuesObj).map((v: string) => Math.floor(parseInt(v) * 100) / 100);
}

export function setDummyValues(values: any): void {
  const getRandVal = (max: number) => Math.floor((Math.random() * max * 100) / 100);
  Object.keys(values).forEach((k: string, _) => values[k] = getRandVal(100) );
}

export function updateValues(oldValues: any, newValues: any): void {
  Object.keys(newValues).forEach((k: string, _) => oldValues[k] = newValues[k] );
}

export function getCurrentTimestampAsString(): string {
  const currentTimeString: string = new Date().toLocaleString();
  const currentMilliseconds: string = new Date().getMilliseconds().toString();
  const currentTimestamp: string = currentTimeString + '.' + currentMilliseconds;
  return currentTimestamp;
}
