import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationLinks = [
    { name: 'Acasă', href: 'acasa' },
    { name: 'Despre', href: 'despre' },
    { name: 'Beneficii', href: 'beneficii' },
    { name: 'Preț', href: 'pret' },
    { name: 'Demo', href: 'demo' },
    { name: 'Contact', href: 'contact' }
  ];

  const legalLinks = [
    { name: 'Termeni și condiții', href: '#' },
    { name: 'Politica de confidențialitate', href: '#' },
    { name: 'GDPR', href: '#' },
    { name: 'Cookies', href: '#' }
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container-width">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Planodent</h3>
              <p className="text-white/80 mb-6 max-w-md">
                Soluția modernă pentru planuri de tratament stomatologic. 
                Îmbunătățește comunicarea cu pacienții și crește rata de acceptare 
                prin planuri vizuale profesionale.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-white/80">contact@planodent.ro</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-white/80">+40 712 345 678</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-white/80">București, România</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="font-semibold mb-4">Navigație</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/80 hover:text-primary transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <p className="text-white/60 text-sm">
                © 2024 Planodent. Toate drepturile rezervate.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              {/* Trust indicators */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <span className="text-white/60 text-sm">GDPR Compliant</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-white/60 text-sm">SSL Securizat</span>
              </div>
            </div>
          </div>
          
          {/* Partner mention */}
          <div className="mt-6 text-center">
            <p className="text-white/50 text-sm">
              Partener media: <span className="text-primary font-medium">Actualități Stomatologice</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;