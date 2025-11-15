import Layout from '../components/Layout'
import Card from '../components/Card'

const people = [
  { id: 1, name: 'Ava Harper', age: 26, condition: 'Seasonal Allergies', avatar: 'https://i.pravatar.cc/100?img=1' },
  { id: 2, name: 'Milo Chen', age: 34, condition: 'Routine Checkup', avatar: 'https://i.pravatar.cc/100?img=12' },
  { id: 3, name: 'Zoe Patel', age: 19, condition: 'Anxiety', avatar: 'https://i.pravatar.cc/100?img=5' },
  { id: 4, name: 'Leo Kim', age: 42, condition: 'Back Pain', avatar: 'https://i.pravatar.cc/100?img=23' },
]

export default function Patients() {
  return (
    <Layout>
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Patients 💙</h2>
          <p className="text-slate-500 text-sm">Clean list with quick actions</p>
        </div>
        <div className="flex gap-2">
          <input className="px-3 py-2 rounded-2xl bg-white/70 ring-1 ring-black/5 text-sm placeholder:text-slate-400" placeholder="Search patients" />
          <button className="px-4 py-2 rounded-2xl bg-sky-500 text-white">Add</button>
        </div>
      </div>

      <Card className="mt-6">
        <ul className="divide-y divide-slate-200/60">
          {people.map((p) => (
            <li key={p.id} className="p-4 flex items-center gap-4 hover:bg-white/60 transition-colors">
              <img src={p.avatar} alt={p.name} className="h-12 w-12 rounded-2xl object-cover" />
              <div className="flex-1">
                <p className="font-medium">{p.name}</p>
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
    </Layout>
  )
}
