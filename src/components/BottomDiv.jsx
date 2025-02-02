import React from "react";

const BottomDiv = () => {
  return (
    <div
      id="bottomDiv"
      className="md:mt-[20vw] relative z-10 md:z-0 mt-10 flex justify-between items-start md:px-[7vw]"
    >
      <div id="part1" className="md:w-1/2 w-0"></div>
      <div id="part2" className="md:w-[41%] w-full ">
        <h1 className="text-[8vw] md:text-[6vw] font-thin md:tracking-[-4px] whitespace-nowrap leading-none">
          Blue Pottery <br /> Decorative <br />
          Vase
        </h1>
        <div className="flex md:justify-between gap-10 w-full md:mt-10 mt-4 items-center">
          <button
            id="btn"
            className="overflow-hidden relative md:py-3 md:px-7 px-4 py-2.5 rounded-full border-2 text-[3vw] md:text-[1.4vw] bg-transparent"
          >
            <span className="inline-block relative z-20">Add to cart</span>
          </button>
          <h2 className="text-[5vw]">$57</h2>
        </div>
      </div>
    </div>
  );
};

export default BottomDiv;
