/**
 * Catálogo de 14 cursos virtuales interactivos (mínimo 8 horas cada uno)
 * con normatividad colombiana vigente, separación clara de marco legal,
 * casos reales de campo, listas de inspección, análisis de fallas y
 * evaluaciones exigentes (mínimo 80% de aprobación).
 */

export const LEGAL_CATEGORIES = {
  prevencion_sst: {
    id: 'prevencion_sst',
    label: 'Prevención SST / Formación Técnica General',
    badgeClass: 'iui-badge-primary',
    description:
      'Formación teórica complementaria en prevención de riesgos laborales (Decreto 1072 de 2015, Res. 0312 de 2019). Requiere cierre práctico en sitio y permiso de trabajo de la empresa antes de operar.'
  },
  gestion_sst: {
    id: 'gestion_sst',
    label: 'Comités y Gestión del SG-SST',
    badgeClass: 'iui-badge-success',
    description:
      'Formación para integrantes de comités y responsables del SG-SST. Complementa la capacitación que deben brindar el empleador y la ARL; no reemplaza la conformación formal del comité ni sus actas.'
  },
  regimen_especial: {
    id: 'regimen_especial',
    label: 'Marco Normativo Especial (Requiere Aval / Práctica Reglamentada)',
    badgeClass: 'iui-badge-warning',
    description:
      'Este curso entrega fundamentación teórica preventiva, pero en Colombia su ejercicio legal o certificación habilitante puede exigir entidad avalada, práctica presencial o examen médico específico (ej. Res. 4272/2021 Alturas, Res. 2674/2013 Alimentos, Decreto 1079/2015 Mercancías Peligrosas).'
  }
};

function buildCourse({
  id,
  title,
  hours,
  category,
  regulation,
  legalNotice,
  summary,
  fieldCase,
  checklist,
  failureAnalysis,
  onSiteClosure,
  modules,
  exam
}) {
  return {
    id,
    title,
    hours,
    category,
    regulation,
    legalNotice,
    summary,
    fieldCase,
    checklist,
    failureAnalysis,
    onSiteClosure,
    modules,
    exam
  };
}

