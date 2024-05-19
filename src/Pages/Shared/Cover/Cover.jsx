const Cover = ({img,title,subTitle}) => {
  return (
    <div
      className="hero h-[450px] font-cinzel"
      style={{
        backgroundImage:
          `url(${img})`,
      }}
    >
      <div className="hero-overlay w-[400px] md:w-[600px] lg:w-[1000px] h-[250px]  bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md md:max-w-xl lg:max-w-4xl">
          <h1 className="mb-5  text-2xl md:text-4xl font-bold uppercase">{title}</h1>
          <p className="mb-5 text-sm">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
