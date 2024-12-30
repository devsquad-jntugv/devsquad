import React from 'react'
import { Backgrounds } from '../../Assets/assets'
const Contact = () => {
  return (
    <>
    <div className='w-[100%] mx-auto mt-6'>
      <section className='mt-9 py-16 px-8'>
        <div className='flex flex-col sm:flex sm:flex-row items-center gap-3'>
          <div className='flex-1'>
            <h1 className='text-xl sm:text-2xl lg:text-3xl text-purple-600 font-extrabold mb-3'>CONTACT US</h1>
            <div className='h-[4px] w-[180px] bg-slate-600 rounded-sm mb-3 '></div>
            <p className='py-4 px-2 text-[17px] font-medium'>Whether you have queries about our events, want to join a club, or need assistance with anything related to our activities, feel free to reach out.For specific club inquiries or collaborations, mention the club in your subject line and we’ll direct your message to the right team!</p>
            <h2 className='py-2 px-2 text-[19px] font-medium text-purple-600 mb-2'>Stay connected with us and grow your tech skills with Yukta DevSquad.</h2>
            <div className='flex flex-col sm:justify-start gap-3'>
              <div  className='mr-2 py-8 px-4 shadow-sm shadow-slate-800 rounded-md hover:cursor-pointer'>
                <h2 className='text-lg sm:text-xl text-purple-700 font-semibold mb-2'>BY MAIL</h2>
                <p className='text-[16px] font-medium'>Contact our coordinators through E-Mail</p>
                <p  className='text-[18px] font-medium'>Mail :yuktadevsquad@gmail.com </p>
              </div>
              <div  className='mr-2 py-8 px-4 shadow-sm shadow-slate-800 rounded-md hover:cursor-pointer'>
                <h2 className='text-lg sm:text-xl text-purple-700 font-semibold mb-2'>Developer details</h2>
                <p className='text-[16px] font-medium'>Contact Developer through E-Mail</p>
                <p  className='text-[18px] font-medium'>Mail :varunkumarsunkaraboina@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <img className='sm:h-[500px] sm:w-[450px] sm:ml-[100px] h-[350px] w-[400px]' src={Backgrounds.contact} alt='/'/>
          </div>
        </div>
      </section>
      </div>
       </>
       )
       };
export default Contact;
