import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img, subTitle }) => {
  return (
    <div>
      {title && <Cover title={title} img={img} subTitle={subTitle} />}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-3 mt-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/ourShop/${title}`}>
        <div className="flex justify-center mt-6 md:mt-12 mb-16">
          <button className="btn btn-outline border-0 border-b-4 uppercase ">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
