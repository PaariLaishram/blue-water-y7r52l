import Link from "next/link";
import Image from "next/image";
import logoImg from "../../assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

import NavLink from "./nav-link";

export default function MainHeader() {
  console.log("Executing Code");
  return (
    <div>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="Logo Text" priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals" text="Meals Page" />
            </li>
            <li>
              <NavLink href="/community" text="Go to Community" />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
