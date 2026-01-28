import ConfigExplainer from '@/components/ConfigExplainer';

const ConfigPage = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Configurazione</h1>
        <p className="text-muted-foreground">
          Visualizza i valori di configurazione caricati per l'ambiente corrente.
        </p>
      </div>
      <ConfigExplainer />
    </div>
  );
};

export default ConfigPage;
