import React from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const EducationExperience = () => {
  return (
    <section className="py-24 px-6 relative">
      <h2 className="text-4xl font-bold text-center mb-16">
        Education & Experience
      </h2>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-19">

        {/* Academics */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl blur opacity-20 group-hover:opacity-40 transition" />

          <div className="relative bg-white/80 dark:bg-slate-600/40 backdrop-blur-2xl p-10 rounded-3xl border border-slate-200 dark:border-slate-700">

            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-500" />
              <h3 className="text-2xl font-semibold">Academics</h3>
            </div>

            <div className="space-y-6">

              <div className="flex justify-between">
                  <div className="flex flex-col">
                <h3 className="text-lg text-slate-900 dark:text-slate-100 font-semibold">
                🎓 Bachelor of Computer Application (BCA)
                </h3>

                <p className="text-slate-800 dark:text-slate-900">
                ⁌ Dr. Virendra Swaroop Institute Of Computer Studies 
                </p>

                <p className="text-sm text-slate-900 dark:text-slate-800">
                ▼ 2024 – 2027
                </p>
            </div> 
            <span className="font-medium text-blue-500">CGPA 8.5</span>
                
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col">
                     <h3 className="text-lg text-slate-900 dark:text-slate-100 font-semibold">
                🎓 INTERMEDIATE (12)
                </h3>

                <p className="text-slate-800 dark:text-slate-900">
                G.B.M.S. Inter college
                 </p>

                <p className="text-sm text-slate-900 dark:text-slate-800">
                ▼ 2023 – 2024
                </p>
            </div>
                <span className="font-medium text-blue-500">87%</span>
              </div>

              <div className="flex justify-between">
                 <div className="flex flex-col">
                     <h3 className="text-lg text-slate-900 dark:text-slate-100 font-semibold">
                🎓 HIGH SCHOOL (10)
                </h3>

                <p className="text-slate-800 dark:text-slate-900">
                Tagore Bal Mandir Balika Inter college
                 </p>

                <p className="text-sm text-slate-900 dark:text-slate-800">
                ▼ 2021 – 2022
                </p>
            </div>
                <span className="font-medium text-blue-500">92.3%</span>
              </div>

            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition" />

          <div className="relative bg-white/80 dark:bg-slate-600/40 backdrop-blur-2xl p-10 rounded-3xl border border-slate-200 dark:border-slate-700">

            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-purple-500" />
              <h3 className="text-2xl font-semibold">MY PATH Experience</h3>
            </div>

            <h3 className="text-lg font-semibold mb-5">💻 Web Developer Intern</h3>
            <p className="text-sm text-slate-400 mb-4">CodeSoft | Jan 2025 – Jan 2025 (1 Month)</p>

            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>▹ Developed responsive web using HTML, CSS, and JavaScript</li>
              <li>▹ Built reusable UI components and improved code maintainability</li>
              <li>▹ Ensured cross-browser compatibility and mobile responsiveness</li>
              <li>▹ Debugged UI issues and optimized performance</li>
               <li>▹ Collaborated with team members using GitHub version control</li>
                 <li>▹ Tested applications across multiple devices and screen sizes</li>
              
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationExperience;
