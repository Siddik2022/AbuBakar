const jwt = require("jsonwebtoken");
const generateToken = () => {
  return jwt.sign({ name: 'Abu Bakar Siddik Akundo', age: 24 }, '2r4u7x!A%D*G-KaP', {
    expiresIn: '9d',
  })
}
module.exports = generateToken