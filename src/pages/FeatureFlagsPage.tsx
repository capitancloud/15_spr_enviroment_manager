import FeatureFlagsPanel from '@/components/FeatureFlagsPanel';

const FeatureFlagsPage = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Feature Flags</h1>
        <p className="text-muted-foreground">
          Gestisci le funzionalità dell'app con toggle configurabili per ambiente.
        </p>
      </div>
      <FeatureFlagsPanel />
    </div>
  );
};

export default FeatureFlagsPage;
