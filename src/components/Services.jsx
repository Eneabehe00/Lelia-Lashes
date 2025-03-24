import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from '../assets/1.jpeg';
import image2 from '../assets/2.jpeg';
import image3 from '../assets/3.jpeg';
import image4 from '../assets/4.jpeg';
import image5 from '../assets/5.jpeg';
import image6 from '../assets/6.jpeg';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const { left, top } = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - left,
          y: e.clientY - top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      id: 1,
      title: 'Extension Ciglia Classiche',
      description: 'Applicazione di una singola extension per ogni ciglia naturale. Ideale per un look naturale e raffinato.',
      price: '€70',
      duration: '90 min',
      image: image1,
      color: '#d4af37'
    },
    {
      id: 2,
      title: 'Extension Ciglia Volume 2D-3D',
      description: 'Applicazione di 2-3 extension per ogni ciglia naturale. Per uno sguardo più intenso e definito.',
      price: '€90',
      duration: '120 min',
      image: image2,
      color: '#c8a431'
    },
    {
      id: 3,
      title: 'Extension Ciglia Volume Russo',
      description: 'Tecnica avanzata con applicazione di 4-6 extension per ciglia. Per un effetto drammatico e voluminoso.',
      price: '€110',
      duration: '150 min',
      image: image3,
      color: '#bc992b'
    },
    {
      id: 4,
      title: 'Lash Filler',
      description: 'Trattamento nutriente che rinforza e infoltisce le ciglia naturali. Ideale prima dell\'applicazione di extension.',
      price: '€45',
      duration: '45 min',
      image: image4,
      color: '#b08e25'
    },
    {
      id: 5,
      title: 'Rimozione Extension',
      description: 'Rimozione professionale e sicura delle extension ciglia con prodotti specifici.',
      price: '€25',
      duration: '30 min',
      image: image5,
      color: '#a4831f'
    },
    {
      id: 6,
      title: 'Refill (Ritocco)',
      description: 'Manutenzione delle extension esistenti con sostituzione di quelle cadute. Consigliato ogni 3-4 settimane.',
      price: 'da €45',
      duration: '60-90 min',
      image: image6,
      color: '#987819'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        delay: 0.2
      }
    }
  };

  return (
    <section id="servizi" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background-light to-white z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            x: [mousePosition.x - 400, mousePosition.x - 400],
            y: [mousePosition.y - 400, mousePosition.y - 400],
          }}
          transition={{ duration: 1 }}
        />
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-gold/5 blur-3xl"
          animate={{ 
            x: [mousePosition.x - 200, mousePosition.x - 200],
            y: [mousePosition.y - 200, mousePosition.y - 200],
          }}
          transition={{ duration: 1.5 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-serif font-bold mb-4 relative inline-block"
            variants={titleVariants}
          >
            I Nostri <span className="text-secondary">Servizi</span>
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-gold to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-gray-700 max-w-2xl mx-auto mt-8"
            variants={itemVariants}
          >
            Offriamo servizi personalizzati di extension ciglia per valorizzare la tua bellezza naturale e donare al tuo sguardo profondità e intensità.
          </motion.p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 15px ${service.color}40` 
              }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col h-full transform-gpu border border-gray-100 shadow-sm"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br"
                  style={{ 
                    background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)` 
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                <motion.img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                
                <motion.div 
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium shadow-sm"
                  style={{ color: service.color }}
                  initial={{ opacity: 0, y: -20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  {service.duration}
                </motion.div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow relative">
                <motion.div 
                  className="absolute -top-10 left-6 bg-white shadow-lg rounded-full px-5 py-2.5 font-bold text-lg"
                  style={{ color: service.color }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeService === service.id ? 1 : 0,
                    y: activeService === service.id ? 0 : 20
                  }}
                >
                  {service.price}
                </motion.div>
                
                <h3 className="text-xl font-serif font-semibold mb-4 text-gray-800">{service.title}</h3>
                
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{service.description}</p>
                
                <motion.button 
                  className="mt-2 self-start relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center font-medium text-primary">
                    Prenota ora
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.a 
            href="#contatti" 
            className="relative inline-block overflow-hidden group bg-transparent border-2 border-primary text-primary px-10 py-4 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 font-medium tracking-wider">PRENOTA UN APPUNTAMENTO</span>
            <motion.span 
              className="absolute inset-0 bg-primary"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
            <motion.span 
              className="absolute inset-0 bg-white text-primary flex items-center justify-center font-medium tracking-wider"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              PRENOTA UN APPUNTAMENTO
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;