import React from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { useState} from 'react'
import { Link } from 'react-router-dom'
import { Logos } from '../Assets/assets'
const Navbar = () => {
    const [nav,setNav]=useState(false);
  return (
    <div className='fixed top-0 left-0 right-0 flex justify-between items-center w-[100%] px-4 py-2 bg-white text-black shadow-sm shadow-slate-400 z-[10]'>
        <div className='flex justify-between items-center'>
            <img className='w-[50px] h-[50px] hover:cursor-pointer' src={Logos.Squad} alt=''/>
            <Link to='/'><h1 className='w-[100%] text-lg sm:text-2xl text-[#292eac] font-bold hover:cursor-pointer'>Yukta <span className='text-lg sm:text-2xl lg:text-3xl text-[#fc7536] font-medium hover:cursor-pointer'>DevSquad</span></h1></Link>
        </div>
        <div className='flex gap-5 items-center mr-4'>
            <ul className="hidden sm:flex sm:items-center">
                <li className="p-4 hover:cursor-pointer mr-1 sm:mr-2 hover:text-[#432fa3]" ><Link to='/'>Home</Link></li>
                <li className="p-4 hover:cursor-pointer mr-1 sm:mr-2 hover:text-[#432fa3]"><Link to='/about'>About</Link></li>
                <li className="p-4 hover:cursor-pointer mr-1 sm:mr-2 hover:text-[#432fa3]" ><Link to='/dashboard'>Dashboard</Link></li>
                <li className="p-4 hover:cursor-pointer mr-1 sm:mr-2 hover:text-[#432fa3]" ><Link to='/contact'>Contact Us</Link></li>
                <li className='px-2 py-2 hover:cursor-pointer bg-[#7b68db] rounded-sm mr-1 sm:mr-2 text-white font-medium'><Link to={sessionStorage.getItem('login')?'/admin':'/adminlogin'}>Admin</Link></li>
            </ul>
        </div>
        <div className='hover:cursor-pointer block sm:hidden ease-in duration-500' onClick={()=>{
            setNav(!nav);
        }}>
            {nav? <AiOutlineClose size={30}/>:<AiOutlineMenu size={30}/>}
        </div>
        <div className={nav? 'fixed left-[0%] top-0 w-[60%] h-full border-r border-gray-400 bg-slate-100 ease-in-out duration-500':'fixed left-[-100%]'}>
            <h1 className='w-[100%] text-[22px]  text-[#292eac] font-bold py-4 ml-[20px]'>Yukta<span className="text-[22px] text-[#fc7536] font-medium">DevSquad</span></h1>
             <ul className='pt-4 uppercase px-2 ml-[10px] mr-[10px]'>
                <li className='p-4 border-b border-gray-300 hover:cursor-pointer' onClick={()=>{setNav(false)}} ><Link to='/'>Home</Link></li>
                <li className='p-4 border-b border-gray-300 hover:cursor-pointer' onClick={()=>{setNav(false)}}><Link to='/about'>About</Link></li>
                <li className='p-4 border-b border-gray-300 hover:cursor-pointer' onClick={()=>{setNav(false)}}><Link to='/dashboard'>Dashboard</Link></li>
                <li className='p-4 border-b border-gray-300 hover:cursor-pointer' onClick={()=>{setNav(false)}}><Link to='/contact'>Contact Us</Link></li>
                <li className='p-4 bg-purple-500 text-[17px] font-medium rounded-md' onClick={()=>{setNav(false)}}><Link to={sessionStorage.getItem('login')?'/admin':'/adminlogin'}>Admin</Link></li>
             </ul>
        </div>
    </div>
  )
}

export default Navbar