import EnvironmentDiagram from '@/components/EnvironmentDiagram';

const EnvironmentsPage = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Pipeline degli Ambienti</h1>
        <p className="text-muted-foreground">
          Scopri il flusso tipico dal development alla production.
        </p>
      </div>
      <EnvironmentDiagram />
    </div>
  );
};

export default EnvironmentsPage;
