// export const getImageUrl = (imagename: string) => {
//   const imageUrl = new URL(
//     `/assets/images/${imagename}`,
//     // eslint-disable-next-line prettier/prettier
//     import.meta.url,
//   ).href;
//   return imageUrl;
// };
export const getImageUrl = (path: string) => {
  const assets = import.meta.glob("~/assets/images/**/*", {
    eager: true,
    import: "default",
  });

  return assets["/assets/images/" + path] as string;
};
