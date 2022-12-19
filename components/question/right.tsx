import Image from "next/image";

const Right = () => {
  return (
    <div className="w-100 ">
      <Image
        style={{
          float: "right",
        }}
        className="float-right"
        src="/question/food-car.png"
        alt="question"
        height={400}
        width={500}
      />
    </div>
  );
};

export default Right;
