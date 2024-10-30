 const services = [
    {
      id: 1,
      title: "Litigación",
      category: "Derecho Civil",
      description: "Nuestra práctica de litigación se especializa en defender los derechos de nuestros clientes en todas las instancias del sistema judicial. Contamos con un equipo de abogados experimentados que trabajan incansablemente para garantizar la justicia. Abordamos casos complejos de litigio civil y comercial, utilizando estrategias adaptadas a las circunstancias únicas de cada caso. Nuestro enfoque es proactivo y orientado a resultados, asegurando que cada cliente reciba una representación de primer nivel.",
      experienceYears: 10,
      lawyers: [
        { name: "Sofía García", specialization: "Litigación Civil" },
        { name: "Carlos Mendoza", specialization: "Litigación Comercial" },
        { name: "Elena Rodríguez", specialization: "Litigación Laboral" }
      ],
      image: "path/to/litigation-image.jpg",
      clientReviews: [
        { rating: 5, comment: "Increíble servicio, muy profesionales." },
        { rating: 4, comment: "Resolví mi caso gracias a ellos." }
      ]
    },
    {
      id: 2,
      title: "Insolvencia",
      category: "Derecho Financiero",
      description: "Nuestro equipo de insolvencia está dedicado a ayudar a individuos y empresas a navegar por el proceso de reestructuración financiera. Proporcionamos una asesoría estratégica y comprensiva para enfrentar desafíos económicos, buscando soluciones que maximicen los recursos disponibles y reduzcan la carga de la deuda. Con un enfoque en la sostenibilidad a largo plazo, nuestro objetivo es restablecer la estabilidad financiera de nuestros clientes y guiarlos hacia un futuro más prometedor.",
      experienceYears: 8,
      lawyers: [
        { name: "Fernando López", specialization: "Reestructuración Empresarial" },
        { name: "Ana Pérez", specialization: "Derecho Concursal" }
      ],
      image: "path/to/insolvency-image.jpg",
      clientReviews: [
        { rating: 5, comment: "Me ayudaron a salir de una situación complicada." },
        { rating: 4, comment: "Muy buenos profesionales en insolvencia." }
      ]
    },
    {
      id: 3,
      title: "Resolución de Disputas",
      category: "Mediación y Arbitraje",
      description: "La resolución de disputas es fundamental en el entorno empresarial actual. Nuestro equipo se especializa en la mediación y el arbitraje, ofreciendo métodos alternativos para resolver conflictos de manera efectiva y eficiente. Trabajamos para evitar litigios prolongados, ayudando a las partes a llegar a acuerdos beneficiosos que preserven las relaciones comerciales y minimicen los costos. Nuestra experiencia en el manejo de disputas nos permite ofrecer soluciones creativas y personalizadas.",
      experienceYears: 12,
      lawyers: [
        { name: "Roberto Martínez", specialization: "Mediador Certificado" },
        { name: "Claudia Torres", specialization: "Árbitro" }
      ],
      image: "path/to/dispute-resolution-image.jpg",
      clientReviews: [
        { rating: 5, comment: "Un gran alivio evitar el juicio." },
        { rating: 5, comment: "Excelentes mediadores, lograron un acuerdo rápido." }
      ]
    },
    {
      id: 4,
      title: "Negocios",
      category: "Derecho Corporativo",
      description: "Ofrecemos asesoría integral en derecho de negocios, cubriendo todos los aspectos legales relacionados con la creación y operación de empresas. Desde la constitución de sociedades hasta la gestión de contratos comerciales, nuestro equipo de abogados está preparado para guiarte en cada paso. Nos enfocamos en proporcionar soluciones prácticas y efectivas que fomenten el crecimiento y la sostenibilidad de tu negocio en un entorno competitivo.",
      experienceYears: 5,
      lawyers: [
        { name: "Juliana Salazar", specialization: "Derecho Corporativo" },
        { name: "Andrés Castro", specialization: "Contratos Comerciales" }
      ],
      image: "path/to/business-image.jpg",
      clientReviews: [
        { rating: 4, comment: "Me ayudaron a establecer mi empresa sin problemas." },
        { rating: 5, comment: "Expertos en derecho corporativo." }
      ]
    },
    {
      id: 5,
      title: "Fraude",
      category: "Derecho Penal",
      description: "Nuestro equipo se especializa en la prevención y litigio de casos de fraude. Proporcionamos asesoramiento legal para identificar y manejar situaciones de fraude, y trabajamos para proteger los intereses de nuestros clientes mediante acciones legales efectivas. Con una sólida comprensión de las leyes penales, estamos aquí para garantizar que tus derechos sean defendidos en situaciones de deshonestidad empresarial.",
      experienceYears: 7,
      lawyers: [
        { name: "María Jiménez", specialization: "Litigación Penal" },
        { name: "Luis Ramírez", specialization: "Fraude Empresarial" }
      ],
      image: "path/to/fraud-image.jpg",
      clientReviews: [
        { rating: 5, comment: "Me defendieron en un caso complicado." },
        { rating: 4, comment: "Excelentes en casos de fraude." }
      ]
    },
    {
      id: 6,
      title: "Impuestos",
      category: "Derecho Tributario",
      description: "En un entorno fiscal complejo, ofrecemos asesoría en materia de impuestos para ayudar a nuestros clientes a cumplir con sus obligaciones tributarias. Nuestro equipo de expertos en derecho tributario proporciona estrategias para optimizar la carga impositiva y evitar sanciones. Estamos comprometidos a brindarte el apoyo necesario para que puedas gestionar tus asuntos fiscales de manera eficiente y efectiva.",
      experienceYears: 9,
      lawyers: [
        { name: "Patricia Ruiz", specialization: "Derecho Tributario" },
        { name: "Javier Ortega", specialization: "Planificación Fiscal" }
      ],
      image: "path/to/tax-image.jpg",
      clientReviews: [
        { rating: 5, comment: "Gran asesoría fiscal, muy profesionales." },
        { rating: 4, comment: "Me ayudaron a entender mis obligaciones tributarias." }
      ]
    }
  ];
  

  export default services