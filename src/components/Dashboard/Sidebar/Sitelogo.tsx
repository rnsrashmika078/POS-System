import ShadcnLogo from "@/assets/shadcn-logo.png";

const Sitelogo = () => {
    return (
        <div className="flex gap-2 justify-start items-center px-3 py-5 w-60">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center ">
                <img
                    src={ShadcnLogo}
                    className="w-10 h-10 rounded-full flex-shrink-0"
                    alt="Logo"
                />
            </div>
            <div className=" flex-col">
                <h1 className="font-bold text-xl">Ozone</h1>
                <p className="text-[var(--secondary)] text-sm ">
                    Cashier Daily Assistant
                </p>
            </div>
        </div>
    );
};

export default Sitelogo;
