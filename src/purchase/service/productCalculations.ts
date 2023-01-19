// (originalPrice * (discountPercentage / 100))
export async function calculateTotalTax(data: any[]) {
  const totalTax = await data.reduce(
    (acc, value) => acc + value.price * (value.tax / 100) * value.quantity,
    0
  );
  // const totalTax = await data.reduce((acc, value) => acc + value.tax, 0);
  return totalTax;
}
export async function calculateTotalDiscount(data: any[]) {
  const total = await data.reduce((acc, value) => {
    acc + value.price * (value.discount / 100) * value.quantity;
  }, 0);
  return total;
}
export async function calculateSubTotal(data: any[]) {
  const total = await data.reduce(
    (acc, value) => acc + value.price * value.quantity,
    0
  );
  return total;
}
export async function calculateTotal(
  tax: number,
  discount: number,
  subTotal: number
) {
  return tax + subTotal - discount;
}
export async function subtotal(
  tax: number,
  discount: number,
  subTotal: number
) {
  return tax + subTotal - discount;
}

