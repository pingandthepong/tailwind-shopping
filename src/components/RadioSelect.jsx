import React from "react";
import OptionSelect from "./OptionSelect.jsx";

const RadioSelect = ({ data, title, subject }) => {
  return (
    <fieldset>
      <legend className="text-xl font-bold mb-2 capitalize">{title}</legend>

      <OptionSelect data={data} title={title} subject={subject} />
    </fieldset>
  );
};

export default RadioSelect;
