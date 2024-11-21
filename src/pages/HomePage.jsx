import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"
import Cursor from "../images/cursor.png"
export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
        <main className=" mt-[200px] sm:mt-[100px] mx-auto sm:mx-[150px] ">
            <div className=" sm:mt-[50px] md:mt-[100px] text-center sm:text-left ">
              <h1 className="text-white font-bold sm:text-[72px] text-[48px] mx-[50px] sm:mx-0">Selamat Datang</h1>
              <div className="text-white sm:text-[36px] text-[24px] mt-[16px]">
              <p>Farmasi Rumah Sakit </p>
              <p> Prof. Dr. Chairuddin P. lubis</p>
              </div>
            </div>
            <div className="mt-[40px] sm:mt-[40px]"/>
            <div className="flex justify-center  ]">
              <div className="relative mx-[50px">
              <img className="absolute -right-5 -bottom-5  sm:-bottom-8 size-10 sm:size-16 sm:-right-8  motion-safe:animate-bounce " src={Cursor} alt="" />
              <Button onClick={()=>navigate("/antrian")} className={" w-[100%] sm:w-[500px] sm:text-[28px] bg-primary-color text-white font-bold  shadow-md shadow-black rounded-2xl "}>Ambil Antrian</Button>
              </div>
            </div> 
            
        </main>

    </>
  )
}
