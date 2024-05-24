/* eslint-disable @typescript-eslint/no-explicit-any */
import useEventCapture from '../hooks/useEventCapture';

const EventDisplayModal = () => {
  const { events, clearEvents, removeEvent } = useEventCapture();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div
      style={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        width: '300px',
        height: '200px',
        overflow: 'auto',
        backgroundColor: 'white',
        border: '1px solid black',
        zIndex: 1000,
      }}
    >
      <h3>Recorded Events</h3>
      {events.length > 0 ? (
        <div>
          <button onClick={clearEvents}>Clear All</button>
          {events.map((event: any, index: number) => (
            <div
              key={index}
              style={{
                marginBottom: '10px',
                padding: '5px',
                borderBottom: '1px solid grey',
              }}
            >
              <code>{event}</code>
              <button onClick={() => copyToClipboard(JSON.stringify(event))}>
                Copy
              </button>
              <button onClick={() => removeEvent(index)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No events recorded.</p>
      )}
    </div>
  );
};

export default EventDisplayModal;
