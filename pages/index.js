import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Service from "@/components/home/serviceContainer";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Inquiry from "@/components/home/inquiry";
import Whyus from "../Components/home/whyus";

const Index = () => {

  


  useEffect(() => {
    AOS.init({duration : 2000})
  }, []);
  return (
    <main className="h-full w-full">
      <div className="flex bg-gray-200 flex-col gap-8">
        <div className="">
        <Hero/>
        </div>

        
        <Service />
        <Whyus />
       
        <div>
        <Skills />
        </div>

        <div>
        <Projects />
        </div>
        
        <Inquiry/>
      </div>
    </main>
  );
};

export default Index;
