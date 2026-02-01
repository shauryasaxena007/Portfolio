import React from "react";
import { skills } from "../data/constants";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-slate-50 dark:bg-slate-900/50 rounded-3xl px-8 my-10"
    >
      <div className="flex flex-col lg:flex-row gap-35">
        {/* Left Side: Background */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-slate-950">Background</h2>

          <div className="space-y-4 text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
            <p>
              I'm a dedicated developer with a passion for creating innovative
              solutions. My journey in tech started with a curiosity about how
              things work, evolving into a career building applications that make
              a difference.
            </p>

            <p>
              I believe in continuous learning. When I'm not coding, you'll find
              me exploring new frameworks or working at the intersection of
              design and data logic.
            </p>
          </div>
        </div>

        {/* Right Side: What I Do */}
        <div className="lg:w-1/2">
          <h3 className="text-2xl text-left-4 font-bold mb-4 text-slate-950">What I Do</h3>

          <ul className="text-lg grid grid-cols-1 ">
            {[
              "Responsive Web Design",
              "Data Pattern Analysis",
          "    Optimize application performance and user experience",
              "API Development",
              "Collaborate with teams to deliver quality software",
              "ML Model Optimization",
              "Analyze data to extract meaningful patterns",
              "Find data insight from raw Data",

            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400"
              >
                <span className="text-brandBlue text-xl">▹</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
