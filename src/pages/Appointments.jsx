import Layout from '../components/Layout'
import AppointmentsSection from '../components/Appointments'

export default function Appointments() {
  return (
    <Layout>
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Appointments 💫</h2>
          <p className="text-slate-500 text-sm">Calendar + list with soft interactions</p>
        </div>
      </div>

      <div className="mt-6">
        <AppointmentsSection />
      </div>
    </Layout>
  )
}
