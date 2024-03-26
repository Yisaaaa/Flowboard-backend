const userRouter = require("express").Router();

userRouter.get("/users", (request, response) => {
    response.json({ users: "here are the users" });
});

module.exports = userRouter;
