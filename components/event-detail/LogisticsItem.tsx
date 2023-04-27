import classes from "./logistics-item.module.css";

function LogisticsItem(props: any) {
  return (
    <li className={classes.item}>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
