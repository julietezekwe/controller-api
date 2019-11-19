import autoBind from 'auto-bind';
/**
   * Creates an instance of MessagesController.
   */
class MessagesController {
  /**
   * Creates an instance of MessagesController.
   * @param {object} param
   * @memberof MessagesController
   */
  constructor({ messageService, logger }) {
    this.messageService = messageService;
    this.logger = logger;
    autoBind(this);
  }

  /**
   * Sends message to pre-defined-users
   * @param {object} req
   * @param {object} res
   *@returns {object} - user
   */
  async sendMessage(req, res) {
    const { message, task_id, contact_list } = req.body;
    if (!message || !task_id || !contact_list) {
      return res.status(409).json({
        success: false,
        message: 'Please provide all the required fields [message, task_id, contact_list]',
      });
    }
    try {
      const addMessage = await this.messageService.queueMessage({
        message, task_id, contact_list, customer_id: req.customer_id,
      });
      if (addMessage) {
        return res.status(201).json({ success: true, message: 'Successfully sent messages' });
      }
      return res.status(409).json({ success: false, message: 'unable to send message' });
    } catch (error) {
      return res.json(error);
    }
  }
}
export default MessagesController;
