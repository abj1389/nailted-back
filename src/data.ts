import { IQuestionCreate, VARIANT } from "../src/domain/entities/question-entity";
import { ICategory } from "./domain/entities/category-entity";

export const globalReecommendationList = [
  { name: "Mal", min: 1, max: 25, tip: "Los resultados del formulario indican que existe un problema significativo con la cultura empresarial en vuestra organización. Se expresan sentimientos de insatisfacción, desmotivación y desapego. Se destaca una falta de comunicación efectiva y apoyo al personal. Esto sugiere que debeis tomar medidas inmediatas para mejorar la situación, promoviendo una cultura más inclusiva, colaborativa y abierta." },
  { name: "Regular", min: 26, max: 50, tip: "Los resultados del formulario sugieren una cultura empresarial que, aunque no es completamente insatisfactoria, requiere atención en varios aspectos. Se refleja una falta de reconocimiento por el trabajo, y el equilibrio entre la vida laboral y personal parece ser un problema. Aunque se percibe un respeto generalizado, es esencial que abordemos estos problemas para mejorar la cultura empresarial." },
  { name: "Bien", min: 51, max: 75, tip: "Los resultados del formulario muestran que la cultura empresarial es apreciada por los empleados, aunque todavía hay áreas de mejora. Se aprecia una buena comunicación, pero algunos empleados expresan preocupaciones sobre la falta de oportunidades de desarrollo personal y profesional. Necesitais trabajar en estos aspectos para mejorar la satisfacción y motivación de todos en la empresa." },
  { name: "Excelente", min: 76, max: 100, tip: "Los resultados del formulario reflejan una cultura empresarial excepcionalmente sólida y positiva en vuestra organización. La encuesta muestra que se valoran la transparencia, el respeto mutuo, el reconocimiento del esfuerzo y la promoción de un equilibrio saludable entre el trabajo y la vida personal. Esta información indica que estáis en un camino acertado, sin embargo, debéis seguir atentos para mantener y mejorar aún más vuestra cultura empresarial." },
];

