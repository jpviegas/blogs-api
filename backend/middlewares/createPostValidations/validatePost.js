const { Categories } = require('../../models');

// async function getCat(res, id) {
//   const categoriesExists = await Categories.findOne({ where: { id } });
//   if (!categoriesExists) {
//     return res.status(400).json({ message: '"categoryIds" not found' });
// }
// }
module.exports = async (req, res, next) => {
  const { title, content, categoryIds: id } = req.body;
  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }
  if (!content) {
    return res.status(400).json({ message: '"content" is required' });
  }
  // if (!userId) {
  //   return res.status(400).json({ message: '"userId" is required' });
  // }
  if (!id) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }
  // getCat(res, id);
  const categoriesExists = await Categories.findOne({ where: { id } });
  if (!categoriesExists) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  return next();
};
