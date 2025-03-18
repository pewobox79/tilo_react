import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Homepage from './pages/Homepage.tsx'
import AboutMe from './pages/AboutMe.tsx'
import AuthLayout from './layouts/AuthLayout.tsx'
import DashboardLayout from './layouts/DashboardLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='aboutme' element={<AboutMe/>}/>
      <Route element={<DashboardLayout/>}>
        <Route path={"dashboard"} element={<h1>dashboard</h1>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
