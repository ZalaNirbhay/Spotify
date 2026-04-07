import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      setLoading(true)
      setMessage('')

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        setMessage(data?.message || 'Register failed')
        return
      }

      setMessage('Account created successfully')
      setTimeout(() => navigate('/login'), 1500)
    } catch {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_15%_15%,rgba(30,215,96,0.24),transparent_40%),radial-gradient(circle_at_85%_85%,rgba(20,184,166,0.22),transparent_38%),linear-gradient(155deg,#05080f,#101a2b)] px-4 py-8 text-slate-100">
      <section className="grid w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/20 shadow-[0_28px_90px_rgba(3,8,21,0.55)] backdrop-blur md:grid-cols-[1.1fr_1fr]">
        <div className="relative flex flex-col justify-center gap-4 bg-[linear-gradient(145deg,rgba(30,215,96,0.28),rgba(9,14,25,0.95))] p-9">
          <div className="w-fit rounded-full border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            PulseWave
          </div>
          <h1 className="font-['Space_Grotesk'] text-4xl font-bold tracking-tight md:text-5xl">
            Start your music journey.
          </h1>
          <p className="max-w-sm text-sm leading-relaxed text-slate-300">
            Create an account, save favorites, and discover your next playlist.
          </p>
          <div className="pointer-events-none absolute -bottom-14 -right-10 h-56 w-56 bg-[radial-gradient(circle,rgba(30,215,96,0.58),rgba(20,184,166,0))] blur-lg" />
        </div>

        <div className="flex flex-col gap-6 bg-[rgba(12,19,33,0.82)] p-8 md:p-10">
          <header>
            <h2 className="text-3xl font-bold text-slate-100">Create your account</h2>
            <p className="mt-2 text-sm text-slate-300">Join and start building playlists you love.</p>
          </header>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                <option className="text-black" value="user">
                  User
                </option>
                <option className="text-black" value="artist">
                  Artist
                </option>
              </select>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-[linear-gradient(90deg,#1ed760,#14b8a6)] px-4 py-3 text-base font-bold text-emerald-950 transition duration-200 hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          {message && <p className="text-sm text-slate-300">{message}</p>}

          <p className="text-sm text-slate-300">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-semibold text-emerald-400 transition hover:text-emerald-300"
            >
              Log in
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default RegisterPage
