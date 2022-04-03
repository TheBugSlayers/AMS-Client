import React from "react";
import Navbar from "../../components/complexComps/globalComps/Navbar";
import OrganizerDash from "../../components/complexComps/organizerComps/OrganizerDash";
import OrganizerAddEvent from "../../components/complexComps/organizerComps/OrganizerAddEvent";
import { Route, Routes } from "react-router-dom";
import dashboard from "../../utils/static/images/dashboard.png";
import addevent from "../../utils/static/images/addevent.png";
import myevents from "../../utils/static/images/myevents.png";
import transaction from "../../utils/static/images/transaction.png";
import OrganizerBook from "../../components/complexComps/organizerComps/OrganizerBook";
import OrganizerMyEvents from "../../components/complexComps/organizerComps/OrganizerMyEvents";
import OrganizerDeatilView from "../../components/complexComps/organizerComps/OrganizerDeatilView";

const Organizer = () => {
  // const organizerNavContent = [
  //   "Dashboard",
  //   "My Events",
  //   "Add Event",
  //   "Transaction History",
  // ];
  const organizerNavContent = [
    {
      title: "Dashboard",
      link: "dashboard",
      icon: dashboard,
    },
    {
      title: "My Events",
      link: "myevents",
      icon: myevents,
    },
    {
      title: "Add Event",
      link: "addevent",
      icon: addevent,
    },
    {
      title: "Transaction History",
      link: "transactionhistory",
      icon: transaction,
    },
  ];
  return (
    <Navbar sideNavData={organizerNavContent} pageTitle="Organizer">
      <Routes>
        <Route path="dashboard" element={<OrganizerDash />} />
        <Route path="addevent" element={<OrganizerAddEvent />} />
        <Route path="addevent/book/:id" element={<OrganizerBook />} />
        <Route path="myevents" element={<OrganizerMyEvents/>} />
        <Route path="myevents/detailview" element={<OrganizerDeatilView/>} />


      </Routes>
    </Navbar>
  );
};

export default Organizer;
