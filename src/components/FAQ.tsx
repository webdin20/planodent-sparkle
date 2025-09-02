import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Funcționează Planodent în browser?',
      answer: 'Da, Planodent este o aplicație web-based care funcționează perfect în orice browser modern (Chrome, Firefox, Safari, Edge). Nu necesită instalare și este accesibilă de oriunde.'
    },
    {
      question: 'Se pot personaliza planurile de tratament?',
      answer: 'Absolut! Poți personaliza template-urile cu logo-ul cabinetului, culorile tale brand, și poți adapta conținutul pentru fiecare specialitate. Fiecare plan poate fi customizat pentru nevoile specifice ale pacientului.'
    },
    {
      question: 'Cum funcționează export-ul și print-ul pentru pacient?',
      answer: 'Planurile generate se pot exporta instant în format PDF profesional, cu logo-ul cabinetului și formatarea completă. PDF-ul poate fi printat direct sau trimis prin email pacientului.'
    },
    {
      question: 'Există o perioadă minimă de abonament?',
      answer: 'Nu, nu există nicio perioadă minimă de abonament. Poți anula oricând fără penalități sau costuri suplimentare. Facturarea este lunară și poți opri serviciul când dorești.'
    },
    {
      question: 'Ce training sau onboarding este disponibil?',
      answer: 'Oferim un ghid complet de utilizare, tutoriale video pas cu pas, și suport tehnic de bază prin email. Majoritatea utilizatorilor încep să creeze planuri în primele 15 minute.'
    },
    {
      question: 'Cum ajută Planodent la creșterea ratei de acceptare?',
      answer: 'Planurile vizuale îmbunătățesc înțelegerea pacientului asupra tratamentului, transparența costurilor reduce ezitările, iar prezentarea profesională crește încrederea în recomandările medicului. Statistic, rata de acceptare crește cu 30-45%.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Întrebări frecvente
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Răspunsuri la cele mai comune întrebări despre Planodent și beneficiile 
            pentru cabinetul tău stomatologic.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="medical-card overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                >
                  <h3 className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                
                {activeIndex === index && (
                  <div className="px-6 pb-4 border-t border-border">
                    <p className="text-muted-foreground pt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional help section */}
        <div className="mt-16 text-center">
          <div className="medical-card p-8 bg-gradient-to-br from-primary/5 to-primary/10 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Nu găsești răspunsul căutat?
            </h3>
            <p className="text-muted-foreground mb-6">
              Echipa noastră de suport este disponibilă pentru a răspunde la întrebările tale specifice 
              și pentru a te ajuta să îți optimizezi utilizarea Planodent.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="medical-button"
            >
              Contactează suportul
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;