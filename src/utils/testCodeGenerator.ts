import { mapSelectorToTestingLibraryQuery } from './selectorToTestingLibraryMapper';

interface EventData {
  type: string;
  selector: string;
  value?: string;
}

export const generateTestCode = (events: EventData[]): string => {
  const imports = `import { render, fireEvent, screen } from '@testing-library/react';\nimport MyComponent from './MyComponent';\n\n`;
  let tests = "test('should simulate user interactions correctly', () => {\n";
  tests += `  render(<MyComponent />);\n`;

  events.forEach((event) => {
    const queryFunction = mapSelectorToTestingLibraryQuery(event.selector);
    console.log({ queryFunction });
    if (event.type === 'click') {
      tests += `  fireEvent.click(screen.${queryFunction});\n`;
    } else if (event.type === 'change') {
      tests += `  fireEvent.change(screen.${queryFunction}, { target: { value: '${event.value}' } });\n`;
    }
  });

  tests += '});\n';

  return imports + tests;
};
