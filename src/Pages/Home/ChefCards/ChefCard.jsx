const ChefCard = ({ item }) => {
  const { item_name, item_materials, image } = item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={item_name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item_name}</h2>
        <p>{item_materials}</p>
        <div className="card-actions justify-center mt-4">
          <button className="btn btn-outline uppercase border-0 border-b-4 border-[#BB8506]">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
