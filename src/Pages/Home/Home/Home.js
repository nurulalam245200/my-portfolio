import React from "react";
import myPhoto from "../../../assets/41461.jpg";
import About from "../About/About";
import gif1 from "../../../assets/gif/swipe-up.gif";
import gif2 from "../../../assets/gif/mobile.gif";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
const Home = () => {
  return (
    <div>
      <div className="flex flex-col-reverse justify-center items-center">
        <div className="avatar mt-5 ">
          <div className="w-52 ring ring-offset-base-700 ring-offset-2 rounded-full">
            <img src={myPhoto} alt="MyPhoto" />
          </div>
        </div>
        <div className=" mt-5">
          <h1 className="text-5xl text-sky-400 font-serif mb-5 font-bold text-center">
            Hey! I'm NURUL ALAM AKIB
          </h1>
          <p className="text-2xl font-sans mb-5 text-black text-center">
            A Front-End Web Developer focused on building the web sities develop
            and design <br />A creative and dynamic web page developer specially
            working on with React Js and more tools.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-48">
        <img src={gif1} className="w-full bg-sky-400" alt="gif social" />
        <img src={gif2} className="w-full" alt="gif mobile" />
      </div>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
