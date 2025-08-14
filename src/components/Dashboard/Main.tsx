import HR from "@/components/Common/HR";
import Topbar from "@/components/Dashboard/Topbar/Topbar";
import Tabs from "@/components/Dashboard/Tabs/Tabs";
import Card from "@/components/Dashboard/Card/Card";

// sample images
import OrderSummary from "@/components/Dashboard/OrderSummary/OrderSummary";
import Sidebar from "./Sidebar/Sidebar";
import { useActiveTab, useProductStore } from "@/zustand/store";
import { products } from "@/samples/data";
import { useEffect, useState } from "react";
import { CounterIn, Food } from "@/index";

const Main = () => {
    const orderedProduct = useProductStore((store) => store.products);
    const addProduct = useProductStore((store) => store.addProduct);
    const counter = useProductStore((store) => store.counter);
    const setCounter = useProductStore((store) => store.setCounter);
    const activeTab = useActiveTab((store) => store.tab);

    //React States
    const [filteredProducts, setFiltedProducts] = useState<Food[]>([]);

    useEffect(() => {
        const filter = products.filter((item) => {
            if (activeTab === "All") {
                return products;
            } else {
                return item.category.startsWith(activeTab.toLowerCase());
            }
        });
        setFiltedProducts(filter);
    }, [activeTab]);

    const handleCounter = (name: string): CounterIn => {
        return (
            counter.find((item) => item.name === name) || { name: "", count: 0 }
        );
    };

    return (
        <div className="flex h-screen overflow-x-auto">
            {/* Sidebar - fixed position */}
            <Sidebar />
            {/* Main content area */}
            <div className="relative flex-[1] h-full w-60">
                <div className="ml-60 sticky z-30 top-0">
                    <div className=" bg-[var(--background)]  ">
                        <Topbar />
                        <HR className="mt-2" />
                    </div>
                </div>
                <div className="sticky top-[58px] z-40 ml-60">
                    <Tabs />
                    <HR />
                </div>
                {/* Main content */}
                <div
                    className={`transition-all flex h-screen ml-60 ${
                        orderedProduct.length > 0 ? "md:mr-80" : "md:mr-3"
                    }`}
                >
                    <div className="flex-[3]  h-full w-60 bg-[var(--main-background)]  ">
                        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 z-50  ">
                            {filteredProducts.map((product, i) => (
                                <div className="p-2 " key={i}>
                                    <Card
                                        clickEventAdd={() => {
                                            addProduct({
                                                ...product,
                                                quantity: 1,
                                                price: product.price,
                                                image: product.image,
                                                available: product.available,
                                                name: product.name,
                                                size: product.size,
                                                category: product.category,
                                            });
                                            setCounter(product.name, "add");
                                        }}
                                        image={product.image}
                                        name={product.name}
                                        price={product.price}
                                        availability={product.available}
                                        quantity={product.quantity}
                                        counter={handleCounter(product.name)}
                                    />
                                </div>
                            ))}
                        </div>
                        {/* <div className="flex sticky bottom-0 p-2 bg-[var(--background)]">
                            <MdOutlineRoomPreferences size={20} />
                        </div> */}
                    </div>
                    <div
                        className={`${
                            orderedProduct.length > 0
                                ? "w-80 xl:w-80"
                                : "w-0 xl:w-0 "
                        } fixed  p-2 top-[109px] right-5 bg-[var(--main-background)]`}
                    >
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
