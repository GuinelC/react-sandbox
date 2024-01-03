import './App.css';

// Ne pas oublier l'import du component
import Welcome from './components/Welcome';
import Clock from './components/clock';
import Button from './components/Button';


function App() {
  return (
    <div className="App">
      {/* Appel du component (Welcome)
      ce mettre a la fin du mot welcome + ctrl space */}

      {/* <Welcome /> */}
      <Welcome name='Charly' />
      <Clock />
      <Button/>
    </div>
  );
}

export default App;
