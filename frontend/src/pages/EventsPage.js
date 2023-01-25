import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  //* We can access a data from loader function by using a 'useLoaderData' hook in that particular component
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  const events = data.events;

  return <>{<EventsList events={events} />}</>;
};

export default EventsPage;

//* It is a convention to create loader functions in a component where they are needed and export them for setup in a router
//! Code inside a loader is still executed in the browser (not in a backend server) !
//! => we can use all browser features in a loader function, except react hooks (since loader is not a react component)
export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events!" };
    // throw new Response(JSON.stringify({ message: "Could not fetch events!" }), {
    //   status: 500,
    // });
    //* Instead of manualy creating a Response object, we can use json() function from react-router-dom
    //* => this function creates a Response object, that includes data in a json format
    //* => we can also pass a 2nd argument, where we can set a response metadata (e.g. status)
    return json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    //* We can return our 'response' like this (even it is a promise) in a loader function =>
    //* => react router will handle data extraction behind the scenes automatically
    return response;
  }
};
