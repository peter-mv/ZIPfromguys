import Link from "next/link";
import DropDownNav from "./DropDownNav";

function NavigationHeader() {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center justify-between gap-4 font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <DropDownNav />
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationHeader;
