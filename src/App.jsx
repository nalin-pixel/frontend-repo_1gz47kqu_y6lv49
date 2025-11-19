import Spline from '@splinetool/react-spline'

function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">PlayBaseStudio</div>
          <a href="mailto:playbasestudioss@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 active:bg-white/20 transition px-4 py-2 backdrop-blur border border-white/10 text-sm">Contact</a>
        </div>
      </header>

      <section className="relative z-0 h-[60vh] min-h-[500px] w-full">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl w-full px-6">
            <div className="w-full max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">PlayBaseStudio</h1>
              <p className="mt-3 text-lg sm:text-xl text-slate-200/90">support page</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#support" className="pointer-events-auto inline-flex items-center justify-center rounded-2xl bg-blue-500 hover:bg-blue-400 active:bg-blue-600 transition text-white px-5 py-3 text-sm font-medium shadow-lg shadow-blue-500/30">Get Support</a>
                <a href="mailto:playbasestudioss@gmail.com" className="pointer-events-auto inline-flex items-center justify-center rounded-2xl bg-white/10 hover:bg-white/15 active:bg-white/20 transition text-white px-5 py-3 text-sm font-medium border border-white/10 backdrop-blur">Email Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="support" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition group">
            <div className="h-10 w-10 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 font-semibold">✓</div>
            <h3 className="mt-4 text-xl font-semibold">Safe and secure</h3>
            <p className="mt-2 text-slate-300/90 leading-relaxed">Your messages are private and wont be published. We safeguard your data with modern protection and zero unnecessary exposure.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition group">
            <div className="h-10 w-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 font-semibold">⚡</div>
            <h3 className="mt-4 text-xl font-semibold">Fast</h3>
            <p className="mt-2 text-slate-300/90 leading-relaxed">We’re fast at responding. Most requests receive a first reply within hours and resolution shortly after.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition group">
            <div className="h-10 w-10 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 font-semibold">💬</div>
            <h3 className="mt-4 text-xl font-semibold">Human help</h3>
            <p className="mt-2 text-slate-300/90 leading-relaxed">Talk to a real person who understands your issue and guides you through clear next steps.</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur">
            <h4 className="text-2xl font-semibold">How we support you</h4>
            <ul className="mt-4 space-y-3 text-slate-300/90">
              <li className="flex items-start gap-3"><span className="mt-1 text-blue-300">•</span><span>Clear updates from first reply to resolution so you always know what’s next.</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 text-blue-300">•</span><span>Priority routing for urgent issues when you flag the topic as critical.</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 text-blue-300">•</span><span>Simple steps and screenshares when helpful to get you unblocked fast.</span></li>
            </ul>
            <div className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-blue-500 hover:bg-blue-400 active:bg-blue-600 transition text-white px-5 py-3 text-sm font-medium shadow-lg shadow-blue-500/30">Open a request</div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h4 className="text-2xl font-semibold">Contact</h4>
            <p className="mt-3 text-slate-300/90">Email</p>
            <a href="mailto:playbasestudioss@gmail.com" className="mt-1 inline-block text-lg font-medium text-white underline decoration-blue-400/50 underline-offset-4 hover:decoration-blue-300">playbasestudioss@gmail.com</a>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-slate-300/80">Hours</div>
                <div className="mt-1 font-medium">Mon–Fri, 9am–6pm</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-slate-300/80">Avg response</div>
                <div className="mt-1 font-medium">Under 24 hours</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-300/80">© {new Date().getFullYear()} PlayBaseStudio</div>
          <a href="mailto:playbasestudioss@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 active:bg-white/20 transition px-4 py-2 backdrop-blur border border-white/10 text-sm">playbasestudioss@gmail.com</a>
        </div>
      </footer>
    </div>
  )
}

export default App
