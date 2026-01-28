import { BookOpen, ArrowRight, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const IntroPage = () => {
  const sections = [
    {
      title: "Simulatore Ambiente",
      description: "Scopri come le app cambiano comportamento in Development, Staging e Production",
      url: "/simulator",
      icon: "🎮",
      color: "from-primary/20 to-accent/20"
    },
    {
      title: "Perché non Hardcodare",
      description: "Impara perché scrivere password e URL direttamente nel codice è pericoloso",
      url: "/why-not-hardcode",
      icon: "⚠️",
      color: "from-destructive/20 to-warning/20"
    },
    {
      title: "Feature Flags",
      description: "Come attivare/disattivare funzioni senza modificare il codice",
      url: "/feature-flags",
      icon: "🚩",
      color: "from-accent/20 to-success/20"
    },
    {
      title: "A/B Testing",
      description: "Testa versioni diverse della stessa funzione per vedere quale funziona meglio",
      url: "/ab-testing",
      icon: "🧪",
      color: "from-warning/20 to-primary/20"
    },
    {
      title: "Secrets Manager",
      description: "Gestisci password e chiavi API in modo sicuro",
      url: "/secrets",
      icon: "🔐",
      color: "from-success/20 to-primary/20"
    },
  ];

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Hero */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-4">
          <BookOpen className="w-4 h-4" />
          Guida Interattiva
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Benvenuto!</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Impara come le applicazioni professionali gestiscono configurazioni, 
          ambienti e funzionalità in modo sicuro e flessibile.
        </p>
      </div>

      {/* Intro per principianti */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-success/10 border border-primary/20">
        <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-primary" />
          Cosa imparerai?
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          Questa app ti insegna concetti fondamentali dello sviluppo software moderno. 
          Ogni sezione ha spiegazioni semplici con analogie della vita reale. <strong className="text-foreground">Nessuna esperienza richiesta!</strong>
        </p>
        <div className="grid sm:grid-cols-3 gap-3 text-sm">
          <div className="p-3 rounded-lg bg-background/50 border border-border">
            <span className="text-primary font-medium">🌍 Ambienti</span>
            <p className="text-xs text-muted-foreground mt-1">Perché esistono Development, Staging e Production</p>
          </div>
          <div className="p-3 rounded-lg bg-background/50 border border-border">
            <span className="text-accent font-medium">🚩 Feature Flags</span>
            <p className="text-xs text-muted-foreground mt-1">Come attivare/disattivare funzioni senza codice</p>
          </div>
          <div className="p-3 rounded-lg bg-background/50 border border-border">
            <span className="text-success font-medium">🔐 Sicurezza</span>
            <p className="text-xs text-muted-foreground mt-1">Come proteggere password e chiavi API</p>
          </div>
        </div>
      </div>

      {/* Quick navigation */}
      <div>
        <h2 className="text-xl font-semibold mb-4">📚 Inizia da qui</h2>
        <div className="grid gap-4">
          {sections.map((section) => (
            <Link
              key={section.url}
              to={section.url}
              className={`group p-5 rounded-xl bg-gradient-to-r ${section.color} border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.01]`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{section.icon}</span>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {section.description}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Suggerimento */}
      <div className="p-4 rounded-lg bg-accent/5 border border-accent/20 text-center">
        <p className="text-sm text-muted-foreground">
          💡 <strong className="text-foreground">Suggerimento:</strong> Usa il menu laterale per navigare tra le sezioni. 
          Ogni sezione è indipendente, ma ti consigliamo di seguire l'ordine per una comprensione completa!
        </p>
      </div>
    </div>
  );
};

export default IntroPage;
