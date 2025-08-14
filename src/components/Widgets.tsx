import React, { JSX, useEffect, useRef, useState } from "react";
import {
    BiArrowBack,
    BiCheck,
    BiSolidBatteryCharging,
    BiSolidPencil,
    BiVolumeFull,
} from "react-icons/bi";
import { BsBatteryCharging } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GrAccessibility, GrSystem } from "react-icons/gr";
import { HiMiniWifi } from "react-icons/hi2";
import { IoBluetoothSharp } from "react-icons/io5";
import { LiaAngleRightSolid, LiaWifiSolid } from "react-icons/lia";
import {
    MdAirplanemodeActive,
    MdLightMode,
    MdOutlineDarkMode,
    MdOutlineLightMode,
} from "react-icons/md";
import { PiWifiMediumThin } from "react-icons/pi";
import Theme from "./Theme/Theme";
import Button from "./Common/Button";

const Widgets = () => {
    const iconSize = 18;
    const selectedColor = "bg-[#61d7f1] backdrop-blur-xs";
    const selectedHover = "hover:bg-[#aef0ff]";
    const neutralColor = "hover:bg-[#5a5a5a]";

    const [selectedOption, setSelectedOption] = useState<string>("");
    const [open, setOpen] = useState<string>("");

    // theme setup
    const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
    const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        let appliedTheme = "light";

        if (savedTheme?.startsWith("system")) {
            const isDark = savedTheme.includes("dark");
            appliedTheme = isDark ? "dark" : "light";
            setTheme("system");
        } else if (savedTheme === "dark") {
            appliedTheme = "dark";
            setTheme("dark");
        } else {
            appliedTheme = "light";
            setTheme("light");
        }

        document.body.classList.add(appliedTheme);
    }, [theme]);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleChangeTheme = (theme: string) => {
        document.body.classList.remove("dark", "light");
        switch (theme) {
            case "system": {
                const prefersDark = window.matchMedia(
                    "(prefers-color-scheme: dark)"
                ).matches;
                const systemTheme = prefersDark ? "dark" : "light";
                localStorage.setItem("theme", "system" + systemTheme);
                document.body.classList.add(systemTheme);
                setTheme("system");
                setIsSubMenuOpen(false);
                break;
            }
            case "dark": {
                document.body.classList.add("dark");
                localStorage.setItem("theme", "dark");
                setTheme("dark");
                setIsSubMenuOpen(false);
                break;
            }
            case "light": {
                document.body.classList.add("light");
                localStorage.setItem("theme", "light");
                setTheme("light");
                setIsSubMenuOpen(false);
                break;
            }
        }
    };
    // theme setup ends here

    const options = [
        {
            name: "Wifi",
            icon: (
                <LiaWifiSolid
                    size={iconSize}
                    fillRule="inherit"
                    color={selectedOption === "Wifi" ? "black" : "white"}
                    className={`${
                        selectedOption === "Wifi"
                            ? "transition-all scale-120"
                            : "scale-100"
                    }`}
                />
            ),
        },
        {
            name: "Bluetooth",
            icon: (
                <IoBluetoothSharp
                    size={iconSize}
                    color={selectedOption === "Bluetooth" ? "black" : "white"}
                    className={`${
                        selectedOption === "Bluetooth"
                            ? "transition-all scale-120"
                            : "scale-100"
                    }`}
                />
            ),
        },
        {
            name: "Airplane Mode",
            icon: (
                <MdAirplanemodeActive
                    size={iconSize}
                    color={
                        selectedOption === "Airplane Mode" ? "black" : "white"
                    }
                    className={`${
                        selectedOption === "Airplane Mode"
                            ? "transition-all scale-120"
                            : "scale-100"
                    }`}
                />
            ),
        },
        {
            name: "Battery Saver",
            icon: (
                <BiSolidBatteryCharging
                    size={iconSize}
                    color={
                        selectedOption === "Battery Saver" ? "black" : "white"
                    }
                    className={`${
                        selectedOption === "Battery Saver"
                            ? "transition-all scale-120"
                            : "scale-100"
                    }`}
                />
            ),
        },
        {
            name: "Theme",
            icon:
                theme === "dark" ? (
                    <MdOutlineLightMode
                        size={iconSize}
                        color={selectedOption === "Theme" ? "black" : "white"}
                        className={`${
                            selectedOption === "Theme"
                                ? "transition-all scale-120"
                                : "scale-100"
                        }`}
                    />
                ) : (
                    <MdOutlineDarkMode
                        size={iconSize}
                        color={selectedOption === "Theme" ? "black" : "white"}
                        className={`${
                            selectedOption === "Theme"
                                ? "transition-all scale-120"
                                : "scale-100"
                        }`}
                    />
                ),
        },
        {
            name: "Accessability",
            icon: (
                <GrAccessibility
                    size={iconSize}
                    color={
                        selectedOption === "Accessability" ? "black" : "white"
                    }
                    className={`${
                        selectedOption === "Accessability"
                            ? "transition-all scale-120"
                            : "scale-100"
                    }`}
                />
            ),
        },
    ];

    // useEffect(() => {
    //     if (selectedOption === "Theme") {
    //         handleChangeTheme("dark");
    //     }
    // }, [selectedOption]);

    // handle  theme section

    return (
        <div className="fixed bottom-2 right-2 w-[400px]">
            <div className="border bg-[#323232]  border-gray-800/80 rounded-t-xl">
                {open === "Wifi" && (
                    <div className="relative rounded-xl h-[400px] overflow-auto">
                        <WifiList iconSize={iconSize} setOpen={setOpen} />
                    </div>
                )}
                {open === "Theme" && (
                    <div className="relative rounded-xl h-[400px] overflow-auto">
                        <ThemeSection
                            setOpen={setOpen}
                            open={open}
                            handleChangeTheme={handleChangeTheme}
                            theme={theme}
                        />
                    </div>
                )}
                {open === "" && (
                    <div>
                        <div className="relative  p-5 h-[250px] grid grid-cols-3 gap-5 ">
                            {options.map((opt, index) => (
                                <div
                                    key={index}
                                    className="text-center space-y-2"
                                    onClick={() => {
                                        if (opt.name !== "Theme") {
                                            setSelectedOption((prev) =>
                                                prev !== opt.name
                                                    ? opt.name
                                                    : ""
                                            );
                                        } else {
                                            setSelectedOption(opt.name);
                                            handleChangeTheme(
                                                theme === "dark"
                                                    ? "light"
                                                    : "dark"
                                            );
                                        }
                                    }}
                                >
                                    <div
                                        className={`flex justify-between  border h-13 rounded-sm border-white/10   ${
                                            selectedOption === opt.name
                                                ? selectedColor
                                                : ""
                                        }`}
                                    >
                                        <div
                                            className={`${
                                                selectedOption === opt.name
                                                    ? selectedHover
                                                    : neutralColor
                                            } p-4 w-30`}
                                        >
                                            {opt.icon}
                                        </div>
                                        {opt.name === "Wifi" ||
                                            (opt.name === "Bluetooth" && (
                                                <div className=" flex justify-center items-center border-white/10"></div>
                                            ))}
                                        <div
                                            className={`${
                                                selectedOption === opt.name
                                                    ? selectedHover
                                                    : neutralColor
                                            } p-4  w-30  `}
                                            onClickCapture={() =>
                                                setOpen(opt.name)
                                            }
                                        >
                                            <LiaAngleRightSolid
                                                size={iconSize}
                                                color={
                                                    selectedOption === opt.name
                                                        ? "black"
                                                        : "white"
                                                }
                                                className={` transition-all ${
                                                    open === opt.name
                                                        ? "scale-130"
                                                        : "scale-100"
                                                }`}
                                            />
                                        </div>
                                    </div>
                                    <p className="text-sm text-white">
                                        {opt.name === "Wifi"
                                            ? "Wi-Fi"
                                            : opt.name === "Theme"
                                            ? opt.name + ": " + theme.slice(0,1).toUpperCase() + theme.slice(1,theme.length)
                                            : opt.name}
                                    </p>
                                    {/* <p>{open}</p> */}
                                    {/* <p>{selectedOption}</p> */}
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 p-5 space-y-5 bg-[#323232]">
                            <Slider
                                Icon={<MdLightMode size={20} color="white" />}
                            />
                            <Slider
                                Icon={<BiVolumeFull size={20} color="white" />}
                            />
                        </div>
                    </div>
                )}
            </div>
            <BottomBorder iconSize={iconSize} open={open} />
        </div>
    );
};

export default Widgets;

interface ThemeSectionProps {
    setOpen: React.Dispatch<React.SetStateAction<string>>;
    open: string;
    handleChangeTheme: (theme: string) => void;
    theme: string;
}
const ThemeSection: React.FC<ThemeSectionProps> = ({
    setOpen,
    open,
    handleChangeTheme,
    theme,
}) => {
    const iconSize = 20;
    const themelist = [
        { currentTheme: "system", icon: <GrSystem size={20} /> },
        { currentTheme: "light", icon: <MdOutlineLightMode size={20} /> },
        { currentTheme: "dark", icon: <MdOutlineDarkMode size={20} /> },
    ];
    return (
        <div className="w-100">
            <div className="p-2 scrollbar-hidden flex justify-between items-center text-white sticky top-0 bg-[#323232] z-[9999]">
                <div
                    className={`flex justify-center items-center gap-5`}
                    onClick={() => setOpen("")}
                >
                    <BiArrowBack
                        size={iconSize + 20}
                        className={`rounded-xl hover:bg-gray-500 p-2`}
                    />
                    <p className="font-extralight text-sm">Theme</p>
                </div>
                <div className="flex">
                    {null}
                    {/* <ToggleButton toggle={toggle} setToggle={setToggle} /> */}
                    {/* <PiToggleLeftLight size={iconSize + 20} />
            <BiToggleRight size={iconSize + 20} /> */}
                    {/* <GrSystem /> */}
                </div>
            </div>
            <div className="px-5 py-2">
                {themelist.map((th, index) => (
                    <div
                        key={index}
                        className="flex justify-between gap-5 items-center text-white hover:bg-[#4e4e4e] p-2 rounded-sm"
                    >
                        <div className="flex justify-center items-center gap-3">
                            {th.icon}{" "}
                            <p className="">
                                {th.currentTheme.slice(0, 1).toUpperCase() +
                                    th.currentTheme.slice(
                                        1,
                                        th.currentTheme.length
                                    )}{" "}
                                Theme
                            </p>
                        </div>
                        <Button
                            onClick={() => handleChangeTheme(th.currentTheme)}
                            // @ts-ignore
                            name={
                                th.currentTheme === theme ? "Applied" : "Apply"
                            }
                            radius="md"
                            variant="windows"
                            size="sm"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
interface BottomProp {
    iconSize: number;
    open: string;
}

const BottomBorder = ({ iconSize, open }: BottomProp) => {
    return (
        <div className="bg-[#1f1f1ff4]  flex justify-between border-t rounded-b-xl p-3 border-black/5">
            {open === "Wifi" && (
                <p className="text-white text-sm font-extralight">
                    More Wi-Fi Settings
                </p>
            )}
            {open === "" && (
                <>
                    <div className="flex gap-1 text-xs items-center justify-center text-white hover:bg-[#5a5a5a] rounded-sm p-2">
                        <BsBatteryCharging color="white" size={iconSize} />{" "}
                        <p>80%</p>
                    </div>
                    <div className="flex gap-5 text-sm items-center justify-between text-white ">
                        <div className="hover:bg-[#5a5a5a] rounded-sm p-2">
                            <BiSolidPencil color="white" size={iconSize} />
                        </div>
                        <div className="hover:bg-[#5a5a5a] rounded-sm p-2">
                            <FiSettings color="white" size={iconSize} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
interface Props {
    Icon: JSX.Element;
}
const Slider = ({ Icon }: Props) => {
    const barRef = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState(false);
    const [position, setPosition] = useState(0);

    const startDrag = (e: React.MouseEvent) => {
        setDragging(true);
        moveDot(e);
    };

    const stopDrag = () => setDragging(false);

    const moveDot = (e: MouseEvent | React.MouseEvent) => {
        if (!barRef.current) return;
        const bar = barRef.current;
        const rect = bar.getBoundingClientRect();
        let x = e.clientX - rect.left;
        x = Math.max(0, Math.min(x, rect.width)); // clamp within bar
        setPosition((x / rect.width) * 100); // percentage
    };
    const handleMouseMove = (e: MouseEvent) => {
        if (dragging) moveDot(e);
    };

    // Add/remove mousemove listener
    useEffect(() => {
        if (dragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", stopDrag);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", stopDrag);
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", stopDrag);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dragging]);

    return (
        <div className="flex w-full z-100">
            <div className="hover:bg-[#5a5a5a] rounded-sm p-2  ">{Icon}</div>
            <div
                ref={barRef}
                className=" relative h-1 mx-5 bg-gray-400 rounded w-full cursor-pointer top-4"
                onMouseDown={startDrag}
            >
                <div
                    ref={barRef}
                    className="p-0.5 bg-[#61d7f1]  backdrop-blur-xs rounded cursor-pointer top-2"
                    onMouseDown={startDrag}
                    style={{ width: `${position}%` }}
                ></div>

                <div
                    className="absolute top-0.5 -translate-y-1/2 left-1/2 w-5 h-5 bg-gray-600 rounded-full transition-transform"
                    style={{
                        left: `${position}%`,
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <div className="absolute transition-all bg-[#61d7f1] backdrop-blur-xs  hover:p-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3"></div>
                    {dragging && (
                        <div
                            className="select-none relative flex justify-center items-center -top-6 -translate-y-1  place-items-center text-white w-7 h-7 text-xs bg-[#2525259a] border rounded-sm "
                            style={{
                                left: `${position}%`,
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            {position.toFixed(0)}
                        </div>
                    )}
                </div>
            </div>
            {/* <p className="mt-2 text-sm">Position: {position.toFixed(1)}%</p> */}
        </div>
    );
};

const WifiList = ({
    iconSize,
    setOpen,
}: {
    iconSize: number;
    setOpen: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const neutralColor = "hover:bg-[#5a5a5a]";
    const [toggleList, setToggleList] = useState<boolean>(false);
    const [selection, setSelection] = useState<string>("Manually");

    const [toggle, setToggle] = useState<boolean>(true);
    const wifilist = [
        {
            icon: (
                <PiWifiMediumThin
                    size={iconSize + 20}
                    key={"A"}
                    color="white"
                />
            ),
            name: "SLT 4G",
        },
        {
            logo: (
                <PiWifiMediumThin
                    size={iconSize + 20}
                    key={"B"}
                    color="white"
                />
            ),
            name: "Oppo f1s",
        },
        {
            logo: (
                <PiWifiMediumThin
                    size={iconSize + 20}
                    key={"C"}
                    color="white"
                />
            ),
            name: "Rashmika`s Iphone",
        },
        {
            logo: <BiArrowBack size={iconSize + 20} key={"D"} color="white" />,
            name: "Dialog 4G 111",
        },
        {
            logo: <BiArrowBack size={iconSize + 20} key={"D"} color="white" />,
            name: "Dialog 4G 111",
        },
        {
            logo: <BiArrowBack size={iconSize + 20} key={"D"} color="white" />,
            name: "Dialog 4G 111",
        },
    ];
    const wifiControllList = [
        "Manually",
        "In 1 hour",
        "In 4 hours",
        "In 1 day",
    ];

    const [selectedWifi, setSelectedWifi] = useState<string>("");

    useEffect(() => {}, [selectedWifi]);
    return (
        <div className="w-100">
            <div className="p-2 scrollbar-hidden flex justify-between items-center text-white sticky top-0 bg-[#323232] z-[9999]">
                <div
                    className={`flex justify-center items-center gap-5`}
                    onClick={() => setOpen("")}
                >
                    <BiArrowBack
                        size={iconSize + 20}
                        className={`rounded-xl ${neutralColor} p-2`}
                    />
                    <p className="font-extralight text-sm">Wi-Fi</p>
                </div>
                <div className="flex">
                    <ToggleButton toggle={toggle} setToggle={setToggle} />
                    {/* <PiToggleLeftLight size={iconSize + 20} />
                    <BiToggleRight size={iconSize + 20} /> */}
                </div>
            </div>
            <div className="p-1 ">
                {toggle ? (
                    wifilist.map((wifi, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedWifi(wifi.name)}
                            className={`text-white py-4 px-4  gap-2 flex justify-start mb-2 hover:bg-[#4e4e4e] rounded-xl ${
                                selectedWifi === wifi.name
                                    ? "items-start"
                                    : "items-center"
                            }`}
                        >
                            <HiMiniWifi
                                size={iconSize + 10}
                                className="flex place-items-baseline"
                            />

                            <div className="flex flex-col  w-full">
                                <h1 className="flex justify-start items-start">
                                    {wifi.name}
                                </h1>
                                {selectedWifi && selectedWifi === wifi.name && (
                                    <div className=" flex flex-col w-full space-y-3">
                                        <p>Secured</p>
                                        <div className=" z-60 relative flex justify-start items-center gap-3 ">
                                            <CheckBox />
                                            <p>Connect automatically</p>
                                        </div>
                                        <div className=" z-50 flex flex-col justify-end items-end">
                                            <button className="text-sm w-40 h-8 font-extralight rounded-sm bg-[#61d7f1] backdrop-blur-xs text-black active:scale-110 transition-all">
                                                Connect
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex  p-2 flex-col  justify-center items-start space-y-2">
                        <h1 className="font-bold text-white text-xl">
                            Wi-Fi is Off
                        </h1>
                        <p className="text-white font-light text-sm mt-1">
                            Turn on Wi-Fi to connect to an available Wi-Fi
                            network.
                        </p>
                        <p className="text-gray-300 font-extralight text-xs mt-1">
                            Turn Wi-Fi back on
                        </p>
                        <div
                            onClick={() => setToggleList((prev) => !prev)}
                            className="flex flex-col w-full border rounded-sm border-gray-700"
                        >
                            <span
                                className={`relative ${
                                    toggleList ? "mb-1" : "mb-0"
                                } flex justify-between items-center text-white text-sm font-extralight bg-[#5c5b5b] p-2 rounded-sm w-full`}
                            >
                                <div className={`${toggleList ? "mx-4" : ""}`}>
                                    {selection || "Manually"}
                                </div>
                                {toggleList && (
                                    <div className="rounded-2xl flex p-0.5 h-4 absolute bg-[#61d7f1] backdrop-blur-xs justify-center items-center top-2 -translate-y-0"></div>
                                )}

                                <FaAngleDown />
                            </span>
                            <span className="">
                                {toggleList &&
                                    wifiControllList.map((slot, index) =>
                                        slot !== selection ? (
                                            <div
                                                key={index}
                                                onClick={() =>
                                                    setSelection(slot)
                                                }
                                                className=" relative text-white text-sm  p-2 hover:bg-[#5c5b5b] bg-[#474747] "
                                            >
                                                <div className="rounded-2xl flex p-0.5 h-4 absolute bg-[#61d7f1] backdrop-blur-xs justify-center items-center top-2 -translate-y-0"></div>
                                                <div className="mx-4">
                                                    {slot}
                                                </div>
                                            </div>
                                        ) : null
                                    )}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

interface ToggleProps {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const ToggleButton = ({ toggle, setToggle }: ToggleProps) => {
    const [transition, setTransition] = useState<number>(7);

    useEffect(() => {
        if (toggle) {
            setTransition(7);
        } else {
            setTransition(0);
        }
    }, [toggle]);

    let trans = `translate-x-${transition}`;
    return (
        <div
            className={`transition-all relative p-3 border rounded-2xl w-14  mx-3 ${
                toggle ? "bg-[#61d7f1] border-[#61d7f1]" : "border-gray-400"
            } `}
            onClick={() => setToggle((prev) => !prev)}
        >
            <div
                style={{}}
                className={`transition-all  p-2  absolute left-1  shadow-xs ${trans} -translate-y-0 ${
                    toggle ? "bg-black" : "bg-white"
                } top-1  rounded-full`}
            ></div>
        </div>
    );
};

const CheckBox = () => {
    const [check, setCheck] = useState<boolean>(false);
    return (
        <div
            className={`relative z-10 h-3 w-3 p-3 border ${
                check
                    ? "bg-[#61d7f1] border-gray-700"
                    : "bg-[#3d3d3d] border-gray-400"
            } backdrop-blur-xs rounded-sm`}
            onClick={() => setCheck((prev) => !prev)}
        >
            {check && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <BiCheck size={25} color="black" />
                </div>
            )}
        </div>
    );
};
