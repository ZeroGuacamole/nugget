import { IEventHandler } from '../interfaces/EventHandler';
import { generateSelector } from '../utils/selectors';

export class ClickEventHandler implements IEventHandler {
  handleEvent(event: Event): string {
    const mouseEvent = event as MouseEvent;
    const selector = generateSelector(mouseEvent.target as Element);
    return `fireEvent.click(getByText('${selector}'));\n`;
  }
}
