/**
 * Curso: Manejo Seguro de Sustancias Químicas (SGA). Versión completa.
 * Normativa verificada: Ley 55 de 1993 (Convenio 170 OIT), Decreto 1496 de 2018 (adopta el SGA), Res. 773 de 2021
 * (acciones de los empleadores para aplicar el SGA en los lugares de trabajo), Decreto 1347 de 2021 (PPAM),
 * Decreto 1079 de 2015 (transporte de mercancías peligrosas).
 */
export default {
  id: 'sustancias-quimicas',
  title: 'Manejo Seguro de Sustancias Químicas (SGA)',
  hours: 1.5,
  category: 'prevencion_sst',
  regulation: 'Decreto 1496 de 2018 (SGA), Res. 773 de 2021, Ley 55 de 1993, Decreto 1072 de 2015',
  legalNotice:
    'Formación teórica en riesgo químico para trabajadores que almacenan, trasvasan o usan productos químicos. No reemplaza la ficha de datos de seguridad de cada producto, el entrenamiento en el puesto ni el plan de emergencias de la empresa.',
  summary:
    'Cómo entra un químico al cuerpo, qué exige la Resolución 773 de 2021, cómo leer los pictogramas y la etiqueta del SGA, cómo usar la ficha de datos de seguridad, cómo almacenar según compatibilidad, cómo trasvasar sin riesgo y qué hacer ante derrames y exposiciones.',
  fieldCase:
    'En una bodega de aseo industrial, un operario trasvasó hipoclorito de sodio y ácido muriático a envases sin etiqueta. Más tarde, otro compañero los mezcló creyendo que eran el mismo producto para "limpiar mejor". Se liberó gas cloro y dos operarios terminaron intoxicados en urgencias.',
  failureAnalysis:
    'Falla raíz: trasvase a recipientes sin etiqueta y desconocimiento de las incompatibilidades químicas. Nadie consultó la ficha de datos de seguridad.',
  checklist: [
    'Cada recipiente, incluidos los de trasvase, tiene su etiqueta SGA legible.',
    'Conozco dónde está la ficha de datos de seguridad (FDS) en español de cada producto que uso.',
    'Leí en la FDS los peligros, los elementos de protección y los primeros auxilios.',
    'Almaceno según la matriz de compatibilidad: ácidos lejos de bases, oxidantes lejos de inflamables.',
    'Trasvaso con el procedimiento: recipiente adecuado, etiqueta, embudo, bandeja y ventilación.',
    'Nunca uso envases de alimentos o bebidas para productos químicos.',
    'Sé dónde están el kit antiderrames, el lavaojos y la ducha de emergencia, y que funcionan.',
    'Nunca mezclo productos, salvo que el procedimiento lo indique.'
  ],
  onSiteClosure:
    'Práctica en su empresa: recorrer el almacén de químicos verificando etiquetas, FDS disponibles y segregación por compatibilidad; probar el lavaojos y la ducha; y hacer un simulacro de control de derrame con el kit de la empresa.',

  modules: [
    {
      title: 'El riesgo químico: cómo nos afecta un producto',
      content: `
        <p>En casi todas las empresas hay productos químicos: detergentes, desinfectantes, solventes, pinturas, combustibles, lubricantes, gases, ácidos y bases. Muchos accidentes ocurren con productos "de uso diario" que nadie considera peligrosos.</p>
        <p><strong>Vías de ingreso al cuerpo:</strong></p>
        <ul>
          <li><strong>Inhalación</strong>: gases, vapores, nieblas y polvos que se respiran. Es la vía más frecuente en el trabajo.</li>
          <li><strong>Contacto con la piel</strong>: algunos productos queman, otros irritan y otros atraviesan la piel sin dejar marca y pasan a la sangre.</li>
          <li><strong>Contacto con los ojos</strong>: una salpicadura de un corrosivo puede causar ceguera en segundos.</li>
          <li><strong>Ingestión</strong>: casi siempre por accidente: comer con las manos contaminadas o beber de un envase reutilizado.</li>
        </ul>
        <p><strong>Efectos agudos y crónicos.</strong> Los <em>agudos</em> aparecen enseguida: quemaduras, mareo, irritación, asfixia, intoxicación. Los <em>crónicos</em> aparecen después de meses o años de exposición a dosis pequeñas: daños en pulmones, hígado, riñones o sistema nervioso, dermatitis, alergias e incluso cáncer. Que un producto "no haga nada" hoy no significa que sea inofensivo.</p>
        <p><strong>No solo dañan la salud.</strong> Los productos químicos también tienen <strong>peligros físicos</strong>: pueden incendiarse, explotar, reaccionar con otros productos o liberar gases a presión. Y tienen <strong>peligros para el ambiente</strong> cuando llegan al agua o al suelo.</p>
        <p><strong>La dosis y el tiempo importan.</strong> El efecto depende de la cantidad que entra al cuerpo y de cuánto tiempo dura la exposición. Por eso los controles buscan reducir ambas: ventilar, encerrar los procesos, usar menos cantidad, trabajar menos tiempo expuesto y usar protección.</p>
        <p><strong>El caso del curso</strong> muestra el peligro más común en limpieza: mezclar un producto con cloro (hipoclorito) con un ácido libera gas cloro, muy irritante para las vías respiratorias. Mezclar hipoclorito con productos con amoniaco libera cloraminas, también tóxicas. Esto ocurre en casas y en empresas todos los días.</p>
      `,
      keyPoints: [
        'Vías de ingreso: inhalación, piel, ojos e ingestión; la inhalación es la más frecuente en el trabajo.',
        'Hay efectos agudos (inmediatos) y crónicos (tras meses o años); también peligros físicos y ambientales.',
        'Mezclar hipoclorito con ácidos libera gas cloro; con amoniaco, cloraminas.'
      ]
    },
    {
      title: 'El SGA en Colombia: Decreto 1496 de 2018 y Resolución 773 de 2021',
      content: `
        <p>El <strong>Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos (SGA)</strong> es un sistema de las Naciones Unidas para que un mismo producto se clasifique y se comunique igual en cualquier país: con los mismos pictogramas, las mismas frases y la misma estructura de ficha de datos de seguridad.</p>
        <p><strong>En Colombia:</strong></p>
        <ul>
          <li>La <strong>Ley 55 de 1993</strong> aprobó el Convenio 170 de la OIT sobre la seguridad en la utilización de los productos químicos en el trabajo.</li>
          <li>El <strong>Decreto 1496 de 2018</strong> adoptó el SGA en el país.</li>
          <li>La <strong>Resolución 773 de 2021</strong> de los Ministerios del Trabajo y de Salud definió las acciones que deben desarrollar los empleadores para aplicar el SGA en los lugares de trabajo.</li>
        </ul>
        <p><strong>Lo que la Resolución 773 de 2021 exige a la empresa, en términos generales:</strong></p>
        <ul>
          <li>Tener un <strong>inventario</strong> de los productos químicos que usa.</li>
          <li>Asegurarse de que sus proveedores entreguen productos <strong>clasificados y etiquetados</strong> según el SGA, con su <strong>ficha de datos de seguridad (FDS)</strong> en español.</li>
          <li>Mantener las etiquetas en todos los recipientes, incluidos los que se llenan por trasvase en la empresa.</li>
          <li>Tener las FDS <strong>disponibles</strong> para los trabajadores en el área de trabajo.</li>
          <li>Evaluar la exposición de los trabajadores y aplicar medidas de control.</li>
          <li><strong>Capacitar</strong> a los trabajadores en la comunicación de peligros: etiquetas, FDS, procedimientos y emergencias.</li>
        </ul>
        <p><strong>Obligaciones de los trabajadores:</strong> cumplir los procedimientos, usar los elementos de protección, no retirar ni dañar las etiquetas, informar sobre recipientes sin rotular y sobre cualquier situación de riesgo.</p>
        <p><strong>Otras normas relacionadas.</strong> El <strong>Decreto 1079 de 2015</strong> regula el transporte terrestre de mercancías peligrosas (con su propio sistema de rótulos para vehículos y embalajes). El <strong>Decreto 1347 de 2021</strong> creó el Programa de Prevención de Accidentes Mayores para las instalaciones que manejan sustancias peligrosas en cantidades iguales o superiores a los umbrales que fija la norma.</p>
        <p><strong>El SGA y el rombo de la NFPA 704.</strong> Muchas empresas en Colombia todavía usan el rombo de colores de la NFPA 704 (azul para salud, rojo para inflamabilidad, amarillo para inestabilidad, blanco para riesgos especiales, con números del 0 al 4). Es útil para los bomberos y para identificar tanques y áreas, pero <strong>no reemplaza</strong> la etiqueta del SGA.</p>
      `,
      keyPoints: [
        'El Decreto 1496 de 2018 adoptó el SGA; la Res. 773 de 2021 define cómo aplicarlo en los lugares de trabajo.',
        'La empresa debe tener inventario, etiquetas en todos los recipientes, FDS en español disponibles, evaluación de exposición y capacitación.',
        'El rombo NFPA 704 es complementario: no reemplaza la etiqueta SGA.'
      ]
    },
    {
      title: 'Los pictogramas del SGA y las palabras de advertencia',
      content: `
        <p>El SGA usa <strong>nueve pictogramas</strong>: un símbolo negro dentro de un rombo con borde rojo sobre fondo blanco. Cada uno agrupa un tipo de peligro.</p>
        <ul>
          <li><strong>Bomba explotando</strong>: explosivos, sustancias que reaccionan por sí solas, peróxidos orgánicos.</li>
          <li><strong>Llama</strong>: inflamables (líquidos, gases, aerosoles, sólidos), sustancias que se calientan solas o que liberan gases inflamables con el agua.</li>
          <li><strong>Llama sobre un círculo</strong>: comburentes u oxidantes, que aportan oxígeno y hacen que otros materiales ardan con más fuerza.</li>
          <li><strong>Cilindro de gas</strong>: gases a presión, que pueden explotar con el calor; los gases refrigerados pueden causar quemaduras por frío.</li>
          <li><strong>Corrosión</strong> (líquido que cae sobre una mano y un metal): corroe metales y causa quemaduras graves en la piel y lesiones en los ojos.</li>
          <li><strong>Calavera y tibias</strong>: toxicidad aguda grave; puede ser mortal en pequeñas cantidades.</li>
          <li><strong>Signo de exclamación</strong>: toxicidad aguda menor, irritación de piel, ojos o vías respiratorias, sensibilización de la piel, efectos narcóticos.</li>
          <li><strong>Peligro para la salud</strong> (silueta humana con una estrella en el pecho): efectos graves y a largo plazo: cáncer, daños genéticos, efectos en la reproducción, sensibilización respiratoria, daño a órganos, peligro por aspiración.</li>
          <li><strong>Medio ambiente</strong> (árbol seco y pez muerto): tóxico para los organismos acuáticos.</li>
        </ul>
        <p><strong>Palabras de advertencia.</strong> Indican la gravedad relativa del peligro:</p>
        <ul>
          <li><strong>"Peligro"</strong> para las categorías más graves.</li>
          <li><strong>"Atención"</strong> para las menos graves.</li>
        </ul>
        <p>La etiqueta lleva una sola palabra de advertencia, la que corresponde al peligro más grave del producto.</p>
        <p><strong>Ojo con el pictograma de "peligro para la salud".</strong> Es el que más se ignora porque los efectos no se ven el día de la exposición. Un solvente con este pictograma puede no causar molestias hoy y producir daño en el hígado o cáncer después de años. Merece tanto respeto como la calavera.</p>
        <p><strong>Un producto puede tener varios pictogramas.</strong> Por ejemplo, un solvente puede tener la llama (inflamable), el signo de exclamación (irritante) y el de peligro para la salud. Hay que tener en cuenta todos.</p>
      `,
      keyPoints: [
        'El SGA tiene nueve pictogramas en rombos con borde rojo: cada uno agrupa un tipo de peligro.',
        '"Peligro" indica las categorías más graves; "Atención", las menos graves.',
        'El pictograma de peligro para la salud advierte efectos a largo plazo como cáncer o daño a órganos.'
      ]
    },
    {
      title: 'La etiqueta SGA y los recipientes de trasvase',
      content: `
        <p><strong>Elementos de una etiqueta SGA:</strong></p>
        <ol>
          <li><strong>Identificador del producto</strong>: nombre comercial y, para mezclas, los componentes peligrosos.</li>
          <li><strong>Pictogramas</strong> de peligro.</li>
          <li><strong>Palabra de advertencia</strong>: "Peligro" o "Atención".</li>
          <li><strong>Indicaciones de peligro</strong> (frases H): describen el peligro, por ejemplo "Provoca quemaduras graves en la piel y lesiones oculares graves". Los códigos H2xx son peligros físicos, H3xx para la salud y H4xx para el ambiente.</li>
          <li><strong>Consejos de prudencia</strong> (frases P): cómo prevenir, responder, almacenar y eliminar, por ejemplo "Llevar guantes y gafas de protección" o "En caso de contacto con los ojos: aclarar cuidadosamente con agua durante varios minutos".</li>
          <li><strong>Identificación del proveedor</strong>: nombre, dirección y teléfono.</li>
        </ol>
        <p><strong>Recipientes de trasvase.</strong> Cuando un producto se pasa de su envase original a otro recipiente más pequeño para usarlo (un atomizador, un galón, una botella), <strong>el nuevo recipiente también debe etiquetarse</strong>. La etiqueta puede ser simplificada según el procedimiento de la empresa, pero debe mostrar como mínimo el nombre del producto, los pictogramas y la palabra de advertencia, y permitir llegar a la FDS.</p>
        <p><strong>Reglas que no tienen excepción:</strong></p>
        <ul>
          <li><strong>Nunca</strong> se usan envases de alimentos o bebidas (botellas de gaseosa, de agua, frascos de mermelada) para productos químicos. Alguien puede beber de ellos.</li>
          <li>Un recipiente sin etiqueta no se usa: se aparta, se reporta y se trata como residuo hasta identificarlo.</li>
          <li>Una etiqueta deteriorada se reemplaza antes de que sea ilegible.</li>
          <li>No se reutilizan envases vacíos de un químico para otro producto distinto.</li>
        </ul>
        <p><strong>El caso del curso</strong> empezó con dos recipientes sin etiqueta que parecían iguales. Con una etiqueta en cada uno, nadie los habría mezclado.</p>
      `,
      keyPoints: [
        'Etiqueta SGA: identificador, pictogramas, palabra de advertencia, frases H, frases P e identificación del proveedor.',
        'Todo recipiente de trasvase se etiqueta; un recipiente sin etiqueta no se usa.',
        'Nunca se usan envases de alimentos o bebidas para químicos.'
      ]
    },
    {
      title: 'La ficha de datos de seguridad (FDS)',
      content: `
        <p>La <strong>FDS</strong> es el documento técnico del producto. La entrega el fabricante o el proveedor, debe estar en <strong>español</strong> y tiene <strong>16 secciones</strong> en un orden fijo:</p>
        <ol>
          <li>Identificación del producto y del proveedor.</li>
          <li>Identificación de los peligros (incluye los elementos de la etiqueta).</li>
          <li>Composición e información sobre los componentes.</li>
          <li>Primeros auxilios.</li>
          <li>Medidas de lucha contra incendios.</li>
          <li>Medidas en caso de vertido accidental.</li>
          <li>Manipulación y almacenamiento.</li>
          <li>Controles de exposición y protección personal.</li>
          <li>Propiedades físicas y químicas.</li>
          <li>Estabilidad y reactividad.</li>
          <li>Información toxicológica.</li>
          <li>Información ecotoxicológica.</li>
          <li>Consideraciones relativas a la eliminación.</li>
          <li>Información relativa al transporte.</li>
          <li>Información reglamentaria.</li>
          <li>Otra información, con la fecha de la última revisión.</li>
        </ol>
        <p><strong>Las secciones que más usa un trabajador:</strong></p>
        <ul>
          <li><strong>Sección 2</strong> para saber qué peligros tiene.</li>
          <li><strong>Sección 4</strong> si alguien se expone: qué hacer en los ojos, en la piel, si lo inhaló o lo ingirió.</li>
          <li><strong>Sección 7</strong> para almacenarlo y manipularlo bien.</li>
          <li><strong>Sección 8</strong> para saber qué guantes, gafas y protección respiratoria usar, y sus límites de exposición.</li>
          <li><strong>Sección 10</strong> para saber con qué productos es incompatible y qué condiciones evitar.</li>
          <li><strong>Secciones 5 y 6</strong> en un incendio o un derrame.</li>
        </ul>
        <p><strong>Dónde debe estar.</strong> En el área de trabajo, en papel o en un medio digital al que todos los trabajadores puedan acceder sin pedir permiso y sin contraseñas que solo conozca una persona. En una emergencia no hay tiempo para buscarla en la oficina.</p>
        <p><strong>Si va al médico</strong> por una exposición, lleve la FDS o una foto de la etiqueta. Le ayuda al personal de salud a saber qué tratamiento dar.</p>
        <p><strong>FDS desactualizada o en otro idioma.</strong> Pídala al proveedor. Una FDS solo en inglés o con muchos años sin revisión no cumple su función.</p>
      `,
      keyPoints: [
        'La FDS tiene 16 secciones en orden fijo, en español, y la entrega el proveedor.',
        'Sección 2: peligros; 4: primeros auxilios; 7: almacenamiento; 8: protección personal; 10: incompatibilidades.',
        'Debe estar disponible en el área de trabajo, sin barreras, para consultarla en una emergencia.'
      ]
    },
    {
      title: 'Almacenamiento seguro y compatibilidad',
      content: `
        <p>Muchos accidentes químicos no ocurren al usar el producto, sino en el almacén: un derrame que alcanza otro producto, un recipiente que se rompe, una reacción entre dos productos guardados juntos.</p>
        <p><strong>Matriz de compatibilidad.</strong> Es una tabla que indica qué clases de productos pueden almacenarse juntas, cuáles deben separarse y cuáles nunca deben estar cerca. Se construye con la sección 10 de las FDS y con los pictogramas. Reglas generales:</p>
        <ul>
          <li><strong>Ácidos lejos de bases</strong> (álcalis): reaccionan con mucho calor.</li>
          <li><strong>Oxidantes</strong> (llama sobre un círculo) <strong>lejos de inflamables</strong> y de materiales combustibles como madera o cartón.</li>
          <li><strong>Hipoclorito lejos de ácidos y de productos con amoniaco.</strong></li>
          <li><strong>Productos que reaccionan con el agua</strong> lejos de duchas, tuberías y humedad.</li>
          <li><strong>Tóxicos</strong> en un lugar con acceso restringido.</li>
        </ul>
        <p><strong>Condiciones del almacén:</strong></p>
        <ul>
          <li>Ventilación natural o mecánica, iluminación y señalización.</li>
          <li><strong>Contención secundaria</strong>: bandejas o diques que retengan un derrame. Como buena práctica, se dimensionan para contener al menos el volumen del recipiente más grande, con un margen adicional.</li>
          <li>Estanterías firmes, con los recipientes más pesados y los corrosivos en los niveles bajos, nunca por encima de la altura de los ojos.</li>
          <li>Gabinetes especiales para líquidos inflamables cuando hay cantidades importantes.</li>
          <li>Cilindros de gas en posición vertical, asegurados con cadena, con su capuchón y separados por tipo de gas.</li>
          <li>Lejos de fuentes de calor, de la luz directa del sol y de las zonas de paso.</li>
          <li>Kit antiderrames, extintor adecuado, lavaojos y ducha cerca.</li>
        </ul>
        <p><strong>En el puesto de trabajo</strong> se tiene solo la cantidad necesaria para la jornada. Todo lo demás vuelve al almacén.</p>
        <p><strong>Inventario.</strong> Saber qué hay, cuánto y dónde permite planear las emergencias, eliminar productos que ya no se usan y detectar si una instalación se acerca a las cantidades del programa de prevención de accidentes mayores.</p>
      `,
      keyPoints: [
        'La matriz de compatibilidad, construida con las FDS, define qué se almacena junto y qué se separa.',
        'Ácidos lejos de bases; oxidantes lejos de inflamables; hipoclorito lejos de ácidos y amoniaco.',
        'Contención secundaria, corrosivos en niveles bajos, cilindros asegurados y solo la cantidad necesaria en el puesto.'
      ]
    },
    {
      title: 'Trasvase, uso seguro y elementos de protección',
      content: `
        <p><strong>Antes de trasvasar o usar un producto:</strong> leer la etiqueta y la FDS, preparar el recipiente correcto y etiquetado, y ponerse la protección indicada en la sección 8.</p>
        <p><strong>Procedimiento de trasvase:</strong></p>
        <ol>
          <li>Hacerlo en un lugar ventilado, sobre una bandeja de contención.</li>
          <li>Usar un recipiente compatible con el producto (algunos ácidos atacan ciertos metales; algunos solventes disuelven ciertos plásticos).</li>
          <li>Usar embudo, bomba manual o grifo, nunca verter "a pulso" desde un tambor.</li>
          <li>Con líquidos inflamables, conectar a tierra y unir eléctricamente los recipientes metálicos, para evitar chispas por electricidad estática.</li>
          <li>Llenar sin rebosar, cerrar bien ambos recipientes y etiquetar el nuevo de inmediato.</li>
          <li>Limpiar cualquier goteo y lavarse las manos al terminar.</li>
        </ol>
        <p><strong>Diluciones.</strong> Al preparar soluciones de ácidos, se agrega siempre <strong>el ácido al agua</strong>, despacio, nunca el agua al ácido: el calor de la reacción puede hacer que el líquido salpique violentamente.</p>
        <p><strong>No mezclar.</strong> Ningún producto se mezcla con otro salvo que el procedimiento lo indique. "Hacerlo más fuerte" mezclando limpiadores es la causa clásica de intoxicaciones.</p>
        <p><strong>Jerarquía de controles.</strong> Antes de pensar en guantes y respiradores: ¿se puede sustituir por un producto menos peligroso?, ¿se puede encerrar el proceso o instalar extracción localizada?, ¿se puede reducir la cantidad o el tiempo de exposición? Los elementos de protección personal son la última barrera.</p>
        <p><strong>Elementos de protección según la FDS:</strong></p>
        <ul>
          <li><strong>Guantes</strong> del material indicado (nitrilo, neopreno, butilo, PVC...). Un guante de látex o de tela no protege contra muchos solventes y corrosivos.</li>
          <li><strong>Gafas de seguridad o monogafas</strong> contra salpicaduras, y careta cuando hay riesgo de salpicadura en la cara.</li>
          <li><strong>Protección respiratoria</strong> con el cartucho específico para el tipo de contaminante, y solo si la persona fue entrenada y su respirador se ajusta bien. Un tapabocas de tela no protege contra vapores químicos.</li>
          <li><strong>Delantal o traje</strong> resistente a químicos y botas, cuando hay riesgo de salpicaduras o derrames.</li>
        </ul>
        <p><strong>Higiene.</strong> No comer, beber ni fumar en las áreas con químicos; lavarse las manos antes de comer y al terminar el turno; no llevar la ropa contaminada a la casa.</p>
      `,
      keyPoints: [
        'Trasvase: lugar ventilado, bandeja, recipiente compatible, embudo, puesta a tierra con inflamables y etiqueta inmediata.',
        'Siempre el ácido al agua, nunca al revés; nunca mezclar productos por iniciativa propia.',
        'Primero sustitución y controles de ingeniería; el EPP, del material que indica la sección 8 de la FDS, es la última barrera.'
      ]
    },
    {
      title: 'Derrames, emergencias y primeros auxilios',
      content: `
        <p><strong>Ante un derrame, primero evaluar:</strong> ¿qué producto es?, ¿cuánto se derramó?, ¿hay personas expuestas?, ¿hay vapores, olor fuerte o fuentes de ignición cerca?</p>
        <p><strong>Derrame pequeño de un producto conocido</strong>, que el personal entrenado puede controlar:</p>
        <ol>
          <li>Avisar a las personas cercanas y aislar el área.</li>
          <li>Ponerse la protección que indica la FDS.</li>
          <li>Eliminar fuentes de ignición si el producto es inflamable y ventilar.</li>
          <li><strong>Contener</strong> el derrame con barreras o paños absorbentes para que no se extienda ni llegue a desagües.</li>
          <li><strong>Absorber</strong> con el material del kit antiderrames adecuado para ese producto.</li>
          <li><strong>Recoger</strong> en un recipiente etiquetado y gestionarlo como <strong>residuo peligroso</strong>.</li>
          <li>Limpiar la zona y reportar el incidente.</li>
        </ol>
        <p><strong>Derrame grande, de un producto desconocido o muy tóxico, o con personas afectadas:</strong> no intente controlarlo. Evacúe el área en dirección contraria al viento o a la propagación de los vapores, dé la alarma y espere a la brigada o a los organismos de emergencia con la FDS en la mano.</p>
        <p><strong>Primeros auxilios generales</strong> (siempre confirme con la sección 4 de la FDS):</p>
        <ul>
          <li><strong>Ojos</strong>: lavar de inmediato en el lavaojos con agua abundante durante al menos 15 minutos, con los párpados abiertos, y retirar los lentes de contacto si es fácil. Buscar atención médica.</li>
          <li><strong>Piel</strong>: retirar la ropa contaminada y lavar con agua abundante; en salpicaduras extensas, usar la ducha de emergencia.</li>
          <li><strong>Inhalación</strong>: llevar a la persona al aire fresco, sin exponerse uno mismo, y mantenerla en reposo. Si respira con dificultad, atención médica urgente.</li>
          <li><strong>Ingestión</strong>: no provocar el vómito salvo que la FDS lo indique, enjuagar la boca y buscar atención médica.</li>
        </ul>
        <p><strong>Nunca se neutraliza</strong> un ácido o una base sobre la piel o los ojos con otro químico: la reacción produce calor y empeora la lesión. Solo agua.</p>
        <p><strong>Lavaojos y duchas.</strong> Deben estar cerca de donde se manejan corrosivos, despejados, señalizados y probados periódicamente. Un lavaojos que no se ha abierto en meses puede soltar agua sucia u oxidada.</p>
        <p><strong>Información para el médico.</strong> Lleve la FDS o la etiqueta. En Colombia existen líneas de información toxicológica que orientan en emergencias con productos químicos; su número debe estar publicado en el área.</p>
      `,
      keyPoints: [
        'Derrame pequeño y conocido: aislar, protegerse, contener, absorber, recoger como residuo peligroso y reportar.',
        'Derrame grande, desconocido o con afectados: evacuar, dar la alarma y esperar a la brigada con la FDS.',
        'Ojos: lavar al menos 15 minutos; nunca neutralizar sobre la piel o los ojos.'
      ]
    }
  ],

  practices: [
    { q: '¿Cuál es la vía de ingreso de químicos más frecuente en el trabajo?', options: ['La ingestión', 'La inhalación', 'Las inyecciones accidentales'], answer: 1 },
    { q: '¿Qué norma colombiana adoptó el Sistema Globalmente Armonizado (SGA)?', options: ['El Decreto 1496 de 2018', 'La Resolución 2674 de 2013', 'El Decreto 614 de 1984'], answer: 0 },
    { q: '¿Qué indica el pictograma de la llama sobre un círculo?', options: ['Que el producto es tóxico para los peces', 'Que el producto es un gas a presión', 'Que el producto es comburente u oxidante'], answer: 2 },
    { q: 'Vas a pasar un desinfectante a un atomizador para usarlo en tu área. ¿Qué haces con el atomizador?', options: ['Lo etiquetas con el nombre, los pictogramas y la palabra de advertencia', 'Lo dejas sin etiqueta, porque solo lo usas tú', 'Le escribes "desinfectante" con marcador en la tapa'], answer: 0 },
    { q: '¿En qué sección de la FDS se encuentran los elementos de protección personal recomendados?', options: ['Sección 2', 'Sección 14', 'Sección 8'], answer: 2 },
    { q: '¿Con qué productos se debe evitar almacenar el hipoclorito de sodio?', options: ['Con agua potable', 'Con ácidos y con productos con amoniaco', 'Con papel absorbente'], answer: 1 },
    { q: 'Al preparar una dilución de ácido, ¿cuál es la forma correcta?', options: ['Agregar el ácido al agua, despacio', 'Agregar el agua al ácido, de una vez', 'Mezclar ambos al mismo tiempo en un balde'], answer: 0 },
    { q: '¿Cuánto tiempo mínimo se lavan los ojos tras una salpicadura química?', options: ['30 segundos', '2 minutos', 'Al menos 15 minutos'], answer: 2 }
  ],

  scenarios: [
    {
      scenario:
        'En la bodega hay un bidón de ácido muriático sin etiqueta. Un operario quiere pasar el contenido a una botella de gaseosa vacía para llevarlo a limpiar los pisos de los baños.',
      options: [
        { text: 'Lo dejo hacerlo, siempre que marque la botella con un marcador.', correct: false, feedback: 'Decisión insegura. Un envase de bebida puede confundirse y alguien podría tomar de él.' },
        { text: 'Le pido que use un recipiente adecuado, compatible y etiquetado con la etiqueta SGA, y reporto el bidón sin etiqueta para identificarlo y rotularlo.', correct: true, feedback: 'Decisión correcta. Recipientes adecuados y etiquetados evitan confusiones como la del caso del curso.' },
        { text: 'Le digo que lo use directamente desde el bidón sin etiqueta, para no trasvasar.', correct: false, feedback: 'Decisión insegura. Un recipiente sin etiqueta no se usa hasta identificarlo.' }
      ]
    },
    {
      scenario:
        'Se derramó un solvente en el piso del laboratorio. El área huele fuerte, hay un compañero cerca sin guantes y en la mesa de al lado hay una plancha de calentamiento encendida.',
      options: [
        { text: 'Seco rápido con un trapo para que el olor desaparezca.', correct: false, feedback: 'Decisión insegura. Sin protección te expones al solvente, y la plancha encendida puede encender los vapores.' },
        { text: 'Aviso, aíslo el área, apago la plancha si puedo hacerlo sin riesgo, ventilo, me pongo la protección de la FDS y contengo y absorbo con el kit; si el derrame es grande, evacúo y doy la alarma.', correct: true, feedback: 'Decisión correcta. Primero controlar la ignición y la exposición, luego contener con el kit adecuado.' },
        { text: 'Le echo agua para diluirlo y lo mando al sifón.', correct: false, feedback: 'Decisión insegura. El agua puede extender el solvente, y nunca se envía un químico al desagüe.' }
      ]
    },
    {
      scenario:
        'Vas a almacenar un nuevo producto de limpieza que contiene un ácido. En el único espacio libre del estante, justo al lado, hay galones de hipoclorito de sodio.',
      options: [
        { text: 'Lo pongo ahí, porque los dos son productos de limpieza.', correct: false, feedback: 'Decisión insegura. Un derrame podría mezclarlos y liberar gas cloro.' },
        { text: 'Lo pongo ahí, pero con una tabla separando los galones.', correct: false, feedback: 'Decisión insegura. Una tabla no contiene un derrame; deben estar separados según la matriz de compatibilidad.' },
        { text: 'Consulto la matriz de compatibilidad y lo ubico en otra zona, separado del hipoclorito, con su contención.', correct: true, feedback: 'Decisión correcta. La compatibilidad decide dónde se almacena, no el espacio disponible.' }
      ]
    },
    {
      scenario:
        'Debes pasar thinner de un tambor metálico de 55 galones a una caneca metálica de 5 galones. El compañero quiere hacerlo directo, inclinando el tambor, en la zona de pintura sin ventilación.',
      options: [
        { text: 'Lo hacemos en un lugar ventilado, con bomba manual, bandeja de contención, recipientes conectados a tierra y unidos entre sí, y etiquetamos la caneca.', correct: true, feedback: 'Decisión correcta. La puesta a tierra evita chispas por electricidad estática y la bandeja contiene los goteos.' },
        { text: 'Lo hacemos rápido para que no se acumulen vapores.', correct: false, feedback: 'Decisión insegura. La rapidez no evita la electricidad estática ni los derrames al inclinar un tambor pesado.' },
        { text: 'Lo hacemos con guantes de tela para no mancharnos.', correct: false, feedback: 'Decisión insegura. Los guantes de tela absorben el solvente y lo mantienen contra la piel.' }
      ]
    },
    {
      scenario:
        'Llega un producto nuevo para desengrasar las máquinas. La ficha de datos de seguridad que lo acompaña está solo en inglés y la etiqueta no tiene pictogramas.',
      options: [
        { text: 'Lo usamos igual: si se vende, debe ser seguro.', correct: false, feedback: 'Decisión insegura. Sin la información de peligros en español, nadie sabe qué protección usar ni qué hacer en una emergencia.' },
        { text: 'Lo apartamos y pedimos al proveedor la etiqueta SGA y la FDS en español antes de usarlo.', correct: true, feedback: 'Decisión correcta. La Res. 773 de 2021 exige productos etiquetados según el SGA y FDS en español disponibles.' },
        { text: 'Traducimos la FDS con el celular y empezamos a usarlo esta semana.', correct: false, feedback: 'Decisión incompleta. La traducción informal puede tener errores; lo correcto es exigir la información oficial al proveedor.' }
      ]
    }
  ],

  exam: [
    {
      q: '¿Qué es un efecto crónico de un producto químico?',
      options: [
        'Un daño que aparece tras meses o años de exposición a dosis pequeñas.',
        'Una quemadura inmediata en la piel.',
        'El olor fuerte que se siente al abrir un recipiente de solvente por primera vez en el día.'
      ],
      answer: 0
    },
    {
      q: '¿Qué ocurre si se mezcla hipoclorito de sodio con un ácido?',
      options: [
        'Se forma un desinfectante más potente que limpia mejor las superficies de los baños.',
        'Se libera gas cloro, muy irritante para las vías respiratorias.',
        'Se neutralizan y el resultado es agua.'
      ],
      answer: 1
    },
    {
      q: 'Según la Res. 773 de 2021, ¿cuál de estas es una obligación del empleador?',
      options: [
        'Fabricar sus propias fichas de datos de seguridad sin consultar al proveedor, para adaptarlas a la planta.',
        'Guardar las FDS bajo llave en la gerencia para evitar que se pierdan o se dañen en el área.',
        'Tener las FDS en español disponibles para los trabajadores en el área de trabajo.'
      ],
      answer: 2
    },
    {
      q: '¿Qué relación tiene el rombo NFPA 704 con la etiqueta SGA?',
      options: [
        'Es complementario y útil en emergencias, pero no reemplaza la etiqueta SGA.',
        'Lo reemplaza por completo desde el Decreto 1496 de 2018.',
        'Es el único sistema permitido en Colombia para identificar productos en las bodegas.'
      ],
      answer: 0
    },
    {
      q: '¿Qué tipo de peligro indica el pictograma de la silueta humana con una estrella en el pecho?',
      options: [
        'Gases a presión.',
        'Efectos graves a largo plazo, como cáncer o daño a órganos.',
        'Productos corrosivos para los metales.'
      ],
      answer: 1
    },
    {
      q: 'En una etiqueta SGA, ¿qué indica la palabra "Peligro"?',
      options: [
        'Que el producto es seguro para uso doméstico.',
        'Que el producto solo es peligroso para el medio ambiente, no para las personas que lo manipulan.',
        'Que el producto tiene peligros de las categorías más graves.'
      ],
      answer: 2
    },
    {
      q: '¿Qué son las frases H de una etiqueta SGA?',
      options: [
        'Indicaciones que describen el peligro del producto.',
        'Instrucciones para preparar la dilución del producto según el área de la planta donde se va a usar.',
        'Datos del fabricante.'
      ],
      answer: 0
    },
    {
      q: 'Un trabajador pasa un desengrasante a un galón más pequeño. ¿Qué debe hacer con el galón?',
      options: [
        'Nada, porque el producto original ya tiene etiqueta.',
        'Etiquetarlo con al menos el nombre, los pictogramas y la palabra de advertencia.',
        'Usar una botella de agua vacía para que sea fácil de cargar.'
      ],
      answer: 1
    },
    {
      q: 'Una persona recibe una salpicadura en los ojos. ¿En qué sección de la FDS se consulta qué hacer?',
      options: [
        'En la sección 4, primeros auxilios.',
        'En la sección 14, información relativa al transporte terrestre, marítimo y aéreo del producto.',
        'En la sección 9, propiedades físicas y químicas del producto.'
      ],
      answer: 0
    },
    {
      q: '¿En qué sección de la FDS se consultan las incompatibilidades del producto?',
      options: [
        'En la sección 1, identificación del producto y del proveedor.',
        'En la sección 13, consideraciones relativas a la eliminación de los residuos.',
        'En la sección 10, estabilidad y reactividad.'
      ],
      answer: 2
    },
    {
      q: '¿Cuál de estas combinaciones NO debe almacenarse junta?',
      options: [
        'Dos galones del mismo detergente neutro.',
        'Un oxidante junto a un líquido inflamable.',
        'Guantes de nitrilo junto a gafas de seguridad.'
      ],
      answer: 1
    },
    {
      q: '¿Dónde se ubican los productos corrosivos en una estantería?',
      options: [
        'En los niveles bajos, nunca por encima de la altura de los ojos.',
        'En el nivel más alto, lejos del alcance de las personas que pasan por el almacén.',
        'En cualquier nivel, siempre que la tapa esté bien cerrada.'
      ],
      answer: 0
    },
    {
      q: 'Al trasvasar un líquido inflamable entre recipientes metálicos, ¿por qué se conectan a tierra?',
      options: [
        'Para que el líquido fluya más rápido entre los recipientes.',
        'Para que el recipiente no se oxide con el tiempo.',
        'Para evitar chispas por electricidad estática.'
      ],
      answer: 2
    },
    {
      q: '¿Qué protección respiratoria sirve contra los vapores de un solvente?',
      options: [
        'Un tapabocas de tela, bien ajustado a la cara del trabajador.',
        'Un respirador con el cartucho específico para ese contaminante, con entrenamiento y buen ajuste.',
        'Un pañuelo húmedo, porque el agua atrapa los vapores.'
      ],
      answer: 1
    },
    {
      q: 'Se derramaron 200 litros de un producto desconocido y dos personas se sienten mareadas. ¿Qué se hace?',
      options: [
        'Evacuar, dar la alarma y esperar a la brigada con la información disponible del producto.',
        'Intentar contenerlo con el kit antiderrames del área antes de que se extienda.',
        'Echarle agua abundante para diluirlo y que pierda su efecto.'
      ],
      answer: 0
    },
    {
      q: 'Un trabajador recibe una salpicadura de un ácido en la piel. ¿Qué NO se debe hacer?',
      options: [
        'Retirar la ropa contaminada.',
        'Lavar con agua abundante, usando la ducha si la salpicadura es extensa.',
        'Aplicar una base sobre la piel para neutralizar el ácido.'
      ],
      answer: 2
    }
  ]
};
