const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item || {};
  return (
    <div className="flex gap-6">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        alt=""
        className="w-[100px] md:w-[100px] "
      />
      <div className="space-y-2">
        <h2>{name}----------------</h2>
        <p>{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItem;
