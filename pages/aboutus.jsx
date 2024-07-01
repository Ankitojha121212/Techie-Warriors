import React from "react";
import Team from "../Components/helper/team";

const Aboutus = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-20 flex-col z-100">
        <div className="px-8 flex justify-center items-center flex-col">
          <h2 className="px-2 text-2xl font-bold text-blue-800">
            Who We Are ?{" "}
          </h2>
          <span className="mt-4 px-2 font-medium">
            Techie Warriors is a 'IT' solution company, The Company has been
            promoted by some highly experienced Professionals dedicated to
            provide total IT solutions under one roof. It possesses not only the
            latest technology gadgets but also the most knowledgeable and
            experienced hands to offer most user friendly customized solutions.
            We have been creating quality web applications,mobile application
            and Software development since 2010 and consistently gaining new
            insights into what makes a perfect IT application.Our programmers
            are very aware of how important the application performance is for
            your business's success. With experience across all major
            industries, we create solutions for meeting the most challenging IT
            problems. We combine deep technology expertise, architecture
            solutions capability and program management skills to help you
            integrate and acquire new capabilities for heterogeneous systems
            that span both mainstream and emerging technologies. Within the
            months of its operations, Techie Warriors has carved a niche for
            itself in the IT industry and has increased its business by
            acquiring some major domestic projects. No doubt the company has
            been able to make a name for itself in a relatively short span of
            time only because of its ability and commitments to ensure customer
            satisfaction by rewarding quality work on right time and in a right
            manner. We believe in teamwork. With every new day the quest for
            acquiring new competencies continues. Forever searching,
            experimenting, innovating, learning, moving ahead with our sincere
            efforts and dedication, shaping the future, and challenging our
            competencies to create new opportunities, is a never-ending process
            in the company
          </span>
        </div>
        <div className="px-8 flex justify-center items-center flex-col mt-8">
          <h2 className="px-2 text-2xl font-bold text-blue-800">Warriors </h2>
          <div></div>
          <Team/>
          
        </div>
      </div>
     
    </>
  );
};

export default Aboutus;