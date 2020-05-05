const router = require("express").Router();
const account = require("../../controllers/accountController");

// Matches with "/api/recipes"
router.route("/")
  .get(account.findAll)
  .post(account.create);

// Matches with "/api/account/:id"
router
  .route("/:id")
  .get(account.findById)
  .put(account.update)
  .delete(account.remove);

module.exports = router;