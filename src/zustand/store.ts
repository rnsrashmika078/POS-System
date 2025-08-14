import { create } from "zustand";
import { CounterIn, Food } from "..";
type Summary = {
    subTotal: number;
    taxes: number | 500;
    discount: number | 250;
    totalPayment: number;
    orderType: String;
};

type ProductStore = {
    products: Food[];
    removedItem: Food[];
    counter: CounterIn[];
    summaryProducts: Food[];
    summaryTotal: Summary | null;
    setProducts: (products: Food[]) => void;
    addProduct: (product: Food) => void;
    removeProduct: (product: Food) => void;
    editProduct: (
        product: Food,
        newVal: { count: number; name: string }
    ) => void;
    setCounter: (name: string, method: string) => void;
    setOrderSummary: (product: Food[]) => void;
    setPrice: (price: Summary) => void;
};

type ActiveTabStore = {
    tab: string;
    setActiveTab: (tab: string) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
    products: [],
    summaryProducts: [],
    removedItem: [],
    counter: [],
    summaryTotal: null,
    setProducts: (products) => set({ products }),
    addProduct: (product) =>
        // set((state) => ({ products: [...state.products, product] })),
        set((state) => {
            const exist = state.products.some(
                (item) => item.name === product.name
            );
            if (exist) return state;
            return {
                products: [...state.products, product],
            };
        }),
    setCounter: (name, method) =>
        set((state) => {
            if (method === "add") {
                const exist = state.counter.some((item) => item.name === name);

                if (exist) {
                    return {
                        ...state,
                        counter: state.counter.map((item) =>
                            item.name === name
                                ? {
                                      ...item,
                                      name: name,
                                      count: item.count + 1,
                                  }
                                : item
                        ),
                    };
                }
                return {
                    counter: [...state.counter, { name: name, count: 1 }],
                };
            } else {
                const exist = state.counter.some((item) => item.name === name);

                if (exist) {
                    return {
                        ...state,
                        counter: state.counter.map((item) =>
                            item.name === name
                                ? {
                                      ...item,
                                      name: name,
                                      count:
                                          item.count === 1 ? 1 : item.count - 1,
                                  }
                                : item
                        ),
                    };
                }
                return {
                    counter: [...state.counter, { name: name, count: 1 }],
                };
            }
        }),

    removeProduct: (product) => {
        set((state) => {
            const exist = state.counter.some(
                (item) => item.name === product.name
            );

            if (exist) {
                return {
                    ...state,
                    products: state.products.filter((p) =>
                        product.quantity > 0 ? p.name !== product.name : p
                    ),
                    counter: state.counter.filter(
                        (item) => item.name !== product.name
                    ),
                };
            }
            return {
                counter: [...state.counter, { name: product.name, count: 1 }],
            };
        });
    },
    editProduct: (product, newValue) =>
        set((state) => ({
            products: state.products.map((item) =>
                item.name === product.name ? { ...item, ...newValue } : item
            ),
        })),
    setOrderSummary: (products) => set({ summaryProducts: products }),
    setPrice: (price) =>
        set(() => ({
            summaryTotal: price,
        })),
}));

export const useActiveTab = create<ActiveTabStore>((set) => ({
    tab: "All",
    setActiveTab: (tab) => set({ tab }),
}));
