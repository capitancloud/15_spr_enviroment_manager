import WhyNotHardcode from '@/components/WhyNotHardcode';
import ConfigExplainer from '@/components/ConfigExplainer';

const WhyNotHardcodePage = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Perché non Hardcodare</h1>
        <p className="text-muted-foreground">
          Scopri perché scrivere valori fissi nel codice è una cattiva pratica.
        </p>
      </div>
      <WhyNotHardcode />
      <ConfigExplainer />
    </div>
  );
};

export default WhyNotHardcodePage;
