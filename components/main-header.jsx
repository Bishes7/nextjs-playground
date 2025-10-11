import React from "react";
import Link from "next/link";
import logoImg from "../assets/logo.png";
import Image from "next/image";
import classes from "@/main-header.module.css";
import NavLink from "@/components/nav-link";

export default function MainHeader() {
  return (
    <div>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="food-image" priority />
          NextLevel Food
        </Link>

        <nav className="classes.nav">
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
