import { nanoid } from "nanoid";
import { useEffect, useContext } from "react";
import SettingsContext from "../../Context/SettingsContext";

const SettingsField = (props) => {
  const [settings, setSettings] = useContext(SettingsContext);

  let id;
  useEffect(() => {
    id = nanoid();
  }, []);

  useEffect(() => {
    console.log(
      `Settings changed: ${props.setting} is now ${settings[props.setting]}`
    );
  }, [settings[props.setting]]);

  function handleChange(event) {
    const value =
      event.target.type == "checkbox"
        ? event.target.checked
        : event.target.value;

    setSettings((prevSettings) => ({
      ...prevSettings,
      [props.setting]: value,
    }));
  }

  return (
    <>
      <div>
        <label>
          {props.label}:{" "}
          <input
            type={props.inputType}
            min={props.min}
            max={props.max}
            value={settings[props.setting]}
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
        </label>
      </div>
    </>
  );
};

export default SettingsField;
