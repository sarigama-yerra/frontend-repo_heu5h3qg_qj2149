import Card from './Card'
import { CalendarDays } from 'lucide-react'

const appointments = [
  { id: 1, patient: 'Ava Harper', doctor: 'Dr. Brooks', time: 'Today • 2:30 PM' },
  { id: 2, patient: 'Milo Chen', doctor: 'Dr. Rivera', time: 'Today • 4:00 PM' },
  { id: 3, patient: 'Zoe Patel', doctor: 'Dr. Abbas', time: 'Tomorrow • 10:15 AM' },
]

export default function Appointments() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
      <Card className="p-4 md:p-6 lg:col-span-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-800">Appointments ✨</h3>
          <button className="px-4 py-2 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">Book Appointment</button>
        </div>
        <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs">
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-2xl bg-white/70 ring-1 ring-black/5 flex items-center justify-center hover:bg-sky-50 transition-colors">
              {i + 1}
            </div>
          ))}
        </div>
      </Card>
      <Card className="p-4 md:p-6">
        <div className="flex items-center gap-2 text-slate-700">
          <CalendarDays className="h-5 w-5" />
          <h3 className="text-lg font-semibold text-slate-800">Upcoming</h3>
        </div>
        <ul className="mt-4 space-y-3">
          {appointments.map((a) => (
            <li key={a.id} className="flex items-center justify-between p-3 rounded-2xl bg-white/70 ring-1 ring-black/5">
              <div>
                <p className="font-medium text-slate-800">{a.patient}</p>
                <p className="text-xs text-slate-500">{a.doctor} • {a.time}</p>
              </div>
              <button className="text-xs px-3 py-1.5 rounded-xl bg-slate-800 text-white hover:-translate-y-0.5 transition-all">Details</button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
