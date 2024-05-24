import { IEventHandler } from '../interfaces/EventHandler';
import { generateSelector } from '../utils/selectors';

export class ChangeEventHandler implements IEventHandler {
  handleEvent(event: Event): string {
    const target = event.target as HTMLInputElement;
    const selector = generateSelector(target);
    const value = target.value;
    return `fireEvent.change(getByLabelText('${selector}'), { target: { value: '${value}' } });\n`;
  }
}
