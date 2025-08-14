import Image_01 from "@/assets/newproducts/butterchicken.jpg";
import Image_02 from "@/assets/newproducts/frechfries.jpeg";
import Image_03 from "@/assets/newproducts/roastbeaf.jpg";
import Image_04 from "@/assets/newproducts/sauakraut.jpg";
import Image_05 from "@/assets/newproducts/chickenkottu.jpg";
import Image_06 from "@/assets/newproducts/cheesekottu.jpeg";
import Image_07 from "@/assets/newproducts/eggrice.jpg";
import Image_08 from "@/assets/newproducts/chickenfriedrice.jpg";
import Image_09 from "@/assets/newproducts/Traditional.jpg";
import Image_10 from "@/assets/newproducts/biriyani.jpg";
import Image_11 from "@/assets/newproducts/milkrice.jpg";
import Image_12 from "@/assets/newproducts/milktea.jpg";
import Image_13 from "@/assets/newproducts/coffee.jpg";
import Image_14 from "@/assets/newproducts/komarikadrink.jpg";
import Image_15 from "@/assets/newproducts/lemonjuice.jpg";
import Image_16 from "@/assets/newproducts/ceylontea.jpeg";
import { Food } from "..";

export const products: Food[] = [
    {
        image: Image_01,
        name: "Butter Chicken",
        price: 1000,
        available: true,
        quantity: 5,
        size: "Medium",
        category: "food",
    },
    {
        image: Image_02,
        name: "French Fries",
        price: 500,
        available: true,
        quantity: 5,
        category: "food",
        size: "Medium",
    },
    {
        image: Image_03,
        name: "Roast beef",
        price: 1500,
        available: false,
        quantity: 5,
        category: "food",
        size: "Medium",
    },
    {
        category: "food",
        image: Image_04,
        name: "Saurekraut",
        price: 750,
        available: true,
        quantity: 5,
        size: "Medium",
    },
    {
        category: "food",
        image: Image_05,
        name: "Chicken Kottu",
        price: 1000,
        available: true,
        quantity: 5,
        size: "Medium",
    },
    {
        category: "food",
        image: Image_06,
        name: "Cheese Kottu",
        price: 500,
        available: true,
        quantity: 5,
        size: "Medium",
    },
    {
        image: Image_07,
        category: "food",
        name: "Egg Rice",
        price: 1500,
        available: false,
        quantity: 5,
        size: "Medium",
    },
    {
        image: Image_08,
        category: "food",
        name: "Chicken Rice",
        price: 750,
        available: true,
        quantity: 5,
        size: "Medium",
    },
    {
        image: Image_09,
        category: "food",
        name: "Traditional",
        price: 1000,
        available: true,
        quantity: 5,
        size: "Medium",
    },
    {
        image: Image_10,
        name: "Biryani",
        category: "food",
        price: 500,
        available: true,
        quantity: 5,
        size: "Medium",
    },
    {
        image: Image_11,
        name: "Milk Rice",
        price: 1500,
        category: "food",
        available: false,
        quantity: 5,
        size: "Medium",
    },
    {
        category: "beverage",
        image: Image_12,
        name: "Milk Tea",
        price: 750,
        available: true,
        quantity: 5,
        size: "Medium",
    },
    {
        image: Image_13,
        category: "beverage",
        name: "Coffee Tea",
        price: 750,
        available: true,
        quantity: 5,
        size: "Medium",
    },
    {
        image: Image_14,
        category: "beverage",
        name: "Aloe Vera Drink",
        price: 1000,
        available: true,
        quantity: 5,
        size: "Medium",
    },
    {
        image: Image_15,
        name: "Orange Juice",
        category: "beverage",
        price: 500,
        available: true,
        quantity: 5,
        size: "Medium",
    },
    {
        image: Image_16,
        name: "Ceylon Tea",
        category: "beverage",
        price: 1500,
        available: false,
        quantity: 5,
        size: "Medium",
    },
];
// export const menuItems = ['Beverage']
