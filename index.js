const app = require("./app");
const config = require("./utils/config");
const mongoose = require("mongoose");

mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    console.log("Successfully connect to DB");
    app.listen(config.PORT, () => {
      console.log(`App listening at port ${config.PORT}`);
    });
  })
  .catch((err) => console.log("failed to connect to db: ", err));
