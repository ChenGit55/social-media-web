import Link from "next/link";
import CheckboxAndButton from "./signup-client";
import { createUser } from "../../api/api";
import { redirect } from "next/navigation";
import React from "react";

export default function SignUpForm() {
  const handleSubmit = async (formData: FormData) => {};
  return (
    <main className="bg-gray-100 h-screen p-[10%]">
      <div
        className="rounded-lg border-[#d4d4d4] border-[1px] bg-white p-[30px] w-[30%] mx-auto"
        id="card"
      >
        <form className="grid justify-items-start gap-4" action={createUser}>
          <div className="font-bold text-2xl" id="title">
            Sing up
          </div>
          <div className="grid w-full" id="fields">
            <label htmlFor="name">Name</label>
            <input
              className="rounded-lg px-3 py-2 border-[#d4d4d4] border-[1px]"
              type="name"
              name="name"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="grid w-full" id="fields">
            <label htmlFor="email">Email</label>
            <input
              className="rounded-lg px-3 py-2 border-[#d4d4d4] border-[1px]"
              type="email"
              name="email"
              id="email"
              placeholder="exemple@mail.com"
            />
          </div>
          <div className="grid w-full" id="fields">
            <label htmlFor="password">Password</label>
            <input
              className="rounded-lg px-3 py-2 border-[#d4d4d4] border-[1px]"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          {/* <div className="grid w-full" id="fields">
						<label htmlFor="password">Confirm Password</label>
						<input
							className="rounded-lg px-3 py-2 border-[#d4d4d4] border-[1px]"
							type="password"
							id="password2"
							placeholder="Confirm Password"
						/>
					</div> */}
          <CheckboxAndButton />
          <div>
            Alredy have an account?
            <Link
              className="text-blue-500 font-semibold hover:underline"
              href={"/login"}
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
