import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FeedbackProvider } from './context/FeedbackContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <FeedbackProvider>
     <App />
   </FeedbackProvider>
  </React.StrictMode>
)