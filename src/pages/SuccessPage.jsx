
import SuccesLogo from "../images/successIcon.png"
export const SuccessPage = () => {
  return (
   <>
  
         <main className=" mt-[200px] mx-auto ">
          <img className="size-[150px] sm:size-[180px] md:size-[200px] mx-auto" src={SuccesLogo} alt="" />
            <div className=" sm:mt-[50px] mt-[30px] text-center ">
              <h1 className="text-white font-bold sm:text-[36px] text-[32px] mx-[50px] sm:mx-0">Ambil Nomor Antrian Anda</h1>
              <div className="text-white sm:text-[24px] lg:text-[32px] text-[24px] mt-[16px]">
              <p>Tunggu nomor antrian anda dipanggil</p>
              </div>
            </div>
            <div className="mt-[40px] sm:mt-[40px]"/>
     
            
        </main>
   </>
  )
}
