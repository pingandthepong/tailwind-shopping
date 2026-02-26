import React from "react";

const OptionSelect = ({ data, title, subject }) => {
  const liBase = "border relative";
  const liVariants = {
    color: "w-16 h-16 border-gray-300 rounded-full",
    size: "w-24 aspect-4/3.5 rounded-sm border-gray-400 flex justify-center items-center text-lg font-semibold",
  };

  const radioBase = "border absolute left-0 top-0 peer opacity-0";
  const radioVariants = {
    color: "w-16 h-16 rounded-full",
    size: "w-24 aspect-4/3.5 rounded-sm",
  };

  const peerBase =
    "absolute inset-0 pointer-events-none peer-checked:border-4 peer-checked:border-indigo-600";
  const peerVariants = {
    color: "rounded-full",
    size: "rounded-sm",
  };

  const handleRadioClick = (e) => {
    console.log(e.target.value);
  };

  return (
    <ul className="flex flex-wrap gap-4 ">
      {subject.map((item) => {
        const [option, value] = Object.entries(item)[0];
        const isSoldOut = title === "size" && value <= 0;
        const isColor = typeof value === "string" && value.startsWith("#");

        return (
          <li
            key={option}
            className={`${liBase} ${liVariants[title]} ${isSoldOut ? "opacity-30 cursor-not-allowed" : ""}`}
            style={{
              backgroundColor: isColor ? value : undefined,
            }}>
            <label
              className={title === "color" ? "hidden" : ""}
              htmlFor={option}>
              {option}
            </label>
            <input
              required
              type="radio"
              id={option}
              disabled={isSoldOut}
              className={`${radioBase} ${radioVariants[title]} ${isSoldOut ? "cursor-not-allowed" : "cursor-pointer"}`}
              name={`${title} option`}
              value={option}
              onClick={(e) => handleRadioClick(e)}
            />
            <div className={`${peerBase} ${peerVariants[title]}`}></div>
          </li>
        );
      })}
    </ul>
  );
};

export default OptionSelect;
