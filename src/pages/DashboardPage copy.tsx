import HR from "@/components/Common/HR";
import Topbar from "@/components/Dashboard/Topbar/Topbar";
import Tabs from "@/components/Dashboard/Tabs/Tabs";
import Card from "@/components/Dashboard/Card/Card";

// sample images
import OrderSummary from "@/components/Dashboard/OrderSummary/OrderSummary";
import { useActiveTab, useProductStore } from "@/zustand/store";
import { products } from "@/samples/data";
import { useEffect, useState } from "react";
import { CounterIn, Food } from "@/index";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import useScreenSize from "@/hooks/useHooks";
import { useAppContext } from "@/context/appContext";
import Footer from "@/components/Dashboard/Footer/Footer";

const Dashboard = () => {
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
    return counter.find((item) => item.name === name) || { name: "", count: 0 };
  };

  const screen = useScreenSize();
  const { activeSideBar, activeOrderBar, setActiveOrderBar } = useAppContext();

  const sideBarDynamics =
    screen !== "mobile" ? "flex " : "block h-screen z-10 top-0 left-0";
  const OrderListDynamics =
    screen !== "mobile" ? "flex " : "fixed h-screen z-15 top-0 right-0";

  console.log("TEST");
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div
        style={{
          width: activeSideBar ? "300px" : "60px",
        }}
        className={`${sideBarDynamics} z-[99999] transition-all  flex-shrink-0`}
      >
        <Sidebar />
      </div>
      <div className="flex w-full h-full">
        <div className="flex flex-col  h-full justify-between w-full">
          <div className="flex w-full h-16 justify-between px-5 py-2">
            <Topbar />
          </div>
          <Tabs />
          <HR />
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 z-50 overflow-y-auto">
            {filteredProducts.map((product, i) => (
              <div className="p-2" key={i}>
                <Card
                  clickEventAdd={() => {
                    setActiveOrderBar(true);
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
          <div className="flex w-full h-10 justify-between flex-shrink-0">
            <Footer />
          </div>
        </div>
        <div
          style={{
            width: activeOrderBar ? "400px" : "0",
          }}
          className={`${OrderListDynamics} z-50 transition-all h-full`}
        >
          <div className={`w-full  p-1 top-6  bg-[var(--main-background)]`}>
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
