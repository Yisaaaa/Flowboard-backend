require("dotenv").config();

console.log(console.log(require("dotenv").config()));
const PORT = process.env.PORT;

MONGO_URI =
  process.env.NODE_ENV == "development"
    ? process.env.MONGO_URI
    : process.env.MONGO_TEST_URI;

console.log(PORT);

module.exports = { PORT, MONGO_URI };
