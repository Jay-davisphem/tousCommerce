import img from "../favicon.svg";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { useState, useCallback, useEffect } from "react";
import NavItems from './NavItems'
import moment from 'moment'
function Header() {
  const [isToggle, setToggle] = useState(false);
  const toggle = useCallback(() => setToggle((isToggle) => !isToggle), []);
  const [date, setDate] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'))
  useEffect(() => {
  const interval = setInterval(() => {
    setDate(moment().format('MMMM Do YYYY, h:mm:ss a'))
  }, 1000);
  return () => clearInterval(interval);
}, []);
  return (
    <>
      <header className="flex items-center bg-white sticky md:relative top-0 inset-x-0 justify-between">
        <img src={img} className="w-16" />
        <h2 className='font-special font-bold text-lg md:text-4xl justify-center'><a href='/'>News Feeder</a></h2>
        <div>
          {isToggle ? (
            <AiOutlineMenuUnfold
              className="block md:hidden"
              onClick={toggle}
              id="menu-button"
              aria-expanded="false"
              aria-haspopup="false"
              size="3.5em"
            />
          ) : (
            <AiOutlineMenuFold
              className="block md:hidden"
              onClick={toggle}
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              size="3.5em"
            />
          )}
        </div>
        <NavItems isToggle={isToggle} />
      </header>
      <section className='px-auto'>
        <div className='text-right'>
          <h3>CURATED AT</h3>
          <p>{date}</p>
        </div>
      </section>
    </>
  );
}
export default Header;
