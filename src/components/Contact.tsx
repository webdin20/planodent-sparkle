import { useState } from 'react';
import { Mail, Phone, Calendar, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    cabinetName: '',
    doctorName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.cabinetName.trim()) {
      newErrors.cabinetName = 'Numele cabinetului este obligatoriu';
    }
    
    if (!formData.doctorName.trim()) {
      newErrors.doctorName = 'Numele medicului este obligatoriu';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email-ul nu este valid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefonul este obligatoriu';
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = 'Numărul de telefon nu este valid';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        cabinetName: '',
        doctorName: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-medical-light">
        <div className="container-width">
          <div className="max-w-2xl mx-auto text-center">
            <div className="medical-card p-8 bg-gradient-to-br from-green-50 to-green-100">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Mesaj trimis cu succes!
              </h2>
              <p className="text-muted-foreground mb-6">
                Îți mulțumim pentru interesul tău față de Planodent. 
                Te vom contacta în cel mai scurt timp pentru a discuta despre nevoile cabinetului tău.
              </p>
              <p className="text-sm text-muted-foreground">
                Timp de răspuns obișnuit: 24 ore în zilele lucrătoare
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-medical-light">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Începe transformarea astăzi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contactează-ne pentru a începe testul gratuit de 7 zile și descoperă cum Planodent 
            poate îmbunătăți comunicarea cu pacienții și profitabilitatea cabinetului tău.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="medical-card p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Solicită acces gratuit
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="cabinetName" className="block text-sm font-medium text-foreground mb-2">
                  Numele cabinetului *
                </label>
                <input
                  type="text"
                  id="cabinetName"
                  name="cabinetName"
                  value={formData.cabinetName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.cabinetName ? 'border-red-500' : 'border-border'
                  } focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                  placeholder="Ex: Clinica Dental Excellence"
                />
                {errors.cabinetName && (
                  <p className="text-red-500 text-sm mt-1">{errors.cabinetName}</p>
                )}
              </div>

              <div>
                <label htmlFor="doctorName" className="block text-sm font-medium text-foreground mb-2">
                  Numele medicului *
                </label>
                <input
                  type="text"
                  id="doctorName"
                  name="doctorName"
                  value={formData.doctorName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.doctorName ? 'border-red-500' : 'border-border'
                  } focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                  placeholder="Dr. Nume Prenume"
                />
                {errors.doctorName && (
                  <p className="text-red-500 text-sm mt-1">{errors.doctorName}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-border'
                    } focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                    placeholder="doctor@cabinet.ro"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-border'
                    } focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                    placeholder="0712 345 678"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mesaj (opțional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Spune-ne despre nevoile specifice ale cabinetului tău..."
                />
              </div>

              <button
                type="submit"
                className="w-full medical-button flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Trimite cererea
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Email direct: <a href="mailto:contact@planodent.ro" className="text-primary hover:underline">contact@planodent.ro</a>
              </p>
              <p className="text-xs text-muted-foreground">
                Respectăm confidențialitatea datelor tale conform GDPR
              </p>
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="space-y-8">
            {/* Quick contact options */}
            <div className="medical-card p-6">
              <h4 className="font-semibold text-foreground mb-4">Contact rapid</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">contact@planodent.ro</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">+40 712 345 678</span>
                </div>
              </div>
            </div>

            {/* Demo call CTA */}
            <div className="medical-card p-6 bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Demo personalizat în 15 minute
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Programează o demonstrație personalizată pentru a vedea exact cum Planodent 
                    se potrivește nevoilor cabinetului tău.
                  </p>
                  <button className="medical-button-secondary text-sm">
                    Programează demo
                  </button>
                </div>
              </div>
            </div>

            {/* Benefits reminder */}
            <div className="medical-card p-6">
              <h4 className="font-semibold text-foreground mb-4">Ce obții cu Planodent:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Test gratuit 7 zile, fără angajamente
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Creșterea ratei de acceptare cu 40%
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Economie de timp de peste 60%
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Suport tehnic inclusiv
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;