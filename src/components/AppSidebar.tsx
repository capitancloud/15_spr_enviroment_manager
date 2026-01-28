import { 
  Play, 
  AlertTriangle, 
  Settings, 
  Flag, 
  GitBranch, 
  RefreshCw, 
  FlaskConical, 
  Terminal, 
  KeyRound,
  BookOpen,
  Home
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { 
    title: "Introduzione", 
    url: "/", 
    icon: Home,
    description: "Panoramica generale"
  },
  { 
    title: "Simulatore Ambiente", 
    url: "/simulator", 
    icon: Play,
    description: "Cambia ambiente in tempo reale"
  },
  { 
    title: "Perché non Hardcodare", 
    url: "/why-not-hardcode", 
    icon: AlertTriangle,
    description: "L'importanza delle variabili"
  },
  { 
    title: "Configurazione", 
    url: "/config", 
    icon: Settings,
    description: "Valori per ambiente"
  },
  { 
    title: "Feature Flags", 
    url: "/feature-flags", 
    icon: Flag,
    description: "Toggle delle funzionalità"
  },
  { 
    title: "Pipeline Ambienti", 
    url: "/environments", 
    icon: GitBranch,
    description: "Dev → Staging → Prod"
  },
  { 
    title: "CI/CD Pipeline", 
    url: "/cicd", 
    icon: RefreshCw,
    description: "Automazione del deploy"
  },
  { 
    title: "A/B Testing", 
    url: "/ab-testing", 
    icon: FlaskConical,
    description: "Esperimenti con varianti"
  },
  { 
    title: "Log Viewer", 
    url: "/logs", 
    icon: Terminal,
    description: "Monitoraggio in tempo reale"
  },
  { 
    title: "Secrets Manager", 
    url: "/secrets", 
    icon: KeyRound,
    description: "Gestione credenziali"
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50">
      <SidebarContent className="bg-sidebar">
        {/* Header */}
        <div className={`p-4 border-b border-border/50 ${collapsed ? 'px-2' : ''}`}>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/20">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-bold text-sm gradient-text">Environment Manager</h2>
                <p className="text-xs text-muted-foreground">Guida Interattiva</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? 'sr-only' : ''}>
            Sezioni
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={isActive(item.url)}
                    tooltip={collapsed ? item.title : undefined}
                  >
                    <NavLink 
                      to={item.url} 
                      end 
                      className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all hover:bg-muted/50"
                      activeClassName="bg-primary/10 text-primary border-l-2 border-primary"
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      {!collapsed && (
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-medium block truncate">{item.title}</span>
                          <span className="text-xs text-muted-foreground block truncate">{item.description}</span>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer info */}
        {!collapsed && (
          <div className="mt-auto p-4 border-t border-border/50">
            <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-xs text-muted-foreground">
                💡 <strong className="text-foreground">Suggerimento:</strong> Naviga tra le sezioni per imparare i concetti uno alla volta!
              </p>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
