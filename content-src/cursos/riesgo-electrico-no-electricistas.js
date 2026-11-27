/**
 * Curso: Riesgo Eléctrico Básico para Personal No Electricista. Versión completa.
 * Normativa: RETIE (Res. 40117 de 2024 del Ministerio de Minas y Energía), Decreto 1072 de 2015, Res. 0312 de 2019,
 * Res. 5018 de 2019 (sector eléctrico). Referencias: NFPA 70E (arco eléctrico), OSHA (distancias a líneas aéreas).
 */
export default {
  id: 'riesgo-electrico-no-electricistas',
  title: 'Riesgo Eléctrico Básico para Personal No Electricista (RETIE)',
  hours: 1.5,
  category: 'prevencion_sst',
  regulation: 'RETIE (Res. 40117 de 2024), Decreto 1072 de 2015, Res. 0312 de 2019; referencias: NFPA 70E',
  legalNotice:
    'Formación para trabajadores que NO son electricistas. No habilita para intervenir instalaciones eléctricas: esas tareas solo las hace personal calificado y autorizado.',
  summary:
    'Cómo actúa la corriente en el cuerpo, qué es el arco eléctrico, qué dice el RETIE sobre quién puede intervenir, cómo inspeccionar a simple vista tableros, tomas y extensiones, qué hacer cuando un interruptor se dispara, cómo trabajar con humedad y cerca de líneas, y cómo actuar en una emergencia eléctrica.',
  fieldCase:
    'Un operario de bodega abrió un tablero eléctrico energizado para "subir el taco" que se disparaba una y otra vez. Al retirar la tapa, un destornillador tocó dos barras, se produjo un arco eléctrico y sufrió quemaduras en la cara y las manos.',
  failureAnalysis:
    'Falla raíz: un trabajador no calificado intervino un tablero energizado, y un interruptor que se disparaba repetidamente (señal de una falla) se trató como una molestia en lugar de reportarlo.',
  checklist: [
    'No abro tableros ni retiro tapas: eso lo hace personal calificado.',
    'Si un interruptor se dispara de nuevo después de un rearme, no insisto: reporto.',
    'Reviso a simple vista cables, clavijas, tomas y extensiones antes de usarlos.',
    'No uso extensiones con empalmes ni clavijas sin la pata de tierra.',
    'No conecto multitomas en cadena ni sobrecargo los tomacorrientes.',
    'Mantengo despejado el frente de los tableros eléctricos.',
    'No trabajo con equipos eléctricos con las manos o los pies mojados.',
    'Ante un accidente eléctrico, corto la energía antes de tocar a la persona.'
  ],
  onSiteClosure:
    'Práctica en su empresa: recorrer el área con el electricista de la planta identificando tableros, interruptores de emergencia y tomas con protección diferencial; hacer una inspección visual de extensiones y equipos; y simular el rescate de una persona electrizada en baja tensión.',

  modules: [
    {
      title: 'Cómo actúa la electricidad en el cuerpo',
      content: `
        <p><strong>Tres conceptos básicos:</strong></p>
        <ul>
          <li><strong>Tensión o voltaje</strong> (voltios, V): la "presión" que empuja la corriente. En Colombia, los tomacorrientes comunes son de 120 V y muchos equipos industriales trabajan a 220, 440 V o más.</li>
          <li><strong>Corriente</strong> (amperios, A): la cantidad de electricidad que circula. Es la que hace el daño en el cuerpo.</li>
          <li><strong>Resistencia</strong>: lo que se opone al paso de la corriente. La piel seca tiene una resistencia alta; la piel húmeda, sudada o con cortes, mucho menor. Por eso el agua aumenta tanto el peligro.</li>
        </ul>
        <p><strong>El cuerpo se vuelve parte del circuito</strong> cuando toca al mismo tiempo una parte energizada y otra con un potencial distinto: tierra, una estructura metálica, una tubería o el otro conductor.</p>
        <p><strong>Efectos según la corriente</strong> (valores aproximados para corriente alterna de 60 Hz):</p>
        <ul>
          <li>Alrededor de 1 miliamperio: se siente un cosquilleo.</li>
          <li>Alrededor de 10 miliamperios: los músculos se contraen y la persona puede <strong>no poder soltar</strong> lo que está agarrando.</li>
          <li>Desde unas decenas de miliamperios: dificultad para respirar y riesgo de <strong>fibrilación ventricular</strong>, una alteración del ritmo del corazón que causa la muerte si no se atiende de inmediato.</li>
        </ul>
        <p>Un miliamperio es la milésima parte de un amperio. Un tomacorriente común puede entregar muchísimo más que eso. Por eso la electricidad de un enchufe doméstico puede matar.</p>
        <p><strong>Otros daños:</strong></p>
        <ul>
          <li><strong>Quemaduras internas</strong> a lo largo del recorrido de la corriente, que no se ven por fuera.</li>
          <li><strong>Quemaduras externas</strong> en los puntos de entrada y salida.</li>
          <li><strong>Caídas</strong> por el sobresalto o la contracción, especialmente en escaleras y alturas. Muchas muertes por electricidad son en realidad caídas.</li>
        </ul>
        <p><strong>El recorrido importa.</strong> Una corriente que pasa de una mano a la otra, o de la mano a los pies, atraviesa el pecho y el corazón. Por eso es tan peligroso tocar algo energizado con una mano mientras la otra se apoya en una estructura metálica.</p>
      `,
      keyPoints: [
        'La corriente es la que daña; la humedad baja la resistencia de la piel y aumenta el peligro.',
        'Con unos 10 miliamperios la persona puede no poder soltar; con algunas decenas, riesgo de fibrilación.',
        'Además de quemaduras internas y externas, la electricidad causa caídas, sobre todo en alturas.'
      ]
    },
    {
      title: 'El arco eléctrico',
      content: `
        <p>El <strong>arco eléctrico</strong> es una descarga de corriente a través del aire entre dos conductores o entre un conductor y tierra. Ocurre en fracciones de segundo y libera una cantidad enorme de energía.</p>
        <p><strong>Qué produce un arco eléctrico:</strong></p>
        <ul>
          <li>Temperaturas muy superiores a las de una llama: funde el metal y enciende la ropa a varios metros.</li>
          <li>Una luz intensa que puede dañar los ojos.</li>
          <li>Una <strong>onda de presión</strong> (explosión) que lanza partes metálicas, gotas de metal fundido y a la propia persona.</li>
          <li>Un ruido muy fuerte que puede dañar el oído.</li>
          <li>Gases tóxicos.</li>
        </ul>
        <p><strong>Causas frecuentes:</strong></p>
        <ul>
          <li>Abrir tableros energizados y dejar caer una herramienta, un tornillo o una tapa sobre las barras, como en el caso del curso.</li>
          <li>Conexiones flojas o deterioradas que se calientan.</li>
          <li>Polvo, humedad, insectos o roedores dentro de los tableros.</li>
          <li>Equipos dañados o mal mantenidos.</li>
          <li>Errores en maniobras de interruptores de potencia.</li>
        </ul>
        <p><strong>Cómo se protege a las personas.</strong> El personal calificado que trabaja cerca de partes energizadas usa ropa y elementos de protección resistentes al arco, calculados según la energía disponible en cada tablero (la norma NFPA 70E es la referencia más usada). Un trabajador no electricista no tiene esa protección ni ese entrenamiento: <strong>por eso no abre tableros</strong>.</p>
        <p><strong>Señales de alerta que un no electricista sí puede detectar y reportar:</strong></p>
        <ul>
          <li>olor a plástico quemado cerca de un tablero o un equipo;</li>
          <li>zumbidos, chasquidos o chispas;</li>
          <li>tapas o puertas de tablero calientes al tacto (acercando el dorso de la mano, sin tocar partes internas);</li>
          <li>marcas de hollín o de quemado;</li>
          <li>interruptores que se disparan con frecuencia.</li>
        </ul>
        <p>Ante cualquiera de estas señales: aléjese, no lo manipule, avise al electricista o al supervisor y, si hay humo o fuego, active la emergencia.</p>
      `,
      keyPoints: [
        'El arco eléctrico produce temperaturas extremas, una explosión, metal fundido, luz intensa y ruido.',
        'Causas: herramientas que caen sobre barras, conexiones flojas, polvo, humedad y equipos dañados.',
        'Olor a quemado, chispas, calor o disparos frecuentes: alejarse y reportar.'
      ]
    },
    {
      title: 'El RETIE: quién puede intervenir una instalación eléctrica',
      content: `
        <p>El <strong>Reglamento Técnico de Instalaciones Eléctricas (RETIE)</strong> fija los requisitos para que las instalaciones eléctricas en Colombia sean seguras. La versión vigente fue adoptada por la <strong>Resolución 40117 de 2024</strong> del Ministerio de Minas y Energía.</p>
        <p><strong>Lo que un trabajador no electricista debe saber del RETIE:</strong></p>
        <ul>
          <li>Las instalaciones deben diseñarse, construirse, mantenerse e intervenirse por <strong>personal calificado</strong>. En Colombia, el ejercicio como técnico electricista requiere matrícula profesional, y la empresa debe además <strong>autorizar</strong> a cada persona para las tareas que puede hacer.</li>
          <li>Los trabajos sin tensión se hacen aplicando las <strong>cinco reglas de oro</strong>: corte efectivo de todas las fuentes, bloqueo y señalización, verificación de ausencia de tensión, puesta a tierra y en cortocircuito, y señalización y delimitación de la zona. Esto lo hace el electricista; el no electricista lo respeta.</li>
          <li>Las partes energizadas deben estar protegidas para que nadie pueda tocarlas por accidente: tapas, encerramientos, distancias.</li>
          <li>Las instalaciones deben tener sistema de puesta a tierra y protecciones contra sobrecorrientes, y en ciertos circuitos, protección diferencial.</li>
          <li>Los productos eléctricos (cables, interruptores, tomacorrientes, extensiones) deben cumplir requisitos de certificación.</li>
        </ul>
        <p><strong>El Decreto 1072 de 2015 y la Resolución 0312 de 2019</strong> obligan a la empresa a identificar el riesgo eléctrico, controlarlo y capacitar a los trabajadores. Las empresas del sector eléctrico tienen además lineamientos propios de SST en la <strong>Resolución 5018 de 2019</strong>.</p>
        <p><strong>Qué SÍ puede hacer un trabajador no electricista</strong> (según su capacitación y el procedimiento de la empresa):</p>
        <ul>
          <li>Inspeccionar a simple vista los equipos, cables y extensiones que va a usar.</li>
          <li>Encender y apagar equipos con sus controles normales.</li>
          <li>Desconectar su equipo tirando de la clavija, no del cable.</li>
          <li>Accionar paradas de emergencia.</li>
          <li>Reportar cualquier anomalía.</li>
        </ul>
        <p><strong>Qué NO puede hacer:</strong> abrir tableros o retirar tapas; reparar cables, tomas o equipos; hacer empalmes o "puentes"; cambiar fusibles; manipular interruptores dentro de tableros; ni retirar candados o tarjetas de bloqueo.</p>
      `,
      keyPoints: [
        'El RETIE vigente fue adoptado por la Res. 40117 de 2024 del Ministerio de Minas y Energía.',
        'Solo personal calificado y autorizado interviene instalaciones; las cinco reglas de oro las aplica el electricista.',
        'El no electricista inspecciona a simple vista, opera controles normales, desconecta por la clavija y reporta.'
      ]
    },
    {
      title: 'Inspección visual de tableros, tomas, clavijas y extensiones',
      content: `
        <p>Muchos accidentes se evitan con una mirada de treinta segundos antes de conectar un equipo.</p>
        <p><strong>Tableros eléctricos:</strong></p>
        <ul>
          <li>Puerta cerrada y, cuando aplica, con llave.</li>
          <li>Señalizados con el símbolo de riesgo eléctrico.</li>
          <li><strong>Frente despejado</strong>: sin cajas, estibas, escobas ni materiales que impidan llegar al tablero en una emergencia.</li>
          <li>Sin humedad, goteras ni polvo excesivo alrededor.</li>
          <li>Circuitos identificados, para saber qué interruptor corresponde a cada equipo.</li>
        </ul>
        <p><strong>Tomacorrientes:</strong></p>
        <ul>
          <li>Bien fijos a la pared, sin partes rotas, quemadas o derretidas.</li>
          <li>Que la clavija entre firme, sin quedar floja.</li>
          <li>Sin multitomas conectadas en cadena ("una multitoma sobre otra"): sobrecarga el circuito y calienta los conductores.</li>
        </ul>
        <p><strong>Clavijas y cables de los equipos:</strong></p>
        <ul>
          <li>La clavija con sus tres patas: <strong>nunca se corta ni se dobla la pata de tierra</strong> para que entre en un tomacorriente de dos huecos. Esa pata es la que protege a la persona si el equipo tiene una falla.</li>
          <li>Cable sin cortes, aplastamientos, partes peladas ni empalmes con cinta.</li>
          <li>El cable entra firme en la clavija y en el equipo, sin que se vean los conductores internos.</li>
        </ul>
        <p><strong>Extensiones:</strong></p>
        <ul>
          <li>De tipo industrial, del calibre adecuado para la carga y con polo a tierra.</li>
          <li><strong>Sin empalmes</strong>: una extensión empalmada se reemplaza.</li>
          <li>Desenrolladas por completo cuando se usan con cargas altas, para que no se calienten.</li>
          <li>Que no pasen por debajo de puertas, alfombras o por zonas de tránsito de montacargas sin protección.</li>
          <li>Que no queden en charcos o zonas mojadas.</li>
          <li>Retiradas de servicio y etiquetadas si están dañadas.</li>
        </ul>
        <p><strong>Si encuentra un defecto:</strong> no use el equipo, sepárelo, márquelo como "fuera de servicio" y repórtelo. No intente repararlo.</p>
      `,
      keyPoints: [
        'Tableros cerrados, señalizados y con el frente despejado.',
        'Nunca se corta la pata de tierra de una clavija ni se conectan multitomas en cadena.',
        'Extensiones industriales, sin empalmes, desenrolladas y lejos del agua; si están dañadas, fuera de servicio.'
      ]
    },
    {
      title: 'Cuando un interruptor se dispara',
      content: `
        <p>Los interruptores automáticos (los "tacos" o "breakers") y los fusibles son <strong>protecciones</strong>. Cuando se disparan, están avisando que algo pasa: una sobrecarga, un cortocircuito o una fuga de corriente.</p>
        <p><strong>Tipos de protección que conviene conocer:</strong></p>
        <ul>
          <li><strong>Interruptor termomagnético</strong>: protege los cables contra sobrecargas y cortocircuitos.</li>
          <li><strong>Interruptor diferencial</strong> (protección de falla a tierra, conocida en inglés como GFCI): detecta cuando parte de la corriente se escapa, por ejemplo a través de una persona, y corta en milisegundos. Es la protección que salva vidas en zonas húmedas. Tiene un botón de prueba que el personal de mantenimiento usa para verificar que funciona.</li>
        </ul>
        <p><strong>Qué hacer si se dispara un interruptor:</strong></p>
        <ol>
          <li>Desconecte o apague los equipos que estaba usando en ese circuito.</li>
          <li>Revise si hay señales de falla: olor a quemado, humo, un equipo mojado, un cable dañado.</li>
          <li>Si hay señales de falla, <strong>no rearme</strong>: reporte.</li>
          <li>Si no hay señales y el procedimiento de su empresa lo permite (el interruptor es accesible sin abrir tapas ni tocar partes internas), se puede intentar <strong>un solo rearme</strong>.</li>
          <li>Si se vuelve a disparar, <strong>no insista</strong>: hay una falla que debe revisar un electricista.</li>
        </ol>
        <p><strong>Lo que nunca se hace:</strong></p>
        <ul>
          <li>Sostener el interruptor arriba con la mano, con cinta o con un objeto para que "no se baje".</li>
          <li>Cambiar un interruptor o un fusible por otro de mayor capacidad "para que aguante".</li>
          <li>Hacer un puente que anule la protección.</li>
          <li>Abrir el tablero para buscar la falla.</li>
        </ul>
        <p>Cada una de estas acciones deja el circuito sin protección: el siguiente cortocircuito puede terminar en un incendio o en un arco eléctrico, como en el caso del curso.</p>
      `,
      keyPoints: [
        'Un interruptor que se dispara avisa una sobrecarga, un cortocircuito o una fuga de corriente.',
        'Si no hay señales de falla y el procedimiento lo permite, un solo rearme; si se repite, reportar.',
        'Nunca sostener, puentear o cambiar la protección por una mayor, ni abrir el tablero.'
      ]
    },
    {
      title: 'Humedad, líneas aéreas y tormentas',
      content: `
        <p><strong>Agua y electricidad.</strong> El agua reduce la resistencia de la piel y crea caminos para la corriente. Reglas básicas:</p>
        <ul>
          <li>No manipular equipos eléctricos con las manos mojadas ni con los pies en charcos.</li>
          <li>No lavar con manguera tableros, motores ni equipos eléctricos sin que el electricista los haya desenergizado y protegido.</li>
          <li>En zonas húmedas (lavado, exteriores, cocinas industriales), usar equipos con protección diferencial y extensiones adecuadas para exteriores.</li>
          <li>Si un equipo eléctrico se moja o se inunda, no se conecta ni se enciende hasta que lo revise el electricista.</li>
        </ul>
        <p><strong>Líneas eléctricas aéreas.</strong> Muchas muertes ocurren cuando una escalera, un andamio, una varilla, un tubo, la pluma de una grúa o la caja de un volqueta tocan o se acercan a una línea de media o alta tensión. La electricidad puede "saltar" sin contacto directo.</p>
        <ul>
          <li>Antes de trabajar en exteriores, identifique las líneas aéreas cercanas.</li>
          <li>Mantenga los equipos y materiales alejados de ellas. Como referencia general, la norma OSHA exige al menos 3 metros de distancia para líneas de hasta 50.000 voltios, y más para tensiones mayores. El RETIE define sus propias distancias mínimas de seguridad; en la duda, consulte al electricista y aléjese.</li>
          <li>Transporte las escaleras y los tubos largos en posición horizontal.</li>
          <li>Si un vehículo toca una línea, quien está adentro permanece adentro, salvo incendio; si debe salir, salta sin tocar el vehículo y el suelo al mismo tiempo y se aleja con pasos cortos, arrastrando los pies.</li>
          <li>Nunca se acerque a un cable caído: puede estar energizado y energizar el suelo a su alrededor. Aléjese y avise a la empresa de energía.</li>
        </ul>
        <p><strong>Tormentas eléctricas.</strong> Colombia tiene una de las mayores actividades de rayos del mundo. Durante una tormenta se suspenden los trabajos en exteriores, en alturas, en techos y en estructuras metálicas expuestas, y las personas se refugian en edificaciones cerradas o en vehículos cerrados. No se refugie bajo árboles aislados ni junto a postes o torres.</p>
      `,
      keyPoints: [
        'Nada de equipos eléctricos con manos o pies mojados; en zonas húmedas, protección diferencial.',
        'Mantener escaleras, andamios y equipos lejos de las líneas aéreas; nunca acercarse a un cable caído.',
        'En tormentas eléctricas se suspenden los trabajos en exteriores y alturas.'
      ]
    },
    {
      title: 'Herramientas, bloqueos y el papel del trabajador afectado',
      content: `
        <p><strong>Herramientas eléctricas portátiles</strong> (taladros, pulidoras, sierras):</p>
        <ul>
          <li>Inspeccionarlas antes de cada uso: carcasa sin grietas, cable y clavija en buen estado, interruptor que funcione.</li>
          <li>Preferir herramientas con <strong>doble aislamiento</strong> (marcadas con un cuadrado dentro de otro cuadrado) o con polo a tierra.</li>
          <li>Desconectarlas antes de cambiar discos, brocas o accesorios.</li>
          <li>No cargarlas ni tirarlas del cable.</li>
          <li>No usarlas bajo la lluvia ni en zonas mojadas sin la protección adecuada.</li>
        </ul>
        <p><strong>El bloqueo y etiquetado (LOTO).</strong> Cuando el electricista o el mecánico intervienen un equipo, lo aíslan y ponen candados y tarjetas. El trabajador no electricista suele ser un <strong>trabajador afectado</strong>: opera el equipo, pero no lo interviene. Sus deberes son:</p>
        <ul>
          <li>Reconocer un candado o una tarjeta de bloqueo y respetarlos.</li>
          <li>No intentar arrancar un equipo bloqueado, ni desde el tablero ni desde otro control.</li>
          <li>No retirar candados ni tarjetas, aunque "ya hayan terminado".</li>
          <li>Esperar a que quien bloqueó retire su candado y avise que el equipo está en servicio.</li>
        </ul>
        <p><strong>Equipos con cable y enchufe.</strong> Si un operario necesita limpiar o desatascar un equipo pequeño que se conecta con clavija, desconectarlo y mantener la clavija a la vista y bajo su control es la forma de aislarlo. Apagar el interruptor del equipo no basta.</p>
        <p><strong>Instalaciones temporales y provisionales.</strong> En obras y montajes, los tableros y cables provisionales deben ser instalados por electricistas, con protección diferencial y protegidos del tránsito y del agua. "Colgarse" de un tablero o conectar cables directamente a los bornes es extremadamente peligroso.</p>
      `,
      keyPoints: [
        'Herramientas inspeccionadas, con doble aislamiento o polo a tierra, y desconectadas al cambiar accesorios.',
        'El trabajador afectado respeta candados y tarjetas, y no arranca equipos bloqueados.',
        'Equipo con clavija: desconectarlo y mantener la clavija bajo control es la forma de aislarlo.'
      ]
    },
    {
      title: 'Emergencia eléctrica y primeros auxilios',
      content: `
        <p><strong>Una persona está en contacto con la electricidad.</strong> La reacción instintiva es agarrarla para separarla, y así se producen dos víctimas en lugar de una.</p>
        <ol>
          <li><strong>No la toque</strong> mientras siga en contacto con la fuente.</li>
          <li><strong>Corte la energía</strong>: desconecte la clavija, apague el interruptor del equipo o accione la parada de emergencia.</li>
          <li><strong>Si no puede cortar la energía</strong> y se trata de baja tensión, sepárela usando un objeto <strong>seco y no conductor</strong> (un palo de madera seco, una silla plástica, una cuerda seca), parado sobre una superficie seca y aislante.</li>
          <li><strong>En media o alta tensión</strong> (líneas aéreas, subestaciones, celdas): no se acerque. Aleje a las demás personas y pida que corten la energía la empresa de energía o el personal autorizado.</li>
          <li><strong>Active la emergencia</strong> y pida ayuda médica.</li>
        </ol>
        <p><strong>Cuando la persona ya está separada de la fuente:</strong></p>
        <ul>
          <li>Verifique si responde y si respira.</li>
          <li>Si no respira, el personal capacitado inicia la <strong>reanimación cardiopulmonar</strong> y usa el desfibrilador externo automático (DEA) si hay uno disponible: la electricidad puede causar fibrilación, y el DEA puede revertirla.</li>
          <li>Si respira, colóquela en posición de recuperación, abríguela y no la deje sola.</li>
          <li>Cubra las quemaduras con apósitos limpios y secos.</li>
          <li><strong>Toda persona que haya recibido una descarga debe ser valorada por un médico</strong>, aunque se sienta bien: puede tener quemaduras internas o alteraciones del ritmo del corazón que aparecen después.</li>
        </ul>
        <p><strong>Incendio de origen eléctrico:</strong></p>
        <ul>
          <li>Si es posible, corte la energía.</li>
          <li>Use un extintor de <strong>CO₂ o de polvo químico seco</strong>. <strong>Nunca agua</strong> mientras haya tensión.</li>
          <li>Si el fuego es grande o está dentro de un tablero o una subestación, evacúe y dé la alarma.</li>
        </ul>
        <p><strong>Reporte.</strong> Toda descarga, por pequeña que parezca, y todo cuasi accidente eléctrico (un cosquilleo al tocar un equipo, una chispa al conectar) se reporta: es la señal de una falla que puede matar a la próxima persona.</p>
      `,
      keyPoints: [
        'No tocar a la persona electrizada: cortar la energía primero; en baja tensión, separar con un objeto seco no conductor.',
        'En media o alta tensión, no acercarse: alejar a todos y pedir el corte a personal autorizado.',
        'Toda persona que recibió una descarga va al médico; los cosquilleos y chispas también se reportan.'
      ]
    }
  ],

  practices: [
    { q: '¿Qué efecto puede producir una corriente de unos 10 miliamperios a través de la mano?', options: ['Que la persona no pueda soltar lo que está agarrando', 'Ningún efecto, porque es una corriente muy pequeña', 'Que el equipo se apague solo'], answer: 0 },
    { q: '¿Qué puede lanzar un arco eléctrico además de calor y luz?', options: ['Solo un poco de humo blanco', 'Partes metálicas y gotas de metal fundido por la onda de presión', 'Agua condensada del ambiente'], answer: 1 },
    { q: '¿Qué resolución adoptó el RETIE vigente?', options: ['La Resolución 2674 de 2013', 'La Resolución 2013 de 1986', 'La Resolución 40117 de 2024'], answer: 2 },
    { q: 'La clavija de una pulidora tiene tres patas y el tomacorriente solo dos huecos. ¿Qué se hace?', options: ['Usar otro tomacorriente con polo a tierra', 'Cortar la pata redonda para que entre', 'Doblar la pata de tierra hacia un lado'], answer: 0 },
    { q: '¿Qué detecta un interruptor diferencial?', options: ['Que la tensión es demasiado alta', 'Que el equipo está muy caliente', 'Que parte de la corriente se escapa, por ejemplo a través de una persona'], answer: 2 },
    { q: '¿Cómo se transporta una escalera metálica larga cerca de líneas aéreas?', options: ['En posición vertical, para verla bien', 'En posición horizontal', 'Apoyada contra el poste más cercano'], answer: 1 },
    { q: 'Un equipo tiene un candado de bloqueo puesto y el operario necesita producir. ¿Qué hace?', options: ['Espera a que quien bloqueó retire su candado y avise', 'Arranca el equipo desde otro control', 'Corta el candado si el técnico se fue a almorzar'], answer: 0 },
    { q: 'Un compañero recibió una descarga, ya está separado de la fuente y dice que se siente bien. ¿Qué corresponde?', options: ['Que siga trabajando si no tiene quemaduras visibles', 'Que se tome un descanso de diez minutos', 'Que lo valore un médico, porque puede tener lesiones que aparecen después'], answer: 2 }
  ],

  scenarios: [
    {
      scenario:
        'En la bodega, el interruptor del circuito de las estanterías se dispara por tercera vez en la mañana. Un compañero quiere abrir el tablero para "subir el taco" y revisar qué pasa adentro.',
      options: [
        { text: 'Lo dejo, porque solo va a subir el taco.', correct: false, feedback: 'Decisión insegura. Abrir un tablero energizado sin ser calificado puede causar un arco eléctrico, como en el caso del curso.' },
        { text: 'Lo detengo: un interruptor que se dispara repetidamente indica una falla. Desconectamos los equipos del circuito y reportamos al electricista.', correct: true, feedback: 'Decisión correcta. Un disparo repetido no se insiste: se reporta.' },
        { text: 'Le sugiero que pegue el taco con cinta para que no se vuelva a bajar.', correct: false, feedback: 'Decisión insegura. Anular la protección deja el circuito expuesto a un incendio o a un arco.' }
      ]
    },
    {
      scenario:
        'Un compañero recibe una descarga y sigue agarrando un equipo energizado de 120 V. Otro compañero corre a tirarlo del brazo para separarlo.',
      options: [
        { text: 'Lo dejo, porque hay que separarlo rápido.', correct: false, feedback: 'Decisión insegura. Si lo toca mientras sigue energizado, la corriente pasará también por quien lo jala.' },
        { text: 'Lo detengo, corto la energía en la clavija o el interruptor y, si no es posible, lo separamos con un objeto seco no conductor; luego activamos la emergencia.', correct: true, feedback: 'Decisión correcta. Primero cortar la energía; nunca tocar a una persona electrizada.' },
        { text: 'Le echo agua para que suelte el equipo.', correct: false, feedback: 'Decisión insegura. El agua conduce la electricidad y empeora la situación.' }
      ]
    },
    {
      scenario:
        'Una extensión de la bodega tiene un empalme cubierto con cinta aislante. El supervisor dice que "así funciona bien, déjala".',
      options: [
        { text: 'La sigo usando, porque la cinta aísla.', correct: false, feedback: 'Decisión insegura. Un empalme con cinta puede calentarse, soltarse o dejar conductores expuestos.' },
        { text: 'La uso solo para equipos pequeños.', correct: false, feedback: 'Decisión insegura. El riesgo del empalme existe con cualquier carga.' },
        { text: 'La retiro de servicio, la marco como dañada y pido una extensión industrial en buen estado.', correct: true, feedback: 'Decisión correcta. Una extensión empalmada se reemplaza.' }
      ]
    },
    {
      scenario:
        'Debes lavar el piso del área de producción con manguera. Al lado hay un motor y una caja de conexiones con la tapa mal ajustada.',
      options: [
        { text: 'Pido que el electricista desenergice y proteja el motor y la caja antes de lavar, o lavo esa zona sin chorro directo, según el procedimiento.', correct: true, feedback: 'Decisión correcta. El agua y las partes eléctricas expuestas no se mezclan.' },
        { text: 'Lavo con cuidado, sin apuntar directamente.', correct: false, feedback: 'Decisión insegura. Las salpicaduras pueden entrar a la caja mal ajustada.' },
        { text: 'Cubro la caja con una bolsa plástica y lavo normalmente.', correct: false, feedback: 'Decisión insegura. Una bolsa no garantiza la protección y la tapa sigue mal ajustada.' }
      ]
    },
    {
      scenario:
        'Debes llevar una escalera de aluminio de seis metros por el patio. Sobre el camino pasa una línea eléctrica aérea de media tensión.',
      options: [
        { text: 'La llevo vertical para no golpear a nadie.', correct: false, feedback: 'Decisión insegura. Una escalera vertical puede acercarse o tocar la línea.' },
        { text: 'La llevo horizontal, entre dos personas, por una ruta que mantenga la distancia de seguridad con la línea.', correct: true, feedback: 'Decisión correcta. Horizontal y lejos de la línea evita el contacto y el arco.' },
        { text: 'Paso rápido por debajo de la línea con la escalera al hombro.', correct: false, feedback: 'Decisión insegura. La rapidez no evita que la escalera se acerque a la línea.' }
      ]
    }
  ],

  exam: [
    {
      q: '¿Por qué la humedad aumenta el peligro de la electricidad?',
      options: [
        'Porque reduce la resistencia de la piel y facilita el paso de la corriente.',
        'Porque el agua aumenta el voltaje de la red eléctrica de la planta y de los equipos conectados.',
        'Porque hace que los interruptores se disparen menos.'
      ],
      answer: 0
    },
    {
      q: '¿Qué es la fibrilación ventricular?',
      options: [
        'Un tipo de quemadura en la piel causada por el arco eléctrico en los puntos de entrada y salida.',
        'Una alteración del ritmo del corazón que puede causar la muerte si no se atiende de inmediato.',
        'Un temblor de las manos que desaparece solo después de la descarga.'
      ],
      answer: 1
    },
    {
      q: '¿Por qué es tan peligroso tocar algo energizado con una mano mientras la otra se apoya en una estructura metálica?',
      options: [
        'Porque la estructura se calienta y quema la mano.',
        'Porque el metal aumenta el voltaje.',
        'Porque la corriente pasa de una mano a la otra atravesando el pecho y el corazón.'
      ],
      answer: 2
    },
    {
      q: '¿Cuál es una causa frecuente de arco eléctrico en un tablero?',
      options: [
        'Una herramienta o un tornillo que cae sobre las barras energizadas.',
        'Que el tablero esté cerrado con llave y con el frente despejado de materiales.',
        'Que los circuitos estén rotulados y señalizados.'
      ],
      answer: 0
    },
    {
      q: 'Un trabajador no electricista siente olor a plástico quemado cerca de un tablero. ¿Qué hace?',
      options: [
        'Abre el tablero para ver qué se está quemando y apaga el interruptor que se vea dañado.',
        'Se aleja, no lo manipula y reporta de inmediato al electricista o al supervisor.',
        'Le echa agua a la puerta del tablero para enfriarlo.'
      ],
      answer: 1
    },
    {
      q: 'Según el RETIE, ¿quién puede intervenir una instalación eléctrica?',
      options: [
        'Cualquier trabajador con experiencia en la planta.',
        'El supervisor del área, si tiene las llaves del tablero.',
        'Personal calificado y autorizado por la empresa.'
      ],
      answer: 2
    },
    {
      q: '¿Cuál de estas acciones SÍ puede hacer un trabajador no electricista?',
      options: [
        'Desconectar su equipo tirando de la clavija, no del cable.',
        'Cambiar un fusible quemado por uno de mayor capacidad para que no se vuelva a fundir.',
        'Hacer un empalme en una extensión con cinta aislante de buena calidad.'
      ],
      answer: 0
    },
    {
      q: '¿Por qué nunca se corta la pata de tierra de una clavija?',
      options: [
        'Porque la clavija pierde la garantía del fabricante.',
        'Porque esa pata protege a la persona si el equipo tiene una falla.',
        'Porque el equipo funciona más despacio y consume más energía cuando no la tiene.'
      ],
      answer: 1
    },
    {
      q: '¿Qué problema causa conectar una multitoma sobre otra multitoma?',
      options: [
        'Que los equipos consuman menos energía por estar en el mismo punto de conexión.',
        'Que el interruptor diferencial deje de funcionar en todo el circuito de la bodega.',
        'Que se sobrecargue el circuito y se calienten los conductores.'
      ],
      answer: 2
    },
    {
      q: 'Un interruptor se disparó una vez, no hay olor a quemado ni equipos mojados, y el procedimiento permite rearmarlo. Se rearma y se vuelve a disparar. ¿Qué se hace?',
      options: [
        'No insistir y reportar la falla al electricista.',
        'Rearmarlo varias veces seguidas hasta que se quede arriba.',
        'Sostenerlo arriba con cinta mientras termina el turno.'
      ],
      answer: 0
    },
    {
      q: '¿Qué protección corta la corriente en milisegundos cuando detecta que se escapa a través de una persona?',
      options: [
        'El fusible común de vidrio que se instala en los equipos.',
        'El interruptor diferencial.',
        'La pata de tierra de la extensión.'
      ],
      answer: 1
    },
    {
      q: 'Un equipo eléctrico quedó mojado por una gotera durante la noche. ¿Qué se hace?',
      options: [
        'Se enciende para que el calor del motor lo seque más rápido.',
        'Se seca por fuera con un trapo y se conecta de inmediato.',
        'No se conecta ni se enciende hasta que lo revise el electricista.'
      ],
      answer: 2
    },
    {
      q: 'Un cable de una línea aérea cayó al suelo en el patio. ¿Qué hace?',
      options: [
        'Me alejo, mantengo alejadas a las personas y aviso para que corten la energía.',
        'Lo muevo con un palo seco para despejar el paso de los vehículos.',
        'Lo cubro con conos y sigo trabajando cerca.'
      ],
      answer: 0
    },
    {
      q: 'Durante una tormenta eléctrica, ¿qué trabajos se suspenden?',
      options: [
        'Solo los trabajos dentro de las oficinas que usan computadores conectados a la red.',
        'Los trabajos en exteriores, alturas, techos y estructuras metálicas expuestas.',
        'Ninguno, si los trabajadores usan botas de caucho.'
      ],
      answer: 1
    },
    {
      q: 'Una persona está en contacto con un equipo energizado de 120 V. ¿Qué es lo primero?',
      options: [
        'Tomarla de la ropa para separarla rápido.',
        'Echarle agua para que suelte el equipo.',
        'Cortar la energía desde la clavija, el interruptor o la parada de emergencia.'
      ],
      answer: 2
    },
    {
      q: '¿Qué extintor se usa en un incendio de un equipo eléctrico energizado?',
      options: [
        'De CO₂ o de polvo químico seco.',
        'De agua a presión, porque enfría más rápido el equipo.',
        'De espuma, porque cubre todo el equipo.'
      ],
      answer: 0
    }
  ]
};
