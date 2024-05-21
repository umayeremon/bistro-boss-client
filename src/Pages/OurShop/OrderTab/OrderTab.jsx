import FoodCard from "../../Shared/FoodCard/FoodCard";


const OrderTab = ({items}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
    {
      items.map((item,idx)=><FoodCard key={idx} item={item}></FoodCard>)
    }
    </div>
  );
};

export default OrderTab;