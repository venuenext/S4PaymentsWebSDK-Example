import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'

const S4Payments = require('@shift4/s4payments-web-sdk')


function App() {

  useEffect(() => {
    const config = {
      riskId: '',
      enabledServices: ['risk', '3ds'],
      appId: '',
      events: (payload) => {
        if (payload.event === 'S4PAYMENTS_READY') {
          console.log(payload)
        } else if (payload.event === 'THREE_D_SECURE_SUCCESS') {
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
          S4PaymentsWebSDK Risk with 3DS Example
        </a>
      </header>
    </div>
  );
}

export default App;
