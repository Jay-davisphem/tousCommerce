import { useParams } from 'react-router-dom'
import img from "../../favicon.svg";
function NewsDetail({news}) {
  let { id } = useParams();
  const sNews = news?.filter((keys) => keys.id === id)[0];
  return (
    <article>
      <figure>
        <img src={sNews?.image || img} className='mt-8 w-full'/>
        <h2 className='bg-white border-none text-3xl text-center md:text-left h-16 md:mt--10'>BREAKING NEWS</h2>
      </figure>
      <article>
        <h1>How to expand your business using social media</h1>
        <div>
          <span>13/01/2026</span>
          <span>more</span>
          <span>more</span>
        </div>
        <p>
          Index routes can be thought of as "default child routes". When a
          parent route has multiple children, but the URL is just at the
          parent's path, you probably want to render something into the outlet.
          Index routes can be thought of as "default child routes". When a
          parent route has multiple children, but the URL is just at the
          parent's path, you probably want to render something into the outlet.
          Index routes can be thought of as "default child routes". When a
          parent route has multiple children, but the URL is just at the
          parent's path, you probably want to render something into the outlet.
          Index routes can be thought of as "default child routes". When a
          parent route has multiple children, but the URL is just at the
          parent's path, you probably want to render something into the outlet.
          Index routes can be thought of as "default child routes". When a
          parent route has multiple children, but the URL is just at the
          parent's path, you probably want to render something into the outlet.
          Index routes can be thought of as "default child routes". When a
          parent route has multiple children, but the URL is just at the
          parent's path, you probably want to render something into the outlet.
          Index routes can be thought of as "default child routes". When a
          parent route has multiple children, but the URL is just at the
          parent's path, you probably want to render something into the outlet.
          Index routes can be thought of as "default child routes". When a
          parent route has multiple children, but the URL is just at the
          parent's path, you probably want to render something into the outlet.
        </p>
      </article>
    </article>
  );
}
export default NewsDetail;
