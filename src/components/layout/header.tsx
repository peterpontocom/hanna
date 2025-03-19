import { CircleUser } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../theme/mode-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link
        href={"/"}
        className="text-foreground font-sans text-2xl font-semibold"
      >
        Hanna
      </Link>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <CircleUser className="text-foreground size-8" />
      </div>
    </header>
  );
}
