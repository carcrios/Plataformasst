/**
 * Ampliación a 4 horas del curso LOTO.
 *
 * Se agrega al final del curso base (content-src/courses-loto.js y sus prácticas en practicas.js):
 * 4 módulos, 4 prácticas, 5 escenarios y 8 preguntas de evaluación; además, un taller aplicado por
 * cada uno de los 12 módulos y un proyecto final: el procedimiento LOTO de un equipo real de su planta.
 *
 * Los talleres y el proyecto se redactan pensando en la planta del alumno; el servidor exige el mínimo
 * de palabras de cada campo. La intensidad (`hours`) debe coincidir con la que mide tools/intensity.mjs.
 */
export default {
  hours: 4,
  summary:
    'Por qué el botón de paro no protege, cómo identificar y liberar cada energía, los dispositivos de bloqueo, el procedimiento de 6 pasos, la verificación de energía cero, el bloqueo grupal, las excepciones, el programa LOTO de la planta y cómo escribir el procedimiento de un equipo real. Incluye talleres aplicados a su planta y un proyecto final.',

  modules: [
    {
      title: 'Cómo se escribe el procedimiento específico de un equipo',
      content: `
        <p>El programa LOTO de la empresa dice <em>qué</em> se hace en general. El <strong>procedimiento específico</strong> dice <em>cómo</em> se aísla <strong>una máquina concreta</strong>: cuáles son sus fuentes, dónde está cada punto de aislamiento, con qué dispositivo se bloquea y cómo se comprueba la energía cero. Sin él, cada técnico improvisa, y la improvisación es la que deja una fuente sin bloquear.</p>
        <p><strong>Cuándo se necesita.</strong> Para todo equipo con más de una fuente de energía, con energía almacenada o con puntos de aislamiento que no se ven desde el sitio de trabajo. En la práctica, casi todos los equipos de una planta lo necesitan.</p>
        <p><strong>Contenido mínimo de un buen procedimiento:</strong></p>
        <ol>
          <li><strong>Identificación del equipo</strong>: nombre, código, ubicación y fotografía general.</li>
          <li><strong>Inventario de energías</strong>: cada fuente con su tipo y magnitud (por ejemplo, eléctrica 440 V, aire comprimido 6 bar, hidráulica 120 bar, carga suspendida de 300 kg).</li>
          <li><strong>Puntos de aislamiento</strong>: cada uno numerado, con su ubicación exacta, una foto y una etiqueta física en campo con el mismo número (E-1, N-1, H-1...).</li>
          <li><strong>Dispositivo de bloqueo</strong> que corresponde a cada punto (candado en seccionador, bloqueo de válvula de bola, bloqueo de breaker...).</li>
          <li><strong>Liberación de energía residual</strong>: cómo se purga el aire, cómo se alivia la presión hidráulica, cómo se baja o se calza la carga, cuánto tiempo hay que esperar para que se descarguen los capacitores.</li>
          <li><strong>Verificación de energía cero</strong>: qué se prueba y con qué instrumento en cada fuente.</li>
          <li><strong>Retiro del bloqueo y reenergización</strong>: orden en que se restablece cada fuente.</li>
          <li><strong>Firmas</strong>: quién lo elaboró, quién lo revisó y la fecha de la última verificación en campo.</li>
        </ol>
        <p><strong>Cómo se elabora bien:</strong></p>
        <ul>
          <li>Se hace <strong>en campo, frente al equipo</strong>, con el técnico que más lo conoce y el operador. Los planos ayudan, pero las modificaciones que no quedaron en los planos solo se descubren mirando.</li>
          <li>Se siguen las tuberías y los cables hasta el punto de aislamiento real. Un error frecuente es bloquear un seccionador que alimenta otra máquina parecida.</li>
          <li>Se <strong>prueba el procedimiento</strong>: se aplica completo una vez y se verifica que la máquina queda en energía cero.</li>
          <li>Se escribe con palabras sencillas y fotos, en una o dos páginas, y se deja una copia plastificada en el equipo.</li>
        </ul>
        <p><strong>Cuándo se actualiza:</strong> cada vez que se modifica el equipo, se cambia una fuente de energía, se detecta un error al aplicarlo o como resultado de la inspección periódica.</p>
      `,
      keyPoints: [
        'El procedimiento específico dice cómo se aísla una máquina concreta: fuentes, puntos, dispositivos, liberación y verificación.',
        'Cada punto de aislamiento se numera, se fotografía y se marca en campo con el mismo código.',
        'Se elabora frente al equipo con quien lo conoce, se prueba completo y se actualiza con cada modificación.'
      ]
    },
    {
      title: 'Energías no eléctricas: neumática, hidráulica, vapor, gravedad y resortes',
      content: `
        <p>La mayoría de los accidentes LOTO graves en plantas de alimentos, bebidas y empaque no son eléctricos: son <strong>cilindros neumáticos</strong> que se mueven, <strong>prensas hidráulicas</strong> que bajan, <strong>líneas de vapor</strong> o producto que se abren y <strong>cargas</strong> que caen. Bloquear el tablero eléctrico no controla ninguna de ellas.</p>
        <p><strong>Neumática (aire comprimido):</strong></p>
        <ul>
          <li>Se aísla con una <strong>válvula de bloqueo</strong> que, al cerrarse, también <strong>descarga</strong> el aire aguas abajo (válvula de tres vías con escape). Una válvula de bola común cierra pero deja el aire atrapado.</li>
          <li>Después se verifica que el manómetro marque cero y se acciona el mando del cilindro para confirmar que no se mueve.</li>
          <li>Atención a los <strong>acumuladores</strong> y a los cilindros que quedan con aire atrapado entre válvulas: pueden moverse al aflojar un racor.</li>
        </ul>
        <p><strong>Hidráulica:</strong></p>
        <ul>
          <li>Se apaga la bomba y se bloquea su alimentación eléctrica, pero la presión puede seguir en el sistema por los <strong>acumuladores</strong> y por el peso de la carga sobre los cilindros.</li>
          <li>Se alivia la presión por el procedimiento del fabricante y se verifica con el manómetro.</li>
          <li>Las partes que pueden bajar por gravedad (platos de prensa, mesas elevadoras) se <strong>bajan a su posición inferior</strong> o se <strong>calzan</strong> con soportes mecánicos diseñados para esa carga.</li>
        </ul>
        <p><strong>Vapor, gases y líquidos en tuberías:</strong></p>
        <ul>
          <li>El método más seguro es el <strong>doble bloqueo y purga</strong>: dos válvulas cerradas y bloqueadas en serie y una válvula de purga abierta entre ellas, para que una fuga de la primera salga por la purga y no llegue al equipo.</li>
          <li>Para trabajos dentro de recipientes o con productos peligrosos se usa la <strong>desconexión física</strong>: retirar un tramo de tubería o instalar una <strong>brida ciega</strong>.</li>
          <li>Antes de abrir, se drena, se despresuriza y se espera a que baje la temperatura.</li>
        </ul>
        <p><strong>Gravedad y energía mecánica almacenada:</strong></p>
        <ul>
          <li>Cargas suspendidas, contrapesos y partes elevadas se bajan o se aseguran con <strong>calzos, pasadores o soportes</strong> antes de entrar bajo ellos.</li>
          <li><strong>Resortes</strong> comprimidos o extendidos se liberan con la herramienta y la secuencia del fabricante.</li>
          <li><strong>Volantes y partes en rotación</strong> se dejan detener por completo; nunca se frenan con la mano o con una herramienta.</li>
        </ul>
        <p><strong>La regla:</strong> por cada fuente del inventario debe haber un punto de aislamiento bloqueado <em>y</em> una forma de liberar o contener lo que queda almacenado.</p>
      `,
      keyPoints: [
        'Bloquear el tablero no controla el aire, el aceite, el vapor ni la gravedad.',
        'Neumática con válvula que descarga; hidráulica con alivio de presión y calzos; tuberías con doble bloqueo y purga o brida ciega.',
        'Cargas elevadas se bajan o se calzan; resortes se liberan; partes en rotación se dejan detener solas.'
      ]
    },
    {
      title: 'Excepciones: equipos con enchufe, servicio menor y trabajos que necesitan energía',
      content: `
        <p>No toda intervención admite un bloqueo completo. Las referencias internacionales (OSHA 1910.147 y ANSI/ASSP Z244.1) reconocen algunas situaciones especiales, pero son <strong>excepciones estrictas</strong>, no atajos.</p>
        <p><strong>Equipos conectados con enchufe.</strong> Si la única energía es eléctrica y llega por un cable con enchufe, desconectarlo es un aislamiento válido siempre que <strong>el enchufe quede bajo el control exclusivo</strong> de quien interviene: en su mano, a la vista y al alcance, o dentro de una <strong>caja de bloqueo para enchufes</strong> con su candado. Un enchufe desconectado y dejado en el piso, lejos del trabajador, no es un aislamiento.</p>
        <p><strong>Servicio menor durante la producción.</strong> Algunos ajustes rutinarios, repetitivos e integrales a la producción (por ejemplo, retirar un atasco menor de una envasadora o cambiar una cuchilla con una herramienta especial) pueden hacerse sin LOTO completo <strong>solo si</strong> la empresa demostró, en un análisis escrito, que existen <strong>medidas alternativas que dan una protección equivalente</strong>:</p>
        <ul>
          <li>guardas con interbloqueo de seguridad diseñadas y validadas para esa tarea;</li>
          <li>herramientas que mantienen las manos fuera de la zona de peligro;</li>
          <li>dispositivos de bloqueo del mando con llave personal (control de acceso por llave atrapada);</li>
          <li>procedimiento escrito, entrenamiento específico y verificación periódica.</li>
        </ul>
        <p>Si la tarea no está en esa lista analizada y aprobada, se aplica LOTO completo. "Es solo un momento" no es una excepción.</p>
        <p><strong>Trabajos que necesitan energía.</strong> Pruebas, ajustes finos, calibraciones y búsqueda de fallas a veces requieren el equipo energizado. En esos casos:</p>
        <ul>
          <li>Se hace un <strong>análisis de riesgos</strong> específico y se emite el permiso que corresponda.</li>
          <li>Solo lo ejecuta <strong>personal calificado</strong>, con el equipo de protección adecuado y las distancias de seguridad del RETIE cuando hay tensión eléctrica.</li>
          <li>Se energiza solo lo necesario, por el menor tiempo posible, con el área delimitada.</li>
          <li>Para el resto de la intervención, el equipo vuelve a bloqueo completo.</li>
        </ul>
        <p><strong>La interrupción temporal para una prueba</strong> sigue la secuencia del curso: retirar herramientas y personas, retirar bloqueos en orden, energizar y probar, y volver a desenergizar y bloquear antes de seguir trabajando.</p>
        <p><strong>Lo que nunca es una excepción:</strong> la presión de producción, la falta de candados, que "el equipo es pequeño" o que "el operador está pendiente".</p>
      `,
      keyPoints: [
        'Enchufe desconectado vale como aislamiento solo bajo control exclusivo de quien interviene.',
        'El servicio menor sin LOTO completo exige un análisis escrito con medidas alternativas equivalentes.',
        'Los trabajos con energía requieren análisis, permiso y personal calificado; la presión de producción nunca es excepción.'
      ]
    },
    {
      title: 'Inspección periódica, indicadores y cultura LOTO',
      content: `
        <p>Un programa LOTO se deteriora sin que nadie lo note: los procedimientos se desactualizan, los candados se pierden, los contratistas llegan sin entrenamiento y los atajos se vuelven costumbre. Por eso el programa incluye <strong>verificación</strong>.</p>
        <p><strong>Inspección periódica de los procedimientos.</strong> La referencia OSHA 1910.147 exige revisar cada procedimiento <strong>al menos una vez al año</strong>, observando a un trabajador mientras lo aplica. El inspector (una persona autorizada distinta de quien ejecuta) verifica:</p>
        <ul>
          <li>que el procedimiento escrito corresponda al equipo real;</li>
          <li>que se aíslen todas las fuentes y se verifique la energía cero;</li>
          <li>que el trabajador conozca sus responsabilidades;</li>
          <li>que se registren las desviaciones y se corrijan.</li>
        </ul>
        <p>La inspección queda registrada con el equipo, la fecha, los participantes y el inspector.</p>
        <p><strong>Indicadores útiles para la planta:</strong></p>
        <ul>
          <li>porcentaje de equipos con procedimiento específico vigente;</li>
          <li>porcentaje de procedimientos inspeccionados en el año;</li>
          <li>personal autorizado y afectado entrenado (incluidos contratistas);</li>
          <li>desviaciones encontradas en observaciones de campo y cuántas se cerraron;</li>
          <li>incidentes y casi accidentes con energía peligrosa.</li>
        </ul>
        <p><strong>Errores más comunes que se encuentran en campo:</strong> candados compartidos o sin nombre; llaves maestras de uso cotidiano; bloquear el mando en lugar del aislamiento; no verificar la energía cero; olvidar la energía neumática o la gravedad; procedimientos genéricos que sirven para "todas las máquinas"; y retiro de candados ajenos sin el procedimiento formal.</p>
        <p><strong>Investigar los casi accidentes.</strong> Un arranque inesperado que no lesionó a nadie, un candado encontrado abierto o una fuente que no estaba en el procedimiento son señales tempranas. Se reportan e investigan buscando la causa en el sistema (procedimiento, entrenamiento, dispositivos, presión de producción), no solo en la persona.</p>
        <p><strong>Cultura.</strong> El programa funciona cuando:</p>
        <ul>
          <li>los supervisores aplican LOTO ellos mismos y nunca piden saltarlo;</li>
          <li>cualquier trabajador puede detener una intervención insegura sin represalias;</li>
          <li>la producción planea las paradas con el tiempo de bloqueo incluido;</li>
          <li>los candados y dispositivos están disponibles y en buen estado en el punto de uso.</li>
        </ul>
      `,
      keyPoints: [
        'Cada procedimiento se inspecciona al menos una vez al año, observando su aplicación real.',
        'Indicadores: procedimientos vigentes e inspeccionados, personal entrenado, desviaciones cerradas e incidentes.',
        'La cultura se construye con supervisores que lo cumplen, autoridad para detener y paradas planeadas con el tiempo de bloqueo.'
      ]
    }
  ],

  practices: [
    { q: '¿Dónde se elabora el procedimiento LOTO específico de un equipo?', options: ['En la oficina, a partir del manual del fabricante', 'En campo, frente al equipo, con quien mejor lo conoce', 'En una plantilla genérica que sirve para todos los equipos'], answer: 1 },
    { q: '¿Qué válvula aísla correctamente un circuito neumático?', options: ['Una válvula que cierra y descarga el aire aguas abajo', 'Cualquier válvula de bola cerrada a mano', 'El regulador de presión puesto en el mínimo'], answer: 0 },
    { q: '¿Cuándo vale desconectar un enchufe como aislamiento?', options: ['Siempre que el enchufe quede fuera del tomacorriente', 'Cuando el equipo es pequeño y la tarea es rápida', 'Cuando el enchufe queda bajo el control exclusivo de quien interviene'], answer: 2 },
    { q: '¿Con qué frecuencia mínima se inspecciona cada procedimiento LOTO según OSHA 1910.147?', options: ['Al menos una vez al año', 'Cada cinco años', 'Solo cuando ocurre un accidente'], answer: 0 }
  ],

  workshops: [
    {
      title: 'Taller 1. Un caso en su planta',
      prompt: 'Piense en su planta. Este taller no tiene respuesta única: se trata de aplicar el módulo a lo que usted ve en su trabajo.',
      fields: [
        { label: 'Describa una intervención en su planta en la que alguien detuvo una máquina solo con el botón de paro o con el mando, sin aislar la energía.', help: 'Equipo, tarea y qué se hizo. Si no lo ha visto, describa la tarea donde más fácil sería que ocurriera.', minWords: 30 },
        { label: '¿Qué pudo haber reenergizado el equipo mientras la persona estaba expuesta?', help: 'Otra persona, un automatismo, un temporizador, energía almacenada...', minWords: 25 },
        { label: '¿Qué tendría que haberse hecho distinto, según lo visto en el módulo?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 2. ¿Qué exige la norma en su empresa?',
      prompt: 'Relacione el marco normativo con los documentos y responsabilidades reales de su empresa.',
      fields: [
        { label: '¿Dónde aparece hoy el riesgo de energías peligrosas en el SG-SST de su empresa (matriz de peligros, programa, procedimientos)?', help: 'Si no aparece, dígalo y diga dónde debería estar.', minWords: 25 },
        { label: '¿Quién es responsable en su empresa de autorizar, aplicar y verificar los bloqueos?', help: 'Cargos, no nombres.', minWords: 25 },
        { label: 'Mencione una brecha entre lo que exige la norma y lo que se hace hoy, y cómo la cerraría.', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 3. Inventario de energías de un equipo',
      prompt: 'Escoja un equipo real que usted interviene o conoce. Lo usará también en el proyecto final.',
      fields: [
        { label: 'Nombre y ubicación del equipo, y qué tarea de mantenimiento o limpieza se le hace.', help: '', minWords: 15 },
        { label: 'Liste todas sus fuentes de energía con su tipo y, si la conoce, su magnitud.', help: 'Eléctrica, neumática, hidráulica, vapor, gravedad, resortes, térmica, química, rotación...', minWords: 30 },
        { label: '¿Cuál de esas energías puede quedar almacenada después de apagar, y dónde?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 4. Dispositivos para su equipo',
      prompt: 'Con el equipo del taller anterior, defina qué dispositivo de bloqueo necesita cada punto de aislamiento.',
      fields: [
        { label: 'Para cada punto de aislamiento, indique el dispositivo de bloqueo adecuado.', help: 'Candado en seccionador, bloqueo de breaker, bloqueo de válvula de bola, de compuerta, caja para enchufe...', minWords: 30 },
        { label: '¿Hay algún punto que hoy no se pueda bloquear con candado? ¿Qué haría?', help: '', minWords: 25 },
        { label: '¿Cómo están identificados hoy los candados personales en su planta y qué mejoraría?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 5. Los 6 pasos en su equipo',
      prompt: 'Escriba cómo aplicaría los 6 pasos del procedimiento a su equipo.',
      fields: [
        { label: 'Pasos 1 y 2: preparación y aviso. ¿A quién avisa y cómo apaga el equipo?', help: '', minWords: 25 },
        { label: 'Pasos 3 y 4: aislamiento y bloqueo. ¿En qué orden aísla y bloquea cada fuente?', help: '', minWords: 25 },
        { label: 'Pasos 5 y 6: energía residual y verificación. ¿Qué libera y cómo verifica?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 6. Verificación y retiro del bloqueo',
      prompt: 'La verificación de energía cero es el paso que más se omite. Concrétela para su equipo.',
      fields: [
        { label: 'Describa cómo comprobaría que cada fuente quedó en cero (prueba de arranque, manómetros, medición).', help: 'Recuerde regresar el mando a apagado después de la prueba de arranque.', minWords: 30 },
        { label: 'Antes de retirar los bloqueos, ¿qué revisa en el equipo y en el área?', help: '', minWords: 25 },
        { label: '¿En qué orden reenergiza las fuentes y por qué?', help: '', minWords: 15 }
      ]
    },
    {
      title: 'Taller 7. Bloqueo grupal y cambio de turno',
      prompt: 'Aplique los casos especiales a la organización real de su planta.',
      fields: [
        { label: 'Describa una intervención en su planta en la que participen varias personas o varios oficios. ¿Cómo organizaría el bloqueo grupal?', help: '', minWords: 30 },
        { label: '¿Cómo se entregaría el bloqueo si la intervención pasa de un turno a otro?', help: 'Sin que el equipo quede ni un momento sin bloqueo.', minWords: 25 },
        { label: '¿Cómo se integran hoy los contratistas al LOTO de su planta y qué cambiaría?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 8. El programa LOTO de su empresa',
      prompt: 'Evalúe el programa de su empresa con los elementos del módulo.',
      fields: [
        { label: '¿Qué elementos del programa existen hoy en su empresa y cuáles faltan?', help: 'Política, inventario, procedimientos específicos, dispositivos, entrenamiento, inspección, contratistas.', minWords: 30 },
        { label: '¿Cuál sería el primer elemento que implementaría o mejoraría y por qué?', help: '', minWords: 25 },
        { label: '¿Qué obstáculo real espera encontrar y cómo lo manejaría?', help: 'Presupuesto, producción, cultura, contratistas...', minWords: 25 }
      ]
    },
    {
      title: 'Taller 9. Puntos de aislamiento en campo',
      prompt: 'Prepare el levantamiento en campo de su equipo, como si fuera a escribir su procedimiento.',
      fields: [
        { label: 'Liste los puntos de aislamiento de su equipo con un código (E-1, N-1, H-1...) y su ubicación exacta.', help: '', minWords: 30 },
        { label: '¿Qué punto sería más fácil de confundir o de olvidar, y cómo lo evitaría?', help: '', minWords: 25 },
        { label: '¿Con quién elaboraría y probaría el procedimiento en campo?', help: 'Cargos.', minWords: 15 }
      ]
    },
    {
      title: 'Taller 10. Energías no eléctricas',
      prompt: 'Revise las energías no eléctricas de su planta.',
      fields: [
        { label: 'Describa un equipo de su planta con energía neumática, hidráulica, de vapor o gravitacional. ¿Cómo se aísla hoy?', help: '', minWords: 30 },
        { label: '¿Cómo se libera o se contiene su energía almacenada? Si hoy no se hace, ¿cómo debería hacerse?', help: '', minWords: 25 },
        { label: '¿Qué dispositivo o modificación haría falta (válvula con descarga, calzo, brida ciega...)?', help: '', minWords: 15 }
      ]
    },
    {
      title: 'Taller 11. Excepciones en su planta',
      prompt: 'Identifique dónde se están usando excepciones, con o sin análisis.',
      fields: [
        { label: '¿Qué tareas se hacen hoy en su planta sin LOTO completo "porque son rápidas"?', help: 'Atascos, limpiezas, ajustes, cambios de formato...', minWords: 25 },
        { label: 'Para una de ellas, ¿qué medida alternativa daría una protección equivalente?', help: 'Guarda con interbloqueo, herramienta, llave atrapada...', minWords: 25 },
        { label: 'Si no hay medida equivalente, ¿cómo se haría con LOTO completo sin frenar la producción?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 12. Cómo verificar que el programa funciona',
      prompt: 'Diseñe la verificación del programa LOTO de su planta.',
      fields: [
        { label: 'Proponga tres indicadores para su planta y cómo los mediría.', help: '', minWords: 30 },
        { label: '¿Cómo haría la inspección anual de un procedimiento? ¿Quién la haría y qué registraría?', help: '', minWords: 25 },
        { label: '¿Qué haría el supervisor de su área para que LOTO se cumpla sin presión en contra?', help: '', minWords: 25 }
      ]
    }
  ],

  project: {
    title: 'Proyecto final: procedimiento LOTO de un equipo de su planta',
    intro:
      'Escriba el procedimiento específico de bloqueo del equipo que trabajó en los talleres. Debe poder usarlo un técnico que no conoce la máquina. No es un ejercicio de memoria: use lo que levantó en los talleres y, si puede, compruébelo frente al equipo. Antes de aplicarlo en campo, su empresa debe revisarlo y aprobarlo.',
    sections: [
      { label: '1. Identificación del equipo y alcance', help: 'Nombre, código, ubicación, tareas que cubre el procedimiento y personal autorizado.', minWords: 40 },
      { label: '2. Inventario de energías y puntos de aislamiento', help: 'Cada fuente con su tipo, magnitud, código del punto (E-1, N-1...), ubicación y dispositivo de bloqueo.', minWords: 60 },
      { label: '3. Secuencia de apagado, aislamiento y bloqueo', help: 'Paso a paso, en orden, incluido el aviso a los afectados.', minWords: 60 },
      { label: '4. Liberación de energía residual y verificación de energía cero', help: 'Qué se libera, cómo, y cómo se comprueba cada fuente.', minWords: 60 },
      { label: '5. Retiro del bloqueo y reenergización', help: 'Revisión del área, retiro de dispositivos, orden de reenergización y aviso.', minWords: 45 },
      { label: '6. Casos especiales de este equipo', help: 'Bloqueo grupal, cambio de turno, pruebas con energía o tareas de servicio menor, si aplican.', minWords: 40 }
    ],
    rubric: [
      'Están todas las fuentes de energía del equipo, no solo la eléctrica.',
      'Cada punto de aislamiento tiene código, ubicación y dispositivo de bloqueo.',
      'La energía residual tiene una forma concreta de liberarse o contenerse.',
      'La verificación de energía cero dice qué se prueba y cómo, en cada fuente.',
      'El retiro del bloqueo incluye la revisión del área y el aviso a los afectados.',
      'Un técnico que no conoce el equipo podría seguirlo sin preguntar.'
    ]
  },

  scenarios: [
    {
      scenario:
        'Debes cambiar un sello en una prensa hidráulica. Bloqueaste el seccionador de la bomba y el plato superior quedó arriba. Un compañero dice que "ya no hay energía porque la bomba está bloqueada".',
      options: [
        { text: 'Entro a cambiar el sello: la bomba está bloqueada.', correct: false, feedback: 'Decisión insegura. El plato puede bajar por gravedad o por la presión de los acumuladores.' },
        { text: 'Bajo el plato a su posición inferior o lo calzo con soportes diseñados, alivio la presión, verifico el manómetro en cero y después entro.', correct: true, feedback: 'Decisión correcta. La energía hidráulica y la gravedad se controlan aparte del bloqueo eléctrico.' },
        { text: 'Pongo un madero cualquiera bajo el plato y entro.', correct: false, feedback: 'Decisión insegura. Un calzo improvisado puede ceder; se usan soportes diseñados para esa carga.' }
      ]
    },
    {
      scenario:
        'Vas a destapar una boquilla en una línea neumática. La válvula de entrada de aire es de bola y ya la cerraste y bloqueaste con candado. El manómetro aguas abajo todavía marca 5 bar.',
      options: [
        { text: 'Aflojo el racor con cuidado para que salga el aire.', correct: false, feedback: 'Decisión insegura. El racor puede salir disparado o el cilindro moverse al liberar el aire.' },
        { text: 'Trabajo igual: la válvula ya está bloqueada.', correct: false, feedback: 'Decisión insegura. El aire atrapado puede mover los cilindros.' },
        { text: 'Descargo el aire por la válvula de purga prevista, verifico el manómetro en cero y acciono el mando para confirmar que nada se mueve.', correct: true, feedback: 'Decisión correcta. El aire atrapado es energía residual que se libera de forma controlada.' }
      ]
    },
    {
      scenario:
        'Un operador retira un atasco de la envasadora metiendo la mano con la máquina en pausa, "como siempre". No existe un análisis de servicio menor para esa tarea.',
      options: [
        { text: 'Detengo la tarea y explico que, sin un análisis aprobado con medidas equivalentes, se aplica LOTO completo. Reporto la situación para analizarla.', correct: true, feedback: 'Decisión correcta. El servicio menor solo es excepción si está analizado y aprobado.' },
        { text: 'Lo dejo seguir porque es una tarea rutinaria de producción.', correct: false, feedback: 'Decisión insegura. Que sea rutinaria no la convierte en excepción.' },
        { text: 'Le pido que lo haga más rápido para estar menos tiempo expuesto.', correct: false, feedback: 'Decisión insegura. La rapidez no controla el arranque.' }
      ]
    },
    {
      scenario:
        'Vas a reparar un taladro de banco que se conecta con enchufe. Lo desconectas y dejas el enchufe en el piso, al otro lado de la mesa, mientras trabajas de espaldas.',
      options: [
        { text: 'Está bien: el enchufe está fuera del tomacorriente.', correct: false, feedback: 'Decisión insegura. Alguien puede conectarlo sin que usted lo vea.' },
        { text: 'Mantengo el enchufe bajo mi control exclusivo, a la vista y al alcance, o lo meto en una caja de bloqueo para enchufes con mi candado.', correct: true, feedback: 'Decisión correcta. El enchufe vale como aislamiento solo bajo control exclusivo.' },
        { text: 'Pongo un aviso de "no conectar" en el tomacorriente.', correct: false, feedback: 'Decisión insegura. Un aviso solo no impide la conexión.' }
      ]
    },
    {
      scenario:
        'En la inspección anual, observas a un técnico aplicando el procedimiento de una llenadora. El procedimiento no menciona una línea de aire que se instaló el año pasado, y el técnico no la bloquea.',
      options: [
        { text: 'Lo anoto para el informe del próximo año.', correct: false, feedback: 'Decisión insegura. El riesgo sigue presente en cada intervención.' },
        { text: 'Le digo al técnico que la bloquee esta vez y no cambio el procedimiento.', correct: false, feedback: 'Decisión incompleta. El siguiente técnico seguirá el procedimiento desactualizado.' },
        { text: 'Detengo la intervención hasta bloquear la línea, registro la desviación y se actualiza y prueba el procedimiento antes de volver a usarlo.', correct: true, feedback: 'Decisión correcta. La inspección sirve para corregir el procedimiento, no solo para registrar.' }
      ]
    }
  ],

  exam: [
    {
      q: '¿Qué diferencia al procedimiento específico del programa LOTO de la empresa?',
      options: [
        'Que dice cómo se aísla una máquina concreta.',
        'Que lo firma la gerencia general de la empresa.',
        'Que solo se usa para equipos eléctricos de alta tensión.'
      ],
      answer: 0
    },
    {
      q: '¿Por qué cada punto de aislamiento se marca en campo con un código?',
      options: [
        'Para que el inventario contable de la planta cuadre.',
        'Para que coincida con el procedimiento escrito.',
        'Para cumplir con el reglamento de señalización vial interna.'
      ],
      answer: 1
    },
    {
      q: 'Una prensa hidráulica tiene la bomba bloqueada y el plato arriba. ¿Qué falta?',
      options: [
        'Nada: con la bomba bloqueada no hay energía en la prensa.',
        'Poner un aviso de peligro en el tablero de la bomba.',
        'Bajar o calzar el plato y aliviar la presión.'
      ],
      answer: 2
    },
    {
      q: '¿Qué es el doble bloqueo y purga?',
      options: [
        'Dos válvulas bloqueadas y una purga abierta entre ellas.',
        'Dos candados del mismo trabajador en un solo seccionador.',
        'Purgar la línea dos veces antes de cerrar una válvula.'
      ],
      answer: 0
    },
    {
      q: '¿Cuándo se usa una brida ciega o se retira un tramo de tubería?',
      options: [
        'Cuando la válvula de bloqueo es nueva y no se conoce su estado.',
        'Para trabajos dentro de recipientes o con productos peligrosos.',
        'Solo cuando la línea transporta agua a temperatura ambiente y baja presión.'
      ],
      answer: 1
    },
    {
      q: 'Un equipo con enchufe se desconecta y el enchufe queda en el piso, lejos del trabajador. ¿Es un aislamiento válido?',
      options: [
        'Sí, porque el enchufe está fuera del tomacorriente.',
        'Sí, si el trabajador lo desconectó y lo dejó él mismo en el piso.',
        'No: el enchufe debe quedar bajo su control exclusivo.'
      ],
      answer: 2
    },
    {
      q: '¿Qué se necesita para hacer un servicio menor sin LOTO completo?',
      options: [
        'Un análisis escrito con medidas de protección equivalentes.',
        'Que la tarea tome menos de cinco minutos y sea de rutina en la línea.',
        'Que el operador más antiguo de la línea esté presente.'
      ],
      answer: 0
    },
    {
      q: '¿Quién hace la inspección periódica de un procedimiento LOTO?',
      options: [
        'El mismo trabajador que lo aplica, al final de su turno.',
        'Una persona autorizada distinta, observando su aplicación.',
        'Un proveedor de candados, cuando vende dispositivos nuevos.'
      ],
      answer: 1
    }
  ]
};
