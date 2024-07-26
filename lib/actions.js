"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  //to create a server action

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0 //image file invalid
  ) {
    return {
      message: "Invalid input!",
    };
  }

  console.log(meal);

  await saveMeal(meal);

  //revalidatePath("/", "layout")  - revalidate (update cache) of all pages in your website
  revalidatePath("/meals", "layout"); //tells nextjs to revalidate the cache that belongs to a path
  //second parameter as layout, makes all the nested pages to be re validated. default value is 'page'
  //redirect user to a page
  redirect("/meals");
}
