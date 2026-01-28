import LogViewer from '@/components/LogViewer';

const LogsPage = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Log Viewer</h1>
        <p className="text-muted-foreground">
          Monitora i log in tempo reale, filtrati in base all'ambiente.
        </p>
      </div>
      <LogViewer />
    </div>
  );
};

export default LogsPage;
