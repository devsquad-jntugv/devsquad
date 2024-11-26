import React from 'react'
import { Logos,Backgrounds } from '../../Assets/assets'
const About = () => {
  return (
    <>
    <div className='w-[100%] mt-6 overflow-auto'>
      <section className='mt-9 py-16 sm:px-8 px-4 '>
        <h1 className='text-xl sm:text-2xl lg:text-3xl text-purple-600 font-extrabold mb-3'>ABOUT US</h1>
        <div className='h-[4px] w-[180px] bg-slate-600 rounded-sm mb-3'></div>
        <div className='flex flex-col sm:flex sm:flex-row justify-center items-center gap-2 mb-3'>
          <div className='flex-1'>
          <p className='text-[16px] sm:text-[18px] font-normal'>The Information Technology (IT)
branch at JNTU-GV College of
Engineering, located in the city of
Vizianagaram, is dedicated to
nurturing technical skills,
innovation, and collaboration among
its students. The IT club, comprising
an active and enthusiastic group of
students and faculty, plays a pivotal
role in creating a dynamic learning
environment. The club is structured
with designated roles such as
President, Vice President, Secretary,
Treasurer, Event Coordinator,
Technical Lead, and Public Relations
Officer, ensuring efficient leadership
and smooth operations. These
workshops provide students with
practical experience and exposure to
industry-relevant tools and
frameworks. The club also conducts
in-house hackathons, which
encourage members to develop
innovative solutions under time
constraints, promoting creativity
and quick thinking. A major
highlight of the club’s activities is
the Project Showcases, where
members present their completed
projects to peers and faculty for
feedback.</p></div>
          <div className='flex items-center gap-2'>
            <img className='sm:h-[250px] sm:w-[250px] h-[180px] w-[180px]' src={Logos.college} alt='/'/>
            <img className='sm:h-[250px] sm:w-[250px] h-[180px] w-[180px]' src={Logos.ACM} alt='/'/>
          </div>
        </div>
        <h1 className='text-lg sm:text-xl lg:text-2xl font-bold text-purple-600 mb-2'>OUR VISION - MISSION</h1>
        <div className='h-[4px] w-[250px] bg-slate-600 rounded-sm mb-3'>
        </div>
        <div className='flex flex-col sm:flex-row justify-center'>
          <p className='text-[16px] sm:text-[18px] font-normal'>The club engages students through a
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
and frameworks.</p>
          <img src={Backgrounds.about} className='h-[300px] w-[300px]' alt='/'/>
        </div>
      </section>
    </div>
    <footer className="py-2 px-4 bg-slate-200 w-full">
      <p className="text-center font-medium text-sm mt-4">Copyright ©2024 All rights reserved | JNTU-GV College of Engineering Vizianagaram</p>
      </footer>
    </>
  )
}

export default About