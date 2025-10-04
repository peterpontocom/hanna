import { createClient } from "@/lib/client";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/protected/");
  } else {
    redirect("/auth/login");
  }
}
