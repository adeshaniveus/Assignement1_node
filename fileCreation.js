const fs = require("fs");

const WriteFile = async (fileName, data) => {
  try {
    return await fs.promises.writeFile(fileName, data);
  } catch {
    console.log("File write Operation failed");
  }
};

module.exports = WriteFile;
