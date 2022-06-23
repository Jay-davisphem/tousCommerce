import img from "../favicon.svg";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { useState, useCallback } from "react";
function Header() {
  const [isToggle, setToggle] = useState(false);
  const toggle = useCallback(() => setToggle((isToggle) => !isToggle), []);
  return (
    <>
      <header className="flex items-center justify-between">
        <img src={img} className="w-16" />
        <h2 className='font-special font-bold text-4xl justify-center'>NEWS FEEDER</h2>
        <div>
          {isToggle ? (
            <AiOutlineMenuUnfold
              className="block md:hidden sticky"
              onClick={toggle}
              id="menu-button"
              aria-expanded="false"
              aria-haspopup="false"
              size="3.5em"
            />
          ) : (
            <AiOutlineMenuFold
              className="block md:hidden sticky"
              onClick={toggle}
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              size="3.5em"
            />
          )}
        </div>
        <nav className={`${isToggle ? "block absolute" : "hidden"} md:block`}>
          <ul className={`${isToggle ? "block" : "flex gap-32"}`}>
            <li>
              <a href="#">Latest News</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Join Us</a>
            </li>
          </ul>
        </nav>
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
