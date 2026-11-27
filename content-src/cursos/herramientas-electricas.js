/**
 * Curso: Manejo Seguro de Herramientas Eléctricas Portátiles. Versión completa.
 * Normativa: Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979, RETIE (Res. 40117 de 2024),
 * Res. 1792 de 1990 (valores límite de ruido). Referencias: manuales de los fabricantes, ISO 5349 (vibración).
 */
export default {
  id: 'herramientas-electricas',
  title: 'Manejo Seguro de Herramientas Eléctricas Portátiles',
  hours: 1.5,
  category: 'prevencion_sst',
  regulation: 'Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979, RETIE (Res. 40117 de 2024), Res. 1792 de 1990',
  legalNotice:
    'Formación teórica para usuarios de herramientas eléctricas portátiles. No reemplaza el manual del fabricante de cada herramienta ni el entrenamiento práctico supervisado en el puesto.',
  summary:
    'Los riesgos de las herramientas portátiles, la inspección antes de usarlas, el uso seguro de pulidoras, taladros y sierras, la protección eléctrica, el control del ruido, la vibración y el polvo, y el mantenimiento.',
  fieldCase:
    'Un operario retiró la guarda de una pulidora de 4,5 pulgadas para montar un disco de 7 pulgadas, que tenía una velocidad máxima menor que la de la herramienta. Al encenderla, el disco estalló por la fuerza centrífuga y un fragmento le causó una herida profunda en el muslo.',
  failureAnalysis:
    'Falla raíz: se retiró la guarda y se montó un disco incompatible en tamaño y en velocidad máxima con la herramienta.',
  checklist: [
    'Inspeccioné carcasa, cable, clavija, interruptor, guarda y mango auxiliar.',
    'El disco o la broca es del tamaño y tipo correctos, y su velocidad máxima es igual o mayor que la de la herramienta.',
    'La guarda está puesta y bien orientada.',
    'La pieza está sujeta con prensa o mordaza, no con la mano.',
    'Uso gafas y careta facial, protección auditiva y, si hay polvo, protección respiratoria.',
    'No uso ropa suelta, joyas ni cabello largo suelto cerca de partes que giran.',
    'Desconecto la herramienta antes de cambiar accesorios o hacer ajustes.',
    'Si la herramienta falla, la marco como fuera de servicio y la reporto.'
  ],
  onSiteClosure:
    'Práctica en su empresa: hacer la inspección preoperacional de una pulidora y de un taladro con la lista de la empresa, verificar la compatibilidad del disco con la herramienta y practicar, bajo supervisión, el montaje del disco y la sujeción de la pieza.',

  modules: [
    {
      title: 'Los riesgos de las herramientas portátiles',
      content: `
        <p>Las herramientas eléctricas portátiles (pulidoras o amoladoras, taladros, sierras circulares, caladoras, rotomartillos, lijadoras) están en casi todas las empresas. Precisamente porque son tan comunes, se subestiman.</p>
        <p><strong>Riesgos mecánicos:</strong></p>
        <ul>
          <li><strong>Cortes y laceraciones</strong> por contacto con discos, cuchillas y brocas.</li>
          <li><strong>Proyección de partículas</strong>: esquirlas de metal, chispas, fragmentos de discos que estallan.</li>
          <li><strong>Retroceso</strong> (en inglés, <em>kickback</em>): cuando el disco o la hoja se traba, la herramienta salta con violencia hacia el operario.</li>
          <li><strong>Atrapamiento</strong>: guantes, mangas, cabello o joyas enredados en brocas y ejes que giran.</li>
        </ul>
        <p><strong>Riesgos eléctricos:</strong> choque por cables dañados, herramientas mojadas o mal conectadas a tierra (ver el curso de riesgo eléctrico).</p>
        <p><strong>Riesgos para la salud a largo plazo:</strong></p>
        <ul>
          <li><strong>Ruido</strong>: pulidoras, rotomartillos y sierras superan con facilidad los niveles que dañan el oído.</li>
          <li><strong>Vibración</strong>: el uso prolongado puede causar el síndrome de vibración mano-brazo: dedos blancos, adormecimiento y pérdida de fuerza.</li>
          <li><strong>Polvo</strong>: al cortar o pulir concreto, ladrillo, piedra o mortero se libera <strong>sílice cristalina</strong>, que causa silicosis, una enfermedad pulmonar irreversible.</li>
          <li><strong>Posturas</strong> y esfuerzos en hombros, muñecas y espalda.</li>
        </ul>
        <p><strong>Riesgo de incendio</strong>: las chispas de la pulidora son un trabajo en caliente. Fuera del taller requieren permiso y vigía.</p>
        <p><strong>Por qué ocurren los accidentes:</strong> casi siempre por quitar una protección para trabajar "más cómodo", usar un accesorio que no corresponde, no sujetar la pieza, trabajar con prisa o usar una herramienta dañada. El caso con que empieza este curso reúne dos de estos errores.</p>
      `,
      keyPoints: [
        'Riesgos mecánicos: cortes, proyecciones, retroceso y atrapamiento.',
        'A largo plazo: ruido, vibración (síndrome mano-brazo) y polvo de sílice (silicosis).',
        'Las chispas de la pulidora son trabajo en caliente fuera del taller.'
      ]
    },
    {
      title: 'Marco normativo y responsabilidades',
      content: `
        <p><strong>En Colombia:</strong></p>
        <ul>
          <li>El <strong>Decreto 1072 de 2015</strong> obliga a la empresa a identificar los peligros, evaluar los riesgos y aplicar controles, y a los trabajadores a cumplir los procedimientos y reportar las condiciones peligrosas.</li>
          <li>La <strong>Resolución 0312 de 2019</strong> incluye entre los estándares mínimos el mantenimiento periódico de instalaciones, equipos, máquinas y herramientas, y las inspecciones.</li>
          <li>La <strong>Resolución 2400 de 1979</strong> (Estatuto de Seguridad Industrial) contiene disposiciones sobre herramientas manuales y portátiles, sus protecciones y su mantenimiento.</li>
          <li>El <strong>RETIE</strong> (Resolución 40117 de 2024) fija requisitos para los equipos eléctricos y las instalaciones a las que se conectan, como la puesta a tierra y la protección diferencial en ciertos circuitos.</li>
          <li>La <strong>Resolución 1792 de 1990</strong> establece los valores límite permisibles de exposición al ruido en el trabajo: 85 decibeles (dBA) para una jornada de 8 horas.</li>
        </ul>
        <p><strong>El manual del fabricante</strong> es parte del procedimiento. Indica los accesorios permitidos, la velocidad máxima, las protecciones que no se deben retirar y el mantenimiento. Lo que el fabricante prohíbe, la empresa también lo prohíbe.</p>
        <p><strong>Responsabilidades de la empresa:</strong> comprar herramientas adecuadas para cada tarea y con sus protecciones; mantenerlas; dar los elementos de protección; capacitar; y tener un sistema para retirar de servicio las herramientas dañadas.</p>
        <p><strong>Responsabilidades del trabajador:</strong> usar la herramienta correcta para la tarea; inspeccionarla antes de usarla; no retirar ni anular protecciones; usar los elementos de protección; no modificar la herramienta; y reportar los daños.</p>
        <p><strong>Herramientas propias y de contratistas.</strong> Las herramientas que traen los contratistas o los trabajadores también deben cumplir estos requisitos y pasar por la inspección antes de usarse en la planta.</p>
      `,
      keyPoints: [
        'Decreto 1072 de 2015 y Res. 0312 de 2019: controles, mantenimiento e inspecciones; RETIE para la parte eléctrica.',
        'La Res. 1792 de 1990 fija 85 dBA para 8 horas como límite de ruido.',
        'El manual del fabricante es parte del procedimiento: lo que prohíbe, la empresa también lo prohíbe.'
      ]
    },
    {
      title: 'Inspección antes de usar la herramienta',
      content: `
        <p>Una inspección de un minuto antes de usar la herramienta evita la mayoría de los accidentes por fallas del equipo.</p>
        <p><strong>Lista de inspección básica:</strong></p>
        <ul>
          <li><strong>Carcasa</strong>: sin grietas, golpes ni piezas sueltas. Una carcasa rota puede dejar expuestas partes eléctricas.</li>
          <li><strong>Cable</strong>: sin cortes, aplastamientos, partes peladas ni empalmes. El cable entra firme en la herramienta, con su protector de salida en buen estado.</li>
          <li><strong>Clavija</strong>: completa, sin patas dobladas ni quemadas; con la pata de tierra si la herramienta la trae.</li>
          <li><strong>Interruptor</strong>: enciende y apaga bien, y vuelve a apagado al soltarlo. Un interruptor que se queda pegado es causa de accidentes graves.</li>
          <li><strong>Guarda</strong>: presente, completa, bien fija y en la posición correcta.</li>
          <li><strong>Mango auxiliar</strong> (en pulidoras y taladros grandes): presente y bien apretado.</li>
          <li><strong>Accesorio</strong> (disco, broca, hoja): adecuado, en buen estado y bien montado.</li>
          <li><strong>Herramientas inalámbricas</strong>: batería sin golpes, hinchazón ni calentamiento anormal, y bien encajada.</li>
        </ul>
        <p><strong>Prueba en vacío.</strong> Al encender, con el accesorio orientado lejos de las personas, escuche: ruidos anormales, vibración excesiva u olor a quemado son señales para detenerse.</p>
        <p><strong>Si algo falla:</strong> no use la herramienta, márquela con una tarjeta de "fuera de servicio", sepárela y repórtela. No intente repararla usted mismo ni la deje en la caja para que otro la use.</p>
        <p><strong>Inspección periódica.</strong> Además de la revisión diaria del usuario, la empresa debe hacer una inspección más completa con una frecuencia definida, por ejemplo mensual, y marcar las herramientas inspeccionadas con un código o color del periodo.</p>
      `,
      keyPoints: [
        'Revisar carcasa, cable, clavija, interruptor, guarda, mango auxiliar, accesorio y batería.',
        'Prueba en vacío apuntando lejos de las personas: ruidos, vibración u olor anormal son señal para detenerse.',
        'Herramienta dañada: tarjeta de fuera de servicio, separarla y reportarla; nunca dejarla para otro.'
      ]
    },
    {
      title: 'Pulidoras o amoladoras: la herramienta más peligrosa del taller',
      content: `
        <p>La pulidora gira a miles de revoluciones por minuto. A esa velocidad, un disco que se rompe se convierte en un proyectil.</p>
        <p><strong>El disco correcto:</strong></p>
        <ul>
          <li><strong>Diámetro</strong> igual al que indica la herramienta. Nunca se monta un disco más grande que el previsto, y nunca se retira la guarda para que "quepa".</li>
          <li><strong>Velocidad máxima del disco</strong> (impresa en el disco, en RPM o en metros por segundo) <strong>igual o mayor</strong> que la velocidad de la herramienta. Un disco con velocidad máxima menor puede estallar, como en el caso del curso.</li>
          <li><strong>Tipo</strong> según la tarea: disco de corte (delgado) solo para cortar, nunca para desbastar con la cara; disco de desbaste para desbastar; discos específicos para concreto, metal o acero inoxidable.</li>
          <li><strong>Estado</strong>: sin grietas, golpes, humedad ni desgaste irregular. Muchos discos abrasivos tienen <strong>fecha de vencimiento</strong> impresa: no se usan vencidos.</li>
          <li>Montado con las bridas correctas y apretado con la llave del fabricante.</li>
        </ul>
        <p><strong>Uso seguro:</strong></p>
        <ul>
          <li><strong>La guarda siempre puesta</strong>, orientada para que las chispas y fragmentos vayan lejos del cuerpo.</li>
          <li>El <strong>mango auxiliar</strong> instalado y las dos manos en la herramienta.</li>
          <li>Después de montar un disco nuevo, dejarla girar en vacío alrededor de un minuto, apuntando a un lugar seguro, antes de trabajar.</li>
          <li>Nadie en la línea de giro del disco.</li>
          <li>La pieza sujeta con prensa o mordaza.</li>
          <li>No forzar el disco ni torcerlo dentro del corte: es la causa principal del retroceso y de la rotura.</li>
          <li>No bloquear el interruptor en posición de encendido cuando el modelo lo permite, salvo que el procedimiento lo autorice.</li>
          <li>Esperar a que el disco se detenga por completo antes de soltar la herramienta. Nunca apoyarla en el piso o en las piernas mientras gira.</li>
          <li>Desconectarla antes de cambiar el disco.</li>
        </ul>
        <p><strong>Las chispas</strong> deben dirigirse lejos de las personas, de los combustibles y de los cilindros de gas.</p>
      `,
      keyPoints: [
        'El disco: diámetro correcto, velocidad máxima igual o mayor que la de la herramienta, tipo adecuado y sin vencer.',
        'Guarda siempre puesta, mango auxiliar, dos manos, pieza sujeta y nadie en la línea de giro.',
        'Prueba de un minuto en vacío con disco nuevo; esperar que se detenga antes de soltarla.'
      ]
    },
    {
      title: 'Taladros, rotomartillos y sierras',
      content: `
        <p><strong>Taladros y rotomartillos:</strong></p>
        <ul>
          <li>Usar la broca adecuada para el material (metal, madera, concreto) y en buen estado.</li>
          <li>Retirar la llave del mandril antes de encender: si queda puesta, sale disparada.</li>
          <li><strong>Sujetar la pieza</strong> con prensa o mordaza. Cuando la broca se traba en una pieza pequeña sostenida con la mano, la pieza gira con la broca y corta la mano.</li>
          <li>Usar el mango auxiliar en taladros potentes: al trabarse la broca, la herramienta puede girar con fuerza y lesionar la muñeca.</li>
          <li>Antes de perforar paredes, pisos o techos, verificar que no haya tuberías de gas, de agua ni cables eléctricos ocultos.</li>
          <li>No usar guantes holgados, mangas sueltas ni joyas cerca de la broca: se enredan.</li>
        </ul>
        <p><strong>Sierras circulares portátiles:</strong></p>
        <ul>
          <li>La <strong>guarda inferior móvil</strong> debe moverse libremente y cerrarse sola al terminar el corte. Nunca se amarra abierta.</li>
          <li>Ajustar la profundidad de corte para que la hoja sobresalga apenas por debajo de la pieza.</li>
          <li>Apoyar bien la pieza y cortar con la pieza firme; nunca sostener con la mano la parte que se va a cortar.</li>
          <li>Pararse a un lado de la línea de corte, no detrás de la sierra: si se produce un retroceso, la sierra salta hacia atrás.</li>
          <li>Usar la cuchilla divisora o separadora cuando la sierra la trae, para evitar que el corte se cierre y trabe la hoja.</li>
          <li>Esperar a que la hoja se detenga antes de levantar la sierra de la pieza.</li>
        </ul>
        <p><strong>Caladoras y sierras de sable:</strong> hoja adecuada al material, base apoyada contra la pieza, y cuidado con lo que hay detrás o debajo de la pieza que se corta.</p>
        <p><strong>Regla común a todas:</strong> la herramienta se desconecta (o se retira la batería) antes de cambiar brocas, hojas o discos, y antes de cualquier ajuste o limpieza.</p>
      `,
      keyPoints: [
        'Taladro: retirar la llave del mandril, sujetar la pieza y verificar que no haya tuberías ni cables ocultos.',
        'Sierra circular: guarda inferior libre, profundidad ajustada y el cuerpo a un lado de la línea de corte.',
        'Desconectar o retirar la batería antes de cambiar accesorios o hacer ajustes.'
      ]
    },
    {
      title: 'Protección eléctrica y herramientas inalámbricas',
      content: `
        <p><strong>Doble aislamiento.</strong> Muchas herramientas modernas tienen <strong>doble aislamiento</strong>, identificado con el símbolo de un cuadrado dentro de otro cuadrado. Tienen dos capas de aislamiento entre las partes eléctricas y la carcasa, y no necesitan pata de tierra. Las herramientas con carcasa metálica sin doble aislamiento sí necesitan clavija con <strong>polo a tierra</strong> y tomacorriente con tierra.</p>
        <p><strong>Protección diferencial.</strong> En zonas húmedas, exteriores, obras y lugares con mucha estructura metálica, las herramientas se conectan a circuitos con <strong>interruptor diferencial</strong> (protección de falla a tierra), que corta la corriente si detecta una fuga a través de una persona. Si no hay uno fijo, existen extensiones y adaptadores portátiles con esta protección.</p>
        <p><strong>Extensiones:</strong> de uso industrial, calibre adecuado, con polo a tierra, sin empalmes, desenrolladas con cargas altas y protegidas del tránsito y del agua.</p>
        <p><strong>Reglas eléctricas de uso:</strong></p>
        <ul>
          <li>No usar herramientas con cable bajo la lluvia ni con las manos o los pies mojados.</li>
          <li>No cargar la herramienta del cable ni desconectarla tirando del cable.</li>
          <li>Mantener el cable lejos del disco o la hoja, del calor, del aceite y de los bordes cortantes.</li>
          <li>En atmósferas con gases, vapores o polvos inflamables, solo se usan herramientas certificadas para esas áreas, con permiso de trabajo.</li>
        </ul>
        <p><strong>Herramientas inalámbricas.</strong> Eliminan el riesgo del cable, pero tienen sus propios cuidados:</p>
        <ul>
          <li>Las baterías de ion de litio pueden incendiarse si se golpean, se perforan, se mojan o se cargan con un cargador que no es el original.</li>
          <li>Cargar en un lugar ventilado, sobre una superficie no combustible y sin dejarlas cargando sin supervisión durante la noche, según la política de la empresa.</li>
          <li>Retirar de servicio las baterías hinchadas, golpeadas o que se calientan de forma anormal.</li>
          <li><strong>Retirar la batería</strong> antes de cambiar accesorios: una herramienta inalámbrica sin cable puede encenderse igual.</li>
        </ul>
      `,
      keyPoints: [
        'Doble aislamiento (cuadrado dentro de cuadrado) o polo a tierra; en zonas húmedas, protección diferencial.',
        'Nunca con lluvia o manos mojadas, ni cargar o desconectar tirando del cable.',
        'Baterías de litio: cargador original, sin golpes ni humedad, y retirarlas antes de cambiar accesorios.'
      ]
    },
    {
      title: 'Ruido, vibración, polvo y elementos de protección',
      content: `
        <p><strong>Ruido.</strong> Una pulidora o un rotomartillo producen niveles de ruido que, sin protección, causan pérdida auditiva permanente con el tiempo. Esa pérdida no se recupera. Use <strong>protección auditiva</strong> (tapones o copas) siempre que trabaje con estas herramientas, y también si trabaja cerca de quien las usa. Una señal práctica: si tiene que gritar para que lo escuche alguien a un metro, el ruido es peligroso.</p>
        <p><strong>Vibración.</strong> El uso prolongado de herramientas que vibran puede dañar los vasos sanguíneos y los nervios de las manos (síndrome de vibración mano-brazo): dedos que se ponen blancos con el frío, hormigueo, pérdida de sensibilidad y de fuerza. Para prevenirlo:</p>
        <ul>
          <li>usar herramientas con sistemas antivibración y en buen estado (los discos y las brocas gastadas vibran más);</li>
          <li>no apretar la herramienta más de lo necesario;</li>
          <li>hacer pausas y rotar tareas;</li>
          <li>mantener las manos calientes y secas;</li>
          <li>informar al médico de síntomas en los dedos.</li>
        </ul>
        <p><strong>Polvo de sílice.</strong> Cortar o pulir concreto, ladrillo, baldosa o piedra libera sílice cristalina respirable, que causa <strong>silicosis</strong>, una enfermedad pulmonar grave e irreversible, y aumenta el riesgo de cáncer de pulmón. Controles: cortar en húmedo (herramientas con suministro de agua), usar herramientas con aspiración de polvo, trabajar en lugares ventilados y usar protección respiratoria para partículas adecuada. Barrer en seco esparce el polvo; se aspira o se humedece.</p>
        <p><strong>Elementos de protección según la herramienta:</strong></p>
        <ul>
          <li><strong>Gafas de seguridad</strong> siempre; con pulidora, además, <strong>careta facial</strong>.</li>
          <li><strong>Protección auditiva</strong>.</li>
          <li><strong>Guantes</strong> que protejan del corte y de las chispas para manipular piezas y pulidoras, pero <strong>no guantes holgados</strong> cerca de brocas y ejes que giran.</li>
          <li><strong>Ropa ajustada</strong>, sin bufandas, cordones ni joyas; cabello largo recogido.</li>
          <li><strong>Calzado de seguridad</strong>.</li>
          <li><strong>Protección respiratoria</strong> cuando hay polvo.</li>
        </ul>
      `,
      keyPoints: [
        'Protección auditiva con pulidoras y rotomartillos: la pérdida auditiva no se recupera.',
        'Vibración: herramientas antivibración, accesorios en buen estado, pausas y manos calientes.',
        'Polvo de sílice: cortar en húmedo o con aspiración y usar protección respiratoria; nada de barrer en seco.'
      ]
    },
    {
      title: 'Mantenimiento, almacenamiento y reporte',
      content: `
        <p><strong>Mantenimiento.</strong> Las herramientas se mantienen según el manual del fabricante:</p>
        <ul>
          <li>Limpieza de las ranuras de ventilación para que el motor no se recaliente.</li>
          <li>Cambio de escobillas, cables, interruptores y rodamientos <strong>solo por personal de mantenimiento calificado</strong>, con repuestos originales o equivalentes.</li>
          <li>Verificación de la continuidad de la tierra y del aislamiento en las inspecciones periódicas.</li>
          <li>Registro de las intervenciones en la hoja de vida de la herramienta.</li>
        </ul>
        <p><strong>Lo que nunca se hace:</strong></p>
        <ul>
          <li>Modificar la herramienta: cambiar la guarda por otra "que estorbe menos", adaptar accesorios de otra marca o de otro tamaño, eliminar el mango auxiliar.</li>
          <li>Reparar el cable con cinta.</li>
          <li>Usar una herramienta para una tarea para la que no fue diseñada (por ejemplo, un taladro como mezclador de pintura sin el accesorio indicado, o una pulidora sin guarda como lijadora).</li>
        </ul>
        <p><strong>Almacenamiento:</strong></p>
        <ul>
          <li>En un lugar seco, limpio y bajo llave, en su estuche o en un estante.</li>
          <li>Desconectadas y con el cable enrollado sin dobleces fuertes.</li>
          <li>Los discos y las brocas en su empaque, protegidos de la humedad y de los golpes. Los discos abrasivos se guardan planos o según indique el fabricante.</li>
          <li>Las baterías separadas de objetos metálicos que puedan causar un cortocircuito.</li>
        </ul>
        <p><strong>Préstamo y control.</strong> Un sistema de préstamo (quién la tiene, cuándo la devuelve, en qué estado) ayuda a detectar herramientas dañadas y a evitar que circulen herramientas personales sin inspección.</p>
        <p><strong>Reportar es prevenir.</strong> Un disco que vibra, un interruptor que se pega, un cosquilleo al tocar la carcasa o un retroceso que casi causa un accidente se reportan. Son avisos de que el próximo uso puede terminar en una lesión.</p>
      `,
      keyPoints: [
        'Mantenimiento según el fabricante y solo por personal calificado; registrar en la hoja de vida.',
        'Nunca modificar la herramienta, reparar el cable con cinta ni usarla para lo que no fue diseñada.',
        'Almacenar seco, limpio y desconectado; los cuasi accidentes también se reportan.'
      ]
    }
  ],

  practices: [
    { q: '¿Qué es el retroceso (kickback) en una herramienta portátil?', options: ['Cuando la herramienta se apaga sola por sobrecarga', 'Cuando el disco o la hoja se traba y la herramienta salta hacia el operario', 'Cuando el cable se enreda en la pieza'], answer: 1 },
    { q: 'Según la Res. 1792 de 1990, ¿cuál es el límite de ruido para una jornada de 8 horas?', options: ['85 dBA', '120 dBA', '60 dBA'], answer: 0 },
    { q: 'Durante la inspección, el interruptor de la pulidora se queda pegado en encendido. ¿Qué haces?', options: ['La uso con cuidado y la apago desde el enchufe', 'La golpeo para soltar el interruptor', 'La marco como fuera de servicio y la reporto'], answer: 2 },
    { q: 'La velocidad máxima impresa en un disco es menor que la velocidad de la pulidora. ¿Qué haces?', options: ['No lo monto: el disco puede estallar', 'Lo monto y trabajo con menos presión', 'Lo monto si es de buena marca'], answer: 0 },
    { q: '¿Qué se hace antes de perforar una pared con un taladro?', options: ['Mojar la pared para reducir el polvo', 'Verificar que no haya tuberías ni cables ocultos', 'Quitar el mango auxiliar para tener más control'], answer: 1 },
    { q: '¿Qué indica el símbolo de un cuadrado dentro de otro cuadrado en una herramienta?', options: ['Que es resistente al agua', 'Que es una herramienta inalámbrica', 'Que tiene doble aislamiento'], answer: 2 },
    { q: '¿Cuál es un control eficaz para el polvo de sílice al cortar concreto?', options: ['Cortar en húmedo o con aspiración de polvo', 'Barrer el polvo en seco al final del día', 'Usar un tapabocas de tela'], answer: 0 },
    { q: 'El cable de un taladro tiene un corte pequeño. ¿Qué se hace?', options: ['Se repara con cinta aislante', 'Se retira de servicio para que mantenimiento lo cambie', 'Se usa solo en trabajos cortos'], answer: 1 }
  ],

  scenarios: [
    {
      scenario:
        'Necesitas cortar un perfil con pulidora en un espacio estrecho y la guarda estorba. Un compañero dice que "la retiras un momento y la pones después".',
      options: [
        { text: 'La retiro solo para este corte y la vuelvo a poner.', correct: false, feedback: 'Decisión insegura. Sin guarda, un disco que se rompe te alcanza directamente.' },
        { text: 'Busco otra forma de hacer el corte: reubicar la pieza, usar una herramienta más pequeña con su guarda o un método distinto.', correct: true, feedback: 'Decisión correcta. La guarda no se retira; se cambia el método o la herramienta.' },
        { text: 'Giro la guarda hacia el otro lado para que no estorbe, aunque las chispas vengan hacia mí.', correct: false, feedback: 'Decisión insegura. La guarda debe orientarse para proteger el cuerpo, no para dejarlo expuesto.' }
      ]
    },
    {
      scenario:
        'Solo hay discos de 7 pulgadas y la pulidora es de 4,5 pulgadas. La velocidad máxima del disco es menor que la de la herramienta. Un compañero sugiere quitar la guarda para que quepa.',
      options: [
        { text: 'Lo montamos con cuidado, trabajando despacio.', correct: false, feedback: 'Decisión insegura. Es exactamente lo que causó el accidente del caso del curso.' },
        { text: 'Lo montamos con la guarda, aunque quede apretado.', correct: false, feedback: 'Decisión insegura. El disco sigue siendo de un tamaño y una velocidad incompatibles.' },
        { text: 'No lo montamos. Conseguimos el disco del diámetro correcto y con velocidad máxima igual o mayor que la de la herramienta.', correct: true, feedback: 'Decisión correcta. Diámetro y velocidad deben coincidir con la herramienta.' }
      ]
    },
    {
      scenario:
        'Vas a trabajar con un taladro en una zona de lavado. El tomacorriente no tiene protección diferencial y la extensión tiene un empalme con cinta.',
      options: [
        { text: 'Uso una herramienta inalámbrica o pido un circuito o adaptador con protección diferencial y una extensión industrial sin empalmes.', correct: true, feedback: 'Decisión correcta. En zonas húmedas la protección diferencial y una extensión en buen estado son indispensables.' },
        { text: 'Trabajo con botas de caucho y sigo.', correct: false, feedback: 'Decisión insegura. Las botas no reemplazan la protección diferencial ni corrigen el empalme.' },
        { text: 'Tapo el empalme con más cinta y empiezo.', correct: false, feedback: 'Decisión insegura. Una extensión empalmada se reemplaza, no se refuerza con cinta.' }
      ]
    },
    {
      scenario:
        'Debes perforar una lámina pequeña con un taladro de banco portátil. Tu compañero propone sostenerla con la mano porque "es solo un hueco".',
      options: [
        { text: 'La sostengo con guantes gruesos para no cortarme.', correct: false, feedback: 'Decisión insegura. Si la broca se traba, la lámina gira y los guantes pueden enredarse.' },
        { text: 'La sujeto con una prensa o mordaza antes de perforar.', correct: true, feedback: 'Decisión correcta. La pieza sujeta no gira con la broca.' },
        { text: 'La sostengo con la mano y uso una velocidad alta para que termine rápido.', correct: false, feedback: 'Decisión insegura. La velocidad alta no evita que la broca se trabe.' }
      ]
    },
    {
      scenario:
        'Vas a cortar baldosas de cerámica con una pulidora durante toda la mañana en una cocina sin ventilación. No hay agua ni aspiración disponible.',
      options: [
        { text: 'Corto así y al final barro bien el polvo.', correct: false, feedback: 'Decisión insegura. El polvo de sílice causa silicosis y barrer en seco lo esparce.' },
        { text: 'Uso un tapabocas de tela y abro la puerta.', correct: false, feedback: 'Decisión insegura. El tapabocas de tela no filtra el polvo respirable de sílice.' },
        { text: 'Pido un método de corte en húmedo o con aspiración, hago el corte en un lugar ventilado y uso la protección respiratoria adecuada.', correct: true, feedback: 'Decisión correcta. Controlar el polvo en la fuente es lo más eficaz.' }
      ]
    }
  ],

  exam: [
    {
      q: '¿Qué enfermedad causa el polvo de sílice que se libera al cortar concreto o baldosas?',
      options: [
        'Silicosis, una enfermedad pulmonar irreversible.',
        'Fiebre de humos metálicos.',
        'Síndrome de vibración mano-brazo, por el uso prolongado de herramientas que vibran.'
      ],
      answer: 0
    },
    {
      q: '¿Qué síntoma es propio del síndrome de vibración mano-brazo?',
      options: [
        'Dolor de cabeza después de usar la herramienta.',
        'Dedos que se ponen blancos con el frío y pérdida de sensibilidad.',
        'Irritación de los ojos por las chispas.'
      ],
      answer: 1
    },
    {
      q: '¿Por qué el manual del fabricante es parte del procedimiento de trabajo?',
      options: [
        'Porque explica cómo pedir la garantía de la herramienta.',
        'Porque lo exige el almacén para entregar la herramienta.',
        'Porque indica los accesorios permitidos, la velocidad máxima y las protecciones que no se retiran.'
      ],
      answer: 2
    },
    {
      q: 'En la inspección, ¿qué indica que el interruptor de una herramienta está en buen estado?',
      options: [
        'Que vuelve a la posición de apagado al soltarlo.',
        'Que se queda encendido aunque se suelte, para no cansar el dedo.',
        'Que se enciende solo.'
      ],
      answer: 0
    },
    {
      q: 'Una herramienta presenta un olor a quemado durante la prueba en vacío. ¿Qué se hace?',
      options: [
        'Se deja funcionar unos minutos más para ver si el olor desaparece.',
        'Se detiene, se marca como fuera de servicio y se reporta.',
        'Se sigue usando.'
      ],
      answer: 1
    },
    {
      q: 'En una pulidora, ¿qué condición debe cumplir la velocidad máxima del disco?',
      options: [
        'Ser menor que la de la herramienta, para que el disco gire más despacio y dure más.',
        'Ser cualquier valor, porque la pulidora regula sola la velocidad según el disco.',
        'Ser igual o mayor que la velocidad de la herramienta.'
      ],
      answer: 2
    },
    {
      q: '¿Para qué se usa un disco de corte delgado?',
      options: [
        'Solo para cortar, nunca para desbastar con la cara.',
        'Para desbastar soldaduras con la cara del disco.',
        'Para cortar y desbastar, según lo que se necesite en el momento.'
      ],
      answer: 0
    },
    {
      q: 'Después de montar un disco nuevo en la pulidora, ¿qué se hace antes de trabajar?',
      options: [
        'Se golpea suavemente el disco contra la mesa para comprobar que está firme.',
        'Se deja girar en vacío alrededor de un minuto, apuntando a un lugar seguro.',
        'Se moja el disco para que corte mejor.'
      ],
      answer: 1
    },
    {
      q: '¿Qué se hace con la llave del mandril antes de encender un taladro?',
      options: [
        'Se deja puesta para cambiar la broca más rápido.',
        'Se amarra al cable del taladro para no perderla.',
        'Se retira, porque si queda puesta sale disparada.'
      ],
      answer: 2
    },
    {
      q: 'Al usar una sierra circular portátil, ¿dónde debe ubicarse el operario?',
      options: [
        'A un lado de la línea de corte, no detrás de la sierra.',
        'Justo detrás de la sierra, para empujarla con más fuerza.',
        'Frente a la sierra, para ver mejor la línea de corte.'
      ],
      answer: 0
    },
    {
      q: '¿Qué debe pasar con la guarda inferior móvil de una sierra circular al terminar el corte?',
      options: [
        'Debe quedar abierta y amarrada para facilitar el siguiente corte.',
        'Debe cerrarse sola y moverse libremente.',
        'Debe retirarse si estorba para ver la línea.'
      ],
      answer: 1
    },
    {
      q: '¿Qué herramienta no necesita clavija con polo a tierra?',
      options: [
        'Una herramienta con carcasa metálica sin doble aislamiento.',
        'Ninguna.',
        'Una herramienta con doble aislamiento.'
      ],
      answer: 2
    },
    {
      q: 'Al cambiar la broca de un taladro inalámbrico, ¿qué se hace primero?',
      options: [
        'Retirar la batería.',
        'Poner el selector en la velocidad más baja y cambiar la broca con la batería puesta.',
        'Nada, porque las herramientas inalámbricas no tienen riesgo eléctrico.'
      ],
      answer: 0
    },
    {
      q: '¿Qué guantes no deben usarse cerca de brocas y ejes que giran?',
      options: [
        'Ninguno: cualquier guante sirve con cualquier herramienta.',
        'Guantes holgados, que pueden enredarse.',
        'Guantes de nitrilo delgados y ajustados.'
      ],
      answer: 1
    },
    {
      q: '¿Qué protección facial se usa con una pulidora, además de las gafas de seguridad?',
      options: [
        'Una gorra con visera para proteger la frente de las chispas.',
        'Unas gafas de sol oscuras encima de las gafas de seguridad.',
        'Una careta facial.'
      ],
      answer: 2
    },
    {
      q: '¿Quién cambia las escobillas o el cable de una herramienta eléctrica?',
      options: [
        'Personal de mantenimiento calificado, con repuestos adecuados.',
        'Cualquier usuario con experiencia, siempre que desconecte la herramienta antes de abrirla.',
        'El almacenista que entrega la herramienta.'
      ],
      answer: 0
    }
  ]
};
