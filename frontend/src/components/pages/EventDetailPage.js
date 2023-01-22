import { Fragment } from "react";
import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Event Details</h1>
      <p>{params.eventId}</p>
    </Fragment>
  );
};

export default EventDetailPage;