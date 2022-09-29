import { useEffect, useState } from "react";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import { useDispatch } from "react-redux";
import WithSpinner from "../../components/with-spinner/WithSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

const ShopPage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  let unsubscritbeFromSnapshot = null;
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    unsubscritbeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const colsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(colsMap));
      setIsLoading(false);
    });
    //return unsubscritbeFromSnapshot();
  }, []);

  return (
    <div className="shop-page">
      <CollectionOverviewWithSpinner isLoading={isLoading} />
    </div>
  );
};

export default ShopPage;
