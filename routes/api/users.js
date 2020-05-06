const router = require("express").Router();
const account = require("../../controllers/accountController");


router.route("/")
  .get(account.findAll)
  .post(account.create);

router
  .route("/:id")
  .get(account.findById)
  .put(account.update)
  .delete(account.remove);

module.exports = router;