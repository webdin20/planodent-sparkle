import { Award, Users, Newspaper } from 'lucide-react';

const Partners = () => {
  return (
    <section id="parteneri" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Partener media
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sprijinul media și recunoașterea profesională consolidează încrederea în soluțiile 
            Planodent pentru comunitatea stomatologică din România.
          </p>
        </div>

        {/* Main partner */}
        <div className="medical-card p-8 bg-gradient-to-r from-primary/5 to-primary/10 max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Partner logo area */}
            <div className="text-center md:text-left">
              <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center mx-auto md:mx-0 mb-4">
                <Newspaper className="w-12 h-12 text-primary" />
              </div>
              <div className="text-sm text-muted-foreground">Logo placeholder</div>
            </div>

            {/* Partner info */}
            <div className="md:col-span-2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Actualități Stomatologice
              </h3>
              <p className="text-lg text-primary font-semibold mb-4">Partener media oficial</p>
              <p className="text-muted-foreground leading-relaxed">
                Parteneriatul cu Actualități Stomatologice confirmă calitatea și relevanța 
                soluțiilor Planodent pentru comunitatea medicală stomatologică din România, 
                oferind credibilitate și validare profesională pentru inovațiile noastre.
              </p>
            </div>
          </div>
        </div>

        {/* Additional credibility indicators */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="medical-card p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">500+</h4>
            <p className="text-muted-foreground text-sm">Cabinete partenere în toată România</p>
          </div>

          <div className="medical-card p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Certificat</h4>
            <p className="text-muted-foreground text-sm">Soluție aprobată de specialiști</p>
          </div>

          <div className="medical-card p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">🏆</div>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Top rated</h4>
            <p className="text-muted-foreground text-sm">Cel mai apreciat soft pentru planuri</p>
          </div>
        </div>

        {/* Professional endorsement */}
        <div className="mt-16 medical-card p-8 bg-gradient-to-br from-primary/5 to-medical-primary-dark/10 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              "Planodent reprezintă o evoluție necesară în comunicarea medic-pacient"
            </h3>
            <p className="text-muted-foreground mb-6">
              Redacția Actualități Stomatologice recomandă Planodent ca soluția standard 
              pentru modernizarea practicii stomatologice și îmbunătățirea experienței pacienților.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Newspaper className="w-4 h-4" />
              <span>Editorial Actualități Stomatologice 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;