import NavigationBar from './NavigationBar';
import './App.css'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
        <h1>Welcome to the Stoic Sanctuary</h1>
        <p>A community for students of stoicism</p>
      </header>
      <main>
        <img
          src="https://greekreporter.com/wp-content/uploads/2021/08/School_of_Athens_Credit_Wikipedia_Public_domain.jpg"
          alt="The School of Athens by Raphael"
          width="900" 
        />                
        
        <p>“The School of Athens,” showing some of the Ancient Greek philosophers, by Raphael. Vatican Museums. Credit: Public domain</p>

      </main>
    </div>
  );
}

export default App;
