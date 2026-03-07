import { useProductStore } from "@/zustand/store";
import Sitelogo from "../Dashboard/Sidebar/Sitelogo";
import { useRef, useState } from "react";
import Button from "../Common/Button";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Nav from "../nav";

interface ReceiptProps {
  hover?: boolean;
}

const Receipt: React.FC<ReceiptProps> = ({ hover }: ReceiptProps) => {
  const summaryProducts = useProductStore((store) => store.summaryProducts);
  const summaryTotal = useProductStore((store) => store.summaryTotal);
  const [cashAmout] = useState<number>(5000.0);

  const receiptRef = useRef<HTMLDivElement>(null);

  const handleSavePDF = async () => {
    if (!receiptRef.current) return;

    const canvas = await html2canvas(receiptRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", [80, canvas.height * 0.264583]); // 80mm width, auto height
    const pdfWidth = 80;
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Receipt_${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  return (
    <div className="bg-white p-2">
      {/* Hide buttons in print */}
      <div className="print:hidden flex gap-2">
        <Button onClick={handleSavePDF}>Save as PDF</Button>
        {!hover && <Nav />}
      </div>

      <div className={`border mt-5 mx-auto ${hover ? "w-60" : "w-[325px]"}`}>
        <div ref={receiptRef} className="p-3 text-sm bg-white">
          {/* Logo */}
          <div className="flex justify-center mb-2">
            <Sitelogo />
          </div>

          {/* Header */}
          <div className="text-center">
            <p>No.82, Main Street, Madampe</p>
            <p>072-3600777</p>
          </div>

          <hr className="my-2 border-dashed" />

          {/* Bill Info */}
          <div className="flex justify-between text-xs mb-2">
            <div>
              <span className="font-semibold">Date:</span> 02/08/2025
            </div>
            <div>
              <span className="font-semibold">Bill No:</span> 000054
            </div>
          </div>
          <div className="text-xs mb-2">
            <span className="font-semibold">Operator:</span> Siriwardhana
          </div>

          <hr className="my-2 border-dashed" />

          {/* Products */}
          <table className="text-xs w-full border-collapse">
            <tr className="font-semibold">
              <td className="w-6">Ln</td>
              <td className="w-20">Product</td>
              <td className="w-10">Price</td>
              <td className="w-8">Qty</td>
              <td className="w-12">Amount</td>
            </tr>
            <tbody>
              {summaryProducts.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{(item.quantity * item.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <hr className="my-2 border-dashed" />

          {/* Totals */}
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Sub Total</span>
              <span>{summaryTotal?.subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>{summaryTotal?.taxes!.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>{summaryTotal?.discount!.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{summaryTotal?.totalPayment.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-blue-600">
              <span>Cash</span>
              <span>{cashAmout.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-red-600">
              <span>Balance</span>
              <span>
                {(cashAmout - summaryTotal?.totalPayment!).toFixed(2)}
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-3 text-xs">
            <div className="flex justify-between">
              <span>No Of Qty Sold:</span>
              <span>{summaryProducts.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Time:</span>
              <span>{new Date().toLocaleTimeString()}</span>
            </div>
          </div>

          <div className="mt-4 text-center text-xs leading-snug">
            <p>
              Exchange possible only within 07 days of purchase with relevant
              tag and bill.
            </p>
            <p className="font-semibold">** Thank you for Shopping **</p>
            <p className="text-[10px]">
              System by Ozone.Solution - www.ozonesolution.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
