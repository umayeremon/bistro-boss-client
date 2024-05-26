import { FaUsers } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const UserTable = ({ item, idx, axiosSecure, refetch, handleMakeAdmin }) => {
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
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
    <tr className="text-base">
      <th>{idx + 1}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>
        {item.role === "admin" ? (
          "Admin"
        ) : (
          <button onClick={() => handleMakeAdmin(item._id)}>
            <FaUsers className="text-3xl text-white bg-[#D1A054] p-1 rounded-lg" />
          </button>
        )}
      </td>
      <th>
        <button onClick={() => handleDelete(item._id)}>
          <RiDeleteBin6Line className="text-xl text-[#B91C1C]" />
        </button>
      </th>
    </tr>
  );
};

export default UserTable;
