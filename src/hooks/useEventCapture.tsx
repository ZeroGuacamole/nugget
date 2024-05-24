import { useEffect, useState } from 'react';
import { EventHandlerFactory } from '../factories/EventHandlerFactory';

const useEventCapture = () => {
  const [testScript, setTestScript] = useState('');

  useEffect(() => {
    const eventHandler = (event: Event) => {
      try {
        const handler = EventHandlerFactory.getHandler(event);
        const scriptPart = handler.handleEvent(event);
        setTestScript((prev) => prev + scriptPart);
      } catch (error) {
        console.error((error as Error).message);
      }
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

  return { testScript };
};

export default useEventCapture;
