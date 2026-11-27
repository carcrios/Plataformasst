// Motor de imágenes y diagramas SVG interactivos para Academia SST Colombia.
// 100 % offline (sin dependencias externas), accesible por teclado y responsivo.
import { esc } from './dom.js';

// Paleta por categoría / tema
const THEMES = {
  fire: { bg: '#fff7ed', accent: '#ea580c', dark: '#7c2d12', soft: '#ffedd5' },
  elec: { bg: '#eff6ff', accent: '#2563eb', dark: '#1e3a8a', soft: '#dbeafe' },
  chem: { bg: '#f0fdf4', accent: '#16a34a', dark: '#14532d', soft: '#dcfce7' },
  mech: { bg: '#f8fafc', accent: '#0f766e', dark: '#134e4a', soft: '#ccfbf1' },
  load: { bg: '#fefce8', accent: '#ca8a04', dark: '#713f12', soft: '#fef9c3' },
  mgmt: { bg: '#f5f3ff', accent: '#7c3aed', dark: '#4c1d95', soft: '#ede9fe' }
};

// Escenas SVG interactivas personalizadas para los 16 cursos
export const COURSE_SCENES = {
  'loto-bloqueo': {
    theme: 'elec',
    title: 'Estación de Bloqueo y Etiquetado (LOTO)',
    subtitle: 'Haz clic en cada punto numerado para ver la barrera de control que evita el arranque inesperado.',
    svg: `
      <rect x="20" y="20" width="560" height="260" rx="14" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
      <!-- Tablero principal -->
      <rect x="65" y="55" width="150" height="190" rx="8" fill="#334155" stroke="#0f172a" stroke-width="3"/>
      <rect x="85" y="75" width="110" height="65" rx="4" fill="#1e293b"/>
      <line x1="115" y1="108" x2="165" y2="108" stroke="#ef4444" stroke-width="8" stroke-linecap="round"/>
      <text x="140" y="95" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="700">OFF / AISLADO</text>
      <!-- Pinza y candado -->
      <circle cx="140" cy="170" r="14" fill="none" stroke="#f59e0b" stroke-width="5"/>
      <rect x="122" y="182" width="36" height="32" rx="5" fill="#dc2626"/>
      <circle cx="140" cy="198" r="4" fill="#fef2f2"/>
      <!-- Etiqueta -->
      <rect x="175" y="165" width="52" height="62" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <rect x="179" y="169" width="44" height="14" fill="#dc2626"/>
      <text x="201" y="179" text-anchor="middle" fill="#fff" font-size="8" font-weight="800">PELIGRO</text>
      <line x1="183" y1="194" x2="219" y2="194" stroke="#854d0e" stroke-width="2"/>
      <line x1="183" y1="204" x2="215" y2="204" stroke="#854d0e" stroke-width="2"/>
      <!-- Tubería / Motor -->
      <path d="M215 120 H340" stroke="#64748b" stroke-width="14"/>
      <rect x="340" y="85" width="110" height="80" rx="10" fill="#475569" stroke="#1e293b" stroke-width="3"/>
      <circle cx="395" cy="125" r="24" fill="#94a3b8" stroke="#1e293b" stroke-width="3"/>
      <text x="395" y="185" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="700">EQUIPO INTERVENIDO</text>
      <!-- Verificador de energía cero -->
      <rect x="475" y="110" width="75" height="95" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
      <text x="512" y="145" text-anchor="middle" fill="#166534" font-size="22" font-weight="800">0 V</text>
      <text x="512" y="168" text-anchor="middle" fill="#166534" font-size="10" font-weight="700">ENERGÍA</text>
      <text x="512" y="182" text-anchor="middle" fill="#166534" font-size="10" font-weight="700">CERO</text>
    `,
    hotspots: [
      { x: 140, y: 108, label: '1. Aislamiento físico', risk: 'Apagar solo el botón de control no corta la energía principal.', control: 'Abrir el seccionador o válvula principal y verificar que quede en posición OFF.' },
      { x: 140, y: 196, label: '2. Candado personal', risk: 'Un tercero puede reenergizar el equipo por error si no hay bloqueo físico.', control: 'Cada trabajador coloca su propio candado y conserva la única llave.' },
      { x: 201, y: 196, label: '3. Etiqueta de peligro', risk: 'Nadie sabe quién interviene ni por qué está bloqueado el equipo.', control: 'La etiqueta identifica nombre, fecha y motivo. Nunca reemplaza al candado.' },
      { x: 395, y: 125, label: '4. Liberar energía residual', risk: 'Presión hidráulica, resortes o capacitores pueden moverse aun desconectados.', control: 'Purgar, drenar, descargar y asegurar mecánicamente partes elevadas.' },
      { x: 512, y: 155, label: '5. Prueba de energía cero', risk: 'Confiar en que "ya está apagado" es la causa raíz de los accidentes mortales.', control: 'Intentar encender (prueba de arranque) y medir con instrumento verificado: 0 V / 0 PSI.' }
    ]
  },

  'trabajo-caliente': {
    theme: 'fire',
    title: 'Zona Segura de Trabajo en Caliente (Radio 11 m)',
    subtitle: 'Explora los 5 controles críticos alrededor de una tarea con chispas o llama abierta.',
    svg: `
      <rect x="20" y="20" width="560" height="260" rx="14" fill="#fff7ed" stroke="#fed7aa" stroke-width="2"/>
      <!-- Radio 11m -->
      <ellipse cx="290" cy="175" rx="220" ry="82" fill="#ffedd5" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="8 6"/>
      <text x="290" y="246" text-anchor="middle" fill="#9a3412" font-size="11" font-weight="700">RADIO DE SEGURIDAD: 11 METROS (35 PIES)</text>
      <!-- Punto de corte/soldadura -->
      <rect x="245" y="135" width="90" height="36" rx="6" fill="#475569"/>
      <polygon points="290,98 298,122 320,114 304,132 322,144 296,142 290,164 284,142 258,144 276,132 260,114 282,122" fill="#f97316"/>
      <circle cx="290" cy="132" r="9" fill="#fef08a"/>
      <!-- Manta ignífuga -->
      <path d="M90 135 Q125 110 160 135 L165 190 H85 Z" fill="#94a3b8" stroke="#334155" stroke-width="2.5"/>
      <text x="125" y="168" text-anchor="middle" fill="#0f172a" font-size="10" font-weight="700">MANTA</text>
      <text x="125" y="180" text-anchor="middle" fill="#0f172a" font-size="10" font-weight="700">IGNÍFUGA</text>
      <!-- Detector LEL -->
      <rect x="255" y="38" width="70" height="46" rx="8" fill="#1e293b"/>
      <rect x="263" y="45" width="54" height="22" rx="3" fill="#22c55e"/>
      <text x="290" y="60" text-anchor="middle" fill="#052e16" font-size="11" font-weight="800">0% LEL</text>
      <!-- Vigía y extintor -->
      <rect x="445" y="128" width="24" height="58" rx="8" fill="#dc2626"/>
      <rect x="451" y="118" width="12" height="12" fill="#1e293b"/>
      <text x="457" y="202" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="700">EXTINTOR + VIGÍA</text>
      <!-- Permiso -->
      <rect x="488" y="44" width="66" height="72" rx="6" fill="#ffffff" stroke="#ea580c" stroke-width="2"/>
      <text x="521" y="64" text-anchor="middle" fill="#ea580c" font-size="9" font-weight="800">PERMISO</text>
      <line x1="498" y1="76" x2="544" y2="76" stroke="#cbd5e1" stroke-width="3"/>
      <line x1="498" y1="88" x2="544" y2="88" stroke="#cbd5e1" stroke-width="3"/>
      <text x="521" y="106" text-anchor="middle" fill="#16a34a" font-size="10" font-weight="800">FIRMADO ✓</text>
    `,
    hotspots: [
      { x: 290, y: 132, label: '1. Fuente de ignición', risk: 'Chispas y escoria viajan más de 10 m y caen por rejillas a pisos inferiores.', control: 'Primero evaluar si el trabajo se puede hacer en frío o llevar la pieza al taller.' },
      { x: 125, y: 158, label: '2. Radio de 11 metros', risk: 'Cartón, madera, plásticos o solventes cercanos inician incendios ocultos.', control: 'Retirar combustibles en 11 m; cubrir lo inamovible con mantas ignífugas y tapar aberturas.' },
      { x: 290, y: 60, label: '3. Medición de atmósfera (% LEL)', risk: 'Vapores invisibles en tuberías o drenajes causan explosiones súbitas.', control: 'Verificar el detector antes de usar, exigir 0 % LEL en recipientes y monitorear continuo.' },
      { x: 457, y: 155, label: '4. Vigía de fuego dedicado', risk: 'Un incendio latente puede brotar minutos después de apagar el equipo.', control: 'Vigía exclusivo con extintor y alarma durante la tarea y al menos 60 min después.' },
      { x: 521, y: 80, label: '5. Permiso visible en sitio', risk: 'Firmar desde la oficina omite peligros reales del área.', control: 'Quien autoriza inspecciona el sitio, registra lecturas y firma antes de iniciar.' }
    ]
  },

  'observador-fuego': {
    theme: 'fire',
    title: 'Funciones Críticas del Vigía de Fuego',
    subtitle: 'Haz clic en cada elemento del puesto del observador para repasar sus responsabilidades.',
    svg: `
      <rect x="20" y="20" width="560" height="260" rx="14" fill="#fff7ed" stroke="#fdba74" stroke-width="2"/>
      <!-- Piso superior e inferior -->
      <line x1="40" y1="165" x2="560" y2="165" stroke="#64748b" stroke-width="6"/>
      <rect x="250" y="162" width="60" height="8" fill="#f97316"/>
      <text x="115" y="155" fill="#475569" font-size="11" font-weight="700">NIVEL DE TRABAJO</text>
      <text x="115" y="185" fill="#9a3412" font-size="11" font-weight="700">NIVEL INFERIOR (CHISPAS)</text>
      <!-- Vigía -->
      <circle cx="150" cy="86" r="18" fill="#fb923c"/>
      <rect x="132" y="108" width="36" height="52" rx="8" fill="#ea580c"/>
      <!-- Extintor -->
      <rect x="200" y="114" width="22" height="46" rx="6" fill="#dc2626"/>
      <!-- Reloj 60 min -->
      <circle cx="455" cy="95" r="42" fill="#ffffff" stroke="#ea580c" stroke-width="4"/>
      <line x1="455" y1="95" x2="455" y2="66" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
      <line x1="455" y1="95" x2="478" y2="95" stroke="#ea580c" stroke-width="4" stroke-linecap="round"/>
      <text x="455" y="152" text-anchor="middle" fill="#9a3412" font-size="11" font-weight="800">MÍNIMO 60 MIN</text>
      <!-- Alarma -->
      <rect x="330" y="65" width="44" height="44" rx="8" fill="#dc2626"/>
      <circle cx="352" cy="87" r="10" fill="#fef08a"/>
      <!-- Chispas cayendo -->
      <circle cx="275" cy="195" r="5" fill="#f97316"/>
      <circle cx="290" cy="215" r="4" fill="#ea580c"/>
      <circle cx="268" cy="225" r="5" fill="#f59e0b"/>
    `,
    hotspots: [
      { x: 150, y: 115, label: '1. Dedicación exclusiva', risk: 'Si el vigía ayuda a soldar o trae herramientas, pierde de vista las chispas.', control: 'Su única tarea es vigilar y tiene autoridad para detener el trabajo.' },
      { x: 211, y: 136, label: '2. Extintor adecuado y listo', risk: 'Usar el agente equivocado o un extintor descargado impide controlar un conato.', control: 'Verificar presión, pasador y tipo de agente (ej. PQS ABC) antes de iniciar.' },
      { x: 352, y: 87, label: '3. Medio de alarma inmediata', risk: 'Intentar apagar un incendio avanzado sin avisar pone en riesgo toda la planta.', control: 'Tener radio, pulsador o teléfono listo para activar la brigada de inmediato.' },
      { x: 280, y: 205, label: '4. Vigilar niveles inferiores', risk: 'La escoria atraviesa rejillas y enciende materiales fuera de la vista.', control: 'Sellar aberturas o asignar un segundo vigía en el nivel inferior/opuesto.' },
      { x: 455, y: 95, label: '5. Guardia post-trabajo (60 min)', risk: 'Muchos incendios nacen de brasas ocultas 30–50 minutos después de terminar.', control: 'Permanecer al menos 60 minutos inspeccionando puntos calientes antes de cerrar el permiso.' }
    ]
  },

  'sustancias-quimicas': {
    theme: 'chem',
    title: 'Gestión Segura de Sustancias Químicas (SGA)',
    subtitle: 'Explora los 5 elementos clave del Sistema Globalmente Armonizado en el área de trabajo.',
    svg: `
      <rect x="20" y="20" width="560" height="260" rx="14" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="2"/>
      <!-- Envase con etiqueta -->
      <rect x="65" y="75" width="110" height="150" rx="12" fill="#e2e8f0" stroke="#475569" stroke-width="3"/>
      <rect x="95" y="55" width="50" height="22" rx="4" fill="#334155"/>
      <rect x="78" y="105" width="84" height="90" rx="4" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
      <!-- Rombo SGA -->
      <polygon points="120,115 142,137 120,159 98,137" fill="#ffffff" stroke="#dc2626" stroke-width="3.5"/>
      <text x="120" y="142" text-anchor="middle" fill="#0f172a" font-size="14" font-weight="800">!</text>
      <text x="120" y="178" text-anchor="middle" fill="#dc2626" font-size="9" font-weight="800">PELIGRO</text>
      <!-- FDS -->
      <rect x="225" y="65" width="105" height="135" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="2.5"/>
      <text x="277" y="92" text-anchor="middle" fill="#1d4ed8" font-size="13" font-weight="800">FDS</text>
      <text x="277" y="110" text-anchor="middle" fill="#475569" font-size="10">16 Secciones</text>
      <line x1="242" y1="126" x2="312" y2="126" stroke="#94a3b8" stroke-width="3"/>
      <line x1="242" y1="142" x2="312" y2="142" stroke="#94a3b8" stroke-width="3"/>
      <line x1="242" y1="158" x2="296" y2="158" stroke="#94a3b8" stroke-width="3"/>
      <!-- Matriz compatibilidad -->
      <rect x="370" y="65" width="90" height="80" rx="6" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
      <rect x="380" y="75" width="20" height="20" fill="#22c55e"/>
      <rect x="405" y="75" width="20" height="20" fill="#ef4444"/>
      <rect x="430" y="75" width="20" height="20" fill="#eab308"/>
      <rect x="380" y="100" width="20" height="20" fill="#ef4444"/>
      <rect x="405" y="100" width="20" height="20" fill="#22c55e"/>
      <rect x="430" y="100" width="20" height="20" fill="#22c55e"/>
      <text x="415" y="138" text-anchor="middle" fill="#166534" font-size="9" font-weight="700">COMPATIBILIDAD</text>
      <!-- Ducha / Lavaojos -->
      <rect x="485" y="65" width="70" height="145" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="2.5"/>
      <text x="520" y="130" text-anchor="middle" fill="#15803d" font-size="24" font-weight="800">+</text>
      <text x="520" y="156" text-anchor="middle" fill="#166534" font-size="9" font-weight="700">LAVAOJOS</text>
      <text x="520" y="168" text-anchor="middle" fill="#166534" font-size="9" font-weight="700">Y DUCHA</text>
      <!-- Dique -->
      <rect x="370" y="175" width="90" height="45" rx="6" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
      <text x="415" y="202" text-anchor="middle" fill="#854d0e" font-size="10" font-weight="700">KIT DERRAMES</text>
    `,
    hotspots: [
      { x: 120, y: 140, label: '1. Etiqueta SGA obligatoria', risk: 'Reenvasar en botellas de bebida sin rótulo causa intoxicaciones graves.', control: 'Todo recipiente debe tener nombre del producto, pictograma, palabra de advertencia e indicaciones H/P.' },
      { x: 277, y: 130, label: '2. Ficha de Datos de Seguridad (FDS)', risk: 'Improvisar EPP o primeros auxilios agrava quemaduras químicas.', control: 'Consultar la FDS (16 secciones) en español antes de manipular, almacenar o atender derrames.' },
      { x: 415, y: 105, label: '3. Matriz de compatibilidad', risk: 'Juntar ácidos con bases o oxidantes con inflamables genera reacciones violentas.', control: 'Almacenar según la matriz de compatibilidad y nunca sobre el piso sin contención.' },
      { x: 415, y: 198, label: '4. Contención y kit antiderrames', risk: 'Un derrame sin dique contamina drenajes y libera vapores tóxicos.', control: 'Mantener diques de contención y kit absorbente compatible al alcance.' },
      { x: 520, y: 135, label: '5. Ducha y lavaojos despejados', risk: 'Los primeros 15 segundos tras una salpicadura ocular definen el daño.', control: 'Mantener ruta libre de obstáculos y lavar mínimo 15 minutos continuos en caso de contacto.' }
    ]
  },

  'riesgo-electrico-no-electricistas': {
    theme: 'elec',
    title: 'Barreras Frente al Riesgo Eléctrico (No Electricistas)',
    subtitle: 'Haz clic en cada zona para identificar qué puedes hacer y qué está estrictamente prohibido.',
    svg: `
      <rect x="20" y="20" width="560" height="260" rx="14" fill="#eff6ff" stroke="#bfdbfe" stroke-width="2"/>
      <!-- Tablero -->
      <rect x="65" y="55" width="130" height="175" rx="8" fill="#cbd5e1" stroke="#334155" stroke-width="3"/>
      <polygon points="130,90 162,145 98,145" fill="#facc15" stroke="#0f172a" stroke-width="3"/>
      <text x="130" y="138" text-anchor="middle" fill="#0f172a" font-size="22" font-weight="900">⚡</text>
      <text x="130" y="185" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="800">SOLO PERSONAL</text>
      <text x="130" y="198" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="800">HABILITADO</text>
      <!-- Zona despejada -->
      <rect x="215" y="175" width="130" height="55" fill="#fef08a" stroke="#ca8a04" stroke-width="2" stroke-dasharray="6 4"/>
      <text x="280" y="207" text-anchor="middle" fill="#854d0e" font-size="10" font-weight="800">ÁREA DESPEJADA</text>
      <!-- Cable dañado -->
      <path d="M235 105 Q280 75 325 105 T415 105" fill="none" stroke="#1e293b" stroke-width="6"/>
      <circle cx="325" cy="105" r="14" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5"/>
      <text x="325" y="110" text-anchor="middle" fill="#dc2626" font-size="13" font-weight="800">✕</text>
      <!-- Agua + electricidad -->
      <ellipse cx="485" cy="195" rx="58" ry="26" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <text x="485" y="199" text-anchor="middle" fill="#0369a1" font-size="10" font-weight="800">HUMEDAD = RIESGO</text>
    `,
    hotspots: [
      { x: 130, y: 125, label: '1. Tableros siempre cerrados', risk: 'Abrir un tablero sin competencia expone a choque eléctrico y arco eléctrico.', control: 'Nunca abrir tableros ni reponer breakers sin autorización; reportar a mantenimiento.' },
      { x: 280, y: 202, label: '2. Espacio libre frente a tableros', risk: 'Apilar cajas frente al tablero impide desconectar en una emergencia.', control: 'Mantener siempre despejado el acceso frente a tableros e interruptores.' },
      { x: 325, y: 105, label: '3. Cables y tomas en buen estado', risk: 'Empalmes con cinta o cables pelados causan electrocución e incendios.', control: 'Inspeccionar antes de conectar; retirar de servicio y etiquetar cualquier cable dañado.' },
      { x: 485, y: 195, label: '4. Agua y electricidad', risk: 'La humedad reduce la resistencia del cuerpo y multiplica la gravedad de la descarga.', control: 'No operar equipos eléctricos con manos mojadas ni sobre pisos húmedos sin protección GFCI.' }
    ]
  },

  'herramientas-electricas': {
    theme: 'mech',
    title: 'Inspección Preoperacional de Herramientas Eléctricas',
    subtitle: 'Revisa los 4 puntos obligatorios antes de conectar una pulidora, taladro o sierra.',
    svg: `
      <rect x="20" y="20" width="560" height="260" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      <!-- Cuerpo pulidora -->
      <rect x="190" y="110" width="170" height="54" rx="14" fill="#0f766e" stroke="#134e4a" stroke-width="3"/>
      <!-- Empuñadura auxiliar -->
      <rect x="235" y="164" width="22" height="58" rx="6" fill="#334155"/>
      <!-- Guarda y disco -->
      <path d="M135 137 A55 55 0 0 1 215 95 L195 137 Z" fill="#475569" stroke="#0f172a" stroke-width="3"/>
      <circle cx="170" cy="145" r="42" fill="#e2e8f0" stroke="#64748b" stroke-width="4"/>
      <circle cx="170" cy="145" r="10" fill="#334155"/>
      <!-- Cable y enchufe -->
      <path d="M360 137 C410 137 420 195 470 195" fill="none" stroke="#1e293b" stroke-width="6"/>
      <rect x="470" y="182" width="38" height="26" rx="4" fill="#334155"/>
      <!-- EPP -->
      <rect x="430" y="48" width="110" height="72" rx="10" fill="#ccfbf1" stroke="#0f766e" stroke-width="2"/>
      <text x="485" y="78" text-anchor="middle" fill="#134e4a" font-size="11" font-weight="800">EPP OBLIGATORIO</text>
      <text x="485" y="96" text-anchor="middle" fill="#115e59" font-size="9.5">Careta + Gafas +</text>
      <text x="485" y="109" text-anchor="middle" fill="#115e59" font-size="9.5">Protección auditiva</text>
    `,
    hotspots: [
      { x: 170, y: 112, label: '1. Guarda de seguridad instalada', risk: 'Un disco que se rompe sale proyectado a altísima velocidad.', control: 'Jamás retirar la guarda ni usar discos de mayor diámetro o menores RPM que la herramienta.' },
      { x: 246, y: 190, label: '2. Empuñadura auxiliar y sujeción', risk: 'El contragolpe (kickback) hace perder el control de la máquina.', control: 'Usar siempre ambas manos, postura firme y pieza sujetada con prensa (nunca con la mano).' },
      { x: 470, y: 195, label: '3. Cable, clavija y desconexión', risk: 'Cambiar el disco conectada puede activar el gatillo por accidente.', control: 'Revisar aislamiento y polo a tierra; desconectar siempre antes de cambiar accesorios.' },
      { x: 485, y: 84, label: '4. Protección facial y auditiva', risk: 'Partículas incandescentes dañan ojos y rostro; el ruido genera hipoacusia.', control: 'Usar gafas bajo careta facial, protectores auditivos y ropa ajustada sin elementos sueltos.' }
    ]
  },

  'mecanica-basica': {
    theme: 'mech',
    title: 'Seguridad en Máquinas y Mecánica Básica',
    subtitle: 'Explora los puntos de atrapamiento y protecciones en una transmisión mecánica.',
    svg: `
      <rect x="20" y="20" width="560" height="260" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      <!-- Poleas y banda -->
      <circle cx="170" cy="150" r="46" fill="#94a3b8" stroke="#334155" stroke-width="4"/>
      <circle cx="340" cy="150" r="32" fill="#94a3b8" stroke="#334155" stroke-width="4"/>
      <line x1="170" y1="104" x2="340" y2="118" stroke="#0f172a" stroke-width="6"/>
      <line x1="170" y1="196" x2="340" y2="182" stroke="#0f172a" stroke-width="6"/>
      <!-- Guarda punteada -->
      <rect x="108" y="88" width="280" height="124" rx="14" fill="rgba(15,118,110,0.12)" stroke="#0f766e" stroke-width="3" stroke-dasharray="7 5"/>
      <text x="248" y="76" text-anchor="middle" fill="#0f766e" font-size="11" font-weight="800">GUARDA FIJA DE PROTECCIÓN</text>
      <!-- Parada de emergencia -->
      <rect x="445" y="95" width="90" height="95" rx="10" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5"/>
      <circle cx="490" cy="136" r="24" fill="#dc2626" stroke="#7f1d1d" stroke-width="3"/>
      <text x="490" y="176" text-anchor="middle" fill="#854d0e" font-size="9.5" font-weight="800">PARADA EMERG.</text>
    `,
    hotspots: [
      { x: 255, y: 112, label: '1. Punto de atrapamiento', risk: 'Bandas, cadenas y engranajes atrapan dedos, guantes o ropa suelta en milisegundos.', control: 'Nunca acercar manos ni limpiar en movimiento; usar herramientas manuales adecuadas.' },
      { x: 145, y: 92, label: '2. Guardas fijas y resguardos', risk: 'Operar sin guarda expone a amputaciones y proyección de piezas.', control: 'Verificar que todas las guardas estén instaladas y aseguradas antes de encender.' },
      { x: 490, y: 136, label: '3. Parada de emergencia', risk: 'No ubicar el paro de emergencia retrasa la respuesta ante un incidente.', control: 'Conocer su ubicación exacta y mantenerla libre. Ojo: no reemplaza el bloqueo LOTO.' },
      { x: 340, y: 150, label: '4. Bloquear antes de intervenir', risk: 'El arranque remoto o automático puede activar el eje durante el ajuste.', control: 'Detener, aislar y aplicar bloqueo LOTO antes de lubricar, tensar o destrabar.' }
    ]
  },

  'aislamiento-energias-avanzado': {
    theme: 'elec',
    title: 'Aislamiento Multi-Energía y Doble Bloqueo',
    subtitle: 'Haz clic en cada fuente para ver cómo se aísla y verifica energía cero en sistemas complejos.',
    svg: `
      <rect x="20" y="20" width="560" height="260" rx="14" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
      <!-- Tubería con doble bloqueo y purga -->
      <line x1="50" y1="120" x2="550" y2="120" stroke="#475569" stroke-width="14"/>
      <!-- Válvula 1 -->
      <polygon points="150,100 185,120 150,140" fill="#dc2626"/>
      <polygon points="220,100 185,120 220,140" fill="#dc2626"/>
      <!-- Purga intermedia -->
      <line x1="280" y1="120" x2="280" y2="185" stroke="#0284c7" stroke-width="8"/>
      <text x="280" y="205" text-anchor="middle" fill="#0369a1" font-size="10" font-weight="800">PURGA / DRENAJE</text>
      <!-- Válvula 2 -->
      <polygon points="340,100 375,120 340,140" fill="#dc2626"/>
      <polygon points="410,100 375,120 410,140" fill="#dc2626"/>
      <!-- Brida ciega -->
      <rect x="460" y="92" width="12" height="56" rx="2" fill="#f59e0b" stroke="#78350f" stroke-width="2"/>
      <text x="466" y="82" text-anchor="middle" fill="#92400e" font-size="10" font-weight="800">BRIDA CIEGA</text>
      <!-- Caja grupal -->
      <rect x="65" y="180" width="125" height="65" rx="8" fill="#1e3a8a"/>
      <text x="127" y="208" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="800">CAJA GRUPAL</text>
      <text x="127" y="224" text-anchor="middle" fill="#93c5fd" font-size="9">Bloqueo múltiple</text>
    `,
    hotspots: [
      { x: 185, y: 120, label: '1. Primera válvula cerrada y bloqueada', risk: 'Una sola válvula puede tener fuga interna en líneas presurizadas o tóxicas.', control: 'Cerrar, encadenar y colocar candado de aislamiento en la primera barrera.' },
      { x: 280, y: 165, label: '2. Purga intermedia abierta', risk: 'La presión atrapada entre válvulas puede liberarse al abrir la línea.', control: 'Abrir drenaje/venteo intermedio para confirmar presión cero y detectar fugas.' },
      { x: 466, y: 120, label: '3. Brida ciega (aislamiento positivo)', risk: 'En trabajos invasivos o espacios confinados las válvulas no bastan.', control: 'Instalar brida ciega o desconectar físicamente el carrete de tubería.' },
      { x: 127, y: 212, label: '4. Caja de bloqueo grupal', risk: 'En intervenciones con varios técnicos, alguien puede quedar expuesto al reenergizar.', control: 'Las llaves de los puntos aislados van dentro de la caja; cada técnico pone su candado afuera.' }
    ]
  },

  'seguridad-soldadura-corte': {
    theme: 'fire',
    title: 'Puesto Seguro de Soldadura y Oxicorte',
    subtitle: 'Explora los 4 controles esenciales en cilindros, mangueras, humos y arco eléctrico.',
    svg: `
      <rect x="20" y="20" width="560" height="260" rx="14" fill="#fff7ed" stroke="#fed7aa" stroke-width="2"/>
      <!-- Cilindros asegurados -->
      <rect x="75" y="75" width="38" height="145" rx="16" fill="#16a34a" stroke="#14532d" stroke-width="2.5"/>
      <rect x="122" y="90" width="38" height="130" rx="16" fill="#dc2626" stroke="#7f1d1d" stroke-width="2.5"/>
      <line x1="65" y1="145" x2="170" y2="145" stroke="#1e293b" stroke-width="5" stroke-dasharray="6 3"/>
      <text x="117" y="238" text-anchor="middle" fill="#0f172a" font-size="10" font-weight="800">CADENA VERTICAL</text>
      <!-- Válvulas antirretroceso -->
      <rect x="188" y="102" width="46" height="26" rx="5" fill="#f59e0b" stroke="#78350f" stroke-width="2"/>
      <!-- Campana extracción -->
      <polygon points="310,48 390,48 415,88 285,88" fill="#64748b" stroke="#1e293b" stroke-width="2"/>
      <text x="350" y="72" text-anchor="middle" fill="#ffffff" font-size="9.5" font-weight="800">EXTRACCIÓN</text>
      <!-- Mampara -->
      <rect x="445" y="75" width="90" height="150" rx="6" fill="rgba(234,88,12,0.22)" stroke="#ea580c" stroke-width="3"/>
      <text x="490" y="152" text-anchor="middle" fill="#9a3412" font-size="10" font-weight="800">MAMPARA</text>
      <text x="490" y="166" text-anchor="middle" fill="#9a3412" font-size="9">ANTI-ARCO</text>
    `,
    hotspots: [
      { x: 117, y: 145, label: '1. Cilindros asegurados verticalmente', risk: 'Si un cilindro cae y se rompe la válvula, sale disparado como un proyectil.', control: 'Mantener siempre verticales, encadenados, con capuchón al transportar y lejos de chispas.' },
      { x: 211, y: 115, label: '2. Válvulas antirretroceso de llama', risk: 'Un retroceso de llama por la manguera puede hacer explotar el cilindro de acetileno.', control: 'Instalar válvulas antirretroceso en reguladores y soplete; revisar fugas con agua jabonosa.' },
      { x: 350, y: 70, label: '3. Extracción de humos metálicos', risk: 'Los humos de soldadura contienen óxidos metálicos y gases tóxicos.', control: 'Usar extracción localizada o ventilación forzada y protección respiratoria adecuada.' },
      { x: 490, y: 150, label: '4. Mamparas y protección del arco', risk: 'La radiación UV del arco causa queratoconjuntivitis ("golpe de arco") a terceros.', control: 'Instalar mamparas incombustibles y usar careta con filtro adecuado + ropa de cuero/algodón.' }
    ]
  },

  'aparejador-cargas': {
    theme: 'load',
    title: 'Izaje Seguro y Ángulo de Eslingas',
    subtitle: 'Haz clic en cada punto para entender cómo controlar la estabilidad y tensión de la carga.',
    svg: `
      <rect x="20" y="20" width="560" height="260" rx="14" fill="#fefce8" stroke="#fde047" stroke-width="2"/>
      <!-- Gancho -->
      <path d="M290 42 V72 C290 86 274 86 274 74" fill="none" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
      <!-- Eslingas -->
      <line x1="290" y1="74" x2="210" y2="165" stroke="#ca8a04" stroke-width="5"/>
      <line x1="290" y1="74" x2="370" y2="165" stroke="#ca8a04" stroke-width="5"/>
      <text x="290" y="132" text-anchor="middle" fill="#854d0e" font-size="11" font-weight="800">ÁNGULO ≥ 60°</text>
      <!-- Carga -->
      <rect x="195" y="165" width="190" height="62" rx="6" fill="#475569" stroke="#0f172a" stroke-width="3"/>
      <circle cx="290" cy="196" r="7" fill="#facc15"/>
      <text x="290" y="216" text-anchor="middle" fill="#f8fafc" font-size="9.5" font-weight="700">CENTRO DE GRAVEDAD</text>
      <!-- Viento / cuerda guía -->
      <line x1="385" y1="195" x2="505" y2="235" stroke="#0284c7" stroke-width="3" stroke-dasharray="5 3"/>
      <text x="465" y="205" text-anchor="middle" fill="#0369a1" font-size="10" font-weight="800">CUERDA GUÍA</text>
      <!-- Zona exclusión -->
      <rect x="60" y="238" width="460" height="24" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="290" y="254" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="800">PROHIBIDO PASAR O PERMANECER BAJO CARGA SUSPENDIDA</text>
    `,
    hotspots: [
      { x: 290, y: 120, label: '1. Ángulo de eslingas', risk: 'A menor ángulo horizontal (menor a 45°), la tensión en cada ramal se dispara y puede romper la eslinga.', control: 'Trabajar preferiblemente a 60° o más respecto a la horizontal y verificar la tabla de capacidad.' },
      { x: 290, y: 196, label: '2. Centro de gravedad (CG)', risk: 'Si el gancho no está sobre el CG, la carga se inclina o gira bruscamente al despegar.', control: 'Alinear el gancho sobre el CG y hacer una prueba de despegue a pocos centímetros del suelo.' },
      { x: 465, y: 215, label: '3. Cuerdas guía (vientos)', risk: 'Guiar la carga con las manos expone a aplastamiento contra estructuras.', control: 'Usar siempre cuerdas guía desde una distancia segura, sin enrollarlas en la mano.' },
      { x: 290, y: 250, label: '4. Zona de exclusión', risk: 'Cualquier falla de aparejo es mortal para quien esté debajo.', control: 'Demarcar el área, definir un único señalero y mantener a todo el personal fuera del radio.' }
    ]
  },

  'almacenamiento-apilamiento-cargas': {
    theme: 'load',
    title: 'Almacenamiento y Apilamiento Seguro en Bodega',
    subtitle: 'Explora los 4 principios clave para evitar colapsos de estanterías y caída de cargas.',
    svg: `
      <rect x="20" y="20" width="560" height="260" rx="14" fill="#fefce8" stroke="#fde68a" stroke-width="2"/>
      <!-- Estantería -->
      <rect x="85" y="55" width="12" height="190" fill="#1d4ed8"/>
      <rect x="335" y="55" width="12" height="190" fill="#1d4ed8"/>
      <rect x="85" y="110" width="262" height="10" fill="#f97316"/>
      <rect x="85" y="175" width="262" height="10" fill="#f97316"/>
      <rect x="85" y="235" width="262" height="10" fill="#f97316"/>
      <!-- Cargas -->
      <rect x="120" y="72" width="75" height="38" rx="4" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <text x="157" y="95" text-anchor="middle" fill="#0369a1" font-size="9.5" font-weight="800">LIVIANO</text>
      <rect x="115" y="188" width="200" height="47" rx="4" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <text x="215" y="216" text-anchor="middle" fill="#0f172a" font-size="11" font-weight="800">CARGAS PESADAS ABAJO</text>
      <!-- Letrero capacidad -->
      <rect x="375" y="65" width="150" height="62" rx="8" fill="#ffffff" stroke="#ca8a04" stroke-width="2"/>
      <text x="450" y="90" text-anchor="middle" fill="#854d0e" font-size="10" font-weight="800">CAPACIDAD MÁX.</text>
      <text x="450" y="110" text-anchor="middle" fill="#dc2626" font-size="13" font-weight="900">1.500 kg / NIVEL</text>
      <!-- Pasillo -->
      <rect x="375" y="175" width="150" height="65" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 4"/>
      <text x="450" y="211" text-anchor="middle" fill="#166534" font-size="10" font-weight="800">PASILLO DESPEJADO</text>
    `,
    hotspots: [
      { x: 215, y: 212, label: '1. Pesado abajo, liviano arriba', risk: 'Colocar peso excesivo en niveles altos desestabiliza la estantería.', control: 'Ubicar las cargas más pesadas en el nivel inferior y las livianas en niveles superiores.' },
      { x: 450, y: 96, label: '2. Respetar capacidad máxima', risk: 'Sobrecargar vigas provoca pandeo y colapso en cadena.', control: 'Verificar siempre el rótulo de carga máxima por nivel y reportar parales golpeados.' },
      { x: 157, y: 90, label: '3. Estibas sanas y centradas', risk: 'Estibas rotas o mal apoyadas caen al ser manipuladas por montacargas.', control: 'Inspeccionar estibas antes de subirlas y centrarlas correctamente sobre las vigas.' },
      { x: 450, y: 208, label: '4. Pasillos y salidas libres', risk: 'Obstruir pasillos o extintores impide evacuar y causa atropellos.', control: 'Mantener demarcación visible, pasillos despejados y respetar altura libre bajo rociadores.' }
    ]
  },

  andamiero: {
    theme: 'load',
    title: 'Partes Críticas de un Andamio Seguro',
    subtitle: 'Haz clic en cada componente para verificar qué exige un armado seguro (Res. 4272 de 2021).',
    svg: `
      <rect x="20" y="20" width="560" height="260" rx="14" fill="#fefce8" stroke="#fde047" stroke-width="2"/>
      <!-- Estructura andamio -->
      <line x1="150" y1="60" x2="150" y2="240" stroke="#334155" stroke-width="7"/>
      <line x1="390" y1="60" x2="390" y2="240" stroke="#334155" stroke-width="7"/>
      <!-- Barandas -->
      <line x1="150" y1="65" x2="390" y2="65" stroke="#ea580c" stroke-width="5"/>
      <line x1="150" y1="95" x2="390" y2="95" stroke="#ea580c" stroke-width="4"/>
      <!-- Rodapié y plataforma -->
      <rect x="150" y="114" width="240" height="12" fill="#f59e0b"/>
      <rect x="145" y="126" width="250" height="14" fill="#64748b"/>
      <!-- Diagonales -->
      <line x1="150" y1="140" x2="390" y2="235" stroke="#475569" stroke-width="4"/>
      <line x1="390" y1="140" x2="150" y2="235" stroke="#475569" stroke-width="4"/>
      <!-- Bases -->
      <rect x="128" y="236" width="44" height="10" fill="#0f172a"/>
      <rect x="368" y="236" width="44" height="10" fill="#0f172a"/>
      <!-- Tarjeta verde -->
      <rect x="445" y="95" width="90" height="92" rx="8" fill="#16a34a" stroke="#14532d" stroke-width="2.5"/>
      <text x="490" y="132" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="800">TARJETA</text>
      <text x="490" y="150" text-anchor="middle" fill="#dcfce7" font-size="11" font-weight="800">VERDE ✓</text>
    `,
    hotspots: [
      { x: 270, y: 80, label: '1. Barandas y rodapié', risk: 'Caídas de personas y de herramientas hacia niveles inferiores.', control: 'Instalar baranda superior, intermedia y rodapié completo en todo el perímetro de trabajo.' },
      { x: 270, y: 132, label: '2. Plataformas completas y aseguradas', risk: 'Tablones sueltos o huecos provocan tropiezos y caídas a distinto nivel.', control: 'Cubrir 100 % del nivel con plataformas metálicas antideslizantes con seguro contra levantamiento.' },
      { x: 150, y: 238, label: '3. Base nivelada y diagonales', risk: 'Un apoyo sobre terreno blando o sin diagonales hace colapsar el andamio.', control: 'Usar placas base/niveladores sobre superficie firme y todas las diagonales del fabricante.' },
      { x: 490, y: 142, label: '4. Tarjeta de inspección vigente', risk: 'Subir a un andamio en armado o modificado sin inspección es crítico.', control: 'Solo usar si tiene tarjeta verde firmada del turno. Tarjeta roja = prohibido subir.' }
    ]
  },

  'manejo-amoniaco': {
    theme: 'chem',
    title: 'Control de Fugas en Sistemas de Amoníaco (NH₃)',
    subtitle: 'Explora los 4 elementos críticos ante una posible fuga de amoníaco anhidro.',
    svg: `
      <rect x="20" y="20" width="560" height="260" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
      <!-- Tanque NH3 -->
      <rect x="65" y="110" width="175" height="95" rx="40" fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
      <text x="152" y="164" text-anchor="middle" fill="#0f172a" font-size="18" font-weight="900">NH₃</text>
      <!-- Detector fijo -->
      <rect x="130" y="45" width="46" height="36" rx="6" fill="#dc2626"/>
      <text x="153" y="67" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="800">PPM</text>
      <!-- Manga de viento -->
      <line x1="335" y1="60" x2="335" y2="210" stroke="#475569" stroke-width="5"/>
      <polygon points="335,66 425,78 425,94 335,104" fill="#f97316"/>
      <text x="380" y="128" text-anchor="middle" fill="#9a3412" font-size="10" font-weight="800">VIENTO →</text>
      <!-- Ducha -->
      <rect x="465" y="95" width="78" height="115" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
      <text x="504" y="150" text-anchor="middle" fill="#15803d" font-size="11" font-weight="800">DUCHA</text>
      <text x="504" y="166" text-anchor="middle" fill="#166534" font-size="9">15 MIN AGUA</text>
    `,
    hotspots: [
      { x: 153, y: 63, label: '1. Detector fijo y alarma', risk: 'El NH₃ es altamente tóxico y corrosivo; concentraciones altas incapacitan en segundos.', control: 'Ante alarma visual/sonora, evacuar de inmediato sin intentar "oler" para buscar la fuga.' },
      { x: 380, y: 85, label: '2. Evacuar perpendicular al viento', risk: 'Correr a favor del viento mantiene a la persona dentro de la nube tóxica.', control: 'Mirar la manga de viento y desplazarse en sentido contrario o perpendicular hacia el punto de encuentro.' },
      { x: 152, y: 158, label: '3. Solo personal con SCBA interviene', risk: 'Los filtros comunes no protegen en fugas masivas o atmósferas IDLH.', control: 'El cierre de válvulas en emergencia corresponde solo a brigada entrenada con equipo autónomo (SCBA).' },
      { x: 504, y: 152, label: '4. Descontaminación con agua', risk: 'El amoníaco causa quemaduras alcalinas severas en ojos y piel.', control: 'Lavar con abundante agua durante al menos 15 minutos retirando ropa contaminada.' }
    ]
  },

  'manipulacion-alimentos': {
    theme: 'chem',
    title: 'Barreras Sanitarias en Manipulación de Alimentos (BPM)',
    subtitle: 'Haz clic en cada zona para repasar el control de inocuidad (Res. 2674 de 2013).',
    svg: `
      <rect x="20" y="20" width="560" height="260" rx="14" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="2"/>
      <!-- Zona lavado -->
      <rect x="55" y="75" width="115" height="135" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="112" y="138" text-anchor="middle" fill="#1e40af" font-size="11" font-weight="800">LAVADO DE</text>
      <text x="112" y="154" text-anchor="middle" fill="#1e40af" font-size="11" font-weight="800">MANOS</text>
      <!-- Termómetro zona peligro -->
      <rect x="215" y="60" width="145" height="165" rx="10" fill="#ffffff" stroke="#334155" stroke-width="2"/>
      <rect x="230" y="75" width="115" height="36" rx="4" fill="#fee2e2"/>
      <text x="287" y="97" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="800">CALIENTE &gt; 60 °C</text>
      <rect x="230" y="118" width="115" height="44" rx="4" fill="#fef08a"/>
      <text x="287" y="144" text-anchor="middle" fill="#854d0e" font-size="10" font-weight="800">PELIGRO 5–60 °C</text>
      <rect x="230" y="169" width="115" height="36" rx="4" fill="#dbeafe"/>
      <text x="287" y="191" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="800">FRÍO ≤ 4 °C</text>
      <!-- Tablas separadas -->
      <rect x="405" y="75" width="135" height="58" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
      <text x="472" y="108" text-anchor="middle" fill="#991b1b" font-size="10.5" font-weight="800">CRUDO (ROJA)</text>
      <rect x="405" y="152" width="135" height="58" rx="8" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
      <text x="472" y="185" text-anchor="middle" fill="#166534" font-size="10.5" font-weight="800">LISTO (VERDE)</text>
    `,
    hotspots: [
      { x: 112, y: 145, label: '1. Higiene y lavado de manos', risk: 'Las manos son el principal vehículo de contaminación biológica.', control: 'Lavar con agua y jabón desinfectante antes de iniciar, tras ir al baño o cambiar de alimento.' },
      { x: 287, y: 140, label: '2. Zona de peligro (5 °C a 60 °C)', risk: 'En ese rango las bacterias se multiplican rápidamente.', control: 'Mantener refrigerados a ≤ 4 °C y calientes a ≥ 60 °C; medir y registrar temperaturas.' },
      { x: 472, y: 142, label: '3. Evitar contaminación cruzada', risk: 'Usar la misma tabla o cuchillo pasa patógenos de carnes crudas a alimentos listos.', control: 'Separar utensilios, tablas y almacenamiento entre crudos y listos para consumo.' }
    ]
  },

  copasst: {
    theme: 'mgmt',
    title: 'Ciclo de Gestión del COPASST',
    subtitle: 'Explora los 4 pilares de participación paritaria en el SG-SST.',
    svg: `
      <rect x="20" y="20" width="560" height="260" rx="14" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="2"/>
      <circle cx="300" cy="150" r="56" fill="#7c3aed"/>
      <text x="300" y="146" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="900">COPASST</text>
      <text x="300" y="164" text-anchor="middle" fill="#ede9fe" font-size="9.5">PARITARIO</text>
      <!-- 4 nodos -->
      <rect x="55" y="48" width="145" height="58" rx="10" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
      <text x="127" y="81" text-anchor="middle" fill="#4c1d95" font-size="10.5" font-weight="800">INSPECCIONES</text>
      <rect x="400" y="48" width="145" height="58" rx="10" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
      <text x="472" y="81" text-anchor="middle" fill="#4c1d95" font-size="10.5" font-weight="800">INVESTIGACIÓN AT</text>
      <rect x="55" y="194" width="145" height="58" rx="10" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
      <text x="127" y="227" text-anchor="middle" fill="#4c1d95" font-size="10.5" font-weight="800">REUNIÓN MENSUAL</text>
      <rect x="400" y="194" width="145" height="58" rx="10" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
      <text x="472" y="227" text-anchor="middle" fill="#4c1d95" font-size="10.5" font-weight="800">SEGUIMIENTO PLAN</text>
    `,
    hotspots: [
      { x: 127, y: 77, label: '1. Inspecciones planeadas', risk: 'Condiciones inseguras no detectadas terminan en accidentes.', control: 'Visitar áreas de trabajo, identificar peligros y proponer medidas preventivas.' },
      { x: 472, y: 77, label: '2. Investigación de incidentes y AT', risk: 'Buscar culpables en lugar de causas raíz repite el accidente.', control: 'Participar en el equipo investigador (Res. 1401 de 2007) y verificar acciones correctivas.' },
      { x: 127, y: 223, label: '3. Reuniones mensuales y actas', risk: 'Sin actas ni quórum, el comité pierde validez y trazabilidad.', control: 'Reunirse mínimo una vez al mes en horario laboral y llevar actas con compromisos.' },
      { x: 472, y: 223, label: '4. Vigilancia del SG-SST', risk: 'Las recomendaciones sin seguimiento se quedan en el papel.', control: 'Hacer seguimiento al plan de trabajo anual, capacitaciones y cierre de hallazgos.' }
    ]
  },

  'comite-convivencia-laboral': {
    theme: 'mgmt',
    title: 'Ruta de Actuación del Comité de Convivencia Laboral (CCL)',
    subtitle: 'Haz clic en cada etapa para ver cómo se tramita una queja con confidencialidad e imparcialidad.',
    svg: `
      <rect x="20" y="20" width="560" height="260" rx="14" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="2"/>
      <line x1="95" y1="145" x2="505" y2="145" stroke="#c4b5fd" stroke-width="6"/>
      <circle cx="105" cy="145" r="36" fill="#7c3aed"/>
      <text x="105" y="149" text-anchor="middle" fill="#fff" font-size="10" font-weight="800">1. QUEJA</text>
      <circle cx="235" cy="145" r="36" fill="#6d28d9"/>
      <text x="235" y="149" text-anchor="middle" fill="#fff" font-size="10" font-weight="800">2. ESCUCHA</text>
      <circle cx="365" cy="145" r="36" fill="#5b21b6"/>
      <text x="365" y="149" text-anchor="middle" fill="#fff" font-size="10" font-weight="800">3. DIÁLOGO</text>
      <circle cx="495" cy="145" r="36" fill="#4c1d95"/>
      <text x="495" y="149" text-anchor="middle" fill="#fff" font-size="10" font-weight="800">4. CIERRE</text>
      <text x="300" y="232" text-anchor="middle" fill="#5b21b6" font-size="11" font-weight="800">CONFIDENCIALIDAD · IMPARCIALIDAD · NO SANCIÓN</text>
    `,
    hotspots: [
      { x: 105, y: 145, label: '1. Recepción confidencial', risk: 'Filtrar la queja genera revictimización y desconfianza.', control: 'Recibir la queja por escrito o canal seguro y custodiar el expediente bajo reserva.' },
      { x: 235, y: 145, label: '2. Escucha individual imparcial', risk: 'Prejuzgar a cualquiera de las partes invalida el rol preventivo.', control: 'Escuchar por separado a ambas partes, sin tomar partido ni calificar conductas como delito.' },
      { x: 365, y: 145, label: '3. Espacio de diálogo y acuerdos', risk: 'El CCL no sanciona; su fin es construir compromisos de convivencia.', control: 'Promover un plan de mejora concertado con compromisos claros y verificables.' },
      { x: 495, y: 145, label: '4. Seguimiento y remisión', risk: 'Dejar el caso sin seguimiento permite que el conflicto escale.', control: 'Verificar cumplimiento de acuerdos; si no hay acuerdo, remitir a la alta dirección o instancia competente.' }
    ]
  }
};

