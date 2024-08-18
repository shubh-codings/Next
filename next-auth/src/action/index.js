"use server";
import { signIn, signOut } from "@/auth";

export async function LoginAction() {
  await signIn("github");
}
export async function LogoutAction() {
  await signOut();
}
export async function FetchAllProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      cache: "no-store",
    });

    const data = await response.json();
    return data.products;
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again.",
      error: error,
    };
  }
}
export async function FetchProductDetail(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
      cache: "no-store",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again.",
      error: error,
    };
  }
}
