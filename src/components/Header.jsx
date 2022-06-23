import img from '../favicon.svg'
function Header() {
  return (
    <>
    <header>
      <img src={img} />
      <nav>
        <ul>
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
    <section>
              <a href="https://newsfeeder.vercel.app">
                https://newsfeeder.vercel.app
              </a>
            </section>
              <section>
              <h2>NEWS FEEDER</h2>
              <div>
                <h3>PUBLISHED AT</h3>
                <p>31 October 2021</p>
              </div>
            </section>
    </>
  );
}
export default Header;
