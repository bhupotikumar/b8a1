const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier !== undefined) {
    console.log(value * multiplier);
    return value * multiplier;
  } else {
    console.log(value * 2);
    return value * 2;
  }
};

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.toLowerCase().trim();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (value) {
    return "Active";
  } else return "Inactive";
};

const formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
  return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return ([] as T[]).concat(...arrays);
};