import "./collection-item.scss";
import { useDispatch } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import { cartActions } from "../../redux";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = cartActions;
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(addItem(item))}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
