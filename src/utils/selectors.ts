export const generateSelector = (element: Element): string => {
  if (element.id) {
    return `#${element.id}`;
  } else if (element instanceof HTMLInputElement && element.name) {
    return `input[name="${element.name}"]`;
  } else if (element.textContent) {
    return `xpath=//*[text()='${element.textContent.trim()}']`;
  } else {
    return generatePathSelector(element);
  }
};

const generatePathSelector = (element: Element): string => {
  let path = '',
    currentEl = element;
  while (currentEl !== document.body && currentEl.parentNode) {
    const index =
      Array.from(currentEl.parentNode.children).indexOf(currentEl) + 1;
    path = `> ${currentEl.tagName}:nth-child(${index})` + path;
    currentEl = currentEl.parentNode as Element;
  }
  return path.substring(2);
};
