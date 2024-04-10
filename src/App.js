import { imageUrl } from './Img-URL/config';
import './App.css';
import ChemicalLevelsForm from './Form';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={imageUrl} className="App-logo" alt="logo" />
      </header>
      <ChemicalLevelsForm />
    </div>
  );
}

export default App;
