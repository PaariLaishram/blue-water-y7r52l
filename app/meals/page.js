import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "../../components/meals/meal-item";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals created{" "}
          <span className={classes.highlight}>by you</span>{" "}
        </h1>
        <p> Choose your favourite recipe and cook it </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your recipe </Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
