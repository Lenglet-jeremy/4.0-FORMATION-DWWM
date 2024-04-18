export default function OneLesson({ lesson, name }) {
  return (
    <div>
      <h2>
        {lesson.title} <span>( {lesson.content} )</span>
      </h2>
      <h3>
        Difficulty : {lesson.difficulty} | <span>{name}</span>
      </h3>
    </div>
  );
}
