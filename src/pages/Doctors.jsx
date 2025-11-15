import Layout from '../components/Layout'
import DoctorsGrid from '../components/DoctorsGrid'

export default function Doctors() {
  return (
    <Layout>
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Doctors ✨</h2>
          <p className="text-slate-500 text-sm">Specialty badges and availability</p>
        </div>
      </div>

      <div className="mt-6">
        <DoctorsGrid />
      </div>
    </Layout>
  )
}
