import Card from './Card'

const people = [
  { id: 1, name: 'Ava Harper', age: 26, condition: 'Seasonal Allergies', avatar: 'https://i.pravatar.cc/100?img=1' },
  { id: 2, name: 'Milo Chen', age: 34, condition: 'Routine Checkup', avatar: 'https://i.pravatar.cc/100?img=12' },
  { id: 3, name: 'Zoe Patel', age: 19, condition: 'Anxiety', avatar: 'https://i.pravatar.cc/100?img=5' },
  { id: 4, name: 'Leo Kim', age: 42, condition: 'Back Pain', avatar: 'https://i.pravatar.cc/100?img=23' },
]

export default function PatientsList() {
  return (
    <Card className="p-4 md:p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-800">Patients 💙</h3>
        <input className="px-3 py-2 rounded-2xl bg-white/70 ring-1 ring-black/5 text-sm placeholder:text-slate-400" placeholder="Search" />
      </div>
      <ul className="mt-4 divide-y divide-slate-200/60">
        {people.map((p) => (
          <li key={p.id} className="py-3 flex items-center gap-3">
            <img src={p.avatar} alt={p.name} className="h-10 w-10 rounded-2xl object-cover" />
            <div className="flex-1">
              <p className="font-medium text-slate-800">{p.name}</p>
              <p className="text-xs text-slate-500">Age {p.age} • {p.condition}</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-xs rounded-xl bg-sky-500/90 text-white hover:shadow-md hover:-translate-y-0.5 transition-all">View</button>
              <button className="px-3 py-1.5 text-xs rounded-xl bg-indigo-500/90 text-white hover:shadow-md hover:-translate-y-0.5 transition-all">Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}
