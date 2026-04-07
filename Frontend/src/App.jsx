import { useState } from 'react'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'

const App = () => {
  const [authMode, setAuthMode] = useState('login')

  if (authMode === 'register') {
    return <RegisterPage onSwitchToLogin={() => setAuthMode('login')} />
  }

  return <LoginPage onSwitchToRegister={() => setAuthMode('register')} />
}

export default App
