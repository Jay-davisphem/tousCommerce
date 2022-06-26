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
        <img src={sNews?.image || img} className='hover:border hover:shadow-md border-0 mt-8 w-[100%] max-h-72 md:max-h-[32rem] rounded-lg'/>
      </figure>
      <article>
        <h1 className='text-xl text-h-txt-cl md:text-4xl text-center font-bold my-8'>{sNews?.title}</h1>
        <div>
          <span className='text-right text-2xl md:text-3xl font-light'><h3>{moment(newDate).fromNow()}</h3></span>
          <section className='flex wrap gap-4 place-center my-8'>
            <span className='p-2'>Tags:</span>  
            {'   '}{sNews?.category?.map((cat, ind) => <span className='border p-2 hover:opacity-75 hover:bg-white cursor-pointer'key={ind}>{cat}</span>)}
          </section>
        </div>
        <p className='text-xl md:text-3xl font-light leading-loose p-2'>
          {sNews?.description}
        </p>
      </article>
      <section className='mb-8 text-center mt-32'>
        <a href={sNews?.url} className='border-2 py-4 px-16 md:px-32 rounded-lg md:py-8 text-lg md:text-2xl hover:bg-h-txt-cl hover:text-bg-cl'>Click to read more</a>
      </section>
    </article>
  );
}
export default NewsDetail;
