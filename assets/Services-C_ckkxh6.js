import{r as o,j as e}from"./index-_un88V-Y.js";import{u as y,a as v}from"./index-BsOPOoy6.js";import{i as w,a as j,b as N}from"./3-D1y9z3Fh.js";import{m as t}from"./proxy-DlcL3cBf.js";const z="/Lelia-Lashes/assets/4-C9N-1C8m.jpeg",E="/Lelia-Lashes/assets/5-CWjtipDr.jpeg",k="/Lelia-Lashes/assets/6-BLfJO99r.jpeg",A=()=>{const[r,l]=o.useState(null),[a,u]=o.useState({x:0,y:0}),n=o.useRef(null),s=y(),[x,d]=v({threshold:.2,triggerOnce:!0});o.useEffect(()=>{d&&s.start("visible")},[s,d]),o.useEffect(()=>{const i=p=>{if(n.current){const{left:h,top:b}=n.current.getBoundingClientRect();u({x:p.clientX-h,y:p.clientY-b})}};return window.addEventListener("mousemove",i),()=>window.removeEventListener("mousemove",i)},[]);const g=[{id:1,title:"Extension Ciglia Classiche",description:"Applicazione di una singola extension per ogni ciglia naturale. Ideale per un look naturale e raffinato.",price:"€70",duration:"90 min",image:w,color:"#d4af37"},{id:2,title:"Extension Ciglia Volume 2D-3D",description:"Applicazione di 2-3 extension per ogni ciglia naturale. Per uno sguardo più intenso e definito.",price:"€90",duration:"120 min",image:j,color:"#c8a431"},{id:3,title:"Extension Ciglia Volume Russo",description:"Tecnica avanzata con applicazione di 4-6 extension per ciglia. Per un effetto drammatico e voluminoso.",price:"€110",duration:"150 min",image:N,color:"#bc992b"},{id:4,title:"Lash Filler",description:"Trattamento nutriente che rinforza e infoltisce le ciglia naturali. Ideale prima dell'applicazione di extension.",price:"€45",duration:"45 min",image:z,color:"#b08e25"},{id:5,title:"Rimozione Extension",description:"Rimozione professionale e sicura delle extension ciglia con prodotti specifici.",price:"€25",duration:"30 min",image:E,color:"#a4831f"},{id:6,title:"Refill (Ritocco)",description:"Manutenzione delle extension esistenti con sostituzione di quelle cadute. Consigliato ogni 3-4 settimane.",price:"da €45",duration:"60-90 min",image:k,color:"#987819"}],c={hidden:{},visible:{transition:{staggerChildren:.2}}},m={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:12}}},f={hidden:{opacity:0,y:-50},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:10,delay:.2}}};return e.jsxs("section",{id:"servizi",className:"py-20 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-background-light to-white z-0"}),e.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[e.jsx(t.div,{className:"absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl",animate:{x:[a.x-400,a.x-400],y:[a.y-400,a.y-400]},transition:{duration:1}}),e.jsx(t.div,{className:"absolute w-64 h-64 rounded-full bg-gold/5 blur-3xl",animate:{x:[a.x-200,a.x-200],y:[a.y-200,a.y-200]},transition:{duration:1.5}})]}),e.jsxs("div",{className:"container mx-auto px-4 relative z-10",ref:n,children:[e.jsxs(t.div,{className:"text-center mb-16",initial:"hidden",animate:"visible",variants:c,children:[e.jsxs(t.h2,{className:"text-3xl md:text-5xl font-serif font-bold mb-4 relative inline-block",variants:f,children:["I Nostri ",e.jsx("span",{className:"text-secondary",children:"Servizi"}),e.jsx(t.span,{className:"absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-gold to-transparent",initial:{width:0},animate:{width:"100%"},transition:{delay:.8,duration:.8}})]}),e.jsx(t.p,{className:"text-gray-700 max-w-2xl mx-auto mt-8",variants:m,children:"Offriamo servizi personalizzati di extension ciglia per valorizzare la tua bellezza naturale e donare al tuo sguardo profondità e intensità."})]}),e.jsx(t.div,{ref:x,variants:c,initial:"hidden",animate:s,className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4",children:g.map(i=>e.jsxs(t.div,{variants:m,whileHover:{y:-10,boxShadow:`0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 15px ${i.color}40`},className:"bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col h-full transform-gpu border border-gray-100 shadow-sm",onMouseEnter:()=>l(i.id),onMouseLeave:()=>l(null),children:[e.jsxs("div",{className:"relative h-64 overflow-hidden",children:[e.jsx(t.div,{className:"absolute inset-0 bg-gradient-to-br",style:{background:`linear-gradient(135deg, ${i.color}20, ${i.color}40)`},initial:{opacity:0},whileHover:{opacity:1}}),e.jsx(t.img,{src:i.image,alt:i.title,className:"w-full h-full object-cover",whileHover:{scale:1.1},transition:{duration:.5}}),e.jsx(t.div,{className:"absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium shadow-sm",style:{color:i.color},initial:{opacity:0,y:-20},whileHover:{opacity:1,y:0},children:i.duration})]}),e.jsxs("div",{className:"p-8 flex flex-col flex-grow relative",children:[e.jsx(t.div,{className:"absolute -top-10 left-6 bg-white shadow-lg rounded-full px-5 py-2.5 font-bold text-lg",style:{color:i.color},initial:{opacity:0,y:20},animate:{opacity:r===i.id?1:0,y:r===i.id?0:20},children:i.price}),e.jsx("h3",{className:"text-xl font-serif font-semibold mb-4 text-gray-800",children:i.title}),e.jsx("p",{className:"text-gray-600 mb-6 flex-grow leading-relaxed",children:i.description}),e.jsxs(t.button,{className:"mt-2 self-start relative overflow-hidden group",whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsxs("span",{className:"relative z-10 flex items-center font-medium text-primary",children:["Prenota ora",e.jsx("svg",{className:"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]}),e.jsx("span",{className:"absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"})]})]})]},i.id))}),e.jsx(t.div,{className:"text-center mt-16",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:1.2,duration:.8},children:e.jsxs(t.a,{href:"#contatti",className:"relative inline-block overflow-hidden group bg-transparent border-2 border-primary text-primary px-10 py-4 rounded-full transition-all duration-300",whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx("span",{className:"relative z-10 font-medium tracking-wider",children:"PRENOTA UN APPUNTAMENTO"}),e.jsx(t.span,{className:"absolute inset-0 bg-primary",initial:{scaleX:0},whileHover:{scaleX:1},transition:{duration:.3},style:{originX:0}}),e.jsx(t.span,{className:"absolute inset-0 bg-white text-primary flex items-center justify-center font-medium tracking-wider",initial:{opacity:1},whileHover:{opacity:0},transition:{duration:.3},children:"PRENOTA UN APPUNTAMENTO"})]})})]})]})};export{A as default};
