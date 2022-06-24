import { useParams } from 'react-router-dom'
import moment from 'moment'
import img from "../../favicon.svg";
function NewsDetail({news}) {
  let { id } = useParams();
  const sNews = news?.filter((keys) => keys.id === id)[0];
  const newDate = sNews?.published.replace('0000', '0100').replace(/\-/g,' ')  
  const newUrl = sNews?.url.replace(/https?:\/\/(www.)?/,'').replace(/\/.*/, '');  
  return (
    <article>
      <figure>
        <img src={sNews?.image && sNews?.image || img} className='mt-8 w-full'/>
      </figure>
      <article>
        <h1 className='text-3xl md:text-5xl text-center font-bold my-8'>{sNews?.title}</h1>
        <div>
          <span className='text-right text-2xl md:text-3xl font-light'><h3>{moment(newDate).fromNow()}</h3></span>
          <section className='flex wrap justify-around my-8'>
            {sNews?.category?.map((cat, ind) => <span className='border p-2 hover:border-none cursor-pointer'key={ind}>{cat}</span>)}
          </section>
        </div>
        <p className='text-xl p-4 border rounded-lg shadow-lg'>
          {sNews?.description}
        </p>
      </article>
      <section className='my-8 text-center'>
        <a href={sNews?.url}>To read more continue on <span>{newUrl}</span></a>
      </section>
    </article>
  );
}
export default NewsDetail;
