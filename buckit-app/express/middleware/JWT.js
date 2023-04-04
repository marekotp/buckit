const { sign, verify } = require('jsonwebtoken')

const createTokens = (user) => {
    const userId = user.user_id;
    const accessToken = sign ({ userId }, process.env.SECRET_KEY  || "default_secret_key");
    console.log('Access token:', accessToken);
    return accessToken;
};

const validateToken = (req, res, next) => {
  const jwtToken = req.headers.authorization.split(' ')[1];
  const decodedToken = verify(jwtToken, process.env.SECRET_KEY );
  const user_id = decodedToken.userId;
  
  if (req.params.user_id !== user_id) {
    return res.status(403).json({ error: 'Access denied' });
  }

  next();
};

  

module.exports = {createTokens, validateToken}