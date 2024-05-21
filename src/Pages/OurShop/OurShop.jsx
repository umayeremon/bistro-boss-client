import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import shopImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const categories = ["salads", "pizza", "soups", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex=categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
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
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
