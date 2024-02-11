import Link from "next/link";
// import AuthActions from "../actions/auth-actions";

export default function LoginForm() {
  return (
    <>
      <main className="bg-gray-100 h-screen p-[10%]">
        <div
          className="rounded-lg border-[#d4d4d4] border-[1px] bg-white p-[30px] w-[30%] mx-auto"
          id="card"
        >
          <form
            className="grid justify-items-start gap-4"
            // action={AuthActions.login}
          >
            <div className="font-bold text-2xl" id="title">
              {" "}
              Sing in to your acount
            </div>

            <div className="grid w-full" id="field">
              <label htmlFor="email">Email</label>
              <input
                className="rounded-lg px-3 py-2 border-[#d4d4d4] border-[1px]"
                name="email"
                type="email"
                id="email"
                placeholder="exemple@mail.com"
              />
            </div>

            <div className="grid w-full" id="field">
              <label htmlFor="password">Password</label>
              <input
                className="rounded-lg px-3 py-2 border-[#d4d4d4] border-[1px]"
                name="password"
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>

            <div className="w-full flex justify-between">
              <div>
                <input type="checkbox" id="checkbox" />
                <label
                  className="text-[#a3a3a3]"
                  id="rememberme"
                  htmlFor="checkbox"
                >
                  Remember me
                </label>
              </div>
              <Link
                className="text-blue-500 font-semibold hover:underline"
                href={"/"}
              >
                Forgot Password?
              </Link>
            </div>

            <button
              className="rounded-lg px-3 py-2 border-[#d4d4d4] border-[1px] w-full bg-blue-500 text-white font-medium hover:bg-blue-700"
              type="submit"
            >
              Login
            </button>
            <div>
              Don't have an account yet?
              <Link
                className="text-blue-500 font-semibold hover:underline"
                href="/signup"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
