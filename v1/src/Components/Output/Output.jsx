import { useContext } from "react";
import resultFeedback from "../../Resources/Feedback/result-feedback";
import percentageFeedback from "../../Resources/Feedback/percentage-feedback";

import StudentDataContext from "../../Context/StudentContext";
import SettingsContext from "../../Context/SettingsContext";
import { random } from "nanoid";
import AppContext from "../../Context/AppContext";

const Output = () => {
  const [studentData, setStudentData] = useContext(AppContext).selected.student;
  const [settings, setSettings] = useContext(SettingsContext);

  function generateFeedback() {
    let rating;

    const result = parseFloat(studentData.result);
    if (result == 100) {
      rating = "perfect";
    } else if (result >= 90) {
      rating = "very good";
    } else if (result >= 75) {
      rating = "good";
    } else if (result >= 70) {
      rating = "barely passed";
    } else if (result >= 60) {
      rating = "barely failed";
    } else {
      rating = "failed";
    }

    const randomNumber = Math.floor(
      Math.random() * resultFeedback[rating].length
    );
    let randomFeedback = resultFeedback[rating][randomNumber];
    randomFeedback += " ";
    if (studentData.result >= 70) {
      randomFeedback += percentageFeedback["passed"][0];
    } else {
      randomFeedback += percentageFeedback["failed"][0];
    }
    randomFeedback = randomFeedback
      .replace("[naam]", studentData.name)
      .replace("[percentage]", studentData.result + "%");

    if (settings.isPeriodBeforeVacation) randomFeedback += " Fijne vakantie!";

    return randomFeedback;
  }

  return (
    <div>
      <h1>Output</h1>
      <p>{generateFeedback()}</p>
    </div>
  );
};

export default Output;
