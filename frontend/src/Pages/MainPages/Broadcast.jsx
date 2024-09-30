import React from 'react'
import EventsSlider from '../../Components/BroadCastFiles/EventsSlider'


const Broadcast = () => {
  return (
    <>
       <section className='py-8 mt-10 flex flex-col w-[100%] items-start gap-2'>
        <div className='flex flex-col items-center py-2 gap-2'>
          <h1 className='text-lg sm:text-xl lg:text-2xl font-medium text-red-700'>Conducted Events</h1>
          <div className='h-[4px] w-[180px] sm:w-[250px] bg-gray-400 rounded-md ml-2'></div>
        </div>
        <EventsSlider/>
       </section>
       <footer className="py-4 px-4 bg-slate-200 absolute bottom-0 w-[100%]">
         < p className="text-center font-medium text-sm mt-4">Copyright ©2024 All rights reserved | JNTU-GV College of Engineering Vizianagaram</p>
       </footer>
    </>
  )
}

export default Broadcast