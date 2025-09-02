import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const features = [
    'Acces complet la toate funcționalitățile',
    'Generare nelimitată de planuri cu ilustrații',
    'Template-uri personalizabile pentru fiecare specialitate',
    'Export PDF profesional cu logo-ul cabinetului',
    'Actualizări automate și îmbunătățiri continue',
    'Suport tehnic de bază prin email'
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pret" className="section-padding bg-medical-light">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Investiție simplă, rezultate garantate
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un singur abonament care îți oferă accesul complet la toate funcționalitățile necesare 
            pentru a crea planuri de tratament profesionale.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="medical-card p-8 relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-0 right-8 bg-primary text-white px-4 py-1 text-sm font-medium rounded-b-lg">
              Cel mai popular
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Planodent</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-5xl font-bold text-primary">250</span>
                <div className="text-left">
                  <div className="text-lg font-semibold text-foreground">RON</div>
                  <div className="text-muted-foreground">/ lună</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Testează gratuit 7 zile
              </div>
            </div>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="w-full medical-button flex items-center justify-center gap-2 text-lg mb-4"
            >
              Abonează-te acum
              <ArrowRight size={20} />
            </button>

            <p className="text-sm text-muted-foreground text-center">
              Fără perioadă minimă. Poți anula oricând.
            </p>
          </div>
        </div>

        {/* Additional benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">🚀</div>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Start rapid</h4>
            <p className="text-muted-foreground text-sm">Configurare în sub 5 minute</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">💳</div>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Fără angajamente</h4>
            <p className="text-muted-foreground text-sm">Anulare oricând, fără penalități</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">⚡</div>
            </div>
            <h4 className="font-semibold text-foreground mb-2">ROI rapid</h4>
            <p className="text-muted-foreground text-sm">Se plătește din primul tratament acceptat</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;