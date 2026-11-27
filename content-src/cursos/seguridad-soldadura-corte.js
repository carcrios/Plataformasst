/**
 * Curso: Seguridad en Soldadura y Corte. Versión completa.
 * Normativa: Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979, Res. 0491 de 2020 (espacios confinados).
 * Referencias técnicas: ANSI/AWS Z49.1, NFPA 51B, OSHA 29 CFR 1910.252-254. La IARC clasificó los humos de
 * soldadura como cancerígenos para humanos (grupo 1) en 2017.
 */
export default {
  id: 'seguridad-soldadura-corte',
  title: 'Seguridad en Soldadura y Corte (Oxicorte, MIG, TIG, Electrodo)',
  hours: 1.5,
  category: 'prevencion_sst',
  regulation: 'Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979; referencias: ANSI/AWS Z49.1, NFPA 51B, OSHA 1910.252-254',
  legalNotice:
    'Formación teórica en seguridad para soldadores y ayudantes. No certifica la competencia técnica en soldadura ni reemplaza el entrenamiento práctico con los equipos de la empresa ni el permiso de trabajo en caliente.',
  summary:
    'Los riesgos de cada proceso, los humos y gases según el metal, la radiación del arco y cómo elegir el filtro, el riesgo eléctrico del circuito de soldadura, el manejo seguro de cilindros y del equipo de oxicorte, los elementos de protección y la salud del soldador.',
  fieldCase:
    'Un soldador iba a hacer oxicorte con guantes engrasados por la tarea anterior. Al manipular el regulador de oxígeno, la grasa entró en contacto con el oxígeno a presión y se produjo una combustión súbita que le quemó la mano. El equipo tampoco tenía válvulas antirretroceso.',
  failureAnalysis:
    'Falla raíz: contacto de oxígeno a presión con grasa y ausencia de inspección del equipo de oxicorte antes de usarlo.',
  checklist: [
    'Sé qué metal y qué recubrimiento voy a soldar, y qué humos produce.',
    'Tengo extracción localizada o ventilación suficiente, y mantengo la cabeza fuera de la columna de humo.',
    'Mi careta tiene el filtro del tono adecuado y uso gafas de seguridad debajo.',
    'Hay mamparas para proteger a otras personas del arco.',
    'Cables, pinza y conexiones están en buen estado y la pinza de masa está cerca del punto de soldadura.',
    'Los cilindros están verticales, asegurados y con el oxígeno separado de los gases combustibles.',
    'El equipo de oxicorte tiene válvulas antirretroceso y pasó la prueba de fugas con agua jabonosa.',
    'Nada de grasa ni aceite en contacto con el oxígeno, reguladores ni guantes.'
  ],
  onSiteClosure:
    'Práctica en su empresa: inspeccionar un equipo de oxicorte con prueba de fugas, revisar cables y pinzas de una máquina de soldar, seleccionar el filtro de la careta para el proceso del día y verificar la extracción localizada del puesto.',

  modules: [
    {
      title: 'Los procesos de soldadura y corte y sus riesgos',
      content: `
        <p><strong>Procesos más comunes en la industria:</strong></p>
        <ul>
          <li><strong>Electrodo revestido (SMAW)</strong>: un arco eléctrico entre un electrodo con recubrimiento y la pieza. Versátil y muy usado en mantenimiento. Produce mucho humo y escoria.</li>
          <li><strong>MIG/MAG (GMAW)</strong>: alambre continuo con gas de protección, inerte (MIG) o activo como el CO₂ (MAG). Alta productividad; radiación intensa.</li>
          <li><strong>Alambre tubular (FCAW)</strong>: similar al MIG, con fundente dentro del alambre. Genera bastante humo.</li>
          <li><strong>TIG (GTAW)</strong>: electrodo de tungsteno que no se consume y gas inerte (argón). Poco humo, pero mucha radiación ultravioleta y producción de ozono, sobre todo con aluminio.</li>
          <li><strong>Oxicorte y soldadura oxigás</strong>: llama de oxígeno con un gas combustible (acetileno, propano, gas natural). Riesgos de incendio, explosión y retroceso de llama.</li>
          <li><strong>Corte por plasma</strong>: arco de alta energía con gas comprimido. Mucho ruido, radiación y humos.</li>
        </ul>
        <p><strong>Riesgos comunes a todos:</strong></p>
        <ul>
          <li><strong>Humos y gases</strong> tóxicos.</li>
          <li><strong>Radiación</strong> ultravioleta, infrarroja y luz visible intensa.</li>
          <li><strong>Choque eléctrico</strong> en los procesos de arco.</li>
          <li><strong>Incendio y explosión</strong> por chispas, escoria y gases.</li>
          <li><strong>Quemaduras</strong> por metal caliente, escoria y salpicaduras.</li>
          <li><strong>Ruido</strong>, especialmente en plasma, esmerilado y arco con aire.</li>
          <li><strong>Carga física</strong>: posturas forzadas, calor, trabajo sobre cabeza.</li>
          <li><strong>Atmósferas peligrosas</strong> al soldar en espacios confinados.</li>
        </ul>
        <p><strong>El soldador y los demás.</strong> Los riesgos no solo afectan a quien suelda. El ayudante, el vigía y los trabajadores cercanos respiran los mismos humos, reciben la radiación del arco y pueden ser alcanzados por chispas. Los controles deben proteger a todos.</p>
        <p><strong>Antes de empezar, cinco preguntas:</strong> ¿qué proceso voy a usar?, ¿qué metal y qué recubrimiento tiene la pieza?, ¿dónde voy a trabajar (taller, campo, espacio confinado, altura)?, ¿qué hay alrededor (combustibles, personas, químicos)?, ¿necesito permiso de trabajo en caliente?</p>
      `,
      keyPoints: [
        'Procesos: electrodo revestido, MIG/MAG, alambre tubular, TIG, oxigás y plasma, cada uno con riesgos propios.',
        'Riesgos comunes: humos y gases, radiación, choque eléctrico, incendio, quemaduras, ruido y carga física.',
        'Los riesgos afectan también al ayudante y a los trabajadores cercanos.'
      ]
    },
    {
      title: 'Marco normativo y referencias técnicas',
      content: `
        <p><strong>En Colombia</strong>, el <strong>Decreto 1072 de 2015</strong> obliga a identificar los peligros de la soldadura, evaluar los riesgos y aplicar controles; la <strong>Resolución 0312 de 2019</strong> pide procedimientos para las tareas de alto riesgo y la medición de los contaminantes a los que están expuestos los trabajadores. La <strong>Resolución 2400 de 1979</strong> (Estatuto de Seguridad Industrial) contiene disposiciones sobre soldadura, cilindros de gases y protección personal. Cuando se suelda dentro de tanques, ductos u otros espacios confinados, aplica además la <strong>Resolución 0491 de 2020</strong> sobre trabajo en espacios confinados.</p>
        <p><strong>Referencias técnicas internacionales</strong> que usan las empresas y sus clientes:</p>
        <ul>
          <li><strong>ANSI/AWS Z49.1</strong>, de la Sociedad Americana de Soldadura: seguridad en soldadura, corte y procesos afines. Es la referencia más completa para el oficio.</li>
          <li><strong>NFPA 51B</strong>: prevención de incendios durante los trabajos en caliente.</li>
          <li><strong>OSHA 29 CFR 1910.252 a 1910.254</strong> (Estados Unidos): requisitos para soldadura, oxigás y arco.</li>
        </ul>
        <p><strong>Un dato que cambió la forma de ver el oficio.</strong> En 2017, la Agencia Internacional para la Investigación del Cáncer (IARC), de la Organización Mundial de la Salud, clasificó los <strong>humos de soldadura como cancerígenos para los seres humanos (grupo 1)</strong>, por su relación con el cáncer de pulmón. También clasificó así la radiación ultravioleta de la soldadura. Eso significa que el humo de soldadura no es una simple molestia: hay que controlarlo siempre, no solo cuando "se ve mucho".</p>
        <p><strong>Responsabilidades:</strong> la empresa provee equipos en buen estado, ventilación, elementos de protección, capacitación y vigilancia de la salud; el soldador inspecciona su equipo, aplica los procedimientos, usa la protección y reporta las condiciones inseguras.</p>
        <p><strong>Competencia técnica y seguridad son distintas.</strong> Un soldador puede estar calificado para hacer soldaduras de alta calidad y, sin embargo, trabajar de forma insegura. Este curso trata la seguridad; la calificación del procedimiento y del soldador se rige por otras normas técnicas.</p>
      `,
      keyPoints: [
        'Decreto 1072 de 2015, Res. 0312 de 2019 y Res. 2400 de 1979; en espacios confinados, la Res. 0491 de 2020.',
        'ANSI/AWS Z49.1 es la referencia técnica principal de seguridad en soldadura.',
        'Desde 2017, la IARC clasifica los humos de soldadura como cancerígenos para humanos (grupo 1).'
      ]
    },
    {
      title: 'Humos y gases: qué se respira al soldar',
      content: `
        <p>El <strong>humo de soldadura</strong> son partículas muy finas de metales y óxidos que se forman cuando el metal se evapora en el arco y se condensa en el aire. Son tan pequeñas que llegan al fondo de los pulmones. Los <strong>gases</strong> se generan por la acción del calor y de la radiación sobre el aire, el gas de protección y los recubrimientos.</p>
        <p><strong>La composición depende del metal, del recubrimiento y del consumible:</strong></p>
        <ul>
          <li><strong>Acero galvanizado</strong> (con zinc): los humos de óxido de zinc causan la <strong>fiebre de los humos metálicos</strong>: escalofríos, fiebre, dolor muscular y sabor metálico horas después de soldar, parecido a una gripa.</li>
          <li><strong>Acero inoxidable</strong>: libera <strong>cromo hexavalente</strong> y <strong>níquel</strong>, ambos cancerígenos.</li>
          <li><strong>Electrodos y aceros con manganeso</strong>: la exposición prolongada al manganeso puede dañar el sistema nervioso, con síntomas parecidos al Parkinson.</li>
          <li><strong>Piezas pintadas</strong>: pueden liberar plomo, cadmio o productos de la descomposición de la pintura.</li>
        </ul>
        <p><strong>Gases:</strong></p>
        <ul>
          <li><strong>Ozono</strong>: se forma por la radiación ultravioleta, sobre todo en TIG y MIG con aluminio. Irrita las vías respiratorias.</li>
          <li><strong>Óxidos de nitrógeno</strong> y <strong>monóxido de carbono</strong> (este último, en MAG con CO₂ y en llamas de oxigás).</li>
          <li><strong>Fosgeno</strong>: muy tóxico. Se forma cuando la radiación del arco descompone los vapores de <strong>solventes clorados</strong> usados para desengrasar. Nunca se suelda cerca de piezas recién desengrasadas con estos solventes ni de tinas de desengrase.</li>
          <li><strong>Gases de protección</strong> (argón, CO₂): no son tóxicos, pero desplazan el oxígeno en espacios cerrados y pueden causar asfixia.</li>
        </ul>
        <p><strong>Controles, en orden de prioridad:</strong></p>
        <ol>
          <li><strong>Eliminar</strong> recubrimientos y pinturas de la zona a soldar, con métodos que no generen otro riesgo.</li>
          <li><strong>Extracción localizada</strong>: una campana o boquilla que capture el humo cerca del arco, ubicada y reposicionada a medida que avanza el trabajo. Es el control más eficaz.</li>
          <li><strong>Ventilación general</strong> del taller.</li>
          <li><strong>Posición de trabajo</strong>: mantener la cabeza fuera de la columna de humo que sube del arco.</li>
          <li><strong>Protección respiratoria</strong> cuando lo anterior no basta: respirador con filtros para partículas adecuados, o equipos con suministro de aire en espacios confinados o con contaminantes muy tóxicos. Un tapabocas de tela no protege.</li>
        </ol>
        <p><strong>Mediciones.</strong> La empresa debe evaluar la exposición de los soldadores con mediciones ambientales y personales, y usar los resultados para mejorar los controles.</p>
      `,
      keyPoints: [
        'Los humos dependen del metal: zinc (fiebre de humos metálicos), cromo y níquel (cancerígenos), manganeso (sistema nervioso).',
        'Nunca soldar cerca de solventes clorados: la radiación forma fosgeno, muy tóxico.',
        'Control más eficaz: extracción localizada cerca del arco; luego ventilación, posición y respirador adecuado.'
      ]
    },
    {
      title: 'Radiación del arco: ojos, piel y filtros',
      content: `
        <p>El arco de soldadura emite tres tipos de radiación:</p>
        <ul>
          <li><strong>Ultravioleta (UV)</strong>: no se ve, pero quema la piel como el sol (en minutos) y lesiona la córnea.</li>
          <li><strong>Infrarroja (IR)</strong>: se percibe como calor y puede dañar el cristalino y la retina con exposiciones repetidas.</li>
          <li><strong>Luz visible intensa</strong>: deslumbra y puede causar lesiones en la retina.</li>
        </ul>
        <p><strong>El "ojo de arco"</strong> (queratoconjuntivitis actínica) es la lesión más frecuente. Ocurre al mirar el arco sin protección, aunque sea unos segundos, o por reflejos. Los síntomas aparecen <strong>horas después</strong>, muchas veces de noche: sensación de arena en los ojos, dolor intenso, lagrimeo y sensibilidad a la luz. Suele mejorar en uno o dos días, pero las exposiciones repetidas pueden dejar daño. Requiere valoración médica; no se aplican gotas ni remedios sin indicación.</p>
        <p><strong>Protección de los ojos y la cara:</strong></p>
        <ul>
          <li><strong>Careta de soldar</strong> con el <strong>filtro del tono adecuado</strong>. El número del tono indica qué tan oscuro es: a mayor número, más oscuro.</li>
          <li><strong>Cómo elegir el tono</strong>: según el proceso y la corriente, con la tabla del fabricante o de la norma ANSI/AWS. Como referencia, la soldadura con electrodo y MIG suele requerir tonos entre 10 y 13, y el oxicorte, tonos más claros, entre 3 y 6 aproximadamente. Una regla práctica: empezar con un tono más oscuro del que parece necesario e ir aclarando hasta ver bien el charco de soldadura.</li>
          <li><strong>Caretas fotosensibles</strong> (de oscurecimiento automático): cómodas y seguras si funcionan bien. Se verifica la batería, los sensores limpios y el tono ajustado.</li>
          <li><strong>Gafas de seguridad debajo de la careta</strong>, siempre: protegen de la escoria al picar y de los reflejos cuando se levanta la careta.</li>
          <li>Para oxicorte y ayudantes: gafas con filtro del tono adecuado.</li>
        </ul>
        <p><strong>La piel:</strong> manga larga, cuello cubierto y guantes. La radiación UV atraviesa algunas telas delgadas y quema a través de ellas.</p>
        <p><strong>Proteger a los demás:</strong> mamparas o cortinas de soldadura alrededor del puesto, señalización del área, y aviso antes de encender el arco cuando hay personas cerca. Un vidrio común, unas gafas de sol o un visor transparente <strong>no</strong> protegen.</p>
      `,
      keyPoints: [
        'El arco emite radiación UV, IR y luz visible intensa; el ojo de arco aparece horas después.',
        'Careta con el tono del filtro según el proceso y la corriente, y gafas de seguridad debajo siempre.',
        'Mamparas para proteger a otros; vidrio común o gafas de sol no protegen.'
      ]
    },
    {
      title: 'Riesgo eléctrico en la soldadura por arco',
      content: `
        <p>En la soldadura por arco, el <strong>electrodo</strong>, la <strong>pinza portaelectrodo</strong> y la <strong>pieza</strong> forman parte de un circuito eléctrico. Aunque la tensión de soldadura es menor que la de la red, puede causar un choque peligroso, sobre todo con la máquina en vacío (encendida sin soldar), en ambientes húmedos o dentro de estructuras metálicas.</p>
        <p><strong>Situaciones de mayor riesgo:</strong></p>
        <ul>
          <li>Ropa, guantes o piel mojados de agua o de sudor.</li>
          <li>Trabajar sobre pisos mojados o dentro de tanques, ductos y estructuras metálicas, donde el cuerpo queda en contacto con la pieza.</li>
          <li>Cables con el aislamiento dañado o empalmes mal hechos.</li>
          <li>Cambiar el electrodo con la mano desnuda o con guantes húmedos.</li>
        </ul>
        <p><strong>Reglas básicas:</strong></p>
        <ul>
          <li>Inspeccionar cables, pinza y conexiones antes de cada uso; reemplazar los dañados, no repararlos con cinta.</li>
          <li>Usar guantes de soldador <strong>secos</strong> y en buen estado; cambiarlos si se mojan.</li>
          <li>Aislarse de la pieza y del piso con tapetes o tablas secas cuando se trabaja en zonas húmedas o metálicas.</li>
          <li>No tocar al mismo tiempo el electrodo o la pinza y la pieza o la estructura.</li>
          <li>No enrollar los cables alrededor del cuerpo ni apoyarlos sobre los hombros.</li>
          <li>Retirar el electrodo de la pinza y dejar la pinza en un lugar aislado al hacer pausas; apagar la máquina al terminar.</li>
          <li>La máquina debe estar conectada a tierra según el fabricante, y su alimentación la hace personal calificado.</li>
        </ul>
        <p><strong>La pinza de masa</strong> (pinza de tierra o retorno) se conecta <strong>lo más cerca posible del punto de soldadura</strong>, sobre metal limpio. Si se conecta lejos, la corriente puede regresar por caminos no previstos (estructuras, tuberías, cadenas de polipastos, rodamientos de máquinas) y causar daños, incendios o choques.</p>
        <p><strong>En espacios confinados o muy húmedos</strong>, la empresa puede exigir equipos con dispositivos que reducen la tensión en vacío, además de las medidas del procedimiento de espacios confinados.</p>
      `,
      keyPoints: [
        'El electrodo, la pinza y la pieza forman un circuito: el choque es más probable con humedad y dentro de estructuras metálicas.',
        'Guantes secos, cables en buen estado, aislarse de la pieza y nunca enrollar cables en el cuerpo.',
        'La pinza de masa va lo más cerca posible del punto de soldadura, sobre metal limpio.'
      ]
    },
    {
      title: 'Cilindros de gas y equipo de oxicorte',
      content: `
        <p><strong>Identificación.</strong> El contenido de un cilindro se identifica por su <strong>etiqueta</strong>, no solo por su color, porque los colores pueden variar entre proveedores. Un cilindro sin identificar no se usa.</p>
        <p><strong>Almacenamiento y transporte:</strong></p>
        <ul>
          <li>Siempre en posición <strong>vertical</strong> y <strong>asegurados</strong> con cadena o abrazadera, para que no caigan. Un cilindro que cae y rompe su válvula puede salir disparado como un proyectil.</li>
          <li>Con el <strong>capuchón</strong> puesto cuando no están en uso o se transportan.</li>
          <li>El <strong>oxígeno separado de los gases combustibles</strong>: a una distancia mínima de unos 6 metros o con una barrera incombustible de al menos 1,5 metros de alto (referencia de OSHA 1910.253).</li>
          <li>Lejos del calor, de las chispas y de los circuitos eléctricos.</li>
          <li>Se mueven en carros diseñados para ello, nunca rodándolos ni arrastrándolos.</li>
          <li>Llenos y vacíos separados e identificados.</li>
        </ul>
        <p><strong>El oxígeno y la grasa.</strong> El oxígeno puro a presión hace que la grasa, el aceite y otros materiales se enciendan de forma violenta, incluso sin una chispa. Por eso:</p>
        <ul>
          <li>Nunca se lubrican válvulas, reguladores ni conexiones de oxígeno.</li>
          <li>No se manipulan con guantes o manos engrasadas, como en el caso del curso.</li>
          <li>Nunca se usa oxígeno para "soplar" la ropa, limpiar polvo o ventilar un espacio: la ropa impregnada de oxígeno arde con violencia.</li>
        </ul>
        <p><strong>El equipo de oxicorte:</strong></p>
        <ul>
          <li><strong>Válvulas antirretroceso o arrestallamas</strong> en los reguladores y, según el equipo, en el soplete. Impiden que una llama o una mezcla de gases regrese hacia las mangueras y los cilindros.</li>
          <li><strong>Prueba de fugas con agua jabonosa</strong> en conexiones, reguladores y mangueras antes de cada uso. Nunca se buscan fugas con una llama.</li>
          <li>Mangueras en buen estado, del color y tipo correcto para cada gas, sin empalmes improvisados.</li>
          <li>Abrir las válvulas de los cilindros despacio, parándose a un lado del regulador, nunca de frente.</li>
          <li>El <strong>acetileno</strong> no se usa a presiones mayores de 15 psig (aproximadamente 1 bar), porque se vuelve inestable; el cilindro de acetileno siempre en posición vertical.</li>
          <li>Encender y apagar el soplete siguiendo la secuencia del fabricante, con un encendedor de chispa, nunca con un fósforo o un encendedor de bolsillo.</li>
        </ul>
        <p><strong>Retroceso de llama.</strong> Si se oye un silbido o un chasquido y la llama se mete en el soplete, se cierran de inmediato las válvulas del soplete y luego las de los cilindros, y no se vuelve a usar el equipo hasta revisarlo.</p>
      `,
      keyPoints: [
        'Cilindros verticales, asegurados, con capuchón, identificados por la etiqueta y con el oxígeno separado de los combustibles.',
        'El oxígeno a presión enciende la grasa y el aceite: nada de lubricantes ni guantes engrasados, ni oxígeno para soplar la ropa.',
        'Oxicorte: válvulas antirretroceso, prueba de fugas con agua jabonosa y acetileno a no más de 15 psig.'
      ]
    },
    {
      title: 'Incendio, quemaduras y elementos de protección personal',
      content: `
        <p><strong>Prevención de incendios.</strong> Fuera del taller de soldadura, todo trabajo de soldadura o corte es un <strong>trabajo en caliente</strong> y requiere permiso: evaluación del área, retiro o protección de los combustibles en un radio de 11 metros, vigía de fuego durante el trabajo y vigilancia posterior (ver el curso de trabajo en caliente).</p>
        <p><strong>Nunca se suelda ni se corta</strong> un recipiente, tambor o tubería que contuvo combustibles sin limpiarlo, purgarlo y medir su atmósfera. Es una de las principales causas de muerte entre soldadores.</p>
        <p><strong>Elementos de protección del soldador:</strong></p>
        <ul>
          <li><strong>Careta</strong> con el filtro adecuado y <strong>gafas de seguridad</strong> debajo.</li>
          <li><strong>Ropa</strong> de algodón grueso o de material resistente a la llama, de manga larga, cuello cerrado, sin bolsillos abiertos ni dobladillos donde caigan chispas. Nada de fibras sintéticas.</li>
          <li><strong>Chaqueta, peto o mangas de cuero</strong> según la posición y la cantidad de salpicaduras; capucha o gorro para trabajos sobre la cabeza.</li>
          <li><strong>Guantes de cuero</strong> para soldador, más gruesos para electrodo y oxicorte, más delgados para TIG.</li>
          <li><strong>Polainas</strong> y <strong>botas de seguridad</strong> de caña alta, con el pantalón por fuera de la bota para que las chispas no caigan adentro.</li>
          <li><strong>Protección auditiva</strong> en plasma, arco con aire, esmerilado y ambientes ruidosos.</li>
          <li><strong>Protección respiratoria</strong> según la evaluación de humos.</li>
        </ul>
        <p><strong>Quemaduras frecuentes y cómo evitarlas:</strong> tocar piezas recién soldadas (marcarlas como calientes o enfriarlas), escorias que saltan al picar (gafas siempre), salpicaduras que entran por el cuello o las botas (ropa cerrada y polainas), y llamas que alcanzan ropa impregnada de aceite o de oxígeno.</p>
        <p><strong>Encendedores y fósforos en el bolsillo:</strong> una chispa puede encender un encendedor de gas y hacerlo explotar. No se llevan en la ropa mientras se suelda.</p>
      `,
      keyPoints: [
        'Fuera del taller, soldar o cortar es trabajo en caliente: permiso, retiro de combustibles, vigía y vigilancia posterior.',
        'Ropa de algodón o resistente a la llama, cuero, guantes, polainas, botas y protección auditiva y respiratoria según el caso.',
        'Nunca se suelda un recipiente que contuvo combustible sin limpiarlo, purgarlo y medir.'
      ]
    },
    {
      title: 'Espacios confinados, ergonomía y salud del soldador',
      content: `
        <p><strong>Soldar en espacios confinados</strong> (tanques, silos, ductos, calderas) multiplica los riesgos: los humos y gases se acumulan, los gases de protección desplazan el oxígeno, el calor es intenso y el choque eléctrico es más probable porque el cuerpo está rodeado de metal. Se aplica el procedimiento de espacios confinados de la Resolución 0491 de 2020:</p>
        <ul>
          <li>permiso de trabajo y medición de la atmósfera antes de entrar y durante el trabajo;</li>
          <li>ventilación forzada que saque los humos;</li>
          <li><strong>los cilindros de gas se dejan afuera</strong>; solo entran las mangueras y el soplete, y se retiran al terminar o en las pausas largas, para que una fuga no llene el espacio;</li>
          <li>un vigía afuera, con comunicación permanente y plan de rescate;</li>
          <li>protección respiratoria adecuada y medidas contra el choque eléctrico.</li>
        </ul>
        <p><strong>Ergonomía.</strong> El soldador trabaja muchas veces en posiciones forzadas: agachado, de rodillas, con los brazos sobre la cabeza, con el cuello flexionado y con equipos pesados. Con el tiempo aparecen lesiones de hombros, espalda, cuello y rodillas. Ayudan: posicionadores y mesas de trabajo a la altura adecuada, rodilleras, pausas activas, rotación de tareas y soportes para la careta.</p>
        <p><strong>Calor.</strong> El calor del proceso más la ropa de protección pueden causar agotamiento por calor. Hidratarse con frecuencia, hacer pausas en lugares frescos y conocer los síntomas: mareo, dolor de cabeza, náuseas, piel muy caliente.</p>
        <p><strong>Vigilancia de la salud.</strong> Los soldadores deben estar en el programa de vigilancia médica de la empresa, con evaluaciones según su exposición: función pulmonar, audición, visión y, cuando se sueldan aceros con manganeso, cromo o níquel, controles específicos. Informar al médico si aparecen tos persistente, dificultad para respirar, episodios de fiebre después de soldar o temblores.</p>
        <p><strong>Hábitos que protegen:</strong> no comer ni fumar en el puesto de soldadura, lavarse las manos y la cara antes de comer, cambiarse la ropa de trabajo antes de ir a casa y no fumar en general: el tabaco multiplica el daño pulmonar de los humos.</p>
      `,
      keyPoints: [
        'En espacios confinados: permiso, medición, ventilación forzada, cilindros afuera, vigía y plan de rescate (Res. 0491 de 2020).',
        'Posturas forzadas y calor: posicionadores, pausas, hidratación y rotación de tareas.',
        'Vigilancia médica pulmonar, auditiva y visual; no fumar, porque multiplica el daño de los humos.'
      ]
    }
  ],

  practices: [
    { q: '¿En qué proceso de soldadura se usa un electrodo de tungsteno que no se consume?', options: ['Electrodo revestido (SMAW)', 'MIG/MAG (GMAW)', 'TIG (GTAW)'], answer: 2 },
    { q: '¿Cómo clasificó la IARC los humos de soldadura en 2017?', options: ['Como cancerígenos para humanos (grupo 1)', 'Como no peligrosos para la salud', 'Como irritantes leves sin efectos a largo plazo'], answer: 0 },
    { q: '¿Qué síntomas produce la fiebre de los humos metálicos al soldar galvanizado?', options: ['Ceguera inmediata', 'Escalofríos, fiebre y dolor muscular, como una gripa', 'Quemaduras en las manos'], answer: 1 },
    { q: '¿Cuándo aparecen por lo general los síntomas del ojo de arco?', options: ['Inmediatamente al mirar el arco', 'Varios días después', 'Horas después de la exposición'], answer: 2 },
    { q: '¿Dónde se conecta la pinza de masa?', options: ['Lo más cerca posible del punto de soldadura, sobre metal limpio', 'En cualquier parte de la estructura del edificio', 'En la tubería de agua más cercana'], answer: 0 },
    { q: '¿Por qué nunca se lubrican los reguladores de oxígeno?', options: ['Porque el lubricante tapa el regulador', 'Porque el oxígeno a presión hace que la grasa se encienda de forma violenta', 'Porque el lubricante cambia el color de la llama'], answer: 1 },
    { q: '¿Por qué se usan polainas y el pantalón por fuera de la bota al soldar?', options: ['Para que la ropa se vea mejor', 'Para que las botas duren más', 'Para que las chispas no caigan dentro de la bota'], answer: 2 },
    { q: 'Al soldar dentro de un tanque con oxicorte, ¿dónde se dejan los cilindros?', options: ['Afuera del tanque', 'Dentro del tanque, cerca del soldador', 'En la entrada del tanque, bloqueando el paso'], answer: 0 }
  ],

  scenarios: [
    {
      scenario:
        'Vas a hacer oxicorte. Tus guantes están engrasados de la tarea anterior, el regulador de oxígeno está a la mano y nadie ha revisado las válvulas antirretroceso.',
      options: [
        { text: 'Empiezo con cuidado: la grasa es poca y el corte es corto.', correct: false, feedback: 'Decisión insegura. Una pequeña cantidad de grasa en contacto con el oxígeno a presión basta para una combustión súbita, como en el caso del curso.' },
        { text: 'Cambio los guantes por unos limpios, reviso el equipo, verifico las válvulas antirretroceso y hago la prueba de fugas con agua jabonosa antes de abrir.', correct: true, feedback: 'Decisión correcta. Sin grasa, con antirretroceso y sin fugas, el equipo se puede usar con seguridad.' },
        { text: 'Me limpio los guantes con un poco de oxígeno del soplete antes de empezar.', correct: false, feedback: 'Decisión insegura. Nunca se usa oxígeno para limpiar ni soplar: la ropa y los guantes impregnados arden con violencia.' }
      ]
    },
    {
      scenario:
        'Vas a soldar acero galvanizado en un cuarto pequeño sin ventilación. Tu compañero dice que con el tapabocas de tela es suficiente.',
      options: [
        { text: 'Acepto, porque es un trabajo de pocos minutos.', correct: false, feedback: 'Decisión insegura. Los humos de zinc producen fiebre de humos metálicos y un tapabocas de tela no los filtra.' },
        { text: 'Pido extracción localizada o ventilación forzada, retiro el galvanizado de la zona de soldadura si es posible, y uso el respirador adecuado.', correct: true, feedback: 'Decisión correcta. Primero eliminar la fuente y extraer el humo; el respirador adecuado completa la protección.' },
        { text: 'Abro la puerta del cuarto y suelo con la cabeza sobre la pieza para ver mejor.', correct: false, feedback: 'Decisión insegura. Una puerta abierta no basta y con la cabeza sobre la pieza respiras directamente la columna de humo.' }
      ]
    },
    {
      scenario:
        'Un compañero suelda con MIG cerca de tu puesto, sin mampara. Tú solo tienes un visor de vidrio común y te molesta el brillo del arco.',
      options: [
        { text: 'Sigo trabajando sin mirar directamente el arco.', correct: false, feedback: 'Decisión insegura. Los reflejos y la radiación UV pueden causar ojo de arco aunque no mires de frente.' },
        { text: 'Me pongo unas gafas de sol que tengo en el locker.', correct: false, feedback: 'Decisión insegura. Las gafas de sol no filtran la radiación del arco de soldadura.' },
        { text: 'Le pido que detenga el trabajo hasta instalar una mampara entre los puestos y uso protección ocular adecuada si debo estar cerca.', correct: true, feedback: 'Decisión correcta. Las mamparas protegen a quienes trabajan alrededor del arco.' }
      ]
    },
    {
      scenario:
        'Debes soldar un soporte en el piso de una planta de lavado. El piso está mojado, tus guantes están húmedos por el sudor y la pinza de masa quedó conectada a una baranda a 15 metros del punto de soldadura.',
      options: [
        { text: 'Cambio a guantes secos, me aíslo del piso con una base seca, y reubico la pinza de masa lo más cerca posible del punto de soldadura.', correct: true, feedback: 'Decisión correcta. Humedad y una masa lejana aumentan el riesgo de choque y de corrientes por caminos no previstos.' },
        { text: 'Sigo así, porque la tensión de soldadura es baja.', correct: false, feedback: 'Decisión insegura. Con humedad y contacto con el piso, la tensión de soldadura puede causar un choque peligroso.' },
        { text: 'Me quito los guantes para no sentir la humedad y trabajar más cómodo.', correct: false, feedback: 'Decisión insegura. Sin guantes aumentan el riesgo de choque y las quemaduras.' }
      ]
    },
    {
      scenario:
        'Te piden soldar una pieza junto a una tina de desengrase con solvente clorado. El supervisor dice que es rápido y que la tina está tapada a medias.',
      options: [
        { text: 'Sueldo rápido con buena ventilación.', correct: false, feedback: 'Decisión insegura. La radiación del arco descompone los vapores de solventes clorados en fosgeno, muy tóxico.' },
        { text: 'Pido trasladar la pieza o alejar la tina y ventilar hasta eliminar los vapores, y solo entonces suelo.', correct: true, feedback: 'Decisión correcta. No se suelda cerca de solventes clorados.' },
        { text: 'Tapo la tina del todo con un cartón y empiezo.', correct: false, feedback: 'Decisión insegura. El cartón no elimina los vapores y además es un combustible junto a las chispas.' }
      ]
    }
  ],

  exam: [
    {
      q: '¿Cuál es la referencia técnica más completa sobre seguridad en soldadura y corte?',
      options: [
        'La norma ANSI/AWS Z49.1.',
        'La Resolución 2674 de 2013, sobre los requisitos sanitarios de los alimentos y las bebidas.',
        'La NFPA 704, que define el rombo de colores para identificar productos.'
      ],
      answer: 0
    },
    {
      q: '¿Por qué los humos de soldadura deben controlarse siempre, aunque "no se vea mucho humo"?',
      options: [
        'Porque manchan la ropa y los equipos del taller.',
        'Porque la IARC los clasificó como cancerígenos para humanos.',
        'Porque afectan la calidad del cordón de soldadura y obligan a repetir el trabajo.'
      ],
      answer: 1
    },
    {
      q: '¿Qué metales liberan los humos del acero inoxidable que son cancerígenos?',
      options: [
        'Zinc y cobre, que producen fiebre de humos metálicos en los soldadores.',
        'Hierro y carbono.',
        'Cromo hexavalente y níquel.'
      ],
      answer: 2
    },
    {
      q: '¿Qué gas muy tóxico puede formarse al soldar cerca de solventes clorados?',
      options: [
        'Fosgeno.',
        'Argón, que se libera de los solventes por el calor del arco.',
        'Oxígeno puro, que se separa del solvente al calentarse.'
      ],
      answer: 0
    },
    {
      q: '¿Cuál es el control más eficaz contra los humos de soldadura?',
      options: [
        'Un tapabocas de tela.',
        'La extracción localizada que captura el humo cerca del arco.',
        'Soldar más rápido para producir menos humo.'
      ],
      answer: 1
    },
    {
      q: '¿Por qué los gases de protección como el argón son peligrosos en un espacio confinado?',
      options: [
        'Porque son inflamables y pueden explotar con las chispas.',
        'Porque son corrosivos y atacan la piel del soldador.',
        'Porque desplazan el oxígeno y pueden causar asfixia.'
      ],
      answer: 2
    },
    {
      q: 'Un soldador siente arena en los ojos y dolor intenso en la noche después de trabajar sin careta adecuada. ¿Qué es probable?',
      options: [
        'Un ojo de arco (queratoconjuntivitis) por la radiación ultravioleta.',
        'Una alergia al polvo del taller, que se trata con gotas de venta libre.',
        'Cansancio visual normal por la jornada, que se quita durmiendo.'
      ],
      answer: 0
    },
    {
      q: '¿Cómo se elige el tono del filtro de la careta?',
      options: [
        'Siempre el tono más claro, para ver mejor la pieza.',
        'Según el proceso y la corriente, con la tabla del fabricante o de la norma.',
        'Con el mismo tono para todos los procesos, para estandarizar las caretas del taller.'
      ],
      answer: 1
    },
    {
      q: '¿Qué protege a los trabajadores cercanos de la radiación del arco?',
      options: [
        'Unas gafas de sol oscuras.',
        'Un visor de vidrio transparente de buena calidad, como los de las gafas de lectura.',
        'Mamparas o cortinas de soldadura alrededor del puesto.'
      ],
      answer: 2
    },
    {
      q: '¿En cuál de estas situaciones es mayor el riesgo de choque eléctrico al soldar con arco?',
      options: [
        'Con guantes húmedos de sudor, dentro de un tanque metálico.',
        'Con guantes secos, en una mesa de trabajo aislada.',
        'Con la máquina apagada y desconectada.'
      ],
      answer: 0
    },
    {
      q: '¿Qué puede pasar si la pinza de masa se conecta lejos del punto de soldadura?',
      options: [
        'Que el cordón quede con mejor penetración y más resistencia mecánica.',
        'Que la corriente regrese por caminos no previstos y cause daños, incendios o choques.',
        'Que el electrodo se consuma más despacio.'
      ],
      answer: 1
    },
    {
      q: '¿Cómo se identifica con seguridad el contenido de un cilindro de gas?',
      options: [
        'Por el color del cilindro, que es igual en todos los proveedores.',
        'Por el olor del gas al abrir un poco la válvula.',
        'Por la etiqueta del cilindro.'
      ],
      answer: 2
    },
    {
      q: '¿Cómo se separan en el almacenamiento los cilindros de oxígeno y de gases combustibles?',
      options: [
        'A unos 6 metros de distancia o con una barrera incombustible de al menos 1,5 metros de alto.',
        'No hace falta separarlos si están bien cerrados y con el capuchón puesto.',
        'Con una cortina de soldadura entre ellos.'
      ],
      answer: 0
    },
    {
      q: '¿Cómo se buscan las fugas en un equipo de oxicorte?',
      options: [
        'Acercando una llama pequeña a las conexiones.',
        'Con agua jabonosa en conexiones, reguladores y mangueras.',
        'Por el olor, porque todos los gases industriales tienen un olor fuerte y característico.'
      ],
      answer: 1
    },
    {
      q: '¿A qué presión máxima se usa el acetileno?',
      options: [
        'A la misma presión del oxígeno, para que la llama quede balanceada.',
        'A cualquier presión, porque el regulador lo controla.',
        'A no más de 15 psig, porque a mayor presión se vuelve inestable.'
      ],
      answer: 2
    },
    {
      q: 'Al soldar en un tanque con oxicorte, ¿qué se hace con las mangueras y el soplete en una pausa larga?',
      options: [
        'Se retiran del tanque, para que una fuga no llene el espacio de gas.',
        'Se dejan dentro del tanque, con las válvulas del soplete cerradas para no perder tiempo.',
        'Se cuelgan en la entrada del tanque para encontrarlos rápido al volver de la pausa.'
      ],
      answer: 0
    }
  ]
};
