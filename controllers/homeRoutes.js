const router = require('express').Router();
const { User } = require('../models');

router.get (`/`, async (req, res) =>{
try {
  let newProf = req.query.displayName;

  const userData = await User.findOne({
    where: { display_name: newProf}
});
    const currentUser = userData.get({ plain: true });

  res.render(`homepage`, { currentUser });
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

module.exports = router;
