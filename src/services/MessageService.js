import autoBind from 'auto-bind';
import NRP from 'node-redis-pubsub';
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
    this.pubsub = NRP({ ...config.redis, scope: 'controller' });
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
      this.pubsub.emit('message', options);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default MessageService;
