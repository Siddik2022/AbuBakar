
exports.stringManup = (req, res, next) => {
  const birthDate = '09/01/1998';
  req.name = req.name + ', ' + 'birthDate'
  next ()
}
