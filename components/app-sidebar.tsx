import {
  BookUser,
  BotMessageSquare,
  LayoutDashboard,
  Send,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HannaLogo } from "./hanna-logo";

const routes = [
  {
    title: "Dashboard",
    url: "/protected",
    icon: LayoutDashboard,
  },
  {
    title: "Class",
    url: "/protected/class",
    icon: BookUser,
  },
  {
    title: "Chat",
    url: "/protected/chat",
    icon: Send,
  },
  {
    title: "Assistant",
    url: "/protected/assistant",
    icon: BotMessageSquare,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <HannaLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map((route) => (
                <SidebarMenuItem key={route.title}>
                  <SidebarMenuButton asChild>
                    <a href={route.url}>
                      <route.icon />
                      <span>{route.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex gap-1 p-3 bg-muted rounded-lg">
          <Avatar className="size-9">
            <AvatarImage src="https://github.com/peterpontocom.png" />
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-sm font-semibold">Peter Pontocom</div>
            <div className="text-xs font-medium text-muted-foreground">
              willpontocom07@gmail.com
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
