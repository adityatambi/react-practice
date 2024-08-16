import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from './Alert';
import { AlertModuleCss } from './AlertModuleCss';
import { AlertEmotionCss } from './AlertEmotionCss';
import { AlertTailwindCss } from './AlertTailwindCss';

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

      <AlertTailwindCss heading="Success" closable>
        this is also good!
      </AlertTailwindCss>
    </div>
  );
}

export default App;
