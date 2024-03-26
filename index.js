const app = require("./app");
const config = require("./utils/config");

app.listen(config.PORT, () => {
    console.log(`App listening at port ${config.PORT}`);
});
