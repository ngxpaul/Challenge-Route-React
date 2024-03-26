// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /ev
//    - /events/<some-id>/edients/<some-id> => EventDetailPage
//    - /events/new => NewEventPaget => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.js";
import HomePage from "./pages/HomePage.js";
import EventsPage, { loader as loaderEvent } from "./pages/EventsPage.js";
import NewEventPage,{action as newEventAction} from "./pages/NewEventPage.js";
import EventDetailPage, {
  loader as eventEventLoader,
} from "./pages/EventDetailPage.js";
import EditEventPage from "./pages/EditEventPage.js";
import EventRoot from "./pages/EventRoot.js";
import ErrorPage from "./pages/Error.js";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventRoot />,

          children: [
            {
              path: "",
              element: <EventsPage />,
              loader: loaderEvent,
            },
            {
              path: ":eventID",
              id: "event-detail",
              loader: eventEventLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                },
                { path: "edit", element: <EditEventPage /> },
              ],
            },

            { path: "new", element: <NewEventPage  />, action: newEventAction },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
