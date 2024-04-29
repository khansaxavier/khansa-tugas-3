import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './componen/Header.jsx'
import Utama from './componen/Utama.jsx'
import Induk from './Induk.jsx'
import Menu from './componen/menu.jsx'
import Navbar from './componen/Navbar.jsx'
import Sidebar from './componen/Sidebar.jsx'
import Home from './pages/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<Header/>*/}
    {/*<Utama/>*/}
    <Home/>
  </React.StrictMode>,
)
