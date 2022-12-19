import SearchButton from "../serach-button";

const LeftSide = () => {
  return (
    <div>
      <h1 style={{ color: "white", fontSize: "65px", lineHeight: "80px" }}>
        Authentic Home Food in UK
      </h1>
      <p className="mt-2 mb-5" style={{ color: "white" }}>
        What2Eat is a courier service in which authentic home cook food is
        delivered to a customer.
      </p>
      <SearchButton />
    </div>
  );
};

export default LeftSide;
