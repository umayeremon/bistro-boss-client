import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
  const [menu]=useMenu();
  const popularItems=menu.filter(item=>item.category==="popular")
  return (
    <section className="my-24 mx-3">
      <SectionTitle heading="FROM OUR MENU" subHeading={"---Check it out---"}></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {
         popularItems.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
    </section>
  );
};

export default PopularMenu;