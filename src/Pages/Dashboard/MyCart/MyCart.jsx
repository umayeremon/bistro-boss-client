import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import CartTable from "./CartTable/CartTable";
import useAxios from "../../../Hooks/useAxios";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const priceFix = totalPrice.toFixed(2);
  const axiosSecure = useAxios();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"---My Cart---"} />
      <div className=" mx-auto bg-white rounded-xl py-4 px-8">
        <div className="flex flex-row justify-between items-center uppercase font-cinzel font-bold text-xl">
          <h2>
            Total orders: <span className="text-2xl"> {cart.length}</span>
          </h2>
          <h2>
            total price: <span className="text-2xl"> ${priceFix}</span>
          </h2>
          <button className="btn  bg-[#D1A054] text-white">Pay</button>
        </div>
        {cart.length > 0 && (
          <div className="overflow-x-auto mt-4">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-base font-inter  text-white bg-[#D1A054]">
                  <th></th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, idx) => (
                  <CartTable
                    key={idx}
                    handleDelete={handleDelete}
                    idx={idx}
                    item={item}
                  ></CartTable>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
