import cn from "classnames";
type componentProps = {
  className: string;
  placeholder: string;
  inputType: string;
  onChange: () => void;
};
const Input: React.FC<componentProps> = ({
  className,
  placeholder,
  inputType,
  ...rest
}) => {
  return (
    <>
      <input
        type={inputType}
        className={cn("w-100", className)}
        {...rest}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
