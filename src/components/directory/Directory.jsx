import "./directory.scss";
import data from "../../data/directory";
import { useState, useEffect } from "react";

import MenuItem from "../menu-item/MenuItem";

const Directory = () => {
  const [sections, setSections] = useState(data);
  return (
    <div className="directory-menu">
      {sections.map(({ title, id, imageUrl, size }) => (
        <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
