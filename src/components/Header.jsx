import img from "../favicon.svg";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { useState, useCallback } from "react";
import NavItems from './NavItems'

function Header() {
  const [isToggle, setToggle] = useState(false);
  const toggle = useCallback(() => setToggle((isToggle) => !isToggle), []);
  return (
    <>
      <header className="flex items-center bg-white sticky md:relative top-0 inset-x-0 justify-between">
        <img src={img} className="w-16" />
        <h2 className='font-special font-bold text-lg md:text-4xl justify-center'>News Feeder</h2>
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
          <h3>PUBLISHED AT</h3>
          <p>31 October 2021</p>
        </div>
      </section>
    </>
  );
}
export default Header;
