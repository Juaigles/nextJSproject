export const items = {
  app: [
    {
      id: 1,
      title: "App - Su Chófer Personal ",
      repo: "",
      url: "",
      desc: "Aplicación mobil multiplataforma desarrollada en flutter, orientada a ofrecer un servicio personalizado de VTC en Salamanca.",
      considerations:
        "Hata ahora mi mayor desafío, ya que las tecnologías que no tengo la misma experiencia con las tecnologías que uso en el proyecto de App multiplataforma, que con las que trabajo habitualmente para los proyectos web.",
      project_features: {
        1: "Desarrollo en flutter  con Android Studio.",
        2: "Gestion del sevidor con Nest y MongoDB",
        3: "Sitema de login y registro",
        4: "(En desarollo) Sistema de informacion del vehículo y chófer",
        5: "(En desarrollo) Distancia con el vehículo cercano.",
        6: "(En desarrollo) Opción de reserva del servicio.",
        7: "(En desarrollo) Publicar la aplicación y aprender el proceso.",
      },
      category: "app",
      image: {
        1: {
          src: "/app_images/app-login.png",
          alt: "app-login",
          cat: "app",
          text: "Pantalla de inicio de sesión",
        },
        2: {
          src: "/app_images/app-register.png",
          alt: "app-register",
          cat: "app",
          text: "Pantalla de registro de nuevos usuarios",
        },
      },
    },
  ],
  game: [
    {
      id: 1,
      title: "Space Blast",
      desc: "Primer juego 2D de práctica en Godot 4 para interiorizar conceptos del motor y lenguaje de programación GD Sript",
      repo: "",
      url: "",
      considerations:
        "Un proyecto que guardo con mucho cariñó ya que fue mi iniciación en el mundo del desarrollo con motores de videojuegos y sus bases. ",
      project_features: {
        1: "Juego 2D shooter espacial de scroll lateral en Godot 4.",
        2: "Aprendizaje: Control de elementos 2D e instanciar objetos como balas que al interactuar con los nodos enemigos desaparezcan con animaciones. Movimiento paralax del fondo para dar sensación de movimiento.",
        4: "Manejo de señales y comunicaciones entre nodos.",
        5: "Pequeño menú UI con canvas y botones.",
        6: "Musica de fondo y sonidos acordes a los disparos o explosiones.",
        7: "Gestion de sprites y animaciones",
      },
      category: "game",
      image: {
        1: {
          src: "/games/space-blast-intro.png",
          alt: "space-blast-intro",
          text: "Pantalla de inicio del juego",
        },
        2: {
          src: "/games/space-blast-combat.png",
          alt: "space-blast-game-combat",
          text: "Pantalla del gameplay del juego",
        },
        3: {
          src: "/games/space-blast-fin.png",
          alt: "space-blast-game-fin",
          text: "Pantalla de fin de partida",
        },
      },
    },
    {
      id: 2,
      title: "Light & Dark",
      repo: "",
      url: "",
      desc: "Juego 3D de terror actualmente en desarrollo en Unity 6, con una simple mecánica de encendido y apagado de linterna que modifica la realidad y lo que el jugador ve, con la finalidad de resolver puzzles y enigmas para avanzar.",
      considerations:
        "Juego que me ha ayudado a explorar el nuevo motor de Unity 6 y a comprender la programacion de movimientos en espacios 3D, diseño de niveles e implementar puzzles con el entorno",
      project_features: {
        1: "Juego 3D en primera persona de terror en Unity 6.",
        2: "Survival Horror con una linterna y escenarios muy oscuros. Dependiendo de si la linterna está encendida o no la realidad se modifica.",
        3: "Puzzles y enigmas distribuidos por el escenario con la meánica de la linterna",
      },
      category: "game",
      image: {
        1: {
          src: "/games/terror1.png",
          alt: "terror1",
          text: "Imagen linterna encendida ",
        },
        2: {
          src: "/games/terror2.png",
          alt: "terror2",
          text: "Imagen con linterna encendida y pared oculta cerrada",
        },
        3: {
          src: "/games/terror3.png",
          alt: "terror3",
          text: "Imagen con linterna apagada y pared oculta abierta",
        },
        4: {
          src: "/games/terror4.png",
          alt: "terror4",
          text: "Imagen parcial del puzzle (1/2) al apagar la luz de la linterna",
        },
        5: {
          src: "/games/terror5.png",
          alt: "terror5",
          text: "Imagen parcial del puzzle (2/2) al encender la luz de la linterna",
        },
        6: {
          src: "/games/terror6.png",
          alt: "terror6",
          text: "Imagen del desarrollo en Unity que muestra el puzzle anterior completo con un '100' formado con losetas",
        },
      },
    },
  ],

  website: [
    {
      id: 2,
      category: "website",
      repo: "https://github.com/Juaigles/prueba1",
      url: "",
      title: "Analizador de Texto",
      desc: "Proyecto basado en componente Figma para la parte IU/UX y desarrollado con React y Tailwind CSS. ",
      considerations:
        "Programa que analiza el texto en tiempo real mientras escribles, tomando en cuenta el total de caracteres, de palabras y frases. Pudiendo filtrar el funcionamiento eliminando los espacios entre palabras para la cuenta total de caracteres, o limitar los caracteres máximos. Debajo un analizador de densidad de texto, que muestra el porcentaje de uso de determinada letra en el texto. También uenta con cambio de tema (claro/oscuro).",
      project_features: {
        1: "Desarrollo basado en página de Figma",
        2: "Diseño modular y separación de componentes y funcionalidades",
        4: "Analisis del texto en tiempo real, con diferentes filtrados para condicionar el resultado.",
        5: "Uso de create context y use context para tema dinamico claro y oscuro.",
        6: "Diseño responsivo para escritorio, tablet y mobile.",
        7: "Estilos con Tailwind CSS 4",
      },

      image: {
        1: {
          src: "/webProjects/textAnalyzer/images/web/dark-theme.png",
          alt: "dark-text-analyzer",
          text: "Diseño base del analizador de texto en escritorio.",
        },
        2: {
          src: "/webProjects/textAnalyzer/images/web/light-theme.png",
          alt: "light-text-analyzer",
          text: "Diseño base del analizador de texto con tema claro en escritorio.",
        },
        3: {
          src: "/webProjects/textAnalyzer/images/web/text-analyzer.png",
          alt: "text-analyzer",
          text: "Demostracion general del analizador de texto, contando caracteres totales, palabras y frases. Y una muestra de densidad de texto que muestra el numero de veces que se ha utilizado cada caracter.",
        },
        4:{
          src: "/webProjects/textAnalyzer/images/web/see-more.png",
          alt: "see-more-text-analyzer",
          text:"Pòr defecto se muestran 5 caracteres, pero al pulsar `see more` se muestra al completo los caracteres usados."
        },
     

        7: {
          src: "/webProjects/textAnalyzer/images/web/dark-showcase.png",
          alt: "dark-text-analyzer-text",
          text: "Analizador de texto en escritorio.",
        },
        8: {
          src: "/webProjects/textAnalyzer/images/web/light-showcase.png",
          alt: "light-text-analyzer-text",
          text: "Analizador de texto con tema claro en escritorio.",
        },
        5: {
          src: "/webProjects/textAnalyzer/images/web/no-spaces.png",
          alt: "text-analyzer-no-spaces",
          text: "Demostracion del filtro sin espacios, el número de caracteres total es menor al no contemplar los espacions como válidos para el conteo.",
        },
        6: {
          src: "/webProjects/textAnalyzer/images/web/character-limit.png",
          alt: "text-analyzer-limit",
          text: "Demostración del filtro de límite de caracteres para condicionar el uso del analizador. Al superar el límite establecido, el textfield pasa a tener un borde rojo con un mensaje de advertencia para el usuario.",
        },

      
        // 9:{
        //   src: "/webProjects/textAnalyzer/images/phone/phone-dark.png",
        //   alt: "dark-text-analyze-phone",
        //   text:"Diseño base del analizador de texto en mobile."
        // },
        // 10:{
        //   src: "/webProjects/textAnalyzer/images/phone/phone.png",
        //   alt: "phone-text-analyzer",
        //   text:"Diseño completo mobile."
        // },
        // 11:{
        //   src: "/webProjects/textAnalyzer/images/phone/phone-light.png",
        //   alt: "light-text-analyzer",
        //   text:"Diseño base del analizador de texto en mobile."
        // },
        // 12:{
        //   src: "/webProjects/textAnalyzer/video/shovase-video.mp4",
        //   alt: "video-text-analyzer",
        //   text:"Video demostración del proyecto Text Analyzer"
        // },
      },
      video: {
        src: "/webProjects/textAnalyzer/video/shocase-video.mp4",
        poster: "/webProjects/textAnalyzer/images/web/dark-theme.png"
      }
    },
    {
      id: 3,
      category: "website",
      repo: "https://github.com/Juaigles/videogame-search-engine",
      url: "",
      title: "Motor de Búsqueda Indexada",
      desc: "Proyecto de Motor de Búsqueda Indexada para videjuegos con filtros categrorias y ordenamiento, conectado a la API de RAWG. ",
      considerations:
        " Crear un motor de búsqueda funcional y dinámico que permita a los usuarios explorar videojuegos utilizando una interfaz intuitiva y criterios de búsqueda personalizados.",
      project_features: {
        1: "Frontend y Backend combinados con Next.js",
        2: "Resultados en tiempo real mediante el uso de API dinámicas RAWG",
        4: "Búsqueda de videojuegos basada en palabras clave (nombre, género, plataforma)",
        5: "Filtros avanzados para refinar resultados (géneros, fecha de lanzamiento, calificaciones).",
        6: "Desarrollado con TypeScript como primer proyecto de práctica con este lenguaje.",
        7: "Proximamente gestion de la API a una base de datos para mejorar las búsquedas y resultados indexados",
      },

      image: {
        1: {
          src: "/webProjects/searchGameEngine/home2.png",
          alt: "sge-home",
          text: "Página principal con los juegos mas populares de inicio.",
        },
        2: {
          src: "/webProjects/searchGameEngine/buscador.png",
          alt: "buscador",
          text: "Buscador por nombre con resultados ordenado por popularidad",
        },

        3: {
          src: "/webProjects/searchGameEngine/categorias2.png",
          alt: "categoria",
          text: "Listado de categorías para filtrar (plataforma, temática)",
        },
        4: {
          src: "/webProjects/searchGameEngine/filtros.png",
          alt: "portfolio-homeMobile",
          text: "Sistema de ordenamiento como (popularidad, fecha, metacritic, alfabético)",
        },
      },
    },

    {
      id: 1,
      category: "website",
      repo: "https://github.com/Juaigles/web-taxi-vtc-su-chofer-personal",
      url: "https://www.vtcsuchoferpersonal.com",
      title: "Taxi/VTC Su Chófer Personal",
      desc: "He diseñado y desarrollado una página web moderna y funcional para un servicio de VTC y taxi en Salamanca, enfocada en ofrecer una experiencia de usuario fluida y profesional. La web, creada con Next.js 14, destaca por su rendimiento optimizado y su capacidad para responder a las necesidades del cliente y los usuarios.",
      considerations:
        "La web está activa y operativa, diseñada para reflejar la calidad y profesionalismo del servicio de VTC y taxi en Salamanca. Este proyecto no solo facilita la comunicación con los usuarios, sino que también ayuda al cliente a destacar frente a la competencia mediante un enfoque estratégico en SEO y la integración de herramientas clave para la experiencia del cliente. Con un diseño orientado al usuario, una arquitectura técnica sólida y una visión de futuro, esta web es un ejemplo claro de cómo combinar tecnología avanzada con las necesidades específicas de un negocio.",
      project_features: {
        1: "Sistema de Contacto Eficiente: Implementación de un formulario de contacto dinámico, potenciado por Nodemailer, para gestionar mensajes de forma rápida y segura.",
        2: "Protección Avanzada: Integración de un sistema de reCAPTCHA para garantizar la seguridad contra el spam y proteger los datos de los usuarios.",
        3: "Conexión con Google Reviews: Vinculación directa a las reseñas de Google, permitiendo a los usuarios acceder a opiniones auténticas que refuerzan la confianza en el servicio.",
        4: "Blog Interno para SEO: Desarrollo de un blog interno como herramienta estratégica para mejorar el posicionamiento en motores de búsqueda (SEO). Este blog incluye publicaciones optimizadas que incrementan la visibilidad y el alcance del negocio.",
        5: "Preparación para la Globalización: En una próxima actualización, la web contará con páginas estáticas traducidas mediante i18n, asegurando una experiencia multilingüe para una audiencia internacional.",
        6: "Desarrollo con JavaScript: Código optimizado y estructurado en JavaScript, adaptado a las mejores prácticas del desarrollo web moderno.",
        7: "Despliegue en Vercel: La web está alojada en Vercel, garantizando un tiempo de carga rápido, estabilidad y escalabilidad para responder a picos de tráfico.",
      },

      image: {
        1: {
          src: "/webProjects/suChoferPersonal/desktop/sucho-hero-desktop.png",
          alt: "hero-suchoferpersonal",
          text: "Página Home version Desktop",
        },
        2: {
          src: "/webProjects/suChoferPersonal/desktop/sucho-buttons-desktop.png",
          alt: "suchoferpersonal-botones",
          text: "Apartado de botones dinámicos version Desktop",
        },
        3: {
          src: "/webProjects/suChoferPersonal/desktop/sucho-gallery-desktop.png",
          alt: "suchoferpersonal-galeria",
          text: "Componente de Galería de imágenes version Desktop",
        },
        4: {
          src: "/webProjects/suChoferPersonal/desktop/sucho-contact-desktop.png",
          alt: "suchoferpersonal-mapas",
          text: "Componente formulario de contacto version Desktop",
        },
        5: {
          src: "/webProjects/suChoferPersonal/desktop/sucho-reviews-desktop.png",
          alt: "suchoferpersonal-reseñas",
          text: "Componente de reseñas de Google version Desktop",
        },
        6: {
          src: "/webProjects/suChoferPersonal/desktop/suchoBlogSeo.png",
          alt: "suchoferpersonal-blog-SEO",
          text: "Componente de Blog para la mejora del SEO en la web",
        },
        7: {
          src: "/webProjects/suChoferPersonal/mobile/sucho-hero-mobile.png",
          alt: "hero-suchoferpersonal",
          text: "Página Home version Mobile",
          cat: "app",
        },
        8: {
          src: "/webProjects/suChoferPersonal/mobile/sucho-main-mobile.png",
          alt: "suchoferpersonal-main mobile",
          text: "Apartado princial en Mobile",
          cat: "app",
        },
        9: {
          src: "/webProjects/suChoferPersonal/mobile/sucho-buttons-mobile.png",
          alt: "suchoferpersonal-botones mobile",
          text: "Apartado de botones dinámicos version Mobile",
          cat: "app",
        },
        10: {
          src: "/webProjects/suChoferPersonal/mobile/sucho-google.png",
          alt: "suchoferpersonal-reseñas mobile",
          text: "Componente de reseñas de Google version Mobile",
          cat: "app",
        },
        11: {
          src: "/webProjects/suChoferPersonal/mobile/sucho-reviews-mobile.png",
          alt: "suchoferpersonal-reseñas mobile",
          text: "Componente de reseñas estilizado Mobile",
          cat: "app",
        },
        12: {
          src: "/webProjects/suChoferPersonal/mobile/blogButtonMobile.png",
          alt: "suchoferpersonal-blog-SEO mobile",
          text: "Componente de Blog para la mejora del SEO en la web",
          cat: "app",
        },

        13: {
          src: "/webProjects/suChoferPersonal/mobile/suchoContactMobile.png",
          alt: "suchoferpersonal-contacto-mobile",
          text: "Componente de formulario de contacto",
          cat: "app",
        },
        14: {
          src: "/webProjects/suChoferPersonal/mobile/suchoFooter-Mobile.png",
          alt: "suchoferpersonal-footer-mobile",
          text: "Componente de footer en versión Mobile",
          cat: "app",
        },
      },
    },
    {
      id: 4,
      category: "website",
      title: "Task-Manager",
      repo: "https://github.com/Juaigles/Personal-Task-Manager",
      url: "",
      desc: "Organizador de tareas con sisteam de login y registro para llevar un seguimiento personalizado y ordenado de tus tareas y garantizando la privacidad de tus notas ",
      considerations:
        "Proyecto que me ha ayudado bastante a entender el funcionamiento del sistema CRUD y como registrar la informacion creada por el usuario en una Base de datos",
      project_features: {
        1: "Desarrollado con React + Vite y Tailwind",
        2: "Servidor montado en Express y Base de Datos con MongoDB Mongoose",
        3: "Desarrollo de peticiones y solicitudes CRUD",
        5: "Encriptacion de contraseñas con bcrypt",
        6: "Manejo de tokens con jsonWebToken",
      },

      image: {
        1: {
          src: "/webProjects/taskManager/task-manager-home.png",
          alt: "task-home",
          text: "Página principal del oganizador de tareas",
        },
        2: {
          src: "/webProjects/taskManager/task-dashboard.png",
          alt: "task-dashboard",
          text: "Página del dashboard del usuario donde almacena sus tareas",
        },
        3: {
          src: "/webProjects/taskManager/task-creator.png",
          alt: "task-creator",
          text: "Componente para crear las tareas",
        },
        4: {
          src: "/webProjects/taskManager/register-task-manager.png",
          alt: "register-task",
          text: "Formulario de registro para que cada usuario tenga acceso solo a sus tareas",
        },
      },
    },
    {
      id: 5,
      category: "website",
      repo: "https://github.com/Juaigles/Focus-on-your-goals-APP",
      url: "",
      title: "Metas App",
      desc: "Simple aplicacion web similar a la de Task Manager, pero esta vez enfocados en la organizacion de metas y objetivos a cumplir, con una interfaz de usuario mas vistosa y accesible.",
      considerations:
        "Este proyecto me ha ayudado mucho con el entendimiento de Tailwind para el desarrolo de una interfaz de usuario. Y mi primera vez tratando con el sistema CRUD y gestionando la creacion de metas, así como posibilidad para eliminar o editar.",
      project_features: {
        1: "Proyecto sencillo pero que me ha ayudado a refozar mis conocimientos en diseño y maquetación de UI",
        2: "Practica para el sistema CRUD y gestion de las metas y objetivos personalizables, pudiendo crear, borrar y editar las metas registradas a tu nombre.",
        3: "Uso de Tailwind para los estilos",
        4: "Desarrollado con React y JavaScript",
      },

      image: {
        1: {
          src: "/webProjects/metasApp/metas-app-metas.png",
          alt: "metas-app-metas",
          text: "Página principal donde ves el avance y resumen de tus metas",
        },

        2: {
          src: "/webProjects/metasApp/editar-metas.png",
          alt: "editar-metas",
          text: "Menú para editar o borrar las metas",
        },
      },
    },
  ],
};
