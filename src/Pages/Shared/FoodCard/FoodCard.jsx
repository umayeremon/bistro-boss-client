

const FoodCard = ({item}) => {
  const { name,recipe, image,price } = item;
  return (
    <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
          className="relative"
        />
        <h4 className=" p-2 absolute top-4 right-8 md:right-4 text-xs bg-black text-white">${price}</h4>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center mt-4">
          <button className="btn btn-outline bg-slate-100 uppercase border-0 border-b-4 border-[#BB8506] text-[#BB8506]">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;