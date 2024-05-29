import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit,reset } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure=useAxiosSecure()

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    console.log(imageFile.image);
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      reset()
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        price: parseFloat(data.price) ,
        category: data.category,
        image: res.data.data.display_url
      };
      console.log(menuItem);
      const menuRes= await axiosSecure.post('/menu', menuItem)
      console.log(menuRes.data)
      if(menuRes.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been added`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle heading={"ADD AN ITEM"} subHeading={"---What's new?---"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-4 lg:p-8 space-y-2"
      >
        <label className="label text-[#444444] font-bold">Recipe Name*</label>
        <input
          type="text"
          placeholder="Recipe name"
          {...register("name")}
          required
          className="input  w-full bg-[#F3F3F3]"
        />
        <div className="flex flex-col lg:flex-row lg:gap-4">
          <div className="flex-1">
            <label className="label text-[#444444] font-bold">Category*</label>
            <select
              defaultValue={"select"}
              className="select w-full bg-[#F3F3F3]"
              {...register("category")}
              required
            >
              <option disabled value={"select"}>
                Category
              </option>
              <option>Salads</option>
              <option>Pizzas</option>
              <option>Soups</option>
              <option>Desserts</option>
              <option>Drinks</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="label text-[#444444] font-bold">Price*</label>
            <input
              type="number"
              placeholder="Price"
              {...register("price")}
              required
              className="input  w-full bg-[#F3F3F3]"
            />
          </div>
        </div>
        <div>
          <label className="label text-[#444444] font-bold">
            Recipe Details*
          </label>
          <textarea
            className="textarea w-full h-36 lg:h-[180px] bg-[#F3F3F3]"
            placeholder="Recipe Details"
            {...register("recipe")}
            required
          ></textarea>
        </div>
        <input
          type="file"
          className="file-input w-full max-w-xs"
          {...register("image")}
          required
        />
        <div>
          <button className="btn outline-none bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
            Add Item <FaUtensils />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItems;
