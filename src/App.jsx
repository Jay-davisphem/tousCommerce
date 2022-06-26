import {useState, useEffect} from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NewsList from "./pages/newslist/NewsList";
import NewsDetail from "./pages/newsdetail/NewsDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/notfound/NotFound";
import axios from 'axios'
import {BiMessageRoundedAdd} from 'react-icons/bi'
export default function App() {
  const [news, setNews] = useState(null)
  const [page, setPage] = useState(0)
  const baseURL = 'https://api.currentsapi.services/v1/latest-news?apiKey='+import.meta.env.VITE_API_KEY
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
      <main className="p-4 md:p-8 relative text-main text-txt-cl">
        <Header className='fixed'/>
        <Routes>
          <Route index path="/" element={<NewsList newslist={news}/>} />
          <Route path="/news-list/:id" element={<NewsDetail news={news}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className='text-right sticky bottom-4 flex justify-end'>
          <BiMessageRoundedAdd className='hover:opacity-50' size='3em'/></div>
      </main>
    </BrowserRouter>
  );
}
