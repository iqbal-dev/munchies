import { useState } from "react";
import ToggleButton from "./ui/toggle-button";

type dataType = {
  name: string;
  value: number;
};

const Test = () => {
  const [checked, setChecked] = useState<number>(1);

  const toggle = (args: number) => {
    setChecked(args);
  };

  const radios = [
    { name: "All", value: 1 },
    { name: "Button", value: 2 },
    { name: "Free delivery", value: 3 },
    { name: "New", value: 4 },
    { name: "Coming", value: 5 },
  ];

  return (
    <div className="py-5 d-flex">
      {radios?.map((data: dataType) => {
        return (
          <ToggleButton
            key={data.value}
            checked={checked}
            toggle={toggle}
            text={data.name}
            position={data.value}
            className="px-4 py-2 rounded-left"
          />
        );
      })}
    </div>
  );
};

export default Test;
