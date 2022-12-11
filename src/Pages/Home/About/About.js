import React from "react";
import { FaPaintRoller, FaPager, FaSitemap } from "react-icons/fa";
const About = () => {
  return (
    <div id="about" className="mt-10">
      <div className="bg-sky-400 w-full mx-auto h-[500px] p-10">
        <h1 className="text-5xl text-white font-serif mb-5 font-bold text-center">
          Hi Viewers! Nice To Meet You.
        </h1>
        <p className="text-sm font-bold text-white text-center ">
          Since beginning my journey as a web designer and developer nearly 6
          months ago, <br /> now i have some real time experience of personal
          small project, <br /> now I am a Junior web developer, I know some web
          application technology. I will share it below the Box
        </p>
      </div>
      <div className="grid grid-col-1 md:grid-cols-1 lg:grid-cols-3 gap-2 w-11/12 mx-auto -mt-24 bg-base-100 rounded-lg">
        <div className="px-3 mt-5">
          <div className="flex justify-center">
            <FaPaintRoller className="text-indigo-900 text-4xl text-center"></FaPaintRoller>
          </div>
          <h2 className="text-4xl font-semibold text-center mb-3 mt-3">
            Designer
          </h2>
          <p className="text-sm text-slate-400 font-serif text-center mt-3">
            Clear code and simple sturcture with code snippet.Clean
            design,content and interactions
          </p>
          <h3 className="text-xl font-semibold text-indigo-900 text-center">
            Enjoying Design :
          </h3>
          <p className="text-center">UX, UI, Web Application </p>
          <h3 className="text-xl font-semibold text-indigo-900 text-center mb-3 mt-3">
            Design Tools:
          </h3>
          <p className="text-center text-xl">
            <span>HTML</span> <br />
            <span>CSS</span> <br />
            <span>Bootstrap</span> <br />
            <span>Tailwind</span> <br />
            <span>Figma</span> <br />
          </p>
        </div>
        <div className="px-3 mt-5">
          <div className="flex justify-center">
            <FaPager className="text-indigo-900 text-4xl text-center"></FaPager>
          </div>
          <h2 className="text-4xl font-semibold text-center mb-3 mt-3">
            Front-end Developer
          </h2>
          <p className="text-sm text-slate-400 font-serif text-center mt-3">
            I enjoy conding frontend site with Js language and so many package
            and utility tools
          </p>
          <h3 className="text-xl font-semibold text-indigo-900 text-center ">
            Languages For Front-End:
          </h3>
          <p className="text-center">HTML, CSS, JS, React JS </p>
          <h3 className="text-xl font-semibold text-indigo-900 text-center mb-3 mt-3">
            Dev Tools:
          </h3>
          <p className="text-center text-xl">
            <span>React</span> <br />
            <span>React Router</span> <br />
            <span>React Bootstrap</span> <br />
            <span>Bootstrap</span> <br />
            <span>Git Hub</span> <br />
            <span>Terminal</span> <br />
            <span>React Tailwind</span> <br />
          </p>
        </div>
        <div className="px-3 mt-5">
          <div className="flex justify-center">
            <FaSitemap className="text-indigo-900 text-4xl text-center"></FaSitemap>
          </div>
          <h2 className="text-4xl font-semibold text-center mb-3 mt-3">
            Back-end Developer
          </h2>
          <p className="text-sm text-slate-400 font-serif text-center mt-3">
            Web interactions with internal and External API and dynamic tigger
            with data interactive uses
          </p>
          <h3 className="text-xl font-semibold text-indigo-900 text-center">
            Languages & Framework:
          </h3>
          <p className="text-center">Node js, Express js, MongoDB </p>
          <h3 className="text-xl font-semibold text-indigo-900 text-center  mb-3 mt-3">
            Dev Tools:
          </h3>
          <p className="text-center text-xl">
            <span>Node</span> <br />
            <span>Express</span> <br />
            <span>Cors</span> <br />
            <span>MongoDB</span> <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
