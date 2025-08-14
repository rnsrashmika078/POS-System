import Banner from "@/assets/banner3.jpg";
// import ReactIcon from "@/assets/products/image_05.jpg";
import React from "react";

interface LSProps {
    setPin: React.Dispatch<React.SetStateAction<number>>;
}
const LockScreen: React.FC<LSProps> = ({ setPin }) => {
    return (
        <section>
            <div
                className="h-screen blur-4xl"
                style={{
                    backgroundImage: `url(${Banner})`,
                    objectFit: "contain",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>
            <div className="border p-2 rounded-md bg-black shadow-md flex flex-col p-10 absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* <div className="flex w-50 h-50  justify-center items-center">
                    <img
                        src={`${React}`}
                        alt="bgimage"
                        width={50}
                        height={50}
                        className="rounded-full border border-gray-200 flex justify-center items-center"
                    />
                </div> */}
                {/* <div className="flex-shrink-0 flex items-center justify-center ">
                    <img
                        src={`${React}`}
                        className="w-15 h-15 rounded-full flex-shrink-0 flex justify-center items-center"
                        alt="Logo"
                    />
                </div> */}
                <h1 className="text-3xl font-bold mt-5 text-center font-stretch-50% text0whir text-white">
                    Please Enter Your PIN
                </h1>
                <input
                    placeholder="PIN"
                    onChange={(e) => setPin(e.target.value)}
                    className="text-white border placeholder:text-white border-gray-400  bg-gray-800 rounded-sm p-2 mt-8 border-b-2  shadow-[#4dfffc] border-b-[#4dfffc]"
                ></input>
                <p className="text-center mt-10 font-extralight">
                    I forget my PIN
                </p>
            </div>
        </section>
    );
};

export default LockScreen;
