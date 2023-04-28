import Link from "next/link";
import React from "react";

import classes from "./Header.module.css";
function Header() {
  return (
    <div className={classes.header}>
      <div>
        <Link href="/">Next Events</Link>
      </div>
      <div>
        <Link href="/events">All Events</Link>
      </div>
    </div>
  );
}

export default Header;
