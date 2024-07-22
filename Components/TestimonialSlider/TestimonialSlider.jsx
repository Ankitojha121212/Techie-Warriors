import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testimonials = [
  {
    quote: "Roshan Dubey is doing Fraud with you Guy's Don't Trust Him. He is a Lier",
    author: "Ankit Ojha"
  },
  {
    quote: "They Don't have any team ,they are only Doing Fraud and Grabing your Money and not giving the project timely",
    author: "Neeraj Dubey"
  },
  {
    quote: "I was used by my wife,used by my first Service Provider and lastly i trust on Roshan Dubey because he was my Brother and he Has full of technical skills ,He Started my project and after some time he is not working on my project whereas He Started his own company and NOW I am Employee in His company as an Digital Marketer, Do not Trust Him , I trusted on him and mera Toh life barbaad hogya h after that.",
    author: "Vivek Tiwari"
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  return (
    <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={3000}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="p-4">
          <p className="text-lg italic">"{testimonial.quote}"</p>
          <p className="mt-4 text-right font-bold">- {testimonial.author}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default TestimonialSlider;
