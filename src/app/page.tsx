"use client";

import { Header } from "@/components/layout/header";
import { WelcomeSection } from "@/components/section/welcome-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useEffect, useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

const formSchema = z.object({
  message: z.string(),
});

type State = {
  newConversation: boolean;
};

type Action = { type: "update"; payload: boolean };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "update":
      return { ...state, newConversation: action.payload };
    default:
      return state;
  }
};

export default function Home() {
  // Estado inicial fixo
  const [state, dispatch] = useReducer(reducer, { newConversation: true });
  const [messageContent, setMessageContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

  // Atualiza o estado com base no localStorage apenas no cliente
  useEffect(() => {
    const savedState = localStorage.getItem("newConversation");
    if (savedState) {
      dispatch({
        type: "update",
        payload: JSON.parse(savedState).newConversation,
      });
    }
    setIsLoading(false); // Finaliza o carregamento
  }, []);

  // Salva o estado no localStorage quando ele muda
  useEffect(() => {
    localStorage.setItem("newConversation", JSON.stringify(state));
  }, [state]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  function startConversation() {
    dispatch({ type: "update", payload: false });
    setMessageContent("");
  }

  // Enquanto está carregando, exibe um estado de carregamento
  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="grid h-[700px] grid-rows-[min-content_1fr_min-content] gap-4 p-5 py-4 md:h-[600px] md:px-10 lg:h-[600px] lg:px-20">
      <Header newConversation={state.newConversation} dispatch={dispatch} />
      <main className="flex items-center">
        {state.newConversation ? (
          <WelcomeSection />
        ) : (
          <div>
            <div>Tudo em cima!</div>
          </div>
        )}
      </main>
      <footer>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(startConversation)}
            className="flex items-center gap-2"
            autoComplete="off"
          >
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="text"
                      autoComplete="off"
                      placeholder="Enviar mensagem"
                      className="p-5"
                      {...field}
                      onChange={(e) => setMessageContent(e.target.value)}
                      value={messageContent}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className="bg-primary"
              disabled={messageContent.length <= 0}
            >
              <Send />
            </Button>
          </form>
        </Form>
      </footer>
    </div>
  );
}
