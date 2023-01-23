import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import EventsNavigation from "../components/EventsNavigation";

const EventRoot = () => {
  return (
    <Fragment>
      <EventsNavigation />
      <Outlet />
    </Fragment>
  );
};

export default EventRoot;
