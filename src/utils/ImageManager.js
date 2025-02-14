
const images = import.meta.glob("../assets/*", { eager: true });
/**
 * Resolve the image path. If the image exists, return its URL.
 * If not, return a fallback image.
 * 
 * @param {string} imagePath - The path of the image to resolve.
 * @param {string} fallback - The fallback image to return if no match is found.
 * @returns {string} - The resolved image URL.
 */
export const resolveImage = (imagePath, fallback) => {
  const matchedImage = Object.keys(images).find((path) =>
    path.endsWith(imagePath), 
  );

  return matchedImage ? images[matchedImage].default : fallback;
};