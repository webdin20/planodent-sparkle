import React, { useState } from 'react';
import { Play, Image, FileText, BarChart3, Eye, Download } from 'lucide-react';

const Demo = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demoItems = [
    {
      icon: FileText,
      title: 'Plan dentar detaliat',
      description: 'Vizualizare completă a arcadelor dentare cu proceduri marcate color'
    },
    {
      icon: BarChart3,
      title: 'Tabel costuri pe etape',
      description: 'Defalcarea clară a costurilor și timpilor pentru fiecare procedură'
    },
    {
      icon: Eye,
      title: 'Exemplu înainte/după',
      description: 'Simulări vizuale care arată rezultatul final al tratamentului'
    },
    {
      icon: Download,
      title: 'Raport PDF complet',
      description: 'Document profesional pentru pacient cu toate detaliile'
    },
    {
      icon: Image,
      title: 'Galerie proceduri',
      description: 'Ilustrații medicale clare pentru fiecare tip de intervenție'
    }
  ];

  return (
    <section id="demo" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Vezi Planodent în acțiune
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descoperă cum planurile vizuale transformă comunicarea cu pacienții și 
            simplifică procesul de aprobare a tratamentelor prin ilustrații clare și profesionale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Navigation */}
          <div className="space-y-4">
            {demoItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeDemo === index 
                      ? 'bg-primary text-white shadow-[var(--shadow-medical)]' 
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                  onClick={() => setActiveDemo(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeDemo === index 
                        ? 'bg-white/20' 
                        : 'bg-primary/10'
                    }`}>
                      <IconComponent className={`w-5 h-5 ${
                        activeDemo === index 
                          ? 'text-white' 
                          : 'text-primary'
                      }`} />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${
                        activeDemo === index 
                          ? 'text-white' 
                          : 'text-foreground'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm ${
                        activeDemo === index 
                          ? 'text-white/90' 
                          : 'text-muted-foreground'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Demo Preview */}
          <div className="medical-card p-8 bg-gradient-to-br from-white to-medical-light">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                  <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                </button>
              </div>
              
              {/* Demo content based on active selection */}
              <div className="text-center p-6">
                <div className="text-primary mb-4">
                  {React.createElement(demoItems[activeDemo].icon, { size: 32 })}
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {demoItems[activeDemo].title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  Preview demonstrație interactivă
                </p>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="medical-button-secondary"
              >
                Solicită demo personalizat
              </button>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">🎨</div>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Design personalizabil</h4>
            <p className="text-muted-foreground text-sm">Logo-ul cabinetului și culorile tale</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">📱</div>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Responsive total</h4>
            <p className="text-muted-foreground text-sm">Perfect pe orice dispozitiv</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">⚡</div>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Generare instantă</h4>
            <p className="text-muted-foreground text-sm">Plan gata în sub 2 minute</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;