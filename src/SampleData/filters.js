const filterData = [
  {
    filter: "Campus",
    options: ["Las Vegas", "Utah"],
  },
  {
    filter: "Demographic",
    options: {
      Youth: ["Adolescents (9-13)", "Youth (14-21)", "All Youth"],
      Married: [
        "Married Couples (Mixed)",
        "Married Couples (Young Adults)",
        "Married Without Children",
        "Married With Children (All ages)",
        "Married With Children (0-8 years)",
        "Married With Children (14-21 years)",
      ],
      Singles: ["Combined Singles", "Single Men", "Single Women"],
    },
  },
  {
    filter: "Gender",
    options: ["Combined", "Female", "Male"],
  },
  {
    filter: "Language",
    options: ["Bilingual", "English", "Spanish"],
  },
  {
    filter: "Days",
    options: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  {
    filter: "In Person",
    options: ["In-Person", "In-Person & Virtual", "Virtual "],
  },
  {
    filter: "Childcare",
    options: ["Childcare"],
  },
];

export default filterData;
