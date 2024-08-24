import { useState } from "react";

const StudentSelectorElement = (props) => {
  const styleColour = props.selected ? "white" : "lightgray";

  return (
    <div
      className="student-selector-element"
      style={{ backgroundColor: styleColour }}
      onClick={(e) => {
        props.handleClick(props.student);
      }}
    >
      {props.student.name}
    </div>
  );
};

export default StudentSelectorElement;