const SCENE_PHOTOS = {
  fire: './img/scenes/scene-fire.jpg',
  elec: './img/scenes/scene-loto.jpg',
  chem: './img/scenes/scene-chem.jpg',
  mech: './img/scenes/scene-mech.jpg',
  load: './img/scenes/scene-load.jpg',
  mgmt: './img/scenes/scene-mgmt.jpg'
};

const COURSE_CARD_PHOTOS = {
  'loto-bloqueo': './img/scenes/scene-loto.jpg',
  'trabajo-caliente': './img/scenes/scene-fire.jpg',
  'sustancias-quimicas': './img/scenes/scene-chem.jpg',
  'riesgo-electrico-no-electricistas': './img/scenes/course-elec.jpg',
  'herramientas-electricas': './img/scenes/scene-mech.jpg',
  'aparejador-cargas': './img/scenes/scene-load.jpg',
  'almacenamiento-apilamiento-cargas': './img/scenes/course-bodega.jpg',
  copasst: './img/scenes/scene-mgmt.jpg',
  'observador-fuego': 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80',
  'seguridad-soldadura-corte': './img/scenes/course-soldadura.jpg',
  'mecanica-basica': './img/scenes/course-mecanica.jpg',
  'aislamiento-energias-avanzado': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
  andamiero: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80',
  'manejo-amoniaco': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
  'manipulacion-alimentos': 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80',
  'comite-convivencia-laboral': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80'
};

