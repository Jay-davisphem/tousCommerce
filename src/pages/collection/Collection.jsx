import { useParams } from 'react-router-dom'
import './collection.scss'

import CollectionItem from '../../components/collection-item/CollectionItem'

const CollectionPage = () => {
  const params = useParams()
  console.log(params)
  return (
    <div className='collection-page'>
      <h2>COLLECTION PAGE</h2>
    </div>
  )
}
export default CollectionPage
