/**
 * Ampliación a 4 horas del curso Vigía / Observador de Fuego.
 * Se suma al curso base (content-src/cursos/observador-fuego.js): 4 módulos, 4 prácticas, 5 escenarios,
 * 8 preguntas, un taller aplicado por módulo (12) y un proyecto final: el plan de vigilancia de fuego
 * de un trabajo en caliente real de la planta del alumno.
 * Referencias: NFPA 51B (2019), NFPA 10 / NTC 2885 (extintores), NFPA 13 y 72 (rociadores y alarmas).
 */
export default {
  hours: 4,
  summary:
    'Cómo nace y se propaga el fuego, las clases de fuego y los extintores, el rol y la autoridad del vigía, qué verificar antes, durante y después del trabajo, cómo usar el extintor y cómo responder a una emergencia; además, los sistemas fijos y la alarma, la comunicación con el equipo, la protección del propio vigía y la vigilancia en lugares difíciles. Incluye talleres aplicados a su planta y un proyecto final.',

  modules: [
    {
      title: 'Rociadores, gabinetes, detectores y cómo dar la alarma',
      content: `
        <p>El extintor del vigía es la primera línea. Detrás de él están los <strong>sistemas fijos</strong> de la planta. El vigía debe conocerlos, saber si están en servicio y saber activar la respuesta cuando el extintor no basta.</p>
        <p><strong>Rociadores automáticos</strong> (NFPA 13). Cada boquilla se abre sola cuando el calor rompe su ampolla o fusible, normalmente entre 57 °C y 141 °C según el tipo. Solo se abren las boquillas calentadas, no todas. El vigía verifica que:</p>
        <ul>
          <li>el sistema del área está en servicio (pregunte al responsable del área; una válvula cerrada lo deja inútil);</li>
          <li>no hay materiales a menos del despeje requerido bajo las boquillas;</li>
          <li>las mantas o protecciones del trabajo no tapan las boquillas.</li>
        </ul>
        <p><strong>Gabinetes y mangueras contra incendio.</strong> Se usan solo si el vigía está entrenado y el procedimiento de la planta lo permite. Una manga de agua en un fuego eléctrico o de líquidos inflamables puede empeorar la situación.</p>
        <p><strong>Detectores y alarma</strong> (NFPA 72). Los detectores de humo o calor activan la alarma general. Durante un trabajo en caliente pueden estar desactivados de forma autorizada; en ese caso, <strong>el vigía es el detector</strong>, y su atención no se puede interrumpir ni un minuto.</p>
        <p><strong>Cómo dar la alarma.</strong> Antes de empezar, el vigía debe saber:</p>
        <ul>
          <li>dónde está la <strong>estación manual de alarma</strong> (pulsador) más cercana;</li>
          <li>el <strong>número o canal de radio</strong> de la brigada o de la central de emergencias;</li>
          <li>la <strong>ruta de evacuación</strong> y el punto de encuentro del área;</li>
          <li>qué decir: <em>dónde</em> es el fuego, <em>qué</em> se está quemando, si hay <em>personas</em> lesionadas o atrapadas y qué se ha hecho.</li>
        </ul>
        <p><strong>La regla de la alarma temprana:</strong> se da la alarma <strong>antes</strong> de intentar apagar el fuego, o al mismo tiempo pidiéndole a alguien que lo haga. Si el extintor funciona, se cancela; si no, la brigada ya va en camino. Perder dos minutos tratando de apagar solo puede ser la diferencia entre un conato y un incendio.</p>
        <p><strong>Si el fuego supera el extintor</strong>: evacuar, cerrar puertas al salir si es seguro (contienen el humo y el fuego), no usar ascensores y esperar a la brigada en el punto de encuentro con la información del lugar.</p>
      `,
      keyPoints: [
        'El vigía verifica que rociadores y detectores estén en servicio y que nada tape las boquillas.',
        'Con los detectores desactivados, el vigía es el detector y no interrumpe su atención.',
        'Se da la alarma antes de intentar apagar, o a la vez; se sabe dónde está el pulsador y qué decir.'
      ]
    },
    {
      title: 'Comunicación del vigía con el equipo de trabajo',
      content: `
        <p>Un vigía que ve el peligro pero no logra que el ejecutante se detenga no sirve. La comunicación se acuerda <strong>antes</strong> de empezar.</p>
        <p><strong>Antes del trabajo, una charla corta con el ejecutante:</strong></p>
        <ul>
          <li>cuál es la <strong>señal de alto</strong> (por ejemplo, tocar el hombro, una señal con la mano o una palabra por radio) y que se obedece de inmediato, sin discusión;</li>
          <li>dónde se ubicará el vigía y qué zonas vigilará;</li>
          <li>cómo se comunicarán si el ruido o la careta impiden oírse;</li>
          <li>qué hará cada uno si se inicia un fuego.</li>
        </ul>
        <p><strong>El ejecutante con careta no ve.</strong> El soldador tiene la vista concentrada en el arco y la careta oscura le impide ver alrededor. El vigía es sus ojos. Por eso la señal de alto debe ser física o por radio, no un grito en un área ruidosa.</p>
        <p><strong>Radio.</strong> Cuando el vigía está en otro nivel o al otro lado de un muro, se usa radio con un canal acordado. Antes de empezar se prueba que se escuchan bien. Si se pierde la comunicación, el trabajo se detiene hasta restablecerla.</p>
        <p><strong>Varios ejecutantes.</strong> Si hay varios puntos de trabajo, cada vigía tiene asignada un área que puede ver por completo. Un vigía no cubre dos frentes que no ve al mismo tiempo.</p>
        <p><strong>Relevo del vigía.</strong> Si el vigía necesita retirarse (relevo de turno, necesidad personal), el trabajo se detiene hasta que llegue el reemplazo. El relevo se hace en el sitio: el vigía saliente le explica al entrante qué ha visto, qué zonas hay que vigilar, dónde están el extintor y el pulsador y cuánto falta de la vigilancia posterior. El relevo se anota en el permiso.</p>
        <p><strong>Reportar.</strong> Al terminar, el vigía informa al responsable del área lo que observó: chispas que llegaron lejos, conatos apagados, combustibles que aparecieron durante el trabajo o protecciones que se movieron. Esa información mejora el siguiente permiso.</p>
        <p><strong>Autoridad.</strong> El vigía tiene autoridad para detener el trabajo, aunque el ejecutante tenga más experiencia o un cargo superior. Detener a tiempo no es una falta de respeto: es su trabajo.</p>
      `,
      keyPoints: [
        'Antes de empezar se acuerda la señal de alto, la ubicación del vigía y la comunicación con ruido o careta.',
        'Si se pierde la comunicación o el vigía debe retirarse, el trabajo se detiene hasta restablecerla o relevarlo.',
        'Cada vigía cubre solo lo que puede ver; el relevo se hace en el sitio y se anota en el permiso.'
      ]
    },
    {
      title: 'La protección del propio vigía',
      content: `
        <p>El vigía está cerca del trabajo durante todo el tiempo que dura. Se expone a los mismos peligros que el ejecutante y a algunos propios.</p>
        <p><strong>Radiación del arco.</strong> La luz de la soldadura de arco emite radiación ultravioleta que quema la córnea ("ojo de arco") sin que se sienta en el momento; el dolor aparece horas después. El vigía no mira el arco directamente: usa gafas o careta con filtro adecuado si debe mirar hacia el trabajo, o se ubica de manera que vea el área de chispas sin ver el arco. Las mamparas protegen también a quienes pasan cerca.</p>
        <p><strong>Humos de soldadura.</strong> Contienen partículas metálicas y gases. El vigía se ubica, cuando sea posible, <strong>fuera de la columna de humo</strong> y con el viento a la espalda, y usa la protección respiratoria que indique el análisis del trabajo, especialmente en espacios cerrados o con metales recubiertos (galvanizado, pintura, cadmio).</p>
        <p><strong>Chispas, escoria y calor.</strong> Ropa de algodón o ignífuga sin partes sintéticas, mangas largas, botas cerradas, guantes y casco. El vigía no usa ropa con grasa, aceite o solventes.</p>
        <p><strong>Ruido.</strong> Pulidoras y corte generan ruido intenso; protección auditiva, combinada con un sistema de comunicación que funcione con ella.</p>
        <p><strong>Ubicación segura.</strong> El vigía se ubica donde:</p>
        <ul>
          <li>vea toda la zona de chispas y los puntos por donde pueden escapar;</li>
          <li>tenga el extintor al alcance y una ruta de salida libre a la espalda;</li>
          <li>no quede bajo cargas suspendidas, en el recorrido de equipos ni en el borde de un nivel sin protección.</li>
        </ul>
        <p><strong>Trabajos en altura y espacios confinados.</strong> Si el vigía debe estar en altura, necesita la certificación de trabajo en alturas y su protección contra caídas. Si vigila un trabajo dentro de un espacio confinado, se coordinan las funciones con el vigía del espacio confinado; un mismo trabajador no puede cumplir ambos roles si eso le impide atender alguno de los dos.</p>
        <p><strong>Calor y fatiga.</strong> Vigilancias largas, en sitios calientes, cansan y bajan la atención. Hidratación, pausas planeadas con relevo y rotación del vigía en trabajos prolongados.</p>
      `,
      keyPoints: [
        'El vigía no mira el arco sin filtro: la radiación ultravioleta quema la córnea.',
        'Se ubica fuera del humo, con ropa adecuada, protección auditiva y una ruta de salida libre.',
        'En altura o en espacios confinados necesita sus propias protecciones; en vigilancias largas, relevo y pausas.'
      ]
    },
    {
      title: 'Vigilancia en lugares difíciles y detección del fuego latente',
      content: `
        <p>Los fuegos que escapan a la vigilancia suelen empezar donde el vigía no estaba mirando: <strong>al otro lado</strong>, <strong>abajo</strong> o <strong>dentro</strong>.</p>
        <p><strong>Al otro lado de muros, pisos y techos.</strong> El calor se conduce por el metal y las chispas pasan por huecos. Cuando el trabajo es sobre un muro, un piso o un techo que tiene combustibles del otro lado, la NFPA 51B pide un <strong>vigía adicional</strong> en ese lado. El vigía principal no puede cubrir un área que no ve.</p>
        <p><strong>Niveles inferiores.</strong> Las chispas y la escoria caen por rejillas, pasos de tuberías, huecos de escaleras y juntas de pisos. Se sellan las aberturas, se ubica un vigía abajo si hay combustibles y se revisa toda la proyección vertical del trabajo.</p>
        <p><strong>Ductos, bandejas de cables y paneles.</strong> Las chispas pueden entrar a un ducto o a una bandeja y avanzar por dentro. En paneles sándwich con núcleo combustible, el fuego puede avanzar por el interior del panel sin verse.</p>
        <p><strong>Cómo detectar un fuego latente:</strong></p>
        <ul>
          <li><strong>Olfato</strong>: olor a quemado, plástico o madera caliente.</li>
          <li><strong>Vista</strong>: humo leve, decoloración de la pintura, burbujas en recubrimientos, deformación.</li>
          <li><strong>Tacto con precaución</strong>: acercar el dorso de la mano, sin tocar, a superficies cercanas al trabajo para percibir calor.</li>
          <li><strong>Termómetro infrarrojo o cámara termográfica</strong>, cuando la empresa los tiene: permiten ver puntos calientes en muros, paneles y aislamientos sin tocarlos. Una temperatura que sube en vez de bajar durante la vigilancia es una señal de alerta.</li>
        </ul>
        <p><strong>La vigilancia posterior.</strong> La NFPA 51B (2019) exige que la vigilancia continúe <strong>al menos 60 minutos</strong> después de terminar el trabajo, y que el área se monitoree después durante un tiempo adicional que define el responsable según el riesgo (hasta 3 horas). En áreas con combustibles ocultos, paneles o polvo, el responsable del área puede exigir más. La vigilancia posterior incluye <strong>todos</strong> los lugares revisados durante el trabajo: el otro lado, abajo y los puntos por donde pudieron entrar chispas.</p>
        <p><strong>Si encuentra algo:</strong> no lo deja "para ver si sigue". Lo informa de inmediato, lo controla si es seguro y extiende la vigilancia.</p>
      `,
      keyPoints: [
        'Si hay combustibles al otro lado de un muro, piso o techo, se necesita un vigía adicional en ese lado.',
        'El fuego latente se detecta por olor, humo leve, decoloración, calor o con termómetro infrarrojo.',
        'La vigilancia posterior dura al menos 60 minutos y revisa también el otro lado, abajo y los ductos.'
      ]
    }
  ],

  practices: [
    { q: 'Los detectores del área fueron desactivados para el trabajo. ¿Qué implica para el vigía?', options: ['Que el vigía es el detector y no puede interrumpir su atención', 'Que puede descansar porque nadie verá el humo', 'Que debe activar la alarma cada 15 minutos'], answer: 0 },
    { q: '¿Cuál es una buena señal de alto con un soldador que usa careta en un área ruidosa?', options: ['Gritarle desde lejos', 'Una señal física acordada o por radio', 'Apagar las luces del área'], answer: 1 },
    { q: '¿Por qué el vigía no mira el arco de soldadura sin filtro?', options: ['Porque se distrae de su tarea', 'Porque el soldador se molesta', 'Porque la radiación ultravioleta quema la córnea'], answer: 2 },
    { q: 'Se suelda un muro que tiene cajas de cartón del otro lado. ¿Qué se necesita?', options: ['Un vigía adicional del otro lado del muro', 'Nada más, si el vigía principal está atento', 'Mojar el muro al terminar el trabajo'], answer: 0 }
  ],

  workshops: [
    {
      title: 'Taller 1. El fuego en su planta',
      prompt: 'Piense en los materiales que podrían arder en su planta.',
      fields: [
        { label: 'Identifique tres combustibles presentes en su planta y en qué áreas están.', help: '', minWords: 30 },
        { label: '¿Cuál de ellos podría encenderse con una chispa de soldadura y por qué?', help: '', minWords: 25 },
        { label: '¿Cómo se podría propagar el fuego desde ese punto (conducción, convección, radiación, contacto)?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 2. Los extintores de su planta',
      prompt: 'Revise los extintores de un área de su planta.',
      fields: [
        { label: '¿Qué tipos de extintores hay en el área y para qué clases de fuego sirven?', help: '', minWords: 30 },
        { label: '¿Son los adecuados para los combustibles de esa área? ¿Falta alguno?', help: '', minWords: 25 },
        { label: '¿Qué agente no usaría nunca en esa área y por qué?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 3. Escoja un trabajo real',
      prompt: 'Escoja un trabajo en caliente real de su planta en el que haría de vigía. Lo usará en los demás talleres y en el proyecto final.',
      fields: [
        { label: 'Describa el trabajo, dónde se hace y qué equipo se usa.', help: '', minWords: 30 },
        { label: '¿Qué autoridad tendría usted como vigía y cómo la ejercería con un ejecutante de más experiencia?', help: '', minWords: 25 },
        { label: '¿Qué tareas no podría hacer mientras vigila?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 4. Antes del trabajo',
      prompt: 'Prepare la verificación previa del trabajo que escogió.',
      fields: [
        { label: '¿Qué combustibles revisaría en el radio de 11 metros, incluidos otros niveles y el otro lado de muros?', help: '', minWords: 30 },
        { label: '¿Cómo inspeccionaría el extintor asignado?', help: 'Presión, sello, manguera, fecha de recarga, tipo adecuado.', minWords: 25 },
        { label: '¿Dónde se ubicaría para ver toda el área?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 5. Durante el trabajo',
      prompt: 'Defina qué vigilaría durante el trabajo que escogió.',
      fields: [
        { label: '¿Hacia dónde irán las chispas y qué puntos vigilaría con más atención?', help: '', minWords: 30 },
        { label: '¿Qué situaciones lo harían detener el trabajo?', help: '', minWords: 25 },
        { label: '¿Qué haría si el ejecutante no se detiene cuando usted lo pide?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 6. Uso del extintor',
      prompt: 'Aplique la técnica del extintor a un caso de su planta.',
      fields: [
        { label: 'Describa paso a paso cómo atacaría un fuego incipiente en un material de su área.', help: '', minWords: 35 },
        { label: '¿Cuándo no intentaría apagarlo y evacuaría?', help: '', minWords: 25 },
        { label: '¿Ha practicado con un extintor real? Si no, ¿cómo podría practicar en su empresa?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 7. Vigilancia posterior',
      prompt: 'Planee la vigilancia posterior del trabajo que escogió.',
      fields: [
        { label: '¿Cuánto duraría la vigilancia posterior y qué lugares revisaría?', help: '', minWords: 30 },
        { label: '¿Cómo evitaría que se acorte por el cambio de turno o la presión de terminar?', help: '', minWords: 25 },
        { label: '¿Qué informaría al cerrar el permiso?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 8. Emergencias en su área',
      prompt: 'Revise cómo respondería a una emergencia en el área del trabajo.',
      fields: [
        { label: '¿Cuál es la ruta de evacuación y el punto de encuentro del área?', help: '', minWords: 25 },
        { label: '¿Cómo atendería una quemadura mientras llega ayuda?', help: '', minWords: 25 },
        { label: '¿Qué haría si se prende la ropa de una persona?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 9. Sistemas fijos y alarma',
      prompt: 'Revise los sistemas fijos del área del trabajo que escogió.',
      fields: [
        { label: '¿Qué sistemas fijos hay en el área (rociadores, detectores, gabinetes) y cómo sabría si están en servicio?', help: '', minWords: 30 },
        { label: '¿Dónde está el pulsador de alarma más cercano y a quién llamaría? ¿Qué le diría?', help: '', minWords: 30 },
        { label: '¿Qué haría distinto si los detectores estuvieran desactivados?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 10. Comunicación con el equipo',
      prompt: 'Prepare la charla previa con el ejecutante del trabajo que escogió.',
      fields: [
        { label: 'Escriba lo que le diría al ejecutante antes de empezar: señal de alto, ubicación y comunicación.', help: '', minWords: 35 },
        { label: '¿Cómo haría el relevo si tuviera que retirarse?', help: '', minWords: 25 },
        { label: '¿Qué medio de comunicación usaría si está en otro nivel?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 11. Su propia protección',
      prompt: 'Defina su propia protección como vigía en el trabajo que escogió.',
      fields: [
        { label: '¿Qué elementos de protección personal usaría y por qué?', help: '', minWords: 30 },
        { label: '¿Cómo se protegería del arco y del humo?', help: '', minWords: 25 },
        { label: '¿Hay riesgos de altura, espacio confinado, cargas o tránsito de equipos en su ubicación? ¿Qué haría?', help: '', minWords: 25 }
      ]
    },
    {
      title: 'Taller 12. Lugares difíciles',
      prompt: 'Busque en el área del trabajo los lugares donde un fuego podría pasar desapercibido.',
      fields: [
        { label: '¿Hay muros, pisos, techos, ductos o paneles con combustibles al otro lado o por dentro?', help: '', minWords: 30 },
        { label: '¿Cuántos vigías se necesitarían y dónde se ubicaría cada uno?', help: '', minWords: 25 },
        { label: '¿Cómo detectaría un fuego latente en esos lugares?', help: '', minWords: 25 }
      ]
    }
  ],

  project: {
    title: 'Proyecto final: plan de vigilancia de fuego de un trabajo de su planta',
    intro:
      'Escriba el plan de vigilancia de fuego del trabajo en caliente que escogió en los talleres. Debe servirle a cualquier vigía que no conozca el área para hacer bien su trabajo. Antes de usarlo en campo, su empresa debe revisarlo y aprobarlo.',
    sections: [
      { label: '1. Trabajo, área y combustibles', help: 'El trabajo, el área, los combustibles en 11 metros, los ocultos y los de otros niveles o del otro lado.', minWords: 55 },
      { label: '2. Vigías, ubicación y equipos', help: 'Cuántos vigías, dónde se ubica cada uno, qué extintores y qué inspección se hace antes.', minWords: 55 },
      { label: '3. Comunicación y señal de alto', help: 'Charla previa, señal de alto, radio, relevo y qué se anota en el permiso.', minWords: 55 },
      { label: '4. Qué se vigila durante el trabajo y cuándo se detiene', help: 'Puntos críticos, dirección de las chispas y condiciones de suspensión.', minWords: 55 },
      { label: '5. Vigilancia posterior y cierre', help: 'Duración, lugares que se revisan, cómo se detecta el fuego latente y quién cierra.', minWords: 55 },
      { label: '6. Emergencia y protección del vigía', help: 'Alarma, uso del extintor, evacuación, primeros auxilios y elementos de protección del vigía.', minWords: 55 }
    ],
    rubric: [
      'Revisa combustibles a la vista, ocultos, en otros niveles y del otro lado de muros.',
      'Asigna vigías suficientes para ver todas las zonas de riesgo, sin otras tareas.',
      'Define una señal de alto que funciona con ruido y careta, y cómo se hace el relevo.',
      'Incluye una vigilancia posterior de al menos 60 minutos en todos los lugares revisados.',
      'Indica dónde está la alarma, qué se dice al reportar y cuándo se evacúa.',
      'Un vigía que no conoce el área podría seguirlo sin preguntar.'
    ]
  },

  scenarios: [
    {
      scenario:
        'Estás de vigía y los detectores del área fueron desactivados para el trabajo. Te llega un mensaje urgente al celular de un familiar.',
      options: [
        { text: 'Lo leo rápido: solo son unos segundos.', correct: false, feedback: 'Decisión insegura. Con los detectores desactivados, usted es el único que puede ver el fuego.' },
        { text: 'Pido detener el trabajo, atiendo el mensaje y retomamos cuando vuelvo a vigilar con atención completa.', correct: true, feedback: 'Decisión correcta. Si el vigía debe atender otra cosa, el trabajo se detiene.' },
        { text: 'Le pido al soldador que vigile mientras tanto.', correct: false, feedback: 'Decisión insegura. El soldador con careta no puede vigilar su propia área de chispas.' }
      ]
    },
    {
      scenario:
        'Ves humo saliendo de una bandeja de cartón cerca del trabajo. El extintor está a tu lado y nadie más lo ha visto.',
      options: [
        { text: 'Doy la señal de alto, aviso a la brigada o pido a alguien que dé la alarma y ataco el fuego con el extintor.', correct: true, feedback: 'Decisión correcta. Alarma temprana y ataque inmediato al conato.' },
        { text: 'Intento apagarlo yo solo y aviso solo si no logro apagarlo.', correct: false, feedback: 'Decisión insegura. Si el extintor no basta, se perdieron minutos valiosos.' },
        { text: 'Espero a ver si el humo se detiene solo.', correct: false, feedback: 'Decisión insegura. Un conato crece rápido; se actúa de inmediato.' }
      ]
    },
    {
      scenario:
        'El soldador trabaja en un piso de rejilla y abajo hay una zona de empaque con cartón. Eres el único vigía, arriba junto al soldador.',
      options: [
        { text: 'Me asomo por la rejilla de vez en cuando.', correct: false, feedback: 'Decisión insegura. No puede vigilar arriba y abajo al mismo tiempo.' },
        { text: 'Pido detener el trabajo hasta que se cubra la rejilla, se retire o proteja el cartón y haya un vigía abajo.', correct: true, feedback: 'Decisión correcta. Cada zona de riesgo necesita un vigía que la vea.' },
        { text: 'Pongo un extintor abajo y sigo vigilando arriba.', correct: false, feedback: 'Decisión incompleta. Un extintor sin vigía no detecta ni apaga nada.' }
      ]
    },
    {
      scenario:
        'Durante la vigilancia posterior, notas con el dorso de la mano que un panel sándwich cerca del trabajo se siente cada vez más caliente, aunque no ves humo.',
      options: [
        { text: 'No hay humo, así que cierro el permiso a la hora prevista.', correct: false, feedback: 'Decisión insegura. Un panel que se calienta puede tener el núcleo ardiendo por dentro.' },
        { text: 'Lo enfrío con el extintor de polvo y me voy.', correct: false, feedback: 'Decisión insegura. El polvo no llega al núcleo y el riesgo sigue.' },
        { text: 'Informo de inmediato, pido apoyo de la brigada para revisar el panel y extiendo la vigilancia.', correct: true, feedback: 'Decisión correcta. Una temperatura que sube es señal de fuego latente.' }
      ]
    },
    {
      scenario:
        'Faltan 20 minutos para terminar la vigilancia posterior y llega tu relevo. Tú debes irte ya.',
      options: [
        { text: 'Le explico en el sitio qué zonas vigilar, dónde está el extintor y el pulsador, y cuánto falta; lo anotamos en el permiso.', correct: true, feedback: 'Decisión correcta. El relevo se hace en el sitio y se registra.' },
        { text: 'Me voy y le dejo un mensaje por radio.', correct: false, feedback: 'Decisión insegura. El área queda sin vigía y el relevo no sabe qué revisar.' },
        { text: 'Cierro el permiso: 40 minutos es suficiente.', correct: false, feedback: 'Decisión insegura. La vigilancia posterior es de al menos 60 minutos.' }
      ]
    }
  ],

  exam: [
    {
      q: '¿Cuándo se da la alarma si el vigía detecta un fuego incipiente?',
      options: [
        'Antes de intentar apagarlo, o al mismo tiempo pidiendo ayuda.',
        'Solo si el extintor no logra apagar el fuego en el primer intento.',
        'Al terminar el turno, en el informe del permiso.'
      ],
      answer: 0
    },
    {
      q: '¿Por qué el vigía verifica que los rociadores del área están en servicio?',
      options: [
        'Porque los rociadores reemplazan al vigía de fuego.',
        'Porque una válvula cerrada deja el sistema inútil.',
        'Porque el agua de los rociadores apaga cualquier fuego.'
      ],
      answer: 1
    },
    {
      q: '¿Qué debe saber el vigía sobre la alarma antes de empezar?',
      options: [
        'Solo el número de su supervisor directo.',
        'Cómo desactivar la alarma si suena por el humo.',
        'Dónde está el pulsador y a quién avisar.'
      ],
      answer: 2
    },
    {
      q: '¿Qué pasa si se pierde la comunicación por radio entre el vigía y el ejecutante?',
      options: [
        'El trabajo se detiene hasta restablecerla.',
        'El ejecutante sigue y el vigía se acerca cuando pueda.',
        'Se cambia de canal sin detener el trabajo.'
      ],
      answer: 0
    },
    {
      q: '¿Cómo se hace el relevo del vigía?',
      options: [
        'Por radio, sin interrumpir el trabajo en ningún momento.',
        'En el sitio, explicando zonas, equipos y tiempo restante, y anotándolo en el permiso.',
        'Al final del turno, en la oficina del responsable del área.'
      ],
      answer: 1
    },
    {
      q: '¿Dónde se ubica el vigía respecto al humo de la soldadura?',
      options: [
        'Dentro de la columna de humo, para ver mejor las chispas.',
        'Justo encima del ejecutante para cubrir más área.',
        'Fuera de la columna de humo, con el viento a la espalda.'
      ],
      answer: 2
    },
    {
      q: 'Según la NFPA 51B, ¿qué se necesita si hay combustibles al otro lado de un muro que se va a soldar?',
      options: [
        'Un vigía adicional en el otro lado del muro.',
        'Mojar el muro del lado del trabajo cada 10 minutos.',
        'Nada más, si el vigía principal tiene un extintor de CO₂.'
      ],
      answer: 0
    },
    {
      q: 'Durante la vigilancia posterior, la temperatura de un panel sube en vez de bajar. ¿Qué indica?',
      options: [
        'Que el panel se está enfriando lentamente, como es normal.',
        'Un posible fuego latente que debe informarse de inmediato.',
        'Que el termómetro infrarrojo está mal calibrado.'
      ],
      answer: 1
    }
  ]
};
