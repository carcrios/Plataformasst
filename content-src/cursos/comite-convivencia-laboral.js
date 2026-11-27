/**
 * Curso: Comité de Convivencia Laboral.
 * Normativa verificada (nov. 2026): Ley 1010 de 2006 (acoso laboral), Res. 2646 de 2008 (riesgo psicosocial),
 * Res. 3461 de 2025 del Ministerio del Trabajo (deroga las Res. 652 y 1356 de 2012), Ley 2365 de 2024 (acoso sexual
 * en el contexto laboral). Algunos apartes de la Res. 3461 han sido objeto de decisiones judiciales: el curso enseña
 * su estructura general y remite al texto vigente.
 */
export default {
  id: 'comite-convivencia-laboral',
  title: 'Comité de Convivencia Laboral: prevención del acoso laboral',
  hours: 1.5,
  category: 'gestion_sst',
  regulation: 'Ley 1010 de 2006, Res. 3461 de 2025 (deroga Res. 652 y 1356 de 2012), Ley 2365 de 2024, Res. 2646 de 2008',
  legalNotice:
    'Formación para integrantes del Comité de Convivencia Laboral, jefes y talento humano. No es asesoría jurídica. Cada caso debe tramitarse con el procedimiento interno de la empresa y el texto vigente de la norma.',
  summary:
    'Qué es y qué no es acoso laboral, por qué el acoso sexual tiene una ruta distinta, cómo se conforma el comité según la Resolución 3461 de 2025, cómo se tramita una queja con sus plazos y cómo actuar con imparcialidad y confidencialidad.',
  fieldCase:
    'Una operaria presentó una queja contra su supervisor por gritos y humillaciones frente al equipo. El comité la citó a una reunión conjunta con el supervisor sin escucharla antes por separado, y uno de los integrantes comentó el caso en la cafetería. La trabajadora no volvió a confiar en el comité, el conflicto empeoró y terminó en una incapacidad por ansiedad y una demanda.',
  failureAnalysis:
    'Falla raíz: el comité no siguió su procedimiento (escuchar primero a cada parte por separado) y rompió la confidencialidad, que es la base de su credibilidad.',
  checklist: [
    'Recibí la queja por escrito, con sus soportes, y la registré con fecha.',
    'Verifiqué que ningún integrante tenga un conflicto de interés con las partes.',
    'Escuché a cada parte por separado antes de cualquier reunión conjunta.',
    'Mantengo la información del caso en reserva, durante y después del trámite.',
    'Confirmé que la queja no es de acoso sexual; si lo es, la remití a la ruta específica.',
    'Los compromisos del plan de mejora quedaron por escrito, con fechas y seguimiento mensual.',
    'El trámite no supera los 65 días calendario desde la queja formal.',
    'Si no hubo acuerdo o persiste la conducta, informé a la alta dirección y al trabajador sus opciones.'
  ],
  onSiteClosure:
    'Práctica en su empresa: revisar el reglamento interno del comité y su protocolo de confidencialidad, simular con el comité el trámite completo de una queja ficticia con sus plazos, y verificar que la ruta de acoso sexual esté definida y publicada.',

  modules: [
    {
      title: 'Por qué existe el Comité de Convivencia Laboral',
      content: `
        <p>El ambiente de trabajo también enferma. Gritos, humillaciones, aislamiento, cargas imposibles o burlas constantes producen ansiedad, depresión, ausentismo, rotación y accidentes. Por eso la convivencia laboral es parte de la seguridad y salud en el trabajo.</p>
        <p><strong>Tres normas forman la base:</strong></p>
        <ul>
          <li><strong>Ley 1010 de 2006.</strong> Define el acoso laboral, sus modalidades, las conductas que no lo constituyen, las garantías para quien se queja y las sanciones. Obliga a las empresas a tener mecanismos internos de prevención.</li>
          <li><strong>Resolución 2646 de 2008.</strong> Regula la identificación, evaluación y prevención de los factores de riesgo psicosocial en el trabajo. Entre las medidas preventivas del acoso laboral incluye conformar el Comité de Convivencia Laboral y tener un procedimiento interno confidencial, conciliatorio y efectivo.</li>
          <li><strong>Resolución 3461 de 2025 del Ministerio del Trabajo.</strong> Es la norma vigente sobre la conformación y el funcionamiento del comité. <strong>Derogó las Resoluciones 652 y 1356 de 2012</strong>, que muchos materiales todavía citan.</li>
        </ul>
        <p><strong>Qué es el comité.</strong> Según la Resolución 3461 de 2025, es una instancia <strong>preventiva, orientadora, conciliadora y canalizadora</strong>. Su trabajo es escuchar, promover el diálogo entre las partes, acordar planes de mejora y hacer seguimiento.</p>
        <p><strong>Qué no es.</strong> El comité <strong>no determina si hubo acoso laboral</strong>. No es un juez ni un tribunal disciplinario, no sanciona y no reemplaza a las autoridades. Cuando no hay acuerdo o la conducta persiste, cierra su trámite, informa a la alta dirección y el trabajador puede acudir al inspector de trabajo o al juez (en el sector público, a la Procuraduría o las personerías).</p>
        <p><strong>Principios con los que actúa:</strong> celeridad, eficacia, imparcialidad y confidencialidad. El procedimiento debe ser participativo, transparente, sin discriminación y con enfoque de género.</p>
        <p><strong>Una advertencia de entrada.</strong> El comité <strong>no es competente para el acoso sexual</strong> ni para la violencia basada en género, porque esas conductas no se concilian. Tienen una ruta propia, que se explica en el módulo 3.</p>
      `,
      keyPoints: [
        'Base normativa: Ley 1010 de 2006, Res. 2646 de 2008 y Res. 3461 de 2025, que derogó las Res. 652 y 1356 de 2012.',
        'El comité es preventivo, orientador, conciliador y canalizador: no determina si hubo acoso ni sanciona.',
        'No es competente para acoso sexual ni violencia de género, que tienen una ruta propia.'
      ]
    },
    {
      title: 'Qué es acoso laboral y qué no lo es',
      content: `
        <p><strong>Definición.</strong> La Ley 1010 de 2006 define el acoso laboral como toda conducta <strong>persistente y demostrable</strong>, ejercida sobre un trabajador por parte de un empleador, un jefe o superior, un compañero de trabajo o un subalterno, encaminada a infundir miedo, intimidación, terror y angustia, a causar perjuicio laboral, generar desmotivación en el trabajo o inducir la renuncia.</p>
        <p>Fíjese en dos palabras: <strong>persistente</strong> (no es un hecho aislado) y <strong>demostrable</strong> (hay forma de acreditarlo). Puede ser vertical descendente (del jefe al trabajador), vertical ascendente (de los subalternos al jefe) u horizontal (entre compañeros).</p>
        <p><strong>Las seis modalidades de la ley:</strong></p>
        <ul>
          <li><strong>Maltrato laboral:</strong> violencia contra la integridad física o moral, expresiones injuriosas o ultrajantes, comportamientos que lesionan la dignidad.</li>
          <li><strong>Persecución laboral:</strong> conductas reiteradas y arbitrarias que buscan inducir la renuncia, como cargas excesivas de trabajo o cambios permanentes de horario.</li>
          <li><strong>Discriminación laboral:</strong> trato diferenciado por razones de raza, género, edad, origen familiar o nacional, credo, preferencia política o situación social, sin razón laboral que lo justifique.</li>
          <li><strong>Entorpecimiento laboral:</strong> obstaculizar el cumplimiento de la labor: ocultar información, destruir o perder insumos, retrasar trámites.</li>
          <li><strong>Inequidad laboral:</strong> asignar funciones que menosprecian al trabajador.</li>
          <li><strong>Desprotección laboral:</strong> poner en riesgo la integridad y seguridad del trabajador con órdenes de cumplir funciones sin las mínimas condiciones de protección y seguridad.</li>
        </ul>
        <p><strong>Ejemplos de conductas que pueden constituirlo:</strong> insultos o burlas frente a los compañeros, amenazas injustificadas de despido, descalificaciones humillantes del trabajo en público, exclusión deliberada de reuniones o información necesaria, exigir permanentemente trabajo fuera de la jornada sin razón, negar sin motivo permisos o licencias a los que hay derecho.</p>
        <p><strong>Lo que NO es acoso laboral</strong> según la misma ley:</p>
        <ul>
          <li>las exigencias y órdenes necesarias para mantener la disciplina;</li>
          <li>los requerimientos razonables para cumplir las funciones y los deberes del cargo;</li>
          <li>la evaluación del desempeño con criterios objetivos;</li>
          <li>la solicitud de colaboración excepcional ante una emergencia o necesidad de la empresa;</li>
          <li>los actos para terminar un contrato con justa causa, siguiendo el procedimiento.</li>
        </ul>
        <p><strong>El conflicto no es acoso.</strong> Dos compañeros que discuten un día, un jefe exigente que corrige con respeto o un desacuerdo sobre la forma de hacer el trabajo son conflictos. El comité también puede ayudar a resolverlos, pero no hay que llamar acoso a todo conflicto, ni conflicto a todo acoso.</p>
      `,
      keyPoints: [
        'Acoso laboral: conducta persistente y demostrable que busca infundir miedo, causar perjuicio, desmotivar o inducir la renuncia.',
        'Modalidades: maltrato, persecución, discriminación, entorpecimiento, inequidad y desprotección laboral.',
        'No es acoso exigir disciplina, pedir el cumplimiento razonable de funciones ni evaluar el desempeño con criterios objetivos.'
      ]
    },
    {
      title: 'Acoso sexual: una ruta distinta (Ley 2365 de 2024)',
      content: `
        <p>La <strong>Ley 2365 de 2024</strong> adoptó medidas de prevención, protección y atención del acoso sexual en el contexto laboral. Definió el acoso sexual como todo acto de persecución, hostigamiento o asedio de carácter o connotación sexual, lasciva o libidinosa, que se manifiesta en relaciones de poder verticales u horizontales, y que puede darse una o varias veces.</p>
        <p><strong>Diferencias clave con el acoso laboral:</strong></p>
        <ul>
          <li><strong>No requiere persistencia.</strong> Un solo hecho puede constituir acoso sexual.</li>
          <li><strong>No se concilia.</strong> Por eso la Resolución 3461 de 2025 establece que el Comité de Convivencia Laboral <strong>no es competente</strong> para tramitar casos de acoso sexual ni de violencia de género.</li>
          <li><strong>Ámbito amplio.</strong> Cubre el contexto laboral sin importar el tipo de vinculación, e incluye espacios como el trabajo en casa, el trabajo remoto, el alojamiento que da el empleador y los espacios digitales en los que se trabaja.</li>
        </ul>
        <p><strong>La ruta específica.</strong> La alta dirección o la jefatura de talento humano debe tener un procedimiento propio para estos casos, conforme a la Ley 2365 de 2024: canales de denuncia confidenciales, medidas de protección para la víctima, investigación y decisiones disciplinarias. La víctima también puede acudir a la Fiscalía, porque el acoso sexual es un delito en el Código Penal colombiano.</p>
        <p><strong>Protección contra represalias.</strong> La ley protege la estabilidad de quien denuncia y de quienes sirven como testigos: la terminación unilateral de su contrato dentro de los <strong>seis meses</strong> siguientes a la queja carece de efectos. Si el despido ocurre después de ese plazo y la persona alega que fue por su denuncia, le corresponde al empleador demostrar lo contrario.</p>
        <p><strong>¿Qué hace el comité si le llega un caso de acoso sexual?</strong></p>
        <ol>
          <li>Escucha con respeto, sin cuestionar ni minimizar el relato.</li>
          <li>No cita a una reunión de conciliación ni de diálogo entre las partes.</li>
          <li>Informa a la persona de la ruta específica de la empresa y de su derecho a acudir a las autoridades.</li>
          <li>Remite el caso, con reserva, a la instancia que la empresa haya definido.</li>
          <li>Mantiene la confidencialidad absoluta.</li>
        </ol>
        <p>Sentar a una víctima de acoso sexual frente a su agresor para "conciliar" puede revictimizarla y causar un daño grave. Es uno de los errores más serios que puede cometer un comité.</p>
      `,
      keyPoints: [
        'Acoso sexual (Ley 2365 de 2024): puede ser un solo hecho, no se concilia y cubre el contexto laboral sin importar la vinculación.',
        'El Comité de Convivencia no es competente para acoso sexual: lo remite a la ruta específica de la empresa.',
        'Nunca se cita a la víctima a conciliar con su presunto agresor.'
      ]
    },
    {
      title: 'Conformación del comité según la Resolución 3461 de 2025',
      content: `
        <p><strong>Número de integrantes</strong> según el tamaño de la empresa:</p>
        <ul>
          <li><strong>Menos de 5 trabajadores:</strong> un representante de los trabajadores y uno del empleador.</li>
          <li><strong>Más de 5 y menos de 20 trabajadores:</strong> un representante de cada parte, con sus suplentes.</li>
          <li><strong>Más de 20 trabajadores:</strong> dos representantes de los trabajadores y dos del empleador, con sus respectivos suplentes.</li>
        </ul>
        <p>La norma no menciona de forma expresa los casos de exactamente 5 o exactamente 20 trabajadores. En esos casos, lo prudente es aplicar la conformación más protectora (con suplentes) y consultar a la ARL.</p>
        <p>La empresa puede designar más integrantes según su organización interna, siempre en igual número por cada parte. Si tiene dos o más centros de trabajo, conforma un comité de nivel central y uno adicional por cada centro.</p>
        <p><strong>Cómo se escogen.</strong> El empleador <strong>designa directamente</strong> a sus representantes. Los trabajadores <strong>eligen</strong> a los suyos por <strong>votación secreta</strong>, con escrutinio público. Cada empresa define el procedimiento de elección y lo incluye en la convocatoria.</p>
        <p>No es obligatorio que los representantes del empleador sean directivos ni que los de los trabajadores sean de cargos operativos. Lo que importa es que tengan competencias como la imparcialidad, la tolerancia, la serenidad y la reserva.</p>
        <p><strong>Quiénes no pueden integrarlo.</strong> Las personas a quienes, en el año anterior a la conformación del comité, se les haya formulado una queja de acoso laboral, o que hayan sido víctimas de acoso laboral en ese mismo período.</p>
        <p><strong>Empresas de servicios temporales.</strong> Las quejas de los trabajadores en misión se tramitan en primera instancia ante el comité de la empresa usuaria, con la participación de al menos un representante del comité de la empresa de servicios temporales.</p>
        <p><strong>Período.</strong> Dos años contados desde la comunicación de la elección o designación. Si un principal se retira, asume su suplente sin necesidad de nuevas elecciones. Los cambios en el número de trabajadores no obligan a reconformar el comité antes de terminar el período. Al finalizar, el comité saliente entrega toda su documentación al nuevo.</p>
        <p><strong>Presidente y secretario</strong> se eligen por mutuo acuerdo entre los integrantes. El presidente convoca y dirige las sesiones, tramita las recomendaciones ante la dirección y gestiona los recursos. El secretario recibe las quejas, cita a las partes, custodia los archivos y las actas, y elabora los informes.</p>
        <p><strong>Recursos.</strong> El empleador debe dar al comité un espacio físico y elementos para manejar los documentos con reserva, los recursos técnicos y financieros necesarios, y el tiempo de los integrantes dentro de la jornada laboral.</p>
      `,
      keyPoints: [
        'Integrantes: 1 y 1 (menos de 5 trabajadores), 1 y 1 con suplentes (más de 5 y menos de 20), 2 y 2 con suplentes (más de 20).',
        'El empleador designa a sus representantes; los trabajadores eligen a los suyos por votación secreta.',
        'No pueden integrarlo quienes en el año anterior hayan sido objeto de queja o víctimas de acoso laboral.'
      ]
    },
    {
      title: 'Funcionamiento: reglamento, reuniones y confidencialidad',
      content: `
        <p><strong>Reglamento de funcionamiento.</strong> Cada comité debe elaborar su propio reglamento. Debe incluir acuerdos de confidencialidad y protocolos para manejar la información con reserva durante el trámite de los casos y después de cerrarlos.</p>
        <p><strong>Reuniones ordinarias:</strong> una vez al <strong>mes</strong>. El comité sesiona con la <strong>mitad más uno</strong> de sus integrantes.</p>
        <p><strong>Reuniones extraordinarias:</strong> cada vez que se recibe una queja de acoso laboral.</p>
        <p><strong>La confidencialidad no es opcional.</strong> Las quejas contienen información muy sensible: salud mental, relaciones personales, situaciones familiares. Romper la reserva destruye la confianza en el comité, puede exponer a la persona a represalias y viola sus derechos. En la práctica:</p>
        <ul>
          <li>los documentos se guardan bajo llave o en carpetas digitales con acceso restringido;</li>
          <li>los casos no se comentan fuera de las sesiones, ni siquiera "sin nombres";</li>
          <li>las actas registran los hechos y los acuerdos, sin juicios ni detalles innecesarios;</li>
          <li>cada integrante firma un compromiso de confidencialidad.</li>
        </ul>
        <p><strong>Conflicto de interés.</strong> Si un integrante es amigo cercano, familiar, jefe directo o subordinado directo de alguna de las partes, o tiene un interés en el resultado, debe declararse impedido y su suplente lo reemplaza en ese caso. La imparcialidad no solo debe existir: las partes deben poder verla.</p>
        <p><strong>Actas.</strong> Toda sesión, ordinaria o extraordinaria, queda en un acta firmada, que custodia el secretario.</p>
        <p><strong>Informes.</strong> El comité presenta informes <strong>trimestrales</strong> y un informe <strong>anual</strong> de gestión a la alta dirección, con estadísticas sin datos que identifiquen a las personas. También entrega los informes que pidan los organismos de control.</p>
        <p><strong>Prevención, no solo quejas.</strong> En las reuniones ordinarias el comité no se limita a esperar casos: propone actividades de prevención, revisa los resultados de la evaluación de riesgo psicosocial con el SG-SST y hace seguimiento a las recomendaciones que haya dado.</p>
      `,
      keyPoints: [
        'Cada comité tiene un reglamento con acuerdos de confidencialidad; sesiona cada mes con la mitad más uno.',
        'Reunión extraordinaria cada vez que se recibe una queja.',
        'Quien tenga conflicto de interés con las partes se declara impedido y lo reemplaza su suplente.'
      ]
    },
    {
      title: 'Trámite de una queja paso a paso, con sus plazos',
      content: `
        <p>La Resolución 3461 de 2025 fija plazos concretos para que el trámite sea ágil. En total, el procedimiento preventivo <strong>no puede superar 65 días calendario</strong> desde la queja formal (el seguimiento mensual posterior no cuenta dentro de ese límite).</p>
        <ol>
          <li><strong>Recepción (5 días calendario).</strong> El secretario recibe la queja por escrito con sus pruebas, la registra y convoca al comité.</li>
          <li><strong>Examen confidencial del caso (5 días, ampliables en 10 con justificación escrita).</strong> El comité revisa los hechos y las pruebas y verifica si es un asunto de su competencia (si es acoso sexual o violencia de género, lo remite a la ruta específica).</li>
          <li><strong>Escucha individual de las partes (5 días).</strong> Se escucha <strong>por separado</strong> a quien presentó la queja y a la persona señalada. Cada una puede presentar su versión y sus pruebas.</li>
          <li><strong>Espacios de diálogo y plan de mejora (hasta 5 días después de las escuchas, ampliables en 10).</strong> Si las partes lo aceptan, el comité promueve un diálogo para llegar a compromisos concretos: cambios de conducta, formas de comunicación, ajustes en la organización del trabajo. Los compromisos quedan por escrito.</li>
          <li><strong>Seguimiento mensual</strong> a los compromisos.</li>
          <li><strong>Recomendaciones a la alta dirección (entre 5 y 10 días)</strong>, con copia al trabajador, cuando hacen falta medidas de la empresa: por ejemplo, intervenir factores de riesgo psicosocial del área o un traslado recomendado.</li>
          <li><strong>Remisión (máximo 15 días desde que se verifica el incumplimiento)</strong> cuando no hay acuerdo, no se cumplen las recomendaciones o la conducta persiste. En el sector privado, el comité informa a la alta dirección, cierra el caso y el trabajador puede acudir al inspector de trabajo o al juez. En el sector público, el caso se remite a la Procuraduría General de la Nación o a las personerías.</li>
        </ol>
        <p><strong>Ejemplo.</strong> El 3 de marzo llega una queja. El 6 se reúne el comité y la examina. El 10 y el 11 escucha por separado a las partes. El 15 hay una reunión de diálogo en la que se acuerda un plan de mejora con compromisos para el supervisor y una capacitación en comunicación asertiva para el equipo. En abril y mayo el comité verifica los compromisos. Todo el trámite principal ocurrió dentro de los 65 días.</p>
        <p><strong>Qué entrega el comité al final:</strong> el acta de cada paso, los compromisos firmados, las recomendaciones enviadas y la constancia de cierre o de remisión.</p>
      `,
      keyPoints: [
        'El procedimiento preventivo no puede superar 65 días calendario desde la queja formal.',
        'Pasos: recibir, examinar con reserva, escuchar por separado, diálogo y plan de mejora, seguimiento mensual, recomendaciones y remisión.',
        'Sin acuerdo o con conducta persistente, en el sector privado se informa a la alta dirección y el trabajador puede acudir al inspector o al juez.'
      ]
    },
    {
      title: 'Habilidades del integrante: escuchar, mediar y no revictimizar',
      content: `
        <p>Las normas definen el procedimiento, pero el resultado depende de cómo se comportan los integrantes. Estas son las habilidades que más pesan.</p>
        <p><strong>Escucha activa.</strong> Dejar hablar sin interrumpir, tomar nota de los hechos concretos (qué, cuándo, dónde, quién lo vio), hacer preguntas abiertas ("¿qué pasó después?") y no adelantar conclusiones. Es útil repetir con otras palabras lo que la persona dijo, para confirmar que se entendió.</p>
        <p><strong>Lenguaje que no revictimiza.</strong> Evite frases como "¿y usted qué hizo para que le hablara así?", "eso le pasa a todo el mundo" o "no lo tome personal". La persona que se queja ya hizo un esfuerzo grande; el comité no está para juzgar su reacción.</p>
        <p><strong>Imparcialidad.</strong> La persona señalada también tiene derecho a ser escuchada con respeto y a presentar su versión. El comité no "toma partido": busca hechos y soluciones.</p>
        <p><strong>Mediación.</strong> En la reunión de diálogo el comité:</p>
        <ul>
          <li>explica las reglas: respeto, turnos para hablar, confidencialidad;</li>
          <li>centra la conversación en las conductas y su efecto, no en atacar a las personas;</li>
          <li>ayuda a convertir el reclamo en compromisos verificables ("las correcciones se harán en privado", no "va a cambiar su actitud");</li>
          <li>detiene la reunión si una de las partes se siente intimidada.</li>
        </ul>
        <p><strong>Cuándo no hacer reunión conjunta.</strong> Si hay acoso sexual, violencia, amenazas, o si la persona que se queja no quiere estar frente a la otra, no se fuerza el encuentro.</p>
        <p><strong>Primeros auxilios psicológicos.</strong> A veces la persona llega en crisis: llanto, ansiedad intensa, ideas de hacerse daño. El integrante no es terapeuta, pero puede escuchar con calma, no dejarla sola, ayudarla a respirar y a ubicarse, y activar la ruta de salud mental de la empresa y de la EPS. La Resolución 3461 de 2025 prevé capacitación para esto con apoyo de la ARL.</p>
        <p><strong>Enfoque de género.</strong> Reconocer que mujeres y personas de sectores diversos pueden enfrentar formas particulares de acoso y barreras adicionales para quejarse, y evitar estereotipos al valorar los relatos.</p>
      `,
      keyPoints: [
        'Escucha activa: hechos concretos, preguntas abiertas y ninguna conclusión anticipada.',
        'Nada de frases que culpen a quien se queja; ambas partes merecen respeto y ser escuchadas.',
        'Los compromisos deben ser conductas verificables; no se fuerza un encuentro si hay riesgo o la persona no quiere.'
      ]
    },
    {
      title: 'Garantías, responsabilidades del empleador y prevención',
      content: `
        <p><strong>Garantías para quien se queja (Ley 1010 de 2006).</strong> La terminación unilateral del contrato de la víctima de acoso laboral que haya usado los procedimientos preventivos, correctivos o sancionatorios <strong>carece de efecto</strong> si se produce dentro de los <strong>seis meses</strong> siguientes a la queja, siempre que la autoridad competente verifique los hechos. La misma protección cubre a quienes sirven como testigos.</p>
        <p><strong>Quejas temerarias.</strong> Cuando una queja de acoso laboral carece de todo fundamento fáctico o razonable, la ley prevé una multa para quien la presentó. Esto no debe desanimar a nadie de quejarse de buena fe: el que una queja no termine en acuerdo no la vuelve temeraria.</p>
        <p><strong>Caducidad.</strong> Las acciones derivadas del acoso laboral <strong>caducan seis meses</strong> después de la fecha en que ocurrieron las conductas. Por eso es importante tramitar las quejas a tiempo.</p>
        <p><strong>Responsabilidades del empleador</strong> según la Resolución 3461 de 2025, a través de talento humano y del SG-SST:</p>
        <ul>
          <li><strong>Preventivas:</strong> política escrita contra el acoso; manual o normas de convivencia; capacitación en no discriminación, resolución de conflictos y comunicación asertiva; sensibilización; conformar el comité y tener un procedimiento de quejas; capacitación con la ARL en primeros auxilios psicológicos.</li>
          <li><strong>Correctivas:</strong> intervenir los factores de riesgo psicosocial con participación de los trabajadores; trasladar a la persona cuando lo recomienden el médico o el comité, en buenas condiciones; dar apoyo en crisis; socializar las rutas de salud mental; y atender las recomendaciones del comité.</li>
        </ul>
        <p><strong>Responsabilidades de las ARL:</strong> asesoría técnica, promoción de la salud mental, prevención con enfoque de género, apoyo emocional en crisis, capacitación a los integrantes del comité y reporte de sus acciones al Ministerio del Trabajo.</p>
        <p><strong>Sanciones a la empresa.</strong> El incumplimiento de estas obligaciones puede ser sancionado por las direcciones territoriales del Ministerio del Trabajo, según las normas del Sistema General de Riesgos Laborales.</p>
        <p><strong>La mejor queja es la que no llega.</strong> Un comité eficaz trabaja con el SG-SST en la evaluación del riesgo psicosocial, propone capacitaciones para los jefes sobre cómo corregir con respeto, y promueve canales para resolver los conflictos cuando aún son pequeños.</p>
      `,
      keyPoints: [
        'El despido de quien se quejó, dentro de los seis meses siguientes, carece de efecto si la autoridad verifica los hechos; también protege a los testigos.',
        'Las acciones por acoso laboral caducan seis meses después de ocurridas las conductas.',
        'El empleador tiene obligaciones preventivas y correctivas; la ARL asesora y capacita al comité.'
      ]
    }
  ],

  practices: [
    { q: '¿Qué norma regula hoy la conformación y el funcionamiento del Comité de Convivencia Laboral?', options: ['La Resolución 652 de 2012, modificada por la Resolución 1356 de 2012', 'La Resolución 3461 de 2025 del Ministerio del Trabajo', 'La Resolución 2013 de 1986 sobre comités paritarios'], answer: 1 },
    { q: 'Según la Ley 1010 de 2006, ¿qué característica debe tener una conducta para ser acoso laboral?', options: ['Ser persistente y demostrable', 'Haber ocurrido una sola vez en público', 'Haber sido cometida solo por un jefe'], answer: 0 },
    { q: '¿Cuál es la principal diferencia entre acoso sexual y acoso laboral?', options: ['El acoso sexual solo puede ocurrir dentro de la empresa', 'El acoso sexual solo lo comete un jefe contra un subalterno', 'El acoso sexual puede ser un solo hecho y no se concilia'], answer: 2 },
    { q: 'En una empresa con 45 trabajadores, ¿cuántos representantes de cada parte tiene el comité?', options: ['Dos por cada parte, con sus suplentes', 'Uno por cada parte, sin suplentes', 'Cuatro por cada parte, con sus suplentes'], answer: 0 },
    { q: 'Un integrante del comité es el jefe directo de la persona señalada en una queja. ¿Qué debe hacer?', options: ['Participar, porque conoce mejor el caso', 'Presidir la reunión para garantizar el orden', 'Declararse impedido para que lo reemplace su suplente'], answer: 2 },
    { q: '¿Cuál es el plazo máximo del procedimiento preventivo desde la queja formal?', options: ['Un año calendario', '65 días calendario', '15 días hábiles'], answer: 1 },
    { q: 'En la reunión de diálogo, ¿cómo debe quedar un buen compromiso?', options: ['Como una conducta concreta y verificable', 'Como una promesa general de mejorar la actitud', 'Como una sanción para la persona señalada'], answer: 0 },
    { q: '¿Cuánto tiempo después de las conductas caducan las acciones por acoso laboral?', options: ['Cinco años', 'Un mes', 'Seis meses'], answer: 2 }
  ],

  scenarios: [
    {
      scenario:
        'Una trabajadora presenta por escrito una queja contra su supervisor por gritos y descalificaciones frente al equipo. Un integrante propone citar a ambos mañana mismo a una reunión conjunta "para arreglarlo rápido".',
      options: [
        { text: 'Acepto: entre más rápido se enfrenten, más rápido se resuelve.', correct: false, feedback: 'Decisión incorrecta. El procedimiento exige escuchar primero a cada parte por separado; saltarse ese paso fue el error del caso con que empieza el curso.' },
        { text: 'Propongo registrar la queja, examinarla con reserva y escuchar a cada parte por separado antes de cualquier reunión de diálogo.', correct: true, feedback: 'Decisión correcta. Seguir el orden del procedimiento protege a ambas partes y hace posible un acuerdo real.' },
        { text: 'Propongo trasladar a la trabajadora de área para que no tenga que ver al supervisor.', correct: false, feedback: 'Decisión incorrecta. Trasladar a quien se queja, sin que lo pida y sin escucharla, puede sentirse como un castigo.' }
      ]
    },
    {
      scenario:
        'Una trabajadora le cuenta al comité que un compañero le envía mensajes de contenido sexual y la tocó sin su consentimiento en el vestidor. Pide ayuda.',
      options: [
        { text: 'La citamos con el compañero a una reunión de conciliación para que él se comprometa a no repetirlo.', correct: false, feedback: 'Decisión incorrecta y grave. El acoso sexual no se concilia y enfrentar a la víctima con el agresor puede revictimizarla.' },
        { text: 'La escuchamos con respeto, le explicamos la ruta específica de la empresa y su derecho a acudir a la Fiscalía, y remitimos el caso con reserva.', correct: true, feedback: 'Decisión correcta. El comité no es competente para acoso sexual, pero debe orientar y remitir sin revictimizar.' },
        { text: 'Le decimos que el comité no atiende ese tipo de casos y que busque a otra persona.', correct: false, feedback: 'Decisión incorrecta. Aunque no sea competente, el comité debe orientarla y activar la ruta, no dejarla sin respuesta.' }
      ]
    },
    {
      scenario:
        'En la cafetería, un compañero le pregunta a un integrante del comité: "¿Es cierto que Juan se quejó del jefe de bodega? Cuéntame, que todos andan hablando".',
      options: [
        { text: 'Le cuento lo básico, sin detalles, porque igual ya todos saben.', correct: false, feedback: 'Decisión incorrecta. Confirmar o ampliar información rompe la confidencialidad, aunque se haga "sin detalles".' },
        { text: 'Le respondo que los asuntos del comité son confidenciales y no comento nada, ni para confirmar ni para negar.', correct: true, feedback: 'Decisión correcta. La reserva aplica siempre, incluso para confirmar que existe un caso.' },
        { text: 'Le digo que no es cierto, para cortar el rumor y proteger a Juan.', correct: false, feedback: 'Decisión incorrecta. Mentir también es comentar el caso; lo correcto es no confirmar ni negar.' }
      ]
    },
    {
      scenario:
        'Un trabajador se queja porque su jefe le exige cumplir el horario y le hizo un llamado de atención por escrito, con respeto, por llegar tarde cuatro veces en el mes.',
      options: [
        { text: 'Lo tramitamos como acoso laboral grave y recomendamos sancionar al jefe.', correct: false, feedback: 'Decisión incorrecta. Exigir el cumplimiento razonable del horario y hacer llamados de atención con respeto no es acoso según la Ley 1010.' },
        { text: 'Archivamos la queja sin escucharlo, porque es evidente que no tiene razón.', correct: false, feedback: 'Decisión incorrecta. Aunque probablemente no sea acoso, el trabajador merece ser escuchado y recibir una explicación.' },
        { text: 'Lo escuchamos, revisamos los hechos y, si se confirma que fue una exigencia razonable con respeto, le explicamos por qué no constituye acoso.', correct: true, feedback: 'Decisión correcta. El comité orienta incluso cuando no hay acoso, y puede ayudar a mejorar la comunicación.' }
      ]
    },
    {
      scenario:
        'Hace dos meses el supervisor se comprometió por escrito a hacer las correcciones en privado. En el seguimiento mensual, la trabajadora cuenta que volvió a gritarle frente a todos dos veces.',
      options: [
        { text: 'Damos el caso por cerrado porque ya se había firmado un compromiso.', correct: false, feedback: 'Decisión incorrecta. El seguimiento existe precisamente para verificar el cumplimiento; la conducta persiste.' },
        { text: 'Hacemos otra reunión de diálogo y otro compromiso igual, para darle una nueva oportunidad.', correct: false, feedback: 'Decisión incorrecta. Repetir el mismo acuerdo cuando ya se incumplió prolonga el daño a la trabajadora.' },
        { text: 'Verificamos el incumplimiento, informamos a la alta dirección, cerramos el caso y le explicamos que puede acudir al inspector de trabajo o al juez.', correct: true, feedback: 'Decisión correcta. Si la conducta persiste, el comité informa a la dirección dentro de los 15 días y orienta sobre las vías externas.' }
      ]
    }
  ],

  exam: [
    {
      q: '¿Qué resolución derogó las Resoluciones 652 y 1356 de 2012 sobre comités de convivencia?',
      options: [
        'La Resolución 2013 de 1986.',
        'La Resolución 3461 de 2025 del Ministerio del Trabajo.',
        'La Resolución 0312 de 2019, que adoptó los estándares mínimos del sistema de gestión.'
      ],
      answer: 1
    },
    {
      q: '¿Cuál de estas afirmaciones sobre el Comité de Convivencia Laboral es correcta?',
      options: [
        'Es una instancia preventiva y conciliadora que no determina si hubo acoso laboral.',
        'Es un tribunal interno que decide la sanción.',
        'Es la instancia encargada de investigar y conciliar todos los casos de acoso sexual en la empresa.'
      ],
      answer: 0
    },
    {
      q: 'Según la Ley 1010 de 2006, ¿cuál de estas conductas NO constituye acoso laboral?',
      options: [
        'Insultar de forma reiterada a un trabajador frente a sus compañeros para presionar su renuncia.',
        'Ocultarle a un trabajador, de forma persistente, la información que necesita para hacer su trabajo.',
        'Evaluar el desempeño de un trabajador con criterios objetivos y conocidos.'
      ],
      answer: 2
    },
    {
      q: 'Un jefe asigna a un ingeniero, de forma deliberada y reiterada, labores que menosprecian su formación. ¿Qué modalidad de acoso podría ser?',
      options: [
        'Acoso sexual.',
        'Inequidad laboral.',
        'Discriminación laboral por razones de origen, credo o preferencia política del trabajador.'
      ],
      answer: 1
    },
    {
      q: 'Ordenar a un trabajador que haga una tarea peligrosa sin las mínimas condiciones de seguridad, de forma reiterada, ¿qué modalidad de acoso puede ser?',
      options: [
        'Desprotección laboral.',
        'Inequidad laboral.',
        'Entorpecimiento laboral, porque se retrasa la ejecución normal de la labor del trabajador.'
      ],
      answer: 0
    },
    {
      q: '¿Qué debe hacer el comité si recibe una queja por acoso sexual?',
      options: [
        'Citar a las partes a una reunión de diálogo para buscar un acuerdo antes de los 65 días del procedimiento.',
        'Tramitarla igual que una queja de acoso laboral, con escucha individual y plan de mejora.',
        'Orientar a la persona y remitir el caso, con reserva, a la ruta específica de la empresa.'
      ],
      answer: 2
    },
    {
      q: 'Según la Res. 3461 de 2025, una empresa con 150 trabajadores, ¿cómo conforma su comité?',
      options: [
        'Con un solo representante de los trabajadores y uno del empleador, sin suplentes para ninguna de las partes.',
        'Con dos representantes de los trabajadores y dos del empleador, con sus suplentes.',
        'Con cuatro representantes por cada parte, porque supera los cien trabajadores en la planta.'
      ],
      answer: 1
    },
    {
      q: '¿Cómo se escogen los representantes de los trabajadores en el comité?',
      options: [
        'Por votación secreta de los trabajadores, con escrutinio público.',
        'Los designa directamente el empleador entre los trabajadores con mejor evaluación de desempeño.',
        'Los asigna la ARL.'
      ],
      answer: 0
    },
    {
      q: '¿Quién NO puede integrar el comité?',
      options: [
        'Un trabajador con cargo operativo que nunca haya recibido capacitación en convivencia laboral.',
        'Un representante del empleador que no tenga un cargo directivo dentro de la organización.',
        'Quien en el año anterior a la conformación haya sido objeto de una queja de acoso laboral.'
      ],
      answer: 2
    },
    {
      q: '¿Con qué frecuencia se reúne el comité de forma ordinaria?',
      options: [
        'Cada semana.',
        'Una vez al mes.',
        'Solo cuando se recibe una queja, porque no tiene funciones de prevención en la empresa.'
      ],
      answer: 1
    },
    {
      q: 'En el trámite de una queja, ¿qué se hace antes de cualquier reunión de diálogo entre las partes?',
      options: [
        'Escuchar a cada parte por separado.',
        'Consultar al jefe del área.',
        'Informar a todo el equipo del área sobre la queja para recoger testimonios de manera abierta.'
      ],
      answer: 0
    },
    {
      q: '¿Cuál es el plazo máximo del procedimiento preventivo del comité, contado desde la queja formal?',
      options: [
        'Seis meses, que coinciden con el plazo de caducidad de las acciones por acoso laboral.',
        'Quince días hábiles, sin posibilidad de ampliación por ningún motivo.',
        '65 días calendario, sin contar el seguimiento mensual posterior.'
      ],
      answer: 2
    },
    {
      q: 'En una empresa privada, la persona señalada incumple el plan de mejora y la conducta persiste. ¿Qué hace el comité?',
      options: [
        'Sanciona directamente a la persona señalada con una suspensión sin pago, según la gravedad de los hechos probados.',
        'Informa a la alta dirección, cierra el caso y orienta al trabajador sobre el inspector de trabajo o el juez.',
        'Remite el caso a la Procuraduría General de la Nación, que es la autoridad competente para empresas privadas.'
      ],
      answer: 1
    },
    {
      q: 'Un integrante comenta un caso con sus compañeros "sin dar nombres". ¿Qué principio incumple?',
      options: [
        'La confidencialidad, que obliga a guardar reserva absoluta sobre los casos, durante el trámite y después de cerrarlos.',
        'La celeridad, porque retrasa el trámite que el comité debe completar dentro del plazo legal.',
        'La eficacia, porque el comentario no contribuye a que las partes lleguen a un acuerdo en la reunión.'
      ],
      answer: 0
    },
    {
      q: 'Según la Ley 1010 de 2006, ¿qué pasa si despiden sin justa causa a quien presentó una queja, dos meses después?',
      options: [
        'El despido es válido, porque la ley solo protege a los trabajadores que tengan fuero sindical vigente.',
        'El despido solo se revisa si el comité había concluido formalmente, por escrito, que sí existió acoso laboral.',
        'Carece de efecto si la autoridad verifica los hechos, por ocurrir dentro de los seis meses siguientes.'
      ],
      answer: 2
    },
    {
      q: '¿Cuál de estas es una responsabilidad preventiva del empleador según la Res. 3461 de 2025?',
      options: [
        'Reemplazar al comité por un buzón anónimo de quejas que revisa la gerencia de la empresa cada trimestre.',
        'Tener una política escrita contra el acoso y capacitar en resolución de conflictos y comunicación asertiva.',
        'Decidir con el comité si hubo acoso laboral y publicar los resultados para prevenir nuevos casos.'
      ],
      answer: 1
    }
  ]
};
