import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import NewEventPage, { action as newEventAction } from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetailPage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventRoot from "./pages/EventRoot";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "/events",
        element: <EventRoot />,
        children: [
          // 'loader' property takes a function as a value =>
          // => this function will be executed by react-router, whenever we are about to visit this route
          {
            path: "",
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            //* We can also use 'route nesting' to share a loader between 2 routes
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            action: deleteEventAction,
            children: [
              {
                path: "",
                element: <EventDetailPage />,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          //* action property also takes a function as a value - it is used for submitting a data (difference from a loader)
          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
