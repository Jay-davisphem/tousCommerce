import {useState, useEffect} from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NewsList from "./pages/newslist/NewsList";
import NewsDetail from "./pages/newsdetail/NewsDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/notfound/NotFound";
import axios from 'axios'

export default function App() {
  const [news, setNews] = useState(null)
  const [page, setPage] = useState(0)
  const baseURL = 'https://api.currentsapi.services/v1/latest-news?apiKey='+import.meta.env.VITE_API_KEY+ '&page=2'
  function getLatestNews(){
    axios.get(baseURL).then((response) => {
      setPage(response.data.page)
      setNews(response.data.news);
      console.log(response.data)
    }).catch((err) => {
      console.error(err)
    });
  }
  useEffect(() =>{
    getLatestNews()
  }, [])
  return (
    <BrowserRouter>
      <main className="p-4 md:p-8 relative text-main">
        <Header className='fixed'/>
        <Routes>
          <Route index path="/" element={<NewsList newslist={news}/>} />
          <Route path="/news-list/:id" element={<NewsDetail news={news}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
