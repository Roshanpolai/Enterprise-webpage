import company from '../data/company.js';

// Builds a WhatsApp chat link with a ready-typed message.
// The phone number comes from src/data/company.js (whatsappLink).
export function whatsappLink(message) {
  return `${company.whatsappLink}?text=${encodeURIComponent(message)}`;
}

export function productMessage(productName) {
  return `Hello Utkal Agro Industries, I am interested in ${productName}. Please share the price and availability.`;
}
