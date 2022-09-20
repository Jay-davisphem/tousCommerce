import './collection-overview.scss'

import {useSelector} from 'react-redux'
import {shopCollectionsSelector} from '../../redux/shop/shop.selectors'
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

const CollectionOverview = () => {
  const collections = useSelector(state => shopCollectionsSelector(state));
  return (
    <div className='collections-overview'>
      {collections?.map(({ id, ...others }) => (
          <CollectionPreview key={id} {...others} />
        ))}
    </div>
  )
}

export default CollectionOverview
