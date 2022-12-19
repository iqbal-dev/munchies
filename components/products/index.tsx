import { useState } from "react";
import Select from "../ui/select";
import ToggleButton from "../ui/toggle-button";
import ProductList from "./product-list";

type dataType = {
  name: string;
  value: number;
};

const Products = () => {
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
    <>
      <h5 className="pt-5">Home Kitchen</h5>
      <div className="pb-5 pt-3 d-flex">
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
      <div className="pb-5" style={{ width: "200px" }}>
        <Select
          name="filter"
          options={radios}
          onChange={(e: any) => console.log(e.target.value)}
        />
      </div>
      <ProductList />
    </>
  );
};

export default Products;
