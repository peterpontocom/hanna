export interface MessageProps {
  id: string;
  content: string;
}

export function Message({ content }: MessageProps) {
  return (
    <div className="bg-secondary text-foreground mb-4 justify-self-end rounded-lg p-4 lg:max-w-[50%]">
      {content}
    </div>
  );
}
