/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { EventHandlerFactory } from '../factories/EventHandlerFactory';

const useEventCapture = () => {
  const [events, setEvents] = useState<string[]>([]);

  useEffect(() => {
    const eventHandler = (event: Event) => {
      try {
        const handler = EventHandlerFactory.getHandler(event);
        const scriptPart = handler.handleEvent(event);
        console.log({ scriptPart });
        setEvents((prevEvents) => [...prevEvents, scriptPart]);
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

  const clearEvents = () => {
    setEvents([]);
  };

  const removeEvent = (index: number) => {
    setEvents((currentEvents: string[]) =>
      currentEvents.filter((_, i: number) => i !== index)
    );
  };

  return { events, clearEvents, removeEvent };
};

export default useEventCapture;
