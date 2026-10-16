const eventos = [
  {
    id: 'mh-donacion-residencia',
    anio: 1924,
    tipo: 'Historia del Michael Ham',
    icono: '🏫',
    titulo: 'Donación de la residencia de la familia Ham',
    texto:
      'La familia Ham donó su residencia de Vicente López a las Hermanas Pasionistas. La transferencia se concretó el 16 de junio de 1924. Dos años después, esa casa se convertiría en el lugar donde nació el colegio.',
    imagenSRC:
      'https://michaelham.org.ar/wp-content/uploads/2024/06/1923-Matrimonio-ham.jpg',
    pieDeImagen: 'Michael Ham y Ana María Lynch.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://michaelham.org.ar/institucional/nuestra-historia/',
      },
    ],
  },

  {
    id: 'mh-fundacion',
    anio: 1926,
    tipo: 'Historia del Michael Ham',
    icono: '🏫',
    titulo: 'Fundación del Michael Ham Memorial College',
    texto:
      'Las Hermanas Pasionistas abrieron el Michael Ham Memorial College en Vicente López con una primera camada de 44 alumnos. Comenzaba un proyecto educativo bilingüe que acompañaría a generaciones de estudiantes.',
    imagenSRC:
      'https://michaelham.org.ar/wp-content/uploads/2024/06/1926-Primera-camada.jpg',
    pieDeImagen: 'Primera camada del Michael Ham.',
    datoCurioso:
      'Cuando abrió el colegio, habían pasado apenas ocho años desde el armisticio de 1918, que marcó el final de los combates de la Primera Guerra Mundial.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://michaelham.org.ar/institucional/nuestra-historia/',
      },
    ],
  },

  {
    id: 'tec-tostadora-toastmaster',
    anio: 1926,
    tipo: 'Cambios tecnológicos',
    icono: '🍞',
    titulo: 'Lanzamiento de la tostadora automática Toastmaster',
    texto:
      'La Toastmaster llevó al hogar una tostadora automática que expulsaba el pan cuando estaba listo. La tecnología también cambiaba las pequeñas tareas de todos los días, incluso preparar el desayuno.',
    imagenSRC: 'https://antiquetoasters.synthasite.com/resources/TM1A1.JPG',
    pieDeImagen: 'Tostadora Toastmaster de la época.',
  },

  {
    id: 'tec-television-mecanica',
    anio: 1926,
    tipo: 'Cambios tecnológicos',
    icono: '📺',
    titulo: 'Demostración pública de la televisión mecánica',
    texto:
      'John Logie Baird mostró un sistema capaz de transmitir imágenes en movimiento. Todavía era experimental: cuando abrió el colegio, tener un televisor en casa estaba lejos de ser algo habitual.',
    imagenSRC:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Baird%20TV%201926a.jpg',
    pieDeImagen: 'Primeras demostraciones de televisión de Baird.',
  },

  {
    id: 'tec-television-electronica',
    anio: 1927,
    tipo: 'Cambios tecnológicos',
    icono: '📺',
    titulo: 'Primera transmisión de televisión electrónica de Farnsworth',
    texto:
      'Philo Farnsworth transmitió una imagen mediante un sistema completamente electrónico. Este avance ayudó a desarrollar los televisores que llegarían a los hogares décadas después.',
    imagenSRC:
      'https://coimages.sciencemuseumgroup.org.uk/55/185/medium_1937_0672__0001_.jpg',
    pieDeImagen:
      'Tubo disector de imagen asociado al desarrollo de Farnsworth.',
    datoCurioso: 'La imagen del experimento era una línea, no una película.',
  },

  {
    id: 'tec-cantor-de-jazz',
    anio: 1927,
    tipo: 'Cambios tecnológicos',
    icono: '🎬',
    titulo: 'Estreno de El cantor de jazz',
    texto:
      'El cantor de jazz ayudó a popularizar el cine con voces y canciones sincronizadas. No fue el primer experimento con sonido, pero marcó un cambio decisivo en la historia del cine. Actualmente se puede ver material de la película en YouTube.',
    imagenSRC:
      'https://commons.wikimedia.org/wiki/Special:FilePath/The%20Jazz%20Singer%201927%20Poster.jpg',
    pieDeImagen: 'Afiche de El cantor de jazz.',
    enlaces: [
      {
        tipo: 'video',
        texto: 'Ver en YouTube',
        url: 'https://www.youtube.com/watch?v=BOINlrUerEM',
      },
    ],
  },

  {
    id: 'tec-colectivo-argentino',
    anio: 1928,
    tipo: 'Cambios tecnológicos',
    icono: '🚌',
    titulo: 'Comienzan los primeros colectivos porteños',
    texto:
      'El 24 de septiembre, un grupo de taxistas de Buenos Aires comenzó a transportar a varios pasajeros en un mismo vehículo, siguiendo recorridos y cobrando tarifas por persona. La propuesta ofrecía una alternativa más económica que un viaje individual en taxi y dio origen al colectivo porteño.',
    imagenSRC:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7BKEy88QOgxbmXTpaHp_8B7YoI0_EYHrkMJK3gGjPoVoYDus268fV3jMo&s=10',
    pieDeImagen: 'Primeros taxi colectivos.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://www.argentina.gob.ar/noticias/24-de-septiembre-de-1928-dia-del-colectivero',
      },
    ],
  },

  {
    id: 'tec-microscopio-electronico',
    anio: 1931,
    tipo: 'Cambios tecnológicos',
    icono: '🔬',
    titulo: 'Construcción del primer microscopio electrónico',
    texto:
      'Max Knoll y Ernst Ruska construyeron un microscopio que usaba electrones en lugar de luz. Sus mejoras permitieron observar detalles diminutos de células y materiales que otros microscopios no podían mostrar.',
    imagenSRC:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwCkJ5BCqG8DVx0OXNLtbIBttNzqhrnyvH2B-b5m848BtJvof',
    pieDeImagen: 'Imagen ilustrativa de un microscopio electrónico.',
    datoCurioso:
      'Ernst Ruska recibió el Premio Nobel por este desarrollo en 1986, más de cincuenta años después de sus primeros experimentos.',
  },

  {
    id: 'mh-aulas-gaspar-campos',
    anio: 1933,
    tipo: 'Historia del Michael Ham',
    icono: '🏫',
    titulo: 'Construcción de aulas sobre Gaspar Campos',
    texto:
      'El colegio creció con nuevas aulas y un hall central. Esos espacios acompañaron las clases y las actividades de teatro, gimnasia, música y danza.',
    imagenSRC:
      'https://www.lanacion.com.ar/resizer/v2/el-colegio-michael-ham-mantiene-su-castillo-6PET52APCNED5EJDYDQWBASVXA.jpg?auth=9ea298ba212d7acef897e01c22db78b1fb72ed728d169ff7a1fe0ccf56f8bb30&width=1200&height=900&quality=70&smart=true',
    pieDeImagen:
      'Vista del colegio. Imagen ilustrativa; no es un registro de la construcción de 1933.',
  },

  {
    id: 'mh-fundacion-oga',
    anio: 1935,
    tipo: 'Historia del Michael Ham',
    icono: '🤝',
    titulo: 'Fundación de la OGA',
    texto:
      'Las Hermanas Pasionistas y un grupo de exalumnas impulsaron la OGA, la asociación de exalumnos del Michael Ham. Su labor reúne a distintas generaciones y promueve la educación, la solidaridad y la inclusión.',
    imagenSRC: 'https://oga.org.ar/wp-content/uploads/logo-oga2.svg',
    pieDeImagen: 'Logo de la OGA.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://oga.org.ar/quienes-somos/',
      },
    ],
  },

  {
    id: 'tec-radar',
    anio: 1935,
    tipo: 'Cambios tecnológicos',
    icono: '📡',
    titulo: 'Demostración del radar',
    texto:
      'Robert Watson-Watt y Arnold Wilkins demostraron que era posible detectar un avión mediante ondas de radio. El radar permite localizar objetos a distancia y más adelante sería fundamental para la navegación, el control aéreo y la observación del tiempo.',
    imagenSRC:
      'https://coimages.sciencemuseumgroup.org.uk/70/471/large_b570840.jpg',
    pieDeImagen: 'Equipo relacionado con el desarrollo del radar.',
  },

  {
    id: 'tec-bombe-enigma',
    anio: 1940,
    tipo: 'Cambios tecnológicos',
    icono: '🔐',
    titulo: 'La Bombe ayuda a descifrar los mensajes de Enigma',
    texto:
      'Durante la Segunda Guerra Mundial, Alan Turing, Gordon Welchman y los equipos de Bletchley Park desarrollaron la Bombe para ayudar a encontrar las claves de mensajes cifrados con Enigma. Enigma era la máquina que ocultaba los mensajes; la Bombe ayudaba a descifrarlos. Este esfuerzo colectivo continuó avances de especialistas polacos.',
    imagenSRC:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQJumD90XzGKs6-WTcLP0ZTXgQxvoJZYwyAIsshZoHk0mpyTwel1cWeak&s=10',
    pieDeImagen: 'Imagen de Enigma, la máquina de cifrado.',
    datoCurioso:
      'Se estima que el trabajo de los descifradores contribuyó a salvar millones de vidas al acortar la guerra, aunque no existe una cifra exacta comprobable. La película The Imitation Game, estrenada en 2014, dramatiza esta historia.',
  },

  {
    id: 'tec-computadora-z3',
    anio: 1941,
    tipo: 'Cambios tecnológicos',
    icono: '💻',
    titulo: 'Construcción de la computadora programable Z3',
    texto:
      'Konrad Zuse completó la Z3, una de las primeras computadoras automáticas programables. Podía hacer cálculos siguiendo instrucciones, un paso importante hacia los programas que hoy usamos para estudiar, trabajar y jugar.',
    imagenSRC:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Finder_Relais_Zuse_Z3.jpg',
    pieDeImagen: 'Reconstrucción de la Z3.',
    datoCurioso:
      'La Z3 leía sus programas desde una película perforada: las instrucciones estaban representadas por agujeros, no por un archivo en una pantalla.',
  },

  {
    id: 'tec-birome',
    anio: 1943,
    tipo: 'Cambios tecnológicos',
    icono: '🖊️',
    titulo: 'Se patenta la birome en Argentina',
    texto:
      'Ladislao José Biro desarrolló y perfeccionó un bolígrafo que utilizaba una pequeña bolita giratoria para distribuir tinta sobre el papel. Junto con su socio Juan Jorge Meyne, patentó la birome en Argentina en 1943. Su mecanismo ayudó a resolver problemas de manchas y pérdidas de tinta de las plumas estilográficas.',
    imagenSRC:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Bol%C3%ADgrafo_marca_birome_I.jpg/330px-Bol%C3%ADgrafo_marca_birome_I.jpg?utm_source=es.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
    pieDeImagen: 'Bolígrafo de marca Birome.',
    datoCurioso:
      'El nombre Birome combina los apellidos Biro y Meyne. Una marca terminó convirtiéndose en una palabra cotidiana para nombrar al bolígrafo.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://cultura.legislatura.gob.ar/cultura_posts/la-birome-un-invento-argentino995.html',
      },
    ],
  },

  {
    id: 'mh-capilla-santa-ana',
    anio: 1945,
    tipo: 'Historia del Michael Ham',
    icono: '⛪',
    titulo: 'La Capilla Santa Ana se incorpora a la historia del colegio',
    texto:
      'Frank Tooley, segundo esposo de Ana María Lynch, donó la Capilla Santa Ana en memoria de ella. La capilla se convirtió en un espacio emblemático de encuentro y celebración para la comunidad del Michael Ham.',
    imagenSRC:
      'https://michaelham.org.ar/wp-content/uploads/2024/06/1945-Capilla-Santa-Ana-exterior-e-interior.jpg',
    pieDeImagen: 'Exterior e interior de la Capilla Santa Ana.',
  },

  {
    id: 'tec-eniac',
    anio: 1946,
    tipo: 'Cambios tecnológicos',
    icono: '💻',
    titulo: 'Presentación de la computadora electrónica ENIAC',
    texto:
      'ENIAC era una gran computadora electrónica diseñada para realizar cálculos, entre ellos los de trayectorias de proyectiles. Pesaba unas 30 toneladas y ocupaba una sala. Demostró que la electrónica podía resolver cálculos a gran velocidad y abrió el camino hacia las computadoras que después llegarían a oficinas, hogares y bolsillos.',
    imagenSRC:
      'https://spectrum.ieee.org/media-library/two-women-programmers-preparing-a-computer-to-be-demonstrated.jpg?id=32130363&width=2400&height=1624',
    pieDeImagen: 'Dos programadoras preparando ENIAC para una demostración.',
    datoCurioso:
      'Seis mujeres fueron sus primeras programadoras. Para preparar los cálculos, conectaban cables y ajustaban interruptores: no escribían código como lo hacemos hoy.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://spectrum.ieee.org/the-women-behind-eniac',
      },
    ],
  },

  {
    id: 'tec-transistor',
    anio: 1947,
    tipo: 'Cambios tecnológicos',
    icono: '🔌',
    titulo: 'Invención del transistor',
    texto:
      'En Bell Labs, John Bardeen y Walter Brattain construyeron el primer transistor dentro del equipo dirigido por William Shockley. Este componente permite controlar señales eléctricas y ayudó a fabricar aparatos más pequeños y eficientes que los que usaban válvulas.',
    imagenSRC:
      'https://commons.wikimedia.org/wiki/Special:FilePath/1st-Transistor.jpg',
    pieDeImagen: 'Primer transistor de contacto puntual.',
  },

  {
    id: 'tec-nobel-houssay',
    anio: 1947,
    tipo: 'Cambios tecnológicos',
    icono: '🏅',
    titulo:
      'Bernardo Houssay, el argentino que ganó el Premio Nobel de Medicina',
    texto:
      'Bernardo Houssay recibió el Premio Nobel de Fisiología o Medicina por sus investigaciones sobre la participación de una hormona de la hipófisis en el metabolismo del azúcar. La hipófisis es una pequeña glándula ubicada en la base del cerebro. Su trabajo ayudó a comprender cómo las hormonas intervienen en la regulación de la glucosa.',
    imagenSRC:
      'https://inym.org.ar/imagenes/archivos/noticias/80602_imagen.jpg',
    pieDeImagen: 'Bernardo Houssay.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://www.nobelprize.org/prizes/medicine/1947/houssay/facts/',
      },
    ],
  },

  {
    id: 'mh-ampliacion-salamone',
    anio: 1950,
    tipo: 'Historia del Michael Ham',
    icono: '🏛️',
    titulo: 'Francisco Salamone participa en la ampliación del colegio',
    texto:
      'Durante la década de 1950, el arquitecto Francisco Salamone intervino en el crecimiento edilicio del Michael Ham. Su trabajo incluyó un nuevo sector sobre la calle Lavalle, que amplió los espacios de la sede de Vicente López.',
    imagenSRC:
      'https://www.lanacion.com.ar/resizer/v2/el-matadero-de-carhue-provincia-de-buenos-BQCYCNAWLRGNZOUT3KVBXPUVKA.jpg?auth=1dd1df15a8ea73ebe7d6da79d6dc7c06d571f6b2b097166c7641840a7c0d3b7e&width=1200&height=900&quality=70&smart=true',
    pieDeImagen:
      'Matadero de Carhué, una obra reconocida de Salamone. La foto no muestra el colegio.',
    datoCurioso:
      'Salamone es reconocido por sus edificios municipales, cementerios y mataderos monumentales en la provincia de Buenos Aires.',
  },

  {
    id: 'tec-diners-club',
    anio: 1950,
    tipo: 'Cambios tecnológicos',
    icono: '💳',
    titulo: 'Lanzamiento de la tarjeta Diners Club',
    texto:
      'Diners Club lanzó una tarjeta para pagar en distintos establecimientos y abonar la cuenta después. Fue un hito de los pagos sin efectivo. La marca sigue existiendo y sus tarjetas se utilizan para compras, viajes y gastos de empresas, con beneficios que dependen del país y del emisor.',
    imagenSRC:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjFrmgIpaMn5MXmbDh1rN01YhAJRqaxlwveZCtvW_pTL5lEzjxje0XB2xV&s=10',
    pieDeImagen: 'Tarjeta Diners Club.',
    datoCurioso:
      'Las primeras tarjetas Diners Club eran de cartón. Para pagar, se presentaba la tarjeta y se firmaba.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://www.dinersclub.com/about-us/history/',
      },
    ],
  },

  {
    id: 'tec-creacion-cnea',
    anio: 1950,
    tipo: 'Cambios tecnológicos',
    icono: '⚛️',
    titulo: 'Creación de la Comisión Nacional de Energía Atómica',
    texto:
      'El 31 de mayo se creó la Comisión Nacional de Energía Atómica, conocida como CNEA. Su misión incluye investigar y desarrollar aplicaciones pacíficas de la energía nuclear. Su actividad impulsó la formación de especialistas y proyectos vinculados con la energía, la medicina, la industria y la investigación científica.',
    imagenSRC:
      'https://www.argentina.gob.ar/sites/default/files/cnea-logook.png',
    pieDeImagen: 'Logo de la Comisión Nacional de Energía Atómica.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://www.argentina.gob.ar/noticias/se-cumplen-72-anos-de-la-creacion-de-la-comision-nacional-de-energia-atomica',
      },
    ],
  },

  {
    id: 'tec-canal-7',
    anio: 1951,
    tipo: 'Cambios tecnológicos',
    icono: '📺',
    titulo: 'Comienza la televisión argentina con Canal 7',
    texto:
      'El 17 de octubre comenzaron las transmisiones de Canal 7, el primer canal de televisión argentino. Al principio había pocos televisores: familias y vecinos se reunían para mirar una pantalla que después se volvería habitual en los hogares.',
    imagenSRC:
      'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/35U2GZA2RRHT3EIBTPCN7FMHUI.jpg',
    pieDeImagen: 'Comienzos de la televisión argentina.',
  },

  {
    id: 'tec-radio-transistores',
    anio: 1954,
    tipo: 'Cambios tecnológicos',
    icono: '📻',
    titulo: 'Lanzamiento de la primera radio comercial a transistores',
    texto:
      'La Regency TR-1 fue la primera radio comercial a transistores. Su tamaño ayudó a llevar música y noticias fuera de casa. La electrónica portátil comenzaba a entrar en la vida cotidiana.',
    imagenSRC:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Regency%20TR-1%20opened%20front%20Deutsches%20Museum.jpg',
    pieDeImagen: 'Radio Regency TR-1.',
  },

  {
    id: 'tec-disco-duro',
    anio: 1956,
    tipo: 'Cambios tecnológicos',
    icono: '💾',
    titulo: 'Presentación del primer disco duro comercial',
    texto:
      'IBM presentó el sistema RAMAC, que utilizaba el primer disco duro comercial. Su unidad de discos guardaba unos cinco millones de caracteres y ocupaba el espacio de un gran mueble.',
    imagenSRC:
      'https://images.computerhistory.org/revonline/images/102618852-03-01.jpg?w=600',
    pieDeImagen: 'Sistema IBM RAMAC.',
    datoCurioso:
      'La unidad de almacenamiento, junto con el compresor necesario para funcionar, pesaba más de una tonelada. Se alquilaba por 750 dólares mensuales de la época.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://www.ibm.com/history/ramac',
      },
    ],
  },

  {
    id: 'tec-tennis-for-two',
    anio: 1958,
    tipo: 'Cambios tecnológicos',
    icono: '🎮',
    titulo: 'Presentación de Tennis for Two',
    texto:
      'William Higinbotham y Robert Dvorak construyeron Tennis for Two para los visitantes de un laboratorio. Dos personas jugaban en una pantalla de osciloscopio con controles simples. Fue uno de los primeros juegos electrónicos interactivos.',
    imagenSRC:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Tennis%20For%20Two%20in%201958.jpg',
    pieDeImagen: 'Tennis for Two en 1958.',
    datoCurioso:
      'Cientos de visitantes hicieron fila para jugar durante la jornada de puertas abiertas del laboratorio. Un experimento científico se convirtió en una atracción.',
    enlaces: [
      {
        tipo: 'juego',
        texto: 'Jugar una recreación',
        url: 'https://eastcoastinteractive.itch.io/tennis-for-two',
      },
    ],
  },

  {
    id: 'tec-microchip',
    anio: 1958,
    tipo: 'Cambios tecnológicos',
    icono: '🔌',
    titulo: 'Demostración del primer microchip',
    texto:
      'Jack Kilby demostró un circuito integrado: varios componentes electrónicos reunidos en una pequeña pieza. Esto permitió construir circuitos más compactos y reducir muchas conexiones separadas. Fue clave para hacer aparatos cada vez más pequeños y potentes, como calculadoras, computadoras y celulares.',
    imagenSRC:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Kilby%27s%20Circuit.jpeg',
    pieDeImagen: 'Circuito integrado desarrollado por Jack Kilby.',
  },

  {
    id: 'tec-reactor-ra1',
    anio: 1958,
    tipo: 'Cambios tecnológicos',
    icono: '⚛️',
    titulo: 'Puesta en funcionamiento del reactor de investigación RA-1',
    texto:
      'El 17 de enero, el reactor RA-1 alcanzó su primera reacción nuclear controlada en el Centro Atómico Constituyentes. Fue el primer reactor nuclear puesto en funcionamiento en América Latina. Su desarrollo permitió realizar investigaciones y formar especialistas en tecnología nuclear.',
    imagenSRC:
      'https://www.argentina.gob.ar/sites/default/files/reactores-nucleares-cnea-750x365.jpg',
    pieDeImagen: 'Reactores nucleares de la CNEA.',
    datoCurioso:
      'El RA-1 es un reactor de investigación. Su función no es generar electricidad para abastecer ciudades, como lo hace una central nuclear.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://www.argentina.gob.ar/cnea/Tecnologia-nuclear/reactores-de-investigacion/ra-1',
      },
    ],
  },

  {
    id: 'tec-laser',
    anio: 1960,
    tipo: 'Cambios tecnológicos',
    icono: '🔬',
    titulo: 'Creación del primer láser operativo',
    texto:
      'Theodore Maiman hizo funcionar el primer láser, un dispositivo que produce un haz de luz muy concentrado. Después se usó en cirugías, corte y fabricación de materiales, lectura de discos y transmisión de información por fibra óptica.',
    imagenSRC:
      'https://commons.wikimedia.org/wiki/Special:FilePath/World%27s%20first%20laser%20out%20of%20case.jpg',
    pieDeImagen: 'Primer láser operativo.',
  },

  {
    id: 'tec-led',
    anio: 1962,
    tipo: 'Cambios tecnológicos',
    icono: '💡',
    titulo: 'Desarrollo del primer LED práctico de luz visible',
    texto:
      'Nick Holonyak desarrolló un LED práctico que emitía luz roja visible. Con nuevos avances, estos componentes llegarían a indicadores, pantallas y lámparas de bajo consumo.',
    imagenSRC:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OK68G7pUjITk909mp_ifAQMcwqbyBcD854c_9bx-2pUNbUPHMqksrg8&s=10',
    pieDeImagen: 'Imagen ilustrativa de la tecnología LED.',
  },

  {
    id: 'tec-casete',
    anio: 1963,
    tipo: 'Cambios tecnológicos',
    icono: '📼',
    titulo: 'Philips presenta el casete compacto',
    texto:
      'Philips presentó el casete compacto en Berlín. Su cinta magnética permitía grabar y reproducir sonidos en un formato pequeño. Más adelante se volvió muy popular para escuchar música, registrar voces y preparar compilaciones de canciones.',
    imagenSRC:
      'https://upload.wikimedia.org/wikipedia/commons/f/f0/Compactcassette.jpg',
    pieDeImagen: 'Casete compacto',
    datoCurioso:
      'Para volver a escuchar una parte había que rebobinar la cinta. No existía una barra para elegir el segundo exacto.',
    enlaces: [
      {
        tipo: 'video',
        texto: 'Escuchá la primera canción',
        url: 'https://www.youtube.com/watch?v=1DR5IprA7FY&list=RD1DR5IprA7FY&start_radio=1',
      },
    ],
  },

  {
    id: 'tec-bypass-favaloro',
    anio: 1967,
    tipo: 'Cambios tecnológicos',
    icono: '🫀',
    titulo: 'René Favaloro desarrolla y estandariza el bypass coronario',
    texto:
      'En la Cleveland Clinic, René Favaloro desarrolló y estandarizó una técnica de bypass coronario utilizando la vena safena. La operación crea un camino alternativo para que la sangre llegue al corazón cuando una arteria coronaria está obstruida. Este avance transformó el tratamiento de la enfermedad coronaria.',
    imagenSRC:
      'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/YDWRVQVLHRCIFIPTUXNI6ESROI.jpg',
    pieDeImagen: 'René Favaloro.',
    datoCurioso:
      'Para crear ese camino alternativo, la técnica utilizaba un segmento de una vena de la pierna del propio paciente.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://www.fundacionfavaloro.org/biografia/',
      },
    ],
  },

  {
    id: 'tec-magiclick',
    anio: 1968,
    tipo: 'Cambios tecnológicos',
    icono: '🔥',
    titulo: 'El Magiclick transforma el encendido de las cocinas',
    texto:
      'El diseñador industrial Hugo Kogan desarrolló para la empresa Aurora el Magiclick, un encendedor de cocina que genera una chispa al presionar un mecanismo. Aprovecha el efecto piezoeléctrico: ciertos materiales producen electricidad cuando reciben presión. Permitía encender las hornallas sin utilizar fósforos.',
    imagenSRC:
      'https://www.lanacion.com.ar/resizer/v2/hugo-kogan-el-inventor-del-3D73RKTVKZESTP65F7QQU2UO5A.JPG?auth=3a7b2685bf0080deac0efb843ecf05d78ac320c0fd1749cea1e9431bc0b1f3c1&width=1920&height=1280&quality=70&smart=true',
    pieDeImagen: 'Hugo Kogan y el Magiclick.',
    datoCurioso:
      'Su publicidad prometía una duración de 104 años. El cálculo se basaba en producir unas 25 chispas por día: era una promesa publicitaria, no una duración comprobada durante un siglo.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://malba.org.ar/el-magiclick-aliado-insoslayable-de-los-hogares-argentinos/',
      },
    ],
  },

  {
    id: 'tec-apolo-11',
    anio: 1969,
    tipo: 'Cambios tecnológicos',
    icono: '🚀',
    titulo: 'El Apolo 11 llega a la Luna',
    texto:
      'Neil Armstrong y Buzz Aldrin llegaron a la superficie lunar mientras Michael Collins permanecía en órbita. Cohetes, computadoras y comunicaciones hicieron posible la misión. Millones de personas siguieron por televisión una hazaña que parecía de ciencia ficción.',
    imagenSRC:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Aldrin%20Apollo%2011%20original.jpg',
    pieDeImagen: 'Buzz Aldrin durante la misión Apolo 11.',
    datoCurioso:
      'Durante el descenso, la computadora lanzó alarmas por sobrecarga. Su programación permitió priorizar las tareas esenciales y continuar el aterrizaje.',
    enlaces: [
      {
        tipo: 'video',
        texto: 'Ver la llegada a la Luna',
        url: 'https://www.youtube.com/watch?v=MypSliQOv2M',
      },
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://www.nasa.gov/mission/apollo-11/',
      },
    ],
  },

  {
    id: 'tec-arpanet',
    anio: 1969,
    tipo: 'Cambios tecnológicos',
    icono: '📡',
    titulo: 'ARPANET conecta computadoras a distancia',
    texto:
      'ARPANET conectó computadoras de centros de investigación para compartir recursos e información. El primer mensaje entre UCLA y SRI se envió el 29 de octubre. Fue un antecedente fundamental de Internet, la red de redes que hoy permite comunicarnos y acceder a servicios desde distintas partes del mundo.',
    imagenSRC:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ1M2Eeq9T0KGExXKG38uPn3A6fg8bcxLkDg7n-y8W1KVOEf8Pzo5cV1lm&s=10',
    pieDeImagen: 'ARPANET.',
    datoCurioso:
      'Internet y la Web no son lo mismo: la Web, con sus páginas y enlaces, aparecería después.',
  },

  {
    id: 'tec-nobel-leloir',
    anio: 1970,
    tipo: 'Cambios tecnológicos',
    icono: '🏅',
    titulo:
      'Luis Federico Leloir, segundo argentino en recibir un Premio Nobel en Ciencias',
    texto:
      'Luis Federico Leloir recibió el Premio Nobel de Química por descubrir los nucleótidos de azúcar y su función en la formación de carbohidratos. Estas moléculas participan en los procesos mediante los cuales las células construyen sustancias como el glucógeno y el almidón, que sirven como reservas de energía.',
    imagenSRC: 'https://www.conicet.gov.ar/wp-content/uploads/Imagen-3.jpg',
    pieDeImagen: 'Luis Federico Leloir.',
    datoCurioso:
      'Leloir había sido discípulo de Bernardo Houssay. Maestro y alumno terminaron recibiendo premios Nobel en distintas áreas de la ciencia.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://www.leloir.org.ar/110-anos-del-nacimiento-del-doctor-luis-federico-leloir',
      },
    ],
  },

  {
    id: 'mh-jardin-san-pablo',
    anio: 1971,
    tipo: 'Historia del Michael Ham',
    icono: '🤝',
    titulo: 'Inauguración del Jardín San Pablo de la Cruz',
    texto:
      'La OGA inauguró el Jardín San Pablo de la Cruz en Villa Martelli. Este proyecto educativo amplió el compromiso solidario de la comunidad del Michael Ham con la primera infancia.',
    imagenSRC: 'https://mvl.edu.ar/wp-content/uploads/KINO-BOVIO-3493.jpg',
    pieDeImagen: 'Aulas del jardin',
  },

  {
    id: 'tec-intel-4004',
    anio: 1971,
    tipo: 'Cambios tecnológicos',
    icono: '🧠',
    titulo: 'Presentación del microprocesador Intel 4004',
    texto:
      'Intel presentó el 4004, un chip que reunía funciones de cálculo y control de una computadora. Se diseñó inicialmente para una calculadora. La evolución de los microprocesadores permitió construir computadoras personales y muchos otros dispositivos.',
    imagenSRC:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpEZ4sqdLuxusOx7wfovuRXqhMn5LDYqbw2amC6EYOoa4GtMauYobR4md&s=10',
    pieDeImagen: 'Microprocesador Intel 4004.',
    datoCurioso:
      'El 4004 reunía unos 2.300 transistores en una superficie menor que una uña. Funciones que antes requerían muchos componentes empezaban a concentrarse en un chip.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://www.intel.com/content/www/us/en/history/virtual-vault/articles/the-intel-4004.html',
      },
    ],
  },

  {
    id: 'tec-pong',
    anio: 1972,
    tipo: 'Cambios tecnológicos',
    icono: '🎮',
    titulo: 'Lanzamiento del videojuego Pong',
    texto:
      'Atari lanzó Pong, un juego de tenis de mesa con dos paletas y una pelota en pantalla. Su éxito mostró que los videojuegos podían atraer a un público amplio y ayudó a impulsar la industria del entretenimiento electrónico.',
    imagenSRC: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Pong.png',
    pieDeImagen: 'Videojuego Pong.',
    datoCurioso:
      'Pong comenzó como una máquina para jugar en locales públicos. En 1975 llegó una versión doméstica que se conectaba al televisor: la pantalla del living también podía servir para jugar.',
    enlaces: [
      {
        tipo: 'juego',
        texto: 'Jugar Pong',
        url: 'https://juegos.games/juego/atari-pong/',
      },
    ],
  },

  {
    id: 'tec-primera-llamada-celular',
    anio: 1973,
    tipo: 'Cambios tecnológicos',
    icono: '📱',
    titulo: 'Primera llamada pública con un celular de mano',
    texto:
      'El 3 de abril, Martin Cooper, de Motorola, realizó una llamada pública desde un prototipo de teléfono celular portátil en Nueva York. Era una demostración: todavía faltaban años para que estos equipos llegaran al mercado.',
    imagenSRC: 'https://www.memo.com.ar/files/image/51/51069/642bed2b4b41e.jpg',
    pieDeImagen:
      'Imagen relacionada con la primera llamada pública desde un celular de mano.',
    datoCurioso:
      'Martin Cooper hizo la llamada a Joel Engel, un investigador de la empresa rival. Eligió demostrarle a su competidor que el teléfono portátil funcionaba.',
  },

  {
    id: 'tec-camara-digital',
    anio: 1975,
    tipo: 'Cambios tecnológicos',
    icono: '📷',
    titulo: 'Construcción de la primera cámara digital autónoma',
    texto:
      'Steven Sasson, ingeniero de Kodak, construyó un prototipo de cámara digital que capturaba imágenes sin película fotográfica. Guardaba fotos en blanco y negro en una cinta de casete y tardaba unos 23 segundos en registrar cada imagen.',
    imagenSRC:
      'https://photolari.com/wp-content/uploads/2025/06/kodak-primera-camara-1068x1018.jpg',
    pieDeImagen: 'Prototipo de cámara digital desarrollado en Kodak.',
    datoCurioso:
      'La paradoja de Kodak: dentro de la empresa nació una tecnología que transformaría su negocio. Su dificultad para adaptarse al cambio digital contribuyó a su crisis, y en 2012 se acogió a protección por bancarrota. El invento no fue la única causa.',
  },

  {
    id: 'tec-fundacion-apple',
    anio: 1976,
    tipo: 'Cambios tecnológicos',
    icono: '💻',
    titulo: 'Fundación de Apple',
    texto:
      'Steve Jobs, Steve Wozniak y Ronald Wayne fundaron Apple el 1 de abril. Ese año ofrecieron la Apple I, una placa de computadora a la que había que añadir teclado y pantalla. La empresa formó parte del avance de las computadoras personales hacia los hogares.',
    imagenSRC:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfhlC8wKZHUpmskS3iESoQntIs-ctWrv0go5SEYg4DW0xwFeW4lLgwCxLp&s=10',
    pieDeImagen: 'Comienzos de Apple.',
  },

  {
    id: 'tec-fundacion-invap',
    anio: 1976,
    tipo: 'Cambios tecnológicos',
    icono: '🛠️',
    titulo: 'Creación de INVAP',
    texto:
      'INVAP nació en Río Negro a partir de la experiencia de un grupo de investigadores de la CNEA. La empresa desarrolló proyectos tecnológicos complejos y amplió su actividad hacia los reactores nucleares, los satélites, los radares y los sistemas médicos.',
    imagenSRC:
      'https://www.argencon.org/wp-content/uploads/2026/09/argencon_invap_010926-768x432.jpg',
    pieDeImagen: 'Imagen institucional de INVAP.',
    datoCurioso:
      'Antes de consolidar sus instalaciones, INVAP tuvo una de sus primeras oficinas en una habitación del Instituto Balseiro, en Bariloche.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://www.ib.edu.ar/campus/inicios-de-invap/',
      },
    ],
  },

  {
    id: 'tec-walkman',
    anio: 1979,
    tipo: 'Cambios tecnológicos',
    icono: '🎧',
    titulo: 'Lanzamiento del Sony Walkman',
    texto:
      'Sony lanzó el Walkman, un reproductor portátil de casetes con auriculares. Ayudó a popularizar la escucha personal de música mientras uno caminaba o viajaba.',
    imagenSRC:
      'https://i.blogs.es/779a31/650_1000_sony_walkman_wm-2-2-1/650_1200.jpg',
    pieDeImagen: 'Sony Walkman WM-2, sucesor del modelo original de 1979.',
    datoCurioso:
      'La idea surgió del deseo de uno de los fundadores de Sony de escuchar música en estéreo durante sus viajes en avión.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://www.sony.com/en/SonyInfo/CorporateInfo/History/SonyHistory/2-03.html',
      },
    ],
  },

  {
    id: 'tec-ibm-pc',
    anio: 1981,
    tipo: 'Cambios tecnológicos',
    icono: '💻',
    titulo: 'Presentación de la IBM PC',
    texto:
      'IBM presentó su computadora personal 5150. Su diseño y los equipos compatibles ayudaron a expandir las PC en oficinas y hogares. Escribir documentos, hacer cuentas y ejecutar programas empezaba a ser posible en un equipo de escritorio.',
    imagenSRC:
      'https://upload.wikimedia.org/wikipedia/commons/2/25/IBM_PC_XT_color.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original',
    pieDeImagen:
      'IBM PC XT, modelo posterior a la IBM PC 5150 presentada en 1981.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://www.ibm.com/history/personal-computer',
      },
    ],
  },

  {
    id: 'tec-disco-compacto',
    anio: 1982,
    tipo: 'Cambios tecnológicos',
    icono: '💿',
    titulo: 'Lanzamiento comercial del disco compacto',
    texto:
      'El CD llegó como una nueva forma de escuchar música digital. Después se usaría también para guardar programas y archivos. A diferencia del casete, permitía seleccionar pistas sin rebobinar una cinta.',
    imagenSRC:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRps9R7K-RJMJXnjR0-KyqKSp8P7EbF6CD16scKZrsfAw&s=10',
    pieDeImagen: 'Disco compacto.',
  },

  {
    id: 'tec-celular-comercial',
    anio: 1983,
    tipo: 'Cambios tecnológicos',
    icono: '📱',
    titulo: 'Aprobación del primer celular de mano comercial',
    texto:
      'El Motorola DynaTAC 8000X recibió aprobación comercial en Estados Unidos. Era grande, costoso y estaba pensado para hacer llamadas. El prototipo demostrado en 1973 empezaba a convertirse en un producto comercial.',
    imagenSRC: 'https://i.blogs.es/d4ccf9/motorola-portada/450_1000.png',
    pieDeImagen: 'Imagen relacionada con el Motorola DynaTAC.',
  },

  {
    id: 'tec-nobel-milstein',
    anio: 1984,
    tipo: 'Cambios tecnológicos',
    icono: '🏅',
    titulo: 'César Milstein recibe el Premio Nobel de Medicina',
    texto:
      'César Milstein compartió el Premio Nobel de Fisiología o Medicina con Georges Köhler y Niels Jerne. Milstein y Köhler desarrollaron una técnica para producir anticuerpos monoclonales: anticuerpos iguales entre sí que reconocen un blanco específico. Esta herramienta abrió nuevas posibilidades para la investigación, el diagnóstico y los tratamientos médicos.',
    imagenSRC:
      'https://iquiba-nea.conicet.gov.ar/wp-content/uploads/sites/52/2021/02/milstein_byn.png',
    pieDeImagen: 'César Milstein.',
    datoCurioso:
      'El desarrollo de los anticuerpos monoclonales se publicó en 1975. El Premio Nobel llegó nueve años después.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://www.nobelprize.org/prizes/medicine/1984/press-release/',
      },
    ],
  },

  {
    id: 'tec-super-mario-bros',
    anio: 1985,
    tipo: 'Cambios tecnológicos',
    icono: '🎮',
    titulo: 'Lanzamiento de Super Mario Bros.',
    texto:
      'Nintendo lanzó Super Mario Bros., una aventura en la que Mario recorre el Reino Champiñón saltando obstáculos, recogiendo monedas y descubriendo mundos. Su éxito ayudó a popularizar los juegos de plataformas con desplazamiento lateral y lo convirtió en un referente de los videojuegos para jugar en casa.',
    imagenSRC:
      'https://upload.wikimedia.org/wikipedia/en/4/4e/Mariobrothers.png',
    pieDeImagen: 'Imagen del videojuego Super Mario Bros.',
    datoCurioso:
      'Mario ya había aparecido en juegos anteriores. En 1985 se lanzó Super Mario Bros., no se creó por primera vez el personaje.',
    enlaces: [
      {
        tipo: 'juego',
        texto: 'Jugar una versión web',
        url: 'https://supermario-game.com/es',
      },
    ],
  },

  {
    id: 'tec-windows',
    anio: 1985,
    tipo: 'Cambios tecnológicos',
    icono: '🪟',
    titulo: 'Lanzamiento de Windows 1.0',
    texto:
      'Microsoft lanzó Windows 1.0, un entorno gráfico para computadoras personales. Permitía trabajar con ventanas, menús y un mouse sobre MS-DOS. Estas formas de interacción facilitaron el uso de computadoras a muchas personas.',
    imagenSRC:
      'https://upload.wikimedia.org/wikipedia/commons/5/59/Windows_1.01_Bootscreen_20201222_EN.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original',
    pieDeImagen: 'Pantalla de inicio de Windows 1.01.',
  },

  {
    id: 'mh-book-week',
    anio: 1989,
    tipo: 'Historia del Michael Ham',
    icono: '📚',
    titulo: 'Primera Book Week del Michael Ham',
    texto:
      'El Michael Ham celebró su primera Book Week, una semana dedicada a fomentar la lectura con actividades y encuentros alrededor de los libros.',
    imagenSRC:
      'https://michaelham.org.ar/wp-content/uploads/2025/08/Book-Week-10-1024x684.jpg',
  },

  {
    id: 'tec-world-wide-web',
    anio: 1989,
    tipo: 'Cambios tecnológicos',
    icono: '🌐',
    titulo: 'Propuesta de creación de la World Wide Web',
    texto:
      'Tim Berners-Lee propuso en el CERN un sistema para compartir documentos conectados mediante enlaces. Esa idea dio origen a la Web: las páginas que visitamos con un navegador.',
    imagenSRC:
      'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/14378/production/_105980828_9407011_31-a4-at-144-dpi.jpg.webp',
    pieDeImagen: 'Primer servidor de la World Wide Web.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://home.cern/science/computing/the-birth-of-the-web/',
      },
    ],
  },

  {
    id: 'tec-jeringa-autodescartable',
    anio: 1989,
    tipo: 'Cambios tecnológicos',
    icono: '💉',
    titulo: 'Carlos Arcusin presenta un diseño de jeringa autodescartable',
    texto:
      'Carlos Eduardo Arcusin presentó un diseño de jeringa cuyo mecanismo queda inutilizado después de una aplicación. La propuesta buscaba impedir que una jeringa utilizada pudiera volver a cargarse e inyectar, reduciendo el riesgo asociado a su reutilización.',
    imagenSRC:
      'https://www.lanacion.com.ar/resizer/v2/hasta-hoy-el-invento-mas-trascendental-de-carlos-4IBGMYW6ERCJJLCQSTJRUOF3FU.jpg?auth=e8ec2521eaba7642951700a0ce47579afef553d9830f25b8c3c08affedbb9682&width=768&quality=70&smart=false',
    pieDeImagen: 'Diseño de jeringa autodescartable de Carlos Arcusin.',
  },

  {
    id: 'mh-centro-madre-maria-jose',
    anio: 1992,
    tipo: 'Historia del Michael Ham',
    icono: '🤝',
    titulo: 'Inauguración del Centro Madre María José',
    texto:
      'El 11 de abril, la OGA inauguró el Centro Madre María José en Villa Martelli. Comenzó como un espacio de apoyo escolar para 35 chicos, acompañados por voluntarias. Su actividad fortaleció el vínculo entre la comunidad del colegio y las familias del barrio.',
    imagenSRC: 'https://oga.org.ar/wp-content/uploads/anos-1992.webp',
    pieDeImagen: 'Imagen del archivo histórico de la OGA .',
  },

  {
    id: 'mh-fundacion-juridica',
    anio: 1993,
    tipo: 'Historia del Michael Ham',
    icono: '🏫',
    titulo: 'Constitución de la Fundación Colegio Michael Ham',
    texto:
      'A instancias de la Congregación, el colegio se organizó jurídicamente como Fundación. Integrada por un miembro permanente de la Congregación, padres y exalumnos, asumió el gobierno, la dirección y la administración del colegio sin fines de lucro.',
    imagenSRC:
      'https://michaelham.org.ar/wp-content/uploads/2024/06/1993-Fundacion-Colegio-Michael-Ham.jpg',
    pieDeImagen: 'Imagen ilustrativa. Fundación Colegio Michael Ham.',
  },

  {
    id: 'tec-amazon',
    anio: 1994,
    tipo: 'Cambios tecnológicos',
    icono: '🛒',
    titulo: 'Fundación de Amazon',
    texto:
      'Jeff Bezos fundó Amazon en 1994; su librería en línea abrió en 1995. Elegir un libro desde una computadora y recibirlo en casa mostraba una nueva forma de comprar. Después, el comercio electrónico se expandiría a muchos productos y servicios.',
    imagenSRC:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSywMjg8GcQeU0J2brPU-TML5pZzVqLf4OEGefBFY-VZGRwGgyb_0C0YAA&s=10',
    pieDeImagen: 'Imagen ilustrativa de Amazon.',
    datoCurioso:
      'El primer libro vendido por Amazon, en 1995, trataba sobre modelos computacionales del pensamiento. La tienda comenzó funcionando desde la casa de Jeff Bezos.',
  },

  {
    id: 'tec-google',
    anio: 1998,
    tipo: 'Cambios tecnológicos',
    icono: '🔎',
    titulo: 'Fundación de Google',
    texto:
      'Larry Page y Sergey Brin fundaron Google. Su buscador permitía localizar páginas en una Web que crecía rápidamente. Buscar respuestas desde una computadora se volvería una práctica cotidiana para estudiar, trabajar y resolver dudas.',
    imagenSRC:
      'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    pieDeImagen: 'Logo actual de Google. Imagen representativa, no de 1998.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://about.google/intl/es_ALL/company-info/our-story/',
      },
    ],
  },

  {
    id: 'mh-ampliacion-oferta-educativa',
    anio: 1999,
    tipo: 'Historia del Michael Ham',
    icono: '🏫',
    titulo: 'Decisión de ampliar la oferta educativa del Michael Ham',
    texto:
      'El Consejo decidió ampliar la oferta educativa para que más familias pudieran elegir el Michael Ham. Fue un paso importante en el crecimiento de la comunidad y en el camino hacia una nueva sede.',
    imagenSRC:
      'https://michaelham.org.ar/wp-content/uploads/2024/06/1999-Mas-Michael-para-mas-familias-1.jpg',
    pieDeImagen: 'Ampliación de la oferta educativa en 1999.',
  },

  {
    id: 'mh-contexto-nordelta',
    anio: 1999,
    tipo: 'Historia del Michael Ham',
    icono: '🏗️',
    titulo: 'Nordelta lanza su primer barrio',
    texto:
      'Nordelta lanzó La Alameda, su primer barrio, y en 2000 entregó el primer lote para construir. El desarrollo de esta nueva comunidad en Tigre sería el contexto de la futura sede del Michael Ham en Nordelta.',
    imagenSRC:
      'https://www.lanacion.com.ar/resizer/v2/toda-la-obra-de-ingenieria-de-dragado-para-la-CEQDATDGKJADJKMGBMTWXVTJQ4.JPG?auth=2c2d190d25c5d2a6ee6f5b1e7f934c87544f0420b3583b98572e4b556408426e&width=420&height=503&quality=70&smart=true',
    pieDeImagen:
      'Obras de ingeniería vinculadas con el desarrollo de Nordelta.',
    datoCurioso:
      'El proyecto había sido aprobado en 1992. Su desarrollo se concretó por etapas.',
  },

  {
    id: 'tec-weca-wifi',
    anio: 1999,
    tipo: 'Cambios tecnológicos',
    icono: '📡',
    titulo: 'Creación de WECA, la alianza que impulsó Wi-Fi',
    texto:
      'Varias empresas crearon WECA, luego llamada Wi-Fi Alliance, para promover la compatibilidad de equipos de redes inalámbricas. Su trabajo ayudó a que dispositivos de distintas marcas pudieran conectarse entre sí y a expandir el uso de Wi-Fi.',
    imagenSRC:
      'https://upload.wikimedia.org/wikipedia/commons/a/ae/WiFi_Logo.svg',
    pieDeImagen: 'Logo representativo de Wi-Fi.',
    datoCurioso:
      'Wi-Fi conecta dispositivos a una red sin un cable de red. No es lo mismo que Internet.',
  },

  {
    id: 'tec-ensayos-silobolsa',
    anio: 1999,
    tipo: 'Cambios tecnológicos',
    icono: '🌾',
    titulo: 'Ensayos argentinos de almacenamiento de granos en silobolsas',
    texto:
      'A fines de la década de 1990 se documentaron ensayos argentinos para almacenar granos en grandes bolsas plásticas herméticas. El trabajo del INTA, las empresas y los productores contribuyó a adaptar y desarrollar esta tecnología. El sistema permitió conservar cosechas en el propio campo y organizar su transporte y comercialización.',
    imagenSRC: 'https://www.expoagro.com.ar/wp-content/uploads/Silobolsa-3.jpg',
    pieDeImagen: 'Almacenamiento de granos en silobolsas.',
    datoCurioso:
      'La innovación no estuvo solamente en la bolsa: también requirió máquinas para llenarla y vaciarla, y conocimientos para conservar los granos en buenas condiciones.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://www.argentina.gob.ar/noticias/silobolsa-el-know-how-argentino-para-el-mundo',
      },
    ],
  },

  {
    id: 'mh-edificio-primaria',
    anio: 2000,
    tipo: 'Historia del Michael Ham',
    icono: '🏗️',
    titulo: 'Comienza la construcción del edificio de Primaria',
    texto:
      'En noviembre comenzó la construcción del edificio de Primaria de Vicente López. La obra acompañó el crecimiento de la sede y sumó espacios para las actividades escolares.',
    imagenSRC:
      'https://www.lanacion.com.ar/resizer/v2/colegio-michael-D3ICFKOA3VHSLDLU4IX755YITU.jpg?auth=1cfc2786840cd391aad0577555f9c921072de851677163e8ffc17f6ddb0d4180&width=1200&height=1200&quality=70&smart=true',
    pieDeImagen: 'Vista del colegio.',
  },

  {
    id: 'tec-wikipedia',
    anio: 2001,
    tipo: 'Cambios tecnológicos',
    icono: '📖',
    titulo: 'Lanzamiento de Wikipedia',
    texto:
      'Wikipedia comenzó como una enciclopedia gratuita en Internet que distintas personas podían editar. Facilitó consultar información y participar en la construcción del conocimiento.',
    imagenSRC:
      'https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png',
    pieDeImagen: 'Logo de Wikipedia.',
  },

  {
    id: 'mh-predio-nordelta',
    anio: 2002,
    tipo: 'Historia del Michael Ham',
    icono: '🏑',
    titulo:
      'Donación del predio de Nordelta e inauguración del campo de deportes',
    texto:
      'La Fundación recibió de Nordelta S.A. una donación de nueve hectáreas para construir una nueva sede. También se inauguró el campo de deportes. El colegio asumió el compromiso de completar las obras para 2013.',
    imagenSRC: 'https://michaelham.org.ar/wp-content/uploads/2024/02/2002.jpg',
    pieDeImagen: 'Imagen del Michael Ham.',
  },

  {
    id: 'tec-facebook',
    anio: 2004,
    tipo: 'Cambios tecnológicos',
    icono: '👥',
    titulo: 'Creación de Facebook',
    texto:
      'Facebook nació para conectar estudiantes universitarios y luego se abrió a más personas. Compartir mensajes, fotos y novedades en una red social se volvió una práctica masiva.',
    imagenSRC:
      'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg',
    pieDeImagen:
      'Icono de Facebook de 2021. Imagen representativa, no de su lanzamiento en 2004.',
  },

  {
    id: 'tec-youtube',
    anio: 2005,
    tipo: 'Cambios tecnológicos',
    icono: '▶️',
    titulo: 'Creación de YouTube y publicación de su primer video',
    texto:
      'YouTube comenzó en 2005. Su primer video, Me at the zoo, se publicó el 23 de abril. La plataforma expandió la posibilidad de ver y compartir videos: música, tutoriales y proyectos escolares encontraron una nueva forma de llegar al público.',
    imagenSRC:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Me%20at%20the%20zoo%20%28screenshot%29.png',
    pieDeImagen: 'Imagen del primer video de YouTube.',
    datoCurioso:
      'Ya no hacía falta tener un canal de televisión para compartir un video.',
    enlaces: [
      {
        tipo: 'video',
        texto: 'Ver el primer video',
        url: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
      },
    ],
  },

  {
    id: 'mh-apertura-nordelta',
    anio: 2006,
    tipo: 'Historia del Michael Ham',
    icono: '🏫',
    titulo: 'Apertura de la sede Nordelta',
    texto:
      'La sede Nordelta abrió sus puertas con una propuesta coeducativa, recibiendo alumnos de kínder y del primer ciclo de primaria. La comunidad crecía más allá de su sede histórica de Vicente López.',
    imagenSRC:
      'https://michaelham.org.ar/wp-content/uploads/2024/06/2006-Michael-Ham-Nordelta-.jpg',
    pieDeImagen: 'Sede Nordelta del Michael Ham.',
  },

  {
    id: 'tec-iphone',
    anio: 2007,
    tipo: 'Cambios tecnológicos',
    icono: '📱',
    titulo: 'Presentación del primer iPhone',
    texto:
      'Apple presentó el primer iPhone, que combinaba teléfono, música y navegación web en una pantalla táctil. Ayudó a popularizar una nueva forma de usar teléfonos inteligentes.',
    imagenSRC: 'https://i.blogs.es/575cb8/iphone/650_1200.jpg',
    pieDeImagen: 'Presentación del primer iPhone.',
    datoCurioso:
      'La tienda App Store llegó en 2008, un año después de la presentación del primer iPhone.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://www.apple.com/la/newsroom/2007/01/09Apple-Reinvents-the-Phone-with-iPhone/',
      },
    ],
  },

  {
    id: 'mh-ampliacion-nordelta',
    anio: 2008,
    tipo: 'Historia del Michael Ham',
    icono: '🏗️',
    titulo: 'Ampliación de los edificios de Nordelta',
    texto:
      'Entre 2008 y 2012 se construyeron el Main Building, el edificio de secundaria y el SUM. La sede creció para acompañar a sus estudiantes y completar el compromiso asumido al recibir el predio.',
    imagenSRC:
      'https://michaelham.org.ar/wp-content/uploads/2024/06/2008-Crecimiento-de-la-Sede-Nordelta.jpg',
    pieDeImagen: 'Crecimiento de la sede Nordelta.',
  },

  {
    id: 'tec-instagram',
    anio: 2010,
    tipo: 'Cambios tecnológicos',
    icono: '📷',
    titulo: 'Lanzamiento de Instagram',
    texto:
      'Instagram se lanzó como una aplicación para compartir fotos desde el celular. Sus filtros y su forma de mostrar imágenes popularizaron otra manera de comunicar momentos cotidianos.',
    imagenSRC:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCCd60_qPdCQMTKR422qXP_BKhQQLrWzDdFeRfIm0qJA&s=10',
    pieDeImagen: 'Imagen de Instagram.',
    datoCurioso:
      'Dos años después de su lanzamiento, Facebook anunció que compraría Instagram. Una aplicación de fotos se había convertido rápidamente en una empresa que atraía a los gigantes tecnológicos.',
  },

  {
    id: 'mh-viaje-reino-unido',
    anio: 2012,
    tipo: 'Historia del Michael Ham',
    icono: '✈️',
    titulo: 'Primer viaje de fin de estudios al Reino Unido',
    texto:
      'Las alumnas de la camada LXXIV de Vicente López realizaron el primer viaje de fin de estudios al Reino Unido. Visitaron Inglaterra y Escocia, compartiendo una experiencia de encuentro con la lengua, la cultura y la historia británicas.',
    imagenSRC:
      'https://img.magnific.com/foto-gratis/big-ben-puente-westminster-al-atardecer-londres-reino-unido_268835-1395.jpg?semt=ais_hybrid&w=740&q=80',
    pieDeImagen: 'Vista de Londres. Imagen ilustrativa del destino.',
  },

  {
    id: 'tec-arsat1',
    anio: 2014,
    tipo: 'Cambios tecnológicos',
    icono: '🛰️',
    titulo: 'Lanzamiento del satélite argentino ARSAT-1',
    texto:
      'El 16 de octubre se lanzó el ARSAT-1, el primer satélite de telecomunicaciones diseñado y fabricado en Argentina. El proyecto reunió a ARSAT e INVAP para brindar servicios de televisión, datos y conectividad. Su órbita geoestacionaria le permite mantenerse sobre la misma región de la Tierra.',
    imagenSRC:
      'https://upload.wikimedia.org/wikipedia/commons/2/2c/ARSAT-1_En_INVAP.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original',
    pieDeImagen: 'ARSAT-1 en INVAP.',
    datoCurioso:
      'En 2018 también se lanzó el satélite argentino SAOCOM 1A y, en 2020, el SAOCOM 1B. A diferencia del ARSAT-1, dedicado a las telecomunicaciones, los SAOCOM observan la Tierra con radar y aportan información para la agricultura y el seguimiento de emergencias.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://www.invap.com.ar/arsat1/',
      },
    ],
  },

  {
    id: 'mh-primeros-egresados-nordelta',
    anio: 2015,
    tipo: 'Historia del Michael Ham',
    icono: '🎓',
    titulo: 'Primera promoción de egresados de Nordelta',
    texto:
      'Egresó la primera camada de Nordelta, también la primera camada mixta del Michael Ham. La nueva sede completaba así el recorrido escolar de su primera generación de estudiantes.',
    imagenSRC:
      'https://michaelham.org.ar/wp-content/uploads/2024/07/2015-Primera-Promocion-de-Egresados-de-la-Sede-Nordelta.jpg',
    pieDeImagen: 'Primera promoción de egresados de la sede Nordelta.',
  },

  {
    id: 'tec-var-mundial',
    anio: 2018,
    tipo: 'Cambios tecnológicos',
    icono: '⚽',
    titulo: 'Primer uso del VAR en una Copa Mundial',
    texto:
      'En el Mundial de Rusia se utilizó asistencia de video para revisar determinadas decisiones arbitrales. En el partido Francia–Australia, el árbitro consultó las imágenes y sancionó un penal. La tecnología también cambiaba la forma de arbitrar el fútbol.',
    imagenSRC:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS4w01XVjv1CV-3_1AnxIsV6zNbvx_SlaFoZlYnO8BrHiwmk7YR',
    pieDeImagen: 'Imagen ilustrativa del uso de tecnología en el fútbol.',
    datoCurioso:
      'El VAR se aplica a situaciones específicas del juego; no revisa todas las decisiones.',
  },

  {
    id: 'mh-clases-virtuales',
    anio: 2020,
    tipo: 'Historia del Michael Ham',
    icono: '💻',
    titulo: 'Las clases se adaptan al formato virtual',
    texto:
      'Durante la pandemia, el Michael Ham adaptó sus clases al formato virtual. Docentes, estudiantes y familias reorganizaron sus rutinas para continuar aprendiendo y mantener el vínculo escolar a distancia.',
    imagenSRC:
      'https://media.tycsports.com/files/2021/04/06/254519/escuelas-coronavirus_862x485.jpg?v=1',
    pieDeImagen: 'Imagen ilustrativa de la época de pandemia.',
    datoCurioso:
      'En el momento de mayor cierre de escuelas por la pandemia, cerca de 1.600 millones de estudiantes de más de 190 países quedaron afectados. Lo que vivía la comunidad del Michael Ham también estaba ocurriendo en gran parte del mundo.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://www.unesco.org/en/covid-19/education-response',
      },
    ],
  },

  {
    id: 'mh-decision-ensenanza-mixta',
    anio: 2022,
    tipo: 'Historia del Michael Ham',
    icono: '🏫',
    titulo:
      'Decisión de incorporar enseñanza mixta en los primeros años de Vicente López',
    texto:
      'El colegio decidió incorporar el nivel inicial mixto y sumar varones en primer año de primaria de Vicente López. La apertura del nuevo kínder y de la primera división mixta se concretó en 2023.',
    imagenSRC:
      'https://michaelham.org.ar/wp-content/uploads/2024/06/2022-Nuevo-Nivel-Inicial-Mixto-y-varones-en-1o-Ano-EP-Vicente-Lopez.jpg',
    pieDeImagen: 'Nueva etapa educativa en Vicente López.',
  },

  {
    id: 'tec-chatgpt',
    anio: 2022,
    tipo: 'Cambios tecnológicos',
    icono: '🤖',
    titulo: 'Lanzamiento de ChatGPT',
    texto:
      'OpenAI lanzó ChatGPT, un sistema con el que se puede conversar por escrito, pedir explicaciones y generar textos. Su difusión acercó la inteligencia artificial generativa a muchas personas.',
    imagenSRC:
      'https://images.ctfassets.net/kftzwdyauwt9/7f6c5b76-875f-455d-ebb8813e1022/c16e0d3c81f4b9bcc9d9c65ed69b203d/chatgpt-og.jpg?w=1600&h=900&fit=fill',
    pieDeImagen: 'Presentación de ChatGPT.',
  },

  {
    id: 'mh-nuevo-kinder',
    anio: 2023,
    tipo: 'Historia del Michael Ham',
    icono: '🏫',
    titulo: 'Inauguración del nuevo kínder y apertura de primer grado mixto',
    texto:
      'Se inauguró el nuevo edificio de kínder en Vicente López, con salas K3, K4 y K5. También se incorporó la primera división mixta de primer año de primaria, iniciando una nueva etapa para la sede.',
    imagenSRC:
      'https://michaelham.org.ar/wp-content/uploads/2024/06/2023-Inauguracion-del-Nuevo-Edificio-Kinder-en-Vicente-Lopez-.jpg',
    pieDeImagen: 'Nuevo edificio de kínder en Vicente López.',
  },

  {
    id: 'mh-colegio-santa-gema',
    anio: 2026,
    tipo: 'Historia del Michael Ham',
    icono: '🤝',
    titulo: 'Abre el Colegio Santa Gema',
    texto:
      'En marzo abrió sus puertas el Colegio Santa Gema en Rincón de Milberg, impulsado por la comunidad del Michael Ham y la OGA. Comenzó con primer grado y busca ofrecer una educación integral e inclusiva a niños de familias en situación de vulnerabilidad.',
    imagenSRC: 'https://oga.org.ar/wp-content/uploads/anos-2026.webp',
    pieDeImagen: 'Colegio Santa Gema. Imagen publicada por la OGA.',
    datoCurioso:
      'El proyecto empezó a gestarse en 2024 y continúa la labor comunitaria de la Casa Santa Gema, cuya construcción comenzó en 2018.',
  },

  {
    id: 'mh-centenario',
    anio: 2026,
    tipo: 'Historia del Michael Ham',
    icono: '🎉',
    titulo: 'Celebración del Centenario del Michael Ham',
    texto:
      'El Michael Ham celebra un siglo de vida. A lo largo de estos cien años, distintas generaciones compartieron aprendizajes, encuentros y experiencias que forman parte de la historia del colegio.',
    imagenSRC:
      'https://michaelham.org.ar/wp-content/uploads/2026/05/Libro-Centenario-1-1-300x200.jpg',
    pieDeImagen: 'Libro del Centenario del Michael Ham.',
    enlaces: [
      {
        tipo: 'informacion',
        texto: 'Leer más…',
        url: 'https://michaelham.org.ar/100-anos/',
      },
    ],
  },
];

