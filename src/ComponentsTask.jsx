function CourseGrade() {
  return <h3>ציון הקורס: 95</h3>;
}

function FirstCourse() {
  return (
    <div>
      <h2>קורס ראשון: פיתוח צד לקוח (React)</h2>
      <CourseGrade />
    </div>
  );
}

function SecondCourse() {
  return (
    <div>
      <h2>קורס שני: מבני נתונים ואלגוריתמים</h2>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>פרטים אישיים: ישראל ישראלי, גיל 22</h1>
      <FirstCourse />
      <SecondCourse />
    </div>
  );
}