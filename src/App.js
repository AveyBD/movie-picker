import './App.css';
import Container from './components/Container/Container';
import FAQ from './components/FAQ/FAQ';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="bg-green-100">
    <Header></Header>
    <Container></Container>
    <FAQ></FAQ>
    </div>
  );
}

export default App;
