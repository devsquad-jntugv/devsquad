import React, { useState} from 'react';
import { EventsCond } from '../../Assets/assets';

const EventsSlider = () => {
  // Modal state
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
      shortdescription: 'A Food Drive is an initiative to donate food to those in need, helping to combat hunger in communities and some other people.',
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
      description:' This poster presentation highlights the journey of information technology, starting from the first website to its impact on modern life. Explore how IT has transformed communication, education, and business, and dive into its history and role in shaping the digital world. Discover the importance of emerging technologies like AI and cybersecurity, and engage with interactive demos that show real-world applications of IT. Don\'t miss this chance to see how technology continues to drive innovation and connect us every day! ',
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
    {
      id:5,
      title:'Cyber Awareness',
      shortdescription:'The "Think Before You Click" program, hosted by the Department of Information Technology at JNTU-GV College of Engineering, Vizianagaram.',
      image:EventsCond.Cyber1,
      description:"a cyber awareness initiative designed to teach participants about staying cautious online and avoiding potentially harmful links. It promotes best practices for digital safety. And remember, hackers hate to see you here, getting informed and prepared—they never expected you to be this smart!",
      startDate:'2024-11-08',
      endDate:'2024-11-08'
    },
    {
      id:6,
      title:'Eco-Pulse',
      shortdescription:'The ECO PULSE "Clean Campus, Green Future" event, organized by the Yuva Seva Sankalpam club at JNTUGV University.',
      image:EventsCond.EcoPulse,
      description:"The initiative aims to promote environmental awareness and maintain a cleaner, greener campus. Faculty, students, and volunteers from various departments will actively participate, working together to clean and beautify the university grounds. The event reflects the club's dedication to community service and sustainable practices, fostering a spirit of teamwork and environmental responsibility among all participants.",
      startDate:'2024-11-09',
      endDate:'2024-11-09'
    },
    {
      id:7,
      title:'Portfolio and Resume Building',
      shortdescription:'The Portfolio and Resume Building "Digital Footprint" event, organized by the FST club at JNTUGV University.',
      image:EventsCond.Portfolio,
      description:'This workshop provided participants with the tools and techniques necessary for constructing professional portfolios and resumes. Industry experts shared insights on current trends and best practices in resume writing and portfolio presentation.Interactive sessions included practical exercises for resume tailoring, digital portfolio creation, and feedback sessions.',
      startDate:'2024-11-16',
      endDate:'2024-11-16'
    },
    {
      id:8,
      title:'Design Thinking',
      shortdescription:"Design thinking is a user-centred, problem-solving approach that fosters innovation by focusing on understanding the user's needs and experiences.",
      image:EventsCond.Outer1,
      description:'This iterative process encourages creative solutions, as each stage can be revisited and refined based on user feedback. By combining empathy, experimentation, an feedback, design thinking promotes practical and human-centred innovations across industries',
      startDate:'2024-11-08',
      endDate:'2024-11-08',
    },
    {
      id: 9,
      title: 'GitHub Guide',
      shortdescription: 'Comprehensive workshop on GitHub essentials for version control, collaboration, and open-source contribution.',
      image: EventsCond.GitHubGuide,
      description: 'This GitHub Guide workshop covers everything from basic Git commands to advanced GitHub features. Participants learn repository management, branching strategies, pull requests, GitHub Actions for CI/CD, and contributing to open-source projects. Perfect for students and developers looking to master version control and collaborate effectively on real-world projects. Includes hands-on exercises with GitHub CLI and GitHub Desktop.',
      startDate: '2025-09-16',
      endDate: '2025-09-16',
    },
    {
      id: 10,
      title: 'Python Bootcamp',
      shortdescription: 'Intensive Python Bootcamp covering fundamentals to advanced topics with hands-on projects for beginners and intermediate learners.',
      image: EventsCond.PythonBootcamp ,
      description: 'This Python Bootcamp takes participants from basics to advanced concepts including data structures, file handling, OOP, web scraping, and automation. Build real-world projects like CLI tools, data analyzers, and simple web apps. Perfect for students transitioning from other languages or starting their Python journey. Includes live coding sessions, debugging workshops, and portfolio-ready projects.',
      startDate: '2025-09-24',
      endDate: '2024-09-24',
    },
    {
      id: 11,
      title: 'AI and Art Showcase',
      shortdescription: 'Creative showcase combining AI-generated art, music, and interactive installations demonstrating AI\'s artistic potential.',
      image: EventsCond.AiArtShowcase,
      description: 'Explore the intersection of AI and creativity through stunning AI-generated artworks, music compositions, and interactive installations. Witness how machine learning models create paintings, generate music, and respond to audience interaction in real-time. Perfect blend of technology and art that showcases AI\'s potential beyond traditional applications. Features live demonstrations and artist talks.',
      startDate: '2024-09-04',
      endDate: '2024-09-04',
    },
    {
      id: 12,
      title: 'LinkedIn Mastery Workshop',
      shortdescription: 'Professional workshop teaching LinkedIn optimization, networking strategies, and personal branding for career success.',
      image: EventsCond.LinkedInWorkshop ,
      description: 'Master LinkedIn for career growth! Learn profile optimization, content creation strategies, networking techniques, and personal branding. Get hands-on guidance on crafting compelling headlines, writing engaging posts, connecting with industry professionals, and leveraging LinkedIn features for job opportunities. Includes profile reviews, mock interviews, and real-time networking practice sessions.',
      startDate: '2024-09-25',
      endDate: '2024-09-25',
    },
    // New events
    {
      id: 13,
      title: 'Innovation&Incubation',
      shortdescription: 'Session on innovation and entrepreneurship, focusing on idea validation and startup fundamentals.',
      image: EventsCond.InnovationIncubation,
      description: 'An interactive session designed to inspire students to become innovators and entrepreneurs. Covers opportunity identification, problem validation, business model basics, and real-world startup stories. Ideal for aspiring founders looking to turn ideas into viable ventures.',
      startDate: '2024-10-10',
      endDate: '2024-10-10',
    },
    {
      id: 14,
      title: 'Pitch',
      shortdescription: 'Event focused on pitching innovative ideas to a panel of mentors and industry experts.',
      image: EventsCond.Pitch,
      description: 'Participants present their startup or project ideas in a structured pitch format. The event emphasizes clarity, market understanding, and solution impact, followed by feedback from mentors and faculty.',
      startDate: '2024-09-20',
      endDate: '2024-09-20',
    },
    {
      id: 15,
      title: 'Cinequest',
      shortdescription: 'Film and short-video based event celebrating storytelling, creativity, and visual arts.',
      image: EventsCond.Cinequest,
      description: 'Cinequest provides a platform for students to showcase short films, documentaries, and creative video content. The event includes screenings, discussions, and feedback sessions focused on direction, editing, and narrative.',
      startDate: '2024-10-05',
      endDate: '2024-10-05',
    },
    {
      id: 16,
      title: 'Arts and Culture',
      shortdescription: 'A celebration of performing arts, fine arts, and cultural events across diverse themes.',
      image: EventsCond.ArtsCulture,
      description: 'This event brings together music, dance, theatre, and visual arts to celebrate campus culture. Students perform, exhibit their artwork, and collaborate across disciplines to promote creativity and inclusivity.',
      startDate: '2024-11-10',
      endDate: '2024-11-10',
    },
    {
      id: 17,
      title: 'Game Development',
      shortdescription: 'Hands-on workshop introducing fundamentals of game design and development.',
      image: EventsCond.GameDevelopment,
      description: 'Participants learn core concepts of game design, basic game loops, physics, and asset integration using beginner-friendly tools or engines. Ideal for students curious about entering the game development space.',
      startDate: '2024-12-15',
      endDate: '2024-12-15',
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const filteredEvents = Events.filter((Event) => {
    const matchesSearch = Event.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handleReadMore = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='flex justify-start items-center w-[100%] py-4 px-4 gap-3'>
        <div className='w-[100%]'>
          <input 
            type='text' 
            placeholder='Search Events' 
            value={searchTerm} 
            onChange={(e)=>setSearchTerm(e.target.value)} 
            className='w-[100%] px-4 py-2 border-[2px] border-gray-500 outline-none focus:border-purple-500 rounded-[5px] text-[16px]'
          />
        </div>
      </div>
      
      <div className='mt-[10px] sm:flex sm:flex-row sm:items-center flex-wrap flex-col items-center justify-center gap-2 w-[100%] px-3'>
        {filteredEvents.map((item) => (
          <div key={item.id} className="w-[360px] py-2 flex flex-col items-center gap-1 shadow-md shadow-gray-400 rounded-md">
            <div className="w-[350px] h-[210px] hover:cursor-pointer">
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
                onClick={() => handleReadMore(item)}
                className="text-[17px] font-medium py-1 px-2 rounded-md bg-purple-500 mt-2 hover:bg-purple-600"
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[90vw] max-w-[450px] overflow-y-auto max-h-[80vh] mx-4 sm:mx-0">
            <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">{selectedEvent.description}</p>
            <p className="mb-2">
              <strong>Start Date:</strong> {selectedEvent.startDate}
            </p>
            <p className="mb-4">
              <strong>End Date:</strong> {selectedEvent.endDate}
            </p>
            {selectedEvent.Winners && selectedEvent.College ? (
              <>
                <p className='mb-4 font-medium'>Winner: {selectedEvent.Winners}</p>
                <p className='mb-4 font-medium'>College: {selectedEvent.College}</p>
              </>
            ) : null}
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
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
