import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./collection.scss";
import CollectionItem from "../../components/collection-item/CollectionItem";
import Error404 from "../../components/error/error-404/Error404";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = () => {
  const collectionId = useParams().collectionId;
  const memoizedSelect = useMemo(
    () => selectCollection(collectionId),
    [collectionId]
  );
  const collection = useSelector((state) => memoizedSelect(state));
  const { title, items } = collection ? collection : { title: "", items: [] };
  if (!title) return <Error404 page={collectionId} />;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default CollectionPage;
