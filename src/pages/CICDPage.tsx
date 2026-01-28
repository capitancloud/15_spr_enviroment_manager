import CICDDiagram from '@/components/CICDDiagram';

const CICDPage = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">CI/CD Pipeline</h1>
        <p className="text-muted-foreground">
          Visualizza le fasi di automazione dal commit al deployment.
        </p>
      </div>
      <CICDDiagram />
    </div>
  );
};

export default CICDPage;
