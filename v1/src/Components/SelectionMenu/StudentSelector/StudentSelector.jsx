import { nanoid } from "nanoid";
import StudentSelectorElement from "./StudentSelectorElement";
import { useContext, useEffect } from "react";
import AppContext from "../../../Context/AppContext";

const StudentSelector = (props) => {
  const [activeStudent, setActiveStudent] =
    useContext(AppContext).selected.student;
  const [activeGroup, setActiveGroup] = useContext(AppContext).selected.group;

  function setCurrentStudent(student) {
    const current = studentElements.findIndex(
      (studentSelectorElement) =>
        studentSelectorElement.props.student === student
    );
    setActiveStudent(activeGroup.students[current]);
  }

  // Sets the current student to the first in the group when the group changes.
  useEffect(() => {
    setCurrentStudent(activeGroup.students[0]);
  }, [activeGroup]);

  // Creates the list of clickable elements containing the students' name.
  const studentElements = activeGroup.students.map((student, index) => (
    <StudentSelectorElement
      student={student}
      selected={student === activeStudent ? true : false}
      key={nanoid()}
      id={`student-selector-element-${student.id}`}
      handleClick={setCurrentStudent}
    />
  ));

  return <div id="student-selector">{studentElements}</div>;
};

export default StudentSelector;
