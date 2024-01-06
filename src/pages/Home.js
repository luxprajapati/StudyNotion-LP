import React from "react";

const Home = () => {
  return (
    <div className="relative flex  flex-col text-richblack-100 text-3xl h-screen bg-cover bg-no-repeat bg-pen-bg">
      <div className="absolute inset-0 bg-richblack-700 opacity-30 backdrop-filter backdrop-blur-3xl"></div>

      <div className="flex z-10 text-5xl font-bold mb-4 text-richblack-900 m-20">
        Explore Endless
        <br />
        Learning Opportunities
      </div>

      <div className="z-10 text-3xl ml-20 mt-9 italic">
        Unlock your full potential with StudyNotion and discover a world of{" "}
        <br />
        knowledge in Gift city!
      </div>

      <div className="z-10 ml-20 mt-8">
        <button className="text-richblack-800 bg-richblack-100 py-2 px-4 rounded-sm font-inter font-extrabold shadow-md hover:text-richblack-100 hover:bg-richblack-800 duration-700">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Home;
