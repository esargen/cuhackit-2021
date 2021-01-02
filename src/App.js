import './App.scss';
import Vertical from './components/Vertical/vertical';
import Horizontal from './components/Horizontal/horizontal';

function App() {

  return (
    <div>
      <Vertical />
      <div className="horizWrapper">
        <Horizontal />
      </div>
    </div>
  );
}

export default App;
