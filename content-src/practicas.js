// Preguntas de PRÁCTICA por módulo (una por módulo). Son distintas de las del examen:
// la práctica no revela ninguna respuesta de evaluación. El generador reparte la posición de la clave.
export const PRACTICAS = {
  'observador-fuego': [
    { q: '¿Cuáles son los elementos que deben coexistir para que haya fuego?', options: ['Combustible, oxígeno y una fuente de ignición', 'Agua, aire y tierra', 'Calor, luz y humo'], answer: 0 },
    { q: 'Ante un conato de incendio, ¿qué debe hacer primero el Observador de Fuego?', options: ['Dar la alarma y seguir el plan de emergencia, sin exponerse', 'Intentar apagarlo solo sin avisar', 'Esperar a que crezca para confirmar'], answer: 0 },
    { q: 'Para un incendio de líquidos inflamables, ¿qué tipo de extintor es adecuado?', options: ['Agua a chorro directo', 'Extintor de clase A únicamente', 'Extintor de clase B o ABC según la norma del sitio'], answer: 2 },
    { q: 'Después de un trabajo en caliente, ¿qué debe vigilar el Observador de Fuego?', options: ['Que no queden focos latentes durante el tiempo que fije el permiso', 'Que el equipo quede pintado', 'Nada: el riesgo termina al apagar la llama'], answer: 0 }
  ],
  'sustancias-quimicas': [
    { q: 'En el SGA, ¿qué indica la palabra de advertencia "Peligro"?', options: ['Un peligro más grave que "Atención"', 'Un peligro leve', 'Que la sustancia no es tóxica'], answer: 0 },
    { q: 'En una Ficha de Datos de Seguridad, ¿qué sección describe las medidas en caso de vertido accidental?', options: ['Sección 1: identificación del fabricante', 'Sección 6: medidas en caso de vertido accidental', 'Sección 16: otras informaciones'], answer: 1 },
    { q: '¿Qué pareja de sustancias no debe almacenarse juntas?', options: ['Ácidos y bases fuertes', 'Dos solventes en envases cerrados', 'Productos sólidos en estantes bajos'], answer: 0 },
    { q: 'Ante un derrame químico pequeño, ¿qué protección personal se usa?', options: ['Ninguna: basta con un trapo', 'El EPP indicado en la FDS, como guantes químicos y gafas', 'Solo una mascarilla de papel'], answer: 1 }
  ],
  'loto-bloqueo': [
    { q: '¿Cuáles son los dos peligros que controla un procedimiento LOTO?', options: ['El arranque inesperado y la liberación de energía almacenada', 'El ruido de la máquina y el polvo del área de trabajo', 'La falta de iluminación y el desorden alrededor del equipo'], answer: 0 },
    { q: '¿Qué norma colombiana exige aplicar las cinco reglas de oro en trabajos eléctricos sin tensión?', options: ['La Ley 1581 de 2012 de protección de datos personales', 'El RETIE, Reglamento Técnico de Instalaciones Eléctricas', 'La Resolución 2674 de 2013 sobre manipulación de alimentos'], answer: 1 },
    { q: '¿Qué energía conserva un banco de capacitores después de abrir el circuito?', options: ['Ninguna: al abrir el circuito toda la energía desaparece', 'Solo energía térmica, que se disipa en pocos segundos', 'Energía eléctrica almacenada, que necesita tiempo o descarga controlada'], answer: 2 },
    { q: '¿Cuál de estos datos debe tener, como mínimo, una tarjeta de peligro LOTO?', options: ['Nombre de quien bloqueó, fecha, motivo y la advertencia de no operar', 'El precio del repuesto y el número de la orden de compra', 'La marca de la máquina y su año de fabricación'], answer: 0 },
    { q: '¿Por qué se apaga la máquina con su control normal antes de abrir el seccionador?', options: ['Para que el candado quede más firme en el seccionador', 'Para no abrir el seccionador con carga, lo que puede generar un arco eléctrico', 'Para que el operador pueda seguir produciendo mientras se bloquea'], answer: 1 },
    { q: 'Al verificar energía cero, ¿por qué se regresan los controles a apagado después de intentar el arranque?', options: ['Para ahorrar energía mientras dura el mantenimiento', 'Para que la pantalla del PLC no muestre alarmas', 'Para que la máquina no arranque sola cuando se retire el bloqueo y vuelva la energía'], answer: 2 },
    { q: 'En un bloqueo grupal con caja, ¿cuándo se pueden sacar las llaves de la caja?', options: ['Cuando el último trabajador haya retirado su candado personal de la caja', 'Cuando el supervisor lo autorice, aunque queden candados puestos', 'Al terminar el turno, aunque el trabajo no haya concluido'], answer: 0 },
    { q: 'En un programa LOTO, ¿qué debe saber un trabajador afectado?', options: ['Cómo bloquear todos los puntos de aislamiento de la máquina', 'Cómo medir la ausencia de tensión con un multímetro', 'Reconocer un bloqueo y no intentar arrancar un equipo bloqueado'], answer: 2 }
  ],
  'trabajo-caliente': [
    { q: '¿Qué se considera trabajo en caliente?', options: ['Actividades que generan llama, chispa o calor, como soldar o cortar', 'Trabajar en lugares de temperatura ambiente alta', 'Cualquier actividad con agua caliente'], answer: 0 },
    { q: '¿Qué se debe validar antes de iniciar un trabajo en caliente?', options: ['Solo que haya agua disponible', 'Que el equipo esté pintado', 'El permiso de trabajo firmado y el análisis de riesgos'], answer: 2 },
    { q: 'Una lectura del 10 % del LEL en el área de trabajo significa:', options: ['Hay gas inflamable: se detiene el trabajo y se ventila', 'El área es segura para soldar', 'El sensor está apagado'], answer: 0 },
    { q: 'Al terminar un trabajo en caliente, ¿qué se debe hacer?', options: ['Mantener la vigilancia posterior durante el tiempo que indique el permiso', 'Retirar la vigilancia de inmediato', 'Apagar solo la luz del área'], answer: 0 }
  ],
  'aparejador-cargas': [
    { q: '¿Qué determina la estabilidad de una carga al izarla?', options: ['El color de la carga', 'La ubicación del centro de gravedad respecto a los puntos de izaje', 'El nombre del operador'], answer: 1 },
    { q: 'Al inspeccionar una eslinga, ¿qué hallazgo obliga a descartarla?', options: ['Polvo superficial', 'Cortes, deformaciones o alambres rotos', 'Etiqueta levemente sucia'], answer: 1 },
    { q: '¿Qué ocurre con la tensión en cada ramal de una eslinga al aumentar el ángulo entre ellos?', options: ['La tensión aumenta', 'La tensión disminuye siempre', 'No cambia'], answer: 0 },
    { q: '¿Qué señal indica detener el izaje?', options: ['Girar el dedo en el aire', 'Agitar un trapo', 'Brazo extendido con la palma abierta'], answer: 2 }
  ],
  'andamiero': [
    { q: '¿Qué debe existir antes de armar un andamio?', options: ['Un plan o instrucción de montaje y su inspección previa', 'Nada: se arma según el criterio del operario', 'Solo la firma del cliente'], answer: 0 },
    { q: 'Antes de montar un andamio sobre terreno blando, ¿qué se debe hacer?', options: ['Montarlo directamente sobre la tierra', 'Usar placas o bases de reparto y verificar la nivelación', 'Quitar los travesaños'], answer: 1 },
    { q: '¿Qué debe tener el acceso al nivel de trabajo de un andamio?', options: ['Escalera improvisada con cajas', 'Acceso seguro e integrado a la plataforma', 'Escalar por la estructura'], answer: 1 },
    { q: '¿Qué indica una tarjeta roja en el sistema de tarjetas del andamio?', options: ['Andamio no apto: no se usa hasta su reparación', 'Andamio en buen estado', 'Andamio pendiente de pintura'], answer: 0 }
  ],
  'herramientas-electricas': [
    { q: '¿Cuál es el riesgo principal de una herramienta eléctrica con el cable dañado?', options: ['Ruido', 'Pérdida de peso', 'Choque eléctrico'], answer: 2 },
    { q: '¿Qué debe revisarse antes de usar una pulidora?', options: ['Protector de disco, cable, interruptor y disco en buen estado', 'Solo que haga ruido al encender', 'Nada si fue usada el día anterior'], answer: 0 },
    { q: '¿Qué protección ocular se usa al trabajar con pulidora?', options: ['Ninguna', 'Gafas de seguridad o careta según la tarea', 'Lentes de sol'], answer: 1 },
    { q: 'Si una herramienta eléctrica se calienta o chispea de forma anormal, ¿qué se hace?', options: ['Desconectarla y reportarla para revisión', 'Seguir usándola hasta terminar la tarea', 'Echarle agua para enfriarla'], answer: 0 }
  ],
  'manejo-amoniaco': [
    { q: '¿Qué característica del amoniaco exige precaución en caso de fuga?', options: ['Es sólido a temperatura ambiente', 'Es inodoro y no irrita', 'Es un gas tóxico e irritante'], answer: 2 },
    { q: '¿Qué efecto puede causar la inhalación de amoniaco en concentración alta?', options: ['Ninguno', 'Mejora de la visión', 'Irritación severa de ojos y vías respiratorias'], answer: 2 },
    { q: '¿Qué se debe revisar para prevenir fugas de amoniaco?', options: ['Solo el color de las tuberías', 'Válvulas, juntas y detectores de fuga', 'Nada: el sistema es hermético'], answer: 1 },
    { q: 'Ante una fuga grande de amoniaco, ¿qué se hace primero?', options: ['Entrar a cerrar la válvula sin equipo', 'Evacuar a zona segura y activar la alarma', 'Esperar a que se disipe'], answer: 1 }
  ],
  'manipulacion-alimentos': [
    { q: '¿Qué norma colombiana regula las buenas prácticas de manufactura de alimentos?', options: ['Ley 100 de 1993', 'Decreto 1072 de 2015, solo para oficinas', 'Resolución 2674 de 2013'], answer: 2 },
    { q: '¿Cuándo debe lavarse las manos un manipulador de alimentos?', options: ['Solo al final del turno', 'Solo si tiene las manos sucias a simple vista', 'Al iniciar, después de ir al baño y tras manipular residuos o crudos'], answer: 2 },
    { q: '¿Qué rango de temperatura se conoce como zona de peligro para los alimentos?', options: ['Por debajo de 0 °C', 'Solo por encima de 100 °C', 'Entre 5 °C y 60 °C, donde crecen microorganismos'], answer: 2 },
    { q: '¿Qué significa POES en el saneamiento de una planta de alimentos?', options: ['Programa de Oferta de Energía Solar', 'Plan Operativo de Equipos de Seguridad', 'Procedimientos Operativos Estandarizados de Saneamiento'], answer: 2 }
  ],
  'mecanica-basica': [
    { q: '¿Qué indica que una polea conducida gire más lento que la motriz?', options: ['Que la conducida es más pequeña', 'Que ambas son siempre del mismo tamaño', 'Que la conducida es más grande que la motriz'], answer: 2 },
    { q: '¿Qué puede ocurrir si un perno se aprieta con torque excesivo?', options: ['Queda más seguro siempre', 'No pasa nada', 'Puede estirarse o romperse'], answer: 2 },
    { q: '¿Qué síntoma indica una falla temprana de un rodamiento?', options: ['Brillo en la carcasa', 'Ninguno: no falla', 'Ruido o vibración anormal y calentamiento'], answer: 2 },
    { q: '¿Qué se debe hacer con una guarda retirada durante un mantenimiento?', options: ['Dejarla fuera si el equipo ya funciona', 'Guardarla en el casillero', 'Reinstalarla antes de energizar el equipo'], answer: 2 }
  ],
  'aislamiento-energias-avanzado': [
    { q: 'Antes de intervenir un circuito hidráulico, ¿qué se hace con el acumulador?', options: ['Se llena con más presión', 'Se ignora porque no tiene energía', 'Se descarga la presión almacenada'], answer: 2 },
    { q: '¿Qué tipo de energía almacena un resorte comprimido?', options: ['Energía térmica', 'Energía eléctrica', 'Energía elástica o potencial'], answer: 2 },
    { q: '¿Qué se verifica antes de intervenir un equipo con vapor?', options: ['Que esté caliente para dilatar las juntas', 'Nada: el vapor se disipa solo', 'Que la línea esté despresurizada y fría según el procedimiento'], answer: 2 },
    { q: 'Después de desenergizar un equipo con capacitores, ¿qué se debe hacer?', options: ['Tocarlos de inmediato', 'Esperar un minuto y ya', 'Descargar los capacitores y verificar la ausencia de tensión'], answer: 2 }
  ],
  'seguridad-soldadura-corte': [
    { q: '¿Qué riesgo es propio del oxicorte?', options: ['Solo ruido', 'Ninguno', 'Fuga o retroceso de llama con los cilindros de gas'], answer: 2 },
    { q: '¿Qué protección respiratoria se usa frente a humos metálicos?', options: ['Pañuelo húmedo', 'Ninguna si hay ventilación leve', 'Respirador con filtro adecuado al contaminante'], answer: 2 },
    { q: '¿Qué protección visual exige el arco de soldadura?', options: ['Gafas de sol comunes', 'Ninguna', 'Careta o gafas con filtro de sombra adecuado'], answer: 2 },
    { q: '¿Cómo se deben almacenar los cilindros de gas?', options: ['Acostados en el piso', 'Junto al tanque de combustible', 'Asegurados en posición vertical, con capuchón y lejos del calor'], answer: 2 }
  ],
  'riesgo-electrico-no-electricistas': [
    { q: '¿Qué puede causar una corriente de 50 mA que atraviese el tórax?', options: ['Nada: es inofensiva', 'Solo cosquilleo', 'Fibrilación ventricular, con riesgo de muerte'], answer: 2 },
    { q: '¿Qué es un arco eléctrico?', options: ['Un tipo de cable', 'Una descarga de energía con calor y presión que puede quemar', 'Una señal de radio'], answer: 1 },
    { q: '¿Qué hallazgo en una extensión eléctrica exige retirarla de servicio?', options: ['Color diferente al de otras extensiones', 'Etiqueta sin fecha', 'Cable pelado o clavijas quebradas'], answer: 2 },
    { q: 'Ante una persona electrocutada que aún está en contacto con la fuente, ¿qué se hace primero?', options: ['Tomarla de la mano para ayudarla', 'Cortar la energía antes de tocarla', 'Echarle agua'], answer: 1 }
  ],
  'almacenamiento-apilamiento-cargas': [
    { q: '¿Qué debe mostrar la placa de un rack de almacenamiento?', options: ['Nada', 'Solo el logo del fabricante', 'La capacidad de carga por nivel y por viga'], answer: 2 },
    { q: '¿Qué hace inestable una carga apilada?', options: ['Base ancha y peso repartido', 'Estar envuelta en plástico', 'Centro de gravedad alto y base pequeña'], answer: 2 },
    { q: '¿Qué medida previene el atrapamiento en los pasillos de la bodega?', options: ['Usar auriculares en el pasillo', 'Caminar de espaldas', 'Señalizar el tránsito y separar las zonas peatonales'], answer: 2 },
    { q: 'Al detectar un poste de rack doblado, ¿qué se hace?', options: ['Seguir operando con cuidado', 'Enderezarlo a golpes', 'Retirar la carga del nivel afectado, acordonar y reportar'], answer: 2 }
  ]
};
