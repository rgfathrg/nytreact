const router = require("express").Router();
const articlesController = require("../../controllers/articleController");

router.route("/")
    .get(articlesController.findAll)
    

router
  .route("/:id")
  .post(articlesController.create)
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;