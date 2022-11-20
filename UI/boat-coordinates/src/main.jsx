import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import OldApp from "./OldApp"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OldApp />
  </React.StrictMode>
)
