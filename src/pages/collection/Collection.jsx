import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './collection.scss'
import CollectionItem from '../../components/collection-item/CollectionItem'
import {selectCollection} from '../../redux/shop/shop.selectors'
const CollectionPage = () => {
  const params = useParams()
  const collection = useSelector(state => selectCollection(params.collectionId)(state))

  console.log(collection)
  return (
    <div className='collection-page'>
      <h2>COLLECTION PAGE</h2>
    </div>
  )
}
export default CollectionPage
