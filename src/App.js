import './App.css';
import Data from './data.json';
import CardView from './Cards/CardView';
import FormsView from './Form/Forms';
import Card from './Cards/Card';

function App() {
  return (
    <div className="App">
      <FormsView />
      <CardView data={Data} title={"abc"} />
      <Card />
    </div>
  );
}

export default App;
