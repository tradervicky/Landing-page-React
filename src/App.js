
import './App.css';
import Header from './components/Header/Header';
import TwoColumn from './components/Two Column/TwoColumn';
import Services from './components/services/Services';
import Experties from './components/Experties/Experties';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact Us/Contact';
import Footer from './components/Footer/Footer';
import Testimonial from './components/Testimonial/Testimonial';
import Faq from './components/FAQ/Faq';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App">
     <Header/>
     <TwoColumn/>
     <Services/>
     <Experties/>
     <Portfolio/>
     <Testimonial/>
     <Faq/>
     <Blog/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
