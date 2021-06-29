import StyledApp from './components/Sapp';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Description from './components/Description/index';
import Cards from './components/Cards/index';
import BarNav from './components/BarNav';

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <Description />
      <BarNav />
      <Cards />
      <Footer />
    </StyledApp>
  );
}

export default App;
