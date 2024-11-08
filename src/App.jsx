import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { ArticlePage } from './Components/articles/solo-article/ArticlePage';
import { TopicPage } from './Components/topics/TopicPage';
import { TopicSection } from './Components/topics/TopicSection';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:article_id" element={<ArticlePage />} />
        <Route path="/topics/:topic_slug" element={<TopicPage />} />
        <Route path="/topics/" element={<TopicSection />} />
      </Routes>
    </div>
  );
}

export default App;
