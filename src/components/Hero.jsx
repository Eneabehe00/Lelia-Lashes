import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage from '../assets/hero-image.svg';
import lashesBg from '../assets/lashes-bg.svg';

const Hero = () => {
  const heroRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);
  const [sparkleElements, setSparkleElements] = useState([]);
  
  // Generate random sparkles
  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 15; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 10 + 5,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 5,
        });
      }
      setSparkleElements(newSparkles);
    };
    
    generateSparkles();
    const interval = setInterval(generateSparkles, 5000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      setCursorPosition({ x, y });
      heroRef.current.style.setProperty('--mouse-x', x);
      heroRef.current.style.setProperty('--mouse-y', y);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Glamorous text phrases that rotate
  const glamPhrases = [
    "Bellezza e Eleganza per i tuoi occhi",
    "Sguardo magnetico, anima luminosa",
    "La tua bellezza, la nostra passione"
  ];
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % glamPhrases.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        '--mouse-x': cursorPosition.x,
        '--mouse-y': cursorPosition.y,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-light via-pink-50/20 to-background z-0 opacity-90"></div>
      
      {/* Floating sparkles */}
      {sparkleElements.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute z-0 rounded-full bg-gold/30 backdrop-blur-sm"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 8
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10 z-0 
                     [transform:translate(calc(var(--mouse-x)*20px - 10px),calc(var(--mouse-y)*20px - 10px))] transition-transform duration-[1500ms]"
           style={{ backgroundImage: `url(${lashesBg})` }}></div>
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute w-40 h-40 rounded-full border border-primary/20 z-0"
        style={{ 
          left: `calc(${cursorPosition.x * 100}% - 20px)`, 
          top: `calc(${cursorPosition.y * 100}% - 20px)`,
          filter: "blur(2px)"
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 text-center md:text-left md:pl-8 lg:pl-12"
          >
            <AnimatePresence mode="wait">
              <motion.h1 
                key={currentPhraseIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 relative"
              >
                {glamPhrases[currentPhraseIndex].split(' ').map((word, i, arr) => (
                  <React.Fragment key={i}>
                    <motion.span 
                      className={`inline-block ${i === 0 ? 'text-primary' : i === 2 ? 'text-gold' : ''} relative`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {word}
                      {(i === 0 || i === 2) && (
                        <span className={`absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-${i === 0 ? 'primary' : 'gold'} to-transparent`}></span>
                      )}
                    </motion.span>
                    {i < arr.length - 1 && <span className="mx-1.5">{' '}</span>}
                  </React.Fragment>
                ))}
              </motion.h1>
            </AnimatePresence>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl mx-auto md:mx-0 italic"
            >
              Extension ciglia professionali per uno sguardo magnetico e naturale. Servizi personalizzati per valorizzare la tua bellezza unica e radiosa.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.a 
                href="#servizi" 
                className="btn relative overflow-hidden group bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full shadow-gold transition-all duration-300 text-center"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(212, 175, 55, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Scopri i Servizi</span>
                <motion.span 
                  className="absolute inset-0 bg-white opacity-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  whileHover={{ opacity: 0.3 }}
                ></motion.span>
              </motion.a>
              
              <motion.a 
                href="#contatti" 
                className="btn relative overflow-hidden group bg-transparent border-2 border-primary text-primary hover:text-white px-8 py-3 rounded-full transition-all duration-300 text-center"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(212, 175, 55, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contattami</span>
                <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 relative"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full relative mx-auto">
              <motion.div 
                animate={{ 
                  boxShadow: [
                    "0 0 20px 5px rgba(212, 175, 55, 0.3)",
                    "0 0 40px 12px rgba(212, 175, 55, 0.5)",
                    "0 0 20px 5px rgba(212, 175, 55, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  ease: "easeInOut", 
                  repeat: Infinity 
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold-light via-gold to-primary-light"
              ></motion.div>
              
              <motion.div 
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-gold/30 border-dashed"
              ></motion.div>
              
              <motion.div 
                initial={{ rotate: 0 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                className="absolute inset-2 rounded-full border border-primary/20 border-dotted"
              ></motion.div>
              
              <div className="absolute inset-1 rounded-full overflow-hidden bg-white">
                <motion.img 
                  src={heroImage}
                  alt="Lelia Lashes Extension Ciglia" 
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: isHovering ? 1.1 : 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  whileHover={{ filter: "brightness(1.1)" }}
                />
              </div>
              
              <motion.div
                className="absolute -right-4 -top-4 w-20 h-20 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--color-primary), 0.2)" }}
              >
                <span className="text-primary font-serif text-sm">Premium</span>
              </motion.div>
              
              <motion.div
                className="absolute -left-4 -bottom-4 w-24 h-24 bg-gold/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--color-gold), 0.2)" }}
              >
                <span className="text-gold font-serif text-sm">Luxury<br/>Service</span>
              </motion.div>
              
              {/* New floating elements */}
              <motion.div
                className="absolute -right-12 top-1/2 w-16 h-16 bg-pink-100/30 backdrop-blur-sm rounded-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  y: [0, -20, 0],
                  x: [0, 10, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  delay: 2
                }}
              >
                <span className="text-primary/80 font-serif text-xs">Glamour</span>
              </motion.div>
              
              <motion.div
                className="absolute -left-12 top-1/3 w-14 h-14 bg-gold/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  y: [0, 20, 0],
                  x: [0, -10, 0]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity,
                  delay: 1
                }}
              >
                <span className="text-gold/80 font-serif text-xs">Chic</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <span className="text-primary/70 text-sm mb-2 font-serif italic">Scopri di più</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-1"
          >
            <motion.div
              animate={{ height: [5, 10, 5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 bg-primary/50 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;