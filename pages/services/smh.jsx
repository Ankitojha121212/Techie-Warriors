import React from "react";
import Image from "next/image";
import Inquiry from "../../Components/home/inquiry";

const SocialMediaMarketing = () => {
  return (
    <div className="container mx-auto my-8 mt-16">
      <div className="p-5">
        <section className="mb-8">
          <p className="font-semibold text-2xl mb-4">
            Boost your brand's reach with our expert <span className="text-red-700">Social Media Marketing</span> services. We create and execute strategic marketing campaigns to increase brand awareness and drive engagement.
          </p>
        </section>
        <section className="mb-8 text-xl font-semibold">
          <h2 className="text-4xl p-1 rounded-md text-center font-semibold mb-4">
            <span className="bg-red-600 px-5 p-1 text-white rounded-md">
              Services Offered in Social Media Marketing
            </span>
          </h2>
          <ul className="pl-6 flex flex-col md:flex-row justify-between gap-8">
            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
              hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-8"
            >
              <img
                src="https://www.slideteam.net/media/catalog/product/cache/1280x720/g/o/google_adwords_campaign_dashboard_ppt_powerpoint_presentation_ideas_demonstration_slide01.jpg"
                alt="Social Media Marketing 1"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Social Media Strategy</li>
            </div>

            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
              hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-8"
            >
              <img
                src="https://media.sproutsocial.com/uploads/2018/05/Facebook-Ad-Examples.png"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Ad Campaigns</li>
            </div>

            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
              hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-8"
            >
              <img
                src="https://shape.io/mkt/assets/images/blog/linkedin-ads-budget-agencies-guide.png"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Influencer Collaborations</li>
            </div>

            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
              hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-8"
            >
              <img
                src="https://ninjasem.com/images/blog/sem-strategies.png?v=1683282761502207856"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Analytics and Reporting</li>
            </div>

            {/* Add more Social Media Marketing services */}
          </ul>
        </section>

        {/* Section 2: Our Approach */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Update content for Social Media Marketing approach */}
          <div className="hover:border-green-500 hover:shadow-md border border-gray-300 rounded p-4 transition duration-300 mt-8">
            <h2 className="text-2xl text-red-700 font-bold mb-2">Our Approach</h2>
            <p className="text-sm">
              Our Social Media Marketing approach focuses on creating and implementing comprehensive strategies. From developing engaging content to running targeted ad campaigns and collaborating with influencers, we aim to maximize your brand's visibility and engagement on social media platforms.
            </p>
          </div>

          {/* Repeat the following structure for each point */}
          <div className="hover:border-green-500 hover:shadow-md border border-gray-300 rounded p-4 transition duration-300 mt-8">
            <h2 className="text-2xl font-bold mb-2 text-red-700">Strategic Ad Campaigns</h2>
            <p className="text-sm">
              We design and execute strategic advertising campaigns tailored to your target audience. From selecting the right platforms to crafting compelling ad creatives, our goal is to drive measurable results and enhance your brand's presence.
            </p>
          </div>

          {/* Add more Social Media Marketing approach points */}
        </section>

        {/* Section 3: Services Offered */}

        {/* Section 4: Showcase */}
      </div>
      <Inquiry />
    </div>
  );
};

export default SocialMediaMarketing;
