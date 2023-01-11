const routes = {
  todo: '',
};

const ref = { ...{ routes } };
const map: any = {};
const dynamicMap: any = {};

Object.entries(ref).forEach(([key, value]) => {
  Object.entries(value).forEach(([key1, value1]) => {
    const path = `/${value1}`;

    map[key] = {
      ...map[key],
      [key1]: path,
    };

    const generatePathFunc = (args: any) => {
      let newPath = path;

      if (!args || Object.values(args).length < 1) return newPath;

      Object.entries(args).forEach(([key3, value3]) => {
        newPath = newPath.includes(`/:${key3}?`)
          ? newPath.replaceAll(`/:${key3}?`, `/${value3}`)
          : newPath.replaceAll(`/:${key3}`, `/${value3}`);
      });

      return newPath;
    };

    dynamicMap[key] = {
      ...dynamicMap[key],
      [key1]: (args: any) => generatePathFunc(args),
    };
  });
});

export { map, dynamicMap };
