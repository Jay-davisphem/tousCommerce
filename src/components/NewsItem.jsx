import moment from 'moment'
import {useRef, useEffect, useState} from 'react'
import {checkImage} from '../useful'
import img from '../blend.jpg'
function NewsItem({news}) {

  const newUrl = news.url.replace(/https?:\/\/(www.)?/,'').replace(/\/.*/, '');
  const newDate = news.published.replace('0000', '0100').replace(/\-/g, ' ')
  return (
    <article className={`my-8 shadow-lg p-4 md:py-8 shadow-grey`}>
      <img src={news?.image || img} className='hover:border hover:shadow-md border-0 mt-8 w-[100%] max-h-72 md:max-h-[32rem] rounded-lg'/>
      <a href={`/news-list/${news.id}`} className='inline-block text-xl md:text-4xl font-black mb-4 text-h-text-cl md:mb-8 hover:underline'>{news.title}</a>
      <section className='flex text-xs md:mx-auto justify-between gap-4 md:gap-8 md:text-2xl'>
        <a href={news.url} className='hover:underline'>Read full article... </a>
        <span>
          {moment(newDate).fromNow()}
        </span>
      </section>
    </article>
  );
}
export default NewsItem;
