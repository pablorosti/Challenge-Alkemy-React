export const totalPowerstats = (array) => {
  let total = 0;
  array.forEach(function (a) {
    total += a;
  });
  return total;
};
