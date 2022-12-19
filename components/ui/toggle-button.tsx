import cn from "classnames";
import { Button } from "reactstrap";
type props = {
  checked: number;
  toggle: (args: number) => void;
  text: string;
  position: number;
  className: string;
};
const ToggleButton = ({
  checked,
  toggle,
  text,
  position,
  className,
}: props) => {
  return (
    <Button
      outline
      color="warning"
      className={cn(
        `${checked === position && " text-bg-warning"} rounded-0 m-0`,
        className
      )}
      onClick={() => toggle(position)}
    >
      {text}
    </Button>
  );
};

export default ToggleButton;
