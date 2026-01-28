import Header from '@/components/Header';
import WhyNotHardcode from '@/components/WhyNotHardcode';
import ConfigExplainer from '@/components/ConfigExplainer';
import FeatureFlagsPanel from '@/components/FeatureFlagsPanel';
import EnvironmentDiagram from '@/components/EnvironmentDiagram';
import EnvironmentSimulator from '@/components/EnvironmentSimulator';
import CICDDiagram from '@/components/CICDDiagram';
import ABTestingSimulator from '@/components/ABTestingSimulator';
import LogViewer from '@/components/LogViewer';
import SecretsManager from '@/components/SecretsManager';
import { EnvironmentProvider } from '@/contexts/EnvironmentContext';

const Index = () => {
  return (
    <EnvironmentProvider>
      <div className="min-h-screen">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Hero section */}
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Environment Manager</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Un'applicazione didattica per comprendere la gestione degli ambienti, 
              le variabili di configurazione e i feature flags nello sviluppo software.
            </p>
            
            {/* Intro per principianti */}
            <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-success/10 border border-primary/20 text-left">
              <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                👋 Nuovo a questi concetti?
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Questa app ti insegna come le applicazioni professionali gestiscono le <strong className="text-foreground">configurazioni</strong>. 
                Ogni sezione ha spiegazioni semplici con analogie della vita reale. Nessuna esperienza richiesta!
              </p>
              <div className="grid sm:grid-cols-3 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-background/50 border border-border">
                  <span className="text-primary font-medium">🌍 Ambienti</span>
                  <p className="text-xs text-muted-foreground mt-1">Perché esistono Development, Staging e Production</p>
                </div>
                <div className="p-3 rounded-lg bg-background/50 border border-border">
                  <span className="text-accent font-medium">🚩 Feature Flags</span>
                  <p className="text-xs text-muted-foreground mt-1">Come attivare/disattivare funzioni senza toccare il codice</p>
                </div>
                <div className="p-3 rounded-lg bg-background/50 border border-border">
                  <span className="text-success font-medium">🔐 Sicurezza</span>
                  <p className="text-xs text-muted-foreground mt-1">Come proteggere password e chiavi API</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid gap-6 lg:gap-8">
            {/* Environment Simulator - NEW */}
            <EnvironmentSimulator />
            
            {/* Why not hardcode */}
            <WhyNotHardcode />
            
            {/* Two column layout for config and flags */}
            <div className="grid lg:grid-cols-2 gap-6">
              <ConfigExplainer />
              <FeatureFlagsPanel />
            </div>
            
            {/* Environment diagram - full width */}
            <EnvironmentDiagram />
            
            {/* CI/CD Pipeline Diagram */}
            <CICDDiagram />
            
            {/* A/B Testing Simulator */}
            <ABTestingSimulator />
            
            {/* Log Viewer */}
            <LogViewer />
            
            {/* Secrets Manager - NEW */}
            <SecretsManager />
          </div>

          {/* Footer note */}
          <footer className="mt-12 text-center text-sm text-muted-foreground animate-fade-up">
            <p>
              💡 Questo progetto è un esercizio didattico. In produzione, usa strumenti come{' '}
              <a href="https://www.dotenv.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                dotenv
              </a>{' '}
              o servizi come{' '}
              <a href="https://launchdarkly.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                LaunchDarkly
              </a>{' '}
              per la gestione avanzata.
            </p>
          </footer>
        </main>
      </div>
    </EnvironmentProvider>
  );
};

export default Index;
