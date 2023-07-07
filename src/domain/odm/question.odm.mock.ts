import { Question, VARIANT } from "../entities/question-entity";
import { Category } from "../entities/category-entity";

const categoryMock = [
  new Category({
    name: "Cultura",
    mark: [
      {
        name: "No hay menos nota que esto y dá gracias.",
        min: 0,
        max: 10,
        tip: "Fracaso absoluto, no hay ayuda posible, dedícate a otra cosa...",
      },
    ],
  }),
  new Category({
    name: "Comunicación",
    mark: [
      {
        name: "Has puesto bien el nombre, y con sus tildes y todo!",
        min: 0,
        max: 10,
        tip: "Quítale el plástico al libro y disfruta del olor a nuevo...",
      },
    ],
  }),
  new Category({
    name: "Desarrollo",
    mark: [
      {
        name: "En la media",
        min: 0,
        max: 10,
        tip: "No está mal, hay bastantes cosas que mejorar, pero este es el camino",
      },
    ],
  }),
  new Category({
    name: "Reconocimiento",
    mark: [
      {
        name: "Muy bien!",
        min: 0,
        max: 10,
        tip: "Se nota que te tomas las cosas en serio, sigue así!",
      },
    ],
  }),
  new Category({
    name: "Bienestar",
    mark: [
      {
        name: "Rozando la perfección!",
        min: 0,
        max: 10,
        tip: "Claro ejemplo de como se hacen las cosas, pulir unos detallitos más y te vienes a dar charlas!",
      },
    ],
  }),
];

function getCurrentVersionQuestions(): any {
  console.log("entramos en getCurrentVersionQuestions");
  const prueba = new Question([
    {
      questionText: "¿Cuáles son los valores fundamentales de su empresa y cómo se reflejan en el trabajo diario?",
      options: [],
      category: categoryMock[0],
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
      category: categoryMock[1],
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
      category: categoryMock[2],
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
      category: categoryMock[3],
      variant: VARIANT.NUMERIC,
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
      category: categoryMock[4],
      variant: VARIANT.MULTI_OPTION,
      version: 1,
    },
  ]);
  console.log(prueba);
  return prueba;
}

export const questionOdmMock = {
  getCurrentVersionQuestions,
};
