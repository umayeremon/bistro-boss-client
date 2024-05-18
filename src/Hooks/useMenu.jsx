import { useEffect, useState } from "react";


const useMenu = () => {
  const [menu,setMenu]=useState([]);
  const [loader,setLoader]=useState(true)
  useEffect(()=>{
    fetch("menu.json")
    .then(res=>res.json())
    .then(data=>{
      setMenu(data)
      setLoader(false)
    })
  },[menu.json])
  return [menu,loader]
};

export default useMenu;