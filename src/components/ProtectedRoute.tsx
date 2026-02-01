import { ReactNode } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import LoginPage from '@/pages/LoginPage';

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();

  // Mostra loading mentre verifichiamo l'autenticazione
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          <p className="text-muted-foreground">Caricamento...</p>
        </div>
      </div>
    );
  }

  // Se non autenticato, mostra la pagina di login
  if (!isAuthenticated) {
    return <LoginPage />;
  }

  // Se autenticato, mostra il contenuto protetto
  return <>{children}</>;
}
