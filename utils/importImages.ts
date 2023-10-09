export const getImageUrl = (imagename: string) => {
  const imageUrl = new URL(
    `/assets/images/${imagename}`,
    // eslint-disable-next-line prettier/prettier
		import.meta.url
  ).href;
  return imageUrl;
};
