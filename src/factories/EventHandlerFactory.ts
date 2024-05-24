import { IEventHandler } from '../interfaces/EventHandler';
import { ClickEventHandler } from '../eventHandlers/ClickEventHandler';
import { ChangeEventHandler } from '../eventHandlers/ChangeEventHandler';

export class EventHandlerFactory {
  static getHandler(event: Event): IEventHandler {
    switch (event.type) {
      case 'click':
        return new ClickEventHandler();
      case 'change':
        return new ChangeEventHandler();
      default:
        throw new Error('Unsupported event type');
    }
  }
}
