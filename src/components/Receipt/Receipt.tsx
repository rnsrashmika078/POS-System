import { useProductStore } from "@/zustand/store";
import Sitelogo from "../Dashboard/Sidebar/Sitelogo";
import { useEffect, useState } from "react";
import Nav from "@/pages/Nav";

interface ReceiptProps {
    hover?: boolean;
}
const Receipt: React.FC<ReceiptProps> = ({ hover }: ReceiptProps) => {
    const summaryProducts = useProductStore((store) => store.summaryProducts);
    const summaryTotal = useProductStore((store) => store.summaryTotal);

    const [cashAmout, setCashAmount] = useState<number>(5000.0);

    useEffect(() => {
        console.log("sums up produts", summaryProducts);
    }, [summaryProducts]);

    return (
        <div className="bg-white p-2">
            {!hover && <Nav />}
            <div className={`border ${hover ? "w-96" : "w-[430px]"} mt-5`}>
                <div className="flex justify-center">
                    <Sitelogo />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[var(--foreground)]">
                        No.82, Main Street, Madampe
                    </p>
                    <p className="text-[var(--foreground)]">072-3600777</p>
                </div>
                <span className="flex justify-center items-center">
                    ------------------------------------------------------------------------------------------------
                </span>
                <div className="text-sm p-2 px-3">
                    <div className="flex justify-between">
                        <div className="flex gap-2  justify-between">
                            <p className="w-14">Date</p>
                            <p>:</p>
                            <p>02/08/2025</p>
                        </div>
                        <div className="flex gap-2 justify-between">
                            <p className="w-14">Bill No</p>
                            <p>:</p>
                            <p>000054</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-2 justify-between ">
                            <p className="w-14">Operator</p>
                            <p>:</p>
                            <p>Siriwardhana</p>
                        </div>
                        {/* <div className="flex  gap-5 justify-between items-start">
        <p className="w-12">Unit</p>
        <p>:</p>
        <p>2</p>
    </div> */}
                    </div>
                </div>
                <span className="flex justify-center items-center">
                    ------------------------------------------------------------------------------------------------
                </span>
                <table>
                    <thead>
                        <tr className="bg-red-500x"></tr>
                    </thead>
                </table>

                <table
                    className="table text-center"
                    style={{ fontSize: "13.5px", width: "100%" }}
                >
                    <thead className="table-dark">
                        <tr>
                            <td className="m-auto w-6">Ln</td>
                            <td className="w-12">Product</td>
                            <td className="m-auto w-6">Price</td>
                            <td className="m-auto w-6">Qty</td>
                            <td className="m-auto w-8">Amount</td>
                        </tr>
                    </thead>
                    <tbody>
                        {summaryProducts.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    {(item.quantity * item.price).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <span className="flex justify-center items-center">
                    ------------------------------------------------------------------------------------------------
                </span>
                <div className="px-5">
                    <div className="flex justify-between">
                        <h1 className="uppercase ">Sub Total</h1>
                        <h1>{summaryTotal?.subTotal.toFixed(2)}</h1>
                    </div>

                    <div className="flex justify-between text-sm">
                        <h1 className="uppercase ">Taxes</h1>
                        <h1>{summaryTotal?.taxes!.toFixed(2)}</h1>
                    </div>
                    <div className="flex justify-between text-sm">
                        <h1 className="uppercase ">discount</h1>
                        <h1>{summaryTotal?.discount!.toFixed(2)}</h1>
                    </div>
                    <div className="flex justify-between  text-xl font-bold">
                        <h1 className="uppercase ">Total</h1>
                        <h1>{summaryTotal?.totalPayment.toFixed(2)}</h1>
                    </div>
                    <div className="flex justify-between  text-sm">
                        <h1 className="uppercase text-blue-500">Cash</h1>
                        <h1 className="text-blue-500">
                            {cashAmout.toFixed(2)}
                        </h1>
                    </div>
                    <div className="flex justify-between text-sm">
                        <h1 className="uppercase text-red-500 ">Balance</h1>
                        <h1 className="text-red-500">
                            {(cashAmout - summaryTotal?.totalPayment!).toFixed(
                                2
                            )}
                        </h1>
                    </div>
                    <div className="mt-5">
                        <div className="flex  gap-1 text-sm">
                            <h1 className="uppercase">No Of qty sold</h1>
                            <p>:</p>
                            <h1>{summaryProducts.length}</h1>
                        </div>
                        <div className="flex gap-1  text-sm">
                            <h1 className="uppercase">time</h1>
                            <p>:</p>
                            <h1>{new Date().toLocaleTimeString()}</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className="uppercase text-center mt-5 text-sm px-2">
                            Exchange possible only within 07 days of purchase
                            with relevant tag and bill.
                        </h1>
                        <p className="text-center  text-sm">
                            ** Thank you for Shopping**
                        </p>
                        <p className="text-center  mb-2 text-xs">
                            System by Ozone.Solution - www.ozonesolution.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Receipt;
