import { useEffect, useState } from "react";
import {useSelector} from 'react-redux'
import {shopCollectionsSelector} from '../../redux/shop/shop.selectors'
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

const ShopPage = () => {
  const collections = useSelector(state => shopCollectionsSelector(state));
  return (
    <div className="shop-page">
      {collections?.map(({ id, ...others }) => (
        <CollectionPreview key={id} {...others} />
      ))}
    </div>
  );
};

export default ShopPage;
