/**
 * Curso: Armado y Desarmado Seguro de Andamios (Andamiero). Versión completa.
 * Régimen especial: Res. 4272 de 2021 (trabajo en alturas) exige formación presencial certificada
 * para trabajos con riesgo de caída de más de 2 m. Este curso es fundamentación teórica.
 */
export default {
  id: 'andamiero',
  title: 'Armado y Desarmado Seguro de Andamios (Andamiero)',
  hours: 1.5,
  category: 'regimen_especial',
  regulation: 'Res. 4272 de 2021 (trabajo en alturas), Decreto 1072 de 2015, Res. 0312 de 2019; referencias: manual del fabricante del andamio y normas técnicas de andamios',
  legalNotice:
    'ATENCIÓN MARCO LEGAL ESPECIAL: este curso es fundamentación teórica sobre andamios. En Colombia, para trabajar con riesgo de caída de más de 2 m es obligatorio contar con certificación presencial vigente en trabajo en alturas expedida por un centro autorizado (Res. 4272 de 2021). Esta constancia no reemplaza esa certificación.',
  summary:
    'Los tipos y componentes de los andamios, la base y el terreno, el armado nivel por nivel con protección contra caídas, las plataformas, barandas y accesos, los anclajes a la estructura, la inspección y la tarjeta de estado, los andamios móviles y el desarmado seguro.',
  fieldCase:
    'Un andamio tubular de 6 metros se armó sobre tierra blanda, sin placas base ni durmientes y sin diagonales. Al subir dos trabajadores con material, una pata se hundió, la estructura se inclinó y los trabajadores tuvieron que bajar de urgencia antes de que el andamio se volcara.',
  failureAnalysis:
    'Falla raíz: no se preparó la base (placas, durmientes y terreno firme), se omitieron las diagonales y los anclajes, y el andamio no fue inspeccionado ni autorizado por una persona competente antes de usarlo.',
  checklist: [
    'Tengo certificación vigente en trabajo en alturas y el permiso de trabajo está aprobado.',
    'El terreno es firme y nivelado; uso placas base y durmientes, y el andamio está a plomo.',
    'Todas las diagonales y crucetas están instaladas según el fabricante.',
    'El andamio está anclado a la estructura a las alturas que indica el fabricante.',
    'Las plataformas están completas, aseguradas y sin huecos.',
    'Hay barandas superior e intermedia y rodapié en todos los lados abiertos.',
    'El acceso es por escalera interna o integrada, nunca por las crucetas.',
    'El andamio tiene la tarjeta verde de una persona competente antes de usarlo.'
  ],
  onSiteClosure:
    'Práctica en su empresa: completar la certificación presencial de trabajo en alturas con un centro autorizado; armar y desarmar un andamio bajo supervisión de una persona competente, siguiendo el manual del fabricante; y diligenciar la inspección y la tarjeta de estado del andamio.',

  modules: [
    {
      title: 'Andamios, riesgos y marco legal',
      content: `
        <p>Un <strong>andamio</strong> es una estructura temporal que sirve como plataforma de trabajo en altura y para soportar a los trabajadores y sus materiales. Mal armado, se convierte en la causa del accidente que debía prevenir.</p>
        <p><strong>Riesgos principales:</strong></p>
        <ul>
          <li><strong>Caída de personas</strong> desde la plataforma, durante el armado o al subir y bajar.</li>
          <li><strong>Colapso o volcamiento</strong> del andamio por base deficiente, falta de diagonales o anclajes, sobrecarga o viento.</li>
          <li><strong>Caída de objetos</strong> sobre las personas que pasan debajo.</li>
          <li><strong>Contacto eléctrico</strong> con líneas cercanas al armar o al mover el andamio.</li>
          <li><strong>Golpes y atrapamientos</strong> al manipular tubos, marcos y plataformas.</li>
        </ul>
        <p><strong>Marco legal: un régimen especial.</strong> La <strong>Resolución 4272 de 2021</strong> del Ministerio del Trabajo regula el trabajo en alturas en Colombia. Define como trabajo en alturas toda actividad en la que el trabajador queda expuesto a un <strong>riesgo de caída de más de 2 metros</strong> respecto al nivel inferior más cercano, y exige, entre otras cosas:</p>
        <ul>
          <li><strong>Certificación presencial</strong> en trabajo en alturas, expedida por un centro de formación autorizado, en el nivel que corresponda a la tarea, con su vigencia y reentrenamiento.</li>
          <li><strong>Programa de prevención y protección contra caídas</strong> en la empresa.</li>
          <li>Un <strong>coordinador de trabajo en alturas</strong> que verifique las condiciones.</li>
          <li><strong>Permiso de trabajo</strong> y análisis de riesgos antes de la tarea.</li>
          <li><strong>Evaluación médica</strong> de aptitud para trabajo en alturas.</li>
          <li>Equipos de protección contra caídas certificados e inspeccionados.</li>
        </ul>
        <p>Además, el <strong>Decreto 1072 de 2015</strong> y la <strong>Resolución 0312 de 2019</strong> exigen que este riesgo esté identificado y controlado en el SG-SST.</p>
        <p><strong>Lo que hace este curso.</strong> Le da la base técnica para entender cómo se arma, inspecciona, usa y desarma un andamio con seguridad. <strong>No lo habilita</strong> para trabajar en alturas: eso requiere la certificación presencial y la práctica supervisada en su empresa.</p>
        <p><strong>El manual del fabricante manda.</strong> Cada sistema de andamio tiene un manual con su configuración, cargas admisibles, separación de anclajes y alturas máximas. Lo que dice ese manual prevalece sobre la costumbre de la obra.</p>
      `,
      keyPoints: [
        'Riesgos: caída de personas, colapso o volcamiento, caída de objetos y contacto eléctrico.',
        'Res. 4272 de 2021: con riesgo de caída de más de 2 m se exige certificación presencial, permiso, coordinador y aptitud médica.',
        'El manual del fabricante define configuración, cargas y anclajes, y prevalece sobre la costumbre.'
      ]
    },
    {
      title: 'Tipos de andamios y sus componentes',
      content: `
        <p><strong>Tipos más usados:</strong></p>
        <ul>
          <li><strong>Andamio de marcos</strong> (tubular de marcos): marcos prefabricados unidos con crucetas. Muy común en construcción y mantenimiento.</li>
          <li><strong>Andamio multidireccional</strong> (de sistema o roseta): pies verticales con rosetas donde se conectan horizontales y diagonales en varias direcciones. Se adapta a formas complejas.</li>
          <li><strong>Andamio de tubo y abrazadera</strong>: tubos unidos con abrazaderas. Muy versátil, pero exige mucha competencia para armarlo bien.</li>
          <li><strong>Andamio móvil</strong>: sobre ruedas con freno, para trabajos cortos en piso firme y nivelado.</li>
          <li><strong>Andamio colgante</strong>: plataforma suspendida de cables desde la parte alta de una edificación. Tiene requisitos propios y no se cubre en detalle en este curso.</li>
        </ul>
        <p><strong>Componentes de un andamio apoyado:</strong></p>
        <ul>
          <li><strong>Durmientes</strong>: tablones o placas que reparten la carga sobre el terreno.</li>
          <li><strong>Placas base</strong>: placas metálicas bajo cada pie. Con <strong>husillo o gato nivelador</strong>, permiten nivelar.</li>
          <li><strong>Pies, parales o marcos</strong>: elementos verticales que llevan la carga al piso.</li>
          <li><strong>Horizontales o largueros</strong>: unen los pies y soportan las plataformas.</li>
          <li><strong>Diagonales o crucetas</strong>: dan rigidez y evitan que la estructura se deforme o se doble.</li>
          <li><strong>Plataformas</strong>: superficies de trabajo metálicas o de madera certificada, con ganchos o seguros.</li>
          <li><strong>Barandas y rodapiés</strong>: protección perimetral contra la caída de personas y objetos.</li>
          <li><strong>Anclajes o amarres</strong>: conectan el andamio a la estructura para que no se vuelque.</li>
          <li><strong>Accesos</strong>: escaleras internas, escaleras integradas o plataformas con trampilla.</li>
        </ul>
        <p><strong>No se mezclan sistemas.</strong> Las piezas de distintos fabricantes o modelos no se combinan, aunque parezcan encajar: las uniones y las capacidades están calculadas para cada sistema.</p>
        <p><strong>Estado de las piezas:</strong> antes de armar, se revisa que los tubos no estén doblados, aplastados, corroídos o fisurados; que las soldaduras estén sanas; que los pasadores y seguros estén completos; y que las plataformas no tengan deformaciones ni ganchos dañados. Las piezas defectuosas se separan y se marcan.</p>
      `,
      keyPoints: [
        'Tipos: de marcos, multidireccional, tubo y abrazadera, móvil y colgante.',
        'Componentes: durmientes, placas base, pies, horizontales, diagonales, plataformas, barandas, anclajes y accesos.',
        'No se mezclan sistemas de distintos fabricantes y las piezas dañadas se separan antes de armar.'
      ]
    },
    {
      title: 'La base: terreno, durmientes, placas y nivelación',
      content: `
        <p>Un andamio es tan seguro como su base. En el caso del curso, la falla empezó en el piso.</p>
        <p><strong>Evaluar el terreno:</strong></p>
        <ul>
          <li>Que sea <strong>firme</strong> y capaz de soportar la carga: tierra compactada, concreto o asfalto en buen estado.</li>
          <li>Que no haya <strong>rellenos sueltos, zanjas, tapas de alcantarilla, tuberías enterradas</strong> ni zonas que se puedan socavar con agua.</li>
          <li>Que el agua de lluvia no se acumule bajo la base.</li>
          <li>En losas o cubiertas, verificar que la estructura soporte la carga puntual de los pies.</li>
        </ul>
        <p><strong>Durmientes.</strong> Sobre tierra o superficies blandas, cada pie se apoya en un <strong>durmiente</strong> (tablón de madera sana o placa) que reparte la carga en un área mayor. Un durmiente suele abarcar al menos dos pies para darle continuidad a la base. Nunca se usan ladrillos, bloques, cajas o pedazos de madera sueltos como apoyo: se parten o se deslizan.</p>
        <p><strong>Placas base y husillos.</strong> Todos los pies llevan <strong>placa base</strong>, centrada en el durmiente y, si es necesario, fijada a él. Los <strong>husillos niveladores</strong> compensan desniveles, pero tienen una extensión máxima indicada por el fabricante; no se usan totalmente extendidos.</p>
        <p><strong>Nivelación y plomo:</strong></p>
        <ul>
          <li>El primer nivel se arma con nivel de burbuja: horizontales a nivel y pies <strong>a plomo</strong> (verticales).</li>
          <li>Un error pequeño en la base se multiplica con la altura: un andamio fuera de plomo carga los pies de forma desigual y tiende a volcarse.</li>
          <li>En terrenos inclinados se usan husillos, piezas de ajuste o soluciones previstas por el fabricante, nunca calzos improvisados.</li>
        </ul>
        <p><strong>Distancia a la estructura.</strong> La plataforma se ubica lo más cerca posible de la superficie de trabajo. Si queda un espacio grande entre la plataforma y el muro, se instala baranda también en ese lado o se reduce la separación según el fabricante.</p>
        <p><strong>Líneas eléctricas.</strong> Antes de armar, se verifica la distancia a líneas aéreas. Si no se puede mantener la distancia de seguridad, se coordina con el operador de red la desenergización o protección de la línea.</p>
      `,
      keyPoints: [
        'Terreno firme y sin rellenos, zanjas ni tuberías; drenaje del agua de lluvia.',
        'Durmientes y placas base en todos los pies; nunca ladrillos, bloques o cajas como apoyo.',
        'Primer nivel a nivel y a plomo; husillos sin superar su extensión máxima.'
      ]
    },
    {
      title: 'Armado seguro nivel por nivel',
      content: `
        <p><strong>Antes de armar:</strong></p>
        <ul>
          <li>Permiso de trabajo en alturas aprobado y análisis de riesgos de la tarea.</li>
          <li>Andamieros con <strong>certificación vigente</strong> en trabajo en alturas y un <strong>supervisor o persona competente</strong> a cargo del armado.</li>
          <li>Manual del fabricante y plano o esquema de la configuración (altura, largo, anclajes, cargas).</li>
          <li>Piezas inspeccionadas y en cantidad suficiente.</li>
          <li><strong>Área delimitada</strong> abajo, con señalización, para que nadie pase bajo la zona de armado.</li>
        </ul>
        <p><strong>Secuencia general:</strong></p>
        <ol>
          <li>Durmientes, placas base y primer nivel nivelado y a plomo.</li>
          <li>Instalar <strong>todas las diagonales</strong> del nivel antes de subir al siguiente. Un nivel sin diagonales no es estable.</li>
          <li>Instalar la plataforma completa del nivel desde donde se armará el siguiente.</li>
          <li>Subir el siguiente nivel de marcos o pies, con sus horizontales y diagonales.</li>
          <li>Instalar los <strong>anclajes</strong> a la estructura a medida que se alcanza la altura indicada por el fabricante.</li>
          <li>Instalar barandas, rodapiés y accesos.</li>
        </ol>
        <p><strong>Protección contra caídas durante el armado.</strong> Mientras se arma, todavía no hay barandas completas. Por eso:</p>
        <ul>
          <li>El andamiero usa <strong>arnés de cuerpo completo</strong> conectado a un punto de anclaje adecuado (en el andamio, si el fabricante lo permite, o en la estructura) en todo momento.</li>
          <li>Se prefieren sistemas con <strong>baranda anticipada</strong> (que se instala desde el nivel inferior antes de subir), cuando el fabricante los ofrece.</li>
          <li>Se usan eslingas de doble terminal para estar siempre conectado al cambiar de punto.</li>
        </ul>
        <p><strong>Subir el material:</strong> con cuerda y polea o con un sistema mecánico, nunca cargando piezas mientras se sube por el andamio. Las herramientas se amarran para que no caigan.</p>
        <p><strong>Condiciones que detienen el armado:</strong> viento fuerte, lluvia o tormenta eléctrica, falta de piezas, terreno que cede o cualquier duda sobre la configuración.</p>
      `,
      keyPoints: [
        'Permiso, certificación vigente, persona competente a cargo, manual del fabricante y área delimitada.',
        'Todas las diagonales de un nivel antes de subir al siguiente; anclajes a medida que se gana altura.',
        'Durante el armado, arnés conectado en todo momento; material con cuerda y polea, nunca a mano por el andamio.'
      ]
    },
    {
      title: 'Plataformas, barandas, accesos y carga',
      content: `
        <p><strong>Plataformas de trabajo:</strong></p>
        <ul>
          <li><strong>Completas</strong>, cubriendo todo el ancho entre los pies, sin huecos por donde pueda caer una persona o un objeto.</li>
          <li><strong>Aseguradas</strong> con sus ganchos o seguros para que no se levanten ni se desplacen.</li>
          <li>De piezas certificadas del sistema. Tablones improvisados solo si cumplen las especificaciones de madera para andamios y van sujetos.</li>
          <li>Limpias, secas y sin material acumulado que haga tropezar.</li>
        </ul>
        <p><strong>Barandas y rodapiés</strong> en todos los lados abiertos de la plataforma:</p>
        <ul>
          <li><strong>Baranda superior</strong> a la altura que fijan la Res. 4272 de 2021 y el fabricante (del orden de 1 metro sobre la plataforma).</li>
          <li><strong>Baranda intermedia</strong>, a media altura, para que una persona no pase por debajo de la superior.</li>
          <li><strong>Rodapié</strong> en el borde de la plataforma, para que no caigan herramientas ni materiales.</li>
        </ul>
        <p>Faltar la baranda intermedia o el rodapié es una condición insegura, no un detalle: el andamio no se usa hasta completarlas.</p>
        <p><strong>Accesos:</strong></p>
        <ul>
          <li>Se sube y se baja por <strong>escaleras internas o integradas</strong> del sistema, o por escaleras portátiles amarradas que sobrepasen la plataforma.</li>
          <li><strong>Nunca se trepa por las crucetas, los marcos o las diagonales exteriores.</strong> No están diseñados como escalera y la persona queda fuera de la protección.</li>
          <li>Se sube con las manos libres, con tres puntos de apoyo; las herramientas van en un bolso o se suben con cuerda.</li>
          <li>Las trampillas de acceso se mantienen cerradas cuando no se están usando.</li>
        </ul>
        <p><strong>Carga del andamio.</strong> Cada andamio tiene una <strong>carga admisible por plataforma</strong> según su clase de servicio (liviano, mediano, pesado), indicada por el fabricante. Se suman personas, herramientas y materiales. No se acumula material pesado en un solo punto, no se apoyan equipos que generen vibración o impacto, y no se usa el andamio como soporte de cargas ajenas (tuberías, poleas, cables) si no está diseñado para ello.</p>
        <p><strong>Trabajo en la plataforma:</strong> no pararse sobre las barandas, cajas o escaleras puestas sobre la plataforma para ganar altura; no inclinarse por fuera de la baranda; y no saltar de un andamio a otro ni a la estructura.</p>
      `,
      keyPoints: [
        'Plataformas completas, aseguradas y limpias.',
        'Baranda superior, intermedia y rodapié en todos los lados abiertos.',
        'Acceso por escaleras internas o integradas, nunca por crucetas; respetar la carga admisible.'
      ]
    },
    {
      title: 'Anclajes, estabilidad y viento',
      content: `
        <p><strong>Por qué se ancla un andamio.</strong> Un andamio alto y angosto se comporta como una columna esbelta: un empujón, el viento o una carga a un lado lo pueden volcar. Los <strong>anclajes o amarres</strong> lo unen a la estructura y le dan estabilidad.</p>
        <p><strong>Relación entre altura y base.</strong> Cuando un andamio no está anclado, su estabilidad depende de la relación entre su altura y el lado menor de su base. El fabricante indica la altura máxima sin anclajes; una referencia frecuente en andamios móviles es que la altura no supere unas tres veces el lado menor de la base. Por encima de esa altura, el andamio debe anclarse o ampliar su base con estabilizadores.</p>
        <p><strong>Cómo se anclan:</strong></p>
        <ul>
          <li>A la <strong>separación vertical y horizontal</strong> que indique el fabricante, empezando a la altura que él define y siguiendo hacia arriba.</li>
          <li>A elementos de la estructura capaces de resistir la fuerza: columnas, vigas, losas o anclajes químicos o mecánicos instalados y probados.</li>
          <li><strong>No</strong> a barandas, tuberías, bajantes, ventanas o elementos que no fueron diseñados para recibir esa fuerza.</li>
          <li>Se instalan a medida que el andamio sube y se retiran a medida que baja: <strong>nunca se retiran anticipadamente</strong>.</li>
          <li>Si un anclaje estorba un trabajo, no se quita sin la autorización de la persona competente y sin colocar otro equivalente.</li>
        </ul>
        <p><strong>Lonas, mallas y avisos.</strong> Cubrir un andamio con lona o malla aumenta mucho la fuerza del viento sobre él. En ese caso se necesitan más anclajes, calculados para esa condición.</p>
        <p><strong>Viento y clima:</strong></p>
        <ul>
          <li>Se suspende el trabajo con <strong>viento fuerte</strong>, tormenta eléctrica o lluvia intensa.</li>
          <li>Después de una tormenta o de un viento fuerte, el andamio se <strong>inspecciona</strong> antes de volver a usarlo.</li>
          <li>Las plataformas mojadas o con barro son resbalosas: se limpian antes de trabajar.</li>
        </ul>
        <p><strong>Otras causas de inestabilidad:</strong> retirar diagonales para pasar material, sobrecargar una plataforma, golpes de vehículos o equipos contra la base, y excavaciones cercanas que socavan el terreno.</p>
      `,
      keyPoints: [
        'El fabricante fija la altura máxima sin anclaje; en móviles, referencia de unas tres veces el lado menor de la base.',
        'Anclajes a la separación del fabricante, a elementos resistentes y nunca retirados antes de tiempo.',
        'Lonas aumentan la carga de viento; se suspende con viento fuerte o tormenta y se inspecciona después.'
      ]
    },
    {
      title: 'Inspección, tarjeta de estado y andamios móviles',
      content: `
        <p><strong>Inspección por una persona competente:</strong></p>
        <ul>
          <li><strong>Al terminar el armado</strong> y antes de que nadie lo use.</li>
          <li><strong>Antes de cada turno</strong> o según la frecuencia definida por la empresa.</li>
          <li>Después de cualquier <strong>modificación</strong>, golpe, viento fuerte, lluvia intensa o sismo.</li>
        </ul>
        <p><strong>Qué se revisa:</strong> base y terreno, plomo y nivel, diagonales completas, anclajes, plataformas completas y aseguradas, barandas y rodapiés, accesos, señalización, carga sobre las plataformas y distancia a líneas eléctricas.</p>
        <p><strong>Tarjeta de estado del andamio.</strong> Es una práctica muy usada en la industria colombiana:</p>
        <ul>
          <li><strong>Tarjeta verde</strong>: andamio inspeccionado y apto para usar. Indica la fecha, la persona que inspeccionó y la carga admisible.</li>
          <li><strong>Tarjeta amarilla</strong> (cuando se usa): apto con restricciones; por ejemplo, uso obligatorio de arnés porque falta una baranda por la configuración del trabajo.</li>
          <li><strong>Tarjeta roja</strong>: <strong>no usar</strong>. Andamio en armado, en desarme o con una condición insegura.</li>
        </ul>
        <p><strong>Sin tarjeta, o con tarjeta roja, el andamio no se usa.</strong> Y ningún usuario modifica el andamio: si algo estorba o falta, se avisa a la persona competente.</p>
        <p><strong>Andamios móviles</strong> (sobre ruedas):</p>
        <ul>
          <li>Solo sobre <strong>piso firme, nivelado y sin obstáculos</strong>: huecos, cables o desniveles los pueden volcar.</li>
          <li><strong>Frenos puestos</strong> en todas las ruedas mientras alguien está arriba.</li>
          <li><strong>Nunca se mueve con personas</strong>, herramientas o materiales sueltos sobre la plataforma.</li>
          <li>Se mueve empujando desde la base, no halando desde arriba.</li>
          <li>Respetar la altura máxima del fabricante y usar estabilizadores cuando los indique.</li>
          <li>Verificar líneas eléctricas y techos en el recorrido.</li>
        </ul>
        <p><strong>Los usuarios del andamio</strong> (pintores, soldadores, electricistas) también deben tener certificación en trabajo en alturas, revisar la tarjeta antes de subir y reportar cualquier condición insegura.</p>
      `,
      keyPoints: [
        'Inspección por persona competente al terminar el armado, antes de cada turno y tras cambios o mal clima.',
        'Tarjeta verde: apto; roja o sin tarjeta: no se usa; los usuarios no modifican el andamio.',
        'Andamio móvil: piso firme, frenos puestos y nunca se mueve con personas o material arriba.'
      ]
    },
    {
      title: 'Desarmado seguro y emergencias',
      content: `
        <p><strong>El desarmado</strong> tiene tantos riesgos como el armado: la estructura pierde rigidez a medida que se retiran piezas, y las caídas de material son frecuentes.</p>
        <p><strong>Reglas del desarmado:</strong></p>
        <ul>
          <li>Permiso de trabajo, andamieros certificados y persona competente a cargo, igual que en el armado.</li>
          <li>Colocar la <strong>tarjeta roja</strong> y delimitar el área abajo.</li>
          <li>Retirar primero el material, las herramientas y los residuos de las plataformas.</li>
          <li>Desarmar en <strong>orden inverso</strong> al armado, de arriba hacia abajo, nivel por nivel.</li>
          <li><strong>No retirar los anclajes ni las diagonales</strong> de un nivel hasta que se hayan retirado todos los niveles superiores.</li>
          <li>El andamiero permanece conectado con su arnés en todo momento.</li>
          <li><strong>Nunca lanzar piezas</strong> desde el andamio: se bajan con cuerda y polea, de mano en mano entre niveles con plataforma, o con un sistema mecánico.</li>
          <li>Las piezas se clasifican y se apilan ordenadas en el piso, separando las dañadas.</li>
        </ul>
        <p><strong>Emergencias:</strong></p>
        <ul>
          <li><strong>El andamio se inclina, una pata se hunde o se escucha un crujido</strong>: todos bajan de inmediato por el acceso, sin cargar material, se aleja a las personas de la zona de posible caída y se avisa. Nadie vuelve a subir hasta que la persona competente lo evalúe.</li>
          <li><strong>Una persona queda suspendida en el arnés</strong> tras una caída: activar el plan de rescate de inmediato. La suspensión prolongada en el arnés es peligrosa por sí misma, por eso la Res. 4272 de 2021 exige que exista un plan de rescate para cada trabajo en alturas.</li>
          <li><strong>Caída de un objeto</strong> sobre una persona: atender al lesionado, revisar por qué el rodapié o la delimitación no lo impidió y corregir.</li>
          <li><strong>Contacto eléctrico</strong>: no tocar a la persona ni el andamio hasta que se corte la energía; llamar a emergencias.</li>
        </ul>
        <p><strong>Reportar.</strong> Un andamio que se movió, una plataforma que se levantó o una pieza que cayó sin herir a nadie son incidentes que se reportan e investigan. Son el aviso antes del accidente.</p>
      `,
      keyPoints: [
        'Desarmar en orden inverso, de arriba hacia abajo, sin retirar anclajes ni diagonales antes de tiempo.',
        'Nunca lanzar piezas: se bajan con cuerda y polea o de mano en mano.',
        'Andamio que se inclina: bajar de inmediato y alejar a todos; persona suspendida: activar el plan de rescate.'
      ]
    }
  ],

  practices: [
    { q: 'Según la Res. 4272 de 2021, ¿cuándo una tarea es trabajo en alturas?', options: ['Cuando hay riesgo de caída de más de 2 metros', 'Cuando hay riesgo de caída de más de 5 metros', 'Solo por encima de 10 metros'], answer: 0 },
    { q: '¿Qué prevalece sobre la costumbre de la obra al armar un andamio?', options: ['La opinión del andamiero con más años', 'El manual del fabricante del andamio', 'Lo que se hizo en la obra anterior'], answer: 1 },
    { q: '¿Para qué sirven los durmientes bajo las placas base?', options: ['Para que el andamio quede más alto', 'Para decorar la base', 'Para repartir la carga sobre el terreno'], answer: 2 },
    { q: '¿Cuándo se instalan las diagonales de un nivel?', options: ['Antes de subir a armar el siguiente nivel', 'Al final, cuando el andamio está completo', 'Solo en el nivel superior'], answer: 0 },
    { q: '¿Cuáles son las protecciones perimetrales de una plataforma?', options: ['Solo la baranda superior', 'Baranda superior, baranda intermedia y rodapié', 'Una cinta de señalización'], answer: 1 },
    { q: '¿Cómo se sube a la plataforma de un andamio?', options: ['Trepando por las crucetas exteriores', 'Por una cuerda amarrada a la baranda', 'Por la escalera interna o integrada del sistema'], answer: 2 },
    { q: 'Un andamio tiene tarjeta roja. ¿Qué significa?', options: ['Que no se debe usar', 'Que se puede usar con arnés', 'Que fue inspeccionado hoy y es apto'], answer: 0 },
    { q: 'Al desarmar, ¿cuándo se retiran los anclajes de un nivel?', options: ['Al comienzo, para facilitar el trabajo', 'Cuando ya se retiraron todos los niveles superiores', 'Cuando el viento se calma'], answer: 1 }
  ],

  scenarios: [
    {
      scenario:
        'Debes armar un andamio de 6 metros sobre tierra blanda. Un compañero propone apoyar los pies sobre ladrillos para "ganar tiempo".',
      options: [
        { text: 'Acepto los ladrillos porque el andamio no es tan alto.', correct: false, feedback: 'Decisión insegura. Los ladrillos se parten o se hunden, como pasó en el caso del curso.' },
        { text: 'Compacto o mejoro el terreno, uso durmientes y placas base, y nivelo y aplomo el primer nivel.', correct: true, feedback: 'Decisión correcta. La base es lo que sostiene todo el andamio.' },
        { text: 'Armo sobre la tierra sin nada debajo y pongo más diagonales.', correct: false, feedback: 'Decisión insegura. Las diagonales no compensan una base que se hunde.' }
      ]
    },
    {
      scenario:
        'Un trabajador quiere subir rápido a la plataforma trepando por las crucetas exteriores porque la escalera interna está al otro lado del andamio.',
      options: [
        { text: 'Lo dejo subir si se agarra bien.', correct: false, feedback: 'Decisión insegura. Las crucetas no son escalera y lo dejan fuera de la protección.' },
        { text: 'Le pido que suba con una herramienta en la mano para ganar tiempo.', correct: false, feedback: 'Decisión insegura. Además de trepar por fuera, pierde los tres puntos de apoyo.' },
        { text: 'Le indico que use la escalera interna, con las manos libres y tres puntos de apoyo.', correct: true, feedback: 'Decisión correcta. El acceso se hace por los medios diseñados para eso.' }
      ]
    },
    {
      scenario:
        'Al revisar el andamio antes de empezar, notas que en un lado de la plataforma falta la baranda intermedia y no hay rodapié. Tiene tarjeta verde de ayer.',
      options: [
        { text: 'No lo uso, aviso a la persona competente para que complete las protecciones y vuelva a inspeccionar.', correct: true, feedback: 'Decisión correcta. Faltar la baranda intermedia o el rodapié es una condición insegura.' },
        { text: 'Lo uso con cuidado de no acercarme a ese lado.', correct: false, feedback: 'Decisión insegura. Una persona puede caer por debajo de la baranda superior.' },
        { text: 'Pongo una cinta de señalización en lugar de la baranda.', correct: false, feedback: 'Decisión insegura. Una cinta no detiene a una persona ni un objeto.' }
      ]
    },
    {
      scenario:
        'Para pasar un tubo largo, un compañero quiere retirar dos diagonales y un anclaje del andamio "solo por un momento".',
      options: [
        { text: 'Las retiramos y las ponemos de nuevo al terminar.', correct: false, feedback: 'Decisión insegura. Sin diagonales ni anclaje, el andamio pierde rigidez y estabilidad.' },
        { text: 'Detengo la tarea y pido a la persona competente una solución que no comprometa la estructura.', correct: true, feedback: 'Decisión correcta. Ningún usuario modifica el andamio; la persona competente decide.' },
        { text: 'Retiro solo el anclaje, que estorba menos.', correct: false, feedback: 'Decisión insegura. El anclaje es lo que evita que el andamio se vuelque.' }
      ]
    },
    {
      scenario:
        'Estás sobre un andamio móvil y necesitas trabajar dos metros más allá. Tu compañero propone empujarlo contigo arriba para no bajar.',
      options: [
        { text: 'Me agarro de la baranda mientras él lo empuja despacio.', correct: false, feedback: 'Decisión insegura. Un desnivel o una rueda trabada pueden volcarlo con usted arriba.' },
        { text: 'Lo movemos entre los dos halándolo desde arriba.', correct: false, feedback: 'Decisión insegura. Nunca se mueve un andamio con personas arriba ni halándolo.' },
        { text: 'Bajo con las herramientas, movemos el andamio empujando desde la base, ponemos los frenos y vuelvo a subir.', correct: true, feedback: 'Decisión correcta. El andamio móvil nunca se mueve con personas o material arriba.' }
      ]
    }
  ],

  exam: [
    {
      q: '¿Qué exige la Res. 4272 de 2021 para trabajar en un andamio con riesgo de caída de más de 2 m?',
      options: [
        'Certificación presencial en alturas de un centro autorizado.',
        'Solo un curso virtual de 1 hora y media con una constancia descargable.',
        'Ningún requisito si el andamio tiene barandas.'
      ],
      answer: 0
    },
    {
      q: '¿Por qué no se mezclan piezas de andamios de distintos fabricantes?',
      options: [
        'Porque se ven de colores diferentes y la obra se ve desordenada.',
        'Porque las uniones y capacidades están calculadas para cada sistema.',
        'Porque pesan distinto.'
      ],
      answer: 1
    },
    {
      q: '¿Qué se usa como apoyo de un pie de andamio sobre tierra?',
      options: [
        'Ladrillos o bloques de concreto.',
        'Cajas de madera vacías o estibas apiladas que haya en la obra.',
        'Placa base sobre un durmiente que reparte la carga.'
      ],
      answer: 2
    },
    {
      q: '¿Por qué es importante que el primer nivel quede a plomo?',
      options: [
        'Porque un error en la base crece con la altura.',
        'Porque así se ve mejor en las fotos del informe de avance de obra.',
        'Porque el fabricante lo cobra aparte.'
      ],
      answer: 0
    },
    {
      q: '¿Cuál es la protección contra caídas del andamiero mientras arma el andamio?',
      options: [
        'Ninguna, porque todavía no hay altura suficiente para caer.',
        'Arnés de cuerpo completo conectado en todo momento a un anclaje adecuado.',
        'Un casco con barbuquejo, guantes y botas con puntera de acero bien amarradas.'
      ],
      answer: 1
    },
    {
      q: '¿Cómo se suben los tubos y marcos a los niveles altos durante el armado?',
      options: [
        'Cargándolos al hombro mientras se sube por el andamio.',
        'Lanzándolos desde abajo a un compañero que los recibe arriba.',
        'Con cuerda y polea o con un sistema mecánico.'
      ],
      answer: 2
    },
    {
      q: '¿Para qué sirve la baranda intermedia?',
      options: [
        'Para que una persona no pase por debajo de la baranda superior.',
        'Para colgar las herramientas mientras se trabaja.',
        'Para apoyar los pies y ganar altura.'
      ],
      answer: 0
    },
    {
      q: '¿Qué función cumple el rodapié?',
      options: [
        'Dar más altura a la plataforma.',
        'Evitar que caigan herramientas y materiales de la plataforma.',
        'Servir de escalón para subir a la plataforma desde el acceso lateral.'
      ],
      answer: 1
    },
    {
      q: '¿A qué se ancla un andamio?',
      options: [
        'A las bajantes de agua o tuberías cercanas que se vean firmes.',
        'A las barandas de los balcones de la edificación.',
        'A elementos estructurales resistentes, como columnas o losas.'
      ],
      answer: 2
    },
    {
      q: '¿Qué efecto tiene cubrir un andamio con lona?',
      options: [
        'Aumenta la fuerza del viento y exige más anclajes.',
        'Lo hace más estable porque lo protege del viento lateral.',
        'Ninguno, porque la lona pesa muy poco frente a la estructura.'
      ],
      answer: 0
    },
    {
      q: '¿Cuándo debe inspeccionarse un andamio?',
      options: [
        'Solo una vez, cuando se termina de armar y se entrega a los usuarios de la obra.',
        'Al terminar el armado, antes de cada turno y tras cambios o mal clima.',
        'Cuando un usuario se queja de que se mueve.'
      ],
      answer: 1
    },
    {
      q: 'Un andamio no tiene tarjeta de estado. ¿Qué hace el usuario?',
      options: [
        'Lo usa si se ve bien armado.',
        'Lo usa con arnés.',
        'No lo usa y avisa a la persona competente.'
      ],
      answer: 2
    },
    {
      q: '¿Cuál es una regla de los andamios móviles?',
      options: [
        'Nunca se mueven con personas ni material sobre la plataforma.',
        'Se mueven halándolos desde arriba de la plataforma.',
        'Los frenos se ponen solo al final del día, cuando se deja de trabajar.'
      ],
      answer: 0
    },
    {
      q: '¿En qué orden se desarma un andamio?',
      options: [
        'De abajo hacia arriba, empezando por la base para que baje solo.',
        'En orden inverso al armado, de arriba hacia abajo, nivel por nivel.',
        'Retirando primero todos los anclajes.'
      ],
      answer: 1
    },
    {
      q: '¿Qué se hace con las piezas durante el desarmado?',
      options: [
        'Se lanzan al piso dentro del área delimitada.',
        'Se dejan sobre la plataforma hasta el día siguiente.',
        'Se bajan con cuerda y polea o de mano en mano.'
      ],
      answer: 2
    },
    {
      q: 'Una pata del andamio se hunde y la estructura se inclina con dos personas arriba. ¿Qué se hace?',
      options: [
        'Bajar de inmediato, alejar a todos y no subir hasta que lo evalúen.',
        'Terminar rápido el trabajo antes de que se incline más y luego avisar.',
        'Subir más material al lado contrario para equilibrarlo.'
      ],
      answer: 0
    }
  ]
};
