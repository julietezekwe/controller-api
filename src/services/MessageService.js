import autoBind from 'auto-bind';
import Queue from 'bull';
/**
   * Creates an instance of MessageService.
   */
class MessageService {
  /**
   * Creates an instance of MessageService.
   * @param {object} param
   * @memberof MessageService
   */
  constructor({ config, logger }) {
    this.logger = logger;
    this.queue = new Queue('newMessage', {
      redis: config.redis,
    });
    autoBind(this);
  }

  /**
   *  Adds message to the queue
   * @param {number} - options
   *@returns {object} - success
   */
  // eslint-disable-next-line class-methods-use-this
  async queueMessage(options) {
    try {
      await this.queue.add(options);
      return true;
    } catch (error) {
      throw error;
    }
  }
}
export default MessageService;
