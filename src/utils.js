export function checkIsStorageAvailable() {
    try {
        let storage = localStorage;
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (e.code === 22 ||
            e.code === 1014 ||
            e.name === 'QuotaExceededError' ||
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            (Storage && Storage.length !== 0);
    }
}
export function fixSensorValues(valuesObj) {
    return Object.keys(valuesObj).map((v) => Math.floor(parseInt(v) * 100) / 100);
}
export function setDummyValues(values) {
    const getRandVal = (max) => Math.floor((Math.random() * max * 100) / 100);
    Object.keys(values).forEach((k, _) => values[k] = getRandVal(100));
}
export function updateValues(oldValues, newValues) {
    Object.keys(newValues).forEach((k, _) => oldValues[k] = newValues[k]);
}
export function getCurrentTimestampAsString() {
    const currentTimeString = new Date().toLocaleString();
    const currentMilliseconds = new Date().getMilliseconds().toString();
    const currentTimestamp = currentTimeString + '.' + currentMilliseconds;
    return currentTimestamp;
}
