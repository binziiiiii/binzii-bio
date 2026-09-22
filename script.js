const enterScreen = document.querySelector('#enterScreen');
const copyHandle = document.querySelector('#copyHandle');
const toast = document.querySelector('#toast');

enterScreen.addEventListener('click', () => enterScreen.classList.add('is-hidden'));
copyHandle.addEventListener('click', async () => {
  await navigator.clipboard?.writeText('@5rhk');
  toast.textContent = 'handle copied';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1500);
});
