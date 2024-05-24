import { IEventHandler } from '../interfaces/EventHandler';
import { generateSelector } from '../utils/selectors';
import { mapSelectorToTestingLibraryQuery } from '../utils/selectorToTestingLibraryMapper';

export class ChangeEventHandler implements IEventHandler {
  handleEvent(event: Event): string {
    const target = event.target as HTMLInputElement;
    const selector = generateSelector(target);
    const testingLibraryQuery = mapSelectorToTestingLibraryQuery(selector);
    return `fireEvent.change(screen.${testingLibraryQuery}, { target: { value: '${target.value}' } });\n`;
  }
}
