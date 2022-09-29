import { useEffect } from "react";

import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import { useDispatch } from "react-redux";

const ShopPage = () => {
  const dispatch = useDispatch();

  let unsubscritbeFromSnapshot = null;
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    unsubscritbeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const colsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(colsMap));
    });
    //return unsubscritbeFromSnapshot();
  }, []);

  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  );
};

export default ShopPage;
