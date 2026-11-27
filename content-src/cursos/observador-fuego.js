/**
 * Curso: Observador de Fuego (Vigía de Incendios). Versión completa.
 * Normativa: Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979; referencias: NFPA 51B (2019: vigilancia de
 * al menos 1 hora), NFPA 10 / NTC 2885 (extintores portátiles).
 */
export default {
  id: 'observador-fuego',
  title: 'Observador de Fuego (Vigía de Incendios)',
  hours: 1.5,
  category: 'prevencion_sst',
  regulation: 'Decreto 1072 de 2015, Res. 0312 de 2019, Res. 2400 de 1979; referencias: NFPA 51B, NFPA 10 y NTC 2885',
  legalNotice:
    'Formación teórica para vigías de fuego en trabajos en caliente. No reemplaza la práctica con extintores reales ni la formación de la brigada de emergencias de la empresa.',
  summary:
    'El fuego y sus clases, cómo elegir y usar un extintor, la autoridad del vigía para detener el trabajo, qué revisar antes, durante y después de un trabajo en caliente, y cómo responder si el fuego se sale de control.',
  fieldCase:
    'En una planta metalmecánica, una escoria de pulidora cayó por una rejilla de piso a un cuarto inferior con cartón. El vigía se retiró apenas terminó el corte. Veinticinco minutos después empezó un conato de incendio que nadie vio hasta que el humo llegó a la planta.',
  failureAnalysis:
    'Falla raíz: no se inspeccionó el nivel inferior ni se tapó la rejilla, y la vigilancia posterior se abandonó antes de tiempo.',
  checklist: [
    'Conozco el permiso de trabajo en caliente: tarea, lugar, horario y controles.',
    'Revisé el área en un radio de 11 metros, las aberturas y los niveles inferiores.',
    'Mi extintor es del tipo adecuado y está cargado, con pasador y sello.',
    'Sé cómo dar la alarma y dónde están la ruta de evacuación y el punto de encuentro.',
    'Acordé con el ejecutante una señal para detener el trabajo.',
    'No hago otras tareas mientras vigilo.',
    'Al terminar, permanezco el tiempo fijado (al menos 60 minutos) y reviso todo el radio.',
    'Entrego la vigilancia en persona si debo retirarme, y firmo el cierre del permiso.'
  ],
  onSiteClosure:
    'Práctica en su empresa: inspeccionar un extintor real, participar en una práctica de extinción con fuego controlado bajo supervisión de la brigada y hacer la vigilancia completa de un trabajo en caliente, incluido el tiempo posterior.',

  modules: [
    {
      title: 'Cómo nace y cómo se propaga el fuego',
      content: `
        <p><strong>El triángulo del fuego.</strong> Para que exista fuego se necesitan tres cosas a la vez: <strong>combustible</strong>, <strong>oxígeno</strong> y <strong>calor</strong>. Si se quita una de ellas, el fuego se apaga. Cuando la combustión se mantiene sola gracias a una <strong>reacción en cadena</strong>, se habla del tetraedro del fuego.</p>
        <p>Cada forma de apagar un fuego actúa sobre uno de esos elementos:</p>
        <ul>
          <li><strong>Enfriar</strong> (quitar calor): el agua.</li>
          <li><strong>Sofocar</strong> (quitar oxígeno): una manta ignífuga, la espuma, el dióxido de carbono.</li>
          <li><strong>Retirar el combustible</strong>: cerrar la válvula de gas, alejar los materiales.</li>
          <li><strong>Interrumpir la reacción en cadena</strong>: el polvo químico seco.</li>
        </ul>
        <p><strong>Cómo se propaga el calor:</strong></p>
        <ul>
          <li><strong>Conducción</strong>: a través de sólidos, como una viga o una tubería metálica. Por eso una soldadura en un lado de una pared puede encender algo en el otro lado.</li>
          <li><strong>Convección</strong>: el aire y los gases calientes suben y llevan el fuego hacia arriba, a techos, ductos y pisos superiores.</li>
          <li><strong>Radiación</strong>: el calor viaja como la luz del sol y puede encender materiales cercanos sin tocarlos.</li>
          <li><strong>Partículas incandescentes</strong>: chispas y escorias que vuelan, ruedan, rebotan y caen por aberturas.</li>
        </ul>
        <p><strong>Las fases de un incendio.</strong> Casi todos empiezan pequeños: una brasa en un cartón, una llama en un trapo. En esa fase de <strong>conato</strong>, un extintor portátil basta. En pocos minutos, el fuego puede crecer, llenar el lugar de humo tóxico y volverse imposible de controlar sin bomberos. El trabajo del vigía es detectar el fuego en su fase más pequeña, o mejor aún, evitar que empiece.</p>
        <p><strong>El humo mata más que las llamas.</strong> Contiene monóxido de carbono y otros gases tóxicos, quita la visibilidad y puede dejar inconsciente a una persona en pocos minutos. Si el humo llena el área, la prioridad es salir.</p>
      `,
      keyPoints: [
        'Triángulo del fuego: combustible, oxígeno y calor; la reacción en cadena completa el tetraedro.',
        'El calor se propaga por conducción, convección, radiación y partículas incandescentes.',
        'Un conato se controla con un extintor; un incendio desarrollado no. El humo es lo más peligroso.'
      ]
    },
    {
      title: 'Clases de fuego y agentes extintores',
      content: `
        <p>No todos los fuegos se apagan igual. Usar el agente equivocado puede empeorar el incendio o electrocutar a quien lo usa. En Colombia se usa la clasificación de la norma NFPA 10, adoptada en la NTC 2885 sobre extintores portátiles.</p>
        <ul>
          <li><strong>Clase A: sólidos comunes</strong> que dejan brasa: madera, papel, cartón, telas, muchos plásticos. Se apagan con <strong>agua</strong> o con <strong>polvo químico seco multipropósito (ABC)</strong>.</li>
          <li><strong>Clase B: líquidos y gases inflamables</strong>: gasolina, solventes, pinturas, aceites, gas propano. Se usan <strong>polvo químico seco</strong>, <strong>dióxido de carbono (CO₂)</strong> o <strong>espuma</strong>. <em>Nunca agua</em>: dispersa el líquido encendido y extiende el fuego. En los gases, lo primero es cortar el suministro.</li>
          <li><strong>Clase C: equipos eléctricos energizados</strong>: tableros, motores, cables. Se usan <strong>CO₂</strong> o <strong>polvo químico seco</strong>, porque no conducen la electricidad. <em>Nunca agua</em>. Si se puede, primero se corta la energía; entonces el fuego pasa a ser de clase A o B.</li>
          <li><strong>Clase D: metales combustibles</strong>: magnesio, titanio, aluminio en polvo o virutas. Requieren un <strong>agente especial para metales</strong>; el agua puede producir una reacción violenta.</li>
          <li><strong>Clase K: aceites y grasas de cocina</strong> en freidoras industriales. Se usa el extintor de <strong>agente húmedo (clase K)</strong>, que forma una capa que enfría y sofoca.</li>
        </ul>
        <p><strong>El extintor más común en la industria</strong> es el de polvo químico seco multipropósito ABC, porque sirve para las tres clases más frecuentes. Su desventaja es que deja residuos y reduce la visibilidad. En cuartos de equipos electrónicos se prefiere el CO₂, que no deja residuos, pero que en espacios pequeños desplaza el oxígeno.</p>
        <p><strong>Cómo saber qué extintor es.</strong> La etiqueta indica las clases de fuego en las que se puede usar, con letras y pictogramas. Antes de empezar la vigilancia, el vigía confirma que su extintor sirve para los materiales del área.</p>
        <p><strong>En trabajos en caliente</strong>, lo habitual es tener un extintor ABC al lado del vigía y, cuando haya mucho material combustible sólido, una manguera de agua lista.</p>
      `,
      keyPoints: [
        'A: sólidos; B: líquidos y gases inflamables; C: equipos energizados; D: metales; K: aceites de cocina.',
        'Nunca agua en fuegos de líquidos inflamables ni en equipos energizados.',
        'El extintor ABC de polvo químico seco es el más usado en la industria; el vigía confirma que sirve para su área.'
      ]
    },
    {
      title: 'El vigía de fuego: rol, requisitos y autoridad',
      content: `
        <p>El <strong>vigía de fuego</strong> es la persona asignada para observar el área durante un trabajo en caliente y después de terminado, detectar cualquier inicio de fuego y actuar. Es uno de los tres roles de la NFPA 51B, junto con quien autoriza el permiso y el ejecutante.</p>
        <p><strong>Requisitos del vigía:</strong></p>
        <ul>
          <li>Estar capacitado en el uso de extintores y en el procedimiento de emergencia de la empresa.</li>
          <li>Conocer el área: dónde están las salidas, las alarmas, los extintores adicionales y los cortes de energía y gas.</li>
          <li>Conocer el permiso de trabajo en caliente: qué se va a hacer, dónde y con qué controles.</li>
          <li>Tener un medio para dar la alarma: radio, teléfono, pulsador de alarma cercano.</li>
          <li>Estar en condiciones físicas para moverse rápido por el área.</li>
        </ul>
        <p><strong>La regla principal: dedicación exclusiva.</strong> El vigía no hace otras tareas mientras vigila. No sostiene piezas, no busca herramientas, no ayuda a soldar, no atiende el celular para asuntos personales. Un vigía distraído es igual a no tener vigía.</p>
        <p><strong>Autoridad para detener el trabajo.</strong> El vigía puede y debe detener el trabajo en caliente si:</p>
        <ul>
          <li>las chispas caen donde no deben o aparece un combustible no protegido;</li>
          <li>siente olor a gas o solvente, o suena una alarma;</li>
          <li>cambian las condiciones del área;</li>
          <li>tiene que retirarse y no hay relevo.</li>
        </ul>
        <p>Esta autoridad no depende del cargo. Un vigía con menos experiencia que el soldador tiene el mismo derecho a detener el trabajo. Es buena práctica acordar antes de empezar una <strong>señal clara</strong> (una palmada en el hombro, una señal con la mano), porque con la careta puesta el soldador no oye bien.</p>
        <p><strong>¿Cuántos vigías?</strong> Si las chispas pueden llegar a otro piso, al otro lado de una pared o a un lugar que el vigía no ve desde su posición, se necesita un segundo vigía en ese lugar.</p>
      `,
      keyPoints: [
        'El vigía está capacitado, conoce el área y el permiso, y tiene cómo dar la alarma.',
        'Dedicación exclusiva: no hace otras tareas mientras vigila.',
        'Tiene autoridad para detener el trabajo sin importar el cargo; se acuerda una señal con el ejecutante.'
      ]
    },
    {
      title: 'Antes del trabajo: verificar el área y el extintor',
      content: `
        <p>El vigía llega antes de que empiece el trabajo y hace su propia verificación, aunque el permiso ya esté firmado.</p>
        <p><strong>El área, en un radio de 11 metros:</strong></p>
        <ul>
          <li>Combustibles retirados o cubiertos con mantas ignífugas: cartón, madera, plásticos, trapos con aceite, polvo acumulado.</li>
          <li>Rejillas, huecos y grietas en pisos y paredes tapados con material incombustible.</li>
          <li><strong>Niveles inferiores</strong>: qué hay debajo del área. Si hay materiales combustibles, se retiran o se ubica otro vigía.</li>
          <li>El otro lado de paredes y techos metálicos que se van a calentar.</li>
          <li>Ductos y canaletas de cables protegidos.</li>
          <li>Ruta de evacuación despejada y punto de encuentro conocido.</li>
        </ul>
        <p><strong>El extintor: inspección rápida antes de usarlo.</strong></p>
        <ul>
          <li><strong>Tipo</strong>: adecuado para las clases de fuego del área.</li>
          <li><strong>Manómetro</strong> (en los presurizados): la aguja en la franja verde.</li>
          <li><strong>Pasador de seguridad y sello</strong> puestos e intactos. Un sello roto puede indicar que el extintor se usó.</li>
          <li><strong>Manguera y boquilla</strong> sin grietas ni obstrucciones.</li>
          <li><strong>Cilindro</strong> sin golpes, corrosión ni fugas.</li>
          <li><strong>Etiqueta</strong> con la fecha de la última recarga o mantenimiento vigente.</li>
          <li><strong>Peso</strong>: al levantarlo, debe sentirse lleno.</li>
        </ul>
        <p>Si algo falla, se cambia el extintor <em>antes</em> de empezar.</p>
        <p><strong>Coordinación con el ejecutante.</strong> Antes de encender el equipo, el vigía y el ejecutante revisan juntos hacia dónde van a ir las chispas, dónde se ubica el vigía para ver toda el área y cuál será la señal para detener el trabajo.</p>
        <p><strong>Ubicación.</strong> El vigía se coloca donde pueda ver el punto de trabajo y el lugar donde caen las chispas, a una distancia segura del arco y sin quedar en la trayectoria de las partículas, con el extintor a la mano y la ruta de salida a su espalda.</p>
      `,
      keyPoints: [
        'El vigía verifica el radio de 11 metros, las aberturas, los niveles inferiores y el otro lado de paredes y techos.',
        'Extintor: tipo adecuado, manómetro en verde, pasador y sello, manguera bien, recarga vigente.',
        'Acuerda con el ejecutante la ubicación y la señal para detener el trabajo.'
      ]
    },
    {
      title: 'Durante el trabajo: qué observar y cuándo detener',
      content: `
        <p>Vigilar es una tarea activa. El vigía no espera a ver llamas: busca las señales tempranas.</p>
        <p><strong>Qué observar:</strong></p>
        <ul>
          <li><strong>La trayectoria de las chispas</strong>: dónde caen, dónde rebotan, si ruedan hacia aberturas o debajo de equipos.</li>
          <li><strong>Humo</strong>: un hilo de humo de un cartón o un aislamiento es la primera señal de una brasa.</li>
          <li><strong>Olor</strong>: a quemado, a plástico derretido, a gas o a solvente.</li>
          <li><strong>Cambios en el área</strong>: alguien deja material combustible, se abre una puerta, otro equipo empieza a trabajar cerca.</li>
          <li><strong>El estado del ejecutante</strong>: si se quema la ropa o si se siente mal por los humos.</li>
        </ul>
        <p><strong>Cómo vigilar bien:</strong></p>
        <ul>
          <li>Mantener la vista en el área, no en el arco: la luz del arco daña los ojos y no deja ver lo que pasa alrededor.</li>
          <li>Moverse si es necesario para ver detrás de las mamparas o debajo de los equipos.</li>
          <li>Pedir pausas cortas para revisar lugares que no se ven desde la posición.</li>
          <li>No usar el celular ni conversar de otros temas.</li>
        </ul>
        <p><strong>Cuándo detener el trabajo de inmediato:</strong></p>
        <ul>
          <li>aparece humo, brasas o llamas en cualquier lugar;</li>
          <li>las chispas caen en un lugar no protegido o pasan a otro nivel;</li>
          <li>se siente olor a gas o solvente, o suena una alarma;</li>
          <li>alguien entra al área sin protección;</li>
          <li>el vigía necesita retirarse, aunque sea por unos minutos.</li>
        </ul>
        <p><strong>Si hay un conato:</strong> el vigía da la señal para detener el trabajo, avisa, usa el extintor si el fuego es pequeño y puede hacerlo con seguridad, y da la alarma general si no logra controlarlo en segundos.</p>
        <p><strong>Lo que el vigía no debe hacer:</strong> ayudar al soldador "solo un momento", sostener piezas, alejarse a buscar algo o asumir que "todo está bien" porque no ve llamas.</p>
      `,
      keyPoints: [
        'Se observa la trayectoria de las chispas, el humo, los olores y los cambios en el área, no el arco.',
        'El trabajo se detiene ante humo, chispas fuera de control, olor a gas, alarmas o si el vigía debe retirarse.',
        'El vigía nunca ayuda al soldador ni se aleja "solo un momento".'
      ]
    },
    {
      title: 'Cómo usar un extintor portátil',
      content: `
        <p><strong>Antes de atacar el fuego, tres preguntas rápidas:</strong></p>
        <ol>
          <li>¿El fuego es pequeño, del tamaño de una caneca de basura o menor?</li>
          <li>¿Tengo el extintor adecuado para esta clase de fuego?</li>
          <li>¿Tengo una salida a mi espalda y no hay humo que me rodee?</li>
        </ol>
        <p>Si la respuesta a alguna es <strong>no</strong>, no se ataca: se da la alarma y se evacúa.</p>
        <p><strong>Técnica en cuatro pasos</strong> (conocida en inglés como <em>PASS</em>):</p>
        <ol>
          <li><strong>Halar el pasador</strong> de seguridad, rompiendo el sello.</li>
          <li><strong>Apuntar</strong> la boquilla a la <strong>base del fuego</strong>, no a las llamas. Las llamas son el gas que arde; la base es donde está el combustible.</li>
          <li><strong>Presionar</strong> la palanca de forma continua.</li>
          <li><strong>Barrer</strong> de lado a lado la base del fuego hasta apagarlo.</li>
        </ol>
        <p><strong>Distancia y posición.</strong> Acérquese a unos 2 o 3 metros, con el viento o la corriente de aire a su espalda en espacios abiertos, para que el agente vaya hacia el fuego y el humo se aleje de usted. Avance a medida que el fuego disminuye.</p>
        <p><strong>Duración.</strong> Un extintor portátil se vacía en muy pocos segundos, por lo general menos de veinte. No hay tiempo para probarlo ni para dudar.</p>
        <p><strong>Después de apagarlo:</strong></p>
        <ul>
          <li>No le dé la espalda al fuego: retroceda mirándolo, porque puede reavivarse.</li>
          <li>Revise que no queden brasas, especialmente en cartones, aislamientos y espacios ocultos.</li>
          <li>Informe del uso del extintor para que se recargue; un extintor usado, aunque sea un poco, ya no está listo.</li>
        </ul>
        <p><strong>Cuándo dejar de intentarlo:</strong> si el fuego crece pese a la descarga, si el humo empieza a llenar el área, si se acaba el extintor y el fuego sigue, o si el fuego bloquea su salida. En ese caso, salga, cierre las puertas si puede hacerlo sin riesgo y dé la alarma.</p>
      `,
      keyPoints: [
        'Solo se ataca un fuego pequeño, con el extintor adecuado y con la salida a la espalda.',
        'Técnica: halar el pasador, apuntar a la base, presionar y barrer, a unos 2 o 3 metros.',
        'Un extintor dura pocos segundos; si el fuego crece o el humo llena el área, se evacúa y se da la alarma.'
      ]
    },
    {
      title: 'Después del trabajo: la vigilancia posterior',
      content: `
        <p>El trabajo del vigía no termina cuando se apaga el equipo. En el caso con que empieza este curso, el incendio empezó veinticinco minutos después de terminado el corte, cuando el vigía ya se había ido.</p>
        <p><strong>Cuánto tiempo.</strong> La NFPA 51B, en su edición 2019, aumentó la vigilancia posterior de 30 minutos a <strong>al menos 60 minutos</strong>, y permite que quien autoriza el permiso exija hasta <strong>tres horas adicionales de monitoreo</strong> según el riesgo del área. Algunos procedimientos y normas más antiguas mencionan 30 minutos. El vigía cumple siempre el tiempo que indique el permiso, y si tiene dudas sobre el área, informa para que se amplíe.</p>
        <p><strong>Qué hacer durante ese tiempo:</strong></p>
        <ul>
          <li>Recorrer todo el radio por donde pudieron llegar chispas.</li>
          <li>Bajar a revisar los niveles inferiores y pasar al otro lado de paredes y techos.</li>
          <li>Revisar ductos, canaletas, aislamientos, cartones y trapos.</li>
          <li>Comprobar la temperatura de las superficies que se calentaron, con termómetro o acercando el dorso de la mano con guante, sin tocar directamente.</li>
          <li>Buscar humo, olor a quemado y cualquier brasa.</li>
        </ul>
        <p><strong>El cambio de turno no termina la vigilancia.</strong> Si el vigía debe irse, entrega la vigilancia <strong>en persona</strong> a otro vigía capacitado, le explica qué se hizo y dónde cayeron chispas, y el relevo se registra. Nunca se deja el área sola porque "ya casi se cumple el tiempo".</p>
        <p><strong>Cierre.</strong> Cumplido el tiempo, el vigía y quien autorizó (o el ejecutante, según el procedimiento) recorren el área, confirman que no hay riesgo y firman el cierre del permiso. Solo entonces se retiran mantas y barreras.</p>
        <p><strong>Reportar.</strong> Cualquier conato, aunque se haya apagado fácilmente, se reporta como incidente. Indica que una chispa llegó a un combustible que debió estar protegido, y eso hay que corregirlo en los próximos trabajos.</p>
      `,
      keyPoints: [
        'NFPA 51B (2019): al menos 60 minutos de vigilancia posterior, más monitoreo adicional si quien autoriza lo exige.',
        'Se revisa todo el radio, los niveles inferiores, el otro lado de paredes y techos, y las superficies calientes.',
        'El cambio de turno no termina la vigilancia: el relevo se entrega en persona y se registra.'
      ]
    },
    {
      title: 'Respuesta a emergencias y primeros auxilios por quemaduras',
      content: `
        <p>Si el fuego se sale de control, el vigía deja de ser "el que apaga" y pasa a ser "el que avisa y protege a las personas".</p>
        <p><strong>Secuencia de respuesta:</strong></p>
        <ol>
          <li><strong>Dar la alarma</strong> por el medio establecido: pulsador, radio, teléfono de emergencias interno. Indique con claridad qué pasa y dónde.</li>
          <li><strong>Avisar a las personas</strong> del área para que salgan.</li>
          <li><strong>Cortar la energía o el gas</strong> del equipo de soldadura o del área, solo si sabe hacerlo y puede hacerlo sin riesgo.</li>
          <li><strong>Evacuar</strong> por la ruta establecida, sin usar ascensores, cerrando puertas detrás de usted si es posible, para frenar el humo.</li>
          <li><strong>Ir al punto de encuentro</strong> y reportar quién estaba en el área y si alguien falta.</li>
          <li><strong>Informar a la brigada o a los bomberos</strong> lo que sabe: dónde empezó, qué material arde, si hay cilindros de gas o químicos cerca.</li>
        </ol>
        <p><strong>Si hay humo:</strong> desplácese agachado, donde el aire es más limpio; cúbrase la nariz y la boca con un paño; antes de abrir una puerta, toque la manija con el dorso de la mano: si está caliente, busque otra salida.</p>
        <p><strong>Si la ropa de una persona se enciende:</strong> que se detenga, se tire al piso y ruede cubriéndose la cara. Puede ayudar a apagarla con una manta ignífuga o una prenda gruesa. No la deje correr: el aire aviva las llamas.</p>
        <p><strong>Primeros auxilios básicos en quemaduras:</strong></p>
        <ul>
          <li>Enfriar la zona con <strong>agua corriente a temperatura ambiente</strong> durante unos veinte minutos.</li>
          <li>Retirar anillos, relojes y prendas que no estén pegadas a la piel, antes de que la zona se inflame.</li>
          <li><strong>No</strong> aplicar hielo, cremas, aceites, pasta de dientes ni remedios caseros.</li>
          <li><strong>No</strong> reventar las ampollas.</li>
          <li>Cubrir con un apósito limpio y no adherente.</li>
          <li>Buscar atención médica en quemaduras extensas, profundas, en la cara, las manos, los genitales o las articulaciones, o si la persona inhaló humo.</li>
        </ul>
        <p><strong>Después de la emergencia:</strong> nadie vuelve a entrar hasta que la brigada o los bomberos lo autoricen. El evento se reporta y se investiga.</p>
      `,
      keyPoints: [
        'Si el fuego se sale de control: alarma, avisar, cortar energía o gas si es seguro, evacuar y reportar en el punto de encuentro.',
        'Con humo, desplazarse agachado y tocar las puertas antes de abrirlas.',
        'Quemaduras: enfriar con agua corriente unos veinte minutos; nada de hielo ni cremas, y no reventar ampollas.'
      ]
    }
  ],

  practices: [
    { q: '¿Qué hace el polvo químico seco para apagar el fuego?', options: ['Aumenta el oxígeno alrededor de la llama', 'Interrumpe la reacción en cadena de la combustión', 'Enfría el combustible como lo hace el agua'], answer: 1 },
    { q: '¿Por qué no se usa agua en un fuego de un tablero eléctrico energizado?', options: ['Porque el agua conduce la electricidad y puede electrocutar', 'Porque el agua se evapora antes de llegar al fuego', 'Porque mancha los equipos eléctricos del tablero'], answer: 0 },
    { q: 'El soldador le pide al vigía que sostenga una lámina "solo dos minutos". ¿Qué responde el vigía?', options: ['Acepta, porque son solo dos minutos', 'Acepta, pero mira el área de reojo mientras sostiene', 'No acepta: su única tarea es vigilar el área'], answer: 2 },
    { q: 'Al inspeccionar el extintor, la aguja del manómetro está fuera de la franja verde. ¿Qué hace el vigía?', options: ['Lo cambia por otro antes de empezar el trabajo', 'Lo usa igual, porque todavía tiene algo de presión', 'Le da unos golpes para que la aguja vuelva a su sitio'], answer: 0 },
    { q: 'Mientras vigila, ¿hacia dónde debe mirar el vigía?', options: ['Directamente al arco, para ver la calidad de la soldadura', 'Al celular, para estar disponible ante cualquier llamada', 'Al área donde caen las chispas y a los lugares cercanos'], answer: 2 },
    { q: 'Al usar el extintor, ¿hacia dónde se apunta la boquilla?', options: ['A la punta de las llamas', 'A la base del fuego', 'Al humo que sale del fuego'], answer: 1 },
    { q: 'Faltan 15 minutos de vigilancia posterior y el vigía debe irse por cambio de turno. ¿Qué hace?', options: ['Se va, porque ya casi se cumple el tiempo', 'Entrega la vigilancia en persona a otro vigía capacitado', 'Deja el extintor junto al área y se va'], answer: 1 },
    { q: '¿Cómo se enfría una quemadura como primer auxilio?', options: ['Con hielo directo durante varios minutos', 'Con crema dental o aceite de cocina', 'Con agua corriente a temperatura ambiente unos veinte minutos'], answer: 2 }
  ],

  scenarios: [
    {
      scenario:
        'Estás de vigía en un corte con pulidora. El soldador te pide que sostengas una lámina mientras él termina, porque "son solo dos minutos" y su ayudante se fue a almorzar.',
      options: [
        { text: 'Sostengo la lámina: dos minutos no hacen diferencia.', correct: false, feedback: 'Decisión insegura. En esos dos minutos nadie vigila las chispas; un conato empieza en segundos.' },
        { text: 'Le digo que no puedo dejar de vigilar y le propongo detener el corte hasta que regrese su ayudante o llegue otra persona.', correct: true, feedback: 'Decisión correcta. La dedicación exclusiva del vigía no se negocia.' },
        { text: 'Sostengo la lámina con una mano y el extintor con la otra.', correct: false, feedback: 'Decisión insegura. Ocupado sosteniendo, no puedes mirar el área ni reaccionar a tiempo.' }
      ]
    },
    {
      scenario:
        'Terminó el corte. Son las 4:00 p. m., el turno cambia y quieres irte. Recuerdas que hay una rejilla de piso cerca del área y no has bajado a revisar el cuarto de abajo.',
      options: [
        { text: 'Me voy: si hubiera algo, ya habría humo.', correct: false, feedback: 'Decisión insegura. Las brasas pueden arder sin llama durante mucho tiempo; así empezó el incendio del caso del curso.' },
        { text: 'Bajo a revisar el cuarto inferior, completo el tiempo de vigilancia y, si debo irme, entrego el puesto en persona a otro vigía.', correct: true, feedback: 'Decisión correcta. La vigilancia posterior incluye los niveles inferiores y no termina con el cambio de turno.' },
        { text: 'Le pido al guarda de seguridad que pase por el área cuando haga su ronda.', correct: false, feedback: 'Decisión insegura. Una ronda ocasional no reemplaza la vigilancia continua de un vigía capacitado.' }
      ]
    },
    {
      scenario:
        'Durante la vigilancia ves humo saliendo de una caja de cartón bajo la rejilla. Hay un extintor ABC a tres metros y el soldador sigue trabajando cerca, sin darse cuenta.',
      options: [
        { text: 'Hago la señal para detener el trabajo, aviso, tomo el extintor y ataco la base del fuego si sigue siendo pequeño; si crece, doy la alarma y evacúo.', correct: true, feedback: 'Decisión correcta. Detener, avisar y actuar sobre el conato con seguridad, sin arriesgarse si crece.' },
        { text: 'Voy a buscar al supervisor para que decida qué hacer.', correct: false, feedback: 'Decisión insegura. Mientras buscas al supervisor, el conato puede convertirse en incendio.' },
        { text: 'Le echo agua del termo que tengo, porque está más cerca que el extintor.', correct: false, feedback: 'Decisión insegura. Un poco de agua no basta y pierdes segundos valiosos; el extintor está a tres metros.' }
      ]
    },
    {
      scenario:
        'Al llegar a tu puesto como vigía, revisas el extintor asignado: el pasador está puesto, pero el sello está roto y el extintor se siente liviano.',
      options: [
        { text: 'Lo uso igual: el pasador está en su lugar y eso es lo importante.', correct: false, feedback: 'Decisión insegura. El sello roto y el peso bajo indican que se usó y puede estar vacío.' },
        { text: 'Aviso y no dejo empezar el trabajo hasta tener un extintor cargado y en buen estado.', correct: true, feedback: 'Decisión correcta. Un extintor dudoso se cambia antes de empezar.' },
        { text: 'Empiezo la vigilancia y voy por otro extintor cuando el soldador haga una pausa.', correct: false, feedback: 'Decisión insegura. Si el conato ocurre antes de la pausa, no tendrás con qué actuar.' }
      ]
    },
    {
      scenario:
        'Intentas apagar un fuego en un estante con cartones. Ya vaciaste el extintor, las llamas siguen creciendo y el humo empieza a bajar del techo.',
      options: [
        { text: 'Voy por otro extintor al fondo de la bodega y vuelvo a intentarlo.', correct: false, feedback: 'Decisión insegura. Con el fuego creciendo y el humo bajando, seguir combatiendo pone tu vida en riesgo.' },
        { text: 'Me quedo intentando sofocarlo con una chaqueta.', correct: false, feedback: 'Decisión insegura. Un fuego que ya creció no se controla con una prenda.' },
        { text: 'Salgo agachado por la ruta de evacuación, cierro la puerta si puedo, doy la alarma y reporto en el punto de encuentro.', correct: true, feedback: 'Decisión correcta. Cuando el extintor no bastó, la prioridad es salir y dar la alarma.' }
      ]
    }
  ],

  exam: [
    {
      q: '¿Qué tres elementos forman el triángulo del fuego?',
      options: [
        'Combustible, oxígeno y calor.',
        'Agua, humo y cenizas.',
        'Electricidad, metal y presión, que son las condiciones de los trabajos de soldadura.'
      ],
      answer: 0
    },
    {
      q: 'Una viga metálica calentada por una soldadura enciende un cartón al otro lado de la pared. ¿Cómo se transmitió el calor?',
      options: [
        'Por convección.',
        'Por conducción a través del metal de la viga.',
        'Por radiación.'
      ],
      answer: 1
    },
    {
      q: '¿Qué agente NO se debe usar en un fuego de gasolina o solvente?',
      options: [
        'Polvo químico seco, porque deja residuos que contaminan el producto.',
        'Espuma, porque cubre el líquido y no permite ver si el fuego se apagó.',
        'Agua.'
      ],
      answer: 2
    },
    {
      q: '¿A qué clase de fuego corresponde un incendio en un tablero eléctrico energizado?',
      options: [
        'Clase C: equipos eléctricos energizados.',
        'Clase A.',
        'Clase K, porque los tableros tienen grasa en los contactos y las borneras de conexión.'
      ],
      answer: 0
    },
    {
      q: '¿Qué extintor se usa en un fuego de una freidora industrial con aceite?',
      options: [
        'Un extintor de agua a presión, para enfriar rápidamente el aceite caliente.',
        'Un extintor de agente húmedo clase K.',
        'Un extintor de clase D, diseñado para metales combustibles.'
      ],
      answer: 1
    },
    {
      q: '¿Cuál es la regla principal del vigía de fuego mientras vigila?',
      options: [
        'Ayudar al soldador en lo que necesite para que el trabajo termine más rápido y el área quede libre.',
        'Ubicarse lejos del área.',
        'Dedicarse solo a vigilar.'
      ],
      answer: 2
    },
    {
      q: 'Un vigía con menos experiencia que el soldador ve chispas cayendo sobre un estante con cartones. ¿Qué hace?',
      options: [
        'Detiene el trabajo con la señal acordada: su autoridad no depende del cargo.',
        'Espera a que el soldador termine, porque él tiene más experiencia y sabe lo que hace.',
        'Le comenta al supervisor al final del turno para que se tenga en cuenta en el siguiente trabajo.'
      ],
      answer: 0
    },
    {
      q: 'Las chispas del trabajo pueden caer a un piso inferior que el vigía no ve desde su posición. ¿Qué corresponde?',
      options: [
        'Asumir que las chispas se apagan antes de llegar al piso de abajo.',
        'Ubicar un segundo vigía en ese nivel o tapar las aberturas y retirar los combustibles.',
        'Pedir al soldador que trabaje más rápido para que caigan menos chispas.'
      ],
      answer: 1
    },
    {
      q: 'Al inspeccionar un extintor antes del trabajo, ¿qué indica un sello roto?',
      options: [
        'Que el extintor está nuevo y listo para usarse en el área de trabajo.',
        'Que el extintor tiene más presión de la normal y conviene descargarlo un poco.',
        'Que pudo haberse usado; hay que verificarlo o cambiarlo antes de empezar.'
      ],
      answer: 2
    },
    {
      q: 'Durante el trabajo, ¿por qué el vigía no debe mirar directamente el arco de soldadura?',
      options: [
        'Porque la luz daña los ojos y le impide ver lo que pasa en el área.',
        'Porque distrae al soldador y le hace cometer errores en el cordón de soldadura.',
        'Porque el procedimiento lo prohíbe por razones de calidad de la soldadura.'
      ],
      answer: 0
    },
    {
      q: '¿Cuál de estas situaciones obliga al vigía a detener el trabajo de inmediato?',
      options: [
        'Que el soldador cambie de electrodo.',
        'Que el vigía sienta olor a gas o a solvente en el área.',
        'Que el trabajo se demore más de lo previsto en el permiso de trabajo, sin otros cambios en el área.'
      ],
      answer: 1
    },
    {
      q: 'Antes de atacar un fuego con un extintor, ¿qué debe confirmar el vigía?',
      options: [
        'Que el supervisor de área haya autorizado por radio el uso del extintor para no gastarlo sin necesidad.',
        'Que haya al menos tres personas cerca para ayudarle a combatir el fuego.',
        'Que el fuego sea pequeño, que el extintor sea el adecuado y que tenga la salida a su espalda.'
      ],
      answer: 2
    },
    {
      q: 'En la técnica de uso del extintor, ¿hacia dónde se dirige la descarga?',
      options: [
        'A la base del fuego, barriendo de lado a lado.',
        'A la parte alta de las llamas, donde el fuego es más intenso.',
        'Al techo, para que el agente caiga sobre el fuego como si fuera lluvia.'
      ],
      answer: 0
    },
    {
      q: 'Según la edición 2019 de la NFPA 51B, ¿cuánto dura como mínimo la vigilancia después de terminar el trabajo?',
      options: [
        '15 minutos, el tiempo que tarda en enfriarse la pieza soldada.',
        'Al menos 60 minutos, con monitoreo adicional si quien autoriza lo exige.',
        'Hasta que el ejecutante guarde el equipo de soldadura.'
      ],
      answer: 1
    },
    {
      q: 'El vigía vació el extintor, el fuego sigue creciendo y el humo baja del techo. ¿Qué hace?',
      options: [
        'Busca otro extintor en el fondo de la bodega y vuelve a intentarlo.',
        'Abre todas las ventanas para que salga el humo y sigue combatiendo con una manta.',
        'Sale por la ruta de evacuación, cierra la puerta si puede y da la alarma.'
      ],
      answer: 2
    },
    {
      q: 'Una persona sufrió una quemadura en el antebrazo. ¿Cuál es el primer auxilio correcto?',
      options: [
        'Enfriar con agua corriente a temperatura ambiente unos veinte minutos.',
        'Aplicar hielo directo sobre la piel y cubrir con crema para que no se formen ampollas.',
        'Reventar las ampollas para que salga el líquido y la piel se seque más rápido.'
      ],
      answer: 0
    }
  ]
};
