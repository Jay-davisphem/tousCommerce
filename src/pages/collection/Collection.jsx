import {useMemo} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './collection.scss'
import CollectionItem from '../../components/collection-item/CollectionItem'
import {selectCollection} from '../../redux/shop/shop.selectors'

const CollectionPage = () => {
  const collectionId = useParams().collectionId
  const memoizedSelect = useMemo(() => selectCollection(collectionId), [collectionId])
  const collection = useSelector(state => memoizedSelect(state))
  console.log(collection)
  return (
    <div className='collection-page'>
      <h2>{collectionId.toUpperCase()}</h2>
    </div>
  )
}
export default CollectionPage
