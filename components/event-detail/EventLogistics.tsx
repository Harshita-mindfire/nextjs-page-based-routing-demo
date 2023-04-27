/* eslint-disable @next/next/no-img-element */
import LogisticsItem from "./LogisticsItem";
import classes from "./EventLogistics.module.css";

function EventLogistics(props: any) {
  const { date, location, image, imageAlt } = props.eventDetails;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = location.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
