interface EventData {
  type: string;
  selector: string;
  value?: string; // for inputs
}

export const generateTestCode = (events: EventData[]): string => {
  const imports = `import { render, fireEvent } from '@testing-library/react';\nimport MyComponent from './MyComponent';\n\n`;
  let tests = "test('should handle user interaction correctly', () => {\n";
  tests += `  const { getByText, getByLabelText, getByRole } = render(<MyComponent />);\n`;

  events.forEach((event) => {
    if (event.type === 'click') {
      tests += `  fireEvent.click(getByText('${event.selector}'));\n`;
    } else if (event.type === 'change') {
      tests += `  fireEvent.change(getByLabelText('${event.selector}'), { target: { value: '${event.value}' } });\n`;
    }
    // Add more conditions for other types of events as necessary
  });

  tests += `  // Add assertions here\n`;
  tests += '});\n';

  return imports + tests;
};
