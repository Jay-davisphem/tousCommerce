import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import moment from 'moment'
import img from "../../blend.jpg";
import {checkImage} from '../../useful'
function NewsDetail({news}) {
  let { id } = useParams();
  const sNews = news?.filter((keys) => keys.id === id)[0];
  const [sImg, setSimage] =useState(null)
  const newDate = sNews?.published.replace('0000', '0100').replace(/\-/g,' ')  
  const newUrl = sNews?.url.replace(/https?:\/\/(www.)?/,'').replace(/\/.*/, '');  
  useEffect(() => {
    const val = sNews?.image;
    setSimage((val && val != 'None' && val !== null && checkImage(val))? val: null)
  }, [sImg])
  return (
    <article>
      <figure className='border-0'>
        <img src={checkImage(sNews?.image) || img} className='border-0 mt-8 w-full max-h-72 rounded-lg'/>
      </figure>
      <article>
        <h1 className='text-xl md:text-4xl text-center font-bold my-8'>{sNews?.title}</h1>
        <div>
          <span className='text-right text-2xl md:text-3xl font-light'><h3>{moment(newDate).fromNow()}</h3></span>
          <section className='flex wrap justify-around my-8'>
            {sNews?.category?.map((cat, ind) => <span className='border p-2 hover:border-none cursor-pointer'key={ind}>{cat}</span>)}
          </section>
        </div>
        <p className='text-xl md:text-3xl font-light leading-relaxed p-0'>
          {sNews?.description}
        </p>
      </article>
      <section className='my-8 text-center'>
        <a href={sNews?.url}>Click to read more</a>
      </section>
    </article>
  );
}
export default NewsDetail;
