export function checkIsStorageAvailable (): Boolean {
  try {
    const storage: Storage = localStorage;
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

export function getCurrentTimestampAsString(): string {
  const currentTimeString: string = new Date().toLocaleString();
  const currentMilliseconds: string = new Date().getMilliseconds().toString();
  const currentTimestamp: string = currentTimeString + '.' + currentMilliseconds;
  return currentTimestamp;
}
