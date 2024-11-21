import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { AmbilAntrianPage } from "./pages/AmbilAntrianPage";

export const routes = createBrowserRouter([
  {path:"/",  element:<RootLayout/>, children:[
    {index:true,element:<HomePage/>},
    {path:"antrian",element:<AmbilAntrianPage/>},
  
  ]}
],
{future:{
  v7_fetcherPersist: true,
v7_normalizeFormMethod: true,
v7_partialHydration: true,
v7_relativeSplatPath: true,
v7_skipActionErrorRevalidation: true,
v7_startTransition: true,
}})