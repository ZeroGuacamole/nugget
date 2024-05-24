import useEventCapture from './hooks/useEventCapture';
import './App.css';

const App = () => {
  const { testScript } = useEventCapture();

  return (
    <div>
      <input type="text" placeholder="Type here..." />
      <button>Click Me</button>
      <br />
      <pre>{testScript}</pre>
    </div>
  );
};

export default App;
