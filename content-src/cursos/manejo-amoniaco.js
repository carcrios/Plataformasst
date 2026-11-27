/**
 * Curso: Manejo Seguro de Amoniaco (NH3) en Refrigeración Industrial. Versión completa.
 * Normativa: Decreto 1072 de 2015, Decreto 1496 de 2018 y Res. 773 de 2021 (SGA), Decreto 1347 de 2021 (PPAM).
 * Referencias técnicas: normas IIAR, valores de exposición de NIOSH y ACGIH, OSHA 29 CFR 1910.119 (PSM).
 */
export default {
  id: 'manejo-amoniaco',
  title: 'Manejo Seguro de Amoniaco (NH3) en Refrigeración Industrial',
  hours: 1.5,
  category: 'prevencion_sst',
  regulation: 'Decreto 1072 de 2015, Decreto 1496 de 2018, Res. 773 de 2021, Decreto 1347 de 2021; referencias: IIAR, OSHA 1910.119',
  legalNotice:
    'Formación teórica para personal que trabaja cerca de sistemas de refrigeración con amoniaco. No habilita para operar ni intervenir el sistema: eso requiere entrenamiento específico del fabricante o de la empresa, procedimientos escritos y autorización.',
  summary:
    'Cómo se comporta el amoniaco en una fuga, qué le hace al cuerpo y a qué concentraciones, cómo funciona un sistema de refrigeración, qué controles lo hacen seguro, cómo hacer purgas y aperturas de línea, qué protección usar y cómo responder a una fuga.',
  fieldCase:
    'Durante una purga de aceite en el cuarto de máquinas, un operador abrió una válvula de drenaje sin el bloqueo previo y se alejó un momento. Por la válvula salió amoniaco líquido. No usaba protección respiratoria ni facial completa y sufrió quemaduras químicas en la cara e irritación severa de las vías respiratorias.',
  failureAnalysis:
    'Falla raíz: no se siguió el procedimiento escrito de purga (válvula de cierre automático, sin dejarla desatendida, con un segundo operador) y no se usó la protección respiratoria y facial requerida.',
  checklist: [
    'Conozco dónde están los detectores, las alarmas y el pulsador de parada de emergencia del cuarto de máquinas.',
    'Sé hacia dónde evacuar según la dirección del viento y dónde está el punto de encuentro.',
    'Tengo a mano mi respirador de escape y sé cuándo NO es suficiente.',
    'Toda purga o apertura de línea se hace con procedimiento escrito, aislamiento y un segundo operador.',
    'Nunca dejo una válvula de purga abierta sin vigilancia.',
    'Verifico la presión en cero antes de abrir cualquier línea.',
    'Sé usar la ducha y el lavaojos, y que el lavado es de al menos 15 minutos.',
    'Si huelo amoniaco, aviso de inmediato; no voy solo a buscar la fuga.'
  ],
  onSiteClosure:
    'Práctica en su empresa: recorrer el sistema identificando válvulas de cierre de emergencia, detectores y salidas; hacer un simulacro de fuga con evacuación según el viento; y practicar la colocación del respirador y el uso de la ducha de emergencia.',

  modules: [
    {
      title: 'Qué es el amoniaco y cómo se comporta en una fuga',
      content: `
        <p>El <strong>amoniaco anhidro</strong> (NH₃), conocido en refrigeración como <strong>R-717</strong>, es uno de los refrigerantes industriales más usados en plantas de alimentos, bebidas, lácteos, cárnicos y cuartos fríos. Es muy eficiente, no daña la capa de ozono y no contribuye al calentamiento global, pero es <strong>tóxico</strong> y <strong>corrosivo</strong>.</p>
        <p><strong>Propiedades que explican su peligro:</strong></p>
        <ul>
          <li><strong>Olor penetrante</strong> que se percibe a concentraciones muy bajas. Es una buena alarma natural, pero el olfato se acostumbra y deja de percibirlo. No se usa el olfato para medir.</li>
          <li><strong>Hierve a unos −33 °C</strong> a presión atmosférica. En el sistema está como líquido a presión; cuando se escapa, se evapora de golpe y enfría todo lo que toca: puede congelar la piel.</li>
          <li><strong>Como gas puro es más liviano que el aire</strong> y tiende a subir.</li>
          <li><strong>Pero en una fuga de líquido</strong>, forma una <strong>nube fría y densa</strong> (una niebla blanca de gotas y vapor frío) que se mantiene cerca del piso, se mueve con el viento y puede viajar lejos antes de calentarse y subir.</li>
          <li><strong>Tiene gran afinidad por el agua</strong>: se disuelve en ella liberando calor. Por eso ataca los ojos, la boca, las vías respiratorias y la piel húmeda.</li>
          <li><strong>Es inflamable</strong> en un rango estrecho de concentraciones altas en el aire (aproximadamente entre 15 % y 28 %). Es difícil de encender al aire libre, pero en un cuarto de máquinas cerrado puede explotar.</li>
          <li><strong>Ataca el cobre, el latón y el zinc</strong>. En los sistemas de amoniaco se usan acero y materiales compatibles.</li>
        </ul>
        <p><strong>Dónde puede haber fugas:</strong> sellos de compresores y bombas, válvulas, bridas, uniones, purgadores, drenajes de aceite, evaporadores dañados por golpes de montacargas, tuberías corroídas bajo el aislamiento.</p>
        <p><strong>Por qué importa a todos, no solo a los operadores.</strong> Una fuga grande puede afectar a toda la planta y a los vecinos. Cualquier trabajador debe saber reconocer el olor, dar la alarma y evacuar en la dirección correcta.</p>
      `,
      keyPoints: [
        'El amoniaco (R-717) es tóxico, corrosivo y, en concentraciones altas en espacios cerrados, inflamable.',
        'Hierve a unos −33 °C: el líquido que escapa puede congelar la piel.',
        'Una fuga de líquido forma una nube fría y densa que se queda cerca del piso y se mueve con el viento.'
      ]
    },
    {
      title: 'Efectos en la salud y límites de exposición',
      content: `
        <p><strong>Cómo afecta al cuerpo.</strong> El amoniaco reacciona con la humedad de los tejidos y produce una sustancia alcalina que quema. Los efectos dependen de la concentración y del tiempo:</p>
        <ul>
          <li><strong>Concentraciones bajas</strong>: olor fuerte, molestia, irritación leve de ojos, nariz y garganta.</li>
          <li><strong>Concentraciones moderadas</strong>: lagrimeo intenso, tos, dolor de garganta, dificultad para respirar. Con exposiciones repetidas puede haber daños crónicos en las vías respiratorias.</li>
          <li><strong>Concentraciones altas</strong>: quemaduras en ojos y vías respiratorias, edema pulmonar (líquido en los pulmones, que puede aparecer horas después), asfixia y muerte.</li>
          <li><strong>Contacto con el líquido</strong>: quemaduras por congelación y químicas al mismo tiempo, lesiones graves en los ojos que pueden causar ceguera.</li>
        </ul>
        <p><strong>Límites de referencia.</strong> En Colombia se toman como referencia los valores límite permisibles de organismos internacionales. Para el amoniaco, los valores más usados son:</p>
        <ul>
          <li><strong>25 ppm</strong> como promedio ponderado en una jornada de 8 horas (ACGIH y NIOSH).</li>
          <li><strong>35 ppm</strong> como límite de exposición de corta duración, 15 minutos (ACGIH y NIOSH).</li>
          <li><strong>300 ppm</strong>: concentración <strong>inmediatamente peligrosa para la vida o la salud</strong> (IDLH, de NIOSH). Por encima de ese valor, o si no se conoce la concentración, solo se entra con equipo de respiración autónomo y como parte de un equipo de respuesta.</li>
        </ul>
        <p>"ppm" significa partes por millón. Para tener una idea: el olor se nota muy por debajo de 25 ppm, así que <strong>si huele, ya hay amoniaco en el aire</strong>; pero la intensidad del olor no indica si la concentración es peligrosa.</p>
        <p><strong>Quiénes son más vulnerables:</strong> personas con asma u otras enfermedades respiratorias, y quienes usan lentes de contacto (el amoniaco puede quedar atrapado bajo el lente).</p>
        <p><strong>Vigilancia de la salud.</strong> Los trabajadores expuestos deben estar incluidos en el programa de vigilancia médica de la empresa, con evaluaciones respiratorias según el riesgo.</p>
      `,
      keyPoints: [
        'El amoniaco quema ojos, vías respiratorias y piel; el edema pulmonar puede aparecer horas después.',
        'Referencias: 25 ppm (8 horas), 35 ppm (15 minutos) y 300 ppm como valor inmediatamente peligroso (IDLH).',
        'Si huele, ya hay amoniaco en el aire; la intensidad del olor no indica si es peligroso.'
      ]
    },
    {
      title: 'Cómo funciona un sistema de refrigeración con amoniaco',
      content: `
        <p>Conocer el sistema ayuda a entender dónde está el riesgo y por qué ciertas maniobras son peligrosas.</p>
        <p><strong>El ciclo básico:</strong></p>
        <ol>
          <li>El <strong>compresor</strong> aspira el amoniaco en gas a baja presión y lo comprime a alta presión y alta temperatura.</li>
          <li>En el <strong>condensador</strong> (normalmente evaporativo, en el techo o en el patio), el gas cede calor y se convierte en líquido a alta presión.</li>
          <li>El líquido se almacena en el <strong>recibidor</strong> de alta presión.</li>
          <li>Pasa por una <strong>válvula de expansión</strong>, donde baja la presión y la temperatura.</li>
          <li>En los <strong>evaporadores</strong> de los cuartos fríos o túneles de congelación, el líquido absorbe calor del producto y se evapora.</li>
          <li>El gas vuelve al compresor, muchas veces pasando por un <strong>separador o recirculador</strong> de baja presión.</li>
        </ol>
        <p><strong>Zonas de mayor riesgo:</strong></p>
        <ul>
          <li><strong>Lado de alta presión</strong> (descarga del compresor, condensador, recibidor): grandes cantidades de líquido a presión.</li>
          <li><strong>Recipientes de baja presión</strong> donde se acumula líquido frío y aceite.</li>
          <li><strong>Puntos de drenaje de aceite</strong>: el aceite del compresor se acumula en partes bajas y hay que retirarlo periódicamente.</li>
          <li><strong>Evaporadores</strong> en zonas con tráfico de montacargas.</li>
        </ul>
        <p><strong>Elementos de seguridad del sistema:</strong> válvulas de alivio de presión que descargan a un lugar seguro; válvulas de cierre manual y automáticas para aislar secciones; detectores de amoniaco con alarmas; ventilación del cuarto de máquinas, incluida una ventilación de emergencia; pulsador de parada de emergencia ubicado <strong>fuera</strong> del cuarto de máquinas; señalización de tuberías con el sentido de flujo y el estado (líquido, gas, alta o baja presión).</p>
        <p><strong>Normas técnicas de referencia.</strong> El Instituto Internacional de Refrigeración con Amoniaco (IIAR) publica normas sobre diseño, procedimientos de operación, inspección y mantenimiento, y criterios mínimos de seguridad de estos sistemas. En Estados Unidos, los sistemas con más de 10.000 libras de amoniaco deben cumplir además la norma de gestión de seguridad de procesos (OSHA 1910.119). Muchas plantas en Colombia adoptan estas referencias.</p>
      `,
      keyPoints: [
        'Ciclo: compresor, condensador, recibidor, válvula de expansión, evaporadores y retorno.',
        'Mayor riesgo en el lado de alta presión, los recipientes de baja con líquido y aceite, y los drenajes de aceite.',
        'Seguridad: válvulas de alivio y de cierre, detectores, ventilación de emergencia y parada de emergencia fuera del cuarto.'
      ]
    },
    {
      title: 'Marco normativo y gestión del riesgo',
      content: `
        <p><strong>En Colombia:</strong></p>
        <ul>
          <li>El <strong>Decreto 1072 de 2015</strong> obliga a identificar los peligros, evaluar los riesgos y aplicar controles por jerarquía, además de tener un plan de prevención, preparación y respuesta ante emergencias.</li>
          <li>El <strong>Decreto 1496 de 2018</strong> y la <strong>Resolución 773 de 2021</strong> exigen comunicar los peligros del amoniaco según el SGA: etiquetado de recipientes, ficha de datos de seguridad en español disponible y capacitación.</li>
          <li>El <strong>Decreto 1347 de 2021</strong> creó el Programa de Prevención de Accidentes Mayores (PPAM) para las instalaciones que manejan sustancias químicas peligrosas en cantidades iguales o superiores a los umbrales de su anexo. Las plantas con grandes cargas de refrigerante deben verificar si superan esos umbrales y, si es así, cumplir sus obligaciones.</li>
        </ul>
        <p><strong>La ficha de datos de seguridad del amoniaco</strong> lo clasifica con varios peligros del SGA: gas a presión, toxicidad aguda por inhalación, corrosión cutánea y lesiones oculares graves, toxicidad para los organismos acuáticos y, según la clasificación del proveedor, inflamabilidad. Revise los pictogramas de la FDS que tiene su empresa.</p>
        <p><strong>Elementos de una buena gestión del riesgo con amoniaco:</strong></p>
        <ul>
          <li>Planos y diagramas del sistema actualizados, con todas las válvulas identificadas en campo.</li>
          <li><strong>Procedimientos escritos</strong> para arranque, parada, purga de aceite, apertura de líneas, carga de refrigerante y emergencias.</li>
          <li>Análisis de riesgos del proceso cuando se diseña o se modifica el sistema.</li>
          <li><strong>Gestión del cambio</strong>: ninguna modificación (una válvula nueva, un evaporador adicional) se hace sin evaluarla antes.</li>
          <li>Programa de inspección y mantenimiento: detectores calibrados, válvulas de alivio dentro de su vida útil, revisión de corrosión bajo el aislamiento.</li>
          <li>Personal entrenado y autorizado para cada tarea.</li>
          <li>Plan de emergencias coordinado con la brigada y, cuando aplique, con los bomberos y los vecinos.</li>
        </ul>
        <p><strong>Contratistas.</strong> Los técnicos externos que intervienen el sistema deben conocer y aplicar los procedimientos de la planta y trabajar con permisos de trabajo.</p>
      `,
      keyPoints: [
        'Decreto 1072 de 2015 (controles y emergencias), Decreto 1496 de 2018 y Res. 773 de 2021 (SGA), y Decreto 1347 de 2021 (PPAM) si se superan los umbrales.',
        'Procedimientos escritos para purgas, aperturas de línea, cargas y emergencias.',
        'Gestión del cambio: ninguna modificación del sistema sin evaluación previa.'
      ]
    },
    {
      title: 'Purgas de aceite y aperturas de línea',
      content: `
        <p>Las tareas de mantenimiento en las que se abre el sistema son las que más accidentes producen, como la del caso con que empieza este curso.</p>
        <p><strong>Purga o drenaje de aceite.</strong> El aceite del compresor viaja con el amoniaco y se acumula en las partes bajas de recipientes y separadores. Hay que drenarlo periódicamente. Reglas de un procedimiento seguro:</p>
        <ul>
          <li>Solo la hace personal entrenado y autorizado, con el procedimiento escrito a la mano.</li>
          <li>Se hace con <strong>dos personas</strong>: una ejecuta y otra observa, lista para dar la alarma.</li>
          <li>El punto de drenaje tiene una válvula de bloqueo y una <strong>válvula de cierre automático</strong> (de resorte, que se cierra sola si se suelta).</li>
          <li>En lo posible, se reduce antes la presión del recipiente.</li>
          <li>El operador usa la protección indicada: como mínimo, respirador de cara completa con el cartucho para amoniaco y guantes resistentes. Debe tener vía de escape despejada.</li>
          <li><strong>La válvula nunca se deja abierta sin vigilancia</strong>, ni siquiera "un momento".</li>
          <li>El aceite drenado se recibe en un recipiente adecuado y se gestiona como residuo peligroso.</li>
        </ul>
        <p><strong>Apertura de líneas</strong> (cambiar una válvula, un sensor, un tramo de tubería):</p>
        <ol>
          <li>Permiso de trabajo y procedimiento escrito.</li>
          <li><strong>Aislar</strong> la sección cerrando y bloqueando las válvulas (aplicando LOTO), y verificar que las válvulas cierran bien.</li>
          <li><strong>Evacuar el amoniaco</strong> de la sección hacia otra parte del sistema (bombeo o succión del compresor) hasta presión cero o ligeramente negativa.</li>
          <li><strong>Verificar</strong> con el manómetro que no queda presión y que no vuelve a subir después de unos minutos: si sube, hay líquido atrapado o una válvula que pasa.</li>
          <li>Abrir con cuidado, aflojando los pernos del lado opuesto al cuerpo primero, con la protección completa y una ruta de escape.</li>
          <li>Al terminar, probar fugas antes de volver a poner en servicio.</li>
        </ol>
        <p><strong>Líquido atrapado.</strong> Un tramo de tubería lleno de amoniaco líquido y aislado entre dos válvulas cerradas puede romperse por la expansión térmica cuando se calienta. Por eso los procedimientos evitan dejar líquido atrapado y los sistemas tienen alivios donde se necesitan.</p>
      `,
      keyPoints: [
        'La purga de aceite se hace con procedimiento escrito, dos personas, válvula de cierre automático y nunca desatendida.',
        'Apertura de línea: aislar y bloquear, evacuar el amoniaco, verificar presión en cero y que no vuelva a subir.',
        'El líquido atrapado entre válvulas cerradas puede romper la tubería al calentarse.'
      ]
    },
    {
      title: 'Detección, ventilación y elementos de protección',
      content: `
        <p><strong>Detectores de amoniaco.</strong> Se instalan en el cuarto de máquinas y en las áreas donde una fuga puede afectar a las personas. Suelen tener varios niveles de alarma: uno bajo, que avisa para investigar, y uno alto, que activa la ventilación de emergencia, las alarmas de evacuación y, según el diseño, la parada del sistema. Deben calibrarse y probarse según el programa de mantenimiento.</p>
        <p><strong>Ventilación.</strong> El cuarto de máquinas tiene ventilación normal y una de emergencia que se activa con los detectores o con un pulsador. La descarga va a un lugar seguro, lejos de tomas de aire y de zonas ocupadas.</p>
        <p><strong>Elementos de protección según la situación:</strong></p>
        <ul>
          <li><strong>Respirador de escape</strong> o respirador de cara completa con cartucho para amoniaco: sirve para <strong>salir</strong> de un área con una fuga pequeña o para tareas de rutina con exposición baja y controlada. Los cartuchos tienen una vida limitada y no sirven en concentraciones altas.</li>
          <li><strong>Equipo de respiración autónomo (ERA o SCBA)</strong>: obligatorio cuando la concentración es desconocida, cuando puede superar el valor inmediatamente peligroso (300 ppm) o en la respuesta a una fuga. Solo lo usa personal entrenado.</li>
          <li><strong>Protección facial completa</strong>: el amoniaco ataca los ojos; las gafas abiertas no bastan.</li>
          <li><strong>Guantes</strong> de un material resistente al amoniaco, según la FDS (por ejemplo, butilo o neopreno), y aislados del frío cuando hay riesgo de contacto con líquido.</li>
          <li><strong>Traje de protección química</strong> para la respuesta a fugas con presencia de líquido.</li>
        </ul>
        <p><strong>Un tapabocas de tela o un respirador para polvo no protege</strong> contra el amoniaco. Es un error frecuente creer que cualquier "mascarilla" sirve.</p>
        <p><strong>Ajuste y entrenamiento.</strong> Un respirador solo protege si se ajusta bien a la cara (prueba de ajuste), si el trabajador sabe ponérselo rápido y si está en buen estado. La barba impide el sellado. Los equipos se revisan periódicamente y se guardan limpios, fuera del área de riesgo pero a la mano.</p>
        <p><strong>Duchas y lavaojos</strong> cerca del cuarto de máquinas y de los puntos de riesgo, en un lugar al que se llegue sin atravesar la zona de la posible fuga.</p>
      `,
      keyPoints: [
        'Los detectores tienen niveles de alarma que activan investigación, ventilación de emergencia y evacuación.',
        'Respirador con cartucho: solo para escape o exposiciones bajas; concentración desconocida o alta exige equipo autónomo.',
        'Un tapabocas de tela no protege; el respirador requiere buen ajuste y entrenamiento.'
      ]
    },
    {
      title: 'Respuesta a una fuga de amoniaco',
      content: `
        <p><strong>Si usted detecta olor a amoniaco o suena una alarma:</strong></p>
        <ol>
          <li><strong>No vaya solo a buscar la fuga.</strong> Aléjese del área.</li>
          <li><strong>Dé la alarma</strong> por el medio establecido e informe qué percibió y dónde.</li>
          <li>Si está entrenado y puede hacerlo sin entrar a la nube, active la <strong>parada de emergencia</strong> desde el pulsador exterior.</li>
          <li><strong>Evacúe según el viento.</strong> Observe una manga de viento o una bandera. Salga en dirección <strong>perpendicular</strong> a la dirección del viento para alejarse del recorrido de la nube, y luego diríjase al punto de encuentro ubicado <strong>en contra del viento</strong> (de donde viene el viento). Nunca camine en la misma dirección en que va el viento.</li>
          <li><strong>No entre a la niebla blanca</strong> ni a zonas bajas como fosos o sótanos, donde se acumula la nube fría.</li>
          <li>Repórtese en el punto de encuentro y avise si alguien falta.</li>
        </ol>
        <p><strong>Si queda atrapado en un lugar con amoniaco</strong> y no puede salir: busque un recinto cerrado, cierre puertas y ventanas, apague la ventilación que tome aire de afuera, cúbrase la boca y la nariz con un paño húmedo y comunique su ubicación.</p>
        <p><strong>La respuesta a la fuga</strong> (cerrar válvulas en la zona afectada, controlar la nube) solo la hace el equipo de respuesta entrenado, con equipo autónomo y traje químico, y nunca una sola persona.</p>
        <p><strong>El agua y el amoniaco.</strong> La brigada puede usar cortinas de agua pulverizada para absorber la nube, porque el amoniaco se disuelve en el agua. Pero <strong>nunca se echa agua directamente sobre un charco de amoniaco líquido</strong>: el calor que libera la reacción aumenta la evaporación y la nube. El agua contaminada se contiene: no debe llegar a ríos o alcantarillados.</p>
        <p><strong>Comunicación con la comunidad.</strong> En fugas grandes, la empresa debe avisar a los organismos de socorro y, según su plan, a los vecinos, indicándoles que se resguarden en sus casas o que evacúen.</p>
      `,
      keyPoints: [
        'Ante olor o alarma: no buscar la fuga solo, dar la alarma, activar la parada de emergencia si es seguro y evacuar.',
        'Evacuar perpendicular al viento y luego hacia un punto de encuentro en contra del viento; nunca entrar a la niebla.',
        'Solo el equipo de respuesta entrenado, con equipo autónomo, controla la fuga; no se echa agua sobre el líquido.'
      ]
    },
    {
      title: 'Primeros auxilios y después de la emergencia',
      content: `
        <p><strong>Regla número uno:</strong> no se convierta en otra víctima. No entre a rescatar a nadie a una zona con amoniaco sin el equipo autónomo y sin ser parte del equipo de respuesta. Dé la alarma y espere al equipo.</p>
        <p><strong>Inhalación:</strong></p>
        <ul>
          <li>Llevar a la persona al aire fresco, en contra del viento, una vez fuera de la zona contaminada.</li>
          <li>Mantenerla en reposo, semisentada si respira con dificultad, y abrigada.</li>
          <li>Si no respira, el personal entrenado inicia la reanimación y se activa la emergencia médica.</li>
          <li>Toda persona que haya inhalado amoniaco en cantidad apreciable debe ser valorada por un médico, aunque se sienta bien: el <strong>edema pulmonar puede aparecer horas después</strong>.</li>
        </ul>
        <p><strong>Ojos:</strong> lavar de inmediato con abundante agua, en el lavaojos, durante <strong>al menos 15 minutos</strong> (muchas fichas recomiendan más), manteniendo los párpados abiertos. Retirar los lentes de contacto si es posible. Atención médica urgente: las quemaduras oculares por amoniaco pueden empeorar en las horas siguientes.</p>
        <p><strong>Piel:</strong> retirar la ropa contaminada y lavar con abundante agua en la ducha de emergencia durante al menos 15 minutos. Si la ropa está congelada y pegada a la piel por el contacto con el líquido, <strong>no la arranque</strong>: descongélela con agua tibia y retírela con cuidado.</p>
        <p><strong>Qué no hacer:</strong> no neutralizar con ácidos ni vinagre, no aplicar cremas ni ungüentos, no frotar la piel congelada.</p>
        <p><strong>Lleve la ficha de datos de seguridad</strong> del amoniaco al centro médico.</p>
        <p><strong>Después de la emergencia:</strong></p>
        <ul>
          <li>Nadie vuelve a entrar hasta que el equipo de respuesta mida y autorice.</li>
          <li>El sistema no se vuelve a poner en servicio hasta reparar la causa y probar fugas.</li>
          <li>Se reporta el evento y se investiga con el equipo investigador, incluido el COPASST, para encontrar las causas y evitar que se repita.</li>
          <li>Se revisa el plan de emergencias con lo aprendido.</li>
        </ul>
      `,
      keyPoints: [
        'No entrar a rescatar sin equipo autónomo: dar la alarma y esperar al equipo de respuesta.',
        'Inhalación: aire fresco, reposo y valoración médica; el edema pulmonar puede aparecer horas después.',
        'Ojos y piel: lavar al menos 15 minutos; ropa congelada pegada se descongela con agua tibia, no se arranca.'
      ]
    }
  ],

  practices: [
    { q: '¿Con qué código se conoce el amoniaco como refrigerante?', options: ['R-134a', 'R-717', 'R-22'], answer: 1 },
    { q: '¿Qué valor de NIOSH se considera inmediatamente peligroso para la vida o la salud (IDLH) para el amoniaco?', options: ['300 ppm', '25 ppm', '5.000 ppm'], answer: 0 },
    { q: '¿Qué equipo convierte el amoniaco gaseoso de alta presión en líquido?', options: ['El evaporador', 'La válvula de expansión', 'El condensador'], answer: 2 },
    { q: '¿Qué norma colombiana creó el Programa de Prevención de Accidentes Mayores (PPAM)?', options: ['El Decreto 1347 de 2021', 'La Resolución 2013 de 1986', 'La Ley 1010 de 2006'], answer: 0 },
    { q: 'Durante una purga de aceite, el operador necesita ir por una herramienta. ¿Qué hace con la válvula de purga?', options: ['La deja abierta, porque regresa en un minuto', 'La deja abierta, pero pide al compañero que la mire de lejos', 'La cierra antes de alejarse'], answer: 2 },
    { q: '¿Cuándo es obligatorio usar un equipo de respiración autónomo frente al amoniaco?', options: ['Cuando la concentración es desconocida o puede superar 300 ppm', 'Siempre que se entra a una cámara de refrigeración de producto terminado', 'Solo cuando el olor es muy débil'], answer: 0 },
    { q: 'Hay una fuga y el viento sopla del norte hacia el sur. ¿Hacia dónde se evacúa primero?', options: ['Hacia el sur, en la misma dirección del viento', 'Hacia el este u oeste, de forma perpendicular al viento', 'Directo hacia la nube, para salir más rápido'], answer: 1 },
    { q: 'Un compañero inhaló amoniaco y ahora dice que se siente bien. ¿Qué corresponde?', options: ['Que vuelva a trabajar, porque ya pasó', 'Que tome leche para neutralizar el amoniaco', 'Que lo valore un médico, porque el edema pulmonar puede aparecer horas después'], answer: 2 }
  ],

  scenarios: [
    {
      scenario:
        'En el cuarto de máquinas se siente olor a amoniaco. Un operario quiere entrar a ver de dónde viene y solo tiene el tapabocas de tela del turno.',
      options: [
        { text: 'Lo dejo entrar rápido, para no perder tiempo en encontrar la fuga.', correct: false, feedback: 'Decisión insegura. El tapabocas de tela no protege contra el amoniaco y la concentración es desconocida.' },
        { text: 'Lo detengo, damos la alarma, evaluamos desde afuera con los detectores y solo entra el equipo de respuesta con la protección adecuada.', correct: true, feedback: 'Decisión correcta. Nadie busca una fuga solo ni sin protección respiratoria adecuada.' },
        { text: 'Le presto mi respirador para polvo, que es más grueso.', correct: false, feedback: 'Decisión insegura. Un respirador para polvo no filtra gases como el amoniaco.' }
      ]
    },
    {
      scenario:
        'Un trabajador recibe una salpicadura de amoniaco líquido en el antebrazo. Dice que "no es nada, solo está frío" y quiere seguir trabajando.',
      options: [
        { text: 'Lo dejo seguir si se seca el brazo con un trapo.', correct: false, feedback: 'Decisión insegura. El amoniaco líquido causa quemaduras químicas y por congelación que pueden empeorar.' },
        { text: 'Le pongo crema para quemaduras y una venda.', correct: false, feedback: 'Decisión insegura. No se aplican cremas; primero se lava con abundante agua.' },
        { text: 'Lo llevo a la ducha de emergencia, retiramos la ropa contaminada, lavamos al menos 15 minutos y lo enviamos a valoración médica.', correct: true, feedback: 'Decisión correcta. Lavado inmediato y prolongado, y atención médica.' }
      ]
    },
    {
      scenario:
        'Debes purgar aceite de un recipiente de baja presión. La válvula de bloqueo no está identificada, no hay procedimiento escrito en el sitio y tu compañero de turno está ocupado en otra área.',
      options: [
        { text: 'Hago la purga solo con cuidado, como la he hecho otras veces.', correct: false, feedback: 'Decisión insegura. Así ocurrió el accidente del caso del curso: sin procedimiento, sin segundo operador y sin la protección requerida.' },
        { text: 'Espero a tener el procedimiento escrito, la válvula identificada, la protección completa y un segundo operador antes de purgar.', correct: true, feedback: 'Decisión correcta. La purga es una tarea de alto riesgo que exige procedimiento, dos personas y protección.' },
        { text: 'Abro la válvula un poco y me alejo mientras sale el aceite, para no exponerme.', correct: false, feedback: 'Decisión insegura. Una válvula de purga nunca se deja abierta sin vigilancia.' }
      ]
    },
    {
      scenario:
        'Suena la alarma alta de amoniaco. Ves una niebla blanca saliendo por una puerta del cuarto de máquinas hacia el parqueadero. La manga de viento indica que el viento va hacia la portería.',
      options: [
        { text: 'Corro hacia la portería, que es la salida principal.', correct: false, feedback: 'Decisión insegura. Ir en la dirección del viento te lleva por el recorrido de la nube.' },
        { text: 'Me alejo de forma perpendicular al viento, evito la niebla y las zonas bajas, y voy al punto de encuentro ubicado en contra del viento.', correct: true, feedback: 'Decisión correcta. Salir perpendicular al viento te saca del recorrido de la nube.' },
        { text: 'Me refugio en el sótano del edificio de al lado hasta que pase.', correct: false, feedback: 'Decisión insegura. La nube fría de amoniaco se acumula en zonas bajas como sótanos y fosos.' }
      ]
    },
    {
      scenario:
        'Vas a cambiar una válvula en una línea de líquido. Aislaste la sección y bombeaste el amoniaco hasta que el manómetro marcó cero. Diez minutos después, el manómetro vuelve a marcar presión.',
      options: [
        { text: 'Abro la brida de una vez, porque ya había estado en cero.', correct: false, feedback: 'Decisión insegura. Si la presión sube, hay líquido atrapado o una válvula que pasa; abrir liberaría amoniaco.' },
        { text: 'Abro solo un poco la brida para dejar salir lo poco que queda.', correct: false, feedback: 'Decisión insegura. No sabes cuánto amoniaco hay; aflojar la brida puede liberar líquido.' },
        { text: 'No abro: informo, reviso si hay líquido atrapado o una válvula que no cierra bien, y repito la evacuación hasta que la presión se mantenga en cero.', correct: true, feedback: 'Decisión correcta. La presión debe mantenerse en cero antes de abrir.' }
      ]
    }
  ],

  exam: [
    {
      q: '¿Por qué el olfato no sirve para saber si la concentración de amoniaco es peligrosa?',
      options: [
        'Porque el olor se nota a concentraciones bajas, el olfato se acostumbra y la intensidad no indica el peligro.',
        'Porque el amoniaco no tiene olor en concentraciones peligrosas y solo se detecta con equipos de medición especiales.',
        'Porque solo huele cuando ya pasó de 300 ppm.'
      ],
      answer: 0
    },
    {
      q: 'En una fuga de amoniaco líquido, ¿cómo se comporta la nube que se forma?',
      options: [
        'Sube de inmediato y se dispersa en el aire, porque el amoniaco gaseoso es más liviano que el aire.',
        'Forma una niebla fría y densa que se queda cerca del piso y se mueve con el viento.',
        'Se queda quieta sobre el charco hasta que alguien la ventila con un extractor portátil.'
      ],
      answer: 1
    },
    {
      q: '¿Qué materiales ataca el amoniaco y por eso no se usan en sus sistemas?',
      options: [
        'El acero al carbono y el acero inoxidable.',
        'El vidrio y la cerámica.',
        'El cobre, el latón y el zinc.'
      ],
      answer: 2
    },
    {
      q: '¿Cuál es el límite de exposición de referencia para 8 horas al amoniaco (ACGIH y NIOSH)?',
      options: [
        '25 ppm.',
        '300 ppm, que es el valor que se puede respirar durante toda la jornada.',
        '1.000 ppm, porque por debajo de ese valor no hay efectos.'
      ],
      answer: 0
    },
    {
      q: '¿Por qué toda persona que inhaló amoniaco en cantidad apreciable debe ser valorada por un médico?',
      options: [
        'Porque así lo exige la ARL para pagar la incapacidad del trabajador expuesto.',
        'Porque el edema pulmonar puede aparecer horas después.',
        'Porque el amoniaco produce dependencia.'
      ],
      answer: 1
    },
    {
      q: '¿En qué parte del sistema hay grandes cantidades de amoniaco líquido a alta presión?',
      options: [
        'En los evaporadores de los cuartos fríos, después de la válvula de expansión.',
        'En la succión del compresor.',
        'En el condensador y el recibidor de alta presión.'
      ],
      answer: 2
    },
    {
      q: '¿Dónde debe estar el pulsador de parada de emergencia del sistema?',
      options: [
        'Fuera del cuarto de máquinas, para activarlo sin entrar a la zona de la fuga.',
        'Dentro del cuarto de máquinas, junto al compresor principal.',
        'En la oficina del jefe de mantenimiento, para controlar quién detiene el sistema de refrigeración.'
      ],
      answer: 0
    },
    {
      q: 'Según el Decreto 1347 de 2021, ¿cuándo debe una planta con amoniaco cumplir el Programa de Prevención de Accidentes Mayores?',
      options: [
        'Siempre que tenga cualquier cantidad de amoniaco.',
        'Cuando la cantidad de sustancias peligrosas iguale o supere los umbrales del anexo del decreto.',
        'Solo si la planta está ubicada en una zona urbana con vecinos a menos de 100 metros.'
      ],
      answer: 1
    },
    {
      q: '¿Qué es la gestión del cambio en un sistema de amoniaco?',
      options: [
        'Cambiar el amoniaco por otro refrigerante cada cinco años.',
        'Rotar al personal de operación entre los turnos de la semana.',
        'Evaluar cualquier modificación del sistema antes de hacerla.'
      ],
      answer: 2
    },
    {
      q: '¿Qué característica debe tener la válvula del punto de drenaje de aceite?',
      options: [
        'Debe ser de cierre automático, de resorte, que se cierre sola al soltarla.',
        'Debe ser de bronce, porque resiste mejor el frío del aceite que sale del recipiente.',
        'Debe quedar abierta de forma permanente para que el aceite salga solo durante el turno.'
      ],
      answer: 0
    },
    {
      q: 'Antes de abrir una línea, la presión llegó a cero, pero sube de nuevo minutos después. ¿Qué indica?',
      options: [
        'Que el manómetro está dañado y se puede abrir la brida sin problema.',
        'Que hay líquido atrapado o una válvula que no cierra bien; no se debe abrir.',
        'Que la temperatura del cuarto subió y es normal.'
      ],
      answer: 1
    },
    {
      q: '¿Por qué un tramo de tubería con amoniaco líquido, aislado entre dos válvulas cerradas, es peligroso?',
      options: [
        'Porque el amoniaco líquido se solidifica con el frío y tapa por completo la tubería.',
        'Porque las válvulas cerradas se oxidan más rápido con el amoniaco.',
        'Porque al calentarse el líquido se expande y puede romper la tubería.'
      ],
      answer: 2
    },
    {
      q: '¿Para qué sirve un respirador de cara completa con cartucho para amoniaco?',
      options: [
        'Para escapar de una fuga pequeña o para tareas de rutina con exposición baja y controlada.',
        'Para entrar a una nube de concentración desconocida y cerrar la válvula que está fugando.',
        'Para cualquier concentración, siempre que el cartucho sea nuevo.'
      ],
      answer: 0
    },
    {
      q: 'Hay una fuga y el viento sopla desde el cuarto de máquinas hacia el comedor. ¿Hacia dónde evacúa?',
      options: [
        'Hacia el comedor, que está en la misma dirección del viento.',
        'Perpendicular al viento y luego hacia un punto de encuentro en contra del viento.',
        'Hacia el cuarto de máquinas, para cerrar la válvula de la fuga.'
      ],
      answer: 1
    },
    {
      q: '¿Por qué no se echa agua directamente sobre un charco de amoniaco líquido?',
      options: [
        'Porque el agua congela el amoniaco y forma un bloque que tapa los desagües del cuarto de máquinas.',
        'Porque el agua está prohibida en los cuartos de máquinas por el riesgo eléctrico de los compresores.',
        'Porque el calor de la reacción aumenta la evaporación y la nube.'
      ],
      answer: 2
    },
    {
      q: 'La ropa de un trabajador quedó congelada y pegada a la piel por el amoniaco líquido. ¿Qué se hace?',
      options: [
        'Descongelarla con agua tibia y retirarla con cuidado.',
        'Arrancarla rápido para que la piel quede libre del contacto con el amoniaco.',
        'Dejarla puesta hasta que llegue al hospital, sin lavar la zona afectada.'
      ],
      answer: 0
    }
  ]
};
