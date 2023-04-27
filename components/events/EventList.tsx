import { DummyEvents } from "@/dummy-data";
import EventCard from "./EventCard";
import classes from "./EventList.module.css";

function EventList({ items }: { items: DummyEvents[] }) {
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <li className={classes.item} key={item.id}>
          <EventCard item={item} />
        </li>
      ))}
    </ul>
  );
}

export default EventList;
