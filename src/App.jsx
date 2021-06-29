import { Switch, Route } from 'react-router-dom';
import StyledApp from './components/Sapp';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Description from './components/Description/index';
import Cards from './components/Cards/index';
import CardsDescription from './components/CardsDescription/index';
import BarNav from './components/BarNav';

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <Description />
      <BarNav />
      <Switch>
        <Route exact path="/" component={Cards} />
        <Route path="/profile/:id" component={CardsDescription} />
      </Switch>
      <Footer />
    </StyledApp>
  );
}

export default App;
