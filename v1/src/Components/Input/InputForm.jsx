import { useContext } from "react";
import InputField from "./InputField";
import StudentContext from "../../Context/StudentContext";
import AppContext from "../../Context/AppContext";

const InputForm = () => {
  const [studentData, setStudentData] = useContext(AppContext).selected.student;
  return (
    <>
      <div>
        <h1>Input</h1>
        <h1>
          {studentData.name}: {studentData.result}
        </h1>
        <InputField label="Naam" dataTarget="name" />
        <InputField label="Resultaat" type="percentage" dataTarget="result" />
        <p>Buttons met opties</p>
      </div>
    </>
  );
};

export default InputForm;
