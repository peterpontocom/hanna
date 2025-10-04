import { BookA } from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";
import { Button } from "./ui/button";

export function EmptyDashboard() {
  return (
    <Empty className="border border-dashed bg-muted border-zinc-300 dark:border-zinc-600">
      <EmptyHeader>
        <EmptyMedia variant={"icon"}>
          <BookA />
        </EmptyMedia>
        <EmptyTitle>No Classes</EmptyTitle>
        <EmptyDescription>
          You haven't created any classes yet. Click below to add your first
          class.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <a href="/protected/class">
          <Button>Add new class</Button>
        </a>
      </EmptyContent>
    </Empty>
  );
}
