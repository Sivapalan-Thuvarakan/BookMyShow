import './App.css';
import Header from './components/header/Header';
import SliderImages from './components/SliderImages';
import CardsSlider from './components/CardsSlider';
import Premire from './components/Premire';
import Footer from './components/Footer';
import AllMovies from "./components/AllMovies";
import SingleMovie from "./components/SingleMovie";
import Registration from "./components/Registration";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
            <SliderImages />
            <CardsSlider />
            <Premire />  
        </Route>
        <Route exact path="/all-movies"> 
        <AllMovies />
        </Route>
        <Route exact path="/all-movies/:movid"> 
        <SingleMovie />
        </Route>
        <Route exact path="/registration"> 
        <Registration />
        </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
