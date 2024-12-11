export default {
  global: {
    componenteFormativo: 'Propiedades mecánicas y metalúrgicas de los metales',
    descripcionCurso:
      'El componente formativo, propiedades mecánicas y metalúrgicas de los metales, aborda las características físicas y químicas de los metales, como tenacidad, ductilidad, maleabilidad, resistencia, fatiga, dureza, oxidación y corrosión. Incluye métodos de ensayo para evaluar su comportamiento, destacando normas como ASTM. Además, enfatiza la importancia de la correcta aplicación y las regulaciones ambientales en la industria metalúrgica.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Especificaciones técnicas de los productos metálicos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Ensayos físicos ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ensayos químicos ',
            hash: 't_1_2',
          },
        ],
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/94160001_CF01_DU.pdf',
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
      tema: 'Especificaciones técnicas de los productos metálicos ',
      referencia:
        'Lifeder Educación. (2022). METALES, NO METALES Y METALOIDES explicados: propiedades y ejemplos. [Archivo de video] YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/mMlqo2I1l6s?feature=shared  ',
    },
    {
      tema: 'Tracción  ',
      referencia:
        'EAFIT+. (2020). Ensayo: de tracción a probeta de acero. [Archivo de video] YouTube.   ',
      tipo: 'Video',
      link: 'https://youtu.be/wy7ENOO6RiI?feature=shared  ',
    },
    {
      tema: 'Comprensión  ',
      referencia:
        'Instron España. (2023). ¿Qué es un ensayo de compresión?. [Archivo de video] YouTube.   ',
      tipo: 'Video',
      link: 'https://youtu.be/MmV8ANzeVVc?feature=shared  ',
    },
    {
      tema: 'Corrosión ',
      referencia:
        'Elektro-Korrosion (2020). ¿Qué es la corrosión galvánica? Elektro-Korrosion. [Archivo de video] YouTube.   ',
      tipo: 'Video',
      link: 'https://youtu.be/8JErTBFhBDM?feature=shared  ',
    },
    {
      tema: 'Dureza  ',
      referencia:
        'Sinowon. (2023). Demostración Completa del Probador de Dureza Rockwell DigiRock DR3 |Guia Técnica y Tutorial. [Archivo de video] YouTube.  ',
      tipo: 'Video',
      link: 'https://youtu.be/eE6ovd4MCWg?feature=shared  ',
    },
  ],
  glosario: [
    {
      termino: 'Acero',
      significado:
        'aleación de hierro con pequeñas cantidades de carbono, silicio, manganeso y otros elementos. ',
    },
    {
      termino: 'Corrosión',
      significado:
        'degradación de un metal por la oxidación en ambientes húmedos o con sustancias específicas. ',
    },
    {
      termino: 'Ductilidad',
      significado:
        'capacidad de un metal para ser estirado en forma de hilos sin romperse. ',
    },
    {
      termino: 'Dureza',
      significado:
        'capacidad de un material para resistir la deformación cuando es sometido a presión. ',
    },
    {
      termino: 'Ensayo de tensión',
      significado:
        'prueba para determinar la resistencia y tenacidad de un metal bajo fuerzas uniaxiales. ',
    },
    {
      termino: 'Fatiga',
      significado:
        'fenómeno que provoca la rotura de un metal por esfuerzos repetidos o cíclicos. ',
    },
    {
      termino: 'Maleabilidad',
      significado:
        'capacidad de un metal para ser transformado en láminas mediante laminación. ',
    },
    {
      termino: 'Oxidación',
      significado:
        'reacción química de un metal con oxígeno, formando una capa de óxido en su superficie. ',
    },
    {
      termino: 'Resistencia',
      significado:
        'capacidad de un metal para soportar fuerzas o cargas sin deformarse permanentemente. ',
    },
    {
      termino: 'Tenacidad',
      significado:
        'energía de deformación que un material puede absorber antes de romperse. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Askeland, D. (2004). <em>Ciencia e ingeniería de los materiales</em> (4.ª ed.). Thomson.',
      link: '',
    },
    {
      referencia: 'ASTM Internacional. (2016). <em>ICAM 2024</em>.',
      link: 'http://www.astm.org',
    },
    {
      referencia:
        'Calle, G., & Henao, E. (2016). <em>Dureza Rockwell</em>. Universidad Tecnológica de Pereira.',
      link: '',
    },
    {
      referencia: 'Motorgiga. (2014). <em>Fatiga de los metales</em>.',
      link:
        'http://diccionario.motorgiga.com/diccionario/fatiga-de-los-metales-definicion-significado/gmx-niv15-con194122.htm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hivo Alfonso Patarroyo Pulido',
          cargo: 'Experto temático ',
          centro: 'Centro de Materiales y Ensayos - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
