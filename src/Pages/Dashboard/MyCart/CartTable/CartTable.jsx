
import { RiDeleteBin6Line } from "react-icons/ri";

const CartTable = ({ item ,idx,handleDelete}) => {
  const { image, price, name,_id } = item;
  return (
    <tr className="text-base">
      <th>{idx+1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt={name} />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>${price}</td>
      <th>
        <button onClick={()=>handleDelete(_id)}>
          <RiDeleteBin6Line className="text-xl text-[#B91C1C]" />
        </button>
      </th>
    </tr>
  );
};

export default CartTable;
