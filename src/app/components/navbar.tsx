import Link from "next/link";

export default function Navbar() {
  return (
    <main>
      <nav>
        <Link className="px-1" href={"/"}>
          Home
        </Link>
        <Link className="px-1" href={"/profile"}>
          Profile
        </Link>
        <Link className="px-1" href={"/login"}>
          Login
        </Link>
        <Link className="px-1" href={"/signup"}>
          Signup
        </Link>
      </nav>
    </main>
  );
}
