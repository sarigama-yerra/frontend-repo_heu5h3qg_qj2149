import Hero from '../components/Hero'
import Stats from '../components/Stats'
import PatientsList from '../components/PatientsList'
import DoctorsGrid from '../components/DoctorsGrid'
import Appointments from '../components/Appointments'
import Layout from '../components/Layout'

export default function Dashboard() {
  return (
    <Layout>
      <Hero />
      <div className="mt-6 md:mt-10 space-y-6 md:space-y-8">
        <Stats />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="space-y-4 md:space-y-6 lg:col-span-2">
            <Appointments />
          </div>
          <div>
            <PatientsList />
          </div>
        </div>
      </div>
    </Layout>
  )
}
