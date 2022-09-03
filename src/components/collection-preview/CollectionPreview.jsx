import CollectionItem from '../collection-item/CollectionItem'
import './collection-preview.scss'

const CollectionPreview = ({title, items}) =>{
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
          {
            items.slice(0, 4).map(({id, ...others}) => (
              <CollectionItem key={id} {...others}/>
            ))
          }
        </div>
    </div>
  )
}
export default CollectionPreview;
