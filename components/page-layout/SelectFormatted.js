import { React } from "react";
import Select from "react-select";

function SelectFormatted(props) {
  return (
    <li className="inline-block max-w-s px-1 py-1">
      <p className="float-left w-1/3">{props.displayName}</p>
      <div className="float-right w-2/3">
        <Select
          options={props.options}
          value={props.currentState}
          defaultValue={props.options[props.defaultValue]}
          onChange={(event) => props.changeStateFunction(event)}
          theme={(theme) => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors,
              primary: "#f0c700",
              primary25: "#d4d4d4",
              primary50: "#aaaaaa",
            },
          })}
        />
      </div>
    </li>
  );
}

export default SelectFormatted;