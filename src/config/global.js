export default {
  global: {
    componenteFormativo:
      'Determinación de condiciones sanitarias de procesos, productos y servicios',
    descripcionCurso:
      'Reconocer las condiciones sanitarias de cada uno de los procesos, productos y/o servicios de cualquier empresa es indispensable para garantizar la inocuidad y la calidad alimentaria, dando cumplimiento a la normativa correspondiente de proteger la salud de los consumidores a través de la adquisición y recepción de las materias primas e insumos, junto con la inspección de los factores de riesgo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Identificación de los componentes ambientales',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Interpretación y descripción de las afectaciones a la salud',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis de las condiciones sanitarias',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Reportes sanitarios',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar pdf',
        download: 'downloads/CFA_001_231100.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Identificación de componentes ambientales',
      referencia:
        'Los textos de la escuela. (2020). <em>Importancia de las interacciones entre los componentes del ambiente – Ciencias Naturales</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oN0FBwYfbNs',
    },
    {
      tema: 'Identificación de componentes ambientales',
      referencia:
        'Sociedad Mexicana de Salud Pública. (2020). <em>Zoonosis</em> [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YhcM9dJM6Ic',
    },
    {
      tema: 'Identificación de componentes ambientales',
      referencia:
        'Organización Mundial de Sanidad Animal. (2021). <em>La sanidad animal es la salud de todos</em>. Organización Mundial de Sanidad Animal.',
      tipo: 'Página web ',
      link: 'https://woah-report2021.org/es/',
    },
    {
      tema: 'Análisis de condiciones sanitaria',
      referencia:
        'Florida <em>Integrated Food Safety of Excellence.</em> (2015). <em>Enfermedades transmitidas por los alimentos: ¿qué problema?</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KZBMD9jnzZU',
    },
    {
      tema: 'Reportes sanitarios',
      referencia:
        'Medicina Humana. (2015). <em>Historia de la epidemiología</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YhcM9dJM6Ic',
    },
  ],
  glosario: [
    {
      termino: 'Abiótico',
      significado:
        'estos seres carecen de vida; pero determinan el espacio físico del ambiente como el aire, el suelo y el agua, a pesar de ser seres sin vida son esenciales para la subsistencia de todos los organismos vivos en el ecosistema.  ',
    },
    {
      termino: 'Biótico',
      significado:
        'este término hace referencia a todos los seres vivos que se encuentran presentes en un ambiente y los cuales interactúan entre sí, estos pueden ser:  bacterias microscópicas, hongos, flora, fauna e incluso los seres humanos.  ',
    },
    {
      termino: 'Elementos artificiales',
      significado:
        '“se incluye a todos aquellos creados por el ser humano, como la urbanización, la cultura, las tradiciones. La suma de estos valores naturales, culturales y sociales en un momento histórico y en un lugar en particular constituyen el medio ambiente” (Enciclopedia Concepto, 2022).  ',
    },
    {
      termino: 'Endemia',
      significado:
        'se conoce como aquella enfermedad infecciosa que aparece en un país concreto y en un momento determinado, estas enfermedades son típicas de una zona y están presentes en la población durante varios años. ',
    },
    {
      termino: 'Epidemiología',
      significado:
        'es la ciencia que estudia las epidemias, es decir, es la ciencia que estudia el fenómeno de la propagación de las enfermedades que afectan a las sociedades de manera expansiva en el marco de un ciclo de tiempo. ',
    },
    {
      termino: 'Organismos',
      significado:
        'son todos los seres vivos que componen diferentes espacios en la tierra, estos pueden cambiar y transformarse significativamente en forma, características y elementos primordiales, pasando de ser microorganismos a grandes animales. Esto sucede porque todos los organismos suponen la presencia de materia y una interacción permanente en el interior y exterior del ambiente. ',
    },
    {
      termino: 'Pandemia',
      significado:
        'hace referencia a la propagación de virus y enfermedades, y son epidemias que por su gran aceleración y crecimiento han acabado afectando a muchas zonas del mundo casi al mismo tiempo. ',
    },
    {
      termino: 'Salubridad',
      significado:
        'es un concepto que hace referencia a aquello que implica algo saludable para nuestra salud, esto puede ligarse también a la salud pública en general, a través de espacios físicos que cuenten con una prevención y un diagnóstico de plagas, bacterias, entre otros elementos vulnerables que pueden implicar un riesgo en la salud.  ',
    },
    {
      termino: 'Zoonosis',
      significado:
        'es una enfermedad infecciosa que se transmite de un animal infectado a un ser humano. Los patógenos zoonóticos pueden ser bacterias, virus, parásitos o agentes no convencionales que se propagan a los humanos por contacto directo o a través de alimentos, el agua o el medio ambiente.  ',
    },
  ],
  referencias: [
    {
      referencia:
        'Blog didáctico. (s.f). <em>¿Cuáles son los componentes del medio ambiente?</em> Blog didáctico.',
      link:
        'https://blogdidactico.com/cuales-son-los-componentes-del-medio-ambiente+',
    },
    {
      referencia:
        'Ecología Hoy. (s.f). <em>Enfermedades causadas por contaminación.</em> Ecología Hoy. ',
      link:
        'https://www.ecologiahoy.com/enfermedades-causadas-por-contaminacion',
    },
    {
      referencia:
        'Enciclopedia Concepto. (2022). <em>Medio ambiente.</em> Enciclopedia Concepto.  ',
      link:
        'https://concepto.de/medio-ambiente/#:~:text=La%20contaminaci%C3%B3n%20ambiental%20es%20definida,salud%20de%20los%20seres%20vivos. ',
    },
    {
      referencia:
        'Gobierno de España. (2019). <em>¿Qué es la etimología médica? Insectos que provocan y transmiten enfermedades.</em> Ministerio de Ciencia e Innovación.',
      link:
        'https://www.isciii.es/InformacionCiudadanos/DivulgacionCulturaCientifica/DivulgacionISCIII/Paginas/Divulgacion/EntomologiaMedicaISCIII.aspx#:~:text=La%20entomolog%C3%ADa%20m%C3%A9dica%20es%20la,como%20vectores%2C%20en%20su%20transmisi%C3%B3n',
    },
    {
      referencia:
        'Gobierno de México. (2019). <em>El riesgo a la salud por contaminación.</em> Cinvestav.',
      link:
        'https://www.cinvestav.mx/es-es/Utilidades/Publicaciones/el-riesgo-a-la-salud-por-contaminaci%C3%B3n',
    },
    {
      referencia:
        'INS. (2018). <em>Informe quincenal epidemiológico nacional.</em> INS.',
      link:
        'https://www.ins.gov.co/buscador-eventos/IQEN/IQEN%20vol%2023%202018%20num%2022.pdf',
    },
    {
      referencia:
        'Ministerio de Salud. (2022). <em>Análisis de situación de salud (ASIS)</em>. MinSalud. ',
      link:
        'https://www.minsalud.gov.co/salud/publica/epidemiologia/Paginas/analisis-de-situacion-de-salud-.aspx',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2020). Zoonosis. <em>World Health Organization. </em>',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal. (2021). <em>Reforzar las capacidades de los para profesionales de veterinaria mediante la educación.</em> Organización Mundial de Sanidad Animal.',
      link: 'https://www.woah.org/es/inicio/',
    },
    {
      referencia:
        'Parques Alegres. (2021). <em>Tipos de medio ambiente y sus características</em>. Parques Alegres.',
      link:
        'https://parquesalegres.org/biblioteca/blog/tipos-de-medio-ambiente-y-sus-caracteristicas/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lizeth Daniela Reinoso Diaz',
          cargo: 'Experta temática',
          centro: 'Regional Tolima. Centro Agropecuario La Granja',
        },
        {
          nombre: 'Oscar Absalón Guevara',
          cargo: 'Diseñador instruccional',
          centro:
            'Regional Santander. Centro de la Industria, la Empresa y los Servicios – CIES',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Asesora metodológica',
          centro: 'Regional Distrito Capital. Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Asesor pedagógico ',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'egional Distrito Capital. Centro de Diseño y Metrología',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador instruccional ',
          centro: 'Regional Tolima – Centro de Comercio y Servicios  ',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Metodóloga ',
          centro: 'Regional Tolima – Centro de Comercio y Servicios ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
