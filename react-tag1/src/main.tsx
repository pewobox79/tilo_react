import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Homepage from './pages/Homepage.tsx'
import AboutMe from './pages/AboutMe.tsx'
import DashboardLayout from './layouts/DashboardLayout.tsx'
import LoginPage from './pages/LoginPage.tsx'
import UsersPage from './pages/UsersPage.tsx'
import SingleUserPage from './pages/SingleUserPage.tsx'
import MainLayout from './layouts/MainLayout.tsx'
import Exercisespage from './pages/Exercisespage.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path='aboutme' element={<AboutMe />} />
        <Route path='exericse' element={<Exercisespage />} />
        <Route path="users" >
          <Route index element={<UsersPage />} />
          <Route path=":id" element={<SingleUserPage /> }>
          
          </Route>
        </Route>
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path={"dashboard"} element={<h1>dashboard</h1>} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<h1>404 error page</h1>}/>
    </Routes>
  </BrowserRouter>
)
