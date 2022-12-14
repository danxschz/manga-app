import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Manga from './pages/Manga/Manga';
import MangaDetail from './pages/MangaDetail/MangaDetail';
import Anime from './pages/Anime/Anime';
import AnimeDetail from './pages/AnimeDetail/AnimeDetail';
import List from './pages/List/List';
import Footer from './components/Footer/Footer';
import MobileNav from './components/MobileNav/MobileNav';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/manga/:slug" element={<MangaDetail />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/anime/:slug" element={<AnimeDetail />} />
          <Route path="/my-list" element={<List />} />
        </Routes>
        <Footer />
        <MobileNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
