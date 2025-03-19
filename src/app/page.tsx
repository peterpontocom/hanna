import { Header } from "@/components/layout/header";
import { WelcomeSection } from "@/components/layout/welcome-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function Home() {
  return (
    <div className="grid h-[700px] grid-rows-[min-content_1fr_min-content] gap-4 p-5 py-4 md:h-[600px] md:px-10 lg:h-[600px] lg:px-20">
      <Header />
      <main className="flex items-center">
        <WelcomeSection />
      </main>
      <footer className="">
        <div className="flex items-center gap-2">
          <Input placeholder="Enviar mensagem" className="p-5" />
          <Button className="bg-primary">
            <Send />
          </Button>
        </div>
      </footer>
    </div>
  );
}
