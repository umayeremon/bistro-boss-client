import chef from "../../../assets/home/chef-service.jpg";
import Cover from "../../Shared/Cover/Cover";

const Bistro = () => {
  return (
    <div className="mt-24">
      <Cover
        img={chef}
        title="Bistro Boss"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
      />
    </div>
  );
};

export default Bistro;
