import product from "../../Product/model/product";

export async function generateUniqueId(_id: any) {
  const uniqueId = await unique_id();
  const doc = product.updateOne({ _id }, { $set: { uniqueId } });
  return doc;
}

function unique_id() {
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var id = letters.charAt(Math.floor(Math.random() * letters.length));
  id += Date.now().toString().slice(-16);
  return id;
}
