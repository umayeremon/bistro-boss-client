import Banner from "../Banner/Banner";
import Bistro from "../Bistro/Bistro";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefCards from "../ChefCards/ChefCards";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
  return (
    <div >
      <Banner/>
      <Category/>
      <Bistro/>
      <PopularMenu/>
      <CallUs/>
      <ChefCards/>
      <Featured/>
      <Testimonials/>
    </div>
  );
};

export default Home;