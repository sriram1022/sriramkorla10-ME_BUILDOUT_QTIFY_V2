import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="App-content">
        <Hero />
        <Section />
      </main>
    </div>
  );
}

export default App;
