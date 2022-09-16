import React from 'react'
import ReactDOM from 'react-dom/client'
// import EventEmitter from 'events';
// import {inherits} from 'util';
import './assets/styles/global.css'
import { Home } from './pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu'
import { Devices } from './pages/Devices'
import { NotFound } from './pages/NotFound'
import { DeviceDetails } from './pages/Devices/components/DeviceDetails'

const tabs = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Devices',
    url: '/devices'
  }
]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu tabs={tabs} />
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/devices' element = {<Devices/>} />
        <Route path = '/devices/details/:id' element = {<DeviceDetails/>} />
        <Route path = '*' element = {<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
