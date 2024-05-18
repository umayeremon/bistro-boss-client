import { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ChefCards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("chef.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <section className="mb-12">
      <SectionTitle heading="CHEF RECOMMENDS" subHeading="---Should Try---"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mx-4">
        {data.map((item, idx) => (
          <ChefCard key={idx} item={item}></ChefCard>
        ))}
      </div>
    </section>
  );
};

export default ChefCards;
