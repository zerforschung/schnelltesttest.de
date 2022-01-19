import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scanner from './routes/Scanner';
import Result from './routes/Result';
import About from './routes/About';
import MoreInformation from './routes/MoreInformation';
import { EnterCode } from './routes/EnterCode';
import { register as registerServiceWorker } from './serviceWorkerRegistration';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="scan" element={<Scanner />} />
      <Route path="result" element={<Result />} />
      <Route path="about" element={<About />} />
      <Route path="more_information" element={<MoreInformation />} />
      <Route path="search" element={<EnterCode />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker({
  onUpdate: (registration) => {
    const waitingServiceWorker = registration.waiting;

    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener('statechange', (event) => {
        // See https://github.com/microsoft/TypeScript/issues/37842
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (event?.target?.state === 'activated') {
          window.location.reload();
        }
      });
      waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
    }
  },
});
