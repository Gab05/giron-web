import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import reportWebVitals from './reportWebVitals.ts';
import { triggerVisitMetaEvent } from './api/giron-api.ts';
import { MetaEventName } from './meta-event/meta-event.ts';

import "./bulma.min.css";
import "./font-awesome.min.css";
import "./declarations.d.ts";
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

triggerVisitMetaEvent(MetaEventName.websiteAccess)
  .then((response) => console.log("Successfully posted meta event", response))
  .catch((error) => console.warn("Error submitting meta event: ", error));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
