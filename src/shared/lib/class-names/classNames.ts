export const classNames = (...clsArray: (string | Record<string, boolean>)[]) => {
  let resultClass = "";

  clsArray.forEach((cls) => {
    if (typeof cls === "string") resultClass += cls + " ";
    else if (typeof cls === "object") {
      Object.entries(cls).forEach((entry) => {
        if (entry[1]) resultClass += entry[0] + " ";
      });
    }
  });

  return resultClass.trim();
};
