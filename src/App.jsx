import { Switch, Route } from 'react-router-dom';
import StyledApp from './components/Sapp';
import Header from './components/Header';
import Footer from './components/Footer';
import Description from './components/Description';
import Cards from './components/Cards';
import CardsDescription from './components/CardsDescription';
import BarNav from './components/BarNav';

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <Description />
      <BarNav />
      <Switch>
        <Route exact path="/profile" component={Cards} />
        <Route path="/description/:id" component={CardsDescription} />
      </Switch>
      <Footer />
    </StyledApp>
  );
}

export default App;
