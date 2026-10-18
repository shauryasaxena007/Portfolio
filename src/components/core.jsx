import React from "react";

const skills = [
 "HTML5",
"CSS3",
"JavaScript (ES6+)",
"React.js",
"Responsive Web Design",
"UI/UX Design",
"Web Accessibility",
"Tailwind CSS",
"Bootstrap",
"Framer Motion",
"Python",
"C++",
"SQL",
"NumPy",
"Pandas",
"Matplotlib",
"Seaborn",
"Scikit-learn",
"Data Analysis",
"Exploratory Data Analysis (EDA)",
"Data Cleaning",
"Data Visualization",
"Statistical Analysis",
"Feature Engineering",
"Machine Learning",
"Supervised Learning",
"Regression",
"Classification",
"Model Evaluation",
"Model Optimization",
"Deep Learning Fundamentals",
"Flask",
"REST APIs",
"MySQL",
"MongoDB",
"Git",
"GitHub",
"Microsoft Excel",
"Power BI",
"AWS Cloud Services",
"Jupyter Notebook",
"AI Tools"
];

const CoreSkills = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mt-24 mb-14 text-center text-slate-900">
        Skills &  Tools
      </h2>

      <div className="flex flex-wrap justify-center lg:justify-start gap-5">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-5 py-2 bg-gradient-to-r from-blue-300 to-purple-700 border border-blue-500/20 rounded-full text-slate-700 dark:text-slate-300 hover:scale-105 transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CoreSkills;
