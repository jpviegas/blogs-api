module.exports = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName === null || displayName === undefined) {
    return res.status(400).json({ message: '"displayName" is required' });
  }
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  if (typeof displayName !== 'string') {
    return res.status(400).json({ message: '"displayName" must be string' });
  }
  return next();
};
