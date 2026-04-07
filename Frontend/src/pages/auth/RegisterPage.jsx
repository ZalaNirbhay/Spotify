import { useState } from 'react'
import AuthCard from '../../components/auth/AuthCard'

const RegisterPage = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user',
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
      title="Create your account"
      subtitle="Join and start building playlists you love."
      ctaLabel="Create account"
      altText="Already have an account?"
      altActionLabel="Log in"
      onAltAction={onSwitchToLogin}
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-slate-200">Username</span>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          type="text"
          placeholder="Choose a username"
          autoComplete="username"
          className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-emerald-400/70"
          required
        />
      </label>

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
          placeholder="Create a strong password"
          autoComplete="new-password"
          className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-emerald-400/70"
          required
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-slate-200">Role</span>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none transition focus:-translate-y-0.5 focus:border-emerald-400/70"
        >
          <option className='text-black' value="user">User</option>
          <option className='text-black' value="artist">Artist</option>
        </select>
      </label>
    </AuthCard>
  )
}

export default RegisterPage
