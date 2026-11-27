/**
 * Curso: Aparejador de Cargas (Izaje Seguro). Versión completa.
 * Normativa: Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979 (aparatos de izar).
 * Referencias: ASME B30.9 (eslingas; ángulos menores de 30° con la horizontal no se usan salvo indicación del
 * fabricante o de una persona calificada), ASME B30.26 (accesorios), ASME B30.10 (ganchos), ASME B30.5 (grúas móviles).
 */
export default {
  id: 'aparejador-cargas',
  title: 'Aparejador de Cargas (Izaje Seguro)',
  hours: 1.5,
  category: 'prevencion_sst',
  regulation: 'Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979; referencias: ASME B30.9, B30.26, B30.10 y B30.5',
  legalNotice:
    'Formación teórica en aparejamiento de cargas. No certifica la competencia como aparejador, señalero ni operador de grúa: la empresa o el cliente pueden exigir certificación por un organismo acreditado y evaluación práctica.',
  summary:
    'Los roles y riesgos del izaje, el plan de izaje, la capacidad de las eslingas según su configuración y su ángulo, la inspección y los criterios de rechazo, los grilletes, cáncamos y ganchos, la ejecución segura con señales y vientos, y cómo terminar la maniobra.',
  fieldCase:
    'Durante el izaje de un motor de 2 toneladas, la eslinga sintética pasaba por un borde metálico filoso sin protector y formaba un ángulo muy cerrado, de unos 30 grados con la horizontal. Al tensarse, el borde cortó la eslinga y el motor cayó a pocos metros de un trabajador.',
  failureAnalysis:
    'Falla raíz: no se protegieron los bordes cortantes y el ángulo cerrado duplicó la tensión en cada rama de la eslinga. No hubo un plan de izaje que calculara la carga real en los aparejos.',
  checklist: [
    'Conozco el peso real de la carga, su centro de gravedad y los puntos de izaje.',
    'La grúa o el polipasto tienen capacidad para el radio y la configuración de la maniobra.',
    'Cada eslinga tiene etiqueta legible y su capacidad cubre la carga en la configuración y el ángulo usados.',
    'Inspeccioné eslingas, grilletes, ganchos y cáncamos antes de usarlos.',
    'Protegí los bordes cortantes con cantoneras.',
    'El área está delimitada y nadie queda bajo la carga ni en su recorrido.',
    'Hay un solo señalero, con señales acordadas, y vientos para guiar la carga.',
    'Hice una prueba de levante a pocos centímetros antes de mover la carga.'
  ],
  onSiteClosure:
    'Práctica en su empresa: inspeccionar con la lista de la empresa un juego de eslingas y accesorios, retirando los que no cumplan; calcular con el supervisor la tensión en una eslinga de dos ramas para un izaje real; y participar como aparejador o señalero en una maniobra supervisada.',

  modules: [
    {
      title: 'Izaje de cargas: roles y riesgos',
      content: `
        <p>Un <strong>izaje</strong> es cualquier maniobra en la que se levanta, se mueve y se baja una carga con un equipo: grúa móvil, grúa puente, polipasto, diferencial, montacargas con aditamento o grúa articulada.</p>
        <p><strong>Roles en una maniobra:</strong></p>
        <ul>
          <li><strong>Supervisor o director de la maniobra</strong>: planea, verifica las condiciones y autoriza.</li>
          <li><strong>Operador del equipo</strong>: maneja la grúa o el polipasto y conoce sus límites.</li>
          <li><strong>Aparejador</strong> (en inglés, <em>rigger</em>): selecciona, inspecciona y conecta los aparejos (eslingas, grilletes, ganchos) a la carga y al gancho.</li>
          <li><strong>Señalero</strong>: es el único que da las señales al operador cuando este no ve la carga o el recorrido.</li>
        </ul>
        <p>En maniobras pequeñas, una misma persona puede tener varios roles, pero todos deben cumplirse.</p>
        <p><strong>Riesgos principales:</strong></p>
        <ul>
          <li><strong>Caída de la carga</strong> por falla de una eslinga o un accesorio, mal amarre, sobrecarga o carga desequilibrada.</li>
          <li><strong>Golpes</strong> por la carga que gira, se balancea o se desplaza.</li>
          <li><strong>Atrapamiento</strong> de manos y pies entre la carga y otros objetos, o entre la eslinga y la carga al tensarse.</li>
          <li><strong>Volcamiento</strong> de la grúa por sobrecarga, terreno blando o estabilizadores mal puestos.</li>
          <li><strong>Contacto con líneas eléctricas</strong> con la pluma, el cable o la carga.</li>
          <li><strong>Falla del equipo</strong>: frenos, cables, ganchos.</li>
        </ul>
        <p><strong>La regla que más vidas salva:</strong> nadie se ubica debajo de una carga suspendida ni en su recorrido. Ningún aparejo es infalible.</p>
        <p><strong>Marco normativo.</strong> El <strong>Decreto 1072 de 2015</strong> y la <strong>Resolución 0312 de 2019</strong> exigen identificar y controlar este riesgo con procedimientos; la <strong>Resolución 2400 de 1979</strong> contiene disposiciones sobre aparatos de izar, cables, cadenas y ganchos. Las referencias técnicas son las normas <strong>ASME B30</strong>: B30.9 para eslingas, B30.26 para accesorios, B30.10 para ganchos, B30.5 para grúas móviles y B30.2 para grúas puente.</p>
      `,
      keyPoints: [
        'Roles: supervisor de la maniobra, operador, aparejador y un único señalero.',
        'Riesgos: caída de la carga, golpes, atrapamiento, volcamiento de la grúa y contacto con líneas eléctricas.',
        'Nadie debajo de una carga suspendida ni en su recorrido.'
      ]
    },
    {
      title: 'El plan de izaje: peso, centro de gravedad y capacidad',
      content: `
        <p>Antes de cualquier izaje se responden tres preguntas: <strong>¿cuánto pesa?</strong>, <strong>¿dónde está su centro de gravedad?</strong> y <strong>¿tienen capacidad el equipo y los aparejos?</strong></p>
        <p><strong>El peso.</strong> Se obtiene de la placa del equipo, la ficha técnica, la guía de despacho o un cálculo (volumen por densidad del material). Nunca "a ojo". Al peso de la carga se suman el peso de los aparejos (eslingas, grilletes, balancín) y del gancho, porque también los levanta la grúa. Una carga adherida al piso, con producto adentro o con hielo pesa más de lo que parece.</p>
        <p><strong>El centro de gravedad</strong> es el punto donde se concentra el peso. Para que la carga suba nivelada, el gancho debe quedar <strong>directamente encima</strong> del centro de gravedad. Si no, la carga se inclina, gira o se desliza al despegar. En equipos como motores, bombas o tableros, el centro de gravedad no siempre está en el centro geométrico: los fabricantes suelen marcar los puntos de izaje.</p>
        <p><strong>La capacidad del equipo.</strong> La capacidad de una grúa depende del <strong>radio</strong> (distancia horizontal entre el centro de giro y la carga), de la <strong>longitud y el ángulo de la pluma</strong>, de los <strong>estabilizadores</strong> y del terreno. Se consulta en la <strong>tabla de carga</strong> del fabricante. Una grúa que levanta 20 toneladas cerca de su base puede levantar mucho menos con la pluma extendida.</p>
        <p><strong>La capacidad de los aparejos</strong> depende de su configuración y del ángulo de las eslingas (módulos siguientes).</p>
        <p><strong>Izajes críticos.</strong> Muchas empresas exigen un plan de izaje escrito, calculado y firmado cuando, por ejemplo:</p>
        <ul>
          <li>la carga supera un porcentaje alto de la capacidad del equipo (un criterio frecuente es el 75 %);</li>
          <li>se usan dos o más grúas a la vez;</li>
          <li>la maniobra pasa sobre instalaciones en operación, sobre personas o cerca de líneas eléctricas;</li>
          <li>la carga es de forma irregular, de alto valor o peligrosa.</li>
        </ul>
        <p><strong>El terreno y el entorno:</strong> suelo firme y nivelado, sin rellenos ni tuberías enterradas bajo los estabilizadores; espacio para el giro de la pluma; distancia a líneas eléctricas; viento dentro del límite del fabricante.</p>
      `,
      keyPoints: [
        'Peso real de la carga más aparejos; nunca "a ojo".',
        'El gancho va directamente sobre el centro de gravedad para que la carga suba nivelada.',
        'La capacidad de la grúa depende del radio y la pluma: se consulta la tabla de carga; los izajes críticos llevan plan escrito.'
      ]
    },
    {
      title: 'Eslingas: tipos, configuraciones y capacidad',
      content: `
        <p><strong>Tipos de eslingas:</strong></p>
        <ul>
          <li><strong>Sintéticas de banda plana</strong> y <strong>redondas</strong> (poliéster, nailon): livianas, flexibles y no dañan las superficies, pero se cortan con bordes filosos y se dañan con calor y químicos.</li>
          <li><strong>De cable de acero</strong>: resistentes a la abrasión y al calor moderado, pero se dañan si se doblan en radios pequeños.</li>
          <li><strong>De cadena de acero aleado</strong> (grados 80 o 100): muy resistentes y aptas para altas temperaturas y uso rudo. Nunca se usan cadenas comunes o de grado no certificado para izar.</li>
        </ul>
        <p><strong>La etiqueta.</strong> Toda eslinga debe tener una etiqueta o placa legible con su fabricante, material y <strong>carga límite de trabajo</strong> (en inglés, <em>WLL</em>) para cada configuración. <strong>Una eslinga sin etiqueta no se usa.</strong></p>
        <p><strong>Configuraciones básicas:</strong></p>
        <ul>
          <li><strong>Vertical</strong>: una sola rama recta entre el gancho y la carga. Capacidad de referencia de la etiqueta.</li>
          <li><strong>Ahorcado</strong> (en inglés, <em>choker</em>): la eslinga rodea la carga y pasa por su propio ojo. Sujeta bien cargas largas, pero <strong>reduce la capacidad</strong> de la eslinga; la etiqueta indica cuánto.</li>
          <li><strong>Canasta</strong>: la eslinga pasa por debajo de la carga y sus dos extremos van al gancho. Si las ramas están verticales, la capacidad puede ser hasta el doble de la vertical; si hay ángulo, se reduce.</li>
        </ul>
        <p><strong>Varias ramas.</strong> Con eslingas de dos, tres o cuatro ramas, no se debe suponer que todas las ramas reparten la carga por igual: en cargas rígidas, muchas veces dos ramas soportan casi todo el peso.</p>
        <p><strong>Protección de bordes.</strong> Siempre que una eslinga pase por un borde, una esquina o una superficie áspera, se usan <strong>cantoneras</strong> o protectores. Un borde filoso puede cortar una eslinga sintética aunque su capacidad sea muy superior a la carga, como en el caso del curso.</p>
        <p><strong>Nunca:</strong> anudar una eslinga para acortarla, retorcerla, usarla sobre su propio ojo de forma distinta a la indicada, ni arrastrarla por el piso.</p>
      `,
      keyPoints: [
        'Eslingas sintéticas, de cable o de cadena de acero aleado; sin etiqueta legible no se usan.',
        'Configuraciones vertical, ahorcado (reduce capacidad) y canasta; la etiqueta da la capacidad de cada una.',
        'Cantoneras en todos los bordes; nunca anudar, retorcer ni arrastrar las eslingas.'
      ]
    },
    {
      title: 'El ángulo de la eslinga: por qué multiplica la tensión',
      content: `
        <p>Cuando una eslinga de dos ramas no cuelga vertical sino formando un ángulo, <strong>cada rama soporta más que la mitad del peso</strong>. Cuanto más abiertas estén las ramas (más cerca de la horizontal), mayor es la tensión.</p>
        <p><strong>Factor de tensión según el ángulo de la rama con la horizontal:</strong></p>
        <ul>
          <li><strong>90°</strong> (rama vertical): factor 1,0. Cada rama soporta la mitad del peso.</li>
          <li><strong>60°</strong>: factor de aproximadamente 1,15.</li>
          <li><strong>45°</strong>: factor de aproximadamente 1,41.</li>
          <li><strong>30°</strong>: factor de 2,0. Cada rama soporta <strong>el peso total de la carga</strong>, es decir, el doble de lo que soportaría vertical.</li>
        </ul>
        <p><strong>Cómo se calcula la tensión en cada rama</strong> (para dos ramas que reparten la carga por igual):</p>
        <p>Tensión por rama = (peso de la carga ÷ número de ramas) × factor del ángulo</p>
        <p><strong>Ejemplo.</strong> El motor del caso pesa 2.000 kg y se levanta con dos ramas a 30° de la horizontal: (2.000 ÷ 2) × 2,0 = <strong>2.000 kg en cada rama</strong>. Si cada eslinga tenía una capacidad vertical de 1.500 kg, ambas estaban sobrecargadas, además del borde sin protección. Con las ramas a 60°: (2.000 ÷ 2) × 1,15 = <strong>1.150 kg por rama</strong>, dentro de la capacidad.</p>
        <p><strong>Reglas prácticas:</strong></p>
        <ul>
          <li>Preferir ángulos de <strong>60° o más</strong> con la horizontal.</li>
          <li><strong>No usar ángulos menores de 30°</strong> con la horizontal, salvo que el fabricante o una persona calificada lo indiquen (criterio de la norma ASME B30.9).</li>
          <li>Para abrir menos las ramas, usar eslingas más largas o una <strong>viga separadora o balancín</strong>, que mantiene las ramas verticales.</li>
          <li>Recordar que el ángulo también genera una fuerza horizontal que tiende a juntar los puntos de izaje y puede deformar la carga o los cáncamos.</li>
        </ul>
        <p><strong>Cómo estimar el ángulo en campo:</strong> si la distancia horizontal entre los puntos de izaje es igual al largo de cada rama, el ángulo es de unos 60°. Si las ramas se ven "muy abiertas", probablemente están por debajo de 45°.</p>
      `,
      keyPoints: [
        'Factor de tensión: 1,0 vertical; 1,15 a 60°; 1,41 a 45°; 2,0 a 30° con la horizontal.',
        'Tensión por rama = (peso ÷ número de ramas) × factor del ángulo.',
        'Preferir 60° o más; no usar menos de 30° salvo indicación calificada; usar balancín para mantener ramas verticales.'
      ]
    },
    {
      title: 'Inspección de eslingas y criterios de rechazo',
      content: `
        <p><strong>Dos niveles de inspección:</strong></p>
        <ul>
          <li><strong>Antes de cada uso</strong>, por el aparejador: revisión visual y al tacto de toda la eslinga y sus accesorios.</li>
          <li><strong>Periódica</strong>, por una persona competente, con registro escrito y una frecuencia definida según el uso (por ejemplo, mensual o trimestral). Muchas empresas marcan las eslingas inspeccionadas con un color del periodo.</li>
        </ul>
        <p><strong>Se retiran de servicio las eslingas sintéticas con:</strong></p>
        <ul>
          <li>etiqueta ilegible o ausente;</li>
          <li>cortes, desgarros, perforaciones o desgaste en la banda o en los ojos;</li>
          <li>costuras rotas o sueltas;</li>
          <li>quemaduras, partes fundidas o endurecidas por calor o chispas de soldadura;</li>
          <li>daño químico: decoloración, zonas rígidas o quebradizas;</li>
          <li>en las eslingas redondas, el núcleo de hilos expuesto a través de la funda;</li>
          <li>nudos;</li>
          <li>accesorios metálicos deformados, corroídos o agrietados.</li>
        </ul>
        <p><strong>Eslingas de cable de acero:</strong> alambres rotos (la norma fija cuántos se toleran por tramo), aplastamientos, dobleces, "jaula de pájaro" (los cordones se abren), corrosión, daño por calor, y terminales deformados o con fisuras.</p>
        <p><strong>Eslingas de cadena:</strong> eslabones estirados, doblados, con muescas, desgaste visible o grietas; ganchos con la garganta abierta o deformados; ausencia de la placa de identificación.</p>
        <p><strong>"Todavía sirve para una carga liviana" no existe.</strong> Una eslinga dañada no se "degrada" a una capacidad menor: se retira. El daño hace imposible saber cuánto resiste.</p>
        <p><strong>Qué hacer con la eslinga rechazada:</strong> marcarla como fuera de servicio y, si no tiene reparación posible, <strong>inutilizarla</strong> (cortarla) para que nadie la vuelva a usar. Las reparaciones solo las hace el fabricante o una entidad calificada, con nueva prueba y etiqueta.</p>
        <p><strong>Almacenamiento:</strong> colgadas, en un lugar seco, ventilado y protegido de la luz solar directa (la radiación ultravioleta degrada las sintéticas), de los químicos y de las chispas.</p>
      `,
      keyPoints: [
        'Inspección antes de cada uso y periódica documentada por una persona competente.',
        'Se rechazan eslingas sin etiqueta, con cortes, costuras rotas, quemaduras, daño químico, nudos o núcleo expuesto.',
        'Una eslinga dañada no se usa "para cargas livianas": se retira e inutiliza.'
      ]
    },
    {
      title: 'Grilletes, cáncamos, ganchos y puntos de izaje',
      content: `
        <p><strong>Grilletes.</strong> Conectan eslingas entre sí, a la carga o al gancho.</p>
        <ul>
          <li>Deben tener la <strong>capacidad marcada</strong> (en toneladas) y el fabricante.</li>
          <li>El <strong>pasador</strong> debe ser el original del grillete, completamente roscado o asegurado con su tuerca y chaveta. Nunca se reemplaza por un perno común.</li>
          <li>La carga se aplica en línea con el eje del grillete. Las cargas laterales reducen su capacidad.</li>
          <li>En grilletes de tipo lira (ancla), varias ramas se colocan en el arco, no en el pasador.</li>
        </ul>
        <p><strong>Cáncamos (ojos de izaje roscados):</strong></p>
        <ul>
          <li>Se enroscan completamente, hasta que el hombro asiente sobre la superficie.</li>
          <li>Los cáncamos fijos comunes se cargan en el <strong>plano del ojo</strong>; una carga lateral los dobla o los arranca. Para tiros en ángulo se usan <strong>cáncamos giratorios</strong> diseñados para ello.</li>
          <li>Se usan los puntos de izaje del fabricante del equipo, no cualquier perforación o soporte.</li>
        </ul>
        <p><strong>Ganchos:</strong></p>
        <ul>
          <li>Con <strong>pestillo de seguridad</strong> funcionando, que cierre la garganta.</li>
          <li>Se retiran si tienen la garganta abierta, deformación, desgaste en el asiento, grietas o giro trabado.</li>
          <li>La carga se apoya en el asiento del gancho, nunca en la punta.</li>
        </ul>
        <p><strong>Puntos de izaje de los equipos.</strong> Muchos equipos traen orejas o placas de izaje calculadas por el fabricante. Se usan esas y en la cantidad indicada. Tuberías, manijas, barandas, ejes de motores o soportes de instrumentos <strong>no</strong> son puntos de izaje.</p>
        <p><strong>Dispositivos bajo el gancho:</strong> vigas separadoras, balancines, pinzas para láminas, imanes de izaje y ganchos para tambores tienen su propia capacidad marcada y se inspeccionan igual que los demás aparejos.</p>
        <p><strong>Lo que se arma, se mantiene compatible:</strong> no se mezclan accesorios de grados o fabricantes distintos sin verificar que la capacidad del conjunto quede definida por el elemento más débil.</p>
      `,
      keyPoints: [
        'Grilletes con capacidad marcada y pasador original asegurado; carga en línea con su eje.',
        'Cáncamos enroscados hasta el hombro y cargados en el plano del ojo; para ángulos, cáncamos giratorios.',
        'Ganchos con pestillo y carga en el asiento; solo se usan los puntos de izaje del fabricante.'
      ]
    },
    {
      title: 'Ejecución segura de la maniobra',
      content: `
        <p><strong>Antes de levantar:</strong></p>
        <ul>
          <li>Reunión previa corta con todos los participantes: peso, plan, roles, señales, recorrido y punto de descarga.</li>
          <li><strong>Área delimitada</strong> con cintas o barreras, y personal no esencial fuera.</li>
          <li>Recorrido libre de obstáculos y lejos de líneas eléctricas.</li>
          <li><strong>Vientos o cuerdas guía</strong> amarrados a la carga para controlar el giro sin acercarse.</li>
        </ul>
        <p><strong>Señales.</strong> Hay <strong>un solo señalero</strong>, visible para el operador, que usa señales de mano estandarizadas o radio con un canal exclusivo. Las señales básicas son izar, bajar, mover la pluma, girar, detener y <strong>parada de emergencia</strong>. La señal de parada de emergencia la puede dar <strong>cualquier persona</strong> que vea un peligro, y el operador la obedece siempre.</p>
        <p><strong>Prueba de levante.</strong> Se levanta la carga apenas unos centímetros del piso y se detiene para verificar:</p>
        <ul>
          <li>que la carga quede nivelada y estable (si se inclina, el gancho no está sobre el centro de gravedad);</li>
          <li>que las eslingas y accesorios estén bien asentados y sin torceduras;</li>
          <li>que los frenos de la grúa sostengan;</li>
          <li>que el equipo esté estable.</li>
        </ul>
        <p>Si algo no está bien, se baja y se corrige antes de continuar.</p>
        <p><strong>Durante el movimiento:</strong></p>
        <ul>
          <li>Movimientos suaves, sin arranques ni frenazos bruscos que hagan oscilar la carga.</li>
          <li><strong>Nadie bajo la carga ni en su recorrido.</strong> Los vientos permiten guiarla desde una distancia segura.</li>
          <li>No se acompaña la carga con las manos; si gira, se controla con los vientos o se detiene la maniobra.</li>
          <li>La carga no se deja suspendida sin vigilancia.</li>
          <li>Nunca se transportan personas sobre la carga o en el gancho.</li>
          <li>Se suspende la maniobra si el viento supera el límite del fabricante, si llueve fuerte o si cambian las condiciones.</li>
        </ul>
      `,
      keyPoints: [
        'Reunión previa, área delimitada, recorrido libre y vientos amarrados a la carga.',
        'Un solo señalero; la parada de emergencia la puede dar cualquiera y siempre se obedece.',
        'Prueba de levante a pocos centímetros; nadie bajo la carga y movimientos suaves.'
      ]
    },
    {
      title: 'Bajar la carga, retirar aparejos y situaciones de emergencia',
      content: `
        <p><strong>Bajar y asentar la carga:</strong></p>
        <ul>
          <li>Preparar el lugar de descarga: piso firme y nivelado, y <strong>calzos o maderos</strong> sobre los que se asienta la carga, para poder retirar las eslingas sin aplastarlas ni meter las manos debajo.</li>
          <li>Bajar despacio y asentar la carga verificando que quede estable antes de aflojar las eslingas.</li>
          <li>Mantener manos y pies fuera de los puntos donde la carga se apoya.</li>
        </ul>
        <p><strong>Retirar los aparejos:</strong></p>
        <ul>
          <li>Aflojar las eslingas solo cuando la carga esté asentada y estable.</li>
          <li>Retirarlas a mano. <strong>Nunca se hala una eslinga atrapada bajo la carga con la grúa</strong>: puede volcar la carga o romper la eslinga, que sale como un látigo.</li>
          <li>Inspeccionar los aparejos después de usarlos y guardarlos colgados y protegidos.</li>
        </ul>
        <p><strong>Situaciones de emergencia:</strong></p>
        <ul>
          <li><strong>La carga empieza a girar o a oscilar</strong> y se acerca a una persona: señal de parada, alejar a la persona y controlar con los vientos; nunca detenerla con el cuerpo.</li>
          <li><strong>Un aparejo cede</strong> o se escucha un ruido de falla: parada inmediata, alejar a todos y, si es posible, bajar la carga despacio a un lugar seguro.</li>
          <li><strong>Falla de energía o del equipo</strong> con la carga suspendida: acordonar el área bajo la carga y seguir el procedimiento del fabricante para bajarla.</li>
          <li><strong>Contacto de la grúa con una línea eléctrica</strong>: el operador permanece en la cabina si no hay incendio; nadie toca la grúa ni la carga; se aleja a todos y se pide el corte de la energía.</li>
          <li><strong>Inestabilidad de la grúa</strong> (estabilizadores que se hunden, alarma de sobrecarga): detener, bajar la carga con cuidado y revisar.</li>
        </ul>
        <p><strong>Reportar.</strong> Todo incidente de izaje, aunque nadie salga herido (una eslinga que se corta, una carga que se golpea, un gancho que se abre), se reporta e investiga. Las maniobras que casi terminan en accidente son las mejores lecciones para la siguiente.</p>
      `,
      keyPoints: [
        'Asentar la carga sobre calzos para retirar las eslingas sin aplastarlas ni meter las manos debajo.',
        'Nunca halar con la grúa una eslinga atrapada bajo la carga.',
        'Carga que gira: parada y vientos, nunca el cuerpo; en contacto con líneas, nadie toca la grúa ni la carga.'
      ]
    }
  ],

  practices: [
    { q: '¿Quién da las señales al operador de la grúa durante una maniobra?', options: ['Todos los que están cerca', 'Un solo señalero designado', 'El operador se guía solo por lo que ve'], answer: 1 },
    { q: 'Una carga de 1.200 kg se levanta con aparejos que pesan 50 kg. ¿Qué peso se considera para la maniobra?', options: ['1.250 kg', '1.200 kg', '50 kg'], answer: 0 },
    { q: '¿Qué indica la etiqueta de una eslinga?', options: ['Solo la fecha de compra', 'El color recomendado para cada carga', 'Su carga límite de trabajo para cada configuración'], answer: 2 },
    { q: 'Una carga de 1.000 kg se levanta con dos ramas a 60° de la horizontal. ¿Cuál es la tensión aproximada en cada rama?', options: ['500 kg', 'Unos 575 kg', '2.000 kg'], answer: 1 },
    { q: 'Una eslinga sintética tiene una costura rota. ¿Qué se hace?', options: ['Se usa solo para cargas livianas', 'Se cose de nuevo en el taller', 'Se retira de servicio e inutiliza'], answer: 2 },
    { q: '¿Cómo se carga un cáncamo fijo común?', options: ['En el plano del ojo, enroscado hasta el hombro', 'De lado, para que la eslinga quede más abierta', 'Enroscado a medias para retirarlo más fácil'], answer: 0 },
    { q: 'Durante la prueba de levante, la carga se inclina hacia un lado. ¿Qué indica?', options: ['Que la grúa está sobrecargada', 'Que el gancho no está sobre el centro de gravedad', 'Que el viento está muy fuerte'], answer: 1 },
    { q: 'Una eslinga quedó atrapada bajo la carga ya asentada. ¿Qué se hace?', options: ['Se hala con la grúa para sacarla', 'Se corta con una pulidora', 'Se levanta la carga un poco y se retira a mano, con la carga controlada'], answer: 2 }
  ],

  scenarios: [
    {
      scenario:
        'Vas a izar un motor de 2 toneladas. La eslinga sintética pasa por un borde metálico sin protección y las ramas quedan muy abiertas. El operador dice que "así siempre se ha hecho".',
      options: [
        { text: 'Seguimos: la eslinga tiene más capacidad que el motor.', correct: false, feedback: 'Decisión insegura. El borde puede cortarla y el ángulo cerrado puede duplicar la tensión, como en el caso del curso.' },
        { text: 'Detengo, pongo cantoneras en los bordes, calculo la tensión con el ángulo real y uso eslingas más largas o un balancín para que las ramas queden a 60° o más.', correct: true, feedback: 'Decisión correcta. Proteger bordes y controlar el ángulo evita la sobrecarga y el corte.' },
        { text: 'Pongo un trapo en el borde y seguimos.', correct: false, feedback: 'Decisión insegura. Un trapo no es una cantonera y no resiste el corte.' }
      ]
    },
    {
      scenario:
        'Durante el izaje, la carga empieza a girar y se acerca a un trabajador que está debajo, mirando la maniobra de cerca.',
      options: [
        { text: 'Doy la señal de parada, alejo al trabajador del recorrido y controlamos el giro con los vientos.', correct: true, feedback: 'Decisión correcta. Parada, nadie bajo la carga y control con vientos.' },
        { text: 'Le grito al trabajador que detenga la carga con las manos.', correct: false, feedback: 'Decisión insegura. Nadie detiene una carga con el cuerpo ni se ubica debajo de ella.' },
        { text: 'Le pido al operador que suba más rápido para pasar por encima del trabajador.', correct: false, feedback: 'Decisión insegura. Acelerar hace oscilar más la carga y la mantiene sobre la persona.' }
      ]
    },
    {
      scenario:
        'Una eslinga tiene un corte pequeño en la funda. El supervisor dice que "el corte es chiquito, todavía sirve para una carga liviana".',
      options: [
        { text: 'La uso para la carga liviana de hoy.', correct: false, feedback: 'Decisión insegura. Una eslinga dañada no tiene capacidad conocida.' },
        { text: 'La retiro de servicio, la marco y la inutilizo, y uso una eslinga en buen estado.', correct: true, feedback: 'Decisión correcta. Una eslinga dañada no se degrada: se retira.' },
        { text: 'Le pongo cinta en el corte y la uso.', correct: false, feedback: 'Decisión insegura. La cinta no repara el daño y lo oculta en la siguiente inspección.' }
      ]
    },
    {
      scenario:
        'Debes levantar una bomba de 800 kg. No tiene orejas de izaje visibles y un compañero propone amarrar la eslinga a la tubería de descarga de la bomba.',
      options: [
        { text: 'Amarro a la tubería, que se ve fuerte.', correct: false, feedback: 'Decisión insegura. Una tubería no es un punto de izaje y puede romperse.' },
        { text: 'Uso dos eslingas en canasta por debajo de la base sin revisar el centro de gravedad.', correct: false, feedback: 'Decisión incompleta. Sin conocer el centro de gravedad la bomba puede inclinarse o deslizarse.' },
        { text: 'Consulto el manual para ubicar los puntos de izaje del fabricante y el centro de gravedad, y hago la prueba de levante.', correct: true, feedback: 'Decisión correcta. Se usan los puntos de izaje previstos y se verifica el equilibrio.' }
      ]
    },
    {
      scenario:
        'La grúa móvil está posicionada y la maniobra pasará cerca de una línea eléctrica aérea. Empieza a soplar un viento fuerte y la carga es una lámina grande.',
      options: [
        { text: 'Seguimos rápido antes de que el viento empeore.', correct: false, feedback: 'Decisión insegura. Una lámina grande con viento puede descontrolarse y acercarse a la línea.' },
        { text: 'Seguimos con dos personas sujetando la lámina con las manos.', correct: false, feedback: 'Decisión insegura. Nadie sujeta la carga con el cuerpo, y menos cerca de una línea.' },
        { text: 'Suspendemos la maniobra hasta que el viento esté dentro del límite del fabricante y revisamos las distancias a la línea.', correct: true, feedback: 'Decisión correcta. Viento y líneas eléctricas son razones para detener la maniobra.' }
      ]
    }
  ],

  exam: [
    {
      q: '¿Cuál es la función del aparejador en una maniobra de izaje?',
      options: [
        'Seleccionar, inspeccionar y conectar los aparejos a la carga.',
        'Operar la grúa o el polipasto y responder por su tabla de carga.',
        'Firmar la factura de la grúa alquilada para la maniobra.'
      ],
      answer: 0
    },
    {
      q: '¿Por qué la capacidad de una grúa móvil cambia durante una maniobra?',
      options: [
        'Porque la grúa se cansa con el uso continuo.',
        'Porque depende del radio y de la longitud y ángulo de la pluma.',
        'Porque el peso de la carga cambia mientras se mueve.'
      ],
      answer: 1
    },
    {
      q: '¿Dónde debe quedar el gancho para que la carga suba nivelada?',
      options: [
        'En el extremo más pesado de la carga.',
        'A un lado de la carga para que no se golpee con ella.',
        'Directamente encima del centro de gravedad.'
      ],
      answer: 2
    },
    {
      q: '¿Qué se hace con una eslinga cuya etiqueta es ilegible?',
      options: [
        'Se retira de servicio: sin etiqueta no se conoce su capacidad.',
        'Se usa si se ve en buen estado.',
        'Se usa con la mitad de la carga normal que se levanta con eslingas parecidas en la planta.'
      ],
      answer: 0
    },
    {
      q: '¿Qué efecto tiene la configuración de ahorcado sobre la capacidad de una eslinga?',
      options: [
        'La duplica, porque la eslinga abraza la carga.',
        'La reduce; la etiqueta indica cuánto.',
        'No la cambia.'
      ],
      answer: 1
    },
    {
      q: 'Con dos ramas a 30° de la horizontal, ¿cuánto soporta cada rama?',
      options: [
        'La cuarta parte del peso de la carga.',
        'La mitad del peso de la carga, igual que con las ramas verticales.',
        'El peso total de la carga.'
      ],
      answer: 2
    },
    {
      q: 'Una carga de 3.000 kg se levanta con dos ramas a 45° de la horizontal. ¿Cuál es la tensión aproximada en cada rama?',
      options: [
        'Unos 2.120 kg.',
        '1.500 kg, porque la carga se reparte entre las dos ramas de forma igual.',
        '3.000 kg.'
      ],
      answer: 0
    },
    {
      q: 'Según ASME B30.9, ¿qué ángulos de eslinga con la horizontal no se deben usar salvo indicación calificada?',
      options: [
        'Mayores de 60°.',
        'Menores de 30°.',
        'Exactamente 90°.'
      ],
      answer: 1
    },
    {
      q: '¿Para qué sirve una viga separadora o balancín?',
      options: [
        'Para aumentar el peso de la carga y estabilizarla.',
        'Para reemplazar las eslingas en cargas livianas que no requieren aparejos adicionales.',
        'Para mantener las ramas de la eslinga verticales y reducir la tensión.'
      ],
      answer: 2
    },
    {
      q: '¿Cuál de estos daños obliga a retirar una eslinga redonda sintética?',
      options: [
        'Que se vea el núcleo de hilos a través de la funda.',
        'Que esté un poco sucia de polvo o de barro seco del patio.',
        'Que tenga la etiqueta legible y en buen estado.'
      ],
      answer: 0
    },
    {
      q: '¿Dónde se almacenan las eslingas sintéticas?',
      options: [
        'En el piso del patio, al sol, para que se sequen después de usarlas.',
        'Colgadas, en un lugar seco, ventilado y protegido del sol y los químicos.',
        'Junto a los tanques de ácido, para tenerlas a mano.'
      ],
      answer: 1
    },
    {
      q: '¿Qué se hace con el pasador perdido de un grillete?',
      options: [
        'Se reemplaza por un perno común del mismo diámetro.',
        'Se amarra el grillete con alambre.',
        'Se retira el grillete o se usa su pasador original, asegurado.'
      ],
      answer: 2
    },
    {
      q: '¿Cuál de estos elementos SÍ es un punto de izaje válido en una bomba?',
      options: [
        'Las orejas de izaje indicadas por el fabricante.',
        'La tubería de descarga, si se ve robusta y bien soldada.',
        'El eje del motor, porque soporta todo el peso del rotor.'
      ],
      answer: 0
    },
    {
      q: '¿Para qué se hace la prueba de levante a pocos centímetros del piso?',
      options: [
        'Para medir el peso de la carga con la grúa.',
        'Para verificar que la carga quede nivelada, los aparejos bien asentados y los frenos sostengan.',
        'Para que la carga se seque antes de moverla.'
      ],
      answer: 1
    },
    {
      q: 'Durante una maniobra, ¿quién puede dar la señal de parada de emergencia?',
      options: [
        'Solo el supervisor de la maniobra, que es quien la autorizó.',
        'Solo el señalero designado, porque es el único que da señales al operador.',
        'Cualquier persona que vea un peligro, y el operador siempre la obedece.'
      ],
      answer: 2
    },
    {
      q: '¿Por qué se asienta la carga sobre calzos o maderos?',
      options: [
        'Para retirar las eslingas sin aplastarlas ni meter las manos debajo.',
        'Para que la carga quede más alta y sea más fácil de ver desde la cabina.',
        'Para que el piso no se ensucie.'
      ],
      answer: 0
    }
  ]
};
