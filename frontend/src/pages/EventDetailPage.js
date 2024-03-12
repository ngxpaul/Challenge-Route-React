import { useParams } from "react-router-dom";

function EditEventPage() {
  const params = useParams();
  return <div>
    <h1>Event Detail Page</h1>
    <p>Event ID:{params.eventID}</p>
  </div>;
}
export default EditEventPage;