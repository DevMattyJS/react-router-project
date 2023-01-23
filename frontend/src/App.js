import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventDetailPage from "./pages/EventDetailPage";
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
          { path: ":eventId", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
