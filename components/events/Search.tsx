import { FormEvent, useRef } from "react";
import Button from "../ui/Button";
import classes from "./Search.module.css";

function Search(props: any) {
  const yearRef = useRef();
  const monthRef = useRef();
  function submitHandler(event: any) {
    event.preventDefault();
    const year = yearRef.current.value;
    const month = monthRef.current.value;
    console.log("yaer, month", year, month);
    props.onSearch(year, month);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label>Year</label>
          <select id="year" ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div className={classes.control}>
          <label>Month</label>
          <select id="month" ref={monthRef}>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>
        <Button>Submit </Button>
      </div>
    </form>
  );
}

export default Search;
