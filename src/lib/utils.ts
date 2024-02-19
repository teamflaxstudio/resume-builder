const skills = [
  "Java",
  "Python",
  "C++",
  "Javascript",
  "Coding",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "NoSQL",
  "HTML",
  "CSS",
  "SASS",
  "LESS",
  "Bootstrap",
  "Tailwind",
  "Material-UI",
  "Ant-Design",
  "Redux",
  "MobX",
  "GraphQL",
  "REST",
  "API",
  "WebSockets",
  "Socket.io",
  "Django",
  "Flask",
  "FastAPI",
  "Spring",
  "Hibernate",
  "JPA",
  "JDBC",
  "JSP",
  "Servlet",
  "Thymeleaf",
  "Freemarker",
  "Velocity",
  "JSTL",
];

export function getRandomSkills(count: number) {
  const result: string[] = [];
  while (result.length < count) {
    const index = Math.floor(Math.random() * skills.length);

    // check if the skill is already in the result
    if (result.includes(skills[index])) {
      continue;
    }
    result.push(skills[index]);
  }

  return result;
}

export function levelToLevelString(level: number) {
  switch (level) {
    case 1:
      return "Beginner";
    case 2:
      return "Intermediate";
    case 3:
      return "Advanced";
    case 4:
      return "Expert";
    default:
      return "Novice";
  }
}
