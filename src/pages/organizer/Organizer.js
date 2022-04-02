import React from "react";
import Navbar from "../../components/complexComps/globalComps/Navbar";
import OrganizerDash from "../../components/complexComps/organizerComps/OrganizerDash";
import { Route, Routes } from "react-router-dom";
import dashboard from "../../utils/static/images/dashboard.png";
import addevent from "../../utils/static/images/addevent.png";
import myevents from "../../utils/static/images/myevents.png";
import transaction from "../../utils/static/images/transaction.png";

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
      title: "Add Events",
      link: "addevents",
      icon: addevent,
    },
    {
      title: "Transaction History",
      link: "transactionhistory",
      icon: transaction,
    },
  ];
  return (
    <Navbar sideNavData={organizerNavContent}>
      <Routes>
        <Route path="dashboard" element={<OrganizerDash />} />
      </Routes>
    </Navbar>
  );
};

export default Organizer;
