import { Routes, Route, BrowserRouter } from "react-router-dom";
import NewsList from "./pages/newslist/NewsList";
import NewsDetail from "./pages/newsdetail/NewsDetail";
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

export default function App() {
  return (
    <BrowserRouter>
        <main>
          <Header />
        <Routes>
          <Route index path="/" element={<NewsList />} />
          <Route path="/news-list/:id" element={<NewsDetail />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
          <Footer />
        </main>
    </BrowserRouter>
  );
}