export const categoryList = [
  {
    name: "Cultura",
    mark: [
      { name: "Mal", min: 1, max: 25, tip: "Falta de alineación entre los valores declarados y las acciones reales. Contradicciones y inconsistencias notables en los comportamientos y decisiones de la organización." },
      { name: "Regular", min: 26, max: 50, tip: "Valores y creencias compartidos básicos. Normas y políticas establecidas, pero sin una fuerte práctica en la cultura organizacional." },
      { name: "Bien", min: 51, max: 75, tip: "Valores y creencias compartidos en acción. Oportunidades para participación y retroalimentación, pero aún áreas de mejora en términos de alineación y transparencia." },
      { name: "Excelente", min: 76, max: 100, tip: "Identificación sólida de los empleados con los valores organizacionales. Cultura que se refleja en acciones y decisiones coherentes. Participación activa de los empleados y oportunidades de crecimiento y desarrollo." },
    ],
  },
  {
    name: "Comunicación",
    mark: [
      { name: "Mal", min: 1, max: 25, tip: "Falta o deficiente comunicación interna. Falta de canales claros y retroalimentación limitada. Secretismo y falta de colaboración." },
      { name: "Regular", min: 26, max: 50, tip: "Comunicación efectiva y basada en transparencia. Uso de múltiples canales, fomento de la retroalimentación y resolución de problemas de comunicación." },
      { name: "Bien", min: 51, max: 75, tip: "Falta de alineación entre los valores declarados y las acciones reales. Contradicciones y inconsistencias notables en los comportamientos y decisiones de la organización." },
      { name: "Excelente", min: 76, max: 100, tip: "Comunicación interna sólida y efectiva en toda la organización. Comunicación abierta, bidireccional y fomento del intercambio de ideas." },
    ],
  },
  {
    name: "Desarrollo",
    mark: [
      { name: "Mal", min: 1, max: 25, tip: "Identifica si no hay programas de desarrollo y formación disponibles, o si existe una falta de inversión en el crecimiento y la capacitación de los empleados." },
      { name: "Regular", min: 26, max: 50, tip: "Evalúa si existen programas de desarrollo y formación básicos, pero que no están adaptados a las necesidades individuales y a las metas profesionales de los empleados." },
      { name: "Bien", min: 51, max: 75, tip: "Analiza si se brindan oportunidades de desarrollo y formación alineadas con las necesidades y aspiraciones de los empleados. Sin embargo, puede haber áreas en las que se pueda mejorar, como la personalización de los planes de desarrollo y el acceso a recursos adicionales." },
      { name: "Excelente", min: 76, max: 100, tip: "Observa si se ofrecen programas de desarrollo y formación integrales y personalizados que ayudan a los empleados a alcanzar sus metas profesionales. Se promueve la adquisición continua de conocimientos y habilidades, y se brindan oportunidades de crecimiento y avance dentro de la organización." },
    ],
  },
  {
    name: "Reconocimiento",
    mark: [
      { name: "Mal", min: 1, max: 25, tip: " Identifica si no hay un sistema de reconocimiento o si existe una falta de retribución justa y equitativa por el desempeño y las contribuciones de los empleados." },
      { name: "Regular", min: 26, max: 50, tip: "Evalúa si hay un sistema de reconocimiento básico, pero con deficiencias en términos de consistencia y equidad. También considera si la retribución es adecuada, pero sin incentivos o programas de recompensa adicionales." },
      { name: "Bien", min: 51, max: 75, tip: "Analiza si existe un sistema sólido de reconocimiento y retribución que valora y premia el desempeño y las contribuciones de los empleados. Sin embargo, puede haber áreas en las que se pueda mejorar, como la transparencia en los criterios de reconocimiento y la evaluación del desempeño." },
      { name: "Excelente", min: 76, max: 100, tip: "Observa si se tiene un sistema de reconocimiento integral y equitativo, con retribución competitiva y beneficios que motivan y recompensan a los empleados de manera justa. Se valora y celebra el éxito individual y colectivo, y se promueve un ambiente de trabajo gratificante." },
    ],
  },
  {
    name: "Bienestar",
    mark: [
      { name: "Mal", min: 1, max: 25, tip: " Identifica si no se promueve el bienestar y se descuida el equilibrio entre la vida personal y profesional de los empleados, con altos niveles de estrés y falta de apoyo en el manejo de la carga laboral." },
      { name: "Regular", min: 26, max: 50, tip: "Evalúa si existen algunas iniciativas para promover el bienestar y el equilibrio vida-trabajo, pero que no se implementan de manera integral o no llegan a todos los empleados." },
      { name: "Bien", min: 51, max: 75, tip: "Analiza si se ofrecen programas y políticas sólidas de bienestar y equilibrio vida-trabajo, pero que aún podrían mejorar en términos de accesibilidad, flexibilidad y apoyo personalizado." },
      { name: "Excelente", min: 76, max: 100, tip: "Observa si se promueve activamente el bienestar de los empleados y se fomenta un equilibrio saludable entre la vida personal y profesional. Se brindan programas integrales de bienestar, se fomenta la flexibilidad laboral y se promueven políticas que respalden el equilibrio vida-trabajo de manera efectiva." },
    ],
  },
];

