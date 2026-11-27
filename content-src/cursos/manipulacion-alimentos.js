/**
 * Curso: Manipulación Higiénica de Alimentos (BPM). Versión completa.
 * Régimen especial: Res. 2674 de 2013 (MinSalud) — reconocimiento médico de aptitud y plan de capacitación
 * continuo (mínimo 10 horas anuales). La autoridad sanitaria territorial puede exigir requisitos al capacitador.
 * Temperaturas: referencias de buena práctica (zona de peligro, cocción y enfriamiento, FDA Food Code / OMS).
 */
export default {
  id: 'manipulacion-alimentos',
  title: 'Manipulación Higiénica de Alimentos (BPM)',
  hours: 1.5,
  category: 'regimen_especial',
  regulation: 'Resolución 2674 de 2013 (Ministerio de Salud y Protección Social), Ley 9 de 1979; referencias técnicas: OMS (cinco claves para la inocuidad) y FDA Food Code',
  legalNotice:
    'ATENCIÓN MARCO LEGAL ESPECIAL: según la Res. 2674 de 2013, los manipuladores de alimentos deben tener reconocimiento médico de aptitud y recibir capacitación continua, con un mínimo de 10 horas al año. Esta constancia cubre 1,5 horas de ese plan. Valide con la Secretaría de Salud de su municipio si exige que el capacitador o la entidad estén inscritos o autorizados.',
  summary:
    'Por qué los alimentos enferman, qué exige la Res. 2674 de 2013 al manipulador, la higiene personal y el lavado de manos, la contaminación cruzada y los alérgenos, el control de temperaturas, la recepción y el almacenamiento, la limpieza, desinfección y control de plagas, y qué hacer ante un posible brote.',
  fieldCase:
    'En un casino de empresa se cortó pollo crudo en una tabla y, sin lavarla ni desinfectarla, se usó la misma tabla para picar la ensalada. Esa tarde, varios trabajadores presentaron diarrea, fiebre y vómito. El laboratorio confirmó Salmonella.',
  failureAnalysis:
    'Falla raíz: contaminación cruzada por utensilios compartidos entre alimentos crudos y listos para consumir, sin un código de colores de tablas ni un procedimiento de limpieza y desinfección entre usos.',
  checklist: [
    'Tengo mi reconocimiento médico de aptitud vigente y reporto cualquier enfermedad antes de trabajar.',
    'Me lavo las manos al ingresar, al cambiar de tarea, después del baño y después de tocar crudos o basura.',
    'Uso uniforme limpio de color claro, cabello cubierto, uñas cortas sin esmalte y sin joyas.',
    'Separo crudos de cocidos y uso tablas y utensilios diferenciados.',
    'Controlo y registro las temperaturas de neveras, cocción y mantenimiento.',
    'Rotulo los alimentos y aplico la rotación: lo primero que vence es lo primero que sale.',
    'Limpio y desinfecto superficies y utensilios según el procedimiento.',
    'Reporto plagas, alimentos sospechosos y casos de enfermedad entre los consumidores.'
  ],
  onSiteClosure:
    'Práctica en su empresa: demostrar el lavado de manos ante el supervisor; verificar con el termómetro de la empresa la temperatura de una nevera y de un alimento cocido, y registrarla; aplicar el procedimiento de limpieza y desinfección de una superficie; y completar las horas restantes del plan anual de capacitación de la empresa.',

  modules: [
    {
      title: 'Las enfermedades transmitidas por alimentos y el marco legal',
      content: `
        <p>Una <strong>enfermedad transmitida por alimentos (ETA)</strong> es la que se produce al consumir alimentos o agua contaminados con microorganismos, sus toxinas, sustancias químicas o cuerpos extraños. Los síntomas más comunes son diarrea, vómito, dolor abdominal y fiebre, pero algunas ETA causan daños graves en riñones, sistema nervioso o en el embarazo, y pueden ser mortales en niños, adultos mayores y personas con defensas bajas.</p>
        <p>Un <strong>brote</strong> ocurre cuando dos o más personas se enferman después de consumir el mismo alimento. En comedores, casinos y restaurantes, un solo error puede enfermar a decenas de personas en una tarde, como en el caso del curso.</p>
        <p><strong>Microorganismos frecuentes:</strong></p>
        <ul>
          <li><strong>Salmonella</strong>: en pollo, huevos y carnes crudas o mal cocidas.</li>
          <li><strong>Escherichia coli</strong> patógena: en carne molida mal cocida, verduras contaminadas y agua.</li>
          <li><strong>Staphylococcus aureus</strong>: llega desde las manos, la nariz o heridas del manipulador y produce toxinas que no se destruyen al recalentar.</li>
          <li><strong>Listeria</strong>: crece incluso en refrigeración; peligrosa en embarazadas.</li>
          <li><strong>Norovirus</strong> y <strong>hepatitis A</strong>: se transmiten por manipuladores enfermos que no se lavan bien las manos.</li>
        </ul>
        <p><strong>Marco legal.</strong> La <strong>Resolución 2674 de 2013</strong> del Ministerio de Salud y Protección Social establece los requisitos sanitarios para quienes fabrican, procesan, preparan, envasan, almacenan, transportan, distribuyen y comercializan alimentos, incluidos los restaurantes y servicios de alimentación. Desarrolla las <strong>Buenas Prácticas de Manufactura (BPM)</strong>: las condiciones de instalaciones, equipos, personal, procesos y saneamiento que garantizan alimentos inocuos. La <strong>Ley 9 de 1979</strong> es el marco sanitario general.</p>
        <p><strong>Vigilancia.</strong> Las <strong>secretarías de salud</strong> municipales, distritales o departamentales inspeccionan los establecimientos y el <strong>INVIMA</strong> vigila la producción de alimentos de su competencia. Pueden aplicar medidas sanitarias como el cierre temporal o el decomiso.</p>
        <p><strong>Inocuidad</strong> significa que el alimento no causará daño a quien lo consume. Es responsabilidad de toda la cadena, y el manipulador es el último control antes del plato.</p>
      `,
      keyPoints: [
        'Una ETA se produce por alimentos con microorganismos, toxinas, químicos o cuerpos extraños.',
        'Res. 2674 de 2013: requisitos sanitarios y BPM para toda la cadena de alimentos, incluidos restaurantes.',
        'Vigilan las secretarías de salud y el INVIMA; el manipulador es el último control antes del plato.'
      ]
    },
    {
      title: 'El manipulador: estado de salud y capacitación obligatoria',
      content: `
        <p>Un <strong>manipulador de alimentos</strong> es toda persona que interviene directamente, aunque sea de forma ocasional, en actividades de fabricación, preparación, envase, almacenamiento, transporte o servicio de alimentos.</p>
        <p><strong>Estado de salud.</strong> La Resolución 2674 de 2013 exige:</p>
        <ul>
          <li>Un <strong>reconocimiento médico</strong> que certifique la aptitud para manipular alimentos, antes de empezar y al menos una vez al año, y cada vez que se considere necesario por razones clínicas o epidemiológicas, por ejemplo después de una enfermedad que pueda contaminar los alimentos.</li>
          <li>Que la empresa tome medidas para que <strong>no manipule alimentos</strong> ninguna persona de quien se sepa o se sospeche que padece una enfermedad que pueda transmitirse por los alimentos, o que tenga heridas infectadas, irritaciones de la piel o diarrea.</li>
        </ul>
        <p><strong>Su responsabilidad como manipulador:</strong> informar al supervisor <strong>antes de trabajar</strong> si tiene diarrea, vómito, fiebre, ictericia (piel u ojos amarillos), dolor de garganta con fiebre, secreción por oídos, ojos o nariz, o heridas y lesiones en manos y brazos. La empresa lo reubicará en tareas sin contacto con alimentos o lo enviará a valoración médica. Trabajar enfermo "para no fallar" es uno de los orígenes más comunes de los brotes.</p>
        <p><strong>Heridas pequeñas:</strong> se cubren con un vendaje impermeable de color visible y, encima, un guante.</p>
        <p><strong>Capacitación.</strong> La resolución exige que la empresa tenga un <strong>plan de capacitación continuo y permanente</strong> para los manipuladores, desde el momento de su contratación, con una <strong>intensidad mínima de 10 horas al año</strong>, sobre:</p>
        <ul>
          <li>prácticas higiénicas en la manipulación;</li>
          <li>los riesgos de contaminación y su control;</li>
          <li>limpieza y desinfección, y los demás programas del plan de saneamiento;</li>
          <li>las tareas específicas que realiza cada persona.</li>
        </ul>
        <p>El plan debe estar <strong>escrito, documentado y con evidencia</strong> de su cumplimiento. La capacitación puede darla la empresa, personas naturales o entidades con la idoneidad requerida. Algunas secretarías de salud verifican o exigen que el capacitador esté inscrito o autorizado: consulte en su municipio.</p>
        <p><strong>Este curso</strong> aporta 1,5 horas a ese plan. Las horas restantes y la práctica se completan en su empresa.</p>
      `,
      keyPoints: [
        'Reconocimiento médico de aptitud antes de empezar, al menos una vez al año y cuando haya razones clínicas.',
        'El manipulador enfermo, con diarrea o heridas infectadas, no manipula alimentos: lo informa antes de trabajar.',
        'Plan de capacitación continuo y documentado, con mínimo 10 horas al año.'
      ]
    },
    {
      title: 'Prácticas higiénicas y lavado de manos',
      content: `
        <p>Las manos son el principal vehículo de contaminación en la cocina. Las prácticas higiénicas exigidas por la Res. 2674 de 2013 apuntan a que el manipulador no lleve microorganismos al alimento.</p>
        <p><strong>Presentación personal:</strong></p>
        <ul>
          <li><strong>Uniforme limpio, de color claro</strong>, que permita ver la suciedad, sin bolsillos por encima de la cintura, de uso exclusivo en el área de trabajo. No se sale a la calle con él.</li>
          <li><strong>Cabello recogido y cubierto</strong> totalmente con gorro o malla; barba y bigote cubiertos.</li>
          <li><strong>Uñas cortas, limpias y sin esmalte</strong>; sin uñas postizas.</li>
          <li><strong>Sin joyas</strong>: anillos, relojes, pulseras, aretes ni piercings visibles. Guardan suciedad y pueden caer al alimento.</li>
          <li><strong>Calzado cerrado</strong>, limpio y antideslizante.</li>
          <li><strong>Tapabocas</strong> cuando lo exija el proceso, cubriendo nariz y boca.</li>
        </ul>
        <p><strong>Comportamientos prohibidos en las áreas de alimentos:</strong> comer, beber, masticar chicle, fumar, escupir, estornudar o toser sobre los alimentos, tocarse la cara, la nariz o el cabello, usar el celular mientras se manipula, y probar los alimentos con los dedos o con el mismo utensilio con que se revuelve.</p>
        <p><strong>Cuándo lavarse las manos:</strong></p>
        <ul>
          <li>Al ingresar al área de trabajo y al regresar de cualquier pausa.</li>
          <li><strong>Después de ir al baño.</strong></li>
          <li>Después de manipular alimentos crudos (carnes, pollo, pescado, huevos, verduras sin desinfectar).</li>
          <li>Después de tocar basura, dinero, el celular, la cara o el cabello, o de limpiar.</li>
          <li>Antes de manipular alimentos listos para consumir.</li>
          <li>Al cambiar de tarea y antes de ponerse guantes.</li>
        </ul>
        <p><strong>Cómo lavarse las manos:</strong></p>
        <ol>
          <li>Mojar manos y antebrazos con agua potable.</li>
          <li>Aplicar jabón y frotar <strong>al menos 20 segundos</strong>: palmas, dorsos, entre los dedos, uñas y muñecas.</li>
          <li>Cepillar las uñas si es necesario.</li>
          <li>Enjuagar con abundante agua.</li>
          <li>Secar con toalla desechable o secador; cerrar la llave con la toalla si no es de pedal o sensor.</li>
          <li>Aplicar desinfectante de manos si el procedimiento de la empresa lo indica.</li>
        </ol>
        <p><strong>Guantes:</strong> no reemplazan el lavado de manos. Se cambian al cambiar de tarea, si se rompen o se ensucian, y después de tocar crudos, basura o superficies sucias. Un guante sucio contamina igual que una mano sucia.</p>
      `,
      keyPoints: [
        'Uniforme claro y limpio, cabello cubierto, uñas cortas sin esmalte y sin joyas.',
        'Lavado de manos de al menos 20 segundos al ingresar, después del baño, tras tocar crudos o basura y al cambiar de tarea.',
        'Los guantes no reemplazan el lavado y se cambian al cambiar de tarea o si se ensucian.'
      ]
    },
    {
      title: 'Contaminación, contaminación cruzada y alérgenos',
      content: `
        <p><strong>Tipos de contaminación:</strong></p>
        <ul>
          <li><strong>Biológica</strong>: bacterias, virus, parásitos y hongos. Es la causa más frecuente de las ETA.</li>
          <li><strong>Química</strong>: residuos de productos de limpieza, plaguicidas, lubricantes, metales de utensilios inadecuados o exceso de aditivos.</li>
          <li><strong>Física</strong>: vidrio, metal, plástico, piedras, cabellos, uñas, joyas, astillas de madera.</li>
        </ul>
        <p><strong>Contaminación cruzada</strong> es el paso de contaminantes de un alimento, superficie o persona a otro alimento. Las formas más comunes:</p>
        <ul>
          <li>Usar la <strong>misma tabla o cuchillo</strong> para crudos y para alimentos listos para consumir, sin lavar y desinfectar entre usos (el caso del curso).</li>
          <li>Guardar <strong>carnes crudas encima</strong> de alimentos cocidos o listos en la nevera, de modo que los jugos goteen sobre ellos.</li>
          <li>Manos o guantes que tocan crudos y luego alimentos listos.</li>
          <li>Trapos de limpieza usados en varias superficies sin lavar.</li>
          <li>Productos químicos almacenados junto a los alimentos o en envases de alimentos.</li>
        </ul>
        <p><strong>Cómo evitarla:</strong></p>
        <ul>
          <li><strong>Código de colores</strong> para tablas y cuchillos (por ejemplo: rojo para carnes rojas, amarillo para pollo, azul para pescado, verde para verduras, blanco para lácteos y panadería). Lo importante es que la empresa defina el suyo y todos lo respeten.</li>
          <li>Separar <strong>zonas o momentos</strong> de trabajo para crudos y para listos para consumir.</li>
          <li>En la nevera: <strong>listos y cocidos arriba, crudos abajo</strong>, en recipientes tapados.</li>
          <li>Lavar y desinfectar superficies y utensilios entre un uso y otro.</li>
          <li>Productos químicos en un área separada, rotulados y en sus envases originales.</li>
        </ul>
        <p><strong>Alérgenos.</strong> Algunas personas tienen reacciones graves, incluso mortales, a alimentos como maní, frutos secos, leche, huevo, trigo (gluten), soya, pescado y mariscos. Para ellas, una traza basta. Por eso:</p>
        <ul>
          <li>Conocer los ingredientes de cada preparación y responder con verdad cuando un consumidor pregunte.</li>
          <li>Evitar el contacto cruzado: utensilios, aceites de fritura y superficies limpios al preparar un plato sin alérgenos.</li>
          <li>Ante la duda, decir "no sé" y consultar; nunca asegurar que un plato "no tiene" sin verificar.</li>
        </ul>
      `,
      keyPoints: [
        'Contaminación biológica, química y física; la biológica es la causa más frecuente de ETA.',
        'Contaminación cruzada: tablas compartidas, crudos sobre cocidos, manos y trapos; se evita con colores y separación.',
        'Alérgenos: conocer ingredientes, evitar el contacto cruzado y nunca asegurar sin verificar.'
      ]
    },
    {
      title: 'Control de temperaturas: la zona de peligro',
      content: `
        <p>Las bacterias se multiplican muy rápido entre <strong>5 °C y 60 °C</strong>: es la <strong>zona de peligro</strong>. En condiciones favorables, algunas duplican su número en unos 20 minutos. El objetivo es que los alimentos perecederos pasen el menor tiempo posible en ese rango.</p>
        <p><strong>Temperaturas de referencia (buenas prácticas de la OMS y del FDA Food Code):</strong></p>
        <ul>
          <li><strong>Refrigeración</strong>: a <strong>5 °C o menos</strong> (muchos procedimientos fijan 4 °C). El frío no mata las bacterias, solo las frena.</li>
          <li><strong>Congelación</strong>: a <strong>-18 °C o menos</strong>.</li>
          <li><strong>Cocción completa</strong>: el centro del alimento debe alcanzar al menos <strong>74 °C</strong> en pollo, carnes molidas, rellenos y recalentados. Se verifica con termómetro de punzón limpio y desinfectado, en la parte más gruesa.</li>
          <li><strong>Mantenimiento en caliente</strong> (baño de maría, vitrinas): a <strong>60 °C o más</strong>.</li>
          <li><strong>Mantenimiento en frío</strong> de ensaladas y postres: a <strong>5 °C o menos</strong>.</li>
        </ul>
        <p>La empresa debe tener su propio procedimiento con las temperaturas y tiempos definidos para sus productos; los valores anteriores son la referencia técnica más usada.</p>
        <p><strong>Enfriamiento de alimentos cocidos.</strong> Un error frecuente es dejar ollas grandes enfriándose a temperatura ambiente durante horas o meterlas calientes y tapadas en la nevera, donde el centro tarda mucho en enfriarse. Lo correcto:</p>
        <ul>
          <li>Dividir en porciones pequeñas o recipientes poco profundos.</li>
          <li>Usar baño de hielo o abatidor de temperatura si lo hay.</li>
          <li>Enfriar rápido: como referencia, de 60 °C a 21 °C en 2 horas y a 5 °C en las 4 horas siguientes.</li>
        </ul>
        <p><strong>Descongelación segura:</strong> en la nevera, con anticipación; bajo agua potable fría corriendo; o en el microondas si se cocina de inmediato. <strong>Nunca</strong> sobre el mesón a temperatura ambiente. Un alimento descongelado no se vuelve a congelar crudo.</p>
        <p><strong>Recalentar:</strong> una sola vez, hasta 74 °C en el centro y rápido. No se mezcla comida recalentada con comida fresca.</p>
        <p><strong>Registrar.</strong> Las temperaturas de neveras, congeladores, cocción y mantenimiento se miden con termómetros calibrados y se registran en los formatos de la empresa. Si una nevera está por encima de 5 °C, se reporta de inmediato y se evalúa qué hacer con los alimentos, según cuánto tiempo estuvieron en la zona de peligro.</p>
      `,
      keyPoints: [
        'Zona de peligro: entre 5 °C y 60 °C; refrigeración a 5 °C o menos y congelación a -18 °C o menos.',
        'Cocción hasta 74 °C en el centro y mantenimiento caliente a 60 °C o más, medidos con termómetro.',
        'Enfriar rápido en porciones pequeñas; descongelar en nevera o agua fría corriendo, nunca en el mesón.'
      ]
    },
    {
      title: 'Recepción, almacenamiento y rotación',
      content: `
        <p><strong>Recepción de materias primas.</strong> La inocuidad empieza en la puerta. Al recibir:</p>
        <ul>
          <li>Comprar a <strong>proveedores confiables</strong>, con registro, notificación o permiso sanitario cuando el producto lo requiere.</li>
          <li>Verificar la <strong>temperatura</strong> de refrigerados y congelados al llegar; un congelado con signos de haberse descongelado se rechaza.</li>
          <li>Revisar <strong>fechas de vencimiento</strong>, rotulado e integridad de los empaques: latas abombadas, golpeadas u oxidadas, empaques rotos o húmedos se rechazan.</li>
          <li>Revisar las <strong>características del producto</strong>: olor, color, textura. Carnes con olor anormal o viscosas, pescado de ojos hundidos y opacos, frutas y verduras en descomposición se rechazan.</li>
          <li>Verificar las condiciones del vehículo de transporte: limpio y, para perecederos, refrigerado.</li>
          <li>Guardar de inmediato los refrigerados y congelados; no dejarlos en el muelle.</li>
        </ul>
        <p><strong>Almacenamiento:</strong></p>
        <ul>
          <li><strong>Nada en contacto directo con el piso</strong>: en estibas o estantes, separados de paredes y techos para permitir la limpieza y la ventilación.</li>
          <li>Áreas limpias, secas, ventiladas e iluminadas, protegidas de plagas.</li>
          <li>Separar alimentos de <strong>productos de limpieza y químicos</strong>, que van en un área aparte.</li>
          <li>En neveras: no sobrecargar (el aire frío debe circular), recipientes tapados, crudos abajo y listos arriba.</li>
          <li>Productos abiertos o preparados en recipientes adecuados, tapados y <strong>rotulados</strong> con el nombre, la fecha de preparación o apertura y la fecha límite de uso.</li>
          <li>No reutilizar envases de productos químicos para alimentos ni al revés.</li>
        </ul>
        <p><strong>Rotación de inventarios:</strong></p>
        <ul>
          <li><strong>PEPS</strong> (primero en entrar, primero en salir): lo que llegó antes se usa antes.</li>
          <li><strong>FEFO</strong> o PVPS (primero en vencer, primero en salir): cuando las fechas de vencimiento no siguen el orden de llegada, manda la fecha de vencimiento.</li>
          <li>Ubicar adelante lo más próximo a vencer.</li>
          <li>Retirar y separar los productos vencidos o deteriorados, identificándolos como no aptos para que nadie los use por error.</li>
        </ul>
        <p><strong>Un alimento vencido no se "aprovecha"</strong> cocinándolo, mezclándolo en otra preparación o regalándolo. Se descarta según el procedimiento.</p>
      `,
      keyPoints: [
        'Recepción: proveedores confiables, temperatura, fechas, empaques íntegros y características del producto.',
        'Nada en el piso, químicos separados, neveras sin sobrecargar y productos rotulados con fechas.',
        'Rotación PEPS y FEFO; los vencidos se separan y descartan, nunca se "aprovechan".'
      ]
    },
    {
      title: 'Limpieza, desinfección, agua, residuos y plagas',
      content: `
        <p>La Res. 2674 de 2013 exige a los establecimientos un <strong>plan de saneamiento</strong> escrito, con al menos cuatro programas: <strong>limpieza y desinfección</strong>, <strong>manejo de residuos</strong>, <strong>control de plagas</strong> y <strong>abastecimiento de agua potable</strong>. Cada programa define qué se hace, quién, cómo, con qué frecuencia y cómo se registra.</p>
        <p><strong>Limpiar no es lo mismo que desinfectar:</strong></p>
        <ul>
          <li><strong>Limpiar</strong> es retirar la suciedad visible, la grasa y los residuos de alimento con agua y detergente.</li>
          <li><strong>Desinfectar</strong> es reducir los microorganismos a niveles seguros con un desinfectante aprobado (por ejemplo, soluciones de cloro o amonios cuaternarios) o con calor.</li>
          <li>Se limpia <strong>primero</strong> y se desinfecta <strong>después</strong>: un desinfectante sobre una superficie sucia no funciona bien.</li>
        </ul>
        <p><strong>Pasos generales:</strong> retirar residuos → lavar con detergente → enjuagar → aplicar el desinfectante a la <strong>concentración y el tiempo de contacto</strong> que indique la ficha técnica → enjuagar si el producto lo exige → dejar secar al aire.</p>
        <p><strong>Reglas clave:</strong></p>
        <ul>
          <li>Preparar las soluciones con la medida indicada; "más cloro" no desinfecta mejor y puede contaminar el alimento.</li>
          <li><strong>Nunca mezclar productos</strong> (por ejemplo, cloro con amoníaco o con ácidos): generan gases tóxicos.</li>
          <li>Tablas, cuchillos y superficies que tocan alimentos se limpian y desinfectan entre usos con alimentos diferentes, especialmente entre crudos y listos.</li>
          <li>Trapos y esponjas se cambian, lavan y desinfectan con frecuencia, o se usan desechables.</li>
        </ul>
        <p><strong>Agua potable.</strong> Toda el agua que entra en contacto con los alimentos, las superficies y las manos debe ser potable. Los tanques de almacenamiento se lavan y desinfectan periódicamente. El hielo se fabrica con agua potable y se manipula con pala, nunca con las manos ni con el vaso.</p>
        <p><strong>Residuos:</strong> canecas con tapa de pedal, identificadas, retiradas con frecuencia del área de preparación y almacenadas en un lugar separado. Después de manipular basura, lavado de manos.</p>
        <p><strong>Control de plagas</strong> (cucarachas, roedores, moscas): se previene impidiendo que entren (mallas, sellos en puertas y desagües), que encuentren comida (alimentos tapados, sin residuos) y que encuentren refugio (orden y aseo). Las aplicaciones químicas las hace una empresa autorizada, sin alimentos expuestos. El manipulador <strong>reporta</strong> cualquier señal: excrementos, roeduras, insectos vivos o muertos.</p>
      `,
      keyPoints: [
        'Plan de saneamiento: limpieza y desinfección, residuos, control de plagas y agua potable.',
        'Primero limpiar, luego desinfectar, con la concentración y el tiempo indicados; nunca mezclar productos.',
        'Agua e hielo potables, basura tapada y retirada, y reportar cualquier señal de plagas.'
      ]
    },
    {
      title: 'Servicio, quejas y qué hacer ante un posible brote',
      content: `
        <p><strong>Durante el servicio:</strong></p>
        <ul>
          <li>Mantener los alimentos calientes a 60 °C o más y los fríos a 5 °C o menos, y medir periódicamente.</li>
          <li>Usar pinzas, cucharones o guantes para servir; nunca las manos desnudas en alimentos listos para consumir.</li>
          <li>Tomar platos, vasos y cubiertos por la base o el mango, sin tocar donde va la comida o la boca.</li>
          <li>Proteger los alimentos expuestos con vitrinas o tapas.</li>
          <li>No rellenar recipientes con comida nueva sobre la que lleva horas en exhibición.</li>
          <li>Lo que sale a la mesa y regresa <strong>no se vuelve a servir</strong>.</li>
          <li>Descartar lo que estuvo en exhibición fuera de temperatura más tiempo del permitido por el procedimiento.</li>
        </ul>
        <p><strong>Transporte de alimentos preparados:</strong> en recipientes cerrados, limpios y que mantengan la temperatura, en vehículos limpios y sin transportar junto a químicos o animales.</p>
        <p><strong>Quejas de los consumidores.</strong> Toda queja sobre el alimento (sabor extraño, cuerpo extraño, malestar después de comer) se recibe con respeto, se <strong>registra</strong> y se informa al supervisor. Si es posible, se guarda una muestra del alimento implicado.</p>
        <p><strong>Muestras testigo.</strong> Muchos servicios de alimentación guardan en refrigeración una porción rotulada de cada preparación servida durante un tiempo definido. Si hay un brote, permiten al laboratorio identificar el alimento responsable.</p>
        <p><strong>Ante un posible brote</strong> (varias personas con síntomas después de comer en el mismo lugar):</p>
        <ol>
          <li>Informar de inmediato al supervisor o al responsable del servicio.</li>
          <li><strong>No descartar</strong> los alimentos sospechosos ni las muestras testigo: separarlos, rotularlos y guardarlos en refrigeración.</li>
          <li>Suspender el servicio de las preparaciones sospechosas.</li>
          <li>La empresa notifica a la <strong>secretaría de salud</strong>, que investiga el brote, toma muestras y define medidas.</li>
          <li>Identificar a los manipuladores que participaron y su estado de salud.</li>
          <li>Colaborar con la investigación con información veraz: qué se preparó, cómo, a qué temperaturas y quién lo manipuló.</li>
        </ol>
        <p><strong>Las visitas de inspección sanitaria</strong> revisan instalaciones, registros de temperaturas, plan de saneamiento, reconocimientos médicos y capacitación del personal. Tener los registros al día es la mejor evidencia de que se trabaja bien.</p>
        <p><strong>La regla de oro:</strong> si tiene dudas sobre la inocuidad de un alimento, no lo sirva. Ante la duda, se descarta.</p>
      `,
      keyPoints: [
        'Servir con utensilios, mantener temperaturas y nunca volver a servir lo que regresa de la mesa.',
        'Quejas registradas; muestras testigo rotuladas en refrigeración.',
        'Posible brote: avisar, no descartar alimentos sospechosos ni muestras y notificar a la secretaría de salud.'
      ]
    }
  ],

  practices: [
    { q: '¿Qué es una enfermedad transmitida por alimentos (ETA)?', options: ['La que se produce al consumir alimentos o agua contaminados', 'Una alergia a cualquier comida', 'El cansancio después de comer mucho'], answer: 0 },
    { q: 'Según la Res. 2674 de 2013, ¿cuál es la intensidad mínima anual de capacitación del manipulador?', options: ['2 horas', '10 horas', '40 horas'], answer: 1 },
    { q: '¿Cuánto tiempo, como mínimo, se frotan las manos con jabón?', options: ['3 segundos', 'Lo que tarde en mojarlas', 'Al menos 20 segundos'], answer: 2 },
    { q: 'En la nevera, ¿dónde se guardan las carnes crudas?', options: ['En los niveles bajos, tapadas, debajo de los alimentos listos', 'En el nivel más alto', 'Junto con las ensaladas'], answer: 0 },
    { q: '¿Cuál es la zona de peligro de temperatura para los alimentos?', options: ['Entre -18 °C y 0 °C', 'Entre 5 °C y 60 °C', 'Por encima de 74 °C'], answer: 1 },
    { q: '¿Cuál es la forma correcta de descongelar un pollo?', options: ['Sobre el mesón durante la noche', 'En agua caliente estancada', 'En la nevera, con anticipación'], answer: 2 },
    { q: '¿Qué significa FEFO (primero en vencer, primero en salir)?', options: ['Que se usa primero lo que vence primero', 'Que se usa primero lo más barato', 'Que se usa primero lo que está más cerca de la puerta'], answer: 0 },
    { q: '¿En qué orden se hace el saneamiento de una superficie?', options: ['Primero se desinfecta y luego se limpia', 'Primero se limpia y luego se desinfecta', 'Solo se desinfecta'], answer: 1 }
  ],

  scenarios: [
    {
      scenario:
        'Acabas de cortar pollo crudo y tu compañero te pide que pases la misma tabla y el mismo cuchillo para picar la lechuga de la ensalada.',
      options: [
        { text: 'Los paso enjuagados con agua.', correct: false, feedback: 'Decisión insegura. El agua sola no elimina la Salmonella, como en el caso del curso.' },
        { text: 'Uso una tabla y un cuchillo del color asignado a verduras, y lavo y desinfecto los que usé con el pollo.', correct: true, feedback: 'Decisión correcta. Separar crudos y listos evita la contaminación cruzada.' },
        { text: 'Volteo la tabla y uso el otro lado.', correct: false, feedback: 'Decisión insegura. Los jugos del pollo pasan por los bordes y a las manos.' }
      ]
    },
    {
      scenario:
        'Al empezar el turno, el termómetro de la nevera de carnes marca 9 °C. No sabes desde cuándo está así.',
      options: [
        { text: 'Sigo usando las carnes, porque están frías al tacto.', correct: false, feedback: 'Decisión insegura. A 9 °C las bacterias se multiplican, aunque la carne se sienta fría.' },
        { text: 'Bajo el termostato y no digo nada.', correct: false, feedback: 'Decisión incompleta. Hay que evaluar qué hacer con los alimentos que estuvieron en la zona de peligro.' },
        { text: 'Lo reporto al supervisor, lo registro y se evalúan los alimentos según el tiempo fuera de temperatura antes de usarlos.', correct: true, feedback: 'Decisión correcta. Se reporta, se registra y se decide con criterio sobre los alimentos.' }
      ]
    },
    {
      scenario:
        'Amaneciste con diarrea, pero hoy hay mucho trabajo en la cocina y no quieres dejar solos a tus compañeros.',
      options: [
        { text: 'Informo al supervisor antes de empezar para que me reubiquen sin contacto con alimentos o me envíen a valoración.', correct: true, feedback: 'Decisión correcta. Un manipulador con diarrea no manipula alimentos.' },
        { text: 'Trabajo con guantes y me lavo más las manos.', correct: false, feedback: 'Decisión insegura. Los guantes no evitan que contamine los alimentos.' },
        { text: 'Trabajo normal y tomo un medicamento para la diarrea.', correct: false, feedback: 'Decisión insegura. El medicamento oculta el síntoma, pero puede seguir transmitiendo la infección.' }
      ]
    },
    {
      scenario:
        'Quedó una olla grande de sopa caliente después del almuerzo. Un compañero propone taparla y dejarla en el mesón hasta la tarde para que se enfríe y luego guardarla.',
      options: [
        { text: 'La dejamos en el mesón tapada, así no le cae nada.', correct: false, feedback: 'Decisión insegura. Horas en la zona de peligro permiten que las bacterias se multipliquen.' },
        { text: 'La metemos así, entera y caliente, en la nevera.', correct: false, feedback: 'Decisión insegura. El centro de una olla grande tarda horas en enfriarse dentro de la nevera.' },
        { text: 'La dividimos en recipientes poco profundos, la enfriamos rápido con baño de hielo y la refrigeramos rotulada.', correct: true, feedback: 'Decisión correcta. El enfriamiento rápido en porciones pequeñas saca el alimento de la zona de peligro.' }
      ]
    },
    {
      scenario:
        'En la tarde, cinco trabajadores que almorzaron en el casino llegan a enfermería con vómito y diarrea. Un compañero propone botar lo que sobró del almuerzo "para evitar problemas".',
      options: [
        { text: 'Boto todo para que no le haga daño a nadie más.', correct: false, feedback: 'Decisión insegura. Sin los alimentos ni las muestras testigo no se puede identificar la causa.' },
        { text: 'Aviso al supervisor, separo y rotulo los alimentos sospechosos y las muestras testigo, y se suspende su servicio para que se notifique a la secretaría de salud.', correct: true, feedback: 'Decisión correcta. Conservar la evidencia permite investigar el brote y evitar otros.' },
        { text: 'Recaliento lo que sobró para que quede seguro y lo sirvo en la comida.', correct: false, feedback: 'Decisión insegura. Algunas toxinas no se destruyen al recalentar.' }
      ]
    }
  ],

  exam: [
    {
      q: '¿Qué establece la Res. 2674 de 2013?',
      options: [
        'Los requisitos sanitarios y las BPM para la cadena de alimentos.',
        'Los requisitos para el trabajo en alturas en restaurantes y cocinas industriales.',
        'Los precios máximos de los alimentos.'
      ],
      answer: 0
    },
    {
      q: '¿Con qué frecuencia mínima se hace el reconocimiento médico del manipulador?',
      options: [
        'Solo una vez, al ingresar a la empresa, y nunca más mientras siga contratado.',
        'Al menos una vez al año y cuando haya razones clínicas.',
        'Cada cinco años.'
      ],
      answer: 1
    },
    {
      q: '¿Qué debe hacer un manipulador que tiene diarrea o fiebre?',
      options: [
        'Trabajar con doble guante para no contaminar.',
        'Trabajar normalmente si se siente con fuerzas para terminar el turno completo.',
        'Informar al supervisor antes de trabajar para no manipular alimentos.'
      ],
      answer: 2
    },
    {
      q: '¿Cómo debe ser el uniforme del manipulador?',
      options: [
        'Limpio, de color claro y de uso exclusivo en el área.',
        'Oscuro, para que no se note la suciedad durante el turno de trabajo.',
        'El mismo que usa para venir de la casa.'
      ],
      answer: 0
    },
    {
      q: '¿Por qué no se usan anillos ni relojes al manipular alimentos?',
      options: [
        'Porque se pueden dañar con el agua.',
        'Porque guardan suciedad y pueden caer al alimento.',
        'Porque lo prohíbe el reglamento de presentación personal por razones estéticas.'
      ],
      answer: 1
    },
    {
      q: '¿Reemplazan los guantes el lavado de manos?',
      options: [
        'Sí, siempre que sean desechables y de la talla correcta para la mano.',
        'Sí, si se usan durante todo el turno sin quitárselos ni una vez para nada.',
        'No; se lavan las manos y los guantes se cambian si se ensucian.'
      ],
      answer: 2
    },
    {
      q: '¿Qué es la contaminación cruzada?',
      options: [
        'El paso de contaminantes de un alimento, superficie o persona a otro alimento.',
        'Mezclar dos recetas distintas.',
        'Cocinar dos alimentos a la vez en la misma estufa, aunque estén en ollas separadas.'
      ],
      answer: 0
    },
    {
      q: '¿Qué hacer si un cliente pregunta si un plato contiene maní y usted no está seguro?',
      options: [
        'Decirle que no tiene, para no perder la venta.',
        'Decir que no sabe y consultar los ingredientes antes de responder.',
        'Decirle que retire el maní con el tenedor si lo encuentra en el plato.'
      ],
      answer: 1
    },
    {
      q: '¿A qué temperatura debe llegar el centro del pollo para considerarse bien cocido?',
      options: [
        '40 °C, porque a esa temperatura ya se ve dorado por fuera.',
        '60 °C, la misma temperatura del baño de maría.',
        'Al menos 74 °C, medidos con termómetro.'
      ],
      answer: 2
    },
    {
      q: '¿Cuál es la temperatura de referencia para la refrigeración de alimentos perecederos?',
      options: [
        '5 °C o menos.',
        'Entre 10 °C y 15 °C.',
        'La temperatura ambiente de la cocina si está fresca.'
      ],
      answer: 0
    },
    {
      q: '¿Cómo se enfría correctamente una preparación cocida en gran cantidad?',
      options: [
        'Dejándola en la olla sobre el mesón hasta el día siguiente.',
        'Dividiéndola en recipientes poco profundos y enfriándola rápido.',
        'Metiendo la olla grande caliente y tapada en la nevera.'
      ],
      answer: 1
    },
    {
      q: '¿Qué se hace con una lata abombada al recibir un pedido?',
      options: [
        'Se acepta si la fecha de vencimiento está vigente.',
        'Se acepta y se usa primero, antes de que se dañe más.',
        'Se rechaza.'
      ],
      answer: 2
    },
    {
      q: '¿Cómo se almacenan los alimentos en la bodega?',
      options: [
        'En estibas o estantes, sin contacto con el piso y separados de los químicos.',
        'Directamente sobre el piso para que no se caigan.',
        'Junto a los productos de limpieza, para tener todo en un mismo lugar de la bodega.'
      ],
      answer: 0
    },
    {
      q: '¿Qué pasa si se mezcla cloro con amoníaco o con un ácido al limpiar?',
      options: [
        'Se obtiene un desinfectante más potente.',
        'Se generan gases tóxicos.',
        'No pasa nada, porque ambos son productos de limpieza que se venden juntos.'
      ],
      answer: 1
    },
    {
      q: '¿Qué programas incluye como mínimo el plan de saneamiento?',
      options: [
        'Solo el programa de limpieza, porque los demás los maneja el arrendador.',
        'Mercadeo, compras y ventas, que son los que mantienen el negocio.',
        'Limpieza y desinfección, residuos, control de plagas y agua potable.'
      ],
      answer: 2
    },
    {
      q: 'Varios comensales se enferman después del almuerzo. ¿Qué se hace con los alimentos sospechosos?',
      options: [
        'Separarlos, rotularlos y conservarlos en refrigeración para la investigación.',
        'Botarlos de inmediato para que nadie más los consuma por error.',
        'Recalentarlos bien hasta que hiervan y servirlos en la cena.'
      ],
      answer: 0
    }
  ]
};
