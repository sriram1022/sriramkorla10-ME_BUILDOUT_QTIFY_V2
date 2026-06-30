import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import Songs from './components/Songs/Songs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="App-content">
        <Hero />
        <Section />
        <Section title="New Albums" endpoint="https://qtify-backend.labs.crio.do/albums/new" />
        <Songs />
      </main>
    </div>
  );
}

export default App;
