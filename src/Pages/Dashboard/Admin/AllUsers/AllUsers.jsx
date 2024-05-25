import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import UserTable from "../UserTable/UserTable";

const AllUsers = () => {
  const axiosSecure=useAxiosSecure();
  const {data:users={}}=useQuery({
    queryKey:['users'],
    queryFn: async()=>{
      const res= await axiosSecure.get('/users')
      return res.data
    }
  })
  return (
    <div>
      <SectionTitle
        heading={"MANAGE ALL USERS"}
        subHeading={"---How many??---"}
      />
      <div className="  bg-white rounded-xl py-2 lg:py-4 px-4 lg:px-8">
        <div className="flex flex-row justify-between items-center uppercase font-cinzel font-bold lg:text-xl">
          <h2>
            Total users:
            <span className="text-base lg:text-2xl"> {users.length}</span>
          </h2>
        </div>

        {users.length > 0 && (
          <div className="overflow-x-auto mt-4">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-base font-inter  text-white bg-[#D1A054]">
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  users?.map((item,idx)=><UserTable key={idx} item={item} idx={idx}></UserTable>)
                }
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
