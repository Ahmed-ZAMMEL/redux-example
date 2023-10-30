import { useParams, json } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>EventDetailPage</h1>
      <p>{params.eventId}</p>
    </>
  );
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  // The error handling could be improved.
  if (!response.ok) {
    throw json({ message: "Could not fetch details for selected event." }, {});
  } else {
    return response;
  }
}
