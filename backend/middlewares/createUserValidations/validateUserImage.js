module.exports = (req, res, next) => {
  const { image } = req.body;
  if (image && typeof image !== 'string') {
    return res.status(200).json({ message: 'campo `image` precisa ser string válida' });
  }
  return next();
};
