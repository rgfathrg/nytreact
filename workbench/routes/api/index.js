const router = require("express").Router();
const articleRoute = require("./articles");

router.use("/articles", articleRoute);

module.exports = router;