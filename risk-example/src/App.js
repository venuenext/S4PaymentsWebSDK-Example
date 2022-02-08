import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'

const S4Payments = require('@shift4/s4payments-web-sdk')


function App() {

  useEffect(() => {
    const config = {
      riskId: '100450',
      enabledServices: ['risk'],
      appId: 'bee23d1a-6e6f-488f-af0b-8758b71f05ae',
      events: (payload) => {
        if (payload.event === 'RISK_ASSESSMENT_READY') {
          console.log(payload)
        }
      }
    }

    S4Payments.sdk.initialize(config)

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          S4PaymentsWebSDK Risk Example
        </a>
      </header>
    </div>
  );
}

export default App;
