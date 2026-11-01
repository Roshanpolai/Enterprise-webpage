const galleryImages = Array.from({ length: 12 }, (_, index) => ({
  src: `/images/gallery-${index + 1}.jpg`,
  alt: `Utkal Agro cashew photo ${index + 1}`,
}));

export default galleryImages;
