import React, { useState, useRef } from 'react';
import { EventsCond } from '../../Assets/assets';

const EventsSlider = () => {
  const cardContainerRef = useRef(null);

  // Modal state to store the event details and whether it's open
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Events array with event data
  const Events = [
    {
      id: 1,
      title: 'Code Quest',
      shortdescription: 'Code Quest is a coding competition that challenges participants to solve logical programming problems under time constraints.',
      image: EventsCond.codeQuest1,
      description:'Code Quest is coding competition that challenges participants to solve complex programming problems under time constraints. It is designed for students and professionals alike, encouraging them to showcase their problem-solving and coding skills. Participants compete individually or in teams, tackling a variety of challenges across multiple domains like algorithms, data structures, and artificial intelligence. The event fosters innovation and collaboration, often bringing together programmers from different skill levels. Prizes, recognition, and job opportunities are common incentives. Code Quest is not just about winning but also learning and growing in the coding community.',
      startDate: '2024-09-29',
      endDate: '2024-09-29',
      Winners:'Kosireddy Sudheer',
      College:'Aditya College Of Engineering and Technology'
    },
    {
      id: 2,
      title: 'Food Drive',
      shortdescription: 'A Food Drive is an initiative to donate food to those in need, helping to combat hunger in communities.',
      image: EventsCond.FoodDrive,
      description:'A Food Drive is a charitable initiative aimed at collecting and distributing food to those in need. It helps combat hunger by providing meals to underprivileged individuals and families. Communities, schools, and organizations often come together to donate non-perishable items and ensure food security. These efforts are vital in addressing hunger crises and fostering a sense of solidarity and support.',
      startDate: '2024-10-2',
      endDate: '2024-10-2',
    },
    {
      id: 3,
      title: 'Poster Presentation',
      shortdescription: 'A Poster Presentation is a visual display of research or information on a given topic, often used to communicate key findings at conferences.',
      image: EventsCond.PosterPresent,
      description:' This poster presentation highlights the journey of information technology, starting from the first website to its impact on modern life. Explore how IT has transformed communication, education, and business, and dive into its history and role in shaping the digital world. Discover the importance of emerging technologies like AI and cybersecurity, and engage with interactive demos that show real-world applications of IT. Don’t miss this chance to see how technology continues to drive innovation and connect us every day! ',
      startDate: '2024-10-01',
      endDate: '2024-10-03',
    },
    {
      id: 4,
      title: 'AI Tools Exposure',
      shortdescription: 'Workshop on AI Tools introduces students to practical applications of artificial intelligence, helping them gain hands-on experience.',
      image: EventsCond.AiTools,
      description:'The AI Tools Exposure workshop offers students a hands-on experience with cutting-edge artificial intelligence technologies. Participants learn to use various AI tools and techniques, gaining practical knowledge in machine learning, data analysis, and automation. This workshop bridges the gap between theoretical AI concepts and real-world applications. It empowers students to leverage AI tools for innovative problem-solving in their future careers.',
      startDate: '2024-9-30',
      endDate: '2024-9-30',
    },
  ];

  // Function to scroll left
  const scrollLeft = () => {
    cardContainerRef.current.scrollBy({
      top: 0,
      left: -300, // Adjust this value based on card width
      behavior: 'smooth',
    });
  };

  // Function to scroll right
  const scrollRight = () => {
    cardContainerRef.current.scrollBy({
      top: 0,
      left: 300, // Adjust this value based on card width
      behavior: 'smooth',
    });
  };

  // Function to open the modal and set the selected event
  const handleReadMore = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative w-full mx-auto flex items-center justify-center gap-4 ">
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
          className="flex overflow-x-auto scrollbar-hide space-x-4 px-8 py-2 w-[100%]"
        >
          {Events.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-auto bg-white rounded-lg shadow-md shadow-gray-500 py-2 px-2 hover:cursor-pointer mt-3"
            >
              <div className=" w-[320px] py-2">
                <div className="w-[315px] h-[250px] hover:top-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full rounded-sm bg-cover bg-center"
                  />
                </div>
                <div className="mt-2 px-2">
                  <p className="text-black text-[17px] font-medium">
                    {item.shortdescription}
                  </p>
                  <button
                    onClick={() => handleReadMore(item)} // Opens modal and passes event details
                    className="text-[17px] font-medium py-1 px-2 rounded-md bg-purple-500 mt-2"
                  >
                    Read more
                  </button>
                </div>
              </div>
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

      {/* Modal */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[450px] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
            <p className="mb-4">{selectedEvent.description}</p>
            <p className="mb-2">
              <strong>Start Date:</strong> {selectedEvent.startDate}
            </p>
            <p className="mb-4">
              <strong>End Date:</strong> {selectedEvent.endDate}
            </p>
            {selectedEvent.Winners && selectedEvent.College?(
              <>
              <p className='mb-4 font-medium'>Winner:{selectedEvent.Winners}</p>
              <p className='mb-4 font-medium'>College:{selectedEvent.College}</p>
              </>
              )
              :""}
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EventsSlider;
