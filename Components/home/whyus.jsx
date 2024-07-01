import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const whyus = () => {
  useEffect(() => {
    AOS.init;
  }, []);
  return (
    <>
      <div
        className="w-[97%] md:w-full h-auto"
        data-aos="zoom-in-down"
        data-aos-delay="1000"
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-semibold text-4xl">Why us</h2>
          <p className="text-lg mt-2">
            We allow us to manage your projects from beginning to end. There are
            plenty of specifications that we have, the most important of them
            are as follows.
          </p>
        </div>
        <div className="flex md:flex-row flex-col w-full justify-between gap-16 text-lg px-8 mt-8">
          <div
            className="w-[98%] md:w-[33%] border-2 px-5 border-black rounded-e-3xl rounded-b-3xl
           bg-slate-100 hover:transition hover:duration-700 hover:ease-linear hover:border-3
            hover:border-purple-500 hover:text-black hover:bg-white transform 
            hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:shadow-black"
          >
            <div className="flex h-12 gap-2 ">
              <text className="translate-x-3 -translate-y-5 font-semibold text-3xl">
                {">"}
              </text>
              <Image
                src="/seo.png"
                width={200}
                height={200}
                alt="Research"
                className="w-16 h-16 -translate-y-8 rounded-full z-50"
              />
              <text className="-translate-y-5 font-semibold text-3xl -translate-x-3">
                {"<"}
              </text>

              <h4
                className=" text-lg md:text-3xl h-8 -translate-y-6 bg-black text-white px-2 text-center
              rounded-lg
              "
              >
                Research
              </h4>
            </div>
            <div className="">
              <p className="text-slate-950 mb-2">
                As Floppy Technology comprises a good team of website designers,
                we constantly look into the safest and most effective
                technologies available for your website. Our committed and
                competent staff implement latest technology to improve the
                website performance.
              </p>
            </div>
          </div>

          <div
            className="w-[98%] md:w-[33%] border-2 px-5 border-black rounded-e-3xl rounded-b-3xl
           bg-slate-100 hover:transition hover:duration-700 hover:ease-linear hover:border-3
            hover:border-purple-500 hover:text-black hover:bg-white transform 
            hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:shadow-black"
          >
            <div className="flex h-12 gap-2 ">
              <text className="translate-x-3 -translate-y-5 font-semibold text-3xl">
                {">"}
              </text>

              <Image
                src="https://cdn-icons-png.flaticon.com/256/870/870175.png"
                width={200}
                height={200}
                alt="Research"
                className="w-16 h-16 -translate-y-9 bg-purple-500 rounded-full"
              />

              <text className="-translate-y-5 font-semibold text-3xl -translate-x-3">
                {"<"}
              </text>

              <h4
                className=" text-lg md:text-3xl h-8 -translate-y-6 bg-black text-white px-2 text-center
              rounded-lg
              "
              >
                Quick Support
              </h4>
            </div>
            <div className="">
              <p className="text-slate-950 mb-2">
                As Floppy Technology we have many creative solutions for any
                kind of issue and are always available to talk to our clients.
                We have a compatible support staff that can assist you 24 * 7
                from pre to post launch of your website online. 
              </p>
            </div>
          </div>

          <div
            className="w-[98%] md:w-[33%] border-2 px-5 border-black rounded-e-3xl rounded-b-3xl
           bg-slate-100 hover:transition hover:duration-700 hover:ease-linear hover:border-3
            hover:border-purple-500 hover:text-black hover:bg-white transform 
            hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:shadow-black"
          >
            <div className="flex h-12 gap-2 ">
              <text className="translate-x-3 -translate-y-5 font-semibold text-3xl">
                {">"}
              </text>
              <Image
                src="https://cdn-icons-png.flaticon.com/256/1055/1055683.png"
                width={200}
                height={200}
                alt="Research"
                className="w-16 h-16 -translate-y-8 rounded-full z-50"
              />
              <text className="-translate-y-5 font-semibold text-3xl -translate-x-3">
                {"<"}
              </text>

              <h4
                className=" text-lg md:text-3xl h-8 -translate-y-6 bg-black text-white px-2 text-center
              rounded-lg
              "
              >
                Implementation
              </h4>
            </div>
            <div className="">
              <p className="text-slate-950 mb-2">
                The code and content that executed; are primarily used to create
                user interface more compatible to user experience and also helps
                rank well on search engine results. Our designer team balances
                the website quality and the cost of design implementation.
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col w-full justify-between gap-16 text-lg px-8 mt-16">
          <div
            className="w-[98%] md:w-[33%] border-2 px-5 border-black rounded-e-3xl rounded-b-3xl
           bg-slate-100 hover:transition hover:duration-700 hover:ease-linear hover:border-3
            hover:border-purple-500 hover:text-black hover:bg-white transform 
            hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:shadow-black"
          >
            <div className="flex h-12 gap-2 ">
              <text className="translate-x-3 -translate-y-5 font-semibold text-3xl">
                {">"}
              </text>
              <Image
                src="/seo.png"
                width={200}
                height={200}
                alt="Research"
                className="w-16 h-16 -translate-y-8 rounded-full z-50"
              />
              <text className="-translate-y-5 font-semibold text-3xl -translate-x-3">
                {"<"}
              </text>

              <h4
                className=" text-lg md:text-3xl h-8 -translate-y-6 bg-black text-white px-2 text-center
              rounded-lg
              "
              >
                Affordability
              </h4>
            </div>
            <div className="">
              <p className="text-slate-950 mb-2">
                We deliver cost-effective solutions without sacrificing
                excellence, ensuring that our clients get the best value for
                their investment. Every client is unique, and so are their
                needs. 
              </p>
            </div>
          </div>

          <div
            className="w-[98%] md:w-[33%] border-2 px-5 border-black rounded-e-3xl rounded-b-3xl
           bg-slate-100 hover:transition hover:duration-700 hover:ease-linear hover:border-3
            hover:border-purple-500 hover:text-black hover:bg-white transform 
            hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:shadow-black"
          >
            <div className="flex h-12 gap-2 ">
              <text className="translate-x-3 -translate-y-5 font-semibold text-3xl">
                {">"}
              </text>

              <Image
                src="https://cdn-icons-png.flaticon.com/256/870/870175.png"
                width={200}
                height={200}
                alt="Research"
                className="w-16 h-16 -translate-y-9 bg-purple-500 rounded-full"
              />

              <text className="-translate-y-5 font-semibold text-3xl -translate-x-3">
                {"<"}
              </text>

              <h4
                className="text-lg md:text-3xl h-8 -translate-y-6 bg-black text-white px-2 text-center
              rounded-lg
              "
              >
                UI / UX
              </h4>
            </div>
            <div className="">
              <p className="text-slate-950 mb-2">
                In essence, our approach to UI/UX revolves around creating not
                just visually appealing designs but also ensuring a seamless,
                enjoyable, and meaningful experience for every user who
                interacts with our websites and applications. 
              </p>
            </div>
          </div>

          <div
            className="w-[98%] md:w-[33%] border-2 px-5 border-black rounded-e-3xl rounded-b-3xl
           bg-slate-100 hover:transition hover:duration-700 hover:ease-linear hover:border-3
            hover:border-purple-500 hover:text-black hover:bg-white transform 
            hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:shadow-black"
          >
            <div className="flex h-12 gap-2 ">
              <text className="translate-x-3 -translate-y-5 font-semibold text-3xl">
                {">"}
              </text>
              <Image
                src="https://cdn-icons-png.flaticon.com/256/1055/1055683.png"
                width={200}
                height={200}
                alt="Research"
                className="w-16 h-16 -translate-y-8 rounded-full z-50"
              />
              <text className="-translate-y-5 font-semibold text-3xl -translate-x-3">
                {"<"}
              </text>

              <h4
                className="text-lg md:text-3xl h-8 -translate-y-6 bg-black text-white px-2 text-center
              rounded-lg
              "
              >
                Safe & Secure
              </h4>
            </div>
            <div className="">
              <p className="text-slate-950 mb-2">
                We employ robust encryption mechanisms to safeguard data during
                transmission and storage. This ensures that sensitive
                information, such as user credentials and
                remains confidential and protected from unauthorized access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default whyus;
