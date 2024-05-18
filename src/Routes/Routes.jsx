import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/contactUs',
        element:<ContactUs/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/ourMenu',
        element:<OurMenu/>
      },
      {
        path:'/ourShop',
        element:<OurShop/>
      },
    ]
  }
])

export default router