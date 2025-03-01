import React from 'react'
import { Logos,FacultyCoordinators,SubClubCoordinators } from '../../Assets/assets';
import EventPieChart from '../../Components/EventPieChart';
import EventBarChart from '../../Components/EventBar';
import SevaEventAnalysis from '../../Components/All Events Analysis/SevaEventAnalysis';
//import SevaBarchart from '../../Components/ChartsFolder/SevaBarchart';
//import SevaPiechart from '../../Components/ChartsFolder/SevaPiechart';
const Seva = () => {
  const ClubName='YuvaSevaClub'
  return (
    <div className='w-[100%] py-2 px-2 flex flex-col gap-2 sm:mt-10 lg:mt-0 mt-10'>
      <div className='flex justify-start items-center px-1 ml-[-10px]'>
        <img src={Logos.Seva} alt='/' className='sm:w-[140px] sm:h-[140px] w-[100px] h-[100px] rounded-full'></img>
          <h1 className='text-xl sm:text-3xl text-black font-medium'>Community Service Club</h1>
        </div>
        <div className='lg:grid lg:grid-rows-1 lg:grid-cols-[1.2fr,2fr,1fr] gap-2 grid grid-cols-1 sm:grid sm:grid-rows-2 sm:grid-cols-[1fr,2fr]'>
          <div className='flex flex-col gap-2 rounded-md shadow-md shadow-slate-600'>
            <div className='flex flex-col gap-2 ml-3'>
              <h1 className='text-lg sm:text-xl font-semibold text-black py-2'>Faculty Coordinator</h1>
              <div className='flex gap-1 justify-start sm:justify-center items-center'>
                <img src={FacultyCoordinators.Seva} className='h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full' alt=''/>
                <div className='flex flex-col gap-2 mr-2 mb-2 px-2'>
                  <h2 className='text-lg font-semibold text-black'>Mr.P.Venkateswarlu</h2>
                  <p className='text-sm sm:text-lg font-medium text-slate-600'>Asst.Prof(C)</p>
                  <p className='text-sm sm:text-lg font-sans text-slate-600'>Dept.of IT</p>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div className='flex flex-col gap-2 rounded-md shadow-md shadow-slate-600 py-2 px-2'>
              <h1 className='text-lg sm:text-xl font-semibold text-black py-2'>Student Coordinators</h1>
              <div className='flex flex-col sm:flex-row gap-2 sm:justify-center'>
                  <div className='flex gap-2 justify-start sm:justify-center items-center border border-transparent sm:border sm:border-transparent sm:border-r-slate-600  border-b-slate-600 mt-1 mb-1'>
                    <img src={SubClubCoordinators['Seva-H']} className='h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full' alt=''/>
                    <div className='flex flex-col gap-2 px-2'>
                      <h1 className='text-lg text-[#00df9a] font-medium'>President</h1>
                      <h2 className='text-lg font-sans text-black'>N.Nithin</h2>
                      <p className='text-sm sm:text-lg font-sans text-slate-600'>3rd year(IT)</p>
                    </div>
                  </div>
                  <div className='flex gap-2 justify-start sm:justify-center items-center'>
                    <img src={SubClubCoordinators['Seva-V']} className='h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full' alt=''/>
                    <div className='flex flex-col gap-2 px-2'>
                      <h1  className='text-lg text-[#00df9c] font-medium'>Vice President</h1>
                      <h2 className='text-lg font-sans text-black'>P.Pavani</h2>
                      <p className='text-sm sm:text-lg font-sans text-slate-600'>3rd year(IT)</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2 py-3 justify-center text-center rounded-md shadow-md shadow-slate-600'>
            <h1 className='text-xl sm:text-2xl text-black font-medium'>No.Of Members</h1>
            <p className='text-2xl sm:text-3xl text-[#ff6200] font-bold'>41</p>
            
          </div>
        </div>
         {/*Event Table*/}
        <SevaEventAnalysis/>
        <div className='grid sm:grid sm:grid-cols-2 items-center justify-center gap-2 shadow-md shadow-slate-600 rounded-md'>
           <EventPieChart ClubName={ClubName}/>
           <EventBarChart ClubName={ClubName}/>
           {/*<SevaPiechart/>
           <SevaBarchart/>*/}
        </div>
    </div>
  )
}

export default Seva