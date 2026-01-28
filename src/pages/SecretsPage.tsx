import SecretsManager from '@/components/SecretsManager';

const SecretsPage = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Secrets Manager</h1>
        <p className="text-muted-foreground">
          Gestisci in modo sicuro credenziali e chiavi API per ogni ambiente.
        </p>
      </div>
      <SecretsManager />
    </div>
  );
};

export default SecretsPage;
