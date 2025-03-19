import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function Home() {
  return (
    <div className="grid h-[700px] grid-rows-[min-content_1fr_min-content] gap-4 p-5 py-4 md:h-[600px] md:px-10 lg:h-[600px] lg:px-20">
      <Header />
      <main className="flex items-center">
        <h1 className="w-full self-center text-center text-xl font-medium lg:text-2xl">
          <span className="font-semibold">Hey, Peter</span>
          <br />
          <span className="text-muted-foreground">Como posso ajudar hoje?</span>
        </h1>
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