/* ==================================================
   LÍNEA DE TIEMPO DEL CENTENARIO
   ================================================== */

(() => {
  'use strict';

  const columnas = document.getElementById('timeline-columns');

  // La página de juegos no contiene la línea de tiempo.
  if (!columnas) return;

  const porId = (id) => document.getElementById(id);

  const ui = {
    desplazamiento: porId('timeline-scroll'),
    periodos: porId('period-navigation'),
    titulo: porId('event-title'),
    anio: porId('event-year'),
    categoria: porId('event-category'),
    descripcion: porId('event-description'),
    fotoBoton: porId('event-photo-button'),
    foto: porId('event-photo'),
    respaldo: porId('event-image-fallback'),
    respaldoIcono: porId('event-fallback-icon'),
    pie: porId('event-caption'),
    curiosidadBoton: porId('curiosity-toggle'),
    curiosidadPanel: porId('event-curiosity'),
    curiosidadTexto: porId('event-curiosity-text'),
    enlaces: porId('event-links'),
    anterior: porId('previous-event'),
    siguiente: porId('next-event'),
    contador: porId('event-counter'),
    izquierda: porId('scroll-timeline-left'),
    derecha: porId('scroll-timeline-right'),
    anuncio: porId('selection-announcement'),
    preview: porId('event-preview'),
    previewImagen: porId('preview-image'),
    previewIcono: porId('preview-icon'),
    previewAnio: porId('preview-year'),
    previewTitulo: porId('preview-title'),
    dialogo: porId('image-dialog'),
    dialogoTitulo: porId('image-dialog-title'),
    dialogoImagen: porId('dialog-image'),
    dialogoPie: porId('dialog-caption'),
    cerrarDialogo: porId('close-image-dialog'),
  };

  if (
    !Array.isArray(eventos) ||
    Object.values(ui).some((elemento) => !elemento)
  ) {
    console.error('Faltan datos o elementos de la línea de tiempo.');
    return;
  }

  // Ordena sin modificar el arreglo original.
  const lista = eventos
    .filter((evento) => evento && Number.isFinite(Number(evento.anio)))
    .map((evento, posicion) => ({ ...evento, posicion }))
    .sort((a, b) => Number(a.anio) - Number(b.anio) || a.posicion - b.posicion);

  if (!lista.length) {
    ui.titulo.textContent = 'No hay acontecimientos disponibles.';
    return;
  }

  const indices = new Map(lista.map((evento, indice) => [evento.id, indice]));

  const escuela = 'Historia del Michael Ham';

  let seleccionado = 0;
  let marcadorPreview = null;
  let tokenFoto = 0;

  /* --------------------------------------------------
       VISTA PREVIA
       -------------------------------------------------- */

  function ocultarPreview() {
    if (marcadorPreview) {
      marcadorPreview.classList.remove('is-previewing');
    }

    marcadorPreview = null;
    ui.preview.classList.remove('is-open');

    if (ui.preview.matches(':popover-open')) {
      ui.preview.hidePopover();
    }
  }

  function mostrarPreview(evento, marcador) {
    if (marcadorPreview && marcadorPreview !== marcador) {
      marcadorPreview.classList.remove('is-previewing');
    }

    marcadorPreview = marcador;
    marcador.classList.add('is-previewing');

    ui.previewAnio.textContent = String(evento.anio);
    ui.previewTitulo.textContent = evento.titulo;

    ui.previewImagen.hidden = !evento.imagenSRC;
    ui.previewIcono.hidden = Boolean(evento.imagenSRC);
    ui.previewIcono.textContent = evento.icono || '📅';

    if (evento.imagenSRC) {
      ui.previewImagen.src = evento.imagenSRC;
      ui.previewImagen.alt = evento.pieDeImagen || evento.titulo;
    }

    ui.preview.classList.add('is-open');

    if (
      typeof ui.preview.showPopover === 'function' &&
      !ui.preview.matches(':popover-open')
    ) {
      ui.preview.showPopover();
    }
  }

  ui.previewImagen.addEventListener('error', () => {
    ui.previewImagen.hidden = true;
    ui.previewIcono.hidden = false;
  });

  /* --------------------------------------------------
       DATOS CURIOSOS
       -------------------------------------------------- */

  function cerrarCuriosidad() {
    ui.curiosidadBoton.setAttribute('aria-expanded', 'false');
    ui.curiosidadPanel.classList.remove('is-open');
    ui.curiosidadPanel.inert = true;
  }

  /* --------------------------------------------------
       IMAGEN DEL ACONTECIMIENTO
       -------------------------------------------------- */

  function actualizarImagen(evento) {
    const token = ++tokenFoto;

    ui.fotoBoton.hidden = true;
    ui.fotoBoton.disabled = true;
    ui.respaldo.hidden = false;
    ui.respaldoIcono.textContent = evento.icono || '🏫';
    ui.pie.hidden = true;

    ui.foto.removeAttribute('src');

    if (!evento.imagenSRC) return;

    const foto = new Image();

    foto.onload = () => {
      if (token !== tokenFoto) return;

      ui.foto.src = evento.imagenSRC;
      ui.foto.alt = evento.pieDeImagen || evento.titulo;

      ui.fotoBoton.hidden = false;
      ui.fotoBoton.disabled = false;
      ui.respaldo.hidden = true;

      ui.pie.textContent = evento.pieDeImagen || '';
      ui.pie.hidden = !evento.pieDeImagen;
    };

    foto.onerror = () => {
      // Se conserva el respaldo visual.
    };

    foto.src = evento.imagenSRC;
  }

  /* --------------------------------------------------
       NAVEGACIÓN Y SELECCIÓN
       -------------------------------------------------- */

  function actualizarPeriodos() {
    const decada = Math.floor(Number(lista[seleccionado].anio) / 10) * 10;

    ui.periodos.querySelectorAll('[data-decada]').forEach((boton) => {
      boton.setAttribute(
        'aria-pressed',
        String(Number(boton.dataset.decada) === decada)
      );
    });
  }

  function elegir(indice, desplazar = true) {
    if (indice < 0 || indice >= lista.length) return;

    ocultarPreview();

    seleccionado = indice;
    const evento = lista[indice];

    ui.titulo.textContent = evento.titulo;
    ui.anio.textContent = String(evento.anio);
    ui.categoria.textContent = evento.tipo;

    ui.categoria.classList.toggle('is-technology', evento.tipo !== escuela);

    ui.descripcion.textContent = evento.texto || '';

    actualizarImagen(evento);
    cerrarCuriosidad();

    ui.curiosidadTexto.textContent = evento.datoCurioso || '';

    ui.curiosidadBoton.hidden = !evento.datoCurioso;

    // Enlaces externos del acontecimiento.
    ui.enlaces.replaceChildren();

    for (const enlace of evento.enlaces || []) {
      if (!enlace.url || !/^https?:\/\//i.test(enlace.url)) {
        continue;
      }

      const a = document.createElement('a');

      a.className = 'event-link';
      a.href = enlace.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = enlace.texto || 'Leer más';

      ui.enlaces.append(a);
    }

    ui.enlaces.hidden = !ui.enlaces.childElementCount;

    // Contador y botones anterior/siguiente.
    ui.contador.textContent = `Acontecimiento ${indice + 1} de ${lista.length}`;

    ui.anterior.disabled = indice === 0;
    ui.siguiente.disabled = indice === lista.length - 1;

    // Actualiza el marcador seleccionado.
    columnas.querySelectorAll('.event-marker').forEach((boton) => {
      const activo = boton.dataset.id === evento.id;

      boton.setAttribute('aria-pressed', String(activo));

      boton.closest('.timeline-event').classList.toggle('is-selected', activo);
    });

    actualizarPeriodos();

    // Anuncio para lectores de pantalla.
    ui.anuncio.textContent = `${evento.anio}: ${evento.titulo}`;

    if (desplazar) {
      const marcador = [...columnas.querySelectorAll('.event-marker')].find(
        (boton) => boton.dataset.id === evento.id
      );

      marcador?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }

  /* --------------------------------------------------
       CREACIÓN DE CÍRCULOS Y ACONTECIMIENTOS
       -------------------------------------------------- */

  function crearEvento(evento) {
    const envoltorio = document.createElement('div');
    envoltorio.className = 'timeline-event';

    const boton = document.createElement('button');

    boton.type = 'button';
    boton.className = 'event-marker';
    boton.dataset.id = evento.id;

    boton.setAttribute('aria-label', `${evento.anio}: ${evento.titulo}`);

    boton.setAttribute('aria-pressed', 'false');

    const icono = document.createElement('span');

    icono.setAttribute('aria-hidden', 'true');
    icono.textContent = evento.icono || '📅';

    boton.append(icono);

    boton.addEventListener('click', () => elegir(indices.get(evento.id)));

    boton.addEventListener('mouseenter', () => mostrarPreview(evento, boton));

    boton.addEventListener('mouseleave', ocultarPreview);

    boton.addEventListener('focus', () => mostrarPreview(evento, boton));

    boton.addEventListener('blur', ocultarPreview);

    const titulo = document.createElement('span');

    titulo.className = 'timeline-event-title';
    titulo.textContent = evento.titulo;

    envoltorio.append(boton, titulo);

    return envoltorio;
  }

  /* --------------------------------------------------
       CONSTRUCCIÓN DE LAS DOS LÍNEAS
       -------------------------------------------------- */

  const porAnio = new Map();

  for (const evento of lista) {
    if (!porAnio.has(evento.anio)) {
      porAnio.set(evento.anio, []);
    }

    porAnio.get(evento.anio).push(evento);
  }

  for (const [anio, grupo] of porAnio) {
    const columna = document.createElement('div');
    columna.className = 'year-column';

    const filaEscuela = document.createElement('div');
    filaEscuela.className = 'event-row event-row-school';

    const filaTecnologia = document.createElement('div');
    filaTecnologia.className = 'event-row event-row-technology';

    for (const evento of grupo) {
      const fila = evento.tipo === escuela ? filaEscuela : filaTecnologia;

      fila.append(crearEvento(evento));
    }

    const etiqueta = document.createElement('div');

    etiqueta.className = 'year-label';
    etiqueta.textContent = String(anio);

    columna.append(filaEscuela, etiqueta, filaTecnologia);

    columnas.append(columna);

    const cantidad = Math.max(
      filaEscuela.childElementCount,
      filaTecnologia.childElementCount
    );

    columna.style.minWidth = `calc(var(--ancho-evento) * ${cantidad})`;
  }

  /* --------------------------------------------------
       SELECTOR DE PERÍODOS
       -------------------------------------------------- */

  const decadas = [
    ...new Set(lista.map((evento) => Math.floor(evento.anio / 10) * 10)),
  ];

  for (const decada of decadas) {
    const boton = document.createElement('button');

    boton.type = 'button';
    boton.className = 'period-button';

    boton.dataset.decada = decada;
    boton.textContent = `${decada}–${decada + 9}`;

    boton.setAttribute('aria-pressed', 'false');

    boton.addEventListener('click', () => {
      const indice = lista.findIndex((evento) => evento.anio >= decada);

      elegir(indice);
    });

    ui.periodos.append(boton);
  }

  /* --------------------------------------------------
       CONTROLES DE NAVEGACIÓN
       -------------------------------------------------- */

  ui.anterior.addEventListener('click', () => elegir(seleccionado - 1));

  ui.siguiente.addEventListener('click', () => elegir(seleccionado + 1));

  ui.izquierda.addEventListener('click', () => {
    ui.desplazamiento.scrollBy({
      left: -450,
      behavior: 'smooth',
    });
  });

  ui.derecha.addEventListener('click', () => {
    ui.desplazamiento.scrollBy({
      left: 450,
      behavior: 'smooth',
    });
  });

  ui.curiosidadBoton.addEventListener('click', () => {
    const abrir = ui.curiosidadBoton.getAttribute('aria-expanded') !== 'true';

    ui.curiosidadBoton.setAttribute('aria-expanded', String(abrir));

    ui.curiosidadPanel.classList.toggle('is-open', abrir);
    ui.curiosidadPanel.inert = !abrir;
  });

  /* --------------------------------------------------
       VISUALIZACIÓN AMPLIADA DE IMÁGENES
       -------------------------------------------------- */

  ui.fotoBoton.addEventListener('click', () => {
    if (ui.fotoBoton.disabled) return;

    ui.dialogoTitulo.textContent = lista[seleccionado].titulo;

    ui.dialogoImagen.src = ui.foto.src;
    ui.dialogoImagen.alt = ui.foto.alt;

    ui.dialogoPie.textContent = lista[seleccionado].pieDeImagen || '';

    ui.dialogoPie.hidden = !lista[seleccionado].pieDeImagen;

    ui.dialogo.showModal();

    document.body.classList.add('has-open-dialog');
  });

  ui.cerrarDialogo.addEventListener('click', () => {
    ui.dialogo.close();
  });

  ui.dialogo.addEventListener('close', () => {
    document.body.classList.remove('has-open-dialog');
  });

  ui.dialogo.addEventListener('click', (evento) => {
    if (evento.target === ui.dialogo) {
      ui.dialogo.close();
    }
  });

  /* --------------------------------------------------
       INICIALIZACIÓN
       -------------------------------------------------- */

  elegir(0, false);
})();

/* ==================================================
   JUEGOS DE LOS ALUMNOS
   ================================================== */

(() => {
  'use strict';

  const catalogo = document.getElementById('catalogo-juegos');
  const jugador = document.getElementById('contenedor-juego');

  // El catálogo no existe en la página de inicio.
  if (!catalogo || !jugador) {
    return;
  }

  const elementos = {
    presentacion: document.getElementById('presentacion-juegos'),
    catalogo,
    jugador,
    informacion: document.getElementById('informacion-juegos'),
    volver: document.getElementById('volver-juegos'),
    categoria: document.getElementById('juego-categoria'),
    titulo: document.getElementById('juego-titulo'),
    descripcion: document.getElementById('juego-descripcion'),
    estado: document.getElementById('juego-estado'),
    progresoTexto: document.getElementById('juego-progreso-texto'),
    puntaje: document.getElementById('juego-puntaje'),
    progresoBarra: document.getElementById('juego-progreso-barra'),
    contenido: document.getElementById('juego-contenido'),
    mensaje: document.getElementById('juego-mensaje'),
    acciones: document.getElementById('juego-acciones'),
  };

  if (Object.values(elementos).some((elemento) => !elemento)) {
    console.error('Faltan elementos HTML para iniciar los juegos.');
    return;
  }

  if (typeof eventos === 'undefined' || !Array.isArray(eventos)) {
    console.error('No se encontró el arreglo de acontecimientos.');
    return;
  }

  /* ==================================================
       01. CONFIGURACIÓN Y ACONTECIMIENTOS
       ================================================== */

  const configuracion = {
    trivia: {
      titulo: 'Desafío del Centenario',
      categoria: 'Trivia histórica',
      descripcion:
        'Respondé diez preguntas sobre el Michael Ham y los avances tecnológicos.',
    },
    ordenar: {
      titulo: 'Ordená la Historia',
      categoria: 'Cronología',
      descripcion:
        'Organizá cuatro acontecimientos del más antiguo al más reciente.',
    },
    relacionar: {
      titulo: 'Conectá los Acontecimientos',
      categoria: 'Personajes e inventos',
      descripcion: 'Relacioná cada personaje con su aporte a la historia.',
    },
    fechas: {
      titulo: '¿En qué año ocurrió?',
      categoria: 'Fechas históricas',
      descripcion: 'Observá cada acontecimiento y tratá de acertar su año.',
    },
  };

  const eventosPorId = new Map(
    eventos
      .filter((evento) => evento && typeof evento.id === 'string')
      .map((evento) => [evento.id, evento])
  );

  function obtenerEvento(id) {
    return eventosPorId.get(id) || null;
  }

  function obtenerAnio(id) {
    const evento = obtenerEvento(id);
    return evento ? Number(evento.anio) : NaN;
  }

  /* ==================================================
       02. UTILIDADES
       ================================================== */

  function escaparHTML(valor) {
    return String(valor ?? '').replace(/[&<>"']/g, (caracter) => {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      }[caracter];
    });
  }

  function urlImagen(valor) {
    if (typeof valor !== 'string' || !valor.trim()) {
      return '';
    }

    try {
      const url = new URL(valor, document.baseURI);
      return ['https:', 'http:'].includes(url.protocol) ? url.href : '';
    } catch {
      return '';
    }
  }

  function mezclar(lista) {
    const resultado = [...lista];

    for (let i = resultado.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [resultado[i], resultado[j]] = [resultado[j], resultado[i]];
    }

    return resultado;
  }

  function irAlJugador() {
    elementos.jugador.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
      block: 'start',
    });
  }

  function mostrarMensaje(texto, correcto = null) {
    elementos.mensaje.textContent = texto;
    elementos.mensaje.hidden = false;

    elementos.mensaje.className = 'game-feedback';

    if (correcto === true) {
      elementos.mensaje.classList.add('is-correct');
    }

    if (correcto === false) {
      elementos.mensaje.classList.add('is-incorrect');
    }
  }

  function limpiarMensaje() {
    elementos.mensaje.hidden = true;
    elementos.mensaje.textContent = '';
    elementos.mensaje.className = 'game-feedback';
  }

  function boton(texto, accion, secundario = false) {
    const elemento = document.createElement('button');

    elemento.type = 'button';
    elemento.className = secundario
      ? 'game-secondary-button'
      : 'game-primary-button';

    elemento.textContent = texto;
    elemento.addEventListener('click', accion);

    return elemento;
  }

  function definirAcciones(...botones) {
    elementos.acciones.replaceChildren(...botones);
  }

  function actualizarEstado(actual, total, puntaje, maximo) {
    elementos.estado.hidden = false;

    elementos.progresoTexto.textContent = `Ronda ${actual} de ${total}`;

    elementos.puntaje.textContent = `Puntaje: ${puntaje} / ${maximo}`;

    elementos.progresoBarra.style.width = `${Math.min(
      100,
      Math.max(0, (actual / total) * 100)
    )}%`;
  }

  function mostrarImagen(evento) {
    const src = urlImagen(evento.imagenSRC);

    if (!src) {
      return '';
    }

    return `
        <figure class="game-event-figure">
          <img
            src="${escaparHTML(src)}"
            alt="${escaparHTML(evento.pieDeImagen || evento.titulo)}"
            loading="lazy"
          >
          ${
            evento.pieDeImagen
              ? `<figcaption>${escaparHTML(evento.pieDeImagen)}</figcaption>`
              : ''
          }
        </figure>
      `;
  }

  function renderizarOpciones(opciones, nombre = 'respuesta') {
    return `
        <div class="game-options" role="radiogroup" aria-label="Opciones de respuesta">
          ${opciones
            .map(
              (opcion, indice) => `
            <label class="game-option">
              <input
                type="radio"
                name="${nombre}"
                value="${escaparHTML(opcion)}"
                ${indice === -1 ? 'checked' : ''}
              >
              <span>${escaparHTML(opcion)}</span>
            </label>
          `
            )
            .join('')}
        </div>
      `;
  }

  function respuestaSeleccionada(nombre = 'respuesta') {
    return elementos.contenido.querySelector(`input[name="${nombre}"]:checked`);
  }

  function bloquearOpciones(correcta, nombre = 'respuesta') {
    elementos.contenido
      .querySelectorAll(`input[name="${nombre}"]`)
      .forEach((opcion) => {
        opcion.disabled = true;

        if (opcion.value === String(correcta)) {
          opcion.closest('.game-option').classList.add('is-correct');
        } else if (opcion.checked) {
          opcion.closest('.game-option').classList.add('is-incorrect');
        }
      });
  }

  function mostrarResultado(titulo, puntos, maximo, descripcion, reiniciar) {
    elementos.estado.hidden = true;
    limpiarMensaje();

    elementos.contenido.innerHTML = `
        <div class="game-final-result">
          <span class="game-final-icon" aria-hidden="true">🏆</span>
          <h3>${escaparHTML(titulo)}</h3>
          <div class="game-final-score">
            ${puntos} / ${maximo} puntos
          </div>
          <p>${escaparHTML(descripcion)}</p>
        </div>
      `;

    definirAcciones(
      boton('Volver a jugar', reiniciar),
      boton('Elegir otro juego', volverAlCatalogo, true)
    );
  }

  /* ==================================================
       03. NAVEGACIÓN GENERAL
       ================================================== */

  let juegoActual = null;

  function iniciarJuego(tipo) {
    if (!configuracion[tipo]) {
      return;
    }

    juegoActual = tipo;

    elementos.presentacion.hidden = true;
    elementos.catalogo.hidden = true;
    elementos.informacion.hidden = true;
    elementos.jugador.hidden = false;

    elementos.titulo.textContent = configuracion[tipo].titulo;
    elementos.categoria.textContent = configuracion[tipo].categoria;
    elementos.descripcion.textContent = configuracion[tipo].descripcion;

    elementos.contenido.replaceChildren();
    elementos.acciones.replaceChildren();

    limpiarMensaje();

    switch (tipo) {
      case 'trivia':
        iniciarTrivia();
        break;
      case 'ordenar':
        iniciarOrdenar();
        break;
      case 'relacionar':
        iniciarRelacionar();
        break;
      case 'fechas':
        iniciarFechas();
        break;
    }

    irAlJugador();
  }

  function volverAlCatalogo() {
    juegoActual = null;

    elementos.presentacion.hidden = false;
    elementos.catalogo.hidden = false;
    elementos.informacion.hidden = false;
    elementos.jugador.hidden = true;

    elementos.contenido.replaceChildren();
    elementos.acciones.replaceChildren();

    limpiarMensaje();

    elementos.catalogo.scrollIntoView({
      behavior: 'auto',
      block: 'start',
    });

    elementos.catalogo.querySelector('[data-game]')?.focus({
      preventScroll: true,
    });
  }

  elementos.catalogo.querySelectorAll('[data-game]').forEach((botonJuego) => {
    botonJuego.addEventListener('click', () => {
      iniciarJuego(botonJuego.dataset.game);
    });
  });

  elementos.volver.addEventListener('click', volverAlCatalogo);

  /* ==================================================
       04. JUEGO: DESAFÍO DEL CENTENARIO
       ================================================== */

  /*
   * Preguntas adaptadas de las trivias de los alumnos.
   * Las respuestas históricas toman los datos de eventos.
   *
   * tipo: "anio", "opciones" o "vf".
   */

  const bancoTrivia = [
    {
      texto: '¿En qué año se fundó el Michael Ham Memorial College?',
      tipo: 'anio',
      id: 'mh-fundacion',
      alternativas: [1924, 1933, 1945],
    },
    {
      texto: '¿Cuántos alumnos integraron la primera camada del colegio?',
      tipo: 'opciones',
      id: 'mh-fundacion',
      opciones: ['44 alumnos', '50 alumnos', '75 alumnos', '100 alumnos'],
      correcta: '44 alumnos',
    },
    {
      texto: '¿Quiénes abrieron el Michael Ham Memorial College?',
      tipo: 'opciones',
      id: 'mh-fundacion',
      opciones: [
        'Las Hermanas Pasionistas',
        'Las Hermanas Salesianas',
        'La municipalidad',
        'Una empresa tecnológica',
      ],
      correcta: 'Las Hermanas Pasionistas',
    },
    {
      texto: '¿En qué año se donó la residencia de la familia Ham?',
      tipo: 'anio',
      id: 'mh-donacion-residencia',
      alternativas: [1926, 1933, 1945],
    },
    {
      texto: '¿En qué año se fundó la OGA?',
      tipo: 'anio',
      id: 'mh-fundacion-oga',
      alternativas: [1926, 1945, 1950],
    },
    {
      texto: '¿En qué año abrió la sede Nordelta?',
      tipo: 'anio',
      id: 'mh-apertura-nordelta',
      alternativas: [1999, 2002, 2012],
    },
    {
      texto: 'La sede Nordelta comenzó con kínder y primer ciclo de primaria.',
      tipo: 'vf',
      id: 'mh-apertura-nordelta',
      correcta: 'Verdadero',
    },
    {
      texto: '¿En qué año se celebró la primera Book Week?',
      tipo: 'anio',
      id: 'mh-book-week',
      alternativas: [1985, 1992, 2000],
    },
    {
      texto: 'El objetivo de la Book Week era fomentar la lectura.',
      tipo: 'vf',
      id: 'mh-book-week',
      correcta: 'Verdadero',
    },
    {
      texto: '¿En qué año se presentó el primer disco duro comercial de IBM?',
      tipo: 'anio',
      id: 'tec-disco-duro',
      alternativas: [1946, 1960, 1981],
    },
    {
      texto: '¿En qué año se presentó Tennis for Two?',
      tipo: 'anio',
      id: 'tec-tennis-for-two',
      alternativas: [1946, 1972, 1985],
    },
    {
      texto: '¿En qué año se fundó Google?',
      tipo: 'anio',
      id: 'tec-google',
      alternativas: [1994, 1999, 2004],
    },
    {
      texto: 'Google fue fundada por Jeff Bezos.',
      tipo: 'vf',
      id: 'tec-google',
      correcta: 'Falso',
    },
    {
      texto: '¿En qué año se fundó Amazon?',
      tipo: 'anio',
      id: 'tec-amazon',
      alternativas: [1989, 1998, 2004],
    },
    {
      texto: 'Wikipedia se creó después que Facebook.',
      tipo: 'vf',
      id: 'tec-wikipedia',
      correcta: 'Falso',
    },
    {
      texto: '¿En qué año se creó Facebook?',
      tipo: 'anio',
      id: 'tec-facebook',
      alternativas: [1998, 2001, 2007],
    },
    {
      texto: 'Facebook fue creada por Bill Gates.',
      tipo: 'vf',
      id: 'tec-facebook',
      correcta: 'Falso',
    },
    {
      texto: '¿En qué año se presentó el primer iPhone?',
      tipo: 'anio',
      id: 'tec-iphone',
      alternativas: [2004, 2006, 2010],
    },
    {
      texto: 'El primer iPhone fue presentado en 2007.',
      tipo: 'vf',
      id: 'tec-iphone',
      correcta: 'Verdadero',
    },
    {
      texto: '¿En qué año apareció la tostadora automática Toastmaster?',
      tipo: 'anio',
      id: 'tec-tostadora-toastmaster',
      alternativas: [1924, 1930, 1933],
    },
    {
      texto:
        '¿En qué año Farnsworth realizó la transmisión de televisión electrónica?',
      tipo: 'anio',
      id: 'tec-television-electronica',
      alternativas: [1926, 1931, 1935],
    },
    {
      texto: '¿En qué año se presentó el microprocesador Intel 4004?',
      tipo: 'anio',
      id: 'tec-intel-4004',
      alternativas: [1960, 1969, 1981],
    },
    {
      texto: 'La World Wide Web nació antes que Google.',
      tipo: 'vf',
      id: 'tec-world-wide-web',
      correcta: 'Verdadero',
    },
    {
      texto: '¿En qué año se lanzó Windows 1.0?',
      tipo: 'anio',
      id: 'tec-windows',
      alternativas: [1975, 1981, 1995],
    },
    {
      texto:
        '¿En qué año se produjo la primera llamada pública con un celular de mano?',
      tipo: 'anio',
      id: 'tec-primera-llamada-celular',
      alternativas: [1969, 1983, 1990],
    },
    {
      texto:
        '¿En qué año llegó al mercado el primer celular de mano comercial?',
      tipo: 'anio',
      id: 'tec-celular-comercial',
      alternativas: [1973, 1990, 1998],
    },
    {
      texto: 'El primer video de YouTube se publicó en 2005.',
      tipo: 'vf',
      id: 'tec-youtube',
      correcta: 'Verdadero',
    },
    {
      texto: '¿En qué año se lanzó Pong?',
      tipo: 'anio',
      id: 'tec-pong',
      alternativas: [1958, 1969, 1985],
    },
  ];

  let preguntasTrivia = [];
  let indiceTrivia = 0;
  let puntosTrivia = 0;
  let triviaRespondida = false;

  function respuestaCorrectaTrivia(pregunta) {
    if (pregunta.tipo === 'anio') {
      return String(obtenerAnio(pregunta.id));
    }

    return pregunta.correcta;
  }

  function opcionesTrivia(pregunta) {
    if (pregunta.tipo === 'vf') {
      return ['Verdadero', 'Falso'];
    }

    if (pregunta.tipo === 'anio') {
      return mezclar([
        respuestaCorrectaTrivia(pregunta),
        ...pregunta.alternativas.map(String),
      ]);
    }

    return mezclar(pregunta.opciones);
  }

  function iniciarTrivia() {
    preguntasTrivia = mezclar(
      bancoTrivia.filter(
        (pregunta) =>
          obtenerEvento(pregunta.id) &&
          Number.isFinite(obtenerAnio(pregunta.id))
      )
    ).slice(0, 10);

    indiceTrivia = 0;
    puntosTrivia = 0;

    if (!preguntasTrivia.length) {
      mostrarMensaje('No hay preguntas disponibles.', false);
      return;
    }

    renderizarTrivia();
  }

  function renderizarTrivia() {
    triviaRespondida = false;
    limpiarMensaje();

    const pregunta = preguntasTrivia[indiceTrivia];
    const evento = obtenerEvento(pregunta.id);

    actualizarEstado(
      indiceTrivia + 1,
      preguntasTrivia.length,
      puntosTrivia,
      preguntasTrivia.length
    );

    elementos.contenido.innerHTML = `
        <h3>${escaparHTML(pregunta.texto)}</h3>
        ${renderizarOpciones(opcionesTrivia(pregunta))}
      `;

    definirAcciones(boton('Comprobar respuesta', comprobarTrivia));
  }

  function comprobarTrivia() {
    if (triviaRespondida) {
      return;
    }

    const seleccion = respuestaSeleccionada();

    if (!seleccion) {
      mostrarMensaje('Seleccioná una respuesta para continuar.');
      return;
    }

    triviaRespondida = true;

    const pregunta = preguntasTrivia[indiceTrivia];
    const correcta = respuestaCorrectaTrivia(pregunta);

    const acierto = seleccion.value === correcta;

    if (acierto) {
      puntosTrivia++;
    }

    bloquearOpciones(correcta);

    const evento = obtenerEvento(pregunta.id);

    mostrarMensaje(
      acierto
        ? `¡Correcto! ${evento.titulo} (${evento.anio}).`
        : `La respuesta correcta es: ${correcta}. ${evento.titulo} (${evento.anio}).`,
      acierto
    );

    actualizarEstado(
      indiceTrivia + 1,
      preguntasTrivia.length,
      puntosTrivia,
      preguntasTrivia.length
    );

    definirAcciones(
      boton(
        indiceTrivia + 1 === preguntasTrivia.length
          ? 'Ver resultado final'
          : 'Siguiente pregunta',
        avanzarTrivia
      )
    );
  }

  function avanzarTrivia() {
    indiceTrivia++;

    if (indiceTrivia >= preguntasTrivia.length) {
      mostrarResultado(
        '¡Trivia terminada!',
        puntosTrivia,
        preguntasTrivia.length,
        puntosTrivia >= 8
          ? '¡Excelente! Conocés muy bien nuestra historia.'
          : '¡Buen trabajo! Podés volver a jugar para descubrir más acontecimientos.',
        iniciarTrivia
      );
      return;
    }

    renderizarTrivia();
  }

  /* ==================================================
       05. JUEGO: ORDENÁ LA HISTORIA
       ================================================== */

  /*
   * Los grupos se inspiran en los juegos de ordenamiento
   * presentados por los alumnos.
   *
   * Los años se consultan directamente en eventos.
   */

  const gruposOrden = [
    [
      'mh-donacion-residencia',
      'mh-fundacion',
      'tec-television-electronica',
      'mh-fundacion-oga',
    ],
    ['tec-eniac', 'tec-tennis-for-two', 'tec-apolo-11', 'tec-pong'],
    ['mh-book-week', 'tec-google', 'mh-apertura-nordelta', 'tec-iphone'],
    ['tec-birome', 'tec-disco-duro', 'tec-fundacion-apple', 'tec-facebook'],
    ['tec-transistor', 'tec-casete', 'tec-world-wide-web', 'tec-youtube'],
  ];

  let rondasOrden = [];
  let indiceOrden = 0;
  let puntosOrden = 0;
  let ordenActual = [];
  let ordenVerificado = false;

  function iniciarOrdenar() {
    rondasOrden = mezclar(
      gruposOrden
        .map((grupo) => grupo.map(obtenerEvento))
        .filter((grupo) => {
          return (
            grupo.length === 4 &&
            grupo.every(Boolean) &&
            new Set(grupo.map((evento) => Number(evento.anio))).size === 4
          );
        })
    ).slice(0, 3);

    indiceOrden = 0;
    puntosOrden = 0;

    if (!rondasOrden.length) {
      mostrarMensaje('No hay acontecimientos para ordenar.', false);
      return;
    }

    comenzarRondaOrden();
  }

  function comenzarRondaOrden() {
    ordenActual = mezclar(rondasOrden[indiceOrden]);

    // Evita comenzar con un orden ya correcto.
    const correcto = [...ordenActual].sort(
      (a, b) => Number(a.anio) - Number(b.anio)
    );

    if (ordenActual.every((evento, i) => evento.id === correcto[i].id)) {
      [ordenActual[0], ordenActual[1]] = [ordenActual[1], ordenActual[0]];
    }

    ordenVerificado = false;
    renderizarOrden();
  }

  function renderizarOrden() {
    limpiarMensaje();

    actualizarEstado(
      indiceOrden + 1,
      rondasOrden.length,
      puntosOrden,
      rondasOrden.length
    );

    elementos.contenido.innerHTML = `
        <h3>Ordená del más antiguo al más reciente</h3>
        <p>Usá las flechas para mover los acontecimientos.</p>
  
        <ol class="game-order-list">
          ${ordenActual
            .map(
              (evento, indice) => `
            <li class="game-order-item">
              <span class="game-order-number">${indice + 1}</span>
              <span class="game-order-text">
                ${escaparHTML(evento.titulo)}
              </span>
  
              <div class="game-order-controls">
                <button
                  type="button"
                  data-mover="${indice}"
                  data-direccion="-1"
                  aria-label="Subir ${escaparHTML(evento.titulo)}"
                  ${indice === 0 || ordenVerificado ? 'disabled' : ''}
                >↑</button>
  
                <button
                  type="button"
                  data-mover="${indice}"
                  data-direccion="1"
                  aria-label="Bajar ${escaparHTML(evento.titulo)}"
                  ${
                    indice === ordenActual.length - 1 || ordenVerificado
                      ? 'disabled'
                      : ''
                  }
                >↓</button>
              </div>
            </li>
          `
            )
            .join('')}
        </ol>
      `;

    elementos.contenido.querySelectorAll('[data-mover]').forEach((control) => {
      control.addEventListener('click', () => {
        moverAcontecimiento(
          Number(control.dataset.mover),
          Number(control.dataset.direccion)
        );
      });
    });

    definirAcciones(boton('Comprobar orden', comprobarOrden));
  }

  function moverAcontecimiento(indice, direccion) {
    if (ordenVerificado) {
      return;
    }

    const destino = indice + direccion;

    if (destino < 0 || destino >= ordenActual.length) {
      return;
    }

    [ordenActual[indice], ordenActual[destino]] = [
      ordenActual[destino],
      ordenActual[indice],
    ];

    renderizarOrden();
  }

  function comprobarOrden() {
    if (ordenVerificado) {
      return;
    }

    ordenVerificado = true;

    const ordenCorrecto = [...ordenActual].sort(
      (a, b) => Number(a.anio) - Number(b.anio)
    );

    const acertado = ordenActual.every(
      (evento, indice) => evento.id === ordenCorrecto[indice].id
    );

    if (acertado) {
      puntosOrden++;
    }

    const explicacion = ordenCorrecto
      .map((evento) => `${evento.anio}: ${evento.titulo}`)
      .join(' → ');

    mostrarMensaje(
      acertado
        ? '¡Excelente! Ordenaste correctamente los cuatro acontecimientos.'
        : `Este era el orden correcto: ${explicacion}`,
      acertado
    );

    elementos.contenido.querySelectorAll('[data-mover]').forEach((control) => {
      control.disabled = true;
    });

    actualizarEstado(
      indiceOrden + 1,
      rondasOrden.length,
      puntosOrden,
      rondasOrden.length
    );

    definirAcciones(
      boton(
        indiceOrden + 1 === rondasOrden.length
          ? 'Ver resultado final'
          : 'Siguiente ronda',
        avanzarOrden
      )
    );
  }

  function avanzarOrden() {
    indiceOrden++;

    if (indiceOrden >= rondasOrden.length) {
      mostrarResultado(
        '¡Recorrido terminado!',
        puntosOrden,
        rondasOrden.length,
        'Cada ronda correcta suma un punto. Volvé a jugar para descubrir nuevos acontecimientos.',
        iniciarOrdenar
      );
      return;
    }

    comenzarRondaOrden();
  }

  /* ==================================================
       06. JUEGO: CONECTÁ LOS ACONTECIMIENTOS
       ================================================== */

  /*
   * Adaptación de la actividad de emparejar
   * personajes con hechos históricos.
   */

  const asociaciones = [
    { persona: 'Michael Ham y su familia', id: 'mh-donacion-residencia' },
    { persona: 'Philo Farnsworth', id: 'tec-television-electronica' },
    { persona: 'Konrad Zuse', id: 'tec-computadora-z3' },
    { persona: 'Alan Turing y su equipo', id: 'tec-bombe-enigma' },
    { persona: 'René Favaloro', id: 'tec-bypass-favaloro' },
    { persona: 'William Higinbotham', id: 'tec-tennis-for-two' },
    { persona: 'Steve Jobs y Steve Wozniak', id: 'tec-fundacion-apple' },
    { persona: 'Martin Cooper', id: 'tec-primera-llamada-celular' },
    { persona: 'Jeff Bezos', id: 'tec-amazon' },
    { persona: 'Larry Page y Sergey Brin', id: 'tec-google' },
    { persona: 'Hugo Kogan', id: 'tec-magiclick' },
    { persona: 'Ladislao José Biro', id: 'tec-birome' },
  ];

  let rondasAsociaciones = [];
  let indiceAsociaciones = 0;
  let puntosAsociaciones = 0;
  let asociacionRespondida = false;
  let asociacionCorrecta = null;

  function iniciarRelacionar() {
    rondasAsociaciones = mezclar(
      asociaciones.filter((asociacion) => obtenerEvento(asociacion.id))
    ).slice(0, 5);

    indiceAsociaciones = 0;
    puntosAsociaciones = 0;

    if (rondasAsociaciones.length < 4) {
      mostrarMensaje('No hay suficientes asociaciones disponibles.', false);
      return;
    }

    renderizarRelacionar();
  }

  function renderizarRelacionar() {
    asociacionRespondida = false;
    limpiarMensaje();

    const asociacion = rondasAsociaciones[indiceAsociaciones];
    const evento = obtenerEvento(asociacion.id);

    asociacionCorrecta = evento.titulo;

    const distractores = mezclar(
      asociaciones
        .filter((item) => item.id !== asociacion.id && obtenerEvento(item.id))
        .map((item) => obtenerEvento(item.id).titulo)
    ).slice(0, 3);

    const opciones = mezclar([asociacionCorrecta, ...distractores]);

    actualizarEstado(
      indiceAsociaciones + 1,
      rondasAsociaciones.length,
      puntosAsociaciones,
      rondasAsociaciones.length
    );

    elementos.contenido.innerHTML = `
        <div class="game-matching-question">
          <p>¿Con qué acontecimiento se relaciona este personaje?</p>
          <span class="game-matching-name">
            ${escaparHTML(asociacion.persona)}
          </span>
        </div>
  
        ${renderizarOpciones(opciones)}
      `;

    definirAcciones(boton('Comprobar respuesta', comprobarRelacionar));
  }

  function comprobarRelacionar() {
    if (asociacionRespondida) {
      return;
    }

    const seleccion = respuestaSeleccionada();

    if (!seleccion) {
      mostrarMensaje('Elegí un acontecimiento para continuar.');
      return;
    }

    asociacionRespondida = true;

    const acertado = seleccion.value === asociacionCorrecta;

    if (acertado) {
      puntosAsociaciones++;
    }

    bloquearOpciones(asociacionCorrecta);

    const asociacion = rondasAsociaciones[indiceAsociaciones];
    const evento = obtenerEvento(asociacion.id);

    mostrarMensaje(
      acertado
        ? `¡Muy bien! ${asociacion.persona} se relaciona con este acontecimiento.`
        : `La respuesta correcta era: ${asociacionCorrecta}. ${evento.texto}`,
      acertado
    );

    actualizarEstado(
      indiceAsociaciones + 1,
      rondasAsociaciones.length,
      puntosAsociaciones,
      rondasAsociaciones.length
    );

    definirAcciones(
      boton(
        indiceAsociaciones + 1 === rondasAsociaciones.length
          ? 'Ver resultado final'
          : 'Siguiente personaje',
        avanzarRelacionar
      )
    );
  }

  function avanzarRelacionar() {
    indiceAsociaciones++;

    if (indiceAsociaciones >= rondasAsociaciones.length) {
      mostrarResultado(
        '¡Conexiones terminadas!',
        puntosAsociaciones,
        rondasAsociaciones.length,
        'Descubriste a algunas de las personas que participaron en la historia del colegio y de la tecnología.',
        iniciarRelacionar
      );
      return;
    }

    renderizarRelacionar();
  }

  /* ==================================================
       07. JUEGO: ¿EN QUÉ AÑO OCURRIÓ?
       ================================================== */

  /*
   * Recupera la actividad MH Timeline Challenge.
   * Las fechas y fotografías provienen de eventos.
   */

  const acontecimientosFechas = [
    'mh-donacion-residencia',
    'mh-fundacion',
    'tec-television-electronica',
    'mh-fundacion-oga',
    'tec-computadora-z3',
    'tec-disco-duro',
    'tec-tennis-for-two',
    'tec-apolo-11',
    'tec-pong',
    'tec-fundacion-apple',
    'tec-celular-comercial',
    'mh-book-week',
    'tec-google',
    'mh-apertura-nordelta',
    'tec-iphone',
    'tec-youtube',
    'tec-windows',
    'tec-amazon',
    'tec-facebook',
    'tec-world-wide-web',
    'mh-centenario',
  ];

  let rondasFechas = [];
  let indiceFechas = 0;
  let puntosFechas = 0;
  let fechaRespondida = false;

  function iniciarFechas() {
    rondasFechas = mezclar(
      acontecimientosFechas
        .map(obtenerEvento)
        .filter((evento) => evento && Number.isFinite(Number(evento.anio)))
    ).slice(0, 8);

    indiceFechas = 0;
    puntosFechas = 0;

    if (!rondasFechas.length) {
      mostrarMensaje('No hay fechas disponibles.', false);
      return;
    }

    renderizarFechas();
  }

  function renderizarFechas() {
    fechaRespondida = false;
    limpiarMensaje();

    const evento = rondasFechas[indiceFechas];

    actualizarEstado(
      indiceFechas + 1,
      rondasFechas.length,
      puntosFechas,
      rondasFechas.length * 3
    );

    elementos.contenido.innerHTML = `
        <div class="game-year-question">
  
          <h3>${escaparHTML(evento.titulo)}</h3>
  
          ${mostrarImagen(evento)}
  
          <p class="game-year-description">
            ${escaparHTML(evento.texto || '')}
          </p>
  
          <div class="game-year-form">
            <div class="game-year-field">
              <label for="respuesta-anio">
                ¿En qué año ocurrió?
              </label>
  
              <input
                type="number"
                id="respuesta-anio"
                min="1924"
                max="2026"
                step="1"
                placeholder="Escribí un año"
                inputmode="numeric"
              >
            </div>
          </div>
  
        </div>
      `;

    definirAcciones(boton('Comprobar año', comprobarFecha));

    const campo = document.getElementById('respuesta-anio');

    campo.addEventListener('keydown', (eventoTeclado) => {
      if (eventoTeclado.key === 'Enter') {
        eventoTeclado.preventDefault();
        comprobarFecha();
      }
    });
  }

  function comprobarFecha() {
    if (fechaRespondida) {
      return;
    }

    const campo = document.getElementById('respuesta-anio');
    const valor = campo.value.trim();

    if (
      !valor ||
      !/^\d{4}$/.test(valor) ||
      Number(valor) < 1924 ||
      Number(valor) > 2026
    ) {
      mostrarMensaje('Ingresá un año válido entre 1924 y 2026.');
      return;
    }

    fechaRespondida = true;
    campo.disabled = true;

    const evento = rondasFechas[indiceFechas];
    const respuesta = Number(valor);
    const anioCorrecto = Number(evento.anio);
    const diferencia = Math.abs(respuesta - anioCorrecto);

    let puntos = 0;

    if (diferencia === 0) {
      puntos = 3;
    } else if (diferencia <= 2) {
      puntos = 2;
    } else if (diferencia <= 5) {
      puntos = 1;
    }

    puntosFechas += puntos;

    const orientacion =
      respuesta < anioCorrecto
        ? 'El acontecimiento ocurrió después del año que elegiste.'
        : respuesta > anioCorrecto
        ? 'El acontecimiento ocurrió antes del año que elegiste.'
        : '¡Acertaste el año exacto!';

    mostrarMensaje(
      `${orientacion} Año correcto: ${anioCorrecto}. Sumaste ${puntos} de 3 puntos.`,
      diferencia === 0
    );

    actualizarEstado(
      indiceFechas + 1,
      rondasFechas.length,
      puntosFechas,
      rondasFechas.length * 3
    );

    definirAcciones(
      boton(
        indiceFechas + 1 === rondasFechas.length
          ? 'Ver resultado final'
          : 'Siguiente acontecimiento',
        avanzarFecha
      )
    );
  }

  function avanzarFecha() {
    indiceFechas++;

    if (indiceFechas >= rondasFechas.length) {
      mostrarResultado(
        '¡Desafío de fechas terminado!',
        puntosFechas,
        rondasFechas.length * 3,
        'Los años exactos valen tres puntos. Las respuestas cercanas también suman.',
        iniciarFechas
      );
      return;
    }

    renderizarFechas();
  }
})();
