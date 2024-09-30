import React, { useRef } from "react";
import {Logos} from '../Assets/assets'
const CardCarousel = () => {
  // Ref to the card container
  const cardContainerRef = useRef(null);
  const card=[
    {
        id:1,
        image:Logos.EI,
        title:'Enterpreneuship and Innovation',
        para:'The Entrepreneurship and Innovation Club is dedicated to promoting and nurturing a culture of business innovation, entrepreneurship, and startup development among students. The club aims to equip members with the knowledge, skills, and network necessary to succeed in the fast-paced world of business and startups.'
    },
    {
        id:2,
        image:Logos.Nyan,
        title:'Nyan',
        para:'The "Empowering Girls, One Purrata Time Club," a vibrant and inclusive community dedicated to fostering the growth, confidence, and creativity of young girls. Our club is designed to offer a unique blend of educational, technical, and recreational activities, all centered around the exciting theme of "purrata" — a playful nod to fun, creativity, and empowerment.'
    },
    {
        id:3,
        image:Logos.Arts,
        title:'Yukta Kala Sangham',
        para:'The Cultural and Arts Club is dedicated to promoting and celebrating cultural activities and the arts within the community. The club serves as a vibrant platform for students and community members to engage in and showcase their artistic talents. Through a diverse range of activities club fosters a deep appreciation for various art forms.'
    },
    {
        id:4,
        image:Logos.Seva,
        title:'Yuva Seva Sankalpam',
        para:'The Community Service and Outreach Club is dedicated to making a positive social impact through active community engagement and service.The club focuses on addressing various social issues and fostering community development by involving students in meaningful volunteer work and outreach programs.'

    },
    {
        id:5,
        image:Logos.AI,
        title:'AI and ML',
        para:'The AI/ML Research Club is dedicated to advancing knowledge and expertise in artificial intelligence (AI) and machine learning (ML). The club aims to provide a comprehensive platform for students to explore, learn, and innovate in the fields of AI and ML. This Club gives to Development of AI Technologies.'
    },
    {
        id:6,
        image:Logos.FST,
        title:'FST',
        para:'The Full Stack Development Club is dedicated to equipping students with comprehensive skills in web application development, from user interface design to backend programming. The club focuses on providing hands-on experience and knowledge across the entire stack of web development.'
    },
    {
        id:7,
        image:Logos.Gate,
        title:'Gate Gurkul',
        para:'The GATE Club is focused on preparing students for the Graduate Aptitude Test in Engineering (GATE), an important exam for engineering graduates seeking admission to postgraduate programs and securing job opportunities in public sector undertakings (PSUs). The club provides a platform for students to prepare for GATE Exam.'
    }
]
  // Scroll to the left
  const scrollLeft = () => {
    cardContainerRef.current.scrollBy({
      top: 0,
      left: -300, // Adjust this value based on card width
      behavior: "smooth",
    });
  };

  // Scroll to the right
  const scrollRight = () => {
    cardContainerRef.current.scrollBy({
      top: 0,
      left: 200, // Adjust this value based on card width
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full flex items-center gap-4 ">
      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="hidden sm:block absolute left-0 z-10 p-2 bg-gray-500 text-white rounded-full hover:bg-gray-700"
      >
        &#10094;
      </button>

      {/* Card Container */}
      <div
        ref={cardContainerRef}
        className="flex overflow-x-scroll scrollbar-hide space-x-4 px-8 py-4"
      >
        {/* Example cards */}
        {card.map((item,index)=>(
          <div
            key={item.id}
            className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md shadow-gray-500 p-4 hover:cursor-pointer mt-3"
          > <div className="flex justify-start items-center gap-2">
              <img src={item.image} alt={item.title} className="sm:w-[70px] sm:h-[70px] rounded-full w-[55px] h-[55px]"/>
              <h2 className="text-xl text-purple-600 font-bold mb-2">{item.title}</h2>
            </div>
            <p>{item.para}</p>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="hidden sm:block absolute right-0 z-10 p-2 bg-gray-500 text-white rounded-full hover:bg-gray-700"
      >
        &#10095;
      </button>
    </div>
  );
};

export default CardCarousel;
