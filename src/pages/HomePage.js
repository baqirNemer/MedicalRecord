
import './css/HomePage.css';
import ResponsiveAppBar from './components/Navbar';
import ResponsiveFooter from './components/footer';
import SearchBar from './components/SearchBar';
import Carousel from './components/Carousel';
import About from './components/About';
import CardController from './components/CardController';

function Homepage() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <SearchBar />
      <Carousel />
      <About />
      <CardController />
      <ResponsiveFooter />
    </div>
  );
}

export default Homepage;
