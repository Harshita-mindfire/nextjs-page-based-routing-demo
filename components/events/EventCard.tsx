/* eslint-disable @next/next/no-img-element */
import { DummyEvents } from "@/dummy-data";
import classes from "./EventCard.module.css";
import Button from "../ui/Button";

function EventCard({ item }: { item: DummyEvents }) {
  const humanReadableTime = new Date(item.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const location = item.location.replace(", ", "\n");
  return (
    <>
      <img className={classes.img} src={"/" + item.image} alt="image" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{item.title}</h2>
          <div className={classes.date}>
            <time>{humanReadableTime}</time>
          </div>
          <div className={classes.address}>
            <address>{location}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${item.id}`}>Explore more</Button>
        </div>
      </div>
    </>
  );
}

export default EventCard;
