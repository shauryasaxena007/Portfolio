import React from "react";
import GitHubActivity from "./GitHubActivity";
import { GraduationCap, Briefcase } from "lucide-react";

const EducationExperience = () => {
  return (
    <section className="py-24 px-6 relative">
      <h2 className="text-4xl font-bold text-center mb-16">
        Education & Activity
      </h2>

   <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 items-start">     {/* Academics */}
        <div className="relative group">
          <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-purple-700 rounded-3xl blur opacity-20 group-hover:opacity-40 transition" />

       <div className="relative bg-white/80 dark:bg-slate-600/40 backdrop-blur-2xl p-10 rounded-3xl border border-slate-200 dark:border-slate-700 h-full">
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
            <span className="font-medium text-blue-500">8.62/10</span>
                
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

       
        {/* GitHub Activity */}
<div className="relative group">
  <div className="absolute inset-0 bg-linear-to-br from-purple-700 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition" />

  <div className="relative bg-white/80 dark:bg-slate-600/40 backdrop-blur-2xl p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 h-full">
    <div className="flex items-center gap-3 mb-6">
      <Briefcase className="text-purple-500" />
      <h3 className="text-2xl font-semibold">
        GitHub Activity
      </h3>
    </div>

    <p className="text-sm text-slate-500 dark:text-slate-300 mb-6">
      My coding consistency and contributions over the past year.
    </p>

    <div className=" overflow-x-auto">
      <GitHubActivity />
    </div>

    <a
      href="https://github.com/shauryasaxena007"
      target="_blank"
      rel="noreferrer"
      className="inline-block mt-6 text-blue-500 hover:text-purple-500 transition"
    >
      View GitHub Profile →
    </a>

  </div>
</div>

      </div>
    </section>
  );
};

export default EducationExperience;
