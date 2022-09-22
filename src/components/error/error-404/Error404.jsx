import './error-404.scss'

export default function Error404({page}){
  let val = '404 Page Not Found'
  if (page)
    val += `: "/${page}" not valid`

  return (
    <div className='error-page'>{val}</div>
  )
}
