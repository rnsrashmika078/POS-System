import ShadcnLogo from "@/assets/shadcn-logo.png";
import { UserCircle } from "lucide-react";
import { useEffect, useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";
const Topbar = () => {
    return (
        <div>
            <div className="flex justify-between mx-5 p-1  ">
                <div className="flex ">
                    <ShopName />
                    <Address />
                    {/* <Status /> */}
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                    <Today />
                    <UserAuth />
                </div>
            </div>
        </div>
    );
};

export default Topbar;

const ShopName = () => {
    return (
        <div className="flex gap-2 justify-start items-center p-1 rounded-xl bg-[var(--card)]  hover:bg-blue-950 hover:text-white  shadow-sm mt-2 ml-2  border border-[var(--border-color)] w-32 ">
            <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center ">
                <img
                    src={ShadcnLogo}
                    className="w-5 h-5 rounded-full flex-shrink-0 "
                    alt="Logo"
                />
            </div>
            <div className=" flex-col ">
                <h1 className="text-sm ">Ozone Foods</h1>
            </div>
        </div>
    );
};


const Address = () => {
    return (
        <div className="flex gap-2 justify-start items-center p-1 rounded-xl bg-[var(--card)]  hover:bg-blue-950 hover:text-white  shadow-sm mt-2 ml-2 border border-[var(--border-color)] w-52 px-2">
            Madampe, Atakalanpanna
        </div>
    );
};
const Today = () => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
    const day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    const [date, setDate] = useState<number>(0);

    const [select, setSelect] = useState<number>(date);
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    const [time, setTime] = useState<string>();

    useEffect(() => {
        const update = async () => {
            const time = new Date().toLocaleTimeString();
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setTime(time);
        };
        update();
    }, [time]);

    useEffect(() => {
        const date = new Date().getDate();
        setDate(date);
        if (date > 7) {
            setSelect(date-7);
        }
    }, [date]);

    return (
        <div className="flex gap-2 justify-start items-center p-1 rounded-xl bg-[var(--card)]  px-5 hover:bg-blue-950 hover:text-white  shadow-sm mt-2  border border-[var(--border-color)] w-auto text-start">
            {`
            ${date}
            ${months[month]} 
            ${year}
            at
            ${time}`}
        </div>
    );
};

const UserAuth = () => {
    return (
        <div className="flex gap-2 px-2 justify-start items-center p-1 rounded-xl bg-[var(--card)]   hover:bg-blue-950 hover:text-white  shadow-sm mt-2 ml-2 border border-[var(--border-color)] w-56">
            <UserCircle />
            <h1>Rashmika Siriwardhana</h1>
        </div>
    );
};
