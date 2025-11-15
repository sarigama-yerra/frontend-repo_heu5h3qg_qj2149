import { Users, Stethoscope, CalendarDays } from 'lucide-react'

const items = [
  {
    label: 'Patients',
    value: '1,284',
    icon: Users,
    gradient: 'from-rose-200/60 to-rose-100/60',
  },
  {
    label: 'Doctors',
    value: '62',
    icon: Stethoscope,
    gradient: 'from-emerald-200/60 to-emerald-100/60',
  },
  {
    label: 'Appointments',
    value: '342',
    icon: CalendarDays,
    gradient: 'from-sky-200/60 to-indigo-100/60',
  },
]

export default function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
      {items.map(({ label, value, icon: Icon, gradient }) => (
        <div
          key={label}
          className="group relative rounded-3xl p-4 md:p-6 ring-1 ring-black/5 bg-white/60 backdrop-blur-xl shadow-xl shadow-slate-200/60 hover:shadow-2xl transition-shadow"
        >
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient}`} />
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
              <p className="mt-1 text-3xl md:text-4xl font-bold text-slate-800">{value}</p>
            </div>
            <div className="h-11 w-11 rounded-2xl bg-white/70 ring-1 ring-black/5 flex items-center justify-center">
              <Icon className="h-5 w-5 text-slate-700" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
