export const avarage = (array) => {
  let total = 0;
  array.forEach(function (a) {
    total += a;
  });
  return total / array.length;
};
