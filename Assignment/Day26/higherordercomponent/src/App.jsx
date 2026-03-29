import React from 'react'
import LandingPage from './components/LandingPage'
import withAuth from './hoc/withAuth'

const PriorLanding = withAuth(LandingPage)
const AfterLanding = withAuth(LandingPage)

const App = () => {

  

  return (
    <>
    <PriorLanding style='bg-green-400 h-50 flex flex-col items-center justify-center' heading='This is Prior page'/>
    <LandingPage style='bg-red-400 h-50 flex flex-col items-center justify-center' heading='This is landing page'/>
    <AfterLanding style='bg-yellow-400 h-50 flex flex-col items-center justify-center' heading='This is After page'/>
    </>
  )
}

export default App