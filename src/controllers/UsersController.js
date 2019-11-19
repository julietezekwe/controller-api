import autoBind from 'auto-bind';
/**
   * Creates an instance of UsersController.
   */
class UsersController {
  /**
   * Creates an instance of UsersController.
   * @param {object} param
   * @memberof UsersController
   */
  constructor({ authToken }) {
    this.authToken = authToken;
    autoBind(this);
  }

  /**
   * Sends message to pre-defined-users
   * @param {object} req
   * @param {object} res
   *@returns {object} - user
   */
  async authenticateUser(req, res) {
    const { customer_id } = req.body;

    try {
      if (customer_id) {
        const token = await this.authToken.generateToken({ customer_id }, '1hr');

        return res.status(201).json({ success: true, message: 'Successfully authenticated this user', token });
      }
      return res.status(201).json({ success: false, message: 'Provide a user id' });
    } catch (error) {
      return res.json(error);
    }
  }
}
export default UsersController;
