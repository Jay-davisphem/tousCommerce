import { useEffect, useState } from "react";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import { useDispatch, useSelector } from "react-redux";
import WithSpinner from "../../components/with-spinner/WithSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

const ShopPage = () => {
  const dispatch = useDispatch();
  const isCollectionFetching = useSelector((state) =>
    selectIsCollectionFetching(state)
  );
  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, []);

  return (
    <div className="shop-page">
      <CollectionOverviewWithSpinner isLoading={isCollectionFetching} />
    </div>
  );
};

export default ShopPage;
