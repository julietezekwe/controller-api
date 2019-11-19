import jwt from 'jsonwebtoken';
import autoBind from 'auto-bind';

/** Token Authenticate Class */
class AuthToken {
  constructor({ config }) {
    this.secret = config.secret;
    autoBind(this);
  }

  /**
   *Generate Token Method
   * @static
   * @param {object} userDetails
   * @param {string} expires
   * @returns {string} returns token
   * @memberof TokenAuthenticate
   */
  generateToken(userDetails, expires) {
    const token = jwt.sign(userDetails,
      this.secret, { expiresIn: expires });
    return token;
  }

  /**
   *Verfify Token Method
   * @static
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @returns {function} returns an object with status and method property
   * @memberof TokenAuthenticate
   */
  async tokenVerify(req, res, next) {
    const token = req.headers.authorization
      || req.headers['x-access-token'] || req.query.token || req.body.token;
    if (!token) {
      return res.status(401).send({
        status: 'error',
        message: 'No token provided',
      });
    }
    try {
      const verifyUser = await jwt.verify(token, this.secret);
      req.customer_id = verifyUser.customer_id;
      return next();
    } catch (error) {
      return res.status(401).send({
        status: 'error',
        message: 'Unauthorized token',
      });
    }
  }
}

export default AuthToken;
