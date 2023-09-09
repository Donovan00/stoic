import './App.css';
import MyComponent from './lowerHome';
import NavigationBar from './NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <header className="App-header">
        <h1>Welcome to the Stoic Sanctuary</h1>
        <p>A community for students of stoicism</p>
      </header>
      <main>
        <MyComponent/>
        <p>“The School of Athens,” showing some of the Ancient Greek philosophers, by Raphael. Vatican Museums. Credit: Public domain</p>
      </main>
    </div>
  );
}

export default App;
