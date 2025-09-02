import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="acasa" className="section-padding bg-gradient-to-br from-background via-medical-light to-medical-gray min-h-screen flex items-center">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Planuri de tratament <span className="text-primary">clare și moderne</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Creează planuri ilustrate grafic care îmbunătățesc încrederea pacienților și cresc rata de acceptare a tratamentelor cu până la 40%.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('pret')}
                className="medical-button flex items-center justify-center gap-2 text-lg"
              >
                Încearcă gratuit 7 zile
                <ArrowRight size={20} />
              </button>
              
              <button
                onClick={() => scrollToSection('demo')}
                className="medical-button-secondary flex items-center justify-center gap-2 text-lg"
              >
                <Play size={20} />
                Vezi demo
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Încrederea profesională a peste 500+ cabinete stomatologice</p>
              <div className="flex items-center justify-center lg:justify-start space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Cabinete</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">40%</div>
                  <div className="text-sm text-muted-foreground">Rată acceptare</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">7 zile</div>
                  <div className="text-sm text-muted-foreground">Test gratuit</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="medical-card p-8 bg-gradient-to-br from-white to-medical-light">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground font-medium">Mockup aplicație Planodent</p>
                  <p className="text-sm text-muted-foreground mt-2">Plan de tratament interactiv</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;