import { RiDeleteBin6Line } from "react-icons/ri";


const UserTable = ({item,idx}) => {
  return (
    <tr className="text-base">
      <th>{idx+1}</th>
      <td>
        {item.name}
      </td>
      <td>{item.email}</td>
      <td>$</td>
      <th>
        <button >
          <RiDeleteBin6Line className="text-xl text-[#B91C1C]" />
        </button>
      </th>
    </tr>
  );
};

export default UserTable;