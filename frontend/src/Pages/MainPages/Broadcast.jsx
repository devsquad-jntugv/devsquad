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
    </>
  )
}

export default Broadcast