import { json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useLoaderData();
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
