import { useContext } from "react";
import SettingsField from "./SettingsField";

const Settings = () => {
  return (
    <footer>
      <h1>Settings</h1>
      <SettingsField
        label="Periode"
        inputType="number"
        min="1"
        max="3"
        setting="period"
      />
      <SettingsField
        label="Slaagpercentage"
        inputType="number"
        min="0"
        max="100"
        setting="passingThreshold"
      />
      <SettingsField
        label="Vakantie"
        inputType="checkbox"
        value="false"
        setting="isPeriodBeforeVacation"
      />
    </footer>
  );
};

export default Settings;
