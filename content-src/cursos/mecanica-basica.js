/**
 * Curso: Mecánica Básica Industrial y Seguridad en Mantenimiento. Versión completa.
 * Normativa: Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979 (protección de máquinas y transmisiones;
 * carga máxima de manipulación manual).
 */
export default {
  id: 'mecanica-basica',
  title: 'Mecánica Básica Industrial y Seguridad en Mantenimiento',
  hours: 1.5,
  category: 'prevencion_sst',
  regulation: 'Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979',
  legalNotice:
    'Formación teórica en seguridad para personal de mantenimiento mecánico y operarios que hacen ajustes básicos. No reemplaza el entrenamiento técnico en cada equipo, el manual del fabricante ni el procedimiento de bloqueo de energías.',
  summary:
    'Los peligros de las transmisiones mecánicas y los puntos de atrapamiento, las guardas, la preparación antes de intervenir, el uso correcto de herramientas manuales y del torque, rodamientos y lubricación, el manejo de piezas pesadas y la entrega segura del equipo.',
  fieldCase:
    'Un técnico ajustó la tensión de una correa en V y, sin reinstalar la guarda, encendió el motor para "escuchar cómo sonaba". Al acercarse a revisar, la manga de su camisa quedó atrapada entre la correa y la polea, y el brazo fue arrastrado hacia la transmisión.',
  failureAnalysis:
    'Falla raíz: prueba de un equipo en movimiento sin la guarda instalada y uso de ropa holgada cerca de una transmisión.',
  checklist: [
    'Bloqueé y verifiqué energía cero antes de intervenir (LOTO).',
    'Identifiqué los puntos de atrapamiento y las energías residuales del equipo.',
    'Uso la herramienta del tamaño correcto; no uso tubos como palanca.',
    'Aprieto con el torque y la secuencia que indica el fabricante.',
    'Mi ropa está ajustada, sin joyas, y tengo el cabello recogido.',
    'Para piezas pesadas uso ayudas mecánicas o pido ayuda.',
    'Antes de probar: guardas instaladas, herramientas recogidas y personas fuera.',
    'Dejo el área limpia, sin derrames de aceite y con los trapos sucios en recipientes cerrados.'
  ],
  onSiteClosure:
    'Práctica en su empresa: identificar con el jefe de mantenimiento los puntos de atrapamiento y las guardas de una máquina real, practicar el apriete con llave de torque en secuencia, y hacer la entrega de un equipo después de una intervención con la lista de verificación.',

  modules: [
    {
      title: 'Los peligros del mantenimiento mecánico',
      content: `
        <p>El personal de mantenimiento tiene una exposición especial: trabaja <strong>dentro</strong> de las máquinas, en los lugares que las guardas protegen durante la operación normal, y muchas veces con presión para devolver el equipo a producción rápido.</p>
        <p><strong>Peligros principales:</strong></p>
        <ul>
          <li><strong>Atrapamiento</strong> en transmisiones, rodillos, ejes y engranajes: las lesiones más graves del mantenimiento, con amputaciones y muertes.</li>
          <li><strong>Arranque inesperado</strong> o liberación de energía almacenada mientras se interviene (por eso existe el bloqueo y etiquetado).</li>
          <li><strong>Golpes</strong> por herramientas que se zafan, piezas que caen o resortes que se liberan.</li>
          <li><strong>Cortes</strong> con bordes de láminas, cuchillas y rebabas.</li>
          <li><strong>Proyección de partículas</strong> al martillar, cincelar, esmerilar o usar aire comprimido.</li>
          <li><strong>Sobreesfuerzos</strong> al levantar motores, reductores, rodillos y piezas pesadas, y por posturas forzadas dentro de las máquinas.</li>
          <li><strong>Quemaduras</strong> con superficies, aceites y fluidos calientes.</li>
          <li><strong>Resbalones</strong> por aceite y grasa en el piso.</li>
        </ul>
        <p><strong>El factor tiempo.</strong> Muchos accidentes ocurren en las intervenciones "rápidas": un ajuste, una prueba, un desatasco. La presión de producción lleva a omitir el bloqueo, a probar sin guarda o a usar la herramienta que esté más a mano. Por eso, en mantenimiento, el procedimiento no se acorta por urgencia.</p>
        <p><strong>Antes de cualquier intervención, tres preguntas:</strong></p>
        <ol>
          <li>¿Qué energías tiene este equipo y cómo las aíslo?</li>
          <li>¿Dónde están los puntos donde me puedo atrapar, golpear o cortar?</li>
          <li>¿Tengo la herramienta, el repuesto y la ayuda que necesito?</li>
        </ol>
        <p><strong>Marco normativo.</strong> El <strong>Decreto 1072 de 2015</strong> exige identificar los peligros y controlarlos; la <strong>Resolución 0312 de 2019</strong> incluye entre los estándares mínimos el mantenimiento periódico de equipos y herramientas, y las inspecciones; y la <strong>Resolución 2400 de 1979</strong> exige proteger las transmisiones y las partes móviles de las máquinas.</p>
      `,
      keyPoints: [
        'Mantenimiento trabaja dentro de las máquinas: atrapamiento, arranque inesperado, golpes, cortes y sobreesfuerzos.',
        'Las intervenciones "rápidas" con presión de producción son las de mayor riesgo.',
        'Antes de intervenir: qué energías hay, dónde están los puntos de atrapamiento y qué se necesita.'
      ]
    },
    {
      title: 'Transmisiones de potencia y puntos de atrapamiento',
      content: `
        <p>Las máquinas transmiten el movimiento del motor a los elementos de trabajo con <strong>correas y poleas</strong>, <strong>cadenas y piñones</strong>, <strong>engranajes</strong>, <strong>ejes y acoples</strong>. Todos ellos crean zonas donde el cuerpo o la ropa pueden quedar atrapados.</p>
        <p><strong>Tipos de movimiento peligroso:</strong></p>
        <ul>
          <li><strong>Rotativo</strong>: ejes, acoples, poleas, brocas. Incluso un eje <strong>liso</strong> que gira despacio puede enrollar una manga, un guante o el cabello en segundos.</li>
          <li><strong>Alternativo</strong> (de ida y vuelta): pistones, prensas, bielas. Pueden aplastar.</li>
          <li><strong>Transversal o lineal</strong>: bandas transportadoras, carros, mesas que se desplazan. Pueden golpear o atrapar contra partes fijas.</li>
        </ul>
        <p><strong>Puntos de atrapamiento o de pellizco</strong> (en inglés, <em>nip points</em>): el lugar donde dos elementos se acercan girando, o donde un elemento móvil pasa cerca de uno fijo:</p>
        <ul>
          <li>donde la correa entra en la polea;</li>
          <li>donde la cadena entra en el piñón;</li>
          <li>entre dos rodillos o dos engranajes que giran uno contra otro;</li>
          <li>entre una banda transportadora y su tambor;</li>
          <li>entre una parte móvil y la estructura de la máquina.</li>
        </ul>
        <p>Estos puntos "tiran" de lo que tocan hacia adentro. Una vez atrapada la ropa, la fuerza del motor es muy superior a la de cualquier persona: no hay tiempo de soltarse.</p>
        <p><strong>Por eso la ropa importa:</strong> mangas ajustadas o arremangadas, camisa por dentro, sin bufandas, cordones colgando, joyas, relojes ni anillos, y cabello largo recogido. Los guantes se usan para manipular piezas con la máquina detenida, pero <strong>no</strong> cerca de partes que giran.</p>
        <p><strong>Ejemplo.</strong> En el caso del curso, la manga del técnico llegó al punto donde la correa entra en la polea. Con la guarda puesta, ese punto habría estado cubierto; con ropa ajustada, probablemente no lo habría alcanzado.</p>
      `,
      keyPoints: [
        'Movimientos peligrosos: rotativos (incluso ejes lisos), alternativos y lineales.',
        'Puntos de atrapamiento: donde la correa entra en la polea, la cadena en el piñón, o entre rodillos.',
        'Ropa ajustada, sin joyas, cabello recogido y sin guantes cerca de partes que giran.'
      ]
    },
    {
      title: 'Guardas de seguridad',
      content: `
        <p>Las <strong>guardas</strong> son barreras físicas que impiden que el cuerpo llegue a las partes móviles peligrosas. La Resolución 2400 de 1979 exige proteger las transmisiones y las partes móviles de las máquinas.</p>
        <p><strong>Tipos de guardas:</strong></p>
        <ul>
          <li><strong>Fijas</strong>: atornilladas o soldadas; solo se retiran con herramienta. Son las más comunes en transmisiones.</li>
          <li><strong>Móviles con enclavamiento</strong>: puertas o tapas conectadas a un interruptor que detiene la máquina, o impide que arranque, si se abren.</li>
          <li><strong>Ajustables</strong>: se adaptan al tamaño de la pieza, como en sierras y cepilladoras.</li>
          <li><strong>Dispositivos de protección</strong>: cortinas de luz, tapetes sensibles, mandos a dos manos.</li>
        </ul>
        <p><strong>Una buena guarda:</strong></p>
        <ul>
          <li>no se puede retirar sin herramienta (si es fija);</li>
          <li>impide alcanzar la zona peligrosa por encima, por debajo, por los lados o a través de las aberturas;</li>
          <li>no crea nuevos peligros, como bordes cortantes;</li>
          <li>permite, cuando es posible, lubricar e inspeccionar sin retirarla (puntos de engrase extendidos, mirillas).</li>
        </ul>
        <p><strong>Reglas para mantenimiento:</strong></p>
        <ul>
          <li>Las guardas se retiran <strong>solo con el equipo bloqueado</strong> y en energía cero.</li>
          <li><strong>Nunca se prueba</strong> un equipo con las guardas retiradas. Si se necesita observar el funcionamiento, se usan mirillas, guardas transparentes o un procedimiento de prueba aprobado que mantenga a las personas fuera del alcance.</li>
          <li>Las guardas se reinstalan completas, con todos sus tornillos, antes de devolver el equipo.</li>
          <li>Una guarda dañada o incompleta se reporta y se repara; no se deja el equipo funcionando "mientras tanto".</li>
          <li>Nunca se anulan los interruptores de enclavamiento con puentes, cinta o imanes.</li>
        </ul>
        <p><strong>El dilema de la guarda que estorba.</strong> Si una guarda impide hacer el trabajo, la solución es rediseñarla (más aberturas para lubricar, partes desmontables), no retirarla de forma permanente.</p>
      `,
      keyPoints: [
        'Guardas fijas, móviles con enclavamiento, ajustables y dispositivos de protección.',
        'Se retiran solo con el equipo bloqueado y nunca se prueba un equipo sin guardas.',
        'Nunca se anulan los enclavamientos; una guarda que estorba se rediseña, no se elimina.'
      ]
    },
    {
      title: 'Antes de intervenir: bloqueo, energía residual y preparación',
      content: `
        <p><strong>Toda intervención</strong> en la que una parte del cuerpo entre en la zona de peligro requiere <strong>bloqueo y etiquetado (LOTO)</strong>: apagar, aislar todas las energías, poner el candado personal y la tarjeta, liberar la energía residual y verificar energía cero. Este procedimiento se estudia en detalle en el curso de LOTO.</p>
        <p><strong>Energías residuales típicas en mantenimiento mecánico:</strong></p>
        <ul>
          <li><strong>Inercia</strong>: volantes, rodillos pesados y ventiladores que siguen girando después de apagar. Hay que esperar la detención total.</li>
          <li><strong>Gravedad</strong>: partes elevadas que pueden caer, como mesas, tolvas, compuertas o brazos. Se bajan o se calzan con soportes.</li>
          <li><strong>Resortes</strong> comprimidos o tensionados, y <strong>correas o cadenas tensionadas</strong>: al soltarlas pueden golpear.</li>
          <li><strong>Presión</strong> neumática o hidráulica en cilindros y líneas.</li>
          <li><strong>Temperatura</strong> en reductores, carcasas y aceites.</li>
        </ul>
        <p><strong>Preparación del trabajo:</strong></p>
        <ul>
          <li>Leer el manual o la ficha técnica del equipo y la orden de trabajo.</li>
          <li>Hacer el análisis de trabajo seguro (ATS) cuando la tarea no es rutinaria.</li>
          <li>Reunir herramientas, repuestos y elementos de protección antes de empezar, para no improvisar a mitad de la tarea.</li>
          <li>Delimitar el área si otras personas pueden pasar.</li>
          <li>Prever cómo se van a mover las piezas pesadas.</li>
          <li>Coordinar con el operador y el supervisor de producción.</li>
        </ul>
        <p><strong>Aire comprimido.</strong> No se usa para limpiar la ropa o el cuerpo: puede introducir aire o partículas en la piel, los ojos o los oídos. Para limpiar piezas, se usa con presión reducida, boquilla de seguridad, gafas y sin apuntar a personas.</p>
      `,
      keyPoints: [
        'Toda intervención en zona de peligro requiere LOTO y verificación de energía cero.',
        'Energías residuales: inercia, gravedad, resortes y correas tensionadas, presión y temperatura.',
        'Preparar antes: manual, orden de trabajo, ATS, herramientas, repuestos y coordinación.'
      ]
    },
    {
      title: 'Herramientas manuales, tornillería y torque',
      content: `
        <p>Las herramientas manuales causan muchas lesiones en manos y ojos, casi siempre por usarlas para algo que no les corresponde o en mal estado.</p>
        <p><strong>Llaves:</strong></p>
        <ul>
          <li>Usar la llave del <strong>tamaño exacto</strong> del perno o la tuerca. Una llave más grande se zafa, redondea el perno y golpea la mano.</li>
          <li>Preferir llaves fijas o de copa sobre las ajustables ("de expansión") cuando hay que hacer fuerza.</li>
          <li><strong>Halar la llave hacia uno</strong> en lugar de empujarla, con el cuerpo bien apoyado, para no golpearse si se zafa.</li>
          <li><strong>No usar tubos como extensión</strong> ("palanca") para ganar fuerza: sobrecarga la llave, que puede romperse, y el perno puede romperse o el operario perder el equilibrio. Si un perno no sale, se usan herramientas adecuadas: llave de impacto, multiplicador de torque, penetrante, calor controlado con permiso.</li>
        </ul>
        <p><strong>Otras herramientas:</strong></p>
        <ul>
          <li><strong>Destornilladores</strong>: no se usan como palanca ni como cincel; no se sostiene la pieza en la palma de la mano mientras se atornilla.</li>
          <li><strong>Martillos</strong>: con el mango firme y sin astillas; el tipo adecuado (de bola, de goma, de bronce para no producir chispas).</li>
          <li><strong>Cinceles y punzones</strong>: la cabeza en forma de "hongo" por el uso se esmerila, porque desprende fragmentos al golpearla.</li>
          <li><strong>Cuchillos y bisturíes</strong>: cortar en dirección contraria al cuerpo.</li>
        </ul>
        <p><strong>Torque.</strong> El <strong>torque</strong> es la fuerza de giro con que se aprieta un perno. Un perno flojo puede soltarse con la vibración; uno demasiado apretado puede estirarse, romperse o dañar la rosca. Por eso:</p>
        <ul>
          <li>Se aprieta con el <strong>valor de torque</strong> que indica el fabricante, usando una <strong>llave de torque</strong> calibrada.</li>
          <li>En bridas, tapas y bases con varios pernos, se aprieta en <strong>secuencia en estrella</strong> (pernos opuestos) y en varias pasadas, para que la pieza asiente de forma pareja.</li>
          <li>Se reemplazan los pernos y tuercas con rosca dañada, y se usan arandelas y seguros cuando el diseño los exige.</li>
        </ul>
        <p><strong>Herramientas en altura</strong>: se amarran con cordones para que no caigan sobre las personas.</p>
      `,
      keyPoints: [
        'Llave del tamaño exacto, halar hacia uno y nunca usar tubos como palanca.',
        'Cinceles con cabeza en hongo se esmerilan; destornilladores no son palancas ni cinceles.',
        'Apretar con el torque del fabricante, con llave de torque y en secuencia en estrella.'
      ]
    },
    {
      title: 'Rodamientos, lubricación y señales de falla',
      content: `
        <p>Detectar una falla a tiempo evita paradas costosas y accidentes, como roturas de ejes o incendios por recalentamiento.</p>
        <p><strong>Señales de alerta en un equipo:</strong></p>
        <ul>
          <li><strong>Ruido</strong> nuevo o diferente: chirridos, golpeteos, zumbidos.</li>
          <li><strong>Temperatura</strong> mayor de lo habitual en rodamientos, reductores o motores.</li>
          <li><strong>Vibración</strong> excesiva.</li>
          <li><strong>Fugas</strong> de aceite o grasa, y olor a quemado.</li>
          <li><strong>Desgaste</strong> visible en correas, cadenas y piñones.</li>
        </ul>
        <p>"Siempre ha sonado así" no es una explicación. Cualquier cambio se reporta y se revisa.</p>
        <p><strong>Monitoreo sin riesgo:</strong> termómetros infrarrojos, estetoscopios de mecánico y analizadores de vibración permiten medir desde una distancia segura y sin retirar guardas. Nunca se toca un componente en movimiento para "sentir" la temperatura o la vibración.</p>
        <p><strong>Lubricación:</strong></p>
        <ul>
          <li>El lubricante correcto (tipo y grado) según el fabricante. Mezclar grasas incompatibles puede dañar el rodamiento.</li>
          <li>La <strong>cantidad</strong> correcta: el exceso de grasa también recalienta los rodamientos.</li>
          <li>La <strong>frecuencia</strong> del plan de mantenimiento.</li>
          <li>Con el equipo <strong>detenido</strong> y bloqueado, salvo en los puntos de lubricación remota diseñados para hacerlo con seguridad desde fuera de la guarda.</li>
          <li>Limpieza de las graseras antes de inyectar, para no introducir suciedad.</li>
        </ul>
        <p><strong>Montaje de rodamientos:</strong> se calientan con un calentador de inducción o un baño de aceite controlado, nunca con soplete directo; se instalan con herramientas de montaje que apoyen sobre el aro correcto, nunca golpeando directamente el rodamiento con un martillo. Se manipulan con guantes de protección térmica cuando están calientes.</p>
        <p><strong>Aceite usado y residuos</strong>: se recogen en recipientes cerrados y se gestionan como residuos peligrosos.</p>
      `,
      keyPoints: [
        'Señales de falla: ruido nuevo, temperatura alta, vibración, fugas, olor a quemado y desgaste.',
        'Se mide con instrumentos desde fuera de las guardas; nunca se toca un componente en movimiento.',
        'Lubricar con el producto, la cantidad y la frecuencia correctos, con el equipo detenido y bloqueado.'
      ]
    },
    {
      title: 'Piezas pesadas y sobreesfuerzos',
      content: `
        <p>Motores, reductores, rodillos, bombas y ejes pesan mucho más de lo que parece. Las lesiones de espalda y hombros son de las más frecuentes en mantenimiento.</p>
        <p><strong>Límite de referencia.</strong> La Resolución 2400 de 1979 establece como carga máxima de referencia para levantar 25 kilogramos de carga compacta para los hombres y 12,5 kilogramos para las mujeres, según su aptitud física, sus conocimientos y su experiencia. En la práctica, la evaluación ergonómica de cada tarea puede fijar límites menores según la postura, la distancia y la frecuencia.</p>
        <p><strong>Antes de levantar:</strong></p>
        <ul>
          <li>Conocer el peso (placa del equipo, manual, ficha técnica).</li>
          <li>Planear la ruta y el lugar donde se va a dejar la pieza.</li>
          <li><strong>Usar ayudas mecánicas</strong>: polipastos, diferenciales, grúas puente, carros, gatos, mesas elevadoras. Los equipos de izaje se inspeccionan y se usan dentro de su capacidad, con eslingas adecuadas (ver el curso de aparejador de cargas).</li>
          <li>Si se levanta entre varias personas, una dirige la maniobra y todos levantan al mismo tiempo.</li>
        </ul>
        <p><strong>Técnica de levantamiento manual:</strong></p>
        <ol>
          <li>Acercarse a la carga, con los pies separados y firmes.</li>
          <li>Doblar las rodillas, no la espalda, manteniendo la espalda recta.</li>
          <li>Agarrar firme, con toda la mano.</li>
          <li>Levantar con la fuerza de las piernas, de forma suave, sin tirones.</li>
          <li>Mantener la carga pegada al cuerpo.</li>
          <li><strong>No girar el tronco</strong> con la carga: mover los pies.</li>
        </ol>
        <p><strong>Nunca bajo una carga suspendida.</strong> Al bajar o subir un motor con un polipasto, nadie pone las manos debajo para "acomodarlo". Se usan cuerdas guía o barras para orientarlo.</p>
        <p><strong>Posturas dentro de las máquinas.</strong> Trabajar agachado o con los brazos sobre la cabeza por largo tiempo también lesiona. Ayudan las plataformas, las rodilleras, las pausas y la rotación de tareas.</p>
      `,
      keyPoints: [
        'Referencia de la Res. 2400 de 1979: 25 kg de carga compacta para hombres y 12,5 kg para mujeres.',
        'Primero ayudas mecánicas; en levantamiento manual, espalda recta, carga pegada al cuerpo y sin girar el tronco.',
        'Nunca las manos ni el cuerpo bajo una carga suspendida: usar cuerdas guía.'
      ]
    },
    {
      title: 'Orden, aseo y entrega segura del equipo',
      content: `
        <p><strong>Orden y aseo (5S).</strong> Un taller ordenado es un taller más seguro. La metodología 5S lo organiza en cinco pasos: <strong>clasificar</strong> (retirar lo que no sirve), <strong>ordenar</strong> (un lugar para cada cosa), <strong>limpiar</strong>, <strong>estandarizar</strong> y <strong>mantener la disciplina</strong>.</p>
        <ul>
          <li>Herramientas en tableros o cajas, no regadas en el piso o dentro de las máquinas.</li>
          <li>Pisos sin aceite, grasa ni piezas sueltas. Los derrames se limpian de inmediato con absorbentes.</li>
          <li><strong>Trapos con aceite o solventes</strong> en recipientes metálicos con tapa: pueden calentarse solos y encenderse (combustión espontánea).</li>
          <li>Pasillos y accesos a tableros y equipos de emergencia despejados.</li>
          <li>Repuestos y piezas identificadas y almacenadas de forma estable.</li>
        </ul>
        <p><strong>Entrega del equipo después de la intervención.</strong> Es el momento en que ocurren muchos accidentes: alguien enciende el equipo con una herramienta adentro, una guarda sin poner o una persona todavía en la zona.</p>
        <p><strong>Lista de verificación antes de retirar el bloqueo:</strong></p>
        <ol>
          <li>Herramientas, trapos, repuestos y materiales retirados del equipo. Contar las herramientas ayuda a detectar si alguna quedó adentro.</li>
          <li>Todas las guardas reinstaladas, con todos sus tornillos.</li>
          <li>Ajustes y aprietes terminados y verificados.</li>
          <li>Personas fuera de la zona de peligro y avisadas de que se va a energizar.</li>
          <li>Cada trabajador retira su propio candado.</li>
          <li><strong>Prueba controlada</strong>: arranque desde el control normal, observando desde un lugar seguro, y detención inmediata ante cualquier anomalía.</li>
          <li>Entrega formal al operador o al supervisor, informando qué se hizo y cualquier observación.</li>
          <li>Registro en la orden de trabajo y en la hoja de vida del equipo.</li>
        </ol>
        <p><strong>El caso del curso</strong> habría terminado distinto con dos puntos de esta lista: guarda reinstalada antes de probar y prueba desde un lugar seguro.</p>
      `,
      keyPoints: [
        '5S: clasificar, ordenar, limpiar, estandarizar y mantener la disciplina.',
        'Trapos con aceite en recipientes metálicos con tapa: pueden encenderse solos.',
        'Antes de entregar: herramientas fuera, guardas puestas, personas fuera, prueba controlada y registro.'
      ]
    }
  ],

  practices: [
    { q: '¿Por qué las intervenciones "rápidas" de mantenimiento son de alto riesgo?', options: ['Porque se hacen con herramientas nuevas', 'Porque la presión de tiempo lleva a omitir el bloqueo o probar sin guarda', 'Porque se hacen siempre de noche'], answer: 1 },
    { q: '¿Qué es un punto de atrapamiento?', options: ['El lugar donde dos elementos se acercan girando y tiran hacia adentro', 'El lugar donde se guardan las herramientas', 'El punto donde se conecta el motor a la red'], answer: 0 },
    { q: '¿Cuándo se puede probar un equipo con las guardas retiradas?', options: ['Cuando el técnico es experimentado', 'Cuando la prueba dura menos de un minuto', 'Nunca'], answer: 2 },
    { q: 'Después de apagar un ventilador grande, ¿qué energía residual debes esperar que se disipe?', options: ['La inercia: hay que esperar a que se detenga por completo', 'La energía química del aceite', 'La energía de la luz del motor'], answer: 0 },
    { q: 'No tienes la llave del tamaño exacto y el perno está muy apretado. ¿Qué haces?', options: ['Uso una llave más grande con un tubo como palanca', 'Uso la llave correcta o herramientas adecuadas, como un multiplicador de torque o penetrante', 'Golpeo el perno con un martillo'], answer: 1 },
    { q: '¿Qué indica un rodamiento más caliente de lo habitual y con un ruido agudo nuevo?', options: ['Que está bien lubricado', 'Que la máquina trabaja más rápido', 'Una posible falla que debe reportarse y revisarse'], answer: 2 },
    { q: 'Según la Res. 2400 de 1979, ¿cuál es la carga máxima de referencia para un hombre?', options: ['25 kilogramos de carga compacta', '50 kilogramos de carga compacta', '12,5 kilogramos de carga compacta'], answer: 0 },
    { q: '¿Dónde se guardan los trapos con aceite o solvente?', options: ['En una caja de cartón junto a la máquina', 'En recipientes metálicos con tapa', 'En el bolsillo del overol'], answer: 1 }
  ],

  scenarios: [
    {
      scenario:
        'Ajustaste la tensión de una correa en V y quieres probar cómo suena el equipo. La guarda de la polea está en el piso, junto a la máquina, y el supervisor te apura.',
      options: [
        { text: 'Pruebo rápido sin la guarda y la pongo después.', correct: false, feedback: 'Decisión insegura. Así ocurrió el accidente del caso del curso.' },
        { text: 'Pruebo sin guarda, pero me mantengo a un metro de la polea.', correct: false, feedback: 'Decisión insegura. Nadie más sabe que la transmisión está expuesta y la distancia no evita que alguien se acerque.' },
        { text: 'Reinstalo la guarda completa, retiro herramientas, despejo el área y hago la prueba desde el control normal, observando desde un lugar seguro.', correct: true, feedback: 'Decisión correcta. Ninguna prueba se hace sin guardas.' }
      ]
    },
    {
      scenario:
        'Vas a apretar un perno de la base de un motor y no tienes la llave del tamaño exacto. Hay un tubo de un metro en el taller que "sirve de palanca" con una llave ajustable.',
      options: [
        { text: 'Busco la llave del tamaño correcto y aprieto con la llave de torque al valor del fabricante.', correct: true, feedback: 'Decisión correcta. La herramienta correcta y el torque especificado evitan accidentes y daños.' },
        { text: 'Uso la llave ajustable con el tubo, con cuidado.', correct: false, feedback: 'Decisión insegura. La llave puede zafarse o romperse, y el perno puede quedar sobreapretado.' },
        { text: 'Aprieto "a sentimiento" con la ajustable, lo más fuerte que pueda.', correct: false, feedback: 'Decisión insegura. Sin el torque correcto, el perno puede romperse o aflojarse con la vibración.' }
      ]
    },
    {
      scenario:
        'Un rodamiento hace un ruido agudo y la carcasa está más caliente que de costumbre. El operador dice que "es normal en esta máquina" y pide no pararla hasta el fin del turno.',
      options: [
        { text: 'Lo dejo así porque el operador conoce la máquina.', correct: false, feedback: 'Decisión insegura. Un cambio de ruido y temperatura es una señal de falla que puede terminar en una rotura o un incendio.' },
        { text: 'Toco la carcasa con la mano mientras gira para estimar la temperatura.', correct: false, feedback: 'Decisión insegura. Nunca se toca un componente en movimiento; se mide con instrumentos desde fuera de la guarda.' },
        { text: 'Mido con el termómetro infrarrojo desde fuera de la guarda, reporto la condición y se decide la parada según el riesgo.', correct: true, feedback: 'Decisión correcta. Se mide sin riesgo, se reporta y se decide con información.' }
      ]
    },
    {
      scenario:
        'Debes bajar un motor de 60 kilogramos de una base elevada. Tu compañero propone bajarlo entre los dos, a pulso.',
      options: [
        { text: 'Lo bajamos a pulso, doblando las rodillas.', correct: false, feedback: 'Decisión insegura. El peso supera con creces la referencia para levantamiento manual y la base está elevada.' },
        { text: 'Usamos un polipasto o una grúa con eslinga adecuada, dirigimos la carga con cuerda guía y nadie se pone debajo.', correct: true, feedback: 'Decisión correcta. Para piezas pesadas, primero ayudas mecánicas.' },
        { text: 'Lo empujamos para que caiga sobre unos cartones.', correct: false, feedback: 'Decisión insegura. El motor puede rebotar, dañarse o golpear a alguien.' }
      ]
    },
    {
      scenario:
        'Terminaste una reparación en una banda transportadora. Vas a retirar tu candado, pero no encuentras una llave de 13 mm que usaste dentro de la máquina.',
      options: [
        { text: 'Retiro el candado: ya aparecerá la llave.', correct: false, feedback: 'Decisión insegura. Una herramienta olvidada dentro puede ser proyectada o dañar el equipo al arrancar.' },
        { text: 'Mantengo el bloqueo hasta encontrar la llave o verificar que no está dentro del equipo; luego completo la lista de entrega.', correct: true, feedback: 'Decisión correcta. Contar las herramientas antes de entregar evita accidentes.' },
        { text: 'Arranco la banda un momento para ver si la llave cae.', correct: false, feedback: 'Decisión insegura. Arrancar con una herramienta adentro puede convertirla en un proyectil.' }
      ]
    }
  ],

  exam: [
    {
      q: '¿Cuál es el peligro que causa las lesiones más graves en el mantenimiento mecánico?',
      options: [
        'El atrapamiento en transmisiones, rodillos y engranajes.',
        'El polvo del taller.',
        'El ruido de las herramientas manuales que se usan en el taller durante la jornada.'
      ],
      answer: 0
    },
    {
      q: '¿Por qué un eje liso que gira despacio también es peligroso?',
      options: [
        'Porque puede romperse y salir disparado en cualquier momento.',
        'Porque puede enrollar una manga, un guante o el cabello en segundos.',
        'Porque produce chispas que encienden la grasa de los rodamientos.'
      ],
      answer: 1
    },
    {
      q: '¿Dónde está el punto de atrapamiento en una transmisión de correa?',
      options: [
        'En el centro de la polea, donde está el eje.',
        'En la parte de la correa que se aleja de la polea.',
        'Donde la correa entra en la polea.'
      ],
      answer: 2
    },
    {
      q: '¿Cuándo se usan guantes cerca de partes que giran?',
      options: [
        'Nunca: se usan para manipular piezas con la máquina detenida.',
        'Siempre, para proteger las manos de la grasa y de los bordes de las piezas en movimiento.',
        'Solo si son guantes de cuero gruesos y largos.'
      ],
      answer: 0
    },
    {
      q: '¿Qué es una guarda móvil con enclavamiento?',
      options: [
        'Una guarda que se retira sin herramienta y que no tiene ningún efecto sobre el funcionamiento.',
        'Una puerta o tapa conectada a un interruptor que detiene la máquina o impide que arranque si se abre.',
        'Una guarda que se ajusta al tamaño de la pieza.'
      ],
      answer: 1
    },
    {
      q: 'Una guarda impide lubricar un punto de la máquina. ¿Cuál es la solución correcta?',
      options: [
        'Retirarla de forma permanente para lubricar sin perder tiempo.',
        'Lubricar con la máquina en marcha metiendo la mano por un lado de la guarda.',
        'Rediseñarla o instalar puntos de engrase extendidos fuera de la guarda.'
      ],
      answer: 2
    },
    {
      q: 'Un compañero puso un imán en el interruptor de enclavamiento de una puerta para que la máquina funcione abierta. ¿Qué se hace?',
      options: [
        'Se retira el imán, se reporta y se exige que el enclavamiento funcione.',
        'Se deja, porque así la producción es más rápida.',
        'Se deja solo durante el turno de la noche, cuando hay menos personal circulando cerca de la máquina.'
      ],
      answer: 0
    },
    {
      q: 'Antes de cambiar una cadena tensionada, ¿qué energía residual se debe controlar?',
      options: [
        'La energía de la luz de la planta.',
        'La tensión de la cadena, que puede golpear al soltarla.',
        'Ninguna, porque el motor ya está apagado y desconectado del tablero principal.'
      ],
      answer: 1
    },
    {
      q: '¿Por qué no se usa aire comprimido para limpiar la ropa o el cuerpo?',
      options: [
        'Porque gasta mucha energía y aumenta el costo del aire comprimido de toda la planta.',
        'Porque daña la tela de la ropa de trabajo con el tiempo.',
        'Porque puede introducir aire o partículas en la piel, los ojos o los oídos.'
      ],
      answer: 2
    },
    {
      q: 'Al usar una llave para aflojar un perno duro, ¿qué técnica es más segura?',
      options: [
        'Halar la llave hacia uno, con el cuerpo bien apoyado.',
        'Empujar la llave con todo el peso del cuerpo hacia adelante.',
        'Golpear la llave con un martillo.'
      ],
      answer: 0
    },
    {
      q: '¿Qué se hace con un cincel que tiene la cabeza deformada en forma de hongo?',
      options: [
        'Se sigue usando, porque la cabeza ancha es más fácil de golpear.',
        'Se esmerila la cabeza, porque al golpearla puede desprender fragmentos.',
        'Se envuelve con cinta para amortiguar los golpes.'
      ],
      answer: 1
    },
    {
      q: '¿Cómo se aprietan los pernos de una tapa con varios pernos?',
      options: [
        'Uno por uno, apretando cada perno al máximo antes de pasar al siguiente.',
        'Solo los de las esquinas, porque los demás no soportan carga.',
        'En secuencia en estrella, en varias pasadas, con el torque del fabricante.'
      ],
      answer: 2
    },
    {
      q: '¿Qué problema causa el exceso de grasa en un rodamiento?',
      options: [
        'Puede recalentarlo.',
        'Ninguno: más grasa siempre protege mejor y alarga la vida del rodamiento.',
        'Hace que gire más rápido.'
      ],
      answer: 0
    },
    {
      q: '¿Cómo se calienta un rodamiento para montarlo?',
      options: [
        'Con un soplete directo sobre la pista del rodamiento, hasta que cambie de color.',
        'Con un calentador de inducción o un baño de aceite controlado.',
        'Golpeándolo para que la fricción lo caliente.'
      ],
      answer: 1
    },
    {
      q: 'Al bajar un motor con un polipasto, ¿cómo se orienta la carga?',
      options: [
        'Con las manos debajo del motor para acomodarlo.',
        'Empujándolo con el pie mientras baja.',
        'Con cuerdas guía o barras, sin poner el cuerpo debajo.'
      ],
      answer: 2
    },
    {
      q: '¿Cuál de estos puntos es parte de la entrega segura de un equipo después de una reparación?',
      options: [
        'Contar las herramientas para verificar que ninguna quedó dentro del equipo.',
        'Arrancar el equipo con la guarda retirada para verificar el ajuste de la correa.',
        'Dejar el candado de bloqueo puesto para que el operador lo retire.'
      ],
      answer: 0
    }
  ]
};
