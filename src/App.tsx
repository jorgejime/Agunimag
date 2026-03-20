/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Menu, X, Droplet, Shield, Leaf, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = '573184131391';
const PRODUCT_IMAGE = 'https://mercaldas.vtexassets.com/arquivos/ids/1341921-1200-auto?v=638736798474100000&width=1200&height=auto&aspect=true';

const PRODUCTS = [
  {
    id: 'mini',
    name: 'Agunimag Mini',
    volume: '350 ML',
    price: '$18.000 COP',
    description: 'Compacta y ligera. Perfecta para llevar en bolsos pequeños o para los más pequeños de la casa.',
    image: PRODUCT_IMAGE,
    color: 'bg-caribbean-50'
  },
  {
    id: 'classic',
    name: 'Agunimag Classic',
    volume: '500 ML',
    price: '$24.000 COP',
    description: 'El equilibrio perfecto. Tu compañera ideal para el día a día, la oficina o el gimnasio.',
    image: PRODUCT_IMAGE,
    color: 'bg-caribbean-100'
  },
  {
    id: 'pro',
    name: 'Agunimag Pro',
    volume: '1 L',
    price: '$32.000 COP',
    description: 'Hidratación sin límites. Diseñada para largas jornadas, excursiones y máxima exigencia.',
    image: PRODUCT_IMAGE,
    color: 'bg-caribbean-400/20'
  }
];

