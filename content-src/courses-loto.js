/**
 * Curso insignia: Etiquetado y Bloqueo de Energías Peligrosas (LOTO). Versión completa.
 *
 * 8 módulos con puntos clave propios, 5 escenarios de decisión y 16 preguntas de evaluación.
 * La intensidad horaria (`hours`) NO se escribe a mano: debe coincidir con la que mide
 * tools/intensity.mjs a partir del contenido real (lectura, prácticas, escenarios y examen).
 *
 * Normativa: solo se afirma lo que cada norma establece de forma general; no se citan
 * números de artículo que no hayan sido verificados. Revisión técnica pendiente por un profesional SST.
 */

export const LOTO_AMPLIADO = {
  id: 'loto-bloqueo',
  title: 'Etiquetado y Bloqueo de Energías Peligrosas (LOTO)',
  hours: 1.5,
  category: 'prevencion_sst',
  regulation: 'Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979, RETIE (Res. 40117 de 2024); referencias: OSHA 29 CFR 1910.147, ANSI/ASSP Z244.1, ISO 14118',
  legalNotice:
    'Formación teórica en control de energías peligrosas. No reemplaza el entrenamiento práctico en sitio con el procedimiento específico de cada máquina, ni la autorización del empleador. Las mediciones eléctricas solo las hace personal calificado.',
  summary:
    'Por qué el botón de paro no protege, cómo identificar y liberar cada energía, los dispositivos de bloqueo, el procedimiento de 6 pasos, la verificación de energía cero, el bloqueo grupal y cómo se arma el programa LOTO de una planta.',
  fieldCase:
    'Un técnico detuvo una banda transportadora con el botón de paro de emergencia y no puso candado en el seccionador. Mientras él revisaba un rodillo, otro operario, que no sabía que había una intervención, reinició la banda desde el tablero y le atrapó la mano.',
  checklist: [
    'Tengo el procedimiento específico de esta máquina y sé dónde está cada punto de aislamiento.',
    'Avisé al operador y a las personas afectadas que la máquina quedará fuera de servicio.',
    'Apagué la máquina con su control normal antes de aislar.',
    'Aislé todas las fuentes: eléctrica, neumática, hidráulica, gravitacional, mecánica, térmica y química.',
    'Puse mi candado personal y mi tarjeta en cada punto de aislamiento (o en la caja de bloqueo grupal).',
    'Liberé o contuve la energía residual: presión, carga de capacitores, cargas suspendidas, resortes, inercia y temperatura.',
    'Verifiqué energía cero: intenté el arranque, regresé el control a apagado y medí con instrumento.',
    'Antes de retirar el bloqueo: área despejada, herramientas recogidas, guardas instaladas y personal avisado.'
  ],
  failureAnalysis:
    'Falla raíz: se usó el botón de paro (un control de mando) como si fuera un aislamiento de energía, y no existía comunicación entre quien intervenía y quien operaba el tablero.',
  onSiteClosure:
    'Práctica en campo: con el procedimiento específico de un equipo real de su planta, aplicar un bloqueo grupal con caja de candados, liberar la energía residual, comprobar energía cero y registrar la intervención en el formato de la empresa, bajo supervisión.',

  modules: [
    {
      title: 'Por qué existe LOTO: apagado no es lo mismo que aislado',
      content: `
        <p>Una gran parte de los accidentes graves en mantenimiento ocurre con la máquina <strong>detenida</strong>, no en marcha. El trabajador se acerca porque la ve quieta, mete las manos en una zona de atrapamiento y, en ese momento, la máquina arranca o libera energía que tenía guardada.</p>
        <p>LOTO (del inglés <em>Lockout/Tagout</em>, bloqueo y etiquetado) es el conjunto de pasos que garantiza que una máquina o un sistema <strong>no se pueda energizar ni mover</strong> mientras alguien trabaja en él. El <strong>bloqueo</strong> es el candado y el dispositivo que impiden físicamente accionar la fuente de energía. El <strong>etiquetado</strong> es la tarjeta que informa quién bloqueó, cuándo y por qué.</p>
        <p><strong>Los dos peligros que controla LOTO:</strong></p>
        <ul>
          <li><strong>Arranque inesperado:</strong> otra persona pulsa el arranque, un temporizador o un sensor activa el ciclo, un variador reinicia solo al volver la energía, o un equipo vecino alimenta la línea.</li>
          <li><strong>Liberación de energía almacenada:</strong> aire comprimido en un tanque, aceite a presión en un acumulador, una carga levantada, un resorte tensionado, un volante que sigue girando o un capacitor que conserva carga.</li>
        </ul>
        <p><strong>Control de mando frente a aislamiento.</strong> El botón de paro, el pulsador de parada de emergencia, el selector de modo o la pantalla del PLC son <em>controles de mando</em>: le dan una orden al circuito de control. No cortan la energía de potencia. Pueden fallar por un contacto pegado, por un error de programación o simplemente porque alguien los vuelve a accionar. El <em>aislamiento</em> es otra cosa: abrir el seccionador, cerrar y bloquear la válvula, desconectar el enchufe, colocar un soporte mecánico. Solo el aislamiento físico, bloqueado con candado, impide que la energía llegue.</p>
        <p><strong>¿Cuándo se aplica LOTO?</strong> Siempre que una persona deba retirar o pasar por encima de una guarda, o poner una parte de su cuerpo en una zona donde la máquina pueda atraparla, golpearla, cortarla o quemarla. Esto incluye mantenimiento y reparación, limpieza y desatasco, lubricación con guardas retiradas, ajustes, cambios de formato o de herramienta, e inspecciones internas.</p>
        <p><strong>¿Cuándo no?</strong> En la operación normal de producción, cuando el trabajador usa la máquina con todos sus resguardos y no expone su cuerpo a la zona de peligro. Si para "un ajuste rápido" hay que meter la mano dentro de la guarda, ya no es operación normal: es una intervención y requiere LOTO.</p>
        <p><strong>La trampa del "es solo un momento".</strong> El desatasco rápido es la situación clásica del accidente: la persona cree que no vale la pena bloquear porque son treinta segundos. La máquina no sabe cuánto va a durar la intervención. Un arranque tarda menos de un segundo.</p>
      `,
      keyPoints: [
        'El botón de paro controla; no aísla. Solo el aislamiento físico con candado protege.',
        'LOTO controla dos peligros: el arranque inesperado y la liberación de energía almacenada.',
        'Si hay que retirar una guarda o poner el cuerpo en la zona de peligro, se aplica LOTO, sin importar cuánto dure la tarea.'
      ]
    },
    {
      title: 'Marco normativo en Colombia y referencias internacionales',
      content: `
        <p>En Colombia no existe una resolución dedicada solo a LOTO, pero la obligación de controlar las energías peligrosas se desprende de varias normas que toda empresa debe cumplir.</p>
        <p><strong>Decreto 1072 de 2015</strong> (Decreto Único Reglamentario del Sector Trabajo). Su capítulo del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) obliga al empleador a identificar los peligros, evaluar y valorar los riesgos, y definir controles siguiendo una jerarquía: eliminación, sustitución, controles de ingeniería, controles administrativos y, por último, elementos de protección personal. LOTO combina un control de ingeniería (los dispositivos que aíslan la energía) con un control administrativo (el procedimiento, la capacitación y la verificación). El decreto también establece deberes de los trabajadores, como cumplir las normas y procedimientos de seguridad y reportar las condiciones de peligro.</p>
        <p><strong>Resolución 0312 de 2019</strong> (estándares mínimos del SG-SST). Entre los estándares que se evalúan están la identificación de peligros, los procedimientos de trabajo seguro, la capacitación, las inspecciones y el mantenimiento periódico de instalaciones, equipos, máquinas y herramientas. Un programa LOTO documentado aporta evidencia directa a estos estándares.</p>
        <p><strong>Resolución 2400 de 1979</strong> (Estatuto de Seguridad Industrial). Contiene disposiciones generales sobre la protección de máquinas, transmisiones y equipos, que siguen siendo referencia en las inspecciones.</p>
        <p><strong>RETIE</strong> (Reglamento Técnico de Instalaciones Eléctricas, Resolución 40117 de 2024 del Ministerio de Minas y Energía). Para trabajos eléctricos sin tensión exige aplicar las conocidas <em>cinco reglas de oro</em>: corte efectivo de todas las fuentes; bloqueo y señalización de los equipos de corte; verificación de ausencia de tensión; puesta a tierra y en cortocircuito; y señalización y delimitación de la zona de trabajo. Estas tareas las realiza personal calificado y autorizado.</p>
        <p><strong>Referencias internacionales</strong> que usan muchas multinacionales y sus contratistas en Colombia:</p>
        <ul>
          <li><strong>OSHA 29 CFR 1910.147</strong> (Estados Unidos), <em>Control of Hazardous Energy</em>: es la referencia más usada para el programa LOTO, los procedimientos específicos por equipo, la capacitación por roles y la inspección periódica.</li>
          <li><strong>ANSI/ASSP Z244.1</strong>: norma de consenso sobre control de energías peligrosas.</li>
          <li><strong>ISO 14118</strong>: seguridad de las máquinas, prevención de la puesta en marcha inesperada.</li>
        </ul>
        <p>Estas referencias no son leyes colombianas, pero son el estándar técnico con el que suelen auditar los clientes, y muchas empresas las adoptan en su propio procedimiento.</p>
        <p><strong>Responsabilidades.</strong> El <em>empleador</em> define el programa, entrega los dispositivos, capacita y verifica. El <em>supervisor</em> se asegura de que nadie intervenga sin bloqueo. El <em>trabajador autorizado</em> aplica el procedimiento y nunca interviene sin su propio candado. El <em>contratista</em> se acoge al programa del anfitrión o acuerda uno compatible antes de empezar.</p>
      `,
      keyPoints: [
        'El Decreto 1072 de 2015 obliga a identificar peligros y aplicar controles por jerarquía; LOTO es control de ingeniería más administrativo.',
        'En trabajos eléctricos, el RETIE exige las cinco reglas de oro, realizadas por personal calificado.',
        'OSHA 1910.147, ANSI/ASSP Z244.1 e ISO 14118 son referencias técnicas que muchos clientes exigen en sus auditorías.'
      ]
    },
    {
      title: 'Las energías peligrosas y la energía residual',
      content: `
        <p>Antes de bloquear hay que saber <strong>qué</strong> se bloquea. Una máquina rara vez tiene una sola fuente de energía. El error típico es aislar el motor eléctrico y olvidar el aire, el aceite o la gravedad.</p>
        <ul>
          <li><strong>Eléctrica.</strong> Se aísla en el seccionador o interruptor del circuito de potencia, no en el pulsador. Ojo con los variadores de frecuencia y los bancos de capacitores: pueden conservar tensión varios minutos después de abrir el circuito. El fabricante indica el tiempo de descarga.</li>
          <li><strong>Neumática.</strong> Se cierra y bloquea la válvula de suministro, idealmente una válvula de bloqueo con venteo, y se purga el aire que queda en tanques, mangueras y cilindros.</li>
          <li><strong>Hidráulica.</strong> Apagar la bomba no basta. Los acumuladores y las líneas conservan aceite a alta presión. Se descargan por la válvula prevista y se confirma la presión en cero en el manómetro. Un chorro fino de aceite a alta presión puede atravesar la piel y causar una lesión por inyección muy grave.</li>
          <li><strong>Gravitacional.</strong> Una prensa, una compuerta, un elevador o una carga sostenida por un cilindro pueden caer. Se bajan a su posición de reposo o se sostienen con soportes mecánicos, calzos o pasadores diseñados para ese peso. Nunca se confía solo en el cilindro.</li>
          <li><strong>Mecánica.</strong> Volantes, rodillos y ejes siguen girando por inercia: hay que esperar la detención total. Los resortes comprimidos o tensionados se liberan de forma controlada o se bloquean.</li>
          <li><strong>Térmica.</strong> Vapor, agua caliente, aceite térmico, superficies calientes o criogénicas. Se aíslan las líneas, se drena y se espera a que la temperatura sea segura, verificándola.</li>
          <li><strong>Química.</strong> Líneas y recipientes con productos peligrosos. Se aíslan, se drenan y se purgan. En servicios críticos se usan técnicas como el doble bloqueo y purga o la brida ciega (ver el curso avanzado de aislamiento).</li>
        </ul>
        <p><strong>Energía residual o almacenada</strong> es la que queda en el sistema después de aislar la fuente. Es la causa de muchos accidentes porque la máquina ya "está bloqueada" y la persona baja la guardia. Por eso el procedimiento tiene un paso exclusivo para liberarla o contenerla, y otro para verificar que realmente quedó en cero.</p>
        <p><strong>Energía que llega de otros equipos.</strong> Una banda puede ser arrastrada por la banda siguiente; una tubería puede recibir presión de una bomba aguas arriba; un tablero puede tener doble alimentación o una planta de respaldo. El procedimiento específico de cada máquina debe mostrar todas estas fuentes.</p>
        <p><strong>Punto de aislamiento</strong> es el dispositivo que realmente impide el paso de la energía (seccionador, válvula, brida ciega). <strong>Punto de control</strong> es el que solo da órdenes (botón, pantalla, selector). El candado siempre va en el punto de aislamiento.</p>
      `,
      keyPoints: [
        'Identifique todas las fuentes: eléctrica, neumática, hidráulica, gravitacional, mecánica, térmica y química.',
        'La energía residual queda después de aislar: presión, carga de capacitores, cargas suspendidas, resortes e inercia.',
        'El candado va en el punto de aislamiento, nunca en un botón o un selector.'
      ]
    },
    {
      title: 'Dispositivos de bloqueo y etiquetado',
      content: `
        <p>Un programa LOTO solo funciona si en cada punto de aislamiento hay un dispositivo adecuado y cada persona tiene el suyo.</p>
        <ul>
          <li><strong>Candado personal de seguridad.</strong> Cada trabajador autorizado tiene su candado, identificado con su nombre o foto, y <strong>una sola llave</strong> que lleva consigo. Es la regla de oro: <em>una persona, un candado, una llave</em>. No se presta, no se comparte y no se usa para guardar herramientas ni casilleros.</li>
          <li><strong>Pinza portacandados (hasp).</strong> Permite que varias personas pongan su candado sobre el mismo punto. El equipo solo se puede energizar cuando se retira el último candado.</li>
          <li><strong>Bloqueadores de interruptores y breakers.</strong> Se ajustan a la palanca para impedir que se suba.</li>
          <li><strong>Bloqueadores de válvulas.</strong> De compuerta, de bola o de mariposa, según el tipo de válvula. Impiden girarla.</li>
          <li><strong>Bloqueadores de enchufe.</strong> Encierran la clavija de un equipo con cable para que nadie lo conecte.</li>
          <li><strong>Cables de bloqueo ajustables.</strong> Para varios puntos cercanos o formas irregulares.</li>
          <li><strong>Caja de bloqueo grupal.</strong> Se explica en el módulo de situaciones especiales.</li>
        </ul>
        <p><strong>Cuatro criterios para aceptar un dispositivo:</strong></p>
        <ol>
          <li><strong>Duradero:</strong> resiste el ambiente (humedad, químicos, calor) sin deteriorarse.</li>
          <li><strong>Estandarizado:</strong> mismo color, forma o tamaño en toda la planta, para que se reconozca de inmediato.</li>
          <li><strong>Sustancial:</strong> no se puede retirar sin usar fuerza excesiva o herramientas especiales.</li>
          <li><strong>Identificable:</strong> muestra quién lo puso.</li>
        </ol>
        <p><strong>La tarjeta de peligro</strong> debe decir, como mínimo: nombre de quien bloqueó, fecha, motivo y una advertencia clara del tipo "No operar". La tarjeta <em>advierte</em>, pero no impide físicamente la operación. Por eso no reemplaza al candado. Si un punto de aislamiento no admite candado, la solución correcta es instalar un dispositivo que sí lo admita, y mientras tanto aplicar medidas adicionales aprobadas en el procedimiento.</p>
        <p><strong>Se descarta un dispositivo</strong> cuando está dañado, cuando la llave no es única, cuando se puede abrir sin su llave o cuando no queda firmemente instalado.</p>
        <p><strong>Ejemplo.</strong> Tres mecánicos cambian rodamientos en un mismo transportador. Cada uno pone su candado en la pinza del seccionador. Al terminar, el primero retira el suyo, pero el equipo sigue bloqueado porque quedan dos candados. Solo cuando el último retira el suyo se puede pensar en energizar.</p>
      `,
      keyPoints: [
        'Una persona, un candado, una llave: el candado personal no se presta ni se comparte.',
        'Un dispositivo debe ser duradero, estandarizado, sustancial e identificable.',
        'La tarjeta advierte, pero no impide: no reemplaza al candado.'
      ]
    },
    {
      title: 'El procedimiento LOTO en 6 pasos',
      content: `
        <p>El orden importa. Cada paso prepara el siguiente, y saltarse uno es la causa más común de los accidentes en mantenimiento.</p>
        <ol>
          <li><strong>Preparar.</strong> Leer el procedimiento específico de la máquina, identificar todas las fuentes de energía y sus puntos de aislamiento, reunir los dispositivos y avisar a las personas afectadas: el operador, el supervisor de turno y quien trabaje en equipos conectados.</li>
          <li><strong>Apagar.</strong> Detener la máquina con su control normal y en la secuencia que indica el fabricante. Apagar primero evita abrir un seccionador con carga, que puede generar un arco eléctrico.</li>
          <li><strong>Aislar.</strong> Abrir el seccionador, cerrar las válvulas, desconectar el enchufe y colocar los soportes mecánicos en <em>cada</em> punto identificado.</li>
          <li><strong>Bloquear y etiquetar.</strong> Cada trabajador que va a intervenir pone su candado personal y su tarjeta en cada punto de aislamiento, o en la caja de bloqueo grupal.</li>
          <li><strong>Liberar o contener la energía residual.</strong> Purgar el aire, descargar los acumuladores, esperar la descarga de los capacitores, bajar o calzar las cargas, liberar los resortes, esperar a que se detengan las partes que giran y a que baje la temperatura.</li>
          <li><strong>Verificar energía cero.</strong> Comprobar, con la máquina bloqueada y sin personas en la zona de peligro, que no arranca y que no queda energía. Se explica en detalle en el siguiente módulo.</li>
        </ol>
        <p><strong>El procedimiento específico de cada máquina.</strong> El procedimiento general de la empresa no basta. Cada equipo debe tener su ficha: una hoja con fotos que muestre cada punto de aislamiento, qué dispositivo usar, cómo liberar la energía residual y cómo verificar. Con esa ficha, cualquier trabajador autorizado bloquea la máquina igual, sin depender de la memoria.</p>
        <p><strong>Errores frecuentes:</strong></p>
        <ul>
          <li>Bloquear el tablero equivocado porque los rótulos no coinciden con la máquina.</li>
          <li>Aislar solo la energía eléctrica y olvidar el aire o la gravedad.</li>
          <li>Poner el candado y no verificar energía cero.</li>
          <li>Bloquear "por el compañero" con un solo candado para todo el grupo.</li>
          <li>Dejar la llave puesta en el candado o en el tablero.</li>
        </ul>
      `,
      keyPoints: [
        'Los 6 pasos: preparar, apagar, aislar, bloquear y etiquetar, liberar la energía residual y verificar energía cero.',
        'Se apaga con el control normal antes de aislar, para no abrir un seccionador con carga.',
        'Cada máquina necesita su procedimiento específico con fotos de sus puntos de aislamiento.'
      ]
    },
    {
      title: 'Verificación de energía cero y retiro del bloqueo',
      content: `
        <p>La verificación es el paso que confirma que todo lo anterior funcionó. Un candado puesto en el seccionador equivocado se ve igual que uno puesto en el correcto. Solo la verificación lo revela.</p>
        <p><strong>Cómo se verifica:</strong></p>
        <ol>
          <li>Confirmar que todas las personas están fuera de la zona de peligro.</li>
          <li><strong>Intentar arrancar</strong> la máquina desde todos sus controles: local, remoto y pantalla. No debe moverse.</li>
          <li><strong>Regresar los controles a apagado</strong>. Si no se hace y luego se retira el bloqueo, la máquina puede arrancar sola al recibir energía.</li>
          <li><strong>Medir</strong> con instrumento: manómetros en cero en las líneas neumáticas e hidráulicas, temperatura segura, cargas apoyadas, partes detenidas. En la parte eléctrica, la ausencia de tensión la verifica <em>personal calificado</em> con un detector o un multímetro adecuado para el nivel de tensión. El instrumento se comprueba antes y después en una fuente que se sabe energizada, para estar seguros de que funciona.</li>
        </ol>
        <p><strong>Si algo no cuadra</strong> (la máquina responde, un manómetro marca presión o el detector indica tensión), se detiene todo, se informa al supervisor y se revisa el aislamiento. Nunca se interviene "con cuidado".</p>
        <p><strong>Volver a verificar.</strong> Si el trabajo se interrumpe, si se sale del área por un tiempo o si cambia el personal, se verifica de nuevo antes de continuar.</p>
        <p><strong>Retiro del bloqueo y restitución de la energía:</strong></p>
        <ol>
          <li>Inspeccionar el área: herramientas y materiales recogidos, piezas ajustadas y guardas instaladas.</li>
          <li>Confirmar que todas las personas están fuera de la zona de peligro y avisarles que la máquina se va a energizar.</li>
          <li>Cada trabajador retira <strong>su propio</strong> candado y su tarjeta. Nadie retira el candado de otro.</li>
          <li>Restablecer la energía en el orden que indica el procedimiento y probar el funcionamiento.</li>
          <li>Informar al operador y al supervisor que el equipo queda en servicio, y registrar la intervención.</li>
        </ol>
      `,
      keyPoints: [
        'Verificar: intentar el arranque desde todos los controles, regresarlos a apagado y medir con instrumento.',
        'La ausencia de tensión la verifica personal calificado, con un instrumento comprobado antes y después.',
        'Cada trabajador retira solo su propio candado, después de inspeccionar el área y avisar al personal.'
      ]
    },
    {
      title: 'Situaciones especiales: bloqueo grupal, cambio de turno, contratistas y pruebas',
      content: `
        <p>La mayoría de los accidentes graves con LOTO no ocurre en la intervención sencilla de una persona. Ocurre cuando hay varios trabajadores, cuando cambia el turno o cuando llega alguien de afuera.</p>
        <p><strong>Bloqueo grupal con caja.</strong> Cuando una máquina tiene muchos puntos de aislamiento y trabajan varias personas, un responsable principal bloquea todos los puntos con candados del grupo y mete las llaves en la caja de bloqueo. Luego cada trabajador pone su candado personal en la caja. Nadie puede sacar las llaves mientras quede un solo candado puesto. El responsable principal pone su candado primero y lo retira de último.</p>
        <p><strong>Cambio de turno.</strong> El trabajador que sale no retira su candado hasta que el que entra haya puesto el suyo. El relevo se hace en persona y se registra por escrito. Así nunca queda un momento sin protección.</p>
        <p><strong>Contratistas.</strong> Antes de empezar, el anfitrión y el contratista acuerdan qué procedimiento se aplica, y cada persona del contratista recibe instrucción y pone su propio candado. Un contratista nunca trabaja "protegido" por el candado de un trabajador de la planta.</p>
        <p><strong>Candado olvidado: retiro de emergencia.</strong> Si el dueño de un candado no está y el equipo se necesita, el candado <em>no</em> se corta por iniciativa propia. Se sigue un procedimiento documentado que, como mínimo:</p>
        <ul>
          <li>verifica que la persona no esté dentro de la máquina ni en el área;</li>
          <li>intenta contactarla por todos los medios;</li>
          <li>requiere la autorización de quien la empresa haya designado;</li>
          <li>se registra por escrito;</li>
          <li>garantiza que la persona sepa que su candado fue retirado antes de volver a trabajar.</li>
        </ul>
        <p><strong>Pruebas o ajustes con energía.</strong> A veces hay que energizar para probar un ajuste. Se hace con una secuencia controlada: despejar el área, retirar herramientas, retirar los bloqueos según el procedimiento, energizar y probar, y después volver a apagar, aislar, bloquear y verificar antes de seguir trabajando. Nunca se "salta" el bloqueo con un puente.</p>
        <p><strong>Equipos con cable y enchufe.</strong> Si desconectar el enchufe elimina toda la energía y la clavija queda bajo el control exclusivo de quien interviene (a la vista y al alcance, o con un bloqueador de enchufe), eso cumple la función del aislamiento.</p>
      `,
      keyPoints: [
        'En la caja de bloqueo grupal, cada trabajador pone su candado personal; las llaves no salen mientras quede uno.',
        'En el cambio de turno, quien sale retira su candado solo después de que el relevo puso el suyo.',
        'El candado de otra persona solo se retira con el procedimiento documentado de retiro de emergencia.'
      ]
    },
    {
      title: 'El programa LOTO de la empresa',
      content: `
        <p>Los candados no bastan. Una planta segura tiene un <strong>programa</strong> LOTO: un sistema que se documenta, se enseña, se revisa y se mejora.</p>
        <p><strong>Componentes del programa:</strong></p>
        <ul>
          <li><strong>Procedimiento general</strong> aprobado por la empresa: alcance, responsabilidades, reglas y sanciones.</li>
          <li><strong>Inventario de equipos</strong> con todas sus fuentes de energía y sus puntos de aislamiento, identificados en campo con rótulos que coinciden con los planos.</li>
          <li><strong>Procedimientos específicos</strong> por equipo, con fotos de cada punto.</li>
          <li><strong>Dispositivos</strong> suficientes, estandarizados y en buen estado, con un control de la entrega de candados personales.</li>
          <li><strong>Capacitación por roles.</strong> El <em>trabajador autorizado</em>, que bloquea e interviene, recibe la formación completa y práctica en sitio. El <em>trabajador afectado</em>, que opera la máquina pero no la interviene, aprende a reconocer un bloqueo y a no intentar arrancar un equipo bloqueado. Las <em>demás personas</em> del área aprenden a respetar los candados y las tarjetas.</li>
          <li><strong>Inspección periódica</strong> de la aplicación de cada procedimiento por alguien distinto a quien lo ejecuta. La referencia OSHA 1910.147 la exige al menos una vez al año.</li>
          <li><strong>Integración</strong> con el análisis de trabajo seguro (ATS) y con los permisos de trabajo de alto riesgo.</li>
        </ul>
        <p><strong>Indicadores útiles</strong> para el SG-SST: porcentaje de equipos con procedimiento específico; porcentaje de trabajadores autorizados con formación vigente; hallazgos en las inspecciones de LOTO y su cierre; reportes de casi accidentes relacionados con energías peligrosas.</p>
        <p><strong>La cultura que sostiene el programa.</strong> Todo trabajador tiene la autoridad, y el deber, de detener una tarea si la energía no está controlada, sin represalias. Los supervisores dan ejemplo bloqueando ellos mismos. Y cuando alguien reporta un candado mal puesto, se agradece en lugar de buscar culpables.</p>
        <p><strong>Lo que esta constancia certifica y lo que no.</strong> Este curso le da la base teórica. Para ser trabajador autorizado en su planta necesita además el entrenamiento práctico con los equipos reales y la autorización de su empleador.</p>
      `,
      keyPoints: [
        'El programa incluye procedimiento general, inventario, procedimientos por equipo, dispositivos, capacitación e inspección periódica.',
        'Roles: autorizado (bloquea e interviene), afectado (opera y respeta) y demás personas (no tocan).',
        'Todo trabajador puede detener una tarea si la energía no está controlada, sin represalias.'
      ]
    }
  ],

  scenarios: [
    {
      scenario:
        'Vas a revisar una banda transportadora que se atascó. El operador de turno dice que ya apagaste el botón de paro, pero no ves candados en el tablero. Tu compañero te apura: "es un atasco rápido, no hace falta bloquear".',
      options: [
        { text: 'Acepto: el botón de paro ya detuvo la banda, así que puedo intervenir.', correct: false, feedback: 'Decisión insegura. El botón de paro es un control de mando, no un aislamiento. La banda puede arrancar si alguien la reinicia desde el tablero, que es exactamente lo que pasó en el caso del curso.' },
        { text: 'Pido al operador que espere, aíslo el seccionador, pongo mi candado y mi tarjeta, y verifico energía cero antes de meter las manos.', correct: true, feedback: 'Decisión correcta. Aislar, bloquear y verificar protege sin importar cuánto dure la intervención.' },
        { text: 'Intervengo rápido sin bloquear, pero le aviso al operador por radio que no toque nada.', correct: false, feedback: 'Decisión insegura. Avisar no basta: el operador puede no escuchar, otra persona puede llegar al tablero, o un sensor puede reiniciar el ciclo.' }
      ]
    },
    {
      scenario:
        'Estás en un cambio de turno. Tu compañero que entra aún no tiene su candado puesto en la prensa hidráulica, y tú ya quieres retirar el tuyo para irte.',
      options: [
        { text: 'Retiro mi candado y le digo que ponga el suyo cuando llegue a la prensa.', correct: false, feedback: 'Decisión insegura. Entre que retiras tu candado y él pone el suyo, el equipo queda sin protección y alguien podría energizarlo.' },
        { text: 'Mantengo mi candado hasta que mi compañero ponga el suyo, y registramos el relevo por escrito.', correct: true, feedback: 'Decisión correcta. El relevo ordenado elimina el momento sin protección del cambio de turno.' },
        { text: 'Dejo la llave puesta en mi candado para que él lo retire cuando ponga el suyo.', correct: false, feedback: 'Decisión insegura. Una llave que circula rompe la regla de una persona, un candado, una llave.' }
      ]
    },
    {
      scenario:
        'Al verificar energía cero en una prensa, presionas el arranque y nada se mueve. Sin embargo, el manómetro del acumulador hidráulico marca 1.500 psi.',
      options: [
        { text: 'Como la máquina no arrancó, la considero segura y empiezo el mantenimiento.', correct: false, feedback: 'Decisión insegura. La presión atrapada puede liberarse al abrir una línea. El equipo no está en energía cero.' },
        { text: 'Detengo la intervención, descargo el acumulador según el procedimiento y verifico de nuevo que el manómetro marque cero.', correct: true, feedback: 'Decisión correcta. La energía residual hidráulica se libera y se mide antes de intervenir.' },
        { text: 'Abro también el tablero principal de la planta y considero que así queda todo sin energía.', correct: false, feedback: 'Decisión insegura. Cortar más energía eléctrica no descarga el acumulador hidráulico.' }
      ]
    },
    {
      scenario:
        'Llegan dos técnicos de un contratista a cambiar un reductor en la línea de envasado, que ya está bloqueada por tu equipo con una caja de bloqueo grupal. Dicen que no trajeron candados porque "la línea ya está bloqueada por ustedes".',
      options: [
        { text: 'Los dejo trabajar: la caja ya tiene los candados de mi equipo, así que la línea está protegida.', correct: false, feedback: 'Decisión insegura. Cuando tu equipo termine y retire sus candados, la línea se podría energizar con los técnicos del contratista adentro.' },
        { text: 'Les entrego candados personales controlados, los instruyo y cada uno pone el suyo en la caja antes de empezar.', correct: true, feedback: 'Decisión correcta. Cada persona que interviene, sea de la planta o contratista, necesita su propio candado.' },
        { text: 'Les pido que trabajen solo mientras mi equipo esté presente en la línea, para que estén cubiertos.', correct: false, feedback: 'Decisión insegura. La protección no puede depender de que otras personas estén presentes; depende de su propio candado.' }
      ]
    },
    {
      scenario:
        'Terminaste de ajustar los sensores de una llenadora y necesitas probar si quedaron bien. La máquina está bloqueada y tu compañero sugiere poner un puente en el tablero para energizar solo el sensor sin quitar los candados.',
      options: [
        { text: 'Pongo el puente: así la máquina sigue bloqueada mientras pruebo el sensor.', correct: false, feedback: 'Decisión insegura. Un puente anula el aislamiento sin que nadie lo sepa: la máquina queda energizada con candados que dan una falsa sensación de seguridad.' },
        { text: 'Despejo el área, recojo herramientas, retiro los bloqueos según el procedimiento, energizo y pruebo; después vuelvo a bloquear y verificar.', correct: true, feedback: 'Decisión correcta. La prueba con energía se hace con una secuencia controlada y el bloqueo se aplica de nuevo antes de seguir trabajando.' },
        { text: 'Retiro solo mi candado para probar rápido y lo vuelvo a poner sin verificar de nuevo.', correct: false, feedback: 'Decisión insegura. Después de una prueba con energía hay que aislar, bloquear y verificar energía cero otra vez.' }
      ]
    }
  ],

  exam: [
    {
      q: 'Un técnico detiene una máquina con el botón de paro y empieza a revisarla. ¿Qué afirmación es correcta?',
      options: [
        'El botón de paro controla la máquina, pero no aísla la energía; se requiere aislamiento y bloqueo.',
        'El botón de paro es suficiente si el operador fue avisado y la máquina permanece quieta durante toda la revisión.',
        'El botón de paro de emergencia sí aísla la energía, a diferencia del pulsador normal de parada de la máquina.'
      ],
      answer: 0
    },
    {
      q: '¿Cuál de estas tareas requiere aplicar LOTO?',
      options: [
        'Operar la máquina con todas sus guardas instaladas.',
        'Retirar una guarda para desatascar un producto en una zona de atrapamiento.',
        'Revisar desde afuera de las guardas que la máquina esté produciendo dentro de la velocidad indicada.'
      ],
      answer: 1
    },
    {
      q: 'Según la jerarquía de controles del Decreto 1072 de 2015, ¿qué tipo de control es un programa LOTO?',
      options: [
        'Un elemento de protección personal, porque cada trabajador lleva su propio candado en el cinturón.',
        'Una eliminación del peligro, porque la energía desaparece de la planta mientras dura el trabajo.',
        'Una combinación de control de ingeniería (los dispositivos) y control administrativo (el procedimiento).'
      ],
      answer: 2
    },
    {
      q: 'En un trabajo eléctrico sin tensión, ¿qué exige el RETIE?',
      options: [
        'Aplicar las cinco reglas de oro, con personal calificado y autorizado.',
        'Que cualquier trabajador abra el tablero con guantes.',
        'Desconectar el pulsador de arranque y colocar una tarjeta de advertencia en la puerta del tablero.'
      ],
      answer: 0
    },
    {
      q: 'En una prensa hidráulica bloqueada, ¿por qué no basta con confirmar que el motor eléctrico está aislado?',
      options: [
        'Porque el motor puede volver a encenderse solo cuando la bomba recupera la presión del sistema.',
        'Porque puede quedar presión atrapada en acumuladores y líneas, que se debe liberar y medir.',
        'Porque el aceite hidráulico conduce electricidad y puede energizar la estructura de la prensa.'
      ],
      answer: 1
    },
    {
      q: 'Una compuerta pesada está levantada y sostenida por un cilindro neumático. ¿Cómo se controla esa energía antes de intervenir?',
      options: [
        'Se deja sostenida por el cilindro, que es seguro si el manómetro marca presión estable.',
        'Se cierra la válvula de aire del cilindro para que la presión quede atrapada y la sostenga.',
        'Se baja a su posición de reposo o se sostiene con soportes mecánicos diseñados para ese peso.'
      ],
      answer: 2
    },
    {
      q: '¿Dónde se coloca el candado de bloqueo?',
      options: [
        'En el punto de aislamiento, como el seccionador o la válvula.',
        'En el botón de parada de emergencia.',
        'En la pantalla del PLC, con el equipo en modo de mantenimiento seleccionado.'
      ],
      answer: 0
    },
    {
      q: '¿Cuál es la regla de oro de los candados LOTO?',
      options: [
        'Un candado por máquina, cuya llave guarda el supervisor de turno en la oficina de mantenimiento.',
        'Una persona, un candado personal y una sola llave que lleva consigo.',
        'Un candado por cuadrilla, con copias de la llave.'
      ],
      answer: 1
    },
    {
      q: 'Un punto de aislamiento no admite candado y solo se puede poner una tarjeta. ¿Qué es lo correcto?',
      options: [
        'Considerar que la tarjeta protege igual que el candado, porque advierte a todo el personal.',
        'Instalar un dispositivo que admita candado y, mientras tanto, aplicar las medidas adicionales del procedimiento.',
        'Trabajar sin tarjeta ni candado, porque si no se puede bloquear el procedimiento LOTO no aplica.'
      ],
      answer: 1
    },
    {
      q: '¿Cuál es el orden correcto de los primeros pasos del procedimiento LOTO?',
      options: [
        'Preparar, apagar, aislar, y luego bloquear y etiquetar cada punto de aislamiento identificado.',
        'Aislar con el equipo en marcha, apagar desde el control y después preparar los dispositivos.',
        'Etiquetar el tablero, verificar energía cero y por último apagar la máquina desde su control.'
      ],
      answer: 0
    },
    {
      q: 'Después de bloquear, ¿cómo se verifica la energía cero?',
      options: [
        'Mirando que el piloto del tablero esté apagado y que la máquina no haga ruido.',
        'Preguntando al supervisor y esperando su confirmación verbal por radio antes de empezar.',
        'Intentando arrancar desde todos los controles, regresándolos a apagado y midiendo con instrumento.'
      ],
      answer: 2
    },
    {
      q: 'Al terminar el mantenimiento, ¿quién retira cada candado?',
      options: [
        'Cada trabajador retira su propio candado, después de inspeccionar el área y avisar al personal.',
        'El supervisor retira todos los candados con la llave maestra para entregar el equipo más rápido.',
        'El operador de producción, que necesita el equipo y conoce la secuencia de arranque de la máquina.'
      ],
      answer: 0
    },
    {
      q: 'Durante un cambio de turno, el trabajador que sale quiere retirar su candado antes de que llegue el relevo. ¿Qué debe hacer?',
      options: [
        'Retirarlo, porque su turno terminó y el relevo ya está en la planta y puede ver la máquina.',
        'Dejar el candado sin cerrar para que el relevo lo retire cuando ponga el suyo.',
        'Mantenerlo hasta que el relevo haya puesto su propio candado, y registrar el relevo.'
      ],
      answer: 2
    },
    {
      q: 'Un compañero no llegó a su turno y dejó su candado en un tablero que se necesita. ¿Cómo se retira?',
      options: [
        'Cualquier trabajador lo corta si el compañero ya no está en la planta y el turno cerró.',
        'Con el procedimiento documentado de retiro de emergencia, verificando que no esté en el área.',
        'El supervisor lo retira con una autorización verbal del jefe de planta, sin dejar registro escrito.'
      ],
      answer: 1
    },
    {
      q: 'Un contratista llega a hacer una reparación en una línea con bloqueo grupal activo. ¿Qué debe hacer antes de intervenir?',
      options: [
        'Trabajar protegido por los candados del personal de planta, mientras ese personal esté presente.',
        'Esperar a que el supervisor le diga verbalmente que puede entrar sin poner ningún candado.',
        'Recibir instrucción y poner su propio candado personal en la caja de bloqueo grupal.'
      ],
      answer: 2
    },
    {
      q: 'En un programa LOTO, ¿qué es un trabajador afectado?',
      options: [
        'Quien opera la máquina pero no la interviene; debe reconocer un bloqueo y no intentar arrancarla.',
        'Quien bloquea e interviene la máquina, y por eso necesita la formación completa y la práctica en sitio.',
        'Quien sufrió un accidente con energías peligrosas y está en proceso de reintegro a sus labores.'
      ],
      answer: 0
    }
  ]
};