export const questionList: IQuestionCreate[] = [
  {
    questionText: "¿Cuáles son los valores centrales de tu organización?",
    options: [
      { optionText: "Integridad", score: 1 },
      { optionText: "Innovación", score: 5 },
      { optionText: "Responsabilidad", score: 7 },
      { optionText: "Respeto", score: 7 },
    ],
    category: "64ac9983328090845059d8a8" as unknown as ICategory,
    variant: VARIANT.MULTI_OPTION,
    version: 1,
  },
  {
    questionText: "¿Crees que la organización apoya tu desarrollo personal?",
    options: [
      { optionText: "Si", score: 10 },
      { optionText: "No", score: 1 },
    ],
    category: "64ac9983328090845059d8a8" as unknown as ICategory,
    variant: VARIANT.SINGLE_OPTION,
    version: 1,
  },
  {
    questionText: "¿Cuál es el nivel de compromiso en tu organización?",
    selectedNumber: {
      min: 1,
      max: 100,
      multiplier: 0o1,
      isInverseScore: false,
    },
    category: "64ac9983328090845059d8a8" as unknown as ICategory,
    variant: VARIANT.NUMERIC,
    version: 1,
  },
  {
    questionText: "Describe la cultura de tu organización en pocas palabras.",
    category: "64ac9983328090845059d8a8" as unknown as ICategory,
    variant: VARIANT.TEXT_SHORT,
    version: 1,
  },
  {
    questionText: "¿Cómo describirías la comunicación en tu equipo?",
    options: [
      { optionText: "Excelente", score: 10 },
      { optionText: "Buena", score: 7 },
      { optionText: "Puede mejorar", score: 4 },
      { optionText: "Mala", score: 1 },
    ],
    category: "64ac9983328090845059d8ad" as unknown as ICategory,
    variant: VARIANT.SINGLE_OPTION,
    version: 1,
  },
  {
    questionText: "¿Con qué frecuencia te comunicas con tus superiores?",
    options: [
      { optionText: "Diariamente", score: 10 },
      { optionText: "Semanalmente", score: 7 },
      { optionText: "Mensualmente", score: 4 },
      { optionText: "Raramente", score: 1 },
    ],
    category: "64ac9983328090845059d8ad" as unknown as ICategory,
    variant: VARIANT.SINGLE_OPTION,
    version: 1,
  },
  {
    questionText: "¿Sientes que tus opiniones y sugerencias son tomadas en cuenta?",
    options: [
      { optionText: "Siempre", score: 10 },
      { optionText: "A veces", score: 7 },
      { optionText: "Raramente", score: 3 },
      { optionText: "Nunca", score: 1 },
    ],
    category: "64ac9983328090845059d8ad" as unknown as ICategory,
    variant: VARIANT.SINGLE_OPTION,
    version: 1,
  },
  {
    questionText: "Describe la comunicación con tus colegas en una frase.",
    category: "64ac9983328090845059d8ad" as unknown as ICategory,
    variant: VARIANT.TEXT_SHORT,
    version: 1,
  },
  {
    questionText: "¿Cómo valorarías las oportunidades de formación y desarrollo en tu organización?",
    selectedNumber: {
      min: 1,
      max: 100,
      multiplier: 0o1,
      isInverseScore: false,
    },
    category: "64ac9983328090845059d8b2" as unknown as ICategory,
    variant: VARIANT.NUMERIC,
    version: 1,
  },
  {
    questionText: "¿Se te ha proporcionado suficiente formación para realizar tu trabajo de manera efectiva?",
    options: [
      { optionText: "Si", score: 5 },
      { optionText: "No", score: 1 },
    ],
    category: "64ac9983328090845059d8b2" as unknown as ICategory,
    variant: VARIANT.SINGLE_OPTION,
    version: 1,
  },
  {
    questionText: "¿Qué áreas crees que necesitan más formación en tu organización?",
    category: "64ac9983328090845059d8b2" as unknown as ICategory,
    variant: VARIANT.TEXT_SHORT,
    version: 1,
  },
  {
    questionText: "¿Qué tipo de formación te gustaría recibir para ayudarte en tu desarrollo profesional?",
    category: "64ac9983328090845059d8b2" as unknown as ICategory,
    variant: VARIANT.TEXT_LONG,
    version: 1,
  },
  {
    questionText: "¿Te sientes valorado en tu trabajo?",
    options: [
      { optionText: "Siempre", score: 10 },
      { optionText: "A veces", score: 7 },
      { optionText: "Raramente", score: 3 },
      { optionText: "Nunca", score: 1 },
    ],
    category: "64ac9983328090845059d8b7" as unknown as ICategory,
    variant: VARIANT.SINGLE_OPTION,
    version: 1,
  },
  {
    questionText: "¿Cómo calificarías tu compensación total (salario, beneficios, bonos) en comparación con la industria?",
    selectedNumber: {
      min: 1,
      max: 10,
      multiplier: 1,
      isInverseScore: false,
    },
    category: "64ac9983328090845059d8b7" as unknown as ICategory,
    variant: VARIANT.NUMERIC,
    version: 1,
  },
  {
    questionText: "¿Crees que la empresa reconoce y recompensa el buen rendimiento de manera justa?",
    options: [
      { optionText: "Si", score: 10 },
      { optionText: "No", score: 1 },
    ],
    category: "64ac9983328090845059d8b7" as unknown as ICategory,
    variant: VARIANT.SINGLE_OPTION,
    version: 1,
  },
  {
    questionText: "Describe una situación en la que te sentiste valorado por tu trabajo.",
    category: "64ac9983328090845059d8b7" as unknown as ICategory,
    variant: VARIANT.TEXT_LONG,
    version: 1,
  },
  {
    questionText: "¿Crees que la empresa fomenta un buen equilibrio entre la vida laboral y personal?",
    options: [
      { optionText: "Siempre", score: 10 },
      { optionText: "A veces", score: 7 },
      { optionText: "Raramente", score: 3 },
      { optionText: "Nunca", score: 1 },
    ],
    category: "64ac9983328090845059d8bc" as unknown as ICategory,
    variant: VARIANT.SINGLE_OPTION,
    version: 1,
  },
  {
    questionText: "¿Cómo valorarías tu equilibrio entre la vida laboral y personal?",
    selectedNumber: {
      min: 1,
      max: 100,
      multiplier: 0o1,
      isInverseScore: false,
    },
    category: "64ac9983328090845059d8bc" as unknown as ICategory,
    variant: VARIANT.NUMERIC,
    version: 1,
  },
  {
    questionText: "¿La empresa ofrece suficientes vacaciones y tiempo libre?",
    options: [
      { optionText: "Si", score: 10 },
      { optionText: "No", score: 2 },
    ],
    category: "64ac9983328090845059d8bc" as unknown as ICategory,
    variant: VARIANT.SINGLE_OPTION,
    version: 1,
  },
  {
    questionText: "¿Qué políticas o beneficios crees que ayudarían a mejorar el equilibrio entre la vida laboral y personal en la empresa?",
    category: "64ac9983328090845059d8bc" as unknown as ICategory,
    variant: VARIANT.TEXT_LONG,
    version: 1,
  },
  {
    questionText: "¿Cuáles son los valores fundamentales de su empresa y cómo se reflejan en el trabajo diario?",
    category: "64ac9983328090845059d8a8" as unknown as ICategory,
    variant: VARIANT.TEXT_LONG,
    version: 2,
  },
  {
    questionText: "¿Cómo describiría la cultura de su empresa?",
    options: [
      { optionText: "Orientada a resultados", score: 3 },
      { optionText: "Orientada al empleado", score: 10 },
      { optionText: "Orientada al cliente", score: 7 },
      { optionText: "Orientada a la innovación", score: 5 },
    ],
    category: "64ac9983328090845059d8a8" as unknown as ICategory,
    variant: VARIANT.SINGLE_OPTION,
    version: 2,
  },
  {
    questionText: "¿Qué tipo de actividades se realizan en su empresa para fomentar una cultura positiva?",
    options: [
      { optionText: "Eventos de team building", score: 10 },
      { optionText: "Celebraciones de éxitos y logros", score: 5 },
      { optionText: "Charlas inspiradoras", score: 5 },
      { optionText: "Formación continua", score: 8 },
    ],
    category: "64ac9983328090845059d8a8" as unknown as ICategory,
    variant: VARIANT.MULTI_OPTION,
    version: 2,
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
    category: "64ac9983328090845059d8a8" as unknown as ICategory,
    variant: VARIANT.NUMERIC,
    version: 2,
  },
  {
    questionText: "¿Cómo se promueve la comunicación abierta y efectiva dentro de su empresa?",
    category: "64ac9983328090845059d8ad" as unknown as ICategory,
    variant: VARIANT.TEXT_LONG,
    version: 2,
  },
  {
    questionText: "¿Con qué frecuencia se realizan reuniones de equipo?",
    options: [
      { optionText: "Diariamente", score: 10 },
      { optionText: "Semanalmente", score: 7 },
      { optionText: "Mensualmente", score: 3 },
      { optionText: "Anualmente", score: 1 },
    ],
    category: "64ac9983328090845059d8ad" as unknown as ICategory,
    variant: VARIANT.SINGLE_OPTION,
    version: 2,
  },
  {
    questionText: "¿Qué canales de comunicación se utilizan en su empresa?",
    options: [
      { optionText: "Correo electrónico", score: 5 },
      { optionText: "Reuniones presenciales", score: 7 },
      { optionText: "Videoconferencias", score: 7 },
      { optionText: "Mensajería instantánea", score: 4 },
    ],
    category: "64ac9983328090845059d8ad" as unknown as ICategory,
    variant: VARIANT.MULTI_OPTION,
    version: 2,
  },
  {
    questionText: "En una escala de 1 a 10, ¿cuánto valoraría la eficacia de la comunicación interna en su empresa?",
    options: [],
    selectedNumber: {
      min: 1,
      max: 100,
      multiplier: 1,
      isInverseScore: false,
    },
    category: "64ac9983328090845059d8ad" as unknown as ICategory,
    variant: VARIANT.NUMERIC,
    version: 2,
  },
  {
    questionText: "¿Cómo se fomenta el desarrollo y la formación continua de los empleados en su empresa?",
    category: "64ac9983328090845059d8b2" as unknown as ICategory,
    variant: VARIANT.TEXT_LONG,
    version: 2,
  },
  {
    questionText: "¿Con qué frecuencia se ofrecen oportunidades de formación y desarrollo a los empleados?",
    options: [
      { optionText: "Mensualmente", score: 10 },
      { optionText: "Trimestralmente", score: 7 },
      { optionText: "Semestralmente", score: 5 },
      { optionText: "Anualmente", score: 3 },
    ],
    category: "64ac9983328090845059d8b2" as unknown as ICategory,
    variant: VARIANT.SINGLE_OPTION,
    version: 2,
  },
  {
    questionText: "¿Qué tipos de programas de formación y desarrollo se ofrecen?",
    options: [
      { optionText: "Cursos en línea", score: 5 },
      { optionText: "Cursos presenciales", score: 7 },
      { optionText: "Conferencias y seminarios", score: 9 },
      { optionText: "Programas de rotación", score: 4 },
    ],
    category: "64ac9983328090845059d8b2" as unknown as ICategory,
    variant: VARIANT.MULTI_OPTION,
    version: 2,
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
    category: "64ac9983328090845059d8b2" as unknown as ICategory,
    variant: VARIANT.NUMERIC,
    version: 2,
  },
  {
    questionText: "¿Cómo se reconocen y recompensan los logros y el esfuerzo de los empleados en su empresa?",
    options: [],
    category: "64ac9983328090845059d8b7" as unknown as ICategory,
    variant: VARIANT.TEXT_SHORT,
    version: 2,
  },
  {
    questionText: "¿Con qué frecuencia se reconocen los logros de los empleados?",
    options: [
      { optionText: "Tras cada proyecto o tarea", score: 10 },
      { optionText: "Mensualmente", score: 7 },
      { optionText: "Trimestralmente", score: 3 },
      { optionText: "Anualmente", score: 1 },
    ],
    category: "64ac9983328090845059d8b7" as unknown as ICategory,
    variant: VARIANT.SINGLE_OPTION,
    version: 2,
  },
  {
    questionText: "¿Qué formas de reconocimiento y recompensa se utilizan en su empresa?",
    options: [
      { optionText: "Bonificaciones económicas", score: 8 },
      { optionText: "Ascensos", score: 10 },
      { optionText: "Reconocimiento público", score: 7 },
      { optionText: "Días de descanso extra", score: 5 },
    ],
    category: "64ac9983328090845059d8b7" as unknown as ICategory,
    variant: VARIANT.MULTI_OPTION,
    version: 2,
  },
  {
    questionText: "En una escala de 1 a 10, ¿cómo calificaría la equidad de la retribución en su empresa?",
    options: [],
    selectedNumber: {
      min: 1,
      max: 100,
      multiplier: 1,
      isInverseScore: false,
    },
    category: "64ac9983328090845059d8b7" as unknown as ICategory,
    variant: VARIANT.NUMERIC,
    version: 2,
  },
  {
    questionText: "¿Qué iniciativas o programas tiene su empresa para promover el bienestar de los empleados y el equilibrio entre la vida personal y profesional?",
    options: [],
    category: "64ac9983328090845059d8bc" as unknown as ICategory,
    variant: VARIANT.TEXT_LONG,
    version: 2,
  },
  {
    questionText: "¿Se permite el trabajo flexible en su empresa?",
    options: [
      { optionText: "Sí, siempre", score: 10 },
      { optionText: "Sí, a veces", score: 7 },
      { optionText: "No, pero se está considerando", score: 5 },
      { optionText: "No", score: 2 },
    ],
    category: "64ac9983328090845059d8bc" as unknown as ICategory,
    variant: VARIANT.SINGLE_OPTION,
    version: 2,
  },
  {
    questionText: "¿Qué beneficios se ofrecen para promover el bienestar de los empleados?",
    options: [
      { optionText: "Programas de salud y bienestar", score: 5 },
      { optionText: "Flexibilidad de horario", score: 3 },
      { optionText: "Actividades de team building", score: 7 },
      { optionText: "Programas de asistencia al empleado", score: 8 },
    ],
    category: "64ac9983328090845059d8bc" as unknown as ICategory,
    variant: VARIANT.MULTI_OPTION,
    version: 2,
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
    category: "64ac9983328090845059d8bc" as unknown as ICategory,
    variant: VARIANT.NUMERIC,
    version: 2,
  },
];
