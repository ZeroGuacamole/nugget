import useEventCapture from './hooks/useEventCapture';
import './App.css';

const App = () => {
  useEventCapture();

  return (
    <div>
      <input type="text" placeholder="Type here..." />
      <button>Click Me</button>
    </div>
  );
};

export default App;
