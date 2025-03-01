import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { Logos,Backgrounds,OverallStudents,Collaboration} from "../../Assets/assets";
import CardCarousel from "../../Components/Carousel";
import { Link } from "react-router-dom";
const Home = () => {
  const logos = [
    Collaboration.Drishya,Collaboration.Infosys,Collaboration.Coursera,Collaboration.Nptel,Collaboration.Edx,Collaboration.oracle
  ];
  return (
    <div className="w-[100%] mx-auto relative">
      <section className="relative w-full h-screen py-4">
        {/* Text or content to be displayed above the image */}
        <div className="relative z-5 text-center top-[46%] left-[50%] translate-x-[-50%] translate-y-[-46%] grid grid-cols-1 gap-1">
          <h1 className="text-[17px] sm:text-[24px] lg:text-[28px] font-medium sm:font-medium text-[#432fa3] lg:mb-[-100px] sm:mb-[-50px] mb-[-20px]">
            JNTU-GV CEV(A) Department Of Information Technology Presents
          </h1>
          <h1 className="text-[40px] mt-3 sm:mt-3 sm:text-[50px] lg:text-[110px] text-[#292eac] font-bold">
            YUKTA <span className="text-[#fc7536]">DEVSQUAD</span>
          </h1>
          <p className=" text-center text-black font-medium text-[17px] sm:text-[20px] lg:text-[22px]">
            " Every Line Of Code Changes The World "
          </p>
        </div>

        {/* Background image with reduced saturation */}
        <img
          className="absolute inset-0 z-[-1] w-full h-full object-cover"
          style={{ filter: "saturate(0.5)" }}
          src={Backgrounds.homebg}
          alt="/"
        />
      </section>
      {/*ABout*/}
      <section className="w-[100%] py-16 sm:px-14 px-5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#432fa3] font-medium py-2 border border-transparent border-b-2 border-b-purple-600">
          Why Yukta <span>DevSquad</span>
        </h1>
        <div className="py-2 px-2 flex flex-col sm:flex sm:flex-row justify-center sm:items-center items-start gap-2">
          <img
            className="sm:w-[350px] sm:h-[350px] rounded-full bg-cover"
            src={Logos.Squad}
            alt=""
          />
          <p className="sm:text-[18px] font-normal text-[16px]">
          Yukta DevSquad engages students through a
wide range of activities and
initiatives that are designed to
enhance both their technical
expertise and soft skills. Weekly
coding sessions are held where
members tackle coding challenges,
share knowledge, and work on
projects collaboratively. These
sessions not only help in
strengthening problem-solving
abilities but also foster a spirit of
teamwork. The club organizes
hands-on workshops on various
trending technologies such as web
development,mobileapp
development, and cloud computing.
These workshops provide students
with practical experience and
exposure to industry-relevant tools
and frameworks.The club is committed to the continuous growth and
development of its members through various activities and
initiatives.The club organizes several large-scale events each yearto
engage the broader university community and beyond.The club values open and transparent communication to keep
members informed and involved.
          </p>
        </div>
        <div className="py-2 px-3 flex flex-col sm:flex sm:flex-row justify-center items-center gap-3">
          <div className="flex flex-col gap-5">
            <h1 className="text-xl sm:text-2xl lg:text-3xl text-[#432fa3] font-semibold">
              Collaborated With ACM
            </h1>
            <p className="sm:text-[18px] text-[16px] font-normal">
            Yukta DevSquad serves as the head of all clubs in the IT branch at JNTU-GV (Jawaharlal Nehru Technological University Gurajada Vizianagaram) and has successfully collaborated with the ACM (Association for Computing Machinery) student chapter of the university. Under our Head of the Department leadership, the IT clubs have become more dynamic, promoting technological innovation, peer learning, and professional development. The collaboration with the ACM chapter has allowed students to engage with global tech trends, participate in coding competitions, workshops, and seminars, and foster a community of enthusiastic learners and developers, contributing significantly to the academic and extracurricular growth of the IT branch.
            </p>
            <button className="px-2 sm:px-4 py-2 text-[17px] sm:text-[19px] font-medium text-white rounded-md bg-[#6951e0] sm:w-[250px] w-[200px] shadow-sm shadow-slate-500">
             <a href="https://jntukucev.hosting2.acm.org/" target='_blank' rel="noopener noreferrer">Visit our ACM website</a>
            </button>
          </div>
          <img
            className="sm:w-[350px] sm:h-[350px] rounded-full bg-cover"
            src={Logos.ACM}
            alt=""
          />
        </div>
      </section>
      {/*Clubs*/}
      <section className="w-[100%] py-16 sm:px-10 px-4">
        <h1 className="text-xl sm:text-2xl lg:text-2xl text-purple-600 font-semibold">
          CLUBS WE HAVE
        </h1>
        <div className="h-[4px] w-[180px] rounded-sm bg-slate-400"></div>
        <CardCarousel />
        <div className="flex flex-col justify-start gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl text-purple-600 font-medium">
              OUR <span>BROADCAST MEDIA</span>
            </h1>
            <div className="h-[4px] w-[200px] bg-slate-400 rounded-sm"></div>
          </div>
          <p>
          The Media and Communications part is dedicated
to developing students' skills in media production,
communication, and digital content creation. This
 provides a platform for members to express
their creativity through various forms of media,
while also helping them refine their communication
and public speaking abilities. Through a
combination of hands-on activities and educational
workshops, this prepares students for the fast evolving world of media and communication.
          </p>
          <div className="flex items-center gap-3">
            <button className="sm:mr-2 mr-1 py-2 px-2  bg-[#6951e0] text-white font-medium text-[16px] sm:text-[18px] rounded-sm">
              <Link to='/broadcast'>Visit our Broadcast Media</Link>
            </button>
            <button className="sm:mr-2 mr-1 py-2 px-2 bg-[#6951e0] text-white font-medium text-[16px] sm:text-[18px] rounded-sm">
              <Link to='/dashboard'> View About Clubs</Link>
            </button>
          </div>
        </div>
      </section>
      <section className="w-[100%] py-16 px-8 overflow-x-hidden">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl text-purple-600 font-bold">
             DEPARTMENT COLLABORATIONS
          </h1>
          <div className="w-[170px] sm:w-[200px] h-[3px] rounded-sm bg-slate-400"></div>
          <div className="overflow-x-hide py-8">
      {/* Container with infinite scroll animation */}
      <div className="flex animate-scroll gap-8">
        {/* Map over the logos array twice to create an infinite loop effect */}
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company logo ${index + 1}`}
            className="w-36 h-28 object-contain bg-white"
          />
        ))}
      </div>
    </div>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center mt-4">
          <h1 className="text-xl sm:text-2xl lg:text-3xl text-purple-600 font-bold">
            OUR STUDENT COORDINATORS
          </h1>
          <div className="w-[170px] sm:w-[200px] h-[3px] rounded-sm bg-slate-400"></div>
        </div>
        <div className="flex flex-col sm:flex sm:flex-row gap-3 py-10 hover:cursor-pointer">
          <div className="py-2 px-2 flex sm:flex-col lg:flex-row w-[100%] sm:gap-2 gap-3 sm:justify-center lg:justify-start items-center shadow-md shadow-gray-500 rounded-sm hover:translate-y-[-12px] duration-300">
            <img className="rounded-full sm:w-[150px] sm:h-[150px] lg:w-[170px] lg:h-[170px] w-[120px] h-[120px]" src={OverallStudents.President} alt="/" />
            <div className="lg:ml-[6px] flex flex-col lg:justify-start sm:justify-center sm:items-center lg:items-start gap-1">
              <h1 className="sm:text-[22px] text-[20px] font-bold">J.Rajesh</h1>
              <h2 className="sm:text-[20px] text-[18px] font-medium text-purple-500">President</h2>
              <h2 className="text-[18px] font-medium">2nd Year, MCA</h2>
              <div className="flex justify-start items-center sm:gap-2 gap-1 mt-1">
                <a href="https://www.instagram.com/mr_innocent_k_i_n_g?igsh=azlrMjI2Ym90Ym41" target='_blank' rel="noopener noreferrer"><FaInstagram className="text-[18px] sm:text-[20px]  hover:text-[#fe8150] hover:cursor-pointer" /></a>
                <a href="https://www.instagram.com/mr_innocent_k_i_n_g?igsh=azlrMjI2Ym90Ym41" target='_blank' rel="noopener noreferrer"><FaTwitter className="text-[18px] sm:text-[20px]  hover:text-blue-600 hover:cursor-pointer" /></a>
                <a href="https://www.linkedin.com/in/jinagam-rajesh-218022299" target='_blank' rel="noopener noreferrer"><FaLinkedin className="text-[18px] sm:text-[20px]  hover:text-blue-600 hover:cursor-pointer" /></a>
                <a href="https://github.com/RajeshJinagam" target='_blank' rel="noopener noreferrer"><FaGithub className="text-[18px] sm:text-[20px]  hover:text-slate-600 hover:cursor-pointer" /></a>
              </div>
            </div>
          </div>
          <div className="py-2 px-2 flex sm:flex-col lg:flex-row w-[100%] sm:gap-2 gap-3 lg:justify-start sm:justify-center items-center shadow-md shadow-gray-500 rounded-sm hover:translate-y-[-12px] duration-300">
            <img className="rounded-full sm:w-[150px] sm:h-[150px] lg:w-[170px] lg:h-[170px] w-[120px] h-[120px]" src={OverallStudents.VicePresident} alt="/" />
            <div className="lg:ml-[6px] flex flex-col lg:justify-start sm:justify-center sm:items-center lg:items-start">
              <h1 className="sm:text-[22px] text-[20px] font-bold">K.Manikanta</h1>
              <h2 className="sm:text-[20px] text-[18px] font-medium text-purple-500">Vice President</h2>
              <h2 className="text-[18px] font-medium">3rd Year,IT</h2>
              <div className="flex justify-start items-center sm:gap-2 gap-1 mt-1">
                <a href="https://www.instagram.com/m.a.n.i._8?igsh=cWcyZTg4eWx5ZmRz" target='_blank' rel="noopener noreferrer"><FaInstagram className="text-[18px] sm:text-[20px]  hover:text-[#fe8150] hover:cursor-pointer" /></a>
                <a href="https://www.instagram.com/m.a.n.i._8?igsh=cWcyZTg4eWx5ZmRz" target='_blank' rel="noopener noreferrer"><FaTwitter className="text-[18px] sm:text-[20px]  hover:text-blue-600 hover:cursor-pointer" /></a>
                <a href="https://www.linkedin.com/in/kancharana-manikanta-b2063b313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noopener noreferrer"><FaLinkedin className="text-[18px] sm:text-[20px]  hover:text-blue-600 hover:cursor-pointer" /></a>
                <a href="https://github.com/Manikancharana" target='_blank' rel="noopener noreferrer"><FaGithub className="text-[18px] sm:text-[20px]  hover:text-slate-600 hover:cursor-pointer" /></a>
              </div>
            </div>
          </div>
          <div className="py-2 px-2 flex sm:flex-col lg:flex-row w-[100%] sm:gap-2 gap-3 lg:justify-start sm:items-center items-center shadow-md shadow-gray-500 rounded-sm hover:translate-y-[-12px] duration-300">
            <img className=" rounded-full sm:w-[150px] sm:h-[150px] lg:w-[170px] lg:h-[170px] w-[120px] h-[120px]" src={OverallStudents.Secretary} alt="/" />
            <div className="lg:ml-[6px] flex flex-col lg:justify-start sm:justify-center sm:items-center lg:items-start gap-1">
              <h1 className="sm:text-[22px] text-[20px] font-bold">S.Rishitha</h1>
              <h2 className="sm:text-[20px] text-[18px] font-medium text-purple-500">Secretary</h2>
              <h2 className="text-[18px] font-medium">3rd Year,IT</h2>
              <div className="flex justify-start items-center sm:gap-2 gap-1 mt-1">
                <a href="https://www.instagram.com/_rishi.0304_?igsh=MTYwbnJmY21xcG84NA==" target='_blank' rel="noopener noreferrer"><FaInstagram className="text-[18px] sm:text-[20px]  hover:text-[#fe8150] hover:cursor-pointer" /></a>
                <a href="https://www.instagram.com/_rishi.0304_?igsh=MTYwbnJmY21xcG84NA==" target='_blank' rel="noopener noreferrer"><FaTwitter className="text-[18px] sm:text-[20px]  hover:text-blue-600 hover:cursor-pointer" /></a>
                <a href="https://www.linkedin.com/in/rishitha-reddy-sanapathi-4b13a52b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noopener noreferrer"><FaLinkedin className="text-[18px] sm:text-[20px]  hover:text-blue-600 hover:cursor-pointer" /></a>
                <a href="https://github.com/rishi-a18" target='_blank' rel="noopener noreferrer"><FaGithub className="text-[18px] sm:text-[20px]  hover:text-slate-600 hover:cursor-pointer" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-8 px-4 bg-slate-200">
        <div className="flex flex-col sm:flex-row justify-start gap-2">
          <div className="flex flex-col justify-start gap-2">
            <h1 className="text-lg sm:text-xl text-[#292eac] font-medium">
              Yukta <span className="text-[#fc7536]">DevSquad</span>
            </h1>
            <p>
            Yukta Dev Squad | Powered by JNTU-GV IT Clubs
            Uniting Creativity, Innovation, and Technology
            </p>
            <div className="flex flex-col items-start gap-2">
              <p>Follow Us on:</p>
              <div className="flex flex-row items-center gap-2">
              <a href="https://www.instagram.com/yukta_devsquad/" target="_blank" rel='noopener noreferrer'><FaInstagram className="text-[18px] hover:text-orange-600 hover:cursor-pointer"/> </a>
              <a href='https://www.linkedin.com/in/yukta-devsquad-971230330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel="noopener noreferrer"><FaLinkedin className="text-[18px] hover:text-blue-500 hover:cursor-pointer"/> </a>
              <a href="https://github.com/devsquad-jntugv" target='_blank' rel="noopener noreferrer"><FaGithub className="text-[18px] hover:text-blue-500 hover:cursor-pointer"/> </a>
              </div>
            </div>
            <p className="font-medium">E-mail:yuktadevsquad@gmail.com</p>
          </div>
          <div className="flex flex-col sm:flex sm:flex-row justify-around items-start w-[100%] hover:cursor-pointer">
            <div className="flex flex-col justify-start  gap-2 border border-transparent border-b-black sm:border sm:border-transparent">
              <p className="font-medium"><Link to='/'>Home</Link></p>
              <p className="font-medium"><Link to='/contact'>Contact US</Link></p>
              <p className="font-medium"><Link to='/about'>About Us</Link></p>
              <p className="font-medium"><Link to='/dashboard'>Clubs</Link></p>
            </div>
            <div>
              <p className="font-medium"><Link to='/dashboard/eisociety'>Ei Society</Link></p>
              <p className="font-medium"><Link to='/dashboard/nyan'>Nyan</Link></p>
              <p className="font-medium"><Link to='/dashboard/arts'>Yukta Kala Sangam</Link></p>
              <p className="font-medium"><Link to='/dashboard/fst'>FST</Link></p>
              <p className="font-medium"><Link to='/dashboard/ai'>AI-ML</Link></p>
              <p className="font-medium"><Link to='/dashboard/seva'>Yuva Seva Sankalpam</Link></p>
            </div>
          </div>
        </div>
        <p className="text-center font-medium text-sm mt-4">Copyright ©2024 All rights reserved Varun Kumar Sunkaraboina</p>
      </footer>
    </div>
  );
};

export default Home;
