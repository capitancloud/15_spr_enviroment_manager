import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Hash SHA-256 del codice di accesso: gT6@Qp!R1Z$uN9e#X^cD2sL%hY&vJm*W+K7B~A=F4q-Uo_rP)k8S]3C0{I?E
const VALID_CODE_HASH = '8f9b5c2d7a1e4f3b6c8d9e0a2b5c7d4e1f6a3b8c5d2e9f0a7b4c1d8e5f2a9b6';

// Funzione per calcolare hash SHA-256
async function hashCode(code: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(code);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// Pre-calcoliamo l'hash del codice valido all'avvio
let validHash: string | null = null;

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (code: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verifica se l'utente era già autenticato
    const storedAuth = sessionStorage.getItem('env-manager-auth');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
    
    // Pre-calcola l'hash del codice valido
    hashCode('gT6@Qp!R1Z$uN9e#X^cD2sL%hY&vJm*W+K7B~A=F4q-Uo_rP)k8S]3C0{I?E').then(hash => {
      validHash = hash;
      setIsLoading(false);
    });
  }, []);

  const login = async (code: string): Promise<boolean> => {
    try {
      const inputHash = await hashCode(code);
      
      if (inputHash === validHash) {
        setIsAuthenticated(true);
        sessionStorage.setItem('env-manager-auth', 'true');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Errore durante la verifica del codice:', error);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('env-manager-auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve essere usato dentro un AuthProvider');
  }
  return context;
}
