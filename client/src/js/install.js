const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA & adding an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  butInstall.style.visability = 'visible';
  butInstall.textContent = 'Install!'

});

// Implemented a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => { 
  butInstall.setAttribute ('disabled', true);
  butInstall.textContent = 'Installed!'
});

// Added a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
 console.log ('appinstalled', event)
 });
