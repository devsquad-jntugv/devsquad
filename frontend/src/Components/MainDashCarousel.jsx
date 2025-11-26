import React, { useRef } from "react";
import { OverallStudents } from "../Assets/assets";

const MainCarousel = () => {
  const cardContainerRef = useRef(null);

  const card = [
    {
      id: 1,
      image: OverallStudents.VicePresident,
      Name: "Y.Ghana Sathya Karthik",
      title: "Vice President",
      Year: "3rd Year",
      Branch: "Information Technology",
    },
    {
      id: 2,
      image: OverallStudents.Secretary,
      Name: "V.Charu Brunda",
      title: "Secratary",
      Year: "3rd Year",
      Branch: "Information Technology",
    },
    {
      id: 3,
      image: OverallStudents.Treasurer,
      Name: "N.Saroj",
      title: "Treasurer",
      Year: "3rd Year",
      Branch: "Information Technology",
    },

    {
      id: 4,
      image: OverallStudents.TechnicalLead,
      Name: "M.Likhith Kumar",
      titleLine1: "President",
      titleLine2: "(Technical Events)",
      Year: "3rd Year",
      Branch: "Information Technology",
    },

    {
      id: 5,
      image: OverallStudents.Officer,
      Name: "K.Pravallika",
      titleLine1: "Vice President",
      titleLine2: "(Technical Events)",
      Year: "3rd Year",
      Branch: "Information Technology",
    },

    {
      id: 6,
      image: OverallStudents.EventCoordinator,
      Name: "K.Tejasri",
      title: "Event Coordinator",
      Year: "2nd Year",
      Branch: "MCA",
    },

    
    {
      id: 7,
      image: OverallStudents.AnotherMember,
      Name: "Y.Bhavani Kumar",
      titleLine1: "President",
      titleLine2: "(Broadcast)",
      Year: "3rd Year",
      Branch: "Information Technology",
    },

    
    {
      id: 8,
      image: OverallStudents.NewMember,
      Name: "Ch.Sai Rupini",
      titleLine1: "Vice President",
      titleLine2: "(Broadcast)",
      Year: "3rd Year",
      Branch: "Information Technology",
    },
  ];

  const scrollLeft = () => {
    cardContainerRef.current.scrollBy({
      top: 0,
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    cardContainerRef.current.scrollBy({
      top: 0,
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full flex items-center gap-4">

      <button
        onClick={scrollLeft}
        className="hidden sm:block absolute left-0 z-10 p-2 bg-gray-500 text-white rounded-full hover:bg-gray-700"
      >
        &#10094;
      </button>

      <div
        ref={cardContainerRef}
        className="flex overflow-x-auto scrollbar-hide space-x-4 px-8 py-4"
      >
        {card.map((item) => (
          <div
            key={item.id}
            className="z-[1] flex-shrink-0 flex flex-col items-center gap-2 w-64 bg-white rounded-lg shadow-md shadow-gray-500 p-4 hover:cursor-pointer mt-3"
          >
            <img
              className="h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full"
              src={item.image}
              alt="/"
            />

            <h2 className="text-xl text-black font-bold mb-2">{item.Name}</h2>

            {/* Show 2-line title if present */}
            {item.titleLine1 ? (
              <div className="text-center leading-tight">
                <p className="text-[16px] sm:text-[18px] text-purple-600 font-bold">
                  {item.titleLine1}
                </p>
                <p className="text-[16px] sm:text-[18px] text-purple-600 font-bold -mt-1">
                  {item.titleLine2}
                </p>
              </div>
            ) : (
              <p className="text-[16px] sm:text-[18px] text-purple-600 font-bold">
                {item.title}
              </p>
            )}

            <div className="flex flex-col items-center gap-2 mt-1">
              <p className="text-[16px] sm:text-[18px] font-medium text-gray-900">
                {item.Year}
              </p>
              <p className="text-[16px] sm:text-[18px] font-medium text-gray-900">
                {item.Branch}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="hidden sm:block absolute right-0 z-10 p-2 bg-gray-500 text-white rounded-full hover:bg-gray-700"
      >
        &#10095;
      </button>

    </div>
  );
};

export default MainCarousel;
