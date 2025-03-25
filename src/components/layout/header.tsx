import { CircleUser, PenSquare } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../theme/mode-toggle";
import { Button } from "../ui/button";
import type { Dispatch } from "react";

interface headerProps {
  newConversation: boolean;
  dispatch: Dispatch<{ type: "update"; payload: boolean }>;
}

export function Header({ newConversation, dispatch }: headerProps) {
  return (
    <header className="flex items-center justify-between">
      <Link
        href={"/"}
        className="text-foreground font-sans text-2xl font-semibold"
      >
        Hanna
      </Link>
      <div className="flex items-center gap-2">
        <Button
          className="text-muted-foreground"
          variant={"outline"}
          onClick={() => dispatch({ type: "update", payload: true })}
        >
          <PenSquare />
        </Button>
        <ModeToggle />
        <CircleUser className="text-foreground size-8" />
      </div>
    </header>
  );
}
