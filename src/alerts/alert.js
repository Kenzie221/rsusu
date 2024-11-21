import { toast } from "react-toastify";

export const infoNotify = (message)=>{
  toast.info(message,{
    position:"top-right",
    autoClose:3000
  });

}

export const successNotify = (message)=>{
  toast.success(message,{
    position:"top-right",
    autoClose:3000
  });

}

export const errorNotify = (message)=>{
  toast.error(message,{
    position:"top-right",
    autoClose:3000
  });

}