export function coursePhoto(courseId) {
  if (COURSE_CARD_PHOTOS[courseId]) return COURSE_CARD_PHOTOS[courseId];
  const theme = COURSE_SCENES[courseId]?.theme || 'elec';
  return SCENE_PHOTOS[theme] || SCENE_PHOTOS.elec;
}

// Coordenadas calibradas al milímetro sobre cada fotografía profesional (base 600x300)
const CALIBRATED_HOTSPOTS = {
  elec: [
    { x: 360, y: 105, label: '1. Seccionador en OFF', risk: 'Apagar solo el botón de control no corta la alimentación principal de 480 V.', control: 'Abrir el seccionador principal hasta la posición OFF antes de bloquear.' },
    { x: 300, y: 138, label: '2. Pinza múltiple de bloqueo', risk: 'En trabajos con varios técnicos, un solo candado no protege a todo el equipo.', control: 'Usar pinza múltiple para que cada trabajador coloque su propio candado.' },
    { x: 342, y: 192, label: '3. Candado personal', risk: 'Un tercero puede reenergizar el equipo por error si no hay bloqueo físico.', control: 'Cada técnico instala su candado personal y conserva la única llave.' },
    { x: 380, y: 228, label: '4. Etiqueta de peligro', risk: 'Sin identificación nadie sabe quién interviene ni por qué está bloqueado.', control: 'Diligenciar nombre, área y fecha. La etiqueta nunca reemplaza al candado.' },
    { x: 516, y: 150, label: '5. Verificación de energía cero (0 V)', risk: 'Confiar en que "ya está apagado" es la causa raíz de electrocuciones.', control: 'Medir con multímetro verificado y confirmar 0 V antes de tocar el equipo.' }
  ],
  fire: [
    { x: 235, y: 125, label: '1. Ejecutante con EPP completo', risk: 'Ropa sintética o falta de careta causan quemaduras graves y daño ocular.', control: 'Usar ropa de cuero/algodón ignífugo, careta con filtro adecuado y guantes de soldador.' },
    { x: 130, y: 172, label: '2. Mantas ignífugas', risk: 'Las chispas viajan más de 10 m y encienden equipos o materiales cercanos.', control: 'Retirar combustibles en 11 m y cubrir lo inamovible con mantas ignífugas certificadas.' },
    { x: 400, y: 82, label: '3. Mampara anti-arco', risk: 'La radiación UV del arco daña los ojos de terceros y proyecta escoria.', control: 'Delimitar el área con mamparas translúcidas incombustibles para contener chispas.' },
    { x: 416, y: 215, label: '4. Extintor listo en sitio', risk: 'Un conato de incendio crece en segundos si el extintor está lejos o descargado.', control: 'Mantener extintor adecuado al alcance y un vigía dedicado durante y 60 min después.' },
    { x: 454, y: 158, label: '5. Detector de gases portátil', risk: 'Vapores inflamables invisibles provocan explosiones al contacto con chispas.', control: 'Verificar el detector, medir % LEL antes de iniciar y monitorear durante la tarea.' }
  ],
  chem: [
    { x: 155, y: 195, label: '1. Pictogramas SGA y dique', risk: 'Envases sin rótulo o sin contención generan intoxicaciones y derrames a drenajes.', control: 'Mantener etiquetas SGA legibles y tambores sobre estibas de contención compatibles.' },
    { x: 295, y: 120, label: '2. Técnico con EPP químico', risk: 'Salpicaduras o vapores corrosivos causan quemaduras severas en piel y ojos.', control: 'Usar el EPP indicado en la FDS: careta, gafas, traje resistente y guantes de nitrilo.' },
    { x: 460, y: 120, label: '3. Ducha y lavaojos despejados', risk: 'Los primeros 15 segundos tras una salpicadura química definen la gravedad.', control: 'Mantener el acceso 100 % libre y lavar mínimo 15 minutos continuos en caso de contacto.' },
    { x: 550, y: 145, label: '4. Fichas de Seguridad (FDS / SDS)', risk: 'Improvisar primeros auxilios o mezclar sustancias agrava la emergencia.', control: 'Tener las FDS de 16 secciones en español disponibles y consultarlas antes de manipular.' }
  ],
  load: [
    { x: 300, y: 118, label: '1. Eslingas a ángulo seguro (≥ 60°)', risk: 'Ángulos menores a 45° multiplican la tensión y pueden romper la eslinga.', control: 'Trabajar a 60° o más respecto a la horizontal y revisar la capacidad nominal.' },
    { x: 300, y: 192, label: '2. Carga balanceada', risk: 'Un centro de gravedad desplazado hace girar o caer la carga al despegar.', control: 'Alinear el gancho sobre el centro de gravedad y hacer prueba de despegue controlada.' },
    { x: 300, y: 262, label: '3. Zona de exclusión demarcada', risk: 'Permanecer bajo una carga suspendida es mortal ante cualquier falla.', control: 'Respetar la demarcación amarilla/negra y usar cuerdas guía desde distancia segura.' },
    { x: 120, y: 145, label: '4. Andamio certificado', risk: 'Falta de barandas, rodapiés o diagonales provoca caídas a distinto nivel.', control: 'Verificar bases niveladas, barandas completas y tarjeta verde vigente antes de subir.' },
    { x: 525, y: 155, label: '5. Estanterías y pasillos ordenados', risk: 'Sobrecargar niveles altos o bloquear pasillos causa colapsos y atropellos.', control: 'Ubicar cargas pesadas abajo, respetar carga máxima por nivel y mantener pasillos libres.' }
  ],
  mech: [
    { x: 115, y: 150, label: '1. Parada de emergencia visible', risk: 'Un botón obstruido retrasa la detención ante un atrapamiento o falla.', control: 'Mantener la parada de emergencia despejada y verificada (no reemplaza LOTO).' },
    { x: 225, y: 140, label: '2. Guardas fijas en maquinaria', risk: 'Operar sin resguardos expone a atrapamientos, amputaciones y proyección.', control: 'Verificar que todas las guardas amarillas estén cerradas y aseguradas antes de encender.' },
    { x: 460, y: 85, label: '3. Protección facial y auditiva', risk: 'Partículas incandescentes y ruido industrial generan lesiones irreversibles.', control: 'Usar gafas bajo careta facial, protectores auditivos y ropa ajustada sin elementos sueltos.' },
    { x: 400, y: 205, label: '4. Herramienta con guarda instalada', risk: 'Retirar la guarda o cambiar el disco conectada causa heridas graves.', control: 'Inspeccionar guarda, disco y cable antes de conectar; usar ambas manos con empuñadura.' }
  ],
  mgmt: [
    { x: 175, y: 215, label: '1. Actas y listas de verificación', risk: 'Sin registro formal ni trazabilidad, los compromisos se pierden.', control: 'Documentar reuniones mensuales, quórum, hallazgos y responsables con fecha límite.' },
    { x: 300, y: 165, label: '2. Indicadores del SG-SST', risk: 'No analizar incidentes ni tendencias impide prevenir accidentes recurrentes.', control: 'Revisar indicadores, investigaciones de causa raíz y cumplimiento del plan anual.' },
    { x: 315, y: 220, label: '3. Planos e inspecciones de planta', risk: 'Gestionar solo desde el escritorio oculta peligros reales en las áreas.', control: 'Programar inspecciones planeadas en sitio y verificar el cierre efectivo de hallazgos.' },
    { x: 455, y: 185, label: '4. Participación paritaria e imparcial', risk: 'La falta de escucha y confidencialidad rompe la confianza de los trabajadores.', control: 'Garantizar diálogo respetuoso, confidencialidad y representación equilibrada.' }
  ]
};

