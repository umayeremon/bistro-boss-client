
const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="mx-auto text-center space-y-4 my-8 w-[300px] md:w-[400px]">
      <h4 className="text-[#D99904] italic ">{subHeading}</h4>
      <h1 className="text-[#151515] font-bold text-2xl md:text-3xl py-2   border-y-4">{heading}</h1>
    </div>
  );
};

export default SectionTitle;