import Link from "next/link";
import classes from "@/main-header.module.css";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className="classes.slideshow"></div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food For Foodies</h1>
            <p>Taste & share the food </p>
          </div>
          <div className={classes.cta}>
            <Link href="/">Join the Community</Link>
          </div>
        </div>
      </header>
      <main></main>
    </>
  );
}
