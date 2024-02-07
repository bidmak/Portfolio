import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

const ProjectGridItems = ({ projects, processPopup }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid-container grid grid-cols-3 gap-6">
      {projects.map(
        (
          {
            projectName,
            projectType,
            description,
            imgUrl,
            additionalImages,
            projectLink,
          },
          index
        ) => {
          const isHovered = hovered === index;
          return (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="group relative shadow-md ">
                <div
                  className="h-60 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${imgUrl})`,
                  }}
                ></div>
                {isHovered && (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      processPopup({
                        title: projectName,
                        company: projectType,
                        description,
                        imgUrl,
                        additionalImages,
                        projectLink,
                      });
                    }}
                    className="absolute inset-0 bg-black bg-opacity-80  cursor-pointer	 flex items-center justify-center font-semibold "
                  >
                    <div className="text-center text-neutral-50 space-y-8">
                      <div className="flex-1 space-y-2">
                        <h3 className="  text-xl font-semibold">
                          {projectName}
                        </h3>
                        <h3 className=" text-neutral-400 text-lg font-medium">
                          {projectType}
                        </h3>
                      </div>
                      <div className="underline underline-offset-2 ">
                        <span className="font-normal text-sm">Read More</span>
                        <BsArrowUpRight className="inline-block w-[18px] h-[18px] ms-2 mt-[2px]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default ProjectGridItems;
