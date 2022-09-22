import CollectionOverview from '../../components/collection-overview/CollectionOverview'

const ShopPage = () => {
  console.log(location, 'my history')
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  );
};

export default ShopPage;
