import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Maria Popescu',
      role: 'Medic stomatolog',
      location: 'Clinica Dental Excellence, București',
      content: 'Planodent a transformat complet modul în care comunic cu pacienții. Rata de acceptare a crescut cu 45% în doar 3 luni.',
      rating: 5
    },
    {
      name: 'Dr. Alexandru Ionescu',
      role: 'Medic stomatolog',
      location: 'Cabinet Smile Design, Cluj-Napoca',
      content: 'Pacienții apreciază transparența completă și ilustrațiile clare. Nu mai am întrebări despre costuri după consultație.',
      rating: 5
    },
    {
      name: 'Dr. Elena Constantinescu',
      role: 'Medic stomatolog',
      location: 'Dental Care Center, Timișoara',
      content: 'Economisesc peste o oră la fiecare plan de tratament. Investiția se plătește singură prin primul pacient acceptat.',
      rating: 5
    }
  ];

  return (
    <section id="testimoniale" className="section-padding bg-medical-light">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Încrederea medicilor stomatologi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descoperă cum colegii tăi au îmbunătățit deja comunicarea cu pacienții și au crescut 
            profitabilitatea cabinetelor prin Planodent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="medical-card p-6 relative group hover:scale-105 transition-transform duration-300">
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={40} className="text-primary" />
              </div>

              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-primary/20 rounded-full"></div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics section */}
        <div className="mt-16 medical-card p-8 bg-gradient-to-r from-primary to-medical-primary-dark text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Rezultate măsurabile în primul trimestru</h3>
            <p className="text-primary-foreground/90">Date colectate de la 500+ utilizatori activi</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">42%</div>
              <div className="text-primary-foreground/90 text-sm">Creșterea ratei de acceptare</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">65%</div>
              <div className="text-primary-foreground/90 text-sm">Reducerea timpului de pregătire</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">89%</div>
              <div className="text-primary-foreground/90 text-sm">Satisfacția pacienților</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24 ore</div>
              <div className="text-primary-foreground/90 text-sm">Timp mediu de implementare</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Alătură-te comunității de medici care cresc prin Planodent
          </h3>
          <button
            onClick={() => {
              const element = document.getElementById('pret');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="medical-button text-lg"
          >
            Începe testul gratuit de 7 zile
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;