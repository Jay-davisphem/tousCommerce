import { useEffect, useState } from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

import SHOP_DATA from "./shop.data";

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...others }) => (
        <CollectionPreview key={id} {...others} />
      ))}
    </div>
  );
};

export default ShopPage;
