import Button from "@/components/Common/Button";
import HR from "@/components/Common/HR";
import { Edit, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { RiArrowDropDownLine, RiDeleteBin3Line } from "react-icons/ri";
import { useProductStore } from "@/zustand/store";
import { useNavigate } from "react-router-dom";
import Receipt from "@/components/Receipt/Receipt";

const OrderSummary = () => {
    return (
        <div>
            <div className="text-[var(--foreground)] bg-[var(--background)] h-[calc(100vh-7rem)] border-[var(--border-color)] rounded-t-xl overflow-y-auto shadow-xs">
                <div className="p-2 flex justify-between rounded-t-xl border bg-[var(--main-background)]   border-[var(--border-color)] shadow-md sticky top-0">
                    <p>Order Summary</p>
                    <p>#B12309</p>
                </div>
                <div className="overflow-y-auto h-[350px]">
                    <CustomCard />
                </div>
                <div className="h-[250px]">
                    <TotalSummary />
                </div>
                {/* <CustomCard /> */}
            </div>
        </div>
    );
};

export default OrderSummary;

const CustomCard = () => {
    const products = useProductStore((store) => store.products);
    const removeProduct = useProductStore((store) => store.removeProduct);
    const counter = useProductStore((store) => store.counter);
    const setOrderSummary = useProductStore((store) => store.setOrderSummary);
    const setCounter = useProductStore((store) => store.setCounter);
    const handleCounter = (name: string): number => {
        const item = counter.find((item) => item.name === name) || {
            name: "",
            count: 0,
        };

        return item.count;
    };

    useEffect(() => {
        const quantityCol = counter.map((items) => items.count);
        const update = products.map((item, index) => ({
            ...item,
            quantity: quantityCol[index],
        }));
        setOrderSummary(update);
    }, [products, counter]);

    // const handlePayment = () => {
    //     const quantityCol = counter.map((item) => item.count);
    // };
    return (
        <div className="select-auto flex flex-col gap-3 border border-[var(--border-color)] p-2 shadow-md  text-sm">
            {products?.map((item, i) => (
                <div
                    key={i}
                    className="flex border p-2 gap-2 rounded-xl shadow-xs border-[var(--border-color)]"
                >
                    <img
                        src={item.image}
                        className="w-24 border border-[var(--border-color)] h-28 flex-shrink-0 rounded-xl shadow-md"
                        alt="Logo"
                    />
                    <div className="flex flex-col w-full ">
                        <div className="flex gap-1 justify-start items-center">
                            <h1 className="font-bold">{item.name}</h1>
                            <p className="text-gray-500 text-sm">{`(${handleCounter(
                                item.name
                            )})`}</p>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <Plus
                                size={16}
                                className="bg-[rgba(65,65,65,1)] text-white rounded-full cursor-pointer"
                                onClick={() => setCounter(item.name, "add")}
                            />
                            <p className="text-gray-500 text-sm">{`${handleCounter(
                                item.name
                            )}`}</p>
                            <Minus
                                size={16}
                                onClick={() => setCounter(item.name, "remove")}
                                className="bg-[rgba(65,65,65,1)] text-white rounded-full cursor-pointer"
                            />
                        </div>
                        <p className="mb-8 text-xs text-gray-500">
                            Size: {`${item.size}`}
                        </p>

                        <div className="flex justify-between items-center">
                            <p>Rs {`${item.price}`}</p>
                            <div className="flex gap-2">
                                <Edit
                                    size={16}
                                    className="hover:scale-110 transition-all cursor-pointer"
                                />
                                <RiDeleteBin3Line
                                    onClick={() => removeProduct(item)}
                                    size={16}
                                    className="hover:scale-110 transition-all cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const TotalSummary = () => {
    const products = useProductStore((store) => store.products);
    const [open, setOpen] = useState<boolean>(false);
    const [current, setCurrent] = useState<string>("Dine-in");
    const counter = useProductStore((store) => store.counter);
    const setPrice = useProductStore((store) => store.setPrice);
    const price = useProductStore((store) => store.summaryTotal);

    const [taxes, setTaxes] = useState<number>(150);
    const [discount, setDiscount] = useState<number>(350);
    const [hover, setHover] = useState<boolean>(false);
    const navigate = useNavigate();

    //Calculate the final totals
    useEffect(() => {
        // const total = products.reduce(
        //     (acc, item) => acc + item.price * item.quantity,
        //     0
        // );
        let total = 0;
        const priceCol = products.map((item) => item.price);
        const quantityCol = counter.map((item) => item.count);

        for (let x = 0; x < priceCol.length; x++) {
            if (quantityCol[x] != 0) {
                total = total + priceCol[x] * quantityCol[x];
            }
        }

        const newPrice = {
            subTotal: total,
            taxes: taxes,
            discount: discount,
            totalPayment: total + taxes - discount,
            orderType: current,
        };
        setPrice(newPrice);
    }, [products, current, counter]);

    const handleMouseHover = (method: string) => {
        setHover(method === "hover" ? true : false);
    };
    return (
        <div className=" mt-2 p-2 overflow-hidden h-full text-sm">
            <div className="flex flex-col border border-[var(--border-color)] rounded-xl p-2 space-y-2 shadow-md">
                <div className="flex justify-between">
                    <p className="font-semibold">Sub Total</p>
                    <p className="">Rs {price?.subTotal}</p>
                </div>
                <div className="flex justify-between">
                    <p className="font-semibold">Taxes</p>
                    <p className="">Rs {price?.taxes}</p>
                </div>
                {/* discount */}
                <div className="flex justify-between">
                    <p className="font-semibold">Discount</p>
                    <p className=" text-green-500">Rs {price?.discount}</p>
                </div>
                <HR />
                <div className="flex justify-between">
                    <p className="font-semibold">Total Payment</p>
                    <p className=" font-bold text-red-500">
                        Rs {price?.totalPayment}
                    </p>
                </div>

                {/*Order Type*/}
                <div
                    className="relative flex justify-between items-center"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <p className="font-semibold flex">Order Type</p>

                    <div className="flex justify-center items-center cursor-pointer ">
                        <p className="">{current}</p>
                        <RiArrowDropDownLine size={30} />
                    </div>
                    {open && (
                        <div className="w-50 px-2 list-none mb-2 border shadow-md absolute top-6  right-1 cursor-pointer rounded-sm border-[var(--border-color)] bg-[var(--background)] ">
                            {["Dine-in", "Take Away"].map((item, i) => (
                                <li
                                    key={i}
                                    className="hover:bg-blue-950  hover:text-white p-1 cursor-pointer text-sm rounded-sm"
                                    onClick={() => setCurrent(item)}
                                >
                                    {item}
                                </li>
                            ))}
                        </div>
                    )}
                </div>

                <div
                    className=" flex w-full"
                    onMouseEnter={() => handleMouseHover("hover")}
                    onMouseLeave={() => handleMouseHover("unhover")}
                >
                    <Button
                        disabled={products.length == 0}
                        onClick={() => navigate("/payment")}
                        name="Confirm Payment"
                        variant="darkLight"
                        size="xs"
                        className="w-full text-white"
                        radius="md"
                    />
                    {hover && (
                        <div className="z-0 transition-all absolute top-0 right-1/2">
                            <Receipt hover={hover} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
