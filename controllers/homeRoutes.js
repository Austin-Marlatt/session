const router = require('express').Router();
const { User } = require('../models');

router.get (`/`, async (req, res) =>{
try {
  let newProf = req.query.displayName;
  const currentUser = await User.findOne({ where: { display_name: newProf} });
  // const currentUser = userData.get({ plain: true });
  res.render(`homepage`, {
      currentUser,
  });
} catch (err) {
    res.status(404).json(err);
}
});

// router.get (`/profile`, async (req, res) =>{
//   try {
//     const userData = await User.findOne({ where: { display_name: req.query.display_name} });

//     const currentUser = userData.map((user) => user.get({ plain: true }));

//     res.render(`profile`, {
//       ...currentUser,
//   });
//   } catch (err) {
//   res.status(404).json(err);
//   }
// });


module.exports = router;
