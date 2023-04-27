import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventSummary from "@/components/event-detail/EventSummary";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function EventDetailsPage() {
  const router = useRouter();
  const id = router.query.eventId as string;
  const eventDetails = getEventById(id);
  if (!eventDetails) {
    return <p>no matching id</p>;
  }

  return (
    <Fragment>
      <EventSummary title={eventDetails.title} />
      <EventLogistics eventDetails={eventDetails} />
      <EventContent>
        <p>{eventDetails.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailsPage;
