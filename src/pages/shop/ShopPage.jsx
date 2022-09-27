import {useEffect} from 'react'

import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
const ShopPage = () => {
  const unsubscritbeFromSnapshot = null
  useEffect(() => {
    const collectionRef = firestore.collection('collections')


    collectionRef.onSnapshot(async snapshot => {
      const convertCollectionsSnapshotToMap(snapshot)
    })
  }, [])

  console.log(location, "my history");
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  );
};

export default ShopPage;
