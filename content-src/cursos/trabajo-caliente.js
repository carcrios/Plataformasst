/**
 * Curso: Seguridad en Trabajo en Caliente. Versión completa.
 * Normativa: Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979. Referencia técnica: NFPA 51B (edición 2019:
 * vigilancia de fuego de al menos 1 hora después del trabajo y monitoreo adicional definido por quien autoriza).
 */
export default {
  id: 'trabajo-caliente',
  title: 'Seguridad en Trabajo en Caliente',
  hours: 1.5,
  category: 'prevencion_sst',
  regulation: 'Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979; referencia: NFPA 51B',
  legalNotice:
    'Formación teórica en prevención de incendios y explosiones durante trabajos en caliente. No reemplaza el permiso de trabajo de la empresa, el entrenamiento práctico con el detector de gases ni la autorización de quien aprueba el permiso.',
  summary:
    'Qué trabajos generan fuentes de ignición, cómo evaluar el área y buscar alternativas en frío, cómo medir atmósferas inflamables, cómo preparar tuberías y recipientes, el permiso de trabajo, los controles durante el trabajo y la vigilancia posterior.',
  fieldCase:
    'Al cortar con pulidora una tubería "aparentemente vacía", los vapores residuales de un solvente dentro del ducto alcanzaron el rango inflamable y provocaron una explosión que lanzó la tapa de la tubería contra el técnico.',
  failureAnalysis:
    'Falla raíz: no se aisló, limpió ni purgó la tubería, y no se midió la atmósfera inflamable antes de cortar. Se confió en que "estaba vacía".',
  checklist: [
    'Evalué si el trabajo se puede hacer en frío o llevar la pieza al taller.',
    'Retiré o protegí con mantas ignífugas los combustibles en un radio de 11 metros, incluidos los niveles inferiores.',
    'Tapé aberturas, rejillas y ductos por donde puedan pasar chispas.',
    'Tuberías y recipientes: aislados, vaciados, limpios, purgados y medidos.',
    'Medí la atmósfera con un detector verificado y la medición quedó en el permiso.',
    'El permiso está firmado por quien autoriza, vigente y visible en el sitio.',
    'Hay un vigía de fuego dedicado, con extintor adecuado y medio de alarma.',
    'Al terminar, el vigía permanece al menos 60 minutos y el área se inspecciona antes de cerrar el permiso.'
  ],
  onSiteClosure:
    'Práctica en su empresa: diligenciar un permiso de trabajo en caliente real con quien autoriza, verificar el detector de gases con una prueba de respuesta, medir la atmósfera del área y participar como vigía durante y después de un trabajo supervisado.',

  modules: [
    {
      title: 'Qué es el trabajo en caliente y por qué causa incendios',
      content: `
        <p><strong>Trabajo en caliente</strong> es toda actividad que produce llamas, chispas o calor suficiente para encender un material: soldadura por arco y con gas, oxicorte, corte y esmerilado con pulidora, uso de sopletes, termofusión, calentamiento de piezas y algunos trabajos de impermeabilización con llama.</p>
        <p><strong>Cómo se produce el fuego.</strong> Para que haya fuego se necesitan tres elementos al mismo tiempo: <strong>combustible</strong> (cartón, madera, plástico, polvo, vapores de solventes, gas), <strong>oxígeno</strong> (el del aire es suficiente) y una <strong>fuente de calor</strong>. El trabajo en caliente aporta la fuente de calor en un lugar donde casi siempre hay combustible y oxígeno. Cuando además se mantiene la reacción en cadena, se habla del tetraedro del fuego.</p>
        <p><strong>Por qué es tan traicionero:</strong></p>
        <ul>
          <li><strong>Las chispas viajan lejos.</strong> Las partículas de esmerilado y la escoria de oxicorte pueden recorrer más de 10 metros, rebotar y caer por rejillas, grietas o ductos a otros pisos.</li>
          <li><strong>El calor se conduce.</strong> Una tubería o una pared metálica calentada puede encender un material que está al otro lado, fuera de la vista del soldador.</li>
          <li><strong>El fuego puede empezar tarde.</strong> Una escoria caliente dentro de un cartón, un aislamiento o una pila de trapos puede arder sin llama durante decenas de minutos antes de que aparezca el incendio, cuando ya todos se fueron.</li>
          <li><strong>Los vapores no se ven.</strong> Un tanque, una tubería o un drenaje con residuos de combustible puede contener una mezcla explosiva aunque parezca vacío y limpio.</li>
        </ul>
        <p><strong>Dónde ocurre la mayoría de los accidentes.</strong> No en el taller de soldadura, que está preparado para eso, sino en las intervenciones de mantenimiento <em>fuera</em> del taller: en bodegas, techos, cuartos técnicos, tanques y líneas de proceso. Ahí es donde el procedimiento de trabajo en caliente es obligatorio.</p>
        <p><strong>Las consecuencias</strong> van desde quemaduras del trabajador hasta incendios que destruyen una planta, explosiones de tanques y tuberías, e intoxicaciones por humo. Casi siempre se habría evitado con controles sencillos: retirar el combustible, medir la atmósfera y mantener un vigía después del trabajo.</p>
      `,
      keyPoints: [
        'Trabajo en caliente: soldar, oxicortar, esmerilar, usar soplete o cualquier actividad con llamas, chispas o calor.',
        'Las chispas viajan más de 10 metros, el calor se conduce por metales y el fuego puede empezar mucho después.',
        'Un recipiente "vacío" puede tener vapores explosivos que no se ven.'
      ]
    },
    {
      title: 'Marco normativo y roles del trabajo en caliente',
      content: `
        <p><strong>En Colombia</strong>, la obligación de controlar este riesgo viene del <strong>Decreto 1072 de 2015</strong> (identificar peligros y aplicar controles en el SG-SST) y de la <strong>Resolución 0312 de 2019</strong>, que pide procedimientos e instructivos para las tareas de alto riesgo. La <strong>Resolución 2400 de 1979</strong> (Estatuto de Seguridad Industrial) contiene disposiciones sobre soldadura y sobre prevención y extinción de incendios en los lugares de trabajo. Cada empresa concreta estas obligaciones en su <strong>procedimiento y permiso de trabajo en caliente</strong>.</p>
        <p><strong>La referencia técnica</strong> más usada es la norma <strong>NFPA 51B</strong> (prevención de incendios durante soldadura, corte y otros trabajos en caliente), de la Asociación Nacional de Protección contra el Fuego de Estados Unidos. No es una ley colombiana, pero la exigen muchas aseguradoras y clientes multinacionales.</p>
        <p><strong>Los tres roles</strong> que define la NFPA 51B, y que conviene adoptar:</p>
        <ul>
          <li><strong>Quien autoriza el permiso</strong> (en inglés, <em>PAI</em>): persona designada por la empresa que evalúa el área, decide si el trabajo se puede hacer, define las precauciones y firma el permiso. También decide cuánto tiempo adicional de monitoreo se necesita al terminar.</li>
          <li><strong>El ejecutante</strong> (operador del trabajo en caliente): hace el trabajo, cumple las condiciones del permiso y detiene la tarea si las condiciones cambian.</li>
          <li><strong>El vigía de fuego</strong>: observa el área durante el trabajo y después de terminado, con un extintor y un medio para dar la alarma. <strong>No hace otras tareas</strong>: no sostiene piezas, no va por herramientas, no ayuda a soldar.</li>
        </ul>
        <p><strong>Responsabilidades de la empresa:</strong> definir áreas permitidas (talleres) y áreas que requieren permiso; designar y capacitar a quienes autorizan, ejecutan y vigilan; y asegurarse de que los contratistas conozcan y cumplan el procedimiento.</p>
        <p><strong>Contratistas.</strong> Un contratista que llega a soldar en la planta trabaja con el permiso de la empresa anfitriona, que conoce los peligros del lugar. El contratista aporta su personal calificado y su equipo en buen estado, pero no decide solo dónde y cómo hacer el trabajo.</p>
      `,
      keyPoints: [
        'Decreto 1072 de 2015 y Res. 0312 de 2019 exigen controlar las tareas de alto riesgo con procedimientos; la NFPA 51B es la referencia técnica.',
        'Tres roles: quien autoriza el permiso, el ejecutante y el vigía de fuego.',
        'El vigía de fuego no hace otras tareas mientras vigila.'
      ]
    },
    {
      title: 'Evaluar el área y buscar alternativas en frío',
      content: `
        <p><strong>La primera pregunta</strong> antes de cualquier trabajo en caliente es: <em>¿hay que hacerlo en caliente y aquí?</em> La forma más segura de controlar el riesgo es no generarlo.</p>
        <ul>
          <li><strong>Llevar la pieza al taller</strong>, que es un área preparada para trabajo en caliente.</li>
          <li><strong>Usar métodos en frío</strong>: cortatubos, sierras manuales o hidráulicas, uniones roscadas, bridadas o con acoples mecánicos, adhesivos industriales.</li>
          <li><strong>Reprogramar</strong> el trabajo para cuando el área esté sin producción ni materiales inflamables.</li>
        </ul>
        <p><strong>Si el trabajo sí debe hacerse en sitio</strong>, quien autoriza recorre el área con el ejecutante y revisa:</p>
        <ul>
          <li><strong>Combustibles en un radio de 11 metros</strong> (35 pies, la distancia de referencia de la NFPA 51B): cartón, estibas de madera, plásticos, trapos con aceite, polvo acumulado, aislamientos, recipientes con químicos. Se retiran; lo que no se puede mover se cubre con <strong>mantas ignífugas</strong> o se protege con barreras.</li>
          <li><strong>Aberturas</strong>: rejillas de piso, grietas, huecos en paredes, ductos y canaletas de cables por donde las chispas puedan pasar a otro espacio. Se tapan con material incombustible.</li>
          <li><strong>El otro lado</strong>: qué hay detrás de la pared, debajo del piso o encima del techo que se va a calentar. Si hay combustibles, se ubica un segundo vigía en ese lado.</li>
          <li><strong>Pisos combustibles</strong>: se barren, se humedecen o se protegen.</li>
          <li><strong>Atmósfera</strong>: si cerca hay tanques, drenajes, tuberías de gas o procesos con solventes, se mide (módulo siguiente).</li>
          <li><strong>Sistemas de protección</strong>: rociadores y alarmas funcionando. Si un detector de humo puede activarse, se coordina con el responsable, pero los rociadores nunca se desactivan.</li>
        </ul>
        <p><strong>Cuándo no se autoriza.</strong> Si no es posible controlar los combustibles, si hay atmósfera inflamable o potencialmente inflamable que no se puede eliminar, o si el área tiene materiales que pueden explotar (polvos combustibles en suspensión, gases), el trabajo no se hace hasta resolver la condición.</p>
      `,
      keyPoints: [
        'Primero se busca no hacer trabajo en caliente: llevar la pieza al taller o usar métodos en frío.',
        'Se retiran o protegen los combustibles en un radio de 11 metros, y se tapan aberturas, rejillas y ductos.',
        'Se revisa el otro lado de paredes, pisos y techos; si no se puede controlar, no se autoriza.'
      ]
    },
    {
      title: 'Atmósferas inflamables y medición con detector de gases',
      content: `
        <p><strong>Límite inferior de inflamabilidad (LII o LEL).</strong> Un gas o vapor inflamable solo arde o explota cuando su concentración en el aire está dentro de un rango. Por debajo del límite inferior la mezcla es demasiado pobre; por encima del límite superior, demasiado rica. El peligro es que, al ventilar o al abrir un recipiente, una mezcla "demasiado rica" puede pasar a estar dentro del rango.</p>
        <p><strong>Qué mide el detector.</strong> El sensor de gases combustibles indica la concentración como <strong>porcentaje del LEL</strong>. Una lectura de 10 % LEL significa que la mezcla está a una décima parte de poder encenderse.</p>
        <p><strong>Criterio de aceptación.</strong> Cada empresa lo define en su procedimiento. Lo habitual es no autorizar trabajo en caliente si la lectura supera el 10 % del LEL en el área, y exigir 0 % dentro de tanques, tuberías y recipientes que se van a cortar o soldar. Siga siempre el criterio de su procedimiento.</p>
        <p><strong>Cómo medir bien:</strong></p>
        <ol>
          <li><strong>Verificar el detector</strong>: que esté calibrado y que pase la <em>prueba de respuesta</em> (exponerlo a un gas de concentración conocida) antes de usarlo.</li>
          <li><strong>Medir en varios puntos y alturas</strong>: muchos vapores de solventes y gases como el propano son más pesados que el aire y se acumulan abajo, en fosos y drenajes; el gas natural es más liviano y se acumula arriba.</li>
          <li><strong>Medir dentro</strong> de tuberías y recipientes, por las aberturas, con una sonda.</li>
          <li><strong>Registrar</strong> la lectura, la hora y quién midió en el permiso.</li>
          <li><strong>Monitorear de forma continua</strong> durante el trabajo cuando puede haber liberación de vapores, y detener todo si la alarma suena.</li>
        </ol>
        <p><strong>Otros gases.</strong> Muchos detectores miden también oxígeno, monóxido de carbono y sulfuro de hidrógeno. Un exceso de oxígeno (por ejemplo, por una fuga de oxígeno del equipo de oxicorte) hace que materiales que normalmente no arden lo hagan con violencia; la ropa puede incendiarse en segundos.</p>
        <p><strong>Error típico:</strong> medir una vez al inicio y no volver a medir después de una pausa larga, de un cambio en el proceso vecino o cuando se abre una nueva sección de la tubería.</p>
      `,
      keyPoints: [
        'El detector mide gases combustibles como porcentaje del LEL; el criterio de aceptación lo fija el procedimiento.',
        'Se verifica el detector, se mide en varios puntos y alturas, se registra y se monitorea durante el trabajo.',
        'El exceso de oxígeno también es peligroso: hace que la ropa y otros materiales ardan con violencia.'
      ]
    },
    {
      title: 'Tuberías y recipientes que contuvieron inflamables',
      content: `
        <p>Los accidentes más graves del trabajo en caliente ocurren al cortar o soldar <strong>tanques, tambores, tuberías y ductos</strong> que contuvieron combustibles, solventes, aceites o gases. "Vacío" no significa "seguro": los residuos en el fondo, en las paredes o en el aislamiento siguen liberando vapores.</p>
        <p><strong>Pasos para preparar un recipiente o una tubería:</strong></p>
        <ol>
          <li><strong>Identificar</strong> qué contuvo, consultando la ficha de datos de seguridad del producto.</li>
          <li><strong>Aislar</strong> de todas las fuentes: cerrar y bloquear válvulas, y en servicios críticos instalar bridas ciegas o desconectar físicamente la línea (ver el curso de bloqueo y aislamiento de energías).</li>
          <li><strong>Vaciar y drenar</strong> completamente el producto.</li>
          <li><strong>Limpiar</strong>: lavar con agua, vapor o detergente según el producto, hasta retirar los residuos.</li>
          <li><strong>Purgar o inertizar</strong>: ventilar con aire, o desplazar la atmósfera con un gas inerte como nitrógeno cuando no se puede garantizar la limpieza. Atención: un recipiente inertizado no tiene oxígeno suficiente para respirar; nadie entra sin el procedimiento de espacios confinados.</li>
          <li><strong>Medir</strong> en el interior hasta obtener el valor exigido por el procedimiento.</li>
          <li><strong>Mantener abierto</strong> un venteo, para que el calor no genere presión dentro.</li>
        </ol>
        <p><strong>Tambores y canecas.</strong> Nunca se corta un tambor metálico que contuvo combustible "para hacer un recipiente". Es una de las causas más frecuentes de muerte por explosión en talleres.</p>
        <p><strong>Tuberías en servicio.</strong> Soldar en una tubería con producto en servicio solo se hace con procedimientos de ingeniería especializados, nunca como un trabajo de mantenimiento corriente.</p>
        <p><strong>El caso del curso</strong> cumplía todas las condiciones para la explosión: residuos de solvente, ningún aislamiento, ninguna limpieza y ninguna medición. Bastaba con medir para descubrir el peligro.</p>
      `,
      keyPoints: [
        'Un recipiente o una tubería "vacía" puede tener vapores explosivos por los residuos.',
        'Preparación: identificar, aislar, vaciar, limpiar, purgar o inertizar, medir y dejar un venteo abierto.',
        'Nunca se corta un tambor que contuvo combustible; no se suelda en tuberías en servicio sin ingeniería especializada.'
      ]
    },
    {
      title: 'El permiso de trabajo en caliente',
      content: `
        <p>El <strong>permiso de trabajo</strong> es el documento que demuestra que alguien con autoridad evaluó el área, que se aplicaron los controles y que el trabajo se puede hacer. No es un trámite: es una lista de verificación firmada que obliga a mirar el sitio antes de empezar.</p>
        <p><strong>Contenido mínimo de un buen permiso:</strong></p>
        <ul>
          <li>Ubicación exacta y descripción del trabajo (qué se va a cortar o soldar y con qué equipo).</li>
          <li>Fecha, hora de inicio y hora de vencimiento.</li>
          <li>Peligros identificados y controles aplicados: combustibles retirados o protegidos, aberturas tapadas, aislamiento de tuberías, ventilación.</li>
          <li>Resultado de las mediciones de gases, con hora y responsable.</li>
          <li>Extintores y equipos de protección contra incendios disponibles.</li>
          <li>Nombre del ejecutante, del vigía de fuego y de quien autoriza, con sus firmas.</li>
          <li>Tiempo de vigilancia posterior y firma de cierre.</li>
        </ul>
        <p><strong>Vigencia.</strong> Lo usual es que el permiso valga solo para un turno o una jornada y para el lugar y la tarea descritos. Si el trabajo continúa al día siguiente, el área se vuelve a evaluar.</p>
        <p><strong>Cuándo se suspende el permiso:</strong></p>
        <ul>
          <li>si suena una alarma de gas o de incendio en el área;</li>
          <li>si cambian las condiciones (empieza una operación vecina con solventes, llega material combustible, se abre otra línea);</li>
          <li>si el vigía tiene que retirarse;</li>
          <li>si se detecta cualquier condición no prevista.</li>
        </ul>
        <p>Para reanudar, quien autoriza vuelve a evaluar y, si es necesario, se mide de nuevo.</p>
        <p><strong>Relación con el ATS.</strong> El análisis de trabajo seguro (ATS) describe paso a paso la tarea y sus peligros; el permiso verifica las condiciones del sitio. Se complementan, y ambos deben estar en el lugar del trabajo, visibles.</p>
        <p><strong>Errores frecuentes:</strong> firmar el permiso desde la oficina sin ir al sitio, usar el mismo permiso para varias áreas, dejar en blanco las mediciones y "cerrar" el permiso apenas se apaga el equipo.</p>
      `,
      keyPoints: [
        'El permiso demuestra que alguien con autoridad evaluó el sitio: no se firma desde la oficina.',
        'Incluye tarea, lugar, horario, controles, mediciones, vigía, firmas y tiempo de vigilancia posterior.',
        'Se suspende ante alarmas, cambios de condiciones o si el vigía se retira.'
      ]
    },
    {
      title: 'Controles durante el trabajo y elementos de protección',
      content: `
        <p><strong>Antes de encender el equipo</strong>, el ejecutante confirma que todo lo del permiso está en su lugar y que el vigía está listo.</p>
        <p><strong>Equipo y área:</strong></p>
        <ul>
          <li>Equipos de soldadura y corte inspeccionados: cables sin daños, mangueras sin fugas, reguladores en buen estado y válvulas antirretroceso en el oxicorte.</li>
          <li>Cilindros de gas asegurados en posición vertical, con su capuchón cuando no se usan, lejos de la zona de chispas.</li>
          <li>Mamparas o cortinas para contener chispas y proteger a otras personas del arco.</li>
          <li>Extintor adecuado al alcance (normalmente de polvo químico seco multipropósito) y, cuando haya riesgo, una manguera de agua lista.</li>
          <li>Ventilación o extracción localizada para los humos.</li>
        </ul>
        <p><strong>Elementos de protección del ejecutante:</strong></p>
        <ul>
          <li>Ropa de algodón o de materiales resistentes a la llama, de manga larga, sin bolsillos abiertos ni dobladillos donde caigan chispas. <strong>Nada de fibras sintéticas</strong> como el poliéster o el nailon, que se derriten y se pegan a la piel.</li>
          <li>Careta o gafas con el filtro adecuado al proceso, y gafas de seguridad debajo para cuando se levanta la careta.</li>
          <li>Guantes de cuero para soldador, peto o chaqueta de cuero, polainas y botas de seguridad.</li>
          <li>Protección respiratoria cuando la ventilación no basta y protección auditiva cuando se esmerila.</li>
        </ul>
        <p><strong>Durante el trabajo:</strong></p>
        <ul>
          <li>Dirigir las chispas lejos de los combustibles y de las personas.</li>
          <li>Si se trabaja en altura, prever dónde caerán las chispas y proteger el nivel inferior.</li>
          <li>Hacer pausas para que el vigía revise el área, especialmente detrás de las barreras.</li>
          <li>Detener el trabajo de inmediato si aparece humo, olor a quemado, una alarma o un cambio en el área.</li>
        </ul>
        <p><strong>El vigía</strong> mantiene la vista sobre las chispas y los lugares donde caen, tiene el extintor en la mano o al alcance inmediato y conoce cómo dar la alarma. Si observa un conato, actúa; si el fuego crece, evacúa y da la alarma sin arriesgarse.</p>
      `,
      keyPoints: [
        'Equipos inspeccionados, cilindros asegurados, mamparas, extintor adecuado y ventilación.',
        'Ropa de algodón o resistente a la llama: nunca sintéticos, que se derriten sobre la piel.',
        'Se detiene el trabajo ante humo, olor a quemado, alarmas o cambios en el área.'
      ]
    },
    {
      title: 'Después del trabajo: vigilancia y cierre del permiso',
      content: `
        <p>Muchos incendios causados por trabajos en caliente empiezan <strong>después</strong> de terminar: una escoria que quedó dentro de un aislamiento, una chispa que cayó a un piso inferior o el calor que siguió conduciéndose por una viga.</p>
        <p><strong>Cuánto tiempo vigilar.</strong> La edición 2019 de la NFPA 51B aumentó la vigilancia de fuego después del trabajo de 30 minutos a <strong>al menos 60 minutos</strong>, y añadió que quien autoriza puede exigir hasta <strong>tres horas adicionales de monitoreo</strong> del área según el riesgo. Algunas normas más antiguas siguen hablando de 30 minutos; muchas empresas y aseguradoras ya adoptaron los 60. Siga el tiempo que fije su procedimiento, y nunca menos de lo que diga el permiso.</p>
        <p><strong>Qué hace el vigía en ese tiempo:</strong></p>
        <ul>
          <li>Revisa el área de trabajo y todo el radio por donde pudieron llegar chispas.</li>
          <li>Revisa los niveles inferiores, el otro lado de paredes y techos, los ductos y las canaletas.</li>
          <li>Toca con cuidado (con el dorso de la mano y guante) o mide con termómetro las superficies que se calentaron.</li>
          <li>Busca humo, olor a quemado o puntos calientes en aislamientos, cartones y trapos.</li>
          <li>Permanece en el área: <strong>no se va con el cambio de turno</strong> si no ha terminado el tiempo.</li>
        </ul>
        <p><strong>Cierre del permiso.</strong> Al terminar la vigilancia, el vigía y el ejecutante (o quien autoriza) inspeccionan juntos y firman el cierre. Solo entonces se retiran las mantas y barreras, y se devuelve el área a la operación normal.</p>
        <p><strong>Si se encuentra un conato</strong>, se apaga con el extintor si es pequeño y se puede hacer sin riesgo, se da la alarma, se informa a quien autorizó y se investiga como incidente. Ese hallazgo indica que algún control falló.</p>
        <p><strong>Lecciones aprendidas.</strong> Registrar qué funcionó y qué no en cada trabajo en caliente crítico ayuda a mejorar el procedimiento: dónde cayeron las chispas que nadie esperaba, qué combustible no se había visto, qué tan útil fue el detector.</p>
      `,
      keyPoints: [
        'NFPA 51B (2019): vigilancia de al menos 60 minutos después del trabajo, más monitoreo adicional si quien autoriza lo exige.',
        'El vigía revisa el área, los niveles inferiores y el otro lado de paredes y techos; no se va con el cambio de turno.',
        'El permiso se cierra solo después de la vigilancia y de una inspección conjunta.'
      ]
    }
  ],

  practices: [
    { q: '¿Cuáles son los tres elementos que se necesitan al mismo tiempo para que haya fuego?', options: ['Agua, aire y metal', 'Combustible, oxígeno y una fuente de calor', 'Humo, cenizas y electricidad'], answer: 1 },
    { q: 'En la NFPA 51B, ¿qué hace la persona que autoriza el permiso?', options: ['Evalúa el área, define las precauciones y firma el permiso', 'Ejecuta la soldadura y sostiene las piezas', 'Vende los equipos de soldadura a la empresa'], answer: 0 },
    { q: '¿Cuál es la primera alternativa para controlar el riesgo de un trabajo en caliente?', options: ['Usar un extintor más grande en el área', 'Trabajar más rápido para reducir la exposición', 'Evitarlo: llevar la pieza al taller o usar un método en frío'], answer: 2 },
    { q: 'Un detector marca 10 % LEL. ¿Qué significa?', options: ['Que la mezcla está a una décima parte de poder encenderse', 'Que el aire tiene 10 % de oxígeno', 'Que el detector tiene la batería al 10 %'], answer: 0 },
    { q: '¿Por qué se deja un venteo abierto al soldar un recipiente preparado?', options: ['Para que el humo salga hacia el soldador', 'Para que el calor no genere presión dentro del recipiente', 'Para que el vigía pueda mirar el interior'], answer: 1 },
    { q: '¿Cuál es la vigencia habitual de un permiso de trabajo en caliente?', options: ['Un mes, para todas las áreas de la planta', 'Un año, mientras el soldador tenga su certificado', 'Un turno o jornada, para el lugar y la tarea descritos'], answer: 2 },
    { q: '¿Por qué no se usa ropa de poliéster o nailon al soldar?', options: ['Porque se derrite y se pega a la piel', 'Porque es más pesada que el algodón', 'Porque atrae los rayos ultravioleta'], answer: 0 },
    { q: '¿Qué debe revisar el vigía durante la vigilancia posterior, además del área de trabajo?', options: ['Solo el equipo de soldadura apagado', 'Los niveles inferiores y el otro lado de paredes y techos', 'El inventario de consumibles del taller'], answer: 1 }
  ],

  scenarios: [
    {
      scenario:
        'Debes cortar una tubería con pulidora. El supervisor dice que "ya está vacía, la usaron con agua la semana pasada", pero no sabes qué llevaba antes. No hay permiso firmado ni medición.',
      options: [
        { text: 'Corto con cuidado: si llevaba agua, no hay peligro.', correct: false, feedback: 'Decisión insegura. Sin saber qué contuvo, sin aislamiento ni medición, puede haber vapores inflamables, como en el caso del curso.' },
        { text: 'Detengo la tarea, pido el permiso y confirmo qué contuvo la tubería, que esté aislada, limpia y purgada, y que se mida la atmósfera interior antes de cortar.', correct: true, feedback: 'Decisión correcta. Preparar y medir la tubería es lo que evita la explosión.' },
        { text: 'Pido al vigía que esté listo con el extintor y corto de una vez.', correct: false, feedback: 'Decisión insegura. El extintor no detiene una explosión dentro de la tubería; hay que eliminar los vapores antes de cortar.' }
      ]
    },
    {
      scenario:
        'Estás soldando cerca de una canaleta de cables. Hay una mampara metálica, pero detrás de ella ves cartones de empaque, y el vigía se fue a buscar un repuesto que pidió el mantenimiento.',
      options: [
        { text: 'Sigo soldando con cuidado mientras el vigía regresa.', correct: false, feedback: 'Decisión insegura. Sin vigía no hay quien detecte una chispa en el cartón o la canaleta.' },
        { text: 'Detengo el trabajo hasta que el vigía regrese y hasta retirar o cubrir con manta ignífuga los cartones y proteger la canaleta.', correct: true, feedback: 'Decisión correcta. El trabajo se suspende si el vigía se retira o si aparece combustible sin proteger.' },
        { text: 'Le pido a otro soldador que vigile de reojo mientras él trabaja en su propia tarea.', correct: false, feedback: 'Decisión insegura. El vigía debe estar dedicado: alguien ocupado en otra tarea no vigila.' }
      ]
    },
    {
      scenario:
        'Son las 5:30 p. m. El trabajo terminó y el ejecutante quiere cerrar el permiso de inmediato porque se acaba el turno. El vigía también quiere irse.',
      options: [
        { text: 'Cerramos el permiso: el equipo ya está apagado.', correct: false, feedback: 'Decisión insegura. Muchos incendios empiezan después del trabajo, con escorias que arden sin llama durante largo rato.' },
        { text: 'Dejamos un cartel de "trabajo terminado" y nos vamos.', correct: false, feedback: 'Decisión insegura. Un cartel no detecta ni apaga un conato.' },
        { text: 'El vigía permanece el tiempo fijado (al menos 60 minutos), revisa niveles inferiores y superficies calientes, y luego se inspecciona y se cierra el permiso; si se requiere, se gestiona el relevo del vigía.', correct: true, feedback: 'Decisión correcta. La vigilancia posterior es parte del trabajo; si alguien se va, debe haber relevo.' }
      ]
    },
    {
      scenario:
        'Al medir antes de soldar un soporte cerca de un foso de drenaje, el detector marca 0 % LEL a la altura de la cintura, pero no has medido dentro del foso, donde llegan residuos del área de solventes.',
      options: [
        { text: 'Mido también dentro del foso y en los puntos bajos, porque los vapores de solventes suelen ser más pesados que el aire.', correct: true, feedback: 'Decisión correcta. Hay que medir en varios puntos y alturas, especialmente en fosos y drenajes.' },
        { text: 'Doy por buena la medición: 0 % es el mejor resultado posible.', correct: false, feedback: 'Decisión insegura. Una sola medición a la altura equivocada puede pasar por alto vapores acumulados abajo.' },
        { text: 'Tapo el foso con una lámina y empiezo, así las chispas no entran.', correct: false, feedback: 'Decisión insegura. Tapar no elimina los vapores; primero hay que medir y controlar.' }
      ]
    },
    {
      scenario:
        'Llevas veinte minutos soldando con el permiso en regla. En el área vecina, otro equipo empieza a limpiar un tanque con un solvente y se siente el olor.',
      options: [
        { text: 'Sigo, porque mi permiso está vigente y firmado.', correct: false, feedback: 'Decisión insegura. El permiso se aprobó con otras condiciones; un solvente cercano puede crear una atmósfera inflamable.' },
        { text: 'Detengo el trabajo, aviso a quien autorizó el permiso y espero a que se vuelva a evaluar y medir el área antes de continuar.', correct: true, feedback: 'Decisión correcta. Un cambio de condiciones suspende el permiso hasta una nueva evaluación.' },
        { text: 'Le pido al otro equipo que se apure para terminar antes de que se acumule el olor.', correct: false, feedback: 'Decisión insegura. Apurarse no elimina los vapores; el trabajo en caliente debe detenerse.' }
      ]
    }
  ],

  exam: [
    {
      q: '¿Cuál de estas actividades es trabajo en caliente?',
      options: [
        'Ajustar un perno con una llave manual.',
        'Esmerilar una pieza metálica con pulidora fuera del taller.',
        'Pintar con brocha una baranda usando pintura a base de agua en un área ventilada de la bodega.'
      ],
      answer: 1
    },
    {
      q: '¿Por qué una escoria de soldadura puede causar un incendio mucho después de terminar?',
      options: [
        'Porque puede arder sin llama dentro de cartones o aislamientos durante largo tiempo.',
        'Porque la escoria absorbe oxígeno del aire y lo libera de golpe cuando se enfría por completo.',
        'Porque la luz del arco deja cargada eléctricamente el área y produce chispas después.'
      ],
      answer: 0
    },
    {
      q: 'Según la NFPA 51B, ¿qué caracteriza al vigía de fuego?',
      options: [
        'Ayuda al soldador sosteniendo piezas y trayendo herramientas para que el trabajo termine más rápido.',
        'Es el responsable de firmar el permiso y decidir si el área está lista para el trabajo en caliente.',
        'Se dedica solo a vigilar, con extintor y medio de alarma, durante y después del trabajo.'
      ],
      answer: 2
    },
    {
      q: '¿Qué radio de referencia se revisa para retirar o proteger combustibles?',
      options: [
        '11 metros (35 pies).',
        '2 metros.',
        'Solo el banco de trabajo, porque las chispas se apagan al tocar el piso del área.'
      ],
      answer: 0
    },
    {
      q: 'Hay una rejilla de piso cerca del área donde se va a esmerilar. ¿Qué se hace?',
      options: [
        'Nada, porque las chispas no pasan por las rejillas metálicas al ser de menor tamaño que los huecos.',
        'Se tapa con material incombustible y se revisa qué hay en el nivel inferior.',
        'Se moja la rejilla para que las chispas se apaguen al pasar hacia el nivel inferior.'
      ],
      answer: 1
    },
    {
      q: '¿Cuál es la alternativa más segura frente a cortar una tubería en sitio con soplete?',
      options: [
        'Hacer el corte durante el turno de la noche, cuando hay menos personal en el área de producción.',
        'Usar dos extintores en lugar de uno.',
        'Usar un método en frío, como un cortatubos, o llevar la pieza al taller.'
      ],
      answer: 2
    },
    {
      q: '¿Qué indica una lectura de 10 % LEL en el detector?',
      options: [
        'Que la mezcla está a una décima parte de su límite inferior de inflamabilidad, es decir, al 10 % del LEL.',
        'Que el aire contiene 10 % de gas combustible y está a punto de explotar de inmediato.',
        'Que el oxígeno del área bajó al 10 % y no se puede respirar sin equipo autónomo.'
      ],
      answer: 0
    },
    {
      q: '¿Qué se hace con el detector de gases antes de usarlo?',
      options: [
        'Se enciende y se usa directamente, porque los detectores modernos se calibran solos en el sitio.',
        'Se verifica que esté calibrado y que pase la prueba de respuesta con un gas conocido.',
        'Se deja cargando toda la noche para que la lectura sea más precisa durante el trabajo del día.'
      ],
      answer: 1
    },
    {
      q: '¿Dónde suelen acumularse los vapores de muchos solventes?',
      options: [
        'Cerca del techo de la planta.',
        'En el centro del área, a la altura de la respiración de los trabajadores que la ocupan.',
        'En las partes bajas, fosos y drenajes, porque son más pesados que el aire.'
      ],
      answer: 2
    },
    {
      q: 'Al preparar un tambor que contuvo solvente para soldarlo, ¿qué paso es indispensable?',
      options: [
        'Pintarlo por dentro con pintura anticorrosiva para sellar los residuos antes de soldar.',
        'Limpiarlo, purgarlo y medir su atmósfera interior hasta el valor exigido.',
        'Llenarlo de arena seca para que absorba los vapores mientras se suelda.'
      ],
      answer: 1
    },
    {
      q: 'Un recipiente se inertizó con nitrógeno para soldarlo. ¿Qué precaución adicional aplica?',
      options: [
        'Nadie entra sin el procedimiento de espacios confinados: no hay oxígeno para respirar.',
        'Se puede entrar sin restricciones, porque el nitrógeno es el gas que más abunda en el aire normal.',
        'Se debe soldar con la tapa cerrada para que el nitrógeno no se escape del recipiente.'
      ],
      answer: 0
    },
    {
      q: '¿Cuál de estas situaciones suspende un permiso de trabajo en caliente vigente?',
      options: [
        'Que el ejecutante cambie de electrodo por otro del mismo tipo y diámetro durante el trabajo.',
        'Que el supervisor de producción pase por el área a verificar el avance de la tarea.',
        'Que suene una alarma de gas o empiece cerca una operación con solventes.'
      ],
      answer: 2
    },
    {
      q: '¿Quién debe firmar un permiso de trabajo en caliente?',
      options: [
        'Solo el ejecutante, porque es quien conoce el trabajo que se va a hacer.',
        'Quien autoriza, el ejecutante y el vigía, tras verificar el sitio.',
        'El comprador del equipo.'
      ],
      answer: 1
    },
    {
      q: '¿Qué tipo de ropa usa el ejecutante de un trabajo en caliente?',
      options: [
        'De algodón o resistente a la llama, de manga larga.',
        'De poliéster.',
        'De manga corta, para que el calor del arco se disipe mejor sobre la piel.'
      ],
      answer: 0
    },
    {
      q: 'Según la edición 2019 de la NFPA 51B, ¿cuánto dura como mínimo la vigilancia de fuego después del trabajo?',
      options: [
        '10 minutos, el tiempo que tarda en enfriarse el electrodo usado por el soldador en el área.',
        '30 minutos, como en todas las ediciones anteriores de la norma.',
        'Al menos 60 minutos, más el monitoreo adicional que exija quien autoriza.'
      ],
      answer: 2
    },
    {
      q: 'Durante la vigilancia posterior, el vigía encuentra humo en una caja de cartón bajo una rejilla. ¿Qué indica?',
      options: [
        'Que la vigilancia no era necesaria, porque el humo es normal después de soldar en el área.',
        'Que un control falló: se controla el conato, se avisa y se investiga como incidente.',
        'Que el cartón estaba húmedo y que el humo desaparecerá solo en pocos minutos sin intervenir.'
      ],
      answer: 1
    }
  ]
};
