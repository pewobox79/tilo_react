import './App.css'
import UseEffect2 from './exercises/UseEffect2';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import AboutMe from './pages/AboutMe';
import Exercisespage from './pages/Exercisespage';
import Homepage from './pages/Homepage'

//hoisting von funktionen => aufruf von funktion vor der definition
export default function App() {


  const user = true

  return <AuthLayout user={user}>
    <MainLayout>
      <UseEffect2 />
    </MainLayout>
  </AuthLayout>
}


