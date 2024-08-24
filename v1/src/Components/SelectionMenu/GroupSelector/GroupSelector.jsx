import { useContext, useState } from "react";
import { nanoid } from "nanoid";
import AppContext from "../../../Context/AppContext";

const GroupSelector = (props) => {
  const [groupData, setGroupData] = useContext(AppContext).data.groups;
  const [activeGroup, setActiveGroup] = useContext(AppContext).selected.group;

  const [selected, setSelected] = useState(activeGroup.id);

  function selectGroup(optionValue) {
    setSelected(optionValue);
    const index = groupData.findIndex((el) => el.id == optionValue);
    setActiveGroup(groupData[index]);
  }

  return (
    <>
      <div id="group-selector">
        <select value={selected} onChange={(e) => selectGroup(e.target.value)}>
          {groupData.map((group) => (
            <option value={group.id} key={nanoid()}>
              {group.name}
            </option>
          ))}
        </select>
        <button id="group-edit-button">Edit</button>
      </div>
    </>
  );
};

export default GroupSelector;
