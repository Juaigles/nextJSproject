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
         alt: "app-login"
        },
        2:{
          src: "/app_images/app-register.png",
          alt: "app-register"
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
          alt: "space-blast-intro"
        },
        2:{
          src:"/games/space-blast-combat.png",
          alt: "space-blast-game-combat"
        },
        3:{
          src:"/games/space-blast-fin.png",
          alt: "space-blast-game-fin"
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
          alt: "terror1"
        },
        2:{
          src: "/games/terror2.png",
          alt: "terror2"
        },
        3:{
          src: "/games/terror3.png",
          alt: "terror3"
        },
        4:{
          src: "/games/terror4.png",
          alt: "terror4"
        },
        5:{
          src: "/games/terror5.png",
          alt: "terror5"
        },
        6:{
          src: "/games/terror6.png",
          alt: "terror6"
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
            alt: "portfolio-home"
          },
          2:{
            src: "/webProjects/portfolio-blanco-home.png",
            alt: "blanco-home"
          },
    
          4:{
            src: "/webProjects/portfolio-portfolio.png",
            alt: "portfolio"
          },
          5:{
            src: "/webProjects/portfolio-trabajos.png",
            alt: "trabajos"
          },
          6:{
            src: "/webProjects/portfolio-trabajos-proyecto.png",
            alt: "proyectos"
          },
          7:{
            src: "/webProjects/portfolio-login.png",
            alt: "portfolio-login"
          },
          8:{
            src: "/webProjects/portfolio-crear-post.png",
            alt: "portfolio-contacto"
          },
          9:{
            src: "/webProjects/portfolio-blog-general.png",
            alt: "portfolio-blog-general"
          },
          10:{
            src: "/webProjects/portfolio-blog-ejemplo.png",
            alt: "portfolio-blog-ejemplo"
          },
          11:{
            src: "/webProjects/portfolio-blanco.png",
            alt: "portfolio-blanco"
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
            src: "/webProjects/sucho-hero-home.png",
            alt: "hero-suchoferpersonal"
          },
          2:{
            src: "/webProjects/sucho-botones.png",
            alt: "suchoferpersonal-botones"
          },
          3:{
            src: "/webProject/sucho-galeria-imagenes.png",
            alt: "suchoferpersonal-galeria"
          },
          4:{
            src: "/webProjects/sucho-mapas.png",
            alt: "suchoferpersonal-mapas"
          },
          5:{
            src: "/webProjects/sistema-reseñas-google.png",
            alt: "suchoferpersonal-reseñas"
          },
          6:{
            src: "/webProjects/sistema-reseñas-google.png",
            alt: "suchoferpersonal-blog-SEO"
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
            src: "/webProjects/task-manager-home.png",
            alt: "task-home"
          },
          2:{
            src: "/webProjects/task-dashboard.png",
            alt: "task-dashboard"
          },
          3:{
            src: "/webProject/task-creator.png",
            alt: "task-creator"
          },
          4:{
            src: "/webProjects/register-task-manager.png",
            alt: "register-task"
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
            src: "/webProjects/metas-app-metas.png",
            alt: "metas-app-metas"
          },
          2:{
            src: "/webProjects/metas-app.png",
            alt: "metas-app"
          },
          3:{
            src: "/webProject/editas-metas.png",
            alt: "editar-metas"
          },
     
        
        }
         
      },



    ],
  };