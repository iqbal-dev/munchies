import Button from "./ui/button";
import Input from "./ui/input";

const SearchButton = () => {
  return (
    <div className="d-flex">
      <div className="w-75">
        <Input
          inputType="text"
          className="customInput py-3 px-4 rounded-left"
          placeholder="Search food you love"
          onChange={() => {}}
        />
      </div>
      <div className="w-25">
        <Button
          inputType="button"
          className="customButton py-3 px-4 rounded-right"
          onClick={() => {}}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchButton;
