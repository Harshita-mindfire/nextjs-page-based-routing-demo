import EventList from "@/components/events/EventList";
import Search from "@/components/events/Search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

function EventPage() {
  const allEvents = getAllEvents();
  const router = useRouter();
  const onSearch = (year: string, month: string) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <>
      <Search onSearch={onSearch} />
      <EventList items={allEvents} />
    </>
  );
}

export default EventPage;
