import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className=" featured-img bg-fixed  my-12 bg-cover">
      <div className="bg-black  bg-opacity-40 p-12 text-white">
        <SectionTitle heading="FROM OUR MENU" subHeading="---Check it out---" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
          <img src={featuredImg} alt="" className="w-[300px] lg:w-[400px]" />
          <div className="w-[350px] lg:w-[500px] space-y-2 text-white ">
            <h4>March 20, 2023</h4>
            <h2>WHERE CAN I GET SOME?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4 border-[#BB8506] text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
