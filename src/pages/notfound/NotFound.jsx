import {FaSadCry} from 'react-icons/fa'

function NotFound() {
  return (
    <section className='text-center p-8 flex-col place-items-center my-16 md:my-32'>
      <FaSadCry className='self-center ml-[20%] md:ml-[45%]' size='10em'/>
      <h1 className='text-5xl my-16'>
        419 <br /> Not Found
      </h1>
    </section>
  );
}
export default NotFound;
