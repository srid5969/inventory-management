// (originalPrice * (discountPercentage / 100))
export async function calculateTotalTax(data: any[]) {
  const totalTax = await data.reduce((acc, value) => {
    var t = value.discount / 100;
    let d = value.price * t;
    let discount = d;

    discount = discount * value.quantity;
    t = value.tax / 100;
    discount = (value.price*value.quantity) - discount;
    let tax = discount * t;
    
    // tax = tax * value.quantity;
    return acc + tax;
  }, 0);
  
  return totalTax;
}

export async function calculateTotalDiscount(data: any[]) {
  const total = await data.reduce((acc, value) => {
    var t = value.discount / 100;
    let d = value.price * t;
    let discount = d;
    discount = discount * value.quantity;
    return acc + discount;
  }, 0);
  return total;
}

export async function calculateSubTotal(data: any[]) {
  const total = await data.reduce((acc, value) => {
    let Data = value.price * value.quantity;
    return acc + Data;
  }, 0);
  return total;
}

// export async function calculateTotal(
//   tax: number,
//   discount: number,
//   subTotal: number
// ) {
//   return tax + subTotal - discount;
// }
export async function grandTotal(
  tax: number,
  discount: number,
  subTotal: number
) {
  let val=subTotal+tax
  return val-discount
}
