// const fs = require("fs");
import fs from "fs";

// const data = {table:[{id: 1, name: 'my name'}]}
// const file_path = './my_data.txt'
// writeFile(file_path, data)
export async function writeFile(filename, data) {
  
  await fs.promises.appendFile(
    filename,
    JSON.stringify(data, null, 4),
    "utf8"
  );
}
