import { IEventHandler } from '../interfaces/EventHandler';
import { generateSelector } from '../utils/selectors';
import { mapSelectorToTestingLibraryQuery } from '../utils/selectorToTestingLibraryMapper';

export class ClickEventHandler implements IEventHandler {
  handleEvent(event: Event): string {
    const selector = generateSelector(event.target as Element);
    const testingLibraryQuery = mapSelectorToTestingLibraryQuery(selector);
    return `fireEvent.click(screen.${testingLibraryQuery});\n`;
  }
}
