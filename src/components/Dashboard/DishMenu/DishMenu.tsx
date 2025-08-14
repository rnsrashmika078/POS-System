import Image_01 from "@/assets/newproducts/butterchicken.jpg";

const DishMenu = () => {
    return (
        <div>
            <div>
                <img
                    src={Image_01}
                    className="w-72 h-48 flex-shrink-0 rounded-xl"
                    alt="Logo"
                />
            </div>
        </div>
    );
};

export default DishMenu;
