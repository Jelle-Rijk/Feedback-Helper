import { useContext, useEffect } from "react";
import AppContext from "../../Context/AppContext";
import { nanoid } from "nanoid";

const InputField = (props) => {
  const [studentData, setStudentData] = useContext(AppContext).selected.student;

  function handleChange(value) {
    if (props.type === "percentage") {
      if (!isNumberValid(value) && value != "") {
        value = 0;
        alert("Please insert a number between 0 and 100.");
      }
      if (isNumberValid(value)) {
        value > 100 ? (value = 100) : (value = value.replace(/^0+/, "")); // Removes leading zeroes.
      }
    }
    setStudentData((prevData) => ({
      ...prevData,
      [props.dataTarget]: value,
    }));
  }

  function isNumberValid(input) {
    const decimalRegex = /^\d+([.,]\d+)?$/;
    if (decimalRegex.test(input)) {
      return true;
    }
    return false;
  }

  return (
    <div className="input-field">
      <label>
        {props.label}:
        <input
          id={nanoid()}
          value={studentData[props.dataTarget]}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        ></input>
      </label>
    </div>
  );
};

export default InputField;
