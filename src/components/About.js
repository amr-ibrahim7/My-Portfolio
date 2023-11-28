import React from "react";
// Import Image
import Image from "../assets/img/about.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="section
    bg-secondary
    "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before :opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Amr Ibrahim
              </h2>
              <p className="mb-4 text-accent">Freelance Web Devloper</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Hello there, My Name is Amr Ibrahim, and I am a dedicated
                front-end developer with a passion for creating immersive and
                user-centric web experiences. With 1 year of experience in the
                industry, I have honed my skills in HTML, CSS, and JavaScript,
                and I constantly strive to push the boundaries of what can be
                achieved in the browser. <br />
                So I'm always seeking to have an opportunity that matches my
                skills, to make the best use of all what I have learned.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
              <a
                rel="noreferrer"
                target="__self"
                href="https://drive.google.com/uc?export=download&id=1FsM3GR5INrPPaB9QIOWby9HRWS7zk-kg"
              >
                Download My Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
