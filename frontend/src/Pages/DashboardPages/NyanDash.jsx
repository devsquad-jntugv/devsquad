import React from 'react';
import { Logos,SubClubCoordinators } from '../../Assets/assets';
import EventPieChart from '../../Components/EventPieChart';
import EventBarChart from '../../Components/EventBar';
import NyanEventAnalysis from '../../Components/All Events Analysis/NyanEventAnalysis';
//import NyanBarchart from '../../Components/ChartsFolder/NyanBarchart';
//import NyanPieChart from '../../Components/ChartsFolder/NyanPieChart'
const NyanDash = () => {
  const ClubName='NyanClub';
  return (
      <div className='w-[100%] py-2 px-2 flex flex-col gap-2 sm:mt-12 lg:mt-0 mt-10'>
         <div className='flex justify-start items-center px-1 ml-[-10px]'>
          <img src={Logos.Nyan} alt='/' className='sm:w-[130px] sm:h-[130px] w-[100px] h-[100px] rounded-full'></img>
          <h1 className='text-xl sm:text-3xl text-black font-medium'>Women Empowerment Club</h1>
        </div>
        <div className='lg:grid lg:grid-rows-1 lg:grid-cols-[1.2fr,2fr,1fr] gap-2 grid grid-cols-1 sm:grid sm:grid-rows-2 sm:grid-cols-[1fr,2fr]'>
          <div className='flex flex-col gap-2 rounded-md shadow-md shadow-slate-600'>
            <div className='flex flex-col gap-2 ml-3'>
              <h1 className='text-lg sm:text-xl font-semibold text-black py-2'>Faculty Coordinators</h1>
              <h1 className='text-lg sm:text-xl lg:text-2xl text-red-600 font-medium'>All Women Teaching Faculty</h1>
            </div>
          </div>
          <div>
          <div className='flex flex-col gap-2 rounded-md shadow-md shadow-slate-600 py-2 px-2'>
              <h1 className='text-lg sm:text-xl font-semibold text-black py-2'>Student Coordinators</h1>
              <div className='flex flex-col sm:flex-row gap-2'>
                  <div className='flex gap-2 justify-start sm:justify-center items-center border border-transparent sm:border sm:border-transparent sm:border-r-slate-600  border-b-slate-600 mt-1 mb-1'>
                    <img src={SubClubCoordinators['Nyan-H']} className='h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full' alt=''/>
                    <div className='flex flex-col gap-2 px-2'>
                      <h1 className='text-lg text-[#00df9a] font-medium'>President</h1>
                      <h2 className='text-lg font-sans text-black'>D.Pushpa Leela</h2>
                      <p className='text-sm sm:text-lg font-sans text-slate-600'>3rd year(IT)</p>
                    </div>
                  </div>
                  <div className='flex gap-2 justify-start sm:justify-center items-center'>
                    <img src={SubClubCoordinators['Nyan-V']} className='h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full' alt=''/>
                    <div className='flex flex-col gap-2 px-2'>
                      <h1  className='text-lg text-[#00df9c] font-medium'>Vice President</h1>
                      <h2 className='text-lg font-sans text-black'>G.Nandhini</h2>
                      <p className='text-sm sm:text-lg font-sans text-slate-600'>2nd year(IT)</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2 py-3 justify-center text-center rounded-md shadow-md shadow-slate-600'>
            <h1 className='text-xl sm:text-2xl text-black font-medium'>No.Of Members</h1>
            <p className='text-2xl sm:text-3xl text-[#ff6200] font-bold'>15</p>
          </div>
        </div>
         {/*Event Table*/}
         <NyanEventAnalysis/>
        <div className='grid sm:grid sm:grid-cols-2 items-center justify-center gap-2 shadow-md shadow-slate-600 rounded-md'>
           <EventPieChart ClubName={ClubName}/>
           <EventBarChart ClubName={ClubName}/>
           {/*<NyanPieChart/>
           <NyanBarchart/>*/}
        </div>
      </div>
  )
}

export default NyanDash