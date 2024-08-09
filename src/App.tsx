import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from './Alert';
import { AlertModuleCss } from './AlertModuleCss';
import { AlertEmotionCss } from './AlertEmotionCss';

function App() {
  return (
    <div className="container">
      <Alert heading="Success" closable>
        Everything is really good
      </Alert>
      <AlertModuleCss heading="Success" closable>
        Everything is awesome!!
      </AlertModuleCss>

      <AlertEmotionCss heading="Success" closable>
        Everything is stunning!!
      </AlertEmotionCss>
    </div>
  );
}

export default App;
