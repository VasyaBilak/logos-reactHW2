import './App.css';
import Posts from './components/Posts/PostsComponent';
import Capsules from './components/Capsules/Capsules';

function App() {
  return (
    <div className="App">
      <h1>Posts:</h1>
      <Posts />
      <h1>Capsules:</h1>
      <Capsules />
    </div>
  );
}

export default App;
