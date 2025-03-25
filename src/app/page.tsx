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
import { ChatSection } from "@/components/section/chat-section";
import type { MessageProps } from "@/components/ui/message";

const formSchema = z.object({
  message: z.string(),
});

type FormData = z.infer<typeof formSchema>;
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
  const messages = localStorage.getItem("messages")
    ? (JSON.parse(localStorage.getItem("messages")!) as MessageProps[])
    : [];

  const [state, dispatch] = useReducer(reducer, { newConversation: true });
  const [chatMessages, setChatMessages] = useState<MessageProps[]>(messages);
  const [messageContent, setMessageContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedState = localStorage.getItem("newConversation");
    if (savedState) {
      dispatch({
        type: "update",
        payload: JSON.parse(savedState).newConversation,
      });
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("newConversation", JSON.stringify(state));
  }, [state]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);
  function startConversation() {
    dispatch({ type: "update", payload: false });
    if (!localStorage.getItem("messages")) {
      localStorage.setItem("messages", JSON.stringify([]));
    } else {
      setChatMessages((state) => [
        ...state,
        { id: String(chatMessages.length + 1), content: messageContent },
      ]);
    }

    setMessageContent("");
  }

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="grid h-[700px] grid-rows-[min-content_1fr_min-content] gap-4 p-5 py-4 md:h-[600px] md:px-10 lg:h-[600px] lg:px-20">
      <Header newConversation={state.newConversation} dispatch={dispatch} />
      <main className="">
        {state.newConversation ? (
          <WelcomeSection />
        ) : (
          <ChatSection messages={chatMessages} />
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
