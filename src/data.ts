import { VARIANT } from "../src/domain/entities/question-entity";

export const categoryList = [
  { name: "Cultura", min: 1, max: 10, tip: "La cultura Organizacional es un punto importante, debes contemplar hacer mejoras en este punto" },
  { name: "Comunicación", min: 1, max: 10, tip: "La comunicación interna vais muy bien, enhorabuena" },
  { name: "Desarrollo", min: 1, max: 10, tip: "El desarrollo y la formación de los empleados es un punto importante, debes contemplar hacer mejoras en este punto" },
  { name: "Reconocimiento", min: 1, max: 10, tip: "El reconocimiento y la retribución de los empleados es un valor a tener muy en cuenta, deberías buscar formaciones que interesen al equipo para mejorar el rendimiento" },
  { name: "Bienestar", min: 1, max: 10, tip: "El bienestar y el equilibrio entre la vida personal y profesional es un punto importante, debes contemplar hacer mejoras en este punto" },
];

export const questionList = [
  {
    questions: [
      {
        questionText: "¿Cuáles son los valores fundamentales de su empresa y cómo se reflejan en el trabajo diario?",
        options: [],
        selectedNumber: null,
        category: "Cultura",
        variant: VARIANT.TEXT_LONG,
        version: 1,
      },
      {
        questionText: "¿Cómo describiría la cultura de su empresa?",
        options: [
          { optionText: "Orientada a resultados", score: 10 },
          { optionText: "Orientada al empleado", score: 20 },
          { optionText: "Orientada al cliente", score: 5 },
          { optionText: "Orientada a la innovación", score: 25 },
        ],
        selectedNumber: null,
        variant: VARIANT.SINGLE_OPTION,
        version: 1,
      },
      {
        questionText: "¿Qué tipo de actividades se realizan en su empresa para fomentar una cultura positiva?",
        options: [
          { optionText: "Eventos de team building", score: 10 },
          { optionText: "Celebraciones de éxitos y logros", score: 5 },
          { optionText: "Charlas inspiradoras", score: 5 },
          { optionText: "Actividades de bienestar", score: 2 },
          { optionText: "Formación continua", score: 8 },
        ],
        selectedNumber: null,
        variant: VARIANT.MULTI_OPTION,
        version: 1,
      },
      {
        questionText: "En una escala de 1 a 10, ¿cuán importante diría que es la cultura de la empresa para el éxito del negocio?",
        options: [],
        selectedNumber: {
          min: 1,
          max: 10,
          multiplier: 1,
          isInverseScore: false,
        },
        variant: VARIANT.NUMERIC,
        version: 1,
      },
    ],
  },
  {
    category: "Comunicación Interna",
    questions: [
      {
        questionText: "¿Cómo se promueve la comunicación abierta y efectiva dentro de su empresa?",
        options: [],
        selectedNumber: null,
        variant: VARIANT.TEXT_LONG,
        version: 1,
      },
      {
        questionText: "¿Con qué frecuencia se realizan reuniones de equipo?",
        options: [
          { optionText: "Diariamente", score: 0 },
          { optionText: "Semanalmente", score: 0 },
          { optionText: "Mensualmente", score: 0 },
          { optionText: "Anualmente", score: 0 },
        ],
        selectedNumber: null,
        variant: VARIANT.SINGLE_OPTION,
        version: 1,
      },
      {
        questionText: "¿Qué canales de comunicación se utilizan en su empresa?",
        options: [
          { optionText: "Correo electrónico", score: 0 },
          { optionText: "Reuniones presenciales", score: 0 },
          { optionText: "Videoconferencias", score: 0 },
          { optionText: "Mensajería instantánea", score: 0 },
          { optionText: "Tablones de anuncios", score: 0 },
        ],
        selectedNumber: null,
        variant: VARIANT.MULTI_OPTION,
        version: 1,
      },
      {
        questionText: "En una escala de 1 a 10, ¿cuánto valoraría la eficacia de la comunicación interna en su empresa?",
        options: [],
        selectedNumber: {
          min: 1,
          max: 10,
          multiplier: 1,
          isInverseScore: false,
        },
        variant: VARIANT.NUMERIC,
        version: 1,
      },
    ],
  },
  {
    category: "Desarrollo y Formación",
    questions: [
      {
        questionText: "¿Cómo se fomenta el desarrollo y la formación continua de los empleados en su empresa?",
        options: [],
        selectedNumber: null,
        variant: VARIANT.TEXT_LONG,
        version: 1,
      },
      {
        questionText: "¿Con qué frecuencia se ofrecen oportunidades de formación y desarrollo a los empleados?",
        options: [
          { optionText: "Mensualmente", score: 0 },
          { optionText: "Trimestralmente", score: 0 },
          { optionText: "Semestralmente", score: 0 },
          { optionText: "Anualmente", score: 0 },
        ],
        selectedNumber: null,
        variant: VARIANT.SINGLE_OPTION,
        version: 1,
      },
      {
        questionText: "¿Qué tipos de programas de formación y desarrollo se ofrecen?",
        options: [
          { optionText: "Cursos en línea", score: 0 },
          { optionText: "Cursos presenciales", score: 0 },
          { optionText: "Programas de mentoría", score: 0 },
          { optionText: "Conferencias y seminarios", score: 0 },
          { optionText: "Programas de rotación", score: 0 },
        ],
        selectedNumber: null,
        variant: VARIANT.MULTI_OPTION,
        version: 1,
      },
      {
        questionText: "En una escala de 1 a 10, ¿cómo calificaría el compromiso de su empresa con el desarrollo de los empleados?",
        options: [],
        selectedNumber: {
          min: 1,
          max: 10,
          multiplier: 1,
          isInverseScore: false,
        },
        variant: VARIANT.NUMERIC,
        version: 1,
      },
    ],
  },
  {
    category: "Reconocimiento y Retribución",
    questions: [
      {
        questionText: "¿Cómo se reconocen y recompensan los logros y el esfuerzo de los empleados en su empresa?",
        options: [],
        selectedNumber: null,
        variant: VARIANT.TEXT_SHORT,
        version: 1,
      },
      {
        questionText: "¿Con qué frecuencia se reconocen los logros de los empleados?",
        options: [
          { optionText: "Tras cada proyecto o tarea", score: 0 },
          { optionText: "Mensualmente", score: 0 },
          { optionText: "Trimestralmente", score: 0 },
          { optionText: "Anualmente", score: 0 },
        ],
        selectedNumber: null,
        variant: VARIANT.SINGLE_OPTION,
        version: 1,
      },
      {
        questionText: "¿Qué formas de reconocimiento y recompensa se utilizan en su empresa?",
        options: [
          { optionText: "Bonificaciones económicas", score: 0 },
          { optionText: "Ascensos", score: 0 },
          { optionText: "Reconocimiento público", score: 0 },
          { optionText: "Días de descanso extra", score: 0 },
          { optionText: "Regalos o premios", score: 0 },
        ],
        selectedNumber: null,
        variant: VARIANT.MULTI_OPTION,
        version: 1,
      },
      {
        questionText: "En una escala de 1 a 10, ¿cómo calificaría la equidad de la retribución en su empresa?",
        options: [],
        selectedNumber: {
          min: 1,
          max: 10,
          multiplier: 1,
          isInverseScore: false,
        },
        variant: VARIANT.NUMERIC,
        version: 1,
      },
    ],
  },
  {
    category: "Bienestar y Equilibrio Vida-Trabajo",
    questions: [
      {
        questionText: "¿Qué iniciativas o programas tiene su empresa para promover el bienestar de los empleados y el equilibrio entre la vida personal y profesional?",
        options: [],
        selectedNumber: null,
        variant: VARIANT.TEXT_LONG,
        version: 1,
      },
      {
        questionText: "¿Se permite el trabajo flexible en su empresa?",
        options: [
          { optionText: "Sí, siempre", score: 0 },
          { optionText: "Sí, a veces", score: 0 },
          { optionText: "No, pero se está considerando", score: 0 },
          { optionText: "No", score: 0 },
        ],
        selectedNumber: null,
        variant: VARIANT.SINGLE_OPTION,
        version: 1,
      },
      {
        questionText: "¿Qué beneficios se ofrecen para promover el bienestar de los empleados?",
        options: [
          { optionText: "Programas de salud y bienestar", score: 0 },
          { optionText: "Flexibilidad de horario", score: 0 },
          { optionText: "Opciones de trabajo remoto", score: 0 },
          { optionText: "Actividades de team building", score: 0 },
          { optionText: "Programas de asistencia al empleado", score: 0 },
        ],
        selectedNumber: null,
        variant: VARIANT.MULTI_OPTION,
        version: 1,
      },
      {
        questionText: "En una escala de 1 a 10, ¿cómo calificaría el equilibrio entre la vida personal y profesional en su empresa?",
        options: [],
        selectedNumber: {
          min: 1,
          max: 10,
          multiplier: 1,
          isInverseScore: false,
        },
        variant: VARIANT.NUMERIC,
        version: 1,
      },
    ],
  },
];
