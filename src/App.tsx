import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from './Alert';
import { AlertModuleCss } from './AlertModuleCss';

function App() {
  return (
    <div className="container">
      <Alert heading="Success" closable>
        Everything is really good
      </Alert>
      <AlertModuleCss heading="Success" closable>
        Everything is awesome!!
      </AlertModuleCss>
    </div>
  );
}

export default App;
