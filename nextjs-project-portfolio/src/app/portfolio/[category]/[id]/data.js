export const items = {
  app: [
    {
      id: 1,
      title: "App - Su Chófer Personal ",
      repo:"",
      url:"",
      desc: "Aplicación mobil multiplataforma desarrollada en flutter, orientada a ofrecer un servicio personalizado de VTC en Salamanca.",
      considerations:"Hata ahora mi mayor desafío, ya que las tecnologías que no tengo la misma experiencia con las tecnologías que uso en el proyecto de App multiplataforma, que con las que trabajo habitualmente para los proyectos web.", 
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
        1:{
         src: "/app_images/app-login.png",
         alt: "app-login",
         cat: "app",
         text:"Pantalla de inicio de sesión"
        },
        2:{
          src: "/app_images/app-register.png",
          alt: "app-register",
           cat: "app",
            text:"Pantalla de registro de nuevos usuarios"
         },
      }
    },

  ],
  game: [
    
    {
      id: 1,
      title: "Space Blast",
      desc: "Primer juego 2D de práctica en Godot 4 para interiorizar conceptos del motor y lenguaje de programación GD Sript",
      repo:"",
      url:"",
      considerations:"Un proyecto que guardo con mucho cariñó ya que fue mi iniciación en el mundo del desarrollo con motores de videojuegos y sus bases. ", 
        project_features: {
            1: "Juego 2D shooter espacial de scroll lateral en Godot 4.",
             2: "Aprendizaje: Control de elementos 2D e instanciar objetos como balas que al interactuar con los nodos enemigos desaparezcan con animaciones. Movimiento paralax del fondo para dar sensación de movimiento.",
             4: "Manejo de señales y comunicaciones entre nodos.",
             5: "Pequeño menú UI con canvas y botones.",
             6: "Musica de fondo y sonidos acordes a los disparos o explosiones.",
             7: "Gestion de sprites y animaciones",

        },
      category: "game",
      image:{
        1:{
          src:"/games/space-blast-intro.png",
          alt: "space-blast-intro",
           text:"Pantalla de inicio del juego"
        },
        2:{
          src:"/games/space-blast-combat.png",
          alt: "space-blast-game-combat",
           text:"Pantalla del gameplay del juego"
        },
        3:{
          src:"/games/space-blast-fin.png",
          alt: "space-blast-game-fin",
           text:"Pantalla de fin de partida"
        },
        
      }
        
    },
    {
      id: 2,
      title: "Light & Dark",
      repo:"",
      url:"",
      desc: "Juego 3D de terror actualmente en desarrollo en Unity 6, con una simple mecánica de encendido y apagado de linterna que modifica la realidad y lo que el jugador ve, con la finalidad de resolver puzzles y enigmas para avanzar.",
      considerations:"Juego que me ha ayudado a explorar el nuevo motor de Unity 6 y a comprender la programacion de movimientos en espacios 3D, diseño de niveles e implementar puzzles con el entorno", 
        project_features: {
            1: "Juego 3D en primera persona de terror en Unity 6.",
             2: "Survival Horror con una linterna y escenarios muy oscuros. Dependiendo de si la linterna está encendida o no la realidad se modifica.",
             3: "Puzzles y enigmas distribuidos por el escenario con la meánica de la linterna",
      
        },
      category: "game",
      image:{
        1:{
          src: "/games/terror1.png",
          alt: "terror1",
           text:"Imagen linterna encendida "
        },
        2:{
          src: "/games/terror2.png",
          alt: "terror2",
           text:"Imagen con linterna encendida y pared oculta cerrada"
        },
        3:{
          src: "/games/terror3.png",
          alt: "terror3"
          ,
           text:"Imagen con linterna apagada y pared oculta abierta"
        },
        4:{
          src: "/games/terror4.png",
          alt: "terror4",
           text:"Imagen parcial del puzzle (1/2) al apagar la luz de la linterna"
        },
        5:{
          src: "/games/terror5.png",
          alt: "terror5",
           text:"Imagen parcial del puzzle (2/2) al encender la luz de la linterna"
        },
        6:{
          src: "/games/terror6.png",
          alt: "terror6",
           text:"Imagen del desarrollo en Unity que muestra el puzzle anterior completo con un '100' formado con losetas"
        },
      }
       
    },
   
  ],
    
    website: [
      {
        id: 1,
        category: "website",
        repo:"https://github.com/Juaigles/nextJSproject",
        url:"https://www.vtcsuchoferpersonal.com",
        title: "Portafolio Juan María Iglesias Mateos",
        desc: "Esta es mi página web-portafolio para facilitar la visibilidad de los proyectos donde he trabajado o en los que aun estoy trabajando. ", 
        considerations:"Este proyecto ha sido el que mas me ha ayudado a comprender la estructura de rutas dinamicas con App Router, el uso de bases de datos con Next o el servicio de autenticacion con Google.",
        project_features: {
            1: "Web moderna y actual: Desarrollo con Next 14 con AppRouter y MongoDB.",
             2: "Estilos: CSS a traves de la exportación de modulos.",
             4: "Blog Interno para SEO: Desarrollo de un blog interno como herramienta estratégica para mejorar el posicionamiento en motores de búsqueda (SEO). Requiere de Login para postear artículos",
             5: "Sistema de registro de usuarios controlando errores y sistema de login manual o con la cuenta de Google",
             6: "Resumen de mis principales proyectos finalizados y en desarrollo con vinculo a GitHub",
             7: "Botón para cambiar entre tema claro o tema oscuro para la web de forma global",

        },
        
        
        image:{
          1:{
            src: "/webProjects/portfolio-home.png",
            alt: "portfolio-home",
            text:"Página Home tamaño Desktop con el tema oscuro"
          },
          19:{
            src: "/webProjects/homeBlackMobile.png",
            alt: "portfolio-homeMobile",
            text:"Página Home tamaño Mobile con el tema oscuro",
            cat:"app"
          },
         
          2:{
            src: "/webProjects/portfolio-blanco-home.png",
            alt: "blanco-home",
            text:"Página Home tamaño Desktop con el tema blanco"
          },
          20:{
            src: "/webProjects/homeWhiteMobile.png",
            alt: "portfolio-homeMobile",
            text:"Página Home tamaño Mobile con el tema oscuro",
            cat:"app"
          },
    
          4:{
            src: "/webProjects/portfolio-portfolio.png",
            alt: "portfolio",
            text :"Página general del portafolio tamaño Desktop"
          },
          11:{
            src: "/webProjects/portafolioMobile.png",
            alt: "portfolio-homeMobile",
            text:"Página de categorías del portafolio en tamaño mobile",
            cat:"app"
          },
          5:{
            src: "/webProjects/portfolio-trabajos.png",
            alt: "trabajos",
            text:"Página de mis trabajos 'Website' del portafolio en tamaño Desktop",
          },
          12:{
            src: "/webProjects/portafolioCat.png",
            alt: "portfolio-homeMobile",
            text:"Página categoria de mis trabajos 'Website' tamaño Mobile",
            cat:"app"
          },
          6:{
            src: "/webProjects/portfolio-trabajos-proyecto.png",
            alt: "proyectos",
            text:"Página resumen del proyecto seleccionado tamaño Desktop"
          },  13:{
            src: "/webProjects/misTrabajosMobile.png",
            alt: "portfolio-homeMobile",
            text:"Página resumen del proyecto seleccionado tamaño Mobile",
            cat:"app"
          },
          7:{
            src: "/webProjects/portfolio-login.png",
            alt: "portfolio-login",
            text:"Página de inicio de sesión tamaño Desktop"
          },
          8:{
            src: "/webProjects/dashBoardDesktop.png",
            alt: "portfolio-blog-ejemplo",
            text: "Página de dasboard tamaño Desktop"
          },
        
        
          9:{
            src: "/webProjects/blogPostDesktop.png",
            alt: "portfolio-blog-general",
            text: "Página general del Blog tamaño Desktop"
          },  14:{
            src: "/webProjects/blogPostMobile.png",
            alt: "portfolio-homeMobile",
            text:"Página del blog general tamaño Mobile",
            cat:"app"
          },
          10:{
            src: "/webProjects/blogDesktop.png",
            alt: "portfolio-blog-ejemplo",
            text: "Página de artículo del blog en tamaño Desktop"
          },
          
          11:{
            src: "/webProjects/portfolio-blanco.png",
            alt: "portfolio-blanco",
            text:"Pagina de la categoria Juegos con el tema blanco"
          },
      
          18:{
            src: "/webProjects/crearPostMobile.png",
            alt: "portfolio-blog-ejemplo",
            text: "Página de dashboard tamaño Mobile",
            cat: "app"
          },

      
        
        }
         
      },
      
      {
        id: 2,
        category: "website",
        repo:"https://github.com/Juaigles/web-taxi-vtc-su-chofer-personal",
        url:"https://www.vtcsuchoferpersonal.com",
        title: "Taxi/VTC Su Chófer Personal",
        desc: "He diseñado y desarrollado una página web moderna y funcional para un servicio de VTC y taxi en Salamanca, enfocada en ofrecer una experiencia de usuario fluida y profesional. La web, creada con Next.js 14, destaca por su rendimiento optimizado y su capacidad para responder a las necesidades del cliente y los usuarios.",
        considerations:"La web está activa y operativa, diseñada para reflejar la calidad y profesionalismo del servicio de VTC y taxi en Salamanca. Este proyecto no solo facilita la comunicación con los usuarios, sino que también ayuda al cliente a destacar frente a la competencia mediante un enfoque estratégico en SEO y la integración de herramientas clave para la experiencia del cliente. Con un diseño orientado al usuario, una arquitectura técnica sólida y una visión de futuro, esta web es un ejemplo claro de cómo combinar tecnología avanzada con las necesidades específicas de un negocio.", 
        project_features: {
            1: "Sistema de Contacto Eficiente: Implementación de un formulario de contacto dinámico, potenciado por Nodemailer, para gestionar mensajes de forma rápida y segura.",
             2: "Protección Avanzada: Integración de un sistema de reCAPTCHA para garantizar la seguridad contra el spam y proteger los datos de los usuarios.",
             3: "Conexión con Google Reviews: Vinculación directa a las reseñas de Google, permitiendo a los usuarios acceder a opiniones auténticas que refuerzan la confianza en el servicio.",
             4: "Blog Interno para SEO: Desarrollo de un blog interno como herramienta estratégica para mejorar el posicionamiento en motores de búsqueda (SEO). Este blog incluye publicaciones optimizadas que incrementan la visibilidad y el alcance del negocio.",
             5: "Preparación para la Globalización: En una próxima actualización, la web contará con páginas estáticas traducidas mediante i18n, asegurando una experiencia multilingüe para una audiencia internacional.",
             6: "Desarrollo con JavaScript: Código optimizado y estructurado en JavaScript, adaptado a las mejores prácticas del desarrollo web moderno.",
             7: "Despliegue en Vercel: La web está alojada en Vercel, garantizando un tiempo de carga rápido, estabilidad y escalabilidad para responder a picos de tráfico.",

        },
        
        
        image:{
          1:{
            src: "/webProjects/suChoferPersonal/desktop/sucho-hero-desktop.png",
            alt: "hero-suchoferpersonal",
            text:"Página Home version Desktop"

          },
          2:{
            src: "/webProjects/suChoferPersonal/desktop/sucho-buttons-desktop.png",
            alt: "suchoferpersonal-botones",
            text:"Apartado de botones dinámicos version Desktop"
          },
          3:{
            src: "/webProjects/suChoferPersonal/desktop/sucho-gallery-desktop.png",
            alt: "suchoferpersonal-galeria",
            text:"Componente de Galería de imágenes version Desktop"
          },
          4:{
            src: "/webProjects/suChoferPersonal/desktop/sucho-contact-desktop.png",
            alt: "suchoferpersonal-mapas",
            text:"Componente formulario de contacto version Desktop"
          },
          5:{
            src: "/webProjects/suChoferPersonal/desktop/sucho-reviews-desktop.png",
            alt: "suchoferpersonal-reseñas",
            text:"Componente de reseñas de Google version Desktop"
          },
          6:{
            src: "/webProjects/suchoBlogSeo.png",
            alt: "suchoferpersonal-blog-SEO",
            text:"Componente de Blog para la mejora del SEO en la web"
          },
          7:{
            src: "/webProjects/suChoferPersonal/mobile/sucho-hero-mobile.png",
                        alt: "hero-suchoferpersonal",
            text:"Página Home version Mobile",
            cat:"app"
          },
          8:{
            src: "/webProjects/suChoferPersonal/mobile/sucho-main-mobile.png",
           alt: "suchoferpersonal-main mobile",
            text:"Apartado princial en Mobile",
            cat:"app"
          },
          9:{
            src: "/webProjects/suChoferPersonal/mobile/sucho-buttons-mobile.png",
            alt: "suchoferpersonal-botones mobile",
            text:"Apartado de botones dinámicos version Mobile",
            cat:"app"
          },
          10:{
            src: "/webProjects/suChoferPersonal/mobile/sucho-google.png",
             alt: "suchoferpersonal-reseñas mobile",
            text:"Componente de reseñas de Google version Mobile",
            cat:"app"
          },
          11:{
            src: "/webProjects/suChoferPersonal/mobile/sucho-reviews-mobile.png",
             alt: "suchoferpersonal-reseñas mobile",
            text:"Componente de reseñas estilizado Mobile",
            cat:"app"
          },
          12:{
            src: "/webProjects/suChoferPersonal/mobile/blogButtonMobile.png",
            alt: "suchoferpersonal-blog-SEO mobile",
            text:"Componente de Blog para la mejora del SEO en la web",
            cat:"app"
          },

          13:{
            src: "/webProjects/suChoferPersonal/mobile/suchoContactMobile.png",
            alt: "suchoferpersonal-contacto-mobile",
            text:"Componente de formulario de contacto",
            cat:"app"
          },
          14:{
            src: "/webProjects/suChoferPersonal/mobile/suchoFooter-Mobile.png",
            alt: "suchoferpersonal-footer-mobile",
            text:"Componente de footer en versión Mobile",
            cat:"app"
          },
        
        }
         
      },
      {
        id: 3,
        category: "website",
        title: "Task-Manager",
        repo:"https://github.com/Juaigles/Personal-Task-Manager",
        url:"",
        desc: "Organizador de tareas con sisteam de login y registro para llevar un seguimiento personalizado y ordenado de tus tareas y garantizando la privacidad de tus notas ",
        considerations:"Proyecto que me ha ayudado bastante a entender el funcionamiento del sistema CRUD y como registrar la informacion creada por el usuario en una Base de datos", 
        project_features: {
            1: "Desarrollado con React + Vite y Tailwind",
             2: "Servidor montado en Express y Base de Datos con MongoDB Mongoose",
             3: "Desarrollo de peticiones y solicitudes CRUD",
             5: "Encriptacion de contraseñas con bcrypt",
             6: "Manejo de tokens con jsonWebToken",
            

        },
        
        
        image:{
          1:{
            src: "/webProjects/taskManager/task-manager-home.png",
            alt: "task-home",
            text: "Página principal del oganizador de tareas"
          },
          2:{
            src: "/webProjects/taskManager/task-dashboard.png",
            alt: "task-dashboard",
            text: "Página del dashboard del usuario donde almacena sus tareas"
          },
          3:{
            src: "/webProjects/taskManager/task-creator.png",
            alt: "task-creator",
            text: "Componente para crear las tareas"
          },
          4:{
            src: "/webProjects/taskManager/register-task-manager.png",
            alt: "register-task",
            text: "Formulario de registro para que cada usuario tenga acceso solo a sus tareas"
          },
     
        
        }
         
      },
      {
        id: 4,
        category: "website",
        repo:"https://github.com/Juaigles/Focus-on-your-goals-APP",
        url:"",
        title: "Metas App",
        desc: "Simple aplicacion web similar a la de Task Manager, pero esta vez enfocados en la organizacion de metas y objetivos a cumplir, con una interfaz de usuario mas vistosa y accesible.",
        considerations:"Este proyecto me ha ayudado mucho con el entendimiento de Tailwind para el desarrolo de una interfaz de usuario. Y mi primera vez tratando con el sistema CRUD y gestionando la creacion de metas, así como posibilidad para eliminar o editar.", 
        project_features: {
            1: "Proyecto sencillo pero que me ha ayudado a refozar mis conocimientos en diseño y maquetación de UI",
             2: "Practica para el sistema CRUD y gestion de las metas y objetivos personalizables, pudiendo crear, borrar y editar las metas registradas a tu nombre.",
             3: "Uso de Tailwind para los estilos",
             4: "Desarrollado con React y JavaScript",
             

        },
        
        
        image:{
          1:{
            src: "/webProjects/metasApp/metas-app-metas.png",
            alt: "metas-app-metas",
            text: "Página principal donde ves el avance y resumen de tus metas"
          },
        
          2:{
            src: "/webProjects/metasApp/editar-metas.png",
            alt: "editar-metas",
          text: "Menú para editar o borrar las metas"
          },
     
        
        }
         
      },



    ],
  };