import React from 'react';
import ReactDOM from 'react-dom';

import ContextProvider from './contexts';
import Styles from './styles';
import registerServiceWorker from './core/registerServiceWorker';

import Routes from './routes';

if (!sessionStorage.getItem('key')) {
  sessionStorage.setItem('key', Math.random());
}

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Styles>
        <Routes />
      </Styles>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Initialize deferredPrompt for use later to show browser install prompt.
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

registerServiceWorker();

// let deferredPrompt;
// const addBtn = document.getElementById('add-button');
// addBtn.style.display = 'none';

// window.addEventListener('beforeinstallprompt', e => {
//   // Prevent Chrome 67 and earlier from automatically showing the prompt
//   // Stash the event so it can be triggered later.
//   deferredPrompt = e;
//   // Update UI to notify the user they can add to home screen
//   addBtn.style.display = 'block';

//   addBtn.addEventListener('click', () => {
//     // hide our user interface that shows our A2HS button
//     addBtn.style.display = 'none';
//     // Show the prompt
//     deferredPrompt.prompt();
//     // Wait for the user to respond to the prompt
//     deferredPrompt.userChoice.then(choiceResult => {
//       if (choiceResult.outcome === 'accepted') {
//         console.log('User accepted the A2HS prompt');
//       } else {
//         console.log('User dismissed the A2HS prompt');
//       }
//       deferredPrompt = null;
//     });
//   });
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
