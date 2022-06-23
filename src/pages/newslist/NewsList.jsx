import NewsItem from "../../components/NewsItem";
function NewsList() {
  return (
    <>
      <h3 className='md:ml-32 mt-16 mb-8 text-center text-2xl md:text-left'>BREAKING NEWS</h3>
      <main className='md:ml-32'>
        <section className='text-md hidden md:block md:absolute md:bottom-8 text-black  md:left-0 rotate-90'>
          <a href="https://newsfeeder.vercel.app">
            https://newsfeeder.vercel.app
          </a>
        </section>
        <section className='flex-col text-center md:text-left'>
        {[1, 2, 3, 4, 5].map(() => (
          <NewsItem />
        ))}
        </section>
      </main>
    </>
  );
}
export default NewsList;