// Renderiza la escena fotográfica interactiva principal de un curso
export function renderCourseScene(courseId) {
  const scene = COURSE_SCENES[courseId];
  if (!scene) return '';
  const theme = THEMES[scene.theme] || THEMES.elec;
  const photo = SCENE_PHOTOS[scene.theme] || SCENE_PHOTOS.elec;
  const hotspots = CALIBRATED_HOTSPOTS[scene.theme] || scene.hotspots;
  const uid = 'scene-' + courseId + '-' + Math.random().toString(36).slice(2, 6);
  const first = hotspots[0];

  return `
    <section class="sst-iv-card" data-iv-scene="${esc(uid)}" data-course="${esc(courseId)}" data-theme="${esc(scene.theme)}" style="--iv-accent:${theme.accent};--iv-soft:${theme.soft};--iv-dark:${theme.dark};">
      <div class="sst-iv-head">
        <div>
          <span class="sst-iv-badge">Escena interactiva de planta</span>
          <h3 class="sst-iv-title">${esc(scene.title)}</h3>
          <p class="sst-iv-sub">${esc(scene.subtitle)}</p>
        </div>
        <span class="sst-iv-counter" data-iv-counter>1 / ${hotspots.length} explorados</span>
      </div>

      <div class="sst-iv-photo-stage">
        <img src="${esc(photo)}" alt="${esc(scene.title)}" class="sst-iv-photo" loading="lazy" />
        <div class="sst-iv-photo-scrim" aria-hidden="true"></div>
        ${hotspots.map((h, i) => {
          const left = Math.max(8, Math.min(92, Math.round((h.x / 600) * 100)));
          const top = Math.max(12, Math.min(88, Math.round((h.y / 300) * 100)));
          return `
            <button type="button" class="sst-photo-pin ${i === 0 ? 'active visited' : ''}" data-iv-pin="${i}" style="left:${left}%;top:${top}%;" aria-label="${esc(h.label)}">
              <span class="sst-photo-pin-ring" aria-hidden="true"></span>
              <span class="sst-photo-pin-num">${i + 1}</span>
              <span class="sst-photo-pin-tip">${esc(h.label)}</span>
            </button>`;
        }).join('')}
      </div>

      <div class="sst-iv-detail" data-iv-detail aria-live="polite">
        ${hotspotDetailHtml(first, 0, hotspots.length)}
      </div>

      <div class="sst-iv-pills" role="tablist" aria-label="Puntos de la escena">
        ${hotspots.map((h, i) => `
          <button type="button" class="sst-iv-pill ${i === 0 ? 'active' : ''}" data-iv-pin="${i}">${esc(h.label)}</button>
        `).join('')}
      </div>
    </section>`;
}

