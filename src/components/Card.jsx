export default function Card({ children, className = '' }) {
  return (
    <div className={`rounded-3xl bg-white/70 backdrop-blur-xl ring-1 ring-black/5 shadow-xl shadow-slate-200/60 ${className}`}>
      {children}
    </div>
  )
}
