import {FcNews, FcAbout} from 'react-icons/fc'
import {TbArrowsJoin2} from 'react-icons/tb'
function NavItems({isToggle}){
  return (<>
    <nav className={`${isToggle ? "md:hidden block absolute  border border-t-0 shadow-md bg-[#E9FFF9] shadow-grey top-14 w-[100%] p-4" : "hidden"}`}>
            <ul className={`${isToggle ? "block" : "flex gap-32"}`}>
              <li className='my-4'>
                <a href="/" className='hover:underline'><FcNews className='inline-block mr-4' size='2em'/>Latest News</a>
              </li>
              <li className='my-4'>
                <a href="https://github.com/jay-davisphem" className='hover:underline'><FcAbout className='inline-block mr-4'size='2em'/>About</a>
              </li>
              <li className='my-4'>
                <span className='block mr-4 hover:underline cursor-pointer' onClick={() => alert('good boy')}><TbArrowsJoin2  className='inline-block mr-4'size='2em'/>Join Us</span>
              </li>
            </ul>
          </nav>
          <nav className="hidden md:block">
            <ul className='flex gap-16'>
              <li className='my-4'>
                <a href="/" className='hover:underline'><FcNews className='inline-block mr-4' size='2em'/>Latest News</a>
              </li>
              <li className='my-4'>
                <a href="https://github.com/jay-davisphem" className='hover:underline'><FcAbout className='inline-block mr-4'size='2em'/>About</a>
              </li>
              <li className='my-4'>
                <span  onClick={() => alert('good boy')} className='hover:underline cursor-pointer'><TbArrowsJoin2 className='cursor-pointer inline-block mr-4' size='2em'/>Join Us</span>
              </li>
            </ul>
          </nav></>
  )
}
export default NavItems
