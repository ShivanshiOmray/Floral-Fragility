import React from "react";

const ParagraphDiv = () => {
  return (
    <div
      id="paragraphDiv"
      className=" md:pl-[11vw] md:pr-[5vw] md:mt-[22vw] w-full md:flex justify-between items-start"
    >
      <div id="part1" className="md:w-1/2 w-0"></div>
      <div id="part2" className="md:w-[45%] w-full relative z-10 md:z-0">
        <h5 className="text-xl md:text-4xl  text-justify">
          With an open mind and a strong dedication to the craft we are
          determined to fully reveal the essence of every piece we come across.
        </h5>
        <p className="leading-normal text-sm md:text-lg mt-[2vw] text-justify ">
          <span className="text-2xl md:text-5xl">W</span>hether you know him as
          Filthy Frank, Pink Guy, or the creator of the Harlem Shake chances are
          that you're at least somewhat familiar with Joji by now. At the age of
          26. George Miller, the Osaka bom and Brooklyn based musician whose
          emotive blend of R&B and alternative punk has touched the hearts of
          sad bois everywhere. became the first Asian artist to reach number one
          in the Billboard Top R&B Hip Hop charts, Just this month, he earned
          platinum status for his 2018 version of a power ballad. Interview
          consulted se cereal savonte for his ultimate guide to the must
          suportant mcafol the day, Spoiler alert, he lies Bison Boa.
        </p>
      </div>
    </div>
  );
};

export default ParagraphDiv;
