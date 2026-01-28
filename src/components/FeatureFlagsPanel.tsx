import { useMemo } from 'react';
import { featureFlags } from '@/config/featureFlags';
import { useEnvironment } from '@/contexts/EnvironmentContext';
import { User, Flag, Users, Calendar, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const FeatureFlagsPanel = () => {
  const { currentEnvironment } = useEnvironment();
  
  // Memoizza i flag con lo stato corrente per evitare ricalcoli ad ogni render
  const flags = useMemo(() => {
    return featureFlags.map(flag => ({
      ...flag,
      currentlyEnabled: flag.enabled[currentEnvironment],
    }));
  }, [currentEnvironment]);

  return (
    <div className="glass-card p-6 animate-fade-up-delay-2">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-accent/20 glow-accent">
          <Flag className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h2 className="text-xl font-semibold gradient-text">Feature Flags</h2>
          <p className="text-sm text-muted-foreground">
            Stato in ambiente: <span className="text-primary">{currentEnvironment}</span>
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {flags.map((flag, index) => (
          <div
            key={flag.id}
            className="glass-card p-4 transition-all duration-300 hover:scale-[1.02]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-foreground">{flag.name}</h3>
                  <Badge
                    variant={flag.currentlyEnabled ? 'default' : 'secondary'}
                    className={flag.currentlyEnabled ? 'bg-success/20 text-success border-success/30' : ''}
                  >
                    {flag.currentlyEnabled ? 'Attivo' : 'Disattivato'}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{flag.description}</p>
                
                {/* Stato per ambiente */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {Object.entries(flag.enabled).map(([env, enabled]) => (
                    <span
                      key={env}
                      className={`text-xs px-2 py-1 rounded-md ${
                        enabled
                          ? 'bg-success/10 text-success border border-success/20'
                          : 'bg-muted text-muted-foreground border border-border'
                      }`}
                    >
                      {env}: {enabled ? '✓' : '✗'}
                    </span>
                  ))}
                </div>

                {/* Rollout percentage */}
                {flag.rolloutPercentage !== undefined && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>Rollout: {flag.rolloutPercentage}%</span>
                    <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden max-w-32">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                        style={{ width: `${flag.rolloutPercentage}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Metadata */}
                {flag.metadata && (
                  <div className="flex flex-wrap gap-3 mt-3 text-xs text-muted-foreground">
                    {flag.metadata.owner && (
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {flag.metadata.owner}
                      </span>
                    )}
                    {flag.metadata.createdAt && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {flag.metadata.createdAt}
                      </span>
                    )}
                    {flag.metadata.jiraTicket && (
                      <span className="flex items-center gap-1 text-primary">
                        <ExternalLink className="w-3 h-3" />
                        {flag.metadata.jiraTicket}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Toggle visivo */}
              <div
                className={`w-12 h-6 rounded-full p-1 transition-all duration-300 ${
                  flag.currentlyEnabled
                    ? 'bg-success glow-success'
                    : 'bg-muted'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-foreground transition-all duration-300 ${
                    flag.currentlyEnabled ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Spiegazione per principianti */}
      <div className="mt-6 space-y-4">
        {/* Cos'è un Feature Flag */}
        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            🤔 Cosa sono i Feature Flags?
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            I <strong className="text-foreground">Feature Flags</strong> (o "interruttori di funzionalità") sono come 
            degli <em>interruttori della luce</em> per le funzioni dell'app. Permettono di accendere o spegnere 
            una feature senza modificare il codice!
          </p>
          <div className="grid gap-2 text-sm">
            <div className="flex items-start gap-2">
              <span>🎯</span>
              <span className="text-muted-foreground">
                <strong className="text-foreground">Rilascio graduale:</strong> Attivi una nuova feature solo per il 10% degli utenti, poi 50%, poi 100%
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span>🔴</span>
              <span className="text-muted-foreground">
                <strong className="text-foreground">Kill Switch:</strong> Se una feature causa problemi, la disattivi istantaneamente
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span>🧪</span>
              <span className="text-muted-foreground">
                <strong className="text-foreground">A/B Testing:</strong> Mostri versioni diverse a utenti diversi per vedere quale funziona meglio
              </span>
            </div>
          </div>
        </div>

        {/* Analogia */}
        <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
          <p className="text-sm text-muted-foreground">
            <span className="text-accent font-medium">💡 Analogia:</span> Pensa a un ristorante che vuole testare un nuovo piatto. 
            Invece di aggiungerlo al menu per tutti, lo propone prima solo ad alcuni tavoli (rollout %). 
            Se piace, lo estende a tutti. Se no, lo toglie senza aver stampato nuovi menu!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureFlagsPanel;
