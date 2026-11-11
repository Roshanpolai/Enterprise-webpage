
import { whatsappLink } from "../utils/whatsapp.js";

const offers = [
  {
    text: "Premium quality cashew kernels from Odisha",
    cta: "Get a Quote",
    href: whatsappLink("Hello, I am interested in your premium cashews. Please share details."),
  },
  {
    text: "Wholesale & bulk orders welcome",
    cta: "Enquire Now",
    href: whatsappLink("Hello, I would like to enquire about wholesale cashew orders."),
  },
  {
    text: "Multiple cashew grades available",
    cta: "Explore Products",
    href: "/products",
  },
];

export default offers;
