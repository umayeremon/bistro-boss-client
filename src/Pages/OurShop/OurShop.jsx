import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import shopImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../Shared/FoodCard/FoodCard";

const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu]=useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | SHOP</title>
      </Helmet>
      <Cover
        img={shopImg}
        title="OUR SHOP"
        subTitle="Would you like to try a dish?"
      />
      <div className={"flex flex-row items-center justify-center my-8"}>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList >
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
            {
              salad.map((item,idx)=><FoodCard key={idx} item={item}></FoodCard>)
            }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
            {
              pizza.map((item,idx)=><FoodCard key={idx} item={item}></FoodCard>)
            }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
            {
              soup.map((item,idx)=><FoodCard key={idx} item={item}></FoodCard>)
            }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
            {
              dessert.map((item,idx)=><FoodCard key={idx} item={item}></FoodCard>)
            }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
            {
              drinks.map((item,idx)=><FoodCard key={idx} item={item}></FoodCard>)
            }
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