export const COURSES = [
  buildCourse({
    id: 'observador-fuego',
    title: 'Observador de Fuego (Vigía de Incendios)',
    hours: 8,
    category: 'prevencion_sst',
    regulation: 'Decreto 1072/2015, Res. 2400/1979 (Arts. 205-234), NFPA 51B',
    legalNotice: 'Constancia de formación teórica. La empresa debe validar en sitio el manejo práctico de extintores y el procedimiento de alarma local.',
    summary: 'Rol crítico del vigía antes, durante y hasta 60 minutos después de trabajos con chispa o llama abierta.',
    fieldCase: 'En una planta metalmecánica en Medellín, una escoria de pulidora cayó por una rejilla de piso a un cuarto inferior con cartón. El vigía se retiró al terminar el corte; 25 minutos después inició un conato de incendio.',
    checklist: [
      'Retirar o cubrir materiales combustibles en un radio mínimo de 11 metros.',
      'Verificar extintor multipropósito ABC o CO2 cargado, con manómetro en verde y pasador intacto.',
      'Sellar drenajes, rejillas y aberturas por donde puedan caer chispas.',
      'Mantener vigilancia continua durante la tarea y mínimo 30 a 60 minutos posteriores.'
    ],
    failureAnalysis: 'Falla raíz: ausencia de inspección en niveles inferiores y abandono temprano de la guardia post-trabajo.',
    onSiteClosure: 'Realizar simulacro de activación de alarma, inspección de radio de 11 m en área real y prueba de agarre/posicionamiento con extintor.',
    modules: [
      { title: '1. Química del fuego y clases de incendio (2h)', content: 'Triángulo y tetraedro del fuego. Clases A, B, C, D y K. Ejemplo fácil: una chispa de pulidora (calor) + trapo con varsol (combustible) + aire (oxígeno) inicia fuego en segundos.' },
      { title: '2. Funciones y autoridad del Observador de Fuego (2h)', content: 'El vigía NO realiza otras tareas simultáneas. Tiene autoridad para detener el trabajo si aparecen vapores inflamables o falla el control de chispas.' },
      { title: '3. Selección y uso táctico de extintores portátiles (2h)', content: 'Método T.A.P.E. (Tirar pasador, Apuntar a la base, Presionar manija, Esparcir en abanico). Nunca usar agua en fuego eléctrico (Clase C) ni en líquidos inflamables.' },
      { title: '4. Vigilancia post-trabajo y respuesta a emergencias (2h)', content: 'Revisión térmica con mano o cámara termográfica al finalizar. Protocolo de activación de brigada y evacuación.' }
    ],
    exam: [
      { q: '¿Cuál es el radio mínimo estándar para retirar o proteger combustibles alrededor de un trabajo en caliente?', options: ['3 metros', '11 metros (35 pies)', '2 metros'], answer: 1 },
      { q: '¿Puede el observador de fuego ayudar al soldador sosteniendo piezas mientras vigila?', options: ['Sí, si es rápido', 'No, su dedicación debe ser exclusiva a la vigilancia', 'Solo si hay extintor cerca'], answer: 1 },
      { q: '¿Cuánto tiempo mínimo debe mantenerse la vigilancia después de terminar la tarea en caliente?', options: ['5 minutos, tiempo suficiente si la zona quedó húmeda y sin humo visible', 'No es necesario si no hay humo', '30 a 60 minutos según evaluación de riesgo'], answer: 2 },
      { q: 'En el método T.A.P.E., ¿hacia dónde se apunta la boquilla del extintor?', options: ['A la punta de la llama', 'A la base del fuego', 'Hacia el techo'], answer: 1 },
      { q: '¿Esta constancia virtual habilita por sí sola para trabajar sin permiso de trabajo en caliente?', options: ['Sí, si el curso virtual fue aprobado con el puntaje mínimo de la plataforma', 'No, requiere permiso de trabajo y validación práctica en sitio', 'Solo en exteriores'], answer: 1 }
    ]
  }),

  buildCourse({
    id: 'sustancias-quimicas',
    title: 'Manejo Seguro de Sustancias Químicas (SGA)',
    hours: 8,
    category: 'prevencion_sst',
    regulation: 'Decreto 1496/2018 (SGA), Res. 0773/2021, Ley 55/1993',
    legalNotice: 'Constancia de formación teórica en SGA y prevención. El transporte vial de mercancías peligrosas requiere curso obligatorio adicional bajo Decreto 1079/2015.',
    summary: 'Lectura de etiquetas SGA, Fichas de Datos de Seguridad (FDS), matriz de compatibilidad y control de derrames.',
    fieldCase: 'En una bodega de aseo industrial se mezcló hipoclorito de sodio con ácido muriático al trasvasar en envases sin etiqueta. Se liberó gas cloro provocando intoxicación de dos operarios.',
    checklist: [
      'Todo envase (original o trasvasado) debe tener etiqueta SGA legible con pictogramas y palabra de advertencia.',
      'Consultar la FDS (16 secciones) antes de manipular o almacenar.',
      'Verificar matriz de compatibilidad: nunca almacenar ácidos junto a bases o hipoclorito.',
      'Confirmar disponibilidad de kit antiderrames, ducha de emergencia y lavaojos.'
    ],
    failureAnalysis: 'Falla raíz: trasvase en envases sin rotular y desconocimiento de incompatibilidad química.',
    onSiteClosure: 'Recorrido por el cuarto químico verificando FDS físicas/digitales, diques de contención y prueba de flujo del lavaojos.',
    modules: [
      { title: '1. Sistema Globalmente Armonizado (SGA) en Colombia (2h)', content: 'Los 9 pictogramas de peligro, palabras de advertencia ("Peligro" vs "Atención") e indicaciones H y P bajo Res. 0773 de 2021.' },
      { title: '2. Lectura práctica de Fichas de Datos de Seguridad (2h)', content: 'Cómo ubicar rápidamente primeros auxilios (Sec. 4), lucha contra incendios (Sec. 5), control de derrames (Sec. 6) y EPP (Sec. 8).' },
      { title: '3. Almacenamiento, trasvase y matriz de compatibilidad (2h)', content: 'Reglas de oro: nunca usar envases de bebidas para químicos; separar inflamables, corrosivos y oxidantes con dique de contención.' },
      { title: '4. Control de derrames y EPP químico (2h)', content: 'Selección de guantes (nitrilo, neopreno, PVC) y respiradores con cartucho específico. Pasos para contener y absorber derrames.' }
    ],
    exam: [
      { q: '¿Cuántas secciones tiene una Ficha de Datos de Seguridad (FDS) bajo el SGA?', options: ['8 secciones, una por cada pictograma del sistema anterior', '16 secciones', '5 secciones'], answer: 1 },
      { q: '¿Qué norma colombiana adopta el Sistema Globalmente Armonizado (SGA)?', options: ['Decreto 1496 de 2018', 'Ley 100 de 1993', 'Código de Comercio, que regula el transporte de mercancías peligrosas'], answer: 0 },
      { q: '¿Está permitido trasvasar químicos en botellas de gaseosa o agua?', options: ['Sí, si el envase queda rotulado con marcador indeleble y el nombre del producto', 'Nunca, por riesgo grave de ingestión accidental', 'Solo en turnos nocturnos'], answer: 1 },
      { q: '¿En qué sección de la FDS se consulta el EPP requerido?', options: ['Sección 1', 'Sección 8', 'Sección 15'], answer: 1 },
      { q: '¿Qué ocurre al mezclar hipoclorito de sodio con ácidos?', options: ['Limpia mejor', 'Libera gas cloro altamente tóxico', 'No ocurre nada si la mezcla se hace en un recipiente abierto y ventilado'], answer: 1 }
    ]
  }),

  buildCourse({
    id: 'loto-bloqueo',
    title: 'Etiquetado y Bloqueo de Energías Peligrosas (LOTO)',
    hours: 8,
    category: 'prevencion_sst',
    regulation: 'Decreto 1072/2015, Res. 2400/1979, OSHA 1910.147',
    legalNotice: 'Formación teórica en procedimiento LOTO. Cada planta debe validar en campo el inventario de puntos de bloqueo específicos de sus máquinas.',
    summary: 'Los 6 pasos del bloqueo y etiquetado, candado personal intransferible y verificación de energía cero.',
    fieldCase: 'Un técnico detuvo una banda transportadora desde el botón de paro de emergencia sin poner candado en el seccionador. Otro operario reinició la máquina causando atrapamiento.',
    checklist: [
      'Identificar todas las fuentes de energía (eléctrica, neumática, hidráulica, gravedad).',
      'Notificar al personal afectado antes de intervenir.',
      'Instalar candado personal (una persona = un candado = una llave) y tarjeta de identificación.',
      'Liberar energía residual y realizar prueba de arranque (verificación de energía cero).'
    ],
    failureAnalysis: 'Falla raíz: confiar en un botón de paro de emergencia como dispositivo de aislamiento en lugar de un seccionador bloqueado.',
    onSiteClosure: 'Práctica en campo aplicando bloqueo grupal con caja de candados y verificación de energía cero en un equipo real.',
    modules: [
      { title: '1. ¿Qué es LOTO y por qué el botón de paro NO bloquea? (2h)', content: 'Diferencia entre control de mando y aislamiento físico de energía. Tipos de energías peligrosas en planta.' },
      { title: '2. Dispositivos de bloqueo y etiquetado (2h)', content: 'Candados personales, pinzas portacandados (hasps), bloqueadores de válvulas y breakers, tarjetas de peligro.' },
      { title: '3. Los 6 pasos obligatorios del procedimiento LOTO (2h)', content: '1) Preparar, 2) Apagar, 3) Aislar, 4) Bloquear y etiquetar, 5) Liberar energía residual, 6) Verificar energía cero.' },
      { title: '4. Bloqueo grupal, cambio de turno y retiro de emergencia (2h)', content: 'Uso de caja de bloqueo grupal y protocolo formal cuando un trabajador olvida retirar su candado.' }
    ],
    exam: [
      { q: '¿Un botón de paro de emergencia reemplaza el bloqueo con candado?', options: ['Sí', 'No, nunca es un dispositivo de aislamiento de energía', 'Solo en mantenimientos cortos'], answer: 1 },
      { q: '¿Cuál es la regla de oro del candado LOTO?', options: ['Un candado para todo el equipo', 'Una persona, un candado, una llave única', 'Dejar la llave puesta en el tablero'], answer: 1 },
      { q: '¿Qué es la verificación de energía cero?', options: ['Mirar si la luz está apagada', 'Intentar encender el equipo y medir ausencia de tensión/presión tras bloquear', 'Preguntar al supervisor'], answer: 1 },
      { q: '¿Cuándo se puede retirar el candado de otro trabajador?', options: ['En cualquier momento', 'Solo bajo procedimiento documentado de retiro de emergencia tras verificar que el trabajador está fuera de peligro', 'Con autorización verbal de un compañero'], answer: 1 },
      { q: '¿Cuál es el orden correcto antes de iniciar la intervención?', options: ['Aislar -> Bloquear -> Liberar energía residual -> Verificar energía cero', 'Bloquear -> Verificar -> Apagar', 'Etiquetar sin apagar'], answer: 0 }
    ]
  }),

  buildCourse({
    id: 'trabajo-caliente',
    title: 'Seguridad en Trabajo en Caliente',
    hours: 8,
    category: 'prevencion_sst',
    regulation: 'Res. 2400/1979, Decreto 1072/2015, NFPA 51B',
    legalNotice: 'Constancia de formación teórica. Todo trabajo en caliente exige permiso escrito vigente, medición de atmósferas si aplica y vigía asignado.',
    summary: 'Permiso de trabajo en caliente, control de atmósferas explosivas (LEL), mamparas y prevención de incendios.',
    fieldCase: 'Al cortar una tubería aparentemente vacía con pulidora, los vapores residuales de solvente dentro del ducto alcanzaron el rango inflamable y provocaron una explosión.',
    checklist: [
      'Emitir y firmar Permiso de Trabajo en Caliente antes de iniciar.',
      'Medir atmósfera explosiva (LEL = 0%) si existen vapores, tanques o espacios confinados.',
      'Instalar mamparas ignífugas para contener chispas y radiación.',
      'Asignar Observador de Fuego y extintor adecuado en el punto.'
    ],
    failureAnalysis: 'Falla raíz: omisión de purga, lavado y medición de explosividad (LEL) en tubería con residuos inflamables.',
    onSiteClosure: 'Diligenciamiento real de un Permiso de Trabajo en Caliente en planta y verificación de equipo detector de gases.',
    modules: [
      { title: '1. Definición y alcance del trabajo en caliente (2h)', content: 'Soldadura, oxicorte, esmerilado, pulido, uso de sopletes y herramientas que generen chispa o calor.' },
      { title: '2. Permiso de trabajo y análisis de trabajo seguro (ATS) (2h)', content: 'Roles del emisor, ejecutante y vigía. Condiciones que invalidan automáticamente el permiso.' },
      { title: '3. Atmósferas inflamables y medición de LEL (2h)', content: 'Qué significa LEL (Límite Inferior de Explosividad). Regla estricta: LEL debe ser 0% para trabajos en caliente.' },
      { title: '4. Controles de ingeniería, EPP ignífugo y cierre (2h)', content: 'Mamparas, mantas ignífugas, ropa de algodón/cuero (nunca poliéster), y cierre del permiso tras guardia térmica.' }
    ],
    exam: [
      { q: '¿Qué valor de LEL (Límite Inferior de Explosividad) se exige para autorizar un trabajo en caliente?', options: ['Menor al 10%', '0% LEL', 'Menor al 25%'], answer: 1 },
      { q: '¿Por qué no se debe usar ropa de poliéster o nylon en trabajo en caliente?', options: ['Se ensucia rápido con las chispas del trabajo y pierde su protección ante el calor del turno.', 'Se derrite y se adhiere a la piel causando quemaduras graves', 'Es incómoda'], answer: 1 },
      { q: '¿El esmerilado o corte con pulidora se considera trabajo en caliente?', options: ['Sí, porque genera chispas y calor capaz de iniciar fuego', 'No, solo la soldadura', 'Solo si dura más de una hora seguida y la superficie de trabajo está expuesta al aire libre durante la jornada.'], answer: 0 },
      { q: '¿Qué documento es obligatorio antes de iniciar un trabajo en caliente fuera de taller designado?', options: ['Ninguno', 'Permiso de Trabajo en Caliente y ATS', 'Solo correo electrónico al jefe de área con copia a la brigada de emergencia de la planta.'], answer: 1 },
      { q: '¿Cuándo se cierra formalmente el permiso de trabajo en caliente?', options: ['Al apagar la máquina', 'Al completar la inspección post-trabajo (30-60 min) sin puntos calientes', 'Al día siguiente, una vez se revise la bitácora del turno y el supervisor firme la planilla de entrega.'], answer: 1 }
    ]
  }),

  buildCourse({
    id: 'aparejador-cargas',
    title: 'Aparejador de Cargas (Izaje Seguro)',
    hours: 8,
    category: 'prevencion_sst',
    regulation: 'Res. 2400/1979 (Arts. 398-447), ASME B30.9 / B30.20, Decreto 1072/2015',
    legalNotice: 'Formación teórica en aparejamiento. Para operar en izajes críticos la empresa debe validar competencia práctica y certificación de equipos.',
    summary: 'Selección e inspección de eslingas, ángulos de izaje, centro de gravedad, señales manuales y plan de izaje.',
    fieldCase: 'Durante el izaje de un motor de 2 toneladas con eslingas sintéticas a 30°, un borde filoso sin protector cortó la eslinga provocando la caída de la carga.',
    checklist: [
      'Inspeccionar eslingas (sin cortes, hilos rojos visibles, quemaduras ni etiqueta ilegible) y grilletes con pasador original.',
      'Calcular peso de la carga, centro de gravedad y factor de ángulo (evitar ángulos menores a 45°).',
      'Colocar protectores de aristas/cantos vivos en eslingas sintéticas.',
      'Usar vientos (cuerdas guía) para controlar la carga; jamás ubicarse debajo de carga suspendida.'
    ],
    failureAnalysis: 'Falla raíz: ausencia de cantoneras protectoras y ángulo de eslinga muy cerrado que duplicó la tensión.',
    onSiteClosure: 'Inspección física de eslingas/grilletes, práctica de señales manuales estándar y simulación de plan de izaje.',
    modules: [
      { title: '1. Fundamentos de izaje y centro de gravedad (2h)', content: 'Cómo ubicar el centro de gravedad para evitar vuelco o deslizamiento de la carga al despegar del suelo.' },
      { title: '2. Inspección y descarte de aparejos (2h)', content: 'Criterios de rechazo para eslingas sintéticas, de cable de acero, cadena, grilletes y ganchos con pestillo de seguridad.' },
      { title: '3. Ángulos de izaje y tipos de amarre (2h)', content: 'Amarre vertical, ahorcado (choker) y en canasta (basket). Cómo el ángulo reduce la capacidad real de la eslinga.' },
      { title: '4. Plan de izaje, vientos y señales manuales (2h)', content: 'Comunicación única entre aparejador y operador. Señal universal de parada de emergencia.' }
    ],
    exam: [
      { q: '¿Qué ocurre con la tensión en las eslingas cuando disminuye el ángulo respecto a la horizontal?', options: ['Disminuye porque la carga se reparte mejor entre todas las ramas de la eslinga en cualquier ángulo.', 'Aumenta drásticamente', 'Se mantiene igual'], answer: 1 },
      { q: '¿Cuándo debe descartarse inmediatamente una eslinga sintética?', options: ['Cuando tiene cortes, quemaduras, hilos rojos de advertencia visibles o falta etiqueta de capacidad', 'Solo cuando se rompe durante el izaje, siempre que el aparejador lo haya reportado y registrado en el turno de trabajo.', 'Cada 5 años'], answer: 0 },
      { q: '¿Cómo se debe guiar una carga suspendida?', options: ['Empujándola directamente con las manos debajo de ella', 'Con cuerdas guía (vientos) desde una distancia segura', 'Con una barra metálica'], answer: 1 },
      { q: '¿Quién puede dar la señal de PARADA DE EMERGENCIA durante un izaje?', options: ['Solo el supervisor de área, si está presente y tiene radio de comunicación con el operador de la grúa.', 'Cualquier persona que detecte un peligro inminente', 'Solo el aparejador'], answer: 1 },
      { q: '¿Qué se debe instalar cuando una eslinga sintética pasa por un borde metálico filoso?', options: ['Grasa', 'Protectores de cantos vivos (cantoneras)', 'Nada si la carga es liviana y la eslinga se mantiene en tensión constante durante todo el recorrido.'], answer: 1 }
    ]
  }),

  buildCourse({
    id: 'andamiero',
    title: 'Armado y Desarmado Seguro de Andamios (Andamiero)',
    hours: 8,
    category: 'regimen_especial',
    regulation: 'Res. 4272/2021 (Trabajo en Alturas), NTC 1641 / 1642, Decreto 1072/2015',
    legalNotice: 'ATENCIÓN MARCO LEGAL ESPECIAL: Este curso cubre la fundamentación teórica técnica de andamios. En Colombia, para trabajar a más de 2 m de altura ES OBLIGATORIO contar con certificación presencial vigente en Trabajo en Alturas emitida por centro avalado (Res. 4272/2021).',
    summary: 'Cimentación, nivelación, arriostramiento, barandas, plataformas completas y sistema de tarjetas de andamio.',
    fieldCase: 'Un andamio tubular de 6 metros se desplomó al apoyarse sobre suelo blando sin bases niveladoras ni tablones de reparto y sin arriostramiento a la estructura.',
    checklist: [
      'Verificar terreno firme, placas base, tornillos niveladores y nivelación a plomo.',
      'Instalar plataformas metálicas completas con seguro antiviento, barandas (1 m y 0.5 m) y rodapié.',
      'Respetar relación altura/base (4:1) o instalar arriostramientos/estabilizadores.',
      'Colocar tarjeta de inspección (Verde: apto / Roja: prohibido usar) firmada por persona competente.'
    ],
    failureAnalysis: 'Falla raíz: apoyo en terreno inestable y omisión de diagonales y arriostramiento.',
    onSiteClosure: 'Validar certificado vigente de Trabajo en Alturas (Res. 4272/2021) y realizar inspección práctica de armado/etiquetado en obra.',
    modules: [
      { title: '1. Marco legal en Colombia y tipos de andamios (2h)', content: 'Resolución 4272 de 2021 (riesgo de caída mayor a 2 m). Andamio multidireccional certificado vs tubular; prohibición de improvisar.' },
      { title: '2. Bases, nivelación y estabilidad estructural (2h)', content: 'Distribución de cargas, tornillos niveladores, diagonales y relación de esbeltez 4:1.' },
      { title: '3. Plataformas, accesos internos y protección colectiva (2h)', content: 'Escaleras internas con trampilla, barandas superior e intermedia, rodapiés y capacidad de carga.' },
      { title: '4. Inspección diaria y sistema de tarjetas (2h)', content: 'Tarjeta Roja (en armado/no usar), Amarilla (restricción/EPCC) y Verde (apto). Desarmado en orden inverso.' }
    ],
    exam: [
      { q: 'Según la Res. 4272 de 2021 en Colombia, ¿a partir de qué altura se considera trabajo en alturas?', options: ['1.50 metros', '2.0 metros', '3.0 metros'], answer: 1 },
      { q: '¿Qué indica una tarjeta ROJA en un andamio?', options: ['Apto para carga pesada', 'Prohibido su uso (en armado, desarmado o con fallas)', 'Solo para supervisores que revisan el andamio al final de cada turno de trabajo en altura.'], answer: 1 },
      { q: '¿Este curso virtual reemplaza el certificado presencial de Trabajo en Alturas de un centro avalado?', options: ['Sí', 'No, en Colombia la Res. 4272/2021 exige formación presencial avalada para operar en alturas', 'Solo en andamios bajos'], answer: 1 },
      { q: '¿Cómo debe realizarse el acceso a los niveles de un andamio?', options: ['Escalando por las crucetas externas del andamio cuando la escalera interna está ocupada por otro equipo.', 'Por escaleras internas seguras con trampilla', 'Saltando desde una estructura vecina'], answer: 1 },
      { q: '¿Cuál es la función principal del rodapié en la plataforma?', options: ['Decoración', 'Evitar la caída de herramientas y materiales a niveles inferiores', 'Sostener el andamio por el lado exterior para que no se mueva al subir el personal y los materiales.'], answer: 1 }
    ]
  }),

  buildCourse({
    id: 'herramientas-electricas',
    title: 'Manejo Seguro de Herramientas Eléctricas Portátiles',
    hours: 8,
    category: 'prevencion_sst',
    regulation: 'Res. 2400/1979 (Arts. 355-397), RETIE, Decreto 1072/2015',
    legalNotice: 'Constancia de formación teórica. La empresa debe realizar inspección preoperacional y verificación de guardas y GFCI en campo.',
    summary: 'Inspección preoperacional, guardas de seguridad, RPM de discos, doble aislamiento, GFCI y prevención de retroceso (kickback).',
    fieldCase: 'Un operario retiró la guarda de una pulidora de 4.5" para instalar un disco de 7" con menor RPM máxima. El disco estalló por fuerza centrífuga.',
    checklist: [
      'Verificar carcasa sin fisuras, cable sin empalmes con cinta aislante y clavija con polo a tierra o doble aislamiento.',
      'Confirmar que la guarda de seguridad esté instalada y bien ajustada.',
      'Comprobar que las RPM máximas del disco superen las RPM de la herramienta.',
      'Desconectar de la energía antes de cambiar discos, brocas o accesorios.'
    ],
    failureAnalysis: 'Falla raíz: retiro de guarda de protección y uso de disco incompatible con las RPM del equipo.',
    onSiteClosure: 'Inspección práctica de pulidora, taladro y sierra circular en taller, verificando pruebas de interruptor GFCI.',
    modules: [
      { title: '1. Riesgos mecánicos y eléctricos en herramientas portátiles (2h)', content: 'Atrapamientos, proyección de partículas, retroceso (kickback), vibración, ruido y choque eléctrico.' },
      { title: '2. Inspección preoperacional y protección eléctrica (2h)', content: 'Doble aislamiento (símbolo doble cuadrado), polo a tierra, extensiones encauchetadas y protección GFCI.' },
      { title: '3. Uso seguro de pulidoras, taladros y sierras (2h)', content: 'Regla de RPM en discos abrasivos, sujeción firme de la pieza (nunca con la mano libre) y postura estable.' },
      { title: '4. EPP, mantenimiento y reporte de fallas (2h)', content: 'Careta facial + gafas de seguridad en pulidora, protección auditiva, guantes según tarea (sin riesgo de atrapamiento en brocas).' }
    ],
    exam: [
      { q: '¿Cómo deben ser las RPM máximas permitidas del disco respecto a las RPM de la pulidora?', options: ['Menores que la pulidora', 'Iguales o mayores que las RPM de la pulidora', 'No importa'], answer: 1 },
      { q: '¿Qué se debe hacer siempre antes de cambiar un disco o broca?', options: ['Apagar el gatillo solamente', 'Desconectar la herramienta de la fuente eléctrica o retirar la batería', 'Pedir a un compañero que la sostenga mientras el disco se cambia y la máquina gira por inercia.'], answer: 1 },
      { q: '¿Está permitido retirar la guarda de la pulidora para alcanzar un rincón difícil?', options: ['Nunca, la guarda es obligatoria', 'Sí, si se usa careta', 'Solo por dos minutos, mientras el operador toma la careta y la guarda queda al alcance de la mano.'], answer: 0 },
      { q: '¿Para qué sirve un interruptor GFCI en ambientes húmedos?', options: ['Aumenta la potencia', 'Corta la energía en milisegundos ante una fuga a tierra para evitar electrocución', 'Evita que se caliente el motor cuando la herramienta trabaja de forma continua durante varias horas.'], answer: 1 },
      { q: '¿Qué protección ocular/facial se requiere al usar pulidora?', options: ['Solo lentes formulados', 'Gafas de seguridad + careta facial completa', 'Ninguna si se mira de lado'], answer: 1 }
    ]
  }),

  buildCourse({
    id: 'manejo-amoniaco',
    title: 'Manejo Seguro de Amoniaco (NH3) en Refrigeración Industrial',
    hours: 8,
    category: 'prevencion_sst',
    regulation: 'Decreto 1496/2018 (SGA), Res. 0773/2021, IIAR / OSHA PSM',
    legalNotice: 'Formación teórica en prevención de riesgos con NH3. La atención de fugas mayores corresponde exclusivamente a brigadas HAZMAT entrenadas y equipadas con SCBA.',
    summary: 'Propiedades del amoniaco anhidro, toxicidad, detección de fugas, rutas de evacuación por dirección del viento y primeros auxilios.',
    fieldCase: 'Durante una purga de aceite en cuarto de máquinas se abrió una válvula sin cerrar el bloqueo previo. El operador no usaba máscara facial completa y sufrió irritación severa.',
    checklist: [
      'Verificar funcionamiento de sensores fijos de NH3, alarmas visuales/sonoras y ventilación de emergencia.',
      'Confirmar ubicación y dirección del viento (manga veleta) antes de evacuar.',
      'Disponer de ducha de emergencia y lavaojos a menos de 10 segundos de recorrido libre.',
      'Usar EPP específico para amoniaco (respirador con cartucho verde NH3 para niveles bajos; SCBA para emergencias).'
    ],
    failureAnalysis: 'Falla raíz: omisión de procedimiento de purga segura y ausencia de EPP facial/respiratorio.',
    onSiteClosure: 'Simulacro de evacuación perpendicular al viento y verificación de ubicación de válvulas de cierre de emergencia.',
    modules: [
      { title: '1. Propiedades físicas y químicas del Amoniaco (NH3) (2h)', content: 'Gas incoloro, olor penetrante, más liviano que el aire (tiende a subir, pero en fuga líquida forma nube fría densa), corrosivo y tóxico.' },
      { title: '2. Efectos en la salud y límites permisibles (2h)', content: 'Irritación ocular y respiratoria, quemaduras criogénicas y alcalinas. Valores TLV-TWA (25 ppm) e IDLH (300 ppm).' },
      { title: '3. Prevención de fugas y mantenimiento seguro (2h)', content: 'Integridad mecánica de tuberías, válvulas de alivio, purga de aceite segura y prohibición de cobre/latón con amoniaco.' },
      { title: '4. Respuesta a emergencias y primeros auxilios (2h)', content: 'Evacuar perpendicular y a favor de viento limpio. Lavado ocular/cutáneo con abundante agua por mínimo 15 minutos.' }
    ],
    exam: [
      { q: 'Ante una fuga de amoniaco en exteriores, ¿en qué dirección debe evacuar?', options: ['A favor del viento, hacia donde va la nube, siguiendo la ruta de salida señalada en el plan de emergencia.', 'Perpendicular y luego en contra del viento hacia un punto de encuentro seguro', 'Quedarse quieto'], answer: 1 },
      { q: '¿Cuánto tiempo mínimo se debe lavar con agua si hay contacto de amoniaco con ojos o piel?', options: ['1 minuto con agua fría de la ducha de emergencia, y luego revisar la piel con un supervisor.', 'Mínimo 15 minutos continuos', 'No usar agua'], answer: 1 },
      { q: '¿Qué equipo respiratorio se requiere para ingresar a una fuga con concentración desconocida o superior a IDLH (300 ppm)?', options: ['Tapabocas N95', 'Equipo de respiración autónomo (SCBA)', 'Respirador de cartucho simple'], answer: 1 },
      { q: '¿Por qué el amoniaco líquido puede causar quemaduras por frío?', options: ['Porque hierve a -33 °C al descomprimirse', 'Porque es ácido y su pH muy bajo lo hace reaccionar con el agua del tejido humano.', 'No causa frío'], answer: 0 },
      { q: '¿Cuál es el límite IDLH (Inmediatamente Peligroso para la Vida y la Salud) del NH3?', options: ['5 ppm', '300 ppm', '5000 ppm'], answer: 1 }
    ]
  }),

  buildCourse({
    id: 'manipulacion-alimentos',
    title: 'Manipulación Higiénica de Alimentos (BPM)',
    hours: 10,
    category: 'regimen_especial',
    regulation: 'Resolución 2674 de 2013 (MinSalud Colombia), Decreto 3075/1997 (referencia)',
    legalNotice: 'ATENCIÓN MARCO LEGAL ESPECIAL: Bajo la Res. 2674/2013 en Colombia, los manipuladores de alimentos requieren mínimo 10 horas anuales de capacitación y reconocimiento médico anual de aptitud. Valide con la Secretaría de Salud local si exige entidad o capacitador inscrito.',
    summary: 'Buenas Prácticas de Manufactura (BPM), prevención de ETAs, contaminación cruzada, cadena de frío y limpieza/desinfección.',
    fieldCase: 'En un casino empresarial se cortó pollo crudo y luego ensalada fresca en la misma tabla sin lavar ni desinfectar, generando un brote de Salmonella en 18 comensales.',
    checklist: [
      'Lavado técnico de manos (mínimo 20 segundos) antes de iniciar, tras ir al baño y al cambiar de alimento.',
      'Separar alimentos crudos de listos para consumo (tablas y utensilios diferenciados).',
      'Controlar cadena de frío (refrigeración ≤ 4 °C, congelación ≤ -18 °C) y cocción completa (> 74 °C en centro).',
      'Usar cofia, tapabocas, uniforme limpio de color claro, uñas cortas sin esmalte y cero joyas.'
    ],
    failureAnalysis: 'Falla raíz: contaminación cruzada directa por uso compartido de superficie sin desinfección.',
    onSiteClosure: 'Verificación de lavado de manos, toma real de temperaturas de neveras y registro de planillas POES.',
    modules: [
      { title: '1. Normatividad colombiana (Res. 2674/2013) y peligros alimentarios (2.5h)', content: 'Peligros físicos, químicos y biológicos. Enfermedades Transmitidas por Alimentos (ETAs).' },
      { title: '2. Higiene personal y hábitos del manipulador (2.5h)', content: 'Protocolo de lavado de manos, indumentaria reglamentaria, estado de salud y reporte de síntomas.' },
      { title: '3. Zona de peligro de temperatura y contaminación cruzada (2.5h)', content: 'Zona de peligro entre 5 °C y 60 °C. Almacenamiento PEPS (Primero en Entrar, Primero en Salir).' },
      { title: '4. Limpieza, desinfección (POES) y control de plagas (2.5h)', content: 'Diferencia entre limpiar y desinfectar. Dosificación segura de desinfectantes y manejo de residuos.' }
    ],
    exam: [
      { q: '¿Qué resolución colombiana regula las Buenas Prácticas de Manufactura (BPM) y capacitación de manipuladores?', options: ['Resolución 2674 de 2013', 'Resolución 4272 de 2021', 'Ley 1581 de 2012'], answer: 0 },
      { q: '¿Cuál es el rango de la "Zona de Peligro" de temperatura donde las bacterias se multiplican rápido?', options: ['Entre -18 °C y 0 °C', 'Entre 5 °C y 60 °C', 'Por encima de 80 °C'], answer: 1 },
      { q: '¿Qué significa el método de rotación de inventarios PEPS?', options: ['Primero en Entrar, Primero en Salir', 'Productos Empacados Para Servir', 'Peso Estándar Por Sección'], answer: 0 },
      { q: '¿Qué ocurre si cortamos vegetales listos para comer en la misma tabla donde hubo carne cruda sin desinfectar?', options: ['Contaminación cruzada', 'Pasteurización', 'Conservación'], answer: 0 },
      { q: 'Además de la capacitación (mínimo 10h), ¿qué exige la Res. 2674/2013 al manipulador?', options: ['Solo cédula', 'Reconocimiento médico anual de aptitud para manipular alimentos', 'Licencia de conducción'], answer: 1 }
    ]
  }),

  buildCourse({
    id: 'mecanica-basica',
    title: 'Mecánica Básica Industrial y Seguridad en Mantenimiento',
    hours: 8,
    category: 'prevencion_sst',
    regulation: 'Res. 2400/1979 (Arts. 266-295), Decreto 1072/2015',
    legalNotice: 'Constancia de formación teórica en fundamentos mecánicos y prevención. Las intervenciones en planta requieren autorización de mantenimiento y LOTO.',
    summary: 'Transmisión de potencia, tornillería y torque, lubricación, inspección de rodamientos y resguardos de máquinas.',
    fieldCase: 'Un técnico ajustó la tensión de una correa en V sin reinstalar la guarda protectora para "probar cómo sonaba"; su manga quedó atrapada en la polea.',
    checklist: [
      'Aplicar bloqueo LOTO antes de retirar cualquier guarda o tocar elementos móviles.',
      'Usar la herramienta exacta para cada tornillo (llave fija/copa del tamaño correcto, nunca improvisar tubos de palanca).',
      'Verificar nivel y tipo de lubricante según ficha técnica del equipo.',
      'Reinstalar el 100% de las guardas y resguardos antes de energizar.'
    ],
    failureAnalysis: 'Falla raíz: prueba de equipo en movimiento sin resguardo instalado y uso de ropa holgada.',
    onSiteClosure: 'Práctica de inspección visual de correas, alineación básica y verificación de torque con torquímetro en taller.',
    modules: [
      { title: '1. Principios mecánicos y transmisión de potencia (2h)', content: 'Poleas, correas, cadenas, piñones y acoples. Puntos de atrapamiento y pellizco.' },
      { title: '2. Herramientas manuales, tornillería y torque (2h)', content: 'Uso correcto de llaves, extractores y torquímetros. Riesgos de herramientas desgastadas.' },
      { title: '3. Rodamientos, lubricación y fallas tempranas (2h)', content: 'Detección temprana por ruido, vibración y temperatura. Importancia de la lubricación limpia.' },
      { title: '4. Guardas de seguridad y orden en taller (5S) (2h)', content: 'Resguardos fijos y enclavados. Prevención de caídas por derrames de aceite.' }
    ],
    exam: [
      { q: '¿Se debe probar una transmisión de poleas y correas sin su guarda instalada?', options: ['Sí, para escuchar ruidos', 'No, jamás se debe operar un equipo sin sus resguardos', 'Solo a baja velocidad, siempre que el técnico se quede lejos de la transmisión y del eje.'], answer: 1 },
      { q: '¿Por qué es peligroso usar un tubo largo como palanca sobre una llave fija?', options: ['Puede fracturar la llave o zafarse causando golpes graves', 'Aprieta mejor el perno cuando el tubo está bien sujeto a la llave fija del taller.', 'No tiene riesgo'], answer: 0 },
      { q: '¿Qué señales tempranas indican falla en un rodamiento?', options: ['Aumento de temperatura, ruido anormal y vibración', 'Cambio de color de la pintura solamente', 'Ninguna'], answer: 0 },
      { q: '¿Qué ropa se debe evitar cerca de ejes rotativos?', options: ['Ropa ajustada de tela de algodón, que no tiene riesgo si el cabello queda recogido bajo gorra.', 'Ropa holgada, cadenas, relojes y cabello suelto', 'Botas de seguridad'], answer: 1 },
      { q: '¿Qué se debe hacer antes de intervenir una máquina para mantenimiento mecánico?', options: ['Aplicar procedimiento LOTO y verificar energía cero', 'Solo avisar a viva voz', 'Poner un cono de seguridad en la zona y avisar a los compañeros que la máquina está en reparación.'], answer: 0 }
    ]
  }),

  buildCourse({
    id: 'aislamiento-energias-avanzado',
    title: 'Aislamiento Seguro de Energías Peligrosas (Nivel Avanzado)',
    hours: 8,
    category: 'prevencion_sst',
    regulation: 'Decreto 1072/2015, OSHA 1910.147, ANSI/ASSP Z244.1',
    legalNotice: 'Constancia de formación teórica avanzada (complemento de LOTO). Requiere validación de planos P&ID y procedimientos específicos en sitio.',
    summary: 'Complemento avanzado de LOTO enfocado en energía hidráulica, neumática, mecánica, térmica y energías residuales acumuladas.',
    fieldCase: 'Tras bloquear el motor eléctrico de una prensa hidráulica, un técnico soltó una manguera sin descargar el acumulador hidráulico; el chorro de aceite a 2000 psi causó lesión por inyección.',
    checklist: [
      'Identificar acumuladores hidráulicos, pulmones de aire, resortes comprimidos, capacitores y cargas suspendidas.',
      'Aplicar doble bloqueo y purga (Double Block & Bleed) o bridas ciegas en líneas de proceso.',
      'Instalar bloques mecánicos/cuñas físicas en partes elevadas (energía gravitacional).',
      'Verificar manómetros en cero, temperatura segura y descarga a tierra de capacitores.'
    ],
    failureAnalysis: 'Falla raíz: bloqueo solo de energía primaria (eléctrica) ignorando energía secundaria acumulada en el acumulador hidráulico.',
    onSiteClosure: 'Lectura de plano P&ID en planta, identificación de válvulas de venteo/purga y verificación de bloques mecánicos.',
    modules: [
      { title: '1. Energía hidráulica y neumática: purga y acumuladores (2h)', content: 'Peligro de inyección de fluido a alta presión. Válvulas de venteo, descarga de acumuladores y lectura de manómetros.' },
      { title: '2. Energía mecánica, elástica y gravitacional (2h)', content: 'Resortes bajo tensión, volantes de inercia y prensas elevadas. Uso obligatorio de trabas y soportes mecánicos certificados.' },
      { title: '3. Energía térmica, química y de proceso (2h)', content: 'Vapor, agua caliente, condensados y líneas presurizadas. Técnica Double Block & Bleed y discos ciegos.' },
      { title: '4. Energía eléctrica residual y pruebas de verificación (2h)', content: 'Capacitores, bancos de baterías y sistemas fotovoltaicos. Protocolo de verificación multidisciplinaria.' }
    ],
    exam: [
      { q: 'Si se bloquea el motor eléctrico de una prensa hidráulica, ¿queda automáticamente sin peligro el circuito hidráulico?', options: ['Sí', 'No, puede existir presión residual atrapada en acumuladores y líneas', 'Solo si es nueva'], answer: 1 },
      { q: '¿Cómo se controla la energía gravitacional de una compuerta o prensa pesada levantada?', options: ['Confiando en el cilindro hidráulico', 'Instalando soportes o trabas mecánicas físicas diseñadas para esa carga', 'Poniendo una cinta de peligro'], answer: 1 },
      { q: '¿Qué técnica ofrece mayor seguridad para aislar una tubería con vapor o químico peligroso?', options: ['Cerrar una sola válvula sin purgar, siempre que el operario verifique el cierre con la mano antes de abrir.', 'Doble bloqueo y purga (Double Block & Bleed) o instalación de brida ciega', 'Esperar 5 minutos'], answer: 1 },
      { q: '¿Por qué es tan grave una fuga diminuta de aceite hidráulico a alta presión?', options: ['Solo mancha la ropa', 'Puede penetrar la piel (lesión por inyección) y causar necrosis grave', 'Es inofensiva'], answer: 1 },
      { q: '¿Qué energía residual permanece en un banco de condensadores tras desconectar la red?', options: ['Ninguna', 'Energía eléctrica almacenada que requiere descarga controlada y verificación con instrumento', 'Energía térmica únicamente, que se disipa sola al enfriarse el banco de condensadores durante la noche.'], answer: 1 }
    ]
  }),

  buildCourse({
    id: 'seguridad-soldadura-corte',
    title: 'Seguridad en Soldadura y Corte (Oxicorte, MIG, TIG, Electrodo)',
    hours: 8,
    category: 'prevencion_sst',
    regulation: 'Res. 2400/1979 (Arts. 548-561), AWS Z49.1, NFPA 51B, Decreto 1072/2015',
    legalNotice: 'Constancia de formación teórica en seguridad en soldadura y corte. No certifica calificación técnica de soldador (ASME/AWS) ni reemplaza permiso de trabajo.',
    summary: 'Control de humos metálicos, radiación UV/IR, protección respiratoria, cilindros de gas y prevención de retroceso de llama.',
    fieldCase: 'Un soldador realizó oxicorte sin válvulas arrestallamas en las mangueras y con guantes engrasados al manipular el regulador de oxígeno, generando combustión súbita.',
    checklist: [
      'Instalar válvulas antirretorno y arrestallamas tanto en el soplete como en los reguladores de oxicorte.',
      'Mantener cilindros en posición vertical, encadenados y alejados de grasas/aceites (especialmente oxígeno).',
      'Verificar extracción localizada de humos y filtro respiratorio P100 para humos metálicos.',
      'Usar careta con filtro de sombra adecuado (DIN 10-13), ropa de cuero/algodón y mamparas UV.'
    ],
    failureAnalysis: 'Falla raíz: contacto de oxígeno puro con grasa/aceite y ausencia de válvulas arrestallamas.',
    onSiteClosure: 'Inspección práctica de equipo de oxicorte (prueba de fugas con agua jabonosa), cables de soldadura y pinza masa.',
    modules: [
      { title: '1. Riesgos por proceso: Oxicorte, SMAW (Electrodo), MIG y TIG (2h)', content: 'Diferencias en generación de humos, radiación UV intensa (especialmente TIG/MIG) y manejo de gases.' },
      { title: '2. Control de humos metálicos y protección respiratoria (2h)', content: 'Peligro del cromo hexavalente (acero inoxidable), manganeso y zinc (galvanizado). Extracción en fuente y filtros P100.' },
      { title: '3. Radiación UV/IR, quemaduras y choque eléctrico (2h)', content: 'Prevención de fotoqueratitis ("arco en los ojos"), selección de sombra DIN y aislamiento de portaelectrodo.' },
      { title: '4. Seguridad en cilindros y equipos de oxicorte (2h)', content: 'Regla cero grasa en oxígeno, válvulas arrestallamas, prueba de fugas con agua jabonosa y prevención de incendios.' }
    ],
    exam: [
      { q: '¿Por qué está estrictamente prohibido usar grasa o aceite en válvulas y reguladores de oxígeno?', options: ['Ensucia el manómetro', 'El oxígeno puro reacciona violentamente con grasas pudiendo causar explosión', 'Cierra mal la rosca'], answer: 1 },
      { q: '¿Qué dispositivo evita que una llama regrese por la manguera hasta el cilindro de gas combustible?', options: ['Un filtro de aire', 'Válvula arrestallamas y antirretorno', 'Una abrazadera'], answer: 1 },
      { q: '¿Cómo se deben verificar fugas en conexiones de oxicorte?', options: ['Con un encendedor pequeño, siempre que el cilindro esté cerrado y el área esté bien ventilada.', 'Con agua jabonosa (nunca con llama)', 'Escuchando solamente'], answer: 1 },
      { q: '¿Qué riesgo específico aumenta al soldar acero galvanizado sin ventilación?', options: ['Fiebre por humos metálicos (óxido de zinc)', 'Congelamiento de las manos por contacto con el metal frío del equipo de soldadura en el taller.', 'Ninguno'], answer: 0 },
      { q: '¿Qué protege a los compañeros cercanos de la radiación UV del arco de soldadura?', options: ['Gafas transparentes comunes', 'Mamparas o cortinas ignífugas con filtro UV', 'Mirar hacia el suelo'], answer: 1 }
    ]
  }),

  buildCourse({
    id: 'riesgo-electrico-no-electricistas',
    title: 'Riesgo Eléctrico Básico para Personal No Electricista (RETIE)',
    hours: 8,
    category: 'prevencion_sst',
    regulation: 'RETIE (Res. 40117 de 2024 MinEnergía), Res. 5018/2019, Decreto 1072/2015',
    legalNotice: 'Constancia de formación teórica preventiva para personal NO electricista. Este curso NO habilita para intervenir tableros, realizar conexiones ni trabajos con tensión (exclusivo de personal con matrícula profesional CONTE/COPNIA).',
    summary: 'Distancias de seguridad RETIE, arco eléctrico, inspección visual de tableros/extensiones y actuación segura ante emergencias.',
    fieldCase: 'Un operario de bodega abrió un tablero eléctrico energizado para "subir un taco" que se disparaba repetidamente, provocando un arco eléctrico por cortocircuito.',
    checklist: [
      'Respetar distancias mínimas de seguridad y señalización de riesgo eléctrico.',
      'Mantener tableros cerrados, señalizados y con mínimo 1 metro de espacio libre al frente.',
      'Inspeccionar extensiones antes de usar: cable encauchetado continuo, sin empalmes con cinta ni clavijas rotas.',
      'Reportar inmediatamente chispas, olor a quemado, calentamiento o disparos repetitivos de breakers.'
    ],
    failureAnalysis: 'Falla raíz: intervención de tablero eléctrico por personal no calificado y sin diagnóstico de la falla.',
    onSiteClosure: 'Recorrido en planta identificando tableros eléctricos, áreas despejadas y revisión visual de extensiones.',
    modules: [
      { title: '1. Efectos de la corriente en el cuerpo y marco RETIE (2h)', content: 'Choque eléctrico, fibrilación ventricular y quemaduras. Quién puede y quién NO puede intervenir instalaciones según RETIE y Res. 5018/2019.' },
      { title: '2. Arco eléctrico y distancias de seguridad (2h)', content: 'Qué es un arco eléctrico (temperaturas extremas y onda expansiva). Distancias mínimas respecto a líneas aéreas y equipos energizados.' },
      { title: '3. Inspección visual de tableros, tomas y extensiones (2h)', content: 'Cómo detectar condiciones subestándar sin abrir tableros: tapas faltantes, cables pelados, sobrecarga de multitomas.' },
      { title: '4. Primeros auxilios y actuación ante emergencia eléctrica (2h)', content: 'Nunca tocar a una persona electrocutada sin antes desenergizar la fuente. Activación inmediata de emergencias.' }
    ],
    exam: [
      { q: '¿Puede un trabajador no electricista abrir un tablero energizado para revisar cables sueltos?', options: ['Sí, si usa guantes de tela', 'No, debe reportarlo a personal electricista calificado con matrícula vigente', 'Solo si es rápido y el trabajador ya apagó el interruptor general de la planta por su cuenta.'], answer: 1 },
      { q: '¿Qué se debe hacer primero si una persona está sufriendo una descarga eléctrica y sigue en contacto con la fuente?', options: ['Agarrarla de la ropa con las manos', 'Cortar la fuente de energía desde el interruptor principal antes de acercarse', 'Echarle agua'], answer: 1 },
      { q: '¿Es seguro usar extensiones eléctricas con empalmes cubiertos solo con cinta aislante?', options: ['Sí, si la extensión tiene la capacidad indicada y se revisa cada mes con un técnico del área.', 'No, deben retirarse de servicio y reemplazarse', 'Solo en interiores'], answer: 1 },
      { q: '¿Qué espacio libre mínimo debe mantenerse frente a un tablero eléctrico?', options: ['20 cm libres, medidos desde la puerta del tablero hasta la pared más cercana del pasillo.', 'Despejado (mínimo 1 metro) sin almacenar cajas ni objetos', 'Se pueden apoyar escobas'], answer: 1 },
      { q: '¿Qué reglamento técnico rige la seguridad de instalaciones eléctricas en Colombia?', options: ['RETIE', 'Código de Tránsito', 'Res. 2674'], answer: 0 }
    ]
  }),

  buildCourse({
    id: 'almacenamiento-apilamiento-cargas',
    title: 'Seguridad en Almacenamiento y Apilamiento de Cargas',
    hours: 8,
    category: 'prevencion_sst',
    regulation: 'Res. 2400/1979 (Arts. 388-397), NTC / ANSI MH16.1, Decreto 1072/2015',
    legalNotice: 'Constancia de formación teórica en almacenamiento seguro. La operación de montacargas requiere certificación específica adicional de operador.',
    summary: 'Estanterías industriales (racks), estabilidad de carga, centros de gravedad, capacidad máxima y prevención de atrapamientos.',
    fieldCase: 'En un centro de distribución se golpeó un parante de estantería con un montacargas y no se reportó. Días después, al cargar una estiba pesada en el nivel superior, colapsó la bahía.',
    checklist: [
      'Verificar placa de capacidad máxima de carga visible en cada estantería y jamás excederla.',
      'Ubicar cargas más pesadas en niveles inferiores y centrar el peso sobre la estiba.',
      'Inspeccionar parantes, vigas, pines de seguridad y protectores de columnas (reportar abolladuras).',
      'Mantener pasillos demarcados, libres de obstáculos y separar peatones de montacargas.'
    ],
    failureAnalysis: 'Falla raíz: daño estructural no reportado en columna de rack y sobrecarga en nivel superior.',
    onSiteClosure: 'Inspección práctica de racks en bodega aplicando semáforo de daños (verde/ámbar/rojo) y revisión de estibas.',
    modules: [
      { title: '1. Estanterías industriales (racks) y capacidades de carga (2h)', content: 'Componentes del rack, placas de carga, pines de seguridad y anclaje al piso. Prohibición de trepar por estanterías.' },
      { title: '2. Estabilidad de carga y centros de gravedad (2h)', content: 'Cómo armar estibas estables (traba cruzada, vinipelado, peso abajo). Estado de estibas de madera/plástico.' },
      { title: '3. Prevención de atrapamientos y tráfico en bodega (2h)', content: 'Puntos ciegos de montacargas, pasillos peatonales, altura máxima de arrumes en piso y distancias a rociadores.' },
      { title: '4. Inspección de daños y protocolo de reporte (2h)', content: 'Qué hacer ante un impacto en un rack: descargar la bahía de inmediato, acordonar y reportar a ingeniería/SST.' }
    ],
    exam: [
      { q: '¿Dónde deben ubicarse preferiblemente las cargas más pesadas en una estantería?', options: ['En el nivel más alto, siempre que la estantería tenga la carga distribuida en los demás niveles.', 'En los niveles inferiores para mantener bajo el centro de gravedad', 'En cualquier nivel'], answer: 1 },
      { q: '¿Qué debe hacer si un montacargas golpea y dobla un parante de una estantería?', options: ['Ignorarlo si no se cayó y la carga del nivel superior sigue firme sobre el parante afectado.', 'Reportar de inmediato, acordonar y descargar la zona afectada según protocolo', 'Enderezarlo con un martillo'], answer: 1 },
      { q: '¿Está permitido escalar por las vigas de una estantería para alcanzar una caja?', options: ['Sí, si es liviana y la persona usa guantes y calzado antideslizante durante la subida.', 'Nunca, se deben usar equipos de acceso seguros o bajar la estiba', 'Solo hasta el segundo nivel'], answer: 1 },
      { q: '¿Para qué sirven los pines de seguridad en las vigas de los racks?', options: ['Decoración de la bodega para identificar visualmente cada viga de la estantería en el inventario.', 'Evitar que la viga se desacople accidentalmente al levantar una estiba', 'Medir el peso'], answer: 1 },
      { q: '¿Qué información debe estar siempre visible en cada módulo de estantería industrial?', options: ['El nombre del proveedor únicamente', 'La capacidad máxima de carga por nivel y por bahía', 'El horario de almuerzo del operario de la bodega y el turno en que se realizó la última revisión.'], answer: 1 }
    ]
  })
];
