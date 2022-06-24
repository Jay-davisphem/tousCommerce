import {FcNews, FcAbout} from 'react-icons/fc'
import {TbArrowsJoin2} from 'react-icons/tb'
function NavItems({isToggle}){
  return (<>
    <nav className={`${isToggle ? "md:hidden block absolute bg-white border border-t-0 shadow-md shadow-grey top-16 w-[100%] p-4" : "hidden"}`}>
            <ul className={`${isToggle ? "block" : "flex gap-32"}`}>
              <li className='my-4'>
                <a href="/"><FcNews className='inline-block mr-4' size='2em'/>Latest News</a>
              </li>
              <li className='my-4'>
                <a href="https://github.com/jay-davisphem"><FcAbout className='inline-block mr-4'size='2em'/>About</a>
              </li>
              <li className='my-4'>
                <span className='cursor-pointer' onClick={() => alert('good boy')}><TbArrowsJoin2 className='inline-block mr-4' size='2em'/>Join Us</span>
              </li>
            </ul>
          </nav>
          <nav className="hidden md:block">
            <ul className='flex gap-16'>
              <li className='my-4'>
                <a href="/"><FcNews className='inline-block mr-4' size='2em'/>Latest News</a>
              </li>
              <li className='my-4'>
                <a href="https://github.com/jay-davisphem"><FcAbout className='inline-block mr-4'size='2em'/>About</a>
              </li>
              <li className='my-4'>
                <span className='cursor-pointer' onClick={() => alert('good boy')}><TbArrowsJoin2 className='inline-block mr-4' size='2em'/>Join Us</span>
              </li>
            </ul>
          </nav></>
  )
}
export default NavItems
