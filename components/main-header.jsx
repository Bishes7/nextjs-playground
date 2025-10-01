import React from "react";
import Link from "next/link";
import logoImg from "../assets/logo.png";
import Image from "next/image";

export default function MainHeader() {
  return (
    <div>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} priority />
          NextLevel Food
        </Link>

        <nav>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