function hotspotDetailHtml(h, idx, total) {
  return `
    <div class="sst-iv-detail-head">
      <strong>${esc(h.label)}</strong>
      <span class="iui-xs iui-muted">Punto ${idx + 1} de ${total}</span>
    </div>
    <div class="sst-iv-grid">
      <div class="sst-iv-box sst-iv-risk">
        <span>⚠ Qué puede fallar</span>
        <p>${esc(h.risk)}</p>
      </div>
      <div class="sst-iv-box sst-iv-ctrl">
        <span>✓ Control crítico</span>
        <p>${esc(h.control)}</p>
      </div>
    </div>`;
}

// Extrae tarjetas visuales interactivas del contenido de cada módulo para evitar "muros de texto"
function extractModuleNodes(mod) {
  const nodes = [];
  const kps = Array.isArray(mod.keyPoints) ? mod.keyPoints : [];
  kps.forEach((kp, i) => {
    const clean = String(kp).replace(/^Control crítico en campo:\s*/i, '').trim();
    const parts = clean.split(/:\s+/);
    const title = parts.length > 1 && parts[0].length < 48 ? parts[0] : `Idea clave ${i + 1}`;
    const body = parts.length > 1 && parts[0].length < 48 ? parts.slice(1).join(': ') : clean;
    nodes.push({ title, body, kind: i === 0 ? 'concept' : i === 1 ? 'control' : 'alert' });
  });

  // Si el módulo tiene ítems de lista en su HTML, tomamos hasta 3 adicionales como pasos visuales
  const liMatches = [...String(mod.content || '').matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)];
  if (nodes.length < 4 && liMatches.length) {
    liMatches.slice(0, 4 - nodes.length).forEach((m) => {
      const txt = m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      if (!txt) return;
      const dot = txt.indexOf('.');
      const colon = txt.indexOf(':');
      const cut = colon > 3 && colon < 44 ? colon : (dot > 3 && dot < 44 ? dot : -1);
      const title = cut > 0 ? txt.slice(0, cut).trim() : 'En la práctica';
      const body = cut > 0 ? txt.slice(cut + 1).trim() : txt;
      if (body && !nodes.some((n) => n.body === body)) {
        nodes.push({ title, body, kind: 'step' });
      }
    });
  }
  return nodes.slice(0, 5);
}

