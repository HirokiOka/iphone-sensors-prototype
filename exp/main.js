window.addEventListener('load', e => {
  if (typeof DeviceMotionEvent.requestPermission !== 'function') return;
  const permission = await DeviceMotionEvent.requestPermission();
  if (permission !== 'granted') return;
  window.alert('success');
});
