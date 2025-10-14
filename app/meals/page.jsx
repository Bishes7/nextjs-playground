import React from "react";
import classes from "./page.module.css";
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
      </header>
      <main className={classes.main}></main>
    </>
  );
}
