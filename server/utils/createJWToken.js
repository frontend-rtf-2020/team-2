var jwt = require("jsonwebtoken");
var reduce = require("lodash");




module.exports = createJWToken = (user) => {
  console.log(user);
  const token = jwt.sign(
    {
      data: reduce(
        user,
        (result, value, key) => {
          if (key !== "password") {
            result[key] = value;
          }
          return result;
        },
        {}
      ),
    },
    process.env.JWT_SECRET || "Lulu",
    {
      expiresIn: process.env.JWT_MAX_AGE || "2d",
      algorithm: "HS256",
    }
  );

  return token;
};