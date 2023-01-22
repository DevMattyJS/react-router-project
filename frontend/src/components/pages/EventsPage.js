import { Fragment } from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "A dummy event 1",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
  {
    id: "e2",
    title: "A dummy event 2",
    date: "2023-01-25",
    image: "https://www.pexels.com/photo/people-inside-concert-hall-2263436/",
    description: "Come to this amazing event and have some fun.",
  },
  {
    id: "e3",
    title: "A dummy event 3",
    date: "2023-02-12",
    image:
      "https://www.pexels.com/photo/clear-flute-glasses-on-black-tray-16408/",
    description: "Join this amazing event and support our beneficial action.",
  },
];

const EventsPage = () => {
  return (
    <Fragment>
      <h1>The Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => {
          return (
            <li key={event.id}>
              <Link to={`/events/${event.id}`}>{event.title}</Link>
              <p>Date: {event.date}</p>
              <p>{event.description}</p>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default EventsPage;
