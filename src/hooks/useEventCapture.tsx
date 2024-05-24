import { useEffect } from 'react';
import { generateSelector } from '../utils/selectors';

const useEventCapture = () => {
  useEffect(() => {
    const eventHandler = (event: Event) => {
      const target = event.target as Element;
      const selector = generateSelector(target);
      console.log(`${event.type} event on:`, selector);
    };

    const eventsToCapture = ['click', 'change'];
    eventsToCapture.forEach((eventName) => {
      document.addEventListener(eventName, eventHandler);
    });

    return () => {
      eventsToCapture.forEach((eventName) => {
        document.removeEventListener(eventName, eventHandler);
      });
    };
  }, []);

  return null;
};

export default useEventCapture;
