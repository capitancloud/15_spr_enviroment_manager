import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { EnvironmentProvider } from "@/contexts/EnvironmentContext";
import { useAuth } from "@/contexts/AuthContext";
import EnvironmentBadge from "@/components/EnvironmentBadge";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Layout() {
  const { logout } = useAuth();

  return (
    <EnvironmentProvider>
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          
          <div className="flex-1 flex flex-col min-w-0">
            {/* Header */}
            <header className="h-14 flex items-center justify-between border-b border-border/50 px-4 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <SidebarTrigger />
                <h1 className="text-lg font-semibold gradient-text hidden sm:block">
                  Environment Manager
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <EnvironmentBadge />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={logout}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <LogOut className="w-4 h-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Esci</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </header>

            {/* Main content */}
            <main className="flex-1 overflow-auto">
              <div className="container mx-auto px-4 py-6 max-w-5xl">
                <Outlet />
              </div>
            </main>

            {/* Footer */}
            <footer className="py-4 px-4 border-t border-border/50 text-center text-sm text-muted-foreground">
              <p>
                💡 Questo progetto è un esercizio didattico. In produzione, usa strumenti come{' '}
                <a href="https://www.dotenv.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  dotenv
                </a>{' '}
                o servizi come{' '}
                <a href="https://launchdarkly.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  LaunchDarkly
                </a>
              </p>
            </footer>
          </div>
        </div>
      </SidebarProvider>
    </EnvironmentProvider>
  );
}
