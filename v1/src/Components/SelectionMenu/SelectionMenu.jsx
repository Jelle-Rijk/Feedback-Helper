import { useContext, useEffect, useState } from "react";
import "./SelectionMenu.css";

import StudentSelectionContext from "../../Context/StudentSelectionContext";
import GroupSelector from "./GroupSelector/GroupSelector";
import StudentSelector from "./StudentSelector/StudentSelector";
import AppContext from "../../Context/AppContext";

const SelectionMenu = (props) => {
  const [activeGroup, setActiveGroup] = useContext(AppContext).selected.group;
  const [activeStudent, setActiveStudent] =
    useContext(AppContext).selected.student;
  const [groupData, setGroupData] = useContext(AppContext).data.groups;

  return (
    <div id="selectionmenu">
      <GroupSelector />
      <StudentSelector />
    </div>
  );
};

export default SelectionMenu;
