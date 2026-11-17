function CourseDetails({ courseName, grade }) {
  return (
    <div>
      <h3>שם הקורס: {courseName}</h3>
      <p>ציון: {grade}</p>
    </div>
  );
}

// קומפוננטת אב המציגה פרטים אישיים וקוראת פעמיים לקומפוננטת הילד[cite: 2]
export default function PersonDetails() {
  return (
    <div>
      <h1>פרטים אישיים</h1>
      <p>שם: דוד כהן</p>
      <p>גיל: 24</p>

      <h2>הקורסים שלי:</h2>
      <CourseDetails courseName="מבוא למדעי המחשב" grade={92} />
      <CourseDetails courseName="בסיסי נתונים" grade={88} />
    </div>
  );
}