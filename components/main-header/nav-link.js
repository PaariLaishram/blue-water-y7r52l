"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

export default function NavLink({ href, text }) {
  const path = usePathname();
  console.log(0, path);
  console.log(1, href);
  console.log(path.startsWith({ href }));
  return (
    <div>
      <Link
        href={href}
        className={
          path.startsWith({ href })
            ? `${classes.link} ${classes.active}`
            : classes.link
        }
      >
        {text}
      </Link>
    </div>
  );
}
