import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <header className="bg-black text-white px-6 py-4">
      <nav className="flex space-x-6">
        <Link
          href="/"
          className={pathname === "/" ? "underline text-blue-400" : ""}
        >
          Home
        </Link>
        <Link
          href="/users"
          className={pathname === "/users" ? "underline text-blue-400" : ""}
        >
          Users
        </Link>
        <Link
          href="/posts"
          className={pathname === "/posts" ? "underline text-blue-400" : ""}
        >
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
