import { CircleUser } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link
        href={"/"}
        className="text-foreground font-sans text-2xl font-semibold"
      >
        Hanna
      </Link>
      <div>
        <CircleUser className="text-foreground size-8" />
      </div>
    </header>
  );
}
