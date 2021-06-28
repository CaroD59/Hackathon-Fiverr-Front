import { Switch, Route } from 'react-router-dom';
import StyledApp from './components/Sapp';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Description from './components/Description/index';
import Cards from './components/Cards/index';
import CardsDescription from './components/CardsDescription/index';

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <Description />
      <Switch>
        <Route exact path="/" component={Cards} />
        <Route path="/profile" component={CardsDescription} />
      </Switch>
      <Footer />
    </StyledApp>
  );
}

export default App;
