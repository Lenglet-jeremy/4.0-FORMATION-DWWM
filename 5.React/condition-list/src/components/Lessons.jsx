import OneLesson from "./OneLesson";

export default function Lessons({ name }) {
  const allLessons = [
    { title: "HTML", difficulty: 2, content: "Langage de structure" },
    { title: "CSS", difficulty: 4.5, content: "Langage de style" },
    {
      title: "JavaScript",
      difficulty: 5,
      content: "Langage dynamique de script",
    },
    { title: "SQL", difficulty: 3.5, content: "Langage de requête" },
    { title: "React", difficulty: 4, content: "Librairie Front-End" },
    { title: "MCD", difficulty: 4, content: "Création de modéles de données" },
  ];

  return (
    <div style={{ width: "700px" }}>
      <h1 className="mb-20">Lessons</h1>
      {allLessons
        .filter((lesson) => lesson.difficulty > 3.5)
        .map((lesson, index) => (
          <OneLesson key={lesson.title} lesson={lesson} name={name} />
        ))}
    </div>
  );
}
