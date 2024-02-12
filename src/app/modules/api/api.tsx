"use server";

import { redirect } from "next/navigation";

export async function createUser(formData: FormData) {
  let userData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const response = await fetch("http://192.168.1.3:3000/user/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  console.log(response.status);
  if (response.status === 201) {
    redirect("/login");
  }
}

// export async function login(formData: FormData) {}
