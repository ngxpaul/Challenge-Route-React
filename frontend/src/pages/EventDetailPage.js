import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');
  // const params = useParams();
  return <EventItem event={data.event} />;
}
export default EventDetailPage;

export async function loader({params}) {
  const id = params.eventID;
  console.log("id", id);
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event" },
      { status: 500 }
    );
  } else {
    return response;
  }
}
export async function action({params,request}){
  const eventID = params.eventID;
  const response = await fetch("http://localhost:8080/events/" + eventID,{
    method:request.method
  })
  
  if (!response.ok) {
    throw json({ message: "Could not fetch event" }, { status: 500 });
  }
  return redirect("/events");
}