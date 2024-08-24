import { useState } from "react";
import "./App.css";

import SelectionMenu from "./Components/SelectionMenu/SelectionMenu";
import InputForm from "./Components/Input/InputForm";
import Output from "./Components/Output/Output";
import Settings from "./Components/Settings/Settings";

import AppContext from "./Context/AppContext";
import SettingsContext from "./Context/SettingsContext";

const App = () => {
  const [groupData, setGroupData] = useState([
    {
      id: 0,
      name: "Hi",
      students: [
        { id: 0, name: "Mark", result: 95.3 },
        { id: 1, name: "Lucy", result: 60.8 },
        {
          id: 2,
          name: "Shawnee",
          result: 100,
        },
        { id: 3, name: "Harry", result: 40 },
      ],
    },
    {
      id: 1,
      name: "There",
      students: [
        { id: 0, name: "Jantje", result: 85.2 },
        { id: 1, name: "Paul", result: 69 },
        { id: 2, name: "Marie-Jeanne", result: 4.2 },
      ],
    },
  ]);
  const [activeGroup, setActiveGroup] = useState(groupData[0]);
  const [studentData, setStudentData] = useState({});

  const [settings, setSettings] = useState({
    period: 1,
    passingThreshold: 70,
    isPeriodBeforeVacation: false,
  });

  const appData = {
    data: {
      groups: [groupData, setGroupData],
    },
    selected: {
      student: [studentData, setStudentData],
      group: [activeGroup, setActiveGroup],
    },
    settings: [settings, setSettings],
  };

  return (
    <>
      <AppContext.Provider value={appData}>
        <SettingsContext.Provider value={[settings, setSettings]}>
          <header>
            <h1>Feedback Help</h1>
          </header>
          <main>
            <SelectionMenu />
            <InputForm />
            <Output />
          </main>
          <footer>
            <Settings />
          </footer>
        </SettingsContext.Provider>
      </AppContext.Provider>
    </>
  );
};

export default App;
