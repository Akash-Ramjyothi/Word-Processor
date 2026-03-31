// =========================
// React Core Imports
// =========================
import React from 'react';
import ReactDOM from 'react-dom/client';

// =========================
// Global Styles
// =========================
import './index.css';

// =========================
// App Component
// =========================
import App from './App';

// =========================
// Performance Monitoring
// =========================
import reportWebVitals from './reportWebVitals';

// =========================
// Root Element Initialization
// =========================
const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container missing in index.html');
}

const root = ReactDOM.createRoot(container);

// =========================
// Render Application
// =========================
const renderApp = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

renderApp();

// =========================
// Hot Module Replacement (HMR)
// =========================
if (module.hot) {
  module.hot.accept('./App', () => {
    console.log('🔁 Hot reloading App...');
    renderApp();
  });
}

// =========================
// Performance Logging
// =========================
// You can replace console.log with an API call
// Example: sendToAnalytics(metric)
reportWebVitals((metric) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Web Vital:', metric);
  } else {
    // TODO: Send to analytics service
    // sendToAnalytics(metric);
  }
});
