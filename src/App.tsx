import './App.css';
import EventDisplayModal from './components/EventDisplayModal';

const App = () => {
  return (
    <div>
      <EventDisplayModal />
      <div>
        <h1>Test Interaction Components</h1>
        <button
          data-testid="click-button"
          onClick={() => console.log('Button Clicked')}
        >
          Click Me
        </button>
        <input
          type="text"
          data-testid="input-text"
          placeholder="Type here..."
          onChange={(e) => console.log('Input Changed', e.target.value)}
        />
        <input
          type="checkbox"
          className="input-checkbox"
          onChange={(e) => console.log('Checkbox Changed', e.target.checked)}
        />
        <button
          role="button"
          className="role-button"
          onMouseOver={() => console.log('Mouse Over Button')}
        >
          Mouse Over Me
        </button>
        <div className="simple-div">Just a div</div>
      </div>
    </div>
  );
};

export default App;
