import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  //Accessing the data from the closest loader
  const events = useLoaderData();
  //You can only access the data from any component that is same level or below the loader
  return <EventsList events={events} />;
}

export default EventsPage;
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //.....
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
