import { Logos } from '../Assets/assets';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Sidebar = () => {
    const navigate=useNavigate();
    const handelNavigate=(path)=>{
        console.log('Navigating to:',path);
        navigate(`/dashboard/${path}`);
    }
    const [selectedPage,setSelectedPage]=useState('/');
    const handelNavInMobile=(event)=>{
        const page=event.target.value;
        setSelectedPage(page);
        if(page){
            console.log('Navigating to:',page);
            navigate(`/dashboard/${page}`);
        }
        if(page==='/dashboard'){
            navigate('/dashboard')
        }
    }
    const [selecedClub,setSelectedClub]=useState(null);
    const handelClubClick=(club)=>{
         setSelectedClub(club);
         handelNavigate(club);
    }
  return (
    <>
    <div className='hidden w-[25%]  ml-[-15px] lg:flex flex-col items-center gap-2 shadow-md shadow-slate-600 rounded-sm'>
        <div className='mt-1 px-1 py-1 flex flex-col items-center w-[98%] bg-slate-300 rounded-md'>
            <img src={Logos.Squad} className='w-[180px] h-[180px] rounded-full hover:cursor-pointer' alt='' onClick={()=>navigate('/')}/>
            <h1 className='sm:text-lg text-sm text-black font-medium'>YuktaDev<span className='text-sm sm:text-lg text-[#f37329] px-1 font-sans'>Squad</span></h1>
        </div>
        <div className='w-[98%] flex flex-col gap-2 justify-center items-center py-2 px-2 rounded-md bg-slate-300'>
            <h1 className='text-lg text-black font-serif py-2 mb-2'>Clubs Information</h1>
            <div className='flex flex-col justify-center items-center gap-3 w-[100%]'>
                <div className={`flex items-center gap-2 py-2 px-2  rounded-md w-[100%] hover:bg-blue-500 hover:cursor-pointer ml-[10px] ${selecedClub==='ai'?'bg-blue-500':'bg-slate-200'}`} onClick={()=>handelClubClick('ai')}>
                    <img src={Logos.AI} className='w-[40px] h-[40px] rounded-full ml-[30px]' alt=''/>
                    <h2>AI-ML Club</h2>
                </div>
                <div className={`flex items-center gap-2 py-2 px-2  rounded-md w-[100%] hover:bg-blue-500 hover:cursor-pointer ml-[10px] ${selecedClub==='fst'?'bg-blue-500':'bg-slate-200'}`} onClick={()=>handelClubClick('fst')}>
                    <img src={Logos.FST} className='w-[40px] h-[40px] rounded-full ml-[30px]' alt=''/>
                    <h2>FST Club</h2>
                </div>
                <div className={`flex items-center gap-2 py-2 px-2  rounded-md w-[100%] hover:bg-blue-500 hover:cursor-pointer ml-[10px] ${selecedClub==='eisociety'?'bg-blue-500':'bg-slate-200'}`} onClick={()=>handelClubClick('eisociety')}>
                    <img src={Logos.EI} className='w-[40px] h-[40px] rounded-full ml-[30px]' alt=''/>
                    <h2>EI Society</h2>
                </div>
                <div className={`flex items-center gap-2 py-2 px-2  rounded-md w-[100%] hover:cursor-pointer hover:bg-blue-500 duration-150 ml-[10px] ${selecedClub==='nyan'?'bg-blue-500':'bg-slate-200'}`} onClick={()=>handelClubClick('nyan')}>
                    <img src={Logos.Nyan} className='w-[40px] h-[40px] rounded-full ml-[30px]' alt=''/>
                    <h2>Nyan</h2>
                </div>
                <div className={`flex items-center gap-2 py-2 px-2 rounded-md w-[100%] hover:cursor-pointer hover:bg-blue-500 duration-150 ml-[10px] ${selecedClub==='arts'?'bg-blue-500':'bg-slate-200'}`} onClick={()=>handelClubClick('arts')}>
                    <img src={Logos.Arts} className='w-[40px] h-[40px] rounded-full ml-[30px]' alt=''/>
                    <h2>Yukta Kala Sangam</h2>
                </div>
                <div className={`flex items-center gap-2 py-2 px-2  rounded-md w-[100%] hover:cursor-pointer hover:bg-blue-500 duration-150 ml-[10px] ${selecedClub==='seva'?'bg-blue-500':'bg-slate-200'}`} onClick={()=>handelClubClick('seva')}>
                    <img src={Logos.Seva} className='w-[40px] h-[40px] rounded-full ml-[30px]' alt=''/>
                    <h2>Yuva Seva Sanakalpam</h2>
                </div>
                <div className={`flex items-center gap-2 py-2 px-2  rounded-md w-[100%] hover:cursor-pointer hover:bg-blue-500 duration-150 ml-[10px] ${selecedClub==='gate'?'bg-blue-500':'bg-slate-200'}`} onClick={()=>handelClubClick('gate')}>
                    <img src={Logos.Gate} className='w-[40px] h-[40px] rounded-full ml-[30px]' alt=''/>
                    <h2>Gate Gurkul</h2>
                </div>
            </div>
        </div>
        <div className=' w-[98%] flex flex-col justify-center items-center py-2 px-1 rounded-md bg-slate-300 mb-2'>
            <h1 className='text-lg text-black font-serif py-2 mb-2'>Our Broadcast Media</h1>
           <div className='flex justify-center items-center gap-2 py-2 px-2 bg-green-500 rounded-md w-[96%] hover:cursor-pointer'onClick={()=>{navigate('/broadcast')}} >
               <img className='w-[40px] h-[40px] rounded-full' src={Logos.Broadcast} alt=''/>
              <h2>Visit Our Media</h2>
            </div>
        </div>
    </div>
    <div className='z-[7] lg:hidden fixed right-0 top-[60px] sm:top-[70px] w-[100%] flex justify-end items-center gap-2 px-2 py-2 mb-5 shdow-sm shadow-slate-400  bg-slate-400'>
    <div className='lg:hidden mb-2'>
        <select className='py-2 px-2 outline-none border-none bg-slate-400 text-[16px] font-medium' value={selectedPage} onChange={handelNavInMobile}>
            <option className='py-2 px-2' value='/dashboard'>Main Dashboard</option>
            <option value='eisociety'>EI SOCIETY CLUB</option>
            <option value='arts'>YUKTA KALA SANGAM CLUB</option>
            <option value='seva'>YUVA SEVA SANKALPAM CLUB</option>
            <option value='nyan'>NYAN CLUB</option> 
            <option value='fst'>FST CLUB</option>
            <option value='ai'>AI-ML CLUB</option>
            <option value='gate'>GATE-GURKUL CLUB</option>
        </select>
    </div>
    </div>
    </>
  )
}

export default Sidebar;