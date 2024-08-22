import jwt from "jsonwebtoken";

const verify = (req, res, next) => {
  console.log("authorization on progress");
  const token = req.headers["authorization"];
  if (token) {
    console.log(token);
    jwt.verify(
      token.split(" ")[1],
      process.env.PASSWORD_SECRET,
      (err, user) => {
        if (err) return res.status(403).json("Token is not valid!");
        req.user = user;
        next();
      }
    );
  } else {
    // console.log(authHeader+"none")
    return res.status(401).json("You are not authenticated!");
  }
};

export default verify;
