import cn from "classnames";
type componentProps = {
  className?: string;
  placeholder?: string;
  onChange?: () => void;
  rows?: number;
};
const Textarea: React.FC<componentProps> = ({
  className,
  placeholder,
  rows = 7,
  ...rest
}) => {
  return (
    <>
      <textarea
        rows={rows}
        className={cn("w-100", className)}
        {...rest}
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default Textarea;
