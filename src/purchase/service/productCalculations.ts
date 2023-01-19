export async function calculateTotalTax(data: any[]) {
  const totalTax = await data.reduce((acc, value) => acc + value.tax, 0);
  return totalTax;
}
export async function calculateTotalDiscount(data: any[]) {
  const totalTax = await data.reduce((acc, value) => acc + value.discount, 0);
  return totalTax;
}
export async function calculateSubTotal(data: any[]) {
  const totalTax = await data.reduce((acc, value) => acc + value.price, 0);
  return totalTax;
}
export async function calculateTotal(
  tax: number,
  discount: number,
  subTotal: number
) {
  return tax + discount + subTotal;
}
