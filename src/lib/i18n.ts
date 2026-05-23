export type Lang = "pt" | "en" | "es";

export const translations = {
  pt: {
    nav: { about: "Sobre", skills: "Habilidades", projects: "Projetos", contact: "Contato" },
    hero: {
      role: "Desenvolvedor Front-End",
      title: "Criando experiências web modernas com",
      subtitle: "Desenvolvendo interfaces interativas com foco na experiência do usuário.",
      cta: "Ver Projetos",
      ctaAlt: "Vamos nos conectar",
    },
    sections: {
      projects: "Projetos em Destaque",
      projectsSub: "Uma seleção curada do que construí recentemente.",
      soon: "Projeto em Breve",
      skills: "Stack Técnica",
      skillsSub: "Tecnologias que uso no dia a dia.",
      education: "Formação Acadêmica",
      educationSub: "Construindo conhecimento de forma contínua.",
      beyond: "Além do Código",
      beyondText: "Explore meus interesses e hobbies além do mundo digital.",
      interests: ["Viajar 🛫", "Jogos 🎮", "Música 🎵", "Leitura 📚", "Futebol ⚽", "Academia 💪🏻"],
      locationTitle: "Poços de Caldas — MG",
      locationSubtitle: "Brasil · remote",
      contact: "Vamos Conversar",
      contactSub: "Envie uma mensagem direto pelo WhatsApp.",
    },
    skills: {
      c1: {
        title: "Front-end Core",
        desc: "Desenvolvimento de aplicações web modernas, focadas em semântica, estilização avançada e reatividade.",
      },
      c2: {
        title: "UX/UI & Produto",
        desc: "Criação de protótipos no Figma, design de interfaces atraentes e fluxos de usuário intuitivos.",
      },
      c3: {
        title: "IA Aplicada ao Desenvolvimento",
        desc: "Uso contínuo de Cursor, ChatGPT, GitHub Copilot e Claude para fluxos de trabalho eficientes e código limpo.",
      },
      c4: {
        title: "Ferramentas & Versionamento",
        desc: "Controle de versão robusto e manipulação de bancos de dados relacionais (SQL).",
      },
    },
    education: {
      done: {
        tag: "Concluído",
        title: "Análise e Desenvolvimento de Sistemas",
        desc: "Graduação prática voltada para a criação de sistemas e o desenvolvimento de soluções web.",
      },
      now: {
        tag: "Em andamento",
        title: "MBA em Ciência de Dados e IA",
        desc: "Especialização em Engenharia de Prompts e integração de modelos de Inteligência Artificial em aplicações web.",
      },
    },
    contact: { name: "Nome", message: "Mensagem", send: "Enviar via WhatsApp" },
    footer: { text: "© 2026 Desenvolvedor Lucas Maicon" },
    chat: {
      hi: "Olá! Sou o assistente do Lucas. Como posso ajudar?",
      q1: "🛠️ Qual a stack dele?",
      q2: "💼 Redes Sociais",
      q3: "💬 Chamar no WhatsApp",
      a1: "Lucas trabalha com React, Tailwind CSS e JavaScript moderno, utilizando ferramentas avançadas de IA (como Cursor, Copilot, ChatGPT e Claude) para acelerar entregas com código limpo.",
      a2: "Conecte-se: LinkedIn e GitHub disponíveis nos ícones do rodapé.",
      a3: "Abrindo WhatsApp...",
    },
    projectList: [
      {
        title: "WoodModern",
        desc: "Catálogo premium de móveis planejados com design minimalista e foco em experiência visual.",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        deploy: "https://lukasmaicon.github.io/WoodModern/",
        github: "https://github.com/lukasmaicon/WoodModern",
      },
      {
        title: "SushiTech",
        desc: "Landing page e e-commerce de culinária japonesa com design imersivo, focado em conversão e experiência mobile fluida.",
        tags: ["React", "Tailwind CSS", "TypeScript"],
        deploy: "https://lukasmaicon.github.io/sushi-tech/",
        github: "https://github.com/lukasmaicon/sushi-tech",
      },
      {
        title: "Aura",
        desc: "Plataforma conceitual de viagens inteligentes que combina um design imersivo com roteiros personalizados e foco na experiência do usuário.",
        tags: ["React", "Tailwind CSS", "TypeScript"],
        deploy: "https://lukasmaicon.github.io/Aura/",
        github: "https://github.com/lukasmaicon/Aura",
      },
      {
        title: "HubControl",
        desc: "Painel administrativo e dashboard corporativo integrado, desenvolvido como projeto acadêmico focado em arquitetura limpa e gestão de dados.",
        tags: ["React", "Tailwind CSS", "TypeScript"],
        deploy: "https://lukasmaicon.github.io/Projeto/",
        github: "https://github.com/lukasmaicon/Projeto",
      },
      {
        title: "Finans",
        desc: "Landing page institucional de finanças pessoais com foco em design responsivo, componentes de interface bem estruturados e usabilidade clara.",
        tags: ["HTML5", "CSS3", "Bootstrap"],
        deploy: "https://lukasmaicon.github.io/Finans/",
        github: "https://github.com/lukasmaicon/Finans",
      },
      {
        title: "Spotify Clone",
        desc: "Interface inspirada na plataforma Spotify, desenvolvida durante treinamento na Udemy para consolidação de layouts complexos, grids e design responsivo.",
        tags: ["HTML5", "CSS3", "Bootstrap"],
        deploy: "https://lukasmaicon.github.io/Pagina-Spotify/",
        github: "https://github.com/lukasmaicon/Pagina-Spotify",
      },
    ],
  },
  en: {
    nav: { about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: {
      role: "Front-End Developer",
      title: "Crafting modern web experiences with",
      subtitle: "Developing interactive interfaces with a focus on user experience.",
      cta: "View Projects",
      ctaAlt: "Let's connect",
    },
    sections: {
      projects: "Featured Projects",
      projectsSub: "A curated selection of recent work.",
      soon: "Coming Soon",
      skills: "Tech Stack",
      skillsSub: "Tools I use every day.",
      education: "Education",
      educationSub: "Building knowledge continuously.",
      beyond: "Beyond the Code",
      beyondText: "Explore my interests and hobbies beyond the digital world.",
      interests: ["Travel 🛫", "Games 🎮", "Music 🎵", "Reading 📚", "Soccer ⚽", "Gym 💪🏻"],
      locationTitle: "Poços de Caldas — MG",
      locationSubtitle: "Brazil · remote",
      contact: "Let's Talk",
      contactSub: "Send a message straight to WhatsApp.",
    },
    skills: {
      c1: {
        title: "Front-end Core",
        desc: "Developing modern web applications with a focus on semantics, advanced styling, and reactivity.",
      },
      c2: {
        title: "UX/UI & Product",
        desc: "Crafting prototypes in Figma, engaging interface designs, and intuitive user flows.",
      },
      c3: {
        title: "AI-Powered Development",
        desc: "Continuous use of Cursor, ChatGPT, GitHub Copilot, and Claude for efficient workflows and clean code.",
      },
      c4: {
        title: "Tools & Versioning",
        desc: "Robust version control and relational database management (SQL).",
      },
    },
    education: {
      done: {
        tag: "Completed",
        title: "Systems Analysis and Development",
        desc: "Practical degree focused on building systems and developing web solutions.",
      },
      now: {
        tag: "In progress",
        title: "MBA in Data Science and AI",
        desc: "Specialization in Prompt Engineering and integration of Artificial Intelligence models into web applications.",
      },
    },
    contact: { name: "Name", message: "Message", send: "Send via WhatsApp" },
    footer: { text: "© 2026 Developer Lucas Maicon" },
    chat: {
      hi: "Hi! I'm Lucas's assistant. How can I help?",
      q1: "🛠️ What's his stack?",
      q2: "💼 Social Links",
      q3: "💬 WhatsApp him",
      a1: "Lucas works with React, Tailwind CSS, and modern JavaScript, leveraging advanced AI tools (such as Cursor, Copilot, ChatGPT, and Claude) to accelerate deliveries with clean code.",
      a2: "Connect: LinkedIn and GitHub available in the footer icons.",
      a3: "Opening WhatsApp...",
    },
    projectList: [
      {
        title: "WoodModern",
        desc: "Premium custom furniture catalog with a minimalist design and a focus on visual experience.",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        deploy: "https://lukasmaicon.github.io/WoodModern/",
        github: "https://github.com/lukasmaicon/WoodModern",
      },
      {
        title: "SushiTech",
        desc: "Japanese cuisine landing page and e-commerce with an immersive design, focused on conversion and fluid mobile experience.",
        tags: ["React", "Tailwind CSS", "TypeScript"],
        deploy: "https://lukasmaicon.github.io/sushi-tech/",
        github: "https://github.com/lukasmaicon/sushi-tech",
      },
      {
        title: "Aura",
        desc: "Conceptual smart travel platform combining immersive design with personalized itineraries and a strong focus on user experience.",
        tags: ["React", "Tailwind CSS", "TypeScript"],
        deploy: "https://lukasmaicon.github.io/Aura/",
        github: "https://github.com/lukasmaicon/Aura",
      },
      {
        title: "HubControl",
        desc: "Integrated corporate dashboard and admin panel, developed as an academic project focused on clean architecture and data management.",
        tags: ["React", "Tailwind CSS", "TypeScript"],
        deploy: "https://lukasmaicon.github.io/Projeto/",
        github: "https://github.com/lukasmaicon/Projeto",
      },
      {
        title: "Finans",
        desc: "Institutional personal finance landing page with a focus on responsive design, well-structured interface components, and clear usability.",
        tags: ["HTML5", "CSS3", "Bootstrap"],
        deploy: "https://lukasmaicon.github.io/Finans/",
        github: "https://github.com/lukasmaicon/Finans",
      },
      {
        title: "Spotify Clone",
        desc: "Interface inspired by the Spotify platform, developed during a Udemy course to master complex layouts, grid systems, and responsive design.",
        tags: ["HTML5", "CSS3", "Bootstrap"],
        deploy: "https://lukasmaicon.github.io/Pagina-Spotify/",
        github: "https://github.com/lukasmaicon/Pagina-Spotify",
      },
    ],
  },
  es: {
    nav: { about: "Sobre", skills: "Habilidades", projects: "Proyectos", contact: "Contacto" },
    hero: {
      role: "Desarrollador Front-End",
      title: "Creando experiencias web modernas con",
      subtitle: "Desarrollando interfaces interactivas con enfoque en la experiencia de usuario.",
      cta: "Ver Proyectos",
      ctaAlt: "Conectemos",
    },
    sections: {
      projects: "Proyectos Destacados",
      projectsSub: "Una selección curada de mi trabajo reciente.",
      soon: "Próximamente",
      skills: "Stack Técnico",
      skillsSub: "Herramientas que uso a diario.",
      education: "Formación Académica",
      educationSub: "Construyendo conocimiento de forma continua.",
      beyond: "Más Allá del Código",
      beyondText: "Explora mis intereses y hobbies más allá del mundo digital.",
      interests: ["Viajar 🛫", "Juegos 🎮", "Música 🎵", "Lectura 📚", "Fútbol ⚽", "Gimnasio 💪🏻"],
      locationTitle: "Poços de Caldas — MG",
      locationSubtitle: "Brasil · remote",
      contact: "Hablemos",
      contactSub: "Envía un mensaje directo por WhatsApp.",
    },
    skills: {
      c1: {
        title: "Front-end Core",
        desc: "Desarrollo de aplicaciones web modernas, enfocado en semántica, estilización avanzada y reactividad.",
      },
      c2: {
        title: "UX/UI y Producto",
        desc: "Creación de prototipos en Figma, diseño de interfaces atractivas y flujos de usuario intuitivos.",
      },
      c3: {
        title: "IA Aplicada al Desarrollo",
        desc: "Uso continuo de Cursor, ChatGPT, GitHub Copilot y Claude para flujos de trabajo eficientes y código limpio.",
      },
      c4: {
        title: "Herramientas y Versionado",
        desc: "Control de versiones robusto y gestión de bases de datos relacionales (SQL).",
      },
    },
    education: {
      done: {
        tag: "Completado",
        title: "Análisis y Desarrollo de Sistemas",
        desc: "Carrera práctica enfocada en la creación de sistemas y el desarrollo de soluciones web.",
      },
      now: {
        tag: "En curso",
        title: "MBA en Ciencia de Dados e IA",
        desc: "Especialización en Ingeniería de Prompts e integración de modelos de Inteligencia Artificial en aplicaciones web.",
      },
    },
    contact: { name: "Nombre", message: "Mensaje", send: "Enviar por WhatsApp" },
    footer: { text: "© 2026 Desarrollador Lucas Maicon" },
    chat: {
      hi: "¡Hola! Soy el asistente de Lucas. ¿Cómo puedo ayudar?",
      q1: "🛠️ ¿Cuál es su stack?",
      q2: "💼 Redes Sociales",
      q3: "💬 Llamarlo por WhatsApp",
      a1: "Lucas trabaja con React, Tailwind CSS y JavaScript moderno, utilizando herramientas avanzadas de IA (como Cursor, Copilot, ChatGPT y Claude) para acelerar entregas con código limpio.",
      a2: "Conéctate: LinkedIn y GitHub disponibles en los iconos del pie de página.",
      a3: "Abriendo WhatsApp...",
    },
    projectList: [
      {
        title: "WoodModern",
        desc: "Catálogo premium de muebles a medida con diseño minimalista y enfoque en la experiencia visual.",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        deploy: "https://lukasmaicon.github.io/WoodModern/",
        github: "https://github.com/lukasmaicon/WoodModern",
      },
      {
        title: "SushiTech",
        desc: "Landing page y comercio electrónico de cocina japonesa con diseño inmersivo, enfocado en la conversión y una experiencia móvil fluida.",
        tags: ["React", "Tailwind CSS", "TypeScript"],
        deploy: "https://lukasmaicon.github.io/sushi-tech/",
        github: "https://github.com/lukasmaicon/sushi-tech",
      },
      {
        title: "Aura",
        desc: "Plataforma conceptual de viajes inteligentes que combina un diseño inmersivo con itinerarios personalizados y enfoque en la experiencia de usuario.",
        tags: ["React", "Tailwind CSS", "TypeScript"],
        deploy: "https://lukasmaicon.github.io/Aura/",
        github: "https://github.com/lukasmaicon/Aura",
      },
      {
        title: "HubControl",
        desc: "Panel administrativo y dashboard corporativo integrado, desarrollado como proyecto académico enfocado en arquitectura limpia y gestión de datos.",
        tags: ["React", "Tailwind CSS", "TypeScript"],
        deploy: "https://lukasmaicon.github.io/Projeto/",
        github: "https://github.com/lukasmaicon/Projeto",
      },
      {
        title: "Finans",
        desc: "Landing page institucional de finanzas personales enfocada en diseño responsivo, componentes de interfaz bien estructurados y usabilidad clara.",
        tags: ["HTML5", "CSS3", "Bootstrap"],
        deploy: "https://lukasmaicon.github.io/Finans/",
        github: "https://github.com/lukasmaicon/Finans",
      },
      {
        title: "Spotify Clone",
        desc: "Interfaz inspirada en la plataforma Spotify, desarrollada durante un curso en Udemy para consolidar maquetación compleja, sistemas de rejilla y diseño responsivo.",
        tags: ["HTML5", "CSS3", "Bootstrap"],
        deploy: "https://lukasmaicon.github.io/Pagina-Spotify/",
        github: "https://github.com/lukasmaicon/Pagina-Spotify",
      },
    ],
  },
} as const;

import { createContext, useContext } from "react";
export const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "pt",
  setLang: () => {},
});
export const useT = () => {
  const { lang } = useContext(LangContext);
  return translations[lang];
};
export const useLang = () => useContext(LangContext);

export const WHATSAPP = "5535991982041";
export const SOCIAL = {
  github: "https://github.com/lukasmaicon",
  linkedin: "https://linkedin.com/",
  email: "mailto:lukasmaicon1994@gmail.com",
  whatsapp: `https://wa.me/${WHATSAPP}`,
};
