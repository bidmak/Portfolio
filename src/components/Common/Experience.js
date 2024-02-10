import React from "react";
import "./Experience.css";
import { BsArrowUpRight } from "react-icons/bs";

const Experience = ({ experiences, processPopup }) => {
  return (
    <ul>
      {experiences.map(
        (
          { startDate, endDate, company, title, description, imgUrl },
          index
        ) => {
          return (
            <li
              key={index}
              className="relative group hover:bg-[#6244C5] transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <div
                className={`flex items-center justify-between  py-7 pl-[25px] pr-[35px] border-b border-neutral-950 dark:border-neutral-600 ${
                  index === 0 ? "border-t" : ""
                }`}
              >
                <div className="left w-[40%] flex items-center">
                  <span className="number inline-block text-[#6244C5] text-[24px] font-dm group-hover:text-white">
                    {"0"}
                    {index + 1}
                  </span>
                  <h3 className="lg:text-[25px] xl:text-[29px] font-medium pl-[30px] group-hover:text-white">
                    {title}
                  </h3>
                </div>
                <div className="w-[60%] flex items-center justify-between dark:text-neutral-300 group-hover:text-neutral-50">
                  <div className="exp-description pr-[150px]">
                    {description && description[0]}
                  </div>
                  <div>
                    <BsArrowUpRight className="w-[22px] h-[22px] " />
                  </div>
                </div>
                <button
                  className="absolute inset-0"
                  onClick={(e) => {
                    e.preventDefault();
                    processPopup({
                      startDate,
                      endDate,
                      company,
                      imgUrl,
                      title,
                      description,
                    });
                  }}
                ></button>
              </div>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default Experience;
