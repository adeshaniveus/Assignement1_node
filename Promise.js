const ageValidation = (age) => {
  return new Promise((resolve, reject) => {
    if (age > 18) {
      resolve();
    } else {
      reject();
    }
  });
};

module.exports = ageValidation;
