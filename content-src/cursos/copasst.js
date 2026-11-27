/**
 * Curso: COPASST — Comité Paritario de Seguridad y Salud en el Trabajo.
 * Normativa verificada (nov. 2026): Decreto 614 de 1984, Res. 2013 de 1986 (conformación y funcionamiento),
 * Decreto-Ley 1295 de 1994 (período de 2 años y 4 horas semanales), Decreto 1072 de 2015 (SG-SST),
 * Res. 0312 de 2019 (estándares mínimos), Res. 1401 de 2007 (investigación de incidentes y accidentes).
 */
export default {
  id: 'copasst',
  title: 'COPASST: Comité Paritario de Seguridad y Salud en el Trabajo',
  hours: 1.5,
  category: 'gestion_sst',
  regulation: 'Res. 2013 de 1986, Decreto-Ley 1295 de 1994, Decreto 1072 de 2015, Res. 0312 de 2019, Res. 1401 de 2007',
  legalNotice:
    'Formación para integrantes del COPASST y vigías de SST. Complementa la capacitación que deben brindar el empleador y la ARL. No reemplaza la conformación formal del comité, sus actas ni el acompañamiento del responsable del SG-SST.',
  summary:
    'Cómo se conforma y elige el comité, cómo sesiona, qué funciones tiene dentro del SG-SST, cómo hacer inspecciones planeadas, cómo participar en la investigación de accidentes y cómo hacer seguimiento con indicadores.',
  fieldCase:
    'En una planta de alimentos, el COPASST llevaba seis meses sin reunirse: las actas se firmaban "por cumplir". Un operario reportó dos veces que la guarda de una tajadora estaba suelta. Nadie hizo seguimiento. Semanas después, otro trabajador sufrió una amputación parcial de un dedo en esa misma máquina.',
  failureAnalysis:
    'Falla raíz: el comité existía en el papel, pero no inspeccionaba, no hacía seguimiento a los reportes de condiciones inseguras y no exigía el cierre de las acciones.',
  checklist: [
    'El comité tiene acta de conformación vigente, con principales y suplentes de ambas partes.',
    'Nos reunimos al menos una vez al mes y cada reunión queda en un acta firmada.',
    'Tenemos un plan de trabajo anual con inspecciones, capacitaciones y seguimientos.',
    'Cada hallazgo de inspección tiene responsable, fecha de cierre y verificación.',
    'Participamos en la investigación de los incidentes y accidentes dentro del plazo.',
    'Revisamos los indicadores de accidentalidad y ausentismo y proponemos acciones.',
    'Los trabajadores saben quiénes somos y cómo reportarnos condiciones inseguras.',
    'Los integrantes recibimos capacitación y tenemos el tiempo para nuestras funciones.'
  ],
  onSiteClosure:
    'Práctica en su empresa: realizar con el comité una inspección planeada de un área, registrar los hallazgos con evidencia, priorizarlos, asignar responsables y fechas, y presentar el seguimiento en la siguiente reunión ordinaria.',

  modules: [
    {
      title: 'Qué es el COPASST y por qué existe',
      content: `
        <p>El <strong>COPASST</strong> (Comité Paritario de Seguridad y Salud en el Trabajo) es el organismo de <strong>participación</strong> de los trabajadores y del empleador en la prevención de accidentes y enfermedades laborales. "Paritario" significa que las dos partes tienen el mismo número de representantes.</p>
        <p>La idea es simple: quienes hacen el trabajo conocen mejor que nadie sus peligros. Un comité que reúne la visión de la dirección y la de los trabajadores detecta problemas antes, propone soluciones realistas y ayuda a que las medidas se cumplan.</p>
        <p><strong>Un poco de historia de los nombres.</strong> El <em>Decreto 614 de 1984</em> ordenó a las empresas tener un comité de medicina, higiene y seguridad industrial, y la <em>Resolución 2013 de 1986</em> reglamentó cómo se conforma y funciona. El <em>Decreto-Ley 1295 de 1994</em> lo llamó Comité Paritario de Salud Ocupacional (COPASO), amplió el período de sus miembros a dos años y obligó al empleador a darles tiempo para sus funciones. Con el Sistema de Gestión de Seguridad y Salud en el Trabajo (Decreto 1443 de 2014, hoy compilado en el <em>Decreto 1072 de 2015</em>) pasó a llamarse COPASST. La Resolución 2013 de 1986 sigue vigente en lo que se refiere a su conformación y funcionamiento.</p>
        <p><strong>Lo que el COPASST es:</strong></p>
        <ul>
          <li>Un organismo de <strong>promoción y vigilancia</strong> de las normas y del SG-SST dentro de la empresa.</li>
          <li>Un canal para que los trabajadores reporten peligros y propongan mejoras.</li>
          <li>Un participante activo en inspecciones, investigaciones de accidentes y seguimiento de planes de acción.</li>
        </ul>
        <p><strong>Lo que el COPASST no es:</strong></p>
        <ul>
          <li>No es el responsable del SG-SST: esa responsabilidad es del empleador, que designa a una persona o equipo para diseñarlo y ejecutarlo.</li>
          <li>No es un tribunal disciplinario: no sanciona a nadie.</li>
          <li>No atiende quejas de acoso laboral: eso le corresponde al Comité de Convivencia Laboral.</li>
        </ul>
        <p><strong>Por qué importa hacerlo bien.</strong> En muchas empresas el comité existe solo para la auditoría: actas copiadas, reuniones que no ocurrieron, firmas "por cumplir". Eso no solo incumple la norma; deja sin vigilancia los peligros reales, como en el caso con que empieza este curso.</p>
      `,
      keyPoints: [
        'El COPASST es el organismo paritario de participación y vigilancia en SST: igual número de representantes del empleador y de los trabajadores.',
        'La Res. 2013 de 1986 sigue regulando su conformación y funcionamiento; el Decreto 1072 de 2015 lo integra al SG-SST.',
        'No es el responsable del SG-SST, no sanciona y no atiende quejas de acoso laboral.'
      ]
    },
    {
      title: 'Quién debe tenerlo y cuántos integrantes',
      content: `
        <p><strong>Empresas de 10 o más trabajadores</strong> deben conformar un COPASST. Las de <strong>menos de 10 trabajadores</strong> designan un <strong>vigía de seguridad y salud en el trabajo</strong>, que cumple las mismas funciones de promoción y vigilancia.</p>
        <p><strong>Número de representantes</strong> según la Resolución 2013 de 1986, por cada parte (empleador y trabajadores), cada uno con su suplente:</p>
        <ul>
          <li>De 10 a 49 trabajadores: <strong>1</strong> representante por cada parte.</li>
          <li>De 50 a 499 trabajadores: <strong>2</strong> representantes por cada parte.</li>
          <li>De 500 a 999 trabajadores: <strong>3</strong> representantes por cada parte.</li>
          <li>De 1.000 o más trabajadores: <strong>4</strong> representantes por cada parte.</li>
        </ul>
        <p>Así, una planta de 120 trabajadores tiene un comité de 4 principales (2 del empleador y 2 de los trabajadores) y 4 suplentes.</p>
        <p><strong>Varios centros de trabajo.</strong> La empresa que tiene dos o más establecimientos puede conformar varios comités, por ejemplo uno por cada sede, siempre que todos los trabajadores queden representados.</p>
        <p><strong>¿Quiénes cuentan?</strong> Para definir el tamaño se tiene en cuenta el número de trabajadores de la empresa. Cuando la planta cambia mucho de tamaño, el responsable del SG-SST revisa si la conformación sigue siendo la adecuada para el siguiente período.</p>
        <p><strong>El vigía de SST</strong> en empresas pequeñas no es un cargo decorativo. Debe recibir capacitación, tener tiempo para inspeccionar, recibir los reportes de los trabajadores y participar en la investigación de los accidentes, igual que lo haría el comité.</p>
        <p><strong>Relación con los estándares mínimos.</strong> La <em>Resolución 0312 de 2019</em> evalúa, entre sus estándares, que la empresa tenga conformado el COPASST o designado el vigía, que funcione y que sus integrantes estén capacitados. En una visita de inspección o en la autoevaluación del SG-SST, se piden las actas de conformación y de reuniones como evidencia.</p>
      `,
      keyPoints: [
        'Con 10 o más trabajadores se conforma el COPASST; con menos de 10, se designa un vigía de SST.',
        'Representantes por cada parte: 1 (10-49), 2 (50-499), 3 (500-999) y 4 (1.000 o más), cada uno con suplente.',
        'La Res. 0312 de 2019 verifica que el comité exista, funcione y esté capacitado.'
      ]
    },
    {
      title: 'Elección, designación y período',
      content: `
        <p><strong>Los representantes del empleador</strong> los nombra directamente el empleador. <strong>Los representantes de los trabajadores</strong> los eligen los propios trabajadores mediante <strong>votación libre</strong>. Ninguna de las partes escoge a los representantes de la otra.</p>
        <p><strong>Un proceso de elección bien hecho</strong> tiene estos pasos y deja evidencia de cada uno:</p>
        <ol>
          <li><strong>Convocatoria</strong> publicada a todos los trabajadores, con fechas de inscripción y votación, requisitos y número de cargos a elegir.</li>
          <li><strong>Inscripción de candidatos</strong> en el plazo fijado.</li>
          <li><strong>Votación</strong> en horario laboral, con garantías de que cada trabajador vote libremente y una sola vez. Lo usual es la votación secreta, con urnas o con un sistema electrónico confiable.</li>
          <li><strong>Escrutinio público</strong> y acta con los resultados: quienes obtienen más votos son principales y los siguientes, suplentes.</li>
          <li><strong>Acta de conformación</strong> del comité con principales y suplentes de ambas partes, y comunicación a todos los trabajadores.</li>
        </ol>
        <p><strong>Presidente y secretario.</strong> El empleador designa al <strong>presidente</strong> del comité entre sus propios representantes. El comité en pleno elige al <strong>secretario</strong> entre la totalidad de sus miembros. El presidente convoca y dirige las reuniones; el secretario lleva las actas y el archivo.</p>
        <p><strong>Período.</strong> Desde el Decreto-Ley 1295 de 1994, el período de los miembros es de <strong>dos años</strong>, y pueden ser reelegidos. Al terminar el período se repite el proceso; el comité saliente entrega las actas, el archivo y el estado de los compromisos pendientes.</p>
        <p><strong>Reemplazos.</strong> Si un principal se retira de la empresa o renuncia al comité, asume su suplente. Si se agotan los suplentes de los trabajadores, se convoca a una nueva elección para completar el período.</p>
        <p><strong>Buenas prácticas.</strong> Explique a los candidatos qué implica ser integrante (tiempo, capacitación, confidencialidad de la información de los accidentes); evite que los jefes presionen el voto; y publique los nombres y fotos de los integrantes en las carteleras, para que todos sepan a quién acudir.</p>
      `,
      keyPoints: [
        'El empleador nombra a sus representantes; los trabajadores eligen los suyos por votación libre.',
        'El presidente lo designa el empleador entre sus representantes; el secretario lo elige el comité en pleno.',
        'El período es de dos años, con posibilidad de reelección; si un principal se retira, asume su suplente.'
      ]
    },
    {
      title: 'Funcionamiento: reuniones, quórum, actas y tiempo',
      content: `
        <p><strong>Reuniones ordinarias.</strong> El comité se reúne <strong>por lo menos una vez al mes</strong>, en el lugar de trabajo y durante la jornada laboral. Lo recomendable es fijar al inicio del período un cronograma anual de reuniones.</p>
        <p><strong>Reuniones extraordinarias.</strong> Cuando ocurre un <strong>accidente grave</strong> o se detecta un <strong>riesgo inminente</strong>, el comité se reúne de forma extraordinaria, con la presencia del responsable del área donde ocurrió el hecho, dentro de los cinco días siguientes.</p>
        <p><strong>Quórum.</strong> El comité sesiona con la <strong>mitad más uno</strong> de sus miembros. Si pasados los primeros treinta minutos de la hora señalada no se completa, sesiona con los miembros presentes y sus decisiones son válidas. Esta regla evita que una reunión se caiga por inasistencia, pero no es una excusa para que siempre falten los mismos.</p>
        <p><strong>Tiempo para las funciones.</strong> El empleador debe proporcionar, cuando menos, <strong>cuatro horas semanales</strong> dentro de la jornada normal de trabajo a cada uno de los miembros para el funcionamiento del comité. Ese tiempo se usa en reuniones, inspecciones, investigaciones y capacitación. Si los integrantes deben hacer todo "después del turno", el comité no funciona.</p>
        <p><strong>Actas.</strong> Cada reunión termina con un acta que incluye: fecha, hora y asistentes; verificación del quórum; temas tratados; seguimiento a los compromisos anteriores; nuevos compromisos con responsable y fecha; y firmas. Las actas se archivan y están disponibles para la ARL y las autoridades.</p>
        <p><strong>Un orden del día que funciona:</strong></p>
        <ol>
          <li>Verificación del quórum y lectura de compromisos pendientes.</li>
          <li>Accidentes e incidentes del mes y estado de sus investigaciones.</li>
          <li>Resultados de inspecciones y reportes de condiciones inseguras.</li>
          <li>Indicadores del mes.</li>
          <li>Propuestas de capacitación y mejora.</li>
          <li>Nuevos compromisos y cierre.</li>
        </ol>
        <p><strong>Reglamento interno.</strong> Es una buena práctica que el comité apruebe al inicio de su período un reglamento con su forma de convocar, de decidir, de manejar la información confidencial y de distribuir las tareas.</p>
      `,
      keyPoints: [
        'Reunión ordinaria al menos una vez al mes; extraordinaria ante accidente grave o riesgo inminente, dentro de los cinco días siguientes.',
        'Quórum: mitad más uno; a los treinta minutos sesiona con los presentes y sus decisiones son válidas.',
        'El empleador debe dar al menos cuatro horas semanales dentro de la jornada a cada miembro.'
      ]
    },
    {
      title: 'Funciones del COPASST dentro del SG-SST',
      content: `
        <p>La Resolución 2013 de 1986 enumera las funciones del comité. El Decreto 1072 de 2015 las conecta con el ciclo del SG-SST: planear, hacer, verificar y actuar.</p>
        <p><strong>Funciones principales:</strong></p>
        <ul>
          <li><strong>Proponer</strong> a la empresa medidas y actividades para mantener la salud en los lugares de trabajo, incluidas las capacitaciones que considere necesarias.</li>
          <li><strong>Participar</strong> en las actividades de promoción, divulgación e información sobre SST entre los trabajadores.</li>
          <li><strong>Vigilar</strong> el desarrollo de las actividades del SG-SST y el cumplimiento de las normas por parte de la empresa y de los trabajadores.</li>
          <li><strong>Visitar e inspeccionar</strong> periódicamente los lugares de trabajo, las máquinas, los equipos y las operaciones, e informar al empleador sobre los peligros encontrados y las medidas que se recomiendan.</li>
          <li><strong>Colaborar en el análisis</strong> de las causas de los accidentes de trabajo y las enfermedades laborales, y proponer medidas correctivas.</li>
          <li><strong>Estudiar y considerar</strong> las sugerencias que presenten los trabajadores sobre SST.</li>
          <li><strong>Servir de coordinación</strong> entre el empleador y los trabajadores en la solución de los problemas de SST.</li>
          <li><strong>Solicitar</strong> periódicamente a la empresa informes sobre la accidentalidad y las enfermedades laborales.</li>
          <li><strong>Colaborar</strong> con los funcionarios de las entidades gubernamentales y de la ARL que visiten la empresa.</li>
          <li><strong>Llevar el archivo</strong> de actas y documentos del comité.</li>
        </ul>
        <p><strong>Participación en el SG-SST.</strong> Según el Decreto 1072 de 2015, el empleador debe garantizar la participación de los trabajadores, y el COPASST es el canal principal. En la práctica, el comité:</p>
        <ul>
          <li>conoce la política de SST y el plan anual de trabajo, y puede hacer recomendaciones;</li>
          <li>participa en la identificación de peligros y en la revisión de la matriz de riesgos de las áreas;</li>
          <li>es informado de los resultados de las evaluaciones del sistema y participa en la planificación de la auditoría anual;</li>
          <li>hace seguimiento a las acciones correctivas y preventivas.</li>
        </ul>
        <p><strong>Su propio plan de trabajo.</strong> Un comité eficaz no espera a que lo llamen. Al inicio de cada año define un plan con inspecciones por área, temas de capacitación para sus miembros, campañas para los trabajadores y la revisión mensual de indicadores. Ese plan se aprueba en el acta y se revisa cada mes.</p>
      `,
      keyPoints: [
        'Funciones clave: proponer, vigilar, inspeccionar, analizar causas de accidentes, recibir sugerencias y coordinar entre empleador y trabajadores.',
        'Es el canal principal de participación en el SG-SST: política, plan de trabajo, peligros, auditoría y acciones de mejora.',
        'Un comité eficaz tiene su propio plan anual de inspecciones, capacitaciones y seguimiento.'
      ]
    },
    {
      title: 'Inspecciones de seguridad planeadas',
      content: `
        <p>Inspeccionar es la herramienta más poderosa del comité. Una inspección planeada encuentra las condiciones peligrosas <strong>antes</strong> de que produzcan un accidente.</p>
        <p><strong>1. Planear.</strong> Defina en el plan anual qué áreas se inspeccionan y con qué frecuencia: más seguido donde hay peligros críticos (máquinas con partes móviles, químicos, alturas, energías peligrosas). Prepare una lista de verificación por área. Coordine con el jefe del área para no interrumpir la operación.</p>
        <p><strong>2. Recorrer y observar.</strong> Vaya con la lista, pero con los ojos abiertos a lo que no está en ella. Observe:</p>
        <ul>
          <li><strong>condiciones</strong>: guardas, orden y aseo, pisos, iluminación, extintores, rutas de evacuación, rotulado de químicos, tableros eléctricos;</li>
          <li><strong>actos</strong>: uso de elementos de protección, posturas, atajos en los procedimientos, uso de celulares en zonas de riesgo;</li>
          <li><strong>conversaciones</strong>: pregunte a los trabajadores qué les preocupa. Ellos saben qué falla.</li>
        </ul>
        <p><strong>3. Registrar con evidencia.</strong> Cada hallazgo se describe de forma concreta ("guarda de la tajadora 2 sin dos tornillos", no "máquina insegura"), con foto, ubicación y fecha.</p>
        <p><strong>4. Priorizar.</strong> No todos los hallazgos pesan igual. Una clasificación sencilla:</p>
        <ul>
          <li><strong>Crítico</strong>: puede causar una lesión grave o la muerte. Se corrige o se detiene la actividad de inmediato y se informa al responsable SST.</li>
          <li><strong>Importante</strong>: puede causar una lesión. Se corrige en días.</li>
          <li><strong>Menor</strong>: se corrige dentro del plan normal.</li>
        </ul>
        <p><strong>5. Comunicar y asignar.</strong> El informe va al jefe del área y al responsable del SG-SST, con la acción propuesta, el responsable y la fecha de cierre.</p>
        <p><strong>6. Hacer seguimiento.</strong> Un hallazgo no está cerrado cuando alguien dice que lo arregló, sino cuando el comité <strong>verifica</strong> en sitio que la corrección funciona. El seguimiento se registra en cada acta hasta el cierre.</p>
        <p><strong>El error típico</strong> es inspeccionar mucho y cerrar poco. Un comité con cien hallazgos abiertos pierde credibilidad: los trabajadores dejan de reportar porque "nunca pasa nada".</p>
      `,
      keyPoints: [
        'Inspección planeada: planear, recorrer y observar, registrar con evidencia, priorizar, asignar y hacer seguimiento.',
        'Un hallazgo crítico se corrige o se detiene la actividad de inmediato.',
        'Un hallazgo se cierra cuando el comité verifica en sitio que la corrección funciona.'
      ]
    },
    {
      title: 'Participación en la investigación de incidentes y accidentes',
      content: `
        <p>La <em>Resolución 1401 de 2007</em> regula la investigación de incidentes y accidentes de trabajo. Su objetivo no es buscar culpables, sino encontrar las causas para que el hecho no se repita.</p>
        <p><strong>El equipo investigador</strong> debe estar integrado, como mínimo, por:</p>
        <ul>
          <li>el jefe inmediato o supervisor del trabajador accidentado o del área donde ocurrió el hecho;</li>
          <li>un <strong>representante del COPASST</strong> o el vigía de SST;</li>
          <li>el encargado del desarrollo del SG-SST.</li>
        </ul>
        <p>Cuando el accidente es grave o produce la muerte, en la investigación participa además un profesional con licencia en salud ocupacional o SST.</p>
        <p><strong>Plazos.</strong> El accidente de trabajo se reporta a la ARL y a la EPS en el formato de reporte (FURAT) <strong>dentro de los dos días hábiles</strong> siguientes. La investigación se realiza <strong>dentro de los quince días</strong> siguientes a la ocurrencia del hecho. Los incidentes, aunque no causen lesión, también se investigan: son avisos gratuitos de un accidente que está por venir.</p>
        <p><strong>Cómo se investiga:</strong></p>
        <ol>
          <li><strong>Recolectar información</strong> lo antes posible: visitar el sitio, tomar fotos, entrevistar por separado al trabajador y a los testigos, revisar procedimientos, permisos, mantenimientos y capacitaciones.</li>
          <li><strong>Reconstruir los hechos</strong> en orden: qué se estaba haciendo, qué cambió, qué pasó.</li>
          <li><strong>Identificar las causas inmediatas</strong>: los actos y condiciones que produjeron el hecho (la guarda suelta, la mano en la zona de corte).</li>
          <li><strong>Identificar las causas básicas</strong>: por qué existían esos actos y condiciones (no había inspección de la guarda, el reporte anterior no tuvo respuesta, la producción presionaba). Herramientas como los "cinco porqués" o el árbol de causas ayudan a llegar a la raíz.</li>
          <li><strong>Definir acciones</strong> para cada causa, con responsable y fecha, priorizando la jerarquía de controles: eliminar o aislar el peligro antes que "recapacitar al trabajador".</li>
        </ol>
        <p><strong>El aporte del representante del COPASST</strong> es la mirada de los trabajadores: entrevista con confianza, sabe cómo se hace realmente el trabajo y vigila que el informe no termine en "acto inseguro del trabajador" cuando hubo fallas de la organización.</p>
        <p><strong>Seguimiento.</strong> El comité registra en sus actas el avance de las acciones de cada investigación hasta verificar su cierre.</p>
      `,
      keyPoints: [
        'El equipo investigador incluye al jefe inmediato, un representante del COPASST o el vigía y el encargado del SG-SST.',
        'El accidente se reporta a la ARL y la EPS dentro de los dos días hábiles; la investigación se hace dentro de los quince días.',
        'Se buscan causas inmediatas y básicas, y las acciones priorizan la jerarquía de controles, no la culpa.'
      ]
    },
    {
      title: 'Indicadores, seguimiento y límites del comité',
      content: `
        <p><strong>Medir para mejorar.</strong> La Resolución 0312 de 2019 define indicadores mínimos que la empresa calcula y que el COPASST debe conocer y analizar cada mes:</p>
        <ul>
          <li><strong>Frecuencia de accidentalidad</strong>: cuántos accidentes de trabajo ocurren por cada cien trabajadores en el período.</li>
          <li><strong>Severidad de accidentalidad</strong>: cuántos días se pierden por incapacidad por cada cien trabajadores.</li>
          <li><strong>Proporción de accidentes mortales</strong>.</li>
          <li><strong>Prevalencia e incidencia de la enfermedad laboral</strong>.</li>
          <li><strong>Ausentismo por causa médica</strong>.</li>
        </ul>
        <p>El comité no se limita a leer los números. Pregunta: ¿en qué área se concentran los accidentes?, ¿qué tipo de lesión se repite?, ¿qué acciones se tomaron y funcionaron? Con esas respuestas propone prioridades para el plan del siguiente período.</p>
        <p><strong>Indicadores propios del comité</strong> que muestran si está funcionando: reuniones realizadas frente a programadas; inspecciones realizadas frente a planeadas; porcentaje de hallazgos cerrados a tiempo; participación en el cien por ciento de las investigaciones.</p>
        <p><strong>Lo que no le corresponde al COPASST:</strong></p>
        <ul>
          <li><strong>Quejas de acoso laboral o sexual.</strong> Las de acoso laboral las atiende el Comité de Convivencia Laboral; el acoso sexual tiene un procedimiento propio del empleador. Si un trabajador le cuenta un caso al COPASST, este lo orienta hacia el canal correcto con discreción.</li>
          <li><strong>Sancionar.</strong> El comité recomienda; las decisiones disciplinarias son del empleador según su reglamento interno.</li>
          <li><strong>Ejecutar el SG-SST.</strong> Diseñarlo y ejecutarlo es responsabilidad del empleador y de quien designe para ello.</li>
        </ul>
        <p><strong>Trabajo con la ARL.</strong> La ARL asesora y capacita al comité. Aproveche esa asesoría para formar a los nuevos integrantes al inicio del período, en temas como inspecciones, investigación de accidentes y funcionamiento del comité.</p>
        <p><strong>Señales de un comité que funciona:</strong> los trabajadores conocen a sus representantes y les reportan; las actas muestran compromisos que se cierran; los accidentes se investigan a tiempo; y los jefes ven al comité como un aliado, no como un trámite.</p>
      `,
      keyPoints: [
        'Indicadores mínimos de la Res. 0312: frecuencia, severidad, mortalidad, enfermedad laboral y ausentismo.',
        'El comité también mide su propio desempeño: reuniones, inspecciones y cierre de hallazgos.',
        'No atiende acoso laboral ni sexual, no sanciona y no reemplaza al responsable del SG-SST.'
      ]
    }
  ],

  practices: [
    { q: '¿Qué significa que el COPASST sea "paritario"?', options: ['Que las decisiones las toma solo el presidente del comité', 'Que tiene igual número de representantes del empleador y de los trabajadores', 'Que se reúne con la misma frecuencia que la junta directiva'], answer: 1 },
    { q: 'Una empresa tiene 8 trabajadores. ¿Qué debe tener?', options: ['Un vigía de seguridad y salud en el trabajo', 'Un COPASST de 4 principales y 4 suplentes', 'Ninguna figura, porque es una empresa pequeña'], answer: 0 },
    { q: '¿Quién elige a los representantes de los trabajadores ante el COPASST?', options: ['El gerente, entre los trabajadores más antiguos', 'La ARL, según la capacitación que hayan recibido', 'Los propios trabajadores, mediante votación libre'], answer: 2 },
    { q: '¿Con qué frecuencia mínima se reúne el COPASST de forma ordinaria?', options: ['Una vez cada seis meses', 'Una vez al mes', 'Solo cuando ocurre un accidente grave'], answer: 1 },
    { q: '¿Cuál de estas es una función del COPASST?', options: ['Inspeccionar periódicamente los lugares de trabajo e informar los peligros encontrados', 'Decidir las sanciones disciplinarias de los trabajadores', 'Firmar la nómina del personal de producción'], answer: 0 },
    { q: 'En una inspección, ¿cómo debe registrarse un hallazgo?', options: ['De forma general, por ejemplo "área insegura"', 'Solo de palabra al jefe del área, sin dejar registro', 'De forma concreta, con ubicación, foto y fecha'], answer: 2 },
    { q: '¿Cuál es el objetivo de investigar un accidente de trabajo?', options: ['Encontrar al culpable para sancionarlo', 'Encontrar las causas para que no se repita', 'Cumplir un formato exigido por la ARL'], answer: 1 },
    { q: 'Un trabajador le cuenta a un integrante del COPASST que su jefe lo humilla constantemente. ¿Qué debe hacer el integrante?', options: ['Abrir una investigación del COPASST sobre el jefe', 'Ignorarlo, porque no es un tema de seguridad', 'Orientarlo con discreción hacia el Comité de Convivencia Laboral'], answer: 2 }
  ],

  scenarios: [
    {
      scenario:
        'Eres integrante del COPASST. Llega la fecha de la reunión mensual y el presidente propone firmar el acta "como si nos hubiéramos reunido" porque todos están ocupados con un pedido grande.',
      options: [
        { text: 'Firmo: lo importante es que el acta esté para la auditoría.', correct: false, feedback: 'Decisión incorrecta. Un acta falsa no solo es un incumplimiento grave; deja sin seguimiento los peligros reales, como en el caso con que empieza el curso.' },
        { text: 'Propongo reprogramar la reunión en la misma semana, aunque sea corta, y tratar al menos los compromisos pendientes y los accidentes del mes.', correct: true, feedback: 'Decisión correcta. La reunión puede ser breve, pero debe ocurrir y quedar bien registrada.' },
        { text: 'No digo nada y dejo que el presidente decida, porque él representa a la empresa.', correct: false, feedback: 'Decisión incorrecta. Todos los integrantes son responsables del funcionamiento del comité; callar también es participar en el incumplimiento.' }
      ]
    },
    {
      scenario:
        'En una inspección encuentras que el tablero eléctrico de la zona de empaque está abierto, con cables expuestos y cajas apiladas al frente. El jefe del área dice que lo arreglan "la otra semana".',
      options: [
        { text: 'Lo anoto como hallazgo menor y lo reviso en la inspección del próximo mes.', correct: false, feedback: 'Decisión incorrecta. Partes energizadas expuestas pueden causar una electrocución: es un hallazgo crítico.' },
        { text: 'Lo clasifico como crítico, pido despejar y restringir el acceso de inmediato, aviso al responsable SST y registro el hallazgo con foto para seguimiento.', correct: true, feedback: 'Decisión correcta. Un hallazgo crítico requiere control inmediato, comunicación y seguimiento hasta el cierre.' },
        { text: 'Cierro yo mismo el tablero y acomodo los cables para no retrasar a nadie.', correct: false, feedback: 'Decisión incorrecta. Manipular partes eléctricas sin ser personal calificado te expone a ti; lo correcto es restringir el acceso y escalar.' }
      ]
    },
    {
      scenario:
        'Un operario sufrió una lesión en la mano con una máquina. El supervisor quiere cerrar la investigación con la conclusión "acto inseguro: el trabajador no prestó atención" y que lo capaciten de nuevo.',
      options: [
        { text: 'Acepto la conclusión: el trabajador metió la mano, así que la causa es él.', correct: false, feedback: 'Decisión incorrecta. Quedarse en el acto inseguro impide ver por qué la máquina permitía meter la mano y por qué nadie corrigió la guarda.' },
        { text: 'Pido revisar las causas básicas: estado de la guarda, reportes anteriores, presión de producción y procedimientos, y propongo acciones de ingeniería.', correct: true, feedback: 'Decisión correcta. El aporte del COPASST es llegar a la raíz y priorizar los controles que eliminan o aíslan el peligro.' },
        { text: 'Me retiro de la investigación porque el supervisor conoce mejor el área.', correct: false, feedback: 'Decisión incorrecta. El representante del COPASST es parte obligatoria del equipo investigador y aporta la mirada de los trabajadores.' }
      ]
    },
    {
      scenario:
        'Llevas tres meses en el COPASST y todas las reuniones y las inspecciones te toca hacerlas fuera de tu turno, sin que te reconozcan ese tiempo.',
      options: [
        { text: 'Sigo así, porque ser del comité es un trabajo voluntario.', correct: false, feedback: 'Decisión incorrecta. La norma obliga al empleador a dar tiempo dentro de la jornada para las funciones del comité.' },
        { text: 'Renuncio al comité sin avisar a nadie.', correct: false, feedback: 'Decisión incorrecta. Retirarse sin plantear el problema deja al comité incompleto y el problema sin resolver.' },
        { text: 'Lo planteo en la reunión y queda en el acta: el empleador debe dar al menos cuatro horas semanales dentro de la jornada para el comité.', correct: true, feedback: 'Decisión correcta. Es un derecho del integrante y una condición para que el comité funcione; dejarlo en el acta permite hacer seguimiento.' }
      ]
    },
    {
      scenario:
        'Revisando los indicadores del trimestre, el comité ve que la mitad de los accidentes fueron cortes en las manos en el área de despiece, y que todos se registraron como "falta de atención".',
      options: [
        { text: 'Proponemos una campaña de afiches sobre "trabajar con atención".', correct: false, feedback: 'Decisión incompleta. La concentración de casos indica un problema del proceso, no solo de atención individual.' },
        { text: 'Proponemos una inspección dirigida al área de despiece, revisar herramientas, guantes anticorte, ritmo de trabajo y procedimiento, y hacer seguimiento a las acciones.', correct: true, feedback: 'Decisión correcta. Los indicadores sirven para priorizar dónde intervenir y buscar causas comunes.' },
        { text: 'Esperamos al siguiente trimestre para ver si es casualidad.', correct: false, feedback: 'Decisión incorrecta. Esperar deja expuestos a los trabajadores a la misma causa durante tres meses más.' }
      ]
    }
  ],

  exam: [
    {
      q: '¿Cuál es el propósito principal del COPASST?',
      options: [
        'Promover y vigilar la SST con participación del empleador y de los trabajadores.',
        'Administrar el presupuesto del SG-SST.',
        'Investigar y sancionar las conductas de acoso laboral que se presenten entre los trabajadores de la empresa.'
      ],
      answer: 0
    },
    {
      q: '¿Qué norma sigue regulando la conformación y el funcionamiento del COPASST?',
      options: [
        'La Ley 1581 de 2012, sobre el manejo de los datos personales de los trabajadores de la empresa.',
        'La Resolución 2013 de 1986, complementada por el Decreto-Ley 1295 de 1994 y el Decreto 1072 de 2015.',
        'La Resolución 3461 de 2025, que reglamenta a los comités paritarios y de convivencia en un solo cuerpo.'
      ],
      answer: 1
    },
    {
      q: 'Una empresa tiene 320 trabajadores. ¿Cuántos representantes principales tiene cada parte en el COPASST?',
      options: [
        'Uno por cada parte, porque el número de representantes es el mismo para todas las empresas del país.',
        'Cuatro por cada parte, porque la empresa supera los cien trabajadores contratados en la planta.',
        'Dos por cada parte, cada uno con su suplente.'
      ],
      answer: 2
    },
    {
      q: '¿Qué figura reemplaza al COPASST en una empresa con menos de 10 trabajadores?',
      options: [
        'El vigía de seguridad y salud en el trabajo.',
        'El Comité de Convivencia Laboral, que asume también las funciones de seguridad y salud en el trabajo.',
        'Ninguna figura: están exentas.'
      ],
      answer: 0
    },
    {
      q: '¿Cómo se escoge el presidente del COPASST?',
      options: [
        'Lo eligen los trabajadores por votación libre entre todos los integrantes que se inscribieron como candidatos.',
        'Lo designa el empleador entre sus propios representantes en el comité.',
        'Lo asigna la ARL según la experiencia de cada integrante en seguridad y salud en el trabajo.'
      ],
      answer: 1
    },
    {
      q: '¿Cuál es el período de los miembros del COPASST?',
      options: [
        'Un año, sin posibilidad de reelección para garantizar la rotación de todos los trabajadores de la planta.',
        'Cinco años, sin reelección.',
        'Dos años, con posibilidad de reelección.'
      ],
      answer: 2
    },
    {
      q: 'En una reunión ordinaria no se completa el quórum. ¿Qué indica la norma?',
      options: [
        'A los treinta minutos de la hora señalada, sesiona con los presentes y sus decisiones son válidas.',
        'La reunión se cancela y se debe informar al Ministerio del Trabajo para que convoque una nueva fecha de sesión.',
        'Los suplentes de la ARL completan el quórum y la reunión continúa con los representantes asignados.'
      ],
      answer: 0
    },
    {
      q: '¿Cuánto tiempo debe proporcionar el empleador a cada miembro del comité para sus funciones?',
      options: [
        'El tiempo que sobre al terminar el turno, siempre que el trabajador acepte quedarse sin pago adicional.',
        'Cuando menos cuatro horas semanales dentro de la jornada normal de trabajo.',
        'Una hora al mes, el día de la reunión.'
      ],
      answer: 1
    },
    {
      q: 'Ocurre un accidente grave en la planta. ¿Qué debe hacer el COPASST?',
      options: [
        'Esperar a la reunión ordinaria del mes siguiente para conocer el informe final de la investigación.',
        'Reunirse de forma extraordinaria, con el responsable del área, dentro de los cinco días siguientes al hecho.',
        'Solicitar a la ARL que realice la investigación completa sin participación de la empresa ni del comité.'
      ],
      answer: 1
    },
    {
      q: '¿Cuál de estas NO es una función del COPASST?',
      options: [
        'Imponer sanciones disciplinarias a los trabajadores que incumplen las normas.',
        'Visitar e inspeccionar periódicamente los lugares de trabajo y los equipos.',
        'Colaborar en el análisis de las causas de los accidentes y las enfermedades laborales.'
      ],
      answer: 0
    },
    {
      q: 'Durante una inspección, ¿cuándo se considera cerrado un hallazgo?',
      options: [
        'Cuando el jefe del área dice que lo corrigió.',
        'Cuando pasa la fecha límite asignada, aunque nadie haya revisado la corrección en el área.',
        'Cuando el comité verifica en sitio que la corrección se hizo y funciona.'
      ],
      answer: 2
    },
    {
      q: 'En una inspección se detecta una condición que puede causar una lesión grave. ¿Qué corresponde?',
      options: [
        'Clasificarla como crítica, controlarla o detener la actividad, e informar al responsable SST.',
        'Registrarla en el acta y programar su revisión en la inspección planeada del siguiente trimestre.',
        'Esperar a que ocurra un incidente que confirme el peligro antes de pedir recursos a la gerencia.'
      ],
      answer: 0
    },
    {
      q: 'Según la Res. 1401 de 2007, ¿quiénes integran como mínimo el equipo investigador de un accidente?',
      options: [
        'El gerente general, el abogado de la empresa y un delegado de la ARL que se encarga del caso.',
        'El jefe inmediato, un representante del COPASST o el vigía, y el encargado del SG-SST.',
        'Solo el trabajador accidentado y sus testigos, porque son quienes conocen lo que realmente pasó.'
      ],
      answer: 1
    },
    {
      q: '¿Dentro de qué plazo se investiga un accidente de trabajo?',
      options: [
        'Dentro de los seis meses siguientes, antes del cierre del período fiscal y del informe de gestión anual.',
        'Solo cuando la ARL lo solicita.',
        'Dentro de los quince días siguientes a su ocurrencia.'
      ],
      answer: 2
    },
    {
      q: 'En una investigación, ¿qué es una causa básica?',
      options: [
        'La razón de fondo por la que existía el acto o la condición insegura, como la falta de inspección de la guarda.',
        'El tipo de lesión que sufrió el trabajador y la parte del cuerpo afectada según el reporte médico.',
        'El nombre del trabajador que cometió el error y el número de veces que lo ha cometido antes.'
      ],
      answer: 0
    },
    {
      q: 'Un trabajador presenta al COPASST una queja por acoso laboral de su jefe. ¿Qué debe hacer el comité?',
      options: [
        'Investigar el caso en la siguiente reunión ordinaria y decidir si el jefe debe ser sancionado.',
        'Orientarlo con discreción hacia el Comité de Convivencia Laboral, que es la instancia competente.',
        'Archivar la queja, porque los temas de convivencia no tienen relación con la salud de los trabajadores.'
      ],
      answer: 1
    }
  ]
};
