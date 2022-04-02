import React from 'react'
import Navbar from '../../components/complexComps/globalComps/Navbar'
import OrganizerDash from '../../components/complexComps/organizerComps/OrganizerDash'
import { Route, Routes } from 'react-router-dom';


const Organizer = () => {
  return (
      <Navbar>
          <Routes>
          <Route path="dashboard" element={<OrganizerDash />} />
        </Routes>
    </Navbar>
  )
}

export default Organizer