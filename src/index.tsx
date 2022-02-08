import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Scanner from './routes/Scanner';
import Result from './routes/Result';
import About from './routes/About';
import MoreInformation from './routes/MoreInformation';
import { EnterCode } from './routes/EnterCode';
import { LocaleProvider } from './components/Localization';
import { register as registerServiceWorker } from './serviceWorkerRegistration';

ReactDOM.render(
  <LocaleProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="scan" element={<Scanner />} />
        <Route path="result">
          <Route path=":testId" element={<Result />} />
          <Route path=":testId/details" element={<MoreInformation />} />
          <Route index element={<Result />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="search" element={<EnterCode />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </LocaleProvider>,
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
