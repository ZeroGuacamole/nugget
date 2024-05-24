export const mapSelectorToTestingLibraryQuery = (selector: string): string => {
  if (selector.startsWith('[data-testid="')) {
    const testId = selector.match(/\[data-testid="([^"]+)"\]/)![1];
    return `getByTestId('${testId}')`;
  } else if (selector.startsWith('[role="')) {
    const role = selector.match(/\[role="([^"]+)"\]/)![1];
    return `getByRole('${role}')`;
  } else if (selector.includes('type="')) {
    const type = selector.match(/type="([^"]+)"/)![1];
    return `getByLabelText('${type}')`;
  } else if (selector.startsWith('.')) {
    const className = selector.slice(1).replace('.', ' ');
    return `getByClassName('${className}')`;
  } else {
    return `getByTagName('${selector}')`;
  }
};
