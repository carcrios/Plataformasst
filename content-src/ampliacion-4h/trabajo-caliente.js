/**
 * Ampliación a 4 horas del curso Trabajo en Caliente.
 * Se suma al curso base (content-src/cursos/trabajo-caliente.js): 4 módulos, 4 prácticas, 5 escenarios,
 * 8 preguntas, un taller aplicado por módulo (12) y un proyecto final: el análisis y el permiso de un
 * trabajo en caliente real de la planta del alumno.
 * Referencias: NFPA 51B (2019), OSHA 1910.252 y 1910.253 (oxicombustible), Res. 0491 de 2020 (espacios confinados).
 */
export default {
  hours: 4,
  summary:
    'Por qué el trabajo en caliente causa incendios, quién responde por él, cómo evaluar el área y medir gases, cómo preparar recipientes, el permiso, los controles durante el trabajo y la vigilancia posterior; además, paneles y aislamientos combustibles, equipos de oxicorte y arco, áreas designadas y sistemas contra incendio, y cómo auditar el programa. Incluye talleres aplicados a su planta y un proyecto final.',

  modules: [
    {
      title: 'Paneles sándwich, aislamientos y otros combustibles ocultos',
      content: `
        <p>Muchos de los incendios industriales más costosos en plantas de alimentos, bebidas y bodegas empezaron con una chispa que llegó a un material que <strong>nadie veía</strong>: el núcleo de un panel, el aislamiento de una tubería o el polvo acumulado sobre una viga.</p>
        <p><strong>Paneles sándwich.</strong> Los cuartos fríos, las salas limpias y muchas cubiertas se construyen con paneles de dos láminas metálicas y un núcleo aislante. Si el núcleo es de <strong>poliestireno expandido (EPS)</strong> o de <strong>poliuretano</strong>, es combustible:</p>
        <ul>
          <li>Una soldadura o un corte sobre la lámina calienta el núcleo, que empieza a arder <strong>por dentro</strong>, sin llama visible.</li>
          <li>El fuego avanza por el interior del panel, a veces muchos metros, y aparece lejos del sitio de trabajo, horas después.</li>
          <li>El humo es muy denso y tóxico, y el incendio es difícil de apagar porque el agua no llega al núcleo.</li>
        </ul>
        <p>Por eso, antes de soldar, cortar o pulir sobre o cerca de un panel, se averigua <strong>de qué es el núcleo</strong> (ficha técnica, marca del fabricante o el área de mantenimiento). Si es combustible, la primera opción es un método en frío (corte con sierra, fijación mecánica); si no hay alternativa, el análisis debe incluir retirar el panel o una franja del núcleo, protección térmica y una vigilancia posterior prolongada.</p>
        <p><strong>Aislamientos de tuberías y equipos.</strong> Espumas elastoméricas, poliuretano proyectado y algunas cubiertas plásticas arden y propagan el fuego a lo largo de la tubería. Se retiran en el tramo de trabajo o se protegen con mantas ignífugas.</p>
        <p><strong>Otros combustibles ocultos:</strong></p>
        <ul>
          <li><strong>Polvo combustible</strong> (harina, azúcar, almidón, cereales) acumulado en vigas, ductos y bandejas: una nube de polvo puede explotar. Se limpia antes del trabajo, sin soplar con aire comprimido.</li>
          <li><strong>Grasa en ductos de extracción</strong> de cocinas y freidoras: el calor de una soldadura en el exterior del ducto puede encenderla por dentro.</li>
          <li><strong>Materiales al otro lado</strong> de muros, pisos y techos: el calor se conduce por el metal y enciende lo que está detrás.</li>
          <li><strong>Huecos, juntas y pasos de cables</strong> por donde caen las chispas a otro nivel.</li>
        </ul>
        <p><strong>La pregunta clave</strong> al evaluar el área no es solo "¿qué hay a la vista?", sino "¿qué hay <em>dentro</em>, <em>detrás</em> y <em>debajo</em>?".</p>
      `,
      keyPoints: [
        'El núcleo de EPS o poliuretano de un panel arde por dentro y el fuego aparece lejos y tarde.',
        'Aislamientos, polvo combustible, grasa en ductos y materiales detrás de muros también se evalúan.',
        'Antes de trabajar se pregunta qué hay dentro, detrás y debajo, no solo qué se ve.'
      ]
    },
    {
      title: 'Equipos de oxicorte, arco y corte abrasivo',
      content: `
        <p>La fuente de calor también tiene riesgos propios. Un equipo en mal estado puede causar un incendio o una explosión antes de que la chispa toque nada.</p>
        <p><strong>Equipos oxicombustible (oxígeno con acetileno, propano u otro gas):</strong></p>
        <ul>
          <li><strong>Cilindros de pie y asegurados</strong> con cadena o soporte, con el capuchón puesto cuando no están en uso, lejos del calor y de las chispas.</li>
          <li><strong>Separación entre oxígeno y gas combustible almacenados</strong>: la referencia OSHA 1910.253 exige al menos 6 metros o una barrera no combustible de 1,5 m de alto.</li>
          <li><strong>Válvulas antirretroceso</strong> (arrestallamas) en el soplete y/o el regulador, según el fabricante, para que una llama no regrese hacia las mangueras y el cilindro.</li>
          <li><strong>Prueba de fugas</strong> con agua jabonosa o detector, nunca con llama. Mangueras sin cortes, quemaduras ni empalmes improvisados.</li>
          <li>El acetileno no se usa a presiones superiores a 1 bar (15 psi), porque se vuelve inestable.</li>
          <li><strong>El oxígeno no se usa para soplar ropa, limpiar piezas ni ventilar.</strong> Enriquece la atmósfera y hace que la ropa arda con violencia.</li>
          <li>Al terminar: cerrar las válvulas de los cilindros y purgar las mangueras.</li>
        </ul>
        <p><strong>Retroceso de llama:</strong> si se oye un silbido en el soplete o la llama se mete en la boquilla, se cierra primero el oxígeno y luego el gas, y no se vuelve a encender hasta revisar el equipo.</p>
        <p><strong>Soldadura de arco eléctrico:</strong></p>
        <ul>
          <li>Equipo con cables sin daños y conexiones firmes.</li>
          <li><strong>La pinza de masa se conecta lo más cerca posible de la soldadura.</strong> Si la corriente regresa por estructuras, tuberías o rodamientos, puede generar calor y chispas lejos del sitio de trabajo.</li>
          <li>No dejar el portaelectrodo con electrodo sobre superficies conductoras.</li>
        </ul>
        <p><strong>Pulidoras y corte abrasivo:</strong> lanzan chispas a más de 10 metros y en una dirección predecible. Se orienta el disco para que las chispas vayan hacia una zona despejada o una mampara, nunca hacia combustibles, aberturas o personas. Se usa el disco correcto para la velocidad de la máquina, con su guarda puesta.</p>
        <p><strong>Calentamiento con soplete, sopletes de gas y pistolas de calor</strong> también son trabajo en caliente y requieren el mismo análisis.</p>
      `,
      keyPoints: [
        'Cilindros de pie y asegurados, oxígeno separado del gas combustible y válvulas antirretroceso.',
        'Prueba de fugas sin llama; nunca usar oxígeno para soplar o ventilar.',
        'La masa va cerca de la soldadura y las chispas de la pulidora se dirigen a una zona despejada.'
      ]
    },
    {
      title: 'Áreas designadas, sistemas contra incendio y contratistas',
      content: `
        <p><strong>Áreas designadas y áreas con permiso.</strong> La NFPA 51B distingue dos situaciones:</p>
        <ul>
          <li><strong>Área designada</strong>: un sitio construido y mantenido para trabajo en caliente (por ejemplo, un taller de soldadura con piso no combustible, sin combustibles y con extintores). Allí se trabaja sin permiso para cada tarea, pero el área se inspecciona y se mantiene en esa condición.</li>
          <li><strong>Área con permiso</strong>: cualquier otro lugar de la planta. Cada trabajo requiere el análisis y el permiso completo.</li>
        </ul>
        <p>La primera pregunta siempre es si la pieza se puede <strong>llevar al taller</strong>. Es la forma más segura de eliminar el riesgo en la planta.</p>
        <p><strong>Los sistemas de protección contra incendio deben estar en servicio.</strong> Rociadores, detectores y alarmas son la red de seguridad si algo falla. Por eso:</p>
        <ul>
          <li>No se hace trabajo en caliente en un área con los rociadores fuera de servicio, salvo que el responsable del área lo autorice con medidas compensatorias (vigilancia continua, extintores adicionales, mangueras).</li>
          <li>Si el humo o el calor del trabajo pueden activar detectores, la desactivación es una decisión formal: se autoriza por escrito, se limita a la zona y al tiempo del trabajo, se compensa con vigilancia y se <strong>restablece y verifica</strong> al terminar. Un detector que se queda desactivado después del trabajo deja la planta ciega.</li>
          <li>Se avisa a la brigada y, si existe, a la central de monitoreo.</li>
        </ul>
        <p><strong>Contratistas.</strong> Una gran parte de los incendios por trabajo en caliente ocurre con contratistas que no conocen la planta. La empresa contratante:</p>
        <ul>
          <li>les informa los peligros del área (paneles, polvo, productos, sistemas de protección);</li>
          <li>les exige el permiso de la planta, no solo el de su empresa;</li>
          <li>verifica sus equipos, su vigía y su entrenamiento;</li>
          <li>mantiene la autoridad para suspender el trabajo.</li>
        </ul>
        <p>El contratista, a su vez, no inicia ningún trabajo sin el permiso firmado por el responsable del área.</p>
        <p><strong>Paradas de planta.</strong> En las paradas programadas se concentran muchos trabajos en caliente, varios contratistas y presión de tiempo. Se planean con anticipación: lista de trabajos, áreas, permisos, vigías suficientes y coordinación entre frentes para que la chispa de uno no caiga en el área del otro.</p>
      `,
      keyPoints: [
        'Las áreas designadas se construyen y mantienen para soldar; en el resto de la planta cada trabajo lleva permiso.',
        'Rociadores, detectores y alarmas deben seguir en servicio; cualquier desactivación es formal, compensada y se restablece.',
        'Los contratistas trabajan con el permiso de la planta, informados de sus peligros y bajo su autoridad.'
      ]
    },
    {
      title: 'Lecciones de incendios reales y auditoría del programa',
      content: `
        <p>Las investigaciones de incendios por trabajo en caliente repiten casi siempre las mismas causas. Conocerlas ayuda a buscarlas antes de que ocurran.</p>
        <p><strong>Patrones frecuentes:</strong></p>
        <ul>
          <li><strong>Combustibles no retirados ni protegidos</strong> en el radio de 11 metros, o al otro lado de un muro o de un piso.</li>
          <li><strong>No se midió la atmósfera</strong>, o se midió en un solo punto, en el momento equivocado o con un equipo sin prueba de funcionamiento.</li>
          <li><strong>Recipientes o tuberías</strong> que "estaban vacíos" pero contenían vapores o residuos.</li>
          <li><strong>Sin vigía, vigía con otras tareas</strong> o vigilancia posterior acortada para terminar el turno.</li>
          <li><strong>Permiso firmado en la oficina</strong> sin que nadie fuera al sitio.</li>
          <li><strong>Contratistas</strong> sin información sobre los peligros de la planta.</li>
          <li><strong>Trabajos "rápidos"</strong> que se hicieron sin permiso porque "solo era un punto de soldadura".</li>
        </ul>
        <p><strong>Cómo se investiga un incendio o un conato:</strong> se reconstruye la secuencia (qué trabajo, qué fuente de calor, por dónde viajó la chispa o el calor, qué se encendió, cuánto tardó en detectarse), se compara con lo que decía el permiso y se buscan las causas en el sistema: el formato, el entrenamiento, la presión de producción, la falta de vigías o la planeación.</p>
        <p><strong>Auditoría del programa de trabajo en caliente.</strong> Además de revisar formatos, se observan trabajos reales. Preguntas útiles:</p>
        <ul>
          <li>¿El responsable del área visitó el sitio antes de firmar?</li>
          <li>¿Las mediciones están registradas con hora y valor?</li>
          <li>¿El vigía estuvo presente todo el tiempo y cumplió la vigilancia posterior completa?</li>
          <li>¿Los permisos se cerraron con la inspección final firmada?</li>
          <li>¿Hay trabajos en caliente hechos sin permiso (por ejemplo, marcas de soldadura nuevas sin un permiso que las respalde)?</li>
        </ul>
        <p><strong>Indicadores útiles:</strong> porcentaje de permisos auditados en campo, desviaciones encontradas y cerradas, conatos de incendio asociados a trabajos en caliente, trabajos llevados al taller en vez de hacerse en la planta y vigías entrenados disponibles.</p>
        <p><strong>Un conato que se apagó a tiempo es un regalo:</strong> se reporta e investiga igual que un incendio, porque la siguiente vez puede no apagarse.</p>
      `,
      keyPoints: [
        'Causas repetidas: combustibles en el radio, gases no medidos, recipientes "vacíos", vigía ausente y permisos firmados sin ir al sitio.',
        'La investigación compara lo que pasó con lo que decía el permiso y busca causas en el sistema.',
        'La auditoría observa trabajos reales; los conatos se reportan e investigan como incendios.'
      ]
    }
  ],

  practices: [
    { q: '¿Por qué es peligroso soldar sobre un panel sándwich con núcleo de poliestireno?', options: ['Porque el núcleo arde por dentro y el fuego puede aparecer lejos y tarde', 'Porque la lámina metálica se dobla con el calor', 'Porque el panel no conduce la corriente de la soldadura'], answer: 0 },
    { q: '¿Cómo se prueba una fuga en un equipo de oxicorte?', options: ['Acercando la llama del soplete a las conexiones', 'Con agua jabonosa o un detector de fugas', 'Abriendo el oxígeno al máximo y escuchando'], answer: 1 },
    { q: '¿Qué es un área designada para trabajo en caliente?', options: ['Cualquier lugar donde el supervisor lo autorice de palabra', 'El área de la planta con más espacio libre', 'Un sitio construido y mantenido para soldar, como un taller'], answer: 2 },
    { q: 'Se apagó a tiempo un conato de incendio causado por una soldadura. ¿Qué se hace?', options: ['Se reporta e investiga como si fuera un incendio', 'Nada, porque no hubo daños', 'Se comenta en la siguiente reunión si hay tiempo'], answer: 0 }
  ],

  workshops: [
    {
      title: 'Taller 1. Trabajos en caliente en su planta',
      prompt: 'Piense en los trabajos que generan chispas, llama o calor en su planta.',
      fields: [
        { label: 'Liste los trabajos en caliente que se hacen en su planta y con qué frecuencia.', help: 'Soldadura, corte, pulido, calentamiento, soplete, pistola de calor...', minWords: 30 },
        { label: '¿En qué áreas el trabajo en caliente sería más peligroso y por qué?', help: '', minWords: 30 },
        { label: '¿Alguno de esos trabajos se hace hoy sin permiso? ¿Por qué cree que pasa?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 2. Roles en su empresa',
      prompt: 'Aterrice los roles del trabajo en caliente a la organización de su empresa.',
      fields: [
        { label: '¿Quién autoriza hoy los trabajos en caliente en su planta? ¿Va al sitio antes de firmar?', help: 'Cargos, no nombres.', minWords: 30 },
        { label: '¿Quién hace de vigía de fuego y qué entrenamiento tiene?', help: '', minWords: 25 },
        { label: '¿Qué cambiaría en la asignación de roles para cumplir la NFPA 51B?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 3. Escoja un trabajo real',
      prompt: 'Escoja un trabajo en caliente real de su planta. Lo usará en los demás talleres y en el proyecto final.',
      fields: [
        { label: 'Describa el trabajo: qué se va a soldar, cortar o calentar, dónde y con qué equipo.', help: '', minWords: 35 },
        { label: 'Liste los combustibles que hay en un radio de 11 metros, incluidos los de otros niveles.', help: '', minWords: 30 },
        { label: '¿Existe una alternativa en frío o se puede llevar la pieza al taller? Explique.', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 4. Atmósferas y mediciones',
      prompt: 'Defina cómo mediría la atmósfera en el trabajo que escogió.',
      fields: [
        { label: '¿Qué gases o vapores inflamables podrían estar presentes y de dónde vendrían?', help: '', minWords: 30 },
        { label: '¿En qué puntos mediría, con qué equipo y con qué frecuencia durante el trabajo?', help: 'Recuerde los vapores pesados y los espacios bajos.', minWords: 30 },
        { label: '¿Qué haría si el detector marca una lectura mayor que cero?', help: '', minWords: 20 }
      ]
    },
    {
      title: 'Taller 5. Recipientes y tuberías',
      prompt: 'Revise los recipientes y tuberías de su planta que podrían intervenirse en caliente.',
      fields: [
        { label: 'Describa un tanque, tambor o tubería de su planta que haya contenido algo inflamable o combustible.', help: '', minWords: 30 },
        { label: '¿Cómo lo prepararía para soldar o cortar (aislamiento, vaciado, limpieza, inertización, medición)?', help: '', minWords: 35 },
        { label: '¿Qué riesgo quedaría si se omite uno de esos pasos?', help: '', minWords: 20 }
      ]
    },
    {
      title: 'Taller 6. El permiso de su empresa',
      prompt: 'Revise el formato de permiso de trabajo en caliente que usa su empresa (o el que debería tener).',
      fields: [
        { label: '¿Qué secciones tiene el permiso de su empresa y cuáles le faltan frente a lo visto en el módulo?', help: '', minWords: 35 },
        { label: '¿Cuánto tiempo es válido el permiso y quién lo cierra?', help: '', minWords: 20 },
        { label: '¿Qué cambiaría del formato para que se diligencie en campo y no en la oficina?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 7. Controles durante el trabajo',
      prompt: 'Defina los controles del trabajo que escogió.',
      fields: [
        { label: '¿Qué protecciones instalaría (mantas, mamparas, sellos de aberturas, humectación) y dónde?', help: '', minWords: 30 },
        { label: '¿Qué elementos de protección personal usaría el ejecutante y por qué?', help: '', minWords: 25 },
        { label: '¿Qué condiciones harían suspender el trabajo?', help: '', minWords: 20 }
      ]
    },
    {
      title: 'Taller 8. Vigilancia posterior y cierre',
      prompt: 'Planee el final del trabajo que escogió.',
      fields: [
        { label: '¿Cuánto duraría la vigilancia posterior y qué revisaría el vigía, incluidos los otros niveles?', help: 'Recuerde los 60 minutos mínimos de la NFPA 51B (2019) y el monitoreo adicional.', minWords: 30 },
        { label: '¿Cómo evitaría que la vigilancia se acorte por el cambio de turno?', help: '', minWords: 25 },
        { label: '¿Quién firma el cierre del permiso y qué verifica antes?', help: '', minWords: 20 }
      ]
    },
    {
      title: 'Taller 9. Combustibles ocultos',
      prompt: 'Busque combustibles que no se ven en su planta.',
      fields: [
        { label: '¿Hay paneles sándwich, aislamientos combustibles, polvo o grasa en ductos en su planta? ¿Dónde?', help: '', minWords: 30 },
        { label: 'Si hubiera que soldar cerca de uno de ellos, ¿qué controles adicionales aplicaría?', help: '', minWords: 30 },
        { label: '¿Cómo averiguaría de qué es el núcleo de un panel?', help: '', minWords: 20 }
      ]
    },
    {
      title: 'Taller 10. Equipos de su planta',
      prompt: 'Revise los equipos de soldadura y corte de su planta.',
      fields: [
        { label: '¿Cómo se almacenan y transportan hoy los cilindros de gas? ¿Qué corregiría?', help: '', minWords: 30 },
        { label: '¿Los equipos de oxicorte tienen válvulas antirretroceso y mangueras en buen estado? ¿Cómo lo verifica?', help: '', minWords: 25 },
        { label: '¿Dónde se conecta la masa de los equipos de arco y qué riesgo habría si se conecta lejos?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 11. Sistemas contra incendio y contratistas',
      prompt: 'Revise cómo se coordinan los trabajos en caliente con la protección contra incendio y los contratistas.',
      fields: [
        { label: '¿Su planta tiene un área designada para soldar? Si no, ¿dónde podría estar?', help: '', minWords: 25 },
        { label: '¿Cómo se maneja hoy la desactivación de detectores o rociadores durante un trabajo? ¿Qué haría mejor?', help: '', minWords: 30 },
        { label: '¿Qué información les da su empresa a los contratistas antes de un trabajo en caliente?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 12. Auditar el programa',
      prompt: 'Diseñe cómo verificaría que el programa de trabajo en caliente funciona.',
      fields: [
        { label: 'Proponga tres preguntas de auditoría en campo para su planta.', help: '', minWords: 30 },
        { label: 'Proponga dos indicadores y cómo los mediría.', help: '', minWords: 25 },
        { label: '¿Cómo animaría a reportar los conatos de incendio sin miedo a sanciones?', help: '', minWords: 25 }
      ]
    }
  ],

  project: {
    title: 'Proyecto final: análisis y permiso de un trabajo en caliente de su planta',
    intro:
      'Prepare el análisis completo del trabajo en caliente que escogió en los talleres, como si mañana fuera a ejecutarse. Debe servirle al responsable del área para decidir si autoriza el trabajo y en qué condiciones. Antes de usarlo en campo, su empresa debe revisarlo y aprobarlo.',
    sections: [
      { label: '1. Descripción del trabajo y justificación', help: 'Qué, dónde, con qué equipo, cuánto tiempo, y por qué no hay alternativa en frío ni se puede llevar al taller.', minWords: 45 },
      { label: '2. Evaluación del área', help: 'Combustibles en 11 metros, otros niveles, aberturas, combustibles ocultos y sistemas contra incendio presentes.', minWords: 60 },
      { label: '3. Atmósfera y preparación', help: 'Gases posibles, puntos y frecuencia de medición, criterio de aceptación y preparación de recipientes o tuberías.', minWords: 55 },
      { label: '4. Controles y protección', help: 'Retiro y protección de combustibles, mamparas, sellos, extintores, equipos y elementos de protección personal.', minWords: 55 },
      { label: '5. Roles, vigilancia y suspensión', help: 'Quién autoriza, ejecuta y vigila; duración de la vigilancia posterior y condiciones que suspenden el trabajo.', minWords: 50 },
      { label: '6. Cierre del permiso y emergencias', help: 'Inspección final, firma de cierre, restablecimiento de sistemas y qué hacer si se inicia un fuego.', minWords: 45 }
    ],
    rubric: [
      'Explica por qué no hay alternativa en frío ni se puede llevar la pieza al taller.',
      'Revisa combustibles a la vista, ocultos y en otros niveles en un radio de 11 metros.',
      'Define dónde, cómo y cada cuánto se mide la atmósfera, y el criterio para suspender.',
      'Asigna un vigía exclusivo con extintor y una vigilancia posterior de al menos 60 minutos.',
      'Incluye el restablecimiento de detectores o rociadores si se desactivaron.',
      'El responsable del área podría decidir con este documento sin preguntar más.'
    ]
  },

  scenarios: [
    {
      scenario:
        'Debes soldar un soporte sobre la pared de un cuarto frío hecho con paneles sándwich. Nadie sabe de qué es el núcleo y el supervisor dice que "es metal, no se quema".',
      options: [
        { text: 'Sueldo rápido, con un extintor cerca.', correct: false, feedback: 'Decisión insegura. Si el núcleo es combustible, puede arder por dentro sin que se vea.' },
        { text: 'Detengo, averiguo de qué es el núcleo y, si es combustible, buscamos una fijación mecánica o un método en frío.', correct: true, feedback: 'Decisión correcta. Primero se conoce el material oculto y se elimina el calor si es posible.' },
        { text: 'Sueldo y mojo la lámina con agua al terminar.', correct: false, feedback: 'Decisión insegura. El agua sobre la lámina no apaga un núcleo que ya empezó a arder.' }
      ]
    },
    {
      scenario:
        'Al encender el soplete de oxicorte se oye un silbido y la llama se mete en la boquilla.',
      options: [
        { text: 'Cierro primero el oxígeno, luego el gas, y no vuelvo a encender hasta revisar el equipo.', correct: true, feedback: 'Decisión correcta. Es un retroceso de llama; se corta el oxígeno y se revisa el equipo.' },
        { text: 'Abro más el gas para que la llama salga.', correct: false, feedback: 'Decisión insegura. Puede llevar la llama hacia las mangueras y el cilindro.' },
        { text: 'Sigo cortando, el silbido es normal.', correct: false, feedback: 'Decisión insegura. El silbido indica que la llama está dentro del soplete.' }
      ]
    },
    {
      scenario:
        'Para que el humo de la soldadura no active la alarma, un técnico desactivó los detectores de toda la nave sin avisar a nadie. El trabajo ya terminó.',
      options: [
        { text: 'Los dejo desactivados hasta mañana por si hay que volver a soldar.', correct: false, feedback: 'Decisión insegura. La nave queda sin detección durante la noche, justo cuando puede aparecer un fuego latente.' },
        { text: 'No es mi responsabilidad: los detectores son del área de mantenimiento.', correct: false, feedback: 'Decisión insegura. Se debe reportar de inmediato para restablecerlos.' },
        { text: 'Reporto la situación, se restablecen y verifican los detectores y se registra la desviación para corregir el procedimiento.', correct: true, feedback: 'Decisión correcta. Toda desactivación debe ser formal, limitada y restablecida.' }
      ]
    },
    {
      scenario:
        'Un contratista llega a soldar una baranda con su propio permiso de trabajo, firmado por su empresa. No ha hablado con el responsable del área.',
      options: [
        { text: 'Lo dejo empezar: ya tiene permiso.', correct: false, feedback: 'Decisión insegura. No conoce los peligros del área ni tiene el permiso de la planta.' },
        { text: 'No empieza hasta tener el permiso de la planta firmado por el responsable del área, después de evaluar el sitio juntos.', correct: true, feedback: 'Decisión correcta. El contratista trabaja con el permiso de la planta y bajo su autoridad.' },
        { text: 'Le pido que trabaje rápido y le asigno un vigía de mi equipo.', correct: false, feedback: 'Decisión incompleta. Falta la evaluación del área y el permiso de la planta.' }
      ]
    },
    {
      scenario:
        'En una parada de planta, dos contratistas sueldan en la misma estructura: uno en el piso superior y otro justo debajo, donde hay estibas de cartón.',
      options: [
        { text: 'Cada contratista cuida su propia área.', correct: false, feedback: 'Decisión insegura. Las chispas del piso superior caen sobre el área del otro frente.' },
        { text: 'Pongo un extintor adicional abajo y que sigan.', correct: false, feedback: 'Decisión incompleta. Faltan retirar el cartón, sellar aberturas y coordinar los frentes.' },
        { text: 'Detengo y coordino: se retiran los combustibles de abajo, se sellan las aberturas, se asigna vigía en ambos niveles y se secuencian los trabajos.', correct: true, feedback: 'Decisión correcta. En las paradas se coordinan los frentes para que la chispa de uno no caiga en el área del otro.' }
      ]
    }
  ],

  exam: [
    {
      q: '¿Qué hace especialmente peligroso un panel sándwich con núcleo de poliuretano o EPS?',
      options: [
        'Que el núcleo puede arder por dentro sin llama visible.',
        'Que la lámina exterior se oxida rápido con el calor.',
        'Que no se puede pintar después de soldarlo.'
      ],
      answer: 0
    },
    {
      q: '¿Cómo se limpia el polvo combustible acumulado antes de un trabajo en caliente?',
      options: [
        'Soplándolo con aire comprimido para sacarlo rápido del área.',
        'Aspirándolo o barriéndolo sin levantar nubes de polvo.',
        'No hace falta limpiarlo si se usa una manta ignífuga.'
      ],
      answer: 1
    },
    {
      q: 'Según OSHA 1910.253, ¿cómo se almacenan el oxígeno y el gas combustible?',
      options: [
        'Juntos, en el mismo carro, para tenerlos a mano.',
        'Acostados en el piso del taller para que no se caigan.',
        'Separados al menos 6 m o con una barrera no combustible.'
      ],
      answer: 2
    },
    {
      q: '¿Para qué sirven las válvulas antirretroceso de un equipo de oxicorte?',
      options: [
        'Para evitar que la llama regrese hacia las mangueras y el cilindro.',
        'Para regular la presión de trabajo del soplete.',
        'Para medir el gas que queda en el cilindro.'
      ],
      answer: 0
    },
    {
      q: '¿Por qué la pinza de masa se conecta cerca de la soldadura?',
      options: [
        'Para que el arco encienda más rápido y con menos salpicadura.',
        'Para que la corriente no regrese por estructuras y genere calor lejos.',
        'Porque el cable de masa suele ser más corto que el del electrodo.'
      ],
      answer: 1
    },
    {
      q: '¿Cuál es la forma más segura de eliminar el riesgo de un trabajo en caliente en la planta?',
      options: [
        'Hacerlo en el turno de la noche, cuando hay menos personas.',
        'Hacerlo con dos extintores en vez de uno.',
        'Llevar la pieza al área designada o taller.'
      ],
      answer: 2
    },
    {
      q: 'El humo de la soldadura puede activar los detectores. ¿Cómo se maneja?',
      options: [
        'Con desactivación autorizada, limitada, compensada y restablecida al terminar.',
        'Desactivando los detectores de la nave durante todo el día.',
        'Tapando los detectores con bolsas plásticas sin avisar.'
      ],
      answer: 0
    },
    {
      q: 'En la auditoría de un permiso de trabajo en caliente, ¿qué es una señal de alerta?',
      options: [
        'Que el permiso tenga las mediciones registradas con hora y valor.',
        'Que el permiso se haya firmado sin que nadie visitara el sitio.',
        'Que el vigía haya firmado el cierre después de la vigilancia.'
      ],
      answer: 1
    }
  ]
};
