import Card from './Card'

const doctors = [
  { id: 1, name: 'Dr. Eliana Brooks', specialty: 'Cardiology', avatar: 'https://i.pravatar.cc/100?img=48', available: true },
  { id: 2, name: 'Dr. Jonah Lee', specialty: 'Pediatrics', avatar: 'https://i.pravatar.cc/100?img=32', available: false },
  { id: 3, name: 'Dr. Noor Abbas', specialty: 'Dermatology', avatar: 'https://i.pravatar.cc/100?img=15', available: true },
  { id: 4, name: 'Dr. Kai Rivera', specialty: 'Neurology', avatar: 'https://i.pravatar.cc/100?img=9', available: true },
]

export default function DoctorsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {doctors.map((d) => (
        <Card key={d.id} className="p-5">
          <div className="flex items-center gap-4">
            <img src={d.avatar} alt={d.name} className="h-12 w-12 rounded-2xl object-cover" />
            <div className="flex-1">
              <p className="font-semibold text-slate-800">{d.name}</p>
              <div className="mt-1 flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-600 ring-1 ring-rose-200">{d.specialty}</span>
                <span className={`px-2 py-0.5 rounded-full ring-1 ${d.available ? 'bg-emerald-100 text-emerald-600 ring-emerald-200' : 'bg-slate-100 text-slate-500 ring-slate-200'}`}>
                  {d.available ? 'Available' : 'Away'}
                </span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
