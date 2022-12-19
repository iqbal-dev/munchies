import React from "react";
import { FormGroup, Input } from "reactstrap";
type option = {
  name: string;
  value: number;
};
type componentProps = {
  name: string;
  options: option[];
  onChange: (e: any) => void;
};
const Select: React.FC<componentProps> = ({ name, options, onChange }) => {
  return (
    <FormGroup>
      <Input type="select" name={name} id="exampleSelect" onChange={onChange}>
        <option>Select</option>
        {options?.map((option: option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Input>
    </FormGroup>
  );
};

export default Select;
