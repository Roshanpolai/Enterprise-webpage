// import cashewFruit from "../assets/images/product/cashew-fruit.webp";
// import unpeeledCashew from "../assets/images/product/unpeeled-cashew.webp";
// import whiteCashew from "../assets/images/product/white-cashew.webp";

// import w180 from "../assets/images/product-catalog/W180.webp";
// import w210 from "../assets/images/product-catalog/W210.webp";
// import w240 from "../assets/images/product-catalog/W240.webp";
// import w320 from "../assets/images/product-catalog/W320.webp";
// import splits from "../assets/images/product-catalog/W400.webp";
// import pieces from "../assets/images/product-catalog/W180.webp";



// export const grades = [
//   { code: "W180 Cashews", image: w180 },
//   { code: "W210 Cashews", image: w210 },
//   { code: "W240 Cashews", image: w240 },
//   { code: "W320 Cashews", image: w320 },
//   // { code: "W400 Cashews", image: w400 },
//   { code: "W320 Cashews", image: w320 },
//   { code: "Split Cashews", image: splits },
//   { code: "LWP Cashews", image: pieces },
// ];

// export const categories = [
//   {
//     id: "fruit",
//     title: "Cashew Fruit",
//     text: "Fresh and juicy cashew fruits sourced directly from our farms.",
//     image: cashewFruit,
//     tint: "#f1f2e8",
//   },
//   {
//     id: "unpeeled",
//     title: "Unpeeled Cashew",
//     text: "High quality unpeeled cashews, naturally processed and packed.",
//     image: unpeeledCashew,
//     tint: "#fff1e0",
//   },
//   {
//     id: "white",
//     title: "White Cashew Nut",
//     text: "High quality white cashew nuts, pure and perfectly crafted.",
//     image: whiteCashew,
//     tint: "#f5f4f8",
//   },
// ];


import cashewFruit from "../assets/images/product/cashew-fruit.webp";
import unpeeledCashew from "../assets/images/product/unpeeled-cashew.webp";
import whiteCashew from "../assets/images/product/white-cashew.webp";

import w180 from "../assets/images/product-catalog/W180.webp";
import w210 from "../assets/images/product-catalog/W210.webp";
import w240 from "../assets/images/product-catalog/W240.webp";
import w320 from "../assets/images/product-catalog/W320.webp";
import splits from "../assets/images/product-catalog/W400.webp"; // TODO: replace with a real splits photo
import pieces from "../assets/images/product-catalog/W180.webp"; // TODO: replace with a real LWP photo

export const grades = [
  { label: "W180 Cashews", image: w180 },
  { label: "W210 Cashews", image: w210 },
  { label: "W240 Cashews", image: w240 },
  { label: "W320 Cashews", image: w320 },
  { label: "Split Cashews", image: splits },
  { label: "LWP Cashews", image: pieces },
];

export const categories = [
  {
    id: "fruit",
    title: "Cashew Fruit",
    text: "Fresh and juicy cashew fruits sourced directly from our farms.",
    image: cashewFruit,
    tint: "#f1f2e8",
    numberColor: "#bcc3a8",
  },
  {
    id: "unpeeled",
    title: "Unpeeled Cashew",
    text: "High quality unpeeled cashews, naturally processed and packed.",
    image: unpeeledCashew,
    tint: "#fff1e0",
    numberColor: "#f0b27a",
  },
  {
    id: "white",
    title: "White Cashew Nut",
    text: "High quality white cashew nuts, pure and perfectly crafted.",
    image: whiteCashew,
    tint: "#f5f4f8",
    numberColor: "#c2c2cc",
  },
];