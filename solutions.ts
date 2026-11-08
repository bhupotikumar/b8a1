const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier !== undefined) {
    console.log(value * multiplier);
    return value * multiplier;
  } else {
    console.log(value * 2);
    return value * 2;
  }
};