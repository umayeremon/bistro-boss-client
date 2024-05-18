import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
  const [menu]=useMenu();
  const popularItems=menu.filter(item=>item.category==="popular")
  return (
    <section className="my-12 mx-3">
      <SectionTitle heading="FROM OUR MENU" subHeading={"---Check it out---"}></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {
         popularItems.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
      <div className="flex justify-center mt-6 md:mt-12">
        <button className="btn btn-outline border-0 border-b-4 uppercase ">View Full Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;