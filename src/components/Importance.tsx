import { Eye, Heart, Zap } from 'lucide-react';

const Importance = () => {
  const benefits = [
    {
      icon: Eye,
      title: 'Claritate',
      description: 'Pacienții văd exact ce presupune tratamentul și de ce este necesar'
    },
    {
      icon: Heart,
      title: 'Încredere',
      description: 'Transparența costurilor și procedurilor construiește încrederea în medic'
    },
    {
      icon: Zap,
      title: 'Eficiență',
      description: 'Decizia informată reduce întârzierile și optimizează fluxul de lucru'
    }
  ];

  return (
    <section id="importanta" className="section-padding bg-medical-light">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Importanța unui plan de tratament clar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un plan de tratament bine structurat și vizual nu doar informează pacientul - 
            îl face să se simtă în siguranță și să aibă încredere în decizia sa. 
            Aceasta duce la o rată de acceptare cu 40% mai mare și la o experiență pozitivă pentru ambele părți.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="medical-card p-8 text-center group hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Statistics section */}
        <div className="medical-card p-8 bg-gradient-to-r from-primary to-medical-primary-dark text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-primary-foreground/90">Creșterea ratei de acceptare</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-primary-foreground/90">Reducerea întrebărilor post-consultație</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">92%</div>
              <div className="text-primary-foreground/90">Satisfacția pacienților îmbunătățită</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Importance;