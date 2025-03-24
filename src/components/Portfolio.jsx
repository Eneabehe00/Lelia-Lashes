import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  // Categorie per il filtro
  const categories = ['Tutti', 'Classiche', 'Volume', 'Russo'];
  const [activeCategory, setActiveCategory] = useState('Tutti');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(6); // Numero di elementi visibili inizialmente

  // Simulazione caricamento
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Reset visibleItems quando cambia la categoria
  useEffect(() => {
    setVisibleItems(6);
  }, [activeCategory]);

  // Funzione per caricare altri elementi
  const loadMoreItems = () => {
    setVisibleItems(prevCount => prevCount + 6);
  };

  // Dati del portfolio
  const portfolioItems = [
    {
      id: 1,
      title: 'Extension Ciglia Classiche',
      category: 'Classiche',
      image: '/src/assets/portfolio-1.svg',
      description: 'Applicazione extension ciglia classiche per un look naturale e raffinato.',
      client: 'Giulia M.',
      date: '15 Marzo 2023'
    },
    {
      id: 2,
      title: 'Extension Ciglia Volume',
      category: 'Volume',
      image: '/src/assets/portfolio-2.svg',
      description: 'Extension ciglia volume 2D-3D per uno sguardo più intenso e definito.',
      client: 'Sofia R.',
      date: '22 Aprile 2023'
    },
    {
      id: 3,
      title: 'Extension Ciglia Russo',
      category: 'Russo',
      image: '/src/assets/portfolio-3.svg',
      description: 'Extension ciglia volume russo per un effetto drammatico e voluminoso.',
      client: 'Alessia T.',
      date: '10 Maggio 2023'
    },
    {
      id: 4,
      title: 'Lash Filler Trattamento',
      category: 'Classiche',
      image: '/src/assets/portfolio-4.svg',
      description: 'Trattamento lash filler per nutrire e rinforzare le ciglia naturali.',
      client: 'Martina B.',
      date: '5 Giugno 2023'
    },
    {
      id: 5,
      title: 'Lash Filler Trattamento',
      category: 'Classiche',
      image: '/src/assets/portfolio-4.svg',
      description: 'Trattamento lash filler per nutrire e rinforzare le ciglia naturali.',
      client: 'Martina B.',
      date: '5 Giugno 2023'
    }
  ];

  // Filtra gli elementi in base alla categoria selezionata
  const filteredItems = activeCategory === 'Tutti' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // Limita gli elementi visibili
  const displayedItems = filteredItems.slice(0, visibleItems);
  
  // Controlla se ci sono altri elementi da caricare
  const hasMoreItems = displayedItems.length < filteredItems.length;

  // Varianti per le animazioni
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-white/80 z-0"></div>
      
      {/* Elementi decorativi */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gold/5 blur-3xl"
          animate={{ 
            x: [0, -70, 0],
            y: [0, -40, 0],
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
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
            className="text-3xl md:text-4xl font-serif font-bold mb-4 relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I miei <span className="text-secondary">Lavori</span>
            <motion.div 
              className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-primary via-gold to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 1 }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-gray-700 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Scopri i risultati dei nostri servizi di extension ciglia attraverso una selezione dei nostri migliori lavori.
          </motion.p>
        </motion.div>

        {/* Filtri con animazioni */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 relative overflow-hidden`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="absolute inset-0 bg-primary"
                initial={{ scale: activeCategory === category ? 1 : 0 }}
                animate={{ scale: activeCategory === category ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ borderRadius: "9999px", originX: 0.5, originY: 0.5 }}
              />
              <motion.span 
                className="relative z-10"
                animate={{ color: activeCategory === category ? "#ffffff" : "#4a4a4a" }}
              >
                {category}
              </motion.span>
            </motion.button>
          ))}
        </motion.div>

        {/* Loader */}
        {isLoading ? (
          <motion.div 
            className="flex justify-center items-center h-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {displayedItems.map((item) => (
                <motion.div 
                  key={item.id} 
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="aspect-w-3 aspect-h-4 overflow-hidden bg-gray-100">
                    <motion.img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2, filter: "blur(5px)" }}
                      animate={{ scale: 1, filter: "blur(0px)" }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </div>
                  
                  <motion.div 
                    className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3 
                      className="text-lg font-serif font-semibold text-white mb-1"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {item.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-200 text-xs"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {item.description}
                    </motion.p>
                    
                    <motion.div 
                      className="flex justify-between items-center mt-3"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <span className="inline-block px-2 py-1 bg-primary/80 text-white text-xs rounded-full">
                        {item.category}
                      </span>
                      <span className="text-white/80 text-xs">{item.date}</span>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, rotate: -90 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Pulsante "Carica altri" */}
        {!isLoading && hasMoreItems && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.button
              onClick={loadMoreItems}
              className="px-8 py-3 rounded-full border-2 border-primary text-primary font-medium relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
                style={{ borderRadius: "9999px" }}
              />
              <span className="relative z-10 flex items-center justify-center group-hover:text-white">
                Carica altri
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </motion.button>
          </motion.div>
        )}

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a 
            href="#contatti" 
            className="relative inline-block overflow-hidden group px-10 py-4 rounded-full border-2 border-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="absolute inset-0 bg-primary"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
              style={{ originX: 0 }}
            />
            <motion.span 
              className="relative z-10 font-medium tracking-wider text-primary group-hover:text-white transition-colors duration-300"
            >
              PRENOTA UNA CONSULENZA
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Modal per visualizzare i dettagli */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              className="bg-white rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col md:flex-row"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-1/2 relative">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover"
                />
                                <div className="absolute top-4 left-4 bg-primary/80 text-white text-xs px-3 py-1 rounded-full">
                  {selectedItem.category}
                </div>
                <motion.button
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedItem(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">{selectedItem.title}</h3>
                  <div className="w-20 h-0.5 bg-primary mb-4"></div>
                  <p className="text-gray-600 mb-6">{selectedItem.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <span className="w-24 text-gray-500 text-sm">Cliente:</span>
                      <span className="text-gray-800 font-medium">{selectedItem.client}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-24 text-gray-500 text-sm">Data:</span>
                      <span className="text-gray-800 font-medium">{selectedItem.date}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-24 text-gray-500 text-sm">Categoria:</span>
                      <span className="text-gray-800 font-medium">{selectedItem.category}</span>
                    </div>
                  </div>
                </motion.div>
                
                <div className="mt-auto">
                  <motion.a
                    href="#contatti"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-full font-medium tracking-wide"
                    whileHover={{ scale: 1.05, backgroundColor: "#d4af37" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedItem(null)}
                  >
                    <span>Prenota questo servizio</span>
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;