// Renderiza tarjetas visuales interactivas por módulo (diseño corporativo limpio)
export function renderModuleVisual(course, modIndex) {
  const mod = course.modules[modIndex];
  if (!mod) return '';
  const nodes = extractModuleNodes(mod);
  if (!nodes.length) return '';

  const sceneThemeKey = COURSE_SCENES[course.id]?.theme || 'elec';
  const theme = THEMES[sceneThemeKey] || THEMES.elec;
  const uid = `mod-${course.id}-${modIndex}`;

  return `
    <section class="sst-iv-card sst-iv-mod" data-iv-mod="${esc(uid)}" style="--iv-accent:${theme.accent};--iv-soft:${theme.soft};--iv-dark:${theme.dark};">
      <div class="sst-iv-head">
        <div>
          <span class="sst-iv-badge">Ruta visual interactiva · Módulo ${modIndex + 1}</span>
          <h3 class="sst-iv-title">Conceptos clave del módulo</h3>
          <p class="sst-iv-sub">Recorre cada tarjeta para dominar el módulo de forma clara y rápida.</p>
        </div>
        <span class="sst-iv-counter" data-iv-counter>1 / ${nodes.length} vistos</span>
      </div>

      <div class="sst-mod-steps" role="tablist" aria-label="Conceptos del módulo ${modIndex + 1}">
        ${nodes.map((n, i) => `
          <button type="button" class="sst-mod-step ${i === 0 ? 'active visited' : ''}" data-iv-node="${i}">
            <span class="sst-mod-step-num">${i + 1}</span>
            <span class="sst-mod-step-title">${esc(n.title)}</span>
          </button>`).join('')}
      </div>

      <div class="sst-iv-detail" data-iv-mod-detail aria-live="polite">
        <div class="sst-iv-detail-head">
          <strong>${esc(nodes[0].title)}</strong>
          <span class="iui-xs iui-muted">Concepto 1 de ${nodes.length}</span>
        </div>
        <p class="sst-iv-mod-body">${esc(nodes[0].body)}</p>
      </div>

      <div class="sst-iv-nav-row">
        <button type="button" class="iui-btn iui-btn-ghost iui-btn-sm" data-iv-prev>← Anterior</button>
        <div class="sst-iv-dots">
          ${nodes.map((_, i) => `<button type="button" class="sst-iv-dotbtn ${i === 0 ? 'active' : ''}" data-iv-node="${i}" aria-label="Concepto ${i + 1}"></button>`).join('')}
        </div>
        <button type="button" class="iui-btn iui-btn-secondary iui-btn-sm" data-iv-next>Siguiente →</button>
      </div>

      <script type="application/json" data-iv-mod-data>${JSON.stringify(nodes).replace(/</g, '\\u003c')}</script>
    </section>`;
}

// Conecta la interactividad de todas las escenas y mapas visuales mediante delegación global infalible
let globalBound = false;

