const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const tokenData = req.headers.authorization;
    if (tokenData) {
      token = await tokenData.split(" ")[1];
      const user = jwt.verify(token, process.env.SECRET_KEY);
    //   req.id = user.id;
      console.log("User ID new",user)
    //   console.log("REQUESTED INFO", req.id)

    } else {
      res.status(401).json({
        message: "Unauthorized User.",
      });
    }
    next();
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized User.",
    });
  }
};

module.exports = auth;
