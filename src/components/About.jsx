import React, { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [activeTab, setActiveTab] = useState('storia');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const statItems = [
    { value: '500+', label: 'Clienti Soddisfatte', icon: '👁️' },
    { value: '5', label: 'Certificazioni', icon: '🏆' },
    { value: '3', label: 'Tecniche Specializzate', icon: '✨' },
    { value: '2000+', label: 'Trattamenti Completati', icon: '💎' }
  ];

  const tabContent = {
    storia: {
      title: "La Mia Storia",
      content: [
        "Ho iniziato il mio percorso nel mondo delle extension ciglia nel 2018, dopo aver completato la mia formazione presso una delle più prestigiose accademie di estetica in Italia.",
        "Da allora, ho continuato ad ampliare le mie competenze attraverso corsi di specializzazione e masterclass internazionali, per offrire sempre il meglio alle mie clienti.",
        "Nel 2021 ho aperto il mio studio, Lelia Lashes, uno spazio dedicato alla bellezza dello sguardo dove ogni donna può sentirsi speciale e valorizzata."
      ]
    },
    filosofia: {
      title: "La Mia Filosofia",
      content: [
        "Credo fermamente che la bellezza autentica nasca dalla valorizzazione delle caratteristiche naturali di ciascuna persona.",
        "Il mio approccio è sempre personalizzato: studio attentamente la forma degli occhi, lo stile di vita e le preferenze di ogni cliente per creare un look su misura.",
        "Utilizzo solo prodotti di alta qualità, ipoallergenici e leggeri, per garantire comfort e durata senza compromettere la salute delle ciglia naturali."
      ]
    },
    formazione: {
      title: "Formazione e Certificazioni",
      content: [
        "Diploma in Estetica Professionale - Accademia di Belle Arti, Milano",
        "Certificazione in Classic Lash Extensions - London Lash Pro",
        "Certificazione in Volume Russo - Paris Lash Academy",
        "Masterclass in Lash Lifting e Lash Filler - Beauty Masters",
        "Corso avanzato in Styling dello Sguardo - International Beauty Institute"
      ]
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-white/80 z-0"></div>
      
      {/* Elementi decorativi animati */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute top-40 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-gold/5 blur-3xl"
          animate={{ 
            x: [0, 70, 0],
            y: [0, -40, 0],
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            x: [mousePosition.x - 400, mousePosition.x - 400],
            y: [mousePosition.y - 400, mousePosition.y - 400],
          }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-serif font-bold mb-4 relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Chi <span className="text-secondary">Sono</span>
            <motion.div 
              className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-primary via-goltext-secondary/70"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 1 }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-gray-700 max-w-2xl mx-auto mt-6 text-lg font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Scopri la passione e la professionalità dietro <span className="font-medium text-primary">Lelia Lashes</span>
          </motion.p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col lg:flex-row items-center gap-12 mb-20"
        >
          <motion.div 
            className="lg:w-1/2"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div 
                className="w-full h-full rounded-2xl overflow-hidden shadow-xl relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-primary to-gold opacity-75 blur-sm rounded-2xl"
                  animate={{ 
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <div className="relative rounded-2xl overflow-hidden">
                  <motion.img 
                    src="/src/assets/Logo-Lelia.jpeg" 
                    alt="Lelia - Professionista Extension Ciglia" 
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2, filter: "blur(5px)" }}
                    animate={{ scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 w-36 h-36 bg-primary rounded-full flex items-center justify-center shadow-lg"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <p className="text-white font-serif text-lg font-medium text-center leading-tight">
                  <span className="text-2xl font-bold">5+</span><br/>
                  anni di<br/>esperienza
                </p>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -left-6 w-24 h-24 bg-gold rounded-full flex items-center justify-center shadow-lg"
                initial={{ scale: 0, rotate: 90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <p className="text-white font-serif text-base font-medium text-center leading-tight">
                  <span className="text-xl font-bold">100%</span><br/>
                  Qualità
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-3xl font-serif font-semibold mb-2 text-gray-800 relative inline-block"
              variants={itemVariants}
            >
              Lelia Lashes
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 w-12 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "2rem" }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </motion.h3>
            
            <motion.h4 
              className="text-xl text-primary font-medium mb-8 italic"
              variants={itemVariants}
            >
              Lash Artist Certificata
            </motion.h4>
            
            <motion.p 
              className="text-gray-700 mb-8 text-lg leading-relaxed"
              variants={itemVariants}
            >
              Benvenuta nel mio mondo di bellezza e cura delle ciglia! Sono <span className="font-medium text-primary">Lelia</span>, una professionista certificata con oltre 5 anni di esperienza nel settore delle extension ciglia.
            </motion.p>
            
            {/* Tabs per navigare tra i contenuti */}
            <motion.div className="mb-8 flex flex-wrap gap-2" variants={itemVariants}>
              {Object.keys(tabContent).map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full transition-all duration-300 relative overflow-hidden ${activeTab === tab ? 'text-white font-medium' : 'text-gray-700'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-primary to-gold"
                    initial={{ scale: activeTab === tab ? 1 : 0 }}
                    animate={{ scale: activeTab === tab ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ borderRadius: "9999px", originX: 0.5, originY: 0.5 }}
                  />
                  <span className="relative z-10 capitalize tracking-wide">{tab}</span>
                </motion.button>
              ))}
            </motion.div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm"
              >
                <h5 className="text-xl font-medium text-primary mb-4 font-serif">{tabContent[activeTab].title}</h5>
                <ul className="space-y-4">
                  {tabContent[activeTab].content.map((paragraph, idx) => (
                    <motion.li 
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.3 }}
                    >
                      <span className="text-primary mr-3 mt-1.5 text-lg">✦</span>
                      <p className="text-gray-700 leading-relaxed">{paragraph}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
              variants={containerVariants}
            >
              {statItems.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md text-center transform-gpu"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <motion.div
                    className="text-4xl mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + (index * 0.1), type: "spring" }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.span 
                    className="block text-2xl font-serif font-bold bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent mb-1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + (index * 0.2), duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-gray-700 text-sm font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="mt-10"
              variants={itemVariants}
            >
              <motion.a 
                href="#contatti" 
                className="relative inline-block overflow-hidden group px-8 py-3.5 rounded-full border-2 border-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-primary to-gold"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ originX: 0 }}
                />
                <motion.span 
                  className="relative z-10 font-medium tracking-wider text-primary group-hover:text-white transition-colors duration-300 flex items-center"
                >
                  PRENOTA UNA CONSULENZA
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Sezione Testimonianze */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-serif font-bold mb-12 text-center relative inline-block mx-auto block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Cosa Dicono le <span className="text-secondary">Clienti</span>
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 w-24 bg-gradient-to-r from-primary via-goltext-secondary/70"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ delay: 0.8, duration: 1 }}
            />
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Martina B.",
                text: "Le extension ciglia di Lelia hanno trasformato il mio sguardo! Sono naturali ma allo stesso tempo intense, esattamente come desideravo.",
                rating: 5,
                image: "/src/assets/testimonial-1.svg"
              },
              {
                name: "Giulia F.",
                text: "Professionalità impeccabile e risultato straordinario. Lelia ha saputo consigliarmi il tipo di extension più adatto alla forma dei miei occhi.",
                rating: 5,
                image: "/src/assets/testimonial-2.svg"
              },
              {
                name: "Alessandra M.",
                text: "Finalmente ho trovato una professionista che sa valorizzare il mio sguardo senza eccessi. Le extension durano a lungo e sono comodissime!",
                rating: 5,
                image: "/src/assets/testimonial-3.svg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md relative border border-primary/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.2), duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-primary/50 shadow-md">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-lg">{testimonial.name}</h4>
                    <div className="flex text-gold">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">{testimonial.text}</p>
                <div className="absolute -top-3 -left-3 text-5xl text-primary opacity-20 font-serif">"</div>
                <div className="absolute -bottom-3 -right-3 text-5xl text-primary opacity-20 font-serif">"</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sezione Servizi Offerti */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-serif font-bold mb-12 text-center relative inline-block mx-auto block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I Miei <span className="text-secondary">Servizi</span>
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 w-24 bg-gradient-to-r from-primary via-goltext-secondary/70"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ delay: 0.8, duration: 1 }}
            />
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Extension Ciglia Classiche",
                description: "Un'applicazione ciglia per ciglia per un look naturale ma definito. Ideale per chi desidera uno sguardo più intenso senza eccessi.",
                icon: "✨",
                color: "from-primary to-primary/70"
              },
              {
                title: "Volume Russo",
                description: "Tecnica avanzata che permette di applicare più extension su una singola ciglia naturale, per uno sguardo drammatico e voluminoso.",
                icon: "👁️",
                color: "from-gold to-gold/70"
              },
              {
                title: "Lash Lifting",
                description: "Trattamento che incurva le ciglia naturali dalla base, donando un effetto mascara permanente che dura fino a 8 settimane.",
                icon: "💫",
                color: "from-primary to-gold"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-md relative overflow-hidden border border-primary/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.2), duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${service.color} opacity-10 -mr-10 -mt-10`}
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <div className="text-4xl mb-4 text-secondary">
                  {service.icon}
                </div>
                
                <h4 className="text-xl font-serif font-medium mb-3 text-gray-800">{service.title}</h4>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
                
                <motion.div 
                  className="mt-6"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#servizi" className="text-primary font-medium flex items-center">
                    Scopri di più
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-32 mb-16 bg-gradient-to-r from-primary/10 to-gold/10 p-10 rounded-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div 
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <motion.div 
            className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gold/10 blur-xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h3 
              className="text-2xl md:text-4xl font-serif font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              Pronta a <span className="text-secondary relative">
                Trasformare
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary/30"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                />
              </span> il Tuo Sguardo?
            </motion.h3>
            
            <motion.p 
              className="text-gray-700 mb-10 text-lg max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              Prenota una consulenza gratuita e scopri quale trattamento è più adatto 
              alle tue esigenze e al tuo stile personale.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <motion.a 
                href="#contatti" 
                className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-primary to-gold text-white font-medium rounded-full shadow-lg group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ borderRadius: "9999px" }}
                />
                <span className="relative z-10 flex items-center text-primary">
                  Contattami Ora
                  <motion.svg 
                    className="ml-2 w-5 h-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </span>
              </motion.a>
              
              <motion.a 
                href="#servizi" 
                className="px-8 py-4 border-2 border-primary text-primary font-medium rounded-full hover:text-white relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.05)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ borderRadius: "9999px" }}
                />
                <span className="relative z-10">Scopri i Servizi</span>
              </motion.a>
            </motion.div>
            
            <motion.div
              className="mt-8 flex justify-center items-center gap-2 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <span>✨ Prima consulenza gratuita</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
              <span>🔒 Privacy garantita</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
                