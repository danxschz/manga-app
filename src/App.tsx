import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Manga from './pages/Manga/Manga';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manga" element={<Manga />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
