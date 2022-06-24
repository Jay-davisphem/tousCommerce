import moment from 'moment'
function NewsItem({news}) {
  const newUrl = news.url.replace(/https:\/\/(www.)?/,'').replace(/\/.*/, '');
  const newDate = news.published.replace('0000', '0100').replace(/\-/g, ' ')
  console.log(newDate)
  return (
    <article className='my-8 shadow-lg p-4 md:py-8 shadow-grey'>
      <a href={`/news-list/${news.id}`} className='inline-block text-2xl md:text-4xl font-black mb-4 md:mb-8'>{news.title}</a>
      <section className='flex text-xs md:mx-auto justify-between gap-4 md:gap-8 md:text-2xl'>
        <a href={news.url}>Read full article on the <span>{newUrl}</span> website</a>
        <span>
          {moment(newDate).fromNow()}
        </span>
      </section>
    </article>
  );
}
export default NewsItem;
