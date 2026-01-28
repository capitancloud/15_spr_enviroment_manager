import { ShieldAlert, GitBranch, Wrench, Users, HelpCircle, Lightbulb, AlertTriangle } from 'lucide-react';

const WhyNotHardcode = () => {
  const reasons = [
    {
      icon: ShieldAlert,
      title: 'Sicurezza',
      description: 'Le chiavi API nel codice sono visibili a chiunque abbia accesso al repository o al bundle JS.',
      example: 'È come scrivere la password del WiFi su un cartello in strada!',
      color: 'destructive',
    },
    {
      icon: GitBranch,
      title: 'Flessibilità',
      description: 'Lo stesso codice deve funzionare in development, staging e production con configurazioni diverse.',
      example: 'Come usare lo stesso navigatore GPS per viaggi diversi.',
      color: 'primary',
    },
    {
      icon: Wrench,
      title: 'Manutenibilità',
      description: 'Cambiare un URL o una chiave richiede solo modificare una variabile, non ricompilare.',
      example: 'È come cambiare il numero di telefono senza ristampare i biglietti da visita.',
      color: 'warning',
    },
    {
      icon: Users,
      title: 'Collaborazione',
      description: 'Ogni sviluppatore può avere configurazioni locali diverse senza conflitti.',
      example: 'Ogni cuoco può regolare il sale a modo suo senza cambiare la ricetta.',
      color: 'success',
    },
  ];

  return (
    <div className="glass-card p-6 animate-fade-up">
      {/* Header con spiegazione per principianti */}
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 rounded-lg bg-destructive/20 flex-shrink-0">
          <AlertTriangle className="w-5 h-5 text-destructive" />
        </div>
        <div>
          <h2 className="text-xl font-semibold gradient-text mb-1">
            Perché non hardcodare i valori?
          </h2>
          <p className="text-sm text-muted-foreground">
            Comprendere l'importanza delle variabili d'ambiente
          </p>
        </div>
      </div>

      {/* Spiegazione per principianti */}
      <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-6">
        <div className="flex gap-3">
          <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-foreground mb-2 flex items-center gap-2">
              Cosa significa "hardcodare"?
              <HelpCircle className="w-4 h-4 text-muted-foreground" />
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              <strong className="text-foreground">"Hardcodare"</strong> significa scrivere valori fissi direttamente nel codice sorgente, 
              invece di usare variabili configurabili. 
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                <span className="text-destructive font-medium">❌ Hardcodato:</span>
                <code className="block mt-1 font-mono text-xs text-destructive/80">
                  const apiKey = "abc123secret"
                </code>
              </div>
              <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                <span className="text-success font-medium">✓ Configurabile:</span>
                <code className="block mt-1 font-mono text-xs text-success/80">
                  const apiKey = process.env.API_KEY
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* I 4 motivi principali */}
      <div className="grid sm:grid-cols-2 gap-4">
        {reasons.map((reason, index) => (
          <div
            key={reason.title}
            className="p-4 rounded-lg bg-muted/30 border border-border hover:border-primary/30 transition-all duration-300 group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`p-2 rounded-lg bg-${reason.color}/20 w-fit mb-3 group-hover:glow-${reason.color} transition-shadow`}>
              <reason.icon className={`w-5 h-5 text-${reason.color}`} />
            </div>
            <h3 className="font-medium text-foreground mb-1">{reason.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{reason.description}</p>
            {/* Analogia per principianti */}
            <div className="text-xs text-primary/80 italic flex items-start gap-1.5 mt-2 pt-2 border-t border-border/50">
              <span>💡</span>
              <span>{reason.example}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Riepilogo */}
      <div className="mt-6 p-4 rounded-lg bg-accent/5 border border-accent/20">
        <p className="text-sm text-muted-foreground">
          <span className="text-accent font-medium">📝 In sintesi:</span> Le variabili d'ambiente sono come 
          "impostazioni" separate dal codice. Permettono di cambiare la configurazione dell'app 
          (URL, chiavi, opzioni) senza toccare il codice sorgente. Fondamentale per sicurezza e flessibilità!
        </p>
      </div>
    </div>
  );
};

export default WhyNotHardcode;
