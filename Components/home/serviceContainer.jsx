import React from "react";
import Service from "./serviceCard";

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center flex-col h-full w-full" id="about-me">
        <h2 className="mt-24 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-600 text-4xl font-semibold">Services Overview</h2>
      <Service
        title="Web Development"
        description="
        Ignite your online presence with Floppy Technology. We specialize in
            sleek, user-friendly websites, blending innovation and creativity
            for a distinctive digital experience. Elevate with style!
        "
        title2="Software Development"
        description2="Simplified Database, Latest Frameworks, Standard Development are the signs expertise to success used by our experienced software programmers."

        title3="Digital Marketing"
        description3="We are leading best digital marketing services, specializing in SEO, SMO, PPC, Social media marketing, Web analytics and e-mail marketing."

        title4="Mobile App Development"
        description4="We are a creative team of website designers as well as developers that loves turning complex problems into simple, stunning and intuitive designs"

      />
      <Service
        title="Hosting Services"
        description="Here at Floppy Technology offer domain registration in India at very reasonable price with no hidden costs. Our belief is that a lasting relation can just be built on faith and trust."

        title2="Graphic Design"
        description2="Floppy Technology is a professional graphic design and web marketing to boost traffic as well as increase customer base. Our designing team has the expertise to offer a complete range of graphic design"

        title3="Bulk SMS Services"
        description3="Elevate your communication strategy with our cutting-edge Bulk SMS Service. Seamlessly reach your target audience, whether it's for promotions, announcements, or personalized messages."

        title4="Website Deployment"
        description4="
        Launch your online presence seamlessly with our top-notch Website Deployment Service. We handle the technical intricacies, ensuring a smooth transition from development to live deployment. Trust us to optimize performance, enhance security, and flawless user experience"

      />
    </div>
  );
};

export default Hero;
