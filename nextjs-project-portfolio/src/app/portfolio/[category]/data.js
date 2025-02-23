export const items = {
    applications: [
      {
        id: 1,
        title: "App - Su Chófer Personal ",
        repo:"",
        url:"",
        
        desc: "Aplicación mobil multiplataforma desarrollada en flutter, orientada a ofrecer un servicio personalizado de VTC en Salamanca.",
        category: "app",
        tecs: ["flutter", ],
        image:
          "/app_images/app-register.png",
      },

    ],
    games: [
      {
        id: 1,
        title: "Space Blast",
        desc: "Primer juego 2D de práctica en Godot 4 para interiorizar conceptos del motor y lenguaje de programación GD Sript",
        repo:"",
        url:"",
        category: "game",
        tecs: ["godot" ],
        image:
          "/games/space-blast-intro.png",
      },
      {
        id: 2,
        title: "Light & Dark",
        repo:"",
        url:"",
        desc: "Juego 3D de terror actualmente en desarrollo en Unity 6, con una simple mecánica de encendido y apagado de linterna que modifica la realidad y lo que el jugador ve, con la finalidad de resolver puzzles y enigmas para avanzar.",
        category: "game",
        tecs: ["unity", ],
        image:
          "/games/terror1.png",
      },
     
    ],
    websites: [
      {
        id: 1,
        title: "Taxi/VTC Su Chófer Personal",
        repo:"https://github.com/Juaigles/web-taxi-vtc-su-chofer-personal",
        url:"https://www.vtcsuchoferpersonal.com",
        desc: "Página web dedicada a la información de servicios de VTC y taxi en la ciudad de Salamanca. Pagina desarrollada en Next 14, desplegada en Vercel. ",
        category: "website",
        tecs:  ["js","react", "next","tailwind"],
        
        image:
          "/webProjects/suChoferPersonal/desktop/sucho-hero-desktop.png",
      },
      {
        id:2,
        title: "Text Analyzer",
        repo: "https://github.com/Juaigles/web-taxi-vtc-su-chofer-personal",
  
        url:null,
        desc: "Applicacion web desarrollada con React de forma modular. Analiza el texto en tiempo real y cuenta los caracteres , palabras y frases. Y muestra una grafica con el porcentaje de uso de cada palabra.",

        category:"website",
        tecs:["js","react","tailwind"],
        image: "/webProjects/textAnalyzer/images/web/text-analyzer.png"
      },
      {
        id: 3,
        title: "Mótor de Búsqueda Indexada",
        repo:"https://github.com/Juaigles/videogame-search-engine",
        url:null,
        desc: "Proyecto de Motor de Búsqueda Indexada para videojuegos con filtros categrorias y ordenamiento, conectado a la API de RAWG.",
        category: "website",
        tecs: ["ts","react", "next", ],
        
        image:
          "/webProjects/searchGameEngine/buscador.png",
      },

      {
        id: 4,
        title: "Task Manager con sistema de Login/Register",
        repo:"https://github.com/Juaigles/Personal-Task-Manager",
         url:null,
        desc: "Web-app para la gestión de tareas con previo registro de usuario y base de datos que las almacena. Desarrollado en Vite con Express y Mongoose.",
        category: "website",
        tecs:  ["js","react", "next", "mongodb"],
        image:
          "/webProjects/taskManager/login-task-manager.png",
      },
      {
        id: 5,
        title: "Goals App con UI ",
        repo:"https://github.com/Juaigles/Focus-on-your-goals-APP",
        url:null,
        desc: "Web-app para la gestion visual de metas y objetivos. Con porcentaje segun progreso en la meta, y gestión de las metas con sistema CRUD.",
        category: "website",
        tecs:  ["js","react", "next", "tailwind"],
        image:
          "/webProjects/metasApp/editar-metas.png",
      }
    ],
  };