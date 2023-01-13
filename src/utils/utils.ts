export const convertNumbers2English = (string: any) => {
  return string
    ?.replace(/[\u0660-\u0669]/g, (c: any) => {
      return c.charCodeAt(0) - 0x0660;
    })
    .replace(/[\u06f0-\u06f9]/g, (c: any) => {
      return c.charCodeAt(0) - 0x06f0;
    });
};
