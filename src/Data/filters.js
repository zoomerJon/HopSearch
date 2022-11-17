const filterData = [
  {
    filter: "Ubicación",
    options: ["Las Vegas", "Utah"],
  },
  {
    filter: "Demográfico",
    options: {
      Youth: [
        "Adolecentes 9-13 Años",
        "Jovenes 14-21 Años",
        "Mixtas (Jovenes)",
      ],
      Married: [
        "Matrimonios Mixtas",
        "Matrimonios (Jovene)",
        "Matrimonios Sin Hijos",
        "Matrimonios Con Hijos (Todos Años)",
        "Matrimonios Con Hijos (0-8 Años)",
        "Matrimonios Con Hijos (14-21 Años)",
      ],
      Singles: ["Mixtas (Solteros)", "Hombres Solteros", "Mujeres Solteras"],
    },
  },
  {
    filter: "Género",
    options: ["Combinados", "Mujeres", "Hombres"],
  },
  {
    filter: "Idioma",
    options: ["Bilingüe", "Inglés", "Español"],
  },
  {
    filter: "Dias",
    options: [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
    ],
  },
  {
    filter: "En Persona",
    options: ["En Persona", "En Persona Y Virtual", "Virtual "],
  },
  {
    filter: "Niños Bienvenidos",
    options: ["Niños Bienvenidos"],
  },
];

export default filterData;
