// GENERADO por tools/build-content.mjs — no editar a mano. Contenido público: sin respuestas correctas ni retroalimentación.
export const LEGAL_CATEGORIES = {
  "prevencion_sst": {
    "id": "prevencion_sst",
    "label": "Prevención SST / Formación Técnica General",
    "badgeClass": "iui-badge-primary",
    "description": "Formación teórica complementaria en prevención de riesgos laborales (Decreto 1072 de 2015, Res. 0312 de 2019). Requiere cierre práctico en sitio y permiso de trabajo de la empresa antes de operar."
  },
  "gestion_sst": {
    "id": "gestion_sst",
    "label": "Comités y Gestión del SG-SST",
    "badgeClass": "iui-badge-success",
    "description": "Formación para integrantes de comités y responsables del SG-SST. Complementa la capacitación que deben brindar el empleador y la ARL; no reemplaza la conformación formal del comité ni sus actas."
  },
  "regimen_especial": {
    "id": "regimen_especial",
    "label": "Marco Normativo Especial (Requiere Aval / Práctica Reglamentada)",
    "badgeClass": "iui-badge-warning",
    "description": "Este curso entrega fundamentación teórica preventiva, pero en Colombia su ejercicio legal o certificación habilitante puede exigir entidad avalada, práctica presencial o examen médico específico (ej. Res. 4272/2021 Alturas, Res. 2674/2013 Alimentos, Decreto 1079/2015 Mercancías Peligrosas)."
  }
};

export const COURSES = [
  {
    "id": "loto-bloqueo",
    "title": "Etiquetado y Bloqueo de Energías Peligrosas (LOTO)",
    "hours": 4,
    "category": "prevencion_sst",
    "regulation": "Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979, RETIE (Res. 40117 de 2024); referencias: OSHA 29 CFR 1910.147, ANSI/ASSP Z244.1, ISO 14118",
    "legalNotice": "Formación teórica en control de energías peligrosas. No reemplaza el entrenamiento práctico en sitio con el procedimiento específico de cada máquina, ni la autorización del empleador. Las mediciones eléctricas solo las hace personal calificado.",
    "summary": "Por qué el botón de paro no protege, cómo identificar y liberar cada energía, los dispositivos de bloqueo, el procedimiento de 6 pasos, la verificación de energía cero, el bloqueo grupal, las excepciones, el programa LOTO de la planta y cómo escribir el procedimiento de un equipo real. Incluye talleres aplicados a su planta y un proyecto final.",
    "fieldCase": "Un técnico detuvo una banda transportadora con el botón de paro de emergencia y no puso candado en el seccionador. Mientras él revisaba un rodillo, otro operario, que no sabía que había una intervención, reinició la banda desde el tablero y le atrapó la mano.",
    "checklist": [
      "Tengo el procedimiento específico de esta máquina y sé dónde está cada punto de aislamiento.",
      "Avisé al operador y a las personas afectadas que la máquina quedará fuera de servicio.",
      "Apagué la máquina con su control normal antes de aislar.",
      "Aislé todas las fuentes: eléctrica, neumática, hidráulica, gravitacional, mecánica, térmica y química.",
      "Puse mi candado personal y mi tarjeta en cada punto de aislamiento (o en la caja de bloqueo grupal).",
      "Liberé o contuve la energía residual: presión, carga de capacitores, cargas suspendidas, resortes, inercia y temperatura.",
      "Verifiqué energía cero: intenté el arranque, regresé el control a apagado y medí con instrumento.",
      "Antes de retirar el bloqueo: área despejada, herramientas recogidas, guardas instaladas y personal avisado."
    ],
    "failureAnalysis": "Falla raíz: se usó el botón de paro (un control de mando) como si fuera un aislamiento de energía, y no existía comunicación entre quien intervenía y quien operaba el tablero.",
    "onSiteClosure": "Práctica en campo: con el procedimiento específico de un equipo real de su planta, aplicar un bloqueo grupal con caja de candados, liberar la energía residual, comprobar energía cero y registrar la intervención en el formato de la empresa, bajo supervisión.",
    "image": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80",
    "modules": [
      {
        "title": "Por qué existe LOTO: apagado no es lo mismo que aislado",
        "content": "\n        <p>Una gran parte de los accidentes graves en mantenimiento ocurre con la máquina <strong>detenida</strong>, no en marcha. El trabajador se acerca porque la ve quieta, mete las manos en una zona de atrapamiento y, en ese momento, la máquina arranca o libera energía que tenía guardada.</p>\n        <p>LOTO (del inglés <em>Lockout/Tagout</em>, bloqueo y etiquetado) es el conjunto de pasos que garantiza que una máquina o un sistema <strong>no se pueda energizar ni mover</strong> mientras alguien trabaja en él. El <strong>bloqueo</strong> es el candado y el dispositivo que impiden físicamente accionar la fuente de energía. El <strong>etiquetado</strong> es la tarjeta que informa quién bloqueó, cuándo y por qué.</p>\n        <p><strong>Los dos peligros que controla LOTO:</strong></p>\n        <ul>\n          <li><strong>Arranque inesperado:</strong> otra persona pulsa el arranque, un temporizador o un sensor activa el ciclo, un variador reinicia solo al volver la energía, o un equipo vecino alimenta la línea.</li>\n          <li><strong>Liberación de energía almacenada:</strong> aire comprimido en un tanque, aceite a presión en un acumulador, una carga levantada, un resorte tensionado, un volante que sigue girando o un capacitor que conserva carga.</li>\n        </ul>\n        <p><strong>Control de mando frente a aislamiento.</strong> El botón de paro, el pulsador de parada de emergencia, el selector de modo o la pantalla del PLC son <em>controles de mando</em>: le dan una orden al circuito de control. No cortan la energía de potencia. Pueden fallar por un contacto pegado, por un error de programación o simplemente porque alguien los vuelve a accionar. El <em>aislamiento</em> es otra cosa: abrir el seccionador, cerrar y bloquear la válvula, desconectar el enchufe, colocar un soporte mecánico. Solo el aislamiento físico, bloqueado con candado, impide que la energía llegue.</p>\n        <p><strong>¿Cuándo se aplica LOTO?</strong> Siempre que una persona deba retirar o pasar por encima de una guarda, o poner una parte de su cuerpo en una zona donde la máquina pueda atraparla, golpearla, cortarla o quemarla. Esto incluye mantenimiento y reparación, limpieza y desatasco, lubricación con guardas retiradas, ajustes, cambios de formato o de herramienta, e inspecciones internas.</p>\n        <p><strong>¿Cuándo no?</strong> En la operación normal de producción, cuando el trabajador usa la máquina con todos sus resguardos y no expone su cuerpo a la zona de peligro. Si para \"un ajuste rápido\" hay que meter la mano dentro de la guarda, ya no es operación normal: es una intervención y requiere LOTO.</p>\n        <p><strong>La trampa del \"es solo un momento\".</strong> El desatasco rápido es la situación clásica del accidente: la persona cree que no vale la pena bloquear porque son treinta segundos. La máquina no sabe cuánto va a durar la intervención. Un arranque tarda menos de un segundo.</p>\n      ",
        "keyPoints": [
          "El botón de paro controla; no aísla. Solo el aislamiento físico con candado protege.",
          "LOTO controla dos peligros: el arranque inesperado y la liberación de energía almacenada.",
          "Si hay que retirar una guarda o poner el cuerpo en la zona de peligro, se aplica LOTO, sin importar cuánto dure la tarea."
        ],
        "practice": {
          "q": "¿Cuáles son los dos peligros que controla un procedimiento LOTO?",
          "options": [
            "La falta de iluminación y el desorden alrededor del equipo",
            "El arranque inesperado y la liberación de energía almacenada",
            "El ruido de la máquina y el polvo del área de trabajo"
          ]
        }
      },
      {
        "title": "Marco normativo en Colombia y referencias internacionales",
        "content": "\n        <p>En Colombia no existe una resolución dedicada solo a LOTO, pero la obligación de controlar las energías peligrosas se desprende de varias normas que toda empresa debe cumplir.</p>\n        <p><strong>Decreto 1072 de 2015</strong> (Decreto Único Reglamentario del Sector Trabajo). Su capítulo del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) obliga al empleador a identificar los peligros, evaluar y valorar los riesgos, y definir controles siguiendo una jerarquía: eliminación, sustitución, controles de ingeniería, controles administrativos y, por último, elementos de protección personal. LOTO combina un control de ingeniería (los dispositivos que aíslan la energía) con un control administrativo (el procedimiento, la capacitación y la verificación). El decreto también establece deberes de los trabajadores, como cumplir las normas y procedimientos de seguridad y reportar las condiciones de peligro.</p>\n        <p><strong>Resolución 0312 de 2019</strong> (estándares mínimos del SG-SST). Entre los estándares que se evalúan están la identificación de peligros, los procedimientos de trabajo seguro, la capacitación, las inspecciones y el mantenimiento periódico de instalaciones, equipos, máquinas y herramientas. Un programa LOTO documentado aporta evidencia directa a estos estándares.</p>\n        <p><strong>Resolución 2400 de 1979</strong> (Estatuto de Seguridad Industrial). Contiene disposiciones generales sobre la protección de máquinas, transmisiones y equipos, que siguen siendo referencia en las inspecciones.</p>\n        <p><strong>RETIE</strong> (Reglamento Técnico de Instalaciones Eléctricas, Resolución 40117 de 2024 del Ministerio de Minas y Energía). Para trabajos eléctricos sin tensión exige aplicar las conocidas <em>cinco reglas de oro</em>: corte efectivo de todas las fuentes; bloqueo y señalización de los equipos de corte; verificación de ausencia de tensión; puesta a tierra y en cortocircuito; y señalización y delimitación de la zona de trabajo. Estas tareas las realiza personal calificado y autorizado.</p>\n        <p><strong>Referencias internacionales</strong> que usan muchas multinacionales y sus contratistas en Colombia:</p>\n        <ul>\n          <li><strong>OSHA 29 CFR 1910.147</strong> (Estados Unidos), <em>Control of Hazardous Energy</em>: es la referencia más usada para el programa LOTO, los procedimientos específicos por equipo, la capacitación por roles y la inspección periódica.</li>\n          <li><strong>ANSI/ASSP Z244.1</strong>: norma de consenso sobre control de energías peligrosas.</li>\n          <li><strong>ISO 14118</strong>: seguridad de las máquinas, prevención de la puesta en marcha inesperada.</li>\n        </ul>\n        <p>Estas referencias no son leyes colombianas, pero son el estándar técnico con el que suelen auditar los clientes, y muchas empresas las adoptan en su propio procedimiento.</p>\n        <p><strong>Responsabilidades.</strong> El <em>empleador</em> define el programa, entrega los dispositivos, capacita y verifica. El <em>supervisor</em> se asegura de que nadie intervenga sin bloqueo. El <em>trabajador autorizado</em> aplica el procedimiento y nunca interviene sin su propio candado. El <em>contratista</em> se acoge al programa del anfitrión o acuerda uno compatible antes de empezar.</p>\n      ",
        "keyPoints": [
          "El Decreto 1072 de 2015 obliga a identificar peligros y aplicar controles por jerarquía; LOTO es control de ingeniería más administrativo.",
          "En trabajos eléctricos, el RETIE exige las cinco reglas de oro, realizadas por personal calificado.",
          "OSHA 1910.147, ANSI/ASSP Z244.1 e ISO 14118 son referencias técnicas que muchos clientes exigen en sus auditorías."
        ],
        "practice": {
          "q": "¿Qué norma colombiana exige aplicar las cinco reglas de oro en trabajos eléctricos sin tensión?",
          "options": [
            "La Resolución 2674 de 2013 sobre manipulación de alimentos",
            "La Ley 1581 de 2012 de protección de datos personales",
            "El RETIE, Reglamento Técnico de Instalaciones Eléctricas"
          ]
        }
      },
      {
        "title": "Las energías peligrosas y la energía residual",
        "content": "\n        <p>Antes de bloquear hay que saber <strong>qué</strong> se bloquea. Una máquina rara vez tiene una sola fuente de energía. El error típico es aislar el motor eléctrico y olvidar el aire, el aceite o la gravedad.</p>\n        <ul>\n          <li><strong>Eléctrica.</strong> Se aísla en el seccionador o interruptor del circuito de potencia, no en el pulsador. Ojo con los variadores de frecuencia y los bancos de capacitores: pueden conservar tensión varios minutos después de abrir el circuito. El fabricante indica el tiempo de descarga.</li>\n          <li><strong>Neumática.</strong> Se cierra y bloquea la válvula de suministro, idealmente una válvula de bloqueo con venteo, y se purga el aire que queda en tanques, mangueras y cilindros.</li>\n          <li><strong>Hidráulica.</strong> Apagar la bomba no basta. Los acumuladores y las líneas conservan aceite a alta presión. Se descargan por la válvula prevista y se confirma la presión en cero en el manómetro. Un chorro fino de aceite a alta presión puede atravesar la piel y causar una lesión por inyección muy grave.</li>\n          <li><strong>Gravitacional.</strong> Una prensa, una compuerta, un elevador o una carga sostenida por un cilindro pueden caer. Se bajan a su posición de reposo o se sostienen con soportes mecánicos, calzos o pasadores diseñados para ese peso. Nunca se confía solo en el cilindro.</li>\n          <li><strong>Mecánica.</strong> Volantes, rodillos y ejes siguen girando por inercia: hay que esperar la detención total. Los resortes comprimidos o tensionados se liberan de forma controlada o se bloquean.</li>\n          <li><strong>Térmica.</strong> Vapor, agua caliente, aceite térmico, superficies calientes o criogénicas. Se aíslan las líneas, se drena y se espera a que la temperatura sea segura, verificándola.</li>\n          <li><strong>Química.</strong> Líneas y recipientes con productos peligrosos. Se aíslan, se drenan y se purgan. En servicios críticos se usan técnicas como el doble bloqueo y purga o la brida ciega (ver el curso avanzado de aislamiento).</li>\n        </ul>\n        <p><strong>Energía residual o almacenada</strong> es la que queda en el sistema después de aislar la fuente. Es la causa de muchos accidentes porque la máquina ya \"está bloqueada\" y la persona baja la guardia. Por eso el procedimiento tiene un paso exclusivo para liberarla o contenerla, y otro para verificar que realmente quedó en cero.</p>\n        <p><strong>Energía que llega de otros equipos.</strong> Una banda puede ser arrastrada por la banda siguiente; una tubería puede recibir presión de una bomba aguas arriba; un tablero puede tener doble alimentación o una planta de respaldo. El procedimiento específico de cada máquina debe mostrar todas estas fuentes.</p>\n        <p><strong>Punto de aislamiento</strong> es el dispositivo que realmente impide el paso de la energía (seccionador, válvula, brida ciega). <strong>Punto de control</strong> es el que solo da órdenes (botón, pantalla, selector). El candado siempre va en el punto de aislamiento.</p>\n      ",
        "keyPoints": [
          "Identifique todas las fuentes: eléctrica, neumática, hidráulica, gravitacional, mecánica, térmica y química.",
          "La energía residual queda después de aislar: presión, carga de capacitores, cargas suspendidas, resortes e inercia.",
          "El candado va en el punto de aislamiento, nunca en un botón o un selector."
        ],
        "practice": {
          "q": "¿Qué energía conserva un banco de capacitores después de abrir el circuito?",
          "options": [
            "Energía eléctrica almacenada, que necesita tiempo o descarga controlada",
            "Ninguna: al abrir el circuito toda la energía desaparece",
            "Solo energía térmica, que se disipa en pocos segundos"
          ]
        }
      },
      {
        "title": "Dispositivos de bloqueo y etiquetado",
        "content": "\n        <p>Un programa LOTO solo funciona si en cada punto de aislamiento hay un dispositivo adecuado y cada persona tiene el suyo.</p>\n        <ul>\n          <li><strong>Candado personal de seguridad.</strong> Cada trabajador autorizado tiene su candado, identificado con su nombre o foto, y <strong>una sola llave</strong> que lleva consigo. Es la regla de oro: <em>una persona, un candado, una llave</em>. No se presta, no se comparte y no se usa para guardar herramientas ni casilleros.</li>\n          <li><strong>Pinza portacandados (hasp).</strong> Permite que varias personas pongan su candado sobre el mismo punto. El equipo solo se puede energizar cuando se retira el último candado.</li>\n          <li><strong>Bloqueadores de interruptores y breakers.</strong> Se ajustan a la palanca para impedir que se suba.</li>\n          <li><strong>Bloqueadores de válvulas.</strong> De compuerta, de bola o de mariposa, según el tipo de válvula. Impiden girarla.</li>\n          <li><strong>Bloqueadores de enchufe.</strong> Encierran la clavija de un equipo con cable para que nadie lo conecte.</li>\n          <li><strong>Cables de bloqueo ajustables.</strong> Para varios puntos cercanos o formas irregulares.</li>\n          <li><strong>Caja de bloqueo grupal.</strong> Se explica en el módulo de situaciones especiales.</li>\n        </ul>\n        <p><strong>Cuatro criterios para aceptar un dispositivo:</strong></p>\n        <ol>\n          <li><strong>Duradero:</strong> resiste el ambiente (humedad, químicos, calor) sin deteriorarse.</li>\n          <li><strong>Estandarizado:</strong> mismo color, forma o tamaño en toda la planta, para que se reconozca de inmediato.</li>\n          <li><strong>Sustancial:</strong> no se puede retirar sin usar fuerza excesiva o herramientas especiales.</li>\n          <li><strong>Identificable:</strong> muestra quién lo puso.</li>\n        </ol>\n        <p><strong>La tarjeta de peligro</strong> debe decir, como mínimo: nombre de quien bloqueó, fecha, motivo y una advertencia clara del tipo \"No operar\". La tarjeta <em>advierte</em>, pero no impide físicamente la operación. Por eso no reemplaza al candado. Si un punto de aislamiento no admite candado, la solución correcta es instalar un dispositivo que sí lo admita, y mientras tanto aplicar medidas adicionales aprobadas en el procedimiento.</p>\n        <p><strong>Se descarta un dispositivo</strong> cuando está dañado, cuando la llave no es única, cuando se puede abrir sin su llave o cuando no queda firmemente instalado.</p>\n        <p><strong>Ejemplo.</strong> Tres mecánicos cambian rodamientos en un mismo transportador. Cada uno pone su candado en la pinza del seccionador. Al terminar, el primero retira el suyo, pero el equipo sigue bloqueado porque quedan dos candados. Solo cuando el último retira el suyo se puede pensar en energizar.</p>\n      ",
        "keyPoints": [
          "Una persona, un candado, una llave: el candado personal no se presta ni se comparte.",
          "Un dispositivo debe ser duradero, estandarizado, sustancial e identificable.",
          "La tarjeta advierte, pero no impide: no reemplaza al candado."
        ],
        "practice": {
          "q": "¿Cuál de estos datos debe tener, como mínimo, una tarjeta de peligro LOTO?",
          "options": [
            "La marca de la máquina y su año de fabricación",
            "Nombre de quien bloqueó, fecha, motivo y la advertencia de no operar",
            "El precio del repuesto y el número de la orden de compra"
          ]
        }
      },
      {
        "title": "El procedimiento LOTO en 6 pasos",
        "content": "\n        <p>El orden importa. Cada paso prepara el siguiente, y saltarse uno es la causa más común de los accidentes en mantenimiento.</p>\n        <ol>\n          <li><strong>Preparar.</strong> Leer el procedimiento específico de la máquina, identificar todas las fuentes de energía y sus puntos de aislamiento, reunir los dispositivos y avisar a las personas afectadas: el operador, el supervisor de turno y quien trabaje en equipos conectados.</li>\n          <li><strong>Apagar.</strong> Detener la máquina con su control normal y en la secuencia que indica el fabricante. Apagar primero evita abrir un seccionador con carga, que puede generar un arco eléctrico.</li>\n          <li><strong>Aislar.</strong> Abrir el seccionador, cerrar las válvulas, desconectar el enchufe y colocar los soportes mecánicos en <em>cada</em> punto identificado.</li>\n          <li><strong>Bloquear y etiquetar.</strong> Cada trabajador que va a intervenir pone su candado personal y su tarjeta en cada punto de aislamiento, o en la caja de bloqueo grupal.</li>\n          <li><strong>Liberar o contener la energía residual.</strong> Purgar el aire, descargar los acumuladores, esperar la descarga de los capacitores, bajar o calzar las cargas, liberar los resortes, esperar a que se detengan las partes que giran y a que baje la temperatura.</li>\n          <li><strong>Verificar energía cero.</strong> Comprobar, con la máquina bloqueada y sin personas en la zona de peligro, que no arranca y que no queda energía. Se explica en detalle en el siguiente módulo.</li>\n        </ol>\n        <p><strong>El procedimiento específico de cada máquina.</strong> El procedimiento general de la empresa no basta. Cada equipo debe tener su ficha: una hoja con fotos que muestre cada punto de aislamiento, qué dispositivo usar, cómo liberar la energía residual y cómo verificar. Con esa ficha, cualquier trabajador autorizado bloquea la máquina igual, sin depender de la memoria.</p>\n        <p><strong>Errores frecuentes:</strong></p>\n        <ul>\n          <li>Bloquear el tablero equivocado porque los rótulos no coinciden con la máquina.</li>\n          <li>Aislar solo la energía eléctrica y olvidar el aire o la gravedad.</li>\n          <li>Poner el candado y no verificar energía cero.</li>\n          <li>Bloquear \"por el compañero\" con un solo candado para todo el grupo.</li>\n          <li>Dejar la llave puesta en el candado o en el tablero.</li>\n        </ul>\n      ",
        "keyPoints": [
          "Los 6 pasos: preparar, apagar, aislar, bloquear y etiquetar, liberar la energía residual y verificar energía cero.",
          "Se apaga con el control normal antes de aislar, para no abrir un seccionador con carga.",
          "Cada máquina necesita su procedimiento específico con fotos de sus puntos de aislamiento."
        ],
        "practice": {
          "q": "¿Por qué se apaga la máquina con su control normal antes de abrir el seccionador?",
          "options": [
            "Para que el operador pueda seguir produciendo mientras se bloquea",
            "Para que el candado quede más firme en el seccionador",
            "Para no abrir el seccionador con carga, lo que puede generar un arco eléctrico"
          ]
        }
      },
      {
        "title": "Verificación de energía cero y retiro del bloqueo",
        "content": "\n        <p>La verificación es el paso que confirma que todo lo anterior funcionó. Un candado puesto en el seccionador equivocado se ve igual que uno puesto en el correcto. Solo la verificación lo revela.</p>\n        <p><strong>Cómo se verifica:</strong></p>\n        <ol>\n          <li>Confirmar que todas las personas están fuera de la zona de peligro.</li>\n          <li><strong>Intentar arrancar</strong> la máquina desde todos sus controles: local, remoto y pantalla. No debe moverse.</li>\n          <li><strong>Regresar los controles a apagado</strong>. Si no se hace y luego se retira el bloqueo, la máquina puede arrancar sola al recibir energía.</li>\n          <li><strong>Medir</strong> con instrumento: manómetros en cero en las líneas neumáticas e hidráulicas, temperatura segura, cargas apoyadas, partes detenidas. En la parte eléctrica, la ausencia de tensión la verifica <em>personal calificado</em> con un detector o un multímetro adecuado para el nivel de tensión. El instrumento se comprueba antes y después en una fuente que se sabe energizada, para estar seguros de que funciona.</li>\n        </ol>\n        <p><strong>Si algo no cuadra</strong> (la máquina responde, un manómetro marca presión o el detector indica tensión), se detiene todo, se informa al supervisor y se revisa el aislamiento. Nunca se interviene \"con cuidado\".</p>\n        <p><strong>Volver a verificar.</strong> Si el trabajo se interrumpe, si se sale del área por un tiempo o si cambia el personal, se verifica de nuevo antes de continuar.</p>\n        <p><strong>Retiro del bloqueo y restitución de la energía:</strong></p>\n        <ol>\n          <li>Inspeccionar el área: herramientas y materiales recogidos, piezas ajustadas y guardas instaladas.</li>\n          <li>Confirmar que todas las personas están fuera de la zona de peligro y avisarles que la máquina se va a energizar.</li>\n          <li>Cada trabajador retira <strong>su propio</strong> candado y su tarjeta. Nadie retira el candado de otro.</li>\n          <li>Restablecer la energía en el orden que indica el procedimiento y probar el funcionamiento.</li>\n          <li>Informar al operador y al supervisor que el equipo queda en servicio, y registrar la intervención.</li>\n        </ol>\n      ",
        "keyPoints": [
          "Verificar: intentar el arranque desde todos los controles, regresarlos a apagado y medir con instrumento.",
          "La ausencia de tensión la verifica personal calificado, con un instrumento comprobado antes y después.",
          "Cada trabajador retira solo su propio candado, después de inspeccionar el área y avisar al personal."
        ],
        "practice": {
          "q": "Al verificar energía cero, ¿por qué se regresan los controles a apagado después de intentar el arranque?",
          "options": [
            "Para que la máquina no arranque sola cuando se retire el bloqueo y vuelva la energía",
            "Para ahorrar energía mientras dura el mantenimiento",
            "Para que la pantalla del PLC no muestre alarmas"
          ]
        }
      },
      {
        "title": "Situaciones especiales: bloqueo grupal, cambio de turno, contratistas y pruebas",
        "content": "\n        <p>La mayoría de los accidentes graves con LOTO no ocurre en la intervención sencilla de una persona. Ocurre cuando hay varios trabajadores, cuando cambia el turno o cuando llega alguien de afuera.</p>\n        <p><strong>Bloqueo grupal con caja.</strong> Cuando una máquina tiene muchos puntos de aislamiento y trabajan varias personas, un responsable principal bloquea todos los puntos con candados del grupo y mete las llaves en la caja de bloqueo. Luego cada trabajador pone su candado personal en la caja. Nadie puede sacar las llaves mientras quede un solo candado puesto. El responsable principal pone su candado primero y lo retira de último.</p>\n        <p><strong>Cambio de turno.</strong> El trabajador que sale no retira su candado hasta que el que entra haya puesto el suyo. El relevo se hace en persona y se registra por escrito. Así nunca queda un momento sin protección.</p>\n        <p><strong>Contratistas.</strong> Antes de empezar, el anfitrión y el contratista acuerdan qué procedimiento se aplica, y cada persona del contratista recibe instrucción y pone su propio candado. Un contratista nunca trabaja \"protegido\" por el candado de un trabajador de la planta.</p>\n        <p><strong>Candado olvidado: retiro de emergencia.</strong> Si el dueño de un candado no está y el equipo se necesita, el candado <em>no</em> se corta por iniciativa propia. Se sigue un procedimiento documentado que, como mínimo:</p>\n        <ul>\n          <li>verifica que la persona no esté dentro de la máquina ni en el área;</li>\n          <li>intenta contactarla por todos los medios;</li>\n          <li>requiere la autorización de quien la empresa haya designado;</li>\n          <li>se registra por escrito;</li>\n          <li>garantiza que la persona sepa que su candado fue retirado antes de volver a trabajar.</li>\n        </ul>\n        <p><strong>Pruebas o ajustes con energía.</strong> A veces hay que energizar para probar un ajuste. Se hace con una secuencia controlada: despejar el área, retirar herramientas, retirar los bloqueos según el procedimiento, energizar y probar, y después volver a apagar, aislar, bloquear y verificar antes de seguir trabajando. Nunca se \"salta\" el bloqueo con un puente.</p>\n        <p><strong>Equipos con cable y enchufe.</strong> Si desconectar el enchufe elimina toda la energía y la clavija queda bajo el control exclusivo de quien interviene (a la vista y al alcance, o con un bloqueador de enchufe), eso cumple la función del aislamiento.</p>\n      ",
        "keyPoints": [
          "En la caja de bloqueo grupal, cada trabajador pone su candado personal; las llaves no salen mientras quede uno.",
          "En el cambio de turno, quien sale retira su candado solo después de que el relevo puso el suyo.",
          "El candado de otra persona solo se retira con el procedimiento documentado de retiro de emergencia."
        ],
        "practice": {
          "q": "En un bloqueo grupal con caja, ¿cuándo se pueden sacar las llaves de la caja?",
          "options": [
            "Al terminar el turno, aunque el trabajo no haya concluido",
            "Cuando el último trabajador haya retirado su candado personal de la caja",
            "Cuando el supervisor lo autorice, aunque queden candados puestos"
          ]
        }
      },
      {
        "title": "El programa LOTO de la empresa",
        "content": "\n        <p>Los candados no bastan. Una planta segura tiene un <strong>programa</strong> LOTO: un sistema que se documenta, se enseña, se revisa y se mejora.</p>\n        <p><strong>Componentes del programa:</strong></p>\n        <ul>\n          <li><strong>Procedimiento general</strong> aprobado por la empresa: alcance, responsabilidades, reglas y sanciones.</li>\n          <li><strong>Inventario de equipos</strong> con todas sus fuentes de energía y sus puntos de aislamiento, identificados en campo con rótulos que coinciden con los planos.</li>\n          <li><strong>Procedimientos específicos</strong> por equipo, con fotos de cada punto.</li>\n          <li><strong>Dispositivos</strong> suficientes, estandarizados y en buen estado, con un control de la entrega de candados personales.</li>\n          <li><strong>Capacitación por roles.</strong> El <em>trabajador autorizado</em>, que bloquea e interviene, recibe la formación completa y práctica en sitio. El <em>trabajador afectado</em>, que opera la máquina pero no la interviene, aprende a reconocer un bloqueo y a no intentar arrancar un equipo bloqueado. Las <em>demás personas</em> del área aprenden a respetar los candados y las tarjetas.</li>\n          <li><strong>Inspección periódica</strong> de la aplicación de cada procedimiento por alguien distinto a quien lo ejecuta. La referencia OSHA 1910.147 la exige al menos una vez al año.</li>\n          <li><strong>Integración</strong> con el análisis de trabajo seguro (ATS) y con los permisos de trabajo de alto riesgo.</li>\n        </ul>\n        <p><strong>Indicadores útiles</strong> para el SG-SST: porcentaje de equipos con procedimiento específico; porcentaje de trabajadores autorizados con formación vigente; hallazgos en las inspecciones de LOTO y su cierre; reportes de casi accidentes relacionados con energías peligrosas.</p>\n        <p><strong>La cultura que sostiene el programa.</strong> Todo trabajador tiene la autoridad, y el deber, de detener una tarea si la energía no está controlada, sin represalias. Los supervisores dan ejemplo bloqueando ellos mismos. Y cuando alguien reporta un candado mal puesto, se agradece en lugar de buscar culpables.</p>\n        <p><strong>Lo que esta constancia certifica y lo que no.</strong> Este curso le da la base teórica. Para ser trabajador autorizado en su planta necesita además el entrenamiento práctico con los equipos reales y la autorización de su empleador.</p>\n      ",
        "keyPoints": [
          "El programa incluye procedimiento general, inventario, procedimientos por equipo, dispositivos, capacitación e inspección periódica.",
          "Roles: autorizado (bloquea e interviene), afectado (opera y respeta) y demás personas (no tocan).",
          "Todo trabajador puede detener una tarea si la energía no está controlada, sin represalias."
        ],
        "practice": {
          "q": "En un programa LOTO, ¿qué debe saber un trabajador afectado?",
          "options": [
            "Cómo bloquear todos los puntos de aislamiento de la máquina",
            "Cómo medir la ausencia de tensión con un multímetro",
            "Reconocer un bloqueo y no intentar arrancar un equipo bloqueado"
          ]
        }
      },
      {
        "title": "Cómo se escribe el procedimiento específico de un equipo",
        "content": "\n        <p>El programa LOTO de la empresa dice <em>qué</em> se hace en general. El <strong>procedimiento específico</strong> dice <em>cómo</em> se aísla <strong>una máquina concreta</strong>: cuáles son sus fuentes, dónde está cada punto de aislamiento, con qué dispositivo se bloquea y cómo se comprueba la energía cero. Sin él, cada técnico improvisa, y la improvisación es la que deja una fuente sin bloquear.</p>\n        <p><strong>Cuándo se necesita.</strong> Para todo equipo con más de una fuente de energía, con energía almacenada o con puntos de aislamiento que no se ven desde el sitio de trabajo. En la práctica, casi todos los equipos de una planta lo necesitan.</p>\n        <p><strong>Contenido mínimo de un buen procedimiento:</strong></p>\n        <ol>\n          <li><strong>Identificación del equipo</strong>: nombre, código, ubicación y fotografía general.</li>\n          <li><strong>Inventario de energías</strong>: cada fuente con su tipo y magnitud (por ejemplo, eléctrica 440 V, aire comprimido 6 bar, hidráulica 120 bar, carga suspendida de 300 kg).</li>\n          <li><strong>Puntos de aislamiento</strong>: cada uno numerado, con su ubicación exacta, una foto y una etiqueta física en campo con el mismo número (E-1, N-1, H-1...).</li>\n          <li><strong>Dispositivo de bloqueo</strong> que corresponde a cada punto (candado en seccionador, bloqueo de válvula de bola, bloqueo de breaker...).</li>\n          <li><strong>Liberación de energía residual</strong>: cómo se purga el aire, cómo se alivia la presión hidráulica, cómo se baja o se calza la carga, cuánto tiempo hay que esperar para que se descarguen los capacitores.</li>\n          <li><strong>Verificación de energía cero</strong>: qué se prueba y con qué instrumento en cada fuente.</li>\n          <li><strong>Retiro del bloqueo y reenergización</strong>: orden en que se restablece cada fuente.</li>\n          <li><strong>Firmas</strong>: quién lo elaboró, quién lo revisó y la fecha de la última verificación en campo.</li>\n        </ol>\n        <p><strong>Cómo se elabora bien:</strong></p>\n        <ul>\n          <li>Se hace <strong>en campo, frente al equipo</strong>, con el técnico que más lo conoce y el operador. Los planos ayudan, pero las modificaciones que no quedaron en los planos solo se descubren mirando.</li>\n          <li>Se siguen las tuberías y los cables hasta el punto de aislamiento real. Un error frecuente es bloquear un seccionador que alimenta otra máquina parecida.</li>\n          <li>Se <strong>prueba el procedimiento</strong>: se aplica completo una vez y se verifica que la máquina queda en energía cero.</li>\n          <li>Se escribe con palabras sencillas y fotos, en una o dos páginas, y se deja una copia plastificada en el equipo.</li>\n        </ul>\n        <p><strong>Cuándo se actualiza:</strong> cada vez que se modifica el equipo, se cambia una fuente de energía, se detecta un error al aplicarlo o como resultado de la inspección periódica.</p>\n      ",
        "keyPoints": [
          "El procedimiento específico dice cómo se aísla una máquina concreta: fuentes, puntos, dispositivos, liberación y verificación.",
          "Cada punto de aislamiento se numera, se fotografía y se marca en campo con el mismo código.",
          "Se elabora frente al equipo con quien lo conoce, se prueba completo y se actualiza con cada modificación."
        ],
        "practice": {
          "q": "¿Dónde se elabora el procedimiento LOTO específico de un equipo?",
          "options": [
            "En campo, frente al equipo, con quien mejor lo conoce",
            "En una plantilla genérica que sirve para todos los equipos",
            "En la oficina, a partir del manual del fabricante"
          ]
        }
      },
      {
        "title": "Energías no eléctricas: neumática, hidráulica, vapor, gravedad y resortes",
        "content": "\n        <p>La mayoría de los accidentes LOTO graves en plantas de alimentos, bebidas y empaque no son eléctricos: son <strong>cilindros neumáticos</strong> que se mueven, <strong>prensas hidráulicas</strong> que bajan, <strong>líneas de vapor</strong> o producto que se abren y <strong>cargas</strong> que caen. Bloquear el tablero eléctrico no controla ninguna de ellas.</p>\n        <p><strong>Neumática (aire comprimido):</strong></p>\n        <ul>\n          <li>Se aísla con una <strong>válvula de bloqueo</strong> que, al cerrarse, también <strong>descarga</strong> el aire aguas abajo (válvula de tres vías con escape). Una válvula de bola común cierra pero deja el aire atrapado.</li>\n          <li>Después se verifica que el manómetro marque cero y se acciona el mando del cilindro para confirmar que no se mueve.</li>\n          <li>Atención a los <strong>acumuladores</strong> y a los cilindros que quedan con aire atrapado entre válvulas: pueden moverse al aflojar un racor.</li>\n        </ul>\n        <p><strong>Hidráulica:</strong></p>\n        <ul>\n          <li>Se apaga la bomba y se bloquea su alimentación eléctrica, pero la presión puede seguir en el sistema por los <strong>acumuladores</strong> y por el peso de la carga sobre los cilindros.</li>\n          <li>Se alivia la presión por el procedimiento del fabricante y se verifica con el manómetro.</li>\n          <li>Las partes que pueden bajar por gravedad (platos de prensa, mesas elevadoras) se <strong>bajan a su posición inferior</strong> o se <strong>calzan</strong> con soportes mecánicos diseñados para esa carga.</li>\n        </ul>\n        <p><strong>Vapor, gases y líquidos en tuberías:</strong></p>\n        <ul>\n          <li>El método más seguro es el <strong>doble bloqueo y purga</strong>: dos válvulas cerradas y bloqueadas en serie y una válvula de purga abierta entre ellas, para que una fuga de la primera salga por la purga y no llegue al equipo.</li>\n          <li>Para trabajos dentro de recipientes o con productos peligrosos se usa la <strong>desconexión física</strong>: retirar un tramo de tubería o instalar una <strong>brida ciega</strong>.</li>\n          <li>Antes de abrir, se drena, se despresuriza y se espera a que baje la temperatura.</li>\n        </ul>\n        <p><strong>Gravedad y energía mecánica almacenada:</strong></p>\n        <ul>\n          <li>Cargas suspendidas, contrapesos y partes elevadas se bajan o se aseguran con <strong>calzos, pasadores o soportes</strong> antes de entrar bajo ellos.</li>\n          <li><strong>Resortes</strong> comprimidos o extendidos se liberan con la herramienta y la secuencia del fabricante.</li>\n          <li><strong>Volantes y partes en rotación</strong> se dejan detener por completo; nunca se frenan con la mano o con una herramienta.</li>\n        </ul>\n        <p><strong>La regla:</strong> por cada fuente del inventario debe haber un punto de aislamiento bloqueado <em>y</em> una forma de liberar o contener lo que queda almacenado.</p>\n      ",
        "keyPoints": [
          "Bloquear el tablero no controla el aire, el aceite, el vapor ni la gravedad.",
          "Neumática con válvula que descarga; hidráulica con alivio de presión y calzos; tuberías con doble bloqueo y purga o brida ciega.",
          "Cargas elevadas se bajan o se calzan; resortes se liberan; partes en rotación se dejan detener solas."
        ],
        "practice": {
          "q": "¿Qué válvula aísla correctamente un circuito neumático?",
          "options": [
            "El regulador de presión puesto en el mínimo",
            "Una válvula que cierra y descarga el aire aguas abajo",
            "Cualquier válvula de bola cerrada a mano"
          ]
        }
      },
      {
        "title": "Excepciones: equipos con enchufe, servicio menor y trabajos que necesitan energía",
        "content": "\n        <p>No toda intervención admite un bloqueo completo. Las referencias internacionales (OSHA 1910.147 y ANSI/ASSP Z244.1) reconocen algunas situaciones especiales, pero son <strong>excepciones estrictas</strong>, no atajos.</p>\n        <p><strong>Equipos conectados con enchufe.</strong> Si la única energía es eléctrica y llega por un cable con enchufe, desconectarlo es un aislamiento válido siempre que <strong>el enchufe quede bajo el control exclusivo</strong> de quien interviene: en su mano, a la vista y al alcance, o dentro de una <strong>caja de bloqueo para enchufes</strong> con su candado. Un enchufe desconectado y dejado en el piso, lejos del trabajador, no es un aislamiento.</p>\n        <p><strong>Servicio menor durante la producción.</strong> Algunos ajustes rutinarios, repetitivos e integrales a la producción (por ejemplo, retirar un atasco menor de una envasadora o cambiar una cuchilla con una herramienta especial) pueden hacerse sin LOTO completo <strong>solo si</strong> la empresa demostró, en un análisis escrito, que existen <strong>medidas alternativas que dan una protección equivalente</strong>:</p>\n        <ul>\n          <li>guardas con interbloqueo de seguridad diseñadas y validadas para esa tarea;</li>\n          <li>herramientas que mantienen las manos fuera de la zona de peligro;</li>\n          <li>dispositivos de bloqueo del mando con llave personal (control de acceso por llave atrapada);</li>\n          <li>procedimiento escrito, entrenamiento específico y verificación periódica.</li>\n        </ul>\n        <p>Si la tarea no está en esa lista analizada y aprobada, se aplica LOTO completo. \"Es solo un momento\" no es una excepción.</p>\n        <p><strong>Trabajos que necesitan energía.</strong> Pruebas, ajustes finos, calibraciones y búsqueda de fallas a veces requieren el equipo energizado. En esos casos:</p>\n        <ul>\n          <li>Se hace un <strong>análisis de riesgos</strong> específico y se emite el permiso que corresponda.</li>\n          <li>Solo lo ejecuta <strong>personal calificado</strong>, con el equipo de protección adecuado y las distancias de seguridad del RETIE cuando hay tensión eléctrica.</li>\n          <li>Se energiza solo lo necesario, por el menor tiempo posible, con el área delimitada.</li>\n          <li>Para el resto de la intervención, el equipo vuelve a bloqueo completo.</li>\n        </ul>\n        <p><strong>La interrupción temporal para una prueba</strong> sigue la secuencia del curso: retirar herramientas y personas, retirar bloqueos en orden, energizar y probar, y volver a desenergizar y bloquear antes de seguir trabajando.</p>\n        <p><strong>Lo que nunca es una excepción:</strong> la presión de producción, la falta de candados, que \"el equipo es pequeño\" o que \"el operador está pendiente\".</p>\n      ",
        "keyPoints": [
          "Enchufe desconectado vale como aislamiento solo bajo control exclusivo de quien interviene.",
          "El servicio menor sin LOTO completo exige un análisis escrito con medidas alternativas equivalentes.",
          "Los trabajos con energía requieren análisis, permiso y personal calificado; la presión de producción nunca es excepción."
        ],
        "practice": {
          "q": "¿Cuándo vale desconectar un enchufe como aislamiento?",
          "options": [
            "Siempre que el enchufe quede fuera del tomacorriente",
            "Cuando el equipo es pequeño y la tarea es rápida",
            "Cuando el enchufe queda bajo el control exclusivo de quien interviene"
          ]
        }
      },
      {
        "title": "Inspección periódica, indicadores y cultura LOTO",
        "content": "\n        <p>Un programa LOTO se deteriora sin que nadie lo note: los procedimientos se desactualizan, los candados se pierden, los contratistas llegan sin entrenamiento y los atajos se vuelven costumbre. Por eso el programa incluye <strong>verificación</strong>.</p>\n        <p><strong>Inspección periódica de los procedimientos.</strong> La referencia OSHA 1910.147 exige revisar cada procedimiento <strong>al menos una vez al año</strong>, observando a un trabajador mientras lo aplica. El inspector (una persona autorizada distinta de quien ejecuta) verifica:</p>\n        <ul>\n          <li>que el procedimiento escrito corresponda al equipo real;</li>\n          <li>que se aíslen todas las fuentes y se verifique la energía cero;</li>\n          <li>que el trabajador conozca sus responsabilidades;</li>\n          <li>que se registren las desviaciones y se corrijan.</li>\n        </ul>\n        <p>La inspección queda registrada con el equipo, la fecha, los participantes y el inspector.</p>\n        <p><strong>Indicadores útiles para la planta:</strong></p>\n        <ul>\n          <li>porcentaje de equipos con procedimiento específico vigente;</li>\n          <li>porcentaje de procedimientos inspeccionados en el año;</li>\n          <li>personal autorizado y afectado entrenado (incluidos contratistas);</li>\n          <li>desviaciones encontradas en observaciones de campo y cuántas se cerraron;</li>\n          <li>incidentes y casi accidentes con energía peligrosa.</li>\n        </ul>\n        <p><strong>Errores más comunes que se encuentran en campo:</strong> candados compartidos o sin nombre; llaves maestras de uso cotidiano; bloquear el mando en lugar del aislamiento; no verificar la energía cero; olvidar la energía neumática o la gravedad; procedimientos genéricos que sirven para \"todas las máquinas\"; y retiro de candados ajenos sin el procedimiento formal.</p>\n        <p><strong>Investigar los casi accidentes.</strong> Un arranque inesperado que no lesionó a nadie, un candado encontrado abierto o una fuente que no estaba en el procedimiento son señales tempranas. Se reportan e investigan buscando la causa en el sistema (procedimiento, entrenamiento, dispositivos, presión de producción), no solo en la persona.</p>\n        <p><strong>Cultura.</strong> El programa funciona cuando:</p>\n        <ul>\n          <li>los supervisores aplican LOTO ellos mismos y nunca piden saltarlo;</li>\n          <li>cualquier trabajador puede detener una intervención insegura sin represalias;</li>\n          <li>la producción planea las paradas con el tiempo de bloqueo incluido;</li>\n          <li>los candados y dispositivos están disponibles y en buen estado en el punto de uso.</li>\n        </ul>\n      ",
        "keyPoints": [
          "Cada procedimiento se inspecciona al menos una vez al año, observando su aplicación real.",
          "Indicadores: procedimientos vigentes e inspeccionados, personal entrenado, desviaciones cerradas e incidentes.",
          "La cultura se construye con supervisores que lo cumplen, autoridad para detener y paradas planeadas con el tiempo de bloqueo."
        ],
        "practice": {
          "q": "¿Con qué frecuencia mínima se inspecciona cada procedimiento LOTO según OSHA 1910.147?",
          "options": [
            "Al menos una vez al año",
            "Cada cinco años",
            "Solo cuando ocurre un accidente"
          ]
        }
      }
    ],
    "scenarios": [
      {
        "scenario": "Vas a revisar una banda transportadora que se atascó. El operador de turno dice que ya apagaste el botón de paro, pero no ves candados en el tablero. Tu compañero te apura: \"es un atasco rápido, no hace falta bloquear\".",
        "options": [
          "Acepto: el botón de paro ya detuvo la banda, así que puedo intervenir.",
          "Pido al operador que espere, aíslo el seccionador, pongo mi candado y mi tarjeta, y verifico energía cero antes de meter las manos.",
          "Intervengo rápido sin bloquear, pero le aviso al operador por radio que no toque nada."
        ]
      },
      {
        "scenario": "Estás en un cambio de turno. Tu compañero que entra aún no tiene su candado puesto en la prensa hidráulica, y tú ya quieres retirar el tuyo para irte.",
        "options": [
          "Retiro mi candado y le digo que ponga el suyo cuando llegue a la prensa.",
          "Mantengo mi candado hasta que mi compañero ponga el suyo, y registramos el relevo por escrito.",
          "Dejo la llave puesta en mi candado para que él lo retire cuando ponga el suyo."
        ]
      },
      {
        "scenario": "Al verificar energía cero en una prensa, presionas el arranque y nada se mueve. Sin embargo, el manómetro del acumulador hidráulico marca 1.500 psi.",
        "options": [
          "Como la máquina no arrancó, la considero segura y empiezo el mantenimiento.",
          "Detengo la intervención, descargo el acumulador según el procedimiento y verifico de nuevo que el manómetro marque cero.",
          "Abro también el tablero principal de la planta y considero que así queda todo sin energía."
        ]
      },
      {
        "scenario": "Llegan dos técnicos de un contratista a cambiar un reductor en la línea de envasado, que ya está bloqueada por tu equipo con una caja de bloqueo grupal. Dicen que no trajeron candados porque \"la línea ya está bloqueada por ustedes\".",
        "options": [
          "Los dejo trabajar: la caja ya tiene los candados de mi equipo, así que la línea está protegida.",
          "Les entrego candados personales controlados, los instruyo y cada uno pone el suyo en la caja antes de empezar.",
          "Les pido que trabajen solo mientras mi equipo esté presente en la línea, para que estén cubiertos."
        ]
      },
      {
        "scenario": "Terminaste de ajustar los sensores de una llenadora y necesitas probar si quedaron bien. La máquina está bloqueada y tu compañero sugiere poner un puente en el tablero para energizar solo el sensor sin quitar los candados.",
        "options": [
          "Pongo el puente: así la máquina sigue bloqueada mientras pruebo el sensor.",
          "Despejo el área, recojo herramientas, retiro los bloqueos según el procedimiento, energizo y pruebo; después vuelvo a bloquear y verificar.",
          "Retiro solo mi candado para probar rápido y lo vuelvo a poner sin verificar de nuevo."
        ]
      },
      {
        "scenario": "Debes cambiar un sello en una prensa hidráulica. Bloqueaste el seccionador de la bomba y el plato superior quedó arriba. Un compañero dice que \"ya no hay energía porque la bomba está bloqueada\".",
        "options": [
          "Entro a cambiar el sello: la bomba está bloqueada.",
          "Bajo el plato a su posición inferior o lo calzo con soportes diseñados, alivio la presión, verifico el manómetro en cero y después entro.",
          "Pongo un madero cualquiera bajo el plato y entro."
        ]
      },
      {
        "scenario": "Vas a destapar una boquilla en una línea neumática. La válvula de entrada de aire es de bola y ya la cerraste y bloqueaste con candado. El manómetro aguas abajo todavía marca 5 bar.",
        "options": [
          "Aflojo el racor con cuidado para que salga el aire.",
          "Trabajo igual: la válvula ya está bloqueada.",
          "Descargo el aire por la válvula de purga prevista, verifico el manómetro en cero y acciono el mando para confirmar que nada se mueve."
        ]
      },
      {
        "scenario": "Un operador retira un atasco de la envasadora metiendo la mano con la máquina en pausa, \"como siempre\". No existe un análisis de servicio menor para esa tarea.",
        "options": [
          "Detengo la tarea y explico que, sin un análisis aprobado con medidas equivalentes, se aplica LOTO completo. Reporto la situación para analizarla.",
          "Lo dejo seguir porque es una tarea rutinaria de producción.",
          "Le pido que lo haga más rápido para estar menos tiempo expuesto."
        ]
      },
      {
        "scenario": "Vas a reparar un taladro de banco que se conecta con enchufe. Lo desconectas y dejas el enchufe en el piso, al otro lado de la mesa, mientras trabajas de espaldas.",
        "options": [
          "Está bien: el enchufe está fuera del tomacorriente.",
          "Mantengo el enchufe bajo mi control exclusivo, a la vista y al alcance, o lo meto en una caja de bloqueo para enchufes con mi candado.",
          "Pongo un aviso de \"no conectar\" en el tomacorriente."
        ]
      },
      {
        "scenario": "En la inspección anual, observas a un técnico aplicando el procedimiento de una llenadora. El procedimiento no menciona una línea de aire que se instaló el año pasado, y el técnico no la bloquea.",
        "options": [
          "Lo anoto para el informe del próximo año.",
          "Le digo al técnico que la bloquee esta vez y no cambio el procedimiento.",
          "Detengo la intervención hasta bloquear la línea, registro la desviación y se actualiza y prueba el procedimiento antes de volver a usarlo."
        ]
      }
    ],
    "exam": [
      {
        "q": "Un técnico detiene una máquina con el botón de paro y empieza a revisarla. ¿Qué afirmación es correcta?",
        "options": [
          "El botón de paro controla la máquina, pero no aísla la energía; se requiere aislamiento y bloqueo.",
          "El botón de paro es suficiente si el operador fue avisado y la máquina permanece quieta durante toda la revisión.",
          "El botón de paro de emergencia sí aísla la energía, a diferencia del pulsador normal de parada de la máquina."
        ]
      },
      {
        "q": "¿Cuál de estas tareas requiere aplicar LOTO?",
        "options": [
          "Operar la máquina con todas sus guardas instaladas.",
          "Retirar una guarda para desatascar un producto en una zona de atrapamiento.",
          "Revisar desde afuera de las guardas que la máquina esté produciendo dentro de la velocidad indicada."
        ]
      },
      {
        "q": "Según la jerarquía de controles del Decreto 1072 de 2015, ¿qué tipo de control es un programa LOTO?",
        "options": [
          "Un elemento de protección personal, porque cada trabajador lleva su propio candado en el cinturón.",
          "Una eliminación del peligro, porque la energía desaparece de la planta mientras dura el trabajo.",
          "Una combinación de control de ingeniería (los dispositivos) y control administrativo (el procedimiento)."
        ]
      },
      {
        "q": "En un trabajo eléctrico sin tensión, ¿qué exige el RETIE?",
        "options": [
          "Aplicar las cinco reglas de oro, con personal calificado y autorizado.",
          "Que cualquier trabajador abra el tablero con guantes.",
          "Desconectar el pulsador de arranque y colocar una tarjeta de advertencia en la puerta del tablero."
        ]
      },
      {
        "q": "En una prensa hidráulica bloqueada, ¿por qué no basta con confirmar que el motor eléctrico está aislado?",
        "options": [
          "Porque el motor puede volver a encenderse solo cuando la bomba recupera la presión del sistema.",
          "Porque puede quedar presión atrapada en acumuladores y líneas, que se debe liberar y medir.",
          "Porque el aceite hidráulico conduce electricidad y puede energizar la estructura de la prensa."
        ]
      },
      {
        "q": "Una compuerta pesada está levantada y sostenida por un cilindro neumático. ¿Cómo se controla esa energía antes de intervenir?",
        "options": [
          "Se deja sostenida por el cilindro, que es seguro si el manómetro marca presión estable.",
          "Se cierra la válvula de aire del cilindro para que la presión quede atrapada y la sostenga.",
          "Se baja a su posición de reposo o se sostiene con soportes mecánicos diseñados para ese peso."
        ]
      },
      {
        "q": "¿Dónde se coloca el candado de bloqueo?",
        "options": [
          "En el punto de aislamiento, como el seccionador o la válvula.",
          "En el botón de parada de emergencia.",
          "En la pantalla del PLC, con el equipo en modo de mantenimiento seleccionado."
        ]
      },
      {
        "q": "¿Cuál es la regla de oro de los candados LOTO?",
        "options": [
          "Un candado por máquina, cuya llave guarda el supervisor de turno en la oficina de mantenimiento.",
          "Una persona, un candado personal y una sola llave que lleva consigo.",
          "Un candado por cuadrilla, con copias de la llave."
        ]
      },
      {
        "q": "Un punto de aislamiento no admite candado y solo se puede poner una tarjeta. ¿Qué es lo correcto?",
        "options": [
          "Trabajar sin tarjeta ni candado, porque si no se puede bloquear el procedimiento LOTO no aplica.",
          "Considerar que la tarjeta protege igual que el candado, porque advierte a todo el personal.",
          "Instalar un dispositivo que admita candado y, mientras tanto, aplicar las medidas adicionales del procedimiento."
        ]
      },
      {
        "q": "¿Cuál es el orden correcto de los primeros pasos del procedimiento LOTO?",
        "options": [
          "Preparar, apagar, aislar, y luego bloquear y etiquetar cada punto de aislamiento identificado.",
          "Aislar con el equipo en marcha, apagar desde el control y después preparar los dispositivos.",
          "Etiquetar el tablero, verificar energía cero y por último apagar la máquina desde su control."
        ]
      },
      {
        "q": "Después de bloquear, ¿cómo se verifica la energía cero?",
        "options": [
          "Preguntando al supervisor y esperando su confirmación verbal por radio antes de empezar.",
          "Intentando arrancar desde todos los controles, regresándolos a apagado y midiendo con instrumento.",
          "Mirando que el piloto del tablero esté apagado y que la máquina no haga ruido."
        ]
      },
      {
        "q": "Al terminar el mantenimiento, ¿quién retira cada candado?",
        "options": [
          "El supervisor retira todos los candados con la llave maestra para entregar el equipo más rápido.",
          "El operador de producción, que necesita el equipo y conoce la secuencia de arranque de la máquina.",
          "Cada trabajador retira su propio candado, después de inspeccionar el área y avisar al personal."
        ]
      },
      {
        "q": "Durante un cambio de turno, el trabajador que sale quiere retirar su candado antes de que llegue el relevo. ¿Qué debe hacer?",
        "options": [
          "Mantenerlo hasta que el relevo haya puesto su propio candado, y registrar el relevo.",
          "Retirarlo, porque su turno terminó y el relevo ya está en la planta y puede ver la máquina.",
          "Dejar el candado sin cerrar para que el relevo lo retire cuando ponga el suyo."
        ]
      },
      {
        "q": "Un compañero no llegó a su turno y dejó su candado en un tablero que se necesita. ¿Cómo se retira?",
        "options": [
          "Cualquier trabajador lo corta si el compañero ya no está en la planta y el turno cerró.",
          "Con el procedimiento documentado de retiro de emergencia, verificando que no esté en el área.",
          "El supervisor lo retira con una autorización verbal del jefe de planta, sin dejar registro escrito."
        ]
      },
      {
        "q": "Un contratista llega a hacer una reparación en una línea con bloqueo grupal activo. ¿Qué debe hacer antes de intervenir?",
        "options": [
          "Trabajar protegido por los candados del personal de planta, mientras ese personal esté presente.",
          "Esperar a que el supervisor le diga verbalmente que puede entrar sin poner ningún candado.",
          "Recibir instrucción y poner su propio candado personal en la caja de bloqueo grupal."
        ]
      },
      {
        "q": "En un programa LOTO, ¿qué es un trabajador afectado?",
        "options": [
          "Quien opera la máquina pero no la interviene; debe reconocer un bloqueo y no intentar arrancarla.",
          "Quien bloquea e interviene la máquina, y por eso necesita la formación completa y la práctica en sitio.",
          "Quien sufrió un accidente con energías peligrosas y está en proceso de reintegro a sus labores."
        ]
      },
      {
        "q": "¿Qué diferencia al procedimiento específico del programa LOTO de la empresa?",
        "options": [
          "Que solo se usa para equipos eléctricos de alta tensión.",
          "Que dice cómo se aísla una máquina concreta.",
          "Que lo firma la gerencia general de la empresa."
        ]
      },
      {
        "q": "¿Por qué cada punto de aislamiento se marca en campo con un código?",
        "options": [
          "Para cumplir con el reglamento de señalización vial interna.",
          "Para que el inventario contable de la planta cuadre.",
          "Para que coincida con el procedimiento escrito."
        ]
      },
      {
        "q": "Una prensa hidráulica tiene la bomba bloqueada y el plato arriba. ¿Qué falta?",
        "options": [
          "Bajar o calzar el plato y aliviar la presión.",
          "Nada: con la bomba bloqueada no hay energía en la prensa.",
          "Poner un aviso de peligro en el tablero de la bomba."
        ]
      },
      {
        "q": "¿Qué es el doble bloqueo y purga?",
        "options": [
          "Purgar la línea dos veces antes de cerrar una válvula.",
          "Dos válvulas bloqueadas y una purga abierta entre ellas.",
          "Dos candados del mismo trabajador en un solo seccionador."
        ]
      },
      {
        "q": "¿Cuándo se usa una brida ciega o se retira un tramo de tubería?",
        "options": [
          "Solo cuando la línea transporta agua a temperatura ambiente y baja presión.",
          "Cuando la válvula de bloqueo es nueva y no se conoce su estado.",
          "Para trabajos dentro de recipientes o con productos peligrosos."
        ]
      },
      {
        "q": "Un equipo con enchufe se desconecta y el enchufe queda en el piso, lejos del trabajador. ¿Es un aislamiento válido?",
        "options": [
          "No: el enchufe debe quedar bajo su control exclusivo.",
          "Sí, porque el enchufe está fuera del tomacorriente.",
          "Sí, si el trabajador lo desconectó y lo dejó él mismo en el piso."
        ]
      },
      {
        "q": "¿Qué se necesita para hacer un servicio menor sin LOTO completo?",
        "options": [
          "Que el operador más antiguo de la línea esté presente.",
          "Un análisis escrito con medidas de protección equivalentes.",
          "Que la tarea tome menos de cinco minutos y sea de rutina en la línea."
        ]
      },
      {
        "q": "¿Quién hace la inspección periódica de un procedimiento LOTO?",
        "options": [
          "Un proveedor de candados, cuando vende dispositivos nuevos.",
          "El mismo trabajador que lo aplica, al final de su turno.",
          "Una persona autorizada distinta, observando su aplicación."
        ]
      }
    ],
    "workshops": [
      {
        "title": "Taller 1. Un caso en su planta",
        "prompt": "Piense en su planta. Este taller no tiene respuesta única: se trata de aplicar el módulo a lo que usted ve en su trabajo.",
        "fields": [
          {
            "label": "Describa una intervención en su planta en la que alguien detuvo una máquina solo con el botón de paro o con el mando, sin aislar la energía.",
            "help": "Equipo, tarea y qué se hizo. Si no lo ha visto, describa la tarea donde más fácil sería que ocurriera.",
            "minWords": 30
          },
          {
            "label": "¿Qué pudo haber reenergizado el equipo mientras la persona estaba expuesta?",
            "help": "Otra persona, un automatismo, un temporizador, energía almacenada...",
            "minWords": 25
          },
          {
            "label": "¿Qué tendría que haberse hecho distinto, según lo visto en el módulo?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 2. ¿Qué exige la norma en su empresa?",
        "prompt": "Relacione el marco normativo con los documentos y responsabilidades reales de su empresa.",
        "fields": [
          {
            "label": "¿Dónde aparece hoy el riesgo de energías peligrosas en el SG-SST de su empresa (matriz de peligros, programa, procedimientos)?",
            "help": "Si no aparece, dígalo y diga dónde debería estar.",
            "minWords": 25
          },
          {
            "label": "¿Quién es responsable en su empresa de autorizar, aplicar y verificar los bloqueos?",
            "help": "Cargos, no nombres.",
            "minWords": 25
          },
          {
            "label": "Mencione una brecha entre lo que exige la norma y lo que se hace hoy, y cómo la cerraría.",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 3. Inventario de energías de un equipo",
        "prompt": "Escoja un equipo real que usted interviene o conoce. Lo usará también en el proyecto final.",
        "fields": [
          {
            "label": "Nombre y ubicación del equipo, y qué tarea de mantenimiento o limpieza se le hace.",
            "help": "",
            "minWords": 15
          },
          {
            "label": "Liste todas sus fuentes de energía con su tipo y, si la conoce, su magnitud.",
            "help": "Eléctrica, neumática, hidráulica, vapor, gravedad, resortes, térmica, química, rotación...",
            "minWords": 30
          },
          {
            "label": "¿Cuál de esas energías puede quedar almacenada después de apagar, y dónde?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 4. Dispositivos para su equipo",
        "prompt": "Con el equipo del taller anterior, defina qué dispositivo de bloqueo necesita cada punto de aislamiento.",
        "fields": [
          {
            "label": "Para cada punto de aislamiento, indique el dispositivo de bloqueo adecuado.",
            "help": "Candado en seccionador, bloqueo de breaker, bloqueo de válvula de bola, de compuerta, caja para enchufe...",
            "minWords": 30
          },
          {
            "label": "¿Hay algún punto que hoy no se pueda bloquear con candado? ¿Qué haría?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Cómo están identificados hoy los candados personales en su planta y qué mejoraría?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 5. Los 6 pasos en su equipo",
        "prompt": "Escriba cómo aplicaría los 6 pasos del procedimiento a su equipo.",
        "fields": [
          {
            "label": "Pasos 1 y 2: preparación y aviso. ¿A quién avisa y cómo apaga el equipo?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "Pasos 3 y 4: aislamiento y bloqueo. ¿En qué orden aísla y bloquea cada fuente?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "Pasos 5 y 6: energía residual y verificación. ¿Qué libera y cómo verifica?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 6. Verificación y retiro del bloqueo",
        "prompt": "La verificación de energía cero es el paso que más se omite. Concrétela para su equipo.",
        "fields": [
          {
            "label": "Describa cómo comprobaría que cada fuente quedó en cero (prueba de arranque, manómetros, medición).",
            "help": "Recuerde regresar el mando a apagado después de la prueba de arranque.",
            "minWords": 30
          },
          {
            "label": "Antes de retirar los bloqueos, ¿qué revisa en el equipo y en el área?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿En qué orden reenergiza las fuentes y por qué?",
            "help": "",
            "minWords": 15
          }
        ]
      },
      {
        "title": "Taller 7. Bloqueo grupal y cambio de turno",
        "prompt": "Aplique los casos especiales a la organización real de su planta.",
        "fields": [
          {
            "label": "Describa una intervención en su planta en la que participen varias personas o varios oficios. ¿Cómo organizaría el bloqueo grupal?",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Cómo se entregaría el bloqueo si la intervención pasa de un turno a otro?",
            "help": "Sin que el equipo quede ni un momento sin bloqueo.",
            "minWords": 25
          },
          {
            "label": "¿Cómo se integran hoy los contratistas al LOTO de su planta y qué cambiaría?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 8. El programa LOTO de su empresa",
        "prompt": "Evalúe el programa de su empresa con los elementos del módulo.",
        "fields": [
          {
            "label": "¿Qué elementos del programa existen hoy en su empresa y cuáles faltan?",
            "help": "Política, inventario, procedimientos específicos, dispositivos, entrenamiento, inspección, contratistas.",
            "minWords": 30
          },
          {
            "label": "¿Cuál sería el primer elemento que implementaría o mejoraría y por qué?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Qué obstáculo real espera encontrar y cómo lo manejaría?",
            "help": "Presupuesto, producción, cultura, contratistas...",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 9. Puntos de aislamiento en campo",
        "prompt": "Prepare el levantamiento en campo de su equipo, como si fuera a escribir su procedimiento.",
        "fields": [
          {
            "label": "Liste los puntos de aislamiento de su equipo con un código (E-1, N-1, H-1...) y su ubicación exacta.",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Qué punto sería más fácil de confundir o de olvidar, y cómo lo evitaría?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Con quién elaboraría y probaría el procedimiento en campo?",
            "help": "Cargos.",
            "minWords": 15
          }
        ]
      },
      {
        "title": "Taller 10. Energías no eléctricas",
        "prompt": "Revise las energías no eléctricas de su planta.",
        "fields": [
          {
            "label": "Describa un equipo de su planta con energía neumática, hidráulica, de vapor o gravitacional. ¿Cómo se aísla hoy?",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Cómo se libera o se contiene su energía almacenada? Si hoy no se hace, ¿cómo debería hacerse?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Qué dispositivo o modificación haría falta (válvula con descarga, calzo, brida ciega...)?",
            "help": "",
            "minWords": 15
          }
        ]
      },
      {
        "title": "Taller 11. Excepciones en su planta",
        "prompt": "Identifique dónde se están usando excepciones, con o sin análisis.",
        "fields": [
          {
            "label": "¿Qué tareas se hacen hoy en su planta sin LOTO completo \"porque son rápidas\"?",
            "help": "Atascos, limpiezas, ajustes, cambios de formato...",
            "minWords": 25
          },
          {
            "label": "Para una de ellas, ¿qué medida alternativa daría una protección equivalente?",
            "help": "Guarda con interbloqueo, herramienta, llave atrapada...",
            "minWords": 25
          },
          {
            "label": "Si no hay medida equivalente, ¿cómo se haría con LOTO completo sin frenar la producción?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 12. Cómo verificar que el programa funciona",
        "prompt": "Diseñe la verificación del programa LOTO de su planta.",
        "fields": [
          {
            "label": "Proponga tres indicadores para su planta y cómo los mediría.",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Cómo haría la inspección anual de un procedimiento? ¿Quién la haría y qué registraría?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Qué haría el supervisor de su área para que LOTO se cumpla sin presión en contra?",
            "help": "",
            "minWords": 25
          }
        ]
      }
    ],
    "project": {
      "title": "Proyecto final: procedimiento LOTO de un equipo de su planta",
      "intro": "Escriba el procedimiento específico de bloqueo del equipo que trabajó en los talleres. Debe poder usarlo un técnico que no conoce la máquina. No es un ejercicio de memoria: use lo que levantó en los talleres y, si puede, compruébelo frente al equipo. Antes de aplicarlo en campo, su empresa debe revisarlo y aprobarlo.",
      "sections": [
        {
          "label": "1. Identificación del equipo y alcance",
          "help": "Nombre, código, ubicación, tareas que cubre el procedimiento y personal autorizado.",
          "minWords": 40
        },
        {
          "label": "2. Inventario de energías y puntos de aislamiento",
          "help": "Cada fuente con su tipo, magnitud, código del punto (E-1, N-1...), ubicación y dispositivo de bloqueo.",
          "minWords": 60
        },
        {
          "label": "3. Secuencia de apagado, aislamiento y bloqueo",
          "help": "Paso a paso, en orden, incluido el aviso a los afectados.",
          "minWords": 60
        },
        {
          "label": "4. Liberación de energía residual y verificación de energía cero",
          "help": "Qué se libera, cómo, y cómo se comprueba cada fuente.",
          "minWords": 60
        },
        {
          "label": "5. Retiro del bloqueo y reenergización",
          "help": "Revisión del área, retiro de dispositivos, orden de reenergización y aviso.",
          "minWords": 45
        },
        {
          "label": "6. Casos especiales de este equipo",
          "help": "Bloqueo grupal, cambio de turno, pruebas con energía o tareas de servicio menor, si aplican.",
          "minWords": 40
        }
      ],
      "rubric": [
        "Están todas las fuentes de energía del equipo, no solo la eléctrica.",
        "Cada punto de aislamiento tiene código, ubicación y dispositivo de bloqueo.",
        "La energía residual tiene una forma concreta de liberarse o contenerse.",
        "La verificación de energía cero dice qué se prueba y cómo, en cada fuente.",
        "El retiro del bloqueo incluye la revisión del área y el aviso a los afectados.",
        "Un técnico que no conoce el equipo podría seguirlo sin preguntar."
      ]
    }
  },
  {
    "id": "trabajo-caliente",
    "title": "Seguridad en Trabajo en Caliente",
    "hours": 4,
    "category": "prevencion_sst",
    "regulation": "Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979; referencia: NFPA 51B",
    "legalNotice": "Formación teórica en prevención de incendios y explosiones durante trabajos en caliente. No reemplaza el permiso de trabajo de la empresa, el entrenamiento práctico con el detector de gases ni la autorización de quien aprueba el permiso.",
    "summary": "Por qué el trabajo en caliente causa incendios, quién responde por él, cómo evaluar el área y medir gases, cómo preparar recipientes, el permiso, los controles durante el trabajo y la vigilancia posterior; además, paneles y aislamientos combustibles, equipos de oxicorte y arco, áreas designadas y sistemas contra incendio, y cómo auditar el programa. Incluye talleres aplicados a su planta y un proyecto final.",
    "fieldCase": "Al cortar con pulidora una tubería \"aparentemente vacía\", los vapores residuales de un solvente dentro del ducto alcanzaron el rango inflamable y provocaron una explosión que lanzó la tapa de la tubería contra el técnico.",
    "checklist": [
      "Evalué si el trabajo se puede hacer en frío o llevar la pieza al taller.",
      "Retiré o protegí con mantas ignífugas los combustibles en un radio de 11 metros, incluidos los niveles inferiores.",
      "Tapé aberturas, rejillas y ductos por donde puedan pasar chispas.",
      "Tuberías y recipientes: aislados, vaciados, limpios, purgados y medidos.",
      "Medí la atmósfera con un detector verificado y la medición quedó en el permiso.",
      "El permiso está firmado por quien autoriza, vigente y visible en el sitio.",
      "Hay un vigía de fuego dedicado, con extintor adecuado y medio de alarma.",
      "Al terminar, el vigía permanece al menos 60 minutos y el área se inspecciona antes de cerrar el permiso."
    ],
    "failureAnalysis": "Falla raíz: no se aisló, limpió ni purgó la tubería, y no se midió la atmósfera inflamable antes de cortar. Se confió en que \"estaba vacía\".",
    "onSiteClosure": "Práctica en su empresa: diligenciar un permiso de trabajo en caliente real con quien autoriza, verificar el detector de gases con una prueba de respuesta, medir la atmósfera del área y participar como vigía durante y después de un trabajo supervisado.",
    "image": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    "modules": [
      {
        "title": "Qué es el trabajo en caliente y por qué causa incendios",
        "content": "\n        <p><strong>Trabajo en caliente</strong> es toda actividad que produce llamas, chispas o calor suficiente para encender un material: soldadura por arco y con gas, oxicorte, corte y esmerilado con pulidora, uso de sopletes, termofusión, calentamiento de piezas y algunos trabajos de impermeabilización con llama.</p>\n        <p><strong>Cómo se produce el fuego.</strong> Para que haya fuego se necesitan tres elementos al mismo tiempo: <strong>combustible</strong> (cartón, madera, plástico, polvo, vapores de solventes, gas), <strong>oxígeno</strong> (el del aire es suficiente) y una <strong>fuente de calor</strong>. El trabajo en caliente aporta la fuente de calor en un lugar donde casi siempre hay combustible y oxígeno. Cuando además se mantiene la reacción en cadena, se habla del tetraedro del fuego.</p>\n        <p><strong>Por qué es tan traicionero:</strong></p>\n        <ul>\n          <li><strong>Las chispas viajan lejos.</strong> Las partículas de esmerilado y la escoria de oxicorte pueden recorrer más de 10 metros, rebotar y caer por rejillas, grietas o ductos a otros pisos.</li>\n          <li><strong>El calor se conduce.</strong> Una tubería o una pared metálica calentada puede encender un material que está al otro lado, fuera de la vista del soldador.</li>\n          <li><strong>El fuego puede empezar tarde.</strong> Una escoria caliente dentro de un cartón, un aislamiento o una pila de trapos puede arder sin llama durante decenas de minutos antes de que aparezca el incendio, cuando ya todos se fueron.</li>\n          <li><strong>Los vapores no se ven.</strong> Un tanque, una tubería o un drenaje con residuos de combustible puede contener una mezcla explosiva aunque parezca vacío y limpio.</li>\n        </ul>\n        <p><strong>Dónde ocurre la mayoría de los accidentes.</strong> No en el taller de soldadura, que está preparado para eso, sino en las intervenciones de mantenimiento <em>fuera</em> del taller: en bodegas, techos, cuartos técnicos, tanques y líneas de proceso. Ahí es donde el procedimiento de trabajo en caliente es obligatorio.</p>\n        <p><strong>Las consecuencias</strong> van desde quemaduras del trabajador hasta incendios que destruyen una planta, explosiones de tanques y tuberías, e intoxicaciones por humo. Casi siempre se habría evitado con controles sencillos: retirar el combustible, medir la atmósfera y mantener un vigía después del trabajo.</p>\n      ",
        "keyPoints": [
          "Trabajo en caliente: soldar, oxicortar, esmerilar, usar soplete o cualquier actividad con llamas, chispas o calor.",
          "Las chispas viajan más de 10 metros, el calor se conduce por metales y el fuego puede empezar mucho después.",
          "Un recipiente \"vacío\" puede tener vapores explosivos que no se ven."
        ],
        "practice": {
          "q": "¿Cuáles son los tres elementos que se necesitan al mismo tiempo para que haya fuego?",
          "options": [
            "Agua, aire y metal",
            "Combustible, oxígeno y una fuente de calor",
            "Humo, cenizas y electricidad"
          ]
        }
      },
      {
        "title": "Marco normativo y roles del trabajo en caliente",
        "content": "\n        <p><strong>En Colombia</strong>, la obligación de controlar este riesgo viene del <strong>Decreto 1072 de 2015</strong> (identificar peligros y aplicar controles en el SG-SST) y de la <strong>Resolución 0312 de 2019</strong>, que pide procedimientos e instructivos para las tareas de alto riesgo. La <strong>Resolución 2400 de 1979</strong> (Estatuto de Seguridad Industrial) contiene disposiciones sobre soldadura y sobre prevención y extinción de incendios en los lugares de trabajo. Cada empresa concreta estas obligaciones en su <strong>procedimiento y permiso de trabajo en caliente</strong>.</p>\n        <p><strong>La referencia técnica</strong> más usada es la norma <strong>NFPA 51B</strong> (prevención de incendios durante soldadura, corte y otros trabajos en caliente), de la Asociación Nacional de Protección contra el Fuego de Estados Unidos. No es una ley colombiana, pero la exigen muchas aseguradoras y clientes multinacionales.</p>\n        <p><strong>Los tres roles</strong> que define la NFPA 51B, y que conviene adoptar:</p>\n        <ul>\n          <li><strong>Quien autoriza el permiso</strong> (en inglés, <em>PAI</em>): persona designada por la empresa que evalúa el área, decide si el trabajo se puede hacer, define las precauciones y firma el permiso. También decide cuánto tiempo adicional de monitoreo se necesita al terminar.</li>\n          <li><strong>El ejecutante</strong> (operador del trabajo en caliente): hace el trabajo, cumple las condiciones del permiso y detiene la tarea si las condiciones cambian.</li>\n          <li><strong>El vigía de fuego</strong>: observa el área durante el trabajo y después de terminado, con un extintor y un medio para dar la alarma. <strong>No hace otras tareas</strong>: no sostiene piezas, no va por herramientas, no ayuda a soldar.</li>\n        </ul>\n        <p><strong>Responsabilidades de la empresa:</strong> definir áreas permitidas (talleres) y áreas que requieren permiso; designar y capacitar a quienes autorizan, ejecutan y vigilan; y asegurarse de que los contratistas conozcan y cumplan el procedimiento.</p>\n        <p><strong>Contratistas.</strong> Un contratista que llega a soldar en la planta trabaja con el permiso de la empresa anfitriona, que conoce los peligros del lugar. El contratista aporta su personal calificado y su equipo en buen estado, pero no decide solo dónde y cómo hacer el trabajo.</p>\n      ",
        "keyPoints": [
          "Decreto 1072 de 2015 y Res. 0312 de 2019 exigen controlar las tareas de alto riesgo con procedimientos; la NFPA 51B es la referencia técnica.",
          "Tres roles: quien autoriza el permiso, el ejecutante y el vigía de fuego.",
          "El vigía de fuego no hace otras tareas mientras vigila."
        ],
        "practice": {
          "q": "En la NFPA 51B, ¿qué hace la persona que autoriza el permiso?",
          "options": [
            "Ejecuta la soldadura y sostiene las piezas",
            "Vende los equipos de soldadura a la empresa",
            "Evalúa el área, define las precauciones y firma el permiso"
          ]
        }
      },
      {
        "title": "Evaluar el área y buscar alternativas en frío",
        "content": "\n        <p><strong>La primera pregunta</strong> antes de cualquier trabajo en caliente es: <em>¿hay que hacerlo en caliente y aquí?</em> La forma más segura de controlar el riesgo es no generarlo.</p>\n        <ul>\n          <li><strong>Llevar la pieza al taller</strong>, que es un área preparada para trabajo en caliente.</li>\n          <li><strong>Usar métodos en frío</strong>: cortatubos, sierras manuales o hidráulicas, uniones roscadas, bridadas o con acoples mecánicos, adhesivos industriales.</li>\n          <li><strong>Reprogramar</strong> el trabajo para cuando el área esté sin producción ni materiales inflamables.</li>\n        </ul>\n        <p><strong>Si el trabajo sí debe hacerse en sitio</strong>, quien autoriza recorre el área con el ejecutante y revisa:</p>\n        <ul>\n          <li><strong>Combustibles en un radio de 11 metros</strong> (35 pies, la distancia de referencia de la NFPA 51B): cartón, estibas de madera, plásticos, trapos con aceite, polvo acumulado, aislamientos, recipientes con químicos. Se retiran; lo que no se puede mover se cubre con <strong>mantas ignífugas</strong> o se protege con barreras.</li>\n          <li><strong>Aberturas</strong>: rejillas de piso, grietas, huecos en paredes, ductos y canaletas de cables por donde las chispas puedan pasar a otro espacio. Se tapan con material incombustible.</li>\n          <li><strong>El otro lado</strong>: qué hay detrás de la pared, debajo del piso o encima del techo que se va a calentar. Si hay combustibles, se ubica un segundo vigía en ese lado.</li>\n          <li><strong>Pisos combustibles</strong>: se barren, se humedecen o se protegen.</li>\n          <li><strong>Atmósfera</strong>: si cerca hay tanques, drenajes, tuberías de gas o procesos con solventes, se mide (módulo siguiente).</li>\n          <li><strong>Sistemas de protección</strong>: rociadores y alarmas funcionando. Si un detector de humo puede activarse, se coordina con el responsable, pero los rociadores nunca se desactivan.</li>\n        </ul>\n        <p><strong>Cuándo no se autoriza.</strong> Si no es posible controlar los combustibles, si hay atmósfera inflamable o potencialmente inflamable que no se puede eliminar, o si el área tiene materiales que pueden explotar (polvos combustibles en suspensión, gases), el trabajo no se hace hasta resolver la condición.</p>\n      ",
        "keyPoints": [
          "Primero se busca no hacer trabajo en caliente: llevar la pieza al taller o usar métodos en frío.",
          "Se retiran o protegen los combustibles en un radio de 11 metros, y se tapan aberturas, rejillas y ductos.",
          "Se revisa el otro lado de paredes, pisos y techos; si no se puede controlar, no se autoriza."
        ],
        "practice": {
          "q": "¿Cuál es la primera alternativa para controlar el riesgo de un trabajo en caliente?",
          "options": [
            "Evitarlo: llevar la pieza al taller o usar un método en frío",
            "Usar un extintor más grande en el área",
            "Trabajar más rápido para reducir la exposición"
          ]
        }
      },
      {
        "title": "Atmósferas inflamables y medición con detector de gases",
        "content": "\n        <p><strong>Límite inferior de inflamabilidad (LII o LEL).</strong> Un gas o vapor inflamable solo arde o explota cuando su concentración en el aire está dentro de un rango. Por debajo del límite inferior la mezcla es demasiado pobre; por encima del límite superior, demasiado rica. El peligro es que, al ventilar o al abrir un recipiente, una mezcla \"demasiado rica\" puede pasar a estar dentro del rango.</p>\n        <p><strong>Qué mide el detector.</strong> El sensor de gases combustibles indica la concentración como <strong>porcentaje del LEL</strong>. Una lectura de 10 % LEL significa que la mezcla está a una décima parte de poder encenderse.</p>\n        <p><strong>Criterio de aceptación.</strong> Cada empresa lo define en su procedimiento. Lo habitual es no autorizar trabajo en caliente si la lectura supera el 10 % del LEL en el área, y exigir 0 % dentro de tanques, tuberías y recipientes que se van a cortar o soldar. Siga siempre el criterio de su procedimiento.</p>\n        <p><strong>Cómo medir bien:</strong></p>\n        <ol>\n          <li><strong>Verificar el detector</strong>: que esté calibrado y que pase la <em>prueba de respuesta</em> (exponerlo a un gas de concentración conocida) antes de usarlo.</li>\n          <li><strong>Medir en varios puntos y alturas</strong>: muchos vapores de solventes y gases como el propano son más pesados que el aire y se acumulan abajo, en fosos y drenajes; el gas natural es más liviano y se acumula arriba.</li>\n          <li><strong>Medir dentro</strong> de tuberías y recipientes, por las aberturas, con una sonda.</li>\n          <li><strong>Registrar</strong> la lectura, la hora y quién midió en el permiso.</li>\n          <li><strong>Monitorear de forma continua</strong> durante el trabajo cuando puede haber liberación de vapores, y detener todo si la alarma suena.</li>\n        </ol>\n        <p><strong>Otros gases.</strong> Muchos detectores miden también oxígeno, monóxido de carbono y sulfuro de hidrógeno. Un exceso de oxígeno (por ejemplo, por una fuga de oxígeno del equipo de oxicorte) hace que materiales que normalmente no arden lo hagan con violencia; la ropa puede incendiarse en segundos.</p>\n        <p><strong>Error típico:</strong> medir una vez al inicio y no volver a medir después de una pausa larga, de un cambio en el proceso vecino o cuando se abre una nueva sección de la tubería.</p>\n      ",
        "keyPoints": [
          "El detector mide gases combustibles como porcentaje del LEL; el criterio de aceptación lo fija el procedimiento.",
          "Se verifica el detector, se mide en varios puntos y alturas, se registra y se monitorea durante el trabajo.",
          "El exceso de oxígeno también es peligroso: hace que la ropa y otros materiales ardan con violencia."
        ],
        "practice": {
          "q": "Un detector marca 10 % LEL. ¿Qué significa?",
          "options": [
            "Que el detector tiene la batería al 10 %",
            "Que la mezcla está a una décima parte de poder encenderse",
            "Que el aire tiene 10 % de oxígeno"
          ]
        }
      },
      {
        "title": "Tuberías y recipientes que contuvieron inflamables",
        "content": "\n        <p>Los accidentes más graves del trabajo en caliente ocurren al cortar o soldar <strong>tanques, tambores, tuberías y ductos</strong> que contuvieron combustibles, solventes, aceites o gases. \"Vacío\" no significa \"seguro\": los residuos en el fondo, en las paredes o en el aislamiento siguen liberando vapores.</p>\n        <p><strong>Pasos para preparar un recipiente o una tubería:</strong></p>\n        <ol>\n          <li><strong>Identificar</strong> qué contuvo, consultando la ficha de datos de seguridad del producto.</li>\n          <li><strong>Aislar</strong> de todas las fuentes: cerrar y bloquear válvulas, y en servicios críticos instalar bridas ciegas o desconectar físicamente la línea (ver el curso de bloqueo y aislamiento de energías).</li>\n          <li><strong>Vaciar y drenar</strong> completamente el producto.</li>\n          <li><strong>Limpiar</strong>: lavar con agua, vapor o detergente según el producto, hasta retirar los residuos.</li>\n          <li><strong>Purgar o inertizar</strong>: ventilar con aire, o desplazar la atmósfera con un gas inerte como nitrógeno cuando no se puede garantizar la limpieza. Atención: un recipiente inertizado no tiene oxígeno suficiente para respirar; nadie entra sin el procedimiento de espacios confinados.</li>\n          <li><strong>Medir</strong> en el interior hasta obtener el valor exigido por el procedimiento.</li>\n          <li><strong>Mantener abierto</strong> un venteo, para que el calor no genere presión dentro.</li>\n        </ol>\n        <p><strong>Tambores y canecas.</strong> Nunca se corta un tambor metálico que contuvo combustible \"para hacer un recipiente\". Es una de las causas más frecuentes de muerte por explosión en talleres.</p>\n        <p><strong>Tuberías en servicio.</strong> Soldar en una tubería con producto en servicio solo se hace con procedimientos de ingeniería especializados, nunca como un trabajo de mantenimiento corriente.</p>\n        <p><strong>El caso del curso</strong> cumplía todas las condiciones para la explosión: residuos de solvente, ningún aislamiento, ninguna limpieza y ninguna medición. Bastaba con medir para descubrir el peligro.</p>\n      ",
        "keyPoints": [
          "Un recipiente o una tubería \"vacía\" puede tener vapores explosivos por los residuos.",
          "Preparación: identificar, aislar, vaciar, limpiar, purgar o inertizar, medir y dejar un venteo abierto.",
          "Nunca se corta un tambor que contuvo combustible; no se suelda en tuberías en servicio sin ingeniería especializada."
        ],
        "practice": {
          "q": "¿Por qué se deja un venteo abierto al soldar un recipiente preparado?",
          "options": [
            "Para que el vigía pueda mirar el interior",
            "Para que el humo salga hacia el soldador",
            "Para que el calor no genere presión dentro del recipiente"
          ]
        }
      },
      {
        "title": "El permiso de trabajo en caliente",
        "content": "\n        <p>El <strong>permiso de trabajo</strong> es el documento que demuestra que alguien con autoridad evaluó el área, que se aplicaron los controles y que el trabajo se puede hacer. No es un trámite: es una lista de verificación firmada que obliga a mirar el sitio antes de empezar.</p>\n        <p><strong>Contenido mínimo de un buen permiso:</strong></p>\n        <ul>\n          <li>Ubicación exacta y descripción del trabajo (qué se va a cortar o soldar y con qué equipo).</li>\n          <li>Fecha, hora de inicio y hora de vencimiento.</li>\n          <li>Peligros identificados y controles aplicados: combustibles retirados o protegidos, aberturas tapadas, aislamiento de tuberías, ventilación.</li>\n          <li>Resultado de las mediciones de gases, con hora y responsable.</li>\n          <li>Extintores y equipos de protección contra incendios disponibles.</li>\n          <li>Nombre del ejecutante, del vigía de fuego y de quien autoriza, con sus firmas.</li>\n          <li>Tiempo de vigilancia posterior y firma de cierre.</li>\n        </ul>\n        <p><strong>Vigencia.</strong> Lo usual es que el permiso valga solo para un turno o una jornada y para el lugar y la tarea descritos. Si el trabajo continúa al día siguiente, el área se vuelve a evaluar.</p>\n        <p><strong>Cuándo se suspende el permiso:</strong></p>\n        <ul>\n          <li>si suena una alarma de gas o de incendio en el área;</li>\n          <li>si cambian las condiciones (empieza una operación vecina con solventes, llega material combustible, se abre otra línea);</li>\n          <li>si el vigía tiene que retirarse;</li>\n          <li>si se detecta cualquier condición no prevista.</li>\n        </ul>\n        <p>Para reanudar, quien autoriza vuelve a evaluar y, si es necesario, se mide de nuevo.</p>\n        <p><strong>Relación con el ATS.</strong> El análisis de trabajo seguro (ATS) describe paso a paso la tarea y sus peligros; el permiso verifica las condiciones del sitio. Se complementan, y ambos deben estar en el lugar del trabajo, visibles.</p>\n        <p><strong>Errores frecuentes:</strong> firmar el permiso desde la oficina sin ir al sitio, usar el mismo permiso para varias áreas, dejar en blanco las mediciones y \"cerrar\" el permiso apenas se apaga el equipo.</p>\n      ",
        "keyPoints": [
          "El permiso demuestra que alguien con autoridad evaluó el sitio: no se firma desde la oficina.",
          "Incluye tarea, lugar, horario, controles, mediciones, vigía, firmas y tiempo de vigilancia posterior.",
          "Se suspende ante alarmas, cambios de condiciones o si el vigía se retira."
        ],
        "practice": {
          "q": "¿Cuál es la vigencia habitual de un permiso de trabajo en caliente?",
          "options": [
            "Un turno o jornada, para el lugar y la tarea descritos",
            "Un mes, para todas las áreas de la planta",
            "Un año, mientras el soldador tenga su certificado"
          ]
        }
      },
      {
        "title": "Controles durante el trabajo y elementos de protección",
        "content": "\n        <p><strong>Antes de encender el equipo</strong>, el ejecutante confirma que todo lo del permiso está en su lugar y que el vigía está listo.</p>\n        <p><strong>Equipo y área:</strong></p>\n        <ul>\n          <li>Equipos de soldadura y corte inspeccionados: cables sin daños, mangueras sin fugas, reguladores en buen estado y válvulas antirretroceso en el oxicorte.</li>\n          <li>Cilindros de gas asegurados en posición vertical, con su capuchón cuando no se usan, lejos de la zona de chispas.</li>\n          <li>Mamparas o cortinas para contener chispas y proteger a otras personas del arco.</li>\n          <li>Extintor adecuado al alcance (normalmente de polvo químico seco multipropósito) y, cuando haya riesgo, una manguera de agua lista.</li>\n          <li>Ventilación o extracción localizada para los humos.</li>\n        </ul>\n        <p><strong>Elementos de protección del ejecutante:</strong></p>\n        <ul>\n          <li>Ropa de algodón o de materiales resistentes a la llama, de manga larga, sin bolsillos abiertos ni dobladillos donde caigan chispas. <strong>Nada de fibras sintéticas</strong> como el poliéster o el nailon, que se derriten y se pegan a la piel.</li>\n          <li>Careta o gafas con el filtro adecuado al proceso, y gafas de seguridad debajo para cuando se levanta la careta.</li>\n          <li>Guantes de cuero para soldador, peto o chaqueta de cuero, polainas y botas de seguridad.</li>\n          <li>Protección respiratoria cuando la ventilación no basta y protección auditiva cuando se esmerila.</li>\n        </ul>\n        <p><strong>Durante el trabajo:</strong></p>\n        <ul>\n          <li>Dirigir las chispas lejos de los combustibles y de las personas.</li>\n          <li>Si se trabaja en altura, prever dónde caerán las chispas y proteger el nivel inferior.</li>\n          <li>Hacer pausas para que el vigía revise el área, especialmente detrás de las barreras.</li>\n          <li>Detener el trabajo de inmediato si aparece humo, olor a quemado, una alarma o un cambio en el área.</li>\n        </ul>\n        <p><strong>El vigía</strong> mantiene la vista sobre las chispas y los lugares donde caen, tiene el extintor en la mano o al alcance inmediato y conoce cómo dar la alarma. Si observa un conato, actúa; si el fuego crece, evacúa y da la alarma sin arriesgarse.</p>\n      ",
        "keyPoints": [
          "Equipos inspeccionados, cilindros asegurados, mamparas, extintor adecuado y ventilación.",
          "Ropa de algodón o resistente a la llama: nunca sintéticos, que se derriten sobre la piel.",
          "Se detiene el trabajo ante humo, olor a quemado, alarmas o cambios en el área."
        ],
        "practice": {
          "q": "¿Por qué no se usa ropa de poliéster o nailon al soldar?",
          "options": [
            "Porque atrae los rayos ultravioleta",
            "Porque se derrite y se pega a la piel",
            "Porque es más pesada que el algodón"
          ]
        }
      },
      {
        "title": "Después del trabajo: vigilancia y cierre del permiso",
        "content": "\n        <p>Muchos incendios causados por trabajos en caliente empiezan <strong>después</strong> de terminar: una escoria que quedó dentro de un aislamiento, una chispa que cayó a un piso inferior o el calor que siguió conduciéndose por una viga.</p>\n        <p><strong>Cuánto tiempo vigilar.</strong> La edición 2019 de la NFPA 51B aumentó la vigilancia de fuego después del trabajo de 30 minutos a <strong>al menos 60 minutos</strong>, y añadió que quien autoriza puede exigir hasta <strong>tres horas adicionales de monitoreo</strong> del área según el riesgo. Algunas normas más antiguas siguen hablando de 30 minutos; muchas empresas y aseguradoras ya adoptaron los 60. Siga el tiempo que fije su procedimiento, y nunca menos de lo que diga el permiso.</p>\n        <p><strong>Qué hace el vigía en ese tiempo:</strong></p>\n        <ul>\n          <li>Revisa el área de trabajo y todo el radio por donde pudieron llegar chispas.</li>\n          <li>Revisa los niveles inferiores, el otro lado de paredes y techos, los ductos y las canaletas.</li>\n          <li>Toca con cuidado (con el dorso de la mano y guante) o mide con termómetro las superficies que se calentaron.</li>\n          <li>Busca humo, olor a quemado o puntos calientes en aislamientos, cartones y trapos.</li>\n          <li>Permanece en el área: <strong>no se va con el cambio de turno</strong> si no ha terminado el tiempo.</li>\n        </ul>\n        <p><strong>Cierre del permiso.</strong> Al terminar la vigilancia, el vigía y el ejecutante (o quien autoriza) inspeccionan juntos y firman el cierre. Solo entonces se retiran las mantas y barreras, y se devuelve el área a la operación normal.</p>\n        <p><strong>Si se encuentra un conato</strong>, se apaga con el extintor si es pequeño y se puede hacer sin riesgo, se da la alarma, se informa a quien autorizó y se investiga como incidente. Ese hallazgo indica que algún control falló.</p>\n        <p><strong>Lecciones aprendidas.</strong> Registrar qué funcionó y qué no en cada trabajo en caliente crítico ayuda a mejorar el procedimiento: dónde cayeron las chispas que nadie esperaba, qué combustible no se había visto, qué tan útil fue el detector.</p>\n      ",
        "keyPoints": [
          "NFPA 51B (2019): vigilancia de al menos 60 minutos después del trabajo, más monitoreo adicional si quien autoriza lo exige.",
          "El vigía revisa el área, los niveles inferiores y el otro lado de paredes y techos; no se va con el cambio de turno.",
          "El permiso se cierra solo después de la vigilancia y de una inspección conjunta."
        ],
        "practice": {
          "q": "¿Qué debe revisar el vigía durante la vigilancia posterior, además del área de trabajo?",
          "options": [
            "El inventario de consumibles del taller",
            "Solo el equipo de soldadura apagado",
            "Los niveles inferiores y el otro lado de paredes y techos"
          ]
        }
      },
      {
        "title": "Paneles sándwich, aislamientos y otros combustibles ocultos",
        "content": "\n        <p>Muchos de los incendios industriales más costosos en plantas de alimentos, bebidas y bodegas empezaron con una chispa que llegó a un material que <strong>nadie veía</strong>: el núcleo de un panel, el aislamiento de una tubería o el polvo acumulado sobre una viga.</p>\n        <p><strong>Paneles sándwich.</strong> Los cuartos fríos, las salas limpias y muchas cubiertas se construyen con paneles de dos láminas metálicas y un núcleo aislante. Si el núcleo es de <strong>poliestireno expandido (EPS)</strong> o de <strong>poliuretano</strong>, es combustible:</p>\n        <ul>\n          <li>Una soldadura o un corte sobre la lámina calienta el núcleo, que empieza a arder <strong>por dentro</strong>, sin llama visible.</li>\n          <li>El fuego avanza por el interior del panel, a veces muchos metros, y aparece lejos del sitio de trabajo, horas después.</li>\n          <li>El humo es muy denso y tóxico, y el incendio es difícil de apagar porque el agua no llega al núcleo.</li>\n        </ul>\n        <p>Por eso, antes de soldar, cortar o pulir sobre o cerca de un panel, se averigua <strong>de qué es el núcleo</strong> (ficha técnica, marca del fabricante o el área de mantenimiento). Si es combustible, la primera opción es un método en frío (corte con sierra, fijación mecánica); si no hay alternativa, el análisis debe incluir retirar el panel o una franja del núcleo, protección térmica y una vigilancia posterior prolongada.</p>\n        <p><strong>Aislamientos de tuberías y equipos.</strong> Espumas elastoméricas, poliuretano proyectado y algunas cubiertas plásticas arden y propagan el fuego a lo largo de la tubería. Se retiran en el tramo de trabajo o se protegen con mantas ignífugas.</p>\n        <p><strong>Otros combustibles ocultos:</strong></p>\n        <ul>\n          <li><strong>Polvo combustible</strong> (harina, azúcar, almidón, cereales) acumulado en vigas, ductos y bandejas: una nube de polvo puede explotar. Se limpia antes del trabajo, sin soplar con aire comprimido.</li>\n          <li><strong>Grasa en ductos de extracción</strong> de cocinas y freidoras: el calor de una soldadura en el exterior del ducto puede encenderla por dentro.</li>\n          <li><strong>Materiales al otro lado</strong> de muros, pisos y techos: el calor se conduce por el metal y enciende lo que está detrás.</li>\n          <li><strong>Huecos, juntas y pasos de cables</strong> por donde caen las chispas a otro nivel.</li>\n        </ul>\n        <p><strong>La pregunta clave</strong> al evaluar el área no es solo \"¿qué hay a la vista?\", sino \"¿qué hay <em>dentro</em>, <em>detrás</em> y <em>debajo</em>?\".</p>\n      ",
        "keyPoints": [
          "El núcleo de EPS o poliuretano de un panel arde por dentro y el fuego aparece lejos y tarde.",
          "Aislamientos, polvo combustible, grasa en ductos y materiales detrás de muros también se evalúan.",
          "Antes de trabajar se pregunta qué hay dentro, detrás y debajo, no solo qué se ve."
        ],
        "practice": {
          "q": "¿Por qué es peligroso soldar sobre un panel sándwich con núcleo de poliestireno?",
          "options": [
            "Porque el núcleo arde por dentro y el fuego puede aparecer lejos y tarde",
            "Porque la lámina metálica se dobla con el calor",
            "Porque el panel no conduce la corriente de la soldadura"
          ]
        }
      },
      {
        "title": "Equipos de oxicorte, arco y corte abrasivo",
        "content": "\n        <p>La fuente de calor también tiene riesgos propios. Un equipo en mal estado puede causar un incendio o una explosión antes de que la chispa toque nada.</p>\n        <p><strong>Equipos oxicombustible (oxígeno con acetileno, propano u otro gas):</strong></p>\n        <ul>\n          <li><strong>Cilindros de pie y asegurados</strong> con cadena o soporte, con el capuchón puesto cuando no están en uso, lejos del calor y de las chispas.</li>\n          <li><strong>Separación entre oxígeno y gas combustible almacenados</strong>: la referencia OSHA 1910.253 exige al menos 6 metros o una barrera no combustible de 1,5 m de alto.</li>\n          <li><strong>Válvulas antirretroceso</strong> (arrestallamas) en el soplete y/o el regulador, según el fabricante, para que una llama no regrese hacia las mangueras y el cilindro.</li>\n          <li><strong>Prueba de fugas</strong> con agua jabonosa o detector, nunca con llama. Mangueras sin cortes, quemaduras ni empalmes improvisados.</li>\n          <li>El acetileno no se usa a presiones superiores a 1 bar (15 psi), porque se vuelve inestable.</li>\n          <li><strong>El oxígeno no se usa para soplar ropa, limpiar piezas ni ventilar.</strong> Enriquece la atmósfera y hace que la ropa arda con violencia.</li>\n          <li>Al terminar: cerrar las válvulas de los cilindros y purgar las mangueras.</li>\n        </ul>\n        <p><strong>Retroceso de llama:</strong> si se oye un silbido en el soplete o la llama se mete en la boquilla, se cierra primero el oxígeno y luego el gas, y no se vuelve a encender hasta revisar el equipo.</p>\n        <p><strong>Soldadura de arco eléctrico:</strong></p>\n        <ul>\n          <li>Equipo con cables sin daños y conexiones firmes.</li>\n          <li><strong>La pinza de masa se conecta lo más cerca posible de la soldadura.</strong> Si la corriente regresa por estructuras, tuberías o rodamientos, puede generar calor y chispas lejos del sitio de trabajo.</li>\n          <li>No dejar el portaelectrodo con electrodo sobre superficies conductoras.</li>\n        </ul>\n        <p><strong>Pulidoras y corte abrasivo:</strong> lanzan chispas a más de 10 metros y en una dirección predecible. Se orienta el disco para que las chispas vayan hacia una zona despejada o una mampara, nunca hacia combustibles, aberturas o personas. Se usa el disco correcto para la velocidad de la máquina, con su guarda puesta.</p>\n        <p><strong>Calentamiento con soplete, sopletes de gas y pistolas de calor</strong> también son trabajo en caliente y requieren el mismo análisis.</p>\n      ",
        "keyPoints": [
          "Cilindros de pie y asegurados, oxígeno separado del gas combustible y válvulas antirretroceso.",
          "Prueba de fugas sin llama; nunca usar oxígeno para soplar o ventilar.",
          "La masa va cerca de la soldadura y las chispas de la pulidora se dirigen a una zona despejada."
        ],
        "practice": {
          "q": "¿Cómo se prueba una fuga en un equipo de oxicorte?",
          "options": [
            "Acercando la llama del soplete a las conexiones",
            "Con agua jabonosa o un detector de fugas",
            "Abriendo el oxígeno al máximo y escuchando"
          ]
        }
      },
      {
        "title": "Áreas designadas, sistemas contra incendio y contratistas",
        "content": "\n        <p><strong>Áreas designadas y áreas con permiso.</strong> La NFPA 51B distingue dos situaciones:</p>\n        <ul>\n          <li><strong>Área designada</strong>: un sitio construido y mantenido para trabajo en caliente (por ejemplo, un taller de soldadura con piso no combustible, sin combustibles y con extintores). Allí se trabaja sin permiso para cada tarea, pero el área se inspecciona y se mantiene en esa condición.</li>\n          <li><strong>Área con permiso</strong>: cualquier otro lugar de la planta. Cada trabajo requiere el análisis y el permiso completo.</li>\n        </ul>\n        <p>La primera pregunta siempre es si la pieza se puede <strong>llevar al taller</strong>. Es la forma más segura de eliminar el riesgo en la planta.</p>\n        <p><strong>Los sistemas de protección contra incendio deben estar en servicio.</strong> Rociadores, detectores y alarmas son la red de seguridad si algo falla. Por eso:</p>\n        <ul>\n          <li>No se hace trabajo en caliente en un área con los rociadores fuera de servicio, salvo que el responsable del área lo autorice con medidas compensatorias (vigilancia continua, extintores adicionales, mangueras).</li>\n          <li>Si el humo o el calor del trabajo pueden activar detectores, la desactivación es una decisión formal: se autoriza por escrito, se limita a la zona y al tiempo del trabajo, se compensa con vigilancia y se <strong>restablece y verifica</strong> al terminar. Un detector que se queda desactivado después del trabajo deja la planta ciega.</li>\n          <li>Se avisa a la brigada y, si existe, a la central de monitoreo.</li>\n        </ul>\n        <p><strong>Contratistas.</strong> Una gran parte de los incendios por trabajo en caliente ocurre con contratistas que no conocen la planta. La empresa contratante:</p>\n        <ul>\n          <li>les informa los peligros del área (paneles, polvo, productos, sistemas de protección);</li>\n          <li>les exige el permiso de la planta, no solo el de su empresa;</li>\n          <li>verifica sus equipos, su vigía y su entrenamiento;</li>\n          <li>mantiene la autoridad para suspender el trabajo.</li>\n        </ul>\n        <p>El contratista, a su vez, no inicia ningún trabajo sin el permiso firmado por el responsable del área.</p>\n        <p><strong>Paradas de planta.</strong> En las paradas programadas se concentran muchos trabajos en caliente, varios contratistas y presión de tiempo. Se planean con anticipación: lista de trabajos, áreas, permisos, vigías suficientes y coordinación entre frentes para que la chispa de uno no caiga en el área del otro.</p>\n      ",
        "keyPoints": [
          "Las áreas designadas se construyen y mantienen para soldar; en el resto de la planta cada trabajo lleva permiso.",
          "Rociadores, detectores y alarmas deben seguir en servicio; cualquier desactivación es formal, compensada y se restablece.",
          "Los contratistas trabajan con el permiso de la planta, informados de sus peligros y bajo su autoridad."
        ],
        "practice": {
          "q": "¿Qué es un área designada para trabajo en caliente?",
          "options": [
            "Cualquier lugar donde el supervisor lo autorice de palabra",
            "El área de la planta con más espacio libre",
            "Un sitio construido y mantenido para soldar, como un taller"
          ]
        }
      },
      {
        "title": "Lecciones de incendios reales y auditoría del programa",
        "content": "\n        <p>Las investigaciones de incendios por trabajo en caliente repiten casi siempre las mismas causas. Conocerlas ayuda a buscarlas antes de que ocurran.</p>\n        <p><strong>Patrones frecuentes:</strong></p>\n        <ul>\n          <li><strong>Combustibles no retirados ni protegidos</strong> en el radio de 11 metros, o al otro lado de un muro o de un piso.</li>\n          <li><strong>No se midió la atmósfera</strong>, o se midió en un solo punto, en el momento equivocado o con un equipo sin prueba de funcionamiento.</li>\n          <li><strong>Recipientes o tuberías</strong> que \"estaban vacíos\" pero contenían vapores o residuos.</li>\n          <li><strong>Sin vigía, vigía con otras tareas</strong> o vigilancia posterior acortada para terminar el turno.</li>\n          <li><strong>Permiso firmado en la oficina</strong> sin que nadie fuera al sitio.</li>\n          <li><strong>Contratistas</strong> sin información sobre los peligros de la planta.</li>\n          <li><strong>Trabajos \"rápidos\"</strong> que se hicieron sin permiso porque \"solo era un punto de soldadura\".</li>\n        </ul>\n        <p><strong>Cómo se investiga un incendio o un conato:</strong> se reconstruye la secuencia (qué trabajo, qué fuente de calor, por dónde viajó la chispa o el calor, qué se encendió, cuánto tardó en detectarse), se compara con lo que decía el permiso y se buscan las causas en el sistema: el formato, el entrenamiento, la presión de producción, la falta de vigías o la planeación.</p>\n        <p><strong>Auditoría del programa de trabajo en caliente.</strong> Además de revisar formatos, se observan trabajos reales. Preguntas útiles:</p>\n        <ul>\n          <li>¿El responsable del área visitó el sitio antes de firmar?</li>\n          <li>¿Las mediciones están registradas con hora y valor?</li>\n          <li>¿El vigía estuvo presente todo el tiempo y cumplió la vigilancia posterior completa?</li>\n          <li>¿Los permisos se cerraron con la inspección final firmada?</li>\n          <li>¿Hay trabajos en caliente hechos sin permiso (por ejemplo, marcas de soldadura nuevas sin un permiso que las respalde)?</li>\n        </ul>\n        <p><strong>Indicadores útiles:</strong> porcentaje de permisos auditados en campo, desviaciones encontradas y cerradas, conatos de incendio asociados a trabajos en caliente, trabajos llevados al taller en vez de hacerse en la planta y vigías entrenados disponibles.</p>\n        <p><strong>Un conato que se apagó a tiempo es un regalo:</strong> se reporta e investiga igual que un incendio, porque la siguiente vez puede no apagarse.</p>\n      ",
        "keyPoints": [
          "Causas repetidas: combustibles en el radio, gases no medidos, recipientes \"vacíos\", vigía ausente y permisos firmados sin ir al sitio.",
          "La investigación compara lo que pasó con lo que decía el permiso y busca causas en el sistema.",
          "La auditoría observa trabajos reales; los conatos se reportan e investigan como incendios."
        ],
        "practice": {
          "q": "Se apagó a tiempo un conato de incendio causado por una soldadura. ¿Qué se hace?",
          "options": [
            "Se reporta e investiga como si fuera un incendio",
            "Nada, porque no hubo daños",
            "Se comenta en la siguiente reunión si hay tiempo"
          ]
        }
      }
    ],
    "scenarios": [
      {
        "scenario": "Debes cortar una tubería con pulidora. El supervisor dice que \"ya está vacía, la usaron con agua la semana pasada\", pero no sabes qué llevaba antes. No hay permiso firmado ni medición.",
        "options": [
          "Corto con cuidado: si llevaba agua, no hay peligro.",
          "Detengo la tarea, pido el permiso y confirmo qué contuvo la tubería, que esté aislada, limpia y purgada, y que se mida la atmósfera interior antes de cortar.",
          "Pido al vigía que esté listo con el extintor y corto de una vez."
        ]
      },
      {
        "scenario": "Estás soldando cerca de una canaleta de cables. Hay una mampara metálica, pero detrás de ella ves cartones de empaque, y el vigía se fue a buscar un repuesto que pidió el mantenimiento.",
        "options": [
          "Sigo soldando con cuidado mientras el vigía regresa.",
          "Detengo el trabajo hasta que el vigía regrese y hasta retirar o cubrir con manta ignífuga los cartones y proteger la canaleta.",
          "Le pido a otro soldador que vigile de reojo mientras él trabaja en su propia tarea."
        ]
      },
      {
        "scenario": "Son las 5:30 p. m. El trabajo terminó y el ejecutante quiere cerrar el permiso de inmediato porque se acaba el turno. El vigía también quiere irse.",
        "options": [
          "Cerramos el permiso: el equipo ya está apagado.",
          "Dejamos un cartel de \"trabajo terminado\" y nos vamos.",
          "El vigía permanece el tiempo fijado (al menos 60 minutos), revisa niveles inferiores y superficies calientes, y luego se inspecciona y se cierra el permiso; si se requiere, se gestiona el relevo del vigía."
        ]
      },
      {
        "scenario": "Al medir antes de soldar un soporte cerca de un foso de drenaje, el detector marca 0 % LEL a la altura de la cintura, pero no has medido dentro del foso, donde llegan residuos del área de solventes.",
        "options": [
          "Mido también dentro del foso y en los puntos bajos, porque los vapores de solventes suelen ser más pesados que el aire.",
          "Doy por buena la medición: 0 % es el mejor resultado posible.",
          "Tapo el foso con una lámina y empiezo, así las chispas no entran."
        ]
      },
      {
        "scenario": "Llevas veinte minutos soldando con el permiso en regla. En el área vecina, otro equipo empieza a limpiar un tanque con un solvente y se siente el olor.",
        "options": [
          "Sigo, porque mi permiso está vigente y firmado.",
          "Detengo el trabajo, aviso a quien autorizó el permiso y espero a que se vuelva a evaluar y medir el área antes de continuar.",
          "Le pido al otro equipo que se apure para terminar antes de que se acumule el olor."
        ]
      },
      {
        "scenario": "Debes soldar un soporte sobre la pared de un cuarto frío hecho con paneles sándwich. Nadie sabe de qué es el núcleo y el supervisor dice que \"es metal, no se quema\".",
        "options": [
          "Sueldo rápido, con un extintor cerca.",
          "Detengo, averiguo de qué es el núcleo y, si es combustible, buscamos una fijación mecánica o un método en frío.",
          "Sueldo y mojo la lámina con agua al terminar."
        ]
      },
      {
        "scenario": "Al encender el soplete de oxicorte se oye un silbido y la llama se mete en la boquilla.",
        "options": [
          "Cierro primero el oxígeno, luego el gas, y no vuelvo a encender hasta revisar el equipo.",
          "Abro más el gas para que la llama salga.",
          "Sigo cortando, el silbido es normal."
        ]
      },
      {
        "scenario": "Para que el humo de la soldadura no active la alarma, un técnico desactivó los detectores de toda la nave sin avisar a nadie. El trabajo ya terminó.",
        "options": [
          "Los dejo desactivados hasta mañana por si hay que volver a soldar.",
          "No es mi responsabilidad: los detectores son del área de mantenimiento.",
          "Reporto la situación, se restablecen y verifican los detectores y se registra la desviación para corregir el procedimiento."
        ]
      },
      {
        "scenario": "Un contratista llega a soldar una baranda con su propio permiso de trabajo, firmado por su empresa. No ha hablado con el responsable del área.",
        "options": [
          "Lo dejo empezar: ya tiene permiso.",
          "No empieza hasta tener el permiso de la planta firmado por el responsable del área, después de evaluar el sitio juntos.",
          "Le pido que trabaje rápido y le asigno un vigía de mi equipo."
        ]
      },
      {
        "scenario": "En una parada de planta, dos contratistas sueldan en la misma estructura: uno en el piso superior y otro justo debajo, donde hay estibas de cartón.",
        "options": [
          "Cada contratista cuida su propia área.",
          "Pongo un extintor adicional abajo y que sigan.",
          "Detengo y coordino: se retiran los combustibles de abajo, se sellan las aberturas, se asigna vigía en ambos niveles y se secuencian los trabajos."
        ]
      }
    ],
    "exam": [
      {
        "q": "¿Cuál de estas actividades es trabajo en caliente?",
        "options": [
          "Esmerilar una pieza metálica con pulidora fuera del taller.",
          "Pintar con brocha una baranda usando pintura a base de agua en un área ventilada de la bodega.",
          "Ajustar un perno con una llave manual."
        ]
      },
      {
        "q": "¿Por qué una escoria de soldadura puede causar un incendio mucho después de terminar?",
        "options": [
          "Porque la luz del arco deja cargada eléctricamente el área y produce chispas después.",
          "Porque puede arder sin llama dentro de cartones o aislamientos durante largo tiempo.",
          "Porque la escoria absorbe oxígeno del aire y lo libera de golpe cuando se enfría por completo."
        ]
      },
      {
        "q": "Según la NFPA 51B, ¿qué caracteriza al vigía de fuego?",
        "options": [
          "Ayuda al soldador sosteniendo piezas y trayendo herramientas para que el trabajo termine más rápido.",
          "Es el responsable de firmar el permiso y decidir si el área está lista para el trabajo en caliente.",
          "Se dedica solo a vigilar, con extintor y medio de alarma, durante y después del trabajo."
        ]
      },
      {
        "q": "¿Qué radio de referencia se revisa para retirar o proteger combustibles?",
        "options": [
          "11 metros (35 pies).",
          "2 metros.",
          "Solo el banco de trabajo, porque las chispas se apagan al tocar el piso del área."
        ]
      },
      {
        "q": "Hay una rejilla de piso cerca del área donde se va a esmerilar. ¿Qué se hace?",
        "options": [
          "Nada, porque las chispas no pasan por las rejillas metálicas al ser de menor tamaño que los huecos.",
          "Se tapa con material incombustible y se revisa qué hay en el nivel inferior.",
          "Se moja la rejilla para que las chispas se apaguen al pasar hacia el nivel inferior."
        ]
      },
      {
        "q": "¿Cuál es la alternativa más segura frente a cortar una tubería en sitio con soplete?",
        "options": [
          "Hacer el corte durante el turno de la noche, cuando hay menos personal en el área de producción.",
          "Usar dos extintores en lugar de uno.",
          "Usar un método en frío, como un cortatubos, o llevar la pieza al taller."
        ]
      },
      {
        "q": "¿Qué indica una lectura de 10 % LEL en el detector?",
        "options": [
          "Que la mezcla está a una décima parte de su límite inferior de inflamabilidad, es decir, al 10 % del LEL.",
          "Que el aire contiene 10 % de gas combustible y está a punto de explotar de inmediato.",
          "Que el oxígeno del área bajó al 10 % y no se puede respirar sin equipo autónomo."
        ]
      },
      {
        "q": "¿Qué se hace con el detector de gases antes de usarlo?",
        "options": [
          "Se enciende y se usa directamente, porque los detectores modernos se calibran solos en el sitio.",
          "Se verifica que esté calibrado y que pase la prueba de respuesta con un gas conocido.",
          "Se deja cargando toda la noche para que la lectura sea más precisa durante el trabajo del día."
        ]
      },
      {
        "q": "¿Dónde suelen acumularse los vapores de muchos solventes?",
        "options": [
          "Cerca del techo de la planta.",
          "En el centro del área, a la altura de la respiración de los trabajadores que la ocupan.",
          "En las partes bajas, fosos y drenajes, porque son más pesados que el aire."
        ]
      },
      {
        "q": "Al preparar un tambor que contuvo solvente para soldarlo, ¿qué paso es indispensable?",
        "options": [
          "Limpiarlo, purgarlo y medir su atmósfera interior hasta el valor exigido.",
          "Llenarlo de arena seca para que absorba los vapores mientras se suelda.",
          "Pintarlo por dentro con pintura anticorrosiva para sellar los residuos antes de soldar."
        ]
      },
      {
        "q": "Un recipiente se inertizó con nitrógeno para soldarlo. ¿Qué precaución adicional aplica?",
        "options": [
          "Se debe soldar con la tapa cerrada para que el nitrógeno no se escape del recipiente.",
          "Nadie entra sin el procedimiento de espacios confinados: no hay oxígeno para respirar.",
          "Se puede entrar sin restricciones, porque el nitrógeno es el gas que más abunda en el aire normal."
        ]
      },
      {
        "q": "¿Cuál de estas situaciones suspende un permiso de trabajo en caliente vigente?",
        "options": [
          "Que el ejecutante cambie de electrodo por otro del mismo tipo y diámetro durante el trabajo.",
          "Que el supervisor de producción pase por el área a verificar el avance de la tarea.",
          "Que suene una alarma de gas o empiece cerca una operación con solventes."
        ]
      },
      {
        "q": "¿Quién debe firmar un permiso de trabajo en caliente?",
        "options": [
          "Quien autoriza, el ejecutante y el vigía, tras verificar el sitio.",
          "El comprador del equipo.",
          "Solo el ejecutante, porque es quien conoce el trabajo que se va a hacer."
        ]
      },
      {
        "q": "¿Qué tipo de ropa usa el ejecutante de un trabajo en caliente?",
        "options": [
          "De manga corta, para que el calor del arco se disipe mejor sobre la piel.",
          "De algodón o resistente a la llama, de manga larga.",
          "De poliéster."
        ]
      },
      {
        "q": "Según la edición 2019 de la NFPA 51B, ¿cuánto dura como mínimo la vigilancia de fuego después del trabajo?",
        "options": [
          "10 minutos, el tiempo que tarda en enfriarse el electrodo usado por el soldador en el área.",
          "30 minutos, como en todas las ediciones anteriores de la norma.",
          "Al menos 60 minutos, más el monitoreo adicional que exija quien autoriza."
        ]
      },
      {
        "q": "Durante la vigilancia posterior, el vigía encuentra humo en una caja de cartón bajo una rejilla. ¿Qué indica?",
        "options": [
          "Que un control falló: se controla el conato, se avisa y se investiga como incidente.",
          "Que el cartón estaba húmedo y que el humo desaparecerá solo en pocos minutos sin intervenir.",
          "Que la vigilancia no era necesaria, porque el humo es normal después de soldar en el área."
        ]
      },
      {
        "q": "¿Qué hace especialmente peligroso un panel sándwich con núcleo de poliuretano o EPS?",
        "options": [
          "Que no se puede pintar después de soldarlo.",
          "Que el núcleo puede arder por dentro sin llama visible.",
          "Que la lámina exterior se oxida rápido con el calor."
        ]
      },
      {
        "q": "¿Cómo se limpia el polvo combustible acumulado antes de un trabajo en caliente?",
        "options": [
          "No hace falta limpiarlo si se usa una manta ignífuga.",
          "Soplándolo con aire comprimido para sacarlo rápido del área.",
          "Aspirándolo o barriéndolo sin levantar nubes de polvo."
        ]
      },
      {
        "q": "Según OSHA 1910.253, ¿cómo se almacenan el oxígeno y el gas combustible?",
        "options": [
          "Separados al menos 6 m o con una barrera no combustible.",
          "Juntos, en el mismo carro, para tenerlos a mano.",
          "Acostados en el piso del taller para que no se caigan."
        ]
      },
      {
        "q": "¿Para qué sirven las válvulas antirretroceso de un equipo de oxicorte?",
        "options": [
          "Para medir el gas que queda en el cilindro.",
          "Para evitar que la llama regrese hacia las mangueras y el cilindro.",
          "Para regular la presión de trabajo del soplete."
        ]
      },
      {
        "q": "¿Por qué la pinza de masa se conecta cerca de la soldadura?",
        "options": [
          "Porque el cable de masa suele ser más corto que el del electrodo.",
          "Para que el arco encienda más rápido y con menos salpicadura.",
          "Para que la corriente no regrese por estructuras y genere calor lejos."
        ]
      },
      {
        "q": "¿Cuál es la forma más segura de eliminar el riesgo de un trabajo en caliente en la planta?",
        "options": [
          "Llevar la pieza al área designada o taller.",
          "Hacerlo en el turno de la noche, cuando hay menos personas.",
          "Hacerlo con dos extintores en vez de uno."
        ]
      },
      {
        "q": "El humo de la soldadura puede activar los detectores. ¿Cómo se maneja?",
        "options": [
          "Tapando los detectores con bolsas plásticas sin avisar.",
          "Con desactivación autorizada, limitada, compensada y restablecida al terminar.",
          "Desactivando los detectores de la nave durante todo el día."
        ]
      },
      {
        "q": "En la auditoría de un permiso de trabajo en caliente, ¿qué es una señal de alerta?",
        "options": [
          "Que el vigía haya firmado el cierre después de la vigilancia.",
          "Que el permiso tenga las mediciones registradas con hora y valor.",
          "Que el permiso se haya firmado sin que nadie visitara el sitio."
        ]
      }
    ],
    "workshops": [
      {
        "title": "Taller 1. Trabajos en caliente en su planta",
        "prompt": "Piense en los trabajos que generan chispas, llama o calor en su planta.",
        "fields": [
          {
            "label": "Liste los trabajos en caliente que se hacen en su planta y con qué frecuencia.",
            "help": "Soldadura, corte, pulido, calentamiento, soplete, pistola de calor...",
            "minWords": 30
          },
          {
            "label": "¿En qué áreas el trabajo en caliente sería más peligroso y por qué?",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Alguno de esos trabajos se hace hoy sin permiso? ¿Por qué cree que pasa?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 2. Roles en su empresa",
        "prompt": "Aterrice los roles del trabajo en caliente a la organización de su empresa.",
        "fields": [
          {
            "label": "¿Quién autoriza hoy los trabajos en caliente en su planta? ¿Va al sitio antes de firmar?",
            "help": "Cargos, no nombres.",
            "minWords": 30
          },
          {
            "label": "¿Quién hace de vigía de fuego y qué entrenamiento tiene?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Qué cambiaría en la asignación de roles para cumplir la NFPA 51B?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 3. Escoja un trabajo real",
        "prompt": "Escoja un trabajo en caliente real de su planta. Lo usará en los demás talleres y en el proyecto final.",
        "fields": [
          {
            "label": "Describa el trabajo: qué se va a soldar, cortar o calentar, dónde y con qué equipo.",
            "help": "",
            "minWords": 35
          },
          {
            "label": "Liste los combustibles que hay en un radio de 11 metros, incluidos los de otros niveles.",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Existe una alternativa en frío o se puede llevar la pieza al taller? Explique.",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 4. Atmósferas y mediciones",
        "prompt": "Defina cómo mediría la atmósfera en el trabajo que escogió.",
        "fields": [
          {
            "label": "¿Qué gases o vapores inflamables podrían estar presentes y de dónde vendrían?",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿En qué puntos mediría, con qué equipo y con qué frecuencia durante el trabajo?",
            "help": "Recuerde los vapores pesados y los espacios bajos.",
            "minWords": 30
          },
          {
            "label": "¿Qué haría si el detector marca una lectura mayor que cero?",
            "help": "",
            "minWords": 20
          }
        ]
      },
      {
        "title": "Taller 5. Recipientes y tuberías",
        "prompt": "Revise los recipientes y tuberías de su planta que podrían intervenirse en caliente.",
        "fields": [
          {
            "label": "Describa un tanque, tambor o tubería de su planta que haya contenido algo inflamable o combustible.",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Cómo lo prepararía para soldar o cortar (aislamiento, vaciado, limpieza, inertización, medición)?",
            "help": "",
            "minWords": 35
          },
          {
            "label": "¿Qué riesgo quedaría si se omite uno de esos pasos?",
            "help": "",
            "minWords": 20
          }
        ]
      },
      {
        "title": "Taller 6. El permiso de su empresa",
        "prompt": "Revise el formato de permiso de trabajo en caliente que usa su empresa (o el que debería tener).",
        "fields": [
          {
            "label": "¿Qué secciones tiene el permiso de su empresa y cuáles le faltan frente a lo visto en el módulo?",
            "help": "",
            "minWords": 35
          },
          {
            "label": "¿Cuánto tiempo es válido el permiso y quién lo cierra?",
            "help": "",
            "minWords": 20
          },
          {
            "label": "¿Qué cambiaría del formato para que se diligencie en campo y no en la oficina?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 7. Controles durante el trabajo",
        "prompt": "Defina los controles del trabajo que escogió.",
        "fields": [
          {
            "label": "¿Qué protecciones instalaría (mantas, mamparas, sellos de aberturas, humectación) y dónde?",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Qué elementos de protección personal usaría el ejecutante y por qué?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Qué condiciones harían suspender el trabajo?",
            "help": "",
            "minWords": 20
          }
        ]
      },
      {
        "title": "Taller 8. Vigilancia posterior y cierre",
        "prompt": "Planee el final del trabajo que escogió.",
        "fields": [
          {
            "label": "¿Cuánto duraría la vigilancia posterior y qué revisaría el vigía, incluidos los otros niveles?",
            "help": "Recuerde los 60 minutos mínimos de la NFPA 51B (2019) y el monitoreo adicional.",
            "minWords": 30
          },
          {
            "label": "¿Cómo evitaría que la vigilancia se acorte por el cambio de turno?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Quién firma el cierre del permiso y qué verifica antes?",
            "help": "",
            "minWords": 20
          }
        ]
      },
      {
        "title": "Taller 9. Combustibles ocultos",
        "prompt": "Busque combustibles que no se ven en su planta.",
        "fields": [
          {
            "label": "¿Hay paneles sándwich, aislamientos combustibles, polvo o grasa en ductos en su planta? ¿Dónde?",
            "help": "",
            "minWords": 30
          },
          {
            "label": "Si hubiera que soldar cerca de uno de ellos, ¿qué controles adicionales aplicaría?",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Cómo averiguaría de qué es el núcleo de un panel?",
            "help": "",
            "minWords": 20
          }
        ]
      },
      {
        "title": "Taller 10. Equipos de su planta",
        "prompt": "Revise los equipos de soldadura y corte de su planta.",
        "fields": [
          {
            "label": "¿Cómo se almacenan y transportan hoy los cilindros de gas? ¿Qué corregiría?",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Los equipos de oxicorte tienen válvulas antirretroceso y mangueras en buen estado? ¿Cómo lo verifica?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Dónde se conecta la masa de los equipos de arco y qué riesgo habría si se conecta lejos?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 11. Sistemas contra incendio y contratistas",
        "prompt": "Revise cómo se coordinan los trabajos en caliente con la protección contra incendio y los contratistas.",
        "fields": [
          {
            "label": "¿Su planta tiene un área designada para soldar? Si no, ¿dónde podría estar?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Cómo se maneja hoy la desactivación de detectores o rociadores durante un trabajo? ¿Qué haría mejor?",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Qué información les da su empresa a los contratistas antes de un trabajo en caliente?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 12. Auditar el programa",
        "prompt": "Diseñe cómo verificaría que el programa de trabajo en caliente funciona.",
        "fields": [
          {
            "label": "Proponga tres preguntas de auditoría en campo para su planta.",
            "help": "",
            "minWords": 30
          },
          {
            "label": "Proponga dos indicadores y cómo los mediría.",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Cómo animaría a reportar los conatos de incendio sin miedo a sanciones?",
            "help": "",
            "minWords": 25
          }
        ]
      }
    ],
    "project": {
      "title": "Proyecto final: análisis y permiso de un trabajo en caliente de su planta",
      "intro": "Prepare el análisis completo del trabajo en caliente que escogió en los talleres, como si mañana fuera a ejecutarse. Debe servirle al responsable del área para decidir si autoriza el trabajo y en qué condiciones. Antes de usarlo en campo, su empresa debe revisarlo y aprobarlo.",
      "sections": [
        {
          "label": "1. Descripción del trabajo y justificación",
          "help": "Qué, dónde, con qué equipo, cuánto tiempo, y por qué no hay alternativa en frío ni se puede llevar al taller.",
          "minWords": 45
        },
        {
          "label": "2. Evaluación del área",
          "help": "Combustibles en 11 metros, otros niveles, aberturas, combustibles ocultos y sistemas contra incendio presentes.",
          "minWords": 60
        },
        {
          "label": "3. Atmósfera y preparación",
          "help": "Gases posibles, puntos y frecuencia de medición, criterio de aceptación y preparación de recipientes o tuberías.",
          "minWords": 55
        },
        {
          "label": "4. Controles y protección",
          "help": "Retiro y protección de combustibles, mamparas, sellos, extintores, equipos y elementos de protección personal.",
          "minWords": 55
        },
        {
          "label": "5. Roles, vigilancia y suspensión",
          "help": "Quién autoriza, ejecuta y vigila; duración de la vigilancia posterior y condiciones que suspenden el trabajo.",
          "minWords": 50
        },
        {
          "label": "6. Cierre del permiso y emergencias",
          "help": "Inspección final, firma de cierre, restablecimiento de sistemas y qué hacer si se inicia un fuego.",
          "minWords": 45
        }
      ],
      "rubric": [
        "Explica por qué no hay alternativa en frío ni se puede llevar la pieza al taller.",
        "Revisa combustibles a la vista, ocultos y en otros niveles en un radio de 11 metros.",
        "Define dónde, cómo y cada cuánto se mide la atmósfera, y el criterio para suspender.",
        "Asigna un vigía exclusivo con extintor y una vigilancia posterior de al menos 60 minutos.",
        "Incluye el restablecimiento de detectores o rociadores si se desactivaron.",
        "El responsable del área podría decidir con este documento sin preguntar más."
      ]
    }
  },
  {
    "id": "observador-fuego",
    "title": "Observador de Fuego (Vigía de Incendios)",
    "hours": 4,
    "category": "prevencion_sst",
    "regulation": "Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979; referencias: NFPA 51B, NFPA 10 y NTC 2885",
    "legalNotice": "Formación teórica para vigías de fuego en trabajos en caliente. No reemplaza la práctica con extintores reales ni la formación de la brigada de emergencias de la empresa.",
    "summary": "Cómo nace y se propaga el fuego, las clases de fuego y los extintores, el rol y la autoridad del vigía, qué verificar antes, durante y después del trabajo, cómo usar el extintor y cómo responder a una emergencia; además, los sistemas fijos y la alarma, la comunicación con el equipo, la protección del propio vigía y la vigilancia en lugares difíciles. Incluye talleres aplicados a su planta y un proyecto final.",
    "fieldCase": "En una planta metalmecánica, una escoria de pulidora cayó por una rejilla de piso a un cuarto inferior con cartón. El vigía se retiró apenas terminó el corte. Veinticinco minutos después empezó un conato de incendio que nadie vio hasta que el humo llegó a la planta.",
    "checklist": [
      "Conozco el permiso de trabajo en caliente: tarea, lugar, horario y controles.",
      "Revisé el área en un radio de 11 metros, las aberturas y los niveles inferiores.",
      "Mi extintor es del tipo adecuado y está cargado, con pasador y sello.",
      "Sé cómo dar la alarma y dónde están la ruta de evacuación y el punto de encuentro.",
      "Acordé con el ejecutante una señal para detener el trabajo.",
      "No hago otras tareas mientras vigilo.",
      "Al terminar, permanezco el tiempo fijado (al menos 60 minutos) y reviso todo el radio.",
      "Entrego la vigilancia en persona si debo retirarme, y firmo el cierre del permiso."
    ],
    "failureAnalysis": "Falla raíz: no se inspeccionó el nivel inferior ni se tapó la rejilla, y la vigilancia posterior se abandonó antes de tiempo.",
    "onSiteClosure": "Práctica en su empresa: inspeccionar un extintor real, participar en una práctica de extinción con fuego controlado bajo supervisión de la brigada y hacer la vigilancia completa de un trabajo en caliente, incluido el tiempo posterior.",
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80",
    "modules": [
      {
        "title": "Cómo nace y cómo se propaga el fuego",
        "content": "\n        <p><strong>El triángulo del fuego.</strong> Para que exista fuego se necesitan tres cosas a la vez: <strong>combustible</strong>, <strong>oxígeno</strong> y <strong>calor</strong>. Si se quita una de ellas, el fuego se apaga. Cuando la combustión se mantiene sola gracias a una <strong>reacción en cadena</strong>, se habla del tetraedro del fuego.</p>\n        <p>Cada forma de apagar un fuego actúa sobre uno de esos elementos:</p>\n        <ul>\n          <li><strong>Enfriar</strong> (quitar calor): el agua.</li>\n          <li><strong>Sofocar</strong> (quitar oxígeno): una manta ignífuga, la espuma, el dióxido de carbono.</li>\n          <li><strong>Retirar el combustible</strong>: cerrar la válvula de gas, alejar los materiales.</li>\n          <li><strong>Interrumpir la reacción en cadena</strong>: el polvo químico seco.</li>\n        </ul>\n        <p><strong>Cómo se propaga el calor:</strong></p>\n        <ul>\n          <li><strong>Conducción</strong>: a través de sólidos, como una viga o una tubería metálica. Por eso una soldadura en un lado de una pared puede encender algo en el otro lado.</li>\n          <li><strong>Convección</strong>: el aire y los gases calientes suben y llevan el fuego hacia arriba, a techos, ductos y pisos superiores.</li>\n          <li><strong>Radiación</strong>: el calor viaja como la luz del sol y puede encender materiales cercanos sin tocarlos.</li>\n          <li><strong>Partículas incandescentes</strong>: chispas y escorias que vuelan, ruedan, rebotan y caen por aberturas.</li>\n        </ul>\n        <p><strong>Las fases de un incendio.</strong> Casi todos empiezan pequeños: una brasa en un cartón, una llama en un trapo. En esa fase de <strong>conato</strong>, un extintor portátil basta. En pocos minutos, el fuego puede crecer, llenar el lugar de humo tóxico y volverse imposible de controlar sin bomberos. El trabajo del vigía es detectar el fuego en su fase más pequeña, o mejor aún, evitar que empiece.</p>\n        <p><strong>El humo mata más que las llamas.</strong> Contiene monóxido de carbono y otros gases tóxicos, quita la visibilidad y puede dejar inconsciente a una persona en pocos minutos. Si el humo llena el área, la prioridad es salir.</p>\n      ",
        "keyPoints": [
          "Triángulo del fuego: combustible, oxígeno y calor; la reacción en cadena completa el tetraedro.",
          "El calor se propaga por conducción, convección, radiación y partículas incandescentes.",
          "Un conato se controla con un extintor; un incendio desarrollado no. El humo es lo más peligroso."
        ],
        "practice": {
          "q": "¿Qué hace el polvo químico seco para apagar el fuego?",
          "options": [
            "Aumenta el oxígeno alrededor de la llama",
            "Interrumpe la reacción en cadena de la combustión",
            "Enfría el combustible como lo hace el agua"
          ]
        }
      },
      {
        "title": "Clases de fuego y agentes extintores",
        "content": "\n        <p>No todos los fuegos se apagan igual. Usar el agente equivocado puede empeorar el incendio o electrocutar a quien lo usa. En Colombia se usa la clasificación de la norma NFPA 10, adoptada en la NTC 2885 sobre extintores portátiles.</p>\n        <ul>\n          <li><strong>Clase A: sólidos comunes</strong> que dejan brasa: madera, papel, cartón, telas, muchos plásticos. Se apagan con <strong>agua</strong> o con <strong>polvo químico seco multipropósito (ABC)</strong>.</li>\n          <li><strong>Clase B: líquidos y gases inflamables</strong>: gasolina, solventes, pinturas, aceites, gas propano. Se usan <strong>polvo químico seco</strong>, <strong>dióxido de carbono (CO₂)</strong> o <strong>espuma</strong>. <em>Nunca agua</em>: dispersa el líquido encendido y extiende el fuego. En los gases, lo primero es cortar el suministro.</li>\n          <li><strong>Clase C: equipos eléctricos energizados</strong>: tableros, motores, cables. Se usan <strong>CO₂</strong> o <strong>polvo químico seco</strong>, porque no conducen la electricidad. <em>Nunca agua</em>. Si se puede, primero se corta la energía; entonces el fuego pasa a ser de clase A o B.</li>\n          <li><strong>Clase D: metales combustibles</strong>: magnesio, titanio, aluminio en polvo o virutas. Requieren un <strong>agente especial para metales</strong>; el agua puede producir una reacción violenta.</li>\n          <li><strong>Clase K: aceites y grasas de cocina</strong> en freidoras industriales. Se usa el extintor de <strong>agente húmedo (clase K)</strong>, que forma una capa que enfría y sofoca.</li>\n        </ul>\n        <p><strong>El extintor más común en la industria</strong> es el de polvo químico seco multipropósito ABC, porque sirve para las tres clases más frecuentes. Su desventaja es que deja residuos y reduce la visibilidad. En cuartos de equipos electrónicos se prefiere el CO₂, que no deja residuos, pero que en espacios pequeños desplaza el oxígeno.</p>\n        <p><strong>Cómo saber qué extintor es.</strong> La etiqueta indica las clases de fuego en las que se puede usar, con letras y pictogramas. Antes de empezar la vigilancia, el vigía confirma que su extintor sirve para los materiales del área.</p>\n        <p><strong>En trabajos en caliente</strong>, lo habitual es tener un extintor ABC al lado del vigía y, cuando haya mucho material combustible sólido, una manguera de agua lista.</p>\n      ",
        "keyPoints": [
          "A: sólidos; B: líquidos y gases inflamables; C: equipos energizados; D: metales; K: aceites de cocina.",
          "Nunca agua en fuegos de líquidos inflamables ni en equipos energizados.",
          "El extintor ABC de polvo químico seco es el más usado en la industria; el vigía confirma que sirve para su área."
        ],
        "practice": {
          "q": "¿Por qué no se usa agua en un fuego de un tablero eléctrico energizado?",
          "options": [
            "Porque el agua se evapora antes de llegar al fuego",
            "Porque mancha los equipos eléctricos del tablero",
            "Porque el agua conduce la electricidad y puede electrocutar"
          ]
        }
      },
      {
        "title": "El vigía de fuego: rol, requisitos y autoridad",
        "content": "\n        <p>El <strong>vigía de fuego</strong> es la persona asignada para observar el área durante un trabajo en caliente y después de terminado, detectar cualquier inicio de fuego y actuar. Es uno de los tres roles de la NFPA 51B, junto con quien autoriza el permiso y el ejecutante.</p>\n        <p><strong>Requisitos del vigía:</strong></p>\n        <ul>\n          <li>Estar capacitado en el uso de extintores y en el procedimiento de emergencia de la empresa.</li>\n          <li>Conocer el área: dónde están las salidas, las alarmas, los extintores adicionales y los cortes de energía y gas.</li>\n          <li>Conocer el permiso de trabajo en caliente: qué se va a hacer, dónde y con qué controles.</li>\n          <li>Tener un medio para dar la alarma: radio, teléfono, pulsador de alarma cercano.</li>\n          <li>Estar en condiciones físicas para moverse rápido por el área.</li>\n        </ul>\n        <p><strong>La regla principal: dedicación exclusiva.</strong> El vigía no hace otras tareas mientras vigila. No sostiene piezas, no busca herramientas, no ayuda a soldar, no atiende el celular para asuntos personales. Un vigía distraído es igual a no tener vigía.</p>\n        <p><strong>Autoridad para detener el trabajo.</strong> El vigía puede y debe detener el trabajo en caliente si:</p>\n        <ul>\n          <li>las chispas caen donde no deben o aparece un combustible no protegido;</li>\n          <li>siente olor a gas o solvente, o suena una alarma;</li>\n          <li>cambian las condiciones del área;</li>\n          <li>tiene que retirarse y no hay relevo.</li>\n        </ul>\n        <p>Esta autoridad no depende del cargo. Un vigía con menos experiencia que el soldador tiene el mismo derecho a detener el trabajo. Es buena práctica acordar antes de empezar una <strong>señal clara</strong> (una palmada en el hombro, una señal con la mano), porque con la careta puesta el soldador no oye bien.</p>\n        <p><strong>¿Cuántos vigías?</strong> Si las chispas pueden llegar a otro piso, al otro lado de una pared o a un lugar que el vigía no ve desde su posición, se necesita un segundo vigía en ese lugar.</p>\n      ",
        "keyPoints": [
          "El vigía está capacitado, conoce el área y el permiso, y tiene cómo dar la alarma.",
          "Dedicación exclusiva: no hace otras tareas mientras vigila.",
          "Tiene autoridad para detener el trabajo sin importar el cargo; se acuerda una señal con el ejecutante."
        ],
        "practice": {
          "q": "El soldador le pide al vigía que sostenga una lámina \"solo dos minutos\". ¿Qué responde el vigía?",
          "options": [
            "No acepta: su única tarea es vigilar el área",
            "Acepta, porque son solo dos minutos",
            "Acepta, pero mira el área de reojo mientras sostiene"
          ]
        }
      },
      {
        "title": "Antes del trabajo: verificar el área y el extintor",
        "content": "\n        <p>El vigía llega antes de que empiece el trabajo y hace su propia verificación, aunque el permiso ya esté firmado.</p>\n        <p><strong>El área, en un radio de 11 metros:</strong></p>\n        <ul>\n          <li>Combustibles retirados o cubiertos con mantas ignífugas: cartón, madera, plásticos, trapos con aceite, polvo acumulado.</li>\n          <li>Rejillas, huecos y grietas en pisos y paredes tapados con material incombustible.</li>\n          <li><strong>Niveles inferiores</strong>: qué hay debajo del área. Si hay materiales combustibles, se retiran o se ubica otro vigía.</li>\n          <li>El otro lado de paredes y techos metálicos que se van a calentar.</li>\n          <li>Ductos y canaletas de cables protegidos.</li>\n          <li>Ruta de evacuación despejada y punto de encuentro conocido.</li>\n        </ul>\n        <p><strong>El extintor: inspección rápida antes de usarlo.</strong></p>\n        <ul>\n          <li><strong>Tipo</strong>: adecuado para las clases de fuego del área.</li>\n          <li><strong>Manómetro</strong> (en los presurizados): la aguja en la franja verde.</li>\n          <li><strong>Pasador de seguridad y sello</strong> puestos e intactos. Un sello roto puede indicar que el extintor se usó.</li>\n          <li><strong>Manguera y boquilla</strong> sin grietas ni obstrucciones.</li>\n          <li><strong>Cilindro</strong> sin golpes, corrosión ni fugas.</li>\n          <li><strong>Etiqueta</strong> con la fecha de la última recarga o mantenimiento vigente.</li>\n          <li><strong>Peso</strong>: al levantarlo, debe sentirse lleno.</li>\n        </ul>\n        <p>Si algo falla, se cambia el extintor <em>antes</em> de empezar.</p>\n        <p><strong>Coordinación con el ejecutante.</strong> Antes de encender el equipo, el vigía y el ejecutante revisan juntos hacia dónde van a ir las chispas, dónde se ubica el vigía para ver toda el área y cuál será la señal para detener el trabajo.</p>\n        <p><strong>Ubicación.</strong> El vigía se coloca donde pueda ver el punto de trabajo y el lugar donde caen las chispas, a una distancia segura del arco y sin quedar en la trayectoria de las partículas, con el extintor a la mano y la ruta de salida a su espalda.</p>\n      ",
        "keyPoints": [
          "El vigía verifica el radio de 11 metros, las aberturas, los niveles inferiores y el otro lado de paredes y techos.",
          "Extintor: tipo adecuado, manómetro en verde, pasador y sello, manguera bien, recarga vigente.",
          "Acuerda con el ejecutante la ubicación y la señal para detener el trabajo."
        ],
        "practice": {
          "q": "Al inspeccionar el extintor, la aguja del manómetro está fuera de la franja verde. ¿Qué hace el vigía?",
          "options": [
            "Le da unos golpes para que la aguja vuelva a su sitio",
            "Lo cambia por otro antes de empezar el trabajo",
            "Lo usa igual, porque todavía tiene algo de presión"
          ]
        }
      },
      {
        "title": "Durante el trabajo: qué observar y cuándo detener",
        "content": "\n        <p>Vigilar es una tarea activa. El vigía no espera a ver llamas: busca las señales tempranas.</p>\n        <p><strong>Qué observar:</strong></p>\n        <ul>\n          <li><strong>La trayectoria de las chispas</strong>: dónde caen, dónde rebotan, si ruedan hacia aberturas o debajo de equipos.</li>\n          <li><strong>Humo</strong>: un hilo de humo de un cartón o un aislamiento es la primera señal de una brasa.</li>\n          <li><strong>Olor</strong>: a quemado, a plástico derretido, a gas o a solvente.</li>\n          <li><strong>Cambios en el área</strong>: alguien deja material combustible, se abre una puerta, otro equipo empieza a trabajar cerca.</li>\n          <li><strong>El estado del ejecutante</strong>: si se quema la ropa o si se siente mal por los humos.</li>\n        </ul>\n        <p><strong>Cómo vigilar bien:</strong></p>\n        <ul>\n          <li>Mantener la vista en el área, no en el arco: la luz del arco daña los ojos y no deja ver lo que pasa alrededor.</li>\n          <li>Moverse si es necesario para ver detrás de las mamparas o debajo de los equipos.</li>\n          <li>Pedir pausas cortas para revisar lugares que no se ven desde la posición.</li>\n          <li>No usar el celular ni conversar de otros temas.</li>\n        </ul>\n        <p><strong>Cuándo detener el trabajo de inmediato:</strong></p>\n        <ul>\n          <li>aparece humo, brasas o llamas en cualquier lugar;</li>\n          <li>las chispas caen en un lugar no protegido o pasan a otro nivel;</li>\n          <li>se siente olor a gas o solvente, o suena una alarma;</li>\n          <li>alguien entra al área sin protección;</li>\n          <li>el vigía necesita retirarse, aunque sea por unos minutos.</li>\n        </ul>\n        <p><strong>Si hay un conato:</strong> el vigía da la señal para detener el trabajo, avisa, usa el extintor si el fuego es pequeño y puede hacerlo con seguridad, y da la alarma general si no logra controlarlo en segundos.</p>\n        <p><strong>Lo que el vigía no debe hacer:</strong> ayudar al soldador \"solo un momento\", sostener piezas, alejarse a buscar algo o asumir que \"todo está bien\" porque no ve llamas.</p>\n      ",
        "keyPoints": [
          "Se observa la trayectoria de las chispas, el humo, los olores y los cambios en el área, no el arco.",
          "El trabajo se detiene ante humo, chispas fuera de control, olor a gas, alarmas o si el vigía debe retirarse.",
          "El vigía nunca ayuda al soldador ni se aleja \"solo un momento\"."
        ],
        "practice": {
          "q": "Mientras vigila, ¿hacia dónde debe mirar el vigía?",
          "options": [
            "Directamente al arco, para ver la calidad de la soldadura",
            "Al celular, para estar disponible ante cualquier llamada",
            "Al área donde caen las chispas y a los lugares cercanos"
          ]
        }
      },
      {
        "title": "Cómo usar un extintor portátil",
        "content": "\n        <p><strong>Antes de atacar el fuego, tres preguntas rápidas:</strong></p>\n        <ol>\n          <li>¿El fuego es pequeño, del tamaño de una caneca de basura o menor?</li>\n          <li>¿Tengo el extintor adecuado para esta clase de fuego?</li>\n          <li>¿Tengo una salida a mi espalda y no hay humo que me rodee?</li>\n        </ol>\n        <p>Si la respuesta a alguna es <strong>no</strong>, no se ataca: se da la alarma y se evacúa.</p>\n        <p><strong>Técnica en cuatro pasos</strong> (conocida en inglés como <em>PASS</em>):</p>\n        <ol>\n          <li><strong>Halar el pasador</strong> de seguridad, rompiendo el sello.</li>\n          <li><strong>Apuntar</strong> la boquilla a la <strong>base del fuego</strong>, no a las llamas. Las llamas son el gas que arde; la base es donde está el combustible.</li>\n          <li><strong>Presionar</strong> la palanca de forma continua.</li>\n          <li><strong>Barrer</strong> de lado a lado la base del fuego hasta apagarlo.</li>\n        </ol>\n        <p><strong>Distancia y posición.</strong> Acérquese a unos 2 o 3 metros, con el viento o la corriente de aire a su espalda en espacios abiertos, para que el agente vaya hacia el fuego y el humo se aleje de usted. Avance a medida que el fuego disminuye.</p>\n        <p><strong>Duración.</strong> Un extintor portátil se vacía en muy pocos segundos, por lo general menos de veinte. No hay tiempo para probarlo ni para dudar.</p>\n        <p><strong>Después de apagarlo:</strong></p>\n        <ul>\n          <li>No le dé la espalda al fuego: retroceda mirándolo, porque puede reavivarse.</li>\n          <li>Revise que no queden brasas, especialmente en cartones, aislamientos y espacios ocultos.</li>\n          <li>Informe del uso del extintor para que se recargue; un extintor usado, aunque sea un poco, ya no está listo.</li>\n        </ul>\n        <p><strong>Cuándo dejar de intentarlo:</strong> si el fuego crece pese a la descarga, si el humo empieza a llenar el área, si se acaba el extintor y el fuego sigue, o si el fuego bloquea su salida. En ese caso, salga, cierre las puertas si puede hacerlo sin riesgo y dé la alarma.</p>\n      ",
        "keyPoints": [
          "Solo se ataca un fuego pequeño, con el extintor adecuado y con la salida a la espalda.",
          "Técnica: halar el pasador, apuntar a la base, presionar y barrer, a unos 2 o 3 metros.",
          "Un extintor dura pocos segundos; si el fuego crece o el humo llena el área, se evacúa y se da la alarma."
        ],
        "practice": {
          "q": "Al usar el extintor, ¿hacia dónde se apunta la boquilla?",
          "options": [
            "A la base del fuego",
            "Al humo que sale del fuego",
            "A la punta de las llamas"
          ]
        }
      },
      {
        "title": "Después del trabajo: la vigilancia posterior",
        "content": "\n        <p>El trabajo del vigía no termina cuando se apaga el equipo. En el caso con que empieza este curso, el incendio empezó veinticinco minutos después de terminado el corte, cuando el vigía ya se había ido.</p>\n        <p><strong>Cuánto tiempo.</strong> La NFPA 51B, en su edición 2019, aumentó la vigilancia posterior de 30 minutos a <strong>al menos 60 minutos</strong>, y permite que quien autoriza el permiso exija hasta <strong>tres horas adicionales de monitoreo</strong> según el riesgo del área. Algunos procedimientos y normas más antiguas mencionan 30 minutos. El vigía cumple siempre el tiempo que indique el permiso, y si tiene dudas sobre el área, informa para que se amplíe.</p>\n        <p><strong>Qué hacer durante ese tiempo:</strong></p>\n        <ul>\n          <li>Recorrer todo el radio por donde pudieron llegar chispas.</li>\n          <li>Bajar a revisar los niveles inferiores y pasar al otro lado de paredes y techos.</li>\n          <li>Revisar ductos, canaletas, aislamientos, cartones y trapos.</li>\n          <li>Comprobar la temperatura de las superficies que se calentaron, con termómetro o acercando el dorso de la mano con guante, sin tocar directamente.</li>\n          <li>Buscar humo, olor a quemado y cualquier brasa.</li>\n        </ul>\n        <p><strong>El cambio de turno no termina la vigilancia.</strong> Si el vigía debe irse, entrega la vigilancia <strong>en persona</strong> a otro vigía capacitado, le explica qué se hizo y dónde cayeron chispas, y el relevo se registra. Nunca se deja el área sola porque \"ya casi se cumple el tiempo\".</p>\n        <p><strong>Cierre.</strong> Cumplido el tiempo, el vigía y quien autorizó (o el ejecutante, según el procedimiento) recorren el área, confirman que no hay riesgo y firman el cierre del permiso. Solo entonces se retiran mantas y barreras.</p>\n        <p><strong>Reportar.</strong> Cualquier conato, aunque se haya apagado fácilmente, se reporta como incidente. Indica que una chispa llegó a un combustible que debió estar protegido, y eso hay que corregirlo en los próximos trabajos.</p>\n      ",
        "keyPoints": [
          "NFPA 51B (2019): al menos 60 minutos de vigilancia posterior, más monitoreo adicional si quien autoriza lo exige.",
          "Se revisa todo el radio, los niveles inferiores, el otro lado de paredes y techos, y las superficies calientes.",
          "El cambio de turno no termina la vigilancia: el relevo se entrega en persona y se registra."
        ],
        "practice": {
          "q": "Faltan 15 minutos de vigilancia posterior y el vigía debe irse por cambio de turno. ¿Qué hace?",
          "options": [
            "Se va, porque ya casi se cumple el tiempo",
            "Entrega la vigilancia en persona a otro vigía capacitado",
            "Deja el extintor junto al área y se va"
          ]
        }
      },
      {
        "title": "Respuesta a emergencias y primeros auxilios por quemaduras",
        "content": "\n        <p>Si el fuego se sale de control, el vigía deja de ser \"el que apaga\" y pasa a ser \"el que avisa y protege a las personas\".</p>\n        <p><strong>Secuencia de respuesta:</strong></p>\n        <ol>\n          <li><strong>Dar la alarma</strong> por el medio establecido: pulsador, radio, teléfono de emergencias interno. Indique con claridad qué pasa y dónde.</li>\n          <li><strong>Avisar a las personas</strong> del área para que salgan.</li>\n          <li><strong>Cortar la energía o el gas</strong> del equipo de soldadura o del área, solo si sabe hacerlo y puede hacerlo sin riesgo.</li>\n          <li><strong>Evacuar</strong> por la ruta establecida, sin usar ascensores, cerrando puertas detrás de usted si es posible, para frenar el humo.</li>\n          <li><strong>Ir al punto de encuentro</strong> y reportar quién estaba en el área y si alguien falta.</li>\n          <li><strong>Informar a la brigada o a los bomberos</strong> lo que sabe: dónde empezó, qué material arde, si hay cilindros de gas o químicos cerca.</li>\n        </ol>\n        <p><strong>Si hay humo:</strong> desplácese agachado, donde el aire es más limpio; cúbrase la nariz y la boca con un paño; antes de abrir una puerta, toque la manija con el dorso de la mano: si está caliente, busque otra salida.</p>\n        <p><strong>Si la ropa de una persona se enciende:</strong> que se detenga, se tire al piso y ruede cubriéndose la cara. Puede ayudar a apagarla con una manta ignífuga o una prenda gruesa. No la deje correr: el aire aviva las llamas.</p>\n        <p><strong>Primeros auxilios básicos en quemaduras:</strong></p>\n        <ul>\n          <li>Enfriar la zona con <strong>agua corriente a temperatura ambiente</strong> durante unos veinte minutos.</li>\n          <li>Retirar anillos, relojes y prendas que no estén pegadas a la piel, antes de que la zona se inflame.</li>\n          <li><strong>No</strong> aplicar hielo, cremas, aceites, pasta de dientes ni remedios caseros.</li>\n          <li><strong>No</strong> reventar las ampollas.</li>\n          <li>Cubrir con un apósito limpio y no adherente.</li>\n          <li>Buscar atención médica en quemaduras extensas, profundas, en la cara, las manos, los genitales o las articulaciones, o si la persona inhaló humo.</li>\n        </ul>\n        <p><strong>Después de la emergencia:</strong> nadie vuelve a entrar hasta que la brigada o los bomberos lo autoricen. El evento se reporta y se investiga.</p>\n      ",
        "keyPoints": [
          "Si el fuego se sale de control: alarma, avisar, cortar energía o gas si es seguro, evacuar y reportar en el punto de encuentro.",
          "Con humo, desplazarse agachado y tocar las puertas antes de abrirlas.",
          "Quemaduras: enfriar con agua corriente unos veinte minutos; nada de hielo ni cremas, y no reventar ampollas."
        ],
        "practice": {
          "q": "¿Cómo se enfría una quemadura como primer auxilio?",
          "options": [
            "Con hielo directo durante varios minutos",
            "Con crema dental o aceite de cocina",
            "Con agua corriente a temperatura ambiente unos veinte minutos"
          ]
        }
      },
      {
        "title": "Rociadores, gabinetes, detectores y cómo dar la alarma",
        "content": "\n        <p>El extintor del vigía es la primera línea. Detrás de él están los <strong>sistemas fijos</strong> de la planta. El vigía debe conocerlos, saber si están en servicio y saber activar la respuesta cuando el extintor no basta.</p>\n        <p><strong>Rociadores automáticos</strong> (NFPA 13). Cada boquilla se abre sola cuando el calor rompe su ampolla o fusible, normalmente entre 57 °C y 141 °C según el tipo. Solo se abren las boquillas calentadas, no todas. El vigía verifica que:</p>\n        <ul>\n          <li>el sistema del área está en servicio (pregunte al responsable del área; una válvula cerrada lo deja inútil);</li>\n          <li>no hay materiales a menos del despeje requerido bajo las boquillas;</li>\n          <li>las mantas o protecciones del trabajo no tapan las boquillas.</li>\n        </ul>\n        <p><strong>Gabinetes y mangueras contra incendio.</strong> Se usan solo si el vigía está entrenado y el procedimiento de la planta lo permite. Una manga de agua en un fuego eléctrico o de líquidos inflamables puede empeorar la situación.</p>\n        <p><strong>Detectores y alarma</strong> (NFPA 72). Los detectores de humo o calor activan la alarma general. Durante un trabajo en caliente pueden estar desactivados de forma autorizada; en ese caso, <strong>el vigía es el detector</strong>, y su atención no se puede interrumpir ni un minuto.</p>\n        <p><strong>Cómo dar la alarma.</strong> Antes de empezar, el vigía debe saber:</p>\n        <ul>\n          <li>dónde está la <strong>estación manual de alarma</strong> (pulsador) más cercana;</li>\n          <li>el <strong>número o canal de radio</strong> de la brigada o de la central de emergencias;</li>\n          <li>la <strong>ruta de evacuación</strong> y el punto de encuentro del área;</li>\n          <li>qué decir: <em>dónde</em> es el fuego, <em>qué</em> se está quemando, si hay <em>personas</em> lesionadas o atrapadas y qué se ha hecho.</li>\n        </ul>\n        <p><strong>La regla de la alarma temprana:</strong> se da la alarma <strong>antes</strong> de intentar apagar el fuego, o al mismo tiempo pidiéndole a alguien que lo haga. Si el extintor funciona, se cancela; si no, la brigada ya va en camino. Perder dos minutos tratando de apagar solo puede ser la diferencia entre un conato y un incendio.</p>\n        <p><strong>Si el fuego supera el extintor</strong>: evacuar, cerrar puertas al salir si es seguro (contienen el humo y el fuego), no usar ascensores y esperar a la brigada en el punto de encuentro con la información del lugar.</p>\n      ",
        "keyPoints": [
          "El vigía verifica que rociadores y detectores estén en servicio y que nada tape las boquillas.",
          "Con los detectores desactivados, el vigía es el detector y no interrumpe su atención.",
          "Se da la alarma antes de intentar apagar, o a la vez; se sabe dónde está el pulsador y qué decir."
        ],
        "practice": {
          "q": "Los detectores del área fueron desactivados para el trabajo. ¿Qué implica para el vigía?",
          "options": [
            "Que el vigía es el detector y no puede interrumpir su atención",
            "Que puede descansar porque nadie verá el humo",
            "Que debe activar la alarma cada 15 minutos"
          ]
        }
      },
      {
        "title": "Comunicación del vigía con el equipo de trabajo",
        "content": "\n        <p>Un vigía que ve el peligro pero no logra que el ejecutante se detenga no sirve. La comunicación se acuerda <strong>antes</strong> de empezar.</p>\n        <p><strong>Antes del trabajo, una charla corta con el ejecutante:</strong></p>\n        <ul>\n          <li>cuál es la <strong>señal de alto</strong> (por ejemplo, tocar el hombro, una señal con la mano o una palabra por radio) y que se obedece de inmediato, sin discusión;</li>\n          <li>dónde se ubicará el vigía y qué zonas vigilará;</li>\n          <li>cómo se comunicarán si el ruido o la careta impiden oírse;</li>\n          <li>qué hará cada uno si se inicia un fuego.</li>\n        </ul>\n        <p><strong>El ejecutante con careta no ve.</strong> El soldador tiene la vista concentrada en el arco y la careta oscura le impide ver alrededor. El vigía es sus ojos. Por eso la señal de alto debe ser física o por radio, no un grito en un área ruidosa.</p>\n        <p><strong>Radio.</strong> Cuando el vigía está en otro nivel o al otro lado de un muro, se usa radio con un canal acordado. Antes de empezar se prueba que se escuchan bien. Si se pierde la comunicación, el trabajo se detiene hasta restablecerla.</p>\n        <p><strong>Varios ejecutantes.</strong> Si hay varios puntos de trabajo, cada vigía tiene asignada un área que puede ver por completo. Un vigía no cubre dos frentes que no ve al mismo tiempo.</p>\n        <p><strong>Relevo del vigía.</strong> Si el vigía necesita retirarse (relevo de turno, necesidad personal), el trabajo se detiene hasta que llegue el reemplazo. El relevo se hace en el sitio: el vigía saliente le explica al entrante qué ha visto, qué zonas hay que vigilar, dónde están el extintor y el pulsador y cuánto falta de la vigilancia posterior. El relevo se anota en el permiso.</p>\n        <p><strong>Reportar.</strong> Al terminar, el vigía informa al responsable del área lo que observó: chispas que llegaron lejos, conatos apagados, combustibles que aparecieron durante el trabajo o protecciones que se movieron. Esa información mejora el siguiente permiso.</p>\n        <p><strong>Autoridad.</strong> El vigía tiene autoridad para detener el trabajo, aunque el ejecutante tenga más experiencia o un cargo superior. Detener a tiempo no es una falta de respeto: es su trabajo.</p>\n      ",
        "keyPoints": [
          "Antes de empezar se acuerda la señal de alto, la ubicación del vigía y la comunicación con ruido o careta.",
          "Si se pierde la comunicación o el vigía debe retirarse, el trabajo se detiene hasta restablecerla o relevarlo.",
          "Cada vigía cubre solo lo que puede ver; el relevo se hace en el sitio y se anota en el permiso."
        ],
        "practice": {
          "q": "¿Cuál es una buena señal de alto con un soldador que usa careta en un área ruidosa?",
          "options": [
            "Gritarle desde lejos",
            "Una señal física acordada o por radio",
            "Apagar las luces del área"
          ]
        }
      },
      {
        "title": "La protección del propio vigía",
        "content": "\n        <p>El vigía está cerca del trabajo durante todo el tiempo que dura. Se expone a los mismos peligros que el ejecutante y a algunos propios.</p>\n        <p><strong>Radiación del arco.</strong> La luz de la soldadura de arco emite radiación ultravioleta que quema la córnea (\"ojo de arco\") sin que se sienta en el momento; el dolor aparece horas después. El vigía no mira el arco directamente: usa gafas o careta con filtro adecuado si debe mirar hacia el trabajo, o se ubica de manera que vea el área de chispas sin ver el arco. Las mamparas protegen también a quienes pasan cerca.</p>\n        <p><strong>Humos de soldadura.</strong> Contienen partículas metálicas y gases. El vigía se ubica, cuando sea posible, <strong>fuera de la columna de humo</strong> y con el viento a la espalda, y usa la protección respiratoria que indique el análisis del trabajo, especialmente en espacios cerrados o con metales recubiertos (galvanizado, pintura, cadmio).</p>\n        <p><strong>Chispas, escoria y calor.</strong> Ropa de algodón o ignífuga sin partes sintéticas, mangas largas, botas cerradas, guantes y casco. El vigía no usa ropa con grasa, aceite o solventes.</p>\n        <p><strong>Ruido.</strong> Pulidoras y corte generan ruido intenso; protección auditiva, combinada con un sistema de comunicación que funcione con ella.</p>\n        <p><strong>Ubicación segura.</strong> El vigía se ubica donde:</p>\n        <ul>\n          <li>vea toda la zona de chispas y los puntos por donde pueden escapar;</li>\n          <li>tenga el extintor al alcance y una ruta de salida libre a la espalda;</li>\n          <li>no quede bajo cargas suspendidas, en el recorrido de equipos ni en el borde de un nivel sin protección.</li>\n        </ul>\n        <p><strong>Trabajos en altura y espacios confinados.</strong> Si el vigía debe estar en altura, necesita la certificación de trabajo en alturas y su protección contra caídas. Si vigila un trabajo dentro de un espacio confinado, se coordinan las funciones con el vigía del espacio confinado; un mismo trabajador no puede cumplir ambos roles si eso le impide atender alguno de los dos.</p>\n        <p><strong>Calor y fatiga.</strong> Vigilancias largas, en sitios calientes, cansan y bajan la atención. Hidratación, pausas planeadas con relevo y rotación del vigía en trabajos prolongados.</p>\n      ",
        "keyPoints": [
          "El vigía no mira el arco sin filtro: la radiación ultravioleta quema la córnea.",
          "Se ubica fuera del humo, con ropa adecuada, protección auditiva y una ruta de salida libre.",
          "En altura o en espacios confinados necesita sus propias protecciones; en vigilancias largas, relevo y pausas."
        ],
        "practice": {
          "q": "¿Por qué el vigía no mira el arco de soldadura sin filtro?",
          "options": [
            "Porque se distrae de su tarea",
            "Porque el soldador se molesta",
            "Porque la radiación ultravioleta quema la córnea"
          ]
        }
      },
      {
        "title": "Vigilancia en lugares difíciles y detección del fuego latente",
        "content": "\n        <p>Los fuegos que escapan a la vigilancia suelen empezar donde el vigía no estaba mirando: <strong>al otro lado</strong>, <strong>abajo</strong> o <strong>dentro</strong>.</p>\n        <p><strong>Al otro lado de muros, pisos y techos.</strong> El calor se conduce por el metal y las chispas pasan por huecos. Cuando el trabajo es sobre un muro, un piso o un techo que tiene combustibles del otro lado, la NFPA 51B pide un <strong>vigía adicional</strong> en ese lado. El vigía principal no puede cubrir un área que no ve.</p>\n        <p><strong>Niveles inferiores.</strong> Las chispas y la escoria caen por rejillas, pasos de tuberías, huecos de escaleras y juntas de pisos. Se sellan las aberturas, se ubica un vigía abajo si hay combustibles y se revisa toda la proyección vertical del trabajo.</p>\n        <p><strong>Ductos, bandejas de cables y paneles.</strong> Las chispas pueden entrar a un ducto o a una bandeja y avanzar por dentro. En paneles sándwich con núcleo combustible, el fuego puede avanzar por el interior del panel sin verse.</p>\n        <p><strong>Cómo detectar un fuego latente:</strong></p>\n        <ul>\n          <li><strong>Olfato</strong>: olor a quemado, plástico o madera caliente.</li>\n          <li><strong>Vista</strong>: humo leve, decoloración de la pintura, burbujas en recubrimientos, deformación.</li>\n          <li><strong>Tacto con precaución</strong>: acercar el dorso de la mano, sin tocar, a superficies cercanas al trabajo para percibir calor.</li>\n          <li><strong>Termómetro infrarrojo o cámara termográfica</strong>, cuando la empresa los tiene: permiten ver puntos calientes en muros, paneles y aislamientos sin tocarlos. Una temperatura que sube en vez de bajar durante la vigilancia es una señal de alerta.</li>\n        </ul>\n        <p><strong>La vigilancia posterior.</strong> La NFPA 51B (2019) exige que la vigilancia continúe <strong>al menos 60 minutos</strong> después de terminar el trabajo, y que el área se monitoree después durante un tiempo adicional que define el responsable según el riesgo (hasta 3 horas). En áreas con combustibles ocultos, paneles o polvo, el responsable del área puede exigir más. La vigilancia posterior incluye <strong>todos</strong> los lugares revisados durante el trabajo: el otro lado, abajo y los puntos por donde pudieron entrar chispas.</p>\n        <p><strong>Si encuentra algo:</strong> no lo deja \"para ver si sigue\". Lo informa de inmediato, lo controla si es seguro y extiende la vigilancia.</p>\n      ",
        "keyPoints": [
          "Si hay combustibles al otro lado de un muro, piso o techo, se necesita un vigía adicional en ese lado.",
          "El fuego latente se detecta por olor, humo leve, decoloración, calor o con termómetro infrarrojo.",
          "La vigilancia posterior dura al menos 60 minutos y revisa también el otro lado, abajo y los ductos."
        ],
        "practice": {
          "q": "Se suelda un muro que tiene cajas de cartón del otro lado. ¿Qué se necesita?",
          "options": [
            "Un vigía adicional del otro lado del muro",
            "Nada más, si el vigía principal está atento",
            "Mojar el muro al terminar el trabajo"
          ]
        }
      }
    ],
    "scenarios": [
      {
        "scenario": "Estás de vigía en un corte con pulidora. El soldador te pide que sostengas una lámina mientras él termina, porque \"son solo dos minutos\" y su ayudante se fue a almorzar.",
        "options": [
          "Sostengo la lámina: dos minutos no hacen diferencia.",
          "Le digo que no puedo dejar de vigilar y le propongo detener el corte hasta que regrese su ayudante o llegue otra persona.",
          "Sostengo la lámina con una mano y el extintor con la otra."
        ]
      },
      {
        "scenario": "Terminó el corte. Son las 4:00 p. m., el turno cambia y quieres irte. Recuerdas que hay una rejilla de piso cerca del área y no has bajado a revisar el cuarto de abajo.",
        "options": [
          "Me voy: si hubiera algo, ya habría humo.",
          "Bajo a revisar el cuarto inferior, completo el tiempo de vigilancia y, si debo irme, entrego el puesto en persona a otro vigía.",
          "Le pido al guarda de seguridad que pase por el área cuando haga su ronda."
        ]
      },
      {
        "scenario": "Durante la vigilancia ves humo saliendo de una caja de cartón bajo la rejilla. Hay un extintor ABC a tres metros y el soldador sigue trabajando cerca, sin darse cuenta.",
        "options": [
          "Hago la señal para detener el trabajo, aviso, tomo el extintor y ataco la base del fuego si sigue siendo pequeño; si crece, doy la alarma y evacúo.",
          "Voy a buscar al supervisor para que decida qué hacer.",
          "Le echo agua del termo que tengo, porque está más cerca que el extintor."
        ]
      },
      {
        "scenario": "Al llegar a tu puesto como vigía, revisas el extintor asignado: el pasador está puesto, pero el sello está roto y el extintor se siente liviano.",
        "options": [
          "Lo uso igual: el pasador está en su lugar y eso es lo importante.",
          "Aviso y no dejo empezar el trabajo hasta tener un extintor cargado y en buen estado.",
          "Empiezo la vigilancia y voy por otro extintor cuando el soldador haga una pausa."
        ]
      },
      {
        "scenario": "Intentas apagar un fuego en un estante con cartones. Ya vaciaste el extintor, las llamas siguen creciendo y el humo empieza a bajar del techo.",
        "options": [
          "Voy por otro extintor al fondo de la bodega y vuelvo a intentarlo.",
          "Me quedo intentando sofocarlo con una chaqueta.",
          "Salgo agachado por la ruta de evacuación, cierro la puerta si puedo, doy la alarma y reporto en el punto de encuentro."
        ]
      },
      {
        "scenario": "Estás de vigía y los detectores del área fueron desactivados para el trabajo. Te llega un mensaje urgente al celular de un familiar.",
        "options": [
          "Lo leo rápido: solo son unos segundos.",
          "Pido detener el trabajo, atiendo el mensaje y retomamos cuando vuelvo a vigilar con atención completa.",
          "Le pido al soldador que vigile mientras tanto."
        ]
      },
      {
        "scenario": "Ves humo saliendo de una bandeja de cartón cerca del trabajo. El extintor está a tu lado y nadie más lo ha visto.",
        "options": [
          "Doy la señal de alto, aviso a la brigada o pido a alguien que dé la alarma y ataco el fuego con el extintor.",
          "Intento apagarlo yo solo y aviso solo si no logro apagarlo.",
          "Espero a ver si el humo se detiene solo."
        ]
      },
      {
        "scenario": "El soldador trabaja en un piso de rejilla y abajo hay una zona de empaque con cartón. Eres el único vigía, arriba junto al soldador.",
        "options": [
          "Me asomo por la rejilla de vez en cuando.",
          "Pido detener el trabajo hasta que se cubra la rejilla, se retire o proteja el cartón y haya un vigía abajo.",
          "Pongo un extintor abajo y sigo vigilando arriba."
        ]
      },
      {
        "scenario": "Durante la vigilancia posterior, notas con el dorso de la mano que un panel sándwich cerca del trabajo se siente cada vez más caliente, aunque no ves humo.",
        "options": [
          "No hay humo, así que cierro el permiso a la hora prevista.",
          "Lo enfrío con el extintor de polvo y me voy.",
          "Informo de inmediato, pido apoyo de la brigada para revisar el panel y extiendo la vigilancia."
        ]
      },
      {
        "scenario": "Faltan 20 minutos para terminar la vigilancia posterior y llega tu relevo. Tú debes irte ya.",
        "options": [
          "Le explico en el sitio qué zonas vigilar, dónde está el extintor y el pulsador, y cuánto falta; lo anotamos en el permiso.",
          "Me voy y le dejo un mensaje por radio.",
          "Cierro el permiso: 40 minutos es suficiente."
        ]
      }
    ],
    "exam": [
      {
        "q": "¿Qué tres elementos forman el triángulo del fuego?",
        "options": [
          "Combustible, oxígeno y calor.",
          "Agua, humo y cenizas.",
          "Electricidad, metal y presión, que son las condiciones de los trabajos de soldadura."
        ]
      },
      {
        "q": "Una viga metálica calentada por una soldadura enciende un cartón al otro lado de la pared. ¿Cómo se transmitió el calor?",
        "options": [
          "Por convección.",
          "Por conducción a través del metal de la viga.",
          "Por radiación."
        ]
      },
      {
        "q": "¿Qué agente NO se debe usar en un fuego de gasolina o solvente?",
        "options": [
          "Polvo químico seco, porque deja residuos que contaminan el producto.",
          "Espuma, porque cubre el líquido y no permite ver si el fuego se apagó.",
          "Agua."
        ]
      },
      {
        "q": "¿A qué clase de fuego corresponde un incendio en un tablero eléctrico energizado?",
        "options": [
          "Clase C: equipos eléctricos energizados.",
          "Clase A.",
          "Clase K, porque los tableros tienen grasa en los contactos y las borneras de conexión."
        ]
      },
      {
        "q": "¿Qué extintor se usa en un fuego de una freidora industrial con aceite?",
        "options": [
          "Un extintor de agua a presión, para enfriar rápidamente el aceite caliente.",
          "Un extintor de agente húmedo clase K.",
          "Un extintor de clase D, diseñado para metales combustibles."
        ]
      },
      {
        "q": "¿Cuál es la regla principal del vigía de fuego mientras vigila?",
        "options": [
          "Ayudar al soldador en lo que necesite para que el trabajo termine más rápido y el área quede libre.",
          "Ubicarse lejos del área.",
          "Dedicarse solo a vigilar."
        ]
      },
      {
        "q": "Un vigía con menos experiencia que el soldador ve chispas cayendo sobre un estante con cartones. ¿Qué hace?",
        "options": [
          "Detiene el trabajo con la señal acordada: su autoridad no depende del cargo.",
          "Espera a que el soldador termine, porque él tiene más experiencia y sabe lo que hace.",
          "Le comenta al supervisor al final del turno para que se tenga en cuenta en el siguiente trabajo."
        ]
      },
      {
        "q": "Las chispas del trabajo pueden caer a un piso inferior que el vigía no ve desde su posición. ¿Qué corresponde?",
        "options": [
          "Asumir que las chispas se apagan antes de llegar al piso de abajo.",
          "Ubicar un segundo vigía en ese nivel o tapar las aberturas y retirar los combustibles.",
          "Pedir al soldador que trabaje más rápido para que caigan menos chispas."
        ]
      },
      {
        "q": "Al inspeccionar un extintor antes del trabajo, ¿qué indica un sello roto?",
        "options": [
          "Que el extintor está nuevo y listo para usarse en el área de trabajo.",
          "Que el extintor tiene más presión de la normal y conviene descargarlo un poco.",
          "Que pudo haberse usado; hay que verificarlo o cambiarlo antes de empezar."
        ]
      },
      {
        "q": "Durante el trabajo, ¿por qué el vigía no debe mirar directamente el arco de soldadura?",
        "options": [
          "Porque la luz daña los ojos y le impide ver lo que pasa en el área.",
          "Porque distrae al soldador y le hace cometer errores en el cordón de soldadura.",
          "Porque el procedimiento lo prohíbe por razones de calidad de la soldadura."
        ]
      },
      {
        "q": "¿Cuál de estas situaciones obliga al vigía a detener el trabajo de inmediato?",
        "options": [
          "Que el soldador cambie de electrodo.",
          "Que el vigía sienta olor a gas o a solvente en el área.",
          "Que el trabajo se demore más de lo previsto en el permiso de trabajo, sin otros cambios en el área."
        ]
      },
      {
        "q": "Antes de atacar un fuego con un extintor, ¿qué debe confirmar el vigía?",
        "options": [
          "Que el supervisor de área haya autorizado por radio el uso del extintor para no gastarlo sin necesidad.",
          "Que haya al menos tres personas cerca para ayudarle a combatir el fuego.",
          "Que el fuego sea pequeño, que el extintor sea el adecuado y que tenga la salida a su espalda."
        ]
      },
      {
        "q": "En la técnica de uso del extintor, ¿hacia dónde se dirige la descarga?",
        "options": [
          "A la base del fuego, barriendo de lado a lado.",
          "A la parte alta de las llamas, donde el fuego es más intenso.",
          "Al techo, para que el agente caiga sobre el fuego como si fuera lluvia."
        ]
      },
      {
        "q": "Según la edición 2019 de la NFPA 51B, ¿cuánto dura como mínimo la vigilancia después de terminar el trabajo?",
        "options": [
          "15 minutos, el tiempo que tarda en enfriarse la pieza soldada.",
          "Al menos 60 minutos, con monitoreo adicional si quien autoriza lo exige.",
          "Hasta que el ejecutante guarde el equipo de soldadura."
        ]
      },
      {
        "q": "El vigía vació el extintor, el fuego sigue creciendo y el humo baja del techo. ¿Qué hace?",
        "options": [
          "Busca otro extintor en el fondo de la bodega y vuelve a intentarlo.",
          "Abre todas las ventanas para que salga el humo y sigue combatiendo con una manta.",
          "Sale por la ruta de evacuación, cierra la puerta si puede y da la alarma."
        ]
      },
      {
        "q": "Una persona sufrió una quemadura en el antebrazo. ¿Cuál es el primer auxilio correcto?",
        "options": [
          "Enfriar con agua corriente a temperatura ambiente unos veinte minutos.",
          "Aplicar hielo directo sobre la piel y cubrir con crema para que no se formen ampollas.",
          "Reventar las ampollas para que salga el líquido y la piel se seque más rápido."
        ]
      },
      {
        "q": "¿Cuándo se da la alarma si el vigía detecta un fuego incipiente?",
        "options": [
          "Al terminar el turno, en el informe del permiso.",
          "Antes de intentar apagarlo, o al mismo tiempo pidiendo ayuda.",
          "Solo si el extintor no logra apagar el fuego en el primer intento."
        ]
      },
      {
        "q": "¿Por qué el vigía verifica que los rociadores del área están en servicio?",
        "options": [
          "Porque el agua de los rociadores apaga cualquier fuego.",
          "Porque los rociadores reemplazan al vigía de fuego.",
          "Porque una válvula cerrada deja el sistema inútil."
        ]
      },
      {
        "q": "¿Qué debe saber el vigía sobre la alarma antes de empezar?",
        "options": [
          "Dónde está el pulsador y a quién avisar.",
          "Solo el número de su supervisor directo.",
          "Cómo desactivar la alarma si suena por el humo."
        ]
      },
      {
        "q": "¿Qué pasa si se pierde la comunicación por radio entre el vigía y el ejecutante?",
        "options": [
          "Se cambia de canal sin detener el trabajo.",
          "El trabajo se detiene hasta restablecerla.",
          "El ejecutante sigue y el vigía se acerca cuando pueda."
        ]
      },
      {
        "q": "¿Cómo se hace el relevo del vigía?",
        "options": [
          "Al final del turno, en la oficina del responsable del área.",
          "Por radio, sin interrumpir el trabajo en ningún momento.",
          "En el sitio, explicando zonas, equipos y tiempo restante, y anotándolo en el permiso."
        ]
      },
      {
        "q": "¿Dónde se ubica el vigía respecto al humo de la soldadura?",
        "options": [
          "Fuera de la columna de humo, con el viento a la espalda.",
          "Dentro de la columna de humo, para ver mejor las chispas.",
          "Justo encima del ejecutante para cubrir más área."
        ]
      },
      {
        "q": "Según la NFPA 51B, ¿qué se necesita si hay combustibles al otro lado de un muro que se va a soldar?",
        "options": [
          "Nada más, si el vigía principal tiene un extintor de CO₂.",
          "Un vigía adicional en el otro lado del muro.",
          "Mojar el muro del lado del trabajo cada 10 minutos."
        ]
      },
      {
        "q": "Durante la vigilancia posterior, la temperatura de un panel sube en vez de bajar. ¿Qué indica?",
        "options": [
          "Que el termómetro infrarrojo está mal calibrado.",
          "Que el panel se está enfriando lentamente, como es normal.",
          "Un posible fuego latente que debe informarse de inmediato."
        ]
      }
    ],
    "workshops": [
      {
        "title": "Taller 1. El fuego en su planta",
        "prompt": "Piense en los materiales que podrían arder en su planta.",
        "fields": [
          {
            "label": "Identifique tres combustibles presentes en su planta y en qué áreas están.",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Cuál de ellos podría encenderse con una chispa de soldadura y por qué?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Cómo se podría propagar el fuego desde ese punto (conducción, convección, radiación, contacto)?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 2. Los extintores de su planta",
        "prompt": "Revise los extintores de un área de su planta.",
        "fields": [
          {
            "label": "¿Qué tipos de extintores hay en el área y para qué clases de fuego sirven?",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Son los adecuados para los combustibles de esa área? ¿Falta alguno?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Qué agente no usaría nunca en esa área y por qué?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 3. Escoja un trabajo real",
        "prompt": "Escoja un trabajo en caliente real de su planta en el que haría de vigía. Lo usará en los demás talleres y en el proyecto final.",
        "fields": [
          {
            "label": "Describa el trabajo, dónde se hace y qué equipo se usa.",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Qué autoridad tendría usted como vigía y cómo la ejercería con un ejecutante de más experiencia?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Qué tareas no podría hacer mientras vigila?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 4. Antes del trabajo",
        "prompt": "Prepare la verificación previa del trabajo que escogió.",
        "fields": [
          {
            "label": "¿Qué combustibles revisaría en el radio de 11 metros, incluidos otros niveles y el otro lado de muros?",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Cómo inspeccionaría el extintor asignado?",
            "help": "Presión, sello, manguera, fecha de recarga, tipo adecuado.",
            "minWords": 25
          },
          {
            "label": "¿Dónde se ubicaría para ver toda el área?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 5. Durante el trabajo",
        "prompt": "Defina qué vigilaría durante el trabajo que escogió.",
        "fields": [
          {
            "label": "¿Hacia dónde irán las chispas y qué puntos vigilaría con más atención?",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Qué situaciones lo harían detener el trabajo?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Qué haría si el ejecutante no se detiene cuando usted lo pide?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 6. Uso del extintor",
        "prompt": "Aplique la técnica del extintor a un caso de su planta.",
        "fields": [
          {
            "label": "Describa paso a paso cómo atacaría un fuego incipiente en un material de su área.",
            "help": "",
            "minWords": 35
          },
          {
            "label": "¿Cuándo no intentaría apagarlo y evacuaría?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Ha practicado con un extintor real? Si no, ¿cómo podría practicar en su empresa?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 7. Vigilancia posterior",
        "prompt": "Planee la vigilancia posterior del trabajo que escogió.",
        "fields": [
          {
            "label": "¿Cuánto duraría la vigilancia posterior y qué lugares revisaría?",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Cómo evitaría que se acorte por el cambio de turno o la presión de terminar?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Qué informaría al cerrar el permiso?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 8. Emergencias en su área",
        "prompt": "Revise cómo respondería a una emergencia en el área del trabajo.",
        "fields": [
          {
            "label": "¿Cuál es la ruta de evacuación y el punto de encuentro del área?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Cómo atendería una quemadura mientras llega ayuda?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Qué haría si se prende la ropa de una persona?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 9. Sistemas fijos y alarma",
        "prompt": "Revise los sistemas fijos del área del trabajo que escogió.",
        "fields": [
          {
            "label": "¿Qué sistemas fijos hay en el área (rociadores, detectores, gabinetes) y cómo sabría si están en servicio?",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Dónde está el pulsador de alarma más cercano y a quién llamaría? ¿Qué le diría?",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Qué haría distinto si los detectores estuvieran desactivados?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 10. Comunicación con el equipo",
        "prompt": "Prepare la charla previa con el ejecutante del trabajo que escogió.",
        "fields": [
          {
            "label": "Escriba lo que le diría al ejecutante antes de empezar: señal de alto, ubicación y comunicación.",
            "help": "",
            "minWords": 35
          },
          {
            "label": "¿Cómo haría el relevo si tuviera que retirarse?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Qué medio de comunicación usaría si está en otro nivel?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 11. Su propia protección",
        "prompt": "Defina su propia protección como vigía en el trabajo que escogió.",
        "fields": [
          {
            "label": "¿Qué elementos de protección personal usaría y por qué?",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Cómo se protegería del arco y del humo?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Hay riesgos de altura, espacio confinado, cargas o tránsito de equipos en su ubicación? ¿Qué haría?",
            "help": "",
            "minWords": 25
          }
        ]
      },
      {
        "title": "Taller 12. Lugares difíciles",
        "prompt": "Busque en el área del trabajo los lugares donde un fuego podría pasar desapercibido.",
        "fields": [
          {
            "label": "¿Hay muros, pisos, techos, ductos o paneles con combustibles al otro lado o por dentro?",
            "help": "",
            "minWords": 30
          },
          {
            "label": "¿Cuántos vigías se necesitarían y dónde se ubicaría cada uno?",
            "help": "",
            "minWords": 25
          },
          {
            "label": "¿Cómo detectaría un fuego latente en esos lugares?",
            "help": "",
            "minWords": 25
          }
        ]
      }
    ],
    "project": {
      "title": "Proyecto final: plan de vigilancia de fuego de un trabajo de su planta",
      "intro": "Escriba el plan de vigilancia de fuego del trabajo en caliente que escogió en los talleres. Debe servirle a cualquier vigía que no conozca el área para hacer bien su trabajo. Antes de usarlo en campo, su empresa debe revisarlo y aprobarlo.",
      "sections": [
        {
          "label": "1. Trabajo, área y combustibles",
          "help": "El trabajo, el área, los combustibles en 11 metros, los ocultos y los de otros niveles o del otro lado.",
          "minWords": 55
        },
        {
          "label": "2. Vigías, ubicación y equipos",
          "help": "Cuántos vigías, dónde se ubica cada uno, qué extintores y qué inspección se hace antes.",
          "minWords": 55
        },
        {
          "label": "3. Comunicación y señal de alto",
          "help": "Charla previa, señal de alto, radio, relevo y qué se anota en el permiso.",
          "minWords": 55
        },
        {
          "label": "4. Qué se vigila durante el trabajo y cuándo se detiene",
          "help": "Puntos críticos, dirección de las chispas y condiciones de suspensión.",
          "minWords": 55
        },
        {
          "label": "5. Vigilancia posterior y cierre",
          "help": "Duración, lugares que se revisan, cómo se detecta el fuego latente y quién cierra.",
          "minWords": 55
        },
        {
          "label": "6. Emergencia y protección del vigía",
          "help": "Alarma, uso del extintor, evacuación, primeros auxilios y elementos de protección del vigía.",
          "minWords": 55
        }
      ],
      "rubric": [
        "Revisa combustibles a la vista, ocultos, en otros niveles y del otro lado de muros.",
        "Asigna vigías suficientes para ver todas las zonas de riesgo, sin otras tareas.",
        "Define una señal de alto que funciona con ruido y careta, y cómo se hace el relevo.",
        "Incluye una vigilancia posterior de al menos 60 minutos en todos los lugares revisados.",
        "Indica dónde está la alarma, qué se dice al reportar y cuándo se evacúa.",
        "Un vigía que no conoce el área podría seguirlo sin preguntar."
      ]
    }
  },
  {
    "id": "sustancias-quimicas",
    "title": "Manejo Seguro de Sustancias Químicas (SGA)",
    "hours": 1.5,
    "category": "prevencion_sst",
    "regulation": "Decreto 1496 de 2018 (SGA), Res. 773 de 2021, Ley 55 de 1993, Decreto 1072 de 2015",
    "legalNotice": "Formación teórica en riesgo químico para trabajadores que almacenan, trasvasan o usan productos químicos. No reemplaza la ficha de datos de seguridad de cada producto, el entrenamiento en el puesto ni el plan de emergencias de la empresa.",
    "summary": "Cómo entra un químico al cuerpo, qué exige la Resolución 773 de 2021, cómo leer los pictogramas y la etiqueta del SGA, cómo usar la ficha de datos de seguridad, cómo almacenar según compatibilidad, cómo trasvasar sin riesgo y qué hacer ante derrames y exposiciones.",
    "fieldCase": "En una bodega de aseo industrial, un operario trasvasó hipoclorito de sodio y ácido muriático a envases sin etiqueta. Más tarde, otro compañero los mezcló creyendo que eran el mismo producto para \"limpiar mejor\". Se liberó gas cloro y dos operarios terminaron intoxicados en urgencias.",
    "checklist": [
      "Cada recipiente, incluidos los de trasvase, tiene su etiqueta SGA legible.",
      "Conozco dónde está la ficha de datos de seguridad (FDS) en español de cada producto que uso.",
      "Leí en la FDS los peligros, los elementos de protección y los primeros auxilios.",
      "Almaceno según la matriz de compatibilidad: ácidos lejos de bases, oxidantes lejos de inflamables.",
      "Trasvaso con el procedimiento: recipiente adecuado, etiqueta, embudo, bandeja y ventilación.",
      "Nunca uso envases de alimentos o bebidas para productos químicos.",
      "Sé dónde están el kit antiderrames, el lavaojos y la ducha de emergencia, y que funcionan.",
      "Nunca mezclo productos, salvo que el procedimiento lo indique."
    ],
    "failureAnalysis": "Falla raíz: trasvase a recipientes sin etiqueta y desconocimiento de las incompatibilidades químicas. Nadie consultó la ficha de datos de seguridad.",
    "onSiteClosure": "Práctica en su empresa: recorrer el almacén de químicos verificando etiquetas, FDS disponibles y segregación por compatibilidad; probar el lavaojos y la ducha; y hacer un simulacro de control de derrame con el kit de la empresa.",
    "image": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80",
    "modules": [
      {
        "title": "El riesgo químico: cómo nos afecta un producto",
        "content": "\n        <p>En casi todas las empresas hay productos químicos: detergentes, desinfectantes, solventes, pinturas, combustibles, lubricantes, gases, ácidos y bases. Muchos accidentes ocurren con productos \"de uso diario\" que nadie considera peligrosos.</p>\n        <p><strong>Vías de ingreso al cuerpo:</strong></p>\n        <ul>\n          <li><strong>Inhalación</strong>: gases, vapores, nieblas y polvos que se respiran. Es la vía más frecuente en el trabajo.</li>\n          <li><strong>Contacto con la piel</strong>: algunos productos queman, otros irritan y otros atraviesan la piel sin dejar marca y pasan a la sangre.</li>\n          <li><strong>Contacto con los ojos</strong>: una salpicadura de un corrosivo puede causar ceguera en segundos.</li>\n          <li><strong>Ingestión</strong>: casi siempre por accidente: comer con las manos contaminadas o beber de un envase reutilizado.</li>\n        </ul>\n        <p><strong>Efectos agudos y crónicos.</strong> Los <em>agudos</em> aparecen enseguida: quemaduras, mareo, irritación, asfixia, intoxicación. Los <em>crónicos</em> aparecen después de meses o años de exposición a dosis pequeñas: daños en pulmones, hígado, riñones o sistema nervioso, dermatitis, alergias e incluso cáncer. Que un producto \"no haga nada\" hoy no significa que sea inofensivo.</p>\n        <p><strong>No solo dañan la salud.</strong> Los productos químicos también tienen <strong>peligros físicos</strong>: pueden incendiarse, explotar, reaccionar con otros productos o liberar gases a presión. Y tienen <strong>peligros para el ambiente</strong> cuando llegan al agua o al suelo.</p>\n        <p><strong>La dosis y el tiempo importan.</strong> El efecto depende de la cantidad que entra al cuerpo y de cuánto tiempo dura la exposición. Por eso los controles buscan reducir ambas: ventilar, encerrar los procesos, usar menos cantidad, trabajar menos tiempo expuesto y usar protección.</p>\n        <p><strong>El caso del curso</strong> muestra el peligro más común en limpieza: mezclar un producto con cloro (hipoclorito) con un ácido libera gas cloro, muy irritante para las vías respiratorias. Mezclar hipoclorito con productos con amoniaco libera cloraminas, también tóxicas. Esto ocurre en casas y en empresas todos los días.</p>\n      ",
        "keyPoints": [
          "Vías de ingreso: inhalación, piel, ojos e ingestión; la inhalación es la más frecuente en el trabajo.",
          "Hay efectos agudos (inmediatos) y crónicos (tras meses o años); también peligros físicos y ambientales.",
          "Mezclar hipoclorito con ácidos libera gas cloro; con amoniaco, cloraminas."
        ],
        "practice": {
          "q": "¿Cuál es la vía de ingreso de químicos más frecuente en el trabajo?",
          "options": [
            "La ingestión",
            "La inhalación",
            "Las inyecciones accidentales"
          ]
        }
      },
      {
        "title": "El SGA en Colombia: Decreto 1496 de 2018 y Resolución 773 de 2021",
        "content": "\n        <p>El <strong>Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos (SGA)</strong> es un sistema de las Naciones Unidas para que un mismo producto se clasifique y se comunique igual en cualquier país: con los mismos pictogramas, las mismas frases y la misma estructura de ficha de datos de seguridad.</p>\n        <p><strong>En Colombia:</strong></p>\n        <ul>\n          <li>La <strong>Ley 55 de 1993</strong> aprobó el Convenio 170 de la OIT sobre la seguridad en la utilización de los productos químicos en el trabajo.</li>\n          <li>El <strong>Decreto 1496 de 2018</strong> adoptó el SGA en el país.</li>\n          <li>La <strong>Resolución 773 de 2021</strong> de los Ministerios del Trabajo y de Salud definió las acciones que deben desarrollar los empleadores para aplicar el SGA en los lugares de trabajo.</li>\n        </ul>\n        <p><strong>Lo que la Resolución 773 de 2021 exige a la empresa, en términos generales:</strong></p>\n        <ul>\n          <li>Tener un <strong>inventario</strong> de los productos químicos que usa.</li>\n          <li>Asegurarse de que sus proveedores entreguen productos <strong>clasificados y etiquetados</strong> según el SGA, con su <strong>ficha de datos de seguridad (FDS)</strong> en español.</li>\n          <li>Mantener las etiquetas en todos los recipientes, incluidos los que se llenan por trasvase en la empresa.</li>\n          <li>Tener las FDS <strong>disponibles</strong> para los trabajadores en el área de trabajo.</li>\n          <li>Evaluar la exposición de los trabajadores y aplicar medidas de control.</li>\n          <li><strong>Capacitar</strong> a los trabajadores en la comunicación de peligros: etiquetas, FDS, procedimientos y emergencias.</li>\n        </ul>\n        <p><strong>Obligaciones de los trabajadores:</strong> cumplir los procedimientos, usar los elementos de protección, no retirar ni dañar las etiquetas, informar sobre recipientes sin rotular y sobre cualquier situación de riesgo.</p>\n        <p><strong>Otras normas relacionadas.</strong> El <strong>Decreto 1079 de 2015</strong> regula el transporte terrestre de mercancías peligrosas (con su propio sistema de rótulos para vehículos y embalajes). El <strong>Decreto 1347 de 2021</strong> creó el Programa de Prevención de Accidentes Mayores para las instalaciones que manejan sustancias peligrosas en cantidades iguales o superiores a los umbrales que fija la norma.</p>\n        <p><strong>El SGA y el rombo de la NFPA 704.</strong> Muchas empresas en Colombia todavía usan el rombo de colores de la NFPA 704 (azul para salud, rojo para inflamabilidad, amarillo para inestabilidad, blanco para riesgos especiales, con números del 0 al 4). Es útil para los bomberos y para identificar tanques y áreas, pero <strong>no reemplaza</strong> la etiqueta del SGA.</p>\n      ",
        "keyPoints": [
          "El Decreto 1496 de 2018 adoptó el SGA; la Res. 773 de 2021 define cómo aplicarlo en los lugares de trabajo.",
          "La empresa debe tener inventario, etiquetas en todos los recipientes, FDS en español disponibles, evaluación de exposición y capacitación.",
          "El rombo NFPA 704 es complementario: no reemplaza la etiqueta SGA."
        ],
        "practice": {
          "q": "¿Qué norma colombiana adoptó el Sistema Globalmente Armonizado (SGA)?",
          "options": [
            "La Resolución 2674 de 2013",
            "El Decreto 614 de 1984",
            "El Decreto 1496 de 2018"
          ]
        }
      },
      {
        "title": "Los pictogramas del SGA y las palabras de advertencia",
        "content": "\n        <p>El SGA usa <strong>nueve pictogramas</strong>: un símbolo negro dentro de un rombo con borde rojo sobre fondo blanco. Cada uno agrupa un tipo de peligro.</p>\n        <ul>\n          <li><strong>Bomba explotando</strong>: explosivos, sustancias que reaccionan por sí solas, peróxidos orgánicos.</li>\n          <li><strong>Llama</strong>: inflamables (líquidos, gases, aerosoles, sólidos), sustancias que se calientan solas o que liberan gases inflamables con el agua.</li>\n          <li><strong>Llama sobre un círculo</strong>: comburentes u oxidantes, que aportan oxígeno y hacen que otros materiales ardan con más fuerza.</li>\n          <li><strong>Cilindro de gas</strong>: gases a presión, que pueden explotar con el calor; los gases refrigerados pueden causar quemaduras por frío.</li>\n          <li><strong>Corrosión</strong> (líquido que cae sobre una mano y un metal): corroe metales y causa quemaduras graves en la piel y lesiones en los ojos.</li>\n          <li><strong>Calavera y tibias</strong>: toxicidad aguda grave; puede ser mortal en pequeñas cantidades.</li>\n          <li><strong>Signo de exclamación</strong>: toxicidad aguda menor, irritación de piel, ojos o vías respiratorias, sensibilización de la piel, efectos narcóticos.</li>\n          <li><strong>Peligro para la salud</strong> (silueta humana con una estrella en el pecho): efectos graves y a largo plazo: cáncer, daños genéticos, efectos en la reproducción, sensibilización respiratoria, daño a órganos, peligro por aspiración.</li>\n          <li><strong>Medio ambiente</strong> (árbol seco y pez muerto): tóxico para los organismos acuáticos.</li>\n        </ul>\n        <p><strong>Palabras de advertencia.</strong> Indican la gravedad relativa del peligro:</p>\n        <ul>\n          <li><strong>\"Peligro\"</strong> para las categorías más graves.</li>\n          <li><strong>\"Atención\"</strong> para las menos graves.</li>\n        </ul>\n        <p>La etiqueta lleva una sola palabra de advertencia, la que corresponde al peligro más grave del producto.</p>\n        <p><strong>Ojo con el pictograma de \"peligro para la salud\".</strong> Es el que más se ignora porque los efectos no se ven el día de la exposición. Un solvente con este pictograma puede no causar molestias hoy y producir daño en el hígado o cáncer después de años. Merece tanto respeto como la calavera.</p>\n        <p><strong>Un producto puede tener varios pictogramas.</strong> Por ejemplo, un solvente puede tener la llama (inflamable), el signo de exclamación (irritante) y el de peligro para la salud. Hay que tener en cuenta todos.</p>\n      ",
        "keyPoints": [
          "El SGA tiene nueve pictogramas en rombos con borde rojo: cada uno agrupa un tipo de peligro.",
          "\"Peligro\" indica las categorías más graves; \"Atención\", las menos graves.",
          "El pictograma de peligro para la salud advierte efectos a largo plazo como cáncer o daño a órganos."
        ],
        "practice": {
          "q": "¿Qué indica el pictograma de la llama sobre un círculo?",
          "options": [
            "Que el producto es comburente u oxidante",
            "Que el producto es tóxico para los peces",
            "Que el producto es un gas a presión"
          ]
        }
      },
      {
        "title": "La etiqueta SGA y los recipientes de trasvase",
        "content": "\n        <p><strong>Elementos de una etiqueta SGA:</strong></p>\n        <ol>\n          <li><strong>Identificador del producto</strong>: nombre comercial y, para mezclas, los componentes peligrosos.</li>\n          <li><strong>Pictogramas</strong> de peligro.</li>\n          <li><strong>Palabra de advertencia</strong>: \"Peligro\" o \"Atención\".</li>\n          <li><strong>Indicaciones de peligro</strong> (frases H): describen el peligro, por ejemplo \"Provoca quemaduras graves en la piel y lesiones oculares graves\". Los códigos H2xx son peligros físicos, H3xx para la salud y H4xx para el ambiente.</li>\n          <li><strong>Consejos de prudencia</strong> (frases P): cómo prevenir, responder, almacenar y eliminar, por ejemplo \"Llevar guantes y gafas de protección\" o \"En caso de contacto con los ojos: aclarar cuidadosamente con agua durante varios minutos\".</li>\n          <li><strong>Identificación del proveedor</strong>: nombre, dirección y teléfono.</li>\n        </ol>\n        <p><strong>Recipientes de trasvase.</strong> Cuando un producto se pasa de su envase original a otro recipiente más pequeño para usarlo (un atomizador, un galón, una botella), <strong>el nuevo recipiente también debe etiquetarse</strong>. La etiqueta puede ser simplificada según el procedimiento de la empresa, pero debe mostrar como mínimo el nombre del producto, los pictogramas y la palabra de advertencia, y permitir llegar a la FDS.</p>\n        <p><strong>Reglas que no tienen excepción:</strong></p>\n        <ul>\n          <li><strong>Nunca</strong> se usan envases de alimentos o bebidas (botellas de gaseosa, de agua, frascos de mermelada) para productos químicos. Alguien puede beber de ellos.</li>\n          <li>Un recipiente sin etiqueta no se usa: se aparta, se reporta y se trata como residuo hasta identificarlo.</li>\n          <li>Una etiqueta deteriorada se reemplaza antes de que sea ilegible.</li>\n          <li>No se reutilizan envases vacíos de un químico para otro producto distinto.</li>\n        </ul>\n        <p><strong>El caso del curso</strong> empezó con dos recipientes sin etiqueta que parecían iguales. Con una etiqueta en cada uno, nadie los habría mezclado.</p>\n      ",
        "keyPoints": [
          "Etiqueta SGA: identificador, pictogramas, palabra de advertencia, frases H, frases P e identificación del proveedor.",
          "Todo recipiente de trasvase se etiqueta; un recipiente sin etiqueta no se usa.",
          "Nunca se usan envases de alimentos o bebidas para químicos."
        ],
        "practice": {
          "q": "Vas a pasar un desinfectante a un atomizador para usarlo en tu área. ¿Qué haces con el atomizador?",
          "options": [
            "Le escribes \"desinfectante\" con marcador en la tapa",
            "Lo etiquetas con el nombre, los pictogramas y la palabra de advertencia",
            "Lo dejas sin etiqueta, porque solo lo usas tú"
          ]
        }
      },
      {
        "title": "La ficha de datos de seguridad (FDS)",
        "content": "\n        <p>La <strong>FDS</strong> es el documento técnico del producto. La entrega el fabricante o el proveedor, debe estar en <strong>español</strong> y tiene <strong>16 secciones</strong> en un orden fijo:</p>\n        <ol>\n          <li>Identificación del producto y del proveedor.</li>\n          <li>Identificación de los peligros (incluye los elementos de la etiqueta).</li>\n          <li>Composición e información sobre los componentes.</li>\n          <li>Primeros auxilios.</li>\n          <li>Medidas de lucha contra incendios.</li>\n          <li>Medidas en caso de vertido accidental.</li>\n          <li>Manipulación y almacenamiento.</li>\n          <li>Controles de exposición y protección personal.</li>\n          <li>Propiedades físicas y químicas.</li>\n          <li>Estabilidad y reactividad.</li>\n          <li>Información toxicológica.</li>\n          <li>Información ecotoxicológica.</li>\n          <li>Consideraciones relativas a la eliminación.</li>\n          <li>Información relativa al transporte.</li>\n          <li>Información reglamentaria.</li>\n          <li>Otra información, con la fecha de la última revisión.</li>\n        </ol>\n        <p><strong>Las secciones que más usa un trabajador:</strong></p>\n        <ul>\n          <li><strong>Sección 2</strong> para saber qué peligros tiene.</li>\n          <li><strong>Sección 4</strong> si alguien se expone: qué hacer en los ojos, en la piel, si lo inhaló o lo ingirió.</li>\n          <li><strong>Sección 7</strong> para almacenarlo y manipularlo bien.</li>\n          <li><strong>Sección 8</strong> para saber qué guantes, gafas y protección respiratoria usar, y sus límites de exposición.</li>\n          <li><strong>Sección 10</strong> para saber con qué productos es incompatible y qué condiciones evitar.</li>\n          <li><strong>Secciones 5 y 6</strong> en un incendio o un derrame.</li>\n        </ul>\n        <p><strong>Dónde debe estar.</strong> En el área de trabajo, en papel o en un medio digital al que todos los trabajadores puedan acceder sin pedir permiso y sin contraseñas que solo conozca una persona. En una emergencia no hay tiempo para buscarla en la oficina.</p>\n        <p><strong>Si va al médico</strong> por una exposición, lleve la FDS o una foto de la etiqueta. Le ayuda al personal de salud a saber qué tratamiento dar.</p>\n        <p><strong>FDS desactualizada o en otro idioma.</strong> Pídala al proveedor. Una FDS solo en inglés o con muchos años sin revisión no cumple su función.</p>\n      ",
        "keyPoints": [
          "La FDS tiene 16 secciones en orden fijo, en español, y la entrega el proveedor.",
          "Sección 2: peligros; 4: primeros auxilios; 7: almacenamiento; 8: protección personal; 10: incompatibilidades.",
          "Debe estar disponible en el área de trabajo, sin barreras, para consultarla en una emergencia."
        ],
        "practice": {
          "q": "¿En qué sección de la FDS se encuentran los elementos de protección personal recomendados?",
          "options": [
            "Sección 2",
            "Sección 14",
            "Sección 8"
          ]
        }
      },
      {
        "title": "Almacenamiento seguro y compatibilidad",
        "content": "\n        <p>Muchos accidentes químicos no ocurren al usar el producto, sino en el almacén: un derrame que alcanza otro producto, un recipiente que se rompe, una reacción entre dos productos guardados juntos.</p>\n        <p><strong>Matriz de compatibilidad.</strong> Es una tabla que indica qué clases de productos pueden almacenarse juntas, cuáles deben separarse y cuáles nunca deben estar cerca. Se construye con la sección 10 de las FDS y con los pictogramas. Reglas generales:</p>\n        <ul>\n          <li><strong>Ácidos lejos de bases</strong> (álcalis): reaccionan con mucho calor.</li>\n          <li><strong>Oxidantes</strong> (llama sobre un círculo) <strong>lejos de inflamables</strong> y de materiales combustibles como madera o cartón.</li>\n          <li><strong>Hipoclorito lejos de ácidos y de productos con amoniaco.</strong></li>\n          <li><strong>Productos que reaccionan con el agua</strong> lejos de duchas, tuberías y humedad.</li>\n          <li><strong>Tóxicos</strong> en un lugar con acceso restringido.</li>\n        </ul>\n        <p><strong>Condiciones del almacén:</strong></p>\n        <ul>\n          <li>Ventilación natural o mecánica, iluminación y señalización.</li>\n          <li><strong>Contención secundaria</strong>: bandejas o diques que retengan un derrame. Como buena práctica, se dimensionan para contener al menos el volumen del recipiente más grande, con un margen adicional.</li>\n          <li>Estanterías firmes, con los recipientes más pesados y los corrosivos en los niveles bajos, nunca por encima de la altura de los ojos.</li>\n          <li>Gabinetes especiales para líquidos inflamables cuando hay cantidades importantes.</li>\n          <li>Cilindros de gas en posición vertical, asegurados con cadena, con su capuchón y separados por tipo de gas.</li>\n          <li>Lejos de fuentes de calor, de la luz directa del sol y de las zonas de paso.</li>\n          <li>Kit antiderrames, extintor adecuado, lavaojos y ducha cerca.</li>\n        </ul>\n        <p><strong>En el puesto de trabajo</strong> se tiene solo la cantidad necesaria para la jornada. Todo lo demás vuelve al almacén.</p>\n        <p><strong>Inventario.</strong> Saber qué hay, cuánto y dónde permite planear las emergencias, eliminar productos que ya no se usan y detectar si una instalación se acerca a las cantidades del programa de prevención de accidentes mayores.</p>\n      ",
        "keyPoints": [
          "La matriz de compatibilidad, construida con las FDS, define qué se almacena junto y qué se separa.",
          "Ácidos lejos de bases; oxidantes lejos de inflamables; hipoclorito lejos de ácidos y amoniaco.",
          "Contención secundaria, corrosivos en niveles bajos, cilindros asegurados y solo la cantidad necesaria en el puesto."
        ],
        "practice": {
          "q": "¿Con qué productos se debe evitar almacenar el hipoclorito de sodio?",
          "options": [
            "Con ácidos y con productos con amoniaco",
            "Con papel absorbente",
            "Con agua potable"
          ]
        }
      },
      {
        "title": "Trasvase, uso seguro y elementos de protección",
        "content": "\n        <p><strong>Antes de trasvasar o usar un producto:</strong> leer la etiqueta y la FDS, preparar el recipiente correcto y etiquetado, y ponerse la protección indicada en la sección 8.</p>\n        <p><strong>Procedimiento de trasvase:</strong></p>\n        <ol>\n          <li>Hacerlo en un lugar ventilado, sobre una bandeja de contención.</li>\n          <li>Usar un recipiente compatible con el producto (algunos ácidos atacan ciertos metales; algunos solventes disuelven ciertos plásticos).</li>\n          <li>Usar embudo, bomba manual o grifo, nunca verter \"a pulso\" desde un tambor.</li>\n          <li>Con líquidos inflamables, conectar a tierra y unir eléctricamente los recipientes metálicos, para evitar chispas por electricidad estática.</li>\n          <li>Llenar sin rebosar, cerrar bien ambos recipientes y etiquetar el nuevo de inmediato.</li>\n          <li>Limpiar cualquier goteo y lavarse las manos al terminar.</li>\n        </ol>\n        <p><strong>Diluciones.</strong> Al preparar soluciones de ácidos, se agrega siempre <strong>el ácido al agua</strong>, despacio, nunca el agua al ácido: el calor de la reacción puede hacer que el líquido salpique violentamente.</p>\n        <p><strong>No mezclar.</strong> Ningún producto se mezcla con otro salvo que el procedimiento lo indique. \"Hacerlo más fuerte\" mezclando limpiadores es la causa clásica de intoxicaciones.</p>\n        <p><strong>Jerarquía de controles.</strong> Antes de pensar en guantes y respiradores: ¿se puede sustituir por un producto menos peligroso?, ¿se puede encerrar el proceso o instalar extracción localizada?, ¿se puede reducir la cantidad o el tiempo de exposición? Los elementos de protección personal son la última barrera.</p>\n        <p><strong>Elementos de protección según la FDS:</strong></p>\n        <ul>\n          <li><strong>Guantes</strong> del material indicado (nitrilo, neopreno, butilo, PVC...). Un guante de látex o de tela no protege contra muchos solventes y corrosivos.</li>\n          <li><strong>Gafas de seguridad o monogafas</strong> contra salpicaduras, y careta cuando hay riesgo de salpicadura en la cara.</li>\n          <li><strong>Protección respiratoria</strong> con el cartucho específico para el tipo de contaminante, y solo si la persona fue entrenada y su respirador se ajusta bien. Un tapabocas de tela no protege contra vapores químicos.</li>\n          <li><strong>Delantal o traje</strong> resistente a químicos y botas, cuando hay riesgo de salpicaduras o derrames.</li>\n        </ul>\n        <p><strong>Higiene.</strong> No comer, beber ni fumar en las áreas con químicos; lavarse las manos antes de comer y al terminar el turno; no llevar la ropa contaminada a la casa.</p>\n      ",
        "keyPoints": [
          "Trasvase: lugar ventilado, bandeja, recipiente compatible, embudo, puesta a tierra con inflamables y etiqueta inmediata.",
          "Siempre el ácido al agua, nunca al revés; nunca mezclar productos por iniciativa propia.",
          "Primero sustitución y controles de ingeniería; el EPP, del material que indica la sección 8 de la FDS, es la última barrera."
        ],
        "practice": {
          "q": "Al preparar una dilución de ácido, ¿cuál es la forma correcta?",
          "options": [
            "Mezclar ambos al mismo tiempo en un balde",
            "Agregar el ácido al agua, despacio",
            "Agregar el agua al ácido, de una vez"
          ]
        }
      },
      {
        "title": "Derrames, emergencias y primeros auxilios",
        "content": "\n        <p><strong>Ante un derrame, primero evaluar:</strong> ¿qué producto es?, ¿cuánto se derramó?, ¿hay personas expuestas?, ¿hay vapores, olor fuerte o fuentes de ignición cerca?</p>\n        <p><strong>Derrame pequeño de un producto conocido</strong>, que el personal entrenado puede controlar:</p>\n        <ol>\n          <li>Avisar a las personas cercanas y aislar el área.</li>\n          <li>Ponerse la protección que indica la FDS.</li>\n          <li>Eliminar fuentes de ignición si el producto es inflamable y ventilar.</li>\n          <li><strong>Contener</strong> el derrame con barreras o paños absorbentes para que no se extienda ni llegue a desagües.</li>\n          <li><strong>Absorber</strong> con el material del kit antiderrames adecuado para ese producto.</li>\n          <li><strong>Recoger</strong> en un recipiente etiquetado y gestionarlo como <strong>residuo peligroso</strong>.</li>\n          <li>Limpiar la zona y reportar el incidente.</li>\n        </ol>\n        <p><strong>Derrame grande, de un producto desconocido o muy tóxico, o con personas afectadas:</strong> no intente controlarlo. Evacúe el área en dirección contraria al viento o a la propagación de los vapores, dé la alarma y espere a la brigada o a los organismos de emergencia con la FDS en la mano.</p>\n        <p><strong>Primeros auxilios generales</strong> (siempre confirme con la sección 4 de la FDS):</p>\n        <ul>\n          <li><strong>Ojos</strong>: lavar de inmediato en el lavaojos con agua abundante durante al menos 15 minutos, con los párpados abiertos, y retirar los lentes de contacto si es fácil. Buscar atención médica.</li>\n          <li><strong>Piel</strong>: retirar la ropa contaminada y lavar con agua abundante; en salpicaduras extensas, usar la ducha de emergencia.</li>\n          <li><strong>Inhalación</strong>: llevar a la persona al aire fresco, sin exponerse uno mismo, y mantenerla en reposo. Si respira con dificultad, atención médica urgente.</li>\n          <li><strong>Ingestión</strong>: no provocar el vómito salvo que la FDS lo indique, enjuagar la boca y buscar atención médica.</li>\n        </ul>\n        <p><strong>Nunca se neutraliza</strong> un ácido o una base sobre la piel o los ojos con otro químico: la reacción produce calor y empeora la lesión. Solo agua.</p>\n        <p><strong>Lavaojos y duchas.</strong> Deben estar cerca de donde se manejan corrosivos, despejados, señalizados y probados periódicamente. Un lavaojos que no se ha abierto en meses puede soltar agua sucia u oxidada.</p>\n        <p><strong>Información para el médico.</strong> Lleve la FDS o la etiqueta. En Colombia existen líneas de información toxicológica que orientan en emergencias con productos químicos; su número debe estar publicado en el área.</p>\n      ",
        "keyPoints": [
          "Derrame pequeño y conocido: aislar, protegerse, contener, absorber, recoger como residuo peligroso y reportar.",
          "Derrame grande, desconocido o con afectados: evacuar, dar la alarma y esperar a la brigada con la FDS.",
          "Ojos: lavar al menos 15 minutos; nunca neutralizar sobre la piel o los ojos."
        ],
        "practice": {
          "q": "¿Cuánto tiempo mínimo se lavan los ojos tras una salpicadura química?",
          "options": [
            "30 segundos",
            "2 minutos",
            "Al menos 15 minutos"
          ]
        }
      }
    ],
    "scenarios": [
      {
        "scenario": "En la bodega hay un bidón de ácido muriático sin etiqueta. Un operario quiere pasar el contenido a una botella de gaseosa vacía para llevarlo a limpiar los pisos de los baños.",
        "options": [
          "Lo dejo hacerlo, siempre que marque la botella con un marcador.",
          "Le pido que use un recipiente adecuado, compatible y etiquetado con la etiqueta SGA, y reporto el bidón sin etiqueta para identificarlo y rotularlo.",
          "Le digo que lo use directamente desde el bidón sin etiqueta, para no trasvasar."
        ]
      },
      {
        "scenario": "Se derramó un solvente en el piso del laboratorio. El área huele fuerte, hay un compañero cerca sin guantes y en la mesa de al lado hay una plancha de calentamiento encendida.",
        "options": [
          "Seco rápido con un trapo para que el olor desaparezca.",
          "Aviso, aíslo el área, apago la plancha si puedo hacerlo sin riesgo, ventilo, me pongo la protección de la FDS y contengo y absorbo con el kit; si el derrame es grande, evacúo y doy la alarma.",
          "Le echo agua para diluirlo y lo mando al sifón."
        ]
      },
      {
        "scenario": "Vas a almacenar un nuevo producto de limpieza que contiene un ácido. En el único espacio libre del estante, justo al lado, hay galones de hipoclorito de sodio.",
        "options": [
          "Lo pongo ahí, porque los dos son productos de limpieza.",
          "Lo pongo ahí, pero con una tabla separando los galones.",
          "Consulto la matriz de compatibilidad y lo ubico en otra zona, separado del hipoclorito, con su contención."
        ]
      },
      {
        "scenario": "Debes pasar thinner de un tambor metálico de 55 galones a una caneca metálica de 5 galones. El compañero quiere hacerlo directo, inclinando el tambor, en la zona de pintura sin ventilación.",
        "options": [
          "Lo hacemos en un lugar ventilado, con bomba manual, bandeja de contención, recipientes conectados a tierra y unidos entre sí, y etiquetamos la caneca.",
          "Lo hacemos rápido para que no se acumulen vapores.",
          "Lo hacemos con guantes de tela para no mancharnos."
        ]
      },
      {
        "scenario": "Llega un producto nuevo para desengrasar las máquinas. La ficha de datos de seguridad que lo acompaña está solo en inglés y la etiqueta no tiene pictogramas.",
        "options": [
          "Lo usamos igual: si se vende, debe ser seguro.",
          "Lo apartamos y pedimos al proveedor la etiqueta SGA y la FDS en español antes de usarlo.",
          "Traducimos la FDS con el celular y empezamos a usarlo esta semana."
        ]
      }
    ],
    "exam": [
      {
        "q": "¿Qué es un efecto crónico de un producto químico?",
        "options": [
          "Un daño que aparece tras meses o años de exposición a dosis pequeñas.",
          "Una quemadura inmediata en la piel.",
          "El olor fuerte que se siente al abrir un recipiente de solvente por primera vez en el día."
        ]
      },
      {
        "q": "¿Qué ocurre si se mezcla hipoclorito de sodio con un ácido?",
        "options": [
          "Se forma un desinfectante más potente que limpia mejor las superficies de los baños.",
          "Se libera gas cloro, muy irritante para las vías respiratorias.",
          "Se neutralizan y el resultado es agua."
        ]
      },
      {
        "q": "Según la Res. 773 de 2021, ¿cuál de estas es una obligación del empleador?",
        "options": [
          "Fabricar sus propias fichas de datos de seguridad sin consultar al proveedor, para adaptarlas a la planta.",
          "Guardar las FDS bajo llave en la gerencia para evitar que se pierdan o se dañen en el área.",
          "Tener las FDS en español disponibles para los trabajadores en el área de trabajo."
        ]
      },
      {
        "q": "¿Qué relación tiene el rombo NFPA 704 con la etiqueta SGA?",
        "options": [
          "Es complementario y útil en emergencias, pero no reemplaza la etiqueta SGA.",
          "Lo reemplaza por completo desde el Decreto 1496 de 2018.",
          "Es el único sistema permitido en Colombia para identificar productos en las bodegas."
        ]
      },
      {
        "q": "¿Qué tipo de peligro indica el pictograma de la silueta humana con una estrella en el pecho?",
        "options": [
          "Gases a presión.",
          "Efectos graves a largo plazo, como cáncer o daño a órganos.",
          "Productos corrosivos para los metales."
        ]
      },
      {
        "q": "En una etiqueta SGA, ¿qué indica la palabra \"Peligro\"?",
        "options": [
          "Que el producto es seguro para uso doméstico.",
          "Que el producto solo es peligroso para el medio ambiente, no para las personas que lo manipulan.",
          "Que el producto tiene peligros de las categorías más graves."
        ]
      },
      {
        "q": "¿Qué son las frases H de una etiqueta SGA?",
        "options": [
          "Indicaciones que describen el peligro del producto.",
          "Instrucciones para preparar la dilución del producto según el área de la planta donde se va a usar.",
          "Datos del fabricante."
        ]
      },
      {
        "q": "Un trabajador pasa un desengrasante a un galón más pequeño. ¿Qué debe hacer con el galón?",
        "options": [
          "Nada, porque el producto original ya tiene etiqueta.",
          "Etiquetarlo con al menos el nombre, los pictogramas y la palabra de advertencia.",
          "Usar una botella de agua vacía para que sea fácil de cargar."
        ]
      },
      {
        "q": "Una persona recibe una salpicadura en los ojos. ¿En qué sección de la FDS se consulta qué hacer?",
        "options": [
          "En la sección 14, información relativa al transporte terrestre, marítimo y aéreo del producto.",
          "En la sección 9, propiedades físicas y químicas del producto.",
          "En la sección 4, primeros auxilios."
        ]
      },
      {
        "q": "¿En qué sección de la FDS se consultan las incompatibilidades del producto?",
        "options": [
          "En la sección 10, estabilidad y reactividad.",
          "En la sección 1, identificación del producto y del proveedor.",
          "En la sección 13, consideraciones relativas a la eliminación de los residuos."
        ]
      },
      {
        "q": "¿Cuál de estas combinaciones NO debe almacenarse junta?",
        "options": [
          "Dos galones del mismo detergente neutro.",
          "Un oxidante junto a un líquido inflamable.",
          "Guantes de nitrilo junto a gafas de seguridad."
        ]
      },
      {
        "q": "¿Dónde se ubican los productos corrosivos en una estantería?",
        "options": [
          "En el nivel más alto, lejos del alcance de las personas que pasan por el almacén.",
          "En cualquier nivel, siempre que la tapa esté bien cerrada.",
          "En los niveles bajos, nunca por encima de la altura de los ojos."
        ]
      },
      {
        "q": "Al trasvasar un líquido inflamable entre recipientes metálicos, ¿por qué se conectan a tierra?",
        "options": [
          "Para evitar chispas por electricidad estática.",
          "Para que el líquido fluya más rápido entre los recipientes.",
          "Para que el recipiente no se oxide con el tiempo."
        ]
      },
      {
        "q": "¿Qué protección respiratoria sirve contra los vapores de un solvente?",
        "options": [
          "Un tapabocas de tela, bien ajustado a la cara del trabajador.",
          "Un respirador con el cartucho específico para ese contaminante, con entrenamiento y buen ajuste.",
          "Un pañuelo húmedo, porque el agua atrapa los vapores."
        ]
      },
      {
        "q": "Se derramaron 200 litros de un producto desconocido y dos personas se sienten mareadas. ¿Qué se hace?",
        "options": [
          "Intentar contenerlo con el kit antiderrames del área antes de que se extienda.",
          "Echarle agua abundante para diluirlo y que pierda su efecto.",
          "Evacuar, dar la alarma y esperar a la brigada con la información disponible del producto."
        ]
      },
      {
        "q": "Un trabajador recibe una salpicadura de un ácido en la piel. ¿Qué NO se debe hacer?",
        "options": [
          "Aplicar una base sobre la piel para neutralizar el ácido.",
          "Retirar la ropa contaminada.",
          "Lavar con agua abundante, usando la ducha si la salpicadura es extensa."
        ]
      }
    ],
    "workshops": [],
    "project": null
  },
  {
    "id": "riesgo-electrico-no-electricistas",
    "title": "Riesgo Eléctrico Básico para Personal No Electricista (RETIE)",
    "hours": 1.5,
    "category": "prevencion_sst",
    "regulation": "RETIE (Res. 40117 de 2024), Decreto 1072 de 2015, Res. 0312 de 2019; referencias: NFPA 70E",
    "legalNotice": "Formación para trabajadores que NO son electricistas. No habilita para intervenir instalaciones eléctricas: esas tareas solo las hace personal calificado y autorizado.",
    "summary": "Cómo actúa la corriente en el cuerpo, qué es el arco eléctrico, qué dice el RETIE sobre quién puede intervenir, cómo inspeccionar a simple vista tableros, tomas y extensiones, qué hacer cuando un interruptor se dispara, cómo trabajar con humedad y cerca de líneas, y cómo actuar en una emergencia eléctrica.",
    "fieldCase": "Un operario de bodega abrió un tablero eléctrico energizado para \"subir el taco\" que se disparaba una y otra vez. Al retirar la tapa, un destornillador tocó dos barras, se produjo un arco eléctrico y sufrió quemaduras en la cara y las manos.",
    "checklist": [
      "No abro tableros ni retiro tapas: eso lo hace personal calificado.",
      "Si un interruptor se dispara de nuevo después de un rearme, no insisto: reporto.",
      "Reviso a simple vista cables, clavijas, tomas y extensiones antes de usarlos.",
      "No uso extensiones con empalmes ni clavijas sin la pata de tierra.",
      "No conecto multitomas en cadena ni sobrecargo los tomacorrientes.",
      "Mantengo despejado el frente de los tableros eléctricos.",
      "No trabajo con equipos eléctricos con las manos o los pies mojados.",
      "Ante un accidente eléctrico, corto la energía antes de tocar a la persona."
    ],
    "failureAnalysis": "Falla raíz: un trabajador no calificado intervino un tablero energizado, y un interruptor que se disparaba repetidamente (señal de una falla) se trató como una molestia en lugar de reportarlo.",
    "onSiteClosure": "Práctica en su empresa: recorrer el área con el electricista de la planta identificando tableros, interruptores de emergencia y tomas con protección diferencial; hacer una inspección visual de extensiones y equipos; y simular el rescate de una persona electrizada en baja tensión.",
    "image": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=80",
    "modules": [
      {
        "title": "Cómo actúa la electricidad en el cuerpo",
        "content": "\n        <p><strong>Tres conceptos básicos:</strong></p>\n        <ul>\n          <li><strong>Tensión o voltaje</strong> (voltios, V): la \"presión\" que empuja la corriente. En Colombia, los tomacorrientes comunes son de 120 V y muchos equipos industriales trabajan a 220, 440 V o más.</li>\n          <li><strong>Corriente</strong> (amperios, A): la cantidad de electricidad que circula. Es la que hace el daño en el cuerpo.</li>\n          <li><strong>Resistencia</strong>: lo que se opone al paso de la corriente. La piel seca tiene una resistencia alta; la piel húmeda, sudada o con cortes, mucho menor. Por eso el agua aumenta tanto el peligro.</li>\n        </ul>\n        <p><strong>El cuerpo se vuelve parte del circuito</strong> cuando toca al mismo tiempo una parte energizada y otra con un potencial distinto: tierra, una estructura metálica, una tubería o el otro conductor.</p>\n        <p><strong>Efectos según la corriente</strong> (valores aproximados para corriente alterna de 60 Hz):</p>\n        <ul>\n          <li>Alrededor de 1 miliamperio: se siente un cosquilleo.</li>\n          <li>Alrededor de 10 miliamperios: los músculos se contraen y la persona puede <strong>no poder soltar</strong> lo que está agarrando.</li>\n          <li>Desde unas decenas de miliamperios: dificultad para respirar y riesgo de <strong>fibrilación ventricular</strong>, una alteración del ritmo del corazón que causa la muerte si no se atiende de inmediato.</li>\n        </ul>\n        <p>Un miliamperio es la milésima parte de un amperio. Un tomacorriente común puede entregar muchísimo más que eso. Por eso la electricidad de un enchufe doméstico puede matar.</p>\n        <p><strong>Otros daños:</strong></p>\n        <ul>\n          <li><strong>Quemaduras internas</strong> a lo largo del recorrido de la corriente, que no se ven por fuera.</li>\n          <li><strong>Quemaduras externas</strong> en los puntos de entrada y salida.</li>\n          <li><strong>Caídas</strong> por el sobresalto o la contracción, especialmente en escaleras y alturas. Muchas muertes por electricidad son en realidad caídas.</li>\n        </ul>\n        <p><strong>El recorrido importa.</strong> Una corriente que pasa de una mano a la otra, o de la mano a los pies, atraviesa el pecho y el corazón. Por eso es tan peligroso tocar algo energizado con una mano mientras la otra se apoya en una estructura metálica.</p>\n      ",
        "keyPoints": [
          "La corriente es la que daña; la humedad baja la resistencia de la piel y aumenta el peligro.",
          "Con unos 10 miliamperios la persona puede no poder soltar; con algunas decenas, riesgo de fibrilación.",
          "Además de quemaduras internas y externas, la electricidad causa caídas, sobre todo en alturas."
        ],
        "practice": {
          "q": "¿Qué efecto puede producir una corriente de unos 10 miliamperios a través de la mano?",
          "options": [
            "Que el equipo se apague solo",
            "Que la persona no pueda soltar lo que está agarrando",
            "Ningún efecto, porque es una corriente muy pequeña"
          ]
        }
      },
      {
        "title": "El arco eléctrico",
        "content": "\n        <p>El <strong>arco eléctrico</strong> es una descarga de corriente a través del aire entre dos conductores o entre un conductor y tierra. Ocurre en fracciones de segundo y libera una cantidad enorme de energía.</p>\n        <p><strong>Qué produce un arco eléctrico:</strong></p>\n        <ul>\n          <li>Temperaturas muy superiores a las de una llama: funde el metal y enciende la ropa a varios metros.</li>\n          <li>Una luz intensa que puede dañar los ojos.</li>\n          <li>Una <strong>onda de presión</strong> (explosión) que lanza partes metálicas, gotas de metal fundido y a la propia persona.</li>\n          <li>Un ruido muy fuerte que puede dañar el oído.</li>\n          <li>Gases tóxicos.</li>\n        </ul>\n        <p><strong>Causas frecuentes:</strong></p>\n        <ul>\n          <li>Abrir tableros energizados y dejar caer una herramienta, un tornillo o una tapa sobre las barras, como en el caso del curso.</li>\n          <li>Conexiones flojas o deterioradas que se calientan.</li>\n          <li>Polvo, humedad, insectos o roedores dentro de los tableros.</li>\n          <li>Equipos dañados o mal mantenidos.</li>\n          <li>Errores en maniobras de interruptores de potencia.</li>\n        </ul>\n        <p><strong>Cómo se protege a las personas.</strong> El personal calificado que trabaja cerca de partes energizadas usa ropa y elementos de protección resistentes al arco, calculados según la energía disponible en cada tablero (la norma NFPA 70E es la referencia más usada). Un trabajador no electricista no tiene esa protección ni ese entrenamiento: <strong>por eso no abre tableros</strong>.</p>\n        <p><strong>Señales de alerta que un no electricista sí puede detectar y reportar:</strong></p>\n        <ul>\n          <li>olor a plástico quemado cerca de un tablero o un equipo;</li>\n          <li>zumbidos, chasquidos o chispas;</li>\n          <li>tapas o puertas de tablero calientes al tacto (acercando el dorso de la mano, sin tocar partes internas);</li>\n          <li>marcas de hollín o de quemado;</li>\n          <li>interruptores que se disparan con frecuencia.</li>\n        </ul>\n        <p>Ante cualquiera de estas señales: aléjese, no lo manipule, avise al electricista o al supervisor y, si hay humo o fuego, active la emergencia.</p>\n      ",
        "keyPoints": [
          "El arco eléctrico produce temperaturas extremas, una explosión, metal fundido, luz intensa y ruido.",
          "Causas: herramientas que caen sobre barras, conexiones flojas, polvo, humedad y equipos dañados.",
          "Olor a quemado, chispas, calor o disparos frecuentes: alejarse y reportar."
        ],
        "practice": {
          "q": "¿Qué puede lanzar un arco eléctrico además de calor y luz?",
          "options": [
            "Agua condensada del ambiente",
            "Solo un poco de humo blanco",
            "Partes metálicas y gotas de metal fundido por la onda de presión"
          ]
        }
      },
      {
        "title": "El RETIE: quién puede intervenir una instalación eléctrica",
        "content": "\n        <p>El <strong>Reglamento Técnico de Instalaciones Eléctricas (RETIE)</strong> fija los requisitos para que las instalaciones eléctricas en Colombia sean seguras. La versión vigente fue adoptada por la <strong>Resolución 40117 de 2024</strong> del Ministerio de Minas y Energía.</p>\n        <p><strong>Lo que un trabajador no electricista debe saber del RETIE:</strong></p>\n        <ul>\n          <li>Las instalaciones deben diseñarse, construirse, mantenerse e intervenirse por <strong>personal calificado</strong>. En Colombia, el ejercicio como técnico electricista requiere matrícula profesional, y la empresa debe además <strong>autorizar</strong> a cada persona para las tareas que puede hacer.</li>\n          <li>Los trabajos sin tensión se hacen aplicando las <strong>cinco reglas de oro</strong>: corte efectivo de todas las fuentes, bloqueo y señalización, verificación de ausencia de tensión, puesta a tierra y en cortocircuito, y señalización y delimitación de la zona. Esto lo hace el electricista; el no electricista lo respeta.</li>\n          <li>Las partes energizadas deben estar protegidas para que nadie pueda tocarlas por accidente: tapas, encerramientos, distancias.</li>\n          <li>Las instalaciones deben tener sistema de puesta a tierra y protecciones contra sobrecorrientes, y en ciertos circuitos, protección diferencial.</li>\n          <li>Los productos eléctricos (cables, interruptores, tomacorrientes, extensiones) deben cumplir requisitos de certificación.</li>\n        </ul>\n        <p><strong>El Decreto 1072 de 2015 y la Resolución 0312 de 2019</strong> obligan a la empresa a identificar el riesgo eléctrico, controlarlo y capacitar a los trabajadores. Las empresas del sector eléctrico tienen además lineamientos propios de SST en la <strong>Resolución 5018 de 2019</strong>.</p>\n        <p><strong>Qué SÍ puede hacer un trabajador no electricista</strong> (según su capacitación y el procedimiento de la empresa):</p>\n        <ul>\n          <li>Inspeccionar a simple vista los equipos, cables y extensiones que va a usar.</li>\n          <li>Encender y apagar equipos con sus controles normales.</li>\n          <li>Desconectar su equipo tirando de la clavija, no del cable.</li>\n          <li>Accionar paradas de emergencia.</li>\n          <li>Reportar cualquier anomalía.</li>\n        </ul>\n        <p><strong>Qué NO puede hacer:</strong> abrir tableros o retirar tapas; reparar cables, tomas o equipos; hacer empalmes o \"puentes\"; cambiar fusibles; manipular interruptores dentro de tableros; ni retirar candados o tarjetas de bloqueo.</p>\n      ",
        "keyPoints": [
          "El RETIE vigente fue adoptado por la Res. 40117 de 2024 del Ministerio de Minas y Energía.",
          "Solo personal calificado y autorizado interviene instalaciones; las cinco reglas de oro las aplica el electricista.",
          "El no electricista inspecciona a simple vista, opera controles normales, desconecta por la clavija y reporta."
        ],
        "practice": {
          "q": "¿Qué resolución adoptó el RETIE vigente?",
          "options": [
            "La Resolución 40117 de 2024",
            "La Resolución 2674 de 2013",
            "La Resolución 2013 de 1986"
          ]
        }
      },
      {
        "title": "Inspección visual de tableros, tomas, clavijas y extensiones",
        "content": "\n        <p>Muchos accidentes se evitan con una mirada de treinta segundos antes de conectar un equipo.</p>\n        <p><strong>Tableros eléctricos:</strong></p>\n        <ul>\n          <li>Puerta cerrada y, cuando aplica, con llave.</li>\n          <li>Señalizados con el símbolo de riesgo eléctrico.</li>\n          <li><strong>Frente despejado</strong>: sin cajas, estibas, escobas ni materiales que impidan llegar al tablero en una emergencia.</li>\n          <li>Sin humedad, goteras ni polvo excesivo alrededor.</li>\n          <li>Circuitos identificados, para saber qué interruptor corresponde a cada equipo.</li>\n        </ul>\n        <p><strong>Tomacorrientes:</strong></p>\n        <ul>\n          <li>Bien fijos a la pared, sin partes rotas, quemadas o derretidas.</li>\n          <li>Que la clavija entre firme, sin quedar floja.</li>\n          <li>Sin multitomas conectadas en cadena (\"una multitoma sobre otra\"): sobrecarga el circuito y calienta los conductores.</li>\n        </ul>\n        <p><strong>Clavijas y cables de los equipos:</strong></p>\n        <ul>\n          <li>La clavija con sus tres patas: <strong>nunca se corta ni se dobla la pata de tierra</strong> para que entre en un tomacorriente de dos huecos. Esa pata es la que protege a la persona si el equipo tiene una falla.</li>\n          <li>Cable sin cortes, aplastamientos, partes peladas ni empalmes con cinta.</li>\n          <li>El cable entra firme en la clavija y en el equipo, sin que se vean los conductores internos.</li>\n        </ul>\n        <p><strong>Extensiones:</strong></p>\n        <ul>\n          <li>De tipo industrial, del calibre adecuado para la carga y con polo a tierra.</li>\n          <li><strong>Sin empalmes</strong>: una extensión empalmada se reemplaza.</li>\n          <li>Desenrolladas por completo cuando se usan con cargas altas, para que no se calienten.</li>\n          <li>Que no pasen por debajo de puertas, alfombras o por zonas de tránsito de montacargas sin protección.</li>\n          <li>Que no queden en charcos o zonas mojadas.</li>\n          <li>Retiradas de servicio y etiquetadas si están dañadas.</li>\n        </ul>\n        <p><strong>Si encuentra un defecto:</strong> no use el equipo, sepárelo, márquelo como \"fuera de servicio\" y repórtelo. No intente repararlo.</p>\n      ",
        "keyPoints": [
          "Tableros cerrados, señalizados y con el frente despejado.",
          "Nunca se corta la pata de tierra de una clavija ni se conectan multitomas en cadena.",
          "Extensiones industriales, sin empalmes, desenrolladas y lejos del agua; si están dañadas, fuera de servicio."
        ],
        "practice": {
          "q": "La clavija de una pulidora tiene tres patas y el tomacorriente solo dos huecos. ¿Qué se hace?",
          "options": [
            "Doblar la pata de tierra hacia un lado",
            "Usar otro tomacorriente con polo a tierra",
            "Cortar la pata redonda para que entre"
          ]
        }
      },
      {
        "title": "Cuando un interruptor se dispara",
        "content": "\n        <p>Los interruptores automáticos (los \"tacos\" o \"breakers\") y los fusibles son <strong>protecciones</strong>. Cuando se disparan, están avisando que algo pasa: una sobrecarga, un cortocircuito o una fuga de corriente.</p>\n        <p><strong>Tipos de protección que conviene conocer:</strong></p>\n        <ul>\n          <li><strong>Interruptor termomagnético</strong>: protege los cables contra sobrecargas y cortocircuitos.</li>\n          <li><strong>Interruptor diferencial</strong> (protección de falla a tierra, conocida en inglés como GFCI): detecta cuando parte de la corriente se escapa, por ejemplo a través de una persona, y corta en milisegundos. Es la protección que salva vidas en zonas húmedas. Tiene un botón de prueba que el personal de mantenimiento usa para verificar que funciona.</li>\n        </ul>\n        <p><strong>Qué hacer si se dispara un interruptor:</strong></p>\n        <ol>\n          <li>Desconecte o apague los equipos que estaba usando en ese circuito.</li>\n          <li>Revise si hay señales de falla: olor a quemado, humo, un equipo mojado, un cable dañado.</li>\n          <li>Si hay señales de falla, <strong>no rearme</strong>: reporte.</li>\n          <li>Si no hay señales y el procedimiento de su empresa lo permite (el interruptor es accesible sin abrir tapas ni tocar partes internas), se puede intentar <strong>un solo rearme</strong>.</li>\n          <li>Si se vuelve a disparar, <strong>no insista</strong>: hay una falla que debe revisar un electricista.</li>\n        </ol>\n        <p><strong>Lo que nunca se hace:</strong></p>\n        <ul>\n          <li>Sostener el interruptor arriba con la mano, con cinta o con un objeto para que \"no se baje\".</li>\n          <li>Cambiar un interruptor o un fusible por otro de mayor capacidad \"para que aguante\".</li>\n          <li>Hacer un puente que anule la protección.</li>\n          <li>Abrir el tablero para buscar la falla.</li>\n        </ul>\n        <p>Cada una de estas acciones deja el circuito sin protección: el siguiente cortocircuito puede terminar en un incendio o en un arco eléctrico, como en el caso del curso.</p>\n      ",
        "keyPoints": [
          "Un interruptor que se dispara avisa una sobrecarga, un cortocircuito o una fuga de corriente.",
          "Si no hay señales de falla y el procedimiento lo permite, un solo rearme; si se repite, reportar.",
          "Nunca sostener, puentear o cambiar la protección por una mayor, ni abrir el tablero."
        ],
        "practice": {
          "q": "¿Qué detecta un interruptor diferencial?",
          "options": [
            "Que la tensión es demasiado alta",
            "Que el equipo está muy caliente",
            "Que parte de la corriente se escapa, por ejemplo a través de una persona"
          ]
        }
      },
      {
        "title": "Humedad, líneas aéreas y tormentas",
        "content": "\n        <p><strong>Agua y electricidad.</strong> El agua reduce la resistencia de la piel y crea caminos para la corriente. Reglas básicas:</p>\n        <ul>\n          <li>No manipular equipos eléctricos con las manos mojadas ni con los pies en charcos.</li>\n          <li>No lavar con manguera tableros, motores ni equipos eléctricos sin que el electricista los haya desenergizado y protegido.</li>\n          <li>En zonas húmedas (lavado, exteriores, cocinas industriales), usar equipos con protección diferencial y extensiones adecuadas para exteriores.</li>\n          <li>Si un equipo eléctrico se moja o se inunda, no se conecta ni se enciende hasta que lo revise el electricista.</li>\n        </ul>\n        <p><strong>Líneas eléctricas aéreas.</strong> Muchas muertes ocurren cuando una escalera, un andamio, una varilla, un tubo, la pluma de una grúa o la caja de un volqueta tocan o se acercan a una línea de media o alta tensión. La electricidad puede \"saltar\" sin contacto directo.</p>\n        <ul>\n          <li>Antes de trabajar en exteriores, identifique las líneas aéreas cercanas.</li>\n          <li>Mantenga los equipos y materiales alejados de ellas. Como referencia general, la norma OSHA exige al menos 3 metros de distancia para líneas de hasta 50.000 voltios, y más para tensiones mayores. El RETIE define sus propias distancias mínimas de seguridad; en la duda, consulte al electricista y aléjese.</li>\n          <li>Transporte las escaleras y los tubos largos en posición horizontal.</li>\n          <li>Si un vehículo toca una línea, quien está adentro permanece adentro, salvo incendio; si debe salir, salta sin tocar el vehículo y el suelo al mismo tiempo y se aleja con pasos cortos, arrastrando los pies.</li>\n          <li>Nunca se acerque a un cable caído: puede estar energizado y energizar el suelo a su alrededor. Aléjese y avise a la empresa de energía.</li>\n        </ul>\n        <p><strong>Tormentas eléctricas.</strong> Colombia tiene una de las mayores actividades de rayos del mundo. Durante una tormenta se suspenden los trabajos en exteriores, en alturas, en techos y en estructuras metálicas expuestas, y las personas se refugian en edificaciones cerradas o en vehículos cerrados. No se refugie bajo árboles aislados ni junto a postes o torres.</p>\n      ",
        "keyPoints": [
          "Nada de equipos eléctricos con manos o pies mojados; en zonas húmedas, protección diferencial.",
          "Mantener escaleras, andamios y equipos lejos de las líneas aéreas; nunca acercarse a un cable caído.",
          "En tormentas eléctricas se suspenden los trabajos en exteriores y alturas."
        ],
        "practice": {
          "q": "¿Cómo se transporta una escalera metálica larga cerca de líneas aéreas?",
          "options": [
            "En posición horizontal",
            "Apoyada contra el poste más cercano",
            "En posición vertical, para verla bien"
          ]
        }
      },
      {
        "title": "Herramientas, bloqueos y el papel del trabajador afectado",
        "content": "\n        <p><strong>Herramientas eléctricas portátiles</strong> (taladros, pulidoras, sierras):</p>\n        <ul>\n          <li>Inspeccionarlas antes de cada uso: carcasa sin grietas, cable y clavija en buen estado, interruptor que funcione.</li>\n          <li>Preferir herramientas con <strong>doble aislamiento</strong> (marcadas con un cuadrado dentro de otro cuadrado) o con polo a tierra.</li>\n          <li>Desconectarlas antes de cambiar discos, brocas o accesorios.</li>\n          <li>No cargarlas ni tirarlas del cable.</li>\n          <li>No usarlas bajo la lluvia ni en zonas mojadas sin la protección adecuada.</li>\n        </ul>\n        <p><strong>El bloqueo y etiquetado (LOTO).</strong> Cuando el electricista o el mecánico intervienen un equipo, lo aíslan y ponen candados y tarjetas. El trabajador no electricista suele ser un <strong>trabajador afectado</strong>: opera el equipo, pero no lo interviene. Sus deberes son:</p>\n        <ul>\n          <li>Reconocer un candado o una tarjeta de bloqueo y respetarlos.</li>\n          <li>No intentar arrancar un equipo bloqueado, ni desde el tablero ni desde otro control.</li>\n          <li>No retirar candados ni tarjetas, aunque \"ya hayan terminado\".</li>\n          <li>Esperar a que quien bloqueó retire su candado y avise que el equipo está en servicio.</li>\n        </ul>\n        <p><strong>Equipos con cable y enchufe.</strong> Si un operario necesita limpiar o desatascar un equipo pequeño que se conecta con clavija, desconectarlo y mantener la clavija a la vista y bajo su control es la forma de aislarlo. Apagar el interruptor del equipo no basta.</p>\n        <p><strong>Instalaciones temporales y provisionales.</strong> En obras y montajes, los tableros y cables provisionales deben ser instalados por electricistas, con protección diferencial y protegidos del tránsito y del agua. \"Colgarse\" de un tablero o conectar cables directamente a los bornes es extremadamente peligroso.</p>\n      ",
        "keyPoints": [
          "Herramientas inspeccionadas, con doble aislamiento o polo a tierra, y desconectadas al cambiar accesorios.",
          "El trabajador afectado respeta candados y tarjetas, y no arranca equipos bloqueados.",
          "Equipo con clavija: desconectarlo y mantener la clavija bajo control es la forma de aislarlo."
        ],
        "practice": {
          "q": "Un equipo tiene un candado de bloqueo puesto y el operario necesita producir. ¿Qué hace?",
          "options": [
            "Corta el candado si el técnico se fue a almorzar",
            "Espera a que quien bloqueó retire su candado y avise",
            "Arranca el equipo desde otro control"
          ]
        }
      },
      {
        "title": "Emergencia eléctrica y primeros auxilios",
        "content": "\n        <p><strong>Una persona está en contacto con la electricidad.</strong> La reacción instintiva es agarrarla para separarla, y así se producen dos víctimas en lugar de una.</p>\n        <ol>\n          <li><strong>No la toque</strong> mientras siga en contacto con la fuente.</li>\n          <li><strong>Corte la energía</strong>: desconecte la clavija, apague el interruptor del equipo o accione la parada de emergencia.</li>\n          <li><strong>Si no puede cortar la energía</strong> y se trata de baja tensión, sepárela usando un objeto <strong>seco y no conductor</strong> (un palo de madera seco, una silla plástica, una cuerda seca), parado sobre una superficie seca y aislante.</li>\n          <li><strong>En media o alta tensión</strong> (líneas aéreas, subestaciones, celdas): no se acerque. Aleje a las demás personas y pida que corten la energía la empresa de energía o el personal autorizado.</li>\n          <li><strong>Active la emergencia</strong> y pida ayuda médica.</li>\n        </ol>\n        <p><strong>Cuando la persona ya está separada de la fuente:</strong></p>\n        <ul>\n          <li>Verifique si responde y si respira.</li>\n          <li>Si no respira, el personal capacitado inicia la <strong>reanimación cardiopulmonar</strong> y usa el desfibrilador externo automático (DEA) si hay uno disponible: la electricidad puede causar fibrilación, y el DEA puede revertirla.</li>\n          <li>Si respira, colóquela en posición de recuperación, abríguela y no la deje sola.</li>\n          <li>Cubra las quemaduras con apósitos limpios y secos.</li>\n          <li><strong>Toda persona que haya recibido una descarga debe ser valorada por un médico</strong>, aunque se sienta bien: puede tener quemaduras internas o alteraciones del ritmo del corazón que aparecen después.</li>\n        </ul>\n        <p><strong>Incendio de origen eléctrico:</strong></p>\n        <ul>\n          <li>Si es posible, corte la energía.</li>\n          <li>Use un extintor de <strong>CO₂ o de polvo químico seco</strong>. <strong>Nunca agua</strong> mientras haya tensión.</li>\n          <li>Si el fuego es grande o está dentro de un tablero o una subestación, evacúe y dé la alarma.</li>\n        </ul>\n        <p><strong>Reporte.</strong> Toda descarga, por pequeña que parezca, y todo cuasi accidente eléctrico (un cosquilleo al tocar un equipo, una chispa al conectar) se reporta: es la señal de una falla que puede matar a la próxima persona.</p>\n      ",
        "keyPoints": [
          "No tocar a la persona electrizada: cortar la energía primero; en baja tensión, separar con un objeto seco no conductor.",
          "En media o alta tensión, no acercarse: alejar a todos y pedir el corte a personal autorizado.",
          "Toda persona que recibió una descarga va al médico; los cosquilleos y chispas también se reportan."
        ],
        "practice": {
          "q": "Un compañero recibió una descarga, ya está separado de la fuente y dice que se siente bien. ¿Qué corresponde?",
          "options": [
            "Que siga trabajando si no tiene quemaduras visibles",
            "Que se tome un descanso de diez minutos",
            "Que lo valore un médico, porque puede tener lesiones que aparecen después"
          ]
        }
      }
    ],
    "scenarios": [
      {
        "scenario": "En la bodega, el interruptor del circuito de las estanterías se dispara por tercera vez en la mañana. Un compañero quiere abrir el tablero para \"subir el taco\" y revisar qué pasa adentro.",
        "options": [
          "Lo dejo, porque solo va a subir el taco.",
          "Lo detengo: un interruptor que se dispara repetidamente indica una falla. Desconectamos los equipos del circuito y reportamos al electricista.",
          "Le sugiero que pegue el taco con cinta para que no se vuelva a bajar."
        ]
      },
      {
        "scenario": "Un compañero recibe una descarga y sigue agarrando un equipo energizado de 120 V. Otro compañero corre a tirarlo del brazo para separarlo.",
        "options": [
          "Lo dejo, porque hay que separarlo rápido.",
          "Lo detengo, corto la energía en la clavija o el interruptor y, si no es posible, lo separamos con un objeto seco no conductor; luego activamos la emergencia.",
          "Le echo agua para que suelte el equipo."
        ]
      },
      {
        "scenario": "Una extensión de la bodega tiene un empalme cubierto con cinta aislante. El supervisor dice que \"así funciona bien, déjala\".",
        "options": [
          "La sigo usando, porque la cinta aísla.",
          "La uso solo para equipos pequeños.",
          "La retiro de servicio, la marco como dañada y pido una extensión industrial en buen estado."
        ]
      },
      {
        "scenario": "Debes lavar el piso del área de producción con manguera. Al lado hay un motor y una caja de conexiones con la tapa mal ajustada.",
        "options": [
          "Pido que el electricista desenergice y proteja el motor y la caja antes de lavar, o lavo esa zona sin chorro directo, según el procedimiento.",
          "Lavo con cuidado, sin apuntar directamente.",
          "Cubro la caja con una bolsa plástica y lavo normalmente."
        ]
      },
      {
        "scenario": "Debes llevar una escalera de aluminio de seis metros por el patio. Sobre el camino pasa una línea eléctrica aérea de media tensión.",
        "options": [
          "La llevo vertical para no golpear a nadie.",
          "La llevo horizontal, entre dos personas, por una ruta que mantenga la distancia de seguridad con la línea.",
          "Paso rápido por debajo de la línea con la escalera al hombro."
        ]
      }
    ],
    "exam": [
      {
        "q": "¿Por qué la humedad aumenta el peligro de la electricidad?",
        "options": [
          "Porque reduce la resistencia de la piel y facilita el paso de la corriente.",
          "Porque el agua aumenta el voltaje de la red eléctrica de la planta y de los equipos conectados.",
          "Porque hace que los interruptores se disparen menos."
        ]
      },
      {
        "q": "¿Qué es la fibrilación ventricular?",
        "options": [
          "Un tipo de quemadura en la piel causada por el arco eléctrico en los puntos de entrada y salida.",
          "Una alteración del ritmo del corazón que puede causar la muerte si no se atiende de inmediato.",
          "Un temblor de las manos que desaparece solo después de la descarga."
        ]
      },
      {
        "q": "¿Por qué es tan peligroso tocar algo energizado con una mano mientras la otra se apoya en una estructura metálica?",
        "options": [
          "Porque la estructura se calienta y quema la mano.",
          "Porque el metal aumenta el voltaje.",
          "Porque la corriente pasa de una mano a la otra atravesando el pecho y el corazón."
        ]
      },
      {
        "q": "¿Cuál es una causa frecuente de arco eléctrico en un tablero?",
        "options": [
          "Una herramienta o un tornillo que cae sobre las barras energizadas.",
          "Que el tablero esté cerrado con llave y con el frente despejado de materiales.",
          "Que los circuitos estén rotulados y señalizados."
        ]
      },
      {
        "q": "Un trabajador no electricista siente olor a plástico quemado cerca de un tablero. ¿Qué hace?",
        "options": [
          "Abre el tablero para ver qué se está quemando y apaga el interruptor que se vea dañado.",
          "Se aleja, no lo manipula y reporta de inmediato al electricista o al supervisor.",
          "Le echa agua a la puerta del tablero para enfriarlo."
        ]
      },
      {
        "q": "Según el RETIE, ¿quién puede intervenir una instalación eléctrica?",
        "options": [
          "Cualquier trabajador con experiencia en la planta.",
          "El supervisor del área, si tiene las llaves del tablero.",
          "Personal calificado y autorizado por la empresa."
        ]
      },
      {
        "q": "¿Cuál de estas acciones SÍ puede hacer un trabajador no electricista?",
        "options": [
          "Desconectar su equipo tirando de la clavija, no del cable.",
          "Cambiar un fusible quemado por uno de mayor capacidad para que no se vuelva a fundir.",
          "Hacer un empalme en una extensión con cinta aislante de buena calidad."
        ]
      },
      {
        "q": "¿Por qué nunca se corta la pata de tierra de una clavija?",
        "options": [
          "Porque la clavija pierde la garantía del fabricante.",
          "Porque esa pata protege a la persona si el equipo tiene una falla.",
          "Porque el equipo funciona más despacio y consume más energía cuando no la tiene."
        ]
      },
      {
        "q": "¿Qué problema causa conectar una multitoma sobre otra multitoma?",
        "options": [
          "Que los equipos consuman menos energía por estar en el mismo punto de conexión.",
          "Que el interruptor diferencial deje de funcionar en todo el circuito de la bodega.",
          "Que se sobrecargue el circuito y se calienten los conductores."
        ]
      },
      {
        "q": "Un interruptor se disparó una vez, no hay olor a quemado ni equipos mojados, y el procedimiento permite rearmarlo. Se rearma y se vuelve a disparar. ¿Qué se hace?",
        "options": [
          "No insistir y reportar la falla al electricista.",
          "Rearmarlo varias veces seguidas hasta que se quede arriba.",
          "Sostenerlo arriba con cinta mientras termina el turno."
        ]
      },
      {
        "q": "¿Qué protección corta la corriente en milisegundos cuando detecta que se escapa a través de una persona?",
        "options": [
          "El fusible común de vidrio que se instala en los equipos.",
          "El interruptor diferencial.",
          "La pata de tierra de la extensión."
        ]
      },
      {
        "q": "Un equipo eléctrico quedó mojado por una gotera durante la noche. ¿Qué se hace?",
        "options": [
          "Se enciende para que el calor del motor lo seque más rápido.",
          "Se seca por fuera con un trapo y se conecta de inmediato.",
          "No se conecta ni se enciende hasta que lo revise el electricista."
        ]
      },
      {
        "q": "Un cable de una línea aérea cayó al suelo en el patio. ¿Qué hace?",
        "options": [
          "Me alejo, mantengo alejadas a las personas y aviso para que corten la energía.",
          "Lo muevo con un palo seco para despejar el paso de los vehículos.",
          "Lo cubro con conos y sigo trabajando cerca."
        ]
      },
      {
        "q": "Durante una tormenta eléctrica, ¿qué trabajos se suspenden?",
        "options": [
          "Solo los trabajos dentro de las oficinas que usan computadores conectados a la red.",
          "Los trabajos en exteriores, alturas, techos y estructuras metálicas expuestas.",
          "Ninguno, si los trabajadores usan botas de caucho."
        ]
      },
      {
        "q": "Una persona está en contacto con un equipo energizado de 120 V. ¿Qué es lo primero?",
        "options": [
          "Tomarla de la ropa para separarla rápido.",
          "Echarle agua para que suelte el equipo.",
          "Cortar la energía desde la clavija, el interruptor o la parada de emergencia."
        ]
      },
      {
        "q": "¿Qué extintor se usa en un incendio de un equipo eléctrico energizado?",
        "options": [
          "De CO₂ o de polvo químico seco.",
          "De agua a presión, porque enfría más rápido el equipo.",
          "De espuma, porque cubre todo el equipo."
        ]
      }
    ],
    "workshops": [],
    "project": null
  },
  {
    "id": "herramientas-electricas",
    "title": "Manejo Seguro de Herramientas Eléctricas Portátiles",
    "hours": 1.5,
    "category": "prevencion_sst",
    "regulation": "Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979, RETIE (Res. 40117 de 2024), Res. 1792 de 1990",
    "legalNotice": "Formación teórica para usuarios de herramientas eléctricas portátiles. No reemplaza el manual del fabricante de cada herramienta ni el entrenamiento práctico supervisado en el puesto.",
    "summary": "Los riesgos de las herramientas portátiles, la inspección antes de usarlas, el uso seguro de pulidoras, taladros y sierras, la protección eléctrica, el control del ruido, la vibración y el polvo, y el mantenimiento.",
    "fieldCase": "Un operario retiró la guarda de una pulidora de 4,5 pulgadas para montar un disco de 7 pulgadas, que tenía una velocidad máxima menor que la de la herramienta. Al encenderla, el disco estalló por la fuerza centrífuga y un fragmento le causó una herida profunda en el muslo.",
    "checklist": [
      "Inspeccioné carcasa, cable, clavija, interruptor, guarda y mango auxiliar.",
      "El disco o la broca es del tamaño y tipo correctos, y su velocidad máxima es igual o mayor que la de la herramienta.",
      "La guarda está puesta y bien orientada.",
      "La pieza está sujeta con prensa o mordaza, no con la mano.",
      "Uso gafas y careta facial, protección auditiva y, si hay polvo, protección respiratoria.",
      "No uso ropa suelta, joyas ni cabello largo suelto cerca de partes que giran.",
      "Desconecto la herramienta antes de cambiar accesorios o hacer ajustes.",
      "Si la herramienta falla, la marco como fuera de servicio y la reporto."
    ],
    "failureAnalysis": "Falla raíz: se retiró la guarda y se montó un disco incompatible en tamaño y en velocidad máxima con la herramienta.",
    "onSiteClosure": "Práctica en su empresa: hacer la inspección preoperacional de una pulidora y de un taladro con la lista de la empresa, verificar la compatibilidad del disco con la herramienta y practicar, bajo supervisión, el montaje del disco y la sujeción de la pieza.",
    "image": "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1000&q=80",
    "modules": [
      {
        "title": "Los riesgos de las herramientas portátiles",
        "content": "\n        <p>Las herramientas eléctricas portátiles (pulidoras o amoladoras, taladros, sierras circulares, caladoras, rotomartillos, lijadoras) están en casi todas las empresas. Precisamente porque son tan comunes, se subestiman.</p>\n        <p><strong>Riesgos mecánicos:</strong></p>\n        <ul>\n          <li><strong>Cortes y laceraciones</strong> por contacto con discos, cuchillas y brocas.</li>\n          <li><strong>Proyección de partículas</strong>: esquirlas de metal, chispas, fragmentos de discos que estallan.</li>\n          <li><strong>Retroceso</strong> (en inglés, <em>kickback</em>): cuando el disco o la hoja se traba, la herramienta salta con violencia hacia el operario.</li>\n          <li><strong>Atrapamiento</strong>: guantes, mangas, cabello o joyas enredados en brocas y ejes que giran.</li>\n        </ul>\n        <p><strong>Riesgos eléctricos:</strong> choque por cables dañados, herramientas mojadas o mal conectadas a tierra (ver el curso de riesgo eléctrico).</p>\n        <p><strong>Riesgos para la salud a largo plazo:</strong></p>\n        <ul>\n          <li><strong>Ruido</strong>: pulidoras, rotomartillos y sierras superan con facilidad los niveles que dañan el oído.</li>\n          <li><strong>Vibración</strong>: el uso prolongado puede causar el síndrome de vibración mano-brazo: dedos blancos, adormecimiento y pérdida de fuerza.</li>\n          <li><strong>Polvo</strong>: al cortar o pulir concreto, ladrillo, piedra o mortero se libera <strong>sílice cristalina</strong>, que causa silicosis, una enfermedad pulmonar irreversible.</li>\n          <li><strong>Posturas</strong> y esfuerzos en hombros, muñecas y espalda.</li>\n        </ul>\n        <p><strong>Riesgo de incendio</strong>: las chispas de la pulidora son un trabajo en caliente. Fuera del taller requieren permiso y vigía.</p>\n        <p><strong>Por qué ocurren los accidentes:</strong> casi siempre por quitar una protección para trabajar \"más cómodo\", usar un accesorio que no corresponde, no sujetar la pieza, trabajar con prisa o usar una herramienta dañada. El caso con que empieza este curso reúne dos de estos errores.</p>\n      ",
        "keyPoints": [
          "Riesgos mecánicos: cortes, proyecciones, retroceso y atrapamiento.",
          "A largo plazo: ruido, vibración (síndrome mano-brazo) y polvo de sílice (silicosis).",
          "Las chispas de la pulidora son trabajo en caliente fuera del taller."
        ],
        "practice": {
          "q": "¿Qué es el retroceso (kickback) en una herramienta portátil?",
          "options": [
            "Cuando la herramienta se apaga sola por sobrecarga",
            "Cuando el disco o la hoja se traba y la herramienta salta hacia el operario",
            "Cuando el cable se enreda en la pieza"
          ]
        }
      },
      {
        "title": "Marco normativo y responsabilidades",
        "content": "\n        <p><strong>En Colombia:</strong></p>\n        <ul>\n          <li>El <strong>Decreto 1072 de 2015</strong> obliga a la empresa a identificar los peligros, evaluar los riesgos y aplicar controles, y a los trabajadores a cumplir los procedimientos y reportar las condiciones peligrosas.</li>\n          <li>La <strong>Resolución 0312 de 2019</strong> incluye entre los estándares mínimos el mantenimiento periódico de instalaciones, equipos, máquinas y herramientas, y las inspecciones.</li>\n          <li>La <strong>Resolución 2400 de 1979</strong> (Estatuto de Seguridad Industrial) contiene disposiciones sobre herramientas manuales y portátiles, sus protecciones y su mantenimiento.</li>\n          <li>El <strong>RETIE</strong> (Resolución 40117 de 2024) fija requisitos para los equipos eléctricos y las instalaciones a las que se conectan, como la puesta a tierra y la protección diferencial en ciertos circuitos.</li>\n          <li>La <strong>Resolución 1792 de 1990</strong> establece los valores límite permisibles de exposición al ruido en el trabajo: 85 decibeles (dBA) para una jornada de 8 horas.</li>\n        </ul>\n        <p><strong>El manual del fabricante</strong> es parte del procedimiento. Indica los accesorios permitidos, la velocidad máxima, las protecciones que no se deben retirar y el mantenimiento. Lo que el fabricante prohíbe, la empresa también lo prohíbe.</p>\n        <p><strong>Responsabilidades de la empresa:</strong> comprar herramientas adecuadas para cada tarea y con sus protecciones; mantenerlas; dar los elementos de protección; capacitar; y tener un sistema para retirar de servicio las herramientas dañadas.</p>\n        <p><strong>Responsabilidades del trabajador:</strong> usar la herramienta correcta para la tarea; inspeccionarla antes de usarla; no retirar ni anular protecciones; usar los elementos de protección; no modificar la herramienta; y reportar los daños.</p>\n        <p><strong>Herramientas propias y de contratistas.</strong> Las herramientas que traen los contratistas o los trabajadores también deben cumplir estos requisitos y pasar por la inspección antes de usarse en la planta.</p>\n      ",
        "keyPoints": [
          "Decreto 1072 de 2015 y Res. 0312 de 2019: controles, mantenimiento e inspecciones; RETIE para la parte eléctrica.",
          "La Res. 1792 de 1990 fija 85 dBA para 8 horas como límite de ruido.",
          "El manual del fabricante es parte del procedimiento: lo que prohíbe, la empresa también lo prohíbe."
        ],
        "practice": {
          "q": "Según la Res. 1792 de 1990, ¿cuál es el límite de ruido para una jornada de 8 horas?",
          "options": [
            "120 dBA",
            "60 dBA",
            "85 dBA"
          ]
        }
      },
      {
        "title": "Inspección antes de usar la herramienta",
        "content": "\n        <p>Una inspección de un minuto antes de usar la herramienta evita la mayoría de los accidentes por fallas del equipo.</p>\n        <p><strong>Lista de inspección básica:</strong></p>\n        <ul>\n          <li><strong>Carcasa</strong>: sin grietas, golpes ni piezas sueltas. Una carcasa rota puede dejar expuestas partes eléctricas.</li>\n          <li><strong>Cable</strong>: sin cortes, aplastamientos, partes peladas ni empalmes. El cable entra firme en la herramienta, con su protector de salida en buen estado.</li>\n          <li><strong>Clavija</strong>: completa, sin patas dobladas ni quemadas; con la pata de tierra si la herramienta la trae.</li>\n          <li><strong>Interruptor</strong>: enciende y apaga bien, y vuelve a apagado al soltarlo. Un interruptor que se queda pegado es causa de accidentes graves.</li>\n          <li><strong>Guarda</strong>: presente, completa, bien fija y en la posición correcta.</li>\n          <li><strong>Mango auxiliar</strong> (en pulidoras y taladros grandes): presente y bien apretado.</li>\n          <li><strong>Accesorio</strong> (disco, broca, hoja): adecuado, en buen estado y bien montado.</li>\n          <li><strong>Herramientas inalámbricas</strong>: batería sin golpes, hinchazón ni calentamiento anormal, y bien encajada.</li>\n        </ul>\n        <p><strong>Prueba en vacío.</strong> Al encender, con el accesorio orientado lejos de las personas, escuche: ruidos anormales, vibración excesiva u olor a quemado son señales para detenerse.</p>\n        <p><strong>Si algo falla:</strong> no use la herramienta, márquela con una tarjeta de \"fuera de servicio\", sepárela y repórtela. No intente repararla usted mismo ni la deje en la caja para que otro la use.</p>\n        <p><strong>Inspección periódica.</strong> Además de la revisión diaria del usuario, la empresa debe hacer una inspección más completa con una frecuencia definida, por ejemplo mensual, y marcar las herramientas inspeccionadas con un código o color del periodo.</p>\n      ",
        "keyPoints": [
          "Revisar carcasa, cable, clavija, interruptor, guarda, mango auxiliar, accesorio y batería.",
          "Prueba en vacío apuntando lejos de las personas: ruidos, vibración u olor anormal son señal para detenerse.",
          "Herramienta dañada: tarjeta de fuera de servicio, separarla y reportarla; nunca dejarla para otro."
        ],
        "practice": {
          "q": "Durante la inspección, el interruptor de la pulidora se queda pegado en encendido. ¿Qué haces?",
          "options": [
            "La marco como fuera de servicio y la reporto",
            "La uso con cuidado y la apago desde el enchufe",
            "La golpeo para soltar el interruptor"
          ]
        }
      },
      {
        "title": "Pulidoras o amoladoras: la herramienta más peligrosa del taller",
        "content": "\n        <p>La pulidora gira a miles de revoluciones por minuto. A esa velocidad, un disco que se rompe se convierte en un proyectil.</p>\n        <p><strong>El disco correcto:</strong></p>\n        <ul>\n          <li><strong>Diámetro</strong> igual al que indica la herramienta. Nunca se monta un disco más grande que el previsto, y nunca se retira la guarda para que \"quepa\".</li>\n          <li><strong>Velocidad máxima del disco</strong> (impresa en el disco, en RPM o en metros por segundo) <strong>igual o mayor</strong> que la velocidad de la herramienta. Un disco con velocidad máxima menor puede estallar, como en el caso del curso.</li>\n          <li><strong>Tipo</strong> según la tarea: disco de corte (delgado) solo para cortar, nunca para desbastar con la cara; disco de desbaste para desbastar; discos específicos para concreto, metal o acero inoxidable.</li>\n          <li><strong>Estado</strong>: sin grietas, golpes, humedad ni desgaste irregular. Muchos discos abrasivos tienen <strong>fecha de vencimiento</strong> impresa: no se usan vencidos.</li>\n          <li>Montado con las bridas correctas y apretado con la llave del fabricante.</li>\n        </ul>\n        <p><strong>Uso seguro:</strong></p>\n        <ul>\n          <li><strong>La guarda siempre puesta</strong>, orientada para que las chispas y fragmentos vayan lejos del cuerpo.</li>\n          <li>El <strong>mango auxiliar</strong> instalado y las dos manos en la herramienta.</li>\n          <li>Después de montar un disco nuevo, dejarla girar en vacío alrededor de un minuto, apuntando a un lugar seguro, antes de trabajar.</li>\n          <li>Nadie en la línea de giro del disco.</li>\n          <li>La pieza sujeta con prensa o mordaza.</li>\n          <li>No forzar el disco ni torcerlo dentro del corte: es la causa principal del retroceso y de la rotura.</li>\n          <li>No bloquear el interruptor en posición de encendido cuando el modelo lo permite, salvo que el procedimiento lo autorice.</li>\n          <li>Esperar a que el disco se detenga por completo antes de soltar la herramienta. Nunca apoyarla en el piso o en las piernas mientras gira.</li>\n          <li>Desconectarla antes de cambiar el disco.</li>\n        </ul>\n        <p><strong>Las chispas</strong> deben dirigirse lejos de las personas, de los combustibles y de los cilindros de gas.</p>\n      ",
        "keyPoints": [
          "El disco: diámetro correcto, velocidad máxima igual o mayor que la de la herramienta, tipo adecuado y sin vencer.",
          "Guarda siempre puesta, mango auxiliar, dos manos, pieza sujeta y nadie en la línea de giro.",
          "Prueba de un minuto en vacío con disco nuevo; esperar que se detenga antes de soltarla."
        ],
        "practice": {
          "q": "La velocidad máxima impresa en un disco es menor que la velocidad de la pulidora. ¿Qué haces?",
          "options": [
            "Lo monto si es de buena marca",
            "No lo monto: el disco puede estallar",
            "Lo monto y trabajo con menos presión"
          ]
        }
      },
      {
        "title": "Taladros, rotomartillos y sierras",
        "content": "\n        <p><strong>Taladros y rotomartillos:</strong></p>\n        <ul>\n          <li>Usar la broca adecuada para el material (metal, madera, concreto) y en buen estado.</li>\n          <li>Retirar la llave del mandril antes de encender: si queda puesta, sale disparada.</li>\n          <li><strong>Sujetar la pieza</strong> con prensa o mordaza. Cuando la broca se traba en una pieza pequeña sostenida con la mano, la pieza gira con la broca y corta la mano.</li>\n          <li>Usar el mango auxiliar en taladros potentes: al trabarse la broca, la herramienta puede girar con fuerza y lesionar la muñeca.</li>\n          <li>Antes de perforar paredes, pisos o techos, verificar que no haya tuberías de gas, de agua ni cables eléctricos ocultos.</li>\n          <li>No usar guantes holgados, mangas sueltas ni joyas cerca de la broca: se enredan.</li>\n        </ul>\n        <p><strong>Sierras circulares portátiles:</strong></p>\n        <ul>\n          <li>La <strong>guarda inferior móvil</strong> debe moverse libremente y cerrarse sola al terminar el corte. Nunca se amarra abierta.</li>\n          <li>Ajustar la profundidad de corte para que la hoja sobresalga apenas por debajo de la pieza.</li>\n          <li>Apoyar bien la pieza y cortar con la pieza firme; nunca sostener con la mano la parte que se va a cortar.</li>\n          <li>Pararse a un lado de la línea de corte, no detrás de la sierra: si se produce un retroceso, la sierra salta hacia atrás.</li>\n          <li>Usar la cuchilla divisora o separadora cuando la sierra la trae, para evitar que el corte se cierre y trabe la hoja.</li>\n          <li>Esperar a que la hoja se detenga antes de levantar la sierra de la pieza.</li>\n        </ul>\n        <p><strong>Caladoras y sierras de sable:</strong> hoja adecuada al material, base apoyada contra la pieza, y cuidado con lo que hay detrás o debajo de la pieza que se corta.</p>\n        <p><strong>Regla común a todas:</strong> la herramienta se desconecta (o se retira la batería) antes de cambiar brocas, hojas o discos, y antes de cualquier ajuste o limpieza.</p>\n      ",
        "keyPoints": [
          "Taladro: retirar la llave del mandril, sujetar la pieza y verificar que no haya tuberías ni cables ocultos.",
          "Sierra circular: guarda inferior libre, profundidad ajustada y el cuerpo a un lado de la línea de corte.",
          "Desconectar o retirar la batería antes de cambiar accesorios o hacer ajustes."
        ],
        "practice": {
          "q": "¿Qué se hace antes de perforar una pared con un taladro?",
          "options": [
            "Quitar el mango auxiliar para tener más control",
            "Mojar la pared para reducir el polvo",
            "Verificar que no haya tuberías ni cables ocultos"
          ]
        }
      },
      {
        "title": "Protección eléctrica y herramientas inalámbricas",
        "content": "\n        <p><strong>Doble aislamiento.</strong> Muchas herramientas modernas tienen <strong>doble aislamiento</strong>, identificado con el símbolo de un cuadrado dentro de otro cuadrado. Tienen dos capas de aislamiento entre las partes eléctricas y la carcasa, y no necesitan pata de tierra. Las herramientas con carcasa metálica sin doble aislamiento sí necesitan clavija con <strong>polo a tierra</strong> y tomacorriente con tierra.</p>\n        <p><strong>Protección diferencial.</strong> En zonas húmedas, exteriores, obras y lugares con mucha estructura metálica, las herramientas se conectan a circuitos con <strong>interruptor diferencial</strong> (protección de falla a tierra), que corta la corriente si detecta una fuga a través de una persona. Si no hay uno fijo, existen extensiones y adaptadores portátiles con esta protección.</p>\n        <p><strong>Extensiones:</strong> de uso industrial, calibre adecuado, con polo a tierra, sin empalmes, desenrolladas con cargas altas y protegidas del tránsito y del agua.</p>\n        <p><strong>Reglas eléctricas de uso:</strong></p>\n        <ul>\n          <li>No usar herramientas con cable bajo la lluvia ni con las manos o los pies mojados.</li>\n          <li>No cargar la herramienta del cable ni desconectarla tirando del cable.</li>\n          <li>Mantener el cable lejos del disco o la hoja, del calor, del aceite y de los bordes cortantes.</li>\n          <li>En atmósferas con gases, vapores o polvos inflamables, solo se usan herramientas certificadas para esas áreas, con permiso de trabajo.</li>\n        </ul>\n        <p><strong>Herramientas inalámbricas.</strong> Eliminan el riesgo del cable, pero tienen sus propios cuidados:</p>\n        <ul>\n          <li>Las baterías de ion de litio pueden incendiarse si se golpean, se perforan, se mojan o se cargan con un cargador que no es el original.</li>\n          <li>Cargar en un lugar ventilado, sobre una superficie no combustible y sin dejarlas cargando sin supervisión durante la noche, según la política de la empresa.</li>\n          <li>Retirar de servicio las baterías hinchadas, golpeadas o que se calientan de forma anormal.</li>\n          <li><strong>Retirar la batería</strong> antes de cambiar accesorios: una herramienta inalámbrica sin cable puede encenderse igual.</li>\n        </ul>\n      ",
        "keyPoints": [
          "Doble aislamiento (cuadrado dentro de cuadrado) o polo a tierra; en zonas húmedas, protección diferencial.",
          "Nunca con lluvia o manos mojadas, ni cargar o desconectar tirando del cable.",
          "Baterías de litio: cargador original, sin golpes ni humedad, y retirarlas antes de cambiar accesorios."
        ],
        "practice": {
          "q": "¿Qué indica el símbolo de un cuadrado dentro de otro cuadrado en una herramienta?",
          "options": [
            "Que tiene doble aislamiento",
            "Que es resistente al agua",
            "Que es una herramienta inalámbrica"
          ]
        }
      },
      {
        "title": "Ruido, vibración, polvo y elementos de protección",
        "content": "\n        <p><strong>Ruido.</strong> Una pulidora o un rotomartillo producen niveles de ruido que, sin protección, causan pérdida auditiva permanente con el tiempo. Esa pérdida no se recupera. Use <strong>protección auditiva</strong> (tapones o copas) siempre que trabaje con estas herramientas, y también si trabaja cerca de quien las usa. Una señal práctica: si tiene que gritar para que lo escuche alguien a un metro, el ruido es peligroso.</p>\n        <p><strong>Vibración.</strong> El uso prolongado de herramientas que vibran puede dañar los vasos sanguíneos y los nervios de las manos (síndrome de vibración mano-brazo): dedos que se ponen blancos con el frío, hormigueo, pérdida de sensibilidad y de fuerza. Para prevenirlo:</p>\n        <ul>\n          <li>usar herramientas con sistemas antivibración y en buen estado (los discos y las brocas gastadas vibran más);</li>\n          <li>no apretar la herramienta más de lo necesario;</li>\n          <li>hacer pausas y rotar tareas;</li>\n          <li>mantener las manos calientes y secas;</li>\n          <li>informar al médico de síntomas en los dedos.</li>\n        </ul>\n        <p><strong>Polvo de sílice.</strong> Cortar o pulir concreto, ladrillo, baldosa o piedra libera sílice cristalina respirable, que causa <strong>silicosis</strong>, una enfermedad pulmonar grave e irreversible, y aumenta el riesgo de cáncer de pulmón. Controles: cortar en húmedo (herramientas con suministro de agua), usar herramientas con aspiración de polvo, trabajar en lugares ventilados y usar protección respiratoria para partículas adecuada. Barrer en seco esparce el polvo; se aspira o se humedece.</p>\n        <p><strong>Elementos de protección según la herramienta:</strong></p>\n        <ul>\n          <li><strong>Gafas de seguridad</strong> siempre; con pulidora, además, <strong>careta facial</strong>.</li>\n          <li><strong>Protección auditiva</strong>.</li>\n          <li><strong>Guantes</strong> que protejan del corte y de las chispas para manipular piezas y pulidoras, pero <strong>no guantes holgados</strong> cerca de brocas y ejes que giran.</li>\n          <li><strong>Ropa ajustada</strong>, sin bufandas, cordones ni joyas; cabello largo recogido.</li>\n          <li><strong>Calzado de seguridad</strong>.</li>\n          <li><strong>Protección respiratoria</strong> cuando hay polvo.</li>\n        </ul>\n      ",
        "keyPoints": [
          "Protección auditiva con pulidoras y rotomartillos: la pérdida auditiva no se recupera.",
          "Vibración: herramientas antivibración, accesorios en buen estado, pausas y manos calientes.",
          "Polvo de sílice: cortar en húmedo o con aspiración y usar protección respiratoria; nada de barrer en seco."
        ],
        "practice": {
          "q": "¿Cuál es un control eficaz para el polvo de sílice al cortar concreto?",
          "options": [
            "Usar un tapabocas de tela",
            "Cortar en húmedo o con aspiración de polvo",
            "Barrer el polvo en seco al final del día"
          ]
        }
      },
      {
        "title": "Mantenimiento, almacenamiento y reporte",
        "content": "\n        <p><strong>Mantenimiento.</strong> Las herramientas se mantienen según el manual del fabricante:</p>\n        <ul>\n          <li>Limpieza de las ranuras de ventilación para que el motor no se recaliente.</li>\n          <li>Cambio de escobillas, cables, interruptores y rodamientos <strong>solo por personal de mantenimiento calificado</strong>, con repuestos originales o equivalentes.</li>\n          <li>Verificación de la continuidad de la tierra y del aislamiento en las inspecciones periódicas.</li>\n          <li>Registro de las intervenciones en la hoja de vida de la herramienta.</li>\n        </ul>\n        <p><strong>Lo que nunca se hace:</strong></p>\n        <ul>\n          <li>Modificar la herramienta: cambiar la guarda por otra \"que estorbe menos\", adaptar accesorios de otra marca o de otro tamaño, eliminar el mango auxiliar.</li>\n          <li>Reparar el cable con cinta.</li>\n          <li>Usar una herramienta para una tarea para la que no fue diseñada (por ejemplo, un taladro como mezclador de pintura sin el accesorio indicado, o una pulidora sin guarda como lijadora).</li>\n        </ul>\n        <p><strong>Almacenamiento:</strong></p>\n        <ul>\n          <li>En un lugar seco, limpio y bajo llave, en su estuche o en un estante.</li>\n          <li>Desconectadas y con el cable enrollado sin dobleces fuertes.</li>\n          <li>Los discos y las brocas en su empaque, protegidos de la humedad y de los golpes. Los discos abrasivos se guardan planos o según indique el fabricante.</li>\n          <li>Las baterías separadas de objetos metálicos que puedan causar un cortocircuito.</li>\n        </ul>\n        <p><strong>Préstamo y control.</strong> Un sistema de préstamo (quién la tiene, cuándo la devuelve, en qué estado) ayuda a detectar herramientas dañadas y a evitar que circulen herramientas personales sin inspección.</p>\n        <p><strong>Reportar es prevenir.</strong> Un disco que vibra, un interruptor que se pega, un cosquilleo al tocar la carcasa o un retroceso que casi causa un accidente se reportan. Son avisos de que el próximo uso puede terminar en una lesión.</p>\n      ",
        "keyPoints": [
          "Mantenimiento según el fabricante y solo por personal calificado; registrar en la hoja de vida.",
          "Nunca modificar la herramienta, reparar el cable con cinta ni usarla para lo que no fue diseñada.",
          "Almacenar seco, limpio y desconectado; los cuasi accidentes también se reportan."
        ],
        "practice": {
          "q": "El cable de un taladro tiene un corte pequeño. ¿Qué se hace?",
          "options": [
            "Se usa solo en trabajos cortos",
            "Se repara con cinta aislante",
            "Se retira de servicio para que mantenimiento lo cambie"
          ]
        }
      }
    ],
    "scenarios": [
      {
        "scenario": "Necesitas cortar un perfil con pulidora en un espacio estrecho y la guarda estorba. Un compañero dice que \"la retiras un momento y la pones después\".",
        "options": [
          "La retiro solo para este corte y la vuelvo a poner.",
          "Busco otra forma de hacer el corte: reubicar la pieza, usar una herramienta más pequeña con su guarda o un método distinto.",
          "Giro la guarda hacia el otro lado para que no estorbe, aunque las chispas vengan hacia mí."
        ]
      },
      {
        "scenario": "Solo hay discos de 7 pulgadas y la pulidora es de 4,5 pulgadas. La velocidad máxima del disco es menor que la de la herramienta. Un compañero sugiere quitar la guarda para que quepa.",
        "options": [
          "Lo montamos con cuidado, trabajando despacio.",
          "Lo montamos con la guarda, aunque quede apretado.",
          "No lo montamos. Conseguimos el disco del diámetro correcto y con velocidad máxima igual o mayor que la de la herramienta."
        ]
      },
      {
        "scenario": "Vas a trabajar con un taladro en una zona de lavado. El tomacorriente no tiene protección diferencial y la extensión tiene un empalme con cinta.",
        "options": [
          "Uso una herramienta inalámbrica o pido un circuito o adaptador con protección diferencial y una extensión industrial sin empalmes.",
          "Trabajo con botas de caucho y sigo.",
          "Tapo el empalme con más cinta y empiezo."
        ]
      },
      {
        "scenario": "Debes perforar una lámina pequeña con un taladro de banco portátil. Tu compañero propone sostenerla con la mano porque \"es solo un hueco\".",
        "options": [
          "La sostengo con guantes gruesos para no cortarme.",
          "La sujeto con una prensa o mordaza antes de perforar.",
          "La sostengo con la mano y uso una velocidad alta para que termine rápido."
        ]
      },
      {
        "scenario": "Vas a cortar baldosas de cerámica con una pulidora durante toda la mañana en una cocina sin ventilación. No hay agua ni aspiración disponible.",
        "options": [
          "Corto así y al final barro bien el polvo.",
          "Uso un tapabocas de tela y abro la puerta.",
          "Pido un método de corte en húmedo o con aspiración, hago el corte en un lugar ventilado y uso la protección respiratoria adecuada."
        ]
      }
    ],
    "exam": [
      {
        "q": "¿Qué enfermedad causa el polvo de sílice que se libera al cortar concreto o baldosas?",
        "options": [
          "Silicosis, una enfermedad pulmonar irreversible.",
          "Fiebre de humos metálicos.",
          "Síndrome de vibración mano-brazo, por el uso prolongado de herramientas que vibran."
        ]
      },
      {
        "q": "¿Qué síntoma es propio del síndrome de vibración mano-brazo?",
        "options": [
          "Dolor de cabeza después de usar la herramienta.",
          "Dedos que se ponen blancos con el frío y pérdida de sensibilidad.",
          "Irritación de los ojos por las chispas."
        ]
      },
      {
        "q": "¿Por qué el manual del fabricante es parte del procedimiento de trabajo?",
        "options": [
          "Porque explica cómo pedir la garantía de la herramienta.",
          "Porque lo exige el almacén para entregar la herramienta.",
          "Porque indica los accesorios permitidos, la velocidad máxima y las protecciones que no se retiran."
        ]
      },
      {
        "q": "En la inspección, ¿qué indica que el interruptor de una herramienta está en buen estado?",
        "options": [
          "Que vuelve a la posición de apagado al soltarlo.",
          "Que se queda encendido aunque se suelte, para no cansar el dedo.",
          "Que se enciende solo."
        ]
      },
      {
        "q": "Una herramienta presenta un olor a quemado durante la prueba en vacío. ¿Qué se hace?",
        "options": [
          "Se deja funcionar unos minutos más para ver si el olor desaparece.",
          "Se detiene, se marca como fuera de servicio y se reporta.",
          "Se sigue usando."
        ]
      },
      {
        "q": "En una pulidora, ¿qué condición debe cumplir la velocidad máxima del disco?",
        "options": [
          "Ser menor que la de la herramienta, para que el disco gire más despacio y dure más.",
          "Ser cualquier valor, porque la pulidora regula sola la velocidad según el disco.",
          "Ser igual o mayor que la velocidad de la herramienta."
        ]
      },
      {
        "q": "¿Para qué se usa un disco de corte delgado?",
        "options": [
          "Solo para cortar, nunca para desbastar con la cara.",
          "Para desbastar soldaduras con la cara del disco.",
          "Para cortar y desbastar, según lo que se necesite en el momento."
        ]
      },
      {
        "q": "Después de montar un disco nuevo en la pulidora, ¿qué se hace antes de trabajar?",
        "options": [
          "Se golpea suavemente el disco contra la mesa para comprobar que está firme.",
          "Se deja girar en vacío alrededor de un minuto, apuntando a un lugar seguro.",
          "Se moja el disco para que corte mejor."
        ]
      },
      {
        "q": "¿Qué se hace con la llave del mandril antes de encender un taladro?",
        "options": [
          "Se deja puesta para cambiar la broca más rápido.",
          "Se amarra al cable del taladro para no perderla.",
          "Se retira, porque si queda puesta sale disparada."
        ]
      },
      {
        "q": "Al usar una sierra circular portátil, ¿dónde debe ubicarse el operario?",
        "options": [
          "A un lado de la línea de corte, no detrás de la sierra.",
          "Justo detrás de la sierra, para empujarla con más fuerza.",
          "Frente a la sierra, para ver mejor la línea de corte."
        ]
      },
      {
        "q": "¿Qué debe pasar con la guarda inferior móvil de una sierra circular al terminar el corte?",
        "options": [
          "Debe quedar abierta y amarrada para facilitar el siguiente corte.",
          "Debe cerrarse sola y moverse libremente.",
          "Debe retirarse si estorba para ver la línea."
        ]
      },
      {
        "q": "¿Qué herramienta no necesita clavija con polo a tierra?",
        "options": [
          "Una herramienta con carcasa metálica sin doble aislamiento.",
          "Ninguna.",
          "Una herramienta con doble aislamiento."
        ]
      },
      {
        "q": "Al cambiar la broca de un taladro inalámbrico, ¿qué se hace primero?",
        "options": [
          "Retirar la batería.",
          "Poner el selector en la velocidad más baja y cambiar la broca con la batería puesta.",
          "Nada, porque las herramientas inalámbricas no tienen riesgo eléctrico."
        ]
      },
      {
        "q": "¿Qué guantes no deben usarse cerca de brocas y ejes que giran?",
        "options": [
          "Ninguno: cualquier guante sirve con cualquier herramienta.",
          "Guantes holgados, que pueden enredarse.",
          "Guantes de nitrilo delgados y ajustados."
        ]
      },
      {
        "q": "¿Qué protección facial se usa con una pulidora, además de las gafas de seguridad?",
        "options": [
          "Una gorra con visera para proteger la frente de las chispas.",
          "Unas gafas de sol oscuras encima de las gafas de seguridad.",
          "Una careta facial."
        ]
      },
      {
        "q": "¿Quién cambia las escobillas o el cable de una herramienta eléctrica?",
        "options": [
          "Personal de mantenimiento calificado, con repuestos adecuados.",
          "Cualquier usuario con experiencia, siempre que desconecte la herramienta antes de abrirla.",
          "El almacenista que entrega la herramienta."
        ]
      }
    ],
    "workshops": [],
    "project": null
  },
  {
    "id": "mecanica-basica",
    "title": "Mecánica Básica Industrial y Seguridad en Mantenimiento",
    "hours": 1.5,
    "category": "prevencion_sst",
    "regulation": "Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979",
    "legalNotice": "Formación teórica en seguridad para personal de mantenimiento mecánico y operarios que hacen ajustes básicos. No reemplaza el entrenamiento técnico en cada equipo, el manual del fabricante ni el procedimiento de bloqueo de energías.",
    "summary": "Los peligros de las transmisiones mecánicas y los puntos de atrapamiento, las guardas, la preparación antes de intervenir, el uso correcto de herramientas manuales y del torque, rodamientos y lubricación, el manejo de piezas pesadas y la entrega segura del equipo.",
    "fieldCase": "Un técnico ajustó la tensión de una correa en V y, sin reinstalar la guarda, encendió el motor para \"escuchar cómo sonaba\". Al acercarse a revisar, la manga de su camisa quedó atrapada entre la correa y la polea, y el brazo fue arrastrado hacia la transmisión.",
    "checklist": [
      "Bloqueé y verifiqué energía cero antes de intervenir (LOTO).",
      "Identifiqué los puntos de atrapamiento y las energías residuales del equipo.",
      "Uso la herramienta del tamaño correcto; no uso tubos como palanca.",
      "Aprieto con el torque y la secuencia que indica el fabricante.",
      "Mi ropa está ajustada, sin joyas, y tengo el cabello recogido.",
      "Para piezas pesadas uso ayudas mecánicas o pido ayuda.",
      "Antes de probar: guardas instaladas, herramientas recogidas y personas fuera.",
      "Dejo el área limpia, sin derrames de aceite y con los trapos sucios en recipientes cerrados."
    ],
    "failureAnalysis": "Falla raíz: prueba de un equipo en movimiento sin la guarda instalada y uso de ropa holgada cerca de una transmisión.",
    "onSiteClosure": "Práctica en su empresa: identificar con el jefe de mantenimiento los puntos de atrapamiento y las guardas de una máquina real, practicar el apriete con llave de torque en secuencia, y hacer la entrega de un equipo después de una intervención con la lista de verificación.",
    "image": "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1000&q=80",
    "modules": [
      {
        "title": "Los peligros del mantenimiento mecánico",
        "content": "\n        <p>El personal de mantenimiento tiene una exposición especial: trabaja <strong>dentro</strong> de las máquinas, en los lugares que las guardas protegen durante la operación normal, y muchas veces con presión para devolver el equipo a producción rápido.</p>\n        <p><strong>Peligros principales:</strong></p>\n        <ul>\n          <li><strong>Atrapamiento</strong> en transmisiones, rodillos, ejes y engranajes: las lesiones más graves del mantenimiento, con amputaciones y muertes.</li>\n          <li><strong>Arranque inesperado</strong> o liberación de energía almacenada mientras se interviene (por eso existe el bloqueo y etiquetado).</li>\n          <li><strong>Golpes</strong> por herramientas que se zafan, piezas que caen o resortes que se liberan.</li>\n          <li><strong>Cortes</strong> con bordes de láminas, cuchillas y rebabas.</li>\n          <li><strong>Proyección de partículas</strong> al martillar, cincelar, esmerilar o usar aire comprimido.</li>\n          <li><strong>Sobreesfuerzos</strong> al levantar motores, reductores, rodillos y piezas pesadas, y por posturas forzadas dentro de las máquinas.</li>\n          <li><strong>Quemaduras</strong> con superficies, aceites y fluidos calientes.</li>\n          <li><strong>Resbalones</strong> por aceite y grasa en el piso.</li>\n        </ul>\n        <p><strong>El factor tiempo.</strong> Muchos accidentes ocurren en las intervenciones \"rápidas\": un ajuste, una prueba, un desatasco. La presión de producción lleva a omitir el bloqueo, a probar sin guarda o a usar la herramienta que esté más a mano. Por eso, en mantenimiento, el procedimiento no se acorta por urgencia.</p>\n        <p><strong>Antes de cualquier intervención, tres preguntas:</strong></p>\n        <ol>\n          <li>¿Qué energías tiene este equipo y cómo las aíslo?</li>\n          <li>¿Dónde están los puntos donde me puedo atrapar, golpear o cortar?</li>\n          <li>¿Tengo la herramienta, el repuesto y la ayuda que necesito?</li>\n        </ol>\n        <p><strong>Marco normativo.</strong> El <strong>Decreto 1072 de 2015</strong> exige identificar los peligros y controlarlos; la <strong>Resolución 0312 de 2019</strong> incluye entre los estándares mínimos el mantenimiento periódico de equipos y herramientas, y las inspecciones; y la <strong>Resolución 2400 de 1979</strong> exige proteger las transmisiones y las partes móviles de las máquinas.</p>\n      ",
        "keyPoints": [
          "Mantenimiento trabaja dentro de las máquinas: atrapamiento, arranque inesperado, golpes, cortes y sobreesfuerzos.",
          "Las intervenciones \"rápidas\" con presión de producción son las de mayor riesgo.",
          "Antes de intervenir: qué energías hay, dónde están los puntos de atrapamiento y qué se necesita."
        ],
        "practice": {
          "q": "¿Por qué las intervenciones \"rápidas\" de mantenimiento son de alto riesgo?",
          "options": [
            "Porque se hacen con herramientas nuevas",
            "Porque la presión de tiempo lleva a omitir el bloqueo o probar sin guarda",
            "Porque se hacen siempre de noche"
          ]
        }
      },
      {
        "title": "Transmisiones de potencia y puntos de atrapamiento",
        "content": "\n        <p>Las máquinas transmiten el movimiento del motor a los elementos de trabajo con <strong>correas y poleas</strong>, <strong>cadenas y piñones</strong>, <strong>engranajes</strong>, <strong>ejes y acoples</strong>. Todos ellos crean zonas donde el cuerpo o la ropa pueden quedar atrapados.</p>\n        <p><strong>Tipos de movimiento peligroso:</strong></p>\n        <ul>\n          <li><strong>Rotativo</strong>: ejes, acoples, poleas, brocas. Incluso un eje <strong>liso</strong> que gira despacio puede enrollar una manga, un guante o el cabello en segundos.</li>\n          <li><strong>Alternativo</strong> (de ida y vuelta): pistones, prensas, bielas. Pueden aplastar.</li>\n          <li><strong>Transversal o lineal</strong>: bandas transportadoras, carros, mesas que se desplazan. Pueden golpear o atrapar contra partes fijas.</li>\n        </ul>\n        <p><strong>Puntos de atrapamiento o de pellizco</strong> (en inglés, <em>nip points</em>): el lugar donde dos elementos se acercan girando, o donde un elemento móvil pasa cerca de uno fijo:</p>\n        <ul>\n          <li>donde la correa entra en la polea;</li>\n          <li>donde la cadena entra en el piñón;</li>\n          <li>entre dos rodillos o dos engranajes que giran uno contra otro;</li>\n          <li>entre una banda transportadora y su tambor;</li>\n          <li>entre una parte móvil y la estructura de la máquina.</li>\n        </ul>\n        <p>Estos puntos \"tiran\" de lo que tocan hacia adentro. Una vez atrapada la ropa, la fuerza del motor es muy superior a la de cualquier persona: no hay tiempo de soltarse.</p>\n        <p><strong>Por eso la ropa importa:</strong> mangas ajustadas o arremangadas, camisa por dentro, sin bufandas, cordones colgando, joyas, relojes ni anillos, y cabello largo recogido. Los guantes se usan para manipular piezas con la máquina detenida, pero <strong>no</strong> cerca de partes que giran.</p>\n        <p><strong>Ejemplo.</strong> En el caso del curso, la manga del técnico llegó al punto donde la correa entra en la polea. Con la guarda puesta, ese punto habría estado cubierto; con ropa ajustada, probablemente no lo habría alcanzado.</p>\n      ",
        "keyPoints": [
          "Movimientos peligrosos: rotativos (incluso ejes lisos), alternativos y lineales.",
          "Puntos de atrapamiento: donde la correa entra en la polea, la cadena en el piñón, o entre rodillos.",
          "Ropa ajustada, sin joyas, cabello recogido y sin guantes cerca de partes que giran."
        ],
        "practice": {
          "q": "¿Qué es un punto de atrapamiento?",
          "options": [
            "El lugar donde se guardan las herramientas",
            "El punto donde se conecta el motor a la red",
            "El lugar donde dos elementos se acercan girando y tiran hacia adentro"
          ]
        }
      },
      {
        "title": "Guardas de seguridad",
        "content": "\n        <p>Las <strong>guardas</strong> son barreras físicas que impiden que el cuerpo llegue a las partes móviles peligrosas. La Resolución 2400 de 1979 exige proteger las transmisiones y las partes móviles de las máquinas.</p>\n        <p><strong>Tipos de guardas:</strong></p>\n        <ul>\n          <li><strong>Fijas</strong>: atornilladas o soldadas; solo se retiran con herramienta. Son las más comunes en transmisiones.</li>\n          <li><strong>Móviles con enclavamiento</strong>: puertas o tapas conectadas a un interruptor que detiene la máquina, o impide que arranque, si se abren.</li>\n          <li><strong>Ajustables</strong>: se adaptan al tamaño de la pieza, como en sierras y cepilladoras.</li>\n          <li><strong>Dispositivos de protección</strong>: cortinas de luz, tapetes sensibles, mandos a dos manos.</li>\n        </ul>\n        <p><strong>Una buena guarda:</strong></p>\n        <ul>\n          <li>no se puede retirar sin herramienta (si es fija);</li>\n          <li>impide alcanzar la zona peligrosa por encima, por debajo, por los lados o a través de las aberturas;</li>\n          <li>no crea nuevos peligros, como bordes cortantes;</li>\n          <li>permite, cuando es posible, lubricar e inspeccionar sin retirarla (puntos de engrase extendidos, mirillas).</li>\n        </ul>\n        <p><strong>Reglas para mantenimiento:</strong></p>\n        <ul>\n          <li>Las guardas se retiran <strong>solo con el equipo bloqueado</strong> y en energía cero.</li>\n          <li><strong>Nunca se prueba</strong> un equipo con las guardas retiradas. Si se necesita observar el funcionamiento, se usan mirillas, guardas transparentes o un procedimiento de prueba aprobado que mantenga a las personas fuera del alcance.</li>\n          <li>Las guardas se reinstalan completas, con todos sus tornillos, antes de devolver el equipo.</li>\n          <li>Una guarda dañada o incompleta se reporta y se repara; no se deja el equipo funcionando \"mientras tanto\".</li>\n          <li>Nunca se anulan los interruptores de enclavamiento con puentes, cinta o imanes.</li>\n        </ul>\n        <p><strong>El dilema de la guarda que estorba.</strong> Si una guarda impide hacer el trabajo, la solución es rediseñarla (más aberturas para lubricar, partes desmontables), no retirarla de forma permanente.</p>\n      ",
        "keyPoints": [
          "Guardas fijas, móviles con enclavamiento, ajustables y dispositivos de protección.",
          "Se retiran solo con el equipo bloqueado y nunca se prueba un equipo sin guardas.",
          "Nunca se anulan los enclavamientos; una guarda que estorba se rediseña, no se elimina."
        ],
        "practice": {
          "q": "¿Cuándo se puede probar un equipo con las guardas retiradas?",
          "options": [
            "Nunca",
            "Cuando el técnico es experimentado",
            "Cuando la prueba dura menos de un minuto"
          ]
        }
      },
      {
        "title": "Antes de intervenir: bloqueo, energía residual y preparación",
        "content": "\n        <p><strong>Toda intervención</strong> en la que una parte del cuerpo entre en la zona de peligro requiere <strong>bloqueo y etiquetado (LOTO)</strong>: apagar, aislar todas las energías, poner el candado personal y la tarjeta, liberar la energía residual y verificar energía cero. Este procedimiento se estudia en detalle en el curso de LOTO.</p>\n        <p><strong>Energías residuales típicas en mantenimiento mecánico:</strong></p>\n        <ul>\n          <li><strong>Inercia</strong>: volantes, rodillos pesados y ventiladores que siguen girando después de apagar. Hay que esperar la detención total.</li>\n          <li><strong>Gravedad</strong>: partes elevadas que pueden caer, como mesas, tolvas, compuertas o brazos. Se bajan o se calzan con soportes.</li>\n          <li><strong>Resortes</strong> comprimidos o tensionados, y <strong>correas o cadenas tensionadas</strong>: al soltarlas pueden golpear.</li>\n          <li><strong>Presión</strong> neumática o hidráulica en cilindros y líneas.</li>\n          <li><strong>Temperatura</strong> en reductores, carcasas y aceites.</li>\n        </ul>\n        <p><strong>Preparación del trabajo:</strong></p>\n        <ul>\n          <li>Leer el manual o la ficha técnica del equipo y la orden de trabajo.</li>\n          <li>Hacer el análisis de trabajo seguro (ATS) cuando la tarea no es rutinaria.</li>\n          <li>Reunir herramientas, repuestos y elementos de protección antes de empezar, para no improvisar a mitad de la tarea.</li>\n          <li>Delimitar el área si otras personas pueden pasar.</li>\n          <li>Prever cómo se van a mover las piezas pesadas.</li>\n          <li>Coordinar con el operador y el supervisor de producción.</li>\n        </ul>\n        <p><strong>Aire comprimido.</strong> No se usa para limpiar la ropa o el cuerpo: puede introducir aire o partículas en la piel, los ojos o los oídos. Para limpiar piezas, se usa con presión reducida, boquilla de seguridad, gafas y sin apuntar a personas.</p>\n      ",
        "keyPoints": [
          "Toda intervención en zona de peligro requiere LOTO y verificación de energía cero.",
          "Energías residuales: inercia, gravedad, resortes y correas tensionadas, presión y temperatura.",
          "Preparar antes: manual, orden de trabajo, ATS, herramientas, repuestos y coordinación."
        ],
        "practice": {
          "q": "Después de apagar un ventilador grande, ¿qué energía residual debes esperar que se disipe?",
          "options": [
            "La energía de la luz del motor",
            "La inercia: hay que esperar a que se detenga por completo",
            "La energía química del aceite"
          ]
        }
      },
      {
        "title": "Herramientas manuales, tornillería y torque",
        "content": "\n        <p>Las herramientas manuales causan muchas lesiones en manos y ojos, casi siempre por usarlas para algo que no les corresponde o en mal estado.</p>\n        <p><strong>Llaves:</strong></p>\n        <ul>\n          <li>Usar la llave del <strong>tamaño exacto</strong> del perno o la tuerca. Una llave más grande se zafa, redondea el perno y golpea la mano.</li>\n          <li>Preferir llaves fijas o de copa sobre las ajustables (\"de expansión\") cuando hay que hacer fuerza.</li>\n          <li><strong>Halar la llave hacia uno</strong> en lugar de empujarla, con el cuerpo bien apoyado, para no golpearse si se zafa.</li>\n          <li><strong>No usar tubos como extensión</strong> (\"palanca\") para ganar fuerza: sobrecarga la llave, que puede romperse, y el perno puede romperse o el operario perder el equilibrio. Si un perno no sale, se usan herramientas adecuadas: llave de impacto, multiplicador de torque, penetrante, calor controlado con permiso.</li>\n        </ul>\n        <p><strong>Otras herramientas:</strong></p>\n        <ul>\n          <li><strong>Destornilladores</strong>: no se usan como palanca ni como cincel; no se sostiene la pieza en la palma de la mano mientras se atornilla.</li>\n          <li><strong>Martillos</strong>: con el mango firme y sin astillas; el tipo adecuado (de bola, de goma, de bronce para no producir chispas).</li>\n          <li><strong>Cinceles y punzones</strong>: la cabeza en forma de \"hongo\" por el uso se esmerila, porque desprende fragmentos al golpearla.</li>\n          <li><strong>Cuchillos y bisturíes</strong>: cortar en dirección contraria al cuerpo.</li>\n        </ul>\n        <p><strong>Torque.</strong> El <strong>torque</strong> es la fuerza de giro con que se aprieta un perno. Un perno flojo puede soltarse con la vibración; uno demasiado apretado puede estirarse, romperse o dañar la rosca. Por eso:</p>\n        <ul>\n          <li>Se aprieta con el <strong>valor de torque</strong> que indica el fabricante, usando una <strong>llave de torque</strong> calibrada.</li>\n          <li>En bridas, tapas y bases con varios pernos, se aprieta en <strong>secuencia en estrella</strong> (pernos opuestos) y en varias pasadas, para que la pieza asiente de forma pareja.</li>\n          <li>Se reemplazan los pernos y tuercas con rosca dañada, y se usan arandelas y seguros cuando el diseño los exige.</li>\n        </ul>\n        <p><strong>Herramientas en altura</strong>: se amarran con cordones para que no caigan sobre las personas.</p>\n      ",
        "keyPoints": [
          "Llave del tamaño exacto, halar hacia uno y nunca usar tubos como palanca.",
          "Cinceles con cabeza en hongo se esmerilan; destornilladores no son palancas ni cinceles.",
          "Apretar con el torque del fabricante, con llave de torque y en secuencia en estrella."
        ],
        "practice": {
          "q": "No tienes la llave del tamaño exacto y el perno está muy apretado. ¿Qué haces?",
          "options": [
            "Golpeo el perno con un martillo",
            "Uso una llave más grande con un tubo como palanca",
            "Uso la llave correcta o herramientas adecuadas, como un multiplicador de torque o penetrante"
          ]
        }
      },
      {
        "title": "Rodamientos, lubricación y señales de falla",
        "content": "\n        <p>Detectar una falla a tiempo evita paradas costosas y accidentes, como roturas de ejes o incendios por recalentamiento.</p>\n        <p><strong>Señales de alerta en un equipo:</strong></p>\n        <ul>\n          <li><strong>Ruido</strong> nuevo o diferente: chirridos, golpeteos, zumbidos.</li>\n          <li><strong>Temperatura</strong> mayor de lo habitual en rodamientos, reductores o motores.</li>\n          <li><strong>Vibración</strong> excesiva.</li>\n          <li><strong>Fugas</strong> de aceite o grasa, y olor a quemado.</li>\n          <li><strong>Desgaste</strong> visible en correas, cadenas y piñones.</li>\n        </ul>\n        <p>\"Siempre ha sonado así\" no es una explicación. Cualquier cambio se reporta y se revisa.</p>\n        <p><strong>Monitoreo sin riesgo:</strong> termómetros infrarrojos, estetoscopios de mecánico y analizadores de vibración permiten medir desde una distancia segura y sin retirar guardas. Nunca se toca un componente en movimiento para \"sentir\" la temperatura o la vibración.</p>\n        <p><strong>Lubricación:</strong></p>\n        <ul>\n          <li>El lubricante correcto (tipo y grado) según el fabricante. Mezclar grasas incompatibles puede dañar el rodamiento.</li>\n          <li>La <strong>cantidad</strong> correcta: el exceso de grasa también recalienta los rodamientos.</li>\n          <li>La <strong>frecuencia</strong> del plan de mantenimiento.</li>\n          <li>Con el equipo <strong>detenido</strong> y bloqueado, salvo en los puntos de lubricación remota diseñados para hacerlo con seguridad desde fuera de la guarda.</li>\n          <li>Limpieza de las graseras antes de inyectar, para no introducir suciedad.</li>\n        </ul>\n        <p><strong>Montaje de rodamientos:</strong> se calientan con un calentador de inducción o un baño de aceite controlado, nunca con soplete directo; se instalan con herramientas de montaje que apoyen sobre el aro correcto, nunca golpeando directamente el rodamiento con un martillo. Se manipulan con guantes de protección térmica cuando están calientes.</p>\n        <p><strong>Aceite usado y residuos</strong>: se recogen en recipientes cerrados y se gestionan como residuos peligrosos.</p>\n      ",
        "keyPoints": [
          "Señales de falla: ruido nuevo, temperatura alta, vibración, fugas, olor a quemado y desgaste.",
          "Se mide con instrumentos desde fuera de las guardas; nunca se toca un componente en movimiento.",
          "Lubricar con el producto, la cantidad y la frecuencia correctos, con el equipo detenido y bloqueado."
        ],
        "practice": {
          "q": "¿Qué indica un rodamiento más caliente de lo habitual y con un ruido agudo nuevo?",
          "options": [
            "Una posible falla que debe reportarse y revisarse",
            "Que está bien lubricado",
            "Que la máquina trabaja más rápido"
          ]
        }
      },
      {
        "title": "Piezas pesadas y sobreesfuerzos",
        "content": "\n        <p>Motores, reductores, rodillos, bombas y ejes pesan mucho más de lo que parece. Las lesiones de espalda y hombros son de las más frecuentes en mantenimiento.</p>\n        <p><strong>Límite de referencia.</strong> La Resolución 2400 de 1979 establece como carga máxima de referencia para levantar 25 kilogramos de carga compacta para los hombres y 12,5 kilogramos para las mujeres, según su aptitud física, sus conocimientos y su experiencia. En la práctica, la evaluación ergonómica de cada tarea puede fijar límites menores según la postura, la distancia y la frecuencia.</p>\n        <p><strong>Antes de levantar:</strong></p>\n        <ul>\n          <li>Conocer el peso (placa del equipo, manual, ficha técnica).</li>\n          <li>Planear la ruta y el lugar donde se va a dejar la pieza.</li>\n          <li><strong>Usar ayudas mecánicas</strong>: polipastos, diferenciales, grúas puente, carros, gatos, mesas elevadoras. Los equipos de izaje se inspeccionan y se usan dentro de su capacidad, con eslingas adecuadas (ver el curso de aparejador de cargas).</li>\n          <li>Si se levanta entre varias personas, una dirige la maniobra y todos levantan al mismo tiempo.</li>\n        </ul>\n        <p><strong>Técnica de levantamiento manual:</strong></p>\n        <ol>\n          <li>Acercarse a la carga, con los pies separados y firmes.</li>\n          <li>Doblar las rodillas, no la espalda, manteniendo la espalda recta.</li>\n          <li>Agarrar firme, con toda la mano.</li>\n          <li>Levantar con la fuerza de las piernas, de forma suave, sin tirones.</li>\n          <li>Mantener la carga pegada al cuerpo.</li>\n          <li><strong>No girar el tronco</strong> con la carga: mover los pies.</li>\n        </ol>\n        <p><strong>Nunca bajo una carga suspendida.</strong> Al bajar o subir un motor con un polipasto, nadie pone las manos debajo para \"acomodarlo\". Se usan cuerdas guía o barras para orientarlo.</p>\n        <p><strong>Posturas dentro de las máquinas.</strong> Trabajar agachado o con los brazos sobre la cabeza por largo tiempo también lesiona. Ayudan las plataformas, las rodilleras, las pausas y la rotación de tareas.</p>\n      ",
        "keyPoints": [
          "Referencia de la Res. 2400 de 1979: 25 kg de carga compacta para hombres y 12,5 kg para mujeres.",
          "Primero ayudas mecánicas; en levantamiento manual, espalda recta, carga pegada al cuerpo y sin girar el tronco.",
          "Nunca las manos ni el cuerpo bajo una carga suspendida: usar cuerdas guía."
        ],
        "practice": {
          "q": "Según la Res. 2400 de 1979, ¿cuál es la carga máxima de referencia para un hombre?",
          "options": [
            "12,5 kilogramos de carga compacta",
            "25 kilogramos de carga compacta",
            "50 kilogramos de carga compacta"
          ]
        }
      },
      {
        "title": "Orden, aseo y entrega segura del equipo",
        "content": "\n        <p><strong>Orden y aseo (5S).</strong> Un taller ordenado es un taller más seguro. La metodología 5S lo organiza en cinco pasos: <strong>clasificar</strong> (retirar lo que no sirve), <strong>ordenar</strong> (un lugar para cada cosa), <strong>limpiar</strong>, <strong>estandarizar</strong> y <strong>mantener la disciplina</strong>.</p>\n        <ul>\n          <li>Herramientas en tableros o cajas, no regadas en el piso o dentro de las máquinas.</li>\n          <li>Pisos sin aceite, grasa ni piezas sueltas. Los derrames se limpian de inmediato con absorbentes.</li>\n          <li><strong>Trapos con aceite o solventes</strong> en recipientes metálicos con tapa: pueden calentarse solos y encenderse (combustión espontánea).</li>\n          <li>Pasillos y accesos a tableros y equipos de emergencia despejados.</li>\n          <li>Repuestos y piezas identificadas y almacenadas de forma estable.</li>\n        </ul>\n        <p><strong>Entrega del equipo después de la intervención.</strong> Es el momento en que ocurren muchos accidentes: alguien enciende el equipo con una herramienta adentro, una guarda sin poner o una persona todavía en la zona.</p>\n        <p><strong>Lista de verificación antes de retirar el bloqueo:</strong></p>\n        <ol>\n          <li>Herramientas, trapos, repuestos y materiales retirados del equipo. Contar las herramientas ayuda a detectar si alguna quedó adentro.</li>\n          <li>Todas las guardas reinstaladas, con todos sus tornillos.</li>\n          <li>Ajustes y aprietes terminados y verificados.</li>\n          <li>Personas fuera de la zona de peligro y avisadas de que se va a energizar.</li>\n          <li>Cada trabajador retira su propio candado.</li>\n          <li><strong>Prueba controlada</strong>: arranque desde el control normal, observando desde un lugar seguro, y detención inmediata ante cualquier anomalía.</li>\n          <li>Entrega formal al operador o al supervisor, informando qué se hizo y cualquier observación.</li>\n          <li>Registro en la orden de trabajo y en la hoja de vida del equipo.</li>\n        </ol>\n        <p><strong>El caso del curso</strong> habría terminado distinto con dos puntos de esta lista: guarda reinstalada antes de probar y prueba desde un lugar seguro.</p>\n      ",
        "keyPoints": [
          "5S: clasificar, ordenar, limpiar, estandarizar y mantener la disciplina.",
          "Trapos con aceite en recipientes metálicos con tapa: pueden encenderse solos.",
          "Antes de entregar: herramientas fuera, guardas puestas, personas fuera, prueba controlada y registro."
        ],
        "practice": {
          "q": "¿Dónde se guardan los trapos con aceite o solvente?",
          "options": [
            "En el bolsillo del overol",
            "En una caja de cartón junto a la máquina",
            "En recipientes metálicos con tapa"
          ]
        }
      }
    ],
    "scenarios": [
      {
        "scenario": "Ajustaste la tensión de una correa en V y quieres probar cómo suena el equipo. La guarda de la polea está en el piso, junto a la máquina, y el supervisor te apura.",
        "options": [
          "Pruebo rápido sin la guarda y la pongo después.",
          "Pruebo sin guarda, pero me mantengo a un metro de la polea.",
          "Reinstalo la guarda completa, retiro herramientas, despejo el área y hago la prueba desde el control normal, observando desde un lugar seguro."
        ]
      },
      {
        "scenario": "Vas a apretar un perno de la base de un motor y no tienes la llave del tamaño exacto. Hay un tubo de un metro en el taller que \"sirve de palanca\" con una llave ajustable.",
        "options": [
          "Busco la llave del tamaño correcto y aprieto con la llave de torque al valor del fabricante.",
          "Uso la llave ajustable con el tubo, con cuidado.",
          "Aprieto \"a sentimiento\" con la ajustable, lo más fuerte que pueda."
        ]
      },
      {
        "scenario": "Un rodamiento hace un ruido agudo y la carcasa está más caliente que de costumbre. El operador dice que \"es normal en esta máquina\" y pide no pararla hasta el fin del turno.",
        "options": [
          "Lo dejo así porque el operador conoce la máquina.",
          "Toco la carcasa con la mano mientras gira para estimar la temperatura.",
          "Mido con el termómetro infrarrojo desde fuera de la guarda, reporto la condición y se decide la parada según el riesgo."
        ]
      },
      {
        "scenario": "Debes bajar un motor de 60 kilogramos de una base elevada. Tu compañero propone bajarlo entre los dos, a pulso.",
        "options": [
          "Lo bajamos a pulso, doblando las rodillas.",
          "Usamos un polipasto o una grúa con eslinga adecuada, dirigimos la carga con cuerda guía y nadie se pone debajo.",
          "Lo empujamos para que caiga sobre unos cartones."
        ]
      },
      {
        "scenario": "Terminaste una reparación en una banda transportadora. Vas a retirar tu candado, pero no encuentras una llave de 13 mm que usaste dentro de la máquina.",
        "options": [
          "Retiro el candado: ya aparecerá la llave.",
          "Mantengo el bloqueo hasta encontrar la llave o verificar que no está dentro del equipo; luego completo la lista de entrega.",
          "Arranco la banda un momento para ver si la llave cae."
        ]
      }
    ],
    "exam": [
      {
        "q": "¿Cuál es el peligro que causa las lesiones más graves en el mantenimiento mecánico?",
        "options": [
          "El atrapamiento en transmisiones, rodillos y engranajes.",
          "El polvo del taller.",
          "El ruido de las herramientas manuales que se usan en el taller durante la jornada."
        ]
      },
      {
        "q": "¿Por qué un eje liso que gira despacio también es peligroso?",
        "options": [
          "Porque puede romperse y salir disparado en cualquier momento.",
          "Porque puede enrollar una manga, un guante o el cabello en segundos.",
          "Porque produce chispas que encienden la grasa de los rodamientos."
        ]
      },
      {
        "q": "¿Dónde está el punto de atrapamiento en una transmisión de correa?",
        "options": [
          "En el centro de la polea, donde está el eje.",
          "En la parte de la correa que se aleja de la polea.",
          "Donde la correa entra en la polea."
        ]
      },
      {
        "q": "¿Cuándo se usan guantes cerca de partes que giran?",
        "options": [
          "Nunca: se usan para manipular piezas con la máquina detenida.",
          "Siempre, para proteger las manos de la grasa y de los bordes de las piezas en movimiento.",
          "Solo si son guantes de cuero gruesos y largos."
        ]
      },
      {
        "q": "¿Qué es una guarda móvil con enclavamiento?",
        "options": [
          "Una guarda que se retira sin herramienta y que no tiene ningún efecto sobre el funcionamiento.",
          "Una puerta o tapa conectada a un interruptor que detiene la máquina o impide que arranque si se abre.",
          "Una guarda que se ajusta al tamaño de la pieza."
        ]
      },
      {
        "q": "Una guarda impide lubricar un punto de la máquina. ¿Cuál es la solución correcta?",
        "options": [
          "Retirarla de forma permanente para lubricar sin perder tiempo.",
          "Lubricar con la máquina en marcha metiendo la mano por un lado de la guarda.",
          "Rediseñarla o instalar puntos de engrase extendidos fuera de la guarda."
        ]
      },
      {
        "q": "Un compañero puso un imán en el interruptor de enclavamiento de una puerta para que la máquina funcione abierta. ¿Qué se hace?",
        "options": [
          "Se retira el imán, se reporta y se exige que el enclavamiento funcione.",
          "Se deja, porque así la producción es más rápida.",
          "Se deja solo durante el turno de la noche, cuando hay menos personal circulando cerca de la máquina."
        ]
      },
      {
        "q": "Antes de cambiar una cadena tensionada, ¿qué energía residual se debe controlar?",
        "options": [
          "La energía de la luz de la planta.",
          "La tensión de la cadena, que puede golpear al soltarla.",
          "Ninguna, porque el motor ya está apagado y desconectado del tablero principal."
        ]
      },
      {
        "q": "¿Por qué no se usa aire comprimido para limpiar la ropa o el cuerpo?",
        "options": [
          "Porque gasta mucha energía y aumenta el costo del aire comprimido de toda la planta.",
          "Porque daña la tela de la ropa de trabajo con el tiempo.",
          "Porque puede introducir aire o partículas en la piel, los ojos o los oídos."
        ]
      },
      {
        "q": "Al usar una llave para aflojar un perno duro, ¿qué técnica es más segura?",
        "options": [
          "Halar la llave hacia uno, con el cuerpo bien apoyado.",
          "Empujar la llave con todo el peso del cuerpo hacia adelante.",
          "Golpear la llave con un martillo."
        ]
      },
      {
        "q": "¿Qué se hace con un cincel que tiene la cabeza deformada en forma de hongo?",
        "options": [
          "Se sigue usando, porque la cabeza ancha es más fácil de golpear.",
          "Se esmerila la cabeza, porque al golpearla puede desprender fragmentos.",
          "Se envuelve con cinta para amortiguar los golpes."
        ]
      },
      {
        "q": "¿Cómo se aprietan los pernos de una tapa con varios pernos?",
        "options": [
          "Uno por uno, apretando cada perno al máximo antes de pasar al siguiente.",
          "Solo los de las esquinas, porque los demás no soportan carga.",
          "En secuencia en estrella, en varias pasadas, con el torque del fabricante."
        ]
      },
      {
        "q": "¿Qué problema causa el exceso de grasa en un rodamiento?",
        "options": [
          "Puede recalentarlo.",
          "Ninguno: más grasa siempre protege mejor y alarga la vida del rodamiento.",
          "Hace que gire más rápido."
        ]
      },
      {
        "q": "¿Cómo se calienta un rodamiento para montarlo?",
        "options": [
          "Con un soplete directo sobre la pista del rodamiento, hasta que cambie de color.",
          "Con un calentador de inducción o un baño de aceite controlado.",
          "Golpeándolo para que la fricción lo caliente."
        ]
      },
      {
        "q": "Al bajar un motor con un polipasto, ¿cómo se orienta la carga?",
        "options": [
          "Con las manos debajo del motor para acomodarlo.",
          "Empujándolo con el pie mientras baja.",
          "Con cuerdas guía o barras, sin poner el cuerpo debajo."
        ]
      },
      {
        "q": "¿Cuál de estos puntos es parte de la entrega segura de un equipo después de una reparación?",
        "options": [
          "Contar las herramientas para verificar que ninguna quedó dentro del equipo.",
          "Arrancar el equipo con la guarda retirada para verificar el ajuste de la correa.",
          "Dejar el candado de bloqueo puesto para que el operador lo retire."
        ]
      }
    ],
    "workshops": [],
    "project": null
  },
  {
    "id": "aislamiento-energias-avanzado",
    "title": "Aislamiento Seguro de Energías Peligrosas (Nivel Avanzado)",
    "hours": 1.5,
    "category": "prevencion_sst",
    "regulation": "Decreto 1072 de 2015, Res. 0312 de 2019, Res. 0491 de 2020, RETIE (Res. 40117 de 2024); referencias: OSHA 1910.147, ANSI/ASSP Z244.1",
    "legalNotice": "Formación teórica avanzada para técnicos, supervisores y planeadores de mantenimiento. Se recomienda haber aprobado el curso de LOTO. No reemplaza los procedimientos específicos de aislamiento de su planta ni la autorización para ejecutarlos.",
    "summary": "Cuándo un candado en una válvula no basta, la jerarquía de métodos de aislamiento, los acumuladores y la presión atrapada, la energía neumática, mecánica y gravitacional, el vapor y los fluidos calientes, el doble bloqueo y purga y las bridas ciegas, la energía eléctrica residual, y cómo planear y verificar un aislamiento complejo.",
    "fieldCase": "Después de bloquear el motor eléctrico de una prensa hidráulica, un técnico soltó una manguera sin descargar el acumulador. Un chorro fino de aceite a alta presión le atravesó la piel de la mano. Parecía un pinchazo, pero el aceite se había extendido por los tejidos y necesitó cirugía de urgencia.",
    "checklist": [
      "Tengo un plan de aislamiento con todos los puntos identificados con un código único.",
      "El método de aislamiento corresponde al riesgo: válvula sencilla, doble bloqueo y purga o aislamiento positivo.",
      "Descargué acumuladores y verifiqué presión en cero en cada sección.",
      "Calcé o soporté mecánicamente todas las cargas que se sostienen por presión o por gravedad.",
      "Esperé el tiempo de descarga de capacitores y variadores, y se verificó ausencia de tensión.",
      "Las bridas ciegas son de la clase de presión correcta y están registradas.",
      "Una segunda persona verificó el aislamiento antes de empezar.",
      "El desaislamiento se hace en el orden del plan, con prueba de fugas al final."
    ],
    "failureAnalysis": "Falla raíz: se bloqueó solo la energía principal (eléctrica) y no se identificó ni se liberó la energía almacenada en el acumulador hidráulico. No había un plan de aislamiento que listara todas las fuentes.",
    "onSiteClosure": "Práctica en su empresa: elaborar con el planeador de mantenimiento el plan de aislamiento de un equipo con varias energías, ejecutar un doble bloqueo y purga verificando el venteo, y hacer la verificación independiente de un aislamiento hecho por otra persona.",
    "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    "modules": [
      {
        "title": "Cuándo el aislamiento básico no basta",
        "content": "\n        <p>En el curso de LOTO se estudió el procedimiento general: preparar, apagar, aislar, bloquear, liberar la energía residual y verificar. En muchas máquinas eso basta: un seccionador, una válvula de aire y un candado. Pero en plantas de proceso, sistemas hidráulicos grandes, líneas de vapor o de químicos, y equipos con varias fuentes de energía, el aislamiento se vuelve <strong>complejo</strong>.</p>\n        <p><strong>Señales de que un aislamiento es complejo:</strong></p>\n        <ul>\n          <li>El equipo tiene <strong>varias fuentes</strong> de energía de distinto tipo.</li>\n          <li>Hay <strong>energía almacenada</strong> importante: acumuladores, cargas elevadas, resortes grandes, capacitores.</li>\n          <li>Se va a <strong>abrir</strong> una línea o un recipiente con fluidos peligrosos (tóxicos, inflamables, corrosivos, calientes o a alta presión).</li>\n          <li>Hay que <strong>entrar</strong> al equipo (espacio confinado).</li>\n          <li>El trabajo es <strong>largo</strong>, involucra <strong>varios grupos</strong> o cruza <strong>cambios de turno</strong>.</li>\n          <li>Las válvulas pueden <strong>no cerrar herméticamente</strong> por desgaste o suciedad.</li>\n        </ul>\n        <p><strong>El problema de la válvula sencilla.</strong> Una válvula cerrada con candado impide que alguien la abra, pero no garantiza que no deje pasar fluido. Las válvulas se desgastan, acumulan sedimentos o no asientan bien. Si detrás hay vapor a alta temperatura, un químico tóxico o un gas inflamable, una pequeña fuga puede ser mortal para quien abre la línea o entra al recipiente.</p>\n        <p><strong>Por eso existe una jerarquía de métodos de aislamiento</strong> (módulo siguiente), y la elección depende del riesgo: qué fluido es, a qué presión y temperatura está, cuánto tiempo dura el trabajo y si alguien va a entrar.</p>\n        <p><strong>Marco normativo.</strong> El <strong>Decreto 1072 de 2015</strong> exige controlar los peligros por jerarquía; la <strong>Resolución 0312 de 2019</strong> pide procedimientos para las tareas de alto riesgo; la <strong>Resolución 0491 de 2020</strong> exige aislar las energías y los fluidos antes de entrar a un espacio confinado; y el <strong>RETIE</strong> rige el aislamiento eléctrico. Las referencias técnicas son OSHA 1910.147 y ANSI/ASSP Z244.1, además de las guías de aislamiento de la industria de procesos.</p>\n      ",
        "keyPoints": [
          "Un aislamiento es complejo con varias fuentes, energía almacenada, apertura de líneas peligrosas, entrada a equipos o trabajos largos.",
          "Una válvula cerrada con candado puede dejar pasar fluido si está desgastada.",
          "El método de aislamiento se elige según el fluido, la presión, la temperatura, la duración y si alguien entrará."
        ],
        "practice": {
          "q": "¿Por qué una sola válvula cerrada con candado puede no ser suficiente para abrir una línea de vapor?",
          "options": [
            "Porque las válvulas de vapor no se pueden bloquear",
            "Porque la válvula puede dejar pasar fluido por desgaste",
            "Porque el candado se derrite con el calor"
          ]
        }
      },
      {
        "title": "La jerarquía de métodos de aislamiento de fluidos",
        "content": "\n        <p>De menor a mayor seguridad:</p>\n        <ol>\n          <li><strong>Válvula sencilla cerrada y bloqueada.</strong> Aceptable para fluidos de bajo riesgo (agua fría a baja presión, aire a baja presión) y trabajos cortos, siempre que se verifique que no hay paso.</li>\n          <li><strong>Doble bloqueo.</strong> Dos válvulas en serie cerradas y bloqueadas. Si una deja pasar, la otra sirve de respaldo, pero no hay forma de saber si la primera está fugando.</li>\n          <li><strong>Doble bloqueo y purga</strong> (en inglés, <em>double block and bleed</em>): dos válvulas cerradas y bloqueadas, con una <strong>válvula de purga o venteo abierta entre ellas</strong>, también bloqueada en posición abierta. Si la primera válvula deja pasar, el fluido sale por la purga hacia un lugar seguro en lugar de llegar a la zona de trabajo, y además se detecta la fuga.</li>\n          <li><strong>Aislamiento positivo</strong>: una barrera física que no depende de que una válvula selle:\n            <ul>\n              <li><strong>Brida ciega o placa ciega</strong> (en inglés, <em>blind</em> o <em>spade</em>) instalada entre dos bridas.</li>\n              <li><strong>Desconexión física</strong>: retirar un carrete o un tramo de tubería y tapar los extremos.</li>\n            </ul>\n          </li>\n        </ol>\n        <p><strong>Cuándo usar cada uno</strong> (criterio general; su planta debe tener su propia tabla):</p>\n        <ul>\n          <li><strong>Entrada a espacios confinados</strong> conectados a líneas de fluidos peligrosos: aislamiento positivo (brida ciega o desconexión física).</li>\n          <li><strong>Apertura de líneas con fluidos tóxicos, inflamables, corrosivos, vapor o alta presión</strong>: como mínimo doble bloqueo y purga; aislamiento positivo para trabajos largos o de alto riesgo.</li>\n          <li><strong>Fluidos de bajo riesgo</strong>: puede bastar una válvula sencilla verificada.</li>\n        </ul>\n        <p><strong>El aislamiento positivo también requiere un aislamiento previo:</strong> para instalar una brida ciega hay que abrir la línea, así que primero se aísla con válvulas (normalmente doble bloqueo y purga), se drena, se purga y se verifica. La brida ciega se instala después y se convierte en el aislamiento para el trabajo principal.</p>\n        <p><strong>Válvulas de control y de retención no son aislamiento.</strong> Una válvula de control automática puede abrirse por una señal del sistema, y una válvula de retención (cheque) puede no sellar. Ninguna de ellas se usa como punto de aislamiento.</p>\n      ",
        "keyPoints": [
          "Jerarquía: válvula sencilla, doble bloqueo, doble bloqueo y purga, y aislamiento positivo (brida ciega o desconexión física).",
          "Para entrar a un espacio confinado conectado a fluidos peligrosos se usa aislamiento positivo.",
          "Las válvulas de control y de retención nunca son puntos de aislamiento."
        ],
        "practice": {
          "q": "¿Qué método de aislamiento es una barrera física que no depende de que una válvula selle?",
          "options": [
            "La válvula de control automática",
            "La válvula de retención",
            "El aislamiento positivo, como una brida ciega"
          ]
        }
      },
      {
        "title": "Energía hidráulica: acumuladores y presión atrapada",
        "content": "\n        <p>Los sistemas hidráulicos trabajan con aceite a presiones muy altas. Apagar la bomba no elimina esa energía.</p>\n        <p><strong>Dónde queda energía almacenada:</strong></p>\n        <ul>\n          <li><strong>Acumuladores</strong>: recipientes con gas (normalmente nitrógeno) comprimido que guardan aceite a presión para dar picos de fuerza o mantener la presión. Pueden conservar la presión durante horas o días.</li>\n          <li><strong>Cilindros y líneas</strong> entre válvulas de retención o válvulas pilotadas, que atrapan presión aunque el resto del sistema esté en cero.</li>\n          <li><strong>Cargas sostenidas</strong> por la presión de un cilindro: si se libera la presión sin soportar la carga, la carga baja.</li>\n        </ul>\n        <p><strong>Cómo aislar un sistema hidráulico:</strong></p>\n        <ol>\n          <li>Bajar o soportar mecánicamente todas las cargas sostenidas por cilindros.</li>\n          <li>Apagar y bloquear la bomba (energía eléctrica).</li>\n          <li><strong>Descargar el acumulador</strong> por la válvula de descarga prevista hacia el tanque, siguiendo el procedimiento del fabricante.</li>\n          <li>Liberar la presión atrapada en cilindros y líneas accionando las válvulas según el procedimiento (en algunos sistemas, con la bomba ya bloqueada, se mueven las palancas para descargar).</li>\n          <li><strong>Verificar en los manómetros</strong> que cada sección esté en cero, y que no suba de nuevo después de unos minutos.</li>\n        </ol>\n        <p><strong>Lesión por inyección de fluido.</strong> Un chorro fino de aceite a alta presión puede atravesar la piel sin que la persona sienta más que un pinchazo, como en el caso del curso. El aceite se extiende por los tejidos y causa daños graves: puede terminar en amputación si no se atiende. <strong>Es una emergencia quirúrgica</strong>: la persona debe ir a urgencias de inmediato, informando que fue una inyección de aceite a presión, aunque la herida parezca mínima.</p>\n        <p><strong>Nunca se busca una fuga con la mano.</strong> Se usa un cartón o un trozo de madera que se pasa cerca de la línea, mirando si se mancha, con guantes y gafas.</p>\n        <p><strong>Mangueras.</strong> Una manguera hidráulica que revienta o se suelta con presión puede latiguear con violencia. Se inspeccionan y se reemplazan según el plan, y las de alto riesgo llevan restricciones o fundas.</p>\n      ",
        "keyPoints": [
          "Acumuladores y líneas entre válvulas de retención conservan presión con la bomba apagada.",
          "Aislar: soportar cargas, bloquear la bomba, descargar el acumulador, liberar presión atrapada y verificar en manómetros.",
          "La inyección de aceite a presión parece un pinchazo pero es una emergencia quirúrgica; nunca buscar fugas con la mano."
        ],
        "practice": {
          "q": "¿Qué hacer de inmediato ante una posible inyección de aceite hidráulico en la mano?",
          "options": [
            "Ir a urgencias de inmediato informando que fue inyección de aceite a presión",
            "Lavar con jabón y seguir trabajando",
            "Poner una curita y vigilar"
          ]
        }
      },
      {
        "title": "Energía neumática, mecánica y gravitacional",
        "content": "\n        <p><strong>Neumática.</strong> El aire comprimido parece inofensivo, pero mueve cilindros con fuerza suficiente para aplastar una mano, y un acople que se suelta con presión puede latiguear.</p>\n        <ul>\n          <li>Se aísla con una <strong>válvula de bloqueo con venteo</strong>: al cerrarla y bloquearla, corta el suministro y descarga a la atmósfera el aire del lado de la máquina.</li>\n          <li>Se purgan los tanques pulmón y las líneas, y se verifica en el manómetro.</li>\n          <li><strong>Cuidado al ventear:</strong> si un cilindro mantiene una posición gracias a la presión, al quitar el aire puede caer o moverse. Antes de ventear, se calza o se baja la parte que sostiene.</li>\n          <li>Las válvulas de retención y las electroválvulas pueden dejar aire atrapado en algunos cilindros: se identifica en el plano y se libera.</li>\n        </ul>\n        <p><strong>Mecánica (cinética).</strong> Volantes, rodillos pesados, ventiladores y centrífugas siguen girando después de cortar la energía. Se espera la detención completa y, cuando el equipo lo permite, se bloquea el giro con un pasador o un freno mecánico. Nunca se frena con la mano, con una herramienta o con un trapo.</p>\n        <p><strong>Elástica (resortes).</strong> Resortes comprimidos en válvulas, frenos, embragues, tensores y prensas pueden liberar mucha energía al desarmar. Se liberan de forma controlada con las herramientas del fabricante (compresores de resortes, varillas de desarme) o se dejan retenidos.</p>\n        <p><strong>Gravitacional.</strong> Cualquier parte que pueda caer o deslizarse:</p>\n        <ul>\n          <li>moldes y matrices de prensas, que se apoyan con <strong>bloques de seguridad</strong> diseñados para ese peso;</li>\n          <li>compuertas, tolvas, brazos, mesas elevadoras, que se bajan a su posición de reposo o se calzan con soportes, pasadores o barras de seguridad;</li>\n          <li><strong>contrapesos</strong>, que se aseguran antes de desconectar el elemento que equilibran;</li>\n          <li>material acumulado en tolvas y silos, que puede deslizarse de golpe.</li>\n        </ul>\n        <p>Los soportes deben estar <strong>diseñados para la carga</strong>. Un bloque de madera cualquiera, un gato hidráulico o el propio cilindro no son soportes de seguridad.</p>\n      ",
        "keyPoints": [
          "Neumática: válvula de bloqueo con venteo, purga y verificación; calzar antes de ventear lo que se sostiene con aire.",
          "Inercia: esperar la detención y bloquear el giro; resortes: liberar con herramientas del fabricante.",
          "Gravedad: bajar o soportar con soportes diseñados para la carga; un gato o el cilindro no son soportes de seguridad."
        ],
        "practice": {
          "q": "Un cilindro neumático sostiene una compuerta levantada. ¿Qué se hace antes de ventear el aire?",
          "options": [
            "Ventear rápido para terminar antes",
            "Calzar o bajar la compuerta",
            "Nada, el cilindro la sostiene sin aire"
          ]
        }
      },
      {
        "title": "Vapor, fluidos calientes y energía térmica",
        "content": "\n        <p>El <strong>vapor</strong> es una de las energías más traicioneras en mantenimiento: es invisible a alta presión, quema en segundos y se combina con agua condensada que puede producir golpes violentos en las tuberías.</p>\n        <p><strong>Riesgos del vapor y los fluidos calientes:</strong></p>\n        <ul>\n          <li><strong>Quemaduras graves</strong> por contacto con vapor, condensado o superficies calientes.</li>\n          <li><strong>Golpe de ariete</strong>: el condensado acumulado es empujado por el vapor y golpea codos y válvulas con fuerza suficiente para romperlos.</li>\n          <li><strong>Vapor atrapado</strong> entre válvulas, que se libera al aflojar una brida.</li>\n          <li><strong>Vacío</strong>: al enfriarse, el vapor atrapado se condensa y puede crear vacío que colapsa recipientes o succiona fluidos.</li>\n        </ul>\n        <p><strong>Cómo aislar una línea de vapor:</strong></p>\n        <ol>\n          <li>Usar como mínimo <strong>doble bloqueo y purga</strong>: dos válvulas cerradas y bloqueadas, con el drenaje intermedio abierto hacia un lugar seguro. Una sola válvula no es suficiente, por mucho que \"siempre haya funcionado\".</li>\n          <li>Abrir los <strong>drenajes</strong> de la sección aislada para retirar el condensado y despresurizar, con la salida dirigida lejos de las personas.</li>\n          <li>Esperar a que la tubería <strong>se enfríe</strong> y verificar la temperatura con un termómetro.</li>\n          <li>Verificar que no hay presión en el manómetro y que el drenaje no sigue soltando vapor.</li>\n          <li>Abrir las bridas aflojando primero los pernos del lado opuesto al cuerpo, para que una liberación inesperada salga hacia el otro lado.</li>\n        </ol>\n        <p><strong>Al poner de nuevo en servicio</strong>, se calienta la línea despacio, con los drenajes abiertos, para evitar el golpe de ariete.</p>\n        <p><strong>Otros fluidos calientes</strong> (aceite térmico, agua caliente, productos de proceso) se tratan igual: aislamiento según el riesgo, drenaje, enfriamiento y verificación de temperatura.</p>\n        <p><strong>Superficies frías.</strong> Las líneas criogénicas o de refrigeración también son energía térmica: pueden causar quemaduras por frío y fragilizar materiales.</p>\n      ",
        "keyPoints": [
          "El vapor quema en segundos, causa golpe de ariete y puede quedar atrapado entre válvulas.",
          "Aislar vapor con doble bloqueo y purga, drenar, enfriar y verificar presión y temperatura.",
          "Al reponer en servicio, calentar despacio con drenajes abiertos para evitar el golpe de ariete."
        ],
        "practice": {
          "q": "Al poner de nuevo en servicio una línea de vapor, ¿por qué se calienta despacio con drenajes abiertos?",
          "options": [
            "Para que el manómetro marque mejor",
            "Para ahorrar vapor",
            "Para evitar el golpe de ariete"
          ]
        }
      },
      {
        "title": "Doble bloqueo y purga, y bridas ciegas en la práctica",
        "content": "\n        <p><strong>Ejecución del doble bloqueo y purga:</strong></p>\n        <ol>\n          <li>Identificar en el plano y en campo las dos válvulas de bloqueo y la válvula de purga intermedia, con sus códigos.</li>\n          <li>Cerrar la primera válvula (la más cercana a la fuente), luego la segunda.</li>\n          <li><strong>Abrir la purga intermedia</strong> hacia un lugar seguro (drenaje cerrado, recipiente, venteo a zona segura) y bloquearla en posición abierta.</li>\n          <li>Observar la purga: después de vaciar lo atrapado, <strong>no debe seguir saliendo fluido</strong>. Si sigue saliendo, la primera válvula deja pasar: el aislamiento no es aceptable y hay que corregirlo.</li>\n          <li>Drenar y despresurizar la sección de trabajo y verificar presión cero.</li>\n          <li>Poner candados y tarjetas en las tres válvulas.</li>\n        </ol>\n        <p><strong>Bridas ciegas:</strong></p>\n        <ul>\n          <li>Deben ser de la <strong>clase de presión</strong> y el <strong>material</strong> adecuados para el fluido, la presión y la temperatura de la línea. Una placa delgada improvisada puede romperse.</li>\n          <li>Se instalan con empaques nuevos y adecuados, y con todos los pernos apretados al torque correcto.</li>\n          <li>Tienen una <strong>oreja o mango</strong> visible fuera de la brida, para que se vea desde afuera que están instaladas, y se identifican con un número.</li>\n          <li>Se registran en un <strong>registro de bridas ciegas</strong>: número, ubicación, fecha de instalación, responsable y fecha de retiro. Al terminar el trabajo, se verifica contra el registro que se retiraron todas. Una brida ciega olvidada puede causar un accidente grave al poner en marcha el sistema.</li>\n          <li>Se ubican en el lado correcto: entre la fuente de peligro y la zona de trabajo.</li>\n        </ul>\n        <p><strong>Antes de abrir o entrar</strong> se completan los demás pasos: limpieza y purga del equipo (con agua, vapor o gas inerte según el producto) y medición de la atmósfera si alguien va a entrar (Resolución 0491 de 2020). Recuerde que un equipo purgado con nitrógeno no tiene oxígeno para respirar.</p>\n      ",
        "keyPoints": [
          "Doble bloqueo y purga: cerrar las dos válvulas, abrir y bloquear la purga intermedia y verificar que deje de salir fluido.",
          "Bridas ciegas de la clase de presión correcta, con oreja visible, numeradas y en un registro.",
          "Verificar contra el registro que todas las bridas ciegas se retiren antes de poner en marcha."
        ],
        "practice": {
          "q": "En un doble bloqueo y purga, ¿qué indica que siga saliendo fluido por la purga después de vaciarse?",
          "options": [
            "Que la primera válvula deja pasar y el aislamiento no es aceptable",
            "Que el aislamiento funciona bien",
            "Que la segunda válvula está abierta"
          ]
        }
      },
      {
        "title": "Energía eléctrica residual y verificación",
        "content": "\n        <p><strong>La energía eléctrica no siempre desaparece al abrir el seccionador.</strong></p>\n        <ul>\n          <li><strong>Capacitores</strong> de bancos de corrección del factor de potencia, de fuentes y de <strong>variadores de frecuencia</strong>: conservan tensión durante minutos. El fabricante indica el tiempo de espera, normalmente en una etiqueta en el equipo, y se verifica con un instrumento antes de tocar.</li>\n          <li><strong>Doble alimentación</strong>: tableros con alimentación de la red y de una planta de respaldo, o de dos circuitos. Hay que aislar todas las fuentes.</li>\n          <li><strong>UPS y baterías</strong>: mantienen equipos energizados aunque se corte la red.</li>\n          <li><strong>Generación propia</strong>: paneles solares, generadores, motores que pueden actuar como generadores si se hacen girar.</li>\n          <li><strong>Circuitos de control</strong> alimentados desde otro tablero.</li>\n          <li><strong>Tensión inducida</strong> en cables largos paralelos a circuitos energizados.</li>\n        </ul>\n        <p><strong>El aislamiento eléctrico lo hace personal calificado</strong>, aplicando las <strong>cinco reglas de oro</strong> del RETIE: corte efectivo de todas las fuentes, bloqueo y señalización, verificación de ausencia de tensión, puesta a tierra y en cortocircuito (cuando aplica, especialmente en media y alta tensión), y señalización de la zona.</p>\n        <p><strong>Verificación de ausencia de tensión:</strong> con un detector o un multímetro adecuado para el nivel de tensión, comprobado <strong>antes y después</strong> en una fuente conocida energizada (\"probar, verificar, probar\"). Se miden todas las fases entre sí y contra tierra.</p>\n        <p><strong>Para el técnico mecánico</strong> que trabaja en un equipo aislado por el electricista: confirmar que el aislamiento eléctrico cubre todas las fuentes, poner su propio candado (o en la caja grupal) y, como prueba funcional, intentar el arranque desde los controles antes de intervenir.</p>\n      ",
        "keyPoints": [
          "Capacitores y variadores conservan tensión: respetar el tiempo de descarga y verificar con instrumento.",
          "Aislar todas las fuentes: doble alimentación, plantas de respaldo, UPS, baterías y circuitos de control.",
          "El electricista aplica las cinco reglas de oro; la verificación se hace probando el instrumento antes y después."
        ],
        "practice": {
          "q": "¿Qué indica la etiqueta de un variador de frecuencia sobre el tiempo de descarga?",
          "options": [
            "Cada cuánto se cambia el variador",
            "Cuánto esperar para que los capacitores se descarguen antes de tocar",
            "Cuánto tarda en arrancar el motor"
          ]
        }
      },
      {
        "title": "Planear, verificar y deshacer un aislamiento complejo",
        "content": "\n        <p>En un aislamiento complejo, la memoria no basta. Se necesita un <strong>plan escrito</strong>.</p>\n        <p><strong>El plan de aislamiento</strong> (también llamado certificado o lista de aislamiento) incluye:</p>\n        <ul>\n          <li>El equipo y el trabajo que se va a hacer.</li>\n          <li><strong>Cada punto de aislamiento</strong> con su código único (coincidiendo con el rótulo en campo y con el plano), el tipo de energía, el método (válvula sencilla, doble bloqueo y purga, brida ciega, seccionador) y la posición requerida (cerrado, abierto, retirado).</li>\n          <li>Los pasos para liberar la energía residual y cómo verificarla.</li>\n          <li>Quién ejecutó cada punto y quién lo verificó.</li>\n          <li>El orden para deshacer el aislamiento.</li>\n        </ul>\n        <p><strong>Preparación del plan.</strong> Lo prepara alguien que conoce el sistema (planeador, ingeniero de procesos, supervisor), usando planos actualizados y recorriendo el equipo en campo. Los planos desactualizados son una causa frecuente de aislamientos incompletos.</p>\n        <p><strong>Verificación independiente.</strong> Una segunda persona competente, distinta de quien ejecutó el aislamiento, recorre todos los puntos y confirma posición, candados, tarjetas y lecturas de presión y temperatura. Es la mejor defensa contra el error humano.</p>\n        <p><strong>Bloqueo grupal.</strong> Con muchos puntos y muchas personas, se usa la caja de bloqueo grupal: los candados del aislamiento van en los puntos, sus llaves en la caja, y cada trabajador pone su candado personal en la caja.</p>\n        <p><strong>Durante el trabajo:</strong> el plan se mantiene en el sitio; cualquier cambio (un punto adicional, un tramo que hay que abrir) se evalúa y se registra; en los cambios de turno se hace un relevo formal.</p>\n        <p><strong>Deshacer el aislamiento:</strong></p>\n        <ol>\n          <li>Verificar que el trabajo terminó, que las personas salieron y que el equipo está cerrado y armado.</li>\n          <li>Retirar las bridas ciegas y comprobar contra el registro que no quede ninguna.</li>\n          <li>Retirar los aislamientos en el orden del plan.</li>\n          <li>Presurizar despacio y hacer <strong>prueba de fugas</strong> en todas las uniones que se abrieron.</li>\n          <li>Entregar formalmente a operación y cerrar el plan.</li>\n        </ol>\n      ",
        "keyPoints": [
          "Plan escrito con cada punto codificado, método, posición, liberación de energía y verificación.",
          "Verificación independiente por una segunda persona competente antes de empezar.",
          "Desaislamiento en el orden del plan, retirando todas las bridas ciegas y con prueba de fugas."
        ],
        "practice": {
          "q": "¿Quién hace la verificación independiente de un aislamiento complejo?",
          "options": [
            "El operador de producción",
            "La misma persona que lo ejecutó",
            "Una segunda persona competente distinta de quien lo ejecutó"
          ]
        }
      }
    ],
    "scenarios": [
      {
        "scenario": "Bloqueaste el motor eléctrico de una prensa hidráulica. Vas a soltar una manguera, pero el manómetro del acumulador marca 1.800 psi.",
        "options": [
          "Suelto la manguera despacio para que la presión salga poco a poco.",
          "Descargo el acumulador por la válvula prevista según el procedimiento, libero la presión atrapada y verifico cero en los manómetros antes de soltar nada.",
          "Me pongo guantes gruesos y suelto la manguera."
        ]
      },
      {
        "scenario": "Vas a trabajar bajo una compuerta elevada que se sostiene con un cilindro hidráulico. El supervisor dice que \"el cilindro aguanta, no hay que poner nada más\".",
        "options": [
          "Trabajo rápido debajo, confiando en el cilindro.",
          "Pongo un gato hidráulico como apoyo extra.",
          "Bajo la compuerta o instalo los soportes o pasadores de seguridad diseñados para su peso, y luego aíslo el sistema hidráulico."
        ]
      },
      {
        "scenario": "Una tubería de vapor debe abrirse para cambiar una válvula. Hay una sola válvula de cierre aguas arriba y el operador dice que \"con eso basta, siempre se ha hecho así\".",
        "options": [
          "Pido aplicar doble bloqueo y purga, drenar, esperar a que enfríe y verificar presión y temperatura antes de abrir.",
          "Cierro la válvula con candado y abro con cuidado.",
          "Abro la brida rápidamente para que el vapor atrapado salga de una vez."
        ]
      },
      {
        "scenario": "Aplicaste doble bloqueo y purga en una línea de solvente. Después de vaciar lo atrapado, por la purga sigue saliendo un hilo constante de líquido.",
        "options": [
          "Sigo, porque es poco líquido y la purga lo está sacando.",
          "Cierro la purga para que no se desperdicie solvente.",
          "Detengo el trabajo, informo y busco otro punto de aislamiento o un aislamiento positivo antes de abrir."
        ]
      },
      {
        "scenario": "El electricista abrió el seccionador de un variador de frecuencia hace un minuto. Tu compañero quiere desconectar los cables del motor de inmediato porque \"ya está apagado\".",
        "options": [
          "Lo dejo, porque el seccionador está abierto.",
          "Esperamos el tiempo de descarga indicado en el variador y que el electricista verifique ausencia de tensión antes de tocar.",
          "Tocamos los bornes con el dorso de la mano para ver si hay tensión."
        ]
      }
    ],
    "exam": [
      {
        "q": "¿Cuál de estas situaciones indica que un aislamiento es complejo?",
        "options": [
          "Abrir una línea con un químico tóxico a alta presión.",
          "Desconectar la clavija de un ventilador de escritorio.",
          "Apagar una luz."
        ]
      },
      {
        "q": "¿Por qué las válvulas de control automáticas no se usan como puntos de aislamiento?",
        "options": [
          "Porque son más costosas de reemplazar que las válvulas manuales de la línea de proceso.",
          "Porque pueden abrirse por una señal del sistema.",
          "Porque no admiten etiquetas de bloqueo."
        ]
      },
      {
        "q": "¿Qué es el doble bloqueo y purga?",
        "options": [
          "Cerrar una válvula dos veces para asegurarse de que quedó cerrada.",
          "Dos válvulas cerradas sin ninguna salida entre ellas.",
          "Dos válvulas cerradas y bloqueadas con una purga abierta entre ellas hacia un lugar seguro."
        ]
      },
      {
        "q": "¿Qué método de aislamiento se usa para entrar a un espacio confinado conectado a líneas de fluidos peligrosos?",
        "options": [
          "Aislamiento positivo: brida ciega o desconexión física.",
          "Una válvula sencilla con candado.",
          "Una válvula de retención en la línea de entrada al equipo."
        ]
      },
      {
        "q": "¿Qué energía conserva un acumulador hidráulico con la bomba apagada?",
        "options": [
          "Ninguna: al apagar la bomba la presión desaparece.",
          "Aceite a presión, por horas o días.",
          "Solo calor, porque el aceite se enfría."
        ]
      },
      {
        "q": "¿Cómo se busca una fuga en una línea hidráulica?",
        "options": [
          "Pasando la mano sin guante cerca de la línea para sentir el chorro.",
          "Aumentando la presión del sistema para que la fuga se vea mejor.",
          "Con un cartón o un trozo de madera cerca de la línea, con guantes y gafas."
        ]
      },
      {
        "q": "¿Qué hace una válvula de bloqueo con venteo en un sistema neumático?",
        "options": [
          "Corta el suministro y descarga el aire del lado de la máquina.",
          "Aumenta la presión del aire en la línea de la máquina.",
          "Regula la velocidad de los cilindros durante la operación normal."
        ]
      },
      {
        "q": "¿Cuál de estos elementos es un soporte de seguridad válido para un molde de prensa?",
        "options": [
          "Un gato hidráulico.",
          "Un bloque de seguridad diseñado para el peso del molde.",
          "El propio cilindro de la prensa con la presión atrapada."
        ]
      },
      {
        "q": "¿Qué es el golpe de ariete en una línea de vapor?",
        "options": [
          "Un sonido normal del vapor que indica que la línea funciona bien.",
          "El choque de dos tuberías mal soportadas.",
          "El golpe del condensado empujado por el vapor."
        ]
      },
      {
        "q": "Al abrir una brida de una línea que estuvo con vapor, ¿qué pernos se aflojan primero?",
        "options": [
          "Los del lado opuesto al cuerpo, para que una liberación salga hacia el otro lado.",
          "Los del lado más cercano al cuerpo, para ver mejor lo que sale de la brida.",
          "Todos al mismo tiempo."
        ]
      },
      {
        "q": "¿Por qué una brida ciega debe tener una oreja visible fuera de la brida?",
        "options": [
          "Para que sea más fácil de transportar en el almacén.",
          "Para que se vea desde afuera que está instalada.",
          "Para colgarla en la pared cuando no se usa."
        ]
      },
      {
        "q": "¿Para qué sirve el registro de bridas ciegas?",
        "options": [
          "Para llevar el inventario contable de las bridas compradas por el almacén de la empresa.",
          "Para saber cuánto pesa cada brida.",
          "Para verificar que todas se retiren antes de la puesta en marcha."
        ]
      },
      {
        "q": "¿Por qué no se toca un variador de frecuencia inmediatamente después de abrir su seccionador?",
        "options": [
          "Porque sus capacitores conservan tensión durante minutos.",
          "Porque el variador está caliente y puede causar quemaduras.",
          "Porque se pierde la programación."
        ]
      },
      {
        "q": "¿Cómo se verifica la ausencia de tensión?",
        "options": [
          "Mirando que el piloto del tablero esté apagado.",
          "Con un instrumento comprobado antes y después.",
          "Preguntando al operador si apagó el equipo."
        ]
      },
      {
        "q": "¿Qué incluye un plan de aislamiento?",
        "options": [
          "Solo el nombre del equipo y la fecha.",
          "La lista de repuestos que hay que comprar y su precio estimado para el trabajo.",
          "Cada punto con su código, tipo de energía, método, posición, verificación y orden para deshacerlo."
        ]
      },
      {
        "q": "Al deshacer un aislamiento con líneas que se abrieron, ¿qué se hace al presurizar?",
        "options": [
          "Presurizar despacio y hacer prueba de fugas en todas las uniones abiertas.",
          "Presurizar de golpe a la presión máxima para comprobar que las uniones resisten bien.",
          "Entregar el equipo a operación sin pruebas, porque ya se revisó al armar."
        ]
      }
    ],
    "workshops": [],
    "project": null
  },
  {
    "id": "seguridad-soldadura-corte",
    "title": "Seguridad en Soldadura y Corte (Oxicorte, MIG, TIG, Electrodo)",
    "hours": 1.5,
    "category": "prevencion_sst",
    "regulation": "Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979; referencias: ANSI/AWS Z49.1, NFPA 51B, OSHA 1910.252-254",
    "legalNotice": "Formación teórica en seguridad para soldadores y ayudantes. No certifica la competencia técnica en soldadura ni reemplaza el entrenamiento práctico con los equipos de la empresa ni el permiso de trabajo en caliente.",
    "summary": "Los riesgos de cada proceso, los humos y gases según el metal, la radiación del arco y cómo elegir el filtro, el riesgo eléctrico del circuito de soldadura, el manejo seguro de cilindros y del equipo de oxicorte, los elementos de protección y la salud del soldador.",
    "fieldCase": "Un soldador iba a hacer oxicorte con guantes engrasados por la tarea anterior. Al manipular el regulador de oxígeno, la grasa entró en contacto con el oxígeno a presión y se produjo una combustión súbita que le quemó la mano. El equipo tampoco tenía válvulas antirretroceso.",
    "checklist": [
      "Sé qué metal y qué recubrimiento voy a soldar, y qué humos produce.",
      "Tengo extracción localizada o ventilación suficiente, y mantengo la cabeza fuera de la columna de humo.",
      "Mi careta tiene el filtro del tono adecuado y uso gafas de seguridad debajo.",
      "Hay mamparas para proteger a otras personas del arco.",
      "Cables, pinza y conexiones están en buen estado y la pinza de masa está cerca del punto de soldadura.",
      "Los cilindros están verticales, asegurados y con el oxígeno separado de los gases combustibles.",
      "El equipo de oxicorte tiene válvulas antirretroceso y pasó la prueba de fugas con agua jabonosa.",
      "Nada de grasa ni aceite en contacto con el oxígeno, reguladores ni guantes."
    ],
    "failureAnalysis": "Falla raíz: contacto de oxígeno a presión con grasa y ausencia de inspección del equipo de oxicorte antes de usarlo.",
    "onSiteClosure": "Práctica en su empresa: inspeccionar un equipo de oxicorte con prueba de fugas, revisar cables y pinzas de una máquina de soldar, seleccionar el filtro de la careta para el proceso del día y verificar la extracción localizada del puesto.",
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80",
    "modules": [
      {
        "title": "Los procesos de soldadura y corte y sus riesgos",
        "content": "\n        <p><strong>Procesos más comunes en la industria:</strong></p>\n        <ul>\n          <li><strong>Electrodo revestido (SMAW)</strong>: un arco eléctrico entre un electrodo con recubrimiento y la pieza. Versátil y muy usado en mantenimiento. Produce mucho humo y escoria.</li>\n          <li><strong>MIG/MAG (GMAW)</strong>: alambre continuo con gas de protección, inerte (MIG) o activo como el CO₂ (MAG). Alta productividad; radiación intensa.</li>\n          <li><strong>Alambre tubular (FCAW)</strong>: similar al MIG, con fundente dentro del alambre. Genera bastante humo.</li>\n          <li><strong>TIG (GTAW)</strong>: electrodo de tungsteno que no se consume y gas inerte (argón). Poco humo, pero mucha radiación ultravioleta y producción de ozono, sobre todo con aluminio.</li>\n          <li><strong>Oxicorte y soldadura oxigás</strong>: llama de oxígeno con un gas combustible (acetileno, propano, gas natural). Riesgos de incendio, explosión y retroceso de llama.</li>\n          <li><strong>Corte por plasma</strong>: arco de alta energía con gas comprimido. Mucho ruido, radiación y humos.</li>\n        </ul>\n        <p><strong>Riesgos comunes a todos:</strong></p>\n        <ul>\n          <li><strong>Humos y gases</strong> tóxicos.</li>\n          <li><strong>Radiación</strong> ultravioleta, infrarroja y luz visible intensa.</li>\n          <li><strong>Choque eléctrico</strong> en los procesos de arco.</li>\n          <li><strong>Incendio y explosión</strong> por chispas, escoria y gases.</li>\n          <li><strong>Quemaduras</strong> por metal caliente, escoria y salpicaduras.</li>\n          <li><strong>Ruido</strong>, especialmente en plasma, esmerilado y arco con aire.</li>\n          <li><strong>Carga física</strong>: posturas forzadas, calor, trabajo sobre cabeza.</li>\n          <li><strong>Atmósferas peligrosas</strong> al soldar en espacios confinados.</li>\n        </ul>\n        <p><strong>El soldador y los demás.</strong> Los riesgos no solo afectan a quien suelda. El ayudante, el vigía y los trabajadores cercanos respiran los mismos humos, reciben la radiación del arco y pueden ser alcanzados por chispas. Los controles deben proteger a todos.</p>\n        <p><strong>Antes de empezar, cinco preguntas:</strong> ¿qué proceso voy a usar?, ¿qué metal y qué recubrimiento tiene la pieza?, ¿dónde voy a trabajar (taller, campo, espacio confinado, altura)?, ¿qué hay alrededor (combustibles, personas, químicos)?, ¿necesito permiso de trabajo en caliente?</p>\n      ",
        "keyPoints": [
          "Procesos: electrodo revestido, MIG/MAG, alambre tubular, TIG, oxigás y plasma, cada uno con riesgos propios.",
          "Riesgos comunes: humos y gases, radiación, choque eléctrico, incendio, quemaduras, ruido y carga física.",
          "Los riesgos afectan también al ayudante y a los trabajadores cercanos."
        ],
        "practice": {
          "q": "¿En qué proceso de soldadura se usa un electrodo de tungsteno que no se consume?",
          "options": [
            "MIG/MAG (GMAW)",
            "TIG (GTAW)",
            "Electrodo revestido (SMAW)"
          ]
        }
      },
      {
        "title": "Marco normativo y referencias técnicas",
        "content": "\n        <p><strong>En Colombia</strong>, el <strong>Decreto 1072 de 2015</strong> obliga a identificar los peligros de la soldadura, evaluar los riesgos y aplicar controles; la <strong>Resolución 0312 de 2019</strong> pide procedimientos para las tareas de alto riesgo y la medición de los contaminantes a los que están expuestos los trabajadores. La <strong>Resolución 2400 de 1979</strong> (Estatuto de Seguridad Industrial) contiene disposiciones sobre soldadura, cilindros de gases y protección personal. Cuando se suelda dentro de tanques, ductos u otros espacios confinados, aplica además la <strong>Resolución 0491 de 2020</strong> sobre trabajo en espacios confinados.</p>\n        <p><strong>Referencias técnicas internacionales</strong> que usan las empresas y sus clientes:</p>\n        <ul>\n          <li><strong>ANSI/AWS Z49.1</strong>, de la Sociedad Americana de Soldadura: seguridad en soldadura, corte y procesos afines. Es la referencia más completa para el oficio.</li>\n          <li><strong>NFPA 51B</strong>: prevención de incendios durante los trabajos en caliente.</li>\n          <li><strong>OSHA 29 CFR 1910.252 a 1910.254</strong> (Estados Unidos): requisitos para soldadura, oxigás y arco.</li>\n        </ul>\n        <p><strong>Un dato que cambió la forma de ver el oficio.</strong> En 2017, la Agencia Internacional para la Investigación del Cáncer (IARC), de la Organización Mundial de la Salud, clasificó los <strong>humos de soldadura como cancerígenos para los seres humanos (grupo 1)</strong>, por su relación con el cáncer de pulmón. También clasificó así la radiación ultravioleta de la soldadura. Eso significa que el humo de soldadura no es una simple molestia: hay que controlarlo siempre, no solo cuando \"se ve mucho\".</p>\n        <p><strong>Responsabilidades:</strong> la empresa provee equipos en buen estado, ventilación, elementos de protección, capacitación y vigilancia de la salud; el soldador inspecciona su equipo, aplica los procedimientos, usa la protección y reporta las condiciones inseguras.</p>\n        <p><strong>Competencia técnica y seguridad son distintas.</strong> Un soldador puede estar calificado para hacer soldaduras de alta calidad y, sin embargo, trabajar de forma insegura. Este curso trata la seguridad; la calificación del procedimiento y del soldador se rige por otras normas técnicas.</p>\n      ",
        "keyPoints": [
          "Decreto 1072 de 2015, Res. 0312 de 2019 y Res. 2400 de 1979; en espacios confinados, la Res. 0491 de 2020.",
          "ANSI/AWS Z49.1 es la referencia técnica principal de seguridad en soldadura.",
          "Desde 2017, la IARC clasifica los humos de soldadura como cancerígenos para humanos (grupo 1)."
        ],
        "practice": {
          "q": "¿Cómo clasificó la IARC los humos de soldadura en 2017?",
          "options": [
            "Como no peligrosos para la salud",
            "Como irritantes leves sin efectos a largo plazo",
            "Como cancerígenos para humanos (grupo 1)"
          ]
        }
      },
      {
        "title": "Humos y gases: qué se respira al soldar",
        "content": "\n        <p>El <strong>humo de soldadura</strong> son partículas muy finas de metales y óxidos que se forman cuando el metal se evapora en el arco y se condensa en el aire. Son tan pequeñas que llegan al fondo de los pulmones. Los <strong>gases</strong> se generan por la acción del calor y de la radiación sobre el aire, el gas de protección y los recubrimientos.</p>\n        <p><strong>La composición depende del metal, del recubrimiento y del consumible:</strong></p>\n        <ul>\n          <li><strong>Acero galvanizado</strong> (con zinc): los humos de óxido de zinc causan la <strong>fiebre de los humos metálicos</strong>: escalofríos, fiebre, dolor muscular y sabor metálico horas después de soldar, parecido a una gripa.</li>\n          <li><strong>Acero inoxidable</strong>: libera <strong>cromo hexavalente</strong> y <strong>níquel</strong>, ambos cancerígenos.</li>\n          <li><strong>Electrodos y aceros con manganeso</strong>: la exposición prolongada al manganeso puede dañar el sistema nervioso, con síntomas parecidos al Parkinson.</li>\n          <li><strong>Piezas pintadas</strong>: pueden liberar plomo, cadmio o productos de la descomposición de la pintura.</li>\n        </ul>\n        <p><strong>Gases:</strong></p>\n        <ul>\n          <li><strong>Ozono</strong>: se forma por la radiación ultravioleta, sobre todo en TIG y MIG con aluminio. Irrita las vías respiratorias.</li>\n          <li><strong>Óxidos de nitrógeno</strong> y <strong>monóxido de carbono</strong> (este último, en MAG con CO₂ y en llamas de oxigás).</li>\n          <li><strong>Fosgeno</strong>: muy tóxico. Se forma cuando la radiación del arco descompone los vapores de <strong>solventes clorados</strong> usados para desengrasar. Nunca se suelda cerca de piezas recién desengrasadas con estos solventes ni de tinas de desengrase.</li>\n          <li><strong>Gases de protección</strong> (argón, CO₂): no son tóxicos, pero desplazan el oxígeno en espacios cerrados y pueden causar asfixia.</li>\n        </ul>\n        <p><strong>Controles, en orden de prioridad:</strong></p>\n        <ol>\n          <li><strong>Eliminar</strong> recubrimientos y pinturas de la zona a soldar, con métodos que no generen otro riesgo.</li>\n          <li><strong>Extracción localizada</strong>: una campana o boquilla que capture el humo cerca del arco, ubicada y reposicionada a medida que avanza el trabajo. Es el control más eficaz.</li>\n          <li><strong>Ventilación general</strong> del taller.</li>\n          <li><strong>Posición de trabajo</strong>: mantener la cabeza fuera de la columna de humo que sube del arco.</li>\n          <li><strong>Protección respiratoria</strong> cuando lo anterior no basta: respirador con filtros para partículas adecuados, o equipos con suministro de aire en espacios confinados o con contaminantes muy tóxicos. Un tapabocas de tela no protege.</li>\n        </ol>\n        <p><strong>Mediciones.</strong> La empresa debe evaluar la exposición de los soldadores con mediciones ambientales y personales, y usar los resultados para mejorar los controles.</p>\n      ",
        "keyPoints": [
          "Los humos dependen del metal: zinc (fiebre de humos metálicos), cromo y níquel (cancerígenos), manganeso (sistema nervioso).",
          "Nunca soldar cerca de solventes clorados: la radiación forma fosgeno, muy tóxico.",
          "Control más eficaz: extracción localizada cerca del arco; luego ventilación, posición y respirador adecuado."
        ],
        "practice": {
          "q": "¿Qué síntomas produce la fiebre de los humos metálicos al soldar galvanizado?",
          "options": [
            "Escalofríos, fiebre y dolor muscular, como una gripa",
            "Quemaduras en las manos",
            "Ceguera inmediata"
          ]
        }
      },
      {
        "title": "Radiación del arco: ojos, piel y filtros",
        "content": "\n        <p>El arco de soldadura emite tres tipos de radiación:</p>\n        <ul>\n          <li><strong>Ultravioleta (UV)</strong>: no se ve, pero quema la piel como el sol (en minutos) y lesiona la córnea.</li>\n          <li><strong>Infrarroja (IR)</strong>: se percibe como calor y puede dañar el cristalino y la retina con exposiciones repetidas.</li>\n          <li><strong>Luz visible intensa</strong>: deslumbra y puede causar lesiones en la retina.</li>\n        </ul>\n        <p><strong>El \"ojo de arco\"</strong> (queratoconjuntivitis actínica) es la lesión más frecuente. Ocurre al mirar el arco sin protección, aunque sea unos segundos, o por reflejos. Los síntomas aparecen <strong>horas después</strong>, muchas veces de noche: sensación de arena en los ojos, dolor intenso, lagrimeo y sensibilidad a la luz. Suele mejorar en uno o dos días, pero las exposiciones repetidas pueden dejar daño. Requiere valoración médica; no se aplican gotas ni remedios sin indicación.</p>\n        <p><strong>Protección de los ojos y la cara:</strong></p>\n        <ul>\n          <li><strong>Careta de soldar</strong> con el <strong>filtro del tono adecuado</strong>. El número del tono indica qué tan oscuro es: a mayor número, más oscuro.</li>\n          <li><strong>Cómo elegir el tono</strong>: según el proceso y la corriente, con la tabla del fabricante o de la norma ANSI/AWS. Como referencia, la soldadura con electrodo y MIG suele requerir tonos entre 10 y 13, y el oxicorte, tonos más claros, entre 3 y 6 aproximadamente. Una regla práctica: empezar con un tono más oscuro del que parece necesario e ir aclarando hasta ver bien el charco de soldadura.</li>\n          <li><strong>Caretas fotosensibles</strong> (de oscurecimiento automático): cómodas y seguras si funcionan bien. Se verifica la batería, los sensores limpios y el tono ajustado.</li>\n          <li><strong>Gafas de seguridad debajo de la careta</strong>, siempre: protegen de la escoria al picar y de los reflejos cuando se levanta la careta.</li>\n          <li>Para oxicorte y ayudantes: gafas con filtro del tono adecuado.</li>\n        </ul>\n        <p><strong>La piel:</strong> manga larga, cuello cubierto y guantes. La radiación UV atraviesa algunas telas delgadas y quema a través de ellas.</p>\n        <p><strong>Proteger a los demás:</strong> mamparas o cortinas de soldadura alrededor del puesto, señalización del área, y aviso antes de encender el arco cuando hay personas cerca. Un vidrio común, unas gafas de sol o un visor transparente <strong>no</strong> protegen.</p>\n      ",
        "keyPoints": [
          "El arco emite radiación UV, IR y luz visible intensa; el ojo de arco aparece horas después.",
          "Careta con el tono del filtro según el proceso y la corriente, y gafas de seguridad debajo siempre.",
          "Mamparas para proteger a otros; vidrio común o gafas de sol no protegen."
        ],
        "practice": {
          "q": "¿Cuándo aparecen por lo general los síntomas del ojo de arco?",
          "options": [
            "Varios días después",
            "Horas después de la exposición",
            "Inmediatamente al mirar el arco"
          ]
        }
      },
      {
        "title": "Riesgo eléctrico en la soldadura por arco",
        "content": "\n        <p>En la soldadura por arco, el <strong>electrodo</strong>, la <strong>pinza portaelectrodo</strong> y la <strong>pieza</strong> forman parte de un circuito eléctrico. Aunque la tensión de soldadura es menor que la de la red, puede causar un choque peligroso, sobre todo con la máquina en vacío (encendida sin soldar), en ambientes húmedos o dentro de estructuras metálicas.</p>\n        <p><strong>Situaciones de mayor riesgo:</strong></p>\n        <ul>\n          <li>Ropa, guantes o piel mojados de agua o de sudor.</li>\n          <li>Trabajar sobre pisos mojados o dentro de tanques, ductos y estructuras metálicas, donde el cuerpo queda en contacto con la pieza.</li>\n          <li>Cables con el aislamiento dañado o empalmes mal hechos.</li>\n          <li>Cambiar el electrodo con la mano desnuda o con guantes húmedos.</li>\n        </ul>\n        <p><strong>Reglas básicas:</strong></p>\n        <ul>\n          <li>Inspeccionar cables, pinza y conexiones antes de cada uso; reemplazar los dañados, no repararlos con cinta.</li>\n          <li>Usar guantes de soldador <strong>secos</strong> y en buen estado; cambiarlos si se mojan.</li>\n          <li>Aislarse de la pieza y del piso con tapetes o tablas secas cuando se trabaja en zonas húmedas o metálicas.</li>\n          <li>No tocar al mismo tiempo el electrodo o la pinza y la pieza o la estructura.</li>\n          <li>No enrollar los cables alrededor del cuerpo ni apoyarlos sobre los hombros.</li>\n          <li>Retirar el electrodo de la pinza y dejar la pinza en un lugar aislado al hacer pausas; apagar la máquina al terminar.</li>\n          <li>La máquina debe estar conectada a tierra según el fabricante, y su alimentación la hace personal calificado.</li>\n        </ul>\n        <p><strong>La pinza de masa</strong> (pinza de tierra o retorno) se conecta <strong>lo más cerca posible del punto de soldadura</strong>, sobre metal limpio. Si se conecta lejos, la corriente puede regresar por caminos no previstos (estructuras, tuberías, cadenas de polipastos, rodamientos de máquinas) y causar daños, incendios o choques.</p>\n        <p><strong>En espacios confinados o muy húmedos</strong>, la empresa puede exigir equipos con dispositivos que reducen la tensión en vacío, además de las medidas del procedimiento de espacios confinados.</p>\n      ",
        "keyPoints": [
          "El electrodo, la pinza y la pieza forman un circuito: el choque es más probable con humedad y dentro de estructuras metálicas.",
          "Guantes secos, cables en buen estado, aislarse de la pieza y nunca enrollar cables en el cuerpo.",
          "La pinza de masa va lo más cerca posible del punto de soldadura, sobre metal limpio."
        ],
        "practice": {
          "q": "¿Dónde se conecta la pinza de masa?",
          "options": [
            "En cualquier parte de la estructura del edificio",
            "En la tubería de agua más cercana",
            "Lo más cerca posible del punto de soldadura, sobre metal limpio"
          ]
        }
      },
      {
        "title": "Cilindros de gas y equipo de oxicorte",
        "content": "\n        <p><strong>Identificación.</strong> El contenido de un cilindro se identifica por su <strong>etiqueta</strong>, no solo por su color, porque los colores pueden variar entre proveedores. Un cilindro sin identificar no se usa.</p>\n        <p><strong>Almacenamiento y transporte:</strong></p>\n        <ul>\n          <li>Siempre en posición <strong>vertical</strong> y <strong>asegurados</strong> con cadena o abrazadera, para que no caigan. Un cilindro que cae y rompe su válvula puede salir disparado como un proyectil.</li>\n          <li>Con el <strong>capuchón</strong> puesto cuando no están en uso o se transportan.</li>\n          <li>El <strong>oxígeno separado de los gases combustibles</strong>: a una distancia mínima de unos 6 metros o con una barrera incombustible de al menos 1,5 metros de alto (referencia de OSHA 1910.253).</li>\n          <li>Lejos del calor, de las chispas y de los circuitos eléctricos.</li>\n          <li>Se mueven en carros diseñados para ello, nunca rodándolos ni arrastrándolos.</li>\n          <li>Llenos y vacíos separados e identificados.</li>\n        </ul>\n        <p><strong>El oxígeno y la grasa.</strong> El oxígeno puro a presión hace que la grasa, el aceite y otros materiales se enciendan de forma violenta, incluso sin una chispa. Por eso:</p>\n        <ul>\n          <li>Nunca se lubrican válvulas, reguladores ni conexiones de oxígeno.</li>\n          <li>No se manipulan con guantes o manos engrasadas, como en el caso del curso.</li>\n          <li>Nunca se usa oxígeno para \"soplar\" la ropa, limpiar polvo o ventilar un espacio: la ropa impregnada de oxígeno arde con violencia.</li>\n        </ul>\n        <p><strong>El equipo de oxicorte:</strong></p>\n        <ul>\n          <li><strong>Válvulas antirretroceso o arrestallamas</strong> en los reguladores y, según el equipo, en el soplete. Impiden que una llama o una mezcla de gases regrese hacia las mangueras y los cilindros.</li>\n          <li><strong>Prueba de fugas con agua jabonosa</strong> en conexiones, reguladores y mangueras antes de cada uso. Nunca se buscan fugas con una llama.</li>\n          <li>Mangueras en buen estado, del color y tipo correcto para cada gas, sin empalmes improvisados.</li>\n          <li>Abrir las válvulas de los cilindros despacio, parándose a un lado del regulador, nunca de frente.</li>\n          <li>El <strong>acetileno</strong> no se usa a presiones mayores de 15 psig (aproximadamente 1 bar), porque se vuelve inestable; el cilindro de acetileno siempre en posición vertical.</li>\n          <li>Encender y apagar el soplete siguiendo la secuencia del fabricante, con un encendedor de chispa, nunca con un fósforo o un encendedor de bolsillo.</li>\n        </ul>\n        <p><strong>Retroceso de llama.</strong> Si se oye un silbido o un chasquido y la llama se mete en el soplete, se cierran de inmediato las válvulas del soplete y luego las de los cilindros, y no se vuelve a usar el equipo hasta revisarlo.</p>\n      ",
        "keyPoints": [
          "Cilindros verticales, asegurados, con capuchón, identificados por la etiqueta y con el oxígeno separado de los combustibles.",
          "El oxígeno a presión enciende la grasa y el aceite: nada de lubricantes ni guantes engrasados, ni oxígeno para soplar la ropa.",
          "Oxicorte: válvulas antirretroceso, prueba de fugas con agua jabonosa y acetileno a no más de 15 psig."
        ],
        "practice": {
          "q": "¿Por qué nunca se lubrican los reguladores de oxígeno?",
          "options": [
            "Porque el oxígeno a presión hace que la grasa se encienda de forma violenta",
            "Porque el lubricante cambia el color de la llama",
            "Porque el lubricante tapa el regulador"
          ]
        }
      },
      {
        "title": "Incendio, quemaduras y elementos de protección personal",
        "content": "\n        <p><strong>Prevención de incendios.</strong> Fuera del taller de soldadura, todo trabajo de soldadura o corte es un <strong>trabajo en caliente</strong> y requiere permiso: evaluación del área, retiro o protección de los combustibles en un radio de 11 metros, vigía de fuego durante el trabajo y vigilancia posterior (ver el curso de trabajo en caliente).</p>\n        <p><strong>Nunca se suelda ni se corta</strong> un recipiente, tambor o tubería que contuvo combustibles sin limpiarlo, purgarlo y medir su atmósfera. Es una de las principales causas de muerte entre soldadores.</p>\n        <p><strong>Elementos de protección del soldador:</strong></p>\n        <ul>\n          <li><strong>Careta</strong> con el filtro adecuado y <strong>gafas de seguridad</strong> debajo.</li>\n          <li><strong>Ropa</strong> de algodón grueso o de material resistente a la llama, de manga larga, cuello cerrado, sin bolsillos abiertos ni dobladillos donde caigan chispas. Nada de fibras sintéticas.</li>\n          <li><strong>Chaqueta, peto o mangas de cuero</strong> según la posición y la cantidad de salpicaduras; capucha o gorro para trabajos sobre la cabeza.</li>\n          <li><strong>Guantes de cuero</strong> para soldador, más gruesos para electrodo y oxicorte, más delgados para TIG.</li>\n          <li><strong>Polainas</strong> y <strong>botas de seguridad</strong> de caña alta, con el pantalón por fuera de la bota para que las chispas no caigan adentro.</li>\n          <li><strong>Protección auditiva</strong> en plasma, arco con aire, esmerilado y ambientes ruidosos.</li>\n          <li><strong>Protección respiratoria</strong> según la evaluación de humos.</li>\n        </ul>\n        <p><strong>Quemaduras frecuentes y cómo evitarlas:</strong> tocar piezas recién soldadas (marcarlas como calientes o enfriarlas), escorias que saltan al picar (gafas siempre), salpicaduras que entran por el cuello o las botas (ropa cerrada y polainas), y llamas que alcanzan ropa impregnada de aceite o de oxígeno.</p>\n        <p><strong>Encendedores y fósforos en el bolsillo:</strong> una chispa puede encender un encendedor de gas y hacerlo explotar. No se llevan en la ropa mientras se suelda.</p>\n      ",
        "keyPoints": [
          "Fuera del taller, soldar o cortar es trabajo en caliente: permiso, retiro de combustibles, vigía y vigilancia posterior.",
          "Ropa de algodón o resistente a la llama, cuero, guantes, polainas, botas y protección auditiva y respiratoria según el caso.",
          "Nunca se suelda un recipiente que contuvo combustible sin limpiarlo, purgarlo y medir."
        ],
        "practice": {
          "q": "¿Por qué se usan polainas y el pantalón por fuera de la bota al soldar?",
          "options": [
            "Para que las botas duren más",
            "Para que las chispas no caigan dentro de la bota",
            "Para que la ropa se vea mejor"
          ]
        }
      },
      {
        "title": "Espacios confinados, ergonomía y salud del soldador",
        "content": "\n        <p><strong>Soldar en espacios confinados</strong> (tanques, silos, ductos, calderas) multiplica los riesgos: los humos y gases se acumulan, los gases de protección desplazan el oxígeno, el calor es intenso y el choque eléctrico es más probable porque el cuerpo está rodeado de metal. Se aplica el procedimiento de espacios confinados de la Resolución 0491 de 2020:</p>\n        <ul>\n          <li>permiso de trabajo y medición de la atmósfera antes de entrar y durante el trabajo;</li>\n          <li>ventilación forzada que saque los humos;</li>\n          <li><strong>los cilindros de gas se dejan afuera</strong>; solo entran las mangueras y el soplete, y se retiran al terminar o en las pausas largas, para que una fuga no llene el espacio;</li>\n          <li>un vigía afuera, con comunicación permanente y plan de rescate;</li>\n          <li>protección respiratoria adecuada y medidas contra el choque eléctrico.</li>\n        </ul>\n        <p><strong>Ergonomía.</strong> El soldador trabaja muchas veces en posiciones forzadas: agachado, de rodillas, con los brazos sobre la cabeza, con el cuello flexionado y con equipos pesados. Con el tiempo aparecen lesiones de hombros, espalda, cuello y rodillas. Ayudan: posicionadores y mesas de trabajo a la altura adecuada, rodilleras, pausas activas, rotación de tareas y soportes para la careta.</p>\n        <p><strong>Calor.</strong> El calor del proceso más la ropa de protección pueden causar agotamiento por calor. Hidratarse con frecuencia, hacer pausas en lugares frescos y conocer los síntomas: mareo, dolor de cabeza, náuseas, piel muy caliente.</p>\n        <p><strong>Vigilancia de la salud.</strong> Los soldadores deben estar en el programa de vigilancia médica de la empresa, con evaluaciones según su exposición: función pulmonar, audición, visión y, cuando se sueldan aceros con manganeso, cromo o níquel, controles específicos. Informar al médico si aparecen tos persistente, dificultad para respirar, episodios de fiebre después de soldar o temblores.</p>\n        <p><strong>Hábitos que protegen:</strong> no comer ni fumar en el puesto de soldadura, lavarse las manos y la cara antes de comer, cambiarse la ropa de trabajo antes de ir a casa y no fumar en general: el tabaco multiplica el daño pulmonar de los humos.</p>\n      ",
        "keyPoints": [
          "En espacios confinados: permiso, medición, ventilación forzada, cilindros afuera, vigía y plan de rescate (Res. 0491 de 2020).",
          "Posturas forzadas y calor: posicionadores, pausas, hidratación y rotación de tareas.",
          "Vigilancia médica pulmonar, auditiva y visual; no fumar, porque multiplica el daño de los humos."
        ],
        "practice": {
          "q": "Al soldar dentro de un tanque con oxicorte, ¿dónde se dejan los cilindros?",
          "options": [
            "Dentro del tanque, cerca del soldador",
            "En la entrada del tanque, bloqueando el paso",
            "Afuera del tanque"
          ]
        }
      }
    ],
    "scenarios": [
      {
        "scenario": "Vas a hacer oxicorte. Tus guantes están engrasados de la tarea anterior, el regulador de oxígeno está a la mano y nadie ha revisado las válvulas antirretroceso.",
        "options": [
          "Empiezo con cuidado: la grasa es poca y el corte es corto.",
          "Cambio los guantes por unos limpios, reviso el equipo, verifico las válvulas antirretroceso y hago la prueba de fugas con agua jabonosa antes de abrir.",
          "Me limpio los guantes con un poco de oxígeno del soplete antes de empezar."
        ]
      },
      {
        "scenario": "Vas a soldar acero galvanizado en un cuarto pequeño sin ventilación. Tu compañero dice que con el tapabocas de tela es suficiente.",
        "options": [
          "Acepto, porque es un trabajo de pocos minutos.",
          "Pido extracción localizada o ventilación forzada, retiro el galvanizado de la zona de soldadura si es posible, y uso el respirador adecuado.",
          "Abro la puerta del cuarto y suelo con la cabeza sobre la pieza para ver mejor."
        ]
      },
      {
        "scenario": "Un compañero suelda con MIG cerca de tu puesto, sin mampara. Tú solo tienes un visor de vidrio común y te molesta el brillo del arco.",
        "options": [
          "Sigo trabajando sin mirar directamente el arco.",
          "Me pongo unas gafas de sol que tengo en el locker.",
          "Le pido que detenga el trabajo hasta instalar una mampara entre los puestos y uso protección ocular adecuada si debo estar cerca."
        ]
      },
      {
        "scenario": "Debes soldar un soporte en el piso de una planta de lavado. El piso está mojado, tus guantes están húmedos por el sudor y la pinza de masa quedó conectada a una baranda a 15 metros del punto de soldadura.",
        "options": [
          "Cambio a guantes secos, me aíslo del piso con una base seca, y reubico la pinza de masa lo más cerca posible del punto de soldadura.",
          "Sigo así, porque la tensión de soldadura es baja.",
          "Me quito los guantes para no sentir la humedad y trabajar más cómodo."
        ]
      },
      {
        "scenario": "Te piden soldar una pieza junto a una tina de desengrase con solvente clorado. El supervisor dice que es rápido y que la tina está tapada a medias.",
        "options": [
          "Sueldo rápido con buena ventilación.",
          "Pido trasladar la pieza o alejar la tina y ventilar hasta eliminar los vapores, y solo entonces suelo.",
          "Tapo la tina del todo con un cartón y empiezo."
        ]
      }
    ],
    "exam": [
      {
        "q": "¿Cuál es la referencia técnica más completa sobre seguridad en soldadura y corte?",
        "options": [
          "La norma ANSI/AWS Z49.1.",
          "La Resolución 2674 de 2013, sobre los requisitos sanitarios de los alimentos y las bebidas.",
          "La NFPA 704, que define el rombo de colores para identificar productos."
        ]
      },
      {
        "q": "¿Por qué los humos de soldadura deben controlarse siempre, aunque \"no se vea mucho humo\"?",
        "options": [
          "Porque manchan la ropa y los equipos del taller.",
          "Porque la IARC los clasificó como cancerígenos para humanos.",
          "Porque afectan la calidad del cordón de soldadura y obligan a repetir el trabajo."
        ]
      },
      {
        "q": "¿Qué metales liberan los humos del acero inoxidable que son cancerígenos?",
        "options": [
          "Zinc y cobre, que producen fiebre de humos metálicos en los soldadores.",
          "Hierro y carbono.",
          "Cromo hexavalente y níquel."
        ]
      },
      {
        "q": "¿Qué gas muy tóxico puede formarse al soldar cerca de solventes clorados?",
        "options": [
          "Fosgeno.",
          "Argón, que se libera de los solventes por el calor del arco.",
          "Oxígeno puro, que se separa del solvente al calentarse."
        ]
      },
      {
        "q": "¿Cuál es el control más eficaz contra los humos de soldadura?",
        "options": [
          "Un tapabocas de tela.",
          "La extracción localizada que captura el humo cerca del arco.",
          "Soldar más rápido para producir menos humo."
        ]
      },
      {
        "q": "¿Por qué los gases de protección como el argón son peligrosos en un espacio confinado?",
        "options": [
          "Porque son inflamables y pueden explotar con las chispas.",
          "Porque son corrosivos y atacan la piel del soldador.",
          "Porque desplazan el oxígeno y pueden causar asfixia."
        ]
      },
      {
        "q": "Un soldador siente arena en los ojos y dolor intenso en la noche después de trabajar sin careta adecuada. ¿Qué es probable?",
        "options": [
          "Un ojo de arco (queratoconjuntivitis) por la radiación ultravioleta.",
          "Una alergia al polvo del taller, que se trata con gotas de venta libre.",
          "Cansancio visual normal por la jornada, que se quita durmiendo."
        ]
      },
      {
        "q": "¿Cómo se elige el tono del filtro de la careta?",
        "options": [
          "Siempre el tono más claro, para ver mejor la pieza.",
          "Según el proceso y la corriente, con la tabla del fabricante o de la norma.",
          "Con el mismo tono para todos los procesos, para estandarizar las caretas del taller."
        ]
      },
      {
        "q": "¿Qué protege a los trabajadores cercanos de la radiación del arco?",
        "options": [
          "Unas gafas de sol oscuras.",
          "Un visor de vidrio transparente de buena calidad, como los de las gafas de lectura.",
          "Mamparas o cortinas de soldadura alrededor del puesto."
        ]
      },
      {
        "q": "¿En cuál de estas situaciones es mayor el riesgo de choque eléctrico al soldar con arco?",
        "options": [
          "Con guantes húmedos de sudor, dentro de un tanque metálico.",
          "Con guantes secos, en una mesa de trabajo aislada.",
          "Con la máquina apagada y desconectada."
        ]
      },
      {
        "q": "¿Qué puede pasar si la pinza de masa se conecta lejos del punto de soldadura?",
        "options": [
          "Que el cordón quede con mejor penetración y más resistencia mecánica.",
          "Que la corriente regrese por caminos no previstos y cause daños, incendios o choques.",
          "Que el electrodo se consuma más despacio."
        ]
      },
      {
        "q": "¿Cómo se identifica con seguridad el contenido de un cilindro de gas?",
        "options": [
          "Por el color del cilindro, que es igual en todos los proveedores.",
          "Por el olor del gas al abrir un poco la válvula.",
          "Por la etiqueta del cilindro."
        ]
      },
      {
        "q": "¿Cómo se separan en el almacenamiento los cilindros de oxígeno y de gases combustibles?",
        "options": [
          "A unos 6 metros de distancia o con una barrera incombustible de al menos 1,5 metros de alto.",
          "No hace falta separarlos si están bien cerrados y con el capuchón puesto.",
          "Con una cortina de soldadura entre ellos."
        ]
      },
      {
        "q": "¿Cómo se buscan las fugas en un equipo de oxicorte?",
        "options": [
          "Acercando una llama pequeña a las conexiones.",
          "Con agua jabonosa en conexiones, reguladores y mangueras.",
          "Por el olor, porque todos los gases industriales tienen un olor fuerte y característico."
        ]
      },
      {
        "q": "¿A qué presión máxima se usa el acetileno?",
        "options": [
          "A la misma presión del oxígeno, para que la llama quede balanceada.",
          "A cualquier presión, porque el regulador lo controla.",
          "A no más de 15 psig, porque a mayor presión se vuelve inestable."
        ]
      },
      {
        "q": "Al soldar en un tanque con oxicorte, ¿qué se hace con las mangueras y el soplete en una pausa larga?",
        "options": [
          "Se retiran del tanque, para que una fuga no llene el espacio de gas.",
          "Se dejan dentro del tanque, con las válvulas del soplete cerradas para no perder tiempo.",
          "Se cuelgan en la entrada del tanque para encontrarlos rápido al volver de la pausa."
        ]
      }
    ],
    "workshops": [],
    "project": null
  },
  {
    "id": "aparejador-cargas",
    "title": "Aparejador de Cargas (Izaje Seguro)",
    "hours": 1.5,
    "category": "prevencion_sst",
    "regulation": "Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979; referencias: ASME B30.9, B30.26, B30.10 y B30.5",
    "legalNotice": "Formación teórica en aparejamiento de cargas. No certifica la competencia como aparejador, señalero ni operador de grúa: la empresa o el cliente pueden exigir certificación por un organismo acreditado y evaluación práctica.",
    "summary": "Los roles y riesgos del izaje, el plan de izaje, la capacidad de las eslingas según su configuración y su ángulo, la inspección y los criterios de rechazo, los grilletes, cáncamos y ganchos, la ejecución segura con señales y vientos, y cómo terminar la maniobra.",
    "fieldCase": "Durante el izaje de un motor de 2 toneladas, la eslinga sintética pasaba por un borde metálico filoso sin protector y formaba un ángulo muy cerrado, de unos 30 grados con la horizontal. Al tensarse, el borde cortó la eslinga y el motor cayó a pocos metros de un trabajador.",
    "checklist": [
      "Conozco el peso real de la carga, su centro de gravedad y los puntos de izaje.",
      "La grúa o el polipasto tienen capacidad para el radio y la configuración de la maniobra.",
      "Cada eslinga tiene etiqueta legible y su capacidad cubre la carga en la configuración y el ángulo usados.",
      "Inspeccioné eslingas, grilletes, ganchos y cáncamos antes de usarlos.",
      "Protegí los bordes cortantes con cantoneras.",
      "El área está delimitada y nadie queda bajo la carga ni en su recorrido.",
      "Hay un solo señalero, con señales acordadas, y vientos para guiar la carga.",
      "Hice una prueba de levante a pocos centímetros antes de mover la carga."
    ],
    "failureAnalysis": "Falla raíz: no se protegieron los bordes cortantes y el ángulo cerrado duplicó la tensión en cada rama de la eslinga. No hubo un plan de izaje que calculara la carga real en los aparejos.",
    "onSiteClosure": "Práctica en su empresa: inspeccionar con la lista de la empresa un juego de eslingas y accesorios, retirando los que no cumplan; calcular con el supervisor la tensión en una eslinga de dos ramas para un izaje real; y participar como aparejador o señalero en una maniobra supervisada.",
    "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    "modules": [
      {
        "title": "Izaje de cargas: roles y riesgos",
        "content": "\n        <p>Un <strong>izaje</strong> es cualquier maniobra en la que se levanta, se mueve y se baja una carga con un equipo: grúa móvil, grúa puente, polipasto, diferencial, montacargas con aditamento o grúa articulada.</p>\n        <p><strong>Roles en una maniobra:</strong></p>\n        <ul>\n          <li><strong>Supervisor o director de la maniobra</strong>: planea, verifica las condiciones y autoriza.</li>\n          <li><strong>Operador del equipo</strong>: maneja la grúa o el polipasto y conoce sus límites.</li>\n          <li><strong>Aparejador</strong> (en inglés, <em>rigger</em>): selecciona, inspecciona y conecta los aparejos (eslingas, grilletes, ganchos) a la carga y al gancho.</li>\n          <li><strong>Señalero</strong>: es el único que da las señales al operador cuando este no ve la carga o el recorrido.</li>\n        </ul>\n        <p>En maniobras pequeñas, una misma persona puede tener varios roles, pero todos deben cumplirse.</p>\n        <p><strong>Riesgos principales:</strong></p>\n        <ul>\n          <li><strong>Caída de la carga</strong> por falla de una eslinga o un accesorio, mal amarre, sobrecarga o carga desequilibrada.</li>\n          <li><strong>Golpes</strong> por la carga que gira, se balancea o se desplaza.</li>\n          <li><strong>Atrapamiento</strong> de manos y pies entre la carga y otros objetos, o entre la eslinga y la carga al tensarse.</li>\n          <li><strong>Volcamiento</strong> de la grúa por sobrecarga, terreno blando o estabilizadores mal puestos.</li>\n          <li><strong>Contacto con líneas eléctricas</strong> con la pluma, el cable o la carga.</li>\n          <li><strong>Falla del equipo</strong>: frenos, cables, ganchos.</li>\n        </ul>\n        <p><strong>La regla que más vidas salva:</strong> nadie se ubica debajo de una carga suspendida ni en su recorrido. Ningún aparejo es infalible.</p>\n        <p><strong>Marco normativo.</strong> El <strong>Decreto 1072 de 2015</strong> y la <strong>Resolución 0312 de 2019</strong> exigen identificar y controlar este riesgo con procedimientos; la <strong>Resolución 2400 de 1979</strong> contiene disposiciones sobre aparatos de izar, cables, cadenas y ganchos. Las referencias técnicas son las normas <strong>ASME B30</strong>: B30.9 para eslingas, B30.26 para accesorios, B30.10 para ganchos, B30.5 para grúas móviles y B30.2 para grúas puente.</p>\n      ",
        "keyPoints": [
          "Roles: supervisor de la maniobra, operador, aparejador y un único señalero.",
          "Riesgos: caída de la carga, golpes, atrapamiento, volcamiento de la grúa y contacto con líneas eléctricas.",
          "Nadie debajo de una carga suspendida ni en su recorrido."
        ],
        "practice": {
          "q": "¿Quién da las señales al operador de la grúa durante una maniobra?",
          "options": [
            "Todos los que están cerca",
            "Un solo señalero designado",
            "El operador se guía solo por lo que ve"
          ]
        }
      },
      {
        "title": "El plan de izaje: peso, centro de gravedad y capacidad",
        "content": "\n        <p>Antes de cualquier izaje se responden tres preguntas: <strong>¿cuánto pesa?</strong>, <strong>¿dónde está su centro de gravedad?</strong> y <strong>¿tienen capacidad el equipo y los aparejos?</strong></p>\n        <p><strong>El peso.</strong> Se obtiene de la placa del equipo, la ficha técnica, la guía de despacho o un cálculo (volumen por densidad del material). Nunca \"a ojo\". Al peso de la carga se suman el peso de los aparejos (eslingas, grilletes, balancín) y del gancho, porque también los levanta la grúa. Una carga adherida al piso, con producto adentro o con hielo pesa más de lo que parece.</p>\n        <p><strong>El centro de gravedad</strong> es el punto donde se concentra el peso. Para que la carga suba nivelada, el gancho debe quedar <strong>directamente encima</strong> del centro de gravedad. Si no, la carga se inclina, gira o se desliza al despegar. En equipos como motores, bombas o tableros, el centro de gravedad no siempre está en el centro geométrico: los fabricantes suelen marcar los puntos de izaje.</p>\n        <p><strong>La capacidad del equipo.</strong> La capacidad de una grúa depende del <strong>radio</strong> (distancia horizontal entre el centro de giro y la carga), de la <strong>longitud y el ángulo de la pluma</strong>, de los <strong>estabilizadores</strong> y del terreno. Se consulta en la <strong>tabla de carga</strong> del fabricante. Una grúa que levanta 20 toneladas cerca de su base puede levantar mucho menos con la pluma extendida.</p>\n        <p><strong>La capacidad de los aparejos</strong> depende de su configuración y del ángulo de las eslingas (módulos siguientes).</p>\n        <p><strong>Izajes críticos.</strong> Muchas empresas exigen un plan de izaje escrito, calculado y firmado cuando, por ejemplo:</p>\n        <ul>\n          <li>la carga supera un porcentaje alto de la capacidad del equipo (un criterio frecuente es el 75 %);</li>\n          <li>se usan dos o más grúas a la vez;</li>\n          <li>la maniobra pasa sobre instalaciones en operación, sobre personas o cerca de líneas eléctricas;</li>\n          <li>la carga es de forma irregular, de alto valor o peligrosa.</li>\n        </ul>\n        <p><strong>El terreno y el entorno:</strong> suelo firme y nivelado, sin rellenos ni tuberías enterradas bajo los estabilizadores; espacio para el giro de la pluma; distancia a líneas eléctricas; viento dentro del límite del fabricante.</p>\n      ",
        "keyPoints": [
          "Peso real de la carga más aparejos; nunca \"a ojo\".",
          "El gancho va directamente sobre el centro de gravedad para que la carga suba nivelada.",
          "La capacidad de la grúa depende del radio y la pluma: se consulta la tabla de carga; los izajes críticos llevan plan escrito."
        ],
        "practice": {
          "q": "Una carga de 1.200 kg se levanta con aparejos que pesan 50 kg. ¿Qué peso se considera para la maniobra?",
          "options": [
            "1.200 kg",
            "50 kg",
            "1.250 kg"
          ]
        }
      },
      {
        "title": "Eslingas: tipos, configuraciones y capacidad",
        "content": "\n        <p><strong>Tipos de eslingas:</strong></p>\n        <ul>\n          <li><strong>Sintéticas de banda plana</strong> y <strong>redondas</strong> (poliéster, nailon): livianas, flexibles y no dañan las superficies, pero se cortan con bordes filosos y se dañan con calor y químicos.</li>\n          <li><strong>De cable de acero</strong>: resistentes a la abrasión y al calor moderado, pero se dañan si se doblan en radios pequeños.</li>\n          <li><strong>De cadena de acero aleado</strong> (grados 80 o 100): muy resistentes y aptas para altas temperaturas y uso rudo. Nunca se usan cadenas comunes o de grado no certificado para izar.</li>\n        </ul>\n        <p><strong>La etiqueta.</strong> Toda eslinga debe tener una etiqueta o placa legible con su fabricante, material y <strong>carga límite de trabajo</strong> (en inglés, <em>WLL</em>) para cada configuración. <strong>Una eslinga sin etiqueta no se usa.</strong></p>\n        <p><strong>Configuraciones básicas:</strong></p>\n        <ul>\n          <li><strong>Vertical</strong>: una sola rama recta entre el gancho y la carga. Capacidad de referencia de la etiqueta.</li>\n          <li><strong>Ahorcado</strong> (en inglés, <em>choker</em>): la eslinga rodea la carga y pasa por su propio ojo. Sujeta bien cargas largas, pero <strong>reduce la capacidad</strong> de la eslinga; la etiqueta indica cuánto.</li>\n          <li><strong>Canasta</strong>: la eslinga pasa por debajo de la carga y sus dos extremos van al gancho. Si las ramas están verticales, la capacidad puede ser hasta el doble de la vertical; si hay ángulo, se reduce.</li>\n        </ul>\n        <p><strong>Varias ramas.</strong> Con eslingas de dos, tres o cuatro ramas, no se debe suponer que todas las ramas reparten la carga por igual: en cargas rígidas, muchas veces dos ramas soportan casi todo el peso.</p>\n        <p><strong>Protección de bordes.</strong> Siempre que una eslinga pase por un borde, una esquina o una superficie áspera, se usan <strong>cantoneras</strong> o protectores. Un borde filoso puede cortar una eslinga sintética aunque su capacidad sea muy superior a la carga, como en el caso del curso.</p>\n        <p><strong>Nunca:</strong> anudar una eslinga para acortarla, retorcerla, usarla sobre su propio ojo de forma distinta a la indicada, ni arrastrarla por el piso.</p>\n      ",
        "keyPoints": [
          "Eslingas sintéticas, de cable o de cadena de acero aleado; sin etiqueta legible no se usan.",
          "Configuraciones vertical, ahorcado (reduce capacidad) y canasta; la etiqueta da la capacidad de cada una.",
          "Cantoneras en todos los bordes; nunca anudar, retorcer ni arrastrar las eslingas."
        ],
        "practice": {
          "q": "¿Qué indica la etiqueta de una eslinga?",
          "options": [
            "Su carga límite de trabajo para cada configuración",
            "Solo la fecha de compra",
            "El color recomendado para cada carga"
          ]
        }
      },
      {
        "title": "El ángulo de la eslinga: por qué multiplica la tensión",
        "content": "\n        <p>Cuando una eslinga de dos ramas no cuelga vertical sino formando un ángulo, <strong>cada rama soporta más que la mitad del peso</strong>. Cuanto más abiertas estén las ramas (más cerca de la horizontal), mayor es la tensión.</p>\n        <p><strong>Factor de tensión según el ángulo de la rama con la horizontal:</strong></p>\n        <ul>\n          <li><strong>90°</strong> (rama vertical): factor 1,0. Cada rama soporta la mitad del peso.</li>\n          <li><strong>60°</strong>: factor de aproximadamente 1,15.</li>\n          <li><strong>45°</strong>: factor de aproximadamente 1,41.</li>\n          <li><strong>30°</strong>: factor de 2,0. Cada rama soporta <strong>el peso total de la carga</strong>, es decir, el doble de lo que soportaría vertical.</li>\n        </ul>\n        <p><strong>Cómo se calcula la tensión en cada rama</strong> (para dos ramas que reparten la carga por igual):</p>\n        <p>Tensión por rama = (peso de la carga ÷ número de ramas) × factor del ángulo</p>\n        <p><strong>Ejemplo.</strong> El motor del caso pesa 2.000 kg y se levanta con dos ramas a 30° de la horizontal: (2.000 ÷ 2) × 2,0 = <strong>2.000 kg en cada rama</strong>. Si cada eslinga tenía una capacidad vertical de 1.500 kg, ambas estaban sobrecargadas, además del borde sin protección. Con las ramas a 60°: (2.000 ÷ 2) × 1,15 = <strong>1.150 kg por rama</strong>, dentro de la capacidad.</p>\n        <p><strong>Reglas prácticas:</strong></p>\n        <ul>\n          <li>Preferir ángulos de <strong>60° o más</strong> con la horizontal.</li>\n          <li><strong>No usar ángulos menores de 30°</strong> con la horizontal, salvo que el fabricante o una persona calificada lo indiquen (criterio de la norma ASME B30.9).</li>\n          <li>Para abrir menos las ramas, usar eslingas más largas o una <strong>viga separadora o balancín</strong>, que mantiene las ramas verticales.</li>\n          <li>Recordar que el ángulo también genera una fuerza horizontal que tiende a juntar los puntos de izaje y puede deformar la carga o los cáncamos.</li>\n        </ul>\n        <p><strong>Cómo estimar el ángulo en campo:</strong> si la distancia horizontal entre los puntos de izaje es igual al largo de cada rama, el ángulo es de unos 60°. Si las ramas se ven \"muy abiertas\", probablemente están por debajo de 45°.</p>\n      ",
        "keyPoints": [
          "Factor de tensión: 1,0 vertical; 1,15 a 60°; 1,41 a 45°; 2,0 a 30° con la horizontal.",
          "Tensión por rama = (peso ÷ número de ramas) × factor del ángulo.",
          "Preferir 60° o más; no usar menos de 30° salvo indicación calificada; usar balancín para mantener ramas verticales."
        ],
        "practice": {
          "q": "Una carga de 1.000 kg se levanta con dos ramas a 60° de la horizontal. ¿Cuál es la tensión aproximada en cada rama?",
          "options": [
            "500 kg",
            "Unos 575 kg",
            "2.000 kg"
          ]
        }
      },
      {
        "title": "Inspección de eslingas y criterios de rechazo",
        "content": "\n        <p><strong>Dos niveles de inspección:</strong></p>\n        <ul>\n          <li><strong>Antes de cada uso</strong>, por el aparejador: revisión visual y al tacto de toda la eslinga y sus accesorios.</li>\n          <li><strong>Periódica</strong>, por una persona competente, con registro escrito y una frecuencia definida según el uso (por ejemplo, mensual o trimestral). Muchas empresas marcan las eslingas inspeccionadas con un color del periodo.</li>\n        </ul>\n        <p><strong>Se retiran de servicio las eslingas sintéticas con:</strong></p>\n        <ul>\n          <li>etiqueta ilegible o ausente;</li>\n          <li>cortes, desgarros, perforaciones o desgaste en la banda o en los ojos;</li>\n          <li>costuras rotas o sueltas;</li>\n          <li>quemaduras, partes fundidas o endurecidas por calor o chispas de soldadura;</li>\n          <li>daño químico: decoloración, zonas rígidas o quebradizas;</li>\n          <li>en las eslingas redondas, el núcleo de hilos expuesto a través de la funda;</li>\n          <li>nudos;</li>\n          <li>accesorios metálicos deformados, corroídos o agrietados.</li>\n        </ul>\n        <p><strong>Eslingas de cable de acero:</strong> alambres rotos (la norma fija cuántos se toleran por tramo), aplastamientos, dobleces, \"jaula de pájaro\" (los cordones se abren), corrosión, daño por calor, y terminales deformados o con fisuras.</p>\n        <p><strong>Eslingas de cadena:</strong> eslabones estirados, doblados, con muescas, desgaste visible o grietas; ganchos con la garganta abierta o deformados; ausencia de la placa de identificación.</p>\n        <p><strong>\"Todavía sirve para una carga liviana\" no existe.</strong> Una eslinga dañada no se \"degrada\" a una capacidad menor: se retira. El daño hace imposible saber cuánto resiste.</p>\n        <p><strong>Qué hacer con la eslinga rechazada:</strong> marcarla como fuera de servicio y, si no tiene reparación posible, <strong>inutilizarla</strong> (cortarla) para que nadie la vuelva a usar. Las reparaciones solo las hace el fabricante o una entidad calificada, con nueva prueba y etiqueta.</p>\n        <p><strong>Almacenamiento:</strong> colgadas, en un lugar seco, ventilado y protegido de la luz solar directa (la radiación ultravioleta degrada las sintéticas), de los químicos y de las chispas.</p>\n      ",
        "keyPoints": [
          "Inspección antes de cada uso y periódica documentada por una persona competente.",
          "Se rechazan eslingas sin etiqueta, con cortes, costuras rotas, quemaduras, daño químico, nudos o núcleo expuesto.",
          "Una eslinga dañada no se usa \"para cargas livianas\": se retira e inutiliza."
        ],
        "practice": {
          "q": "Una eslinga sintética tiene una costura rota. ¿Qué se hace?",
          "options": [
            "Se usa solo para cargas livianas",
            "Se cose de nuevo en el taller",
            "Se retira de servicio e inutiliza"
          ]
        }
      },
      {
        "title": "Grilletes, cáncamos, ganchos y puntos de izaje",
        "content": "\n        <p><strong>Grilletes.</strong> Conectan eslingas entre sí, a la carga o al gancho.</p>\n        <ul>\n          <li>Deben tener la <strong>capacidad marcada</strong> (en toneladas) y el fabricante.</li>\n          <li>El <strong>pasador</strong> debe ser el original del grillete, completamente roscado o asegurado con su tuerca y chaveta. Nunca se reemplaza por un perno común.</li>\n          <li>La carga se aplica en línea con el eje del grillete. Las cargas laterales reducen su capacidad.</li>\n          <li>En grilletes de tipo lira (ancla), varias ramas se colocan en el arco, no en el pasador.</li>\n        </ul>\n        <p><strong>Cáncamos (ojos de izaje roscados):</strong></p>\n        <ul>\n          <li>Se enroscan completamente, hasta que el hombro asiente sobre la superficie.</li>\n          <li>Los cáncamos fijos comunes se cargan en el <strong>plano del ojo</strong>; una carga lateral los dobla o los arranca. Para tiros en ángulo se usan <strong>cáncamos giratorios</strong> diseñados para ello.</li>\n          <li>Se usan los puntos de izaje del fabricante del equipo, no cualquier perforación o soporte.</li>\n        </ul>\n        <p><strong>Ganchos:</strong></p>\n        <ul>\n          <li>Con <strong>pestillo de seguridad</strong> funcionando, que cierre la garganta.</li>\n          <li>Se retiran si tienen la garganta abierta, deformación, desgaste en el asiento, grietas o giro trabado.</li>\n          <li>La carga se apoya en el asiento del gancho, nunca en la punta.</li>\n        </ul>\n        <p><strong>Puntos de izaje de los equipos.</strong> Muchos equipos traen orejas o placas de izaje calculadas por el fabricante. Se usan esas y en la cantidad indicada. Tuberías, manijas, barandas, ejes de motores o soportes de instrumentos <strong>no</strong> son puntos de izaje.</p>\n        <p><strong>Dispositivos bajo el gancho:</strong> vigas separadoras, balancines, pinzas para láminas, imanes de izaje y ganchos para tambores tienen su propia capacidad marcada y se inspeccionan igual que los demás aparejos.</p>\n        <p><strong>Lo que se arma, se mantiene compatible:</strong> no se mezclan accesorios de grados o fabricantes distintos sin verificar que la capacidad del conjunto quede definida por el elemento más débil.</p>\n      ",
        "keyPoints": [
          "Grilletes con capacidad marcada y pasador original asegurado; carga en línea con su eje.",
          "Cáncamos enroscados hasta el hombro y cargados en el plano del ojo; para ángulos, cáncamos giratorios.",
          "Ganchos con pestillo y carga en el asiento; solo se usan los puntos de izaje del fabricante."
        ],
        "practice": {
          "q": "¿Cómo se carga un cáncamo fijo común?",
          "options": [
            "En el plano del ojo, enroscado hasta el hombro",
            "De lado, para que la eslinga quede más abierta",
            "Enroscado a medias para retirarlo más fácil"
          ]
        }
      },
      {
        "title": "Ejecución segura de la maniobra",
        "content": "\n        <p><strong>Antes de levantar:</strong></p>\n        <ul>\n          <li>Reunión previa corta con todos los participantes: peso, plan, roles, señales, recorrido y punto de descarga.</li>\n          <li><strong>Área delimitada</strong> con cintas o barreras, y personal no esencial fuera.</li>\n          <li>Recorrido libre de obstáculos y lejos de líneas eléctricas.</li>\n          <li><strong>Vientos o cuerdas guía</strong> amarrados a la carga para controlar el giro sin acercarse.</li>\n        </ul>\n        <p><strong>Señales.</strong> Hay <strong>un solo señalero</strong>, visible para el operador, que usa señales de mano estandarizadas o radio con un canal exclusivo. Las señales básicas son izar, bajar, mover la pluma, girar, detener y <strong>parada de emergencia</strong>. La señal de parada de emergencia la puede dar <strong>cualquier persona</strong> que vea un peligro, y el operador la obedece siempre.</p>\n        <p><strong>Prueba de levante.</strong> Se levanta la carga apenas unos centímetros del piso y se detiene para verificar:</p>\n        <ul>\n          <li>que la carga quede nivelada y estable (si se inclina, el gancho no está sobre el centro de gravedad);</li>\n          <li>que las eslingas y accesorios estén bien asentados y sin torceduras;</li>\n          <li>que los frenos de la grúa sostengan;</li>\n          <li>que el equipo esté estable.</li>\n        </ul>\n        <p>Si algo no está bien, se baja y se corrige antes de continuar.</p>\n        <p><strong>Durante el movimiento:</strong></p>\n        <ul>\n          <li>Movimientos suaves, sin arranques ni frenazos bruscos que hagan oscilar la carga.</li>\n          <li><strong>Nadie bajo la carga ni en su recorrido.</strong> Los vientos permiten guiarla desde una distancia segura.</li>\n          <li>No se acompaña la carga con las manos; si gira, se controla con los vientos o se detiene la maniobra.</li>\n          <li>La carga no se deja suspendida sin vigilancia.</li>\n          <li>Nunca se transportan personas sobre la carga o en el gancho.</li>\n          <li>Se suspende la maniobra si el viento supera el límite del fabricante, si llueve fuerte o si cambian las condiciones.</li>\n        </ul>\n      ",
        "keyPoints": [
          "Reunión previa, área delimitada, recorrido libre y vientos amarrados a la carga.",
          "Un solo señalero; la parada de emergencia la puede dar cualquiera y siempre se obedece.",
          "Prueba de levante a pocos centímetros; nadie bajo la carga y movimientos suaves."
        ],
        "practice": {
          "q": "Durante la prueba de levante, la carga se inclina hacia un lado. ¿Qué indica?",
          "options": [
            "Que la grúa está sobrecargada",
            "Que el gancho no está sobre el centro de gravedad",
            "Que el viento está muy fuerte"
          ]
        }
      },
      {
        "title": "Bajar la carga, retirar aparejos y situaciones de emergencia",
        "content": "\n        <p><strong>Bajar y asentar la carga:</strong></p>\n        <ul>\n          <li>Preparar el lugar de descarga: piso firme y nivelado, y <strong>calzos o maderos</strong> sobre los que se asienta la carga, para poder retirar las eslingas sin aplastarlas ni meter las manos debajo.</li>\n          <li>Bajar despacio y asentar la carga verificando que quede estable antes de aflojar las eslingas.</li>\n          <li>Mantener manos y pies fuera de los puntos donde la carga se apoya.</li>\n        </ul>\n        <p><strong>Retirar los aparejos:</strong></p>\n        <ul>\n          <li>Aflojar las eslingas solo cuando la carga esté asentada y estable.</li>\n          <li>Retirarlas a mano. <strong>Nunca se hala una eslinga atrapada bajo la carga con la grúa</strong>: puede volcar la carga o romper la eslinga, que sale como un látigo.</li>\n          <li>Inspeccionar los aparejos después de usarlos y guardarlos colgados y protegidos.</li>\n        </ul>\n        <p><strong>Situaciones de emergencia:</strong></p>\n        <ul>\n          <li><strong>La carga empieza a girar o a oscilar</strong> y se acerca a una persona: señal de parada, alejar a la persona y controlar con los vientos; nunca detenerla con el cuerpo.</li>\n          <li><strong>Un aparejo cede</strong> o se escucha un ruido de falla: parada inmediata, alejar a todos y, si es posible, bajar la carga despacio a un lugar seguro.</li>\n          <li><strong>Falla de energía o del equipo</strong> con la carga suspendida: acordonar el área bajo la carga y seguir el procedimiento del fabricante para bajarla.</li>\n          <li><strong>Contacto de la grúa con una línea eléctrica</strong>: el operador permanece en la cabina si no hay incendio; nadie toca la grúa ni la carga; se aleja a todos y se pide el corte de la energía.</li>\n          <li><strong>Inestabilidad de la grúa</strong> (estabilizadores que se hunden, alarma de sobrecarga): detener, bajar la carga con cuidado y revisar.</li>\n        </ul>\n        <p><strong>Reportar.</strong> Todo incidente de izaje, aunque nadie salga herido (una eslinga que se corta, una carga que se golpea, un gancho que se abre), se reporta e investiga. Las maniobras que casi terminan en accidente son las mejores lecciones para la siguiente.</p>\n      ",
        "keyPoints": [
          "Asentar la carga sobre calzos para retirar las eslingas sin aplastarlas ni meter las manos debajo.",
          "Nunca halar con la grúa una eslinga atrapada bajo la carga.",
          "Carga que gira: parada y vientos, nunca el cuerpo; en contacto con líneas, nadie toca la grúa ni la carga."
        ],
        "practice": {
          "q": "Una eslinga quedó atrapada bajo la carga ya asentada. ¿Qué se hace?",
          "options": [
            "Se hala con la grúa para sacarla",
            "Se corta con una pulidora",
            "Se levanta la carga un poco y se retira a mano, con la carga controlada"
          ]
        }
      }
    ],
    "scenarios": [
      {
        "scenario": "Vas a izar un motor de 2 toneladas. La eslinga sintética pasa por un borde metálico sin protección y las ramas quedan muy abiertas. El operador dice que \"así siempre se ha hecho\".",
        "options": [
          "Seguimos: la eslinga tiene más capacidad que el motor.",
          "Detengo, pongo cantoneras en los bordes, calculo la tensión con el ángulo real y uso eslingas más largas o un balancín para que las ramas queden a 60° o más.",
          "Pongo un trapo en el borde y seguimos."
        ]
      },
      {
        "scenario": "Durante el izaje, la carga empieza a girar y se acerca a un trabajador que está debajo, mirando la maniobra de cerca.",
        "options": [
          "Doy la señal de parada, alejo al trabajador del recorrido y controlamos el giro con los vientos.",
          "Le grito al trabajador que detenga la carga con las manos.",
          "Le pido al operador que suba más rápido para pasar por encima del trabajador."
        ]
      },
      {
        "scenario": "Una eslinga tiene un corte pequeño en la funda. El supervisor dice que \"el corte es chiquito, todavía sirve para una carga liviana\".",
        "options": [
          "La uso para la carga liviana de hoy.",
          "La retiro de servicio, la marco y la inutilizo, y uso una eslinga en buen estado.",
          "Le pongo cinta en el corte y la uso."
        ]
      },
      {
        "scenario": "Debes levantar una bomba de 800 kg. No tiene orejas de izaje visibles y un compañero propone amarrar la eslinga a la tubería de descarga de la bomba.",
        "options": [
          "Amarro a la tubería, que se ve fuerte.",
          "Uso dos eslingas en canasta por debajo de la base sin revisar el centro de gravedad.",
          "Consulto el manual para ubicar los puntos de izaje del fabricante y el centro de gravedad, y hago la prueba de levante."
        ]
      },
      {
        "scenario": "La grúa móvil está posicionada y la maniobra pasará cerca de una línea eléctrica aérea. Empieza a soplar un viento fuerte y la carga es una lámina grande.",
        "options": [
          "Seguimos rápido antes de que el viento empeore.",
          "Seguimos con dos personas sujetando la lámina con las manos.",
          "Suspendemos la maniobra hasta que el viento esté dentro del límite del fabricante y revisamos las distancias a la línea."
        ]
      }
    ],
    "exam": [
      {
        "q": "¿Cuál es la función del aparejador en una maniobra de izaje?",
        "options": [
          "Seleccionar, inspeccionar y conectar los aparejos a la carga.",
          "Operar la grúa o el polipasto y responder por su tabla de carga.",
          "Firmar la factura de la grúa alquilada para la maniobra."
        ]
      },
      {
        "q": "¿Por qué la capacidad de una grúa móvil cambia durante una maniobra?",
        "options": [
          "Porque la grúa se cansa con el uso continuo.",
          "Porque depende del radio y de la longitud y ángulo de la pluma.",
          "Porque el peso de la carga cambia mientras se mueve."
        ]
      },
      {
        "q": "¿Dónde debe quedar el gancho para que la carga suba nivelada?",
        "options": [
          "En el extremo más pesado de la carga.",
          "A un lado de la carga para que no se golpee con ella.",
          "Directamente encima del centro de gravedad."
        ]
      },
      {
        "q": "¿Qué se hace con una eslinga cuya etiqueta es ilegible?",
        "options": [
          "Se retira de servicio: sin etiqueta no se conoce su capacidad.",
          "Se usa si se ve en buen estado.",
          "Se usa con la mitad de la carga normal que se levanta con eslingas parecidas en la planta."
        ]
      },
      {
        "q": "¿Qué efecto tiene la configuración de ahorcado sobre la capacidad de una eslinga?",
        "options": [
          "La duplica, porque la eslinga abraza la carga.",
          "La reduce; la etiqueta indica cuánto.",
          "No la cambia."
        ]
      },
      {
        "q": "Con dos ramas a 30° de la horizontal, ¿cuánto soporta cada rama?",
        "options": [
          "La cuarta parte del peso de la carga.",
          "La mitad del peso de la carga, igual que con las ramas verticales.",
          "El peso total de la carga."
        ]
      },
      {
        "q": "Una carga de 3.000 kg se levanta con dos ramas a 45° de la horizontal. ¿Cuál es la tensión aproximada en cada rama?",
        "options": [
          "Unos 2.120 kg.",
          "1.500 kg, porque la carga se reparte entre las dos ramas de forma igual.",
          "3.000 kg."
        ]
      },
      {
        "q": "Según ASME B30.9, ¿qué ángulos de eslinga con la horizontal no se deben usar salvo indicación calificada?",
        "options": [
          "Mayores de 60°.",
          "Menores de 30°.",
          "Exactamente 90°."
        ]
      },
      {
        "q": "¿Para qué sirve una viga separadora o balancín?",
        "options": [
          "Para aumentar el peso de la carga y estabilizarla.",
          "Para reemplazar las eslingas en cargas livianas que no requieren aparejos adicionales.",
          "Para mantener las ramas de la eslinga verticales y reducir la tensión."
        ]
      },
      {
        "q": "¿Cuál de estos daños obliga a retirar una eslinga redonda sintética?",
        "options": [
          "Que se vea el núcleo de hilos a través de la funda.",
          "Que esté un poco sucia de polvo o de barro seco del patio.",
          "Que tenga la etiqueta legible y en buen estado."
        ]
      },
      {
        "q": "¿Dónde se almacenan las eslingas sintéticas?",
        "options": [
          "En el piso del patio, al sol, para que se sequen después de usarlas.",
          "Colgadas, en un lugar seco, ventilado y protegido del sol y los químicos.",
          "Junto a los tanques de ácido, para tenerlas a mano."
        ]
      },
      {
        "q": "¿Qué se hace con el pasador perdido de un grillete?",
        "options": [
          "Se reemplaza por un perno común del mismo diámetro.",
          "Se amarra el grillete con alambre.",
          "Se retira el grillete o se usa su pasador original, asegurado."
        ]
      },
      {
        "q": "¿Cuál de estos elementos SÍ es un punto de izaje válido en una bomba?",
        "options": [
          "Las orejas de izaje indicadas por el fabricante.",
          "La tubería de descarga, si se ve robusta y bien soldada.",
          "El eje del motor, porque soporta todo el peso del rotor."
        ]
      },
      {
        "q": "¿Para qué se hace la prueba de levante a pocos centímetros del piso?",
        "options": [
          "Para medir el peso de la carga con la grúa.",
          "Para verificar que la carga quede nivelada, los aparejos bien asentados y los frenos sostengan.",
          "Para que la carga se seque antes de moverla."
        ]
      },
      {
        "q": "Durante una maniobra, ¿quién puede dar la señal de parada de emergencia?",
        "options": [
          "Solo el supervisor de la maniobra, que es quien la autorizó.",
          "Solo el señalero designado, porque es el único que da señales al operador.",
          "Cualquier persona que vea un peligro, y el operador siempre la obedece."
        ]
      },
      {
        "q": "¿Por qué se asienta la carga sobre calzos o maderos?",
        "options": [
          "Para retirar las eslingas sin aplastarlas ni meter las manos debajo.",
          "Para que la carga quede más alta y sea más fácil de ver desde la cabina.",
          "Para que el piso no se ensucie."
        ]
      }
    ],
    "workshops": [],
    "project": null
  },
  {
    "id": "almacenamiento-apilamiento-cargas",
    "title": "Seguridad en Almacenamiento y Apilamiento de Cargas",
    "hours": 1.5,
    "category": "prevencion_sst",
    "regulation": "Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979; referencias: ANSI MH16.1, EN 15635 y NFPA 13",
    "legalNotice": "Formación teórica en almacenamiento seguro. La operación de montacargas requiere entrenamiento y autorización específicos de operador, que este curso no reemplaza.",
    "summary": "Cómo organizar una bodega segura, usar estanterías dentro de su capacidad, inspeccionarlas y actuar ante daños, apilar en piso sin que la pila se caiga, convivir con montacargas, manipular cargas a mano sin lesionarse y almacenar productos especiales.",
    "fieldCase": "Un montacargas golpeó el pie derecho de una estantería y lo dobló. Nadie lo reportó y se siguió cargando la estructura. Semanas después, al colocar otra estiba en el nivel superior, el pie cedió y la estantería colapsó sobre el pasillo.",
    "checklist": [
      "Cada estantería tiene su placa de capacidad visible y la carga no la supera.",
      "Los pies y largueros están rectos, completos, con sus pasadores de seguridad y anclados al piso.",
      "Reporto de inmediato cualquier golpe a una estantería y no la cargo hasta que la revisen.",
      "Las estibas están en buen estado y la carga no sobresale ni está inestable.",
      "Las pilas en piso respetan la altura máxima, están trabadas y sobre piso nivelado.",
      "Los pasillos peatonales están señalizados y libres, separados de la circulación de montacargas.",
      "Hay despeje bajo los rociadores y frente a extintores, tableros y salidas.",
      "Nunca subo por las estanterías ni me paro sobre las estibas."
    ],
    "failureAnalysis": "Falla raíz: el daño estructural no se reportó ni se retiró la carga, y no había inspecciones periódicas. La estantería tampoco tenía protectores en los pies del lado del pasillo de montacargas.",
    "onSiteClosure": "Práctica en su empresa: recorrer la bodega con la lista de inspección de estanterías de la empresa y marcar los daños como verde, ámbar o rojo; verificar placas de capacidad, pasadores y anclajes; revisar la altura y estabilidad de las pilas en piso; y comprobar la señalización de pasillos y el despeje bajo los rociadores.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    "modules": [
      {
        "title": "Riesgos de una bodega y principios del almacenamiento seguro",
        "content": "\n        <p>Una bodega parece un lugar tranquilo, pero concentra peso, altura y tráfico. Los accidentes más graves son <strong>colapsos de estanterías</strong>, <strong>caída de materiales desde los niveles altos</strong>, <strong>derrumbe de pilas</strong>, <strong>atropellamientos por montacargas</strong> y <strong>lesiones de espalda</strong> por manipulación manual.</p>\n        <p><strong>Principios del almacenamiento seguro:</strong></p>\n        <ul>\n          <li><strong>Lo pesado abajo, lo liviano arriba.</strong> Baja el centro de gravedad de la estructura y reduce el riesgo si algo cae.</li>\n          <li><strong>Lo que más se usa, a la altura de trabajo</strong> (entre las rodillas y los hombros), para reducir esfuerzos y alcances.</li>\n          <li><strong>Cada cosa en su lugar asignado</strong>, con ubicaciones identificadas. El material \"temporal\" en los pasillos termina siendo permanente y obstruye.</li>\n          <li><strong>Nunca superar la capacidad</strong> de estanterías, estibas y pisos.</li>\n          <li><strong>Pasillos libres y señalizados</strong>, con anchos suficientes para personas y equipos.</li>\n          <li><strong>Separar productos incompatibles</strong>: químicos que reaccionan entre sí, inflamables lejos de fuentes de calor.</li>\n          <li><strong>Orden y aseo permanentes</strong>: zunchos, plásticos y estibas rotas fuera del piso.</li>\n        </ul>\n        <p><strong>Marco normativo.</strong> El <strong>Decreto 1072 de 2015</strong> y la <strong>Resolución 0312 de 2019</strong> obligan a identificar estos peligros en la matriz de riesgos y a controlarlos con procedimientos, inspecciones y capacitación. La <strong>Resolución 2400 de 1979</strong> contiene disposiciones sobre el manejo, transporte y almacenamiento de materiales, y sobre el levantamiento manual de cargas. Como referencias técnicas se usan la norma <strong>ANSI MH16.1</strong> (diseño y uso de estanterías industriales de acero), la <strong>EN 15635</strong> (uso, inspección y mantenimiento de estanterías) y la <strong>NFPA 13</strong> (rociadores contra incendio).</p>\n        <p><strong>Su papel.</strong> La mayoría de los colapsos empiezan con algo pequeño que alguien vio y no reportó: un golpe, un pasador faltante, una estiba rota, una carga mal puesta. Cada trabajador de bodega es un inspector.</p>\n      ",
        "keyPoints": [
          "Riesgos: colapso de estanterías, caída de materiales, derrumbe de pilas, atropellamiento y lesiones de espalda.",
          "Lo pesado abajo, lo de uso frecuente a la altura de trabajo, nunca superar capacidades y pasillos libres.",
          "Cada trabajador reporta golpes, faltantes y cargas mal puestas: los colapsos empiezan con algo pequeño."
        ],
        "practice": {
          "q": "¿Dónde se ubican los materiales más pesados en una estantería?",
          "options": [
            "Donde haya espacio libre",
            "En los niveles bajos",
            "En los niveles más altos"
          ]
        }
      },
      {
        "title": "Estanterías: partes, tipos y capacidad",
        "content": "\n        <p><strong>Partes de una estantería de estibas (rack selectivo):</strong></p>\n        <ul>\n          <li><strong>Marcos o bastidores</strong>: dos <strong>pies o parales</strong> verticales unidos por <strong>diagonales y horizontales</strong>. Los pies llevan una <strong>placa base</strong> anclada al piso.</li>\n          <li><strong>Largueros o vigas</strong>: las barras horizontales donde se apoyan las estibas. Se enganchan a los pies con conectores y se aseguran con <strong>pasadores o seguros</strong> para que no se suelten con un golpe hacia arriba.</li>\n          <li><strong>Accesorios</strong>: mallas o tableros de nivel, travesaños de apoyo, topes traseros, protectores de pies y de esquinas, mallas anticaída en la parte posterior.</li>\n        </ul>\n        <p><strong>Tipos frecuentes:</strong> selectivo (acceso a cada estiba), de doble profundidad, drive-in (el montacargas entra en la estructura), dinámico (con rodillos), cantiléver (para tubos y perfiles largos) y estanterías de carga liviana para cajas y piezas manuales.</p>\n        <p><strong>La capacidad.</strong> Cada estantería tiene una capacidad de diseño calculada por el fabricante, que depende de la altura entre niveles, del largo de los largueros y del tipo de pie. Debe estar en una <strong>placa de capacidad visible</strong>, que indique:</p>\n        <ul>\n          <li>la carga máxima por nivel (o por par de largueros);</li>\n          <li>la carga máxima por módulo o marco;</li>\n          <li>la configuración de niveles con la que se calculó.</li>\n        </ul>\n        <p><strong>Lo que cambia la capacidad:</strong></p>\n        <ul>\n          <li><strong>Mover los niveles.</strong> Subir el primer larguero o quitar un nivel aumenta la distancia libre del pie y <strong>reduce</strong> la capacidad del marco. Cualquier cambio de configuración debe aprobarlo el fabricante o un ingeniero.</li>\n          <li><strong>Cargas mal distribuidas.</strong> La capacidad supone la carga repartida sobre los dos largueros. Una carga concentrada en el centro de un larguero o apoyada en uno solo lo sobrecarga.</li>\n          <li><strong>Daños</strong> en pies, largueros o diagonales (módulo siguiente).</li>\n          <li><strong>Mezclar piezas</strong> de distintos fabricantes o modelos.</li>\n        </ul>\n        <p><strong>Anclaje.</strong> Los pies se anclan al piso según el diseño. Una estantería sin anclar puede desplazarse con un golpe del montacargas o volcarse si se carga de un solo lado.</p>\n      ",
        "keyPoints": [
          "Partes: marcos (pies, diagonales, placa base anclada), largueros con pasadores de seguridad y accesorios.",
          "La placa de capacidad indica carga por nivel y por módulo; no se supera.",
          "Mover niveles, cargas concentradas, daños o piezas mezcladas reducen la capacidad."
        ],
        "practice": {
          "q": "¿Qué información debe tener la placa de capacidad de una estantería?",
          "options": [
            "El color de pintura de la estructura",
            "Solo el nombre del fabricante",
            "La carga máxima por nivel y por módulo"
          ]
        }
      },
      {
        "title": "Uso correcto de las estanterías",
        "content": "\n        <p><strong>Al cargar una estantería:</strong></p>\n        <ul>\n          <li>Verificar que el peso de la estiba (producto más estiba) no supere la capacidad del nivel.</li>\n          <li>Apoyar la estiba <strong>centrada y sobre los dos largueros</strong>, con el apoyo completo de sus bases. Las estibas deben sobresalir lo mismo por delante y por detrás, según el diseño.</li>\n          <li>Colocar la estiba en el sentido correcto: los patines deben quedar perpendiculares a los largueros para repartir la carga.</li>\n          <li>Usar solo <strong>estibas en buen estado</strong>: sin tablas rotas, clavos salidos ni bloques partidos.</li>\n          <li>Que la carga en la estiba esté <strong>estable, amarrada o con película</strong>, y sin sobresalir de los bordes.</li>\n          <li>Respetar el <strong>espacio libre</strong> entre la carga y el larguero superior para poder subirla y bajarla sin golpear.</li>\n        </ul>\n        <p><strong>Lo que nunca se hace:</strong></p>\n        <ul>\n          <li><strong>Subir por las estanterías</strong> o pararse sobre los largueros o las estibas. Para alcanzar niveles altos se usan escaleras móviles con plataforma o equipos diseñados para elevar personas.</li>\n          <li>Elevar personas en las uñas del montacargas o en una estiba.</li>\n          <li>Empujar una estiba contra la siguiente para \"hacer espacio\": puede caer por la parte posterior.</li>\n          <li>Colocar cargas en la parte superior de la estantería sin un nivel diseñado para ello.</li>\n          <li>Quitar pasadores, diagonales o protectores porque estorban.</li>\n          <li>Soldar, perforar o modificar la estructura.</li>\n        </ul>\n        <p><strong>Estanterías de carga manual</strong> (cajas, repuestos, insumos): las mismas reglas aplican a menor escala. Las cajas pesadas van en los niveles bajos; las estanterías altas se fijan a la pared o al piso para que no se vuelquen; y nunca se usa un nivel como escalón.</p>\n        <p><strong>Mallas y topes.</strong> Cuando hay un pasillo peatonal detrás de una estantería, se instalan mallas o topes posteriores para que una carga empujada no caiga sobre las personas.</p>\n      ",
        "keyPoints": [
          "Estiba centrada sobre los dos largueros, en buen estado, con carga estable y sin superar la capacidad.",
          "Nunca subir por las estanterías ni elevar personas en estibas o uñas del montacargas.",
          "No retirar pasadores ni modificar la estructura; mallas o topes donde hay paso detrás."
        ],
        "practice": {
          "q": "Se quiere subir el primer nivel de una estantería para que pase un equipo. ¿Qué se debe hacer?",
          "options": [
            "Consultar al fabricante o un ingeniero, porque reduce la capacidad",
            "Subirlo, porque no cambia nada",
            "Subirlo y poner más carga arriba para compensar"
          ]
        }
      },
      {
        "title": "Inspección de estanterías y qué hacer ante un daño",
        "content": "\n        <p><strong>Tres niveles de inspección</strong> (criterio de la norma EN 15635, usado también en Colombia como buena práctica):</p>\n        <ul>\n          <li><strong>Inmediata</strong>: cualquier trabajador que vea o cause un golpe lo reporta de inmediato. Golpear una estantería no es motivo de sanción; ocultarlo sí es grave.</li>\n          <li><strong>Periódica</strong>: una persona designada y entrenada recorre las estanterías con una lista de chequeo, con una frecuencia definida (por ejemplo, semanal o mensual) y registro escrito.</li>\n          <li><strong>Experta</strong>: una persona técnicamente competente, al menos una vez al año, evalúa toda la instalación.</li>\n        </ul>\n        <p><strong>Qué se revisa:</strong></p>\n        <ul>\n          <li>Pies doblados, abollados, torcidos o con fisuras, sobre todo en la parte baja, donde golpean los montacargas.</li>\n          <li>Diagonales y horizontales dobladas, sueltas o faltantes.</li>\n          <li>Largueros deformados, con flecha visible bajo carga o con conectores dañados.</li>\n          <li><strong>Pasadores de seguridad</strong> faltantes.</li>\n          <li>Placas base y anclajes sueltos o faltantes.</li>\n          <li>Estructura fuera de plomo (inclinada).</li>\n          <li>Placas de capacidad presentes y legibles.</li>\n          <li>Protectores de pies en su lugar.</li>\n        </ul>\n        <p><strong>Clasificación de daños por colores:</strong></p>\n        <ul>\n          <li><strong>Verde</strong>: daño dentro de los límites tolerables. Se registra y se vigila en la siguiente inspección.</li>\n          <li><strong>Ámbar</strong>: daño que requiere reparación. Se <strong>descarga</strong> la zona afectada tan pronto se pueda y <strong>no se vuelve a cargar</strong> hasta repararla, dentro de un plazo corto definido.</li>\n          <li><strong>Rojo</strong>: daño grave. Se <strong>descarga de inmediato</strong> la zona afectada, se aísla para que nadie la use y se repara antes de volver a usarla.</li>\n        </ul>\n        <p><strong>Ante un daño:</strong> detener la carga en esa zona, avisar al supervisor, señalizar y, según la gravedad, descargar. La descarga de una estructura dañada se hace con cuidado, desde los niveles altos, con supervisión y sin personas cerca. <strong>Nunca se endereza un pie a golpes ni con el montacargas</strong>: el acero ya perdió resistencia. Las piezas dañadas se reemplazan por repuestos del fabricante.</p>\n        <p><strong>Protección contra golpes:</strong> protectores de pies, defensas en los extremos de las filas, pasillos con ancho suficiente para maniobrar y operadores de montacargas entrenados.</p>\n      ",
        "keyPoints": [
          "Inspección inmediata por cualquiera, periódica documentada y experta anual.",
          "Verde se vigila; ámbar se descarga y no se recarga hasta reparar; rojo se descarga de inmediato y se aísla.",
          "Nunca enderezar un pie a golpes: se reemplaza con repuestos del fabricante."
        ],
        "practice": {
          "q": "Un pie de estantería tiene un daño clasificado como rojo. ¿Qué se hace?",
          "options": [
            "Enderezar el pie con el montacargas",
            "Descargar de inmediato la zona, aislarla y repararla antes de usarla",
            "Seguir usándola y revisarla en la próxima inspección"
          ]
        }
      },
      {
        "title": "Apilamiento en piso: altura, estabilidad y estibas",
        "content": "\n        <p>Cuando la carga se apila directamente en el piso (bultos, cajas, estibas una sobre otra, tubos, láminas), la estabilidad depende de cómo se arme la pila.</p>\n        <p><strong>Reglas del apilamiento estable:</strong></p>\n        <ul>\n          <li><strong>Piso firme, nivelado y limpio.</strong> Un piso inclinado, con huecos o mojado desestabiliza la pila desde la base.</li>\n          <li><strong>Altura máxima definida</strong> según la resistencia del empaque, el peso y la estabilidad. El fabricante del producto suele indicar cuántos niveles resiste la caja; si no, la empresa debe fijar el límite y señalizarlo. Una regla de buena práctica es que la altura no supere tres veces el lado menor de la base.</li>\n          <li><strong>Trabar las capas</strong> (cruzar la orientación de las cajas o bultos en cada nivel), como los ladrillos de un muro, para que la pila funcione como un bloque.</li>\n          <li><strong>Lo más pesado y resistente abajo.</strong> Nunca cajas pesadas sobre cajas débiles o dañadas.</li>\n          <li><strong>Pilas verticales</strong>, sin inclinación; si se inclina, se rehace.</li>\n          <li><strong>Bultos</strong> (sacos): en pilas trabadas, con un retroceso o escalonamiento hacia arriba si la pila es alta.</li>\n          <li><strong>Objetos cilíndricos</strong> (tubos, tambores acostados, bobinas): con <strong>cuñas o calzos</strong> en los extremos para que no rueden.</li>\n          <li><strong>Láminas y tableros</strong>: en soportes o caballetes diseñados, sin recostarlos sueltos contra la pared.</li>\n          <li><strong>Distancia</strong> a paredes, columnas y techos, y sin apoyar la pila contra muros que no fueron diseñados para recibir empuje.</li>\n        </ul>\n        <p><strong>Estibas apiladas.</strong> Al apilar estibas cargadas una sobre otra, la estiba de arriba debe asentar completa sobre la carga de abajo, y la carga de abajo debe resistir el peso. Las estibas vacías se apilan a una altura limitada, en zonas asignadas y lejos de los pasillos.</p>\n        <p><strong>Estado de las estibas:</strong> se retiran las que tienen tablas rotas o faltantes, bloques partidos, clavos salidos o están contaminadas. Una estiba rota puede ceder con la carga encima o al levantarla con el montacargas.</p>\n        <p><strong>Para tomar material de una pila:</strong> se retira desde arriba, nunca sacando cajas de la base o del centro. Si la pila es alta, se usa una escalera o un equipo adecuado, nunca trepando por la pila.</p>\n      ",
        "keyPoints": [
          "Piso firme y nivelado, altura máxima definida y señalizada, capas trabadas y lo pesado abajo.",
          "Cilindros con cuñas o calzos; láminas en soportes; distancia a paredes y techos.",
          "El material se toma desde arriba, nunca de la base; estibas rotas se retiran."
        ],
        "practice": {
          "q": "Hay tubos apilados en el piso. ¿Qué evita que rueden?",
          "options": [
            "Recostarlos contra la pared",
            "Apilarlos lo más alto posible",
            "Cuñas o calzos en los extremos de la pila"
          ]
        }
      },
      {
        "title": "Montacargas y peatones: convivir en la bodega",
        "content": "\n        <p>Los atropellamientos y aplastamientos con montacargas están entre los accidentes más graves en bodegas. El operador tiene <strong>visibilidad limitada</strong>, sobre todo con carga y en reversa, y el equipo pesa varias toneladas.</p>\n        <p><strong>Separar personas y equipos:</strong></p>\n        <ul>\n          <li><strong>Pasillos peatonales demarcados</strong> en el piso, separados de las vías de montacargas, y barreras físicas donde sea posible.</li>\n          <li><strong>Cruces señalizados</strong> en los puntos donde los peatones atraviesan las vías.</li>\n          <li><strong>Espejos convexos</strong> en esquinas e intersecciones ciegas.</li>\n          <li>Límites de velocidad, alarmas de reversa y luces de advertencia en los equipos.</li>\n          <li>Zonas de carga y descargue donde los peatones no entran mientras opera el equipo.</li>\n        </ul>\n        <p><strong>Reglas para los peatones:</strong></p>\n        <ul>\n          <li>Caminar por los pasillos peatonales y cruzar solo por los cruces.</li>\n          <li><strong>Hacer contacto visual</strong> con el operador antes de cruzar frente al equipo. Si el operador no lo ha visto, no cruce.</li>\n          <li>Nunca caminar ni pararse bajo las uñas elevadas o bajo una carga en altura.</li>\n          <li>Mantener distancia de un montacargas en maniobra; no acercarse por detrás.</li>\n          <li>No usar audífonos ni el celular mientras se camina por zonas de tráfico.</li>\n          <li>Usar ropa de alta visibilidad donde la empresa lo exija.</li>\n        </ul>\n        <p><strong>Reglas para los operadores</strong> (que deben estar entrenados y autorizados):</p>\n        <ul>\n          <li>Inspección preoperacional del equipo antes del turno.</li>\n          <li>Nunca superar la capacidad del equipo indicada en su placa, que depende de la altura de elevación y del centro de carga.</li>\n          <li>Transportar la carga baja, con el mástil inclinado hacia atrás, y en reversa si la carga tapa la visión.</li>\n          <li>Pitar en cruces y esquinas, y ceder el paso a los peatones.</li>\n          <li>No transportar personas en el equipo ni elevarlas en las uñas.</li>\n          <li>Al dejar el equipo: uñas abajo, freno puesto y llave retirada.</li>\n        </ul>\n      ",
        "keyPoints": [
          "Pasillos peatonales demarcados, cruces señalizados, espejos y zonas restringidas.",
          "El peatón hace contacto visual con el operador antes de cruzar y nunca pasa bajo las uñas elevadas.",
          "Operador entrenado: preoperacional, capacidad de placa, carga baja y no transportar ni elevar personas."
        ],
        "practice": {
          "q": "Antes de cruzar frente a un montacargas en movimiento, ¿qué hace el peatón?",
          "options": [
            "Hace contacto visual con el operador y cruza solo si lo vio",
            "Cruza rápido para no hacerlo esperar",
            "Levanta la mano y cruza sin mirar"
          ]
        }
      },
      {
        "title": "Manipulación manual de cargas",
        "content": "\n        <p>Las lesiones de espalda, hombros y manos por levantar, empujar y halar cargas son muy frecuentes en bodegas. No ocurren solo por una carga muy pesada: también por <strong>repetición</strong>, <strong>posturas forzadas</strong> (doblar o girar el tronco) y <strong>cargas lejos del cuerpo</strong>.</p>\n        <p><strong>Límites de peso.</strong> La <strong>Resolución 2400 de 1979</strong> establece límites para el levantamiento manual de cargas; como referencia, fija <strong>25 kg</strong> para hombres y <strong>12,5 kg</strong> para mujeres en carga compacta. Estos valores son un máximo, no una meta: la empresa debe evaluar las tareas (frecuencia, distancia, altura, agarre) y reducir el peso cuando las condiciones son desfavorables.</p>\n        <p><strong>Primero, evitar o reducir el levantamiento:</strong></p>\n        <ul>\n          <li>Usar ayudas mecánicas: carretillas, estibadores manuales, mesas elevadoras, polipastos.</li>\n          <li>Ubicar los materiales a la altura de trabajo para no levantarlos desde el piso.</li>\n          <li>Pedir empaques más pequeños o livianos.</li>\n          <li>Levantar entre dos personas cuando la carga es pesada o voluminosa, coordinando el movimiento.</li>\n        </ul>\n        <p><strong>Técnica de levantamiento:</strong></p>\n        <ol>\n          <li><strong>Planear</strong>: revisar el peso, el agarre, el recorrido y el lugar de descarga, y despejar el camino.</li>\n          <li><strong>Acercarse</strong> a la carga, con los pies separados al ancho de los hombros y uno un poco adelante.</li>\n          <li><strong>Doblar las rodillas</strong> y mantener la espalda recta; no doblar la cintura.</li>\n          <li><strong>Agarrar firme</strong> con toda la mano, usando guantes si hay bordes o astillas.</li>\n          <li><strong>Levantar con las piernas</strong>, suave y sin tirones, con la carga <strong>pegada al cuerpo</strong>.</li>\n          <li><strong>No girar el tronco</strong> con la carga: girar moviendo los pies.</li>\n          <li><strong>Bajar</strong> la carga con la misma técnica, doblando las rodillas.</li>\n        </ol>\n        <p><strong>Empujar es mejor que halar.</strong> Con carretillas y estibadores, empujar permite usar el peso del cuerpo y ver el camino.</p>\n        <p><strong>Señales de alarma:</strong> dolor o adormecimiento en espalda, hombros o manos que no desaparece con el descanso. Se reportan a tiempo para evaluar la tarea; una molestia ignorada puede convertirse en una lesión crónica.</p>\n      ",
        "keyPoints": [
          "Res. 2400 de 1979: referencia de 25 kg para hombres y 12,5 kg para mujeres en carga compacta, como máximo.",
          "Primero ayudas mecánicas, altura de trabajo y levantamiento entre dos.",
          "Rodillas dobladas, espalda recta, carga pegada al cuerpo y girar con los pies, no con el tronco."
        ],
        "practice": {
          "q": "Al levantar una caja del piso, ¿qué técnica es correcta?",
          "options": [
            "Levantar rápido con un tirón para usar el impulso",
            "Rodillas dobladas, espalda recta y caja pegada al cuerpo",
            "Piernas rectas y doblar la cintura"
          ]
        }
      },
      {
        "title": "Productos especiales, incendio y emergencias en bodega",
        "content": "\n        <p><strong>Productos químicos.</strong> Se almacenan según su ficha de datos de seguridad y su etiqueta del Sistema Globalmente Armonizado:</p>\n        <ul>\n          <li>Separando los <strong>incompatibles</strong> (por ejemplo, oxidantes lejos de inflamables, ácidos lejos de bases) según una matriz de compatibilidad.</li>\n          <li>Con <strong>contención de derrames</strong> (bandejas o diques) y kit de derrames cerca.</li>\n          <li>Los inflamables en gabinetes o áreas diseñadas, lejos de fuentes de calor y chispas.</li>\n          <li>Los líquidos en los niveles bajos, nunca por encima de la altura de los ojos.</li>\n        </ul>\n        <p><strong>Cilindros de gas</strong>: de pie, asegurados con cadena o soporte, con su capuchón cuando no están en uso, y separando oxígeno de gases combustibles.</p>\n        <p><strong>Prevención de incendios en bodega:</strong></p>\n        <ul>\n          <li>Respetar el <strong>despeje bajo los rociadores</strong>: la carga no puede quedar pegada al techo ni a las boquillas. La norma NFPA 13 exige normalmente un despeje mínimo de unos 45 cm (18 pulgadas) por debajo de los deflectores, salvo que el diseño indique otra distancia.</li>\n          <li>Mantener libres y señalizados los <strong>extintores, gabinetes contra incendio, tableros eléctricos, salidas y rutas de evacuación</strong>.</li>\n          <li>Controlar las fuentes de ignición: no fumar, revisar las instalaciones eléctricas, cargar las baterías de los montacargas en zonas ventiladas y designadas.</li>\n          <li>Retirar cartón, plástico y estibas de madera sobrantes, que son combustible.</li>\n        </ul>\n        <p><strong>Emergencias:</strong></p>\n        <ul>\n          <li><strong>Estantería golpeada que se inclina o cruje</strong>: alejar a todos de la zona y de los pasillos vecinos, acordonar y avisar al supervisor. No intentar descargarla con prisa ni sostenerla.</li>\n          <li><strong>Pila que se derrumba o carga que cae</strong>: alejar a las personas, atender a los lesionados solo si la zona es segura, y no retirar material de una pila parcialmente caída sin evaluar si puede seguir cayendo.</li>\n          <li><strong>Derrame químico</strong>: alejar a las personas, consultar la ficha de seguridad, usar el kit con los elementos de protección indicados y reportar.</li>\n          <li><strong>Incendio</strong>: dar la alarma, evacuar por las rutas señalizadas y usar el extintor solo si el fuego es incipiente y hay una salida a la espalda.</li>\n        </ul>\n        <p><strong>Reportar e investigar.</strong> Los golpes a estanterías, las cargas que caen y los casi atropellamientos se reportan aunque nadie salga herido: son las señales que permiten evitar el siguiente colapso.</p>\n      ",
        "keyPoints": [
          "Químicos separados por compatibilidad, con contención; cilindros de pie y asegurados.",
          "Despeje bajo rociadores (normalmente unos 45 cm según NFPA 13) y extintores, tableros y salidas libres.",
          "Estantería que se inclina: alejar a todos y acordonar; nunca sostenerla ni descargarla con prisa."
        ],
        "practice": {
          "q": "¿Por qué se deja despeje bajo los rociadores?",
          "options": [
            "Para que el techo no se ensucie",
            "Para que se vea mejor la bodega",
            "Para que el agua pueda distribuirse sobre el fuego"
          ]
        }
      }
    ],
    "scenarios": [
      {
        "scenario": "Ves que un montacargas golpeó el pie de una estantería y lo dejó visiblemente doblado. El operador dice que \"no pasa nada, eso aguanta\" y sigue cargando.",
        "options": [
          "Lo dejo así: el operador conoce el equipo.",
          "Pido detener la carga en esa zona, la señalizo, aviso al supervisor y se evalúa y descarga según la gravedad del daño.",
          "Enderezo el pie a golpes con un mazo."
        ]
      },
      {
        "scenario": "Un compañero necesita una caja del tercer nivel y empieza a subir por los largueros de la estantería para alcanzarla.",
        "options": [
          "Le sostengo la estantería para que no se mueva.",
          "Le paso una estiba para que se pare encima y alcance mejor.",
          "Lo detengo y usamos una escalera móvil con plataforma o el equipo adecuado."
        ]
      },
      {
        "scenario": "Hay una caja muy pesada en la parte superior de una pila en el piso, sobre cajas más livianas que se ven aplastadas. La pila empieza a inclinarse.",
        "options": [
          "Alejo a las personas, aviso y rehacemos la pila desde arriba, con lo pesado abajo y las capas trabadas.",
          "Saco cajas de la base para bajar la altura.",
          "La recuesto contra la pared para que no se caiga."
        ]
      },
      {
        "scenario": "Tienes que mover a mano 40 bultos de 25 kg desde el piso hasta una mesa. Hay un estibador manual disponible, pero \"es más rápido cargarlos\".",
        "options": [
          "Los cargo uno por uno, doblando la cintura para ir rápido.",
          "Uso el estibador o una mesa elevadora y, si debo levantar, lo hago con buena técnica o entre dos.",
          "Los cargo de dos en dos para terminar antes."
        ]
      },
      {
        "scenario": "Para ganar espacio, el supervisor pide apilar cajas hasta tocar el techo, justo debajo de los rociadores, y dejar dos estibas frente al gabinete contra incendio.",
        "options": [
          "Lo hago: es temporal.",
          "Apilo hasta el techo pero dejo libre el gabinete.",
          "Explico que se debe respetar el despeje bajo los rociadores y dejar libre el gabinete, y buscamos otra ubicación."
        ]
      }
    ],
    "exam": [
      {
        "q": "¿Cuál es un principio del almacenamiento seguro?",
        "options": [
          "Lo pesado abajo y lo liviano arriba.",
          "Lo pesado arriba para dejar libre el piso de la bodega.",
          "Ubicar los materiales donde haya espacio libre ese día."
        ]
      },
      {
        "q": "¿Para qué sirven los pasadores o seguros de los largueros?",
        "options": [
          "Para darle color a la estructura y facilitar la identificación de niveles.",
          "Para que el larguero no se suelte con un golpe hacia arriba.",
          "Para colgar herramientas."
        ]
      },
      {
        "q": "¿Qué pasa con la capacidad de una estantería si se elimina un nivel y aumenta la distancia libre del pie?",
        "options": [
          "Aumenta, porque hay menos niveles cargados.",
          "No cambia, porque la estructura es la misma que se instaló al inicio.",
          "Se reduce, y el cambio debe aprobarlo el fabricante o un ingeniero."
        ]
      },
      {
        "q": "¿Cómo se apoya una estiba en una estantería selectiva?",
        "options": [
          "Centrada y sobre los dos largueros.",
          "Sobre un solo larguero para dejar espacio al lado y poder ubicar otra estiba.",
          "Sobresaliendo hacia el pasillo para tomarla más rápido."
        ]
      },
      {
        "q": "¿Qué hace un trabajador que golpea una estantería con el montacargas?",
        "options": [
          "Sigue trabajando si no ve daño.",
          "Lo reporta de inmediato para que se inspeccione.",
          "Lo reporta al final del mes, en la reunión de seguridad."
        ]
      },
      {
        "q": "¿Qué significa un daño clasificado como ámbar?",
        "options": [
          "Que el daño es tolerable y solo se vigila en la siguiente inspección.",
          "Que se descarga de inmediato y se aísla.",
          "Que se descarga tan pronto se pueda y no se recarga hasta repararlo."
        ]
      },
      {
        "q": "¿Qué se hace con un pie de estantería doblado?",
        "options": [
          "Se reemplaza la pieza con repuestos del fabricante.",
          "Se endereza con el montacargas o a golpes de mazo.",
          "Se refuerza soldándole un ángulo."
        ]
      },
      {
        "q": "¿Qué ayuda a que una pila de cajas en el piso funcione como un bloque estable?",
        "options": [
          "Apilar todas las cajas en la misma orientación, una columna encima de otra.",
          "Trabar las capas cruzando la orientación en cada nivel.",
          "Poner las cajas más pesadas arriba de la pila."
        ]
      },
      {
        "q": "¿Cómo se toma material de una pila en el piso?",
        "options": [
          "Sacando las cajas de la base, que son más fáciles de alcanzar.",
          "Trepando por la pila para llegar a las de arriba.",
          "Desde arriba, usando una escalera o un equipo adecuado si es alta."
        ]
      },
      {
        "q": "¿Qué se hace con una estiba con tablas rotas y clavos salidos?",
        "options": [
          "Se retira de servicio.",
          "Se usa en los niveles altos de la estantería, donde no se pisa.",
          "Se usa solo para cargas pesadas."
        ]
      },
      {
        "q": "¿Por qué son peligrosos los montacargas para los peatones?",
        "options": [
          "Porque siempre van a alta velocidad y no tienen ningún tipo de alarma de reversa.",
          "Porque el operador tiene visibilidad limitada, sobre todo con carga y en reversa.",
          "Porque no tienen frenos de servicio ni de parqueo."
        ]
      },
      {
        "q": "¿Cuál de estas prácticas es correcta para un operador de montacargas?",
        "options": [
          "Elevar a un compañero en las uñas para alcanzar un nivel alto.",
          "Transportar la carga alta para ver mejor el camino.",
          "Al dejar el equipo, bajar las uñas, poner el freno y retirar la llave."
        ]
      },
      {
        "q": "Según la Res. 2400 de 1979, ¿cuál es la carga de referencia máxima para levantamiento manual por un hombre en carga compacta?",
        "options": [
          "25 kg.",
          "50 kg.",
          "No hay ningún límite."
        ]
      },
      {
        "q": "Al levantar una carga, ¿cómo se gira para dejarla a un lado?",
        "options": [
          "Girando el tronco con los pies fijos en el piso.",
          "Moviendo los pies, sin girar el tronco.",
          "Lanzando la carga hacia el lugar donde va, para no tener que caminar."
        ]
      },
      {
        "q": "¿Cómo se almacenan los cilindros de gas?",
        "options": [
          "Acostados en el piso, para que no se caigan si alguien los golpea al pasar con un carro.",
          "Juntos, oxígeno y gases combustibles, para ahorrar espacio.",
          "De pie, asegurados con cadena o soporte y con su capuchón cuando no están en uso."
        ]
      },
      {
        "q": "Una estantería golpeada empieza a inclinarse y a crujir. ¿Qué se hace primero?",
        "options": [
          "Alejar a todos de la zona y de los pasillos vecinos, y acordonar.",
          "Descargarla rápido con el montacargas antes de que caiga del todo.",
          "Sostenerla entre varios mientras alguien busca ayuda."
        ]
      }
    ],
    "workshops": [],
    "project": null
  },
  {
    "id": "andamiero",
    "title": "Armado y Desarmado Seguro de Andamios (Andamiero)",
    "hours": 1.5,
    "category": "regimen_especial",
    "regulation": "Res. 4272 de 2021 (trabajo en alturas), Decreto 1072 de 2015, Res. 0312 de 2019; referencias: manual del fabricante del andamio y normas técnicas de andamios",
    "legalNotice": "ATENCIÓN MARCO LEGAL ESPECIAL: este curso es fundamentación teórica sobre andamios. En Colombia, para trabajar con riesgo de caída de más de 2 m es obligatorio contar con certificación presencial vigente en trabajo en alturas expedida por un centro autorizado (Res. 4272 de 2021). Esta constancia no reemplaza esa certificación.",
    "summary": "Los tipos y componentes de los andamios, la base y el terreno, el armado nivel por nivel con protección contra caídas, las plataformas, barandas y accesos, los anclajes a la estructura, la inspección y la tarjeta de estado, los andamios móviles y el desarmado seguro.",
    "fieldCase": "Un andamio tubular de 6 metros se armó sobre tierra blanda, sin placas base ni durmientes y sin diagonales. Al subir dos trabajadores con material, una pata se hundió, la estructura se inclinó y los trabajadores tuvieron que bajar de urgencia antes de que el andamio se volcara.",
    "checklist": [
      "Tengo certificación vigente en trabajo en alturas y el permiso de trabajo está aprobado.",
      "El terreno es firme y nivelado; uso placas base y durmientes, y el andamio está a plomo.",
      "Todas las diagonales y crucetas están instaladas según el fabricante.",
      "El andamio está anclado a la estructura a las alturas que indica el fabricante.",
      "Las plataformas están completas, aseguradas y sin huecos.",
      "Hay barandas superior e intermedia y rodapié en todos los lados abiertos.",
      "El acceso es por escalera interna o integrada, nunca por las crucetas.",
      "El andamio tiene la tarjeta verde de una persona competente antes de usarlo."
    ],
    "failureAnalysis": "Falla raíz: no se preparó la base (placas, durmientes y terreno firme), se omitieron las diagonales y los anclajes, y el andamio no fue inspeccionado ni autorizado por una persona competente antes de usarlo.",
    "onSiteClosure": "Práctica en su empresa: completar la certificación presencial de trabajo en alturas con un centro autorizado; armar y desarmar un andamio bajo supervisión de una persona competente, siguiendo el manual del fabricante; y diligenciar la inspección y la tarjeta de estado del andamio.",
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80",
    "modules": [
      {
        "title": "Andamios, riesgos y marco legal",
        "content": "\n        <p>Un <strong>andamio</strong> es una estructura temporal que sirve como plataforma de trabajo en altura y para soportar a los trabajadores y sus materiales. Mal armado, se convierte en la causa del accidente que debía prevenir.</p>\n        <p><strong>Riesgos principales:</strong></p>\n        <ul>\n          <li><strong>Caída de personas</strong> desde la plataforma, durante el armado o al subir y bajar.</li>\n          <li><strong>Colapso o volcamiento</strong> del andamio por base deficiente, falta de diagonales o anclajes, sobrecarga o viento.</li>\n          <li><strong>Caída de objetos</strong> sobre las personas que pasan debajo.</li>\n          <li><strong>Contacto eléctrico</strong> con líneas cercanas al armar o al mover el andamio.</li>\n          <li><strong>Golpes y atrapamientos</strong> al manipular tubos, marcos y plataformas.</li>\n        </ul>\n        <p><strong>Marco legal: un régimen especial.</strong> La <strong>Resolución 4272 de 2021</strong> del Ministerio del Trabajo regula el trabajo en alturas en Colombia. Define como trabajo en alturas toda actividad en la que el trabajador queda expuesto a un <strong>riesgo de caída de más de 2 metros</strong> respecto al nivel inferior más cercano, y exige, entre otras cosas:</p>\n        <ul>\n          <li><strong>Certificación presencial</strong> en trabajo en alturas, expedida por un centro de formación autorizado, en el nivel que corresponda a la tarea, con su vigencia y reentrenamiento.</li>\n          <li><strong>Programa de prevención y protección contra caídas</strong> en la empresa.</li>\n          <li>Un <strong>coordinador de trabajo en alturas</strong> que verifique las condiciones.</li>\n          <li><strong>Permiso de trabajo</strong> y análisis de riesgos antes de la tarea.</li>\n          <li><strong>Evaluación médica</strong> de aptitud para trabajo en alturas.</li>\n          <li>Equipos de protección contra caídas certificados e inspeccionados.</li>\n        </ul>\n        <p>Además, el <strong>Decreto 1072 de 2015</strong> y la <strong>Resolución 0312 de 2019</strong> exigen que este riesgo esté identificado y controlado en el SG-SST.</p>\n        <p><strong>Lo que hace este curso.</strong> Le da la base técnica para entender cómo se arma, inspecciona, usa y desarma un andamio con seguridad. <strong>No lo habilita</strong> para trabajar en alturas: eso requiere la certificación presencial y la práctica supervisada en su empresa.</p>\n        <p><strong>El manual del fabricante manda.</strong> Cada sistema de andamio tiene un manual con su configuración, cargas admisibles, separación de anclajes y alturas máximas. Lo que dice ese manual prevalece sobre la costumbre de la obra.</p>\n      ",
        "keyPoints": [
          "Riesgos: caída de personas, colapso o volcamiento, caída de objetos y contacto eléctrico.",
          "Res. 4272 de 2021: con riesgo de caída de más de 2 m se exige certificación presencial, permiso, coordinador y aptitud médica.",
          "El manual del fabricante define configuración, cargas y anclajes, y prevalece sobre la costumbre."
        ],
        "practice": {
          "q": "Según la Res. 4272 de 2021, ¿cuándo una tarea es trabajo en alturas?",
          "options": [
            "Solo por encima de 10 metros",
            "Cuando hay riesgo de caída de más de 2 metros",
            "Cuando hay riesgo de caída de más de 5 metros"
          ]
        }
      },
      {
        "title": "Tipos de andamios y sus componentes",
        "content": "\n        <p><strong>Tipos más usados:</strong></p>\n        <ul>\n          <li><strong>Andamio de marcos</strong> (tubular de marcos): marcos prefabricados unidos con crucetas. Muy común en construcción y mantenimiento.</li>\n          <li><strong>Andamio multidireccional</strong> (de sistema o roseta): pies verticales con rosetas donde se conectan horizontales y diagonales en varias direcciones. Se adapta a formas complejas.</li>\n          <li><strong>Andamio de tubo y abrazadera</strong>: tubos unidos con abrazaderas. Muy versátil, pero exige mucha competencia para armarlo bien.</li>\n          <li><strong>Andamio móvil</strong>: sobre ruedas con freno, para trabajos cortos en piso firme y nivelado.</li>\n          <li><strong>Andamio colgante</strong>: plataforma suspendida de cables desde la parte alta de una edificación. Tiene requisitos propios y no se cubre en detalle en este curso.</li>\n        </ul>\n        <p><strong>Componentes de un andamio apoyado:</strong></p>\n        <ul>\n          <li><strong>Durmientes</strong>: tablones o placas que reparten la carga sobre el terreno.</li>\n          <li><strong>Placas base</strong>: placas metálicas bajo cada pie. Con <strong>husillo o gato nivelador</strong>, permiten nivelar.</li>\n          <li><strong>Pies, parales o marcos</strong>: elementos verticales que llevan la carga al piso.</li>\n          <li><strong>Horizontales o largueros</strong>: unen los pies y soportan las plataformas.</li>\n          <li><strong>Diagonales o crucetas</strong>: dan rigidez y evitan que la estructura se deforme o se doble.</li>\n          <li><strong>Plataformas</strong>: superficies de trabajo metálicas o de madera certificada, con ganchos o seguros.</li>\n          <li><strong>Barandas y rodapiés</strong>: protección perimetral contra la caída de personas y objetos.</li>\n          <li><strong>Anclajes o amarres</strong>: conectan el andamio a la estructura para que no se vuelque.</li>\n          <li><strong>Accesos</strong>: escaleras internas, escaleras integradas o plataformas con trampilla.</li>\n        </ul>\n        <p><strong>No se mezclan sistemas.</strong> Las piezas de distintos fabricantes o modelos no se combinan, aunque parezcan encajar: las uniones y las capacidades están calculadas para cada sistema.</p>\n        <p><strong>Estado de las piezas:</strong> antes de armar, se revisa que los tubos no estén doblados, aplastados, corroídos o fisurados; que las soldaduras estén sanas; que los pasadores y seguros estén completos; y que las plataformas no tengan deformaciones ni ganchos dañados. Las piezas defectuosas se separan y se marcan.</p>\n      ",
        "keyPoints": [
          "Tipos: de marcos, multidireccional, tubo y abrazadera, móvil y colgante.",
          "Componentes: durmientes, placas base, pies, horizontales, diagonales, plataformas, barandas, anclajes y accesos.",
          "No se mezclan sistemas de distintos fabricantes y las piezas dañadas se separan antes de armar."
        ],
        "practice": {
          "q": "¿Qué prevalece sobre la costumbre de la obra al armar un andamio?",
          "options": [
            "Lo que se hizo en la obra anterior",
            "La opinión del andamiero con más años",
            "El manual del fabricante del andamio"
          ]
        }
      },
      {
        "title": "La base: terreno, durmientes, placas y nivelación",
        "content": "\n        <p>Un andamio es tan seguro como su base. En el caso del curso, la falla empezó en el piso.</p>\n        <p><strong>Evaluar el terreno:</strong></p>\n        <ul>\n          <li>Que sea <strong>firme</strong> y capaz de soportar la carga: tierra compactada, concreto o asfalto en buen estado.</li>\n          <li>Que no haya <strong>rellenos sueltos, zanjas, tapas de alcantarilla, tuberías enterradas</strong> ni zonas que se puedan socavar con agua.</li>\n          <li>Que el agua de lluvia no se acumule bajo la base.</li>\n          <li>En losas o cubiertas, verificar que la estructura soporte la carga puntual de los pies.</li>\n        </ul>\n        <p><strong>Durmientes.</strong> Sobre tierra o superficies blandas, cada pie se apoya en un <strong>durmiente</strong> (tablón de madera sana o placa) que reparte la carga en un área mayor. Un durmiente suele abarcar al menos dos pies para darle continuidad a la base. Nunca se usan ladrillos, bloques, cajas o pedazos de madera sueltos como apoyo: se parten o se deslizan.</p>\n        <p><strong>Placas base y husillos.</strong> Todos los pies llevan <strong>placa base</strong>, centrada en el durmiente y, si es necesario, fijada a él. Los <strong>husillos niveladores</strong> compensan desniveles, pero tienen una extensión máxima indicada por el fabricante; no se usan totalmente extendidos.</p>\n        <p><strong>Nivelación y plomo:</strong></p>\n        <ul>\n          <li>El primer nivel se arma con nivel de burbuja: horizontales a nivel y pies <strong>a plomo</strong> (verticales).</li>\n          <li>Un error pequeño en la base se multiplica con la altura: un andamio fuera de plomo carga los pies de forma desigual y tiende a volcarse.</li>\n          <li>En terrenos inclinados se usan husillos, piezas de ajuste o soluciones previstas por el fabricante, nunca calzos improvisados.</li>\n        </ul>\n        <p><strong>Distancia a la estructura.</strong> La plataforma se ubica lo más cerca posible de la superficie de trabajo. Si queda un espacio grande entre la plataforma y el muro, se instala baranda también en ese lado o se reduce la separación según el fabricante.</p>\n        <p><strong>Líneas eléctricas.</strong> Antes de armar, se verifica la distancia a líneas aéreas. Si no se puede mantener la distancia de seguridad, se coordina con el operador de red la desenergización o protección de la línea.</p>\n      ",
        "keyPoints": [
          "Terreno firme y sin rellenos, zanjas ni tuberías; drenaje del agua de lluvia.",
          "Durmientes y placas base en todos los pies; nunca ladrillos, bloques o cajas como apoyo.",
          "Primer nivel a nivel y a plomo; husillos sin superar su extensión máxima."
        ],
        "practice": {
          "q": "¿Para qué sirven los durmientes bajo las placas base?",
          "options": [
            "Para repartir la carga sobre el terreno",
            "Para que el andamio quede más alto",
            "Para decorar la base"
          ]
        }
      },
      {
        "title": "Armado seguro nivel por nivel",
        "content": "\n        <p><strong>Antes de armar:</strong></p>\n        <ul>\n          <li>Permiso de trabajo en alturas aprobado y análisis de riesgos de la tarea.</li>\n          <li>Andamieros con <strong>certificación vigente</strong> en trabajo en alturas y un <strong>supervisor o persona competente</strong> a cargo del armado.</li>\n          <li>Manual del fabricante y plano o esquema de la configuración (altura, largo, anclajes, cargas).</li>\n          <li>Piezas inspeccionadas y en cantidad suficiente.</li>\n          <li><strong>Área delimitada</strong> abajo, con señalización, para que nadie pase bajo la zona de armado.</li>\n        </ul>\n        <p><strong>Secuencia general:</strong></p>\n        <ol>\n          <li>Durmientes, placas base y primer nivel nivelado y a plomo.</li>\n          <li>Instalar <strong>todas las diagonales</strong> del nivel antes de subir al siguiente. Un nivel sin diagonales no es estable.</li>\n          <li>Instalar la plataforma completa del nivel desde donde se armará el siguiente.</li>\n          <li>Subir el siguiente nivel de marcos o pies, con sus horizontales y diagonales.</li>\n          <li>Instalar los <strong>anclajes</strong> a la estructura a medida que se alcanza la altura indicada por el fabricante.</li>\n          <li>Instalar barandas, rodapiés y accesos.</li>\n        </ol>\n        <p><strong>Protección contra caídas durante el armado.</strong> Mientras se arma, todavía no hay barandas completas. Por eso:</p>\n        <ul>\n          <li>El andamiero usa <strong>arnés de cuerpo completo</strong> conectado a un punto de anclaje adecuado (en el andamio, si el fabricante lo permite, o en la estructura) en todo momento.</li>\n          <li>Se prefieren sistemas con <strong>baranda anticipada</strong> (que se instala desde el nivel inferior antes de subir), cuando el fabricante los ofrece.</li>\n          <li>Se usan eslingas de doble terminal para estar siempre conectado al cambiar de punto.</li>\n        </ul>\n        <p><strong>Subir el material:</strong> con cuerda y polea o con un sistema mecánico, nunca cargando piezas mientras se sube por el andamio. Las herramientas se amarran para que no caigan.</p>\n        <p><strong>Condiciones que detienen el armado:</strong> viento fuerte, lluvia o tormenta eléctrica, falta de piezas, terreno que cede o cualquier duda sobre la configuración.</p>\n      ",
        "keyPoints": [
          "Permiso, certificación vigente, persona competente a cargo, manual del fabricante y área delimitada.",
          "Todas las diagonales de un nivel antes de subir al siguiente; anclajes a medida que se gana altura.",
          "Durante el armado, arnés conectado en todo momento; material con cuerda y polea, nunca a mano por el andamio."
        ],
        "practice": {
          "q": "¿Cuándo se instalan las diagonales de un nivel?",
          "options": [
            "Solo en el nivel superior",
            "Antes de subir a armar el siguiente nivel",
            "Al final, cuando el andamio está completo"
          ]
        }
      },
      {
        "title": "Plataformas, barandas, accesos y carga",
        "content": "\n        <p><strong>Plataformas de trabajo:</strong></p>\n        <ul>\n          <li><strong>Completas</strong>, cubriendo todo el ancho entre los pies, sin huecos por donde pueda caer una persona o un objeto.</li>\n          <li><strong>Aseguradas</strong> con sus ganchos o seguros para que no se levanten ni se desplacen.</li>\n          <li>De piezas certificadas del sistema. Tablones improvisados solo si cumplen las especificaciones de madera para andamios y van sujetos.</li>\n          <li>Limpias, secas y sin material acumulado que haga tropezar.</li>\n        </ul>\n        <p><strong>Barandas y rodapiés</strong> en todos los lados abiertos de la plataforma:</p>\n        <ul>\n          <li><strong>Baranda superior</strong> a la altura que fijan la Res. 4272 de 2021 y el fabricante (del orden de 1 metro sobre la plataforma).</li>\n          <li><strong>Baranda intermedia</strong>, a media altura, para que una persona no pase por debajo de la superior.</li>\n          <li><strong>Rodapié</strong> en el borde de la plataforma, para que no caigan herramientas ni materiales.</li>\n        </ul>\n        <p>Faltar la baranda intermedia o el rodapié es una condición insegura, no un detalle: el andamio no se usa hasta completarlas.</p>\n        <p><strong>Accesos:</strong></p>\n        <ul>\n          <li>Se sube y se baja por <strong>escaleras internas o integradas</strong> del sistema, o por escaleras portátiles amarradas que sobrepasen la plataforma.</li>\n          <li><strong>Nunca se trepa por las crucetas, los marcos o las diagonales exteriores.</strong> No están diseñados como escalera y la persona queda fuera de la protección.</li>\n          <li>Se sube con las manos libres, con tres puntos de apoyo; las herramientas van en un bolso o se suben con cuerda.</li>\n          <li>Las trampillas de acceso se mantienen cerradas cuando no se están usando.</li>\n        </ul>\n        <p><strong>Carga del andamio.</strong> Cada andamio tiene una <strong>carga admisible por plataforma</strong> según su clase de servicio (liviano, mediano, pesado), indicada por el fabricante. Se suman personas, herramientas y materiales. No se acumula material pesado en un solo punto, no se apoyan equipos que generen vibración o impacto, y no se usa el andamio como soporte de cargas ajenas (tuberías, poleas, cables) si no está diseñado para ello.</p>\n        <p><strong>Trabajo en la plataforma:</strong> no pararse sobre las barandas, cajas o escaleras puestas sobre la plataforma para ganar altura; no inclinarse por fuera de la baranda; y no saltar de un andamio a otro ni a la estructura.</p>\n      ",
        "keyPoints": [
          "Plataformas completas, aseguradas y limpias.",
          "Baranda superior, intermedia y rodapié en todos los lados abiertos.",
          "Acceso por escaleras internas o integradas, nunca por crucetas; respetar la carga admisible."
        ],
        "practice": {
          "q": "¿Cuáles son las protecciones perimetrales de una plataforma?",
          "options": [
            "Una cinta de señalización",
            "Solo la baranda superior",
            "Baranda superior, baranda intermedia y rodapié"
          ]
        }
      },
      {
        "title": "Anclajes, estabilidad y viento",
        "content": "\n        <p><strong>Por qué se ancla un andamio.</strong> Un andamio alto y angosto se comporta como una columna esbelta: un empujón, el viento o una carga a un lado lo pueden volcar. Los <strong>anclajes o amarres</strong> lo unen a la estructura y le dan estabilidad.</p>\n        <p><strong>Relación entre altura y base.</strong> Cuando un andamio no está anclado, su estabilidad depende de la relación entre su altura y el lado menor de su base. El fabricante indica la altura máxima sin anclajes; una referencia frecuente en andamios móviles es que la altura no supere unas tres veces el lado menor de la base. Por encima de esa altura, el andamio debe anclarse o ampliar su base con estabilizadores.</p>\n        <p><strong>Cómo se anclan:</strong></p>\n        <ul>\n          <li>A la <strong>separación vertical y horizontal</strong> que indique el fabricante, empezando a la altura que él define y siguiendo hacia arriba.</li>\n          <li>A elementos de la estructura capaces de resistir la fuerza: columnas, vigas, losas o anclajes químicos o mecánicos instalados y probados.</li>\n          <li><strong>No</strong> a barandas, tuberías, bajantes, ventanas o elementos que no fueron diseñados para recibir esa fuerza.</li>\n          <li>Se instalan a medida que el andamio sube y se retiran a medida que baja: <strong>nunca se retiran anticipadamente</strong>.</li>\n          <li>Si un anclaje estorba un trabajo, no se quita sin la autorización de la persona competente y sin colocar otro equivalente.</li>\n        </ul>\n        <p><strong>Lonas, mallas y avisos.</strong> Cubrir un andamio con lona o malla aumenta mucho la fuerza del viento sobre él. En ese caso se necesitan más anclajes, calculados para esa condición.</p>\n        <p><strong>Viento y clima:</strong></p>\n        <ul>\n          <li>Se suspende el trabajo con <strong>viento fuerte</strong>, tormenta eléctrica o lluvia intensa.</li>\n          <li>Después de una tormenta o de un viento fuerte, el andamio se <strong>inspecciona</strong> antes de volver a usarlo.</li>\n          <li>Las plataformas mojadas o con barro son resbalosas: se limpian antes de trabajar.</li>\n        </ul>\n        <p><strong>Otras causas de inestabilidad:</strong> retirar diagonales para pasar material, sobrecargar una plataforma, golpes de vehículos o equipos contra la base, y excavaciones cercanas que socavan el terreno.</p>\n      ",
        "keyPoints": [
          "El fabricante fija la altura máxima sin anclaje; en móviles, referencia de unas tres veces el lado menor de la base.",
          "Anclajes a la separación del fabricante, a elementos resistentes y nunca retirados antes de tiempo.",
          "Lonas aumentan la carga de viento; se suspende con viento fuerte o tormenta y se inspecciona después."
        ],
        "practice": {
          "q": "¿Cómo se sube a la plataforma de un andamio?",
          "options": [
            "Por la escalera interna o integrada del sistema",
            "Trepando por las crucetas exteriores",
            "Por una cuerda amarrada a la baranda"
          ]
        }
      },
      {
        "title": "Inspección, tarjeta de estado y andamios móviles",
        "content": "\n        <p><strong>Inspección por una persona competente:</strong></p>\n        <ul>\n          <li><strong>Al terminar el armado</strong> y antes de que nadie lo use.</li>\n          <li><strong>Antes de cada turno</strong> o según la frecuencia definida por la empresa.</li>\n          <li>Después de cualquier <strong>modificación</strong>, golpe, viento fuerte, lluvia intensa o sismo.</li>\n        </ul>\n        <p><strong>Qué se revisa:</strong> base y terreno, plomo y nivel, diagonales completas, anclajes, plataformas completas y aseguradas, barandas y rodapiés, accesos, señalización, carga sobre las plataformas y distancia a líneas eléctricas.</p>\n        <p><strong>Tarjeta de estado del andamio.</strong> Es una práctica muy usada en la industria colombiana:</p>\n        <ul>\n          <li><strong>Tarjeta verde</strong>: andamio inspeccionado y apto para usar. Indica la fecha, la persona que inspeccionó y la carga admisible.</li>\n          <li><strong>Tarjeta amarilla</strong> (cuando se usa): apto con restricciones; por ejemplo, uso obligatorio de arnés porque falta una baranda por la configuración del trabajo.</li>\n          <li><strong>Tarjeta roja</strong>: <strong>no usar</strong>. Andamio en armado, en desarme o con una condición insegura.</li>\n        </ul>\n        <p><strong>Sin tarjeta, o con tarjeta roja, el andamio no se usa.</strong> Y ningún usuario modifica el andamio: si algo estorba o falta, se avisa a la persona competente.</p>\n        <p><strong>Andamios móviles</strong> (sobre ruedas):</p>\n        <ul>\n          <li>Solo sobre <strong>piso firme, nivelado y sin obstáculos</strong>: huecos, cables o desniveles los pueden volcar.</li>\n          <li><strong>Frenos puestos</strong> en todas las ruedas mientras alguien está arriba.</li>\n          <li><strong>Nunca se mueve con personas</strong>, herramientas o materiales sueltos sobre la plataforma.</li>\n          <li>Se mueve empujando desde la base, no halando desde arriba.</li>\n          <li>Respetar la altura máxima del fabricante y usar estabilizadores cuando los indique.</li>\n          <li>Verificar líneas eléctricas y techos en el recorrido.</li>\n        </ul>\n        <p><strong>Los usuarios del andamio</strong> (pintores, soldadores, electricistas) también deben tener certificación en trabajo en alturas, revisar la tarjeta antes de subir y reportar cualquier condición insegura.</p>\n      ",
        "keyPoints": [
          "Inspección por persona competente al terminar el armado, antes de cada turno y tras cambios o mal clima.",
          "Tarjeta verde: apto; roja o sin tarjeta: no se usa; los usuarios no modifican el andamio.",
          "Andamio móvil: piso firme, frenos puestos y nunca se mueve con personas o material arriba."
        ],
        "practice": {
          "q": "Un andamio tiene tarjeta roja. ¿Qué significa?",
          "options": [
            "Que fue inspeccionado hoy y es apto",
            "Que no se debe usar",
            "Que se puede usar con arnés"
          ]
        }
      },
      {
        "title": "Desarmado seguro y emergencias",
        "content": "\n        <p><strong>El desarmado</strong> tiene tantos riesgos como el armado: la estructura pierde rigidez a medida que se retiran piezas, y las caídas de material son frecuentes.</p>\n        <p><strong>Reglas del desarmado:</strong></p>\n        <ul>\n          <li>Permiso de trabajo, andamieros certificados y persona competente a cargo, igual que en el armado.</li>\n          <li>Colocar la <strong>tarjeta roja</strong> y delimitar el área abajo.</li>\n          <li>Retirar primero el material, las herramientas y los residuos de las plataformas.</li>\n          <li>Desarmar en <strong>orden inverso</strong> al armado, de arriba hacia abajo, nivel por nivel.</li>\n          <li><strong>No retirar los anclajes ni las diagonales</strong> de un nivel hasta que se hayan retirado todos los niveles superiores.</li>\n          <li>El andamiero permanece conectado con su arnés en todo momento.</li>\n          <li><strong>Nunca lanzar piezas</strong> desde el andamio: se bajan con cuerda y polea, de mano en mano entre niveles con plataforma, o con un sistema mecánico.</li>\n          <li>Las piezas se clasifican y se apilan ordenadas en el piso, separando las dañadas.</li>\n        </ul>\n        <p><strong>Emergencias:</strong></p>\n        <ul>\n          <li><strong>El andamio se inclina, una pata se hunde o se escucha un crujido</strong>: todos bajan de inmediato por el acceso, sin cargar material, se aleja a las personas de la zona de posible caída y se avisa. Nadie vuelve a subir hasta que la persona competente lo evalúe.</li>\n          <li><strong>Una persona queda suspendida en el arnés</strong> tras una caída: activar el plan de rescate de inmediato. La suspensión prolongada en el arnés es peligrosa por sí misma, por eso la Res. 4272 de 2021 exige que exista un plan de rescate para cada trabajo en alturas.</li>\n          <li><strong>Caída de un objeto</strong> sobre una persona: atender al lesionado, revisar por qué el rodapié o la delimitación no lo impidió y corregir.</li>\n          <li><strong>Contacto eléctrico</strong>: no tocar a la persona ni el andamio hasta que se corte la energía; llamar a emergencias.</li>\n        </ul>\n        <p><strong>Reportar.</strong> Un andamio que se movió, una plataforma que se levantó o una pieza que cayó sin herir a nadie son incidentes que se reportan e investigan. Son el aviso antes del accidente.</p>\n      ",
        "keyPoints": [
          "Desarmar en orden inverso, de arriba hacia abajo, sin retirar anclajes ni diagonales antes de tiempo.",
          "Nunca lanzar piezas: se bajan con cuerda y polea o de mano en mano.",
          "Andamio que se inclina: bajar de inmediato y alejar a todos; persona suspendida: activar el plan de rescate."
        ],
        "practice": {
          "q": "Al desarmar, ¿cuándo se retiran los anclajes de un nivel?",
          "options": [
            "Cuando el viento se calma",
            "Al comienzo, para facilitar el trabajo",
            "Cuando ya se retiraron todos los niveles superiores"
          ]
        }
      }
    ],
    "scenarios": [
      {
        "scenario": "Debes armar un andamio de 6 metros sobre tierra blanda. Un compañero propone apoyar los pies sobre ladrillos para \"ganar tiempo\".",
        "options": [
          "Acepto los ladrillos porque el andamio no es tan alto.",
          "Compacto o mejoro el terreno, uso durmientes y placas base, y nivelo y aplomo el primer nivel.",
          "Armo sobre la tierra sin nada debajo y pongo más diagonales."
        ]
      },
      {
        "scenario": "Un trabajador quiere subir rápido a la plataforma trepando por las crucetas exteriores porque la escalera interna está al otro lado del andamio.",
        "options": [
          "Lo dejo subir si se agarra bien.",
          "Le pido que suba con una herramienta en la mano para ganar tiempo.",
          "Le indico que use la escalera interna, con las manos libres y tres puntos de apoyo."
        ]
      },
      {
        "scenario": "Al revisar el andamio antes de empezar, notas que en un lado de la plataforma falta la baranda intermedia y no hay rodapié. Tiene tarjeta verde de ayer.",
        "options": [
          "No lo uso, aviso a la persona competente para que complete las protecciones y vuelva a inspeccionar.",
          "Lo uso con cuidado de no acercarme a ese lado.",
          "Pongo una cinta de señalización en lugar de la baranda."
        ]
      },
      {
        "scenario": "Para pasar un tubo largo, un compañero quiere retirar dos diagonales y un anclaje del andamio \"solo por un momento\".",
        "options": [
          "Las retiramos y las ponemos de nuevo al terminar.",
          "Detengo la tarea y pido a la persona competente una solución que no comprometa la estructura.",
          "Retiro solo el anclaje, que estorba menos."
        ]
      },
      {
        "scenario": "Estás sobre un andamio móvil y necesitas trabajar dos metros más allá. Tu compañero propone empujarlo contigo arriba para no bajar.",
        "options": [
          "Me agarro de la baranda mientras él lo empuja despacio.",
          "Lo movemos entre los dos halándolo desde arriba.",
          "Bajo con las herramientas, movemos el andamio empujando desde la base, ponemos los frenos y vuelvo a subir."
        ]
      }
    ],
    "exam": [
      {
        "q": "¿Qué exige la Res. 4272 de 2021 para trabajar en un andamio con riesgo de caída de más de 2 m?",
        "options": [
          "Certificación presencial en alturas de un centro autorizado.",
          "Solo un curso virtual de 1 hora y media con una constancia descargable.",
          "Ningún requisito si el andamio tiene barandas."
        ]
      },
      {
        "q": "¿Por qué no se mezclan piezas de andamios de distintos fabricantes?",
        "options": [
          "Porque se ven de colores diferentes y la obra se ve desordenada.",
          "Porque las uniones y capacidades están calculadas para cada sistema.",
          "Porque pesan distinto."
        ]
      },
      {
        "q": "¿Qué se usa como apoyo de un pie de andamio sobre tierra?",
        "options": [
          "Ladrillos o bloques de concreto.",
          "Cajas de madera vacías o estibas apiladas que haya en la obra.",
          "Placa base sobre un durmiente que reparte la carga."
        ]
      },
      {
        "q": "¿Por qué es importante que el primer nivel quede a plomo?",
        "options": [
          "Porque un error en la base crece con la altura.",
          "Porque así se ve mejor en las fotos del informe de avance de obra.",
          "Porque el fabricante lo cobra aparte."
        ]
      },
      {
        "q": "¿Cuál es la protección contra caídas del andamiero mientras arma el andamio?",
        "options": [
          "Ninguna, porque todavía no hay altura suficiente para caer.",
          "Arnés de cuerpo completo conectado en todo momento a un anclaje adecuado.",
          "Un casco con barbuquejo, guantes y botas con puntera de acero bien amarradas."
        ]
      },
      {
        "q": "¿Cómo se suben los tubos y marcos a los niveles altos durante el armado?",
        "options": [
          "Cargándolos al hombro mientras se sube por el andamio.",
          "Lanzándolos desde abajo a un compañero que los recibe arriba.",
          "Con cuerda y polea o con un sistema mecánico."
        ]
      },
      {
        "q": "¿Para qué sirve la baranda intermedia?",
        "options": [
          "Para que una persona no pase por debajo de la baranda superior.",
          "Para colgar las herramientas mientras se trabaja.",
          "Para apoyar los pies y ganar altura."
        ]
      },
      {
        "q": "¿Qué función cumple el rodapié?",
        "options": [
          "Dar más altura a la plataforma.",
          "Evitar que caigan herramientas y materiales de la plataforma.",
          "Servir de escalón para subir a la plataforma desde el acceso lateral."
        ]
      },
      {
        "q": "¿A qué se ancla un andamio?",
        "options": [
          "A las bajantes de agua o tuberías cercanas que se vean firmes.",
          "A las barandas de los balcones de la edificación.",
          "A elementos estructurales resistentes, como columnas o losas."
        ]
      },
      {
        "q": "¿Qué efecto tiene cubrir un andamio con lona?",
        "options": [
          "Aumenta la fuerza del viento y exige más anclajes.",
          "Lo hace más estable porque lo protege del viento lateral.",
          "Ninguno, porque la lona pesa muy poco frente a la estructura."
        ]
      },
      {
        "q": "¿Cuándo debe inspeccionarse un andamio?",
        "options": [
          "Solo una vez, cuando se termina de armar y se entrega a los usuarios de la obra.",
          "Al terminar el armado, antes de cada turno y tras cambios o mal clima.",
          "Cuando un usuario se queja de que se mueve."
        ]
      },
      {
        "q": "Un andamio no tiene tarjeta de estado. ¿Qué hace el usuario?",
        "options": [
          "Lo usa si se ve bien armado.",
          "Lo usa con arnés.",
          "No lo usa y avisa a la persona competente."
        ]
      },
      {
        "q": "¿Cuál es una regla de los andamios móviles?",
        "options": [
          "Nunca se mueven con personas ni material sobre la plataforma.",
          "Se mueven halándolos desde arriba de la plataforma.",
          "Los frenos se ponen solo al final del día, cuando se deja de trabajar."
        ]
      },
      {
        "q": "¿En qué orden se desarma un andamio?",
        "options": [
          "De abajo hacia arriba, empezando por la base para que baje solo.",
          "En orden inverso al armado, de arriba hacia abajo, nivel por nivel.",
          "Retirando primero todos los anclajes."
        ]
      },
      {
        "q": "¿Qué se hace con las piezas durante el desarmado?",
        "options": [
          "Se lanzan al piso dentro del área delimitada.",
          "Se dejan sobre la plataforma hasta el día siguiente.",
          "Se bajan con cuerda y polea o de mano en mano."
        ]
      },
      {
        "q": "Una pata del andamio se hunde y la estructura se inclina con dos personas arriba. ¿Qué se hace?",
        "options": [
          "Bajar de inmediato, alejar a todos y no subir hasta que lo evalúen.",
          "Terminar rápido el trabajo antes de que se incline más y luego avisar.",
          "Subir más material al lado contrario para equilibrarlo."
        ]
      }
    ],
    "workshops": [],
    "project": null
  },
  {
    "id": "manejo-amoniaco",
    "title": "Manejo Seguro de Amoniaco (NH3) en Refrigeración Industrial",
    "hours": 1.5,
    "category": "prevencion_sst",
    "regulation": "Decreto 1072 de 2015, Decreto 1496 de 2018, Res. 773 de 2021, Decreto 1347 de 2021; referencias: IIAR, OSHA 1910.119",
    "legalNotice": "Formación teórica para personal que trabaja cerca de sistemas de refrigeración con amoniaco. No habilita para operar ni intervenir el sistema: eso requiere entrenamiento específico del fabricante o de la empresa, procedimientos escritos y autorización.",
    "summary": "Cómo se comporta el amoniaco en una fuga, qué le hace al cuerpo y a qué concentraciones, cómo funciona un sistema de refrigeración, qué controles lo hacen seguro, cómo hacer purgas y aperturas de línea, qué protección usar y cómo responder a una fuga.",
    "fieldCase": "Durante una purga de aceite en el cuarto de máquinas, un operador abrió una válvula de drenaje sin el bloqueo previo y se alejó un momento. Por la válvula salió amoniaco líquido. No usaba protección respiratoria ni facial completa y sufrió quemaduras químicas en la cara e irritación severa de las vías respiratorias.",
    "checklist": [
      "Conozco dónde están los detectores, las alarmas y el pulsador de parada de emergencia del cuarto de máquinas.",
      "Sé hacia dónde evacuar según la dirección del viento y dónde está el punto de encuentro.",
      "Tengo a mano mi respirador de escape y sé cuándo NO es suficiente.",
      "Toda purga o apertura de línea se hace con procedimiento escrito, aislamiento y un segundo operador.",
      "Nunca dejo una válvula de purga abierta sin vigilancia.",
      "Verifico la presión en cero antes de abrir cualquier línea.",
      "Sé usar la ducha y el lavaojos, y que el lavado es de al menos 15 minutos.",
      "Si huelo amoniaco, aviso de inmediato; no voy solo a buscar la fuga."
    ],
    "failureAnalysis": "Falla raíz: no se siguió el procedimiento escrito de purga (válvula de cierre automático, sin dejarla desatendida, con un segundo operador) y no se usó la protección respiratoria y facial requerida.",
    "onSiteClosure": "Práctica en su empresa: recorrer el sistema identificando válvulas de cierre de emergencia, detectores y salidas; hacer un simulacro de fuga con evacuación según el viento; y practicar la colocación del respirador y el uso de la ducha de emergencia.",
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    "modules": [
      {
        "title": "Qué es el amoniaco y cómo se comporta en una fuga",
        "content": "\n        <p>El <strong>amoniaco anhidro</strong> (NH₃), conocido en refrigeración como <strong>R-717</strong>, es uno de los refrigerantes industriales más usados en plantas de alimentos, bebidas, lácteos, cárnicos y cuartos fríos. Es muy eficiente, no daña la capa de ozono y no contribuye al calentamiento global, pero es <strong>tóxico</strong> y <strong>corrosivo</strong>.</p>\n        <p><strong>Propiedades que explican su peligro:</strong></p>\n        <ul>\n          <li><strong>Olor penetrante</strong> que se percibe a concentraciones muy bajas. Es una buena alarma natural, pero el olfato se acostumbra y deja de percibirlo. No se usa el olfato para medir.</li>\n          <li><strong>Hierve a unos −33 °C</strong> a presión atmosférica. En el sistema está como líquido a presión; cuando se escapa, se evapora de golpe y enfría todo lo que toca: puede congelar la piel.</li>\n          <li><strong>Como gas puro es más liviano que el aire</strong> y tiende a subir.</li>\n          <li><strong>Pero en una fuga de líquido</strong>, forma una <strong>nube fría y densa</strong> (una niebla blanca de gotas y vapor frío) que se mantiene cerca del piso, se mueve con el viento y puede viajar lejos antes de calentarse y subir.</li>\n          <li><strong>Tiene gran afinidad por el agua</strong>: se disuelve en ella liberando calor. Por eso ataca los ojos, la boca, las vías respiratorias y la piel húmeda.</li>\n          <li><strong>Es inflamable</strong> en un rango estrecho de concentraciones altas en el aire (aproximadamente entre 15 % y 28 %). Es difícil de encender al aire libre, pero en un cuarto de máquinas cerrado puede explotar.</li>\n          <li><strong>Ataca el cobre, el latón y el zinc</strong>. En los sistemas de amoniaco se usan acero y materiales compatibles.</li>\n        </ul>\n        <p><strong>Dónde puede haber fugas:</strong> sellos de compresores y bombas, válvulas, bridas, uniones, purgadores, drenajes de aceite, evaporadores dañados por golpes de montacargas, tuberías corroídas bajo el aislamiento.</p>\n        <p><strong>Por qué importa a todos, no solo a los operadores.</strong> Una fuga grande puede afectar a toda la planta y a los vecinos. Cualquier trabajador debe saber reconocer el olor, dar la alarma y evacuar en la dirección correcta.</p>\n      ",
        "keyPoints": [
          "El amoniaco (R-717) es tóxico, corrosivo y, en concentraciones altas en espacios cerrados, inflamable.",
          "Hierve a unos −33 °C: el líquido que escapa puede congelar la piel.",
          "Una fuga de líquido forma una nube fría y densa que se queda cerca del piso y se mueve con el viento."
        ],
        "practice": {
          "q": "¿Con qué código se conoce el amoniaco como refrigerante?",
          "options": [
            "R-134a",
            "R-717",
            "R-22"
          ]
        }
      },
      {
        "title": "Efectos en la salud y límites de exposición",
        "content": "\n        <p><strong>Cómo afecta al cuerpo.</strong> El amoniaco reacciona con la humedad de los tejidos y produce una sustancia alcalina que quema. Los efectos dependen de la concentración y del tiempo:</p>\n        <ul>\n          <li><strong>Concentraciones bajas</strong>: olor fuerte, molestia, irritación leve de ojos, nariz y garganta.</li>\n          <li><strong>Concentraciones moderadas</strong>: lagrimeo intenso, tos, dolor de garganta, dificultad para respirar. Con exposiciones repetidas puede haber daños crónicos en las vías respiratorias.</li>\n          <li><strong>Concentraciones altas</strong>: quemaduras en ojos y vías respiratorias, edema pulmonar (líquido en los pulmones, que puede aparecer horas después), asfixia y muerte.</li>\n          <li><strong>Contacto con el líquido</strong>: quemaduras por congelación y químicas al mismo tiempo, lesiones graves en los ojos que pueden causar ceguera.</li>\n        </ul>\n        <p><strong>Límites de referencia.</strong> En Colombia se toman como referencia los valores límite permisibles de organismos internacionales. Para el amoniaco, los valores más usados son:</p>\n        <ul>\n          <li><strong>25 ppm</strong> como promedio ponderado en una jornada de 8 horas (ACGIH y NIOSH).</li>\n          <li><strong>35 ppm</strong> como límite de exposición de corta duración, 15 minutos (ACGIH y NIOSH).</li>\n          <li><strong>300 ppm</strong>: concentración <strong>inmediatamente peligrosa para la vida o la salud</strong> (IDLH, de NIOSH). Por encima de ese valor, o si no se conoce la concentración, solo se entra con equipo de respiración autónomo y como parte de un equipo de respuesta.</li>\n        </ul>\n        <p>\"ppm\" significa partes por millón. Para tener una idea: el olor se nota muy por debajo de 25 ppm, así que <strong>si huele, ya hay amoniaco en el aire</strong>; pero la intensidad del olor no indica si la concentración es peligrosa.</p>\n        <p><strong>Quiénes son más vulnerables:</strong> personas con asma u otras enfermedades respiratorias, y quienes usan lentes de contacto (el amoniaco puede quedar atrapado bajo el lente).</p>\n        <p><strong>Vigilancia de la salud.</strong> Los trabajadores expuestos deben estar incluidos en el programa de vigilancia médica de la empresa, con evaluaciones respiratorias según el riesgo.</p>\n      ",
        "keyPoints": [
          "El amoniaco quema ojos, vías respiratorias y piel; el edema pulmonar puede aparecer horas después.",
          "Referencias: 25 ppm (8 horas), 35 ppm (15 minutos) y 300 ppm como valor inmediatamente peligroso (IDLH).",
          "Si huele, ya hay amoniaco en el aire; la intensidad del olor no indica si es peligroso."
        ],
        "practice": {
          "q": "¿Qué valor de NIOSH se considera inmediatamente peligroso para la vida o la salud (IDLH) para el amoniaco?",
          "options": [
            "25 ppm",
            "5.000 ppm",
            "300 ppm"
          ]
        }
      },
      {
        "title": "Cómo funciona un sistema de refrigeración con amoniaco",
        "content": "\n        <p>Conocer el sistema ayuda a entender dónde está el riesgo y por qué ciertas maniobras son peligrosas.</p>\n        <p><strong>El ciclo básico:</strong></p>\n        <ol>\n          <li>El <strong>compresor</strong> aspira el amoniaco en gas a baja presión y lo comprime a alta presión y alta temperatura.</li>\n          <li>En el <strong>condensador</strong> (normalmente evaporativo, en el techo o en el patio), el gas cede calor y se convierte en líquido a alta presión.</li>\n          <li>El líquido se almacena en el <strong>recibidor</strong> de alta presión.</li>\n          <li>Pasa por una <strong>válvula de expansión</strong>, donde baja la presión y la temperatura.</li>\n          <li>En los <strong>evaporadores</strong> de los cuartos fríos o túneles de congelación, el líquido absorbe calor del producto y se evapora.</li>\n          <li>El gas vuelve al compresor, muchas veces pasando por un <strong>separador o recirculador</strong> de baja presión.</li>\n        </ol>\n        <p><strong>Zonas de mayor riesgo:</strong></p>\n        <ul>\n          <li><strong>Lado de alta presión</strong> (descarga del compresor, condensador, recibidor): grandes cantidades de líquido a presión.</li>\n          <li><strong>Recipientes de baja presión</strong> donde se acumula líquido frío y aceite.</li>\n          <li><strong>Puntos de drenaje de aceite</strong>: el aceite del compresor se acumula en partes bajas y hay que retirarlo periódicamente.</li>\n          <li><strong>Evaporadores</strong> en zonas con tráfico de montacargas.</li>\n        </ul>\n        <p><strong>Elementos de seguridad del sistema:</strong> válvulas de alivio de presión que descargan a un lugar seguro; válvulas de cierre manual y automáticas para aislar secciones; detectores de amoniaco con alarmas; ventilación del cuarto de máquinas, incluida una ventilación de emergencia; pulsador de parada de emergencia ubicado <strong>fuera</strong> del cuarto de máquinas; señalización de tuberías con el sentido de flujo y el estado (líquido, gas, alta o baja presión).</p>\n        <p><strong>Normas técnicas de referencia.</strong> El Instituto Internacional de Refrigeración con Amoniaco (IIAR) publica normas sobre diseño, procedimientos de operación, inspección y mantenimiento, y criterios mínimos de seguridad de estos sistemas. En Estados Unidos, los sistemas con más de 10.000 libras de amoniaco deben cumplir además la norma de gestión de seguridad de procesos (OSHA 1910.119). Muchas plantas en Colombia adoptan estas referencias.</p>\n      ",
        "keyPoints": [
          "Ciclo: compresor, condensador, recibidor, válvula de expansión, evaporadores y retorno.",
          "Mayor riesgo en el lado de alta presión, los recipientes de baja con líquido y aceite, y los drenajes de aceite.",
          "Seguridad: válvulas de alivio y de cierre, detectores, ventilación de emergencia y parada de emergencia fuera del cuarto."
        ],
        "practice": {
          "q": "¿Qué equipo convierte el amoniaco gaseoso de alta presión en líquido?",
          "options": [
            "El condensador",
            "El evaporador",
            "La válvula de expansión"
          ]
        }
      },
      {
        "title": "Marco normativo y gestión del riesgo",
        "content": "\n        <p><strong>En Colombia:</strong></p>\n        <ul>\n          <li>El <strong>Decreto 1072 de 2015</strong> obliga a identificar los peligros, evaluar los riesgos y aplicar controles por jerarquía, además de tener un plan de prevención, preparación y respuesta ante emergencias.</li>\n          <li>El <strong>Decreto 1496 de 2018</strong> y la <strong>Resolución 773 de 2021</strong> exigen comunicar los peligros del amoniaco según el SGA: etiquetado de recipientes, ficha de datos de seguridad en español disponible y capacitación.</li>\n          <li>El <strong>Decreto 1347 de 2021</strong> creó el Programa de Prevención de Accidentes Mayores (PPAM) para las instalaciones que manejan sustancias químicas peligrosas en cantidades iguales o superiores a los umbrales de su anexo. Las plantas con grandes cargas de refrigerante deben verificar si superan esos umbrales y, si es así, cumplir sus obligaciones.</li>\n        </ul>\n        <p><strong>La ficha de datos de seguridad del amoniaco</strong> lo clasifica con varios peligros del SGA: gas a presión, toxicidad aguda por inhalación, corrosión cutánea y lesiones oculares graves, toxicidad para los organismos acuáticos y, según la clasificación del proveedor, inflamabilidad. Revise los pictogramas de la FDS que tiene su empresa.</p>\n        <p><strong>Elementos de una buena gestión del riesgo con amoniaco:</strong></p>\n        <ul>\n          <li>Planos y diagramas del sistema actualizados, con todas las válvulas identificadas en campo.</li>\n          <li><strong>Procedimientos escritos</strong> para arranque, parada, purga de aceite, apertura de líneas, carga de refrigerante y emergencias.</li>\n          <li>Análisis de riesgos del proceso cuando se diseña o se modifica el sistema.</li>\n          <li><strong>Gestión del cambio</strong>: ninguna modificación (una válvula nueva, un evaporador adicional) se hace sin evaluarla antes.</li>\n          <li>Programa de inspección y mantenimiento: detectores calibrados, válvulas de alivio dentro de su vida útil, revisión de corrosión bajo el aislamiento.</li>\n          <li>Personal entrenado y autorizado para cada tarea.</li>\n          <li>Plan de emergencias coordinado con la brigada y, cuando aplique, con los bomberos y los vecinos.</li>\n        </ul>\n        <p><strong>Contratistas.</strong> Los técnicos externos que intervienen el sistema deben conocer y aplicar los procedimientos de la planta y trabajar con permisos de trabajo.</p>\n      ",
        "keyPoints": [
          "Decreto 1072 de 2015 (controles y emergencias), Decreto 1496 de 2018 y Res. 773 de 2021 (SGA), y Decreto 1347 de 2021 (PPAM) si se superan los umbrales.",
          "Procedimientos escritos para purgas, aperturas de línea, cargas y emergencias.",
          "Gestión del cambio: ninguna modificación del sistema sin evaluación previa."
        ],
        "practice": {
          "q": "¿Qué norma colombiana creó el Programa de Prevención de Accidentes Mayores (PPAM)?",
          "options": [
            "La Ley 1010 de 2006",
            "El Decreto 1347 de 2021",
            "La Resolución 2013 de 1986"
          ]
        }
      },
      {
        "title": "Purgas de aceite y aperturas de línea",
        "content": "\n        <p>Las tareas de mantenimiento en las que se abre el sistema son las que más accidentes producen, como la del caso con que empieza este curso.</p>\n        <p><strong>Purga o drenaje de aceite.</strong> El aceite del compresor viaja con el amoniaco y se acumula en las partes bajas de recipientes y separadores. Hay que drenarlo periódicamente. Reglas de un procedimiento seguro:</p>\n        <ul>\n          <li>Solo la hace personal entrenado y autorizado, con el procedimiento escrito a la mano.</li>\n          <li>Se hace con <strong>dos personas</strong>: una ejecuta y otra observa, lista para dar la alarma.</li>\n          <li>El punto de drenaje tiene una válvula de bloqueo y una <strong>válvula de cierre automático</strong> (de resorte, que se cierra sola si se suelta).</li>\n          <li>En lo posible, se reduce antes la presión del recipiente.</li>\n          <li>El operador usa la protección indicada: como mínimo, respirador de cara completa con el cartucho para amoniaco y guantes resistentes. Debe tener vía de escape despejada.</li>\n          <li><strong>La válvula nunca se deja abierta sin vigilancia</strong>, ni siquiera \"un momento\".</li>\n          <li>El aceite drenado se recibe en un recipiente adecuado y se gestiona como residuo peligroso.</li>\n        </ul>\n        <p><strong>Apertura de líneas</strong> (cambiar una válvula, un sensor, un tramo de tubería):</p>\n        <ol>\n          <li>Permiso de trabajo y procedimiento escrito.</li>\n          <li><strong>Aislar</strong> la sección cerrando y bloqueando las válvulas (aplicando LOTO), y verificar que las válvulas cierran bien.</li>\n          <li><strong>Evacuar el amoniaco</strong> de la sección hacia otra parte del sistema (bombeo o succión del compresor) hasta presión cero o ligeramente negativa.</li>\n          <li><strong>Verificar</strong> con el manómetro que no queda presión y que no vuelve a subir después de unos minutos: si sube, hay líquido atrapado o una válvula que pasa.</li>\n          <li>Abrir con cuidado, aflojando los pernos del lado opuesto al cuerpo primero, con la protección completa y una ruta de escape.</li>\n          <li>Al terminar, probar fugas antes de volver a poner en servicio.</li>\n        </ol>\n        <p><strong>Líquido atrapado.</strong> Un tramo de tubería lleno de amoniaco líquido y aislado entre dos válvulas cerradas puede romperse por la expansión térmica cuando se calienta. Por eso los procedimientos evitan dejar líquido atrapado y los sistemas tienen alivios donde se necesitan.</p>\n      ",
        "keyPoints": [
          "La purga de aceite se hace con procedimiento escrito, dos personas, válvula de cierre automático y nunca desatendida.",
          "Apertura de línea: aislar y bloquear, evacuar el amoniaco, verificar presión en cero y que no vuelva a subir.",
          "El líquido atrapado entre válvulas cerradas puede romper la tubería al calentarse."
        ],
        "practice": {
          "q": "Durante una purga de aceite, el operador necesita ir por una herramienta. ¿Qué hace con la válvula de purga?",
          "options": [
            "La deja abierta, porque regresa en un minuto",
            "La deja abierta, pero pide al compañero que la mire de lejos",
            "La cierra antes de alejarse"
          ]
        }
      },
      {
        "title": "Detección, ventilación y elementos de protección",
        "content": "\n        <p><strong>Detectores de amoniaco.</strong> Se instalan en el cuarto de máquinas y en las áreas donde una fuga puede afectar a las personas. Suelen tener varios niveles de alarma: uno bajo, que avisa para investigar, y uno alto, que activa la ventilación de emergencia, las alarmas de evacuación y, según el diseño, la parada del sistema. Deben calibrarse y probarse según el programa de mantenimiento.</p>\n        <p><strong>Ventilación.</strong> El cuarto de máquinas tiene ventilación normal y una de emergencia que se activa con los detectores o con un pulsador. La descarga va a un lugar seguro, lejos de tomas de aire y de zonas ocupadas.</p>\n        <p><strong>Elementos de protección según la situación:</strong></p>\n        <ul>\n          <li><strong>Respirador de escape</strong> o respirador de cara completa con cartucho para amoniaco: sirve para <strong>salir</strong> de un área con una fuga pequeña o para tareas de rutina con exposición baja y controlada. Los cartuchos tienen una vida limitada y no sirven en concentraciones altas.</li>\n          <li><strong>Equipo de respiración autónomo (ERA o SCBA)</strong>: obligatorio cuando la concentración es desconocida, cuando puede superar el valor inmediatamente peligroso (300 ppm) o en la respuesta a una fuga. Solo lo usa personal entrenado.</li>\n          <li><strong>Protección facial completa</strong>: el amoniaco ataca los ojos; las gafas abiertas no bastan.</li>\n          <li><strong>Guantes</strong> de un material resistente al amoniaco, según la FDS (por ejemplo, butilo o neopreno), y aislados del frío cuando hay riesgo de contacto con líquido.</li>\n          <li><strong>Traje de protección química</strong> para la respuesta a fugas con presencia de líquido.</li>\n        </ul>\n        <p><strong>Un tapabocas de tela o un respirador para polvo no protege</strong> contra el amoniaco. Es un error frecuente creer que cualquier \"mascarilla\" sirve.</p>\n        <p><strong>Ajuste y entrenamiento.</strong> Un respirador solo protege si se ajusta bien a la cara (prueba de ajuste), si el trabajador sabe ponérselo rápido y si está en buen estado. La barba impide el sellado. Los equipos se revisan periódicamente y se guardan limpios, fuera del área de riesgo pero a la mano.</p>\n        <p><strong>Duchas y lavaojos</strong> cerca del cuarto de máquinas y de los puntos de riesgo, en un lugar al que se llegue sin atravesar la zona de la posible fuga.</p>\n      ",
        "keyPoints": [
          "Los detectores tienen niveles de alarma que activan investigación, ventilación de emergencia y evacuación.",
          "Respirador con cartucho: solo para escape o exposiciones bajas; concentración desconocida o alta exige equipo autónomo.",
          "Un tapabocas de tela no protege; el respirador requiere buen ajuste y entrenamiento."
        ],
        "practice": {
          "q": "¿Cuándo es obligatorio usar un equipo de respiración autónomo frente al amoniaco?",
          "options": [
            "Cuando la concentración es desconocida o puede superar 300 ppm",
            "Siempre que se entra a una cámara de refrigeración de producto terminado",
            "Solo cuando el olor es muy débil"
          ]
        }
      },
      {
        "title": "Respuesta a una fuga de amoniaco",
        "content": "\n        <p><strong>Si usted detecta olor a amoniaco o suena una alarma:</strong></p>\n        <ol>\n          <li><strong>No vaya solo a buscar la fuga.</strong> Aléjese del área.</li>\n          <li><strong>Dé la alarma</strong> por el medio establecido e informe qué percibió y dónde.</li>\n          <li>Si está entrenado y puede hacerlo sin entrar a la nube, active la <strong>parada de emergencia</strong> desde el pulsador exterior.</li>\n          <li><strong>Evacúe según el viento.</strong> Observe una manga de viento o una bandera. Salga en dirección <strong>perpendicular</strong> a la dirección del viento para alejarse del recorrido de la nube, y luego diríjase al punto de encuentro ubicado <strong>en contra del viento</strong> (de donde viene el viento). Nunca camine en la misma dirección en que va el viento.</li>\n          <li><strong>No entre a la niebla blanca</strong> ni a zonas bajas como fosos o sótanos, donde se acumula la nube fría.</li>\n          <li>Repórtese en el punto de encuentro y avise si alguien falta.</li>\n        </ol>\n        <p><strong>Si queda atrapado en un lugar con amoniaco</strong> y no puede salir: busque un recinto cerrado, cierre puertas y ventanas, apague la ventilación que tome aire de afuera, cúbrase la boca y la nariz con un paño húmedo y comunique su ubicación.</p>\n        <p><strong>La respuesta a la fuga</strong> (cerrar válvulas en la zona afectada, controlar la nube) solo la hace el equipo de respuesta entrenado, con equipo autónomo y traje químico, y nunca una sola persona.</p>\n        <p><strong>El agua y el amoniaco.</strong> La brigada puede usar cortinas de agua pulverizada para absorber la nube, porque el amoniaco se disuelve en el agua. Pero <strong>nunca se echa agua directamente sobre un charco de amoniaco líquido</strong>: el calor que libera la reacción aumenta la evaporación y la nube. El agua contaminada se contiene: no debe llegar a ríos o alcantarillados.</p>\n        <p><strong>Comunicación con la comunidad.</strong> En fugas grandes, la empresa debe avisar a los organismos de socorro y, según su plan, a los vecinos, indicándoles que se resguarden en sus casas o que evacúen.</p>\n      ",
        "keyPoints": [
          "Ante olor o alarma: no buscar la fuga solo, dar la alarma, activar la parada de emergencia si es seguro y evacuar.",
          "Evacuar perpendicular al viento y luego hacia un punto de encuentro en contra del viento; nunca entrar a la niebla.",
          "Solo el equipo de respuesta entrenado, con equipo autónomo, controla la fuga; no se echa agua sobre el líquido."
        ],
        "practice": {
          "q": "Hay una fuga y el viento sopla del norte hacia el sur. ¿Hacia dónde se evacúa primero?",
          "options": [
            "Hacia el sur, en la misma dirección del viento",
            "Hacia el este u oeste, de forma perpendicular al viento",
            "Directo hacia la nube, para salir más rápido"
          ]
        }
      },
      {
        "title": "Primeros auxilios y después de la emergencia",
        "content": "\n        <p><strong>Regla número uno:</strong> no se convierta en otra víctima. No entre a rescatar a nadie a una zona con amoniaco sin el equipo autónomo y sin ser parte del equipo de respuesta. Dé la alarma y espere al equipo.</p>\n        <p><strong>Inhalación:</strong></p>\n        <ul>\n          <li>Llevar a la persona al aire fresco, en contra del viento, una vez fuera de la zona contaminada.</li>\n          <li>Mantenerla en reposo, semisentada si respira con dificultad, y abrigada.</li>\n          <li>Si no respira, el personal entrenado inicia la reanimación y se activa la emergencia médica.</li>\n          <li>Toda persona que haya inhalado amoniaco en cantidad apreciable debe ser valorada por un médico, aunque se sienta bien: el <strong>edema pulmonar puede aparecer horas después</strong>.</li>\n        </ul>\n        <p><strong>Ojos:</strong> lavar de inmediato con abundante agua, en el lavaojos, durante <strong>al menos 15 minutos</strong> (muchas fichas recomiendan más), manteniendo los párpados abiertos. Retirar los lentes de contacto si es posible. Atención médica urgente: las quemaduras oculares por amoniaco pueden empeorar en las horas siguientes.</p>\n        <p><strong>Piel:</strong> retirar la ropa contaminada y lavar con abundante agua en la ducha de emergencia durante al menos 15 minutos. Si la ropa está congelada y pegada a la piel por el contacto con el líquido, <strong>no la arranque</strong>: descongélela con agua tibia y retírela con cuidado.</p>\n        <p><strong>Qué no hacer:</strong> no neutralizar con ácidos ni vinagre, no aplicar cremas ni ungüentos, no frotar la piel congelada.</p>\n        <p><strong>Lleve la ficha de datos de seguridad</strong> del amoniaco al centro médico.</p>\n        <p><strong>Después de la emergencia:</strong></p>\n        <ul>\n          <li>Nadie vuelve a entrar hasta que el equipo de respuesta mida y autorice.</li>\n          <li>El sistema no se vuelve a poner en servicio hasta reparar la causa y probar fugas.</li>\n          <li>Se reporta el evento y se investiga con el equipo investigador, incluido el COPASST, para encontrar las causas y evitar que se repita.</li>\n          <li>Se revisa el plan de emergencias con lo aprendido.</li>\n        </ul>\n      ",
        "keyPoints": [
          "No entrar a rescatar sin equipo autónomo: dar la alarma y esperar al equipo de respuesta.",
          "Inhalación: aire fresco, reposo y valoración médica; el edema pulmonar puede aparecer horas después.",
          "Ojos y piel: lavar al menos 15 minutos; ropa congelada pegada se descongela con agua tibia, no se arranca."
        ],
        "practice": {
          "q": "Un compañero inhaló amoniaco y ahora dice que se siente bien. ¿Qué corresponde?",
          "options": [
            "Que vuelva a trabajar, porque ya pasó",
            "Que tome leche para neutralizar el amoniaco",
            "Que lo valore un médico, porque el edema pulmonar puede aparecer horas después"
          ]
        }
      }
    ],
    "scenarios": [
      {
        "scenario": "En el cuarto de máquinas se siente olor a amoniaco. Un operario quiere entrar a ver de dónde viene y solo tiene el tapabocas de tela del turno.",
        "options": [
          "Lo dejo entrar rápido, para no perder tiempo en encontrar la fuga.",
          "Lo detengo, damos la alarma, evaluamos desde afuera con los detectores y solo entra el equipo de respuesta con la protección adecuada.",
          "Le presto mi respirador para polvo, que es más grueso."
        ]
      },
      {
        "scenario": "Un trabajador recibe una salpicadura de amoniaco líquido en el antebrazo. Dice que \"no es nada, solo está frío\" y quiere seguir trabajando.",
        "options": [
          "Lo dejo seguir si se seca el brazo con un trapo.",
          "Le pongo crema para quemaduras y una venda.",
          "Lo llevo a la ducha de emergencia, retiramos la ropa contaminada, lavamos al menos 15 minutos y lo enviamos a valoración médica."
        ]
      },
      {
        "scenario": "Debes purgar aceite de un recipiente de baja presión. La válvula de bloqueo no está identificada, no hay procedimiento escrito en el sitio y tu compañero de turno está ocupado en otra área.",
        "options": [
          "Hago la purga solo con cuidado, como la he hecho otras veces.",
          "Espero a tener el procedimiento escrito, la válvula identificada, la protección completa y un segundo operador antes de purgar.",
          "Abro la válvula un poco y me alejo mientras sale el aceite, para no exponerme."
        ]
      },
      {
        "scenario": "Suena la alarma alta de amoniaco. Ves una niebla blanca saliendo por una puerta del cuarto de máquinas hacia el parqueadero. La manga de viento indica que el viento va hacia la portería.",
        "options": [
          "Corro hacia la portería, que es la salida principal.",
          "Me alejo de forma perpendicular al viento, evito la niebla y las zonas bajas, y voy al punto de encuentro ubicado en contra del viento.",
          "Me refugio en el sótano del edificio de al lado hasta que pase."
        ]
      },
      {
        "scenario": "Vas a cambiar una válvula en una línea de líquido. Aislaste la sección y bombeaste el amoniaco hasta que el manómetro marcó cero. Diez minutos después, el manómetro vuelve a marcar presión.",
        "options": [
          "Abro la brida de una vez, porque ya había estado en cero.",
          "Abro solo un poco la brida para dejar salir lo poco que queda.",
          "No abro: informo, reviso si hay líquido atrapado o una válvula que no cierra bien, y repito la evacuación hasta que la presión se mantenga en cero."
        ]
      }
    ],
    "exam": [
      {
        "q": "¿Por qué el olfato no sirve para saber si la concentración de amoniaco es peligrosa?",
        "options": [
          "Porque el olor se nota a concentraciones bajas, el olfato se acostumbra y la intensidad no indica el peligro.",
          "Porque el amoniaco no tiene olor en concentraciones peligrosas y solo se detecta con equipos de medición especiales.",
          "Porque solo huele cuando ya pasó de 300 ppm."
        ]
      },
      {
        "q": "En una fuga de amoniaco líquido, ¿cómo se comporta la nube que se forma?",
        "options": [
          "Sube de inmediato y se dispersa en el aire, porque el amoniaco gaseoso es más liviano que el aire.",
          "Forma una niebla fría y densa que se queda cerca del piso y se mueve con el viento.",
          "Se queda quieta sobre el charco hasta que alguien la ventila con un extractor portátil."
        ]
      },
      {
        "q": "¿Qué materiales ataca el amoniaco y por eso no se usan en sus sistemas?",
        "options": [
          "El acero al carbono y el acero inoxidable.",
          "El vidrio y la cerámica.",
          "El cobre, el latón y el zinc."
        ]
      },
      {
        "q": "¿Cuál es el límite de exposición de referencia para 8 horas al amoniaco (ACGIH y NIOSH)?",
        "options": [
          "25 ppm.",
          "300 ppm, que es el valor que se puede respirar durante toda la jornada.",
          "1.000 ppm, porque por debajo de ese valor no hay efectos."
        ]
      },
      {
        "q": "¿Por qué toda persona que inhaló amoniaco en cantidad apreciable debe ser valorada por un médico?",
        "options": [
          "Porque así lo exige la ARL para pagar la incapacidad del trabajador expuesto.",
          "Porque el edema pulmonar puede aparecer horas después.",
          "Porque el amoniaco produce dependencia."
        ]
      },
      {
        "q": "¿En qué parte del sistema hay grandes cantidades de amoniaco líquido a alta presión?",
        "options": [
          "En los evaporadores de los cuartos fríos, después de la válvula de expansión.",
          "En la succión del compresor.",
          "En el condensador y el recibidor de alta presión."
        ]
      },
      {
        "q": "¿Dónde debe estar el pulsador de parada de emergencia del sistema?",
        "options": [
          "Fuera del cuarto de máquinas, para activarlo sin entrar a la zona de la fuga.",
          "Dentro del cuarto de máquinas, junto al compresor principal.",
          "En la oficina del jefe de mantenimiento, para controlar quién detiene el sistema de refrigeración."
        ]
      },
      {
        "q": "Según el Decreto 1347 de 2021, ¿cuándo debe una planta con amoniaco cumplir el Programa de Prevención de Accidentes Mayores?",
        "options": [
          "Siempre que tenga cualquier cantidad de amoniaco.",
          "Cuando la cantidad de sustancias peligrosas iguale o supere los umbrales del anexo del decreto.",
          "Solo si la planta está ubicada en una zona urbana con vecinos a menos de 100 metros."
        ]
      },
      {
        "q": "¿Qué es la gestión del cambio en un sistema de amoniaco?",
        "options": [
          "Cambiar el amoniaco por otro refrigerante cada cinco años.",
          "Rotar al personal de operación entre los turnos de la semana.",
          "Evaluar cualquier modificación del sistema antes de hacerla."
        ]
      },
      {
        "q": "¿Qué característica debe tener la válvula del punto de drenaje de aceite?",
        "options": [
          "Debe ser de cierre automático, de resorte, que se cierre sola al soltarla.",
          "Debe ser de bronce, porque resiste mejor el frío del aceite que sale del recipiente.",
          "Debe quedar abierta de forma permanente para que el aceite salga solo durante el turno."
        ]
      },
      {
        "q": "Antes de abrir una línea, la presión llegó a cero, pero sube de nuevo minutos después. ¿Qué indica?",
        "options": [
          "Que el manómetro está dañado y se puede abrir la brida sin problema.",
          "Que hay líquido atrapado o una válvula que no cierra bien; no se debe abrir.",
          "Que la temperatura del cuarto subió y es normal."
        ]
      },
      {
        "q": "¿Por qué un tramo de tubería con amoniaco líquido, aislado entre dos válvulas cerradas, es peligroso?",
        "options": [
          "Porque el amoniaco líquido se solidifica con el frío y tapa por completo la tubería.",
          "Porque las válvulas cerradas se oxidan más rápido con el amoniaco.",
          "Porque al calentarse el líquido se expande y puede romper la tubería."
        ]
      },
      {
        "q": "¿Para qué sirve un respirador de cara completa con cartucho para amoniaco?",
        "options": [
          "Para escapar de una fuga pequeña o para tareas de rutina con exposición baja y controlada.",
          "Para entrar a una nube de concentración desconocida y cerrar la válvula que está fugando.",
          "Para cualquier concentración, siempre que el cartucho sea nuevo."
        ]
      },
      {
        "q": "Hay una fuga y el viento sopla desde el cuarto de máquinas hacia el comedor. ¿Hacia dónde evacúa?",
        "options": [
          "Hacia el comedor, que está en la misma dirección del viento.",
          "Perpendicular al viento y luego hacia un punto de encuentro en contra del viento.",
          "Hacia el cuarto de máquinas, para cerrar la válvula de la fuga."
        ]
      },
      {
        "q": "¿Por qué no se echa agua directamente sobre un charco de amoniaco líquido?",
        "options": [
          "Porque el agua congela el amoniaco y forma un bloque que tapa los desagües del cuarto de máquinas.",
          "Porque el agua está prohibida en los cuartos de máquinas por el riesgo eléctrico de los compresores.",
          "Porque el calor de la reacción aumenta la evaporación y la nube."
        ]
      },
      {
        "q": "La ropa de un trabajador quedó congelada y pegada a la piel por el amoniaco líquido. ¿Qué se hace?",
        "options": [
          "Descongelarla con agua tibia y retirarla con cuidado.",
          "Arrancarla rápido para que la piel quede libre del contacto con el amoniaco.",
          "Dejarla puesta hasta que llegue al hospital, sin lavar la zona afectada."
        ]
      }
    ],
    "workshops": [],
    "project": null
  },
  {
    "id": "manipulacion-alimentos",
    "title": "Manipulación Higiénica de Alimentos (BPM)",
    "hours": 1.5,
    "category": "regimen_especial",
    "regulation": "Resolución 2674 de 2013 (Ministerio de Salud y Protección Social), Ley 9 de 1979; referencias técnicas: OMS (cinco claves para la inocuidad) y FDA Food Code",
    "legalNotice": "ATENCIÓN MARCO LEGAL ESPECIAL: según la Res. 2674 de 2013, los manipuladores de alimentos deben tener reconocimiento médico de aptitud y recibir capacitación continua, con un mínimo de 10 horas al año. Esta constancia cubre 1,5 horas de ese plan. Valide con la Secretaría de Salud de su municipio si exige que el capacitador o la entidad estén inscritos o autorizados.",
    "summary": "Por qué los alimentos enferman, qué exige la Res. 2674 de 2013 al manipulador, la higiene personal y el lavado de manos, la contaminación cruzada y los alérgenos, el control de temperaturas, la recepción y el almacenamiento, la limpieza, desinfección y control de plagas, y qué hacer ante un posible brote.",
    "fieldCase": "En un casino de empresa se cortó pollo crudo en una tabla y, sin lavarla ni desinfectarla, se usó la misma tabla para picar la ensalada. Esa tarde, varios trabajadores presentaron diarrea, fiebre y vómito. El laboratorio confirmó Salmonella.",
    "checklist": [
      "Tengo mi reconocimiento médico de aptitud vigente y reporto cualquier enfermedad antes de trabajar.",
      "Me lavo las manos al ingresar, al cambiar de tarea, después del baño y después de tocar crudos o basura.",
      "Uso uniforme limpio de color claro, cabello cubierto, uñas cortas sin esmalte y sin joyas.",
      "Separo crudos de cocidos y uso tablas y utensilios diferenciados.",
      "Controlo y registro las temperaturas de neveras, cocción y mantenimiento.",
      "Rotulo los alimentos y aplico la rotación: lo primero que vence es lo primero que sale.",
      "Limpio y desinfecto superficies y utensilios según el procedimiento.",
      "Reporto plagas, alimentos sospechosos y casos de enfermedad entre los consumidores."
    ],
    "failureAnalysis": "Falla raíz: contaminación cruzada por utensilios compartidos entre alimentos crudos y listos para consumir, sin un código de colores de tablas ni un procedimiento de limpieza y desinfección entre usos.",
    "onSiteClosure": "Práctica en su empresa: demostrar el lavado de manos ante el supervisor; verificar con el termómetro de la empresa la temperatura de una nevera y de un alimento cocido, y registrarla; aplicar el procedimiento de limpieza y desinfección de una superficie; y completar las horas restantes del plan anual de capacitación de la empresa.",
    "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80",
    "modules": [
      {
        "title": "Las enfermedades transmitidas por alimentos y el marco legal",
        "content": "\n        <p>Una <strong>enfermedad transmitida por alimentos (ETA)</strong> es la que se produce al consumir alimentos o agua contaminados con microorganismos, sus toxinas, sustancias químicas o cuerpos extraños. Los síntomas más comunes son diarrea, vómito, dolor abdominal y fiebre, pero algunas ETA causan daños graves en riñones, sistema nervioso o en el embarazo, y pueden ser mortales en niños, adultos mayores y personas con defensas bajas.</p>\n        <p>Un <strong>brote</strong> ocurre cuando dos o más personas se enferman después de consumir el mismo alimento. En comedores, casinos y restaurantes, un solo error puede enfermar a decenas de personas en una tarde, como en el caso del curso.</p>\n        <p><strong>Microorganismos frecuentes:</strong></p>\n        <ul>\n          <li><strong>Salmonella</strong>: en pollo, huevos y carnes crudas o mal cocidas.</li>\n          <li><strong>Escherichia coli</strong> patógena: en carne molida mal cocida, verduras contaminadas y agua.</li>\n          <li><strong>Staphylococcus aureus</strong>: llega desde las manos, la nariz o heridas del manipulador y produce toxinas que no se destruyen al recalentar.</li>\n          <li><strong>Listeria</strong>: crece incluso en refrigeración; peligrosa en embarazadas.</li>\n          <li><strong>Norovirus</strong> y <strong>hepatitis A</strong>: se transmiten por manipuladores enfermos que no se lavan bien las manos.</li>\n        </ul>\n        <p><strong>Marco legal.</strong> La <strong>Resolución 2674 de 2013</strong> del Ministerio de Salud y Protección Social establece los requisitos sanitarios para quienes fabrican, procesan, preparan, envasan, almacenan, transportan, distribuyen y comercializan alimentos, incluidos los restaurantes y servicios de alimentación. Desarrolla las <strong>Buenas Prácticas de Manufactura (BPM)</strong>: las condiciones de instalaciones, equipos, personal, procesos y saneamiento que garantizan alimentos inocuos. La <strong>Ley 9 de 1979</strong> es el marco sanitario general.</p>\n        <p><strong>Vigilancia.</strong> Las <strong>secretarías de salud</strong> municipales, distritales o departamentales inspeccionan los establecimientos y el <strong>INVIMA</strong> vigila la producción de alimentos de su competencia. Pueden aplicar medidas sanitarias como el cierre temporal o el decomiso.</p>\n        <p><strong>Inocuidad</strong> significa que el alimento no causará daño a quien lo consume. Es responsabilidad de toda la cadena, y el manipulador es el último control antes del plato.</p>\n      ",
        "keyPoints": [
          "Una ETA se produce por alimentos con microorganismos, toxinas, químicos o cuerpos extraños.",
          "Res. 2674 de 2013: requisitos sanitarios y BPM para toda la cadena de alimentos, incluidos restaurantes.",
          "Vigilan las secretarías de salud y el INVIMA; el manipulador es el último control antes del plato."
        ],
        "practice": {
          "q": "¿Qué es una enfermedad transmitida por alimentos (ETA)?",
          "options": [
            "El cansancio después de comer mucho",
            "La que se produce al consumir alimentos o agua contaminados",
            "Una alergia a cualquier comida"
          ]
        }
      },
      {
        "title": "El manipulador: estado de salud y capacitación obligatoria",
        "content": "\n        <p>Un <strong>manipulador de alimentos</strong> es toda persona que interviene directamente, aunque sea de forma ocasional, en actividades de fabricación, preparación, envase, almacenamiento, transporte o servicio de alimentos.</p>\n        <p><strong>Estado de salud.</strong> La Resolución 2674 de 2013 exige:</p>\n        <ul>\n          <li>Un <strong>reconocimiento médico</strong> que certifique la aptitud para manipular alimentos, antes de empezar y al menos una vez al año, y cada vez que se considere necesario por razones clínicas o epidemiológicas, por ejemplo después de una enfermedad que pueda contaminar los alimentos.</li>\n          <li>Que la empresa tome medidas para que <strong>no manipule alimentos</strong> ninguna persona de quien se sepa o se sospeche que padece una enfermedad que pueda transmitirse por los alimentos, o que tenga heridas infectadas, irritaciones de la piel o diarrea.</li>\n        </ul>\n        <p><strong>Su responsabilidad como manipulador:</strong> informar al supervisor <strong>antes de trabajar</strong> si tiene diarrea, vómito, fiebre, ictericia (piel u ojos amarillos), dolor de garganta con fiebre, secreción por oídos, ojos o nariz, o heridas y lesiones en manos y brazos. La empresa lo reubicará en tareas sin contacto con alimentos o lo enviará a valoración médica. Trabajar enfermo \"para no fallar\" es uno de los orígenes más comunes de los brotes.</p>\n        <p><strong>Heridas pequeñas:</strong> se cubren con un vendaje impermeable de color visible y, encima, un guante.</p>\n        <p><strong>Capacitación.</strong> La resolución exige que la empresa tenga un <strong>plan de capacitación continuo y permanente</strong> para los manipuladores, desde el momento de su contratación, con una <strong>intensidad mínima de 10 horas al año</strong>, sobre:</p>\n        <ul>\n          <li>prácticas higiénicas en la manipulación;</li>\n          <li>los riesgos de contaminación y su control;</li>\n          <li>limpieza y desinfección, y los demás programas del plan de saneamiento;</li>\n          <li>las tareas específicas que realiza cada persona.</li>\n        </ul>\n        <p>El plan debe estar <strong>escrito, documentado y con evidencia</strong> de su cumplimiento. La capacitación puede darla la empresa, personas naturales o entidades con la idoneidad requerida. Algunas secretarías de salud verifican o exigen que el capacitador esté inscrito o autorizado: consulte en su municipio.</p>\n        <p><strong>Este curso</strong> aporta 1,5 horas a ese plan. Las horas restantes y la práctica se completan en su empresa.</p>\n      ",
        "keyPoints": [
          "Reconocimiento médico de aptitud antes de empezar, al menos una vez al año y cuando haya razones clínicas.",
          "El manipulador enfermo, con diarrea o heridas infectadas, no manipula alimentos: lo informa antes de trabajar.",
          "Plan de capacitación continuo y documentado, con mínimo 10 horas al año."
        ],
        "practice": {
          "q": "Según la Res. 2674 de 2013, ¿cuál es la intensidad mínima anual de capacitación del manipulador?",
          "options": [
            "40 horas",
            "2 horas",
            "10 horas"
          ]
        }
      },
      {
        "title": "Prácticas higiénicas y lavado de manos",
        "content": "\n        <p>Las manos son el principal vehículo de contaminación en la cocina. Las prácticas higiénicas exigidas por la Res. 2674 de 2013 apuntan a que el manipulador no lleve microorganismos al alimento.</p>\n        <p><strong>Presentación personal:</strong></p>\n        <ul>\n          <li><strong>Uniforme limpio, de color claro</strong>, que permita ver la suciedad, sin bolsillos por encima de la cintura, de uso exclusivo en el área de trabajo. No se sale a la calle con él.</li>\n          <li><strong>Cabello recogido y cubierto</strong> totalmente con gorro o malla; barba y bigote cubiertos.</li>\n          <li><strong>Uñas cortas, limpias y sin esmalte</strong>; sin uñas postizas.</li>\n          <li><strong>Sin joyas</strong>: anillos, relojes, pulseras, aretes ni piercings visibles. Guardan suciedad y pueden caer al alimento.</li>\n          <li><strong>Calzado cerrado</strong>, limpio y antideslizante.</li>\n          <li><strong>Tapabocas</strong> cuando lo exija el proceso, cubriendo nariz y boca.</li>\n        </ul>\n        <p><strong>Comportamientos prohibidos en las áreas de alimentos:</strong> comer, beber, masticar chicle, fumar, escupir, estornudar o toser sobre los alimentos, tocarse la cara, la nariz o el cabello, usar el celular mientras se manipula, y probar los alimentos con los dedos o con el mismo utensilio con que se revuelve.</p>\n        <p><strong>Cuándo lavarse las manos:</strong></p>\n        <ul>\n          <li>Al ingresar al área de trabajo y al regresar de cualquier pausa.</li>\n          <li><strong>Después de ir al baño.</strong></li>\n          <li>Después de manipular alimentos crudos (carnes, pollo, pescado, huevos, verduras sin desinfectar).</li>\n          <li>Después de tocar basura, dinero, el celular, la cara o el cabello, o de limpiar.</li>\n          <li>Antes de manipular alimentos listos para consumir.</li>\n          <li>Al cambiar de tarea y antes de ponerse guantes.</li>\n        </ul>\n        <p><strong>Cómo lavarse las manos:</strong></p>\n        <ol>\n          <li>Mojar manos y antebrazos con agua potable.</li>\n          <li>Aplicar jabón y frotar <strong>al menos 20 segundos</strong>: palmas, dorsos, entre los dedos, uñas y muñecas.</li>\n          <li>Cepillar las uñas si es necesario.</li>\n          <li>Enjuagar con abundante agua.</li>\n          <li>Secar con toalla desechable o secador; cerrar la llave con la toalla si no es de pedal o sensor.</li>\n          <li>Aplicar desinfectante de manos si el procedimiento de la empresa lo indica.</li>\n        </ol>\n        <p><strong>Guantes:</strong> no reemplazan el lavado de manos. Se cambian al cambiar de tarea, si se rompen o se ensucian, y después de tocar crudos, basura o superficies sucias. Un guante sucio contamina igual que una mano sucia.</p>\n      ",
        "keyPoints": [
          "Uniforme claro y limpio, cabello cubierto, uñas cortas sin esmalte y sin joyas.",
          "Lavado de manos de al menos 20 segundos al ingresar, después del baño, tras tocar crudos o basura y al cambiar de tarea.",
          "Los guantes no reemplazan el lavado y se cambian al cambiar de tarea o si se ensucian."
        ],
        "practice": {
          "q": "¿Cuánto tiempo, como mínimo, se frotan las manos con jabón?",
          "options": [
            "Al menos 20 segundos",
            "3 segundos",
            "Lo que tarde en mojarlas"
          ]
        }
      },
      {
        "title": "Contaminación, contaminación cruzada y alérgenos",
        "content": "\n        <p><strong>Tipos de contaminación:</strong></p>\n        <ul>\n          <li><strong>Biológica</strong>: bacterias, virus, parásitos y hongos. Es la causa más frecuente de las ETA.</li>\n          <li><strong>Química</strong>: residuos de productos de limpieza, plaguicidas, lubricantes, metales de utensilios inadecuados o exceso de aditivos.</li>\n          <li><strong>Física</strong>: vidrio, metal, plástico, piedras, cabellos, uñas, joyas, astillas de madera.</li>\n        </ul>\n        <p><strong>Contaminación cruzada</strong> es el paso de contaminantes de un alimento, superficie o persona a otro alimento. Las formas más comunes:</p>\n        <ul>\n          <li>Usar la <strong>misma tabla o cuchillo</strong> para crudos y para alimentos listos para consumir, sin lavar y desinfectar entre usos (el caso del curso).</li>\n          <li>Guardar <strong>carnes crudas encima</strong> de alimentos cocidos o listos en la nevera, de modo que los jugos goteen sobre ellos.</li>\n          <li>Manos o guantes que tocan crudos y luego alimentos listos.</li>\n          <li>Trapos de limpieza usados en varias superficies sin lavar.</li>\n          <li>Productos químicos almacenados junto a los alimentos o en envases de alimentos.</li>\n        </ul>\n        <p><strong>Cómo evitarla:</strong></p>\n        <ul>\n          <li><strong>Código de colores</strong> para tablas y cuchillos (por ejemplo: rojo para carnes rojas, amarillo para pollo, azul para pescado, verde para verduras, blanco para lácteos y panadería). Lo importante es que la empresa defina el suyo y todos lo respeten.</li>\n          <li>Separar <strong>zonas o momentos</strong> de trabajo para crudos y para listos para consumir.</li>\n          <li>En la nevera: <strong>listos y cocidos arriba, crudos abajo</strong>, en recipientes tapados.</li>\n          <li>Lavar y desinfectar superficies y utensilios entre un uso y otro.</li>\n          <li>Productos químicos en un área separada, rotulados y en sus envases originales.</li>\n        </ul>\n        <p><strong>Alérgenos.</strong> Algunas personas tienen reacciones graves, incluso mortales, a alimentos como maní, frutos secos, leche, huevo, trigo (gluten), soya, pescado y mariscos. Para ellas, una traza basta. Por eso:</p>\n        <ul>\n          <li>Conocer los ingredientes de cada preparación y responder con verdad cuando un consumidor pregunte.</li>\n          <li>Evitar el contacto cruzado: utensilios, aceites de fritura y superficies limpios al preparar un plato sin alérgenos.</li>\n          <li>Ante la duda, decir \"no sé\" y consultar; nunca asegurar que un plato \"no tiene\" sin verificar.</li>\n        </ul>\n      ",
        "keyPoints": [
          "Contaminación biológica, química y física; la biológica es la causa más frecuente de ETA.",
          "Contaminación cruzada: tablas compartidas, crudos sobre cocidos, manos y trapos; se evita con colores y separación.",
          "Alérgenos: conocer ingredientes, evitar el contacto cruzado y nunca asegurar sin verificar."
        ],
        "practice": {
          "q": "En la nevera, ¿dónde se guardan las carnes crudas?",
          "options": [
            "Junto con las ensaladas",
            "En los niveles bajos, tapadas, debajo de los alimentos listos",
            "En el nivel más alto"
          ]
        }
      },
      {
        "title": "Control de temperaturas: la zona de peligro",
        "content": "\n        <p>Las bacterias se multiplican muy rápido entre <strong>5 °C y 60 °C</strong>: es la <strong>zona de peligro</strong>. En condiciones favorables, algunas duplican su número en unos 20 minutos. El objetivo es que los alimentos perecederos pasen el menor tiempo posible en ese rango.</p>\n        <p><strong>Temperaturas de referencia (buenas prácticas de la OMS y del FDA Food Code):</strong></p>\n        <ul>\n          <li><strong>Refrigeración</strong>: a <strong>5 °C o menos</strong> (muchos procedimientos fijan 4 °C). El frío no mata las bacterias, solo las frena.</li>\n          <li><strong>Congelación</strong>: a <strong>-18 °C o menos</strong>.</li>\n          <li><strong>Cocción completa</strong>: el centro del alimento debe alcanzar al menos <strong>74 °C</strong> en pollo, carnes molidas, rellenos y recalentados. Se verifica con termómetro de punzón limpio y desinfectado, en la parte más gruesa.</li>\n          <li><strong>Mantenimiento en caliente</strong> (baño de maría, vitrinas): a <strong>60 °C o más</strong>.</li>\n          <li><strong>Mantenimiento en frío</strong> de ensaladas y postres: a <strong>5 °C o menos</strong>.</li>\n        </ul>\n        <p>La empresa debe tener su propio procedimiento con las temperaturas y tiempos definidos para sus productos; los valores anteriores son la referencia técnica más usada.</p>\n        <p><strong>Enfriamiento de alimentos cocidos.</strong> Un error frecuente es dejar ollas grandes enfriándose a temperatura ambiente durante horas o meterlas calientes y tapadas en la nevera, donde el centro tarda mucho en enfriarse. Lo correcto:</p>\n        <ul>\n          <li>Dividir en porciones pequeñas o recipientes poco profundos.</li>\n          <li>Usar baño de hielo o abatidor de temperatura si lo hay.</li>\n          <li>Enfriar rápido: como referencia, de 60 °C a 21 °C en 2 horas y a 5 °C en las 4 horas siguientes.</li>\n        </ul>\n        <p><strong>Descongelación segura:</strong> en la nevera, con anticipación; bajo agua potable fría corriendo; o en el microondas si se cocina de inmediato. <strong>Nunca</strong> sobre el mesón a temperatura ambiente. Un alimento descongelado no se vuelve a congelar crudo.</p>\n        <p><strong>Recalentar:</strong> una sola vez, hasta 74 °C en el centro y rápido. No se mezcla comida recalentada con comida fresca.</p>\n        <p><strong>Registrar.</strong> Las temperaturas de neveras, congeladores, cocción y mantenimiento se miden con termómetros calibrados y se registran en los formatos de la empresa. Si una nevera está por encima de 5 °C, se reporta de inmediato y se evalúa qué hacer con los alimentos, según cuánto tiempo estuvieron en la zona de peligro.</p>\n      ",
        "keyPoints": [
          "Zona de peligro: entre 5 °C y 60 °C; refrigeración a 5 °C o menos y congelación a -18 °C o menos.",
          "Cocción hasta 74 °C en el centro y mantenimiento caliente a 60 °C o más, medidos con termómetro.",
          "Enfriar rápido en porciones pequeñas; descongelar en nevera o agua fría corriendo, nunca en el mesón."
        ],
        "practice": {
          "q": "¿Cuál es la zona de peligro de temperatura para los alimentos?",
          "options": [
            "Por encima de 74 °C",
            "Entre -18 °C y 0 °C",
            "Entre 5 °C y 60 °C"
          ]
        }
      },
      {
        "title": "Recepción, almacenamiento y rotación",
        "content": "\n        <p><strong>Recepción de materias primas.</strong> La inocuidad empieza en la puerta. Al recibir:</p>\n        <ul>\n          <li>Comprar a <strong>proveedores confiables</strong>, con registro, notificación o permiso sanitario cuando el producto lo requiere.</li>\n          <li>Verificar la <strong>temperatura</strong> de refrigerados y congelados al llegar; un congelado con signos de haberse descongelado se rechaza.</li>\n          <li>Revisar <strong>fechas de vencimiento</strong>, rotulado e integridad de los empaques: latas abombadas, golpeadas u oxidadas, empaques rotos o húmedos se rechazan.</li>\n          <li>Revisar las <strong>características del producto</strong>: olor, color, textura. Carnes con olor anormal o viscosas, pescado de ojos hundidos y opacos, frutas y verduras en descomposición se rechazan.</li>\n          <li>Verificar las condiciones del vehículo de transporte: limpio y, para perecederos, refrigerado.</li>\n          <li>Guardar de inmediato los refrigerados y congelados; no dejarlos en el muelle.</li>\n        </ul>\n        <p><strong>Almacenamiento:</strong></p>\n        <ul>\n          <li><strong>Nada en contacto directo con el piso</strong>: en estibas o estantes, separados de paredes y techos para permitir la limpieza y la ventilación.</li>\n          <li>Áreas limpias, secas, ventiladas e iluminadas, protegidas de plagas.</li>\n          <li>Separar alimentos de <strong>productos de limpieza y químicos</strong>, que van en un área aparte.</li>\n          <li>En neveras: no sobrecargar (el aire frío debe circular), recipientes tapados, crudos abajo y listos arriba.</li>\n          <li>Productos abiertos o preparados en recipientes adecuados, tapados y <strong>rotulados</strong> con el nombre, la fecha de preparación o apertura y la fecha límite de uso.</li>\n          <li>No reutilizar envases de productos químicos para alimentos ni al revés.</li>\n        </ul>\n        <p><strong>Rotación de inventarios:</strong></p>\n        <ul>\n          <li><strong>PEPS</strong> (primero en entrar, primero en salir): lo que llegó antes se usa antes.</li>\n          <li><strong>FEFO</strong> o PVPS (primero en vencer, primero en salir): cuando las fechas de vencimiento no siguen el orden de llegada, manda la fecha de vencimiento.</li>\n          <li>Ubicar adelante lo más próximo a vencer.</li>\n          <li>Retirar y separar los productos vencidos o deteriorados, identificándolos como no aptos para que nadie los use por error.</li>\n        </ul>\n        <p><strong>Un alimento vencido no se \"aprovecha\"</strong> cocinándolo, mezclándolo en otra preparación o regalándolo. Se descarta según el procedimiento.</p>\n      ",
        "keyPoints": [
          "Recepción: proveedores confiables, temperatura, fechas, empaques íntegros y características del producto.",
          "Nada en el piso, químicos separados, neveras sin sobrecargar y productos rotulados con fechas.",
          "Rotación PEPS y FEFO; los vencidos se separan y descartan, nunca se \"aprovechan\"."
        ],
        "practice": {
          "q": "¿Cuál es la forma correcta de descongelar un pollo?",
          "options": [
            "En la nevera, con anticipación",
            "Sobre el mesón durante la noche",
            "En agua caliente estancada"
          ]
        }
      },
      {
        "title": "Limpieza, desinfección, agua, residuos y plagas",
        "content": "\n        <p>La Res. 2674 de 2013 exige a los establecimientos un <strong>plan de saneamiento</strong> escrito, con al menos cuatro programas: <strong>limpieza y desinfección</strong>, <strong>manejo de residuos</strong>, <strong>control de plagas</strong> y <strong>abastecimiento de agua potable</strong>. Cada programa define qué se hace, quién, cómo, con qué frecuencia y cómo se registra.</p>\n        <p><strong>Limpiar no es lo mismo que desinfectar:</strong></p>\n        <ul>\n          <li><strong>Limpiar</strong> es retirar la suciedad visible, la grasa y los residuos de alimento con agua y detergente.</li>\n          <li><strong>Desinfectar</strong> es reducir los microorganismos a niveles seguros con un desinfectante aprobado (por ejemplo, soluciones de cloro o amonios cuaternarios) o con calor.</li>\n          <li>Se limpia <strong>primero</strong> y se desinfecta <strong>después</strong>: un desinfectante sobre una superficie sucia no funciona bien.</li>\n        </ul>\n        <p><strong>Pasos generales:</strong> retirar residuos → lavar con detergente → enjuagar → aplicar el desinfectante a la <strong>concentración y el tiempo de contacto</strong> que indique la ficha técnica → enjuagar si el producto lo exige → dejar secar al aire.</p>\n        <p><strong>Reglas clave:</strong></p>\n        <ul>\n          <li>Preparar las soluciones con la medida indicada; \"más cloro\" no desinfecta mejor y puede contaminar el alimento.</li>\n          <li><strong>Nunca mezclar productos</strong> (por ejemplo, cloro con amoníaco o con ácidos): generan gases tóxicos.</li>\n          <li>Tablas, cuchillos y superficies que tocan alimentos se limpian y desinfectan entre usos con alimentos diferentes, especialmente entre crudos y listos.</li>\n          <li>Trapos y esponjas se cambian, lavan y desinfectan con frecuencia, o se usan desechables.</li>\n        </ul>\n        <p><strong>Agua potable.</strong> Toda el agua que entra en contacto con los alimentos, las superficies y las manos debe ser potable. Los tanques de almacenamiento se lavan y desinfectan periódicamente. El hielo se fabrica con agua potable y se manipula con pala, nunca con las manos ni con el vaso.</p>\n        <p><strong>Residuos:</strong> canecas con tapa de pedal, identificadas, retiradas con frecuencia del área de preparación y almacenadas en un lugar separado. Después de manipular basura, lavado de manos.</p>\n        <p><strong>Control de plagas</strong> (cucarachas, roedores, moscas): se previene impidiendo que entren (mallas, sellos en puertas y desagües), que encuentren comida (alimentos tapados, sin residuos) y que encuentren refugio (orden y aseo). Las aplicaciones químicas las hace una empresa autorizada, sin alimentos expuestos. El manipulador <strong>reporta</strong> cualquier señal: excrementos, roeduras, insectos vivos o muertos.</p>\n      ",
        "keyPoints": [
          "Plan de saneamiento: limpieza y desinfección, residuos, control de plagas y agua potable.",
          "Primero limpiar, luego desinfectar, con la concentración y el tiempo indicados; nunca mezclar productos.",
          "Agua e hielo potables, basura tapada y retirada, y reportar cualquier señal de plagas."
        ],
        "practice": {
          "q": "¿Qué significa FEFO (primero en vencer, primero en salir)?",
          "options": [
            "Que se usa primero lo que está más cerca de la puerta",
            "Que se usa primero lo que vence primero",
            "Que se usa primero lo más barato"
          ]
        }
      },
      {
        "title": "Servicio, quejas y qué hacer ante un posible brote",
        "content": "\n        <p><strong>Durante el servicio:</strong></p>\n        <ul>\n          <li>Mantener los alimentos calientes a 60 °C o más y los fríos a 5 °C o menos, y medir periódicamente.</li>\n          <li>Usar pinzas, cucharones o guantes para servir; nunca las manos desnudas en alimentos listos para consumir.</li>\n          <li>Tomar platos, vasos y cubiertos por la base o el mango, sin tocar donde va la comida o la boca.</li>\n          <li>Proteger los alimentos expuestos con vitrinas o tapas.</li>\n          <li>No rellenar recipientes con comida nueva sobre la que lleva horas en exhibición.</li>\n          <li>Lo que sale a la mesa y regresa <strong>no se vuelve a servir</strong>.</li>\n          <li>Descartar lo que estuvo en exhibición fuera de temperatura más tiempo del permitido por el procedimiento.</li>\n        </ul>\n        <p><strong>Transporte de alimentos preparados:</strong> en recipientes cerrados, limpios y que mantengan la temperatura, en vehículos limpios y sin transportar junto a químicos o animales.</p>\n        <p><strong>Quejas de los consumidores.</strong> Toda queja sobre el alimento (sabor extraño, cuerpo extraño, malestar después de comer) se recibe con respeto, se <strong>registra</strong> y se informa al supervisor. Si es posible, se guarda una muestra del alimento implicado.</p>\n        <p><strong>Muestras testigo.</strong> Muchos servicios de alimentación guardan en refrigeración una porción rotulada de cada preparación servida durante un tiempo definido. Si hay un brote, permiten al laboratorio identificar el alimento responsable.</p>\n        <p><strong>Ante un posible brote</strong> (varias personas con síntomas después de comer en el mismo lugar):</p>\n        <ol>\n          <li>Informar de inmediato al supervisor o al responsable del servicio.</li>\n          <li><strong>No descartar</strong> los alimentos sospechosos ni las muestras testigo: separarlos, rotularlos y guardarlos en refrigeración.</li>\n          <li>Suspender el servicio de las preparaciones sospechosas.</li>\n          <li>La empresa notifica a la <strong>secretaría de salud</strong>, que investiga el brote, toma muestras y define medidas.</li>\n          <li>Identificar a los manipuladores que participaron y su estado de salud.</li>\n          <li>Colaborar con la investigación con información veraz: qué se preparó, cómo, a qué temperaturas y quién lo manipuló.</li>\n        </ol>\n        <p><strong>Las visitas de inspección sanitaria</strong> revisan instalaciones, registros de temperaturas, plan de saneamiento, reconocimientos médicos y capacitación del personal. Tener los registros al día es la mejor evidencia de que se trabaja bien.</p>\n        <p><strong>La regla de oro:</strong> si tiene dudas sobre la inocuidad de un alimento, no lo sirva. Ante la duda, se descarta.</p>\n      ",
        "keyPoints": [
          "Servir con utensilios, mantener temperaturas y nunca volver a servir lo que regresa de la mesa.",
          "Quejas registradas; muestras testigo rotuladas en refrigeración.",
          "Posible brote: avisar, no descartar alimentos sospechosos ni muestras y notificar a la secretaría de salud."
        ],
        "practice": {
          "q": "¿En qué orden se hace el saneamiento de una superficie?",
          "options": [
            "Solo se desinfecta",
            "Primero se desinfecta y luego se limpia",
            "Primero se limpia y luego se desinfecta"
          ]
        }
      }
    ],
    "scenarios": [
      {
        "scenario": "Acabas de cortar pollo crudo y tu compañero te pide que pases la misma tabla y el mismo cuchillo para picar la lechuga de la ensalada.",
        "options": [
          "Los paso enjuagados con agua.",
          "Uso una tabla y un cuchillo del color asignado a verduras, y lavo y desinfecto los que usé con el pollo.",
          "Volteo la tabla y uso el otro lado."
        ]
      },
      {
        "scenario": "Al empezar el turno, el termómetro de la nevera de carnes marca 9 °C. No sabes desde cuándo está así.",
        "options": [
          "Sigo usando las carnes, porque están frías al tacto.",
          "Bajo el termostato y no digo nada.",
          "Lo reporto al supervisor, lo registro y se evalúan los alimentos según el tiempo fuera de temperatura antes de usarlos."
        ]
      },
      {
        "scenario": "Amaneciste con diarrea, pero hoy hay mucho trabajo en la cocina y no quieres dejar solos a tus compañeros.",
        "options": [
          "Informo al supervisor antes de empezar para que me reubiquen sin contacto con alimentos o me envíen a valoración.",
          "Trabajo con guantes y me lavo más las manos.",
          "Trabajo normal y tomo un medicamento para la diarrea."
        ]
      },
      {
        "scenario": "Quedó una olla grande de sopa caliente después del almuerzo. Un compañero propone taparla y dejarla en el mesón hasta la tarde para que se enfríe y luego guardarla.",
        "options": [
          "La dejamos en el mesón tapada, así no le cae nada.",
          "La metemos así, entera y caliente, en la nevera.",
          "La dividimos en recipientes poco profundos, la enfriamos rápido con baño de hielo y la refrigeramos rotulada."
        ]
      },
      {
        "scenario": "En la tarde, cinco trabajadores que almorzaron en el casino llegan a enfermería con vómito y diarrea. Un compañero propone botar lo que sobró del almuerzo \"para evitar problemas\".",
        "options": [
          "Boto todo para que no le haga daño a nadie más.",
          "Aviso al supervisor, separo y rotulo los alimentos sospechosos y las muestras testigo, y se suspende su servicio para que se notifique a la secretaría de salud.",
          "Recaliento lo que sobró para que quede seguro y lo sirvo en la comida."
        ]
      }
    ],
    "exam": [
      {
        "q": "¿Qué establece la Res. 2674 de 2013?",
        "options": [
          "Los requisitos sanitarios y las BPM para la cadena de alimentos.",
          "Los requisitos para el trabajo en alturas en restaurantes y cocinas industriales.",
          "Los precios máximos de los alimentos."
        ]
      },
      {
        "q": "¿Con qué frecuencia mínima se hace el reconocimiento médico del manipulador?",
        "options": [
          "Solo una vez, al ingresar a la empresa, y nunca más mientras siga contratado.",
          "Al menos una vez al año y cuando haya razones clínicas.",
          "Cada cinco años."
        ]
      },
      {
        "q": "¿Qué debe hacer un manipulador que tiene diarrea o fiebre?",
        "options": [
          "Trabajar con doble guante para no contaminar.",
          "Trabajar normalmente si se siente con fuerzas para terminar el turno completo.",
          "Informar al supervisor antes de trabajar para no manipular alimentos."
        ]
      },
      {
        "q": "¿Cómo debe ser el uniforme del manipulador?",
        "options": [
          "Limpio, de color claro y de uso exclusivo en el área.",
          "Oscuro, para que no se note la suciedad durante el turno de trabajo.",
          "El mismo que usa para venir de la casa."
        ]
      },
      {
        "q": "¿Por qué no se usan anillos ni relojes al manipular alimentos?",
        "options": [
          "Porque se pueden dañar con el agua.",
          "Porque guardan suciedad y pueden caer al alimento.",
          "Porque lo prohíbe el reglamento de presentación personal por razones estéticas."
        ]
      },
      {
        "q": "¿Reemplazan los guantes el lavado de manos?",
        "options": [
          "Sí, siempre que sean desechables y de la talla correcta para la mano.",
          "Sí, si se usan durante todo el turno sin quitárselos ni una vez para nada.",
          "No; se lavan las manos y los guantes se cambian si se ensucian."
        ]
      },
      {
        "q": "¿Qué es la contaminación cruzada?",
        "options": [
          "El paso de contaminantes de un alimento, superficie o persona a otro alimento.",
          "Mezclar dos recetas distintas.",
          "Cocinar dos alimentos a la vez en la misma estufa, aunque estén en ollas separadas."
        ]
      },
      {
        "q": "¿Qué hacer si un cliente pregunta si un plato contiene maní y usted no está seguro?",
        "options": [
          "Decirle que no tiene, para no perder la venta.",
          "Decir que no sabe y consultar los ingredientes antes de responder.",
          "Decirle que retire el maní con el tenedor si lo encuentra en el plato."
        ]
      },
      {
        "q": "¿A qué temperatura debe llegar el centro del pollo para considerarse bien cocido?",
        "options": [
          "40 °C, porque a esa temperatura ya se ve dorado por fuera.",
          "60 °C, la misma temperatura del baño de maría.",
          "Al menos 74 °C, medidos con termómetro."
        ]
      },
      {
        "q": "¿Cuál es la temperatura de referencia para la refrigeración de alimentos perecederos?",
        "options": [
          "5 °C o menos.",
          "Entre 10 °C y 15 °C.",
          "La temperatura ambiente de la cocina si está fresca."
        ]
      },
      {
        "q": "¿Cómo se enfría correctamente una preparación cocida en gran cantidad?",
        "options": [
          "Dejándola en la olla sobre el mesón hasta el día siguiente.",
          "Dividiéndola en recipientes poco profundos y enfriándola rápido.",
          "Metiendo la olla grande caliente y tapada en la nevera."
        ]
      },
      {
        "q": "¿Qué se hace con una lata abombada al recibir un pedido?",
        "options": [
          "Se acepta si la fecha de vencimiento está vigente.",
          "Se acepta y se usa primero, antes de que se dañe más.",
          "Se rechaza."
        ]
      },
      {
        "q": "¿Cómo se almacenan los alimentos en la bodega?",
        "options": [
          "En estibas o estantes, sin contacto con el piso y separados de los químicos.",
          "Directamente sobre el piso para que no se caigan.",
          "Junto a los productos de limpieza, para tener todo en un mismo lugar de la bodega."
        ]
      },
      {
        "q": "¿Qué pasa si se mezcla cloro con amoníaco o con un ácido al limpiar?",
        "options": [
          "Se obtiene un desinfectante más potente.",
          "Se generan gases tóxicos.",
          "No pasa nada, porque ambos son productos de limpieza que se venden juntos."
        ]
      },
      {
        "q": "¿Qué programas incluye como mínimo el plan de saneamiento?",
        "options": [
          "Solo el programa de limpieza, porque los demás los maneja el arrendador.",
          "Mercadeo, compras y ventas, que son los que mantienen el negocio.",
          "Limpieza y desinfección, residuos, control de plagas y agua potable."
        ]
      },
      {
        "q": "Varios comensales se enferman después del almuerzo. ¿Qué se hace con los alimentos sospechosos?",
        "options": [
          "Separarlos, rotularlos y conservarlos en refrigeración para la investigación.",
          "Botarlos de inmediato para que nadie más los consuma por error.",
          "Recalentarlos bien hasta que hiervan y servirlos en la cena."
        ]
      }
    ],
    "workshops": [],
    "project": null
  },
  {
    "id": "copasst",
    "title": "COPASST: Comité Paritario de Seguridad y Salud en el Trabajo",
    "hours": 1.5,
    "category": "gestion_sst",
    "regulation": "Res. 2013 de 1986, Decreto-Ley 1295 de 1994, Decreto 1072 de 2015, Res. 0312 de 2019, Res. 1401 de 2007",
    "legalNotice": "Formación para integrantes del COPASST y vigías de SST. Complementa la capacitación que deben brindar el empleador y la ARL. No reemplaza la conformación formal del comité, sus actas ni el acompañamiento del responsable del SG-SST.",
    "summary": "Cómo se conforma y elige el comité, cómo sesiona, qué funciones tiene dentro del SG-SST, cómo hacer inspecciones planeadas, cómo participar en la investigación de accidentes y cómo hacer seguimiento con indicadores.",
    "fieldCase": "En una planta de alimentos, el COPASST llevaba seis meses sin reunirse: las actas se firmaban \"por cumplir\". Un operario reportó dos veces que la guarda de una tajadora estaba suelta. Nadie hizo seguimiento. Semanas después, otro trabajador sufrió una amputación parcial de un dedo en esa misma máquina.",
    "checklist": [
      "El comité tiene acta de conformación vigente, con principales y suplentes de ambas partes.",
      "Nos reunimos al menos una vez al mes y cada reunión queda en un acta firmada.",
      "Tenemos un plan de trabajo anual con inspecciones, capacitaciones y seguimientos.",
      "Cada hallazgo de inspección tiene responsable, fecha de cierre y verificación.",
      "Participamos en la investigación de los incidentes y accidentes dentro del plazo.",
      "Revisamos los indicadores de accidentalidad y ausentismo y proponemos acciones.",
      "Los trabajadores saben quiénes somos y cómo reportarnos condiciones inseguras.",
      "Los integrantes recibimos capacitación y tenemos el tiempo para nuestras funciones."
    ],
    "failureAnalysis": "Falla raíz: el comité existía en el papel, pero no inspeccionaba, no hacía seguimiento a los reportes de condiciones inseguras y no exigía el cierre de las acciones.",
    "onSiteClosure": "Práctica en su empresa: realizar con el comité una inspección planeada de un área, registrar los hallazgos con evidencia, priorizarlos, asignar responsables y fechas, y presentar el seguimiento en la siguiente reunión ordinaria.",
    "image": "",
    "modules": [
      {
        "title": "Qué es el COPASST y por qué existe",
        "content": "\n        <p>El <strong>COPASST</strong> (Comité Paritario de Seguridad y Salud en el Trabajo) es el organismo de <strong>participación</strong> de los trabajadores y del empleador en la prevención de accidentes y enfermedades laborales. \"Paritario\" significa que las dos partes tienen el mismo número de representantes.</p>\n        <p>La idea es simple: quienes hacen el trabajo conocen mejor que nadie sus peligros. Un comité que reúne la visión de la dirección y la de los trabajadores detecta problemas antes, propone soluciones realistas y ayuda a que las medidas se cumplan.</p>\n        <p><strong>Un poco de historia de los nombres.</strong> El <em>Decreto 614 de 1984</em> ordenó a las empresas tener un comité de medicina, higiene y seguridad industrial, y la <em>Resolución 2013 de 1986</em> reglamentó cómo se conforma y funciona. El <em>Decreto-Ley 1295 de 1994</em> lo llamó Comité Paritario de Salud Ocupacional (COPASO), amplió el período de sus miembros a dos años y obligó al empleador a darles tiempo para sus funciones. Con el Sistema de Gestión de Seguridad y Salud en el Trabajo (Decreto 1443 de 2014, hoy compilado en el <em>Decreto 1072 de 2015</em>) pasó a llamarse COPASST. La Resolución 2013 de 1986 sigue vigente en lo que se refiere a su conformación y funcionamiento.</p>\n        <p><strong>Lo que el COPASST es:</strong></p>\n        <ul>\n          <li>Un organismo de <strong>promoción y vigilancia</strong> de las normas y del SG-SST dentro de la empresa.</li>\n          <li>Un canal para que los trabajadores reporten peligros y propongan mejoras.</li>\n          <li>Un participante activo en inspecciones, investigaciones de accidentes y seguimiento de planes de acción.</li>\n        </ul>\n        <p><strong>Lo que el COPASST no es:</strong></p>\n        <ul>\n          <li>No es el responsable del SG-SST: esa responsabilidad es del empleador, que designa a una persona o equipo para diseñarlo y ejecutarlo.</li>\n          <li>No es un tribunal disciplinario: no sanciona a nadie.</li>\n          <li>No atiende quejas de acoso laboral: eso le corresponde al Comité de Convivencia Laboral.</li>\n        </ul>\n        <p><strong>Por qué importa hacerlo bien.</strong> En muchas empresas el comité existe solo para la auditoría: actas copiadas, reuniones que no ocurrieron, firmas \"por cumplir\". Eso no solo incumple la norma; deja sin vigilancia los peligros reales, como en el caso con que empieza este curso.</p>\n      ",
        "keyPoints": [
          "El COPASST es el organismo paritario de participación y vigilancia en SST: igual número de representantes del empleador y de los trabajadores.",
          "La Res. 2013 de 1986 sigue regulando su conformación y funcionamiento; el Decreto 1072 de 2015 lo integra al SG-SST.",
          "No es el responsable del SG-SST, no sanciona y no atiende quejas de acoso laboral."
        ],
        "practice": {
          "q": "¿Qué significa que el COPASST sea \"paritario\"?",
          "options": [
            "Que las decisiones las toma solo el presidente del comité",
            "Que tiene igual número de representantes del empleador y de los trabajadores",
            "Que se reúne con la misma frecuencia que la junta directiva"
          ]
        }
      },
      {
        "title": "Quién debe tenerlo y cuántos integrantes",
        "content": "\n        <p><strong>Empresas de 10 o más trabajadores</strong> deben conformar un COPASST. Las de <strong>menos de 10 trabajadores</strong> designan un <strong>vigía de seguridad y salud en el trabajo</strong>, que cumple las mismas funciones de promoción y vigilancia.</p>\n        <p><strong>Número de representantes</strong> según la Resolución 2013 de 1986, por cada parte (empleador y trabajadores), cada uno con su suplente:</p>\n        <ul>\n          <li>De 10 a 49 trabajadores: <strong>1</strong> representante por cada parte.</li>\n          <li>De 50 a 499 trabajadores: <strong>2</strong> representantes por cada parte.</li>\n          <li>De 500 a 999 trabajadores: <strong>3</strong> representantes por cada parte.</li>\n          <li>De 1.000 o más trabajadores: <strong>4</strong> representantes por cada parte.</li>\n        </ul>\n        <p>Así, una planta de 120 trabajadores tiene un comité de 4 principales (2 del empleador y 2 de los trabajadores) y 4 suplentes.</p>\n        <p><strong>Varios centros de trabajo.</strong> La empresa que tiene dos o más establecimientos puede conformar varios comités, por ejemplo uno por cada sede, siempre que todos los trabajadores queden representados.</p>\n        <p><strong>¿Quiénes cuentan?</strong> Para definir el tamaño se tiene en cuenta el número de trabajadores de la empresa. Cuando la planta cambia mucho de tamaño, el responsable del SG-SST revisa si la conformación sigue siendo la adecuada para el siguiente período.</p>\n        <p><strong>El vigía de SST</strong> en empresas pequeñas no es un cargo decorativo. Debe recibir capacitación, tener tiempo para inspeccionar, recibir los reportes de los trabajadores y participar en la investigación de los accidentes, igual que lo haría el comité.</p>\n        <p><strong>Relación con los estándares mínimos.</strong> La <em>Resolución 0312 de 2019</em> evalúa, entre sus estándares, que la empresa tenga conformado el COPASST o designado el vigía, que funcione y que sus integrantes estén capacitados. En una visita de inspección o en la autoevaluación del SG-SST, se piden las actas de conformación y de reuniones como evidencia.</p>\n      ",
        "keyPoints": [
          "Con 10 o más trabajadores se conforma el COPASST; con menos de 10, se designa un vigía de SST.",
          "Representantes por cada parte: 1 (10-49), 2 (50-499), 3 (500-999) y 4 (1.000 o más), cada uno con suplente.",
          "La Res. 0312 de 2019 verifica que el comité exista, funcione y esté capacitado."
        ],
        "practice": {
          "q": "Una empresa tiene 8 trabajadores. ¿Qué debe tener?",
          "options": [
            "Un COPASST de 4 principales y 4 suplentes",
            "Ninguna figura, porque es una empresa pequeña",
            "Un vigía de seguridad y salud en el trabajo"
          ]
        }
      },
      {
        "title": "Elección, designación y período",
        "content": "\n        <p><strong>Los representantes del empleador</strong> los nombra directamente el empleador. <strong>Los representantes de los trabajadores</strong> los eligen los propios trabajadores mediante <strong>votación libre</strong>. Ninguna de las partes escoge a los representantes de la otra.</p>\n        <p><strong>Un proceso de elección bien hecho</strong> tiene estos pasos y deja evidencia de cada uno:</p>\n        <ol>\n          <li><strong>Convocatoria</strong> publicada a todos los trabajadores, con fechas de inscripción y votación, requisitos y número de cargos a elegir.</li>\n          <li><strong>Inscripción de candidatos</strong> en el plazo fijado.</li>\n          <li><strong>Votación</strong> en horario laboral, con garantías de que cada trabajador vote libremente y una sola vez. Lo usual es la votación secreta, con urnas o con un sistema electrónico confiable.</li>\n          <li><strong>Escrutinio público</strong> y acta con los resultados: quienes obtienen más votos son principales y los siguientes, suplentes.</li>\n          <li><strong>Acta de conformación</strong> del comité con principales y suplentes de ambas partes, y comunicación a todos los trabajadores.</li>\n        </ol>\n        <p><strong>Presidente y secretario.</strong> El empleador designa al <strong>presidente</strong> del comité entre sus propios representantes. El comité en pleno elige al <strong>secretario</strong> entre la totalidad de sus miembros. El presidente convoca y dirige las reuniones; el secretario lleva las actas y el archivo.</p>\n        <p><strong>Período.</strong> Desde el Decreto-Ley 1295 de 1994, el período de los miembros es de <strong>dos años</strong>, y pueden ser reelegidos. Al terminar el período se repite el proceso; el comité saliente entrega las actas, el archivo y el estado de los compromisos pendientes.</p>\n        <p><strong>Reemplazos.</strong> Si un principal se retira de la empresa o renuncia al comité, asume su suplente. Si se agotan los suplentes de los trabajadores, se convoca a una nueva elección para completar el período.</p>\n        <p><strong>Buenas prácticas.</strong> Explique a los candidatos qué implica ser integrante (tiempo, capacitación, confidencialidad de la información de los accidentes); evite que los jefes presionen el voto; y publique los nombres y fotos de los integrantes en las carteleras, para que todos sepan a quién acudir.</p>\n      ",
        "keyPoints": [
          "El empleador nombra a sus representantes; los trabajadores eligen los suyos por votación libre.",
          "El presidente lo designa el empleador entre sus representantes; el secretario lo elige el comité en pleno.",
          "El período es de dos años, con posibilidad de reelección; si un principal se retira, asume su suplente."
        ],
        "practice": {
          "q": "¿Quién elige a los representantes de los trabajadores ante el COPASST?",
          "options": [
            "Los propios trabajadores, mediante votación libre",
            "El gerente, entre los trabajadores más antiguos",
            "La ARL, según la capacitación que hayan recibido"
          ]
        }
      },
      {
        "title": "Funcionamiento: reuniones, quórum, actas y tiempo",
        "content": "\n        <p><strong>Reuniones ordinarias.</strong> El comité se reúne <strong>por lo menos una vez al mes</strong>, en el lugar de trabajo y durante la jornada laboral. Lo recomendable es fijar al inicio del período un cronograma anual de reuniones.</p>\n        <p><strong>Reuniones extraordinarias.</strong> Cuando ocurre un <strong>accidente grave</strong> o se detecta un <strong>riesgo inminente</strong>, el comité se reúne de forma extraordinaria, con la presencia del responsable del área donde ocurrió el hecho, dentro de los cinco días siguientes.</p>\n        <p><strong>Quórum.</strong> El comité sesiona con la <strong>mitad más uno</strong> de sus miembros. Si pasados los primeros treinta minutos de la hora señalada no se completa, sesiona con los miembros presentes y sus decisiones son válidas. Esta regla evita que una reunión se caiga por inasistencia, pero no es una excusa para que siempre falten los mismos.</p>\n        <p><strong>Tiempo para las funciones.</strong> El empleador debe proporcionar, cuando menos, <strong>cuatro horas semanales</strong> dentro de la jornada normal de trabajo a cada uno de los miembros para el funcionamiento del comité. Ese tiempo se usa en reuniones, inspecciones, investigaciones y capacitación. Si los integrantes deben hacer todo \"después del turno\", el comité no funciona.</p>\n        <p><strong>Actas.</strong> Cada reunión termina con un acta que incluye: fecha, hora y asistentes; verificación del quórum; temas tratados; seguimiento a los compromisos anteriores; nuevos compromisos con responsable y fecha; y firmas. Las actas se archivan y están disponibles para la ARL y las autoridades.</p>\n        <p><strong>Un orden del día que funciona:</strong></p>\n        <ol>\n          <li>Verificación del quórum y lectura de compromisos pendientes.</li>\n          <li>Accidentes e incidentes del mes y estado de sus investigaciones.</li>\n          <li>Resultados de inspecciones y reportes de condiciones inseguras.</li>\n          <li>Indicadores del mes.</li>\n          <li>Propuestas de capacitación y mejora.</li>\n          <li>Nuevos compromisos y cierre.</li>\n        </ol>\n        <p><strong>Reglamento interno.</strong> Es una buena práctica que el comité apruebe al inicio de su período un reglamento con su forma de convocar, de decidir, de manejar la información confidencial y de distribuir las tareas.</p>\n      ",
        "keyPoints": [
          "Reunión ordinaria al menos una vez al mes; extraordinaria ante accidente grave o riesgo inminente, dentro de los cinco días siguientes.",
          "Quórum: mitad más uno; a los treinta minutos sesiona con los presentes y sus decisiones son válidas.",
          "El empleador debe dar al menos cuatro horas semanales dentro de la jornada a cada miembro."
        ],
        "practice": {
          "q": "¿Con qué frecuencia mínima se reúne el COPASST de forma ordinaria?",
          "options": [
            "Una vez cada seis meses",
            "Una vez al mes",
            "Solo cuando ocurre un accidente grave"
          ]
        }
      },
      {
        "title": "Funciones del COPASST dentro del SG-SST",
        "content": "\n        <p>La Resolución 2013 de 1986 enumera las funciones del comité. El Decreto 1072 de 2015 las conecta con el ciclo del SG-SST: planear, hacer, verificar y actuar.</p>\n        <p><strong>Funciones principales:</strong></p>\n        <ul>\n          <li><strong>Proponer</strong> a la empresa medidas y actividades para mantener la salud en los lugares de trabajo, incluidas las capacitaciones que considere necesarias.</li>\n          <li><strong>Participar</strong> en las actividades de promoción, divulgación e información sobre SST entre los trabajadores.</li>\n          <li><strong>Vigilar</strong> el desarrollo de las actividades del SG-SST y el cumplimiento de las normas por parte de la empresa y de los trabajadores.</li>\n          <li><strong>Visitar e inspeccionar</strong> periódicamente los lugares de trabajo, las máquinas, los equipos y las operaciones, e informar al empleador sobre los peligros encontrados y las medidas que se recomiendan.</li>\n          <li><strong>Colaborar en el análisis</strong> de las causas de los accidentes de trabajo y las enfermedades laborales, y proponer medidas correctivas.</li>\n          <li><strong>Estudiar y considerar</strong> las sugerencias que presenten los trabajadores sobre SST.</li>\n          <li><strong>Servir de coordinación</strong> entre el empleador y los trabajadores en la solución de los problemas de SST.</li>\n          <li><strong>Solicitar</strong> periódicamente a la empresa informes sobre la accidentalidad y las enfermedades laborales.</li>\n          <li><strong>Colaborar</strong> con los funcionarios de las entidades gubernamentales y de la ARL que visiten la empresa.</li>\n          <li><strong>Llevar el archivo</strong> de actas y documentos del comité.</li>\n        </ul>\n        <p><strong>Participación en el SG-SST.</strong> Según el Decreto 1072 de 2015, el empleador debe garantizar la participación de los trabajadores, y el COPASST es el canal principal. En la práctica, el comité:</p>\n        <ul>\n          <li>conoce la política de SST y el plan anual de trabajo, y puede hacer recomendaciones;</li>\n          <li>participa en la identificación de peligros y en la revisión de la matriz de riesgos de las áreas;</li>\n          <li>es informado de los resultados de las evaluaciones del sistema y participa en la planificación de la auditoría anual;</li>\n          <li>hace seguimiento a las acciones correctivas y preventivas.</li>\n        </ul>\n        <p><strong>Su propio plan de trabajo.</strong> Un comité eficaz no espera a que lo llamen. Al inicio de cada año define un plan con inspecciones por área, temas de capacitación para sus miembros, campañas para los trabajadores y la revisión mensual de indicadores. Ese plan se aprueba en el acta y se revisa cada mes.</p>\n      ",
        "keyPoints": [
          "Funciones clave: proponer, vigilar, inspeccionar, analizar causas de accidentes, recibir sugerencias y coordinar entre empleador y trabajadores.",
          "Es el canal principal de participación en el SG-SST: política, plan de trabajo, peligros, auditoría y acciones de mejora.",
          "Un comité eficaz tiene su propio plan anual de inspecciones, capacitaciones y seguimiento."
        ],
        "practice": {
          "q": "¿Cuál de estas es una función del COPASST?",
          "options": [
            "Decidir las sanciones disciplinarias de los trabajadores",
            "Firmar la nómina del personal de producción",
            "Inspeccionar periódicamente los lugares de trabajo e informar los peligros encontrados"
          ]
        }
      },
      {
        "title": "Inspecciones de seguridad planeadas",
        "content": "\n        <p>Inspeccionar es la herramienta más poderosa del comité. Una inspección planeada encuentra las condiciones peligrosas <strong>antes</strong> de que produzcan un accidente.</p>\n        <p><strong>1. Planear.</strong> Defina en el plan anual qué áreas se inspeccionan y con qué frecuencia: más seguido donde hay peligros críticos (máquinas con partes móviles, químicos, alturas, energías peligrosas). Prepare una lista de verificación por área. Coordine con el jefe del área para no interrumpir la operación.</p>\n        <p><strong>2. Recorrer y observar.</strong> Vaya con la lista, pero con los ojos abiertos a lo que no está en ella. Observe:</p>\n        <ul>\n          <li><strong>condiciones</strong>: guardas, orden y aseo, pisos, iluminación, extintores, rutas de evacuación, rotulado de químicos, tableros eléctricos;</li>\n          <li><strong>actos</strong>: uso de elementos de protección, posturas, atajos en los procedimientos, uso de celulares en zonas de riesgo;</li>\n          <li><strong>conversaciones</strong>: pregunte a los trabajadores qué les preocupa. Ellos saben qué falla.</li>\n        </ul>\n        <p><strong>3. Registrar con evidencia.</strong> Cada hallazgo se describe de forma concreta (\"guarda de la tajadora 2 sin dos tornillos\", no \"máquina insegura\"), con foto, ubicación y fecha.</p>\n        <p><strong>4. Priorizar.</strong> No todos los hallazgos pesan igual. Una clasificación sencilla:</p>\n        <ul>\n          <li><strong>Crítico</strong>: puede causar una lesión grave o la muerte. Se corrige o se detiene la actividad de inmediato y se informa al responsable SST.</li>\n          <li><strong>Importante</strong>: puede causar una lesión. Se corrige en días.</li>\n          <li><strong>Menor</strong>: se corrige dentro del plan normal.</li>\n        </ul>\n        <p><strong>5. Comunicar y asignar.</strong> El informe va al jefe del área y al responsable del SG-SST, con la acción propuesta, el responsable y la fecha de cierre.</p>\n        <p><strong>6. Hacer seguimiento.</strong> Un hallazgo no está cerrado cuando alguien dice que lo arregló, sino cuando el comité <strong>verifica</strong> en sitio que la corrección funciona. El seguimiento se registra en cada acta hasta el cierre.</p>\n        <p><strong>El error típico</strong> es inspeccionar mucho y cerrar poco. Un comité con cien hallazgos abiertos pierde credibilidad: los trabajadores dejan de reportar porque \"nunca pasa nada\".</p>\n      ",
        "keyPoints": [
          "Inspección planeada: planear, recorrer y observar, registrar con evidencia, priorizar, asignar y hacer seguimiento.",
          "Un hallazgo crítico se corrige o se detiene la actividad de inmediato.",
          "Un hallazgo se cierra cuando el comité verifica en sitio que la corrección funciona."
        ],
        "practice": {
          "q": "En una inspección, ¿cómo debe registrarse un hallazgo?",
          "options": [
            "De forma concreta, con ubicación, foto y fecha",
            "De forma general, por ejemplo \"área insegura\"",
            "Solo de palabra al jefe del área, sin dejar registro"
          ]
        }
      },
      {
        "title": "Participación en la investigación de incidentes y accidentes",
        "content": "\n        <p>La <em>Resolución 1401 de 2007</em> regula la investigación de incidentes y accidentes de trabajo. Su objetivo no es buscar culpables, sino encontrar las causas para que el hecho no se repita.</p>\n        <p><strong>El equipo investigador</strong> debe estar integrado, como mínimo, por:</p>\n        <ul>\n          <li>el jefe inmediato o supervisor del trabajador accidentado o del área donde ocurrió el hecho;</li>\n          <li>un <strong>representante del COPASST</strong> o el vigía de SST;</li>\n          <li>el encargado del desarrollo del SG-SST.</li>\n        </ul>\n        <p>Cuando el accidente es grave o produce la muerte, en la investigación participa además un profesional con licencia en salud ocupacional o SST.</p>\n        <p><strong>Plazos.</strong> El accidente de trabajo se reporta a la ARL y a la EPS en el formato de reporte (FURAT) <strong>dentro de los dos días hábiles</strong> siguientes. La investigación se realiza <strong>dentro de los quince días</strong> siguientes a la ocurrencia del hecho. Los incidentes, aunque no causen lesión, también se investigan: son avisos gratuitos de un accidente que está por venir.</p>\n        <p><strong>Cómo se investiga:</strong></p>\n        <ol>\n          <li><strong>Recolectar información</strong> lo antes posible: visitar el sitio, tomar fotos, entrevistar por separado al trabajador y a los testigos, revisar procedimientos, permisos, mantenimientos y capacitaciones.</li>\n          <li><strong>Reconstruir los hechos</strong> en orden: qué se estaba haciendo, qué cambió, qué pasó.</li>\n          <li><strong>Identificar las causas inmediatas</strong>: los actos y condiciones que produjeron el hecho (la guarda suelta, la mano en la zona de corte).</li>\n          <li><strong>Identificar las causas básicas</strong>: por qué existían esos actos y condiciones (no había inspección de la guarda, el reporte anterior no tuvo respuesta, la producción presionaba). Herramientas como los \"cinco porqués\" o el árbol de causas ayudan a llegar a la raíz.</li>\n          <li><strong>Definir acciones</strong> para cada causa, con responsable y fecha, priorizando la jerarquía de controles: eliminar o aislar el peligro antes que \"recapacitar al trabajador\".</li>\n        </ol>\n        <p><strong>El aporte del representante del COPASST</strong> es la mirada de los trabajadores: entrevista con confianza, sabe cómo se hace realmente el trabajo y vigila que el informe no termine en \"acto inseguro del trabajador\" cuando hubo fallas de la organización.</p>\n        <p><strong>Seguimiento.</strong> El comité registra en sus actas el avance de las acciones de cada investigación hasta verificar su cierre.</p>\n      ",
        "keyPoints": [
          "El equipo investigador incluye al jefe inmediato, un representante del COPASST o el vigía y el encargado del SG-SST.",
          "El accidente se reporta a la ARL y la EPS dentro de los dos días hábiles; la investigación se hace dentro de los quince días.",
          "Se buscan causas inmediatas y básicas, y las acciones priorizan la jerarquía de controles, no la culpa."
        ],
        "practice": {
          "q": "¿Cuál es el objetivo de investigar un accidente de trabajo?",
          "options": [
            "Encontrar al culpable para sancionarlo",
            "Encontrar las causas para que no se repita",
            "Cumplir un formato exigido por la ARL"
          ]
        }
      },
      {
        "title": "Indicadores, seguimiento y límites del comité",
        "content": "\n        <p><strong>Medir para mejorar.</strong> La Resolución 0312 de 2019 define indicadores mínimos que la empresa calcula y que el COPASST debe conocer y analizar cada mes:</p>\n        <ul>\n          <li><strong>Frecuencia de accidentalidad</strong>: cuántos accidentes de trabajo ocurren por cada cien trabajadores en el período.</li>\n          <li><strong>Severidad de accidentalidad</strong>: cuántos días se pierden por incapacidad por cada cien trabajadores.</li>\n          <li><strong>Proporción de accidentes mortales</strong>.</li>\n          <li><strong>Prevalencia e incidencia de la enfermedad laboral</strong>.</li>\n          <li><strong>Ausentismo por causa médica</strong>.</li>\n        </ul>\n        <p>El comité no se limita a leer los números. Pregunta: ¿en qué área se concentran los accidentes?, ¿qué tipo de lesión se repite?, ¿qué acciones se tomaron y funcionaron? Con esas respuestas propone prioridades para el plan del siguiente período.</p>\n        <p><strong>Indicadores propios del comité</strong> que muestran si está funcionando: reuniones realizadas frente a programadas; inspecciones realizadas frente a planeadas; porcentaje de hallazgos cerrados a tiempo; participación en el cien por ciento de las investigaciones.</p>\n        <p><strong>Lo que no le corresponde al COPASST:</strong></p>\n        <ul>\n          <li><strong>Quejas de acoso laboral o sexual.</strong> Las de acoso laboral las atiende el Comité de Convivencia Laboral; el acoso sexual tiene un procedimiento propio del empleador. Si un trabajador le cuenta un caso al COPASST, este lo orienta hacia el canal correcto con discreción.</li>\n          <li><strong>Sancionar.</strong> El comité recomienda; las decisiones disciplinarias son del empleador según su reglamento interno.</li>\n          <li><strong>Ejecutar el SG-SST.</strong> Diseñarlo y ejecutarlo es responsabilidad del empleador y de quien designe para ello.</li>\n        </ul>\n        <p><strong>Trabajo con la ARL.</strong> La ARL asesora y capacita al comité. Aproveche esa asesoría para formar a los nuevos integrantes al inicio del período, en temas como inspecciones, investigación de accidentes y funcionamiento del comité.</p>\n        <p><strong>Señales de un comité que funciona:</strong> los trabajadores conocen a sus representantes y les reportan; las actas muestran compromisos que se cierran; los accidentes se investigan a tiempo; y los jefes ven al comité como un aliado, no como un trámite.</p>\n      ",
        "keyPoints": [
          "Indicadores mínimos de la Res. 0312: frecuencia, severidad, mortalidad, enfermedad laboral y ausentismo.",
          "El comité también mide su propio desempeño: reuniones, inspecciones y cierre de hallazgos.",
          "No atiende acoso laboral ni sexual, no sanciona y no reemplaza al responsable del SG-SST."
        ],
        "practice": {
          "q": "Un trabajador le cuenta a un integrante del COPASST que su jefe lo humilla constantemente. ¿Qué debe hacer el integrante?",
          "options": [
            "Abrir una investigación del COPASST sobre el jefe",
            "Ignorarlo, porque no es un tema de seguridad",
            "Orientarlo con discreción hacia el Comité de Convivencia Laboral"
          ]
        }
      }
    ],
    "scenarios": [
      {
        "scenario": "Eres integrante del COPASST. Llega la fecha de la reunión mensual y el presidente propone firmar el acta \"como si nos hubiéramos reunido\" porque todos están ocupados con un pedido grande.",
        "options": [
          "Firmo: lo importante es que el acta esté para la auditoría.",
          "Propongo reprogramar la reunión en la misma semana, aunque sea corta, y tratar al menos los compromisos pendientes y los accidentes del mes.",
          "No digo nada y dejo que el presidente decida, porque él representa a la empresa."
        ]
      },
      {
        "scenario": "En una inspección encuentras que el tablero eléctrico de la zona de empaque está abierto, con cables expuestos y cajas apiladas al frente. El jefe del área dice que lo arreglan \"la otra semana\".",
        "options": [
          "Lo anoto como hallazgo menor y lo reviso en la inspección del próximo mes.",
          "Lo clasifico como crítico, pido despejar y restringir el acceso de inmediato, aviso al responsable SST y registro el hallazgo con foto para seguimiento.",
          "Cierro yo mismo el tablero y acomodo los cables para no retrasar a nadie."
        ]
      },
      {
        "scenario": "Un operario sufrió una lesión en la mano con una máquina. El supervisor quiere cerrar la investigación con la conclusión \"acto inseguro: el trabajador no prestó atención\" y que lo capaciten de nuevo.",
        "options": [
          "Acepto la conclusión: el trabajador metió la mano, así que la causa es él.",
          "Pido revisar las causas básicas: estado de la guarda, reportes anteriores, presión de producción y procedimientos, y propongo acciones de ingeniería.",
          "Me retiro de la investigación porque el supervisor conoce mejor el área."
        ]
      },
      {
        "scenario": "Llevas tres meses en el COPASST y todas las reuniones y las inspecciones te toca hacerlas fuera de tu turno, sin que te reconozcan ese tiempo.",
        "options": [
          "Sigo así, porque ser del comité es un trabajo voluntario.",
          "Renuncio al comité sin avisar a nadie.",
          "Lo planteo en la reunión y queda en el acta: el empleador debe dar al menos cuatro horas semanales dentro de la jornada para el comité."
        ]
      },
      {
        "scenario": "Revisando los indicadores del trimestre, el comité ve que la mitad de los accidentes fueron cortes en las manos en el área de despiece, y que todos se registraron como \"falta de atención\".",
        "options": [
          "Proponemos una campaña de afiches sobre \"trabajar con atención\".",
          "Proponemos una inspección dirigida al área de despiece, revisar herramientas, guantes anticorte, ritmo de trabajo y procedimiento, y hacer seguimiento a las acciones.",
          "Esperamos al siguiente trimestre para ver si es casualidad."
        ]
      }
    ],
    "exam": [
      {
        "q": "¿Cuál es el propósito principal del COPASST?",
        "options": [
          "Promover y vigilar la SST con participación del empleador y de los trabajadores.",
          "Administrar el presupuesto del SG-SST.",
          "Investigar y sancionar las conductas de acoso laboral que se presenten entre los trabajadores de la empresa."
        ]
      },
      {
        "q": "¿Qué norma sigue regulando la conformación y el funcionamiento del COPASST?",
        "options": [
          "La Ley 1581 de 2012, sobre el manejo de los datos personales de los trabajadores de la empresa.",
          "La Resolución 2013 de 1986, complementada por el Decreto-Ley 1295 de 1994 y el Decreto 1072 de 2015.",
          "La Resolución 3461 de 2025, que reglamenta a los comités paritarios y de convivencia en un solo cuerpo."
        ]
      },
      {
        "q": "Una empresa tiene 320 trabajadores. ¿Cuántos representantes principales tiene cada parte en el COPASST?",
        "options": [
          "Uno por cada parte, porque el número de representantes es el mismo para todas las empresas del país.",
          "Cuatro por cada parte, porque la empresa supera los cien trabajadores contratados en la planta.",
          "Dos por cada parte, cada uno con su suplente."
        ]
      },
      {
        "q": "¿Qué figura reemplaza al COPASST en una empresa con menos de 10 trabajadores?",
        "options": [
          "El vigía de seguridad y salud en el trabajo.",
          "El Comité de Convivencia Laboral, que asume también las funciones de seguridad y salud en el trabajo.",
          "Ninguna figura: están exentas."
        ]
      },
      {
        "q": "¿Cómo se escoge el presidente del COPASST?",
        "options": [
          "Lo eligen los trabajadores por votación libre entre todos los integrantes que se inscribieron como candidatos.",
          "Lo designa el empleador entre sus propios representantes en el comité.",
          "Lo asigna la ARL según la experiencia de cada integrante en seguridad y salud en el trabajo."
        ]
      },
      {
        "q": "¿Cuál es el período de los miembros del COPASST?",
        "options": [
          "Un año, sin posibilidad de reelección para garantizar la rotación de todos los trabajadores de la planta.",
          "Cinco años, sin reelección.",
          "Dos años, con posibilidad de reelección."
        ]
      },
      {
        "q": "En una reunión ordinaria no se completa el quórum. ¿Qué indica la norma?",
        "options": [
          "A los treinta minutos de la hora señalada, sesiona con los presentes y sus decisiones son válidas.",
          "La reunión se cancela y se debe informar al Ministerio del Trabajo para que convoque una nueva fecha de sesión.",
          "Los suplentes de la ARL completan el quórum y la reunión continúa con los representantes asignados."
        ]
      },
      {
        "q": "¿Cuánto tiempo debe proporcionar el empleador a cada miembro del comité para sus funciones?",
        "options": [
          "El tiempo que sobre al terminar el turno, siempre que el trabajador acepte quedarse sin pago adicional.",
          "Cuando menos cuatro horas semanales dentro de la jornada normal de trabajo.",
          "Una hora al mes, el día de la reunión."
        ]
      },
      {
        "q": "Ocurre un accidente grave en la planta. ¿Qué debe hacer el COPASST?",
        "options": [
          "Solicitar a la ARL que realice la investigación completa sin participación de la empresa ni del comité.",
          "Esperar a la reunión ordinaria del mes siguiente para conocer el informe final de la investigación.",
          "Reunirse de forma extraordinaria, con el responsable del área, dentro de los cinco días siguientes al hecho."
        ]
      },
      {
        "q": "¿Cuál de estas NO es una función del COPASST?",
        "options": [
          "Imponer sanciones disciplinarias a los trabajadores que incumplen las normas.",
          "Visitar e inspeccionar periódicamente los lugares de trabajo y los equipos.",
          "Colaborar en el análisis de las causas de los accidentes y las enfermedades laborales."
        ]
      },
      {
        "q": "Durante una inspección, ¿cuándo se considera cerrado un hallazgo?",
        "options": [
          "Cuando pasa la fecha límite asignada, aunque nadie haya revisado la corrección en el área.",
          "Cuando el comité verifica en sitio que la corrección se hizo y funciona.",
          "Cuando el jefe del área dice que lo corrigió."
        ]
      },
      {
        "q": "En una inspección se detecta una condición que puede causar una lesión grave. ¿Qué corresponde?",
        "options": [
          "Registrarla en el acta y programar su revisión en la inspección planeada del siguiente trimestre.",
          "Esperar a que ocurra un incidente que confirme el peligro antes de pedir recursos a la gerencia.",
          "Clasificarla como crítica, controlarla o detener la actividad, e informar al responsable SST."
        ]
      },
      {
        "q": "Según la Res. 1401 de 2007, ¿quiénes integran como mínimo el equipo investigador de un accidente?",
        "options": [
          "El jefe inmediato, un representante del COPASST o el vigía, y el encargado del SG-SST.",
          "Solo el trabajador accidentado y sus testigos, porque son quienes conocen lo que realmente pasó.",
          "El gerente general, el abogado de la empresa y un delegado de la ARL que se encarga del caso."
        ]
      },
      {
        "q": "¿Dentro de qué plazo se investiga un accidente de trabajo?",
        "options": [
          "Solo cuando la ARL lo solicita.",
          "Dentro de los quince días siguientes a su ocurrencia.",
          "Dentro de los seis meses siguientes, antes del cierre del período fiscal y del informe de gestión anual."
        ]
      },
      {
        "q": "En una investigación, ¿qué es una causa básica?",
        "options": [
          "El tipo de lesión que sufrió el trabajador y la parte del cuerpo afectada según el reporte médico.",
          "El nombre del trabajador que cometió el error y el número de veces que lo ha cometido antes.",
          "La razón de fondo por la que existía el acto o la condición insegura, como la falta de inspección de la guarda."
        ]
      },
      {
        "q": "Un trabajador presenta al COPASST una queja por acoso laboral de su jefe. ¿Qué debe hacer el comité?",
        "options": [
          "Orientarlo con discreción hacia el Comité de Convivencia Laboral, que es la instancia competente.",
          "Archivar la queja, porque los temas de convivencia no tienen relación con la salud de los trabajadores.",
          "Investigar el caso en la siguiente reunión ordinaria y decidir si el jefe debe ser sancionado."
        ]
      }
    ],
    "workshops": [],
    "project": null
  },
  {
    "id": "comite-convivencia-laboral",
    "title": "Comité de Convivencia Laboral: prevención del acoso laboral",
    "hours": 1.5,
    "category": "gestion_sst",
    "regulation": "Ley 1010 de 2006, Res. 3461 de 2025 (deroga Res. 652 y 1356 de 2012), Ley 2365 de 2024, Res. 2646 de 2008",
    "legalNotice": "Formación para integrantes del Comité de Convivencia Laboral, jefes y talento humano. No es asesoría jurídica. Cada caso debe tramitarse con el procedimiento interno de la empresa y el texto vigente de la norma.",
    "summary": "Qué es y qué no es acoso laboral, por qué el acoso sexual tiene una ruta distinta, cómo se conforma el comité según la Resolución 3461 de 2025, cómo se tramita una queja con sus plazos y cómo actuar con imparcialidad y confidencialidad.",
    "fieldCase": "Una operaria presentó una queja contra su supervisor por gritos y humillaciones frente al equipo. El comité la citó a una reunión conjunta con el supervisor sin escucharla antes por separado, y uno de los integrantes comentó el caso en la cafetería. La trabajadora no volvió a confiar en el comité, el conflicto empeoró y terminó en una incapacidad por ansiedad y una demanda.",
    "checklist": [
      "Recibí la queja por escrito, con sus soportes, y la registré con fecha.",
      "Verifiqué que ningún integrante tenga un conflicto de interés con las partes.",
      "Escuché a cada parte por separado antes de cualquier reunión conjunta.",
      "Mantengo la información del caso en reserva, durante y después del trámite.",
      "Confirmé que la queja no es de acoso sexual; si lo es, la remití a la ruta específica.",
      "Los compromisos del plan de mejora quedaron por escrito, con fechas y seguimiento mensual.",
      "El trámite no supera los 65 días calendario desde la queja formal.",
      "Si no hubo acuerdo o persiste la conducta, informé a la alta dirección y al trabajador sus opciones."
    ],
    "failureAnalysis": "Falla raíz: el comité no siguió su procedimiento (escuchar primero a cada parte por separado) y rompió la confidencialidad, que es la base de su credibilidad.",
    "onSiteClosure": "Práctica en su empresa: revisar el reglamento interno del comité y su protocolo de confidencialidad, simular con el comité el trámite completo de una queja ficticia con sus plazos, y verificar que la ruta de acoso sexual esté definida y publicada.",
    "image": "",
    "modules": [
      {
        "title": "Por qué existe el Comité de Convivencia Laboral",
        "content": "\n        <p>El ambiente de trabajo también enferma. Gritos, humillaciones, aislamiento, cargas imposibles o burlas constantes producen ansiedad, depresión, ausentismo, rotación y accidentes. Por eso la convivencia laboral es parte de la seguridad y salud en el trabajo.</p>\n        <p><strong>Tres normas forman la base:</strong></p>\n        <ul>\n          <li><strong>Ley 1010 de 2006.</strong> Define el acoso laboral, sus modalidades, las conductas que no lo constituyen, las garantías para quien se queja y las sanciones. Obliga a las empresas a tener mecanismos internos de prevención.</li>\n          <li><strong>Resolución 2646 de 2008.</strong> Regula la identificación, evaluación y prevención de los factores de riesgo psicosocial en el trabajo. Entre las medidas preventivas del acoso laboral incluye conformar el Comité de Convivencia Laboral y tener un procedimiento interno confidencial, conciliatorio y efectivo.</li>\n          <li><strong>Resolución 3461 de 2025 del Ministerio del Trabajo.</strong> Es la norma vigente sobre la conformación y el funcionamiento del comité. <strong>Derogó las Resoluciones 652 y 1356 de 2012</strong>, que muchos materiales todavía citan.</li>\n        </ul>\n        <p><strong>Qué es el comité.</strong> Según la Resolución 3461 de 2025, es una instancia <strong>preventiva, orientadora, conciliadora y canalizadora</strong>. Su trabajo es escuchar, promover el diálogo entre las partes, acordar planes de mejora y hacer seguimiento.</p>\n        <p><strong>Qué no es.</strong> El comité <strong>no determina si hubo acoso laboral</strong>. No es un juez ni un tribunal disciplinario, no sanciona y no reemplaza a las autoridades. Cuando no hay acuerdo o la conducta persiste, cierra su trámite, informa a la alta dirección y el trabajador puede acudir al inspector de trabajo o al juez (en el sector público, a la Procuraduría o las personerías).</p>\n        <p><strong>Principios con los que actúa:</strong> celeridad, eficacia, imparcialidad y confidencialidad. El procedimiento debe ser participativo, transparente, sin discriminación y con enfoque de género.</p>\n        <p><strong>Una advertencia de entrada.</strong> El comité <strong>no es competente para el acoso sexual</strong> ni para la violencia basada en género, porque esas conductas no se concilian. Tienen una ruta propia, que se explica en el módulo 3.</p>\n      ",
        "keyPoints": [
          "Base normativa: Ley 1010 de 2006, Res. 2646 de 2008 y Res. 3461 de 2025, que derogó las Res. 652 y 1356 de 2012.",
          "El comité es preventivo, orientador, conciliador y canalizador: no determina si hubo acoso ni sanciona.",
          "No es competente para acoso sexual ni violencia de género, que tienen una ruta propia."
        ],
        "practice": {
          "q": "¿Qué norma regula hoy la conformación y el funcionamiento del Comité de Convivencia Laboral?",
          "options": [
            "La Resolución 652 de 2012, modificada por la Resolución 1356 de 2012",
            "La Resolución 3461 de 2025 del Ministerio del Trabajo",
            "La Resolución 2013 de 1986 sobre comités paritarios"
          ]
        }
      },
      {
        "title": "Qué es acoso laboral y qué no lo es",
        "content": "\n        <p><strong>Definición.</strong> La Ley 1010 de 2006 define el acoso laboral como toda conducta <strong>persistente y demostrable</strong>, ejercida sobre un trabajador por parte de un empleador, un jefe o superior, un compañero de trabajo o un subalterno, encaminada a infundir miedo, intimidación, terror y angustia, a causar perjuicio laboral, generar desmotivación en el trabajo o inducir la renuncia.</p>\n        <p>Fíjese en dos palabras: <strong>persistente</strong> (no es un hecho aislado) y <strong>demostrable</strong> (hay forma de acreditarlo). Puede ser vertical descendente (del jefe al trabajador), vertical ascendente (de los subalternos al jefe) u horizontal (entre compañeros).</p>\n        <p><strong>Las seis modalidades de la ley:</strong></p>\n        <ul>\n          <li><strong>Maltrato laboral:</strong> violencia contra la integridad física o moral, expresiones injuriosas o ultrajantes, comportamientos que lesionan la dignidad.</li>\n          <li><strong>Persecución laboral:</strong> conductas reiteradas y arbitrarias que buscan inducir la renuncia, como cargas excesivas de trabajo o cambios permanentes de horario.</li>\n          <li><strong>Discriminación laboral:</strong> trato diferenciado por razones de raza, género, edad, origen familiar o nacional, credo, preferencia política o situación social, sin razón laboral que lo justifique.</li>\n          <li><strong>Entorpecimiento laboral:</strong> obstaculizar el cumplimiento de la labor: ocultar información, destruir o perder insumos, retrasar trámites.</li>\n          <li><strong>Inequidad laboral:</strong> asignar funciones que menosprecian al trabajador.</li>\n          <li><strong>Desprotección laboral:</strong> poner en riesgo la integridad y seguridad del trabajador con órdenes de cumplir funciones sin las mínimas condiciones de protección y seguridad.</li>\n        </ul>\n        <p><strong>Ejemplos de conductas que pueden constituirlo:</strong> insultos o burlas frente a los compañeros, amenazas injustificadas de despido, descalificaciones humillantes del trabajo en público, exclusión deliberada de reuniones o información necesaria, exigir permanentemente trabajo fuera de la jornada sin razón, negar sin motivo permisos o licencias a los que hay derecho.</p>\n        <p><strong>Lo que NO es acoso laboral</strong> según la misma ley:</p>\n        <ul>\n          <li>las exigencias y órdenes necesarias para mantener la disciplina;</li>\n          <li>los requerimientos razonables para cumplir las funciones y los deberes del cargo;</li>\n          <li>la evaluación del desempeño con criterios objetivos;</li>\n          <li>la solicitud de colaboración excepcional ante una emergencia o necesidad de la empresa;</li>\n          <li>los actos para terminar un contrato con justa causa, siguiendo el procedimiento.</li>\n        </ul>\n        <p><strong>El conflicto no es acoso.</strong> Dos compañeros que discuten un día, un jefe exigente que corrige con respeto o un desacuerdo sobre la forma de hacer el trabajo son conflictos. El comité también puede ayudar a resolverlos, pero no hay que llamar acoso a todo conflicto, ni conflicto a todo acoso.</p>\n      ",
        "keyPoints": [
          "Acoso laboral: conducta persistente y demostrable que busca infundir miedo, causar perjuicio, desmotivar o inducir la renuncia.",
          "Modalidades: maltrato, persecución, discriminación, entorpecimiento, inequidad y desprotección laboral.",
          "No es acoso exigir disciplina, pedir el cumplimiento razonable de funciones ni evaluar el desempeño con criterios objetivos."
        ],
        "practice": {
          "q": "Según la Ley 1010 de 2006, ¿qué característica debe tener una conducta para ser acoso laboral?",
          "options": [
            "Haber ocurrido una sola vez en público",
            "Haber sido cometida solo por un jefe",
            "Ser persistente y demostrable"
          ]
        }
      },
      {
        "title": "Acoso sexual: una ruta distinta (Ley 2365 de 2024)",
        "content": "\n        <p>La <strong>Ley 2365 de 2024</strong> adoptó medidas de prevención, protección y atención del acoso sexual en el contexto laboral. Definió el acoso sexual como todo acto de persecución, hostigamiento o asedio de carácter o connotación sexual, lasciva o libidinosa, que se manifiesta en relaciones de poder verticales u horizontales, y que puede darse una o varias veces.</p>\n        <p><strong>Diferencias clave con el acoso laboral:</strong></p>\n        <ul>\n          <li><strong>No requiere persistencia.</strong> Un solo hecho puede constituir acoso sexual.</li>\n          <li><strong>No se concilia.</strong> Por eso la Resolución 3461 de 2025 establece que el Comité de Convivencia Laboral <strong>no es competente</strong> para tramitar casos de acoso sexual ni de violencia de género.</li>\n          <li><strong>Ámbito amplio.</strong> Cubre el contexto laboral sin importar el tipo de vinculación, e incluye espacios como el trabajo en casa, el trabajo remoto, el alojamiento que da el empleador y los espacios digitales en los que se trabaja.</li>\n        </ul>\n        <p><strong>La ruta específica.</strong> La alta dirección o la jefatura de talento humano debe tener un procedimiento propio para estos casos, conforme a la Ley 2365 de 2024: canales de denuncia confidenciales, medidas de protección para la víctima, investigación y decisiones disciplinarias. La víctima también puede acudir a la Fiscalía, porque el acoso sexual es un delito en el Código Penal colombiano.</p>\n        <p><strong>Protección contra represalias.</strong> La ley protege la estabilidad de quien denuncia y de quienes sirven como testigos: la terminación unilateral de su contrato dentro de los <strong>seis meses</strong> siguientes a la queja carece de efectos. Si el despido ocurre después de ese plazo y la persona alega que fue por su denuncia, le corresponde al empleador demostrar lo contrario.</p>\n        <p><strong>¿Qué hace el comité si le llega un caso de acoso sexual?</strong></p>\n        <ol>\n          <li>Escucha con respeto, sin cuestionar ni minimizar el relato.</li>\n          <li>No cita a una reunión de conciliación ni de diálogo entre las partes.</li>\n          <li>Informa a la persona de la ruta específica de la empresa y de su derecho a acudir a las autoridades.</li>\n          <li>Remite el caso, con reserva, a la instancia que la empresa haya definido.</li>\n          <li>Mantiene la confidencialidad absoluta.</li>\n        </ol>\n        <p>Sentar a una víctima de acoso sexual frente a su agresor para \"conciliar\" puede revictimizarla y causar un daño grave. Es uno de los errores más serios que puede cometer un comité.</p>\n      ",
        "keyPoints": [
          "Acoso sexual (Ley 2365 de 2024): puede ser un solo hecho, no se concilia y cubre el contexto laboral sin importar la vinculación.",
          "El Comité de Convivencia no es competente para acoso sexual: lo remite a la ruta específica de la empresa.",
          "Nunca se cita a la víctima a conciliar con su presunto agresor."
        ],
        "practice": {
          "q": "¿Cuál es la principal diferencia entre acoso sexual y acoso laboral?",
          "options": [
            "El acoso sexual puede ser un solo hecho y no se concilia",
            "El acoso sexual solo puede ocurrir dentro de la empresa",
            "El acoso sexual solo lo comete un jefe contra un subalterno"
          ]
        }
      },
      {
        "title": "Conformación del comité según la Resolución 3461 de 2025",
        "content": "\n        <p><strong>Número de integrantes</strong> según el tamaño de la empresa:</p>\n        <ul>\n          <li><strong>Menos de 5 trabajadores:</strong> un representante de los trabajadores y uno del empleador.</li>\n          <li><strong>Más de 5 y menos de 20 trabajadores:</strong> un representante de cada parte, con sus suplentes.</li>\n          <li><strong>Más de 20 trabajadores:</strong> dos representantes de los trabajadores y dos del empleador, con sus respectivos suplentes.</li>\n        </ul>\n        <p>La norma no menciona de forma expresa los casos de exactamente 5 o exactamente 20 trabajadores. En esos casos, lo prudente es aplicar la conformación más protectora (con suplentes) y consultar a la ARL.</p>\n        <p>La empresa puede designar más integrantes según su organización interna, siempre en igual número por cada parte. Si tiene dos o más centros de trabajo, conforma un comité de nivel central y uno adicional por cada centro.</p>\n        <p><strong>Cómo se escogen.</strong> El empleador <strong>designa directamente</strong> a sus representantes. Los trabajadores <strong>eligen</strong> a los suyos por <strong>votación secreta</strong>, con escrutinio público. Cada empresa define el procedimiento de elección y lo incluye en la convocatoria.</p>\n        <p>No es obligatorio que los representantes del empleador sean directivos ni que los de los trabajadores sean de cargos operativos. Lo que importa es que tengan competencias como la imparcialidad, la tolerancia, la serenidad y la reserva.</p>\n        <p><strong>Quiénes no pueden integrarlo.</strong> Las personas a quienes, en el año anterior a la conformación del comité, se les haya formulado una queja de acoso laboral, o que hayan sido víctimas de acoso laboral en ese mismo período.</p>\n        <p><strong>Empresas de servicios temporales.</strong> Las quejas de los trabajadores en misión se tramitan en primera instancia ante el comité de la empresa usuaria, con la participación de al menos un representante del comité de la empresa de servicios temporales.</p>\n        <p><strong>Período.</strong> Dos años contados desde la comunicación de la elección o designación. Si un principal se retira, asume su suplente sin necesidad de nuevas elecciones. Los cambios en el número de trabajadores no obligan a reconformar el comité antes de terminar el período. Al finalizar, el comité saliente entrega toda su documentación al nuevo.</p>\n        <p><strong>Presidente y secretario</strong> se eligen por mutuo acuerdo entre los integrantes. El presidente convoca y dirige las sesiones, tramita las recomendaciones ante la dirección y gestiona los recursos. El secretario recibe las quejas, cita a las partes, custodia los archivos y las actas, y elabora los informes.</p>\n        <p><strong>Recursos.</strong> El empleador debe dar al comité un espacio físico y elementos para manejar los documentos con reserva, los recursos técnicos y financieros necesarios, y el tiempo de los integrantes dentro de la jornada laboral.</p>\n      ",
        "keyPoints": [
          "Integrantes: 1 y 1 (menos de 5 trabajadores), 1 y 1 con suplentes (más de 5 y menos de 20), 2 y 2 con suplentes (más de 20).",
          "El empleador designa a sus representantes; los trabajadores eligen a los suyos por votación secreta.",
          "No pueden integrarlo quienes en el año anterior hayan sido objeto de queja o víctimas de acoso laboral."
        ],
        "practice": {
          "q": "En una empresa con 45 trabajadores, ¿cuántos representantes de cada parte tiene el comité?",
          "options": [
            "Cuatro por cada parte, con sus suplentes",
            "Dos por cada parte, con sus suplentes",
            "Uno por cada parte, sin suplentes"
          ]
        }
      },
      {
        "title": "Funcionamiento: reglamento, reuniones y confidencialidad",
        "content": "\n        <p><strong>Reglamento de funcionamiento.</strong> Cada comité debe elaborar su propio reglamento. Debe incluir acuerdos de confidencialidad y protocolos para manejar la información con reserva durante el trámite de los casos y después de cerrarlos.</p>\n        <p><strong>Reuniones ordinarias:</strong> una vez al <strong>mes</strong>. El comité sesiona con la <strong>mitad más uno</strong> de sus integrantes.</p>\n        <p><strong>Reuniones extraordinarias:</strong> cada vez que se recibe una queja de acoso laboral.</p>\n        <p><strong>La confidencialidad no es opcional.</strong> Las quejas contienen información muy sensible: salud mental, relaciones personales, situaciones familiares. Romper la reserva destruye la confianza en el comité, puede exponer a la persona a represalias y viola sus derechos. En la práctica:</p>\n        <ul>\n          <li>los documentos se guardan bajo llave o en carpetas digitales con acceso restringido;</li>\n          <li>los casos no se comentan fuera de las sesiones, ni siquiera \"sin nombres\";</li>\n          <li>las actas registran los hechos y los acuerdos, sin juicios ni detalles innecesarios;</li>\n          <li>cada integrante firma un compromiso de confidencialidad.</li>\n        </ul>\n        <p><strong>Conflicto de interés.</strong> Si un integrante es amigo cercano, familiar, jefe directo o subordinado directo de alguna de las partes, o tiene un interés en el resultado, debe declararse impedido y su suplente lo reemplaza en ese caso. La imparcialidad no solo debe existir: las partes deben poder verla.</p>\n        <p><strong>Actas.</strong> Toda sesión, ordinaria o extraordinaria, queda en un acta firmada, que custodia el secretario.</p>\n        <p><strong>Informes.</strong> El comité presenta informes <strong>trimestrales</strong> y un informe <strong>anual</strong> de gestión a la alta dirección, con estadísticas sin datos que identifiquen a las personas. También entrega los informes que pidan los organismos de control.</p>\n        <p><strong>Prevención, no solo quejas.</strong> En las reuniones ordinarias el comité no se limita a esperar casos: propone actividades de prevención, revisa los resultados de la evaluación de riesgo psicosocial con el SG-SST y hace seguimiento a las recomendaciones que haya dado.</p>\n      ",
        "keyPoints": [
          "Cada comité tiene un reglamento con acuerdos de confidencialidad; sesiona cada mes con la mitad más uno.",
          "Reunión extraordinaria cada vez que se recibe una queja.",
          "Quien tenga conflicto de interés con las partes se declara impedido y lo reemplaza su suplente."
        ],
        "practice": {
          "q": "Un integrante del comité es el jefe directo de la persona señalada en una queja. ¿Qué debe hacer?",
          "options": [
            "Participar, porque conoce mejor el caso",
            "Presidir la reunión para garantizar el orden",
            "Declararse impedido para que lo reemplace su suplente"
          ]
        }
      },
      {
        "title": "Trámite de una queja paso a paso, con sus plazos",
        "content": "\n        <p>La Resolución 3461 de 2025 fija plazos concretos para que el trámite sea ágil. En total, el procedimiento preventivo <strong>no puede superar 65 días calendario</strong> desde la queja formal (el seguimiento mensual posterior no cuenta dentro de ese límite).</p>\n        <ol>\n          <li><strong>Recepción (5 días calendario).</strong> El secretario recibe la queja por escrito con sus pruebas, la registra y convoca al comité.</li>\n          <li><strong>Examen confidencial del caso (5 días, ampliables en 10 con justificación escrita).</strong> El comité revisa los hechos y las pruebas y verifica si es un asunto de su competencia (si es acoso sexual o violencia de género, lo remite a la ruta específica).</li>\n          <li><strong>Escucha individual de las partes (5 días).</strong> Se escucha <strong>por separado</strong> a quien presentó la queja y a la persona señalada. Cada una puede presentar su versión y sus pruebas.</li>\n          <li><strong>Espacios de diálogo y plan de mejora (hasta 5 días después de las escuchas, ampliables en 10).</strong> Si las partes lo aceptan, el comité promueve un diálogo para llegar a compromisos concretos: cambios de conducta, formas de comunicación, ajustes en la organización del trabajo. Los compromisos quedan por escrito.</li>\n          <li><strong>Seguimiento mensual</strong> a los compromisos.</li>\n          <li><strong>Recomendaciones a la alta dirección (entre 5 y 10 días)</strong>, con copia al trabajador, cuando hacen falta medidas de la empresa: por ejemplo, intervenir factores de riesgo psicosocial del área o un traslado recomendado.</li>\n          <li><strong>Remisión (máximo 15 días desde que se verifica el incumplimiento)</strong> cuando no hay acuerdo, no se cumplen las recomendaciones o la conducta persiste. En el sector privado, el comité informa a la alta dirección, cierra el caso y el trabajador puede acudir al inspector de trabajo o al juez. En el sector público, el caso se remite a la Procuraduría General de la Nación o a las personerías.</li>\n        </ol>\n        <p><strong>Ejemplo.</strong> El 3 de marzo llega una queja. El 6 se reúne el comité y la examina. El 10 y el 11 escucha por separado a las partes. El 15 hay una reunión de diálogo en la que se acuerda un plan de mejora con compromisos para el supervisor y una capacitación en comunicación asertiva para el equipo. En abril y mayo el comité verifica los compromisos. Todo el trámite principal ocurrió dentro de los 65 días.</p>\n        <p><strong>Qué entrega el comité al final:</strong> el acta de cada paso, los compromisos firmados, las recomendaciones enviadas y la constancia de cierre o de remisión.</p>\n      ",
        "keyPoints": [
          "El procedimiento preventivo no puede superar 65 días calendario desde la queja formal.",
          "Pasos: recibir, examinar con reserva, escuchar por separado, diálogo y plan de mejora, seguimiento mensual, recomendaciones y remisión.",
          "Sin acuerdo o con conducta persistente, en el sector privado se informa a la alta dirección y el trabajador puede acudir al inspector o al juez."
        ],
        "practice": {
          "q": "¿Cuál es el plazo máximo del procedimiento preventivo desde la queja formal?",
          "options": [
            "65 días calendario",
            "15 días hábiles",
            "Un año calendario"
          ]
        }
      },
      {
        "title": "Habilidades del integrante: escuchar, mediar y no revictimizar",
        "content": "\n        <p>Las normas definen el procedimiento, pero el resultado depende de cómo se comportan los integrantes. Estas son las habilidades que más pesan.</p>\n        <p><strong>Escucha activa.</strong> Dejar hablar sin interrumpir, tomar nota de los hechos concretos (qué, cuándo, dónde, quién lo vio), hacer preguntas abiertas (\"¿qué pasó después?\") y no adelantar conclusiones. Es útil repetir con otras palabras lo que la persona dijo, para confirmar que se entendió.</p>\n        <p><strong>Lenguaje que no revictimiza.</strong> Evite frases como \"¿y usted qué hizo para que le hablara así?\", \"eso le pasa a todo el mundo\" o \"no lo tome personal\". La persona que se queja ya hizo un esfuerzo grande; el comité no está para juzgar su reacción.</p>\n        <p><strong>Imparcialidad.</strong> La persona señalada también tiene derecho a ser escuchada con respeto y a presentar su versión. El comité no \"toma partido\": busca hechos y soluciones.</p>\n        <p><strong>Mediación.</strong> En la reunión de diálogo el comité:</p>\n        <ul>\n          <li>explica las reglas: respeto, turnos para hablar, confidencialidad;</li>\n          <li>centra la conversación en las conductas y su efecto, no en atacar a las personas;</li>\n          <li>ayuda a convertir el reclamo en compromisos verificables (\"las correcciones se harán en privado\", no \"va a cambiar su actitud\");</li>\n          <li>detiene la reunión si una de las partes se siente intimidada.</li>\n        </ul>\n        <p><strong>Cuándo no hacer reunión conjunta.</strong> Si hay acoso sexual, violencia, amenazas, o si la persona que se queja no quiere estar frente a la otra, no se fuerza el encuentro.</p>\n        <p><strong>Primeros auxilios psicológicos.</strong> A veces la persona llega en crisis: llanto, ansiedad intensa, ideas de hacerse daño. El integrante no es terapeuta, pero puede escuchar con calma, no dejarla sola, ayudarla a respirar y a ubicarse, y activar la ruta de salud mental de la empresa y de la EPS. La Resolución 3461 de 2025 prevé capacitación para esto con apoyo de la ARL.</p>\n        <p><strong>Enfoque de género.</strong> Reconocer que mujeres y personas de sectores diversos pueden enfrentar formas particulares de acoso y barreras adicionales para quejarse, y evitar estereotipos al valorar los relatos.</p>\n      ",
        "keyPoints": [
          "Escucha activa: hechos concretos, preguntas abiertas y ninguna conclusión anticipada.",
          "Nada de frases que culpen a quien se queja; ambas partes merecen respeto y ser escuchadas.",
          "Los compromisos deben ser conductas verificables; no se fuerza un encuentro si hay riesgo o la persona no quiere."
        ],
        "practice": {
          "q": "En la reunión de diálogo, ¿cómo debe quedar un buen compromiso?",
          "options": [
            "Como una sanción para la persona señalada",
            "Como una conducta concreta y verificable",
            "Como una promesa general de mejorar la actitud"
          ]
        }
      },
      {
        "title": "Garantías, responsabilidades del empleador y prevención",
        "content": "\n        <p><strong>Garantías para quien se queja (Ley 1010 de 2006).</strong> La terminación unilateral del contrato de la víctima de acoso laboral que haya usado los procedimientos preventivos, correctivos o sancionatorios <strong>carece de efecto</strong> si se produce dentro de los <strong>seis meses</strong> siguientes a la queja, siempre que la autoridad competente verifique los hechos. La misma protección cubre a quienes sirven como testigos.</p>\n        <p><strong>Quejas temerarias.</strong> Cuando una queja de acoso laboral carece de todo fundamento fáctico o razonable, la ley prevé una multa para quien la presentó. Esto no debe desanimar a nadie de quejarse de buena fe: el que una queja no termine en acuerdo no la vuelve temeraria.</p>\n        <p><strong>Caducidad.</strong> Las acciones derivadas del acoso laboral <strong>caducan seis meses</strong> después de la fecha en que ocurrieron las conductas. Por eso es importante tramitar las quejas a tiempo.</p>\n        <p><strong>Responsabilidades del empleador</strong> según la Resolución 3461 de 2025, a través de talento humano y del SG-SST:</p>\n        <ul>\n          <li><strong>Preventivas:</strong> política escrita contra el acoso; manual o normas de convivencia; capacitación en no discriminación, resolución de conflictos y comunicación asertiva; sensibilización; conformar el comité y tener un procedimiento de quejas; capacitación con la ARL en primeros auxilios psicológicos.</li>\n          <li><strong>Correctivas:</strong> intervenir los factores de riesgo psicosocial con participación de los trabajadores; trasladar a la persona cuando lo recomienden el médico o el comité, en buenas condiciones; dar apoyo en crisis; socializar las rutas de salud mental; y atender las recomendaciones del comité.</li>\n        </ul>\n        <p><strong>Responsabilidades de las ARL:</strong> asesoría técnica, promoción de la salud mental, prevención con enfoque de género, apoyo emocional en crisis, capacitación a los integrantes del comité y reporte de sus acciones al Ministerio del Trabajo.</p>\n        <p><strong>Sanciones a la empresa.</strong> El incumplimiento de estas obligaciones puede ser sancionado por las direcciones territoriales del Ministerio del Trabajo, según las normas del Sistema General de Riesgos Laborales.</p>\n        <p><strong>La mejor queja es la que no llega.</strong> Un comité eficaz trabaja con el SG-SST en la evaluación del riesgo psicosocial, propone capacitaciones para los jefes sobre cómo corregir con respeto, y promueve canales para resolver los conflictos cuando aún son pequeños.</p>\n      ",
        "keyPoints": [
          "El despido de quien se quejó, dentro de los seis meses siguientes, carece de efecto si la autoridad verifica los hechos; también protege a los testigos.",
          "Las acciones por acoso laboral caducan seis meses después de ocurridas las conductas.",
          "El empleador tiene obligaciones preventivas y correctivas; la ARL asesora y capacita al comité."
        ],
        "practice": {
          "q": "¿Cuánto tiempo después de las conductas caducan las acciones por acoso laboral?",
          "options": [
            "Cinco años",
            "Un mes",
            "Seis meses"
          ]
        }
      }
    ],
    "scenarios": [
      {
        "scenario": "Una trabajadora presenta por escrito una queja contra su supervisor por gritos y descalificaciones frente al equipo. Un integrante propone citar a ambos mañana mismo a una reunión conjunta \"para arreglarlo rápido\".",
        "options": [
          "Acepto: entre más rápido se enfrenten, más rápido se resuelve.",
          "Propongo registrar la queja, examinarla con reserva y escuchar a cada parte por separado antes de cualquier reunión de diálogo.",
          "Propongo trasladar a la trabajadora de área para que no tenga que ver al supervisor."
        ]
      },
      {
        "scenario": "Una trabajadora le cuenta al comité que un compañero le envía mensajes de contenido sexual y la tocó sin su consentimiento en el vestidor. Pide ayuda.",
        "options": [
          "La citamos con el compañero a una reunión de conciliación para que él se comprometa a no repetirlo.",
          "La escuchamos con respeto, le explicamos la ruta específica de la empresa y su derecho a acudir a la Fiscalía, y remitimos el caso con reserva.",
          "Le decimos que el comité no atiende ese tipo de casos y que busque a otra persona."
        ]
      },
      {
        "scenario": "En la cafetería, un compañero le pregunta a un integrante del comité: \"¿Es cierto que Juan se quejó del jefe de bodega? Cuéntame, que todos andan hablando\".",
        "options": [
          "Le cuento lo básico, sin detalles, porque igual ya todos saben.",
          "Le respondo que los asuntos del comité son confidenciales y no comento nada, ni para confirmar ni para negar.",
          "Le digo que no es cierto, para cortar el rumor y proteger a Juan."
        ]
      },
      {
        "scenario": "Un trabajador se queja porque su jefe le exige cumplir el horario y le hizo un llamado de atención por escrito, con respeto, por llegar tarde cuatro veces en el mes.",
        "options": [
          "Lo tramitamos como acoso laboral grave y recomendamos sancionar al jefe.",
          "Archivamos la queja sin escucharlo, porque es evidente que no tiene razón.",
          "Lo escuchamos, revisamos los hechos y, si se confirma que fue una exigencia razonable con respeto, le explicamos por qué no constituye acoso."
        ]
      },
      {
        "scenario": "Hace dos meses el supervisor se comprometió por escrito a hacer las correcciones en privado. En el seguimiento mensual, la trabajadora cuenta que volvió a gritarle frente a todos dos veces.",
        "options": [
          "Damos el caso por cerrado porque ya se había firmado un compromiso.",
          "Hacemos otra reunión de diálogo y otro compromiso igual, para darle una nueva oportunidad.",
          "Verificamos el incumplimiento, informamos a la alta dirección, cerramos el caso y le explicamos que puede acudir al inspector de trabajo o al juez."
        ]
      }
    ],
    "exam": [
      {
        "q": "¿Qué resolución derogó las Resoluciones 652 y 1356 de 2012 sobre comités de convivencia?",
        "options": [
          "La Resolución 3461 de 2025 del Ministerio del Trabajo.",
          "La Resolución 0312 de 2019, que adoptó los estándares mínimos del sistema de gestión.",
          "La Resolución 2013 de 1986."
        ]
      },
      {
        "q": "¿Cuál de estas afirmaciones sobre el Comité de Convivencia Laboral es correcta?",
        "options": [
          "Es la instancia encargada de investigar y conciliar todos los casos de acoso sexual en la empresa.",
          "Es una instancia preventiva y conciliadora que no determina si hubo acoso laboral.",
          "Es un tribunal interno que decide la sanción."
        ]
      },
      {
        "q": "Según la Ley 1010 de 2006, ¿cuál de estas conductas NO constituye acoso laboral?",
        "options": [
          "Insultar de forma reiterada a un trabajador frente a sus compañeros para presionar su renuncia.",
          "Ocultarle a un trabajador, de forma persistente, la información que necesita para hacer su trabajo.",
          "Evaluar el desempeño de un trabajador con criterios objetivos y conocidos."
        ]
      },
      {
        "q": "Un jefe asigna a un ingeniero, de forma deliberada y reiterada, labores que menosprecian su formación. ¿Qué modalidad de acoso podría ser?",
        "options": [
          "Inequidad laboral.",
          "Discriminación laboral por razones de origen, credo o preferencia política del trabajador.",
          "Acoso sexual."
        ]
      },
      {
        "q": "Ordenar a un trabajador que haga una tarea peligrosa sin las mínimas condiciones de seguridad, de forma reiterada, ¿qué modalidad de acoso puede ser?",
        "options": [
          "Entorpecimiento laboral, porque se retrasa la ejecución normal de la labor del trabajador.",
          "Desprotección laboral.",
          "Inequidad laboral."
        ]
      },
      {
        "q": "¿Qué debe hacer el comité si recibe una queja por acoso sexual?",
        "options": [
          "Citar a las partes a una reunión de diálogo para buscar un acuerdo antes de los 65 días del procedimiento.",
          "Tramitarla igual que una queja de acoso laboral, con escucha individual y plan de mejora.",
          "Orientar a la persona y remitir el caso, con reserva, a la ruta específica de la empresa."
        ]
      },
      {
        "q": "Según la Res. 3461 de 2025, una empresa con 150 trabajadores, ¿cómo conforma su comité?",
        "options": [
          "Con dos representantes de los trabajadores y dos del empleador, con sus suplentes.",
          "Con cuatro representantes por cada parte, porque supera los cien trabajadores en la planta.",
          "Con un solo representante de los trabajadores y uno del empleador, sin suplentes para ninguna de las partes."
        ]
      },
      {
        "q": "¿Cómo se escogen los representantes de los trabajadores en el comité?",
        "options": [
          "Los asigna la ARL.",
          "Por votación secreta de los trabajadores, con escrutinio público.",
          "Los designa directamente el empleador entre los trabajadores con mejor evaluación de desempeño."
        ]
      },
      {
        "q": "¿Quién NO puede integrar el comité?",
        "options": [
          "Un trabajador con cargo operativo que nunca haya recibido capacitación en convivencia laboral.",
          "Un representante del empleador que no tenga un cargo directivo dentro de la organización.",
          "Quien en el año anterior a la conformación haya sido objeto de una queja de acoso laboral."
        ]
      },
      {
        "q": "¿Con qué frecuencia se reúne el comité de forma ordinaria?",
        "options": [
          "Una vez al mes.",
          "Solo cuando se recibe una queja, porque no tiene funciones de prevención en la empresa.",
          "Cada semana."
        ]
      },
      {
        "q": "En el trámite de una queja, ¿qué se hace antes de cualquier reunión de diálogo entre las partes?",
        "options": [
          "Informar a todo el equipo del área sobre la queja para recoger testimonios de manera abierta.",
          "Escuchar a cada parte por separado.",
          "Consultar al jefe del área."
        ]
      },
      {
        "q": "¿Cuál es el plazo máximo del procedimiento preventivo del comité, contado desde la queja formal?",
        "options": [
          "Seis meses, que coinciden con el plazo de caducidad de las acciones por acoso laboral.",
          "Quince días hábiles, sin posibilidad de ampliación por ningún motivo.",
          "65 días calendario, sin contar el seguimiento mensual posterior."
        ]
      },
      {
        "q": "En una empresa privada, la persona señalada incumple el plan de mejora y la conducta persiste. ¿Qué hace el comité?",
        "options": [
          "Informa a la alta dirección, cierra el caso y orienta al trabajador sobre el inspector de trabajo o el juez.",
          "Remite el caso a la Procuraduría General de la Nación, que es la autoridad competente para empresas privadas.",
          "Sanciona directamente a la persona señalada con una suspensión sin pago, según la gravedad de los hechos probados."
        ]
      },
      {
        "q": "Un integrante comenta un caso con sus compañeros \"sin dar nombres\". ¿Qué principio incumple?",
        "options": [
          "La eficacia, porque el comentario no contribuye a que las partes lleguen a un acuerdo en la reunión.",
          "La confidencialidad, que obliga a guardar reserva absoluta sobre los casos, durante el trámite y después de cerrarlos.",
          "La celeridad, porque retrasa el trámite que el comité debe completar dentro del plazo legal."
        ]
      },
      {
        "q": "Según la Ley 1010 de 2006, ¿qué pasa si despiden sin justa causa a quien presentó una queja, dos meses después?",
        "options": [
          "El despido es válido, porque la ley solo protege a los trabajadores que tengan fuero sindical vigente.",
          "El despido solo se revisa si el comité había concluido formalmente, por escrito, que sí existió acoso laboral.",
          "Carece de efecto si la autoridad verifica los hechos, por ocurrir dentro de los seis meses siguientes."
        ]
      },
      {
        "q": "¿Cuál de estas es una responsabilidad preventiva del empleador según la Res. 3461 de 2025?",
        "options": [
          "Tener una política escrita contra el acoso y capacitar en resolución de conflictos y comunicación asertiva.",
          "Decidir con el comité si hubo acoso laboral y publicar los resultados para prevenir nuevos casos.",
          "Reemplazar al comité por un buzón anónimo de quejas que revisa la gerencia de la empresa cada trimestre."
        ]
      }
    ],
    "workshops": [],
    "project": null
  }
];
