import React from 'react'
import Sidebar from '../../Components/Sidebar';
import Dashboard from '../DashboardPages/Dashboard';
import NyanDash from '../DashboardPages/NyanDash';
import Seva from '../DashboardPages/Seva';
import GateDash from '../DashboardPages/GateDash';
import Arts from '../DashboardPages/Arts';
import { Routes,Route} from 'react-router-dom';
import AiDash from '../DashboardPages/AiDash';
import FstDash from '../DashboardPages/FstDash';
import MainDash from '../DashboardPages/MainDash'
const HeaderDashboard = ({events}) => {
  return (
    <div className='w-[100%] flex gap-2 mt-[70px]'>
      <Sidebar/>
      <Routes>
        <Route index element={<MainDash/>}/>
        <Route path='/eisociety' element={<Dashboard/>}/>
        <Route path='/nyan' element={<NyanDash/>}/>
        <Route path='/arts' element={<Arts events={events}/>}/>
        <Route path='/gate' element={<GateDash/>}/>
        <Route path='/seva' element={<Seva/>}/>
        <Route path='/ai' element={<AiDash/>}/>
        <Route path='/fst' element={<FstDash/>}/>
      </Routes>
    </div>
  )
}

export default HeaderDashboard
