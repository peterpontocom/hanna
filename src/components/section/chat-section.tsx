import { Message, type MessageProps } from "../ui/message";

interface ChatSectionProps {
  messages: MessageProps[];
}

export function ChatSection({ messages }: ChatSectionProps) {
  return (
    <div className="mt-4">
      {messages.map((message) => (
        <Message key={message.id} id={message.id} content={message.content} />
      ))}
    </div>
  );
}
