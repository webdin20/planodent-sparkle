import { TrendingUp, Award, Settings, Handshake, Clock, Star } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Rată mai mare de acceptare',
      description: 'Planurile vizuale convingătoare cresc acceptarea tratamentelor cu până la 40%'
    },
    {
      icon: Award,
      title: 'Imagine profesională',
      description: 'Prezentarea modernă și organizată consolidează încrederea în expertiza cabinetului'
    },
    {
      icon: Settings,
      title: 'Standardizare procese',
      description: 'Templat-uri uniformizate asigură consistența în toate planurile de tratament'
    },
    {
      icon: Handshake,
      title: 'Transparență completă',
      description: 'Defalcarea clară a costurilor elimină surprizele și construiește încrederea'
    },
    {
      icon: Clock,
      title: 'Timp economisit 60%',
      description: 'Automatizarea reduce timpul de pregătire a planurilor de la 2 ore la 45 minute'
    },
    {
      icon: Star,
      title: 'Diferențiere competitivă',
      description: 'Standarde superioare de prezentare te poziționează ca lider în domeniu'
    }
  ];

  return (
    <section id="beneficii" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Beneficii pentru cabinetul tău
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Planodent nu doar îmbunătățește comunicarea - transformă modul în care pacienții percep 
            profesionalismul cabinetului și crește semnificativ rata de conversie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="medical-card p-6 group hover:scale-105 transition-all duration-300 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to action section */}
        <div className="mt-16 text-center">
          <div className="medical-card p-8 bg-gradient-to-br from-primary/5 to-primary/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Începe transformarea cabinetului tău astăzi
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Alătură-te celor peste 500 de cabinete care au îmbunătățit deja experiența pacienților 
              și au crescut profitabilitatea prin planuri de tratament profesionale.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('pret');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="medical-button text-lg"
            >
              Testează gratuit 7 zile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;