import { useState } from 'react'
import AuthCard from '../../components/auth/AuthCard'

const LoginPage = ({ onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <AuthCard
      title="Welcome back"
      subtitle="Log in and continue your music journey."
      ctaLabel="Log in"
      altText="New here?"
      altActionLabel="Create account"
      onAltAction={onSwitchToRegister}
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-slate-200">Email</span>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-emerald-400/70"
          required
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-slate-200">Password</span>
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-emerald-400/70"
          required
        />
      </label>
    </AuthCard>
  )
}

export default LoginPage
