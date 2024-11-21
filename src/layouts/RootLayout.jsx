
import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <>
   <Navbar/>
   <main className=" bg-hos-bg  bg-no-repeat bg-cover w-[100vw] h-[100vh] flex  sm:flex-col">
   <Outlet/>
   </main>
    </>
  )
}
