import React, { useRef } from "react";
import { OverallStudents } from "../Assets/assets";
const MainCarousel = () => {
  // Ref to the card container
  const cardContainerRef = useRef(null);
  const card=[
    {
        id:1,
        image:OverallStudents.VicePresident,
        Name:'K.Manikanta',
        title:'Vice President',
        Year:'3rd Year',
        Branch:'Information Technology'
    },
    {
        id:2,
        image:OverallStudents.Secretary,
        Name:'S.Rishita',
        title:'Secratary',
        Year:'3rd Year',
        Branch:'Information Technology',
    },
    {
        id:3,
        image:OverallStudents.Treasurer,
        Name:'Md.Masood',
        title:'Treasurer',
        Year:'3rd Year',
        Branch:'Information Technology',
    },
    {
        id:4,
        image:OverallStudents.TechnicalLead,
        Name:'B.Pavan Kalyan',
        title:'Technical Lead',
        Year:'3rd Year',
        Branch:'Information Technology',
    },
    {
        id:5,
        image:OverallStudents.EventCoordinator,
        Name:'K.Tejasri',
        title:'Event Coordinator',
        Year:'2nd Year',
        Branch:'MCA',
    },
    {
        id:6,
        image:OverallStudents.Officer,
        Name:'P.Ramakrishna',
        title:'Public Relations Officer',
        Year:'3rd Year',
        Branch:'Information Technology',
    }
]
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
  // Scroll to the left
  return (
    <div className="relative w-full flex items-center gap-4">
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
        className="flex overflow-x-auto scrollbar-hide space-x-4 px-8 py-4"
      >
        {/* Example cards */}
        {card.map((item,index)=>(
          <div
            key={item.id}
            className="z-[1] flex-shrink-0 flex flex-col items-center gap-2 w-64 bg-white rounded-lg shadow-md shadow-gray-500 p-4 hover:cursor-pointer mt-3"
          >
            <img className='h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full' src={item.image} alt='/'/>
            <h2 className="text-xl text-black font-bold mb-2">{item.Name}</h2>
            <p className="text-[16px] sm:text-[18px] text-purple-600 font-bold">{item.title}</p>
            {item.Branch!=='Information Technology'?
            <div className="flex flex-col items-center gap-2">
            <p className="text-[16px] sm:text-[18px] font-medium text-gray-900">2nd Year</p>
            <p className="text-[16px] sm:text-[18px] font-medium text-gray-900">MCA</p>
            </div>:
            <div className="flex flex-col items-center gap-2">
            <p className="text-[16px] sm:text-[18px] font-medium text-gray-900">{item.Year}</p>
            <p className="text-[16px] sm:text-[18px] font-medium text-gray-900">{item.Branch}</p>

            </div>
            }
          </div>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="hidden sm:block absolute right-0 z-10 p-2 bg-gray-500 text-white rounded-full hover:bg-gray-700"
      >
        &#10095;
      </button>
      {/* Right Button */}
    </div>
  );
};

export default MainCarousel;
