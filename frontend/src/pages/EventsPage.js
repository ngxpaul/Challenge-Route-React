import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  //Accessing the data from the closest loader
  const data = useLoaderData();
  //You can only access the data from any component that is same level or below the loader
  // if(data.isError)  {
  //   return <p>{data.message}</p>
  // }
//------------------------------

  const events = data.events;
  return <EventsList events={events} />;
}

export default EventsPage;
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //.....
  //  return {isError : true, message : "Something went wrong"}
  throw new Error("Could not fetch events. Please try again!");
  } else {
   return response;
  }
}
