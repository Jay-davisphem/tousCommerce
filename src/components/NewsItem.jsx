function NewsItem() {
  return (
    <article className='my-8 shadow-lg p-4 shadow-grey'>
      <h1 className='text-2xl md:text-4xl font-black mb-2'>How to expand your business using social media</h1>
      <section className='flex text-xs md:mx-auto md:justify-start gap-4 md:gap-8 md:text-2xl'>
        <span>Read full article on: </span>
        <span>
          <a href="#">wwww.reallygreatsite.com</a>
        </span>
      </section>
    </article>
  );
}
export default NewsItem;