export function bindInteractiveVisuals(scope) {
  if (!globalBound && typeof document !== 'undefined') {
    globalBound = true;
    document.addEventListener('click', (e) => {
      // 1. Clic en pin o pill de Escena Interactiva
      const pin = e.target.closest('[data-iv-pin]');
      if (pin) {
        const card = pin.closest('[data-iv-scene]');
        if (!card) return;
        const courseId = card.dataset.course;
        const themeKey = card.dataset.theme;
        const hotspots = CALIBRATED_HOTSPOTS[themeKey] || COURSE_SCENES[courseId]?.hotspots || [];
        const idx = Number(pin.dataset.ivPin);
        const h = hotspots[idx];
        if (!h) return;

        const visited = new Set((card.dataset.visited || '0').split(',').filter(Boolean).map(Number));
        visited.add(idx);
        card.dataset.visited = [...visited].join(',');

        card.querySelectorAll('[data-iv-pin]').forEach((el) => {
          const i = Number(el.dataset.ivPin);
          el.classList.toggle('active', i === idx);
          if (visited.has(i)) el.classList.add('visited');
        });

        const detail = card.querySelector('[data-iv-detail]');
        if (detail) {
          detail.innerHTML = hotspotDetailHtml(h, idx, hotspots.length);
          detail.classList.remove('sst-iv-flash');
          void detail.offsetWidth;
          detail.classList.add('sst-iv-flash');
        }

        const counter = card.querySelector('[data-iv-counter]');
        if (counter) {
          if (visited.size >= hotspots.length) {
            counter.textContent = '✓ Escena dominada';
            counter.classList.add('done');
            if (courseId) setMastery(courseId, 'scene');
          } else {
            counter.textContent = `${visited.size} / ${hotspots.length} explorados`;
          }
        }
        return;
      }

      // 2. Clic en nodo o botones Anterior/Siguiente de Ruta Visual de Módulo
      const modCard = e.target.closest('[data-iv-mod]');
      if (modCard) {
        const nodeBtn = e.target.closest('[data-iv-node]');
        const prevBtn = e.target.closest('[data-iv-prev]');
        const nextBtn = e.target.closest('[data-iv-next]');
        if (!nodeBtn && !prevBtn && !nextBtn) return;

        const dataEl = modCard.querySelector('[data-iv-mod-data]');
        if (!dataEl) return;
        let nodes = [];
        try { nodes = JSON.parse(dataEl.textContent || '[]'); } catch { return; }
        if (!nodes.length) return;

        let cur = Number(modCard.dataset.cur || 0);
        if (nodeBtn) cur = Number(nodeBtn.dataset.ivNode);
        else if (prevBtn) cur = (cur - 1 + nodes.length) % nodes.length;
        else if (nextBtn) cur = (cur + 1) % nodes.length;
        modCard.dataset.cur = String(cur);

        const visited = new Set((modCard.dataset.visited || '0').split(',').filter(Boolean).map(Number));
        visited.add(cur);
        modCard.dataset.visited = [...visited].join(',');

        modCard.querySelectorAll('[data-iv-node]').forEach((el) => {
          const i = Number(el.dataset.ivNode);
          el.classList.toggle('active', i === cur);
          if (visited.has(i)) el.classList.add('visited');
        });

        const n = nodes[cur];
        const detail = modCard.querySelector('[data-iv-mod-detail]');
        if (detail && n) {
          detail.innerHTML = `
            <div class="sst-iv-detail-head">
              <strong>${esc(n.title)}</strong>
              <span class="iui-xs iui-muted">Concepto ${cur + 1} de ${nodes.length}</span>
            </div>
            <p class="sst-iv-mod-body">${esc(n.body)}</p>`;
          detail.classList.remove('sst-iv-flash');
          void detail.offsetWidth;
          detail.classList.add('sst-iv-flash');
        }
        const counter = modCard.querySelector('[data-iv-counter]');
        if (counter) {
          counter.textContent = visited.size >= nodes.length ? '✓ Módulo explorado' : `${visited.size} / ${nodes.length} vistos`;
          if (visited.size >= nodes.length) counter.classList.add('done');
        }
      }
    });
  }

  bindSimulators(scope);
}


// =====================================================================
// SIMULADORES INTERACTIVOS Y SEGUIMIENTO DE DOMINIO ("LO QUE APRENDISTE")
// =====================================================================
const MASTERY_KEY = 'sst_mastery_v1';

export function getMastery(courseId) {
  try {
    return JSON.parse(localStorage.getItem(MASTERY_KEY) || '{}')[courseId] || { scene: false, sim: false };
  } catch {
    return { scene: false, sim: false };
  }
}

function setMastery(courseId, key) {
  try {
    const all = JSON.parse(localStorage.getItem(MASTERY_KEY) || '{}');
    all[courseId] = { ...(all[courseId] || {}), [key]: true };
    localStorage.setItem(MASTERY_KEY, JSON.stringify(all));
  } catch {
    /* sin almacenamiento */
  }
}

// Qué tipo de simulador corresponde a cada uno de los 16 cursos
const SIM_BY_COURSE = {
  'trabajo-caliente': 'lel',
  'observador-fuego': 'lel',
  'seguridad-soldadura-corte': 'lel',
  'aparejador-cargas': 'sling',
  'almacenamiento-apilamiento-cargas': 'sling',
  'loto-bloqueo': 'loto',
  'aislamiento-energias-avanzado': 'loto',
  'riesgo-electrico-no-electricistas': 'loto',
  'herramientas-electricas': 'loto',
  'mecanica-basica': 'loto',
  'manipulacion-alimentos': 'temp',
  'sustancias-quimicas': 'chem',
  'manejo-amoniaco': 'chem',
  andamiero: 'scaffold',
  copasst: 'mgmt',
  'comite-convivencia-laboral': 'mgmt'
};

export function renderCourseSimulator(courseId) {
  const type = SIM_BY_COURSE[courseId] || 'loto';
  const done = getMastery(courseId).sim;

  if (type === 'lel') {
    return `
      <section class="sst-iv-card sst-sim-card" data-sim="lel" data-course="${esc(courseId)}" style="--iv-accent:#ea580c;--iv-soft:#ffedd5;--iv-dark:#7c2d12;">
        <div class="sst-iv-head">
          <div>
            <span class="sst-iv-badge">Simulador práctico</span>
            <h3 class="sst-iv-title">Detector de Gases Combustibles (% LEL)</h3>
            <p class="sst-iv-sub">Mueve el deslizador y cambia el entorno para practicar cuándo se autoriza y cuándo se detiene el trabajo.</p>
          </div>
          <span class="sst-iv-counter ${done ? 'done' : ''}" data-sim-badge>${done ? '✓ Dominado' : 'Interactúa para practicar'}</span>
        </div>
        <div class="sst-sim-body">
          <div class="sst-sim-controls">
            <label class="sst-sim-label">Entorno de medición:
              <select class="iui-select" data-lel-env>
                <option value="area">Área abierta / planta</option>
                <option value="tank">Interior de tanque o tubería</option>
              </select>
            </label>
            <label class="sst-sim-label">Lectura simulada: <strong data-lel-val>0 % LEL</strong>
              <input type="range" min="0" max="20" step="1" value="0" data-lel-range class="sst-sim-range" />
            </label>
          </div>
          <div class="sst-sim-meter ok" data-lel-meter aria-live="polite">
            <div class="sst-sim-readout" data-lel-readout>0 % LEL</div>
            <div class="sst-sim-status" data-lel-status>SEGURO — Se puede autorizar si los demás controles están completos.</div>
          </div>
        </div>
      </section>`;
  }

  if (type === 'sling') {
    return `
      <section class="sst-iv-card sst-sim-card" data-sim="sling" data-course="${esc(courseId)}" style="--iv-accent:#ca8a04;--iv-soft:#fef9c3;--iv-dark:#713f12;">
        <div class="sst-iv-head">
          <div>
            <span class="sst-iv-badge">Simulador práctico</span>
            <h3 class="sst-iv-title">Calculadora Visual de Ángulo de Eslingas (Carga: 1.000 kg)</h3>
            <p class="sst-iv-sub">Reduce el ángulo horizontal y observa cómo se dispara la tensión en cada ramal.</p>
          </div>
          <span class="sst-iv-counter ${done ? 'done' : ''}" data-sim-badge>${done ? '✓ Dominado' : 'Mueve el ángulo'}</span>
        </div>
        <div class="sst-sim-body">
          <svg viewBox="0 0 420 170" class="sst-iv-svg" style="max-height:170px;background:#fefce8;border-radius:10px;border:1px solid #fde047;">
            <circle cx="210" cy="24" r="7" fill="#334155"/>
            <line data-sling-l x1="210" y1="24" x2="155" y2="115" stroke="#16a34a" stroke-width="5"/>
            <line data-sling-r x1="210" y1="24" x2="265" y2="115" stroke="#16a34a" stroke-width="5"/>
            <rect x="135" y="115" width="150" height="40" rx="6" fill="#475569"/>
            <text x="210" y="140" text-anchor="middle" fill="#fff" font-size="12" font-weight="800">CARGA: 1.000 kg</text>
          </svg>
          <div class="sst-sim-controls">
            <label class="sst-sim-label">Ángulo horizontal: <strong data-sling-ang>60°</strong>
              <input type="range" min="25" max="90" step="5" value="60" data-sling-range class="sst-sim-range" />
            </label>
            <div class="sst-sim-meter ok" data-sling-meter aria-live="polite">
              <div class="sst-sim-readout" data-sling-tension>577 kg / ramal</div>
              <div class="sst-sim-status" data-sling-status>Ángulo recomendado (≥ 60°): tensión controlada y estable.</div>
            </div>
          </div>
        </div>
      </section>`;
  }

  if (type === 'temp') {
    return `
      <section class="sst-iv-card sst-sim-card" data-sim="temp" data-course="${esc(courseId)}" style="--iv-accent:#16a34a;--iv-soft:#dcfce7;--iv-dark:#14532d;">
        <div class="sst-iv-head">
          <div>
            <span class="sst-iv-badge">Simulador práctico</span>
            <h3 class="sst-iv-title">Termómetro de Zona de Peligro Alimentario</h3>
            <p class="sst-iv-sub">Desliza la temperatura del alimento y verifica si está en zona segura o en zona de proliferación bacteriana.</p>
          </div>
          <span class="sst-iv-counter ${done ? 'done' : ''}" data-sim-badge>${done ? '✓ Dominado' : 'Prueba el termómetro'}</span>
        </div>
        <div class="sst-sim-body">
          <label class="sst-sim-label">Temperatura medida: <strong data-temp-val>4 °C</strong>
            <input type="range" min="0" max="80" step="1" value="4" data-temp-range class="sst-sim-range" />
          </label>
          <div class="sst-sim-meter ok" data-temp-meter aria-live="polite">
            <div class="sst-sim-readout" data-temp-readout>4 °C — REFRIGERACIÓN SEGURA</div>
            <div class="sst-sim-status" data-temp-status>Por debajo de 4 °C se frena el crecimiento bacteriano.</div>
          </div>
        </div>
      </section>`;
  }

  // Simulador interactivo de secuencia paso a paso (LOTO, Químicos, Andamiero, Comités)
  const sequences = {
    loto: {
      title: 'Simulador de Secuencia Segura de Bloqueo (LOTO)',
      sub: 'Haz clic en los 5 pasos en el orden correcto para lograr Energía Cero.',
      steps: ['1. Notificar y apagar equipo', '2. Aislar fuente principal', '3. Colocar candado y etiqueta', '4. Liberar energía residual', '5. Verificar energía cero (0 V / 0 PSI)']
    },
    chem: {
      title: 'Simulador de Respuesta ante Fuga o Derrame Químico',
      sub: 'Activa los 4 pasos en orden correcto para proteger tu vida y la planta.',
      steps: ['1. Alertar y evacuar contra el viento', '2. Consultar FDS del producto', '3. Usar EPP adecuado (SCBA/químico)', '4. Contener y descontaminar (15 min agua si hubo contacto)']
    },
    scaffold: {
      title: 'Simulador de Inspección Previa de Andamio',
      sub: 'Verifica en orden los 4 criterios antes de autorizar la Tarjeta Verde.',
      steps: ['1. Base firme y nivelada', '2. Diagonales y estructura completas', '3. Plataformas, barandas y rodapié', '4. Firmar Tarjeta Verde del turno']
    },
    mgmt: {
      title: 'Simulador de Gestión Efectiva del Comité',
      sub: 'Activa en orden las 4 etapas para cerrar un caso o hallazgo con trazabilidad.',
      steps: ['1. Recibir / identificar con reserva y rigor', '2. Analizar causas o escuchar con imparcialidad', '3. Acordar plan de acción con responsables', '4. Hacer seguimiento en acta hasta el cierre']
    }
  };
  const seq = sequences[type] || sequences.loto;

  return `
    <section class="sst-iv-card sst-sim-card" data-sim="seq" data-course="${esc(courseId)}" style="--iv-accent:#2563eb;--iv-soft:#dbeafe;--iv-dark:#1e3a8a;">
      <div class="sst-iv-head">
        <div>
          <span class="sst-iv-badge">Simulador paso a paso</span>
          <h3 class="sst-iv-title">${esc(seq.title)}</h3>
          <p class="sst-iv-sub">${esc(seq.sub)}</p>
        </div>
        <span class="sst-iv-counter ${done ? 'done' : ''}" data-sim-badge>${done ? '✓ Secuencia dominada' : `0 / ${seq.steps.length} pasos`}</span>
      </div>
      <div class="sst-seq-grid">
        ${seq.steps.map((s, i) => `<button type="button" class="sst-seq-btn" data-seq-idx="${i}">${esc(s)}</button>`).join('')}
      </div>
      <div class="sst-sim-meter" data-seq-msg aria-live="polite">Haz clic en el <strong>Paso 1</strong> para iniciar la secuencia segura.</div>
    </section>`;
}

