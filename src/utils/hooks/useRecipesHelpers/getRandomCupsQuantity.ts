export default function getRandomCupsQuantity(base: number, fractionDigits: number) {
  const cupsQuantity = Math.ceil(Math.random() * base * fractionDigits) / fractionDigits;
  return cupsQuantity > 1 ? `${cupsQuantity} cups` : `${cupsQuantity} cup`;
}
