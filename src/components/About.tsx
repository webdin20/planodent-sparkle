import { FileText, Users, Clock, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: FileText,
      title: 'Planuri vizuale interactive',
      description: 'Ilustrații grafice clare care prezintă fiecare etapă a tratamentului în detaliu'
    },
    {
      icon: Users,
      title: 'Proceduri, etape și costuri',
      description: 'Organizarea completă a tratamentului cu defalcarea costurilor pe etape'
    },
    {
      icon: Clock,
      title: 'Export și print instant',
      description: 'Generarea rapidă de documente pentru pacient în format PDF profesional'
    },
    {
      icon: TrendingUp,
      title: 'Economie de timp 60%',
      description: 'Automatizarea procesului de creare a planurilor reduce timpul cu peste o oră'
    }
  ];

  return (
    <section id="despre" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Despre aplicația Planodent
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Planodent transformă modul în care comunici cu pacienții prin planuri de tratament ilustrate grafic, 
            care prezintă clar fiecare procedură, etapă și cost. Organizarea profesională și prezentarea modernă 
            îmbunătățesc semnificativ eficiența cabinetului și încrederea pacienților în decizia de tratament.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="medical-card p-6 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional info section */}
        <div className="mt-16 medical-card p-8 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                De ce să alegi Planodent?
              </h3>
              <p className="text-muted-foreground mb-4">
                Planodent nu este doar un instrument de creare a planurilor - este soluția completă 
                pentru îmbunătățirea comunicării cu pacienții și creșterea ratei de acceptare a tratamentelor.
              </p>
              <p className="text-muted-foreground">
                Prin vizualizarea clară a procedurilor și costurilor, pacienții înțeleg mai bine valoarea 
                tratamentului și sunt mai dispuși să accepte planul propus.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">dintre medici raportează o comunicare îmbunătățită cu pacienții</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;