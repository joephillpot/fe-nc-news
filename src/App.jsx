import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { ArticlePage } from './Components/articles/solo-article/ArticlePage';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:article_id" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