const FEATURES = [
  {
    icon: <Droplet className="w-6 h-6 text-caribbean-600" />,
    title: 'Frío por 24 horas',
    description: 'Aislamiento al vacío de doble pared que mantiene tu agua helada todo el día.'
  },
  {
    icon: <Shield className="w-6 h-6 text-caribbean-600" />,
    title: 'Acero Inoxidable 18/8',
    description: 'Material de grado profesional que no retiene ni transfiere sabores.'
  },
  {
    icon: <Leaf className="w-6 h-6 text-caribbean-600" />,
    title: '100% Libre de BPA',
    description: 'Diseño ecológico y seguro para ti y para nuestros océanos.'
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppContact = (message: string = 'Hola! Me gustaría obtener más información sobre las botellas Agunimag.') => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-sand-50 selection:bg-caribbean-400 selection:text-white">
      {/* Navbar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplet className="w-8 h-8 text-caribbean-600" fill="currentColor" />
            <span className="font-display font-bold text-2xl tracking-tight text-caribbean-900">
              Agunimag
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#productos" className="text-sm font-medium text-caribbean-900/70 hover:text-caribbean-600 transition-colors">Productos</a>
            <a href="#beneficios" className="text-sm font-medium text-caribbean-900/70 hover:text-caribbean-600 transition-colors">Beneficios</a>
            <a href="#nosotros" className="text-sm font-medium text-caribbean-900/70 hover:text-caribbean-600 transition-colors">Nosotros</a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleWhatsAppContact()}
              className="hidden md:flex items-center gap-2 bg-emerald-500 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors shadow-sm hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              Contáctanos
            </button>
            <button 
              className="md:hidden p-2 text-caribbean-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-xl font-display font-medium">
              <a href="#productos" onClick={() => setIsMobileMenuOpen(false)} className="text-caribbean-900">Productos</a>
              <a href="#beneficios" onClick={() => setIsMobileMenuOpen(false)} className="text-caribbean-900">Beneficios</a>
              <a href="#nosotros" onClick={() => setIsMobileMenuOpen(false)} className="text-caribbean-900">Nosotros</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-caribbean-100 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-caribbean-400/20 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caribbean-100 text-caribbean-800 text-xs font-semibold tracking-wide uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-caribbean-500 animate-pulse"></span>
                Nueva Colección
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight text-caribbean-900 mb-6">
                La pureza del <span className="text-caribbean-600">Caribe</span> en tus manos.
              </h1>
              <p className="text-lg md:text-xl text-caribbean-900/70 mb-10 max-w-lg leading-relaxed">
                Diseño minimalista, aislamiento térmico superior y el tamaño perfecto para cada momento de tu día.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#productos" className="inline-flex items-center justify-center gap-2 bg-caribbean-900 text-white px-8 py-4 rounded-full font-medium hover:bg-caribbean-800 transition-all hover:shadow-lg hover:-translate-y-0.5">
                  Explorar Colección
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden relative shadow-2xl bg-white">
                <img 
                  src={PRODUCT_IMAGE}
                  alt="Agunimag Water Bottle" 
                  className="w-full h-full object-contain mix-blend-multiply p-8"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-caribbean-900/10 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 backdrop-blur-md bg-white/90"
              >
                <div className="w-12 h-12 rounded-full bg-caribbean-50 flex items-center justify-center">
                  <Droplet className="w-6 h-6 text-caribbean-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-caribbean-900/50 uppercase tracking-wider">Mantiene</p>
                  <p className="font-display font-bold text-caribbean-900">24h Frío</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="beneficios" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-caribbean-900 mb-4">
                Diseñadas para la vida moderna
              </h2>
              <p className="text-caribbean-900/60">
                Cada detalle ha sido pensado para ofrecerte la mejor experiencia de hidratación, sin comprometer el estilo ni el medio ambiente.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {FEATURES.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-caribbean-50 flex items-center justify-center mb-6 group-hover:bg-caribbean-100 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-caribbean-900 mb-3">{feature.title}</h3>
                  <p className="text-caribbean-900/60 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="productos" className="py-24 bg-sand-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-caribbean-900 mb-4">
                  Encuentra tu tamaño ideal
                </h2>
                <p className="text-lg text-caribbean-900/60">
                  Tres presentaciones perfectas. Una misma calidad excepcional.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {PRODUCTS.map((product, index) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full"
                >
                  <div className={`relative aspect-[4/5] rounded-2xl overflow-hidden mb-8 ${product.color} p-6`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-caribbean-900 tracking-wide">
                      {product.volume}
                    </div>
                  </div>
                  
                  <div className="flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-display font-bold text-caribbean-900">{product.name}</h3>
                      <span className="text-xl font-medium text-caribbean-600">{product.price}</span>
                    </div>
                    <p className="text-caribbean-900/60 mb-8 flex-grow">
                      {product.description}
                    </p>
                    
                    <button 
                      onClick={() => handleWhatsAppContact(`Hola! Me interesa comprar la botella ${product.name} de ${product.volume}. ¿Me podrías dar más información?`)}
                      className="w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-500 hover:text-white"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Comprar por WhatsApp
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Minimalist Banner */}
        <section className="py-24 bg-caribbean-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="wave" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                  <path d="M0 10 Q 25 20, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2"/>
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#wave)" />
            </svg>
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <Droplet className="w-12 h-12 mx-auto mb-8 text-caribbean-400" fill="currentColor" />
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Menos plástico.<br />Más océano.
            </h2>
            <p className="text-xl text-caribbean-100/80 mb-10 max-w-2xl mx-auto">
              Con cada botella Agunimag que utilizas, evitas el consumo de cientos de botellas de plástico de un solo uso al año.
            </p>
            <a href="#productos" className="inline-block bg-white text-caribbean-900 px-8 py-4 rounded-full font-bold hover:bg-caribbean-50 transition-colors">
              Únete al cambio
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-caribbean-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Droplet className="w-6 h-6 text-caribbean-600" fill="currentColor" />
                <span className="font-display font-bold text-xl tracking-tight text-caribbean-900">
                  Agunimag
                </span>
              </div>
              <p className="text-caribbean-900/60 max-w-sm">
                Inspirados por la pureza del Mar Caribe. Diseñamos botellas premium para mantenerte hidratado dondequiera que vayas.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-caribbean-900 mb-6 uppercase tracking-wider text-sm">Tienda</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-caribbean-900/60 hover:text-caribbean-600 transition-colors">Agunimag Mini (350ml)</a></li>
                <li><a href="#" className="text-caribbean-900/60 hover:text-caribbean-600 transition-colors">Agunimag Classic (500ml)</a></li>
                <li><a href="#" className="text-caribbean-900/60 hover:text-caribbean-600 transition-colors">Agunimag Pro (1L)</a></li>
                <li><a href="#" className="text-caribbean-900/60 hover:text-caribbean-600 transition-colors">Accesorios</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-caribbean-900 mb-6 uppercase tracking-wider text-sm">Soporte</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-caribbean-900/60 hover:text-caribbean-600 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-caribbean-900/60 hover:text-caribbean-600 transition-colors">Envíos y Devoluciones</a></li>
                <li><a href="#" className="text-caribbean-900/60 hover:text-caribbean-600 transition-colors">Garantía</a></li>
                <li><a href="#" className="text-caribbean-900/60 hover:text-caribbean-600 transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-caribbean-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-caribbean-900/40">
              © {new Date().getFullYear()} Agunimag. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-caribbean-900/40 hover:text-caribbean-600 transition-colors">Privacidad</a>
              <a href="#" className="text-sm text-caribbean-900/40 hover:text-caribbean-600 transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
