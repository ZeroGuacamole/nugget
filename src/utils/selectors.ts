export const generateSelector = (element: Element): string => {
  const testId = element.getAttribute('data-testid');
  if (testId) {
    return `[data-testid="${testId}"]`;
  }

  if (element.hasAttribute('type')) {
    const typeAttribute = element.getAttribute('type');
    return `${element.tagName.toLowerCase()}[type="${typeAttribute}"]`;
  }
  if (element.hasAttribute('role')) {
    const roleAttribute = element.getAttribute('role');
    return `[role="${roleAttribute}"]`;
  }

  if (element.className) {
    const classes = element.className.split(/\s+/).join('.');
    return `.${classes}`;
  }

  return element.tagName.toLowerCase();
};
