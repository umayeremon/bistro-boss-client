
const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="mx-auto text-center space-y-4 mb-4 lg:my-8 w-[300px] md:w-[400px]">
      <h4 className="text-[#D99904] italic ">{subHeading}</h4>
      <h1 className=" font-bold text-2xl md:text-3xl py-2  border-y-4 border-gray-300">{heading}</h1>
    </div>
  );
};

export default SectionTitle;