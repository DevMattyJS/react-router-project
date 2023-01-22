import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/pages/Root";
import HomePage from "./components/pages/HomePage";
import NewEventPage from "./components/pages/NewEventPage";
import EditEventPage from "./components/pages/EditEventPage";
import EventDetailPage from "./components/pages/EventDetailPage";
import EventsPage from "./components/pages/EventsPage";

// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/events", element: <EventsPage /> },
      { path: "/events/:eventId", element: <EventDetailPage /> },
      { path: "event/new", element: <NewEventPage /> },
      { path: "events/:eventId/edit", element: <EditEventPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
