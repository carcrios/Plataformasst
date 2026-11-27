/**
 * Curso: Aislamiento Seguro de Energías Peligrosas (Nivel Avanzado). Versión completa.
 * Normativa: Decreto 1072 de 2015, Res. 0312 de 2019, Res. 0491 de 2020 (espacios confinados), RETIE (Res. 40117
 * de 2024). Referencias: OSHA 29 CFR 1910.147, ANSI/ASSP Z244.1, guías de aislamiento de plantas de proceso.
 * Requisito recomendado: haber aprobado el curso de LOTO.
 */
export default {
  id: 'aislamiento-energias-avanzado',
  title: 'Aislamiento Seguro de Energías Peligrosas (Nivel Avanzado)',
  hours: 1.5,
  category: 'prevencion_sst',
  regulation: 'Decreto 1072 de 2015, Res. 0312 de 2019, Res. 0491 de 2020, RETIE (Res. 40117 de 2024); referencias: OSHA 1910.147, ANSI/ASSP Z244.1',
  legalNotice:
    'Formación teórica avanzada para técnicos, supervisores y planeadores de mantenimiento. Se recomienda haber aprobado el curso de LOTO. No reemplaza los procedimientos específicos de aislamiento de su planta ni la autorización para ejecutarlos.',
  summary:
    'Cuándo un candado en una válvula no basta, la jerarquía de métodos de aislamiento, los acumuladores y la presión atrapada, la energía neumática, mecánica y gravitacional, el vapor y los fluidos calientes, el doble bloqueo y purga y las bridas ciegas, la energía eléctrica residual, y cómo planear y verificar un aislamiento complejo.',
  fieldCase:
    'Después de bloquear el motor eléctrico de una prensa hidráulica, un técnico soltó una manguera sin descargar el acumulador. Un chorro fino de aceite a alta presión le atravesó la piel de la mano. Parecía un pinchazo, pero el aceite se había extendido por los tejidos y necesitó cirugía de urgencia.',
  failureAnalysis:
    'Falla raíz: se bloqueó solo la energía principal (eléctrica) y no se identificó ni se liberó la energía almacenada en el acumulador hidráulico. No había un plan de aislamiento que listara todas las fuentes.',
  checklist: [
    'Tengo un plan de aislamiento con todos los puntos identificados con un código único.',
    'El método de aislamiento corresponde al riesgo: válvula sencilla, doble bloqueo y purga o aislamiento positivo.',
    'Descargué acumuladores y verifiqué presión en cero en cada sección.',
    'Calcé o soporté mecánicamente todas las cargas que se sostienen por presión o por gravedad.',
    'Esperé el tiempo de descarga de capacitores y variadores, y se verificó ausencia de tensión.',
    'Las bridas ciegas son de la clase de presión correcta y están registradas.',
    'Una segunda persona verificó el aislamiento antes de empezar.',
    'El desaislamiento se hace en el orden del plan, con prueba de fugas al final.'
  ],
  onSiteClosure:
    'Práctica en su empresa: elaborar con el planeador de mantenimiento el plan de aislamiento de un equipo con varias energías, ejecutar un doble bloqueo y purga verificando el venteo, y hacer la verificación independiente de un aislamiento hecho por otra persona.',

  modules: [
    {
      title: 'Cuándo el aislamiento básico no basta',
      content: `
        <p>En el curso de LOTO se estudió el procedimiento general: preparar, apagar, aislar, bloquear, liberar la energía residual y verificar. En muchas máquinas eso basta: un seccionador, una válvula de aire y un candado. Pero en plantas de proceso, sistemas hidráulicos grandes, líneas de vapor o de químicos, y equipos con varias fuentes de energía, el aislamiento se vuelve <strong>complejo</strong>.</p>
        <p><strong>Señales de que un aislamiento es complejo:</strong></p>
        <ul>
          <li>El equipo tiene <strong>varias fuentes</strong> de energía de distinto tipo.</li>
          <li>Hay <strong>energía almacenada</strong> importante: acumuladores, cargas elevadas, resortes grandes, capacitores.</li>
          <li>Se va a <strong>abrir</strong> una línea o un recipiente con fluidos peligrosos (tóxicos, inflamables, corrosivos, calientes o a alta presión).</li>
          <li>Hay que <strong>entrar</strong> al equipo (espacio confinado).</li>
          <li>El trabajo es <strong>largo</strong>, involucra <strong>varios grupos</strong> o cruza <strong>cambios de turno</strong>.</li>
          <li>Las válvulas pueden <strong>no cerrar herméticamente</strong> por desgaste o suciedad.</li>
        </ul>
        <p><strong>El problema de la válvula sencilla.</strong> Una válvula cerrada con candado impide que alguien la abra, pero no garantiza que no deje pasar fluido. Las válvulas se desgastan, acumulan sedimentos o no asientan bien. Si detrás hay vapor a alta temperatura, un químico tóxico o un gas inflamable, una pequeña fuga puede ser mortal para quien abre la línea o entra al recipiente.</p>
        <p><strong>Por eso existe una jerarquía de métodos de aislamiento</strong> (módulo siguiente), y la elección depende del riesgo: qué fluido es, a qué presión y temperatura está, cuánto tiempo dura el trabajo y si alguien va a entrar.</p>
        <p><strong>Marco normativo.</strong> El <strong>Decreto 1072 de 2015</strong> exige controlar los peligros por jerarquía; la <strong>Resolución 0312 de 2019</strong> pide procedimientos para las tareas de alto riesgo; la <strong>Resolución 0491 de 2020</strong> exige aislar las energías y los fluidos antes de entrar a un espacio confinado; y el <strong>RETIE</strong> rige el aislamiento eléctrico. Las referencias técnicas son OSHA 1910.147 y ANSI/ASSP Z244.1, además de las guías de aislamiento de la industria de procesos.</p>
      `,
      keyPoints: [
        'Un aislamiento es complejo con varias fuentes, energía almacenada, apertura de líneas peligrosas, entrada a equipos o trabajos largos.',
        'Una válvula cerrada con candado puede dejar pasar fluido si está desgastada.',
        'El método de aislamiento se elige según el fluido, la presión, la temperatura, la duración y si alguien entrará.'
      ]
    },
    {
      title: 'La jerarquía de métodos de aislamiento de fluidos',
      content: `
        <p>De menor a mayor seguridad:</p>
        <ol>
          <li><strong>Válvula sencilla cerrada y bloqueada.</strong> Aceptable para fluidos de bajo riesgo (agua fría a baja presión, aire a baja presión) y trabajos cortos, siempre que se verifique que no hay paso.</li>
          <li><strong>Doble bloqueo.</strong> Dos válvulas en serie cerradas y bloqueadas. Si una deja pasar, la otra sirve de respaldo, pero no hay forma de saber si la primera está fugando.</li>
          <li><strong>Doble bloqueo y purga</strong> (en inglés, <em>double block and bleed</em>): dos válvulas cerradas y bloqueadas, con una <strong>válvula de purga o venteo abierta entre ellas</strong>, también bloqueada en posición abierta. Si la primera válvula deja pasar, el fluido sale por la purga hacia un lugar seguro en lugar de llegar a la zona de trabajo, y además se detecta la fuga.</li>
          <li><strong>Aislamiento positivo</strong>: una barrera física que no depende de que una válvula selle:
            <ul>
              <li><strong>Brida ciega o placa ciega</strong> (en inglés, <em>blind</em> o <em>spade</em>) instalada entre dos bridas.</li>
              <li><strong>Desconexión física</strong>: retirar un carrete o un tramo de tubería y tapar los extremos.</li>
            </ul>
          </li>
        </ol>
        <p><strong>Cuándo usar cada uno</strong> (criterio general; su planta debe tener su propia tabla):</p>
        <ul>
          <li><strong>Entrada a espacios confinados</strong> conectados a líneas de fluidos peligrosos: aislamiento positivo (brida ciega o desconexión física).</li>
          <li><strong>Apertura de líneas con fluidos tóxicos, inflamables, corrosivos, vapor o alta presión</strong>: como mínimo doble bloqueo y purga; aislamiento positivo para trabajos largos o de alto riesgo.</li>
          <li><strong>Fluidos de bajo riesgo</strong>: puede bastar una válvula sencilla verificada.</li>
        </ul>
        <p><strong>El aislamiento positivo también requiere un aislamiento previo:</strong> para instalar una brida ciega hay que abrir la línea, así que primero se aísla con válvulas (normalmente doble bloqueo y purga), se drena, se purga y se verifica. La brida ciega se instala después y se convierte en el aislamiento para el trabajo principal.</p>
        <p><strong>Válvulas de control y de retención no son aislamiento.</strong> Una válvula de control automática puede abrirse por una señal del sistema, y una válvula de retención (cheque) puede no sellar. Ninguna de ellas se usa como punto de aislamiento.</p>
      `,
      keyPoints: [
        'Jerarquía: válvula sencilla, doble bloqueo, doble bloqueo y purga, y aislamiento positivo (brida ciega o desconexión física).',
        'Para entrar a un espacio confinado conectado a fluidos peligrosos se usa aislamiento positivo.',
        'Las válvulas de control y de retención nunca son puntos de aislamiento.'
      ]
    },
    {
      title: 'Energía hidráulica: acumuladores y presión atrapada',
      content: `
        <p>Los sistemas hidráulicos trabajan con aceite a presiones muy altas. Apagar la bomba no elimina esa energía.</p>
        <p><strong>Dónde queda energía almacenada:</strong></p>
        <ul>
          <li><strong>Acumuladores</strong>: recipientes con gas (normalmente nitrógeno) comprimido que guardan aceite a presión para dar picos de fuerza o mantener la presión. Pueden conservar la presión durante horas o días.</li>
          <li><strong>Cilindros y líneas</strong> entre válvulas de retención o válvulas pilotadas, que atrapan presión aunque el resto del sistema esté en cero.</li>
          <li><strong>Cargas sostenidas</strong> por la presión de un cilindro: si se libera la presión sin soportar la carga, la carga baja.</li>
        </ul>
        <p><strong>Cómo aislar un sistema hidráulico:</strong></p>
        <ol>
          <li>Bajar o soportar mecánicamente todas las cargas sostenidas por cilindros.</li>
          <li>Apagar y bloquear la bomba (energía eléctrica).</li>
          <li><strong>Descargar el acumulador</strong> por la válvula de descarga prevista hacia el tanque, siguiendo el procedimiento del fabricante.</li>
          <li>Liberar la presión atrapada en cilindros y líneas accionando las válvulas según el procedimiento (en algunos sistemas, con la bomba ya bloqueada, se mueven las palancas para descargar).</li>
          <li><strong>Verificar en los manómetros</strong> que cada sección esté en cero, y que no suba de nuevo después de unos minutos.</li>
        </ol>
        <p><strong>Lesión por inyección de fluido.</strong> Un chorro fino de aceite a alta presión puede atravesar la piel sin que la persona sienta más que un pinchazo, como en el caso del curso. El aceite se extiende por los tejidos y causa daños graves: puede terminar en amputación si no se atiende. <strong>Es una emergencia quirúrgica</strong>: la persona debe ir a urgencias de inmediato, informando que fue una inyección de aceite a presión, aunque la herida parezca mínima.</p>
        <p><strong>Nunca se busca una fuga con la mano.</strong> Se usa un cartón o un trozo de madera que se pasa cerca de la línea, mirando si se mancha, con guantes y gafas.</p>
        <p><strong>Mangueras.</strong> Una manguera hidráulica que revienta o se suelta con presión puede latiguear con violencia. Se inspeccionan y se reemplazan según el plan, y las de alto riesgo llevan restricciones o fundas.</p>
      `,
      keyPoints: [
        'Acumuladores y líneas entre válvulas de retención conservan presión con la bomba apagada.',
        'Aislar: soportar cargas, bloquear la bomba, descargar el acumulador, liberar presión atrapada y verificar en manómetros.',
        'La inyección de aceite a presión parece un pinchazo pero es una emergencia quirúrgica; nunca buscar fugas con la mano.'
      ]
    },
    {
      title: 'Energía neumática, mecánica y gravitacional',
      content: `
        <p><strong>Neumática.</strong> El aire comprimido parece inofensivo, pero mueve cilindros con fuerza suficiente para aplastar una mano, y un acople que se suelta con presión puede latiguear.</p>
        <ul>
          <li>Se aísla con una <strong>válvula de bloqueo con venteo</strong>: al cerrarla y bloquearla, corta el suministro y descarga a la atmósfera el aire del lado de la máquina.</li>
          <li>Se purgan los tanques pulmón y las líneas, y se verifica en el manómetro.</li>
          <li><strong>Cuidado al ventear:</strong> si un cilindro mantiene una posición gracias a la presión, al quitar el aire puede caer o moverse. Antes de ventear, se calza o se baja la parte que sostiene.</li>
          <li>Las válvulas de retención y las electroválvulas pueden dejar aire atrapado en algunos cilindros: se identifica en el plano y se libera.</li>
        </ul>
        <p><strong>Mecánica (cinética).</strong> Volantes, rodillos pesados, ventiladores y centrífugas siguen girando después de cortar la energía. Se espera la detención completa y, cuando el equipo lo permite, se bloquea el giro con un pasador o un freno mecánico. Nunca se frena con la mano, con una herramienta o con un trapo.</p>
        <p><strong>Elástica (resortes).</strong> Resortes comprimidos en válvulas, frenos, embragues, tensores y prensas pueden liberar mucha energía al desarmar. Se liberan de forma controlada con las herramientas del fabricante (compresores de resortes, varillas de desarme) o se dejan retenidos.</p>
        <p><strong>Gravitacional.</strong> Cualquier parte que pueda caer o deslizarse:</p>
        <ul>
          <li>moldes y matrices de prensas, que se apoyan con <strong>bloques de seguridad</strong> diseñados para ese peso;</li>
          <li>compuertas, tolvas, brazos, mesas elevadoras, que se bajan a su posición de reposo o se calzan con soportes, pasadores o barras de seguridad;</li>
          <li><strong>contrapesos</strong>, que se aseguran antes de desconectar el elemento que equilibran;</li>
          <li>material acumulado en tolvas y silos, que puede deslizarse de golpe.</li>
        </ul>
        <p>Los soportes deben estar <strong>diseñados para la carga</strong>. Un bloque de madera cualquiera, un gato hidráulico o el propio cilindro no son soportes de seguridad.</p>
      `,
      keyPoints: [
        'Neumática: válvula de bloqueo con venteo, purga y verificación; calzar antes de ventear lo que se sostiene con aire.',
        'Inercia: esperar la detención y bloquear el giro; resortes: liberar con herramientas del fabricante.',
        'Gravedad: bajar o soportar con soportes diseñados para la carga; un gato o el cilindro no son soportes de seguridad.'
      ]
    },
    {
      title: 'Vapor, fluidos calientes y energía térmica',
      content: `
        <p>El <strong>vapor</strong> es una de las energías más traicioneras en mantenimiento: es invisible a alta presión, quema en segundos y se combina con agua condensada que puede producir golpes violentos en las tuberías.</p>
        <p><strong>Riesgos del vapor y los fluidos calientes:</strong></p>
        <ul>
          <li><strong>Quemaduras graves</strong> por contacto con vapor, condensado o superficies calientes.</li>
          <li><strong>Golpe de ariete</strong>: el condensado acumulado es empujado por el vapor y golpea codos y válvulas con fuerza suficiente para romperlos.</li>
          <li><strong>Vapor atrapado</strong> entre válvulas, que se libera al aflojar una brida.</li>
          <li><strong>Vacío</strong>: al enfriarse, el vapor atrapado se condensa y puede crear vacío que colapsa recipientes o succiona fluidos.</li>
        </ul>
        <p><strong>Cómo aislar una línea de vapor:</strong></p>
        <ol>
          <li>Usar como mínimo <strong>doble bloqueo y purga</strong>: dos válvulas cerradas y bloqueadas, con el drenaje intermedio abierto hacia un lugar seguro. Una sola válvula no es suficiente, por mucho que "siempre haya funcionado".</li>
          <li>Abrir los <strong>drenajes</strong> de la sección aislada para retirar el condensado y despresurizar, con la salida dirigida lejos de las personas.</li>
          <li>Esperar a que la tubería <strong>se enfríe</strong> y verificar la temperatura con un termómetro.</li>
          <li>Verificar que no hay presión en el manómetro y que el drenaje no sigue soltando vapor.</li>
          <li>Abrir las bridas aflojando primero los pernos del lado opuesto al cuerpo, para que una liberación inesperada salga hacia el otro lado.</li>
        </ol>
        <p><strong>Al poner de nuevo en servicio</strong>, se calienta la línea despacio, con los drenajes abiertos, para evitar el golpe de ariete.</p>
        <p><strong>Otros fluidos calientes</strong> (aceite térmico, agua caliente, productos de proceso) se tratan igual: aislamiento según el riesgo, drenaje, enfriamiento y verificación de temperatura.</p>
        <p><strong>Superficies frías.</strong> Las líneas criogénicas o de refrigeración también son energía térmica: pueden causar quemaduras por frío y fragilizar materiales.</p>
      `,
      keyPoints: [
        'El vapor quema en segundos, causa golpe de ariete y puede quedar atrapado entre válvulas.',
        'Aislar vapor con doble bloqueo y purga, drenar, enfriar y verificar presión y temperatura.',
        'Al reponer en servicio, calentar despacio con drenajes abiertos para evitar el golpe de ariete.'
      ]
    },
    {
      title: 'Doble bloqueo y purga, y bridas ciegas en la práctica',
      content: `
        <p><strong>Ejecución del doble bloqueo y purga:</strong></p>
        <ol>
          <li>Identificar en el plano y en campo las dos válvulas de bloqueo y la válvula de purga intermedia, con sus códigos.</li>
          <li>Cerrar la primera válvula (la más cercana a la fuente), luego la segunda.</li>
          <li><strong>Abrir la purga intermedia</strong> hacia un lugar seguro (drenaje cerrado, recipiente, venteo a zona segura) y bloquearla en posición abierta.</li>
          <li>Observar la purga: después de vaciar lo atrapado, <strong>no debe seguir saliendo fluido</strong>. Si sigue saliendo, la primera válvula deja pasar: el aislamiento no es aceptable y hay que corregirlo.</li>
          <li>Drenar y despresurizar la sección de trabajo y verificar presión cero.</li>
          <li>Poner candados y tarjetas en las tres válvulas.</li>
        </ol>
        <p><strong>Bridas ciegas:</strong></p>
        <ul>
          <li>Deben ser de la <strong>clase de presión</strong> y el <strong>material</strong> adecuados para el fluido, la presión y la temperatura de la línea. Una placa delgada improvisada puede romperse.</li>
          <li>Se instalan con empaques nuevos y adecuados, y con todos los pernos apretados al torque correcto.</li>
          <li>Tienen una <strong>oreja o mango</strong> visible fuera de la brida, para que se vea desde afuera que están instaladas, y se identifican con un número.</li>
          <li>Se registran en un <strong>registro de bridas ciegas</strong>: número, ubicación, fecha de instalación, responsable y fecha de retiro. Al terminar el trabajo, se verifica contra el registro que se retiraron todas. Una brida ciega olvidada puede causar un accidente grave al poner en marcha el sistema.</li>
          <li>Se ubican en el lado correcto: entre la fuente de peligro y la zona de trabajo.</li>
        </ul>
        <p><strong>Antes de abrir o entrar</strong> se completan los demás pasos: limpieza y purga del equipo (con agua, vapor o gas inerte según el producto) y medición de la atmósfera si alguien va a entrar (Resolución 0491 de 2020). Recuerde que un equipo purgado con nitrógeno no tiene oxígeno para respirar.</p>
      `,
      keyPoints: [
        'Doble bloqueo y purga: cerrar las dos válvulas, abrir y bloquear la purga intermedia y verificar que deje de salir fluido.',
        'Bridas ciegas de la clase de presión correcta, con oreja visible, numeradas y en un registro.',
        'Verificar contra el registro que todas las bridas ciegas se retiren antes de poner en marcha.'
      ]
    },
    {
      title: 'Energía eléctrica residual y verificación',
      content: `
        <p><strong>La energía eléctrica no siempre desaparece al abrir el seccionador.</strong></p>
        <ul>
          <li><strong>Capacitores</strong> de bancos de corrección del factor de potencia, de fuentes y de <strong>variadores de frecuencia</strong>: conservan tensión durante minutos. El fabricante indica el tiempo de espera, normalmente en una etiqueta en el equipo, y se verifica con un instrumento antes de tocar.</li>
          <li><strong>Doble alimentación</strong>: tableros con alimentación de la red y de una planta de respaldo, o de dos circuitos. Hay que aislar todas las fuentes.</li>
          <li><strong>UPS y baterías</strong>: mantienen equipos energizados aunque se corte la red.</li>
          <li><strong>Generación propia</strong>: paneles solares, generadores, motores que pueden actuar como generadores si se hacen girar.</li>
          <li><strong>Circuitos de control</strong> alimentados desde otro tablero.</li>
          <li><strong>Tensión inducida</strong> en cables largos paralelos a circuitos energizados.</li>
        </ul>
        <p><strong>El aislamiento eléctrico lo hace personal calificado</strong>, aplicando las <strong>cinco reglas de oro</strong> del RETIE: corte efectivo de todas las fuentes, bloqueo y señalización, verificación de ausencia de tensión, puesta a tierra y en cortocircuito (cuando aplica, especialmente en media y alta tensión), y señalización de la zona.</p>
        <p><strong>Verificación de ausencia de tensión:</strong> con un detector o un multímetro adecuado para el nivel de tensión, comprobado <strong>antes y después</strong> en una fuente conocida energizada ("probar, verificar, probar"). Se miden todas las fases entre sí y contra tierra.</p>
        <p><strong>Para el técnico mecánico</strong> que trabaja en un equipo aislado por el electricista: confirmar que el aislamiento eléctrico cubre todas las fuentes, poner su propio candado (o en la caja grupal) y, como prueba funcional, intentar el arranque desde los controles antes de intervenir.</p>
      `,
      keyPoints: [
        'Capacitores y variadores conservan tensión: respetar el tiempo de descarga y verificar con instrumento.',
        'Aislar todas las fuentes: doble alimentación, plantas de respaldo, UPS, baterías y circuitos de control.',
        'El electricista aplica las cinco reglas de oro; la verificación se hace probando el instrumento antes y después.'
      ]
    },
    {
      title: 'Planear, verificar y deshacer un aislamiento complejo',
      content: `
        <p>En un aislamiento complejo, la memoria no basta. Se necesita un <strong>plan escrito</strong>.</p>
        <p><strong>El plan de aislamiento</strong> (también llamado certificado o lista de aislamiento) incluye:</p>
        <ul>
          <li>El equipo y el trabajo que se va a hacer.</li>
          <li><strong>Cada punto de aislamiento</strong> con su código único (coincidiendo con el rótulo en campo y con el plano), el tipo de energía, el método (válvula sencilla, doble bloqueo y purga, brida ciega, seccionador) y la posición requerida (cerrado, abierto, retirado).</li>
          <li>Los pasos para liberar la energía residual y cómo verificarla.</li>
          <li>Quién ejecutó cada punto y quién lo verificó.</li>
          <li>El orden para deshacer el aislamiento.</li>
        </ul>
        <p><strong>Preparación del plan.</strong> Lo prepara alguien que conoce el sistema (planeador, ingeniero de procesos, supervisor), usando planos actualizados y recorriendo el equipo en campo. Los planos desactualizados son una causa frecuente de aislamientos incompletos.</p>
        <p><strong>Verificación independiente.</strong> Una segunda persona competente, distinta de quien ejecutó el aislamiento, recorre todos los puntos y confirma posición, candados, tarjetas y lecturas de presión y temperatura. Es la mejor defensa contra el error humano.</p>
        <p><strong>Bloqueo grupal.</strong> Con muchos puntos y muchas personas, se usa la caja de bloqueo grupal: los candados del aislamiento van en los puntos, sus llaves en la caja, y cada trabajador pone su candado personal en la caja.</p>
        <p><strong>Durante el trabajo:</strong> el plan se mantiene en el sitio; cualquier cambio (un punto adicional, un tramo que hay que abrir) se evalúa y se registra; en los cambios de turno se hace un relevo formal.</p>
        <p><strong>Deshacer el aislamiento:</strong></p>
        <ol>
          <li>Verificar que el trabajo terminó, que las personas salieron y que el equipo está cerrado y armado.</li>
          <li>Retirar las bridas ciegas y comprobar contra el registro que no quede ninguna.</li>
          <li>Retirar los aislamientos en el orden del plan.</li>
          <li>Presurizar despacio y hacer <strong>prueba de fugas</strong> en todas las uniones que se abrieron.</li>
          <li>Entregar formalmente a operación y cerrar el plan.</li>
        </ol>
      `,
      keyPoints: [
        'Plan escrito con cada punto codificado, método, posición, liberación de energía y verificación.',
        'Verificación independiente por una segunda persona competente antes de empezar.',
        'Desaislamiento en el orden del plan, retirando todas las bridas ciegas y con prueba de fugas.'
      ]
    }
  ],

  practices: [
    { q: '¿Por qué una sola válvula cerrada con candado puede no ser suficiente para abrir una línea de vapor?', options: ['Porque la válvula puede dejar pasar fluido por desgaste', 'Porque el candado se derrite con el calor', 'Porque las válvulas de vapor no se pueden bloquear'], answer: 0 },
    { q: '¿Qué método de aislamiento es una barrera física que no depende de que una válvula selle?', options: ['La válvula de retención', 'El aislamiento positivo, como una brida ciega', 'La válvula de control automática'], answer: 1 },
    { q: '¿Qué hacer de inmediato ante una posible inyección de aceite hidráulico en la mano?', options: ['Lavar con jabón y seguir trabajando', 'Poner una curita y vigilar', 'Ir a urgencias de inmediato informando que fue inyección de aceite a presión'], answer: 2 },
    { q: 'Un cilindro neumático sostiene una compuerta levantada. ¿Qué se hace antes de ventear el aire?', options: ['Calzar o bajar la compuerta', 'Nada, el cilindro la sostiene sin aire', 'Ventear rápido para terminar antes'], answer: 0 },
    { q: 'Al poner de nuevo en servicio una línea de vapor, ¿por qué se calienta despacio con drenajes abiertos?', options: ['Para ahorrar vapor', 'Para evitar el golpe de ariete', 'Para que el manómetro marque mejor'], answer: 1 },
    { q: 'En un doble bloqueo y purga, ¿qué indica que siga saliendo fluido por la purga después de vaciarse?', options: ['Que el aislamiento funciona bien', 'Que la segunda válvula está abierta', 'Que la primera válvula deja pasar y el aislamiento no es aceptable'], answer: 2 },
    { q: '¿Qué indica la etiqueta de un variador de frecuencia sobre el tiempo de descarga?', options: ['Cuánto esperar para que los capacitores se descarguen antes de tocar', 'Cuánto tarda en arrancar el motor', 'Cada cuánto se cambia el variador'], answer: 0 },
    { q: '¿Quién hace la verificación independiente de un aislamiento complejo?', options: ['La misma persona que lo ejecutó', 'Una segunda persona competente distinta de quien lo ejecutó', 'El operador de producción'], answer: 1 }
  ],

  scenarios: [
    {
      scenario:
        'Bloqueaste el motor eléctrico de una prensa hidráulica. Vas a soltar una manguera, pero el manómetro del acumulador marca 1.800 psi.',
      options: [
        { text: 'Suelto la manguera despacio para que la presión salga poco a poco.', correct: false, feedback: 'Decisión insegura. Un chorro fino a esa presión puede inyectar aceite en la piel, como en el caso del curso.' },
        { text: 'Descargo el acumulador por la válvula prevista según el procedimiento, libero la presión atrapada y verifico cero en los manómetros antes de soltar nada.', correct: true, feedback: 'Decisión correcta. La energía almacenada se libera y se verifica antes de abrir.' },
        { text: 'Me pongo guantes gruesos y suelto la manguera.', correct: false, feedback: 'Decisión insegura. Los guantes no detienen un chorro de aceite a alta presión.' }
      ]
    },
    {
      scenario:
        'Vas a trabajar bajo una compuerta elevada que se sostiene con un cilindro hidráulico. El supervisor dice que "el cilindro aguanta, no hay que poner nada más".',
      options: [
        { text: 'Trabajo rápido debajo, confiando en el cilindro.', correct: false, feedback: 'Decisión insegura. Un sello que falla o una válvula que se acciona puede dejar caer la compuerta.' },
        { text: 'Pongo un gato hidráulico como apoyo extra.', correct: false, feedback: 'Decisión insegura. Un gato no es un soporte de seguridad diseñado para la carga.' },
        { text: 'Bajo la compuerta o instalo los soportes o pasadores de seguridad diseñados para su peso, y luego aíslo el sistema hidráulico.', correct: true, feedback: 'Decisión correcta. La energía gravitacional se controla con soportes diseñados para la carga.' }
      ]
    },
    {
      scenario:
        'Una tubería de vapor debe abrirse para cambiar una válvula. Hay una sola válvula de cierre aguas arriba y el operador dice que "con eso basta, siempre se ha hecho así".',
      options: [
        { text: 'Pido aplicar doble bloqueo y purga, drenar, esperar a que enfríe y verificar presión y temperatura antes de abrir.', correct: true, feedback: 'Decisión correcta. El vapor exige como mínimo doble bloqueo y purga.' },
        { text: 'Cierro la válvula con candado y abro con cuidado.', correct: false, feedback: 'Decisión insegura. Si la válvula deja pasar, el vapor saldrá al abrir la brida.' },
        { text: 'Abro la brida rápidamente para que el vapor atrapado salga de una vez.', correct: false, feedback: 'Decisión insegura. El vapor atrapado puede causar quemaduras graves.' }
      ]
    },
    {
      scenario:
        'Aplicaste doble bloqueo y purga en una línea de solvente. Después de vaciar lo atrapado, por la purga sigue saliendo un hilo constante de líquido.',
      options: [
        { text: 'Sigo, porque es poco líquido y la purga lo está sacando.', correct: false, feedback: 'Decisión insegura. El flujo continuo indica que la primera válvula deja pasar: el aislamiento no es aceptable.' },
        { text: 'Cierro la purga para que no se desperdicie solvente.', correct: false, feedback: 'Decisión insegura. Cerrar la purga oculta la fuga y deja que el solvente llegue a la zona de trabajo.' },
        { text: 'Detengo el trabajo, informo y busco otro punto de aislamiento o un aislamiento positivo antes de abrir.', correct: true, feedback: 'Decisión correcta. Si la purga sigue fluyendo, hay que corregir el aislamiento.' }
      ]
    },
    {
      scenario:
        'El electricista abrió el seccionador de un variador de frecuencia hace un minuto. Tu compañero quiere desconectar los cables del motor de inmediato porque "ya está apagado".',
      options: [
        { text: 'Lo dejo, porque el seccionador está abierto.', correct: false, feedback: 'Decisión insegura. Los capacitores del variador conservan tensión durante minutos.' },
        { text: 'Esperamos el tiempo de descarga indicado en el variador y que el electricista verifique ausencia de tensión antes de tocar.', correct: true, feedback: 'Decisión correcta. Se respeta el tiempo de descarga y se verifica con instrumento.' },
        { text: 'Tocamos los bornes con el dorso de la mano para ver si hay tensión.', correct: false, feedback: 'Decisión insegura. Nunca se verifica la tensión con el cuerpo.' }
      ]
    }
  ],

  exam: [
    {
      q: '¿Cuál de estas situaciones indica que un aislamiento es complejo?',
      options: [
        'Abrir una línea con un químico tóxico a alta presión.',
        'Desconectar la clavija de un ventilador de escritorio.',
        'Apagar una luz.'
      ],
      answer: 0
    },
    {
      q: '¿Por qué las válvulas de control automáticas no se usan como puntos de aislamiento?',
      options: [
        'Porque son más costosas de reemplazar que las válvulas manuales de la línea de proceso.',
        'Porque pueden abrirse por una señal del sistema.',
        'Porque no admiten etiquetas de bloqueo.'
      ],
      answer: 1
    },
    {
      q: '¿Qué es el doble bloqueo y purga?',
      options: [
        'Cerrar una válvula dos veces para asegurarse de que quedó cerrada.',
        'Dos válvulas cerradas sin ninguna salida entre ellas.',
        'Dos válvulas cerradas y bloqueadas con una purga abierta entre ellas hacia un lugar seguro.'
      ],
      answer: 2
    },
    {
      q: '¿Qué método de aislamiento se usa para entrar a un espacio confinado conectado a líneas de fluidos peligrosos?',
      options: [
        'Aislamiento positivo: brida ciega o desconexión física.',
        'Una válvula sencilla con candado.',
        'Una válvula de retención en la línea de entrada al equipo.'
      ],
      answer: 0
    },
    {
      q: '¿Qué energía conserva un acumulador hidráulico con la bomba apagada?',
      options: [
        'Ninguna: al apagar la bomba la presión desaparece.',
        'Aceite a presión, por horas o días.',
        'Solo calor, porque el aceite se enfría.'
      ],
      answer: 1
    },
    {
      q: '¿Cómo se busca una fuga en una línea hidráulica?',
      options: [
        'Pasando la mano sin guante cerca de la línea para sentir el chorro.',
        'Aumentando la presión del sistema para que la fuga se vea mejor.',
        'Con un cartón o un trozo de madera cerca de la línea, con guantes y gafas.'
      ],
      answer: 2
    },
    {
      q: '¿Qué hace una válvula de bloqueo con venteo en un sistema neumático?',
      options: [
        'Corta el suministro y descarga el aire del lado de la máquina.',
        'Aumenta la presión del aire en la línea de la máquina.',
        'Regula la velocidad de los cilindros durante la operación normal.'
      ],
      answer: 0
    },
    {
      q: '¿Cuál de estos elementos es un soporte de seguridad válido para un molde de prensa?',
      options: [
        'Un gato hidráulico.',
        'Un bloque de seguridad diseñado para el peso del molde.',
        'El propio cilindro de la prensa con la presión atrapada.'
      ],
      answer: 1
    },
    {
      q: '¿Qué es el golpe de ariete en una línea de vapor?',
      options: [
        'Un sonido normal del vapor que indica que la línea funciona bien.',
        'El choque de dos tuberías mal soportadas.',
        'El golpe del condensado empujado por el vapor.'
      ],
      answer: 2
    },
    {
      q: 'Al abrir una brida de una línea que estuvo con vapor, ¿qué pernos se aflojan primero?',
      options: [
        'Los del lado opuesto al cuerpo, para que una liberación salga hacia el otro lado.',
        'Los del lado más cercano al cuerpo, para ver mejor lo que sale de la brida.',
        'Todos al mismo tiempo.'
      ],
      answer: 0
    },
    {
      q: '¿Por qué una brida ciega debe tener una oreja visible fuera de la brida?',
      options: [
        'Para que sea más fácil de transportar en el almacén.',
        'Para que se vea desde afuera que está instalada.',
        'Para colgarla en la pared cuando no se usa.'
      ],
      answer: 1
    },
    {
      q: '¿Para qué sirve el registro de bridas ciegas?',
      options: [
        'Para llevar el inventario contable de las bridas compradas por el almacén de la empresa.',
        'Para saber cuánto pesa cada brida.',
        'Para verificar que todas se retiren antes de la puesta en marcha.'
      ],
      answer: 2
    },
    {
      q: '¿Por qué no se toca un variador de frecuencia inmediatamente después de abrir su seccionador?',
      options: [
        'Porque sus capacitores conservan tensión durante minutos.',
        'Porque el variador está caliente y puede causar quemaduras.',
        'Porque se pierde la programación.'
      ],
      answer: 0
    },
    {
      q: '¿Cómo se verifica la ausencia de tensión?',
      options: [
        'Mirando que el piloto del tablero esté apagado.',
        'Con un instrumento comprobado antes y después.',
        'Preguntando al operador si apagó el equipo.'
      ],
      answer: 1
    },
    {
      q: '¿Qué incluye un plan de aislamiento?',
      options: [
        'Solo el nombre del equipo y la fecha.',
        'La lista de repuestos que hay que comprar y su precio estimado para el trabajo.',
        'Cada punto con su código, tipo de energía, método, posición, verificación y orden para deshacerlo.'
      ],
      answer: 2
    },
    {
      q: 'Al deshacer un aislamiento con líneas que se abrieron, ¿qué se hace al presurizar?',
      options: [
        'Presurizar despacio y hacer prueba de fugas en todas las uniones abiertas.',
        'Presurizar de golpe a la presión máxima para comprobar que las uniones resisten bien.',
        'Entregar el equipo a operación sin pruebas, porque ya se revisó al armar.'
      ],
      answer: 0
    }
  ]
};
