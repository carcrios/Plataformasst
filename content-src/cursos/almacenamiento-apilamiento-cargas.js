/**
 * Curso: Seguridad en Almacenamiento y Apilamiento de Cargas. Versión completa.
 * Normativa: Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979 (manejo y transporte de materiales).
 * Referencias: ANSI MH16.1 (estanterías industriales de acero), EN 15635 (uso y mantenimiento de estanterías,
 * clasificación de daños verde/ámbar/rojo), NFPA 13 (despeje bajo rociadores).
 */
export default {
  id: 'almacenamiento-apilamiento-cargas',
  title: 'Seguridad en Almacenamiento y Apilamiento de Cargas',
  hours: 1.5,
  category: 'prevencion_sst',
  regulation: 'Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979; referencias: ANSI MH16.1, EN 15635 y NFPA 13',
  legalNotice:
    'Formación teórica en almacenamiento seguro. La operación de montacargas requiere entrenamiento y autorización específicos de operador, que este curso no reemplaza.',
  summary:
    'Cómo organizar una bodega segura, usar estanterías dentro de su capacidad, inspeccionarlas y actuar ante daños, apilar en piso sin que la pila se caiga, convivir con montacargas, manipular cargas a mano sin lesionarse y almacenar productos especiales.',
  fieldCase:
    'Un montacargas golpeó el pie derecho de una estantería y lo dobló. Nadie lo reportó y se siguió cargando la estructura. Semanas después, al colocar otra estiba en el nivel superior, el pie cedió y la estantería colapsó sobre el pasillo.',
  failureAnalysis:
    'Falla raíz: el daño estructural no se reportó ni se retiró la carga, y no había inspecciones periódicas. La estantería tampoco tenía protectores en los pies del lado del pasillo de montacargas.',
  checklist: [
    'Cada estantería tiene su placa de capacidad visible y la carga no la supera.',
    'Los pies y largueros están rectos, completos, con sus pasadores de seguridad y anclados al piso.',
    'Reporto de inmediato cualquier golpe a una estantería y no la cargo hasta que la revisen.',
    'Las estibas están en buen estado y la carga no sobresale ni está inestable.',
    'Las pilas en piso respetan la altura máxima, están trabadas y sobre piso nivelado.',
    'Los pasillos peatonales están señalizados y libres, separados de la circulación de montacargas.',
    'Hay despeje bajo los rociadores y frente a extintores, tableros y salidas.',
    'Nunca subo por las estanterías ni me paro sobre las estibas.'
  ],
  onSiteClosure:
    'Práctica en su empresa: recorrer la bodega con la lista de inspección de estanterías de la empresa y marcar los daños como verde, ámbar o rojo; verificar placas de capacidad, pasadores y anclajes; revisar la altura y estabilidad de las pilas en piso; y comprobar la señalización de pasillos y el despeje bajo los rociadores.',

  modules: [
    {
      title: 'Riesgos de una bodega y principios del almacenamiento seguro',
      content: `
        <p>Una bodega parece un lugar tranquilo, pero concentra peso, altura y tráfico. Los accidentes más graves son <strong>colapsos de estanterías</strong>, <strong>caída de materiales desde los niveles altos</strong>, <strong>derrumbe de pilas</strong>, <strong>atropellamientos por montacargas</strong> y <strong>lesiones de espalda</strong> por manipulación manual.</p>
        <p><strong>Principios del almacenamiento seguro:</strong></p>
        <ul>
          <li><strong>Lo pesado abajo, lo liviano arriba.</strong> Baja el centro de gravedad de la estructura y reduce el riesgo si algo cae.</li>
          <li><strong>Lo que más se usa, a la altura de trabajo</strong> (entre las rodillas y los hombros), para reducir esfuerzos y alcances.</li>
          <li><strong>Cada cosa en su lugar asignado</strong>, con ubicaciones identificadas. El material "temporal" en los pasillos termina siendo permanente y obstruye.</li>
          <li><strong>Nunca superar la capacidad</strong> de estanterías, estibas y pisos.</li>
          <li><strong>Pasillos libres y señalizados</strong>, con anchos suficientes para personas y equipos.</li>
          <li><strong>Separar productos incompatibles</strong>: químicos que reaccionan entre sí, inflamables lejos de fuentes de calor.</li>
          <li><strong>Orden y aseo permanentes</strong>: zunchos, plásticos y estibas rotas fuera del piso.</li>
        </ul>
        <p><strong>Marco normativo.</strong> El <strong>Decreto 1072 de 2015</strong> y la <strong>Resolución 0312 de 2019</strong> obligan a identificar estos peligros en la matriz de riesgos y a controlarlos con procedimientos, inspecciones y capacitación. La <strong>Resolución 2400 de 1979</strong> contiene disposiciones sobre el manejo, transporte y almacenamiento de materiales, y sobre el levantamiento manual de cargas. Como referencias técnicas se usan la norma <strong>ANSI MH16.1</strong> (diseño y uso de estanterías industriales de acero), la <strong>EN 15635</strong> (uso, inspección y mantenimiento de estanterías) y la <strong>NFPA 13</strong> (rociadores contra incendio).</p>
        <p><strong>Su papel.</strong> La mayoría de los colapsos empiezan con algo pequeño que alguien vio y no reportó: un golpe, un pasador faltante, una estiba rota, una carga mal puesta. Cada trabajador de bodega es un inspector.</p>
      `,
      keyPoints: [
        'Riesgos: colapso de estanterías, caída de materiales, derrumbe de pilas, atropellamiento y lesiones de espalda.',
        'Lo pesado abajo, lo de uso frecuente a la altura de trabajo, nunca superar capacidades y pasillos libres.',
        'Cada trabajador reporta golpes, faltantes y cargas mal puestas: los colapsos empiezan con algo pequeño.'
      ]
    },
    {
      title: 'Estanterías: partes, tipos y capacidad',
      content: `
        <p><strong>Partes de una estantería de estibas (rack selectivo):</strong></p>
        <ul>
          <li><strong>Marcos o bastidores</strong>: dos <strong>pies o parales</strong> verticales unidos por <strong>diagonales y horizontales</strong>. Los pies llevan una <strong>placa base</strong> anclada al piso.</li>
          <li><strong>Largueros o vigas</strong>: las barras horizontales donde se apoyan las estibas. Se enganchan a los pies con conectores y se aseguran con <strong>pasadores o seguros</strong> para que no se suelten con un golpe hacia arriba.</li>
          <li><strong>Accesorios</strong>: mallas o tableros de nivel, travesaños de apoyo, topes traseros, protectores de pies y de esquinas, mallas anticaída en la parte posterior.</li>
        </ul>
        <p><strong>Tipos frecuentes:</strong> selectivo (acceso a cada estiba), de doble profundidad, drive-in (el montacargas entra en la estructura), dinámico (con rodillos), cantiléver (para tubos y perfiles largos) y estanterías de carga liviana para cajas y piezas manuales.</p>
        <p><strong>La capacidad.</strong> Cada estantería tiene una capacidad de diseño calculada por el fabricante, que depende de la altura entre niveles, del largo de los largueros y del tipo de pie. Debe estar en una <strong>placa de capacidad visible</strong>, que indique:</p>
        <ul>
          <li>la carga máxima por nivel (o por par de largueros);</li>
          <li>la carga máxima por módulo o marco;</li>
          <li>la configuración de niveles con la que se calculó.</li>
        </ul>
        <p><strong>Lo que cambia la capacidad:</strong></p>
        <ul>
          <li><strong>Mover los niveles.</strong> Subir el primer larguero o quitar un nivel aumenta la distancia libre del pie y <strong>reduce</strong> la capacidad del marco. Cualquier cambio de configuración debe aprobarlo el fabricante o un ingeniero.</li>
          <li><strong>Cargas mal distribuidas.</strong> La capacidad supone la carga repartida sobre los dos largueros. Una carga concentrada en el centro de un larguero o apoyada en uno solo lo sobrecarga.</li>
          <li><strong>Daños</strong> en pies, largueros o diagonales (módulo siguiente).</li>
          <li><strong>Mezclar piezas</strong> de distintos fabricantes o modelos.</li>
        </ul>
        <p><strong>Anclaje.</strong> Los pies se anclan al piso según el diseño. Una estantería sin anclar puede desplazarse con un golpe del montacargas o volcarse si se carga de un solo lado.</p>
      `,
      keyPoints: [
        'Partes: marcos (pies, diagonales, placa base anclada), largueros con pasadores de seguridad y accesorios.',
        'La placa de capacidad indica carga por nivel y por módulo; no se supera.',
        'Mover niveles, cargas concentradas, daños o piezas mezcladas reducen la capacidad.'
      ]
    },
    {
      title: 'Uso correcto de las estanterías',
      content: `
        <p><strong>Al cargar una estantería:</strong></p>
        <ul>
          <li>Verificar que el peso de la estiba (producto más estiba) no supere la capacidad del nivel.</li>
          <li>Apoyar la estiba <strong>centrada y sobre los dos largueros</strong>, con el apoyo completo de sus bases. Las estibas deben sobresalir lo mismo por delante y por detrás, según el diseño.</li>
          <li>Colocar la estiba en el sentido correcto: los patines deben quedar perpendiculares a los largueros para repartir la carga.</li>
          <li>Usar solo <strong>estibas en buen estado</strong>: sin tablas rotas, clavos salidos ni bloques partidos.</li>
          <li>Que la carga en la estiba esté <strong>estable, amarrada o con película</strong>, y sin sobresalir de los bordes.</li>
          <li>Respetar el <strong>espacio libre</strong> entre la carga y el larguero superior para poder subirla y bajarla sin golpear.</li>
        </ul>
        <p><strong>Lo que nunca se hace:</strong></p>
        <ul>
          <li><strong>Subir por las estanterías</strong> o pararse sobre los largueros o las estibas. Para alcanzar niveles altos se usan escaleras móviles con plataforma o equipos diseñados para elevar personas.</li>
          <li>Elevar personas en las uñas del montacargas o en una estiba.</li>
          <li>Empujar una estiba contra la siguiente para "hacer espacio": puede caer por la parte posterior.</li>
          <li>Colocar cargas en la parte superior de la estantería sin un nivel diseñado para ello.</li>
          <li>Quitar pasadores, diagonales o protectores porque estorban.</li>
          <li>Soldar, perforar o modificar la estructura.</li>
        </ul>
        <p><strong>Estanterías de carga manual</strong> (cajas, repuestos, insumos): las mismas reglas aplican a menor escala. Las cajas pesadas van en los niveles bajos; las estanterías altas se fijan a la pared o al piso para que no se vuelquen; y nunca se usa un nivel como escalón.</p>
        <p><strong>Mallas y topes.</strong> Cuando hay un pasillo peatonal detrás de una estantería, se instalan mallas o topes posteriores para que una carga empujada no caiga sobre las personas.</p>
      `,
      keyPoints: [
        'Estiba centrada sobre los dos largueros, en buen estado, con carga estable y sin superar la capacidad.',
        'Nunca subir por las estanterías ni elevar personas en estibas o uñas del montacargas.',
        'No retirar pasadores ni modificar la estructura; mallas o topes donde hay paso detrás.'
      ]
    },
    {
      title: 'Inspección de estanterías y qué hacer ante un daño',
      content: `
        <p><strong>Tres niveles de inspección</strong> (criterio de la norma EN 15635, usado también en Colombia como buena práctica):</p>
        <ul>
          <li><strong>Inmediata</strong>: cualquier trabajador que vea o cause un golpe lo reporta de inmediato. Golpear una estantería no es motivo de sanción; ocultarlo sí es grave.</li>
          <li><strong>Periódica</strong>: una persona designada y entrenada recorre las estanterías con una lista de chequeo, con una frecuencia definida (por ejemplo, semanal o mensual) y registro escrito.</li>
          <li><strong>Experta</strong>: una persona técnicamente competente, al menos una vez al año, evalúa toda la instalación.</li>
        </ul>
        <p><strong>Qué se revisa:</strong></p>
        <ul>
          <li>Pies doblados, abollados, torcidos o con fisuras, sobre todo en la parte baja, donde golpean los montacargas.</li>
          <li>Diagonales y horizontales dobladas, sueltas o faltantes.</li>
          <li>Largueros deformados, con flecha visible bajo carga o con conectores dañados.</li>
          <li><strong>Pasadores de seguridad</strong> faltantes.</li>
          <li>Placas base y anclajes sueltos o faltantes.</li>
          <li>Estructura fuera de plomo (inclinada).</li>
          <li>Placas de capacidad presentes y legibles.</li>
          <li>Protectores de pies en su lugar.</li>
        </ul>
        <p><strong>Clasificación de daños por colores:</strong></p>
        <ul>
          <li><strong>Verde</strong>: daño dentro de los límites tolerables. Se registra y se vigila en la siguiente inspección.</li>
          <li><strong>Ámbar</strong>: daño que requiere reparación. Se <strong>descarga</strong> la zona afectada tan pronto se pueda y <strong>no se vuelve a cargar</strong> hasta repararla, dentro de un plazo corto definido.</li>
          <li><strong>Rojo</strong>: daño grave. Se <strong>descarga de inmediato</strong> la zona afectada, se aísla para que nadie la use y se repara antes de volver a usarla.</li>
        </ul>
        <p><strong>Ante un daño:</strong> detener la carga en esa zona, avisar al supervisor, señalizar y, según la gravedad, descargar. La descarga de una estructura dañada se hace con cuidado, desde los niveles altos, con supervisión y sin personas cerca. <strong>Nunca se endereza un pie a golpes ni con el montacargas</strong>: el acero ya perdió resistencia. Las piezas dañadas se reemplazan por repuestos del fabricante.</p>
        <p><strong>Protección contra golpes:</strong> protectores de pies, defensas en los extremos de las filas, pasillos con ancho suficiente para maniobrar y operadores de montacargas entrenados.</p>
      `,
      keyPoints: [
        'Inspección inmediata por cualquiera, periódica documentada y experta anual.',
        'Verde se vigila; ámbar se descarga y no se recarga hasta reparar; rojo se descarga de inmediato y se aísla.',
        'Nunca enderezar un pie a golpes: se reemplaza con repuestos del fabricante.'
      ]
    },
    {
      title: 'Apilamiento en piso: altura, estabilidad y estibas',
      content: `
        <p>Cuando la carga se apila directamente en el piso (bultos, cajas, estibas una sobre otra, tubos, láminas), la estabilidad depende de cómo se arme la pila.</p>
        <p><strong>Reglas del apilamiento estable:</strong></p>
        <ul>
          <li><strong>Piso firme, nivelado y limpio.</strong> Un piso inclinado, con huecos o mojado desestabiliza la pila desde la base.</li>
          <li><strong>Altura máxima definida</strong> según la resistencia del empaque, el peso y la estabilidad. El fabricante del producto suele indicar cuántos niveles resiste la caja; si no, la empresa debe fijar el límite y señalizarlo. Una regla de buena práctica es que la altura no supere tres veces el lado menor de la base.</li>
          <li><strong>Trabar las capas</strong> (cruzar la orientación de las cajas o bultos en cada nivel), como los ladrillos de un muro, para que la pila funcione como un bloque.</li>
          <li><strong>Lo más pesado y resistente abajo.</strong> Nunca cajas pesadas sobre cajas débiles o dañadas.</li>
          <li><strong>Pilas verticales</strong>, sin inclinación; si se inclina, se rehace.</li>
          <li><strong>Bultos</strong> (sacos): en pilas trabadas, con un retroceso o escalonamiento hacia arriba si la pila es alta.</li>
          <li><strong>Objetos cilíndricos</strong> (tubos, tambores acostados, bobinas): con <strong>cuñas o calzos</strong> en los extremos para que no rueden.</li>
          <li><strong>Láminas y tableros</strong>: en soportes o caballetes diseñados, sin recostarlos sueltos contra la pared.</li>
          <li><strong>Distancia</strong> a paredes, columnas y techos, y sin apoyar la pila contra muros que no fueron diseñados para recibir empuje.</li>
        </ul>
        <p><strong>Estibas apiladas.</strong> Al apilar estibas cargadas una sobre otra, la estiba de arriba debe asentar completa sobre la carga de abajo, y la carga de abajo debe resistir el peso. Las estibas vacías se apilan a una altura limitada, en zonas asignadas y lejos de los pasillos.</p>
        <p><strong>Estado de las estibas:</strong> se retiran las que tienen tablas rotas o faltantes, bloques partidos, clavos salidos o están contaminadas. Una estiba rota puede ceder con la carga encima o al levantarla con el montacargas.</p>
        <p><strong>Para tomar material de una pila:</strong> se retira desde arriba, nunca sacando cajas de la base o del centro. Si la pila es alta, se usa una escalera o un equipo adecuado, nunca trepando por la pila.</p>
      `,
      keyPoints: [
        'Piso firme y nivelado, altura máxima definida y señalizada, capas trabadas y lo pesado abajo.',
        'Cilindros con cuñas o calzos; láminas en soportes; distancia a paredes y techos.',
        'El material se toma desde arriba, nunca de la base; estibas rotas se retiran.'
      ]
    },
    {
      title: 'Montacargas y peatones: convivir en la bodega',
      content: `
        <p>Los atropellamientos y aplastamientos con montacargas están entre los accidentes más graves en bodegas. El operador tiene <strong>visibilidad limitada</strong>, sobre todo con carga y en reversa, y el equipo pesa varias toneladas.</p>
        <p><strong>Separar personas y equipos:</strong></p>
        <ul>
          <li><strong>Pasillos peatonales demarcados</strong> en el piso, separados de las vías de montacargas, y barreras físicas donde sea posible.</li>
          <li><strong>Cruces señalizados</strong> en los puntos donde los peatones atraviesan las vías.</li>
          <li><strong>Espejos convexos</strong> en esquinas e intersecciones ciegas.</li>
          <li>Límites de velocidad, alarmas de reversa y luces de advertencia en los equipos.</li>
          <li>Zonas de carga y descargue donde los peatones no entran mientras opera el equipo.</li>
        </ul>
        <p><strong>Reglas para los peatones:</strong></p>
        <ul>
          <li>Caminar por los pasillos peatonales y cruzar solo por los cruces.</li>
          <li><strong>Hacer contacto visual</strong> con el operador antes de cruzar frente al equipo. Si el operador no lo ha visto, no cruce.</li>
          <li>Nunca caminar ni pararse bajo las uñas elevadas o bajo una carga en altura.</li>
          <li>Mantener distancia de un montacargas en maniobra; no acercarse por detrás.</li>
          <li>No usar audífonos ni el celular mientras se camina por zonas de tráfico.</li>
          <li>Usar ropa de alta visibilidad donde la empresa lo exija.</li>
        </ul>
        <p><strong>Reglas para los operadores</strong> (que deben estar entrenados y autorizados):</p>
        <ul>
          <li>Inspección preoperacional del equipo antes del turno.</li>
          <li>Nunca superar la capacidad del equipo indicada en su placa, que depende de la altura de elevación y del centro de carga.</li>
          <li>Transportar la carga baja, con el mástil inclinado hacia atrás, y en reversa si la carga tapa la visión.</li>
          <li>Pitar en cruces y esquinas, y ceder el paso a los peatones.</li>
          <li>No transportar personas en el equipo ni elevarlas en las uñas.</li>
          <li>Al dejar el equipo: uñas abajo, freno puesto y llave retirada.</li>
        </ul>
      `,
      keyPoints: [
        'Pasillos peatonales demarcados, cruces señalizados, espejos y zonas restringidas.',
        'El peatón hace contacto visual con el operador antes de cruzar y nunca pasa bajo las uñas elevadas.',
        'Operador entrenado: preoperacional, capacidad de placa, carga baja y no transportar ni elevar personas.'
      ]
    },
    {
      title: 'Manipulación manual de cargas',
      content: `
        <p>Las lesiones de espalda, hombros y manos por levantar, empujar y halar cargas son muy frecuentes en bodegas. No ocurren solo por una carga muy pesada: también por <strong>repetición</strong>, <strong>posturas forzadas</strong> (doblar o girar el tronco) y <strong>cargas lejos del cuerpo</strong>.</p>
        <p><strong>Límites de peso.</strong> La <strong>Resolución 2400 de 1979</strong> establece límites para el levantamiento manual de cargas; como referencia, fija <strong>25 kg</strong> para hombres y <strong>12,5 kg</strong> para mujeres en carga compacta. Estos valores son un máximo, no una meta: la empresa debe evaluar las tareas (frecuencia, distancia, altura, agarre) y reducir el peso cuando las condiciones son desfavorables.</p>
        <p><strong>Primero, evitar o reducir el levantamiento:</strong></p>
        <ul>
          <li>Usar ayudas mecánicas: carretillas, estibadores manuales, mesas elevadoras, polipastos.</li>
          <li>Ubicar los materiales a la altura de trabajo para no levantarlos desde el piso.</li>
          <li>Pedir empaques más pequeños o livianos.</li>
          <li>Levantar entre dos personas cuando la carga es pesada o voluminosa, coordinando el movimiento.</li>
        </ul>
        <p><strong>Técnica de levantamiento:</strong></p>
        <ol>
          <li><strong>Planear</strong>: revisar el peso, el agarre, el recorrido y el lugar de descarga, y despejar el camino.</li>
          <li><strong>Acercarse</strong> a la carga, con los pies separados al ancho de los hombros y uno un poco adelante.</li>
          <li><strong>Doblar las rodillas</strong> y mantener la espalda recta; no doblar la cintura.</li>
          <li><strong>Agarrar firme</strong> con toda la mano, usando guantes si hay bordes o astillas.</li>
          <li><strong>Levantar con las piernas</strong>, suave y sin tirones, con la carga <strong>pegada al cuerpo</strong>.</li>
          <li><strong>No girar el tronco</strong> con la carga: girar moviendo los pies.</li>
          <li><strong>Bajar</strong> la carga con la misma técnica, doblando las rodillas.</li>
        </ol>
        <p><strong>Empujar es mejor que halar.</strong> Con carretillas y estibadores, empujar permite usar el peso del cuerpo y ver el camino.</p>
        <p><strong>Señales de alarma:</strong> dolor o adormecimiento en espalda, hombros o manos que no desaparece con el descanso. Se reportan a tiempo para evaluar la tarea; una molestia ignorada puede convertirse en una lesión crónica.</p>
      `,
      keyPoints: [
        'Res. 2400 de 1979: referencia de 25 kg para hombres y 12,5 kg para mujeres en carga compacta, como máximo.',
        'Primero ayudas mecánicas, altura de trabajo y levantamiento entre dos.',
        'Rodillas dobladas, espalda recta, carga pegada al cuerpo y girar con los pies, no con el tronco.'
      ]
    },
    {
      title: 'Productos especiales, incendio y emergencias en bodega',
      content: `
        <p><strong>Productos químicos.</strong> Se almacenan según su ficha de datos de seguridad y su etiqueta del Sistema Globalmente Armonizado:</p>
        <ul>
          <li>Separando los <strong>incompatibles</strong> (por ejemplo, oxidantes lejos de inflamables, ácidos lejos de bases) según una matriz de compatibilidad.</li>
          <li>Con <strong>contención de derrames</strong> (bandejas o diques) y kit de derrames cerca.</li>
          <li>Los inflamables en gabinetes o áreas diseñadas, lejos de fuentes de calor y chispas.</li>
          <li>Los líquidos en los niveles bajos, nunca por encima de la altura de los ojos.</li>
        </ul>
        <p><strong>Cilindros de gas</strong>: de pie, asegurados con cadena o soporte, con su capuchón cuando no están en uso, y separando oxígeno de gases combustibles.</p>
        <p><strong>Prevención de incendios en bodega:</strong></p>
        <ul>
          <li>Respetar el <strong>despeje bajo los rociadores</strong>: la carga no puede quedar pegada al techo ni a las boquillas. La norma NFPA 13 exige normalmente un despeje mínimo de unos 45 cm (18 pulgadas) por debajo de los deflectores, salvo que el diseño indique otra distancia.</li>
          <li>Mantener libres y señalizados los <strong>extintores, gabinetes contra incendio, tableros eléctricos, salidas y rutas de evacuación</strong>.</li>
          <li>Controlar las fuentes de ignición: no fumar, revisar las instalaciones eléctricas, cargar las baterías de los montacargas en zonas ventiladas y designadas.</li>
          <li>Retirar cartón, plástico y estibas de madera sobrantes, que son combustible.</li>
        </ul>
        <p><strong>Emergencias:</strong></p>
        <ul>
          <li><strong>Estantería golpeada que se inclina o cruje</strong>: alejar a todos de la zona y de los pasillos vecinos, acordonar y avisar al supervisor. No intentar descargarla con prisa ni sostenerla.</li>
          <li><strong>Pila que se derrumba o carga que cae</strong>: alejar a las personas, atender a los lesionados solo si la zona es segura, y no retirar material de una pila parcialmente caída sin evaluar si puede seguir cayendo.</li>
          <li><strong>Derrame químico</strong>: alejar a las personas, consultar la ficha de seguridad, usar el kit con los elementos de protección indicados y reportar.</li>
          <li><strong>Incendio</strong>: dar la alarma, evacuar por las rutas señalizadas y usar el extintor solo si el fuego es incipiente y hay una salida a la espalda.</li>
        </ul>
        <p><strong>Reportar e investigar.</strong> Los golpes a estanterías, las cargas que caen y los casi atropellamientos se reportan aunque nadie salga herido: son las señales que permiten evitar el siguiente colapso.</p>
      `,
      keyPoints: [
        'Químicos separados por compatibilidad, con contención; cilindros de pie y asegurados.',
        'Despeje bajo rociadores (normalmente unos 45 cm según NFPA 13) y extintores, tableros y salidas libres.',
        'Estantería que se inclina: alejar a todos y acordonar; nunca sostenerla ni descargarla con prisa.'
      ]
    }
  ],

  practices: [
    { q: '¿Dónde se ubican los materiales más pesados en una estantería?', options: ['En los niveles bajos', 'En los niveles más altos', 'Donde haya espacio libre'], answer: 0 },
    { q: '¿Qué información debe tener la placa de capacidad de una estantería?', options: ['Solo el nombre del fabricante', 'La carga máxima por nivel y por módulo', 'El color de pintura de la estructura'], answer: 1 },
    { q: 'Se quiere subir el primer nivel de una estantería para que pase un equipo. ¿Qué se debe hacer?', options: ['Subirlo, porque no cambia nada', 'Subirlo y poner más carga arriba para compensar', 'Consultar al fabricante o un ingeniero, porque reduce la capacidad'], answer: 2 },
    { q: 'Un pie de estantería tiene un daño clasificado como rojo. ¿Qué se hace?', options: ['Descargar de inmediato la zona, aislarla y repararla antes de usarla', 'Seguir usándola y revisarla en la próxima inspección', 'Enderezar el pie con el montacargas'], answer: 0 },
    { q: 'Hay tubos apilados en el piso. ¿Qué evita que rueden?', options: ['Apilarlos lo más alto posible', 'Cuñas o calzos en los extremos de la pila', 'Recostarlos contra la pared'], answer: 1 },
    { q: 'Antes de cruzar frente a un montacargas en movimiento, ¿qué hace el peatón?', options: ['Cruza rápido para no hacerlo esperar', 'Levanta la mano y cruza sin mirar', 'Hace contacto visual con el operador y cruza solo si lo vio'], answer: 2 },
    { q: 'Al levantar una caja del piso, ¿qué técnica es correcta?', options: ['Rodillas dobladas, espalda recta y caja pegada al cuerpo', 'Piernas rectas y doblar la cintura', 'Levantar rápido con un tirón para usar el impulso'], answer: 0 },
    { q: '¿Por qué se deja despeje bajo los rociadores?', options: ['Para que se vea mejor la bodega', 'Para que el agua pueda distribuirse sobre el fuego', 'Para que el techo no se ensucie'], answer: 1 }
  ],

  scenarios: [
    {
      scenario:
        'Ves que un montacargas golpeó el pie de una estantería y lo dejó visiblemente doblado. El operador dice que "no pasa nada, eso aguanta" y sigue cargando.',
      options: [
        { text: 'Lo dejo así: el operador conoce el equipo.', correct: false, feedback: 'Decisión insegura. Un pie doblado perdió resistencia, como en el caso del curso.' },
        { text: 'Pido detener la carga en esa zona, la señalizo, aviso al supervisor y se evalúa y descarga según la gravedad del daño.', correct: true, feedback: 'Decisión correcta. El daño se reporta y la zona no se carga hasta repararla.' },
        { text: 'Enderezo el pie a golpes con un mazo.', correct: false, feedback: 'Decisión insegura. El acero golpeado no recupera su resistencia; se reemplaza la pieza.' }
      ]
    },
    {
      scenario:
        'Un compañero necesita una caja del tercer nivel y empieza a subir por los largueros de la estantería para alcanzarla.',
      options: [
        { text: 'Le sostengo la estantería para que no se mueva.', correct: false, feedback: 'Decisión insegura. Puede caer o desestabilizar la carga del nivel.' },
        { text: 'Le paso una estiba para que se pare encima y alcance mejor.', correct: false, feedback: 'Decisión insegura. Una estiba no es una plataforma de trabajo.' },
        { text: 'Lo detengo y usamos una escalera móvil con plataforma o el equipo adecuado.', correct: true, feedback: 'Decisión correcta. Nunca se sube por una estantería.' }
      ]
    },
    {
      scenario:
        'Hay una caja muy pesada en la parte superior de una pila en el piso, sobre cajas más livianas que se ven aplastadas. La pila empieza a inclinarse.',
      options: [
        { text: 'Alejo a las personas, aviso y rehacemos la pila desde arriba, con lo pesado abajo y las capas trabadas.', correct: true, feedback: 'Decisión correcta. La pila inestable se rehace con orden y sin personas cerca.' },
        { text: 'Saco cajas de la base para bajar la altura.', correct: false, feedback: 'Decisión insegura. Retirar de la base hace caer la pila.' },
        { text: 'La recuesto contra la pared para que no se caiga.', correct: false, feedback: 'Decisión insegura. La pared no está diseñada para sostener la pila y el riesgo sigue.' }
      ]
    },
    {
      scenario:
        'Tienes que mover a mano 40 bultos de 25 kg desde el piso hasta una mesa. Hay un estibador manual disponible, pero "es más rápido cargarlos".',
      options: [
        { text: 'Los cargo uno por uno, doblando la cintura para ir rápido.', correct: false, feedback: 'Decisión insegura. La repetición y la postura forzada lesionan la espalda.' },
        { text: 'Uso el estibador o una mesa elevadora y, si debo levantar, lo hago con buena técnica o entre dos.', correct: true, feedback: 'Decisión correcta. Primero las ayudas mecánicas; después, buena técnica.' },
        { text: 'Los cargo de dos en dos para terminar antes.', correct: false, feedback: 'Decisión insegura. Duplica el peso y supera el límite de referencia.' }
      ]
    },
    {
      scenario:
        'Para ganar espacio, el supervisor pide apilar cajas hasta tocar el techo, justo debajo de los rociadores, y dejar dos estibas frente al gabinete contra incendio.',
      options: [
        { text: 'Lo hago: es temporal.', correct: false, feedback: 'Decisión insegura. Lo "temporal" bloquea la protección contra incendio cuando más se necesita.' },
        { text: 'Apilo hasta el techo pero dejo libre el gabinete.', correct: false, feedback: 'Decisión incompleta. La carga pegada a los rociadores impide que el agua llegue al fuego.' },
        { text: 'Explico que se debe respetar el despeje bajo los rociadores y dejar libre el gabinete, y buscamos otra ubicación.', correct: true, feedback: 'Decisión correcta. Los rociadores y los equipos de emergencia se mantienen siempre despejados.' }
      ]
    }
  ],

  exam: [
    {
      q: '¿Cuál es un principio del almacenamiento seguro?',
      options: [
        'Lo pesado abajo y lo liviano arriba.',
        'Lo pesado arriba para dejar libre el piso de la bodega.',
        'Ubicar los materiales donde haya espacio libre ese día.'
      ],
      answer: 0
    },
    {
      q: '¿Para qué sirven los pasadores o seguros de los largueros?',
      options: [
        'Para darle color a la estructura y facilitar la identificación de niveles.',
        'Para que el larguero no se suelte con un golpe hacia arriba.',
        'Para colgar herramientas.'
      ],
      answer: 1
    },
    {
      q: '¿Qué pasa con la capacidad de una estantería si se elimina un nivel y aumenta la distancia libre del pie?',
      options: [
        'Aumenta, porque hay menos niveles cargados.',
        'No cambia, porque la estructura es la misma que se instaló al inicio.',
        'Se reduce, y el cambio debe aprobarlo el fabricante o un ingeniero.'
      ],
      answer: 2
    },
    {
      q: '¿Cómo se apoya una estiba en una estantería selectiva?',
      options: [
        'Centrada y sobre los dos largueros.',
        'Sobre un solo larguero para dejar espacio al lado y poder ubicar otra estiba.',
        'Sobresaliendo hacia el pasillo para tomarla más rápido.'
      ],
      answer: 0
    },
    {
      q: '¿Qué hace un trabajador que golpea una estantería con el montacargas?',
      options: [
        'Sigue trabajando si no ve daño.',
        'Lo reporta de inmediato para que se inspeccione.',
        'Lo reporta al final del mes, en la reunión de seguridad.'
      ],
      answer: 1
    },
    {
      q: '¿Qué significa un daño clasificado como ámbar?',
      options: [
        'Que el daño es tolerable y solo se vigila en la siguiente inspección.',
        'Que se descarga de inmediato y se aísla.',
        'Que se descarga tan pronto se pueda y no se recarga hasta repararlo.'
      ],
      answer: 2
    },
    {
      q: '¿Qué se hace con un pie de estantería doblado?',
      options: [
        'Se reemplaza la pieza con repuestos del fabricante.',
        'Se endereza con el montacargas o a golpes de mazo.',
        'Se refuerza soldándole un ángulo.'
      ],
      answer: 0
    },
    {
      q: '¿Qué ayuda a que una pila de cajas en el piso funcione como un bloque estable?',
      options: [
        'Apilar todas las cajas en la misma orientación, una columna encima de otra.',
        'Trabar las capas cruzando la orientación en cada nivel.',
        'Poner las cajas más pesadas arriba de la pila.'
      ],
      answer: 1
    },
    {
      q: '¿Cómo se toma material de una pila en el piso?',
      options: [
        'Sacando las cajas de la base, que son más fáciles de alcanzar.',
        'Trepando por la pila para llegar a las de arriba.',
        'Desde arriba, usando una escalera o un equipo adecuado si es alta.'
      ],
      answer: 2
    },
    {
      q: '¿Qué se hace con una estiba con tablas rotas y clavos salidos?',
      options: [
        'Se retira de servicio.',
        'Se usa en los niveles altos de la estantería, donde no se pisa.',
        'Se usa solo para cargas pesadas.'
      ],
      answer: 0
    },
    {
      q: '¿Por qué son peligrosos los montacargas para los peatones?',
      options: [
        'Porque siempre van a alta velocidad y no tienen ningún tipo de alarma de reversa.',
        'Porque el operador tiene visibilidad limitada, sobre todo con carga y en reversa.',
        'Porque no tienen frenos de servicio ni de parqueo.'
      ],
      answer: 1
    },
    {
      q: '¿Cuál de estas prácticas es correcta para un operador de montacargas?',
      options: [
        'Elevar a un compañero en las uñas para alcanzar un nivel alto.',
        'Transportar la carga alta para ver mejor el camino.',
        'Al dejar el equipo, bajar las uñas, poner el freno y retirar la llave.'
      ],
      answer: 2
    },
    {
      q: 'Según la Res. 2400 de 1979, ¿cuál es la carga de referencia máxima para levantamiento manual por un hombre en carga compacta?',
      options: [
        '25 kg.',
        '50 kg.',
        'No hay ningún límite.'
      ],
      answer: 0
    },
    {
      q: 'Al levantar una carga, ¿cómo se gira para dejarla a un lado?',
      options: [
        'Girando el tronco con los pies fijos en el piso.',
        'Moviendo los pies, sin girar el tronco.',
        'Lanzando la carga hacia el lugar donde va, para no tener que caminar.'
      ],
      answer: 1
    },
    {
      q: '¿Cómo se almacenan los cilindros de gas?',
      options: [
        'Acostados en el piso, para que no se caigan si alguien los golpea al pasar con un carro.',
        'Juntos, oxígeno y gases combustibles, para ahorrar espacio.',
        'De pie, asegurados con cadena o soporte y con su capuchón cuando no están en uso.'
      ],
      answer: 2
    },
    {
      q: 'Una estantería golpeada empieza a inclinarse y a crujir. ¿Qué se hace primero?',
      options: [
        'Alejar a todos de la zona y de los pasillos vecinos, y acordonar.',
        'Descargarla rápido con el montacargas antes de que caiga del todo.',
        'Sostenerla entre varios mientras alguien busca ayuda.'
      ],
      answer: 0
    }
  ]
};
