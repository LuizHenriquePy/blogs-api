module.exports = (error, _req, res, _next) => {
  if (error.type) {
    return res.status(error.type).json({ message: error.message });
  }
  return res.status(500).json({ message: 'internal server error' });
};