import { useMutation } from "@tanstack/react-query"
import {Card} from "../components/Card.jsx"
import { ticket_type } from "../const/constant.js"
import { createTicket } from "../http/antrian.js"
import { useState } from "react"
import { SuccessPage } from "./SuccessPage.jsx"
import { useNavigate } from "react-router-dom"
import { errorNotify } from "../alerts/alert.js"
import { LoadingPage } from "./LoadingPage.jsx"

export const AmbilAntrianPage = () => {
  const [success, setSuccess] = useState(false);
const navigate = useNavigate();
  const {mutate,isPending} = useMutation({
    mutationKey:"createTicket",
    mutationFn:createTicket,
    onSuccess:()=>{
      setSuccess(true)

      setTimeout(() => {
        setSuccess(false)
        navigate("/")
      },5000)
          },
    onError:(error)=>{
      errorNotify("gagal membuat tiket")
      console.log(error)
  },
  
})

const createTicketHandler = (ticket_type)=>{ 
   mutate(ticket_type);
  }
  return (
    <>
    {(!success && !isPending) &&
         <main className="mt-[150px] sm:mt-[40px] lg:mt-[100px] mx-auto sm:mx-[120px]">
            <div className=" sm:mt-[100px] text-center sm:text-left  ">
              <h1 className="text-white font-bold sm:text-[72px] text-[48px] mx-[50px] sm:mx-0">Ambil Antrian</h1>
              <div className="hidden lg:block text-white sm:text-[36px] text-[24px] mt-[16px]">
              <p>Pilih jenis antrian yang ingin anda ambil</p>
              </div>
            </div>
          {/* Card */}
            <div className="flex w-[100vw] sm:w-[80vw]  sm:justify-center   flex-row gap-12 mt-[20px] overflow-auto">
             {ticket_type.map((ticket, index) =><Card key={index} ticket_type={ticket.ticket_type} onClick={()=>createTicketHandler(ticket.ticket_type)} ticket_description={ticket.ticket_description}/> )}
            </div>

         </main>
    
    }
    {isPending &&
    <LoadingPage/>
    }

    {success &&
      <SuccessPage/>
    }
    </>
  )
}
