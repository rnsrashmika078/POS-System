import Button from "@/components/Common/Button";
import { Food } from "@/index";
import { Minus, Plus } from "lucide-react";

interface CounterIn {
  name: string;
  count: number;
}
interface CardProps {
  image: string;
  name: string;
  price: number;
  availability: boolean;
  quantity?: number;
  clickEventAdd: () => void;
  counter: CounterIn;
  // removeItem?: Food | null;
}
const Card: React.FC<CardProps> = ({
  image,
  name,
  price,
  availability,
  quantity,
  clickEventAdd,
  counter,
  // removeItem,
}) => {
  return (
    <div className="bg-[var(--card)] relative flex flex-col border border-[var(--border-color)] w-fit shadow-md justify-center items-center rounded-xl">
      <div className="w-full h-full flex relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-t-xl"></div>
        <img
          src={image}
          width={50}
          height={50}
          className="w-72 h-48 flex-shrink-0 rounded-t-xl"
          alt="Logo"
        />
      </div>

      <div className="absolute flex justify-center items-center top-3 left-3 gap-2 bg-white p-1 rounded-sm shadow-md border border-gray-300">
        {availability ? (
          <>
            <span className="h-2 w-2 flex-shrink-0 p-2 bg-green-400 rounded-full contents:'"></span>
            <h1 className="text-sm text-black font-earthlight">Available</h1>
          </>
        ) : (
          <>
            <span className="h-2 w-2 flex-shrink-0 p-2 bg-red-500 rounded-full contents:'"></span>
            <h1 className="text-sm text-black font-extralight">
              Not Available
            </h1>
          </>
        )}
      </div>
      <div className="p-2 w-full flex flex-col justify-between py-1 font-bold">
        <h1 className="text-sm">{name}</h1>
        <h1 className="text-xl font-extralight">Rs {price}</h1>
      </div>
      <div className="w-full p-2">
        <Button
          onClick={clickEventAdd}
          size="xs"
          className={`w-full ${
            counter?.name! === name && counter?.count! > 0
              ? "bg-gray-200 text-[var(--button-foreground)] hover:bg-gray-200 hover:text-white"
              : "text-white"
          }`}
          name={`${
            counter?.name! === name && counter?.count! > 0
              ? `Add More (${counter?.count})`
              : "Add to Cart"
          }`}
          radius="md"
          variant="darkLight"
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
};

export default Card;
