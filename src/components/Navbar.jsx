import { NavLink } from 'react-router-dom'
import { HeartPulse, Users, Stethoscope, CalendarDays } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Dashboard', icon: HeartPulse },
  { to: '/patients', label: 'Patients', icon: Users },
  { to: '/doctors', label: 'Doctors', icon: Stethoscope },
  { to: '/appointments', label: 'Appointments', icon: CalendarDays },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/50 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-400 via-blue-400 to-indigo-400 shadow-md shadow-blue-200/50 flex items-center justify-center">
              <HeartPulse className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-slate-800">CareGlow</span>
          </div>

          <nav className="flex items-center gap-1 rounded-full bg-white/60 px-2 py-1 shadow-lg shadow-slate-200/50 ring-1 ring-black/5">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `group relative flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-colors ${isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-800'}`}
              >
                {({ isActive }) => (
                  <>
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-sky-200/80 to-indigo-200/80 ring-1 ring-black/5" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
