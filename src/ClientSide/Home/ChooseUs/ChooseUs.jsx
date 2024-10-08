import { MdArrowRightAlt } from "react-icons/md";

const ChooseUs = () => {
  return (
    <div className="mt-[60px]  md:mt-[80px] lg:mt-[80px] xl:mt-[150px] 2xl:mt-[150px];">
      <div className="  ">
        <div className="relative">
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://i.ibb.co/XsjKQpK/4e5570afab2bc908ac5c505230f9bd33-66d3e7972bb5a.webp")`,
            }}
            className="bg-no-repeat bg-center bg-cover w-full h-[800px] flex justify-center items-center"
          ></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center py-[156px] xs:py-[156px] xl:py-[156px] 2xl:py-[156px] lg:py-[156px] md:py-[156px] ">
            <h1
              className="text-white font-helvetica font-bold text-[30px] leading-[45px] px-[150px] xs:text-[30px] xs:leading-[45px] xs:px-[150px] xl:text-[48px] xl:leading-[57.6px] xl:px-[345px] 2xl:text-[48px] 2xl:leading-[57.6px] 2xl:px-[345px]
            lg:text-[35px] lg:leading-[45px] lg:px-[200px]  md:text-[30px] md:leading-[45px] md:px-[150px]"
            >
              Choose from 11+ University and College Scholarships
            </h1>
            <p
              className="text-white font-helvetica font-bold mt-4 xl:text-[16px] xl:leading-[24px]   xl:px-[449px] 2xl:text-[16px] 2xl:leading-[24px]   2xl:px-[449px] lg:text-[16px] lg:leading-[24px]   lg:px-[180px]
            md:text-[16px] md:leading-[24px]   md:px-[100px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="flex items-center justify-between text-[#F6941E] bg-white px-6 py-3 mt-6 border border-[#F6941E]">
              join us <MdArrowRightAlt className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
