const AuthCard = ({
  title,
  subtitle,
  ctaLabel,
  altText,
  altActionLabel,
  onAltAction,
  onSubmit,
  children,
}) => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_15%_15%,rgba(30,215,96,0.24),transparent_40%),radial-gradient(circle_at_85%_85%,rgba(20,184,166,0.22),transparent_38%),linear-gradient(155deg,#05080f,#101a2b)] px-4 py-8 text-slate-100">
      <section className="grid w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/20 shadow-[0_28px_90px_rgba(3,8,21,0.55)] backdrop-blur md:grid-cols-[1.1fr_1fr]">
        <div className="relative flex flex-col justify-center gap-4 bg-[linear-gradient(145deg,rgba(30,215,96,0.28),rgba(9,14,25,0.95))] p-9">
          <div className="w-fit rounded-full border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            PulseWave
          </div>
          <h1 className="font-['Space_Grotesk'] text-4xl font-bold tracking-tight md:text-5xl">
            Feel every beat.
          </h1>
          <p className="max-w-sm text-sm leading-relaxed text-slate-300">
            Stream music with clarity, discover new artists, and keep your vibe alive all day.
          </p>
          <div className="pointer-events-none absolute -bottom-14 -right-10 h-56 w-56 bg-[radial-gradient(circle,rgba(30,215,96,0.58),rgba(20,184,166,0))] blur-lg" />
        </div>

        <div className="flex flex-col gap-6 bg-[rgba(12,19,33,0.82)] p-8 md:p-10">
          <header>
            <h2 className="text-3xl font-bold text-slate-100">{title}</h2>
            <p className="mt-2 text-sm text-slate-300">{subtitle}</p>
          </header>

          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            {children}
            <button
              type="submit"
              className="rounded-xl bg-[linear-gradient(90deg,#1ed760,#14b8a6)] px-4 py-3 text-base font-bold text-emerald-950 transition duration-200 hover:-translate-y-0.5 hover:brightness-105"
            >
              {ctaLabel}
            </button>
          </form>

          <p className="text-sm text-slate-300">
            {altText}{' '}
            <button
              type="button"
              onClick={onAltAction}
              className="font-semibold text-emerald-400 transition hover:text-emerald-300"
            >
              {altActionLabel}
            </button>
          </p>
        </div>
      </section>
    </main>
  )
}

export default AuthCard
