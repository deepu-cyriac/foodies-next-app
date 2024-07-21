import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h3>This is the meals page!</h3>
      <p>
        <ul>
          <li>
            <Link href="/meals/meal1">Meal 1</Link>
          </li>
          <li>
            <Link href="/meals/meal2">Meal 2</Link>
          </li>
        </ul>
      </p>
    </main>
  );
}
