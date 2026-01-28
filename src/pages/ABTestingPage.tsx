import ABTestingSimulator from '@/components/ABTestingSimulator';

const ABTestingPage = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">A/B Testing</h1>
        <p className="text-muted-foreground">
          Simula esperimenti per testare varianti e misurare le conversioni.
        </p>
      </div>
      <ABTestingSimulator />
    </div>
  );
};

export default ABTestingPage;
