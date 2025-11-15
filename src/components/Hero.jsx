import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative">
      <div className="h-[360px] sm:h-[440px] md:h-[520px] w-full overflow-hidden rounded-b-[28px]">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-white/0 to-white/90" />
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8">
          <div className="backdrop-blur-md bg-white/40 shadow-xl ring-1 ring-white/40 rounded-3xl p-6 md:p-8 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800">CareGlow HMS 💙✨</h1>
            <p className="mt-3 text-slate-600 text-sm md:text-base">
              A cozy, minimal hospital management system for the Gen‑Z era — pastel vibes, glass cards, and buttery-smooth flows.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