// Tarjeta de resumen de aprendizaje ("Lo que ya dominas") + Guía de bolsillo imprimible
export function renderMasterySummary(course, st) {
  const m = getMastery(course.id);
  const readCount = (st.modulesRead || []).length;
  const totalMods = course.modules.length;
  const practiced = (st.checked || []).filter((x) => x.startsWith('practice:')).length;
  const scorePct = Math.min(100, Math.round(((readCount + practiced + (m.scene ? 1 : 0) + (m.sim ? 1 : 0)) / (totalMods * 2 + 2)) * 100));

  return `
    <section class="sst-mastery-card">
      <div class="sst-mastery-head">
        <div>
          <span class="sst-iv-badge" style="--iv-dark:#14532d;--iv-soft:#dcfce7;">Tu avance real</span>
          <h3 class="sst-iv-title">Lo que ya dominas en ${esc(course.title)}</h3>
        </div>
        <strong class="sst-mastery-pct">${scorePct} %</strong>
      </div>
      <div class="sst-mastery-badges">
        <span class="sst-mbadge ${m.scene ? 'ok' : ''}">${m.scene ? '✓' : '○'} Escena interactiva</span>
        <span class="sst-mbadge ${m.sim ? 'ok' : ''}">${m.sim ? '✓' : '○'} Simulador práctico</span>
        <span class="sst-mbadge ${readCount >= totalMods ? 'ok' : ''}">${readCount}/${totalMods} Módulos</span>
        <span class="sst-mbadge ${practiced >= totalMods ? 'ok' : ''}">${practiced}/${totalMods} Prácticas</span>
      </div>
      <details class="sst-prose-details" style="margin-top:0.75rem;">
        <summary>Abrir Guía de Bolsillo SST (reglas de oro para llevar a planta)</summary>
        <ol class="sst-pocket-list">
          ${(course.checklist || []).map((item) => `<li>${esc(item)}</li>`).join('')}
        </ol>
        <button type="button" class="iui-btn iui-btn-secondary iui-btn-sm" onclick="window.print()">Imprimir / Guardar guía</button>
      </details>
    </section>`;
}

// Conecta los eventos de todos los simuladores
export function bindSimulators(scope) {
  if (!scope) return;

  // 1. Detector LEL
  scope.querySelectorAll('[data-sim="lel"]').forEach((card) => {
    const courseId = card.dataset.course;
    const range = card.querySelector('[data-lel-range]');
    const env = card.querySelector('[data-lel-env]');
    const valEl = card.querySelector('[data-lel-val]');
    const readout = card.querySelector('[data-lel-readout]');
    const status = card.querySelector('[data-lel-status]');
    const meter = card.querySelector('[data-lel-meter]');
    const badge = card.querySelector('[data-sim-badge]');

    const update = (interacted) => {
      const v = Number(range.value);
      const isTank = env.value === 'tank';
      valEl.textContent = `${v} % LEL`;
      readout.textContent = `${v} % LEL`;
      meter.classList.remove('ok', 'warn', 'danger');
      if (v === 0) {
        meter.classList.add('ok');
        status.textContent = 'SEGURO (0 % LEL) — Apto para autorizar si se cumplen los demás controles.';
      } else if (isTank || v >= 10) {
        meter.classList.add('danger');
        status.textContent = isTank
          ? 'PROHIBIDO — En tanques y tuberías se exige 0 % LEL. Purgar, ventilar y volver a medir.'
          : 'DETENER DE INMEDIATO (≥ 10 % LEL) — Riesgo de explosión. Suspender permiso y evacuar.';
      } else {
        meter.classList.add('warn');
        status.textContent = 'ADVERTENCIA (1–9 % LEL) — Identificar fuente de vapores, ventilar y confirmar criterio del permiso.';
      }
      if (interacted) {
        setMastery(courseId, 'sim');
        if (badge) { badge.textContent = '✓ Dominado'; badge.classList.add('done'); }
      }
    };
    range?.addEventListener('input', () => update(true));
    env?.addEventListener('change', () => update(true));
  });

  // 2. Ángulo de eslingas
  scope.querySelectorAll('[data-sim="sling"]').forEach((card) => {
    const courseId = card.dataset.course;
    const range = card.querySelector('[data-sling-range]');
    const angEl = card.querySelector('[data-sling-ang]');
    const tenEl = card.querySelector('[data-sling-tension]');
    const status = card.querySelector('[data-sling-status]');
    const meter = card.querySelector('[data-sling-meter]');
    const lLine = card.querySelector('[data-sling-l]');
    const rLine = card.querySelector('[data-sling-r]');
    const badge = card.querySelector('[data-sim-badge]');

    const update = (interacted) => {
      const deg = Number(range.value);
      const rad = (deg * Math.PI) / 180;
      const tension = Math.round(1000 / (2 * Math.sin(rad)));
      const dx = Math.min(145, Math.round(91 / Math.tan(rad)));
      lLine?.setAttribute('x2', String(210 - dx));
      rLine?.setAttribute('x2', String(210 + dx));
      angEl.textContent = `${deg}°`;
      tenEl.textContent = `${tension.toLocaleString('es-CO')} kg / ramal`;
      meter.classList.remove('ok', 'warn', 'danger');
      const color = deg >= 60 ? '#16a34a' : deg >= 45 ? '#ca8a04' : '#dc2626';
      lLine?.setAttribute('stroke', color);
      rLine?.setAttribute('stroke', color);
      if (deg >= 60) {
        meter.classList.add('ok');
        status.textContent = 'Ángulo seguro (≥ 60°): tensión controlada por ramal.';
      } else if (deg >= 45) {
        meter.classList.add('warn');
        status.textContent = 'Precaución (45°–55°): la tensión aumenta; verificar capacidad de la eslinga.';
      } else {
        meter.classList.add('danger');
        status.textContent = 'PELIGRO (< 45°): la tensión supera la carga total. Usar eslingas más largas o barra separadora.';
      }
      if (interacted) {
        setMastery(courseId, 'sim');
        if (badge) { badge.textContent = '✓ Dominado'; badge.classList.add('done'); }
      }
    };
    range?.addEventListener('input', () => update(true));
  });

  // 3. Termómetro BPM
  scope.querySelectorAll('[data-sim="temp"]').forEach((card) => {
    const courseId = card.dataset.course;
    const range = card.querySelector('[data-temp-range]');
    const valEl = card.querySelector('[data-temp-val]');
    const readout = card.querySelector('[data-temp-readout]');
    const status = card.querySelector('[data-temp-status]');
    const meter = card.querySelector('[data-temp-meter]');
    const badge = card.querySelector('[data-sim-badge]');

    range?.addEventListener('input', () => {
      const t = Number(range.value);
      valEl.textContent = `${t} °C`;
      meter.classList.remove('ok', 'warn', 'danger');
      if (t <= 4) {
        meter.classList.add('ok');
        readout.textContent = `${t} °C — FRÍO SEGURO (≤ 4 °C)`;
        status.textContent = 'Cadena de frío adecuada: frena la multiplicación bacteriana.';
      } else if (t >= 60) {
        meter.classList.add('ok');
        readout.textContent = `${t} °C — CALIENTE SEGURO (≥ 60 °C)`;
        status.textContent = 'Temperatura segura de mantenimiento en caliente.';
      } else {
        meter.classList.add('danger');
        readout.textContent = `${t} °C — ZONA DE PELIGRO (5 °C – 60 °C)`;
        status.textContent = 'Riesgo alto de proliferación bacteriana. No mantener alimentos en este rango.';
      }
      setMastery(courseId, 'sim');
      if (badge) { badge.textContent = '✓ Dominado'; badge.classList.add('done'); }
    });
  });

  // 4. Secuencia paso a paso
  scope.querySelectorAll('[data-sim="seq"]').forEach((card) => {
    const courseId = card.dataset.course;
    const btns = [...card.querySelectorAll('[data-seq-idx]')];
    const msg = card.querySelector('[data-seq-msg]');
    const badge = card.querySelector('[data-sim-badge]');
    let expected = 0;

    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.seqIdx);
        msg.classList.remove('ok', 'danger');
        if (idx === expected) {
          btn.classList.add('done');
          btn.disabled = true;
          expected++;
          if (expected >= btns.length) {
            msg.classList.add('ok');
            msg.innerHTML = '<strong>¡Excelente!</strong> Completaste toda la secuencia segura en el orden correcto.';
            setMastery(courseId, 'sim');
            if (badge) { badge.textContent = '✓ Secuencia dominada'; badge.classList.add('done'); }
          } else {
            msg.classList.add('ok');
            msg.innerHTML = `<strong>✓ Correcto.</strong> Ahora selecciona el <strong>Paso ${expected + 1}</strong>.`;
            if (badge) badge.textContent = `${expected} / ${btns.length} pasos`;
          }
        } else {
          msg.classList.add('danger');
          msg.innerHTML = `<strong>⚠ Orden incorrecto.</strong> Antes de ese paso debes completar el <strong>Paso ${expected + 1}</strong>.`;
        }
      });
    });
  });
}
