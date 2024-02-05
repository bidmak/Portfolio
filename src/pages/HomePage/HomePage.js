import React from "react";
import "./HomePage.css";
import { HiArrowDown } from "react-icons/hi";
import PersonalInfo from "../../components/Common/PersonalInfo";
import AboutMe from "../../components/Common/AboutMe";
import FollowMe from "../../components/Common/FollowMe";
import HomeImage from "../../components/Common/HomeImage";

const HomePage = ({ id, name, profession, aboutMe, followLinks }) => {
  return (
    <section
      id={id}
      className="w-full bg-white min-h-[100vh] relative float-left"
    >
      <div className="details container min-h-[100vh] relative">
        <div className="name  min-h-[100vh] relative flex items-center justify-between">
          <div className="pb-28">
            <PersonalInfo name={name} profession={profession} />
            <AboutMe aboutMe={aboutMe} />
          </div>
        </div>
        <div className="follow absolute bottom-[80px] flex items-center">
          <FollowMe
            followLinks={followLinks}
            lnkStyle="w-[52px] h-[52px] bg-neutral-100 rounded-full  group-hover:bg-neutral-800"
            iconStyle="fill-black group-hover:fill-white group-hover:text-2xl"
          />
        </div>
        <div className="absolute w-1/2 bottom-0 right-[20px] text-center">
          <HomeImage />
          <HiArrowDown size={32} className="animate-bounce	mb-4" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
