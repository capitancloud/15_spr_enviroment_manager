import EnvironmentSimulator from '@/components/EnvironmentSimulator';

const SimulatorPage = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Simulatore Ambiente</h1>
        <p className="text-muted-foreground">
          Cambia ambiente e osserva come cambiano le configurazioni in tempo reale.
        </p>
      </div>
      <EnvironmentSimulator />
    </div>
  );
};

export default SimulatorPage;
