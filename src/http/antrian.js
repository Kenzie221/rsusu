import { urlBase } from "./base"



export const createTicket =async(ticket_type)=>{
  let param = {
    location:"pharmacy",
    type:ticket_type,
    name:null,
  }
  const response = await fetch(`${urlBase}/iqueue/print?location=pharmacy&type=${ticket_type}&name=${param.name}`,{
    method:"GET",

    
    
  })

  if(!response.ok){
    const error = await response.json();
    throw error;
  }

  const data = await response.json();
  return data;
}