import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const FoodCard = ({item}) => {
  const { name,recipe, image,price,_id } = item;
  const {user}=useContext(AuthContext);
  const [, refetch]=useCart()
  const location=useLocation()
  const navigate=useNavigate()
  const axiosSecure=useAxiosSecure()
  const handleAddToCart=(food)=>{
    if(user && user.email){
      const menuItem={
        menuId:_id,
        email:user.email,
        name,
        image,
        price
      }
      console.log(food)
     axiosSecure.post('/carts', menuItem)
      .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has been added to cart`,
            showConfirmButton: false,
            timer: 2000
          });
          refetch()
        }
      })
    }
    else{
      Swal.fire({
        title: "You are not logged in",
        text: "Please login before add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log in!"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login', {state:{from:location}})
        }
      });
    }
  }
  return (
    <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
          className="relative"
        />
        <h4 className=" p-2 absolute top-4 right-8 md:right-4 text-xs bg-black text-white">${price}</h4>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center mt-4">
          <button onClick={()=>handleAddToCart(item)} className="btn btn-outline bg-slate-100 uppercase border-0 border-b-4 border-[#BB8506] text-[#BB8506]">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;