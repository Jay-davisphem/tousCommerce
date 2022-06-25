import NewsItem from "../../components/NewsItem";
function NewsList({newslist}) {
  return (
    <>
      <h3 className='md:ml-32 mt-16 mb-8 text-center text-2xl md:text-left'>BREAKING NEWS</h3>
      <main className='md:ml-32'>
        <section className='text-md hidden md:block md:absolute md:bottom-[50%] text-black  md:left-0 rotate-90'>
          <a href="https://newsfeeder.vercel.app">
            https://newsfeeder.vercel.app
          </a>
        </section>
        <section className='flex-col scrolee text-center md:text-left'>
        {newslist?.map((news) => (
          <NewsItem key={news.id} news={news}/>
        ))}
        </section>
      </main>
    </>
  );
}
export default NewsList;
