import "./directory.scss";
import data from "../../data/directory";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/MenuItem";

const Directory = () => {
  const sections = useSelector((state) => selectDirectorySections(state));
  return (
    <div className="directory-menu">
      {sections?.map(({ title, id, imageUrl, size, linkUrl }) => (
        <MenuItem
          title={title}
          key={id}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};

export default Directory;
